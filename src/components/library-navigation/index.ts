import {LitElement, html} from '@polymer/lit-element';

export class LibraryNavigation extends LitElement {

    constructor() {
        super();
    }

    _render() {

        return html`
            <style>
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
            
            <div class="navigation">
                <tab-group> </tab-group>
                <img class="arrows" src="static/horizontal-arrow.svg"  alt="Horizontal two headed arrow"> 
                <tab-group></tab-group>
            </div>
           `;
    }
}