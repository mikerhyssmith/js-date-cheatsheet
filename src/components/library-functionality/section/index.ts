import { LitElement, html } from "@polymer/lit-element";
import CodeItem from "../../../models/CodeItem";

export class LibraryFunctionalitySection extends LitElement {
  static get properties() {
    return {
      codeItems: Array<CodeItem>()
    };
  }

  constructor() {
    super();
  }

  ready() {
    super.ready();
  }

  _shouldRender({codeItems}) {
    return codeItems !== undefined;
}

  _render({ codeItems }) {
    return html`
            <style>
                .code-item {
                    display:flex;
                    justify-content: space-between;
                }

                .code-item-title {
                    flex: 1;
                }

                .code-item-code-example {
                    flex: 3;
                }

            
            </style>
            ${codeItems.map(
              codeItem => html` 
                <div class="code-item"> 
                    <div class="code-item-title"> 
                        ${codeItem.title}
                    </div>

                    <div class="code-item-code-example"> 
                        <code>
                            ${codeItem.code}
                        </code>
                    </div>
                </div>
            `
            )}`;
  }
}
