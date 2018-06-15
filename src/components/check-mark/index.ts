import {LitElement, html} from '@polymer/lit-element';

export class CheckMark extends LitElement {

    static get properties() {
        return {
            state: Boolean
        }
    }

    _render({state}) {
        

        return html`

        <style> 
            .tick {
                color: green;
            }

            .cross {
                color: red;
            }
        </style>
                ${state? 
                    html`<span class="tick">&#10003;</span>`:
                    html`<span class="cross">&#10005;</span>`  }  
        
           `;
    }
}