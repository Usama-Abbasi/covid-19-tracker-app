import React,{useState,useEffect} from 'react';
import styles from './app.module.css'
import {Cards} from './components/Cards/Cards';
import {Chart} from './components/Chart/Chart';
import CountryPicker from './components/CountryPicker/CountryPicker';
import Navbar from './components/Navbar/Navbar';
import {fetchData} from './api';
import image from './images/image.png';
function App() {
  const [data, setdata] = useState([])
  const [country, setcountry] = useState('');
  useEffect(() => {
    const fetchAPI=async()=>{
      const data=await fetchData();
      setdata(data)
    }
    fetchAPI();
  }, [])
  const handleCountryChange=async(country)=>{
    console.log(country);
    const data=await fetchData(country);
    setdata(data);
    setcountry(country);
  }
  // console.log(data)
  return (
    <div className={styles.container}>
      <Navbar handleCountryChange={handleCountryChange}/>
      <img className={styles.image} src={image} alt="COVID-19" />
      <Cards data={data}/>
      <CountryPicker handleCountryChange={handleCountryChange}/>
      <Chart data={data} country={country}/>
    </div>
  );
}

export default App;
