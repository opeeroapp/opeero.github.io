import React from 'react';

import Header from '../partials/Header';
import PageIllustration from '../partials/PageIllustration';
import HeroHome from '../partials/HeroHome';
import Stats from '../partials/Stats';
import Carousel from '../partials/Carousel';
import Tabs from '../partials/Tabs';
import OpeeroBroadcast from '../partials/OpeeroBroadcast';
import PricingTables from '../partials/PricingTables';
import TestimonialsBlocks from '../partials/TestimonialsBlocks';
import FeaturesBlocks from '../partials/FeaturesBlocks';
import Cta from '../partials/Cta';
import Footer from '../partials/Footer';
import OpeeroAnalytics from '../partials/OpeeroAnalytics';
import OpeeroStaff from '../partials/OpeeroStaff';
import OpeeroAnalyticsLean from '../partials/OpeeroAnalyticsLean';

function Home() {
  return (
    <div className="flex flex-col min-h-screen overflow-hidden">

      {/*  Site header */}
      <Header />

      {/*  Page content */}
      <main className="grow">

        {/*  Page illustration */}
        <div className="relative max-w-6xl mx-auto h-0 pointer-events-none -z-1" aria-hidden="true">
          <PageIllustration />
        </div>

        {/*  Page sections */}
        <HeroHome />
        {/* <Stats /> */}
        {/* <Carousel /> */}
        {/* <Tabs /> */}
        <OpeeroBroadcast />
        <OpeeroStaff />
        {/* <OpeeroAnalytics /> */}
        <OpeeroAnalyticsLean />
        {/* <PricingTables /> */}
        {/* <TestimonialsBlocks /> */}
        {/* <FeaturesBlocks /> */}
        {/* <Cta /> */}

      </main>

      {/*  Site footer */}
      <Footer />

    </div>
  );
}

export default Home;