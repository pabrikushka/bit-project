import * as React from 'react';
import Hero from "../components/hero";
import RunningText from "../components/runningText.jsx";
import Book from "../components/book.tsx";
import Overview from "../components/overview.tsx";
import GalleryWidget from "../components/gallery/GalleryWidget";
import Exhibition from '../components/exhibition';
import TransitAnimator from "../shared/TransitAnimator";



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
            <GalleryWidget/>
            <Overview
                title={"The ultimate btc collection"}
                text={"Experience a multi-sensory journey through 128 uniquly enhanced Bitcoin artworks by leading creatives from the Smashtoshi Collective. Combined with AR, AI, customisable materials and print finishes BIT is unique in the world of luxury publications."}
                buttonText={"Buy BIT"}
            />
            <Book/>
            {/* <Overview
                title={"Experience the exhibition"}
                text={"Kicking off the world tour at legendary W1 Curates in the heart of London. Experience a multi-sensory journey through 128 uniquly enhanced bitcoin artworks by leading creatives from the Smashtoshi Collective. "}
                buttonText={"Book Your Tickets"}
            /> */}
            {/* <Exhibition/> */}
            <TransitAnimator image={null} />
        </main>
    )
}

export default Home;