// JS constants & variables
const apiKey = 109596672022337;
const baseURL = `https://superheroapi.com/api.php/${apiKey}/`;


// DOM
const inputHeroName = document.getElementById("inputHero");
const searchHero = document.getElementById("searchHero");
const randomHeroName = document.getElementById("randomHero");
const displayHero = document.getElementById("displayHero");
const heroName = document.getElementById("heroName");
const powerstats = document.getElementById("powerStats");
const fullName = document.querySelector(".fullName");
const gender = document.querySelector(".gender");
const powerTxt = document.querySelector(".powerstatsTxt");
const generalT = document.querySelector(".general");


// Functions
// Get SuperHero by name
const getSuperHeroByName = (name) => {
    fetch(`${baseURL}search/${name}`)
        .then(response => response.json())
        .then(json => {
            let imgSrc = json.results[0].image.url;
            console.log(imgSrc);
            displayHero.innerHTML = `<img src=${imgSrc} class="superHeroImage"/>`;
            heroName.innerText = json.results[0].name;
            fullName.innerHTML = `<span style="margin-right: 20px" color: #BB99CD>Full Name: </span>${json.results[0].biography['full-name']}`;
            gender.innerHTML = `<span style="margin-right: 20px" color: #BB99CD>Gender: </span>${json.results[0].appearance.gender}`;
            const stats = getStatsHTML(json);
            powerstats.innerHTML = `${stats}`;
        })
}

// Get Random Superhero
const getRandomSuperHero = (randomHero) => {
    console.log({randomHeroId: randomHero});
    fetch(`${baseURL}${randomHero}`)
        .then(response => response.json())
        .then(json => {
            let imgSrc = json.image.url;
            // displayHero.innerHTML += `<img src=${imgSrc} class="superHeroImage"/>`; //It gives you continuous images.
            displayHero.innerHTML = `<img src=${imgSrc} class="superHeroImage"/>`;
            heroName.innerText = json.name;
            generalT.innerText = "General Info";
            powerTxt.innerText = "PowerStats";
            fullName.innerHTML = `<span style="margin-right: 20px" color: #BB99CD>Full Name: </span>${json.biography['full-name']}`;
            gender.innerHTML = `<span style="margin-right: 20px" color: #BB99CD>Gender: </span>${json.appearance.gender}`;
            const stats = getStatsHTML(json);
            powerstats.innerHTML = `${stats}`;
        })
} 

const statEmoji = {
    "intelligence": '🧠',
    "strength": '💪',
    "speed": '⚡',
    "durability": '🪫',
    "power": '🏋️',
    "combat": '⚔️'
}

const getStatsHTML = (charactor) => {
    const stats = Object.keys(charactor.powerstats).map(stat => {
        return `<li><h4>${statEmoji[stat]} ${stat}: ${charactor.powerstats[stat]}</h4></li>`
    })
    // console.log();
    return stats.join('');
}

searchHero.onclick = () => {
    let HeroName = inputHeroName.value;
    getSuperHeroByName(HeroName);
}

randomHeroName.onclick = () => {
    let randomHero = Math.floor(Math.random() * 732);
    getRandomSuperHero(randomHero);
}