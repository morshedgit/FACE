// Form-associated custom elements must be autonomous custom elements--
// meaning they must extend HTMLElement, not one of its subclasses.
export class ImperativeCounter extends HTMLElement {
  internals_: any;
  value_: unknown;
  // Identify the element as a form-associated custom element
  static formAssociated = true;

  constructor() {
    super();
    // Get access to the internal form control APIs
    this.internals_ = this.attachInternals();
    // internal value for this control
    this.value_ = 0;
  }

  // Form controls usually expose a "value" property
  get value() {
    return this.value_;
  }
  set value(v) {
    this.value_ = v;
  }

  // The following properties and methods aren't strictly required,
  // but browser-level form controls provide them. Providing them helps
  // ensure consistency with browser-provided controls.
  get form() {
    return this.internals_.form;
  }
  get name() {
    return this.getAttribute("name");
  }
  get type() {
    return this.localName;
  }
  get validity() {
    return this.internals_.validity;
  }
  get validationMessage() {
    return this.internals_.validationMessage;
  }
  get willValidate() {
    return this.internals_.willValidate;
  }

  checkValidity() {
    return this.internals_.checkValidity();
  }
  reportValidity() {
    return this.internals_.reportValidity();
  }
}

window.customElements.define("i-counter", ImperativeCounter);
