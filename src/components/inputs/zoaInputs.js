import ZoaAutocompleteTextbox from './textbox/AutocompleteTextbox.vue';
import ZoaCheckbox from './checkbox/Checkbox.vue';
import ZoaDateAmbiguous from './date/DateAmbiguous.vue';
import ZoaDateSimple from './date/DateSimple.vue';
import ZoaDropdown from './dropdown/Dropdown.vue';
import ZoaMultiselect from './dropdown/Multiselect.vue';
import ZoaDropdownSearch from './dropdown/DropdownSearch.vue';
import ZoaNumber from './number/Number.vue';
import ZoaRadio from './radio/Radio.vue';
import ZoaRangeSlider from './slider/RangeSlider.vue';
import ZoaSlider from './slider/Slider.vue';
import ZoaTextbox from './textbox/Textbox.vue';

export default {
  checkbox: {
    component: ZoaCheckbox,
    multi: false,
    delay: 0,
    tabLabel: true,
  },
  'date-ambiguous': {
    component: ZoaDateAmbiguous,
    multi: false,
    delay: 200,
  },
  'date-simple': {
    component: ZoaDateSimple,
    multi: false,
    delay: 200,
  },
  dropdown: {
    component: ZoaDropdown,
    multi: false,
    delay: 0,
  },
  multiselect: {
    component: ZoaMultiselect,
    multi: false,
    delay: 0,
  },
  'dropdown-search': {
    component: ZoaDropdownSearch,
    multi: false,
    delay: 0,
  },
  empty: {
    component: null,
    multi: true,
  },
  number: {
    component: ZoaNumber,
    multi: false,
    delay: 200,
  },
  radio: {
    component: ZoaRadio,
    multi: false,
    delay: 0,
    tabLabel: true,
  },
  'range-slider': {
    component: ZoaRangeSlider,
    multi: true,
    delay: 200,
  },
  slider: {
    component: ZoaSlider,
    multi: false,
    delay: 200,
    wrapperProps: ['valueLabelPosition'],
  },
  'autocomplete-textbox': {
    component: ZoaAutocompleteTextbox,
    multi: false,
    delay: 200,
  },
  textbox: {
    component: ZoaTextbox,
    multi: false,
    delay: 200,
  },
};
