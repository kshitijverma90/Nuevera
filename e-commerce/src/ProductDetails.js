import React from 'react'
import {useLocation} from 'react-router-dom/cjs/react-router-dom.min'
import {useStateValue} from "./StateProvider";
function ProductDetails() {
    const location = useLocation()
    console.log(location)
    const title=location.state.data.title
    const price=location.state.data.price
    const rating=location.state.data.rating
    const image=location.state.data.image
    const id=location.state.data.id
    const [{basket},dispatch]=useStateValue();
 
    const addToBasket=()=>{
        dispatch({
          type :"ADD_TO_BASKET",
          item:{
            id:id,
            title:title,
            image:image,
            price:price,
            rating:rating,
          },
        });
    };
      return (
        <div className='product'>
        <div className='product_info'>
            <p> {title}</p>
            <p className='product_price'>
                <small>$</small>
                <strong>{price}</strong>
            </p>
            <div className='product_rating'>
                 {Array(rating).fill().map((_,i)=>(
                    <p>⭐</p>  
                 ))}
                
                
            </div>

        </div>
        <img  src={image} alt="" />
        {/* <Link to={{
    pathname: '/productdetails',
    state: { 
       data: {id,title,image,price,rating}
    },
  }}>  
          <p>view details</p>
        </Link> */}
        <button onClick={addToBasket}>Add to Basket</button>
    </div>
      )
  
}

export default ProductDetails
