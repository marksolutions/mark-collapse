import { LitElement, html } from "lit";
import "../mk-collapse";

export class MkCollapseDemo extends LitElement {
  render() {
    return html` <button @click=${this._onToggle}>Toggle</button>
      <mk-collapse open
        ><div>
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s, when an unknown printer took a galley of type and
          scrambled it to make a type specimen book. It has survived not only
          five centuries, but also the leap into electronic typesetting,
          remaining essentially unchanged. It was popularised in the 1960s with
          the release of Letraset sheets containing Lorem Ipsum passages, and
          more recently with desktop publishing software like Aldus PageMaker
          including versions of Lorem Ipsum.
        </div></mk-collapse
      >`;
  }

  _onToggle() {
    let el = this.renderRoot.querySelector("mk-collapse");
    el && el.toggle();
  }
}

customElements.define("mk-collapse-demo", MkCollapseDemo);