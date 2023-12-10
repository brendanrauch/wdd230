const visitsDisplay = document.querySelector(".visits");

let numVisitss = Number(window.localStorage.getItem("numVisits-ls")) || 0;

if (numVisitss !== 0) {
	visitsDisplay.textContent = numVisitss;
} else {
	visitsDisplay.textContent = `Welcome To My Site`;
}

numVisitss++;
localStorage.setItem("numVisits-ls", numVisitss);






const now = new Date();
const banner = document.querySelector('#banner');

if (now.getDay() == 3 || now.getDay() == 2 || now.getDay() == 1){
    banner.style.display = "block";
} else {
    banner.style.display = "none";
}

const button = document.querySelector('#button');

button.addEventListener("click", () => {
    banner.style.display = "none";
})





const curTemp = document.querySelector('#temp');
const weatherIcon = document.querySelector('#weather-icon');
const captionDesc = document.querySelector('#cond');


let url = `https://api.openweathermap.org/data/2.5/onecall?lat=34.1519&lon=-117.58&exclude=minutely,hourly&units=Imperial&appid=45d46e6e004233d7386db00671da8a44`;
apiFetch(url);

async function apiFetch(apiURL) {
    try {
      const response = await fetch(apiURL);
      if (response.ok) {
        const data = await response.json();
        displayResults(data);
      } else {
          throw Error(await response.text());
      }
    } catch (error) {
        displayResults(error);
    }
}

function displayResults(weatherData) {

  let iconsrc = `https://openweathermap.org/img/w/${weatherData.current.weather[0].icon}.png`;
  let desc = weatherData.current.weather[0].description;
    
  weatherIcon.setAttribute('src', iconsrc);
  weatherIcon.setAttribute('alt', desc);
  captionDesc.innerHTML = desc;
  curTemp.textContent = `${(weatherData.current.temp).toFixed(1)}°F`;

  for (let i = 1; i < 4; i++) {
    let time = weatherData.daily[i];
    let card = document.createElement('div');
    let curDay = document.createElement('h4');
    let grid = document.createElement('div');
    let image = document.createElement('img');
    let temp = document.createElement('p');
    let cond = document.createElement('p');

    const date = new Date(time.dt * 1000).toLocaleDateString('en-us', {weekday: "long"});

    card.setAttribute('class', 'weather');
    grid.setAttribute('class', 'weather-grid');

    image.setAttribute('src', `https://openweathermap.org/img/w/${time.weather[0].icon}.png`);
    image.setAttribute('alt', time.weather[0].description);
    cond.innerHTML = time.weather[0].description;
    temp.textContent = `${(time.temp.day).toFixed(1)}°F`;
    curDay.textContent = date;

    grid.appendChild(image);
    grid.appendChild(temp);
    card.appendChild(curDay);
    card.appendChild(grid);
    card.appendChild(cond);

    document.querySelector('.forecast').appendChild(card);
  }
 
}














const requestURL = 'data/spotlight.json';
const cards = document.querySelector('.spotlight');

fetch(requestURL)
  .then(function (response){
    return response.json();
  })
  .then(function (jsonObject) {
    const business = jsonObject['business'];
    let qualified = business.filter(business => (business.membership == 'Gold' || business.membership == 'Silver'));
    for (let i = 0; i < 3; i++) {
        rand = Math.floor(Math.random() * qualified.length);
        displayBusiness(qualified[rand]);
        qualified = qualified.filter(business => (business.name != qualified[rand].name));
    }
  });

function displayBusiness(business) {
    // Create elements to add to the document
    let card = document.createElement('div');
    let picture = document.createElement('img');
    let title = document.createElement('p');
    let line = document.createElement('hr');
    let website = document.createElement('a');
    let contact = document.createElement('p');
    
    card.setAttribute('class', 'placeholder-spot');

    website.setAttribute('href', business.website);
    website.textContent = (`${business.name}.com`);
    contact.textContent = `${business.number}`;
    title.textContent = business.title;
  
    picture.setAttribute('src', business.imageurl);
    picture.setAttribute('alt', business.name);
    picture.setAttribute('loading', 'lazy');

    card.appendChild(picture);
    card.appendChild(title);
    card.appendChild(line); 
    card.appendChild(website);
    card.appendChild(contact);   
  
    document.querySelector('.spotlight').appendChild(card);
}






















