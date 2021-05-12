class FilterBar extends HTMLElement {
    connectedCallback() {
        this.render();
    }

    set clickEvent(event) {
        this._clickEvent = event;
        this.render();
    }

    render() {
        const assets = "https://assets.epicsevendb.com";
        let starThree = `<img src="${assets}/star/cm_icon_star.png" alt="three">`.repeat(3);
        let starFour = `<img src="${assets}/star/cm_icon_star.png" alt="four">`.repeat(4);
        let starFive = `<img src="${assets}/star/cm_icon_star.png" alt="five">`.repeat(5);
        this.innerHTML = `
        <style>
            button img {
                max-width: 20px;
            }
        </style>
            <div class="card-body filter-list d-flex flex-column w-50">
                <div class="d-flex flex-row mb-2">
                    <div class="filter-tag w-25">Rarity :</div>
                    <div class="btn-group" role="group">
                        <button id="filterRarity5" class="btn btn-dark">${starFive}</button>
                        <button id="filterRarity4" class="btn btn-dark">${starFour}</button>
                        <button id="filterRarity3" class="btn btn-dark">${starThree}</button>
                    </div>
                </div>
                <div class="d-flex flex-row mb-2">
                    <div class="filter-tag w-25">Element :</div>
                    <div class="btn-group" role="group">
                        <button id="filterElementFire" class="btn btn-dark"><img src="https://assets.epicsevendb.com/attribute/cm_icon_profire.png"></button>
                        <button id="filterElementIce" class="btn btn-dark"><img src="https://assets.epicsevendb.com/attribute/cm_icon_proice.png"></button>
                        <button id="filterElementEarth" class="btn btn-dark"><img src="https://assets.epicsevendb.com/attribute/cm_icon_proearth.png"></button>
                        <button id="filterElementDark" class="btn btn-dark"><img src="https://assets.epicsevendb.com/attribute/cm_icon_promdark.png"></button>
                        <button id="filterElementLight" class="btn btn-dark"><img src="https://assets.epicsevendb.com/attribute/cm_icon_promlight.png"></button>
                    </div>
                </div>
                <div class="d-flex flex-row mb-2">
                    <div class="filter-tag w-25">Hero Class :</div>
                    <div class="btn-group" role="group">
                        <button id="filterHeroClassK" class="btn btn-dark"><img src="https://assets.epicsevendb.com/class/cm_icon_role_knight.png"></button>
                        <button id="filterHeroClassW" class="btn btn-dark"><img src="https://assets.epicsevendb.com/class/cm_icon_role_warrior.png"></button>
                        <button id="filterHeroClassT" class="btn btn-dark"><img src="https://assets.epicsevendb.com/class/cm_icon_role_thief.png"></button>
                        <button id="filterHeroClassM" class="btn btn-dark"><img src="https://assets.epicsevendb.com/class/cm_icon_role_mage.png"></button>
                        <button id="filterHeroClassS" class="btn btn-dark"><img src="https://assets.epicsevendb.com/class/cm_icon_role_soul-weaver.png"></button>
                        <button id="filterHeroClassR" class="btn btn-dark"><img src="https://assets.epicsevendb.com/class/cm_icon_role_ranger.png"></button>
                    </div>
                </div>
            </div>
            
        `;
    }

    renderError(message) {
        this.shadowDOM.innerHTML = `
        <style>
            .placeholder {
                font-weight: lighter;
                color: rgba(0,0,0,0.5);
                -webkit-user-select: none;
                -moz-user-select: none;
                -ms-user-select: none;
                user-select: none;
            }
        </style>`;
    this.shadowDOM.innerHTML += `<h2 class="placeholder">${message}</h2>`;
  }
}

customElements.define("filter-bar", FilterBar);