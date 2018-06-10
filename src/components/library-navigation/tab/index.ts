import {LitElement, html} from '@polymer/lit-element';

export class NavigationTab extends LitElement {

    static get properties() {
        return {
            name: String,
            active: Boolean
        }
    }

    constructor() {
        super();
    }

    _render({name, active}) {

        return html`
            <style>

                .tab {
                    flex: 1;
                    border-bottom: 1px solid #FDFFFC;
                }

                .tab.is-active {
                    border-bottom: 1px solid #41EAD4; 
                }
      
            </style>
                ${active? 
                    html`<div class="tab is-active">${name}</div>`:
                    html`<div class="tab">${name}</div>`  }  
        
           `;
    }
}