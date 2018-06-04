import { PolymerElement, html } from '@polymer/polymer/polymer-element';
import '@polymer/polymer/lib/elements/dom-if';

export class MomentParser extends PolymerElement {


    // Define a string template instead of a `<template>` element.
    static get template() {
        return html`
            <style>

            </style>`;
    }

    constructor() {
        super();
    }
}