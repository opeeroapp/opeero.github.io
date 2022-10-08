import React from 'react';

import MockupImage02 from '../images/mockup-image-02.jpg';
import MockupImage03 from '../images/mockup-image-03.jpg';
import MockupImage04 from '../images/mockup-image-04.jpg';
import IphoneMockup from '../images/iphone-mockup.png';

function OpeeroBroadcast() {
  return (
    <section className="relative">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="py-12 md:py-20 border-t border-gray-200 dark:border-gray-800">

          {/* Section header */}
          <div className="max-w-3xl mx-auto text-center" data-aos="fade-down">
            <h2 className="h2 font-red-hat-display mb-4">Let your attendees know the most pressing information.</h2>
            <p className="text-xl text-gray-600 dark:text-gray-400">Opeero Broadcast enables your event administrators to send messages to everyone who has checked into the event on the Opeero Client App.</p>
          </div>

        </div>
      </div>
    </section>
  );
}

export default OpeeroBroadcast;
