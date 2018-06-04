import * as kebabCase from 'lodash/fp/kebabCase';
import { MyApp } from './app';


// add custom elements here
const elements = {
    MyApp
};

// register all components as kebab case
Object.keys(elements)
    .forEach(key => {
        customElements.define(kebabCase(key), elements[key])
    });