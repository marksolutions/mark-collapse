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

  override connectedCallback() {
    super.connectedCallback();
    this.solution('xzxzx');
    this.solution1([2, 4, 7, 5, 3, 5, 8, 5, 1, 7, 100, 123, 0, 11, 13, 16, 18, 97, 45, 0], 3, 100);

    this.solution2([0, -1, 2, -3, 1], 5, -2);
  }

  solution(s: string) {
    const length = s.length;
    let count = 0;

    for (let x = 1; x <= length - 2; x++) {
      let y = 1;
      for (let p = length - x; p >= 2; p--) {
        const a = s.substring(0, x);
        const b = s.substring(x, x + y);
        const c = s.substring(x + y);

        const ab = a + b;
        const bc = b + c;
        const ca = c + a;

        const isAbAndBcDiff = ab !== bc;
        const isBcAndCaDiff = bc !== ca;
        const isCaAndAbDiff = ca !== ab;

        if (isAbAndBcDiff && isBcAndCaDiff && isCaAndAbDiff) {
          count++;
        }

        y++;
      }
    }
    return count;
  }

  solution1(a: number[], m: number, k: number) {
    let count = 0;

    for (let x = 0; x <= a.length - m; x++) {
      let subarray = a.slice(x, x + m);
      let hasFound = false;

      for (let y = 0; y < subarray.length; y++) {
        for (let z = 0; z < subarray.length; z++) {
          if (y !== z && subarray[y] + subarray[z] === k) {
            hasFound = true;
            break;
          }
        }
        if (hasFound) {
          break;
        }
      }

      if (hasFound) {
        count++;
      }
    }
    return count;
  }

  solution2(arr: number[], size: number, x: number) {
    let count = 0
    for (let i = 0; i < size - 1; i++) {
      for (let j = i + 1; j < size; j++) {
        count++;
        console.log(count);
        
        
        if (arr[i] + arr[j] == x) {
          console.log('Pair with a given sum ' + x + ' is (' + arr[i] + ', ' + arr[j] + ')');
          return true;
        }
      }
    }

    return false;
  }
}
