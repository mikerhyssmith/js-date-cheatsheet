import { LitElement, html } from '@polymer/lit-element';
import { afterNextRender } from '@polymer/polymer/lib/utils/render-status.js';
import LibraryData from '../../models/LibraryData';

export class LibraryFunctionality extends LitElement {

    static get properties() {
        return {
          name: String,
          libraryData: LibraryData
        }
    }

    constructor() {
        super();
    }

    ready() {
        super.ready();

         
        afterNextRender(this, function() {
            // @ts-ignore
            this.getLibraryData(this.name).then((response) => {
                // @ts-ignore
                this.libraryData = response;
            });
        });
    }

    _shouldRender({libraryData}) {
        return libraryData !== undefined;
    }

    _render({libraryData}) {
        return html`
            <style>

            
            </style>
        
            <div class="library-functionality-title"> 

            </div>
            `
    }

    private getLibraryData(name) {
        return fetch(`static/data/functionality/${name}.json`).then((response) => {
            return response.json();
        });
    }
}

