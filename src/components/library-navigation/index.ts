import {LitElement, html} from '@polymer/lit-element';
import { LibraryObjectResponse } from '../../interfaces/LibraryResponse';

export class LibraryNavigation extends LitElement {

    static get properties() {
        return {
            libraryItems: { 
                type: Array<LibraryObjectResponse>(),
                readOnly: true
            },
            activeItemLeft: String,
            activeItemRight: String
        }
    }

    constructor() {
        super();
        this.activeItemLeft = 'moment';
        this.activeItemRight = 'date-fns';
    }

    _shouldRender({libraryItems}) {
        return libraryItems !== undefined;
    }

    _render({ libraryItems, activeItemLeft, activeItemRight }) {
        const navigationItems = libraryItems.map(item => item.prettyName);
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
                <tab-group navigationItems="${navigationItems}" activeItem="${activeItemLeft}"> </tab-group>
                <img class="arrows" src="static/horizontal-arrow.svg"  alt="Horizontal two headed arrow"> 
                <tab-group navigationItems="${navigationItems}" activeItem="${activeItemRight}"></tab-group>
            </div>
           `;
    }
}