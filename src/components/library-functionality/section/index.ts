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
                    margin-bottom: 5px;
                }

                .code-item-title {
                    flex: 1;
                }

                .code-item-code-example {
                    flex: 3;
                }
                
                .code-list {
                    padding: 0;
                    margin: 0;
                }
                .code-list-item {
                    list-style: none;
                    list-style-position: inside;
                }

            
            </style>
            ${codeItems.map(
              codeItem => html` 
                <div class="code-item"> 
                    <div class="code-item-title"> 
                        ${codeItem.title}
                    </div>

                    <div class="code-item-code-example"> 
                        ${Array.isArray(codeItem.code)? 
                            html `
                            <ul class="code-list">
                                ${codeItem.code.map(codeItem => html `
                                    <li class="code-list-item">
                                        <code>
                                            ${codeItem}
                                        </code>
                                    </li>
                                     `
                                   
                                )}
                                </ul>` : 
                            html `
                                <code>
                                    ${codeItem.code}
                                </code>` 
                        }
                    </div>
                </div>
            `
            )}`;
  }
}
