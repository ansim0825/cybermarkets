"use client";

import React, { useEffect, useState } from 'react';
import { Logo } from '@/components/Logo';

const LandingPage = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const pillars = [
    { 
      id: 'network-edge',
      name: 'Network & Edge', 
      icon: '🌐', 
      active: true,
      href: '/pillars/network-edge/email-security',
      description: 'Perimeter defense, email, SASE'
    },
    { 
      id: 'data-application',
      name: 'Data & App', 
      icon: '🗄️', 
      active: false,
      href: '#',
      description: 'DSPM, AppSec, API security'
    },
    { 
      id: 'identity',
      name: 'Identity', 
      icon: '🔐', 
      active: false,
      href: '#',
      description: 'IAM, PAM, ITDR'
    },
    { 
      id: 'endpoint-workload',
      name: 'Endpoint', 
      icon: '💻', 
      active: false,
      href: '#',
      description: 'EDR, server protection'
    },
    { 
      id: 'secops',
      name: 'SecOps', 
      icon: '📊', 
      active: false,
      href: '#',
      description: 'SIEM, SOAR, XDR'
    },
    { 
      id: 'grc',
      name: 'GRC & TIC', 
      icon: '🎯', 
      active: false,
      href: '#',
      description: 'Threat intel, GRC, compliance'
    },
  ];

  return (
    <div className="min-h-screen bg-gray-950 text-gray-100 relative overflow-hidden">
      {/* Animated background gradients */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-purple-500/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute top-1/2 -left-40 w-80 h-80 bg-blue-500/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>
        <div className="absolute -bottom-40 right-1/3 w-80 h-80 bg-red-500/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '2s' }}></div>
      </div>

      {/* Navigation */}
      <nav className="border-b border-gray-800/50 bg-gray-950/80 backdrop-blur-sm sticky top-0 z-50">
        <div className="max-w-5xl mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <Logo size="default" />
            <div className="flex items-center gap-6 text-sm">
              <a href="#pillars" className="text-gray-300 hover:text-white transition-colors">Pillars</a>
              <a href="#about" className="text-gray-400 hover:text-white transition-colors">About</a>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className={`relative z-10 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
        <div className="max-w-5xl mx-auto px-6 py-16 text-center">
          <div className="mb-6">
            <Logo size="hero" />
          </div>
          
          <p className="text-xl text-gray-400 mb-6 max-w-2xl mx-auto">
            Cybersecurity market intelligence through systematic research.
            <br />
            <span className="text-gray-500">Structure → Dynamics → Strategy</span>
          </p>
          
          <a 
            href="/pillars/network-edge/email-security"
            className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-red-600 via-purple-600 to-blue-600 hover:from-red-500 hover:via-purple-500 hover:to-blue-500 rounded-lg font-medium transition-all shadow-lg hover:shadow-purple-500/20"
          >
            Explore Email Security Research
            <span>→</span>
          </a>
        </div>
      </section>

      {/* Pillars Section */}
      <section id="pillars" className="relative z-10 py-12">
        <div className="max-w-5xl mx-auto px-6">
          <div className="text-center mb-8">
            <h2 className="text-2xl font-bold mb-2">The 6 Pillars of Cybersecurity</h2>
            <p className="text-gray-500 text-sm">A framework for organizing the security landscape</p>
          </div>
          
          {/* 6-column grid */}
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3">
            {pillars.map((pillar) => (
              <a
                key={pillar.id}
                href={pillar.href}
                className={`group relative p-4 rounded-xl border transition-all text-center ${
                  pillar.active 
                    ? 'bg-gray-900/80 border-gray-700 hover:border-gray-600 hover:bg-gray-800/80 cursor-pointer' 
                    : 'bg-gray-900/40 border-gray-800/50 cursor-default'
                }`}
              >
                {/* Status dot */}
                <div className={`absolute top-2 right-2 w-2 h-2 rounded-full ${
                  pillar.active ? 'bg-green-500' : 'bg-gray-600'
                }`}></div>
                
                <div className="text-2xl mb-2">{pillar.icon}</div>
                <div className={`font-medium text-sm mb-1 ${pillar.active ? 'text-white' : 'text-gray-500'}`}>
                  {pillar.name}
                </div>
                <div className={`text-xs ${pillar.active ? 'text-gray-400' : 'text-gray-600'}`}>
                  {pillar.description}
                </div>
                
                {pillar.active && (
                  <div className="mt-2 text-xs text-green-400 opacity-0 group-hover:opacity-100 transition-opacity">
                    View research →
                  </div>
                )}
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="relative z-10 py-12">
        <div className="max-w-5xl mx-auto px-6">
          <div className="bg-gray-900/50 rounded-2xl border border-gray-800 p-8">
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h2 className="text-xl font-bold mb-4">Systematic Research Process</h2>
                <p className="text-gray-400 text-sm mb-4">
                  Every market analysis follows a structured methodology designed to surface 
                  actionable insights for product managers, investors, and security leaders.
                </p>
                <a href="/methodology" className="text-sm text-blue-400 hover:text-blue-300 transition-colors">
                  View methodology →
                </a>
              </div>
              
              <div className="grid grid-cols-3 gap-4">
                <div className="text-center p-3 bg-gray-800/50 rounded-lg">
                  <div className="text-2xl mb-1">🏗️</div>
                  <div className="text-xs text-gray-400">Structure</div>
                  <div className="text-xs text-gray-600">Size, segments, players</div>
                </div>
                <div className="text-center p-3 bg-gray-800/50 rounded-lg">
                  <div className="text-2xl mb-1">📈</div>
                  <div className="text-xs text-gray-400">Dynamics</div>
                  <div className="text-xs text-gray-600">Trends, shifts, motion</div>
                </div>
                <div className="text-center p-3 bg-gray-800/50 rounded-lg">
                  <div className="text-2xl mb-1">🎯</div>
                  <div className="text-xs text-gray-400">Strategy</div>
                  <div className="text-xs text-gray-600">Theses, implications</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="relative z-10 border-t border-gray-800/50 py-8">
        <div className="max-w-5xl mx-auto px-6 text-center text-gray-500 text-sm">
          <p>Built by Andy Simko • CISSP • GPEN • CISA • GSNA • HCSFP • PMC-Level III</p>
          <p className="text-gray-600 mt-1">15+ years in cybersecurity product management</p>
        </div>
      </footer>
    </div>
  );
};

export default LandingPage;
