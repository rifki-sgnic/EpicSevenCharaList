class DataSource {
    static searchHero(keyword) {
        return fetch(`https://api.epicsevendb.com/hero/${keyword.toLowerCase().replace(/[ ,]+/g, "-")}`)
        .then(response => {
            return response.json();
        })
        .then(responseJson => {
            if(responseJson.results) {
                return Promise.resolve(responseJson.results);
            } else {
                return Promise.reject(`${keyword} is not found`);
            }
        })
    }

    static getHeroes() {
        return fetch(`https://api.epicsevendb.com/hero/`)
        .then(response => {
            return response.json();
        })
        .then(responseJson => {
            if(responseJson.results) {
                return Promise.resolve(responseJson.results);
            } else {
                return Promise.reject(`error no data`);
            }
        })
    }

    static getHero(id) {
        return fetch(`https://api.epicsevendb.com/hero/${id}`)
        .then(response => {
            return response.json();
        })
        .then(responseJson => {
            if(responseJson.results) {
                return Promise.resolve(responseJson.results);
            } else {
                return Promise.reject(alert(`${id} is not found`));
            }
        })
    }
}

export default DataSource;