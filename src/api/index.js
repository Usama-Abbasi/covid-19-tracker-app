import axios from 'axios';
const url = 'https://covid19.mathdro.id/api';

export const fetchData=async(country)=>{
    try {
        let changeurl=url;
        if(country){
            changeurl=`${url}/countries/${country}`;
        }
        const {data:{confirmed,deaths,recovered,lastUpdate}}=await axios.get(changeurl);
        return {confirmed,deaths,recovered,lastUpdate}
    } catch (error) {
        return error
    }
   
}
export const fetchCountries=async()=>{
    try{
    const {data:{countries}}=await axios.get(`${url}/countries`);
    return countries;
    }catch(error){
        return error;
    }
}
export const fetchDailyData = async () => {
    try {
      const { data } = await axios.get('https://api.covidtracking.com/v1/us/daily.json');
  
      return data.map(({ positive, recovered, death, dateChecked: date }) => ({ confirmed: positive, recovered, deaths: death, date }));
    } catch (error) {
      return error;
    }
  };