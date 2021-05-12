import DataSource from '../data/data-source.js';
import "./hero-item.js";
import "../component/search-bar.js";

class HeroList extends HTMLElement {
    constructor() {
        super();
        this.shadowDOM = this.attachShadow({mode: "open"});
    }

    set heroes(heroes) {
        this._heroes = heroes;
        this.render();
    }

    render() {
        this.shadowDOM.innerHTML="";
        this._heroes.forEach((hero) => {
            const heroItemElement = document.createElement("hero-item");
            heroItemElement.hero = hero;
            this.shadowDOM.appendChild(heroItemElement);

            heroItemElement.addEventListener("click", (e) => {
                const heroID = e.target.shadowDOM.querySelector("li").getAttribute("id");
                DataSource.getHero(heroID);
            })
            
        });
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

customElements.define("hero-list", HeroList);
