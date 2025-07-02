import Image from "next/image";

export default function InvestorsPage() {
  return (
    <div className="min-h-screen flex flex-col font-sans bg-white">
      {/* Hero Section */}
      <section className="flex flex-col md:flex-row items-center justify-between gap-8 px-8 pt-12 pb-24 relative">
        <div className="flex-1 max-w-xl">
          <span className="inline-block bg-[#FFF5D6] text-[#7B61FF] px-3 py-1 rounded-full text-sm font-medium mb-4">Investors</span>
          <h1 className="text-4xl sm:text-5xl font-bold mb-4">AI Will be the Best Investor.</h1>
          <p className="text-lg text-gray-600 mb-8">ADIN and its agents automate venture, from diligence to making investment decisions, with deals sourced by investors and the ADIN member network.</p>
          <button className="bg-black text-white px-6 py-3 rounded-full font-semibold shadow hover:bg-gray-800 transition flex items-center gap-2">Apply Now <span className="ml-1">→</span></button>
        </div>
        <div className="flex-1 flex flex-col items-center">
          {/* Card and voting mockup */}
          <div className="relative">
            <div className="bg-gray-900 rounded-2xl w-64 h-40 flex items-end p-4 relative">
              <span className="absolute top-3 left-3 bg-yellow-300 text-xs font-bold px-2 py-1 rounded-full">↻ 100%</span>
              <span className="absolute top-3 right-3 text-2xl text-green-400">✕</span>
              <div className="text-white">
                <div className="font-semibold">Lane AI</div>
                <div className="text-xs text-gray-300">Logistics</div>
              </div>
            </div>
            <div className="absolute left-32 top-24 bg-white rounded-xl shadow-lg p-4 w-56">
              <div className="flex items-center gap-2 mb-2">
                <span className="w-6 h-6 bg-gray-900 rounded-full flex items-center justify-center text-white text-xs">🧑‍💻</span>
                <span className="font-medium">Scribe</span>
                <span className="ml-auto text-green-600 font-semibold">For</span>
                <span className="ml-2 text-green-500">＋</span>
              </div>
              <div className="flex items-center gap-2 mb-2">
                <span className="w-6 h-6 bg-gray-900 rounded-full flex items-center justify-center text-white text-xs">✕</span>
                <span className="font-medium">Lane AI</span>
                <span className="ml-auto text-green-600 font-semibold">For</span>
                <span className="ml-2 text-green-500">＋</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="w-6 h-6 bg-gray-800 rounded-full flex items-center justify-center text-white text-xs">S</span>
                <span className="font-medium">Sona</span>
                <span className="ml-auto text-red-600 font-semibold">Against</span>
                <span className="ml-2 text-red-500">✕</span>
              </div>
            </div>
          </div>
        </div>
        {/* Gradient background */}
        <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-r from-[#B6F09C] via-[#FFD6E0] to-[#B6E0FF] opacity-60 pointer-events-none" />
      </section>

      {/* Content Sections */}
      <section className="max-w-4xl mx-auto px-4 py-12 space-y-16">
        {/* Power Player Section */}
        <div>
          <h2 className="text-2xl font-bold mb-2">Be more than an <span className="text-[#7B61FF]">Investor</span>.<br />Be a power player.</h2>
          <p className="text-gray-600 mb-6">Automate your investing journey through intelligent deal opportunities.</p>
          {/* Mockup cards and stats */}
          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-white rounded-xl shadow p-6 flex flex-col gap-4">
              <div className="font-semibold">Best new company</div>
              <div className="flex items-center gap-2">
                <span className="w-6 h-6 bg-gray-900 rounded-full flex items-center justify-center text-white text-xs">✕</span>
                <span>Lane AI</span>
              </div>
              <div className="text-xs text-gray-400">Logistics</div>
            </div>
            <div className="bg-white rounded-xl shadow p-6 flex flex-col gap-4">
              <div className="font-semibold">Solution auto-votes 100%</div>
              <div className="flex items-center gap-2">
                <span className="w-6 h-6 bg-gray-900 rounded-full flex items-center justify-center text-white text-xs">🧑‍💻</span>
                <span>Scribe</span>
                <span className="ml-auto text-green-600 font-semibold">For</span>
                <span className="ml-2 text-green-500">＋</span>
              </div>
            </div>
          </div>
        </div>

        {/* Precision Section */}
        <div>
          <h2 className="text-2xl font-bold mb-2">The precision of a machine.<br />The instincts of a community.</h2>
          <p className="text-gray-600 mb-6">AI-driven investment ratings, together with peer validation and review.</p>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-white rounded-xl shadow p-6 flex flex-col gap-4">
              <div className="font-semibold mb-2">Investors</div>
              <div className="flex flex-wrap gap-2">
                {/* Avatars */}
                {[...Array(8)].map((_, i) => (
                  <span key={i} className="w-8 h-8 bg-gray-200 rounded-full inline-block"></span>
                ))}
              </div>
            </div>
            <div className="bg-white rounded-xl shadow p-6 flex flex-col gap-4">
              <div className="font-semibold mb-2">Top deal: Lane AI</div>
              <div className="bg-gray-900 rounded-xl p-4 text-white">
                <div className="font-semibold">Lane AI</div>
                <div className="text-xs text-gray-300">Logistics</div>
              </div>
            </div>
          </div>
        </div>

        {/* FAQ */}
        <div>
          <h2 className="text-2xl font-bold mb-6">Frequently asked questions.</h2>
          <div className="space-y-4">
            <details className="bg-[#F6F3FF] rounded-lg p-4">
              <summary className="font-semibold cursor-pointer">How does AI help investors?</summary>
              <p className="mt-2 text-gray-600">AI helps automate diligence, voting, and deal sourcing, making the process faster and more data-driven.</p>
            </details>
            <details className="bg-[#F6F3FF] rounded-lg p-4">
              <summary className="font-semibold cursor-pointer">What makes ADIN different?</summary>
              <p className="mt-2 text-gray-600">ADIN combines AI precision with human judgment, ensuring the best of both worlds for investment decisions.</p>
            </details>
            <details className="bg-[#F6F3FF] rounded-lg p-4">
              <summary className="font-semibold cursor-pointer">Can anyone become an investor?</summary>
              <p className="mt-2 text-gray-600">Qualified individuals who share ADIN's vision can apply to join the investor network.</p>
            </details>
          </div>
        </div>

        {/* CTA */}
        <div className="text-center pt-8">
          <h2 className="text-2xl font-bold mb-4">Ready to shape the future of investing?</h2>
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