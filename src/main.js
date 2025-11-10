import * as components from './components';
import './styles/main.scss';
import { kebabify } from './utils.js';

const Zoa = {
  install(app, options) {
    if (!options) {
      options = {};
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
