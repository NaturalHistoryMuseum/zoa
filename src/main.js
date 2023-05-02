import { getElementName } from './utils.js';
import { allElements } from './elements.js';

const styles = import.meta.glob('./components/**/*.scss', { eager: true });

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
