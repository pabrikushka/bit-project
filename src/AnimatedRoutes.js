import React, {lazy} from 'react'
import { useLocation, Routes, Route } from "react-router-dom";
import { AnimatePresence } from "framer-motion";

// Pages 
// import Home from "./pages/home.jsx";
// import HistoryWidget from "./components/history/HistoryWidget";
// import ArtWidget from "./components/art/ArtWidget";
// import Events from "./pages/events";
// import FaqWidget from "./components/faq/FaqWidget";
// import CollectiveWidget from "./components/collective/CollectiveWidget";


const Home = lazy(() => import("./pages/home.jsx"));
const HistoryWidget = lazy(() => import("./components/history/HistoryWidget"));
const ArtWidget = lazy(() => import("./components/art/ArtWidget"));
const Events = lazy(() => import("./pages/events"));
const FaqWidget = lazy(() => import("./components/faq/FaqWidget"));
const CollectiveWidget = lazy(() => import("./components/collective/CollectiveWidget"));
const NotFound = lazy(() => import("./components/404"));

const AnimatedRoutes = () => {
    const location = useLocation();

    return (
        <AnimatePresence mode='wait'>
            <Routes location={location} key={location.pathname}>
                <Route path="/" exact element={<Home />} />
                <Route path="/history" exact element={<HistoryWidget />} />
                <Route path="/art/:artId" exact 
                element={
                    // kind of workaround to provide art object for a very first rendering 
                    <ArtWidget initialArt={location?.state?.id ? location?.state: undefined}/>
                } />
                <Route path="/collective" exact element={<CollectiveWidget/>} />
                <Route path="/events" exact element={<Events />} />
                <Route path="/faq" exact element={<FaqWidget/>} />
                <Route path='*' exact element={ <NotFound/> }/>
            </Routes>
        </AnimatePresence>
    );
};

export default AnimatedRoutes;