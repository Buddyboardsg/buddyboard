'use client';

import React from 'react';
import { FaDog, FaCat } from 'react-icons/fa';

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-50 to-pink-50">
      {/* Hero Section */}
      <section className="relative bg-orange-400 h-[420px] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-orange-200" />
        <div className="relative z-10 flex flex-col items-center text-center px-4">
          <div className="flex items-center gap-3 mb-4">
            <FaDog className="text-5xl text-white drop-shadow-lg" />
            <span className="text-5xl font-extrabold text-white tracking-tight drop-shadow-lg">BuddyBoard</span>
            <FaCat className="text-5xl text-pink-200 drop-shadow-lg" />
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4 drop-shadow-lg">
            Find Trusted Pet Care Services
          </h1>
          <p className="text-lg md:text-xl text-white mb-8 drop-shadow-lg">
            Connect with loving, verified pet service providers
          </p>
          <form className="flex flex-col md:flex-row gap-2 w-full max-w-2xl mx-auto bg-white/80 rounded-xl p-4 shadow-lg">
            <input
              type="text"
              placeholder="Service Type (e.g. Boarding)"
              className="rounded-lg px-4 py-2 border-2 border-orange-200 focus:outline-none focus:border-orange-400 flex-1"
            />
            <input
              type="text"
              placeholder="Location (e.g. Singapore)"
              className="rounded-lg px-4 py-2 border-2 border-orange-200 focus:outline-none focus:border-orange-400 flex-1"
            />
            <input
              type="date"
              className="rounded-lg px-4 py-2 border-2 border-orange-200 focus:outline-none focus:border-orange-400 flex-1"
            />
            <button
              type="submit"
              className="bg-orange-500 hover:bg-orange-600 text-white font-bold px-6 py-2 rounded-lg shadow transition-all"
            >
              Search
            </button>
          </form>
        </div>
      </section>
    </div>
  );
}
