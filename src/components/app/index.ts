import {LitElement, html} from '@polymer/lit-element';
import '@polymer/polymer/lib/elements/dom-if';
import { LibraryResponse, LibraryObjectResponse } from '../../interfaces/LibraryResponse';

export class MyApp extends LitElement {

    static get properties() {
        return {
            libraries: Array<LibraryObjectResponse>()
        }
    }
    
    constructor() {
        super();

        this.getData().then((response: LibraryResponse) => {
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

                .intro {
                    text-align: center;
                    padding: 40px;
                }

                .library-overviews {
                    display: flex;
                    flex-direction: row;
                    flex-wrap: wrap;
                    width: 1100px;
                    margin: 0 auto;
                }

                .library-overview-item {
                    margin: 10px;
                }


            </style>
            
            <h1 class="title"><img class="header-logo" alt="JavaScript" src='static/js.png'> Date Cheatsheet</h1>
            <div class="intro">
                Dates in JavaScript are hard, lets demystify the options!
            </div>
            <div class ="library-overviews"> 
                ${libraries ? html`  ${libraries.map((item) => html` <div class="library-overview-item"> <library-overview libraryName="${item.name}"></library-overview> </div> `)}` : html `` }
            </div>
            
            
            <library-navigation libraryItems="${libraries}"></library-navigation>
            
            <library-functionality name="${"moment"}"> </library-functionality> 
            
            <app-footer>
            </app-footer>`;
    }

    private async getData() {
        return fetch('static/data/data.json').then((response) => {
            return response.json();
        });
    }
}