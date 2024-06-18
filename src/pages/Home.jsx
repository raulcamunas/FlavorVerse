import React from 'react'
import Header from '../components/Header'
import Recipes from '../components/Recipes'

function Home() {
    return (
        <>
            <main className='w-full flex flex-col'>
                <Header 
                    title={
                        <p>
                            Taste the World With <br /> FlavorVerse!
                        </p>
                    }
                    type='home'
                />
            </main>
            
            <section id='recipes' className='md:max-w-[1440px] mx-auto px-4 md'>
                <Recipes />
            </section>
        </>
    )
}

export default Home