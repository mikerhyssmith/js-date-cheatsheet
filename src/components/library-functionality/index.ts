import { LitElement, html } from '@polymer/lit-element';
import { afterNextRender } from '@polymer/polymer/lib/utils/render-status.js';
import LibraryData from '../../models/LibraryData';

export class LibraryFunctionality extends LitElement {

    static get properties() {
        return {
          name: String,
          libraryData: LibraryData,
          sections: Array<String>()
        }
    }

    constructor() {
        super();
    }

    ready() {
        super.ready();

         
        afterNextRender(this, function() {
            //@ts-ignore
            this.loadData();
        });
    }

    _propertiesChanged(props, changed, oldProps) {
        super._propertiesChanged(props, changed, oldProps);
        if(Object.keys(changed).indexOf('name') > -1) {
            this.loadData();
        }
    }

    _shouldRender({libraryData}) {
        return libraryData !== undefined;
    }

    _render({sections, libraryData}) {
        return html`
            <style>
                .library-functionality {
                    min-width: 450px;
                }

                .library-functionality-item {
                    margin-bottom: 20px;
                }
                
                .library-functionality-title {
                    text-transform: capitalize;
                    overflow: hidden;
                    margin-bottom: 10px;
                }

                .library-functionality-title:after {
                    content:"";
                    display: inline-block;
                    height: 0.5em;
                    vertical-align: middle;
                    width: 100%;
                    margin-right: -100%;
                    margin-left: 10px;
                    border-top: 1px solid  #41EAD4;
                    margin-bottom: -15px;
                }
            
            </style>
            <div class="library-functionality">
                ${sections.map((section) => html`
                    <div class="library-functionality-item">
                        <div class="library-functionality-title"> 
                            ${section}
                        </div>

                        <library-functionality-section codeItems="${libraryData[section]}"> </library-functionality-section>
                    </div>
                `)}
            </div>`
           
    }

    private getLibraryData(name) {
        return fetch(`static/data/functionality/${name}.json`).then((response) => {
            return response.json();
        });
    }

    private loadData() {
        this.getLibraryData(this.name).then((response) => {
            this.libraryData = response;
            this.sections = Object.keys(response);
        });
    }
}

