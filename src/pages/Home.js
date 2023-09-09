import React from 'react';
import NavBar from '../components/Navbar'
import Footer from '../components/Footer'
import Header from '../components/Header'
import Contact from '../components/Contact'
import OneBanner from '../components/OneBanner'
import Product from '../components/Product'
import TwoBanner from '../components/TwoBanner'
function Home() {



    return (
        <>
      <div>
          <NavBar/>
          <Header/>
          <OneBanner/>
          <TwoBanner/>
          <Footer/>
      </div>
      </>
    )
  }
  
  export default Home