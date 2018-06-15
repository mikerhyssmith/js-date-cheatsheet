import { LitElement, html } from '@polymer/lit-element';
import {afterNextRender} from '@polymer/polymer/lib/utils/render-status.js';
import '@polymer/paper-card/paper-card.js';
import '@polymer/paper-button/paper-button.js';
import Library from '../../models/Library';

export class LibraryOverview extends LitElement {

    static get properties() {
        return {
            library: Library,
            libraryName: String
        }
    }

    constructor() {
        super();
    }

    ready() {
        super.ready();
        
        afterNextRender (this, function() {
            // @ts-ignore
            this.getLibraryData(this.libraryName).then((response) => {
                // @ts-ignore
                this.library = response;
            });
        });
    
    }

    _shouldRender({libraryName}) {
        return libraryName !== undefined;
    }

    _render({library}) {
        return html`
            <style>
                .library-overview {
                    color: black;
                    min-width: 250px;
                }

                .library-header {
                    margin-bottom: 10px;
                    display: flex;
                    align-items: center;
                }

                .library-title {
                    display: inline;
                    font-weight: 600;
                    font-size: 30px;
                    vertical-align: sub;
                    flex: 3;
                }

                .library-bundle-size {
                    float: right;
                    flex:1;
                }
                .library-logo {
                    display: inline;
                    font-size 30px;
                    margin-right: 3px;
                }
                .logo {
                    width: 20px;
                }

                .library-card-link {
                    text-decoration: none;
                }
            
            </style>
            
            ${library? 
                    html`<paper-card class="library-overview">
                <div class="card-content">
                    <div class="library-header">
                        <div class="library-logo">⌚</div>
                        <div class="library-title">${library.name}</div>
                        <div class="library-bundle-size">
                            <span>${library.bundleSize}</span>kb
                        </div>
                    </div>
                    <div class="library-info">
                        <div> Timezones: <check-mark state="${library.timeZoneSupport}" />   </div>
                        <div>Tree Shakeable: <check-mark state="${library.treeShakeable}" />  </div> 
                    </div>
                </div>
                <div class="card-actions">
                    <div class="horizontal justified">
                        <a href="${library.website}" class="library-card-link" tabindex="-1">
                            <paper-button>Website</paper-button>
                        </a>
                        <a href="${library.github}" class="library-card-link"  tabindex="-1">
                            <paper-button>Github</paper-button>
                        </a>
                    </div>
                </div>
            </paper-card>`:
            html`<div >Loading....</div>` }
           `;
    }

    private getLibraryData(libraryName) {
        return fetch(`static/data/${libraryName}-overview.json`).then((response) => {
            return response.json();
        });
    }
}

