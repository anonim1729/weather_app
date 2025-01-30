import { useState, useEffect } from 'react';
import Input from './Input';
import Content from './Content';
const apiKey = process.env.REACT_APP_WEATHER_API_KEY;

function App() {
  const GEO_URL = 'http://api.openweathermap.org/geo/1.0/direct?';
  const API_KEY = apiKey;
  const WET_URL = 'https://api.openweathermap.org/data/2.5/weather?'
  const [place, setPlace] = useState('bengaluru');
  const [input, setInput] = useState('');
  const [currentWeather, setCurrentWeather] = useState({});

  useEffect(() => {
    const fetchWeather = async (lat, lon) => {
      try {
        const response = await fetch(`${WET_URL}lat=${lat}&lon=${lon}&appid=${API_KEY}`);
        if (!response.ok) throw Error("Something went wrong");
        const weather = await response.json();
        console.log(weather);
        setCurrentWeather(weather);
      } catch (err) {
        console.log(err);
      }
    }

    const fetchLonLat = async () => {
      try {
        const response = await fetch(`${GEO_URL}q=${place}&limit=1&appid=${API_KEY}`);
        if (!response.ok) throw Error("Something went wrong");
        const data = await response.json();
        console.log(data);
        await fetchWeather(data[0].lat, data[0].lon);
      } catch (err) {
        console.log(err);
      }
    }

    (async () => { await fetchLonLat() })();
  }, [place, API_KEY])

  const handleOnClick = () => {
    setInput('');
    setPlace(input);
    console.log(currentWeather);
  }

  return (
    <div className="flex flex-col justify-center items-center h-screen bg-cover bg-fixed font-sans" style={{ backgroundImage: 'url("/background.jpg")' }}>
      <Input
        input={input}
        setInput={setInput}
        handleOnClick={handleOnClick}
      />
      <Content
        weather={currentWeather}
        place={place}
      />
    </div>
  );
}

export default App;
