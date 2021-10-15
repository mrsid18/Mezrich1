import React from 'react';

import Header from '../partials/Header';
import PageIllustration from '../partials/PageIllustration';
import HeroHome from '../partials/HeroHome';
import Process from '../partials/Process';
import FeaturesHome from '../partials/FeaturesHome';
import Tabs from '../partials/Tabs';
import Target from '../partials/Target';
import News from '../partials/News';
import Newsletter from '../partials/Newsletter';
import Footer from '../partials/Footer';
import Faqs from '../partials/Faqs';
import FeaturesZigzag from '../partials/FeaturesZigzag';
import Timeline from '../partials/Timeline';

function Home() {
  return (
    <div className="flex flex-col min-h-screen overflow-hidden z-50" id="home">
      {/* <div className="bg-gradient-to-b from-gray-900 to-blue-400"> */}
      {/*  Site header */}
      <Header />

      {/*  Page content */}
      <main className="flex-grow" id="main">

        {/*  Page sections */}
        <HeroHome />
        <FeaturesZigzag />
        <Timeline />
        <Faqs />
        {/* <Tabs />
        <Target />
        <News />
        <Newsletter /> */}

      </main>

      {/*  Site footer */}
      <Footer />
    </div>
  );
}

export default Home;