import type { NextPage } from 'next'
import { useState } from 'react'
import { useRouter } from 'next/router'
import Head from 'next/head'
import { getProjects, getCategories } from '../services/index'


import { Navbar, PortfolioProjects, MenuBarAndroid, BottomFooter } from '../components/index';

const Projects: NextPage = ( { categories }:any ) => {
    const [OpenMenu, setOpenMenu] = useState(false);
    const [HomePage, setHomePage] = useState(false);

    const OnButtonPress = () => {
        setOpenMenu(true);
    }

    const OnExit = () => {
        setOpenMenu(false);
    }

    console.log(categories);

    return (
        <div className='scroll-smooth w-screen relative'>
            <Head>
                <title>Jeffery Ozoekwe-Awagu</title>
                <link rel="icon" href="/favicon.ico" />
                <link href="https://fonts.googleapis.com/css2?family=Montserrat:wght@100;200;400;600;700&display=swap" rel="stylesheet"></link>
            </Head>
            
            {!OpenMenu &&
                <div className='w-screen'>
                    <Navbar OnButtonPress={OnButtonPress} HomePage={HomePage} />
                    <PortfolioProjects categories={categories} key={categories.title}/>
                    <BottomFooter />
                </div>
            }

            {OpenMenu &&
                <div className='w-screen'>
                    <div>
                        <MenuBarAndroid OnExit={OnExit} HomePage={HomePage} />
                    </div>
                    <div className='blur-sm'>
                        <Navbar OnButtonPress={OnButtonPress} HomePage={HomePage} />
                        <PortfolioProjects categories={categories} key={categories.id}/>
                        <BottomFooter />
                    </div>
                </div>
            }
        </div>
    )
}

export default Projects;

export async function getStaticProps() {
    const categories = (await getCategories()) || [];

    return {
        props: { categories }
    }
        
}