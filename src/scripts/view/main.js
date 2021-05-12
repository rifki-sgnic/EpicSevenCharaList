import '../component/hero-list.js';
import "../component/search-bar.js";
import "../component/filter-bar.js";
import '../component/hero-item.js';
import DataSource from "../data/data-source.js";

const main = () => {
    const searchElement = document.querySelector("search-bar");
    const filterElement = document.querySelector("filter-bar");
    const heroListElement = document.querySelector("hero-list");
    
    DataSource.getHeroes()
        .then(renderResult => {
            heroListElement.heroes = renderResult;
        })
        .catch(message => {
            heroListElement.renderError(message);
        })

    const onButtonSearchClicked = (e) => {
        
        let heroItem = heroListElement.shadowRoot.querySelectorAll('hero-item');
        heroItem.forEach((item) => {
            const li = item.shadowRoot.querySelector('li');
            const a = li.getElementsByTagName('a')[0].getAttribute("title");
            if(a.toLowerCase().indexOf(searchElement.value) > -1) {
                li.style.display = "";
           } else {
                li.style.display = "none";
           }
        })
        
    };

    const renderResult = results => {
        heroListElement.heroes = results;
    }

    const fallbackResult = message => {
        heroListElement.renderError(message);
    };

    searchElement.clickEvent = onButtonSearchClicked;

    // filter rarity
    const onFiveClicked = () => {
        DataSource.getHeroes()
        .then(renderFilter => {
            heroListElement.heroes = renderFilter.filter(fiveStar => fiveStar.rarity === 5);
        })
        .catch(fallbackFilter)
    }

    const onFourClicked = () => {
        DataSource.getHeroes()
        .then(renderFilter => {
            heroListElement.heroes = renderFilter.filter(fourStar => fourStar.rarity === 4);
        })
        .catch(fallbackFilter)
    }

    const onThreeClicked = () => {
        DataSource.getHeroes()
        .then(renderFilter => {
            heroListElement.heroes = renderFilter.filter(threeStar => threeStar.rarity === 3);
        })
        .catch(fallbackFilter)
    }

    // filter attribute
    const onFireClicked = () => {
        DataSource.getHeroes()
        .then(renderFilter => {
            heroListElement.heroes = renderFilter.filter(fireElement => fireElement.attribute === 'fire');
        })
        .catch(fallbackFilter)
    }
    
    const onIceClicked = () => {
        DataSource.getHeroes()
        .then(renderFilter => {
            heroListElement.heroes = renderFilter.filter(iceElement => iceElement.attribute === 'ice');
        })
        .catch(fallbackFilter)
    }
    
    const onEarthClicked = () => {
        DataSource.getHeroes()
        .then(renderFilter => {
            heroListElement.heroes = renderFilter.filter(earthElement => earthElement.attribute === 'wind');
        })
        .catch(fallbackFilter)
    }
    
    const onDarkClicked = () => {
        DataSource.getHeroes()
        .then(renderFilter => {
            heroListElement.heroes = renderFilter.filter(darkElement => darkElement.attribute === 'dark');
        })
        .catch(fallbackFilter)
    }
    
    const onLightClicked = () => {
        DataSource.getHeroes()
        .then(renderFilter => {
            heroListElement.heroes = renderFilter.filter(lightElement => lightElement.attribute === 'light');
        })
        .catch(fallbackFilter)
    }

    // filter role
    const onKnightClicked = () => {
        DataSource.getHeroes()
        .then(renderFilter => {
            heroListElement.heroes = renderFilter.filter(knightRole => knightRole.role === 'knight');
        })
        .catch(fallbackFilter)
    }
    
    const onWarriorClicked = () => {
        DataSource.getHeroes()
        .then(renderFilter => {
            heroListElement.heroes = renderFilter.filter(warriorRole => warriorRole.role === 'warrior');
        })
        .catch(fallbackFilter)
    }
    
    const onThiefClicked = () => {
        DataSource.getHeroes()
        .then(renderFilter => {
            heroListElement.heroes = renderFilter.filter(thiefRole => thiefRole.role === 'assassin');
        })
        .catch(fallbackFilter)
    }
    
    const onMageClicked = () => {
        DataSource.getHeroes()
        .then(renderFilter => {
            heroListElement.heroes = renderFilter.filter(mageRole => mageRole.role === 'mage');
        })
        .catch(fallbackFilter)
    }
    
    const onSoulWClicked = () => {
        DataSource.getHeroes()
        .then(renderFilter => {
            heroListElement.heroes = renderFilter.filter(soulwRole => soulwRole.role === 'manauser');
        })
        .catch(fallbackFilter)
    }
    
    const onRangerClicked = () => {
        DataSource.getHeroes()
        .then(renderFilter => {
            heroListElement.heroes = renderFilter.filter(rangerRole => rangerRole.role === 'ranger');
        })
        .catch(fallbackFilter)
    }

    const fallbackFilter = message => {
        filterElement.renderError(message);
    }

    document.querySelector("#filterRarity3").addEventListener("click",onThreeClicked);
    document.querySelector("#filterRarity4").addEventListener("click",onFourClicked);
    document.querySelector("#filterRarity5").addEventListener("click",onFiveClicked);

    document.querySelector("#filterElementFire").addEventListener("click",onFireClicked);
    document.querySelector("#filterElementIce").addEventListener("click",onIceClicked);
    document.querySelector("#filterElementEarth").addEventListener("click",onEarthClicked);
    document.querySelector("#filterElementDark").addEventListener("click",onDarkClicked);
    document.querySelector("#filterElementLight").addEventListener("click",onLightClicked);

    document.querySelector("#filterHeroClassK").addEventListener("click",onKnightClicked);
    document.querySelector("#filterHeroClassW").addEventListener("click",onWarriorClicked);
    document.querySelector("#filterHeroClassT").addEventListener("click",onThiefClicked);
    document.querySelector("#filterHeroClassM").addEventListener("click",onMageClicked);
    document.querySelector("#filterHeroClassS").addEventListener("click",onSoulWClicked);
    document.querySelector("#filterHeroClassR").addEventListener("click",onRangerClicked);
    
};

export default main;