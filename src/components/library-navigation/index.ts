import {LitElement, html} from '@polymer/lit-element';
import { LibraryObjectResponse } from '../../interfaces/LibraryResponse';

export class LibraryNavigation extends LitElement {

    static get properties() {
        return {
            libraryItems: { 
                type: Array<LibraryObjectResponse>(),
                readOnly: true
            },
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
            selectActiveItemLeft: Function,
            selectActiveItemRight: Function
        }
    }

    constructor() {
        super();
    }

    _shouldRender({libraryItems}) {
        return libraryItems !== undefined;
    }

    _render({ libraryItems, activeItemLeft, activeItemRight, selectActiveItemLeft, selectActiveItemRight }) {
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
                <tab-group selectTab="${(item) => selectActiveItemLeft(item)}" navigationItems="${navigationItems}" activeItem="${activeItemLeft}"> </tab-group>
                <img class="arrows" style="width: 5%; height: 5%;" src="static/horizontal-arrow.svg"  alt="Horizontal two headed arrow"> 
                <tab-group selectTab="${(item) => selectActiveItemRight(item)}" navigationItems="${navigationItems}" activeItem="${activeItemRight}"></tab-group>
            </div>
           `;
    }
}