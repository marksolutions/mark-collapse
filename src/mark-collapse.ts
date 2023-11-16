import { LitElement, css, html, PropertyValueMap } from 'lit';
import { customElement, property, query } from 'lit/decorators.js';

declare global {
  interface HTMLElementTagNameMap {
    'mark-collapse': MarkCollapse;
  }
}

/**
 * A custom web component that allows collapsing and expanding its content.
 *
 * @element mark-collapse
 *
 * @cssprop `--mark-collapse-transition-duration`- The duration of the collapse/expand animation.
 * @cssprop `--mark-collapse-transition-timing` - The timing function for the collapse/expand animation.
 *
 * @example
 *
 * ```html
 * <mark-collapse open>
 *  <p>This content can be collapsed and expanded.</p>
 * </mark-collapse>
 * ```
 */
@customElement('mark-collapse')
export class MarkCollapse extends LitElement {
  static override styles = css`
    :host {
      display: block;
    }

    :host #container {
      transition: height height var(--mark-collapse-transition-duration, 0.5s) var(--mark-collapse-transition-timing, ease);
      height: 0;
      overflow: hidden;
    }
    :host([open]) #container {
      height: auto;
      transition: height var(--mark-collapse-transition-duration, 0.5s) var(--mark-collapse-transition-timing, ease);
    }
  `;

  /**
   * Controls the visibility of the content. Set to `true` to expand, `false` to collapse.
   */
  @property({ type: Boolean, reflect: true })
  open: boolean = false;

  /**
   * Reference to the `<slot>` element inside the component.
   */
  @query('slot')
  _slotElement: HTMLSlotElement | undefined;

  /**
   * Reference to the content container element.
   */
  @query('#container')
  _collapseElement: HTMLDivElement | undefined;

  /**
   * Toggles the visibility of the content. If it's open, it will be collapsed, and vice versa.
   */
  toggle() {
    this.open = !this.open;
  }

  protected override render() {
    return html`<div id="container"><slot></slot></div>`;
  }

  protected override willUpdate(_changedProperties: PropertyValueMap<any> | Map<PropertyKey, unknown>): void {
    if (_changedProperties.has('open')) {
      let assignedSlotEl = this._slotElement && this._slotElement.assignedElements({ flatten: true });
      let totalheightOfSlotContant = 0;

      assignedSlotEl &&
        assignedSlotEl.map(item => {
          totalheightOfSlotContant = item.scrollHeight + totalheightOfSlotContant;
        });

      if (this._collapseElement) {
        if (this.open) {
          this._collapseElement.style.height = totalheightOfSlotContant + 'px';
        } else {
          this._collapseElement.style.height = '';
        }
      }
    }
  }
}
