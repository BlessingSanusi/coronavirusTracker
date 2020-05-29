import React, { useState, useEffect} from 'react';
import { NativeSelect, FormControl } from '@material-ui/core';

import { Countries } from '../../api';

import styles from './Country.module.css'


const CountrySelector = ({handleChange}) => {
const [countriesfetched, setcountriesFetched] = useState([]);

useEffect(() => {
    const apiFetched = async () => {
        setcountriesFetched(await Countries());
    }

    apiFetched();
}, [setcountriesFetched]);


      
    return (
        <FormControl className={styles.formControl}>
            <NativeSelect defaultValue="" onChange={(e) => handleChange(e.target.value)}>
                <option value ='world'>Country</option>
                {countriesfetched.map((country, i) => <option key={i} value={country}>{country}</option>)}
            </NativeSelect>
        </FormControl> 
    )
}

export default CountrySelector;