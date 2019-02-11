class SwApiService {
    getResorce = async (url) => {
        const res =  await fetch(url);
        if(!res.ok) {
            throw new Error(`Could not fetch ${url},received ${res.status}`)
        }
        return await res.json();
    }
    getAllPeople = async () => {
        const res = await this.getResorce(`https://swapi.co/api/people`);
        return res.results.map(this.newPerson)
    }
    getPerson = async (id) => {
        const person = await this.getResorce(`https://swapi.co/api/people/${id}`);
        return this.newPerson(person);
    }
    getAllPlanets = async () => {
        const res = await this.getResorce(`https://swapi.co/api/planets`);
        return res.results.map(this.newPlanet)
    }
    getPlanet = async (id) => {
        const planet = await this.getResorce(`https://swapi.co/api/planets/${id}`);
        return this.newPlanet(planet)
    }
    getAllStarships = async () => {
        const res = await this.getResorce(`https://swapi.co/api/starships`);
        return res.results.map(this.newStarship)
    }
    getStarship = async (id) => {
        const starship = await this.getResorce(`https://swapi.co/api/starships/${id}`);
        return this.newStarship(starship)
    }
    getPersonImage = ({id}) => {
        return `https://starwars-visualguide.com/assets/img/characters/${id}.jpg`
    }
    getPlanetImage = ({id}) => {
        return `https://starwars-visualguide.com/assets/img/planets/${id}.jpg`
    }
    getStarshipImage = ({id}) => {
        return `https://starwars-visualguide.com/assets/img/starships/${id}.jpg`
    }
    extractId = (item) => {
       const idRegExp = /\/([0-9]*)\/$/;
       return item.url.match(idRegExp)[1]; // [1] means 1st group of regular exp.
    }
    newPlanet = (planet) => {
        return {
            id:this.extractId(planet),
            name:planet.name,
            population:planet.population,
            rotationPeriod:planet.rotation_period,
            diameter:planet.diameter,
            climate:planet.climate,
            water:planet.surface_water,
            terrain:planet.terrain
        }
    }
    newPerson = (person) => {
        return {
            id: this.extractId(person),
            name: person.name,
            gender: person.gender,
            birthYear: person.birth_year,
            eyeColor: person.eye_color,
            hairColor:person.hair_color,
            mass:person.mass,
            height:person.height
        }
    }
    newStarship = (starship) => {
        return {
            id: this.extractId(starship),
            name: starship.name,
            model: starship.model,
            manufacturer: starship.manufacturer,
            costInCredits: starship.cost_in_credits,
            length: starship.length,
            crew: starship.crew,
            passengers: starship.passengers,
            cargoCapacity: starship.cargo_capacity,
            starshipClass: starship.starship_class
        }
    }
}

export default SwApiService;