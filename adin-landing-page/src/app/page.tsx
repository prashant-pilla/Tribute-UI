import Image from "next/image";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col font-sans bg-white">
      {/* Hero Section */}
      <section className="flex flex-col items-center justify-center flex-1 relative pt-8 pb-24">
        <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-center mb-4">
          Investing in early<br />stage ideas building for <span className="text-[#7B61FF]">biotech.</span>
        </h1>
        <p className="text-lg sm:text-xl text-gray-600 text-center mb-8 max-w-2xl">
          ADIN backs teams building the future of the internet focusing on Seed Rounds to Series-A.
        </p>
        <button className="flex items-center gap-2 bg-[#FFF5D6] text-[#7B61FF] px-6 py-3 rounded-full font-semibold mb-8 shadow hover:bg-[#ffe9b3] transition">
          <span>😊</span> Watch the Video
        </button>
        {/* Live Reports */}
        <div className="absolute right-8 top-1/2 transform -translate-y-1/2 hidden lg:block">
          <div className="bg-white rounded-2xl shadow-lg p-6 w-72">
            <div className="font-semibold mb-4 text-gray-800">Live Reports</div>
            <ul className="space-y-3">
              <li className="flex items-center gap-3">
                <span className="inline-block w-3 h-3 bg-green-500 rounded-full"></span>
                <span className="font-medium">New Range</span>
                <span className="text-xs text-gray-400 ml-auto">Automated Compliance</span>
              </li>
              <li className="flex items-center gap-3">
                <span className="inline-block w-3 h-3 bg-green-600 rounded-full"></span>
                <span className="font-medium">Cactos</span>
                <span className="text-xs text-gray-400 ml-auto">Energy Systems</span>
              </li>
              <li className="flex items-center gap-3">
                <span className="inline-block w-3 h-3 bg-green-400 rounded-full"></span>
                <span className="font-medium">OpenAI</span>
                <span className="text-xs text-gray-400 ml-auto">Machine Intelligence</span>
              </li>
            </ul>
            <a href="#" className="block text-right text-xs text-[#7B61FF] mt-4 hover:underline">View All Recent Reports →</a>
          </div>
        </div>
        {/* Gradient background */}
        <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-r from-[#B6F09C] via-[#FFD6E0] to-[#B6E0FF] opacity-60 pointer-events-none" />
      </section>
    </div>
  );
}
