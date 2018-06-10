import {LitElement, html} from '@polymer/lit-element';
import '@polymer/polymer/lib/elements/dom-if';

export class MyApp extends LitElement {

    
    constructor() {
        super();
    }

    // Define a string template instead of a `<template>` element.
    _render() {
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

            <library-navigation>
            </library-navigation>
            
            <app-footer>
            </app-footer>`;
    }
}