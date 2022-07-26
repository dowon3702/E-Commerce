import React from 'react';
import "./Product.css";
import { useStateValue } from './StateProvider';
import {Spring,useSpring,animated} from 'react-spring';




const calc = (x,y)=> [(y - window.innerHeight/2) /20, (x - window.innerWidth/3)/10 ,1.1]
const trans =(x,y,s)=> `perspective(600px) rotateX(${x}deg) rotation(${y}deg) scale(${s})`


function Product({id,title,image,price,rating}) {
    const [props,set]= useSpring(()  => ({xys:[0,0,1],config:{mass:3,tension:100,friction:300}}))

    const [{basket},dispatch] = useStateValue();

    console.log( basket);

    const addtoBasket=() =>{

        dispatch({
            type:"ADD_TO_BASKET",
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
     
    <div className='product__amz'>
        <div className='info'>
            <p>{title}</p>
            <p className='price'>
                <small>$</small>
                <strong>{price}</strong>
            </p>
            <div className='rating'>
                {Array(rating).fill().map((_,i) =>(<p>🌟</p>))}
                
            </div>
        </div>
        <img src={image}alt=''/>
        <button onClick={addtoBasket}>Add to Basket</button>
    </div>
   
    
    
  )
}

export default Product
