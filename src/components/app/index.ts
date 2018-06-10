import { PolymerElement, html } from '@polymer/polymer/polymer-element';
import '@polymer/polymer/lib/elements/dom-if';

export class MyApp extends PolymerElement {


    // Define a string template instead of a `<template>` element.
    static get template() {
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

            <navigation>
            </navigaton>
            
            <app-footer>
            </app-footer>`;
    }

    constructor() {
        super();
    }
}