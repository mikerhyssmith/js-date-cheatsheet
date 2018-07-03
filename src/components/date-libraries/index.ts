import {LitElement, html} from '@polymer/lit-element';
import { LibraryObjectResponse } from '../../interfaces/LibraryResponse';

export class DateLibraries extends LitElement {

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
        return html`
            <style>
                .library-functionality-wrapper {
                        display: flex;
                        justify-content: space-between;
                        width: 60%;
                        margin: 0 auto;
                }
                
                .app-functionality-left {
                        width: 325px;
                }
      
            </style>
            
        
            <library-navigation selectActiveItemLeft="${(item) => selectActiveItemLeft(item)}" selectActiveItemRight="${(item) => selectActiveItemRight(item)}" activeItemLeft="${activeItemLeft}" activeItemRight="${activeItemRight}" libraryItems="${libraryItems}"></library-navigation>
            <div class="library-functionality-wrapper">
                <library-functionality class="app-functionality-left" name="${activeItemLeft}"> </library-functionality> 
                <library-functionality class="app-functionality-right" name="${activeItemRight}"> </library-functionality>
            </div>
           `;
    }
}