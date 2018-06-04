import { PolymerElement } from '@polymer/polymer/polymer-element';
import '@polymer/polymer/lib/elements/dom-if';
import * as view from './app.template.html';

export class MyApp extends PolymerElement {


    // Define a string template instead of a `<template>` element.
    static get template() {
        return view;
    }

    constructor() {
        super();
    }
}