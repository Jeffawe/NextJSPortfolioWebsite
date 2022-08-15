import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import { useState } from 'react'

import { Navbar, HomeMenu, AboutUs, Projects, Footer, MenuBarAndroid, BottomFooter} from '../components/index' 

const Home: NextPage = () => {
  const [MenuBar, setMenuBar] = useState(false);
  const [HomePage, setHomePage] = useState(true);

  const OnButtonPress = () => {
    setMenuBar(true);
  }

  const OnExit = () => {
    setMenuBar(false);
  }

  return (
    <div className="scroll-smooth relative">
      <Head>
        <title>Jeffery Ozoekwe-Awagu</title>
        <link rel="icon" href="/favicon.ico" />
        <link href="https://fonts.googleapis.com/css2?family=Montserrat:wght@100;200;400;600;700&display=swap" rel="stylesheet"></link>
      </Head>

      {!MenuBar && 
        <div className='w-screen'>
          <Navbar OnButtonPress = {OnButtonPress} HomePage = {HomePage} />
          <HomeMenu />
          <AboutUs />
          <Projects />
          <Footer />
          <BottomFooter />
        </div>
      }

      
      {MenuBar && 
        <div className='w-screen'>
          <div>
            <MenuBarAndroid OnExit={OnExit} HomePage = {HomePage}  />
          </div>
          <div className='blur-sm'>
            <Navbar OnButtonPress = {OnButtonPress} HomePage = {HomePage}  />
            <HomeMenu />
            <AboutUs />
            <Projects />
            <Footer />
            <BottomFooter />
          </div>
        </div>
      }
      
    </div>
  )
}

export default Home
