import React, { useEffect, useState } from "react";
import styles from "./Countries.module.css"

function Card({country, flag}){
  return(
    <div className={styles.card}>
      <img src={flag} alt="flag" />
      <h5>{country}</h5>
    </div>
  )
}

function Countries(){
  const[countries, setCountries] = useState([]);

  useEffect(()=>{
    fetchCountries();
  },[])

  async function fetchCountries(){
    try{
      const apiResponse =await fetch(" https://xcountries-backend.azurewebsites.net/all");
      const finalResponse =await apiResponse.json();
      console.log(finalResponse);
      setCountries(finalResponse);
    }catch(error){
      console.error("Error fetching data: ",error);
    }
  }

  return (
    <div className={styles.countries}>
      {countries.length > 0 ? (
        countries.map((country)=>  <Card key={country.name} country = {country.name} flag = {country.flag} />
      )):(
        <p>No Countries available</p>
      )}
    </div>
  );
}

export default Countries;