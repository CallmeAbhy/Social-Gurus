import React from 'react'
import Multiselect from 'multiselect-react-dropdown'
import { useState } from 'react'
const SearchSec = () => {
  const data = [
    {
        "id": 1,
        "city": "Kolkata ",
        "state": "West Bengal"
    },
    {
        "id": 2,
        "city": "New Delhi",
        "state": "Delhi"
    },
    {
        "id": 3,
        "city": "Chennai ",
        "state": "Tamil Nadu"
    },
    {
        "id": 4,
        "city": "Mumbai",
        "state": "Maharashtra"
    },
    {
        "id": 5,
        "city": "Bangalore",
        "state": "Karnataka"
    },
    {
        "id": 6,
        "city": "Pune",
        "state": "Maharashtra"
    },
    {
        "id": 7,
        "city": "Chennai ",
        "state": "Tamil Nadu"
    },
    {
        "id": 8,
        "city": "Gurgaon",
        "state": "Uttar Pradesh"
    },
    {
        "id": 9,
        "city": "Hyderabad",
        "state": "Andhra Pradesh"
    }
]
const [options] = useState(data);

  return (
    
     <div style={{width: '90%', justifyContent: 'center', display: 'flex'}}>
    <div>
      <h3 style={{color:"red"}}>Multiselect Dropdown useState</h3>
      <Multiselect options={options} displayValue="city"></Multiselect>
    </div>


    
    </div>

  )
}

export default SearchSec
