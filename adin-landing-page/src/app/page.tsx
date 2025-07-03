'use client';
import Image from "next/image";
import { useState, useEffect, useRef } from "react";
import { FaRegChartBar, FaChevronDown } from "react-icons/fa";

const keywords = [
  "3D printing",
  "blockchain",
  "biotech",
  "creative tools",
  "medical",
  "fintech",
  "climate",
  "AI",
  "robotics",
];

const liveReports = [
  {
    icon: "/assets/New Range.svg",
    title: "New Range",
    subtitle: "Automated Compliance",
    href: "#",
  },
  {
    icon: "/assets/Cactos Icon.png",
    title: "Cactos",
    subtitle: "Energy Systems",
    href: "#",
  },
  {
    icon: "/assets/Open AI.svg",
    title: "OpenAI",
    subtitle: "Machine Intelligence",
    href: "#",
  },
];

const blurbs = [
  {
    text: (
      <>
        ADIN is a global network of <span style={{ color: '#000', fontWeight: 600 }}>12,302 humans</span> sharing insights and knowledge as Investors, Members, & Founders.
      </>
    ),
  },
  {
    text: (
      <>
        <span style={{ color: '#000', fontWeight: 600 }}>Investors (Human LPs)</span> vote on proposed deals guiding decision-making through collective insights, and over time enabling the fine tuning of models.
      </>
    ),
  },
  {
    text: (
      <>
        Our team writes checks from <span style={{ color: '#000', fontWeight: 600 }}>$500k to $2 million</span>, partnering with visionary builders in connectivity, compute, crypto, and creative economies.
      </>
    ),
  }
];

const aiAgents = [
  {
    icon: "/assets/Smiley - Icon.svg",
    name: "The Network Hunter",
    desc: "Find the crowd, fuel the movement.",
  },
  {
    icon: "/assets/Smiley - Icon-1.svg",
    name: "The Tech Oracle",
    desc: "Spotting tomorrow's breakthroughs, today.",
  },
  {
    icon: "/assets/Smiley - Icon-2.svg",
    name: "The Monopoly Maker",
    desc: "Backing the next market dominator.",
  },
  {
    icon: "/assets/Smiley - Icon-3.svg",
    name: "The Unit Master",
    desc: "Numbers first, profits always.",
  },
  {
    icon: "/assets/Smiley - Icon-4.svg",
    name: "The Value Guy",
    desc: "Seeking hidden gems for lasting growth.",
  },
];

const humans = [
  {
    img: "/assets/profile card image ryan hoover.png",
    name: "Ryan Hoover",
    title: "Founder, Product Hunt",
    bg: "#FFF5D6",
  },
  {
    img: "/assets/profile card image ryan hoover.png",
    name: "Jane Doe",
    title: "VC, Example Capital",
    bg: "#E6F7FF",
  },
  {
    img: "/assets/profile card image ryan hoover.png",
    name: "John Smith",
    title: "Angel Investor",
    bg: "#F6F3FF",
  },
];

export default function Home() {
  const [carouselIndex, setCarouselIndex] = useState(2); // Start with 'biotech' centered
  const [isPaused, setIsPaused] = useState(false);
  const intervalRef = useRef<NodeJS.Timeout | null>(null);
  const [blurbIndex, setBlurbIndex] = useState(0);
  const [isPausedBlurb, setIsPausedBlurb] = useState(false);
  const blurbIntervalRef = useRef<NodeJS.Timeout | null>(null);
  const [humanIndex, setHumanIndex] = useState(0);
  const humanIntervalRef = useRef<NodeJS.Timeout | null>(null);

  // Carousel logic: scrolls, pauses at center, then continues
  useEffect(() => {
    if (isPaused) return;
    intervalRef.current = setInterval(() => {
      setCarouselIndex((prev) => (prev + 1) % keywords.length);
      setIsPaused(true);
    }, 1800);
    return () => {
      if (intervalRef.current) clearInterval(intervalRef.current);
    };
  }, [isPaused]);

  // Pause briefly when a keyword is centered
  useEffect(() => {
    if (isPaused) {
      const pauseTimeout = setTimeout(() => setIsPaused(false), 1200);
      return () => clearTimeout(pauseTimeout);
    }
  }, [isPaused]);

  useEffect(() => {
    if (isPausedBlurb) return;
    blurbIntervalRef.current = setInterval(() => {
      setBlurbIndex((prev) => (prev + 1) % blurbs.length);
    }, 4000);
    return () => {
      if (blurbIntervalRef.current) clearInterval(blurbIntervalRef.current);
    };
  }, [isPausedBlurb, blurbs.length]);

  // Ensure blurbIndex is always valid
  useEffect(() => {
    if (blurbIndex >= blurbs.length) {
      setBlurbIndex(0);
    }
  }, [blurbIndex, blurbs.length]);

  useEffect(() => {
    if (humanIntervalRef.current) clearInterval(humanIntervalRef.current);
    humanIntervalRef.current = setInterval(() => {
      setHumanIndex((prev) => (prev + 1) % humans.length);
    }, 4000);
    return () => {
      if (humanIntervalRef.current) clearInterval(humanIntervalRef.current);
    };
  }, [humanIndex, humans.length]);

  // Helper to get visible keywords for the carousel
  const getVisibleKeywords = () => {
    const visible = [];
    for (let i = -2; i <= 2; i++) {
      visible.push(keywords[(carouselIndex + i + keywords.length) % keywords.length]);
    }
    return visible;
  };

  return (
    <div className="min-h-screen flex flex-col font-sans bg-white relative overflow-x-hidden">
      {/* Hero Section */}
      <section className="w-full flex flex-col items-center justify-center relative pt-8 pb-16 min-h-[60vh]">
        <div className="relative z-10 w-full flex flex-col items-center">
          <h1
            className="font-semibold text-center mb-1"
            style={{
              color: '#000',
              fontFamily: 'Inter, sans-serif',
              fontSize: 56,
              fontWeight: 600,
              lineHeight: '64px',
            }}
          >
            Investing in early<br />stage ideas building for
          </h1>
          {/* Carousel of keywords */}
          <div className="w-full px-0 flex justify-center mb-1 h-[72px] select-none overflow-x-auto hide-scrollbar">
            <div className="flex items-center gap-8 min-w-full">
              {getVisibleKeywords().map((word, idx) => {
                const isCenter = idx === 2;
                const colorIdx = (keywords.indexOf(word)) % 3;
                const colorMap = [
                  '#FF9066', // orange
                  '#5ED890', // green
                  '#FFD17A', // yellow
                ];
                const color = colorMap[colorIdx];
                return (
                  <span
                    key={word}
                    className="font-semibold whitespace-nowrap px-4 text-center"
                    style={{
                      color: color,
                      fontFamily: 'Inter, sans-serif',
                      fontSize: 56,
                      fontWeight: 600,
                      lineHeight: '72px',
                      opacity: isCenter ? 1 : 0.2,
                      transition: 'opacity 0.3s',
                    }}
                  >
                    {word}
                  </span>
                );
              })}
            </div>
          </div>
          <p
            className="text-center mb-4"
            style={{
              maxWidth: 594,
              color: '#4D4D4D',
              fontFamily: 'Inter, sans-serif',
              fontSize: 24,
              fontWeight: 400,
              lineHeight: '32px',
              marginLeft: 'auto',
              marginRight: 'auto',
            }}
          >
            ADIN backs teams building the future of the internet focusing on Seed Rounds to Series-A.
          </p>
          <div className="w-full flex justify-center mb-2">
            <button
              className="flex items-center group transition-colors"
              style={{
                borderRadius: 12,
                background: '#FCF0D1',
                padding: '4px 16px 4px 4px',
                alignItems: 'center',
                gap: 16,
                height: 48,
                minWidth: 180,
                maxWidth: 227,
              }}
            >
              <Image src="/assets/Video Section.png" alt="Watch the Video" width={64} height={40} style={{ borderRadius: 8 }} />
              <span
                className="transition-colors text-black group-hover:text-[#7B61FF]"
                style={{
                  fontFamily: 'Inter, sans-serif',
                  fontSize: 16,
                  fontWeight: 500,
                  lineHeight: '20px',
                }}
              >
                Watch the Video
              </span>
            </button>
          </div>
          {/* Live Reports Section - heading left-aligned above cards */}
          <div className="w-full flex justify-center lg:justify-end mt-1 lg:pr-8" style={{ marginTop: '-20px' }}>
            <div className="w-full max-w-[220px] flex flex-col gap-1">
              <div className="flex items-center gap-1 mb-1">
                <span className="inline-block w-1 h-1 bg-green-500 rounded-full"></span>
                <span className="font-medium text-gray-900 text-xs">Live Reports</span>
              </div>
              <div className="flex flex-col gap-1">
                {liveReports.map((report, idx) => (
                  <a
                    key={report.title}
                    href={report.href}
                    className="flex items-center gap-2 bg-white rounded-lg border border-gray-200 px-2 py-1.5 shadow-sm hover:shadow-md hover:border-[#7B61FF] transition group"
                    style={{ boxShadow: '0 1px 3px 0 rgba(80, 80, 120, 0.04)' }}
                  >
                    {report.title === 'New Range' ? (
                      <div style={{ background: '#000', borderRadius: 8, width: 26, height: 26, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                        <Image src={report.icon} alt={report.title} width={18} height={18} />
                      </div>
                    ) : report.title === 'Cactos' ? (
                      <Image src={report.icon} alt={report.title} width={26} height={26} className="rounded-lg" />
                    ) : (
                      <Image src={report.icon} alt={report.title} width={26} height={26} />
                    )}
                    <div className="flex flex-col">
                      <span className="font-semibold text-black group-hover:text-[#7B61FF] transition-colors text-xs leading-tight">{report.title}</span>
                      <span className="text-[10px] text-gray-500 leading-tight">{report.subtitle}</span>
                    </div>
                  </a>
                ))}
              </div>
              <a href="#" className="block text-right text-[11px] font-medium mt-1 text-white hover:underline transition-colors" style={{textDecorationThickness: '2px'}}>
                View <span className="font-semibold">All Recent Reports</span> →
              </a>
            </div>
          </div>
          {/* Down arrow for scroll cue */}
          <div className="absolute bottom-2 left-1/2 -translate-x-1/2 z-10">
            <Image src="/assets/chevron-down.svg" alt="Scroll Down" width={24} height={24} className="animate-bounce opacity-60" />
          </div>
        </div>
        {/* Gradient background absolute to hero section bottom, z-0 */}
        <div
          className="absolute bottom-0 left-0 w-full h-40"
          style={{
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
      {/* Blurb Carousel Section */}
      <section className="w-full flex flex-col items-center justify-center mt-3 mb-0">
        <p
          style={{
            maxWidth: 774,
            color: '#86868B',
            textAlign: 'center',
            fontFamily: 'Inter, sans-serif',
            fontSize: 32,
            fontWeight: 600,
            lineHeight: '40px',
            marginTop: 0,
            marginBottom: 0,
            marginRight: 'auto',
            marginLeft: 'auto',
            minHeight: 80,
            display: 'inline-block',
            wordBreak: 'break-word',
          }}
        >
          {blurbs[blurbIndex].text}
        </p>
        {/* Carousel Controls */}
        <div className="flex items-center justify-center gap-4 mt-4">
          {/* Pause/Play Button */}
          <button
            onClick={() => setIsPausedBlurb((p) => !p)}
            className="w-8 h-8 flex items-center justify-center rounded-full bg-[#F6F3FF] text-[#A97DF5] hover:bg-[#E6DFFF] transition"
            aria-label={isPausedBlurb ? 'Play' : 'Pause'}
          >
            {isPausedBlurb ? (
              <Image src="/assets/Play Icon.svg" alt="Play" width={24} height={24} />
            ) : (
              // Pause icon
              <svg width="20" height="20" fill="none" viewBox="0 0 20 20"><circle cx="10" cy="10" r="10" fill="#E6DFFF"/><rect x="7" y="6" width="2" height="8" rx="1" fill="#A97DF5"/><rect x="11" y="6" width="2" height="8" rx="1" fill="#A97DF5"/></svg>
            )}
          </button>
          {/* Slide Indicators */}
          <div className="flex items-center gap-2">
            {blurbs.map((_, idx) => (
              <button
                key={idx}
                onClick={() => setBlurbIndex(idx)}
                className={`w-6 h-3 rounded-full transition-all duration-200 ${blurbIndex === idx ? 'bg-[#A97DF5]' : 'bg-[#E6DFFF]'}`}
                aria-label={`Go to slide ${idx + 1}`}
              />
            ))}
          </div>
        </div>
      </section>
      {/* Content Sections */}
      <section className="max-w-4xl mx-auto px-4 py-12 space-y-16">
        {/* AI speed. Human judgment. */}
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
          AI speed.<br />Human judgment.
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
            marginTop: 0,
            marginRight: 'auto',
            marginLeft: 'auto',
            textAlign: 'left',
          }}
        >
          ADIN pairs expert operators with intelligent agents to handle the heavy lifting of venture workflows. Faster analysis, tighter feedback loops, and more space for high-conviction bets.
        </p>
        {/* AI Agents & Humans Section */}
      <section className="w-full flex flex-col md:flex-row gap-8 justify-center items-stretch max-w-5xl mx-auto mb-7 mt-7">
        {/* AI Agents Card */}
        <div className="flex-1 bg-white rounded-2xl border border-[#E5E5E5] p-6 flex flex-col min-w-[320px] max-w-xl shadow-sm">
          <div className="mb-4">
            <div className="text-lg font-semibold text-gray-900">Powered by</div>
            <div className="text-3xl font-bold text-black leading-tight">AI Agents</div>
          </div>
          <div className="flex flex-col gap-4">
            {aiAgents.map((agent, idx) => (
              <div key={agent.name} className="flex items-center gap-4 py-2 border-b last:border-b-0 border-[#F0F0F0]">
                <Image src={agent.icon} alt={agent.name} width={40} height={40} className="rounded-lg" />
                <div>
                  <div className="font-semibold text-black text-base">{agent.name}</div>
                  <div className="text-gray-500 text-sm">{agent.desc}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
        {/* Humans Carousel Card */}
        <div className="flex-1 bg-white rounded-2xl border border-[#E5E5E5] p-6 flex flex-col min-w-[320px] max-w-xl shadow-sm items-center">
          <div className="mb-4 w-full">
            <div className="text-lg font-semibold text-gray-900">Supported by</div>
            <div className="text-3xl font-bold text-black leading-tight">Humans</div>
          </div>
          {/* Carousel */}
          <div className="w-full flex flex-col items-center flex-1 min-h-0">
            <div
              className="w-full flex-1 min-h-0 rounded-2xl flex items-center justify-center mb-3 relative overflow-hidden"
              style={{ background: humans[humanIndex].bg }}
            >
              <Image
                src={humans[humanIndex].img}
                alt={humans[humanIndex].name}
                fill
                className="rounded-2xl object-cover"
                style={{ objectFit: 'cover' }}
                sizes="(max-width: 768px) 80vw, 320px"
              />
              {/* Glass overlay for name/title */}
              <div className="absolute bottom-0 left-0 w-full px-0 py-0">
                <div className="w-full flex flex-col items-center justify-center backdrop-blur bg-white/60 rounded-b-2xl px-6 py-4">
                  <div
                    className="flex items-center gap-2 justify-center text-center w-full"
                    style={{
                      color: '#111',
                      fontFamily: 'Inter, sans-serif',
                      fontSize: 24,
                      fontWeight: 600,
                      lineHeight: '32px',
                      marginBottom: 2,
                    }}
                  >
                    {humans[humanIndex].name}
                  </div>
                  <div
                    className="text-center w-full"
                    style={{
                      color: '#222',
                      fontFamily: 'Inter, sans-serif',
                      fontSize: 16,
                      fontWeight: 400,
                      lineHeight: '20px',
                      opacity: 0.95,
                    }}
                  >
                    {humans[humanIndex].title}
                  </div>
                </div>
              </div>
            </div>
            {/* Carousel Dots */}
            <div className="flex gap-2 mt-4">
              {humans.map((_, idx) => (
                <button
                  key={idx}
                  onClick={() => setHumanIndex(idx)}
                  className={`w-4 h-2 rounded-full transition-all duration-200 ${humanIndex === idx ? 'bg-[#A97DF5]' : 'bg-[#E6DFFF]'}`}
                  aria-label={`Show human ${idx + 1}`}
                />
              ))}
            </div>
          </div>
        </div>
        </section>
        {/* Tribute Labs Project Section */}
        <section className="w-full flex max-w-5xl mx-auto mb-12">
          {/* Card with icon and label, compact and left-aligned */}
          <div className="flex bg-white rounded-2xl shadow border border-[#E5E5E5] items-start mr-5 mt-1 px-3 py-2 min-w-[280px] max-w-[340px]" style={{ alignSelf: 'flex-start', marginLeft: 0 }}>
            <div className="flex items-center justify-center w-12 h-12 rounded-xl bg-[#FF0099] mr-3 shrink-0 mt-1">
              <img src="/assets/Footer Logo Icon.svg" alt="Tribute Labs Logo" className="w-8 h-10" />
            </div>
            <div className="flex flex-col justify-start">
              <span style={{ color: '#000', fontFamily: 'Inter, sans-serif', fontSize: 15, fontWeight: 500, lineHeight: '20px', marginTop: 4 }}>A Tribute Labs Project</span>
              <span style={{ color: '#4D4D4D', fontFamily: 'Inter, sans-serif', fontSize: 11, fontWeight: 400, lineHeight: '16px', marginTop: 2 }}>NYC / LDN / CHI</span>
            </div>
          </div>
          {/* Descriptive text, outside the card */}
          <div
            style={{
              color: '#4D4D4D',
              fontFamily: 'Inter, sans-serif',
              fontSize: 14,
              fontWeight: 400,
              lineHeight: '24px',
              flex: '1 0 0',
              minWidth: 300,
              marginTop: 0,
              maxWidth: 'calc(100% - 100px)',
            }}
          >
            Tribute Labs has supported over 30 communities, empowering more than 300 projects through technical guidance, infrastructure, and long-term partnership. Our mission is to help communities thrive by providing the tools and support they need to scale with confidence.
          </div>
        </section>
        {/* Only Early. Always Human. */}
        <h2
          style={{
            alignSelf: 'stretch',
            color: '#000',
            fontFamily: 'Inter, sans-serif',
            fontSize: 54,
            fontWeight: 600,
            lineHeight: '64px',
            marginBottom: 10,
            marginTop: 100,
            maxWidth: 1100,
            width: '100%',
            marginRight: 'auto',
            marginLeft: 'auto',
            textAlign: 'left',
          }}
        >
          Only Early.<br />Always Human.
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
            marginTop: 0,
            marginRight: 'auto',
            marginLeft: 'auto',
            textAlign: 'left',
          }}
        >
          ADIN backs bold ideas at the beginning, where conviction matters most. We invest exclusively at the earliest stages, combining operator insight and intelligent systems to move faster, with greater focus.
        </p>
        {/* Stage Grid Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 my-16">
          {/* Pre-Seed */}
          <div className="relative pl-8 pb-8">
            {/* Thin gray line (full height) */}
            <div className="absolute left-0 top-0 h-full" style={{ width: '2px', background: '#E5E5E5', borderRadius: '1px' }} />
            {/* Thicker colored segment (aligned with title) */}
            <div className="absolute left-0" style={{ top: '23px', height: '32px', width: '3px', background: '#BCA6FF', borderRadius: '3px' }} />
            <div style={{ color: '#000', fontFamily: 'Inter, sans-serif', fontSize: 12, fontWeight: 500, lineHeight: '16px', marginBottom: 8 }}>Pre-Seed</div>
            <div style={{ color: '#000', fontFamily: 'Inter, sans-serif', fontSize: 22, fontWeight: 600, lineHeight: '28px', marginBottom: 8 }}>Backed by Belief</div>
            <div style={{ color: '#000', fontFamily: 'Inter, sans-serif', fontSize: 17, fontWeight: 400, lineHeight: '24px' }}>
              At pre-seed, conviction outweighs traction. ADIN provides governance capital and strategic support to founders with deep alignment and long-term thinking.
            </div>
          </div>
          {/* Seed */}
          <div className="relative pl-8 pb-8">
            {/* Thin gray line (full height) */}
            <div className="absolute left-0 top-0 h-full" style={{ width: '2px', background: '#E5E5E5', borderRadius: '1px' }} />
            {/* Thicker colored segment (aligned with title) */}
            <div className="absolute left-0" style={{ top: '23px', height: '32px', width: '3px', background: '#6BE6B2', borderRadius: '3px' }} />
            <div style={{ color: '#000', fontFamily: 'Inter, sans-serif', fontSize: 12, fontWeight: 500, lineHeight: '16px', marginBottom: 8 }}>Seed</div>
            <div style={{ color: '#000', fontFamily: 'Inter, sans-serif', fontSize: 22, fontWeight: 600, lineHeight: '28px', marginBottom: 8 }}>Culture-First Capital</div>
            <div style={{ color: '#000', fontFamily: 'Inter, sans-serif', fontSize: 17, fontWeight: 400, lineHeight: '24px' }}>
              Seed-stage founders shape ADIN's future. Our community brings cultural context and dealflow, helping us invest in projects that align with our collective values.
            </div>
          </div>
          {/* A Round */}
          <div className="relative pl-8">
            {/* Thin gray line (full height) */}
            <div className="absolute left-0 top-0 h-full" style={{ width: '2px', background: '#E5E5E5', borderRadius: '1px' }} />
            {/* Thicker colored segment (aligned with title) */}
            <div className="absolute left-0" style={{ top: '23px', height: '32px', width: '3px', background: '#BCA6FF', borderRadius: '3px' }} />
            <div style={{ color: '#000', fontFamily: 'Inter, sans-serif', fontSize: 12, fontWeight: 500, lineHeight: '16px', marginBottom: 8 }}>A Round</div>
            <div style={{ color: '#000', fontFamily: 'Inter, sans-serif', fontSize: 22, fontWeight: 600, lineHeight: '28px', marginBottom: 8 }}>Early, Not Late</div>
            <div style={{ color: '#000', fontFamily: 'Inter, sans-serif', fontSize: 17, fontWeight: 400, lineHeight: '24px' }}>
              We don't chase momentum—we help create it. ADIN's A-round capital supports early traction and sharp execution, before the noise of growth-stage hype.
            </div>
          </div>
        </div>
        {/* FAQ */}
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
          {(() => {
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
                  q: "Wil tokenization fit into ADIN's model?",
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
              <>
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
              </>
            );
          })()}
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
            Invest with ADIN.
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
