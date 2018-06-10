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

                .arrows {
                    flex: 0;
                    width: 50px;
                    height: 50px;
                }

                .navigation {
                    display: flex;
                    justify-content: space-between;
                    width: 60%;
                    margin: 0 auto;
                }

            </style>
            
            <h1 class="title"><img class="header-logo" alt="JavaScript" src='static/js.png'> Date Cheatsheet</h1>
            
            <div class="navigation">
                <library-navigation></library-navigation> 
                <img class="arrows" src="static/horizontal-arrow.svg"  alt="Horizontal two headed arrow"> 
                <library-navigation></library-navigation>
            </div>
            
            <app-footer>
            </app-footer>`;
    }
}