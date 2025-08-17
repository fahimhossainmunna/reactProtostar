import React from 'react'
import Header from '../layouts/Header'
import Banner from '../layouts/Banner'
import Couter from '../layouts/Couter'
import Service from '../layouts/Service'
import Experience from '../layouts/Experience'
import Logos from '../layouts/Logos'
import Potfolio from '../layouts/Potfolio'
import Testymoni from '../layouts/Testymoni'
import Contact from '../layouts/Contact'
import Footer from '../layouts/Footer'

const Home = () => {
  return (
    <>
     <Header/>
    <Banner/>
    <Couter/>
    <Service/>
    <Experience/>
    <Logos/>
    <Potfolio/>
    <Testymoni/>
    <Contact/>
    <Footer/>
    </>
  )
}

export default Home