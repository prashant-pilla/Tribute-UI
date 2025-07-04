'use client';
import Image from "next/image";
import { useState } from "react";

export default function MembersPage() {
  // FAQ state and data copied from home page
  const [faqCategory, setFaqCategory] = useState('General');
  const categories = [
    { label: 'General', value: 'General' },
    { label: 'Pricing', value: 'Pricing' },
  ] as const;
  type FaqCategory = 'General' | 'Pricing';
  type FaqItem = { q: string; a: string; open?: boolean };
  const questions: Record<FaqCategory, FaqItem[]> = {
    General: [
      {
        q: 'What is AdIn?',
        a: "ADIN is an AI-first, community-powered venture DAO that combines a network of AI-agents with human insight to identify and fund the best early-stage startups. Its engine ingests a company's deck or website and, in minutes, produces a comprehensive report covering team background, market landscape, competitive positioning, and evaluations from a five-agent AI 'venture board.' Investors review these data-rich findings and vote. By marrying AI's analytical speed with the collective wisdom of a diverse investor community, ADIN enables faster, more transparent capital deployment and broader access to high-potential deals.",
        open: true,
      },
      {
        q: 'How is ADIN structured?',
        a: 'ADIN is structured as a decentralized autonomous organization (DAO) with a network of investors, founders, and members. The community collaborates to source, evaluate, and support early-stage startups.',
      },
      {
        q: 'What industries does ADIN focus on?',
        a: 'ADIN focuses on a wide range of industries including AI, fintech, biotech, creative tools, climate, and more. The network is open to supporting innovation across sectors.',
      },
      {
        q: "Will tokenization fit into ADIN's model?",
        a: 'Tokenization is being explored as a way to enhance transparency, governance, and participation within the ADIN ecosystem. More details will be shared as the model evolves.',
      },
      {
        q: 'How can I get join the network?',
        a: 'You can request access to join ADIN by submitting an application through our website. The team reviews applications and will reach out with next steps.',
      },
      {
        q: 'Who made ADIN?',
        a: 'ADIN was created by a team of experienced investors, operators, and technologists passionate about supporting early-stage innovation. For more details, please visit our About page.',
      },
    ],
    Pricing: [
      {
        q: 'How much does it cost to join ADIN?',
        a: 'Membership pricing varies depending on your role and level of participation. Please contact us or check our website for the latest details.',
        open: true,
      },
      {
        q: 'Are there any hidden fees?',
        a: 'There are no hidden fees. All costs and fees are transparently communicated during the onboarding process.',
      },
      {
        q: 'Is there a free trial?',
        a: 'We occasionally offer free trials or introductory periods for new members. Please check our website or contact support for current offers.',
      },
    ],
  };

  return (
    <div className="min-h-screen flex flex-col font-sans bg-white relative overflow-x-hidden">
      {/* Hero Section */}
      <section className="flex flex-col md:flex-row items-center justify-between gap-8 px-4 md:px-8 md:pl-20 pt-12 pb-8 relative w-full">
        <div className="flex-1 max-w-xl w-full">
          <span className="border border-[#49C17A] text-[#4D4D4D] font-medium text-base leading-5 font-inter px-3 py-1 rounded-full">
            Members
          </span>
          <h1
            style={{
              color: '#000',
              fontFamily: 'Inter, sans-serif',
              fontSize: 56,
              fontStyle: 'normal',
              fontWeight: 600,
              lineHeight: '64px',
              marginBottom: '24px',
              marginTop: '32px',
            }}
          >
            Submit Deals,<br />Earn Carry.
          </h1>
          <p
            style={{
              maxWidth: 637,
              color: '#000',
              fontFamily: 'Inter, sans-serif',
              fontSize: 22,
              fontStyle: 'normal',
              fontWeight: 400,
              lineHeight: '32px',
              marginBottom: '32px',
            }}
          >
           Members earn a 10% carry on deals they submit that ADIN approves and successfully closes.
          </p>
          <button
            style={{
              display: 'flex',
              padding: '16px 24px',
              justifyContent: 'center',
              alignItems: 'center',
              gap: 8,
              borderRadius: 80,
              border: '1px solid #49C17A',
              background: '#000',
              cursor: 'pointer',
              marginBottom: 100,
            }}
          >
            <span
              style={{
                color: '#FFF',
                fontFamily: 'Inter, sans-serif',
                fontSize: 16,
                fontStyle: 'normal',
                fontWeight: 500,
                lineHeight: '24px',
              }}
            >
              Apply Now
            </span>
            <span
              style={{
                color: '#49C17A',
                fontFamily: 'Inter, sans-serif',
                fontSize: 16,
                fontStyle: 'normal',
                fontWeight: 500,
                lineHeight: '24px',
              }}
            >
              →
            </span>
          </button>
        </div>
        <div className="flex-1 flex flex-col items-center -mt-7 w-full max-w-[440px] mx-auto md:mx-0">
          {/* Clickable video hero image with overlay */}
          <a
            href="https://www.youtube.com/watch?v=dQw4w9WgXcQ"
            target="_blank"
            rel="noopener noreferrer"
            className="relative group block overflow-hidden w-full h-[220px] xs:h-[260px] sm:h-[280px] md:w-[439.167px] md:h-[247.031px] rounded-2xl md:rounded-[30px]"
          >
            <Image
              src="/assets/members hero image.png"
              alt="Members Hero Video Preview"
              fill
              style={{ objectFit: 'cover', borderRadius: 'inherit', transform: 'scale(1.1)' }}
              className=""
              priority
            />
            {/* Title overlay top left */}
            <div
              className="absolute top-2 left-2 md:top-4 md:left-4 text-white px-3 py-1 md:px-4 md:py-2 rounded-lg text-base md:text-lg font-semibold"
              style={{ color: '#FFF', fontFamily: 'Inter, sans-serif', fontWeight: 500, lineHeight: '26.35px' }}
            >
              Meet Adin
            </div>
            {/* Play icon overlay center */}
            <div className="absolute inset-0 flex items-center justify-center">
              <Image
                src="/assets/Play Button.svg"
                alt="Play Video"
                width={48}
                height={48}
                className="drop-shadow-lg group-hover:scale-110 transition-transform md:w-16 md:h-16"
                priority
              />
            </div>
            {/* Clickable overlay for accessibility */}
            <span className="sr-only">Play Members Video</span>
          </a>
        </div>
        {/* Down arrow for scroll cue */}
        <div className="absolute bottom-3 left-1/2 -translate-x-1/2 z-10 hidden md:block">
            <Image src="/assets/chevron-down.svg" alt="Scroll Down" width={24} height={24} className="animate-bounce opacity-60" />
        </div>
        {/* Gradient background fixed to viewport bottom, z-0 */}
        <div
          className="absolute bottom-10 left-0 w-full h-40"
          style={{
            bottom: '-70px',
            zIndex: 0,
            background: 'linear-gradient(90deg, #7CF29C 0%, #FFE066 25%, #FFB84D 50%, #FF6F91 75%, #B39DFF 100%)',
            opacity: 0.85,
            WebkitMaskImage:
              'linear-gradient(to bottom, transparent 0%, white 49%, white 51%, transparent 100%)',
            maskImage:
              'linear-gradient(to bottom, transparent 0%, white 49%, white 51%, transparent 100%)',
          }}
        />
      </section>

      {/* Content Sections */}
      <section className="w-full max-w-8xl mx-auto px-4 md:px-8 py-12 md:pl-0 space-y-8 md:space-y-4">
        {/* Power Player Section */}
        <div>
                      <h2
              className="md:ml-[90px]"
              style={{
                color: '#000',
                fontFamily: 'Inter, sans-serif',
                fontSize: 56,
                fontStyle: 'normal',
                fontWeight: 600,
                lineHeight: '64px',
                marginBottom: 16,
                marginTop: 100,
                textAlign: 'left',
              }}
            >
              Become an ADIN Member.<br className="hidden md:block" />Earn <span style={{ color: '#49C17A', fontFamily: 'Inter, sans-serif', fontSize: 56, fontStyle: 'normal', fontWeight: 600, lineHeight: '64px' }}>5x more</span>.
            </h2>
            <p
              className="md:ml-[90px]"
              style={{
                color: '#000',
                fontFamily: 'Inter, sans-serif',
                fontSize: 22,
                fontStyle: 'normal',
                fontWeight: 400,
                lineHeight: '32px',
                marginBottom: '24px',
              }}
            >
              Compared to traditional Venture Capital scout programs, ADIN&apos;s<br className="hidden md:block" />payouts reward members for being apart of the network.
            </p>
          {/* Deal Calculator Cell */}
          <div className="w-full max-w-2xl md:max-w-5xl mx-auto rounded-3xl border border-[#E5E0F6] bg-white shadow-sm p-4 md:p-8 mt-4 mb-8 md:mb-12" style={{ boxShadow: '0 2px 16px 0 rgba(80, 80, 120, 0.06)' }}>
            <div className="mb-2">
              <div className="font-semibold text-gray-900 text-lg">Deal Calculator</div>
              <div className="text-gray-500 text-sm">Adjust the exit value to see your potential earnings.</div>
            </div>
            <div className="text-5xl font-bold text-black mt-6 mb-2">$54,000,000</div>
            <div className="text-lg text-gray-700 mb-4">Exit Value</div>
            {/* Custom Slider */}
            <div className="w-full mb-8 relative" style={{ height: '72px' }}>
              {/* Progress Bar Container with border */}
              <div className="absolute left-0 right-0 top-0 h-[44px] rounded-full border border-[#E5E0F6] bg-white z-0" />
              {/* Progress (first half, purple) */}
              <div className="absolute left-0 top-0 h-[44px] rounded-l-full border border-[#E5E0F6] bg-[#F3EAFD] z-1" style={{ width: '50%' }} />
              {/* Progress (second half, white) */}
              <div className="absolute left-1/2 top-0 h-[44px] rounded-r-full border border-[#E5E0F6] bg-white z-1" style={{ width: '50%' }} />
              {/* Thumb (centered) */}
              <div className="absolute left-1/2 top-5.5 -translate-x-1/2 -translate-y-1/2 z-10 flex items-center justify-center">
                <div className="w-12 h-12 bg-[#A97DF5] rounded-full flex items-center justify-center shadow-lg">
                  <Image src="/assets/menu-outline.svg" alt="Scroll Thumb" width={32} height={32} />
                </div>
              </div>
              {/* Labels below bar */}
              <div className="absolute left-0 right-0 top-[55px] flex justify-between w-full px-1 select-none">
                <span className="text-xs text-black font-medium">$1M</span>
                <span className="text-xs text-black font-medium" style={{ transform: 'translateX(-50%)' }}>$50M</span>
                <span className="text-xs text-black font-medium">$100M</span>
              </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-4">
              {/* Industry Standard Card */}
              <div className="rounded-2xl border border-[#E5E5E5] bg-white p-8 flex flex-col justify-between min-h-[370px] relative" style={{boxShadow: '0 1px 8px 0 rgba(80, 80, 120, 0.04)', borderRadius: '24px'}}>
                <div className="mb-2">
                  <span className="inline-block bg-[#F6F6F6] text-[#4D4D4D] px-3 py-1 rounded-full mb-7" style={{fontFamily: 'Inter', fontWeight: 500, fontSize: 16, lineHeight: '20px', fontStyle: 'normal'}}>The Industry Standard</span>
                  <div style={{color: '#000', fontFamily: 'Inter', fontSize: 56, fontStyle: 'normal', fontWeight: 600, lineHeight: '64px', marginBottom: 8}}>$780,000</div>
                  <div style={{color: '#000', fontFamily: 'Inter', fontSize: 22, fontStyle: 'normal', fontWeight: 400, lineHeight: '32px', marginBottom: 32}}>Standard Earnings</div>
                  <ul className="space-y-4 mb-8">
                    <li className="flex items-center justify-between">
                      <span className="flex items-center gap-3" style={{color: '#000', fontFamily: 'Inter', fontSize: 14, fontStyle: 'normal', fontWeight: 400, lineHeight: '20px'}}>
                        <Image src="/assets/trending-down.svg" alt="Limited Carry Share" width={22} height={22} />
                        Limited Carry Share
                      </span>
                      <span style={{color: '#4D4D4D', fontFamily: 'Inter', fontSize: 14, fontStyle: 'italic', fontWeight: 400, lineHeight: '20px'}}>10% of 20% = 2% Total Profits</span>
                    </li>
                    <li className="flex items-center justify-between">
                      <span className="flex items-center gap-3" style={{color: '#000', fontFamily: 'Inter', fontSize: 14, fontStyle: 'normal', fontWeight: 400, lineHeight: '20px'}}>
                        <Image src="/assets/pie-chart.svg" alt="Small Piece" width={22} height={22} />
                        Small Piece
                      </span>
                      <span style={{color: '#4D4D4D', fontFamily: 'Inter', fontSize: 14, fontStyle: 'italic', fontWeight: 400, lineHeight: '20px'}}>Minimal Profit Participation</span>
                    </li>
                    <li className="flex items-center justify-between">
                      <span className="flex items-center gap-3" style={{color: '#000', fontFamily: 'Inter', fontSize: 14, fontStyle: 'normal', fontWeight: 400, lineHeight: '20px'}}>
                        <Image src="/assets/accessibility.svg" alt="Finder Status" width={22} height={22} />
                        Finder Status
                      </span>
                      <span style={{color: '#4D4D4D', fontFamily: 'Inter', fontSize: 14, fontStyle: 'italic', fontWeight: 400, lineHeight: '20px'}}>You&apos;re a &quot;finder&quot;, not a Partner.</span>
                    </li>
                  </ul>
                  <span className="inline-flex items-center gap-2" style={{borderRadius: 8, border: '1px solid #F3655B', background: 'linear-gradient(0deg, rgba(243, 101, 91, 0.10) 0%, rgba(243, 101, 91, 0.10) 100%), #FFF', padding: '8px 12px', fontFamily: 'Inter', fontSize: 12, fontStyle: 'normal', fontWeight: 400, lineHeight: '20px', color: '#000', overflow: 'hidden', textOverflow: 'ellipsis'}}>
                    <Image src="/assets/thumbs-down.svg" alt="Limited Upside Potential" width={14} height={14} />
                    Limited Upside Potential
                  </span>
                </div>
              </div>
              {/* ADIN Exclusive Card */}
              <div className="rounded-2xl border border-[#E5E5E5] bg-white p-8 flex flex-col justify-between min-h-[370px] relative overflow-hidden" style={{boxShadow: '0 1px 8px 0 rgba(80, 80, 120, 0.04)', borderRadius: '24px'}}>
                {/* Gradient bar background up to price with smooth fade */}
                <div style={{
                  position: 'absolute',
                  left: 0,
                  top: 0,
                  width: '100%',
                  height: 130, // adjust as needed to reach just below the price
                  zIndex: 0,
                  background: 'linear-gradient(90deg, #7CF29C 0%, #FFE066 25%, #FFB84D 50%, #FF6F91 75%, #B39DFF 100%)',
                  opacity: 0.85,
                  WebkitMaskImage: 'linear-gradient(to bottom, white 49%, transparent 100%)',
                  maskImage: 'linear-gradient(to bottom, white 49%, transparent 100%)',
                }} />
                <div className="mb-2 relative z-10">
                  <span className="inline-block bg-[#F6F6F6] text-[#4D4D4D] px-3 py-1 rounded-full mb-7" style={{fontFamily: 'Inter', fontWeight: 500, fontSize: 16, lineHeight: '20px', fontStyle: 'normal'}}>ADIN Exclusive</span>
                  <div style={{color: '#000', fontFamily: 'Inter', fontSize: 56, fontStyle: 'normal', fontWeight: 600, lineHeight: '64px', marginBottom: 8}}>$3,900,000</div>
                  <div style={{color: '#000', fontFamily: 'Inter', fontSize: 22, fontStyle: 'normal', fontWeight: 400, lineHeight: '32px', marginBottom: 32}}>Earnings <span style={{fontStyle: 'italic'}}>with</span> ADIN</div>
                  <ul className="space-y-4 mb-8">
                    <li className="flex items-center justify-between">
                      <span className="flex items-center gap-3" style={{color: '#000', fontFamily: 'Inter', fontSize: 14, fontStyle: 'normal', fontWeight: 400, lineHeight: '20px'}}>
                        <Image src="/assets/sparkles.svg" alt="Premium Carry Share" width={22} height={22} />
                        Premium Carry Share
                      </span>
                      <span style={{color: '#4D4D4D', fontFamily: 'Inter', fontSize: 14, fontStyle: 'italic', fontWeight: 400, lineHeight: '20px'}}>50% of 20% = 10% Total Profits</span>
                    </li>
                    <li className="flex items-center justify-between">
                      <span className="flex items-center gap-3" style={{color: '#000', fontFamily: 'Inter', fontSize: 14, fontStyle: 'normal', fontWeight: 400, lineHeight: '20px'}}>
                        <Image src="/assets/heart.svg" alt="True Partnership" width={22} height={22} />
                        True Partnership
                      </span>
                      <span style={{color: '#4D4D4D', fontFamily: 'Inter', fontSize: 14, fontStyle: 'italic', fontWeight: 400, lineHeight: '20px'}}>Genuine partner in the upside.</span>
                    </li>
                    <li className="flex items-center justify-between">
                      <span className="flex items-center gap-3" style={{color: '#000', fontFamily: 'Inter', fontSize: 14, fontStyle: 'normal', fontWeight: 400, lineHeight: '20px'}}>
                        <Image src="/assets/people.svg" alt="Full Support" width={22} height={22} />
                        Full Support
                      </span>
                      <span style={{color: '#4D4D4D', fontFamily: 'Inter', fontSize: 14, fontStyle: 'italic', fontWeight: 400, lineHeight: '20px'}}>Backed by ADIN&apos;s infrastructure.</span>
                    </li>
                  </ul>
                  <div className="flex flex-wrap gap-3 mt-2" style={{width: '100%'}}>
                    <span className="inline-flex items-center gap-2" style={{borderRadius: 8, border: '1px solid #49C17A', background: 'linear-gradient(0deg, rgba(73, 193, 122, 0.10) 0%, rgba(73, 193, 122, 0.10) 100%), #FFF', padding: '8px 10px', fontFamily: 'Inter', fontSize: 12, fontStyle: 'normal', fontWeight: 400, lineHeight: '20px', color: '#222'}}>
                      <Image src="/assets/checkmark-circle.svg" alt="5x More Upside" width={14} height={14} />
                      5x More Upside
                    </span>
                    <span className="inline-flex items-center gap-2" style={{borderRadius: 8, border: '1px solid #49C17A', background: 'linear-gradient(0deg, rgba(73, 193, 122, 0.10) 0%, rgba(73, 193, 122, 0.10) 100%), #FFF', padding: '8px 10px', fontFamily: 'Inter', fontSize: 12, fontStyle: 'normal', fontWeight: 400, lineHeight: '20px', color: '#222'}}>
                      <Image src="/assets/checkmark-circle.svg" alt="Full Support" width={14} height={14} />
                      Full Support
                    </span>
                    <span className="inline-flex items-center gap-2" style={{borderRadius: 8, border: '1px solid #49C17A', background: 'linear-gradient(0deg, rgba(73, 193, 122, 0.10) 0%, rgba(73, 193, 122, 0.10) 100%), #FFF', padding: '8px 10px', fontFamily: 'Inter', fontSize: 12, fontStyle: 'normal', fontWeight: 400, lineHeight: '20px', color: '#222'}}>
                      <Image src="/assets/checkmark-circle.svg" alt="Shared Success" width={14} height={14} />
                      Shared Success
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Power Player Section */}
        <div>
                      <h2
              className="md:ml-[90px]"
              style={{
                color: '#000',
                fontFamily: 'Inter, sans-serif',
                fontSize: 56,
                fontStyle: 'normal',
                fontWeight: 600,
                lineHeight: '64px',
                marginBottom: 16,
                marginTop: 100,
                textAlign: 'left',
              }}
            >
              Be more than a <span style={{ color: '#49C17A', fontFamily: 'Inter, sans-serif', fontSize: 56, fontStyle: 'normal', fontWeight: 600, lineHeight: '64px' }}>Member</span>.<br className="hidden md:block" />Be a deal maker. 
            </h2>
            <p
              className="md:ml-[90px]"
              style={{
                color: '#000',
                fontFamily: 'Inter, sans-serif',
                fontSize: 22,
                fontStyle: 'normal',
                fontWeight: 400,
                lineHeight: '32px',
                marginBottom: '24px',
              }}
            >
              Get rewarded for the deals you bring, with 10% carry and access to a private network.
            </p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-4 mb-0 md:ml-20">
            {/* Earn 10% Carry Cell */}
            <div className="rounded-3xl border border-[#E5E5E5] bg-white p-10 flex flex-col h-full" style={{minHeight: 340, boxShadow: '0 1px 8px 0 rgba(80, 80, 120, 0.04)'}}>
              <div className="mb-6">
                <div className="text-base text-black font-normal mb-2" style={{fontFamily: 'Inter'}}>Earn 10% Carry</div>
                <div className="text-2xl md:text-3xl font-bold text-black mb-2" style={{fontFamily: 'Inter', lineHeight: '32px'}}>
                  Earn 10% Carry on<br/>the Deals You Source
                </div>
                <div className="text-base text-[#222] font-normal" style={{fontFamily: 'Inter', lineHeight: '24px'}}>
                  Introduce great startups, and if ADIN invests, you get a 10% share of the upside. No capital required.
                </div>
              </div>
              <div className="flex-1 flex items-start justify-center">
                <div className="w-full flex items-start justify-center">
                  <div style={{borderRadius: '32px', overflow: 'hidden', width: '100%', height: 340, background: '#F6F6F6', display: 'flex', alignItems: 'flex-start', justifyContent: 'center'}}>
                    <Image src="/assets/earn_carry.png" alt="Lane AI" width={600} height={340} style={{width: '100%', height: '100%', objectFit: 'cover', filter: 'brightness(0.92)'}} />
                  </div>
                </div>
              </div>
            </div>
            {/* Private Network Cell */}
            <div className="rounded-3xl border border-[#E5E5E5] bg-white p-10 flex flex-col h-full" style={{minHeight: 340, boxShadow: '0 1px 8px 0 rgba(80, 80, 120, 0.04)'}}>
              <div className="mb-6">
                <div className="text-base text-black font-normal mb-2" style={{fontFamily: 'Inter'}}>Private Network</div>
                <div className="text-2xl md:text-3xl font-bold text-black mb-2" style={{fontFamily: 'Inter', lineHeight: '32px'}}>
                  Enter a Private<br/>Curated Community
                </div>
                <div className="text-base text-[#222] font-normal" style={{fontFamily: 'Inter', lineHeight: '24px'}}>
                  Join a vetted network of founders, operators, angels, and technologists handpicked for collaboration.
                </div>
              </div>
              <div className="flex-1 flex items-start justify-center">
                <div className="w-full flex items-start justify-center">
                  <div style={{borderRadius: '32px', overflow: 'hidden', width: '100%', height: 340, background: '#F6F6F6', display: 'flex', alignItems: 'flex-start', justifyContent: 'center'}}>
                    <Image src="/assets/private_network.png" alt="Private Network" width={600} height={340} style={{width: '100%', height: '100%', objectFit: 'cover'}} />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Exclusive Access Cell */}
        <div className="rounded-3xl border border-[#E5E5E5] bg-white flex flex-col md:flex-row items-center px-4 md:px-10 py-5 overflow-hidden mt-4 mb-4 md:ml-20 w-full md:max-w-[calc(100%-5rem)]" style={{boxShadow: '0 1px 8px 0 rgba(80, 80, 120, 0.04)'}}>
          {/* Image Side */}
          <div className="flex-1 flex items-center justify-center min-w-0 md:min-w-[320px] min-h-[200px] md:min-h-[260px] w-full" style={{borderTopLeftRadius: '32px', borderBottomLeftRadius: '32px', borderTopRightRadius: '32px', borderBottomRightRadius: '32px', maxWidth: 520}}>
            <div style={{width: '100%', maxWidth: 500, padding: 0, display: 'flex', alignItems: 'center', justifyContent: 'center'}}>
              <Image src="/assets/Exclusive Access Image.png" alt="Exclusive Access" width={480} height={300} style={{width: '100%', height: 'auto', objectFit: 'contain', borderRadius: '24px'}} />
            </div>
          </div>
          {/* Text Side */}
          <div className="flex-1 flex flex-col justify-center p-4 md:p-0 md:pl-10 md:pr-0 w-full" style={{minWidth: 0, height: '100%'}}>
            <div className="text-base text-black font-normal mb-2" style={{fontFamily: 'Inter', fontSize: 20}}>Exclusive Access</div>
            <div className="text-3xl md:text-4xl font-bold text-black mb-2" style={{fontFamily: 'Inter', lineHeight: '38px', fontSize: 34}}>
              Get access to exclusive events.
            </div>
            <div className="text-base text-[#222] font-normal" style={{fontFamily: 'Inter', lineHeight: '26px', fontSize: 18}}>
              Learn and collaborate. From deep-dives to market trend sessions, discover insights to help you move faster.
            </div>
          </div>
        </div>

        {/* How to earn your 10% carry section */}
        <div className="flex flex-col md:flex-row items-start justify-between bg-white px-4 md:px-10 py-12 md:ml-20 mb-0 mt-16 w-full md:max-w-[calc(100%-5rem)]">
          {/* Left: Text */}
          <div className="flex-1 min-w-[320px] max-w-[520px]">
            <h2 style={{fontFamily: 'Inter', fontWeight: 700, fontSize: 40, lineHeight: '48px', color: '#000', marginBottom: 8}}>How to earn<br/>your 10% carry.</h2>
            <div style={{fontFamily: 'Inter', fontWeight: 400, fontSize: 16, lineHeight: '24px', color: '#222', marginBottom: 32}}>
              <span style={{fontStyle: 'italic'}}>&quot;Carry&quot;</span> is a boomer term for &quot;cash back&quot;.
            </div>
            <div className="border-l-2 border-[#E5E5E5] pl-8 relative" style={{marginTop: 8}}>
              {/* Step 1 */}
              <div style={{marginBottom: 32, position: 'relative'}}>
                {/* Accent vertical line */}
                <span style={{position: 'absolute', left: '-34px', top: '20px', width: 4, height: 28, borderRadius: 2, background: '#FFE233', display: 'block'}} />
                <div style={{fontFamily: 'Inter', fontWeight: 500, fontSize: 14, color: '#222', marginBottom: 2}}>Step 1</div>
                <div style={{fontFamily: 'Inter', fontWeight: 700, fontSize: 18, color: '#000', marginBottom: 2}}>Spot something great.</div>
                <div style={{fontFamily: 'Inter', fontWeight: 400, fontSize: 14, color: '#222'}}>You meet a founder or discover a startup you believe in. You don&apos;t need to be an expert or just have a strong conviction in the team.</div>
              </div>
              {/* Step 2 */}
              <div style={{marginBottom: 32, position: 'relative'}}>
                {/* Accent vertical line */}
                <span style={{position: 'absolute', left: '-34px', top: '20px', width: 4, height: 28, borderRadius: 2, background: '#7CF29C', display: 'block'}} />
                <div style={{fontFamily: 'Inter', fontWeight: 500, fontSize: 14, color: '#222', marginBottom: 2}}>Step 2</div>
                <div style={{fontFamily: 'Inter', fontWeight: 700, fontSize: 18, color: '#000', marginBottom: 2}}>Share the deal.</div>
                <div style={{fontFamily: 'Inter', fontWeight: 400, fontSize: 14, color: '#222'}}>Upload the link or deck. We&apos;ll ask a few quick questions (and confirm you can intro the founder if needed).</div>
              </div>
              {/* Step 3 */}
              <div style={{marginBottom: 32, position: 'relative'}}>
                {/* Accent vertical line */}
                <span style={{position: 'absolute', left: '-34px', top: '20px', width: 4, height: 28, borderRadius: 2, background: '#FF6F91', display: 'block'}} />
                <div style={{fontFamily: 'Inter', fontWeight: 500, fontSize: 14, color: '#222', marginBottom: 2}}>Step 3</div>
                <div style={{fontFamily: 'Inter', fontWeight: 700, fontSize: 18, color: '#000', marginBottom: 2}}>ADIN gets to work.</div>
                <div style={{fontFamily: 'Inter', fontWeight: 400, fontSize: 14, color: '#222'}}>Our AI dives in—analyzing the market, product, team, and traction. You&apos;ll see how your deal stacks up in real time.</div>
              </div>
              {/* Step 4 */}
              <div style={{marginBottom: 32, position: 'relative'}}>
                {/* Accent vertical line */}
                <span style={{position: 'absolute', left: '-34px', top: '20px', width: 4, height: 28, borderRadius: 2, background: '#B39DFF', display: 'block'}} />
                <div style={{fontFamily: 'Inter', fontWeight: 500, fontSize: 14, color: '#222', marginBottom: 2}}>Step 4</div>
                <div style={{fontFamily: 'Inter', fontWeight: 700, fontSize: 18, color: '#000', marginBottom: 2}}>Investors vote.</div>
                <div style={{fontFamily: 'Inter', fontWeight: 400, fontSize: 14, color: '#222'}}>Over the next few days, ADIN members review the deal and cast a simple yes or no vote. It keeps the process transparent and democratic.</div>
              </div>
              {/* Step 5 */}
              <div style={{marginBottom: 32, position: 'relative'}}>
                {/* Accent vertical line */}
                <span style={{position: 'absolute', left: '-34px', top: '20px', width: 4, height: 28, borderRadius: 2, background: '#FFBF66', display: 'block'}} />
                <div style={{fontFamily: 'Inter', fontWeight: 500, fontSize: 14, color: '#222', marginBottom: 2}}>Step 5</div>
                <div style={{fontFamily: 'Inter', fontWeight: 700, fontSize: 18, color: '#000', marginBottom: 2}}>ADIN connects.</div>
                <div style={{fontFamily: 'Inter', fontWeight: 400, fontSize: 14, color: '#222'}}>If the deal shows strong signals, the ADIN team reaches out to the founder and kicks off formal diligence.</div>
              </div>
              {/* Step 6 */}
              <div style={{position: 'relative'}}>
                {/* Accent vertical line */}
                <span style={{position: 'absolute', left: '-34px', top: '20px', width: 4, height: 28, borderRadius: 2, background: '#49C17A', display: 'block'}} />
                <div style={{fontFamily: 'Inter', fontWeight: 500, fontSize: 14, color: '#222', marginBottom: 2}}>Step 6</div>
                <div style={{fontFamily: 'Inter', fontWeight: 700, fontSize: 18, color: '#000', marginBottom: 2}}>Times goes by…</div>
                <div style={{fontFamily: 'Inter', fontWeight: 400, fontSize: 14, color: '#222'}}>If the deal you submitted has an exit event (like an acquisition or IPO), you get 10% of the return. Payouts are made in USDC or by mailed check.</div>
              </div>
            </div>
          </div>
          {/* Right: Smiley Image */}
          <div className="flex-1 flex items-center justify-center w-full mt-8 md:mt-0 md:ml-8" style={{minWidth: 320}}>
            <div style={{width: 380, height: 380, display: 'flex', alignItems: 'center', justifyContent: 'center'}}>
              <Image src="/assets/how_to_earn.png" alt="How to earn" width={360} height={360} style={{width: 360, height: 360, objectFit: 'contain'}} />
            </div>
          </div>
        </div>

        {/* FAQ (copied from home page) */}
        <section className="max-w-5xl mx-auto mt-24 mb-24 px-0">
          <h2
            style={{
              alignSelf: 'stretch',
              color: '#000',
              fontFamily: 'Inter, sans-serif',
              fontSize: 54,
              fontWeight: 600,
              lineHeight: '64px',
              marginBottom: 10,
              maxWidth: 1100,
              width: '100%',
              marginTop: 100,
              marginRight: 'auto',
              marginLeft: 'auto',
              textAlign: 'left',
            }}
          >
            Frequently<br />asked questions.
          </h2>
          <p
            style={{
              alignSelf: 'stretch',
              color: '#000',
              fontFamily: 'Inter, sans-serif',
              fontSize: 19,
              fontWeight: 400,
              lineHeight: '32px',
              marginBottom: 16,
              maxWidth: 3000,
              width: '100%',
              marginTop: 5,
              marginRight: 'auto',
              marginLeft: 'auto',
              textAlign: 'left',
            }}
          >
            Here is a collection of what is asked most about ADIN.
          </p>
          {/* FAQ Category Buttons */}
          <div className="flex gap-3 mb-5">
            {categories.map((cat) => (
              <button
                key={cat.value}
                type="button"
                onClick={() => setFaqCategory(cat.value as FaqCategory)}
                className={`px-4 py-1 rounded-full text-sm font-medium border transition focus:outline-none ${faqCategory === cat.value
                  ? 'bg-[#7B61FF] text-white border-[#7B61FF]'
                  : 'bg-white text-[#7B61FF] border-[#7B61FF]'}`}
              >
                {cat.label}
              </button>
            ))}
          </div>
          {/* Accordion */}
          <div className="divide-y divide-[#E5E5E5]">
            {questions[faqCategory as FaqCategory].map((item: FaqItem, idx: number) => (
              <details key={item.q} className="group" {...(faqCategory === 'General' && idx === 0 ? { open: true } : {})}>
                <summary className="flex items-center justify-between cursor-pointer px-6 py-5 font-semibold text-lg text-black transition">
                  {item.q}
                  <svg width="24" height="24" fill="none" viewBox="0 0 24 24" className="ml-2 transition-transform duration-200 group-open:rotate-180">
                    <path d="M8 10l4 4 4-4" stroke="#A97DF5" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </summary>
                {item.a && (
                  <div className="px-6 pb-5 pt-0 text-[#4D4D4D] text-base font-normal">
                    {item.a}
                  </div>
                )}
              </details>
            ))}
          </div>
        </section>
        {/* CTA - Invest with ADIN */}
        <div className="flex flex-col items-center justify-center pt-0 pb-20">
          <h2
            style={{
              color: '#000',
              textAlign: 'center',
              fontFamily: 'Inter, sans-serif',
              fontSize: 56,
              fontStyle: 'normal',
              fontWeight: 600,
              lineHeight: '64px',
              maxWidth: 1120,
              marginBottom: 40,
              marginTop: 0,
              width: '100%',
              marginRight: 'auto',
              marginLeft: 'auto',
              display: 'block',
            }}
          >
            Submit Deals. Earn 10%.
          </h2>
          <div className="flex flex-col items-center w-full">
            <div
              className="flex items-center border rounded-[32px]"
              style={{
                border: '1px solid #F3EAFD',
                background: '#FFF',
                padding: '4px 4px 4px 24px',
                alignItems: 'center',
                gap: 16,
                marginBottom: 10,
              }}
              >
              <span
                className="text-[12px] sm:text-[16px] font-medium"
                style={{
                  fontFamily: 'Inter, sans-serif',
                  fontWeight: 500,
                  lineHeight: '20px',
                  background: 'radial-gradient(62.52% 11.58% at 50% 50%, #A97DF5 0%, #B19AD9 100%)',
                  backgroundClip: 'text',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  color: '#FFF',
                  display: 'block',
                }}
              >
                Early access for Tribute Labs Members
              </span>
              <button
                className="flex items-center justify-center text-[14px] sm:text-[16px] px-3 py-1 sm:px-6 sm:py-3"
                style={{
                  borderRadius: 80,
                  background: '#A97DF5',
                  color: '#FFF',
                  fontFamily: 'Inter, sans-serif',
                  fontWeight: 500,
                  lineHeight: '20px',
                  gap: 4,
                  marginLeft: 8,
                  border: 'none',
                  cursor: 'pointer',
                  transition: 'background 0.2s',
                }}
                aria-label="Get Started"
              >
                Get Started
                <svg className="ml-2" width="20" height="20" fill="none" viewBox="0 0 20 20">
                  <path d="M5 10h10M13 7l3 3-3 3" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </button>
            </div>
            <div
              className="mt-2 text-[12px] sm:text-[16px] text-center font-medium"
              style={{ color: '#A97DF5', fontFamily: 'Inter, sans-serif', lineHeight: '20px' }}
            >
              <span style={{ color: '#888' }}>Not a Tribute Labs Member? </span>
              <a
                href="#"
                className="text-[12px] sm:text-[16px]"
                style={{ color: '#A97DF5', textDecoration: 'none', marginLeft: 4 }}
                onMouseOver={e => (e.currentTarget.style.color = '#7B61FF')}
                onMouseOut={e => (e.currentTarget.style.color = '#A97DF5')}
              >
                Join the Waitlist <span aria-hidden="true">→</span>
              </a>
            </div>
          </div>
        </div>
      </section>
      {/* Bottom Gradient Bar above Footer */}
      <div
          className="absolute bottom-0 left-0 w-full h-40"
          style={{
            zIndex: 0,
            background: 'linear-gradient(90deg, #7CF29C 0%, #FFE066 25%, #FFB84D 50%, #FF6F91 75%, #B39DFF 100%)',
            opacity: 0.85,
            WebkitMaskImage:
              'linear-gradient(to bottom, transparent 0%, white 49%, white 51%, transparent 100%)',
            maskImage:
              'linear-gradient(to bottom, transparent 0%, white 100%, white 51%, transparent 100%)',
          }}
        />
    </div>
  );
}
