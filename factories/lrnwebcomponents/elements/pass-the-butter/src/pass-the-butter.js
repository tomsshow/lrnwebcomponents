/**
 * Copyright 2018 tom
 * @license MIT, see License.md for full text.
 */
import { html, PolymerElement } from '@polymer/polymer/polymer-element.js';

export { PassTheButter };
/**
 * `pass-the-butter`
 * `what is my purpose?`
 *
 * @microcopy - language worth noting:
 *  -
 *
 * @customElement
 * @polymer
 * @demo demo/index.html
 */
class PassTheButter extends PolymerElement {
  /* REQUIRED FOR TOOLING DO NOT TOUCH */

  /**
   * Store the tag name to make it easier to obtain directly.
   * @notice function name must be here for tooling to operate correctly
   */
  static get tag() {
    return "pass-the-butter";
  }
  /**
   * life cycle, element is afixed to the DOM
   */
  connectedCallback() {
    super.connectedCallback();
    
  }
  /**
   * life cycle, element is removed from the DOM
   */
  //disconnectedCallback() {}
  
}
window.customElements.define(PassTheButter.tag, PassTheButter);
