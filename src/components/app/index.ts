import {LitElement, html} from '@polymer/lit-element';
import '@polymer/polymer/lib/elements/dom-if';

export class MyApp extends LitElement {

    static get properties() {
        return {
            libraries: Array<String>()
        }
    }
    
    constructor() {
        super();

        this.getData().then(response => {
            this.libraries = response.libraries;
        });
    }

    // Define a string template instead of a `<template>` element.
    _render({libraries}) {
        return html`
            <style>
                .title {
                    text-align: center;
                }
                
                .header-logo {
                    width: 32px;
                    vertical-align: bottom;
                }


            </style>
            
            <h1 class="title"><img class="header-logo" alt="JavaScript" src='static/js.png'> Date Cheatsheet</h1>
            
           <library-navigation navigationItems="${libraries}"></library-navigation>
            
            <app-footer>
            </app-footer>`;
    }

    private async getData() {
        return fetch('static/data/data.json').then((response) => {
            return response.json();
        });
    }
}