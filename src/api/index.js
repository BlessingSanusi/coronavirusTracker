import axios from 'axios'

const url = "https://covid19.mathdro.id/api";

export const fetchData = async () => {
try {
    const { data: { confirmed, recovered, deaths, lastUpdate}} = await axios.get(url);
const modifieldData = {
    confirmed, recovered, deaths, lastUpdate

}

   return modifieldData;
} catch (error) {
    return error;  
}
}

export const dailyData = async () =>{
    try {
        const { data } = await axios.get(`${url}/daily`);

    const modifiedData = data.map((dayData) => ({
        confirmed: dayData.confirmed.total,
        deaths: dayData.deaths.total,
        date: dayData.reportDate
    }));

    return modifiedData;
    } catch (error) {
        return error;
    }
}

export const Countries = async () => {
    try {
        const {data: {countries} } = await axios.get(`${url}/countries`)
        
        return countries.map((country) => country.name);
    } catch (error) {
        return error;
    }
}  