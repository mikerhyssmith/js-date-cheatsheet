import { LitElement, html } from '@polymer/lit-element';
import CodeItem from '../../../models/CodeItem';

export class FunctionalitySection extends LitElement {

    static get properties() {
        return {
          codeItem: CodeItem
        }
    }

    constructor() {
        super();
    }

    ready() {
        super.ready();
    }

    _render({}) {
        return html`
            <style>

            
            </style>
            `
    }
}

