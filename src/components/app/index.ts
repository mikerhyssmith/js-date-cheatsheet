import {LitElement, html} from '@polymer/lit-element';
import '@polymer/polymer/lib/elements/dom-if';
import { LibraryResponse, LibraryObjectResponse } from '../../interfaces/LibraryResponse';

export class MyApp extends LitElement {

    static get properties() {
        return {
            libraries: Array<LibraryObjectResponse>(),
            activeItemLeft: {
                type: String,
                notify: true,
                reflectToAttribute: true
            },
            activeItemRight: {
                type: String,
                notify: true,
                reflectToAttribute: true
            },
        }
    }
    
    constructor() {
        super();

        this.activeItemLeft = 'moment';
        this.activeItemRight = 'date-fns';

        this.getData().then((response: LibraryResponse) => {
            this.libraries = response.libraries;
        });
    }

    // Define a string template instead of a `<template>` element.
    _render({libraries, activeItemLeft, activeItemRight}) {
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
                    margin-bottom: 30px;
                }

                .library-overview-item {
                    margin: 10px;
                }

                .app-functionality-left {
                    width: 325px;
                }

                .library-functionality-wrapper {
                    display: flex;
                    justify-content: space-between;
                    width: 60%;
                    margin: 0 auto;
                }


            </style>
            
            <h1 class="title"><img class="header-logo" alt="JavaScript" src='static/js.png'> Date Cheatsheet</h1>
            <div class="intro">
                Dates in JavaScript are hard, lets demystify the options!
            </div>
            <div class ="library-overviews"> 
                ${libraries ? html`  ${libraries.map((item) => html` <div class="library-overview-item"> <library-overview libraryName="${item.name}"></library-overview> </div> `)}` : html `` }
            </div>
            
            
            <library-navigation selectActiveItemLeft="${(item) => this.selectActiveItemLeft(item)}" selectActiveItemRight="${(item) => this.selectActiveItemRight(item)}" activeItemLeft="${activeItemLeft}" activeItemRight="${activeItemRight}" libraryItems="${libraries}"></library-navigation>
            <div class="library-functionality-wrapper">
                <library-functionality class="app-functionality-left" name="${activeItemLeft}"> </library-functionality> 
                <library-functionality class="app-functionality-right" name="${activeItemRight}"> </library-functionality>
            </div>
            
            <app-footer></app-footer>`;
    }

    private async getData() {
        return fetch('static/data/data.json').then((response) => {
            return response.json();
        });
    }

    private selectActiveItemLeft(name) {
        this.activeItemLeft = name.toLowerCase();
    }

    private selectActiveItemRight(name) {
        this.activeItemRight = name.toLowerCase();
    }
}