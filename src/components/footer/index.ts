import { PolymerElement, html } from '@polymer/polymer/polymer-element';
import '@polymer/polymer/lib/elements/dom-if';

export class AppFooter extends PolymerElement {


    // Define a string template instead of a `<template>` element.
    static get template() {
        return html`
            <style>
                .footer {
                  border-top: 1px solid #F3F8F2;
                  background-color: #DEE2D6;
                  position: absolute;
                  right: 0;
                  bottom: 0;
                  left: 0;
                  padding: 1rem;
                  text-align: center;
                }

                .footer-logo {
                  width: 16px;
                  vertical-align: bottom;
                }

                .footer-link {
                  text-decoration: none;
                }
            </style>
            
           <div class="footer">
        
                Made With <img class="footer-logo" src='static/polymer.png'> by <a class="footer-link" href="https://www.twitter.com/mikerhyssmith"> @mikerhyssmith </a>
           </div>`;
    }

    constructor() {
        super();
    }
}