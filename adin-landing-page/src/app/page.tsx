'use client';
import Image from "next/image";
import { useState } from "react";
import { FaRegChartBar, FaChevronDown } from "react-icons/fa";

export default function Home() {
  const [showReports, setShowReports] = useState(true);
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
        {showReports ? (
          <div className="fixed right-8 bottom-8 z-30 bg-white rounded-2xl shadow-lg p-4 w-72 sm:w-64 flex flex-col">
            <div className="font-semibold mb-2 text-gray-800">Live Reports</div>
            <ul className="space-y-2 text-sm">
              <li className="flex items-center gap-2">
                <span className="inline-block w-2 h-2 bg-green-500 rounded-full"></span>
                <span className="font-medium text-gray-700">New Range</span>
                <span className="text-xs text-gray-400 ml-auto">Automated Compliance</span>
              </li>
              <li className="flex items-center gap-2">
                <span className="inline-block w-2 h-2 bg-green-600 rounded-full"></span>
                <span className="font-medium text-gray-700">Cactos</span>
                <span className="text-xs text-gray-400 ml-auto">Energy Systems</span>
              </li>
              <li className="flex items-center gap-2">
                <span className="inline-block w-2 h-2 bg-green-400 rounded-full"></span>
                <span className="font-medium text-gray-700">OpenAI</span>
                <span className="text-xs text-gray-400 ml-auto">Machine Intelligence</span>
              </li>
            </ul>
            <a href="#" className="block text-right text-xs text-[#7B61FF] mt-2 hover:underline">View All Recent Reports →</a>
            <button
              className="absolute left-2 bottom-2 bg-gray-100 rounded-full p-1 shadow hover:bg-gray-200 transition flex items-center"
              title="Minimize"
              onClick={() => setShowReports(false)}
            >
              <FaChevronDown className="text-gray-500" />
            </button>
          </div>
        ) : (
          <button
            className="fixed right-8 bottom-8 z-30 bg-white rounded-full shadow-lg p-3 flex items-center justify-center hover:bg-gray-100 transition"
            title="Show Live Reports"
            onClick={() => setShowReports(true)}
          >
            <FaRegChartBar className="text-[#7B61FF] text-xl" />
          </button>
        )}
        {/* Gradient background */}
        <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-r from-[#B6F09C] via-[#FFD6E0] to-[#B6E0FF] opacity-60 pointer-events-none" />
      </section>
    </div>
  );
}
