import React from 'react'
import './Header.css'
import SearchIcon from '@mui/icons-material/Search';
import ShoppingBasketIcon from '@mui/icons-material/ShoppingBasket';
 import {Link} from "react-router-dom";
import {useStateValue} from "./StateProvider";
import { auth } from './firebase';
import axios from './axios';


function Header() {
  const[{products,basket,user},dispatch]=useStateValue();

  const handleAuthentication=()=>{
      if(user){
          auth.signOut();
      }
  }

  const optionselected=(e)=>{
    console.log(e.target.value)
    // axios.post('http://localhost:9000/categories',{
    //     category_id:e.target.value
    // })
    //.then (res=>{
        dispatch({
            type :"CHANGE_CATEGORY",
            item:{
              category_id:e.target.value
            },
          });
    //})
    
  }

  return (
    <div className='header'>
        <Link to="/">
         <img className='header_logo' src='http://pngimg.com/uploads/amazon/amazon_PNG11.png'/>
         </Link>
         <div className='header_search'>
             <input className='header_searchInput' type="text" />
             <SearchIcon className='header__searchIcon'/> 
         </div>
         <div className='header_option'>
             <span className='header_optionLineOne'>Search</span>
                 <span className='header_optionLineTwo'>By Category</span>
                 <select id="fruitDropdown" onChange={optionselected}>
                    <option value="1">All</option>
                    <option value="2">Electronics</option>
                    <option value="3">Groceries</option>
                    <option value="4">Domestics</option>
                    <option value="5">Vegetables</option>
                </select>
             </div>
         <div className='header_nav'>
         <Link to={!user &&"/login"}> 
             <div onClick={handleAuthentication} className='header_option'>
                 <span className='header_optionLineOne'>{user ? 'Hello User':'Hello Guest'}</span>
                <span className='header_optionLineTwo'>{user ? 'Sign Out':'Sign In'}</span>
             </div>
             </Link>
             <div className='header_option'>
             <span className='header_optionLineOne'>Returns</span>
                 <span className='header_optionLineTwo'>& Orders</span>
             </div>
             <div className='header_option'>
             <span className='header_optionLineOne'>Your</span>
                 <span className='header_optionLineTwo'>Prime</span>
             </div>
             
              <Link to="/checkout">
              <div className='header_optionBasket'>
                 <ShoppingBasketIcon/>
                 <span className='header_optionLineTwo header_basketCount'>{basket?.length}</span>
             </div>
              </Link>

            
         </div>
    </div>
  )
}

export default Header