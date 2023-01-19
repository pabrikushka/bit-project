import './App.scss';
import { AnimatePresence } from "framer-motion";
import { BrowserRouter } from "react-router-dom";
import AnimatedRoutes from "./AnimatedRoutes";
import ThemeProvider from 'react-bootstrap/ThemeProvider';
import NavbarWidget from "./components/navbar/NavbarWidget";
import Footer from './components/footer/FooterWidget';
import SiteAlert from './components/siteAlert';

function App() {

  return (
    <ThemeProvider
      breakpoints={['xxxl', 'xxl', 'xl', 'lg', 'md', 'sm', 'xs', 'xxs']}
      minBreakpoint="xxs"
    >
      {/* <SiteAlert/> */}
      <NavbarWidget />
      <BrowserRouter>
        <AnimatedRoutes />
      </BrowserRouter>
      <Footer/>
    </ThemeProvider>
  );
}

export default App;
