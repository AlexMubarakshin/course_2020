/**
 * https://addyosmani.com/blog/understanding-the-publishsubscribe-pattern-for-greater-javascript-scalability/
 *
 * https://davidwalsh.name/pubsub-javascript
 */

export default class EventEmitter {
  constructor() {
    this.events = {};
  }

  /**
   * Listen event
   *
   * @param {string} type
   * @param {Function} listener
   */
  on(type, listener) {
    this.events[type] = this.events[type] || [];
    this.events[type].push(listener);
  }

  /**
   * Call event
   *
   * @param {string} type
   * @param {...any} args
   * @memberof EventEmitter
   */
  emit(type, ...args) {
    if (this.events[type]) {
      this.events[type].forEach(listener => listener(...args));
    }
  }
}