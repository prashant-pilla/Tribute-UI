'use client';
import Image from "next/image";
import { useState } from "react";

export default function InvestorsPage() {
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
      <section className="flex flex-col md:flex-row items-center justify-between gap-8 px-8 pl-20 pt-12 pb-8 relative">
        <div className="flex-1 max-w-xl">
          <span className="text-[#4D4D4D] font-medium text-base leading-5 font-inter border border-[#FFBF66] px-3 py-1 rounded-full">
            Investors
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
            AI Will be the<br />Best Investor.
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
            ADIN and its agents automate venture, from diligence to making investment decisions, with deals sourced by investors and the ADIN member network.
          </p>
          <button
            style={{
              display: 'flex',
              padding: '16px 24px',
              justifyContent: 'center',
              alignItems: 'center',
              gap: 8,
              borderRadius: 80,
              border: '1px solid #FFBF66',
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
                color: '#FFBF66',
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
        <div className="flex-1 flex flex-col items-center">
          {/* Card and voting mockup replaced with static image */}
          <div className="relative">
            <Image
              src="/assets/lane-ai-vote.png"
              alt="Lane AI Voting Card"
              width={420}
              height={400}
              className="rounded-2xl"
              priority
            />
          </div>
        </div>
        {/* Down arrow for scroll cue */}
        <div className="absolute bottom-11 left-1/2 -translate-x-1/2 z-10">
            <Image src="/assets/chevron-down.svg" alt="Scroll Down" width={24} height={24} className="animate-bounce opacity-60" />
          </div>
        {/* Gradient background fixed to viewport bottom, z-0 */}
        <div
          className="absolute bottom-0 left-0 w-full h-40"
          style={{
            bottom: '-45px',
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
      <section className="max-w-8xl mx-auto px-8 py-12 pl-0 space-y-16">
        {/* Power Player Section */}
        <div>
          <h2
            style={{
              color: '#000',
              fontFamily: 'Inter, sans-serif',
              fontSize: 56,
              fontStyle: 'normal',
              fontWeight: 600,
              lineHeight: '64px',
              marginBottom: 8,
              marginTop: 30,
              textAlign: 'left',
            }}
          >
            Be more than an <span style={{ color: '#FFBF66', fontFamily: 'Inter, sans-serif', fontSize: 56, fontStyle: 'normal', fontWeight: 600, lineHeight: '64px' }}>Investor</span>.<br />Be a power player.
          </h2>
          <p
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
            Accelerate your decision-making. Execute borderless investment opportunities.
          </p>

          {/* Asymmetrical Cluster of Cells - Two Columns, One Full-Width Row */}
          <div className="w-full flex flex-col gap-4 mb-8 mt-8 max-w-5xl mx-auto px-4">
            <div className="flex flex-col md:flex-row gap-4">
              {/* Left Column */}
              <div className="flex flex-col gap-6 flex-1 min-w-0">
                {/* Real-Time Voting */}
                <div className="rounded-2xl border border-[#E5E5E5] bg-white p-6 md:p-8 shadow-sm flex flex-col" style={{minHeight: 220}}>
                  <div className="text-base font-semibold text-black mb-1">Real-Time voting.</div>
                  <div className="text-sm text-[#222] mb-4">Make investment decisions faster with transparent, community-driven voting.</div>
                  <Image src="/assets/real time voting.svg" alt="Lane AI Vote" width={400} height={120} style={{width: '100%', height: 350, objectFit: 'contain', borderRadius: 12}} />
                </div>
                {/* Expansive Due Diligence */}
                <div className="rounded-2xl border border-[#E5E5E5] bg-white p-6 md:p-8 shadow-sm flex flex-col" style={{minHeight: 220}}>
                  <div className="text-base font-semibold text-black mb-1">Expansive due diligence.</div>
                  <div className="text-sm text-[#222] mb-4">ADIN's agents sweat the details. Technical, business, and beyond and in just 10 minutes.</div>
                  <Image src="/assets/expansive due diligence.svg" alt="Due Diligence" width={400} height={200} style={{width: '100%', height: 200, objectFit: 'contain', borderRadius: 12}} />
                </div>
              </div>
              {/* Right Column */}
              <div className="flex flex-col gap-6 flex-1 min-w-0">
                {/* Submit a Deal */}
                <div className="rounded-2xl border border-[#E5E5E5] bg-white p-6 md:p-8 shadow-sm flex flex-col" style={{minHeight: 220}}>
                  <div className="text-base font-semibold text-black mb-1">Submit a deal, earn 10% carry.</div>
                  <div className="text-sm text-[#222] mb-4">Refer promising companies with just a link or deck. ADIN handles the rest.</div>
                  <Image src="/assets/submit a deal.svg" alt="Submit a Deal" width={400} height={120} style={{width: '100%', height: 200, objectFit: 'contain', borderRadius: 12}} />
                </div>
                {/* Deals hit your inbox */}
                <div className="rounded-2xl border border-[#E5E5E5] bg-white p-6 md:p-8 shadow-sm flex flex-col" style={{minHeight: 220, padding: 0}}>
                  <div className="text-base font-semibold text-black mb-1 ml-7 mt-7" style={{padding: '10 10 10 10'}}>Deals hit your inbox.</div>
                  <div className="text-sm text-[#222] mb-4 ml-7" style={{padding: '0 0 0 0'}}>Stay in the loop with real-time deal alerts, term sheets, and wins.</div>
                  <Image src="/assets/deals hit your inbox.svg" alt="Deals Inbox" width={400} height={220} style={{width: '100%', height: 420, objectFit: 'cover', borderRadius: '0 0 16px 16px', display: 'block'}} />
                </div>
              </div>

            </div>
            {/* Deal Closes - Full Width */}
            <div className="rounded-2xl border border-[#E5E5E5] bg-white p-6 md:p-8 shadow-sm flex flex-col md:flex-row w-full items-stretch justify-between" style={{minHeight: 220}}>
              <div className="flex-1 min-w-0 flex flex-col justify-center">
                <div className="text-xs text-[#888] font-medium mb-1">Deal Closes</div>
                <div className="text-xl font-bold text-black mb-1" style={{fontFamily: 'Inter'}}>We handle the backend.</div>
                <div className="text-sm text-[#222] mb-4" style={{fontFamily: 'Inter', lineHeight: '20px'}}>Diligence, SPV structuring, check writing, and updates all covered by Tribute Labs.</div>
                
              </div>
              <div className="flex-shrink-0 flex items-center justify-center mt-8 md:mt-0 md:ml-8" style={{minWidth: 220, maxWidth: 320}}>
                <Image src="/assets/deal closes.svg" alt="Deal Closes" width={220} height={220} style={{width: '100%', height: 200, objectFit: 'cover', borderRadius: '0 0 16px 16px'}} />
              </div>
            </div>
          </div>
          {/* Power Player Section */}
        <div>
          <h2
            style={{
              color: '#000',
              fontFamily: 'Inter, sans-serif',
              fontSize: 56,
              fontStyle: 'normal',
              fontWeight: 600,
              lineHeight: '64px',
              marginBottom: 8,
              marginTop: 150,
              textAlign: 'left',
            }}
          >
            The precision of a machine.<br />The instincts of a community.
          </h2>
          <p
            style={{
              color: '#000',
              fontFamily: 'Inter, sans-serif',
              fontSize: 22,
              fontStyle: 'normal',
              fontWeight: 400,
              lineHeight: '32px',
              marginBottom: '24px',
              marginLeft: '10px'
            }}
          >
            ADIN combines machine intellegence with the power of an expert hive mind.
          </p>
          {/*Private Network - Full Width */}
          <div
            className="rounded-2xl border border-[#E5E5E5] bg-white p-8 shadow-sm flex flex-col md:flex-row items-stretch col-span-1 md:col-span-2 mx-auto"
            style={{ maxWidth: '1025px' }}
          >
              <div className="flex-1 min-w-0 flex flex-col justify-center">
                <div className="text-xs text-[#888] font-medium mb-1">Private Network</div>
                <div className="text-xl font-bold text-black mb-1" style={{fontFamily: 'Inter'}}>Access a hand picked investor network.</div>
                <div className="text-sm text-[#222] mb-4" style={{fontFamily: 'Inter', lineHeight: '20px'}}>Share insights and collaborate with other ADIN Investors on<br/> emerging tech and trends.</div>
                
              </div>
              <div className="flex-shrink-0 flex items-center justify-center mt-8 md:mt-0 md:ml-8" style={{minWidth: 320, maxWidth: 600}}>
                <Image src="/assets/private_netwwork.png" alt="Private Network" width={320} height={140} style={{width: '420px', height: '240px', objectFit: 'cover', borderRadius: 16}} />
              </div>
            </div>
          {/* Investor and Deal Flow Cells Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-5 mb-8 max-w-5xl mx-auto">
            {/* Cell 1 */}
            <div className="rounded-2xl border border-[#E5E5E5] bg-white p-8 flex flex-col items-start shadow-sm" style={{minHeight: 420}}>
            <div className="text-xs text-[#888] mb-2 font-medium">AI Investor</div>
              <div className="text-xl font-bold text-black mb-1" style={{fontFamily: 'Inter'}}>An LLM built for venture-grade signal.</div>
              <div className="text-sm text-[#222] mb-2" style={{fontFamily: 'Inter', lineHeight: '20px', marginBottom: 30}}>ADIN's AI uncovers patterns in founders, markets, and deal flow helping you invest faster and smarter, grounded in data.</div>
              <Image src="/assets/ai_investor.png" alt="Deck Feedback" width={800} height={200} style={{width: '100%', height: 'auto', objectFit: 'cover', marginBottom: 0, borderRadius: 16}} />
            </div>
            {/* Cell 2 */}
            <div className="rounded-2xl border border-[#E5E5E5] bg-white p-8 flex flex-col items-start shadow-sm" style={{minHeight: 420}}>
            <div className="text-xs text-[#888] mb-2 font-medium">Deal Flow</div>
              <div className="text-xl font-bold text-black mb-1" style={{fontFamily: 'Inter'}}>Tap into the collective edge.</div>
              <div className="text-sm text-[#222] mb-2" style={{fontFamily: 'Inter', lineHeight: '20px', marginBottom: 30}}>The ADIN Member network surfaces deals from top founders, operators, and scouts you won't find anywhere else.</div>
              <Image src="/assets/deal_flow.png" alt="Pitch Practice" width={800} height={200} style={{width: '100%', height: 'auto', objectFit: 'cover', marginBottom: 16, borderRadius: 16}} />
            </div>
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
            Ready to shape the future of investing?
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
                style={{
                  fontFamily: 'Inter, sans-serif',
                  fontSize: 16,
                  fontStyle: 'normal',
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
                className="flex items-center justify-center"
                style={{
                  borderRadius: 80,
                  background: '#A97DF5',
                  color: '#FFF',
                  fontFamily: 'Inter, sans-serif',
                  fontSize: 16,
                  fontStyle: 'normal',
                  fontWeight: 500,
                  lineHeight: '20px',
                  padding: '14px 24px',
                  gap: 4,
                  marginLeft: 16,
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
              style={{
                marginTop: 10,
                color: '#A97DF5',
                fontFamily: 'Inter, sans-serif',
                fontSize: 16,
                fontStyle: 'normal',
                fontWeight: 500,
                lineHeight: '20px',
                textAlign: 'center',
              }}
            >
              <span style={{ color: '#888' }}>Not a Tribute Labs Member? </span>
              <a
                href="#"
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