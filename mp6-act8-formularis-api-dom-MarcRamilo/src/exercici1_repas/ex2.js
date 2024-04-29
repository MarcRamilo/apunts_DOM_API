const getWeather = async (city, country) => {
  const apiKey = 'ae9f626bf87d43ea96b134220241004';
  let url;
  if (!city) {
    url = `http://api.weatherapi.com/v1/forecast.json?key=${apiKey}&q=${country}&units=metric&days=2&lang=es`;
  } else if (!country) {
    url = `http://api.weatherapi.com/v1/forecast.json?key=${apiKey}&q=${city}&units=metric&days=2&lang=es`;
  } else {
    url = `http://api.weatherapi.com/v1/forecast.json?key=${apiKey}&q=${city},&q=${country}&units=metric&days=2&lang=es`;
  }
  try {
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error('No ha fet el fetch');
    }
    const data = await response.json();
    // console.log(data);

    return data;
  } catch (e) {
    console.error(e);
  }
};

document
  .getElementById('meteoForm')
  .addEventListener('submit', async (event) => {
    event.preventDefault();

    let city = document.getElementById('ciutat').value;
    let pais = document.getElementById('pais').value;

    if (!city && !pais) {
      alert('Els camps són requerits');
    }
    try {
      const data = await getWeather(city, pais);
      console.log(data);
      let name = data.location.name;
      let temp_c = data.current.temp_c;
      let humidity = data.current.humidity;
      let condition = data.current.condition.text;
      let icon = data.current.condition.icon;
      let locationData = data.location.localtime;
      let wind = data.current.wind_mph;

      document.getElementById('date').innerHTML = locationData;
      document.getElementById('location').innerHTML = name;
      document.getElementById('weather').innerHTML = condition;
      document.getElementById('img').src = icon;
      document.getElementById('temp').innerHTML = temp_c;
      document.getElementById('humidity').innerHTML = humidity;
      document.getElementById('wind').innerHTML = wind;

      //   put hidden clas to display on
      var hiddenElements = document.querySelectorAll('.hidden');

      // Iterem sobre els elements y eliminem la clase 'hidden'
      hiddenElements.forEach(function (element) {
        element.classList.remove('hidden');
      });

      console.log(data.forecast.forecastday[1]);
      let locationData2 = data.forecast.forecastday[1].date;
      let temp_c2 = data.forecast.forecastday[1].day.avgtemp_c;
      let icon2 = data.forecast.forecastday[1].day.condition.icon;
      let condition2 = data.forecast.forecastday[1].day.condition.text;
      let humidity2 = data.forecast.forecastday[1].day.avghumidity;
      let wind2 = data.forecast.forecastday[1].day.maxwind_mph;

      document.getElementById('date2').innerHTML = locationData2;
      document.getElementById('location2').innerHTML = name;
      document.getElementById('weather2').innerHTML = condition2;
      document.getElementById('img2').src = icon2;
      document.getElementById('temp2').innerHTML = temp_c2;
      document.getElementById('humidity2').innerHTML = humidity2;
      document.getElementById('wind2').innerHTML = wind2;

    } catch (e) {
      console.error(e);
    }
  });
