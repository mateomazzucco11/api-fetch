import { useState, useEffect } from 'react'
import '../styles/Styles.scss';

export const Api = () => {
    const [weather, setWeather] = useState({
        location: { country: '' },
        current: { condition: '' }
    });

    let countrySelect = 'Cordoba'

    const storageWeather = (country) => {
        const apiUrl = 'http://api.weatherapi.com/v1';

        fetch(`${apiUrl}/current.json?key=${process.env.REACT_APP_ACCESSKEY}&q=${country}`)
            .then(res => res.json())
            .then(res => setWeather(res))
    }
    useEffect(() => {
        const pedro = countrySelect ? (storageWeather(countrySelect)) : (null);
        return pedro
    }, [countrySelect])

    console.log(weather)
    return (
        <div className='background'>
            <div className='information-weather'>
                <div className='weather'>
                    <div className='information-country'>
                        <span>{weather?.location.country}</span>
                        <p>{weather?.location.name}</p>
                        <p className='region'>{weather?.location.region}</p>
                        <p>{weather?.location.localtime}</p>
                    </div>
                    <div className='temperature'>
                        <img src={weather?.current.condition.icon} alt={weather?.location.name} />
                        <p>{weather?.current.temp_c}</p>
                        <p>{weather?.current.wind_kph}</p>
                        <p>{weather?.current.humidity}%</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Api;