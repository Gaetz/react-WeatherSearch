import axios from 'axios';

const API_KEY = '04780c572270ed7c541b98c0c1edc318';
const ROOT_URL = `http://api.openweathermap.org/data/2.5/forecast?appid=${API_KEY}`;

export const FETCH_WEATHER = 'FETCH_WEATHER';

export function fetchWeather(city) {
    const url = `${ROOT_URL}&q=${city},fr`;
    const request = axios.get(url);
    return {
        type: FETCH_WEATHER,
        payload: request
    };
}