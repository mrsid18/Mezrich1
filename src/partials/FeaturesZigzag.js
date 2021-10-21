import React from 'react';
import ListItem from './ListItem';

function FeaturesZigzag() {
  return (
    <section id="learnMore">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="py-12 md:py-20 border-t border-gray-800">

          {/* Section header */}
          <div className="max-w-3xl mx-auto text-center pb-12 md:pb-16">
            <h1 className="h2 mb-4">3 NFT  Drops&nbsp; &  &nbsp;Membership Levels</h1>
            <p className="text-xl text-gray-400">The “Ben Mezrich Project” will have an initial 3 NFT drops and membership levels from the get go. </p>
          </div>

          {/* Items */}
          <div className="grid gap-20">

            {/* 1st item */}
            <div className="md:grid md:grid-cols-12 md:gap-6 items-center">
              {/* Image */}
              <div className="max-w-xl md:max-w-none md:w-full mx-auto md:col-span-5 lg:col-span-6 mb-8 md:mb-0 md:order-1" data-aos="fade-up">
                <img className="max-w-full mx-auto md:max-w-none h-auto" src={require('../img/rocket-1.jpeg').default} width="540" height="405" alt="Features 01" />
              </div>
              {/* Content */}
              <div className="max-w-xl md:max-w-none md:w-full mx-auto md:col-span-7 lg:col-span-6" data-aos="fade-right">
                <div className="md:pr-4 lg:pr-12 xl:pr-16">
                  <div className="font-architects-daughter text-3xl text-purple-600 mb-2">Drop #1</div>
                  <h3 className="h3 mb-3">10,000 NFT collection around The Antisocial Network book with rocket ship emoji art and rarity traits.  Mint will be .08 ETH via [TBD] site.</h3>
                  {/* <p className="text-xl text-gray-400 mb-4">The first drop will be a 10,000 piece collection inspired by my most recent journey into the world of the GME short, meme stocks and taking on wall street.  (Holders of the first token will be considered Level One members.)</p> */}
                  <p className="text-xl text-gray-400 mb-4">Holders of the these genesis Mezrich NFTs will be entitled to level 1 access and benefits :</p>
                  <ul className="text-lg text-gray-400 -mb-2">
                    <ListItem>Access to discord community chatroom where Ben will be one of the participants from time to time </ListItem>
                    <ListItem>Monthly, live members only Q&A sessions with Ben(to take place in discord or private zoom)</ListItem>
                    <ListItem>Opportunity to win an invite to a “poker with Ben” event, online.</ListItem>
                    <ListItem>Monthly Newsletter/Bonus Unlockable Content from Ben</ListItem>
                    <ListItem>Opportunity to win or buy limited edition merch themed around Ben’s work</ListItem>
                  </ul>
                </div>
              </div>
            </div>

            {/* 2nd item */}
            <div className="md:grid md:grid-cols-12 md:gap-6 items-center">
              {/* Image */}
              <div className="max-w-xl md:max-w-none md:w-full mx-auto md:col-span-5 lg:col-span-6 mb-8 md:mb-0 md:rtl" data-aos="fade-up">
                <img className="max-w-full mx-auto md:max-w-none h-auto" src={require('../img/rocket-2.jpeg').default} width="540" height="405" alt="Features 02" />
              </div>
              {/* Content */}
              <div className="max-w-xl md:max-w-none md:w-full mx-auto md:col-span-7 lg:col-span-6" data-aos="fade-left">
                <div className="md:pl-4 lg:pl-12 xl:pl-16">
                <div className="font-architects-daughter text-3xl text-purple-600 mb-2">Drop #2</div>
                  <h3 className="h3 mb-3">X# NFT collection around Bitcoin Billionaires book with art TBD but related to Bitcoin.  Free to genesis token holders, one per wallet, free to mint plus gas.  Targeting Dec timeframe. </h3>
                  <p className="text-xl text-gray-400 mb-4">Holders of at least one genesis and one Bitcoin Mezrich NFT will be entitled to level 2 access and benefits - level 2 access includes all of level 1 access/benefits plus these additional ones:  </p>
                  <ul className="text-lg text-gray-400 -mb-2">
                    <ListItem>Opportunity to win/be invited to participate in 1 on 1 or group writing coaching virtual events built around community contests or participation</ListItem>
                    <ListItem>Advanced, discounted, signed physical copies of future work from Ben</ListItem>
                    <ListItem>Opportunity to win/be invited to future book launch parties exclusive to level two token holders</ListItem>
                    <ListItem>Additional art airdrops (free plus gas) themed around future book releases, separate from 3 drops mentioned above</ListItem>
                    <ListItem>Opportunity to win/be invited to a Blackjack with Ben event live in Vegas (covid permitting)</ListItem>
                  </ul>
                </div>
              </div>
            </div>

            {/* 3rd item */}
            <div className="md:grid md:grid-cols-12 md:gap-6 items-center">
              {/* Image */}
              <div className="max-w-xl md:max-w-none md:w-full mx-auto md:col-span-5 lg:col-span-6 mb-8 md:mb-0 md:order-1" data-aos="fade-up">
                <img className="max-w-full mx-auto md:max-w-none h-auto" src={require('../img/rocket-4.jpeg').default} width="540" height="405" alt="Features 03" />
              </div>
              {/* Content */}
              <div className="max-w-xl md:max-w-none md:w-full mx-auto md:col-span-7 lg:col-span-6" data-aos="fade-right">
                <div className="md:pr-4 lg:pr-12 xl:pr-16">
                  <div className="font-architects-daughter text-3xl text-purple-600 mb-2">Drop #3</div>
                  <h3 className="h3 mb-3">10,000 NFT collection around Bringing Down the House with Vegas related artwork.  mint will be .08 eth via benmezrich.com site.   Targeting Feb 2022 timeframe</h3>
                  <p className="text-xl text-gray-400 mb-4">Holders of at least one of all three Mezrich NFTs will be entitled to level 3 access and benefits - level 3 access includes all of level 1 and 2 access/benefits plus these additional ones</p>
                  <ul className="text-lg text-gray-400 -mb-2">
                   <ListItem>Community ownership of a Ben Mezrich donated work. Mechanism of ownership TBD.</ListItem>
                   <ListItem>Exclusive access to one free mint (per wallet) of Ben’s next project drop </ListItem>
                  </ul>
                </div>
              </div>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
}

export default FeaturesZigzag;