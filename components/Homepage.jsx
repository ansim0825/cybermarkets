"use client";

import React, { useState } from 'react';
import { Logo } from './Logo';

const Homepage = () => {
  const [hoveredPillar, setHoveredPillar] = useState(null);

  const pillars = [
    { id: 'endpoint', name: 'Endpoint & Workload', icon: '💻', status: 'Coming Soon', heat: 'pending' },
    { id: 'identity', name: 'Identity', icon: '🔐', status: 'Coming Soon', heat: 'pending' },
    { id: 'cloud', name: 'Cloud Security', icon: '☁️', status: 'Coming Soon', heat: 'pending' },
    { id: 'network', name: 'Network & Edge', icon: '🌐', status: 'Updated Jan 2025', heat: 'hot', href: '/email-security' },
    { id: 'secops', name: 'SecOps & Analytics', icon: '📊', status: 'Coming Soon', heat: 'pending' },
    { id: 'data', name: 'Data & Application', icon: '🛡️', status: 'Coming Soon', heat: 'pending' },
  ];

  const featuredThesis = {
    title: "Email Security Becomes a Feature, Not a Product",
    subtitle: "How Human Risk Management platforms will absorb standalone email security by 2028",
    date: "January 2026",
    preview: "Three structural shifts are converging: API-first architecture wins, behavioral AI commoditizes, and identity becomes the new moat. The winners will be platforms that unify email, identity, and awareness under a single human risk umbrella..."
  };

  const recentSignals = [
    { type: 'Trend', icon: '📈', text: 'API-first ICES growing at 13.9% CAGR vs 10.9% overall market', date: 'Jan 2026' },
    { type: 'M&A', icon: '🤝', text: 'KnowBe4 acquires Egress - SAT + email security convergence', date: '2024' },
    { type: 'Shift', icon: '🔄', text: 'Credential phishing up 703% - identity-email convergence accelerates', date: 'H2 2024' },
    { type: 'Market', icon: '💰', text: 'Email security market: $5.2B in 2025 → $10.7B by 2032', date: 'Forecast' },
  ];

  return (
    <div className="min-h-screen bg-gray-950 text-gray-100">
      {/* Navigation */}
      <nav className="border-b border-gray-800 bg-gray-950/80 backdrop-blur-sm sticky top-0 z-50">
        <div className="max-w-6xl mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <a href="/" className="flex items-center">
              <Logo size="default" />
            </a>
            <div className="flex items-center gap-6 text-sm">
              <a href="#pillars" className="text-gray-300 hover:text-white">Pillars</a>
              <a href="#theses" className="text-gray-300 hover:text-white">Theses</a>
              <a href="#about" className="text-gray-400 hover:text-white text-xs">About</a>
            </div>
          </div>
        </div>
      </nav>

      <div className="max-w-6xl mx-auto px-6 py-8">
        
        {/* Hero / Featured Thesis */}
        <div className="mb-12">
          <div className="bg-gradient-to-br from-gray-900 via-gray-900 to-blue-950 rounded-2xl p-8 border border-gray-800">
            <div className="flex items-center gap-2 text-sm text-blue-400 mb-3">
              <span>🎯</span>
              <span>Featured Thesis</span>
              <span className="text-gray-600">•</span>
              <span className="text-gray-500">{featuredThesis.date}</span>
            </div>
            <h1 className="text-3xl font-bold mb-3">{featuredThesis.title}</h1>
            <p className="text-xl text-gray-400 mb-4">{featuredThesis.subtitle}</p>
            <p className="text-gray-500 mb-6 max-w-3xl">{featuredThesis.preview}</p>
            <a 
              href="/email-security"
              className="inline-block px-5 py-2 bg-blue-600 hover:bg-blue-500 rounded-lg text-sm font-medium transition-colors"
            >
              Read Full Analysis →
            </a>
          </div>
        </div>

        {/* The 6 Pillars Grid */}
        <div id="pillars" className="mb-12">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-xl font-semibold">The 6 Pillars</h2>
            <a href="#about" className="text-sm text-gray-400 hover:text-white">View methodology →</a>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
            {pillars.map((pillar) => (
              <a
                key={pillar.id}
                href={pillar.href || '#'}
                className={`group p-4 bg-gray-900 rounded-xl border border-gray-800 transition-all ${
                  pillar.href ? 'hover:bg-gray-800 hover:border-gray-700 cursor-pointer' : 'opacity-60 cursor-default'
                }`}
                onMouseEnter={() => setHoveredPillar(pillar.id)}
                onMouseLeave={() => setHoveredPillar(null)}
              >
                <div className="text-2xl mb-2">{pillar.icon}</div>
                <div className="font-medium text-sm mb-1 group-hover:text-white">{pillar.name}</div>
                <div className="flex items-center gap-1">
                  <span className={`w-2 h-2 rounded-full ${
                    pillar.heat === 'hot' ? 'bg-green-500' : 
                    pillar.heat === 'warm' ? 'bg-yellow-500' : 'bg-gray-600'
                  }`}></span>
                  <span className="text-xs text-gray-500">{pillar.status}</span>
                </div>
              </a>
            ))}
          </div>
          
          <p className="text-xs text-gray-600 mt-4 text-center">
            Click on active pillars to explore detailed market analysis
          </p>
        </div>

        {/* Two Column: Theses + Signals */}
        <div id="theses" className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
          
          {/* Strategic Theses */}
          <div>
            <div className="flex items-center justify-between mb-4">
              <h2 className="text-xl font-semibold flex items-center gap-2">
                <span>🔮</span> Strategic Theses
              </h2>
            </div>
            
            <div className="space-y-3">
              <a href="/email-security#theses" className="block p-4 bg-gray-900 hover:bg-gray-800 rounded-xl border border-gray-800 hover:border-gray-700 transition-all">
                <div className="flex items-center gap-2 mb-2">
                  <span className="text-xs px-2 py-0.5 bg-green-900 text-green-400 rounded-full">High Confidence</span>
                  <span className="text-xs text-gray-500">2025-2027</span>
                </div>
                <div className="font-medium">The Architecture War is Over—API Wins</div>
                <div className="text-sm text-gray-500 mt-1">SEG → ICES transition is irreversible</div>
              </a>
              
              <a href="/email-security#theses" className="block p-4 bg-gray-900 hover:bg-gray-800 rounded-xl border border-gray-800 hover:border-gray-700 transition-all">
                <div className="flex items-center gap-2 mb-2">
                  <span className="text-xs px-2 py-0.5 bg-blue-900 text-blue-400 rounded-full">Medium-High</span>
                  <span className="text-xs text-gray-500">2025-2028</span>
                </div>
                <div className="font-medium">Detection Commoditizes—Identity is the New Moat</div>
                <div className="text-sm text-gray-500 mt-1">Behavioral AI becomes table stakes</div>
              </a>
              
              <a href="/email-security#theses" className="block p-4 bg-gray-900 hover:bg-gray-800 rounded-xl border border-gray-800 hover:border-gray-700 transition-all">
                <div className="flex items-center gap-2 mb-2">
                  <span className="text-xs px-2 py-0.5 bg-yellow-900 text-yellow-400 rounded-full">Medium</span>
                  <span className="text-xs text-gray-500">2026-2028</span>
                </div>
                <div className="font-medium">Email Security Becomes a Feature, Not a Product</div>
                <div className="text-sm text-gray-500 mt-1">HRM platforms absorb standalone solutions</div>
              </a>
            </div>
          </div>

          {/* Market Signals */}
          <div>
            <div className="flex items-center justify-between mb-4">
              <h2 className="text-xl font-semibold flex items-center gap-2">
                <span>📡</span> Market Signals
              </h2>
            </div>
            
            <div className="space-y-3">
              {recentSignals.map((signal, idx) => (
                <div
                  key={idx}
                  className="flex items-start gap-3 p-4 bg-gray-900 rounded-xl border border-gray-800"
                >
                  <span className="text-xl">{signal.icon}</span>
                  <div className="flex-1 min-w-0">
                    <div className="font-medium text-sm">{signal.text}</div>
                    <div className="flex items-center gap-2 mt-1">
                      <span className="text-xs px-2 py-0.5 bg-gray-800 rounded text-gray-400">{signal.type}</span>
                      <span className="text-xs text-gray-500">{signal.date}</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom CTA / About */}
        <div id="about" className="bg-gray-900 rounded-2xl p-8 border border-gray-800 text-center">
          <h3 className="text-xl font-semibold mb-2">Independent Analysis. No Vendor Spin.</h3>
          <p className="text-gray-400 mb-4 max-w-2xl mx-auto">
            Won With Data is built by a product manager with 10+ years in cybersecurity. 
            Every strategic brief follows a systematic research process covering market structure, 
            dynamics, stakeholders, economics, and product strategy.
          </p>
          <div className="flex items-center justify-center gap-4 mb-6">
            <span className="text-xs px-3 py-1 bg-gray-800 rounded-full text-gray-400">CISSP</span>
            <span className="text-xs px-3 py-1 bg-gray-800 rounded-full text-gray-400">GPEN</span>
            <span className="text-xs px-3 py-1 bg-gray-800 rounded-full text-gray-400">OSIR</span>
            <span className="text-xs px-3 py-1 bg-gray-800 rounded-full text-gray-400">OSTH</span>
          </div>
          <div className="flex items-center justify-center gap-4">
            <a href="#" className="px-5 py-2 bg-gray-800 hover:bg-gray-700 rounded-lg text-sm font-medium transition-colors">
              About the Author
            </a>
            <a href="#" className="px-5 py-2 bg-gray-800 hover:bg-gray-700 rounded-lg text-sm font-medium transition-colors">
              Methodology (SRP)
            </a>
          </div>
        </div>

        {/* Footer */}
        <footer className="mt-12 pt-8 border-t border-gray-800 text-center text-gray-500 text-sm">
          <p>© 2026 Won With Data • Not affiliated with any vendor</p>
          <p className="mt-1 text-gray-600">Strategic analysis by Andy Simko • CISSP • GPEN • CISA • GSNA • HCSFP • PMC-Level III • Market signals updated periodically</p>
        </footer>
      </div>
    </div>
  );
};

export default Homepage;
