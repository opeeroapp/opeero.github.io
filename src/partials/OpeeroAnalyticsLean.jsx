import React, { useState } from 'react';

import VideoThumb from '../images/video-thumb.jpg';
import PlayBtn from '../images/play-button.svg';
import OpeeroAnalyticsBoxes from './OpeeroAnalyticsBoxes';

function OpeeroAnalyticsLean() {

  const [category, setCategory] = useState('1');

  return (
    <section className="relative">
    <div className="max-w-6xl mx-auto px-4 sm:px-6">
      <div className="py-12 md:py-20 border-t border-gray-200 dark:border-gray-800">
          {/* Section header */}
          <div className="max-w-3xl mx-auto text-center pb-12 md:pb-16" data-aos="fade-down">
            <h2 className="h2 font-red-hat-display mb-4">Track event metrics live.</h2>
            <p className="text-xl text-gray-600 dark:text-gray-400">Access our full suite of event personalized analytics - updated live during your event. And available to access after your event.</p>
          </div>

          <OpeeroAnalyticsBoxes />

        </div>
      </div>
    </section>
  );
}

export default OpeeroAnalyticsLean;
