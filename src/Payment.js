import React, { useEffect, useState } from 'react';
import './Payment.css';
import {useStateValue} from './StateProvider';
import ChP from './ChP';
import{Link,useHistory} from 'react-router-dom';
import{CardElement, useStripe, useElements} from '@stripe/react-stripe-js';
import CurrencyFormat from 'react-currency-format';
import {getBasketTotal} from './reducer';
import axios from './axios';
import {db} from './firebase';
import {doc, setDoc} from 'firebase/firestore'


function Payment() {
    const [{basket,user},dispatch] =useStateValue();
    const stripe=useStripe();
    const elements=useElements();
    const [succeeded,setSucceded]=useState(false);
    const [processing,setProcessing]=useState("");
    const [clientSecret,setClientSecret]=useState(true);
    const history = useHistory();

    useEffect(()=>{
        const getClientSecret = async ()=>{
            const response= await axios({
                method:'post',
                url: `/payments/create?total=${getBasketTotal(basket)*100}`
            });
            setClientSecret(response.data.clientSecret)
        }
        getClientSecret();
    },[basket])

    console.log('THE SECRET IS >>>',clientSecret)
    const handleSubmit =async e =>{
        e.preventDefault();
        setProcessing(true);

        const payload = await stripe.confirmCardPayment(clientSecret,{payment_method:{
            card:elements.getElement(CardElement)}
        }).then(({paymentIntent})=>{
             db
             .collection('users')
             .doc(user?.uid)
             .collection('orders')
             .doc(paymentIntent.id)
             .set({
               basket: basket,
               amount: paymentIntent.amount,
               created: paymentIntent.created
             })

            setSucceded(true);
            setError(null)
            setProcessing(false)
            dispatch({
                type:'EMPTY_BASKET'
            })
            history.replace('./orders')
        })
    };
    const hanndleChange=e =>{
        setDisabled(e.empty);
        setError(e.error ? e.error.message :"");
    };
    const [error,setError]=useState(null);
    const[disabled,setDisabled]=useState(true);

    
    
  return (
    <div className='payment'>
        <div className='pay_container'>
            <h1>Checkout(<Link to='./checkout'>{basket?.length} Items</Link>)</h1>
            <div className='pay_section'>
                <div className='pay_title'>
                    <h3>Delivery Address</h3>
                </div>
                <div className='pay_adress'>
                    <p>{user?.email}</p>
                </div>
            </div>
            <div className='pay_section'>
            <div className='pay_title'>
                <h3>Reviews Items and Delivery</h3>
            </div>
                <div className='pay_items'>
                    {basket.map (item =>(<ChP
                    id= {item.id}
                    title = {item.title}
                    image = {item.image}
                    price = {item.price}
                    rating= {item.rating}
                    />))}
                </div>
             </div>

             <div className='pay_section'>
                <div className='pay_title'>
                    <h3>Payment Method</h3>
                </div>
                <div className='pay_details'>
                    <form onSubmit={handleSubmit}>
                        <CardElement onChange={hanndleChange}/>
                        <div className='pay_priceCon'>
                        <CurrencyFormat 
                             renderText={(value) => (
                                 <h3>Order Total: {value}</h3>
                                 
                             )}
                             decimalScale={2}
                             value={getBasketTotal(basket)}
                             displayType={"text"}
                             thousandSeparator={true}
                             prefix={"$"}
                             />
                             <button disabled={processing || disabled ||succeeded}>
                                <span>{processing?<p>processing</p>: "Buy Now"}</span>
                             </button>
                        </div>
                        {error &&<div>{error}</div>}
                    </form>

                </div>
             </div>
        </div>
    </div>
  )
}

export default Payment