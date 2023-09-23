import { LitElement, css, html, PropertyValueMap } from "lit";
import { customElement, property, query } from "lit/decorators.js";

@customElement("mark-collapse")
export class MarkCollapse extends LitElement {
  static override styles = css`
    :host #container {
      transition: height 0.5s ease;
      height: 0;
      overflow: hidden;
    }
    :host([open]) #container {
      height: auto;
      transition: height 0.5s ease;
    }
  `;

  /**
   * Hide/Show content
   */
  @property({ type: Boolean, reflect: true })
  open: boolean = false;

  @query("slot")
  slotElement: HTMLSlotElement | undefined;

  @query("#container")
  collapseElement: HTMLDivElement | undefined;

  toggle() {
    this.open = !this.open;
  }

  protected override render() {
    return html`<div id="container"><slot></slot></div>`;
  }

  protected override willUpdate(
    _changedProperties: PropertyValueMap<any> | Map<PropertyKey, unknown>
  ): void {
    if (_changedProperties.has("open")) {
      let assignedSlotEl =
        this.slotElement &&
        this.slotElement.assignedElements({ flatten: true });
      let totalheightOfSlotContant = 0;

      assignedSlotEl &&
        assignedSlotEl.map((item) => {
          totalheightOfSlotContant =
            item.scrollHeight + totalheightOfSlotContant;
        });

      if (this.collapseElement) {
        if (this.open) {
          this.collapseElement.style.height = totalheightOfSlotContant + "px";
        } else {
          this.collapseElement.style.height = "";
        }
      }
    }
  }
}

declare global {
  interface HTMLElementTagNameMap {
      'mark-collapse': MarkCollapse;
  }
}
