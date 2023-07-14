import * as components from './components';
import { kebabify } from './utils.js';
import FontAwesomeIcon from './icons.js';

const Zoa = {
  install(app, options) {
    if (!options) {
      options = {};
    }

    // add fontawesome icon component (unless disabled, e.g. because the user has their own version)
    if (options.fontAwesome !== false) {
      app.component('font-awesome-icon', FontAwesomeIcon);
    }

    // add zoa components
    Object.entries(components).forEach((c) => {
      const elementName = kebabify(c[0]);
      app.component(elementName, c[1]);
    });
  },
};

export { Zoa };

export * from './components';
