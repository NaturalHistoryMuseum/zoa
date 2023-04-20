import { defineCustomElement } from 'vue';

/* COMPONENTS */
import { ZoaButton as ZoaButtonComponent } from './components';

/* ELEMENTS */
export const ZoaButton = defineCustomElement(ZoaButtonComponent);

/* ALL ELEMENTS */
export const allElements = [ZoaButton];
