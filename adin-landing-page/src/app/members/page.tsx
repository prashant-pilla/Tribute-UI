import Image from "next/image";

export default function MembersPage() {
  return (
    <div className="min-h-screen flex flex-col font-sans bg-white">
      {/* Hero Section */}
      <section className="flex flex-col md:flex-row items-center justify-between gap-8 px-8 pt-12 pb-24 relative">
        <div className="flex-1 max-w-xl">
          <span className="inline-block border border-[#B6F09C] text-[#1A3A1A] px-3 py-1 rounded-full text-sm font-medium mb-4">Members</span>
          <h1 className="text-4xl sm:text-5xl font-bold mb-4">Submit Deals,<br />Earn Carry.</h1>
          <p className="text-lg text-gray-600 mb-8">Members earn a 10% carry on deals they submit that ADIN approves and successfully closes.</p>
          <button className="bg-black text-white px-6 py-3 rounded-full font-semibold shadow hover:bg-gray-800 transition flex items-center gap-2">Apply Now <span className="ml-1">→</span></button>
        </div>
        <div className="flex-1 flex flex-col items-center">
          {/* Video mockup */}
          <div className="relative w-80 h-44 rounded-2xl overflow-hidden bg-blue-200 flex items-center justify-center">
            {/* Replace with actual image/video if available */}
            <div className="absolute inset-0 flex items-center justify-center">
              <span className="text-6xl">😊</span>
            </div>
            <div className="absolute left-4 top-4 text-white font-semibold">Meet Adin</div>
            <div className="absolute right-4 bottom-4 text-xs text-white">AI-nati</div>
            <div className="absolute inset-0 flex items-center justify-center">
              <button className="w-14 h-14 bg-white bg-opacity-80 rounded-full flex items-center justify-center shadow-lg">
                <svg width="32" height="32" fill="none" viewBox="0 0 32 32"><circle cx="16" cy="16" r="16" fill="#FFB84D"/><polygon points="13,11 22,16 13,21" fill="#fff"/></svg>
              </button>
            </div>
          </div>
        </div>
        {/* Gradient background */}
        <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-r from-[#B6F09C] via-[#FFD6E0] to-[#B6E0FF] opacity-60 pointer-events-none" />
      </section>

      {/* Content Sections */}
      <section className="max-w-4xl mx-auto px-4 py-12 space-y-16">
        {/* Stats Section */}
        <div className="bg-white rounded-2xl shadow p-8 mb-8">
          <h2 className="text-2xl font-bold mb-2">Become an ADIN Member.<br /><span className="text-[#B6F09C]">Earn 3x more.</span></h2>
          <p className="text-gray-600 mb-6">ADIN members earn more by submitting deals and helping the network grow.</p>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-[#F6F3FF] rounded-xl p-6 flex flex-col items-center">
              <div className="text-2xl font-bold">$54,000,000</div>
              <div className="text-xs text-gray-500">Total deal value sourced</div>
            </div>
            <div className="bg-[#FFF5D6] rounded-xl p-6 flex flex-col items-center">
              <div className="text-2xl font-bold">$780,000</div>
              <div className="text-xs text-gray-500">Largest single deal</div>
            </div>
            <div className="bg-[#FFD6E0] rounded-xl p-6 flex flex-col items-center">
              <div className="text-2xl font-bold">$3,900.00</div>
              <div className="text-xs text-gray-500">Avg. member payout</div>
            </div>
          </div>
        </div>

        {/* Deal Maker Section */}
        <div>
          <h2 className="text-2xl font-bold mb-2">Be more than a <span className="text-[#B6F09C]">Member</span>.<br />Be a deal maker.</h2>
          <p className="text-gray-600 mb-6">ADIN members are the engine of the network, surfacing the best opportunities and earning carry on every deal.</p>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-white rounded-xl shadow p-6 flex flex-col gap-4">
              <div className="font-semibold">Submit deals</div>
              <div className="flex items-center gap-2">
                <span className="w-10 h-10 bg-gray-200 rounded-xl flex items-center justify-center text-2xl">📄</span>
                <span>Lane AI</span>
              </div>
              <div className="text-xs text-gray-400">Logistics</div>
            </div>
            <div className="bg-white rounded-xl shadow p-6 flex flex-col gap-4 items-center justify-center">
              <div className="font-semibold">Earn carry</div>
              <div className="w-24 h-24 bg-[#FFF5D6] rounded-xl flex items-center justify-center text-6xl">😊</div>
            </div>
          </div>
        </div>

        {/* How to Earn Section */}
        <div className="grid md:grid-cols-2 gap-6 items-center">
          <div>
            <h2 className="text-2xl font-bold mb-2">How to earn your 10% carry.</h2>
            <ul className="list-disc pl-6 text-gray-700 space-y-2">
              <li>Submit a deal using the ADIN platform.</li>
              <li>Deal is reviewed and approved by ADIN.</li>
              <li>If the deal closes, you earn 10% carry on the outcome.</li>
              <li>Get paid directly to your account.</li>
            </ul>
          </div>
          <div className="flex items-center justify-center">
            <div className="w-32 h-32 bg-yellow-300 rounded-2xl flex items-center justify-center text-7xl">😊</div>
          </div>
        </div>

        {/* FAQ */}
        <div>
          <h2 className="text-2xl font-bold mb-6">Frequently asked questions.</h2>
          <div className="space-y-4">
            <details className="bg-[#F6F3FF] rounded-lg p-4">
              <summary className="font-semibold cursor-pointer">How do I submit a deal?</summary>
              <p className="mt-2 text-gray-600">You can submit deals directly through the ADIN platform. Just click 'Apply Now' and follow the instructions.</p>
            </details>
            <details className="bg-[#F6F3FF] rounded-lg p-4">
              <summary className="font-semibold cursor-pointer">What is carry?</summary>
              <p className="mt-2 text-gray-600">Carry is a share of the profits from a successful investment. ADIN members earn 10% carry on deals they submit and that close successfully.</p>
            </details>
            <details className="bg-[#F6F3FF] rounded-lg p-4">
              <summary className="font-semibold cursor-pointer">Who can become a member?</summary>
              <p className="mt-2 text-gray-600">Anyone who shares ADIN's values and wants to help source great deals can apply to become a member.</p>
            </details>
          </div>
        </div>

        {/* CTA */}
        <div className="text-center pt-8">
          <h2 className="text-2xl font-bold mb-4">Submit Deals. Earn 10%.</h2>
          <button className="bg-[#7B61FF] text-white px-8 py-3 rounded-full font-semibold shadow hover:bg-[#a18aff] transition">Apply Now</button>
        </div>
      </section>

      {/* Footer */}
      <footer className="w-full py-6 border-t border-gray-200 flex flex-col md:flex-row items-center justify-between px-8 text-sm text-gray-500 bg-white">
        <div className="flex gap-4 mb-2 md:mb-0">
          <a href="#" className="hover:underline">Terms</a>
          <a href="#" className="hover:underline">Privacy</a>
          <a href="#" className="hover:underline">Contact</a>
        </div>
        <div>© {new Date().getFullYear()} ADIN. All rights reserved.</div>
      </footer>
    </div>
  );
} 