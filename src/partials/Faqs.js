import React from 'react';
import FaqItem from './FaqItem';

function Faqs() {
  return (
    <section id="faq">
      
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="py-12 md:py-20 border-t border-gray-800">

          {/* Section header */}
          <div className="max-w-3xl mx-auto text-center pb-12">
            <h2 className="h2 text-white">Frequently asked questions</h2>
          </div>

          {/* Faqs */}
          <ul className="grid gap-8 md:grid-cols-2 xl:gap-x-16 lg:gap-y-12">
            <FaqItem title="When will the first drop be?"/>
            <FaqItem title="What will the artwork for the first drop be based on?" content="The artwork for the first drop will be based on the internet meme and emoji surrounding the “to the moon” rocketship emoji is widely used in chatrooms and social media when referring to communities hoping that a particular stock or asset will go up in value.  In particular, this emoji is highly relevant to the work Ben immersed himself in around the GME shortsqueeze."/>
            <FaqItem title="Will the first drop have rarity traits?" content="Yes!  There are X traits, etc."/>
            <FaqItem title="How will access to the discord and other token holder benefits with Ben work?"/>
            <FaqItem title="When will the second and third drops be?" content=" Our goal is to drop the second drop around 60 days from the first, and similarly the third drop to be 60 days from the second drop. "/>
            <FaqItem title="Will the second drop be airdropped or free mint with gas?" content="Yes!  We will announce a snapshot date after the first drop for those wallets eligible to mint the “bitcoin NFT” for free plus gas."/>
            <FaqItem title="Will the second drop be one free token for each first drop token i hold, or one per wallet?" content="It will be one free (plus gas) Bitcoin NFT token per wallet that holds at least one of the genesis drop tokens in their wallet.  Note:  it will not be one Bitcoing NFT token for each Genesis token held - so there will likely be less than 10,000 bitcoin NFT tokens ever in existence."/>
            <FaqItem title="Will the second and third drops have 10,000 pieces?" content="The second drop will likely be less than 10,000 pieces because it will be available for mint just at a one per wallet ratio, not a one per token ratio."/>
            <FaqItem title="Will the second and third drops have similar artwork and rarity traits to the first drop?" content="The second drop will be related to Ben’s work around Bitcoin’s early adopters, and the third drop will be related to Ben’s work around Las Vegas."/>
            <FaqItem title="When will the snapshot be taken for holders of all 3 tokens to secure participation in the collective ownership of 50% of the movie script? " content=" This still needs to be determined, but it will soon after the Vegas related drop, and we will announce more details as the project unfolds."/>
            <FaqItem title="What topic will the movie script be about?" content="This is still being determined; however, Ben is hoping to base the movie script on his journalistic work into the world of NFTs."/>
            <FaqItem title="When will the movie script be completed?" content="Ben will do his best to complete the script within 6 months of the third (Vegas) drop."/>
            <FaqItem title="If I’m a snapshot (all 3 tokens) holder, how will my portion of the ownership rights in the movie script work?" content="We are still working on the exact details, but we are looking into something along the lines of the following:  the holders of a complete set will be determined by a snapshot, and then be eligible to receive a Screenplay token (free plus mint) that allows for pro-rata ownership, etc, etc (to be written by the securities lawyers)."/>
            <FaqItem title="Will there be other benefits to owning these tokens?"/>
          </ul>

        </div>
      </div>
    </section>
  );
}

export default Faqs;
