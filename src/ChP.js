import React from 'react';
import "./ChP.css"
import {useStateValue} from "./StateProvider"; 





function ChP({id,image,title,price,rating,hideButton}) {
    const [{ basket }, dispatch]= useStateValue();

    const removeFromBasket=() =>{
        dispatch({
            type:'REMOVE_FROM_BASKET',
            id:id,
        })
    }
      
  return (
    
    <div className='checkoutP'>
       <img className='cheoutP_img' src={image} alt=""/>
        <div className='checkoutP_info'>
           <p className='checkoutP_title'>{title}</p>
           <p className='checkoutP_price'>
            <small>$</small>  
            <strong>{price}</strong>
            </p>
            <div className='checkoutP_rating'>
             {Array(rating).fill().map((_,i) => (<p>🌟</p>))}
            </div>
            {!hideButton &&(<button onClick={removeFromBasket}>Remove from Basket</button>)}
       </div>
    </div>
    
  )
}

export default ChP