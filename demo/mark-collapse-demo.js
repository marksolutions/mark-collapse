import { LitElement, css, html } from 'lit';
import '../src/mark-collapse';

export class MarkCollapseDemo extends LitElement {
  render() {
    return html` <button @click=${this._onToggle}>Toggle</button>
      <mark-collapse open>
        <div class="slot1">
          Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text
          ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived
          not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the
          1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like
          Aldus PageMaker including versions of Lorem Ipsum.
        </div>
      </mark-collapse>`;
  }

  _onToggle() {
    let el = this.renderRoot.querySelector('mark-collapse');
    el && el.toggle();
  }
}

customElements.define('mark-collapse-demo', MarkCollapseDemo);
