import React from 'react'
import "./Home.css"
import Product from './Product';
import {useStateValue} from "./StateProvider";
function Home() {
  const[{products,basket,user},dispatch]=useStateValue();
  const rows = [];
  for (let i = 0; i < products.length; i += 3) {
    const rowproducts = products.slice(i, i + 3);
    rows.push(
      <div className="home_row">
        {rowproducts.map((item, index) => (
          <Product key={index} id={item.id} title={item.title} price={item.price} image={item.image} rating={item.rating} />
        ))}
      </div>
    );
  }
  return (
     <div className='home'>
         <div className='home_container'>
         <img className='home_image' src="https://images-eu.ssl-images-amazon.com/images/G/02/digital/video/merch2016/Hero/Covid19/Generic/GWBleedingHero_ENG_COVIDUPDATE__XSite_1500x600_PV_en-GB._CB428684220.jpg" alt="" /> 
           {rows}
          </div>
          </div>
  )     
  }

export default Home