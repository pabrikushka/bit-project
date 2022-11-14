import './App.scss';
import { AnimatePresence } from "framer-motion";
import { BrowserRouter } from "react-router-dom";
import AnimatedRoutes from "./AnimatedRoutes";
import ThemeProvider from 'react-bootstrap/ThemeProvider';
import NavbarWidget from "./components/navbar/NavbarWidget";

function App() {

  return (
    <ThemeProvider
      breakpoints={['xxxl', 'xxl', 'xl', 'lg', 'md', 'sm', 'xs', 'xxs']}
      minBreakpoint="xxs"
    >
      <NavbarWidget />
      <BrowserRouter>
        <AnimatedRoutes />
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
