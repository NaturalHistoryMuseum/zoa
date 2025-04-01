<template>
  <div
    :class="[$style.inputWrapper, disabled ? $style.disabled : '']"
    :aria-labelledby="labelId"
    :aria-describedby="helpId"
  >
    <input
      :id="inputId"
      ref="displayBox"
      type="text"
      :placeholder="placeholder"
      :class="[$style.input, editing ? $style.editing : '']"
      :disabled="disabled"
      @input="parseInput"
    />
    <div v-if="focused && !disabled" :class="$style.datePopup">
      <div v-if="guessedDates.length > 0" :class="$style.popupSection">
        <span
          v-for="dt in guessedDates"
          :class="$style.suggestion"
          tabindex="0"
          @click="setDate(dt)"
          @keydown.enter="setDate(dt)"
          >{{ formatDate(dt.year, dt.month, dt.day) }}</span
        >
      </div>
      <div :class="$style.popupSection">
        <zoa-input label="year" :grid-class="$style.yearParts">
          <zoa-input
            ref="yrM"
            v-model="yearParts.millenium"
            zoa-type="number"
            label="millenium"
            label-position="none"
            :config="{ placeholder: 0, min: 0, max: 9 }"
          />
          <zoa-input
            ref="yrC"
            v-model="yearParts.century"
            zoa-type="number"
            label="century"
            label-position="none"
            :config="{ placeholder: 0, min: 0, max: 9 }"
          />
          <zoa-input
            ref="yrD"
            v-model="yearParts.decade"
            zoa-type="number"
            label="decade"
            label-position="none"
            :config="{ placeholder: 0, min: 0, max: 9 }"
          />
          <zoa-input
            ref="yrY"
            v-model="yearParts.year"
            zoa-type="number"
            label="year"
            label-position="none"
            :config="{ placeholder: 0, min: 0, max: 9 }"
          />
        </zoa-input>
        <div ref="yearBtns" :class="$style.yearGrid" tabindex="0">
          <zoa-button
            v-for="opt in yearOptions"
            size="sm"
            tabindex="-1"
            @click="setYear(opt)"
            >{{ formatYear(opt) }}
          </zoa-button>
        </div>
      </div>
      <div :class="$style.popupSection">
        <zoa-input
          v-model="month"
          zoa-type="number"
          label="month"
          :config="{ placeholder: 1, min: 1, max: 12 }"
        />
        <div ref="monthBtns" :class="$style.monthGrid" tabindex="0">
          <zoa-button
            v-for="opt in monthOptions"
            size="sm"
            tabindex="-1"
            @click="month = opt[1]"
            >{{ opt[0] }}
          </zoa-button>
        </div>
      </div>
      <div :class="$style.popupSection">
        <zoa-input
          v-model="day"
          zoa-type="number"
          label="day"
          :config="{ placeholder: 1, min: 1, max: monthDays }"
        />
        <div ref="dayBtns" :class="$style.dayGrid" tabindex="0">
          <zoa-button
            v-for="opt in dayOptions"
            size="sm"
            tabindex="-1"
            @click="day = opt"
          >
            {{ opt || 'clear' }}
          </zoa-button>
        </div>
      </div>
      <div :class="$style.popupSection">
        <small :class="$style.dateRange">
          {{ returnDate.earliest }} to {{ returnDate.latest }}
        </small>
      </div>
    </div>
  </div>
</template>

<script setup>
import { onKeyStroke, useFocus, useFocusWithin } from '@vueuse/core';
import datenames from 'date-names';
import { debounce } from 'dettle';
import { computed, inject, ref, watch, watchEffect } from 'vue';
import { ZoaButton, ZoaInput } from '../../index.js';
import { useChangeEmits } from '../common.js';

const dateUtils = () => import('../../utils/dates.js');

const props = defineProps({
  /**
   * @model
   */
  modelValue: {
    type: Object,
  },
  /**
   * Debounce delay for the `change` event, in ms.
   */
  delay: {
    type: Number,
    default: 200,
  },
  /**
   * Text to display in the blank input.
   */
  placeholder: {
    type: String,
    default: null,
  },
  /**
   * The earliest accepted date, in yyyy-mm-dd format (or 'today').
   */
  min: {
    type: String,
    default: '1582-01-01',
  },
  /**
   * The latest accepted date, in yyyy-mm-dd format (or 'today').
   */
  max: {
    type: String,
    default: 'today',
  },
});

const inputId = inject('inputId');
const labelId = inject('labelId');
const helpId = inject('helpId');
const disabled = inject('disabled');

const emit = defineEmits([
  /**
   * Emitted when the value changes; debounced if the delay prop is > 0.
   * @arg {object} newValue the new value
   */
  'change',
  /**
   * @ignore
   */
  'update:modelValue',
]);
const { valueChanged } = useChangeEmits(emit, props.delay);

// PROP PROCESSING
const minDate = computed(() => {
  let _minDate;
  try {
    _minDate = new Date(
      props.min === 'today'
        ? Date.now()
        : Date.parse(props.min || '0000-01-01'),
    );
  } catch {
    _minDate = new Date(0, 0, 1);
  }
  return {
    year: _minDate.getUTCFullYear(),
    month: _minDate.getUTCMonth() + 1,
    day: _minDate.getUTCDate(),
    date: _minDate,
  };
});
const maxDate = computed(() => {
  let _maxDate;
  try {
    _maxDate = new Date(
      props.max === 'today'
        ? Date.now()
        : Date.parse(props.max || '9999-12-31'),
    );
  } catch {
    _maxDate = new Date(9999, 11, 31);
  }
  return {
    year: _maxDate.getUTCFullYear(),
    month: _maxDate.getUTCMonth() + 1,
    day: _maxDate.getUTCDate(),
    date: _maxDate,
  };
});

// ELEMENTS
const displayBox = ref(null);
const rootContainer = inject('rootContainer');
const yearBtns = ref(null);
const monthBtns = ref(null);
const dayBtns = ref(null);
const yrM = ref(null);
const yrC = ref(null);
const yrD = ref(null);
const yrY = ref(null);

// STATE
const editing = ref(false);
const { focused } = useFocusWithin(rootContainer);

// EXPOSE
defineExpose({
  target: displayBox,
});

// YEAR/MONTH/DAY BUTTONS
const yearBtnsFocus = useFocus(yearBtns);
const yearBtnsFocusWithin = useFocusWithin(yearBtns);
const monthBtnsFocus = useFocus(monthBtns);
const monthBtnsFocusWithin = useFocusWithin(monthBtns);
const dayBtnsFocus = useFocus(dayBtns);
const dayBtnsFocusWithin = useFocusWithin(dayBtns);

const focusedContainer = computed(() => {
  let buttonContainer;
  if (yearBtnsFocus.focused.value) {
    buttonContainer = yearBtns.value;
  } else if (monthBtnsFocus.focused.value) {
    buttonContainer = monthBtns.value;
  } else if (dayBtnsFocus.focused.value) {
    buttonContainer = dayBtns.value;
  }
  return buttonContainer;
});

const focusedButtons = computed(() => {
  let buttonContainer;
  if (yearBtnsFocusWithin.focused.value) {
    buttonContainer = yearBtns.value;
  } else if (monthBtnsFocusWithin.focused.value) {
    buttonContainer = monthBtns.value;
  } else if (dayBtnsFocusWithin.focused.value) {
    buttonContainer = dayBtns.value;
  }
  return buttonContainer;
});

// KEYBINDINGS
onKeyStroke('Enter', () => {
  if (!focusedContainer.value) {
    return;
  }
  focusedContainer.value.children[0].focus();
});

onKeyStroke('ArrowLeft', () => {
  if (!focusedButtons.value) {
    return;
  }
  const selectedElement = focusedButtons.value.querySelector('button:focus');
  if (!selectedElement || !selectedElement.previousElementSibling) {
    focusedButtons.value.children[
      focusedButtons.value.children.length - 1
    ].focus();
  } else {
    selectedElement.previousElementSibling.focus();
  }
});

onKeyStroke('ArrowRight', () => {
  if (!focusedButtons.value) {
    return;
  }
  const selectedElement = focusedButtons.value.querySelector('button:focus');
  if (!selectedElement || !selectedElement.nextElementSibling) {
    focusedButtons.value.children[0].focus();
  } else {
    selectedElement.nextElementSibling.focus();
  }
});

onKeyStroke('Escape', () => {
  const selectedElement = rootContainer.value.querySelector('*:focus');
  if (selectedElement) {
    selectedElement.blur();
  }
});

// add keyup event listeners to the year boxes to auto move to next/prev
function addListener(boxRef, nextBoxRef, prevBoxRef) {
  if (boxRef.value) {
    boxRef.value.target.onkeyup = (e) => {
      if (/^[0-9]$/.test(e.key) && nextBoxRef) {
        nextBoxRef.value.focus();
      } else if (e.key === 'Backspace' && prevBoxRef) {
        prevBoxRef.value.focus();
      }
    };
  }
}
watchEffect(() => {
  addListener(yrM, yrC, null);
  addListener(yrC, yrD, yrM);
  addListener(yrD, yrY, yrC);
  addListener(yrY, null, yrD);
});

// THE MAIN DATE
const returnDate = computed(() => {
  return {
    year: year.value,
    month: month.value,
    day: day.value,
    earliest: `${currentRange.value.lower.year
      .toString()
      .padStart(4, '0')}-${currentRange.value.lower.month
      .toString()
      .padStart(2, '0')}-${currentRange.value.lower.day
      .toString()
      .padStart(2, '0')}`,
    latest: `${currentRange.value.upper.year
      .toString()
      .padStart(4, '0')}-${currentRange.value.upper.month
      .toString()
      .padStart(2, '0')}-${currentRange.value.upper.day
      .toString()
      .padStart(2, '0')}`,
  };
});

const displayDate = computed(() => {
  return formatDate(
    returnDate.value.year,
    returnDate.value.month,
    returnDate.value.day,
  );
});

const currentRange = computed(() => {
  let lowerYear;
  let upperYear;
  if (!yearDefined.value) {
    lowerYear = minDate.value.year;
    upperYear = maxDate.value.year;
  } else {
    let digits =
      Math.max(
        ..._yearPartKeys.map((k, ix) => {
          return isNaN(parseInt(yearParts.value[k])) ? -1 : ix;
        }),
      ) + 1;
    const scale = 10 ** (4 - digits);
    const currentYear = getPartialYear(yearParts.value, 4);
    const minYear = Math.floor(minDate.value.year / scale) * scale;
    const maxYear = Math.floor(maxDate.value.year / scale) * scale;

    if (currentYear < minYear || currentYear > maxYear) {
      lowerYear = minDate.value.year;
      upperYear = maxDate.value.year;
    } else if (currentYear === minYear) {
      lowerYear = minDate.value.year;
      upperYear = currentYear + scale - 1;
    } else if (currentYear === maxYear) {
      lowerYear = currentYear;
      upperYear = maxDate.value.year;
    } else {
      lowerYear = currentYear;
      upperYear = currentYear + scale - 1;
    }
  }

  const isMinYear = lowerYear === minDate.value.year;
  const isMaxYear = upperYear === maxDate.value.year;
  const lowerMonth = isMinYear
    ? Math.max(minDate.value.month, _month.value || 1)
    : _month.value || 1;
  const upperMonth = isMaxYear
    ? Math.min(maxDate.value.month, _month.value || 12)
    : _month.value || 12;
  const isMinMonth = lowerMonth === minDate.value.month;
  const isMaxMonth = upperMonth === maxDate.value.month;

  let lowerDay = _day.value || 1;
  let upperDay = _day.value || getMonthDays(upperMonth);
  lowerDay =
    isMinYear && isMinMonth ? Math.max(lowerDay, minDate.value.day) : lowerDay;
  upperDay =
    isMaxYear && isMaxMonth ? Math.min(upperDay, maxDate.value.day) : upperDay;
  if (lowerYear === upperYear && lowerMonth === upperMonth) {
    if (isMaxYear && isMaxMonth && lowerDay > upperDay) {
      lowerDay = 1;
    }
    if (isMinYear && isMinMonth && upperDay < lowerDay) {
      upperDay = getMonthDays(upperMonth);
    }
  }

  return {
    lower: {
      year: lowerYear,
      month: lowerMonth,
      day: lowerDay,
      isMinYear,
      isMinMonth,
    },
    upper: {
      year: upperYear,
      month: upperMonth,
      day: upperDay,
      isMaxYear,
      isMaxMonth,
    },
  };
});

function validate(y, m, d) {
  const nullYear = isNaN(parseInt(y));
  const nullMonth = isNaN(parseInt(m));
  const nullDay = isNaN(parseInt(d));
  const basicValidMonth = nullMonth || (m <= 12 && m >= 1);
  const basicValidDay = nullDay || d <= getMonthDays(m);

  if (
    nullYear ||
    (y > currentRange.value.lower.year && y < currentRange.value.upper.year)
  ) {
    return {
      year: true,
      month: basicValidMonth,
      day: basicValidDay,
    };
  }
  if (y < currentRange.value.lower.year || y > currentRange.value.upper.year) {
    return {
      year: false,
      month: basicValidMonth,
      day: basicValidDay,
    };
  }

  let validMonth = basicValidMonth;
  let validDay = basicValidDay;
  if (y === currentRange.value.lower.year) {
    validMonth =
      validMonth && (nullMonth || m >= currentRange.value.lower.month);
    if (m === currentRange.value.lower.month) {
      validDay = validDay && (nullDay || d >= currentRange.value.lower.day);
    }
  }
  if (y === currentRange.value.upper.year) {
    validMonth =
      validMonth && (nullMonth || m <= currentRange.value.upper.month);
    if (m === currentRange.value.upper.month) {
      validDay = validDay && (nullDay || d <= currentRange.value.upper.day);
    }
  }
  return {
    year: true,
    month: validMonth,
    day: validDay,
  };
}

function refreshDisplay() {
  displayBox.value.value = displayDate.value;
  editing.value = false;
}

// PARSING WRITTEN DATES
const guessedDates = ref([]);

function _parseInput(event) {
  editing.value = true;
  dateUtils().then((du) => {
    guessedDates.value = du.parseDate(event.target.value);
  });
}

const parseInput = debounce(_parseInput, 200);

function setDate(date) {
  yearParts.value = yearToParts(date.year);
  month.value = date.month;
  day.value = date.day;
  guessedDates.value = [];
}

// YEAR
const year = computed(() => {
  if (!yearDefined.value) {
    return null;
  }
  const yr = getPartialYear(yearParts.value, 4);
  const validated = validate(yr, month.value, day.value);
  if (!validated.year) {
    return null;
  }
  return yr;
});

const yearParts = ref({
  millenium: null,
  century: null,
  decade: null,
  year: null,
});
// the keys *should* stay in the correct order, but just in case
const _yearPartKeys = ['millenium', 'century', 'decade', 'year'];

const yearDefined = computed(() => {
  return Object.values(yearParts.value).some((x) => !isNaN(parseInt(x)));
});

const yearOptions = computed(() => {
  const lowerYear = yearToParts(currentRange.value.lower.year);
  const clear = {
    millenium: null,
    century: null,
    decade: null,
    year: null,
  };
  if (
    minDate.value.year === maxDate.value.year &&
    isNaN(parseInt(yearParts.value.year))
  ) {
    return [lowerYear];
  } else if (currentRange.value.lower.year === currentRange.value.upper.year) {
    return [clear];
  }
  const upperYear = yearToParts(currentRange.value.upper.year);

  let keyIx;
  let base = { ...clear };
  if (!yearDefined.value) {
    // if all year parts empty, find where min/max first differ
    for (let i = 0; i < _yearPartKeys.length; i++) {
      let k = _yearPartKeys[i];
      if (lowerYear[k] === upperYear[k]) {
        base[k] = lowerYear[k];
      } else if (keyIx == null) {
        keyIx = i;
        break;
      }
    }
  } else {
    // otherwise find the last defined part and add one
    keyIx =
      Math.max(
        ..._yearPartKeys.map((k, ix) => {
          base[k] = yearParts.value[k];
          return isNaN(parseInt(yearParts.value[k])) ? -1 : ix;
        }),
      ) + 1;
  }

  function getOptsForYearPart(yearPartIx) {
    let key = _yearPartKeys[yearPartIx];
    const lowerBound = getPartialYear(lowerYear, yearPartIx + 1);
    const upperBound = getPartialYear(upperYear, yearPartIx + 1);

    return Array(10)
      .fill(0)
      .map((i, ix) => {
        let opt = { ...base };
        opt[key] = i + ix;
        return opt;
      })
      .filter((opt) => {
        const partialYear = getPartialYear(opt, yearPartIx + 1);
        return partialYear >= lowerBound && partialYear <= upperBound;
      });
  }

  let yearOpts = getOptsForYearPart(keyIx);
  if (yearOpts.length === 1 && keyIx < 3) {
    // skip this level if there's only one option
    base = { ...yearOpts[0] };
    yearOpts = getOptsForYearPart(keyIx + 1);
  }
  if (yearDefined.value) {
    yearOpts.push(clear);
  }
  return yearOpts;
});

const leapYear = computed(() => {
  // in the gregorian calendar, assuming that most/all dates are going to be
  // post 1582 and probably UK-based
  if (year.value % 100 === 0) {
    return year.value % 400 === 0;
  }
  return year.value % 4 === 0;
});

function formatYear(yrParts) {
  if (Object.values(yrParts).every((p) => p == null)) {
    return 'clear';
  }
  return _yearPartKeys
    .map((x) => {
      return yrParts[x] || 0;
    })
    .join('');
}

function getPartialYear(yrParts, digitCount) {
  return _yearPartKeys.slice(0, digitCount).reduce((p, c, ix) => {
    let v = yrParts[c] || 0;
    return p + v * 10 ** (3 - ix);
  }, 0);
}

function yearToParts(yr) {
  return {
    millenium: Math.floor(yr / 1000),
    century: Math.floor((yr % 1000) / 100),
    decade: Math.floor((yr % 100) / 10),
    year: Math.floor(yr % 10),
  };
}

function setYear(opt) {
  yearParts.value = opt;
  const lastDefined = Math.max(
    ..._yearPartKeys.map((k, ix) =>
      isNaN(parseInt(yearParts.value[k])) ? -1 : ix,
    ),
  );
  if (lastDefined === 3) {
    let valid = validate(year.value, month.value, day.value);
    if (!valid.month || !valid.day) {
      month.value = null;
      day.value = null;
    }
  }
}

// MONTH
const _month = ref(null);
const month = computed({
  get() {
    const valid = validate(year.value, _month.value, day.value);
    return valid.month ? _month.value : null;
  },
  set(v) {
    _month.value = isNaN(parseInt(v)) ? null : v;
    if (day.value && day.value > monthDays.value) {
      day.value = monthDays.value;
    }
  },
});

const monthOptions = computed(() => {
  let options = datenames.abbreviated_months.map((m, ix) => [m, ix + 1]);
  const yr = year.value
    ? year.value
    : minDate.value.year === maxDate.value.year
      ? minDate.value.year
      : null;
  if (yr === minDate.value.year) {
    options = options.slice(minDate.value.month - 1, options.length);
  }
  if (yr === maxDate.value.year) {
    const rem = 12 - options.length;
    options = options.slice(0, maxDate.value.month - rem);
  }
  if (_month.value) {
    options.push(['clear', null]);
  }
  return options;
});

const monthDays = computed(() => {
  return getMonthDays(month.value);
});

function getMonthDays(monthIx1) {
  // monthIx1 is 1-based index of month, i.e. jan is 1 and dec is 12
  const thirty = [4, 6, 9, 11];
  if (thirty.includes(monthIx1)) {
    return 30;
  }
  if (monthIx1 === 2) {
    return leapYear.value ? 29 : 28;
  }
  return 31;
}

// DAY
const _day = ref(null);
const day = computed({
  get() {
    const valid = validate(year.value, _month.value, _day.value);
    return valid.month && valid.day ? _day.value : null;
  },
  set(v) {
    _day.value = isNaN(parseInt(v)) ? null : v;
  },
});

const dayOptions = computed(() => {
  const yr = year.value
    ? year.value
    : minDate.value.year === maxDate.value.year
      ? minDate.value.year
      : null;
  const mnth = month.value
    ? month.value
    : minDate.value.year === maxDate.value.year &&
        minDate.value.month === maxDate.value.month
      ? minDate.value.month
      : null;
  const mnthDays = getMonthDays(mnth);

  let options = Array(mnthDays)
    .fill(1)
    .map((_, ix) => ix + 1);

  if (
    yr === minDate.value.year &&
    !isNaN(parseInt(mnth)) &&
    mnth <= minDate.value.month
  ) {
    options = options.slice(minDate.value.day - 1);
  }
  if (
    yr === maxDate.value.year &&
    !isNaN(parseInt(mnth)) &&
    mnth >= maxDate.value.month
  ) {
    const rem = mnthDays - options.length;
    options = options.slice(0, maxDate.value.day - rem);
  }
  if (_day.value) {
    options.push(null);
  }
  return options;
});

// UTILS
function formatDate(y, m, d) {
  const mName = datenames.abbreviated_months[m - 1];

  if (y && m && d) {
    return `${d} ${mName} ${y}`;
  }
  if (y && m) {
    return `${mName} ${y}`;
  }
  if (y && d) {
    return `${d} ??? ${y}`;
  }
  if (m && d) {
    return `${d} ${mName}`;
  }
  if (y) {
    return y;
  }
  if (m) {
    return mName;
  }
  if (d) {
    return `day ${d}`;
  }
  return null;
}

// this has to go at the end; refreshes the display in the box when the main date changes
watch(returnDate, () => {
  refreshDisplay();
  valueChanged(returnDate.value);
});
</script>

<style module lang="scss">
@use '../inputs';
@use '../../../styles/palette';
@use '../../../styles/vars';

.inputWrapper {
  position: relative;
  &.disabled {
    @include inputs.disabled;
  }
}

.datePopup {
  position: absolute;
  min-width: 250px;
  max-width: 380px;
  background: white;
  border: 1px solid palette.$grey;
  border-radius: vars.$rounding;
  top: 100%;
  left: 0;
  margin-top: vars.$v-pad;
  padding: vars.$padding;
  z-index: 9999;
}

.popupSection {
  display: grid;
  align-items: start;
  gap: 1em 2em;
  padding: vars.$v-pad vars.$h-pad 1em;

  &:not(:last-child) {
    border-bottom: 1px solid palette.$grey;
  }
}

.yearGrid {
  display: flex;
  flex-wrap: wrap;
  gap: 5px;
}

.monthGrid {
  display: flex;
  flex-wrap: wrap;
  gap: 5px;
}

.dayGrid {
  display: flex;
  flex-wrap: wrap;
  gap: 5px;
}

.editing {
  font-style: italic;
  color: #444;
}

.suggestion {
  cursor: pointer;
  text-decoration: underline;
}

.dateRange {
  width: 100%;
  text-align: center;
}

.yearParts {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 5px;

  // thanks w3 schools
  input::-webkit-outer-spin-button,
  input::-webkit-inner-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }

  input[type='number'] {
    -moz-appearance: textfield;
  }
}

.input {
}
</style>
