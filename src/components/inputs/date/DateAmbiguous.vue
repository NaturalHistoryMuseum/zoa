<template>
  <div
    :class="[$style.grid, $style[`grid--${labelPosition}`]]"
    :id="componentId"
    ref="container"
  >
    <label
      :for="subId('date')"
      v-if="label && labelPosition !== 'none'"
      :class="[$style.label, $style[`label--${labelPosition}`]]"
    >
      {{ label }}
    </label>
    <div :class="$style.inputContainer">
      <input
        type="text"
        :placeholder="placeholder"
        :id="subId('date')"
        :class="[$style.input, editing ? $style.editing : '']"
        ref="displayBox"
        @input="parseInput"
      />
      <div v-if="focused" :class="$style.datePopup">
        <div :class="$style.popupSection" v-if="guessedDates.length > 0">
          <span
            v-for="dt in guessedDates"
            @click="setDate(dt)"
            @keydown.enter="setDate(dt)"
            :class="$style.suggestion"
            tabindex="0"
            >{{ formatDate(dt.year, dt.month, dt.day) }}</span
          >
        </div>
        <div :class="$style.popupSection">
          <ZoaNumber
            label="year"
            label-position="left"
            :placeholder="1900"
            v-model="rawYear"
            :min="0"
            :max="9999"
          />
          <div :class="$style.yearGrid" tabindex="0" ref="yearBtns">
            <ZoaButton
              v-for="opt in yearOptions"
              size="sm"
              @click="setYear(opt)"
              tabindex="-1"
              >{{ padYear(opt) }}
            </ZoaButton>
          </div>
        </div>
        <div :class="$style.popupSection">
          <ZoaNumber
            label="month"
            label-position="left"
            :placeholder="1"
            v-model="month"
            :min="1"
            :max="12"
          />
          <div :class="$style.monthGrid" tabindex="0" ref="monthBtns">
            <ZoaButton
              v-for="(opt, ix) in monthOptions"
              size="sm"
              @click="setMonth(ix + 1)"
              tabindex="-1"
              >{{ opt }}
            </ZoaButton>
          </div>
        </div>
        <div :class="$style.popupSection">
          <ZoaNumber
            label="day"
            label-position="left"
            :placeholder="1"
            v-model="day"
            :min="1"
            :max="monthDays"
          />
          <div :class="$style.dayGrid" tabindex="0" ref="dayBtns">
            <ZoaButton
              v-for="opt in dayOptions"
              size="sm"
              @click="setDay(opt)"
              tabindex="-1"
            >
              {{ opt }}
            </ZoaButton>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { useComponentId } from '../../utils/compid.js';
import { useChangeEmits } from '../common.js';
import { ref, computed, watch } from 'vue';
import ZoaNumber from '../number/Number.vue';
import ZoaButton from '../button/Button.vue';
import { parseDate } from '../../utils/dates.js';
import { debounce } from 'dettle';
import datenames from 'date-names';
import { onKeyStroke, useFocus, useFocusWithin } from '@vueuse/core';

const props = defineProps({
  /**
   * @model
   */
  modelValue: {
    type: Object,
  },
  /**
   * Text for the input label.
   */
  label: {
    type: String,
    default: 'Date',
  },
  /**
   * Position of the input label (or none).
   * @values left, right, above, below, none
   */
  labelPosition: {
    type: String,
    default: 'above',
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
});

const { componentId, subId } = useComponentId();

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

// STATE
const displayBox = ref(null);
const editing = ref(false);
const container = ref(null);

const { focused } = useFocusWithin(container);

// YEAR/MONTH/DAY BUTTONS
const yearBtns = ref(null);
const monthBtns = ref(null);
const dayBtns = ref(null);

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

onKeyStroke('Enter', () => {
  if (!focusedContainer) {
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

// OTHER KEYBINDINGS
onKeyStroke('Escape', () => {
  const selectedElement = container.value.querySelector('*:focus');
  if (selectedElement) {
    selectedElement.blur();
  }
});

// THE MAIN DATE
const returnDate = computed(() => {
  return {
    year: year.value,
    month: month.value,
    day: day.value,
  };
});
const displayDate = computed(() => {
  return formatDate(
    returnDate.value.year,
    returnDate.value.month,
    returnDate.value.day,
  );
});

function refreshDisplay() {
  displayBox.value.value = displayDate.value;
  editing.value = false;
}

// PARSING WRITTEN DATES
const guessedDates = ref([]);

function _parseInput(event) {
  editing.value = true;
  guessedDates.value = parseDate(event.target.value);
}

const parseInput = debounce(_parseInput, 200);

function setDate(date) {
  rawYear.value = date.year;
  month.value = date.month;
  day.value = date.day;
  guessedDates.value = [];
}

// YEAR
const rawYear = ref(null);

const yearOptions = computed(() => {
  let starter = 11;
  if (rawYear.value && rawYear.value >= 1000) {
    starter = Math.floor(rawYear.value / 10) * 10;
  } else if (rawYear.value && rawYear.value < 1000) {
    starter = rawYear.value * 10;
  }
  return Array(10)
    .fill(starter)
    .map((i, ix) => {
      return i + ix;
    });
});

const year = computed(() => {
  if (!rawYear.value) {
    return null;
  }
  if (rawYear.value >= 1000) {
    return rawYear.value;
  }
  let multiplier = 10 ** (4 - rawYear.value.toString().length);
  return rawYear.value * multiplier;
});

const leapYear = computed(() => {
  // in the gregorian calendar, assuming that most/all dates are going to be
  // post 1582 and probably UK-based
  if (year.value % 100 === 0) {
    return year.value % 400 === 0;
  }
  return year.value % 4 === 0;
});

function padYear(opt) {
  return opt.toString().padEnd(4, '0');
}

function setYear(opt) {
  rawYear.value = opt;
  if (day.value && day.value > monthDays.value) {
    day.value = monthDays.value;
  }
}

// MONTH
const month = ref(null);

const monthOptions = ref(datenames.abbreviated_months);

const monthDays = computed(() => {
  const thirty = [4, 6, 9, 11];
  if (thirty.includes(month.value)) {
    return 30;
  }
  if (month.value === 2) {
    return leapYear.value ? 29 : 28;
  }
  return 31;
});

function setMonth(opt) {
  month.value = opt;
  if (day.value && day.value > monthDays.value) {
    day.value = monthDays.value;
  }
}

// DAY
const day = ref(null);

const dayOptions = computed(() => {
  return Array(monthDays.value)
    .fill(1)
    .map((_, ix) => ix + 1);
});

function setDay(opt) {
  day.value = opt;
}

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
@import '../inputs';

.inputContainer {
  position: relative;
}

.datePopup {
  position: absolute;
  max-width: 530px;
  background: white;
  border: 1px solid $grey;
  border-radius: $rounding;
  top: 100%;
  left: $h-pad;
  right: $h-pad;
  margin-top: $v-pad;
  padding: $padding;
}

.popupSection {
  display: grid;
  align-items: start;

  @include media-from('lg') {
    grid-template-columns: 35% 1fr;
  }
  @include media-less-than('lg') {
    padding-bottom: 1em;
  }
  gap: 1em 2em;
  padding: $padding;

  &:not(:last-child) {
    border-bottom: 1px solid $grey;
  }
}

.yearGrid {
  display: flex;
  flex-wrap: wrap;
  //grid-template-columns: repeat(5, 1fr);
  gap: 5px;
}

.monthGrid {
  display: flex;
  flex-wrap: wrap;
  //grid-template-columns: repeat(6, 1fr);
  gap: 5px;
}

.dayGrid {
  display: flex;
  flex-wrap: wrap;
  //grid-template-columns: repeat(10, 1fr);
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
</style>