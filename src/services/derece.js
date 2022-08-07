import axios from 'axios'

export default class dereceService {
    getData = () => {
        return axios.get('https://api.open-meteo.com/v1/forecast?latitude=36.88&longitude=30.70&hourly=temperature_2m')
    }
}