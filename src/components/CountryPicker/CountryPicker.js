import React, { useState, useEffect } from "react";
import { NativeSelect, FormControl } from "@material-ui/core";
import { fetchCountries } from '../../data-fetcher'
import styles from './CountryPicker.module.css';
function CountryPicker({ handleCountryChange }) {

    const [countries, setCountries] = useState([]);
    useEffect(() => {
        const countryList = async () => {
            setCountries(await fetchCountries());
        };
        countryList();
    }, [])
    return (
        <div>
            <FormControl className={styles.formcontrol}>
                <NativeSelect defaultValue="" onChange={(e) => handleCountryChange(e.target.value)}>
                    <option value="">Global</option>
                    {countries.map((country, i) => <option key={i} value={country}>{country}</option>)}

                </NativeSelect>
            </FormControl>
        </div>
    );
}

export default CountryPicker;
