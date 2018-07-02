import {LitElement, html} from '@polymer/lit-element';
import Library from '../../../models/Library';

export class TabGroup extends LitElement {

    static get properties() {
        return {
            navigationItems: { 
                type: Array<String>(),
                readOnly: true
            },
            activeItem:  {
                type: String,
                notify: true,
                reflectToAttribute: true
            },
            selectTab: Function
        }
    }

    // Define a string template instead of a `<template>` element.
    _render({navigationItems, activeItem}) {

        return html`
            <style>
                .tab-group {
                    display: flex;
                    width: 325px;
                    justify-content: space-between;
                }
      
            </style>
            <div class="tab-group">
                ${navigationItems.map((item) => html`
                    <navigation-tab on-click=${() => this.selectTab(item)} name=${item} active=${item === activeItem} />
                `)}
            </div>
           `;
    }
}