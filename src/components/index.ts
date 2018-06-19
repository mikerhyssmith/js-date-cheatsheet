import * as kebabCase from 'lodash/fp/kebabCase';
import { MyApp } from './app';
import { AppFooter } from './footer';
import { LibraryNavigation } from './library-navigation';
import { TabGroup } from './library-navigation/tab-group';
import { NavigationTab } from './library-navigation/tab';
import { LibraryOverview } from './library-overview';
import { CheckMark } from './check-mark';
import { LibraryFunctionality } from './library-functionality';

// add custom elements here
const elements = {
    MyApp,
    AppFooter,
    LibraryNavigation,
    NavigationTab,
    TabGroup,
    LibraryOverview,
    CheckMark,
    LibraryFunctionality
};

// register all components as kebab case
Object.keys(elements)
    .forEach(key => {
        customElements.define(kebabCase(key), elements[key])
    });