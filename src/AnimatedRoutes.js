import { useLocation, Routes, Route } from "react-router-dom";
import { AnimatePresence } from "framer-motion";

// Pages 
import Home from "./pages/home.jsx";
import HistoryWidget from "./components/history/HistoryWidget";
import Art from "./pages/art";


const AnimatedRoutes = () => {
    const location = useLocation();

    return (
        <AnimatePresence exitBeforeEnter>
            <Routes location={location} key={location.pathname}>
                <Route path="/" exact element={<Home />} />
                <Route path="/history" exact element={<HistoryWidget />} />
                <Route path="/art" exact element={<Art />} />
            </Routes>
        </AnimatePresence>
    );
};

export default AnimatedRoutes;