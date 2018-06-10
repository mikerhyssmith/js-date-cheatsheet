import {LitElement, html} from '@polymer/lit-element';
import Library from '../../models/Library';

export class LibraryNavigation extends LitElement {

    static get properties() {
        return {
            libraries: { 
                type: Array<Library>(),
                readOnly: true
            },
            activeLibrary: String
        }
    }

    constructor() {
        super();
        this.libraries = [
            new Library('Moment', 100, false, false),
            new Library('Luxon', 100, false, false),
            new Library('date-fns', 100, false, false)
        ];
        this.activeLibrary = 'Moment';
    }

    // Define a string template instead of a `<template>` element.
    _render({libraries, activeLibrary}) {

        return html`
            <style>
                .tab-group {
                    display: flex;
                    width: 250px;
                    justify-content: space-between;
                }
      
            </style>
            <div class="tab-group">
                ${libraries.map((library) => html`
                    <navigation-tab name=${library.name} active=${library.name === activeLibrary} />
                `)}
            </div>
           `;
    }
}