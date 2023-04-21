import "./App.scss";
import { AnimatePresence } from "framer-motion";
import { ApolloProvider } from "@apollo/client";
import { BrowserRouter } from "react-router-dom";
import apolloClient from "./services/graphql/apolloClient";
import AnimatedRoutes from "./AnimatedRoutes";
import ThemeProvider from "react-bootstrap/ThemeProvider";
import NavbarWidget from "./components/navbar/NavbarWidget";
import Footer from "./components/footer/FooterWidget";
import SiteAlert from "./components/siteAlert";
import DefaultSEO from "./components/seo/DefaultSEO";

function App() {
  return (
    <ApolloProvider client={apolloClient}>
      <ThemeProvider breakpoints={["xxxl", "xxl", "xl", "lg", "md", "sm", "xs", "xxs"]} minBreakpoint="xxs">
        {/* <SiteAlert/> */}
        <BrowserRouter>
          <NavbarWidget />
          <AnimatedRoutes />
        </BrowserRouter>
        <Footer />
        <DefaultSEO />
      </ThemeProvider>
    </ApolloProvider>
  );
}

export default App;
