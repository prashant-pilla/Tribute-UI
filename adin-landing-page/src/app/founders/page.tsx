'use client';
import Image from "next/image";
import { useState } from "react";

export default function FoundersPage() {
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
        q: 'What is ADIN?',
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
      <section className="flex flex-col items-center justify-center text-center px-4 md:px-8 pt-20 pb-8 relative min-h-[60vh] w-full">
        <span className="border border-[#49C17A] text-[#4D4D4D] font-medium text-base leading-5 font-inter px-3 py-1 rounded-full mb-8">
            Founders
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
            marginTop: 0,
            }}
          >
          Raise Smarter.<br />Get Backed by the Network.
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
            marginLeft: 'auto',
            marginRight: 'auto',
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
            marginBottom: 60,
            marginLeft: 'auto',
            marginRight: 'auto',
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
        {/* Down arrow for scroll cue */}
        <div className="absolute bottom-3 left-1/2 -translate-x-1/2 z-10 hidden md:block">
            <Image src="/assets/chevron-down.svg" alt="Scroll Down" width={24} height={24} className="animate-bounce opacity-60" />
        </div>
        {/* Gradient background fixed to viewport bottom, z-0 */}
        <div
          className="absolute bottom-0 left-0 w-full h-40 z-0 pointer-events-none"
          style={{
            bottom: '-70px',
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
            style={{
              color: '#000',
              fontFamily: 'Inter, sans-serif',
              fontSize: 56,
              fontStyle: 'normal',
              fontWeight: 600,
              lineHeight: '64px',
              marginBottom: 16,
              marginTop: 100,
              textAlign: 'center',
            }}
          >
            Not Just a form.<br />A Fundraising <span style={{ color: '#A97DF5', fontFamily: 'Inter, sans-serif', fontSize: 56, fontStyle: 'normal', fontWeight: 600, lineHeight: '64px' }}>Engine</span>.
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
              textAlign: 'center',
            }}
          >
            Get real feedback, insights, and funding.
          </p>

          {/* 4 Feature Cells Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-4 mb-8 max-w-5xl mx-auto">
            {/* Cell 1 */}
            <div className="rounded-2xl border border-[#E5E5E5] bg-white p-4 md:p-8 flex flex-col items-start shadow-sm" style={{minHeight: 420}}>
            <div className="text-xs text-[#888] mb-2 font-medium">Deck Feedback</div>
                              <div className="text-xl font-bold text-black mb-1" style={{fontFamily: 'Inter, sans-serif'}}>Pitch deck breakdown.</div>
                <div className="text-sm text-[#222] mb-4" style={{fontFamily: 'Inter, sans-serif', lineHeight: '20px'}}>Receive feedback on your deck&apos;s clarity, design, and investor-readiness. ADIN makes sure you&apos;re ready for the room.</div>
              <Image src="/assets/Frame 1.svg" alt="Deck Feedback" width={800} height={200} style={{width: '100%', height: 'auto', objectFit: 'cover', marginBottom: 0, borderRadius: 16}} />
            </div>
            {/* Cell 2 */}
            <div className="rounded-2xl border border-[#E5E5E5] bg-white p-4 md:p-8 flex flex-col items-start shadow-sm" style={{minHeight: 420}}>
              <Image src="/assets/Frame 2.svg" alt="Pitch Practice" width={800} height={200} style={{width: '100%', height: 'auto', objectFit: 'cover', marginBottom: 16, borderRadius: 16}} />
              <div className="text-xs text-[#888] mb-2 font-medium">Pitch Practice</div>
                              <div className="text-xl font-bold text-black mb-1" style={{fontFamily: 'Inter, sans-serif'}}>Practice with ADIN Live.</div>
                <div className="text-sm text-[#222] mb-2" style={{fontFamily: 'Inter, sans-serif', lineHeight: '20px'}}>Pitch in a live voice-chat interface. ADIN will ask real investor-style questions and give you a score to sharpen your story.</div>
            </div>
            {/* Cell 3 */}
            <div className="rounded-2xl border border-[#E5E5E5] bg-white p-4 md:p-8 flex flex-col items-start shadow-sm" style={{minHeight: 420}}>
              <Image src="/assets/Frame 3.svg" alt="Smart Evaluation" width={800} height={200} style={{width: '100%', height: 'auto', objectFit: 'cover', marginBottom: 16, borderRadius: 16}} />
              <div className="text-xs text-[#888] mb-2 font-medium">Smart Evaluation</div>
                              <div className="text-xl font-bold text-black mb-1" style={{fontFamily: 'Inter, sans-serif'}}>ADIN will analyze & rate your idea.</div>
                <div className="text-sm text-[#222] mb-0" style={{fontFamily: 'Inter, sans-serif', lineHeight: '20px'}}>Upload your deck, GTM, or site. ADIN returns key takeaways, market insights, and competitive breakdown.</div>
            </div>
            {/* Cell 4 */}
            <div className="rounded-2xl border border-[#E5E5E5] bg-white p-4 md:p-8 flex flex-col items-start shadow-sm" style={{minHeight: 420}}>
            <div className="text-xs text-[#888] mb-2 font-medium">From Pitch to Capital</div>
                              <div className="text-xl font-bold text-black mb-1" style={{fontFamily: 'Inter, sans-serif'}}>Secure funding.</div>
                <div className="text-sm text-[#222] mb-4" style={{fontFamily: 'Inter, sans-serif', lineHeight: '20px'}}>Once approved, your startup enters ADIN&apos;s deal room. Investors commit, you choose who signs the check.</div>
              <Image src="/assets/Frame 4.svg" alt="Secure Funding" width={800} height={200} style={{width: '100%', height: 'auto', objectFit: 'cover', marginBottom: 0, borderRadius: 16}} />
            </div>
          </div>
          
        </div>

        {/* FAQ (copied from home page) */}
        <section className="max-w-5xl mx-auto mt-24 mb-24 px-4">
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
                <summary className="flex items-center justify-between cursor-pointer px-6 py-5 font-semibold text-lg text-black transition text-left list-none">
                  {item.q}
                  <svg width="24" height="24" fill="none" viewBox="0 0 24 24" className="ml-2 transition-transform duration-200 group-open:rotate-180 flex-shrink-0">
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
        <div className="flex flex-col items-center justify-center pt-0 pb-20 px-4">
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
            You built the company.<br/>Let ADIN fund it.
          </h2>
          <div className="flex flex-col items-center">
            <div
              className="flex items-center border rounded-[32px]"
              style={{
                border: '1px solid #F3EAFD',
                background: '#FFF',
                padding: '4px 4px 4px 16px',
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
