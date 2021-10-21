import React from 'react';
import TimelineItem from './TimelineItem';

function Timeline() {
  return (
    <section id="roadmap">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="py-12 md:py-20">

          {/* Section header */}
          <div className="max-w-3xl mx-auto text-center pb-12 md:pb-20">
            <h2 className="h2 mb-4">Roadmap</h2>
            <p className="text-xl text-gray-400">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
          </div>

          {/* Items */}
          <div className="max-w-3xl mx-auto -my-4 md:-my-6" data-aos-id-timeline>
            <TimelineItem title="Genesis “Antisocial Network” Drop:" content="10,000 NFT collection around The Antisocial Network book with rocket ship emoji art and rarity traits.  Mint will be .08 ETH via [TBD] site." time="Nov '21"/>
            <TimelineItem title="“Bitcoin” Drop" content="X# NFT collection around Bitcoin Billionaires book with art TBD but related to Bitcoin.  Free to genesis token holders, one per wallet, free to mint plus gas." time="Dec '21"/>
            <TimelineItem title="“Vegas” Drop" content="10,000 NFT collection around Bringing Down the House with Vegas related artwork.  mint will be .08 eth via benmezrich.com site." time="Feb '22"/>
            <TimelineItem title="Screenplay Ownership" content="After all three of the drops above, we will announce a date for a snapshot of wallet holders that hold the complete set of all 3, and those wallets will be entitled to a Screenplay Token airdrop (free plus gas) - that will entitle the owner to own a part of the Screenplay." time="Mar '22"/>
          </div>

        </div>
      </div>
    </section>
  );
}

export default Timeline;