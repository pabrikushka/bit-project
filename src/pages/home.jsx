import * as React from 'react';
import Hero from "../components/hero";
import RunningText from "../components/runningText.tsx";
import Overview from "../components/overview.tsx";
import Gallery from "../components/gallery";



const Home = () => {

    return (
        <main className='overflow-hidden'>
            <Hero/>
            <RunningText/>
            <Overview
                title={"The history of bitcoin"}
                text={"They say a picture tells a thousand words — BIT goes further. Each artwork is accompanied with stories and facts uncovered by our team of historians and wrapped in an immersive soundtrack by world-class musicians and DJs."}
                buttonText={"Explore the Artworks"}
            />
            <Gallery/>
            <Overview
                title={"The ultimate btc collection"}
                text={"Experience a multi-sensory journey through 128 uniquly enhanced Bitcoin artworks by leading creatives from the Smashtoshi Collective. Combined with AR, AI, customisable materials and print finishes BIT is unique in the world of luxury publications."}
                buttonText={"Buy BIT"}
            />
            <div className="dummy" style={{ height: 2000 }}></div>
        </main>
    )
}

export default Home;