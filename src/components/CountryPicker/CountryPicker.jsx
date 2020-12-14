import React,{useState,useEffect} from 'react'
import styles from './CountryPicker.module.css';
import { NativeSelect, FormControl } from '@material-ui/core';
import {fetchCountries} from '..//..//api';
export default function CountryPicker({handleCountryChange}) {
    const [countries, setcountries] = useState([])
    useEffect(() => {
        const fetchApi=async()=>{
            const data=await fetchCountries();
            setcountries(data);
        }
        fetchApi();
    }, [])
    // console.log(countries[0]['name']);
    return (
        <FormControl className={styles.formControl}>
        <NativeSelect defaultValue="" onChange={(e)=>handleCountryChange(e.target.value)}>
          <option value="">Global</option>
          {countries.map((country, i) => <option key={i} value={country['name']}>{country['name']}</option>)}
        </NativeSelect>
      </FormControl>
    )
}

