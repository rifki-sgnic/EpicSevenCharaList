class SearchBar extends HTMLElement {
    connectedCallback() {
        this.render();
    }

    set clickEvent(event) {
        this._clickEvent = event;
        this.render();
    }

    get value() {
        return this.querySelector("#searchElement").value;
    }

  render() {
    this.innerHTML = `
        <div class="card-body">
            <div class="input-group mb-3">
                <input id="searchElement" type="text" class="form-control" placeholder="Aramintha">
            </div>
        </div>
        `;
    this.querySelector("#searchElement").addEventListener("keyup" ,this._clickEvent);
  }
}

customElements.define("search-bar", SearchBar);
