import axios from 'axios';

export const initialState ={
    products:[ {id:"1232141", title:"The lean startup", price:29.99, image:"https://images-na.ssl-images-amazon.com/images/I/51Zymoq7UnL._AC_SY400_.jpg",rating:5},{ id:"34834843", title:"Kenwood kMix Stand mixer for baking, stylish kitchen mixer with k-beater,dough hook and whisk,5 litre glass bowl", price:239.1 , image:"https://m.media-amazon.com/images/I/41otY93nRZL._AC_SY200_.jpg", rating:4},
    {id:"1232141", title:"The lean startup", price:29.99, image:"https://images-na.ssl-images-amazon.com/images/I/51Zymoq7UnL._AC_SY400_.jpg",rating:5},{ id:"34834843", title:"Kenwood kMix Stand mixer for baking, stylish kitchen mixer with k-beater,dough hook and whisk,5 litre glass bowl", price:239.1 , image:"https://m.media-amazon.com/images/I/41otY93nRZL._AC_SY200_.jpg", rating:4},
    {id:"1232141", title:"The lean startup", price:29.99, image:"https://images-na.ssl-images-amazon.com/images/I/51Zymoq7UnL._AC_SY400_.jpg",rating:5},{ id:"34834843", title:"Kenwood kMix Stand mixer for baking, stylish kitchen mixer with k-beater,dough hook and whisk,5 litre glass bowl", price:239.1 , image:"https://m.media-amazon.com/images/I/41otY93nRZL._AC_SY200_.jpg", rating:4} 
    ] ,
    
    basket:[],
    user:null
};

export const getBasketTotal=(basket)=>
  basket?.reduce((amount,item)=>item.price+amount,0);




const reducer = (state,action )=>{
    switch(action.type){
        case "ADD_TO_BASKET":
            return{
                ...state,
                basket:[...state.basket,action.item],
            };

        
        case "REMOVE_FROM_BASKET":
            
                const index =state.basket.findIndex(
                    (basketItem) => basketItem.id===action.id
                );
                let newBasket=[...state.basket];
              if(index>=0){
                  newBasket.splice(index,1);
              }  
            //   else{
            //       console.warn(
            //           'Cant remove product(id: ${action.id}) as its not in basket!')
            //       );
            //   }
            return {
                ...state,
                basket:newBasket
            }
        case "SET_USER":
            return {
                ...state,
                user: action.user
            } 
            
        case "CHANGE_CATEGORY":
            console.log('cateogory making calls1')
            const valueToSend = 'exampleValue';
            axios.get(`http://127.0.0.1:8080/endpoint?value=${action.item.category_id}`)
            .then(response => {
                console.log(response.data+'frontend');
            })
            .catch(error => {
                console.error('Error:', error);
            });
              
            
            return {
                //make a call then save it in product
                ...state,
                products:[ {id:"1232141", title:"The lean startup", price:29.99, image:"https://images-na.ssl-images-amazon.com/images/I/51Zymoq7UnL._AC_SY400_.jpg",rating:5},{ id:"34834843", title:"Kenwood kMix Stand mixer for baking, stylish kitchen mixer with k-beater,dough hook and whisk,5 litre glass bowl", price:239.1 , image:"https://m.media-amazon.com/images/I/41otY93nRZL._AC_SY200_.jpg", rating:4},
                {id:"1232141", title:"The lean startup", price:29.99, image:"https://images-na.ssl-images-amazon.com/images/I/51Zymoq7UnL._AC_SY400_.jpg",rating:5},{ id:"34834843", title:"Kenwood kMix Stand mixer for baking, stylish kitchen mixer with k-beater,dough hook and whisk,5 litre glass bowl", price:239.1 , image:"https://m.media-amazon.com/images/I/41otY93nRZL._AC_SY200_.jpg", rating:4}]
                
            }
                
        default:
            return state;    
    };
};

export default reducer;