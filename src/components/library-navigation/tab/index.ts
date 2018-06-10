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
                    padding: 10px;
                    cursor: pointer;
                    border-bottom: 2px solid #FDFFFC;
                    -o-transition:.7s;
                    -ms-transition:.7s;
                    -moz-transition:.7s;
                    -webkit-transition:.7s;
                    transition:.7s;
                }

                .tab:hover {
                    border-bottom: 2px solid #41EAD4; 
                }

                .tab.is-active {
                    border-bottom: 2px solid #41EAD4; 
                }
      
            </style>
                ${active? 
                    html`<div class="tab is-active">${name}</div>`:
                    html`<div class="tab">${name}</div>`  }  
        
           `;
    }
}