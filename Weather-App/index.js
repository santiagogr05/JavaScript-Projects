// API Key -> ff4af7f9a790caae244cd80c6ae18d52 
// API https://api.openweathermap.org/data/2.5/weather?q={city name}&appid={API key}
// units = metric (Celsius) ; standard (farenheit) // standard default
// lang = EN-ES (EN default)

const ApiKey = 'ff4af7f9a790caae244cd80c6ae18d52';

const inputSearchElement = document.getElementById('search-input');
const weatherIconElement = document.querySelector('.weather-icon');
const cityElement = document.querySelector('.city');
const temperatureElement = document.querySelector('.temp');
const humidityElement = document.querySelector('.humidity');
const windElement = document.querySelector('.wind');

const getWeather = async () => {
    const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${inputSearchElement.value}&appid=${ApiKey}&units=metric`)
    const data = response.json();
    return data;
}

const SearchBtn = document.getElementById('search-button')
SearchBtn.addEventListener('click', () => {
    updateValues();
});

const updateValues = async () => {

    const weather = await getWeather();
    
    cityElement.innerHTML = weather.name;
    temperatureElement.innerHTML = `${Math.round(weather.main['temp'])}°C`;
    humidityElement.innerHTML = `${weather.main['humidity']}%`;
    windElement.innerHTML = `${weather.wind['speed']} km/h`

    switch (weather.weather[0]['main']){
        case ('Clear'):
            weatherIconElement.src = './img/clear.png';
            break;
        case ('Clouds'):
            weatherIconElement.src = './img/clouds.png';
            break;
        case ('Drizzle'):
            weatherIconElement.src = './img/drizzle.png';
            break;
        case ('Mist'):
            weatherIconElement.src = './img/mist.png';
            break;
        case ('Snow'):
            weatherIconElement.src = './img/snow.png';
            break;        
    }

    console.log(weather.weather[0]['main']);
    
}







