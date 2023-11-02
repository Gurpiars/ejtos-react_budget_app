import React, { useState , useContext} from 'react';
import { AppContext } from '../context/AppContext';

import "../context/dropdown.css";
const Dropdown = () =>{
    const { currencySymbol, setCurrencySymbol } = useContext(AppContext);

    const handlecurrencychange = (event) =>{
        setCurrencySymbol(event.target.value);
    };
    return(
        <div className="Dropdown-container">
            <div className="currency-label">currency:</div>
           <select className="currency-dropdown"
                    value={currencySymbol}
                    onChange={handlecurrencychange}>
                <option value="$">$ Dollar</option>
                <option value="£">£ Pound</option>
                <option value="€">€ Euro</option>
                <option value="₹">₹ Rupee</option>
            </select>
        </div>
    );
};
export default Dropdown;