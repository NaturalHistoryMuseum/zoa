import ZoaCheckbox from './checkbox/ZoaCheckbox.vue';
import ZoaDateAmbiguous from './date/ZoaDateAmbiguous.vue';
import ZoaDateSimple from './date/ZoaDateSimple.vue';
import ZoaDropdown from './dropdown/ZoaDropdown.vue';
import ZoaDropdownSearch from './dropdown/ZoaDropdownSearch.vue';
import ZoaMultiselect from './dropdown/ZoaMultiselect.vue';
import ZoaNumber from './number/ZoaNumber.vue';
import ZoaRadio from './radio/ZoaRadio.vue';
import ZoaRangeSlider from './slider/ZoaRangeSlider.vue';
import ZoaSlider from './slider/ZoaSlider.vue';
import ZoaAutocompleteTextbox from './textbox/ZoaAutocompleteTextbox.vue';
import ZoaTextbox from './textbox/ZoaTextbox.vue';

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
