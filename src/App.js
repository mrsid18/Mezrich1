import React, { useEffect } from 'react';
import {
  Switch,
  HashRouter,
  useLocation,
} from 'react-router-dom';

import './css/style.scss';
import './css/app.scss';

import AOS from 'aos';
import { focusHandling } from 'cruip-js-toolkit';

import Home from './pages/Home';
import Features from './pages/Features';
import Pricing from './pages/Pricing';
import Blog from './pages/Blog';
import BlogPost from './pages/BlogPost';
import About from './pages/About';
import Contact from './pages/Contact';
import Help from './pages/Help';
import PageNotFound from './pages/PageNotFound';

function App() {

  const location = useLocation();

  useEffect(() => {
    document.documentElement.style.setProperty("--pageHeight", document.documentElement.scrollHeight+'px');
    AOS.init({
      once: true,
      disable: 'phone',
      duration: 600,
      easing: 'ease-out-sine',
    });
  });

  // useEffect(() => {
  //   document.querySelector('html').style.scrollBehavior = 'auto'
  //   window.scroll({ top: 0 })
  //   document.querySelector('html').style.scrollBehavior = ''
  //   focusHandling('outline');
  // }, [location.pathname]); // triggered on route change

  return (
    <>
      <Switch>
        <HashRouter exact path="/">
          <Home />
        </HashRouter>
        <HashRouter path="/features">
          <Features />
        </HashRouter>
        <HashRouter path="/pricing">
          <Pricing />
        </HashRouter>
        <HashRouter path="/blog">
          <Blog />
        </HashRouter>
        <HashRouter path="/blog-post">
          <BlogPost />
        </HashRouter>
        <HashRouter path="/about">
          <About />
        </HashRouter>
        <HashRouter path="/contact">
          <Contact />
        </HashRouter>
        <HashRouter path="/help">
          <Help />
        </HashRouter>
        <HashRouter path="*">
          <PageNotFound />
        </HashRouter>
      </Switch>
    </>
  );
}

export default App;
