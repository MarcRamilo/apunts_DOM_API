// petició a weather api
console.log('Usuari registrat correctament');
console.log(sessionStorage);

const getWeather = async (city, zipCode, country) => {
  const apiKey = 'ae9f626bf87d43ea96b134220241004';
  let url = '';

  if (city && !zipCode && !country) {
    url = `https://api.weatherapi.com/v1/forecast.json?key=${apiKey}&q=${city}&units=metric&days=7&lang=es`;
    console.log(1);
    // url = `https://api.openweathermap.org/data/2.5/forecast?q=${city}&appid=${apiKey}`;
  } else if (!city && zipCode && country) {
    url = `https://api.weatherapi.com/v1/forecast.json?key=${apiKey}&q=${zipCode},${country}&units=metric&days=7&lang=es`;
    console.log(2);
  } else if (!city && zipCode && !country) {
    alert('El camp ciutat és requerit!');
    console.log(3);
    return false;
  } else if (city && zipCode && !country) {
    url = `https://api.weatherapi.com/v1/forecast.json?key=${apiKey}&q=${city},&q=${zipCode}&units=metric&days=7&lang=es`;
    console.log(4);
  } else {
    url = `https://api.weatherapi.com/v1/forecast.json?key=${apiKey}&q=${city},&q=${zipCode},&q=${country}&units=metric&days=7&lang=es`;
    console.log(5);
  }
  console.log('city', city, 'zipCode', zipCode, 'country', country, url);

  //   https://api.openweathermap.org/data/2.5/weather?q={city}&appid={API_KEY}
  // https://api.openweathermap.org/data/2.5/weather?zip={zip code},{country code}&appid={API_KEY}

  // https://api.openweathermap.org/data/2.5/weather?q={city}&appid={API_KEY}
  //api.weatherapi.com/v1/forecast.json?key=<YOUR_API_KEY>&q=07112&days=7
  // https://api.openweathermap.org/data/2.5/forecast?q={city}&appid={API_KEY}

  // https://api.openweathermap.org/data/2.5/weather?zip={zip code},{country code}&appid={API_KEY}

  // https://api.openweathermap.org/data/2.5/forecast?zip={zip code},{country code}&appid={API_KEY}

  try {
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error('Failed to fetch weather data');
    }
    const data = await response.json();
    return data;
  } catch (error) {
    throw error;
  }
};

document
  .getElementById('meteoForm')
  .addEventListener('submit', async function (event) {
    event.preventDefault();

    let city = document.getElementById('ciutat').value;
    let zipCode = document.getElementById('codi_postal').value;
    let country = document.getElementById('pais').value; //.value porque es un input text i se usa para obtener el valor del input
    // if (city == '') {
    //   alert('El camp ciutat és requerit!');
    //   return false;
    // }
   
    try {
      const data = await getWeather(city, zipCode, country);
      console.log(data);
      let location = data.location.name;
      console.log(location);
      let weather = data.current.condition.text;
      console.log(weather);
      let temp = data.current.temp_c;
      console.log(temp);
      let humidity = data.current.humidity;
      console.log(humidity);
      let wind = data.current.wind_kph;
      console.log(wind);
      let img = data.current.condition.icon;
      console.log(img);
      let date = data.current.last_updated;
      console.log(date);

      document.getElementById('weather').innerHTML = weather;
      document.getElementById('temp').innerHTML = temp;
      document.getElementById('humidity').innerHTML = humidity;
      document.getElementById('wind').innerHTML = wind;
      document.getElementById('img').src = img;
      document.getElementById('location').innerHTML = location;
      document.getElementById('date').innerHTML = date;
      //   put hidden clas to display on
      var hiddenElements = document.querySelectorAll('.hidden');

      // Iterem sobre els elements y eliminem la clase 'hidden'
      hiddenElements.forEach(function (element) {
        element.classList.remove('hidden');
      });

      //get tomorrow weather
      let location2 = data.location.name;
      console.log(location2);
      let weather2 = data.forecast.forecastday[1].day.condition.text; //[1] porque es el segundo día
      console.log(weather2);
      let temp2 = data.forecast.forecastday[1].day.avgtemp_c;
      console.log(temp2);
      let humidity2 = data.forecast.forecastday[1].day.avghumidity;
      console.log(humidity2);
      let wind2 = data.forecast.forecastday[1].day.maxwind_kph;
      console.log(wind2);
      let img2 = data.forecast.forecastday[1].day.condition.icon;
      console.log(img2);
      let date2 = data.forecast.forecastday[1].date;
      document.getElementById('weather2').innerHTML = weather2;
      document.getElementById('temp2').innerHTML = temp2;
      document.getElementById('humidity2').innerHTML = humidity2;
      document.getElementById('wind2').innerHTML = wind2;
      document.getElementById('img2').src = img2;
      document.getElementById('location2').innerHTML = location2;
      document.getElementById('date2').innerHTML = date2;

    } catch (error) {
      console.error(error);
    }
  });
