import { defineCustomElement } from 'vue';

/* COMPONENTS */
import { ZoaButton as ZoaButtonComponent } from './components';
import { ZoaTextbox as ZoaTextboxComponent } from './components';

/* ELEMENTS */
export const ZoaButton = defineCustomElement(ZoaButtonComponent);
export const ZoaTextbox = defineCustomElement(ZoaTextboxComponent);

/* ALL ELEMENTS */
export const allElements = [ZoaButton, ZoaTextbox];
