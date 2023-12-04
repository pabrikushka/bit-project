import './App.scss';
import { AnimatePresence } from 'framer-motion';
import { ApolloProvider } from '@apollo/client';
import { BrowserRouter } from 'react-router-dom';
import apolloClient from './services/graphql/apolloClient';
import AnimatedRoutes from './AnimatedRoutes';
import ThemeProvider from 'react-bootstrap/ThemeProvider';
import NavbarWidget from './components/navbar/NavbarWidget';
import Footer from './components/footer/FooterWidget';
import SiteAlert from './components/siteAlert';
import DefaultSEO from './components/seo/DefaultSEO';
import { SizesProvider } from './context/sizesContext';

// TODO add correct DefaultSEO values
function App() {
  return (
    <SizesProvider>
      <ApolloProvider client={apolloClient}>
        <ThemeProvider breakpoints={['xxxl', 'xxl', 'xl', 'lg', 'md', 'sm', 'xs', 'xxs']} minBreakpoint='xxs'>
          {/* <SiteAlert/> */}
          <BrowserRouter>
            <NavbarWidget />
            <AnimatedRoutes />
            <Footer />
          </BrowserRouter>
          
          <DefaultSEO
            title='History of Bitcoin | by Smashtoshi'
            description='Global Art Collective. Telling the stories that deserve to be told. #Bitcoin'
            keywords={[]}
          />
        </ThemeProvider>
      </ApolloProvider>
    </SizesProvider>
  );
}

export default App;
