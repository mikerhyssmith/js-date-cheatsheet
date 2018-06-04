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

            </style>
            
            <h1 class="title">Moment to date-fns cheatsheet</h1>
            
            <app-footer>
            </app-footer>`;
    }

    constructor() {
        super();
    }
}