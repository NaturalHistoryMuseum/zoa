import { getElementName } from './utils.js';
import { allElements } from './elements.js';

/* REGISTRATION */
export function registerZoa(elements) {
  elements = elements || allElements;
  elements.forEach((e) => {
    const elementName = getElementName(e.def.__name);
    if (elementName === null) {
      console.error(`${e.def.__name} could not be registered.`);
    }
    customElements.define(elementName, e);
  });
}
