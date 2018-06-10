import {LitElement, html} from '@polymer/lit-element';
import '@polymer/polymer/lib/elements/dom-if';

export class AppFooter extends LitElement {


    // Define a string template instead of a `<template>` element.
    _render() {
        return html`
            <style>
                .footer {
                  border-top: 1px solid #41EAD4;
                  background-color: #011627;
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

                .footer-link:visited, .footer-link:link, .footer-link:active {
                  color: inherit;
                  text-decoration: none;
                }

                .footer-link:hover {
                  text-decoration: none;
                  color: #B91372;
                }
            </style>
            
           <div class="footer">
        
                Built with <img class="footer-logo" alt="polymer" src='static/polymer.png'> by <a class="footer-link" href="https://www.twitter.com/mikerhyssmith"> @mikerhyssmith </a>
           </div>`;
    }

    constructor() {
        super();
    }
}