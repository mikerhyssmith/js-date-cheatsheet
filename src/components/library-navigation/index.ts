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
                    width: 300px;
                }

                .tab {
                    flex: 1;
                    border-bottom: 1px solid #FDFFFC;
                }

                .tab.is-active {
                    border-bottom: 1px solid #41EAD4; 
                }
      
            </style>
            <div class="tab-group">
                ${libraries.map((library) => html`
                    ${(library.name === activeLibrary)? 
                        html`<div class="tab is-active">${library.name}</div>`:
                        html`<div class="tab">${library.name}</div>`  }  
                `)}
            </div>
           `;
    }
}