import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';
import { media } from './global/global';
import Header from './components/Header';
import Footer from './components/Footer';
import About from './pages/About';
import Porfolio from './pages/Portfolio';
import Services from './pages/Services';
import Careers from './pages/Careers';
import Contact from './pages/Contact';
import NotFound from './pages/NotFound';

const Main =  () => (
  <Switch>
    <Route exact path='/' component={About} />
    <Route path='/portfolio' component={Porfolio} />
    <Route path='/services' component={Services} />
    <Route path='/careers' component={Careers} />
    <Route path='/contact' component={Contact} />
    <Route path='/404' component={NotFound} />
    <Redirect to='/404' />
  </Switch>
);
const breakpoints = {
  breakpoints: [media.phone.slice(10), media.tablet.slice(10), media.desktop.slice(10)]
}
const App = () => (
  <ThemeProvider theme={breakpoints}>
    <div>
      <Header />
      <Main />
      <Footer />
    </div>
  </ThemeProvider>
);

export default App;