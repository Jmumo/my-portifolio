import React from 'react'

import image from '../unsplash.jpeg'

function Home() {
    return (
        <div className="overflow-hidden">
            <main >
                <img src ={image} alt="unsplash" className="absolute object-cover w-full h-full"/>

                <section className ="relative flex justify-center min-h-screen pt-12 lg:pt-55 px-8">
                    <h1 className="text-6xl text-green-100 fonr-bold cursive leading-none lg:leading-snug home-name">Hello i am Mumo</h1>
                </section>
            </main>
        </div>
    )
}

export default Home
