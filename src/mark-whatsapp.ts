import { LitElement, html, css, CSSResultGroup } from "lit";
import { customElement, query } from "lit/decorators.js";
import { TextField } from  "@material/mwc-textfield";
import "@material/mwc-button";
import "@material/mwc-textfield";

@customElement("mark-whatsapp")
export class MarkWhatsapp extends LitElement {
  static styles?: CSSResultGroup | undefined = [
    css`
      :host {
        display: block;
      }

      .textfield {
        margin-bottom: 8px;
      }

      mwc-textfield {
        width: 300px;
      }
    `,
  ];

  @query('mwc-textfield')
  _textField: TextField | undefined

  protected render(): unknown {
    return html`
      <div class="textfield">
        <mwc-textfield label="Type Number" outlined @keydown=${this._onKeyDown}></mwc-textfield>
      </div>
      <mwc-button label="Send WhatsApp" raised @click=${this._onSend}></mwc-button>
    `;
  }

  _onKeyDown(e: KeyboardEvent) {
    if (e.keyCode === 13) {
      this._onSend();
    }
  }

  _onSend() {
    const value = this._textField?.value;
    if (value?.length === 10) {
      window.open(`https://wa.me/${value}`, '_blank');
    }

    if (this._textField) {
      this._textField.value = "";
    }

  }
}
