import React, { useState } from "react";
import Modal from "../utils/Modal";

function HeroHome() {
  const [videoModalOpen, setVideoModalOpen] = useState(false);

  return (
    <section id="hero">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 relative">
        {/* Hero content */}
        <div className="relative pt-32 pb-10 md:pt-40 md:pb-16">
          {/* Section header */}
          <div className="grid md:grid-cols-2 items-center text-center md:text-left gap-20 md:pb-16">
            <div>
              <h1 className="h1 mb-4" data-aos="fade-up">
                Thank You !!
              </h1>
              <p
                className="text-xl text-gray-400 mb-8"
                data-aos="fade-up"
                data-aos-delay="200"
              >
                First off, I want to say “thank you.”  For years, I’ve had the
                privilege of doing what I love - writing books and movie
                screenplays - for a community of readers and fans that love
                going on these journeys with me, diving into the same timely
                topics and stories that intrigue so many of us. 
              </p>
              <div className="max-w-xs mx-auto sm:max-w-none sm:flex">
                <div data-aos="fade-up" data-aos-delay="400">
                  <a
                    className="btn text-white bg-purple-600 z-60 hover:bg-purple-700 w-full mb-4 sm:w-auto sm:mb-0"
                    href="#0"
                    onClick={(e) => {
                      e.preventDefault();
                      e.stopPropagation();
                      setVideoModalOpen(true);
                    }}
                    aria-controls="modal"
                  >
                    Read Full Letter
                  </a>
                </div>
                <div data-aos="fade-up" data-aos-delay="600">
                  <a
                    className="btn text-white bg-gray-700 z-60 hover:bg-gray-800 w-full sm:w-auto sm:ml-4"
                    href="#learnMore"
                  >
                    Learn more
                  </a>
                </div>
              </div>
            </div>
            <div>
              <img data-aos="fade-left" className="shadow-lg" data-aos-delay="300" src={require('../img/rocket-1.jpeg').default} />
            </div>
          </div>

          {/* Hero image */}
          <div>
            {/* <div className="relative flex justify-center items-center" data-aos="fade-up" data-aos-delay="200">
              <img className="mx-auto" src={require('../images/hero-image-01.jpg').default} width="1024" height="504" alt="Hero" />
              <a className="absolute group" href="#0" onClick={(e) => { e.preventDefault(); e.stopPropagation(); setVideoModalOpen(true); }} aria-controls="modal">
                <svg className="w-16 h-16 sm:w-20 sm:h-20 hover:opacity-75 transition duration-150 ease-in-out" viewBox="0 0 88 88" xmlns="http://www.w3.org/2000/svg">
                  <defs>
                    <linearGradient x1="78.169%" y1="9.507%" x2="24.434%" y2="90.469%" id="a">
                      <stop stopColor="#EBF1F5" stopOpacity=".8" offset="0%" />
                      <stop stopColor="#EBF1F5" offset="100%" />
                    </linearGradient>
                  </defs>
                  <circle fill="url(#a)" cx="44" cy="44" r="44" />
                  <path className="fill-current text-purple-600" d="M52 44a.999.999 0 00-.427-.82l-10-7A1 1 0 0040 37V51a.999.999 0 001.573.82l10-7A.995.995 0 0052 44V44c0 .001 0 .001 0 0z" />
                </svg>
              </a>
            </div> */}

            {/* Modal */}
            <Modal
              id="modal"
              ariaLabel="modal-headline"
              show={videoModalOpen}
              handleClose={() => setVideoModalOpen(false)}
            >
              <div className="bg-gray-900 text-gray-300 font-regular text-xl py-12 px-9 md:py-20 md:px-32">
                <p>To my community of readers,</p>
                <p className="leading-7 my-7">
                  First off, I want to say “thank you.”  For years, I’ve had the
                  privilege of doing what I love - writing books and movie
                  screenplays - for a community of readers and fans that love
                  going on these journeys with me, diving into the same timely
                  topics and stories that intrigue so many of us.  These topics
                  have ranged from taking on the establishment, challenging the
                  status quo, being entrepreneurial, digital innovation,
                  gambling, investing, and of course, crypto. 
                </p>
                <p className="leading-7 my-7">
                  But what’s bothered me for years, is that I haven’t had a
                  great way to show my appreciation and give back to this
                  community of my readers.  I’ve always wanted a different way
                  of engaging with this community, and sharing in the upside of
                  my personal brand and work.  
                </p>
                <p className="leading-7 my-7">
                  So, I’m going to try something fun and new to solve for that. 
                  I am launching a project and a platform that’s centered around
                  allowing my readers an opportunity to have a sense of
                  “ownership” in my work and these book/movie themes, in a fun
                  and engaging way.  In the process, I hope to galvanize and
                  give back to this community in a way that only NFTs can
                  unlock, and wouldn’t be possible through traditional social
                  media and book tours, and the like.   
                </p>
                <p className="leading-7 my-7">
                  I want to create a way for my community of readers to collect
                  fun NFTs that relate to my work.  And more than just creating
                  a set of fun collectibles, I’m hoping these NFTs can form a
                  sort of NFT-based “loyalty program” for my brand and work
                  journey.  I’m planning on issuing a series of NFT tokens, each
                  of which will be ownable by my readers, and will double as
                  both a digital asset AND a form of “loyalty membership card”
                  for this project.  Each of the NFT tokens will relate to my
                  journalistic journey into the worlds I’ve written about;
                  whether it be the GME short, meme stocks and taking on wall
                  street...to crypto, bitcoin and the revolution of
                  decentralized finance….to Vegas, blackjack and gambling.  My
                  research into my books Antisocial Network, Bitcoin
                  Billionaires and Bringing Down the House inspired me to
                  connect with the fans of these books in this way.  
                </p>
                <p className="leading-7 my-7">
                  And, what’s more, I plan to write something that’s worthy of
                  this community and share ownership of it with those that have
                  participated in this project at the highest level. 
                  Specifically, I plan to write a major motion picture
                  screenplay, and give 50% of this screenplay to the top “level”
                  of this new platform.  
                </p>
              </div>
            </Modal>
          </div>
        </div>
      </div>
    </section>
  );
}

export default HeroHome;
