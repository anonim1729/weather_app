import { useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGaugeHigh, faWind, faEye, faTint } from '@fortawesome/free-solid-svg-icons';

const Content = ({ weather, place }) => {
    useEffect(() => {
        if (weather && weather.main) {
            console.log(weather.main);
        }
    }, [weather]);

    return (
        <main className="backdrop-blur-md bg-transparent bg-opacity-20 rounded p-4 w-3/4 max-w-md m-2 shadow-md shadow-black text-white h-2/3 flex flex-col justify-evenly">
            {weather && weather.main ? (
                <div className='flex flex-col justify-evenly h-full'>
                    <h1 className="text-center text-2xl">{place.charAt(0).toUpperCase() + place.slice(1)}</h1>

                    <p className="text-7xl text-center m-2 font-semibold">{Math.round(weather.main.temp - 273.15)}°<span className='text-5xl font-semibold'>C</span></p>
                    <div className="second text-xl text-center m-2 capitalize">
                        <p>{weather.weather[0].description}</p>
                    </div>

                    <div className="third flex flex-col justify-center items-center text-center m-2">
                        <p className="text-lg m-1">{Math.round(weather.main.temp_max - 273.15)}°C / {Math.round(weather.main.temp_min - 273.15)}°C</p>
                        <p className="text-lg m-1">Feels Like: {Math.round(weather.main.feels_like - 273.15)}°C</p>
                    </div>
                    <div className="fourth flex flex-wrap justify-center m-2">
                        <div className="w-1/2 p-1">
                            <div className="text-lg p-3 border border-black rounded-lg">
                                <p className="names flex items-center">
                                    <FontAwesomeIcon icon={faGaugeHigh} className="mr-2" />
                                    <span className='text-sm'>Pressure</span>
                                </p>
                                {weather.main.pressure} hPa</div>
                        </div>
                        <div className="w-1/2 p-1">
                            <div className="text-lg p-3 border border-black rounded-lg">
                                <p className="names flex items-center">
                                    <FontAwesomeIcon icon={faTint} className="mr-2" />
                                    <span className='text-sm'>Humidity</span>
                                </p>
                                {weather.main.humidity}%</div>
                        </div>
                        <div className="w-1/2 p-1">
                            <div className="text-lg p-3 border border-black rounded-lg">
                                <p className="names flex items-center">
                                    <FontAwesomeIcon icon={faWind} className="mr-2" />
                                    <span className='text-sm'>Wind Speed</span>
                                </p>
                                {weather.wind.speed} m/s</div>
                        </div>
                        <div className="w-1/2 p-1">
                            <div className="text-lg p-3 border border-black rounded-lg">
                                <p className="names flex items-center">
                                    <FontAwesomeIcon icon={faEye} className="mr-2" />
                                    <span className='text-sm'>Visibility</span>
                                </p>
                                {(weather.visibility / 1000)} km</div>
                        </div>
                    </div>
                </div>
            ) : (
                <p>Loading...</p>
            )}
        </main>
    );
};

export default Content;
