import React from 'react';
import FaqItem from './FaqItem';

function Faqs() {
  return (
    <section id="faq">
      
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="py-12 md:py-20 border-t border-gray-800">

          {/* Section header */}
          <div className="max-w-3xl mx-auto text-center pb-12">
            <h2 className="h2 text-red-600">Frequently asked questions</h2>
          </div>

          {/* Faqs */}
          <ul className="grid gap-8 md:grid-cols-2 xl:gap-x-16 lg:gap-y-12">
            <FaqItem title="When will the first drop be?"/>
            <FaqItem title="What will the artwork for the first drop be based on?"/>
            <FaqItem title="Will the first drop have rarity traits?"/>
            <FaqItem title="How will access to the discord and other token holder benefits with Ben work?"/>
            <FaqItem title="When will the second and third drops be?"/>
            <FaqItem title="Will the second drop be airdropped or free mint with gas?"/>
            <FaqItem title="Will the second drop be one free token for each first drop token i hold, or one per wallet?"/>
            <FaqItem title="Will the second and third drops have 10,000 pieces?"/>
            <FaqItem title="Will the second and third drops have similar artwork and rarity traits to the first drop?"/>
            <FaqItem title="When will the snapshot be taken for holders of all 3 tokens to secure participation in the collective ownership of 50% of the movie script? "/>
            <FaqItem title="What topic will the movie script be about?"/>
            <FaqItem title="When will the movie script be completed?"/>
            <FaqItem title="If I’m a snapshot (all 3 tokens) holder, how will my portion of the ownership rights in the movie script work?"/>
            <FaqItem title="Will there be other benefits to owning these tokens?"/>
          </ul>

        </div>
      </div>
    </section>
  );
}

export default Faqs;
