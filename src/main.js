import * as components from './components';
import { kebabify } from './utils.js';
import './styles/main.scss';

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
