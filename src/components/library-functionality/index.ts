import { LitElement, html } from '@polymer/lit-element';
import { afterNextRender } from '@polymer/polymer/lib/utils/render-status.js';

export class LibraryFunctionality extends LitElement {

    static get properties() {
        return {
          name: String
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
                this.library = response;
            });
        });
    }

    _render({}) {
        return html`
            <style>

            
            </style>
            `
    }

    private getLibraryData(name) {
        return fetch(`static/data/functionality/${name}.json`).then((response) => {
            return response.json();
        });
    }
}

