import * as kebabCase from 'lodash/fp/kebabCase';
import { MyApp } from './app';
import { AppFooter } from './footer';
import { MomentParser } from './moment-parser';
import { LibraryNavigation } from './library-navigation';
import { TabGroup } from './library-navigation/tab-group';
import { NavigationTab } from './library-navigation/tab';


// add custom elements here
const elements = {
    MyApp,
    AppFooter,
    MomentParser,
    LibraryNavigation,
    NavigationTab,
    TabGroup
};

// register all components as kebab case
Object.keys(elements)
    .forEach(key => {
        customElements.define(kebabCase(key), elements[key])
    });