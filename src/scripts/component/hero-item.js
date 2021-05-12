class HeroItem extends HTMLElement {
  constructor() {
    super();
    this.shadowDOM = this.attachShadow({mode: "open"});
  }
  set hero(hero) {
    this._hero = hero;
    this.render();
  }

  render() {
    const assets = "https://assets.epicsevendb.com";
    if (this._hero.role === "assassin") {
      this._hero.role = "thief";
    } else if (this._hero.role === "manauser") {
      this._hero.role = "soul-weaver";
    } else {
      this._hero.role = this._hero.role;
    }

    if (this._hero.attribute === "wind") {
      this._hero.attribute = "earth";
    } else if (this._hero.attribute === "dark") {
      this._hero.attribute = "mdark";
    } else if (this._hero.attribute === "light") {
      this._hero.attribute = "mlight";
    } else {
      this._hero.attribute = this._hero.attribute;
    }

    let width;
    let bgPosX;
    if(this._hero.rarity === 4) {
        width = "5.25rem";
        bgPosX = "3.75rem,2.625rem,1.5rem,.375rem";
    } else if(this._hero.rarity === 3) {
        width = "3.825rem";
        bgPosX = "2.325rem,1.2rem,.075rem";
    } else {
        width = "6rem";
        bgPosX = "4.5rem,3.375rem,2.25rem,1.125rem,0";
    }

    let star = `url(${assets}/star/cm_icon_star.png),`.repeat(this._hero.rarity).replace(/,\s*$/, "");
    
    this.shadowDOM.innerHTML = `

    <style>
    h2 {
      display: block;
      font-size: 1.5em;
      margin-block-start: 0.83em;
      margin-block-end: 0.83em;
      margin-inline-start: 0px;
      margin-inline-end: 0px;
      font-weight: bold;
    }
    
    .small {
      font-size: 0.875em !important;
    }
    
    .column {
      cursor: pointer;
      position: relative;
      margin: 0 1.5rem 1.5rem 0;
      width: 19rem;
      max-width: 19rem;
      display: block;
      flex-basis: 0;
      flex-grow: 1;
      flex-shrink: 1;
      padding: 0;
      text-align: -webkit-match-parent;
      list-style-type: none;
    }
    
    .hero-list-card {
      display: block;
      overflow: hidden;
      width: 100%;
      min-width: 17rem;
      max-width: 22rem;
      height: 9rem;
      padding: 0.1rem 0.2rem;
      z-index: 5;
      position: relative;
      margin-bottom: 0.5rem;
    }
    
    .hero-list-card img {
      border-style: none;
      opacity: 0.8;
      display: block;
      height: 8.9rem;
      max-width: none;
      z-index: 1;
      top: 0;
      right: -0.2rem;
      bottom: 0;
      position: absolute;
    }
    
    .hero-list-card img:hover {
      opacity: 1;
    }
    
    .hero-list-card [class*="hero-class-"] {
      left: 1.3rem;
      top: 0.3rem;
    }
    
    .hero-list-card [class*="hero-element-"] {
      left: 0;
      bottom: 0.5rem;
    }
    
    .hero-list-card [class*="hero-element-"],
    .hero-list-card [class*="star-rating-"] {
      position: absolute;
      z-index: 5;
    }
    
    [class*="hero-element-"].small::before {
      height: 1.7rem;
      width: 1.7rem;
      background-size: 1.7rem auto;
    }
    
    [class*="hero-element-"]:before {
      content: "";
      height: 3.4rem;
      width: 3.4rem;
      background-size: 3.4rem auto;
      background-position: 0;
      background-repeat: no-repeat;
    }
    
    [class*="hero-element-"]:after,
    [class*="hero-element-"]:before {
      display: inline-block;
      vertical-align: middle;
      background-color: transparent;
    }
    
    [class*="hero-element-"]::after {
      text-transform: capitalize;
    }
    
    [class*="hero-element-"]::after,
    [class*="hero-element-"]::before {
      display: inline-block;
      vertical-align: middle;
      background-color: transparent;
    }
    
    [class*="star-rating-"]:after {
      content: "";
      display: inline-block;
      vertical-align: middle;
      background-color: transparent;
      background-repeat: no-repeat;
    }
    
    
    .hero-list-background {
      position: absolute;
      top: 0;
      bottom: 0;
      z-index: 1;
      display: block;
      content: "";
      border: 0.1rem solid #2d4c82;
      background-color: #17325c;
      border-radius: 1rem;
      -webkit-transform: skewX(-12deg);
      transform: skewX(-12deg);
      width: 100%;
      max-width: 21.9rem;
      height: 8.7rem;
      }


    .hero-class-${this._hero.role} {
        position: absolute;
        z-index: 5;
    }
        
    .hero-class-${this._hero.role}::before {
        content: "";
        display: inline-block;
        vertical-align: middle;
        background-color: transparent;
        background-image: url(${assets}/class/cm_icon_role_${this._hero.role}.png);
        height: 2.3rem;
        width: 2.3rem;
        background-size: 2.3rem auto;
        background-position: 0;
        background-repeat: no-repeat;
    }
        
    .hero-class-${this._hero.role} h2 {
        margin: 0 auto 0.5rem;
        color: #fff;
        text-shadow: -0.1rem -0.1rem 0 #000, 0.1rem -0.1rem 0 #000,
            -0.1rem 0.1rem 0 #000, 0.1rem 0.1rem 0 #000;
    }

    .hero-element-${this._hero.attribute}::before {
        background-image: url(${assets}/attribute/cm_icon_pro${this._hero.attribute}.png);
    }

    .star-rating-${this._hero.rarity}.small::after {
        width: ${width};
        height: 1.45rem;
        background-size: 1.5rem 1.45rem;
        background-image: ${star};
        background-position-x: ${bgPosX};
        background-position-y: 100%;
    }
    </style>
        
        <li id="${this._hero._id}" class="column">
            <a
                title="${this._hero.name}"
                class="hero-list-card is-icon-false"
            >
                <div class="no-text hero-class-${this._hero.role}"><h2>${this._hero.name}</h2></div>
                <img
                class="hero-list-card-image"
                src="${this._hero.assets.thumbnail}"
                lazy="loaded"
                />
                <div class="no-text small star-rating-${this._hero.rarity} hero-element-${this._hero.attribute}"></div>
            </a>
            <div class="hero-list-background"></div>
        </li>
        `;
  }
}

customElements.define("hero-item", HeroItem);
