if (!customElements.get("price-component")) {
  class PriceComponent extends HTMLElement {
    constructor() {
      super();
      this.type = this.dataset.type;
    }


    subscribeOnProductCard(props) {
      console.log("Priceprops", props);
      
    }


    connectedCallback() {
      this.render();
      if (this.type === "variant-price") {
        subscribe(PUB_SUB_EVENTS.optionValueSelectionChange, this.subscribeOnProductCard.bind(this));
      }
    }

    render() {
      this.innerHTML = `
      <span>Price</span>
    `;
    }
  }

  customElements.define("price-component", PriceComponent);
}
