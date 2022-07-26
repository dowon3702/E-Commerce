import React from 'react';
import "./Home.css";
import Product from './Product';




function Home() {
  return (
    <div className='home'>
    <div className='home_C'>
        <img
        className='home-img'
         src="https://images-eu.ssl-images-amazon.com/images/G/02/digital/video/merch2016/Hero/Covid19/Generic/GWBleedingHero_ENG_COVIDUPDATE__XSite_1500x600_PV_en-GB._CB428684220_.jpg" 
        alt=''/>

        

        <div className='home__R'>
          
             <Product   
             id="12321341"
             title="The Subtle Art of Not Giving a F*ck: A Counterintuitive Approach to Living a Good Life (Mark Manson Collection Book 1)"
             price={20.99}
             image="https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1465761302i/28257707._UY400_SS400_.jpg"
             rating={5}
             />
            
             <Product
            
             id='49538094'
             title="Cracking the Coding Interview: 189 Programming Questions and Solutions Paperback – July 1 2015"
             price={459.99}
             rating={4}
             image="https://images-na.ssl-images-amazon.com/images/I/41oYsXjLvZL._SX348_BO1,204,203,200_.jpg"
             />
             
        </div>
        
        <div className='home__R'>
        <Product
         
         id="4903850"
         title="Apple Watch Series 3 (GPS, 38mm) - Space Grey Aluminium Case with Black Sport Band"
         price={399.99}
         image="https://m.media-amazon.com/images/I/71KGrESMM3L._AC_SL1500_.jpg"
         rating={3} 
         />
        <Product
         
         id="23445930"
         title="2020 Apple MacBook Air Laptop: Apple M1 Chip, 13 Retina Display, 8GB RAM, 256GB SSD Storage, Backlit Keyboard, FaceTime HD Camera, Touch ID. Works with iPhone/iPad; Space Gray, English "
         price={1299.99}
         image="https://multimedia.bbycastatic.ca/multimedia/products/500x500/154/15458/15458689.jpeg"
         rating={4}
         />
        <Product
        
        id="3254354345"
        title="New Apple iPad Pro (12.9-inch, Wi-Fi, 128GB)-Silver (4th Generation)"
        price={589.99}
        image="https://images-na.ssl-images-amazon.com/images/I/816ctt5WV5L._AC__SX385_.jpg"
        rating={4} 
        />
        </div>
        <div className='home__R'>
        <Product

         id='90829332'
         title="Samsung LC 49RG90SSUXEN 49' Curved LED Gaming Monitor - Super Ultra Wide Dual WQHD 5120 X 1440 "
         price={1094.98}
         image="https://images-na.ssl-images-amazon.com/images/I/6125mFrzr6L._AC__SX355_.jpg"
         rating={4} 
        />
        </div>

    </div>
    </div>
    
  )
}

export default Home