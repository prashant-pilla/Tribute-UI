import Image from "next/image";

export default function FoundersPage() {
  return (
    <div className="min-h-screen flex flex-col font-sans bg-white">
      {/* Hero Section */}
      <section className="flex flex-col items-center justify-center text-center px-8 pt-16 pb-24 relative">
        <span className="inline-block border border-[#B6F09C] text-[#1A3A1A] px-3 py-1 rounded-full text-sm font-medium mb-4">Founders</span>
        <h1 className="text-4xl sm:text-5xl font-bold mb-4">Raise Smarter.<br />Get Backed by the Network.</h1>
        <p className="text-lg text-gray-600 mb-8">Members earn a 10% carry on deals they submit that ADIN approves and successfully closes.</p>
        <button className="bg-black text-white px-6 py-3 rounded-full font-semibold shadow hover:bg-gray-800 transition flex items-center gap-2">Apply Now <span className="ml-1">→</span></button>
        {/* Gradient background */}
        <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-r from-[#B6F09C] via-[#FFD6E0] to-[#B6E0FF] opacity-60 pointer-events-none" />
      </section>

      {/* Content Sections */}
      <section className="max-w-4xl mx-auto px-4 py-12 space-y-16">
        {/* Fundraising Engine Section */}
        <div>
          <h2 className="text-2xl font-bold mb-2">Not Just a Form.<br /><span className="text-[#7B61FF]">A Fundraising Engine.</span></h2>
          <p className="text-gray-600 mb-6">Get real feedback, insights, and funding.</p>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-white rounded-xl shadow p-6 flex flex-col gap-4">
              <div className="font-semibold mb-2">Pitch deck breakdown</div>
              <div className="bg-[#FFD6E0] rounded-lg p-4 text-left">
                <div className="font-bold">LaunchE</div>
                <div className="text-xs text-gray-500 mb-2">Scaling Clients and Revenue to $500k+</div>
                <ul className="list-disc pl-4 text-sm text-gray-700">
                  <li>Traction: 10k users</li>
                  <li>Revenue: $500k ARR</li>
                  <li>Market: SaaS</li>
                </ul>
              </div>
            </div>
            <div className="bg-white rounded-xl shadow p-6 flex flex-col gap-4 items-center justify-center">
              <div className="font-semibold mb-2">AI-powered review</div>
              <div className="w-24 h-24 bg-[#FFF5D6] rounded-xl flex items-center justify-center text-6xl">🤖</div>
            </div>
          </div>
        </div>

        {/* Checklist & Peer Review Section */}
        <div className="grid md:grid-cols-2 gap-6">
          <div className="bg-white rounded-xl shadow p-6 flex flex-col gap-4">
            <div className="font-semibold mb-2">Funding checklist</div>
            <ul className="list-disc pl-4 text-sm text-gray-700">
              <li>Pitch deck</li>
              <li>Financials</li>
              <li>Team</li>
              <li>Market analysis</li>
              <li>Product demo</li>
            </ul>
          </div>
          <div className="bg-white rounded-xl shadow p-6 flex flex-col gap-4 items-center justify-center">
            <div className="font-semibold mb-2">Peer review</div>
            <div className="w-24 h-24 bg-[#FFD6E0] rounded-xl flex items-center justify-center text-6xl">😊</div>
          </div>
        </div>

        {/* FAQ */}
        <div>
          <h2 className="text-2xl font-bold mb-6">Frequently asked questions.</h2>
          <div className="space-y-4">
            <details className="bg-[#F6F3FF] rounded-lg p-4">
              <summary className="font-semibold cursor-pointer">What is ADIN?</summary>
              <p className="mt-2 text-gray-600">ADIN is a global network and not just another syndicate or fund. It supports all aspects of investing from deal sourcing to portfolio support, with a focus on early-stage teams and human judgment.</p>
            </details>
            <details className="bg-[#F6F3FF] rounded-lg p-4">
              <summary className="font-semibold cursor-pointer">How is ADIN structured?</summary>
              <p className="mt-2 text-gray-600">ADIN is a network of investors, founders, and members, each contributing to the ecosystem in unique ways.</p>
            </details>
            <details className="bg-[#F6F3FF] rounded-lg p-4">
              <summary className="font-semibold cursor-pointer">What industries does ADIN focus on?</summary>
              <p className="mt-2 text-gray-600">ADIN focuses on early-stage, high-potential teams and ideas, prioritizing innovation and vision over pedigree.</p>
            </details>
            <details className="bg-[#F6F3FF] rounded-lg p-4">
              <summary className="font-semibold cursor-pointer">Will collaboration be key in ADIN model?</summary>
              <p className="mt-2 text-gray-600">Yes, ADIN is built on collaboration between investors, founders, and members to maximize success.</p>
            </details>
            <details className="bg-[#F6F3FF] rounded-lg p-4">
              <summary className="font-semibold cursor-pointer">How can I join the network?</summary>
              <p className="mt-2 text-gray-600">Qualified founders can apply to join the network and access funding opportunities.</p>
            </details>
          </div>
        </div>

        {/* CTA */}
        <div className="text-center pt-8">
          <h2 className="text-2xl font-bold mb-4">You built the company.<br />Let ADIN fund it.</h2>
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