"use client";

import React, { useState } from 'react';
import { Logo } from '@/components/Logo';

const CloudflareCompanyPage = () => {
  const [activeSection, setActiveSection] = useState('overview');

  // Company data - placeholder for research
  const company = {
    name: 'Cloudflare',
    product: 'Area 1 Email Security',
    tagline: 'Preemptive email security powered by global network intelligence',
    position: 'Infrastructure Challenger',
    positionColor: 'cyan',
    website: 'https://www.cloudflare.com/products/zero-trust/email-security/',
    
    // Snapshot
    snapshot: {
      founded: '2009 (Area 1 acquired 2022)',
      founders: 'Matthew Prince, Lee Holloway, Michelle Zatlyn',
      hq: 'San Francisco, CA',
      funding: 'Public (NYSE: NET)',
      valuation: '~$30B market cap',
      acquisition: 'Area 1 acquired for $162M (2022)',
      customers: 'Part of Cloudflare Zero Trust platform',
      employees: '4,000+ (Cloudflare overall)',
    },

    // Market Position
    marketPosition: {
      gartnerPosition: 'Not separately rated - part of broader Cloudflare SASE/SSE',
      category: 'Integrated Cloud Email Security (ICES)',
      subCategory: 'Infrastructure-First Email Security',
      keyRecognition: [
        'Cloudflare named to Gartner SSE MQ',
        'Area 1 was Gartner Cool Vendor pre-acquisition',
      ]
    },

    // Core Product
    coreProduct: {
      architecture: 'DNS/Network-level preemptive detection',
      deployment: 'API + MX routing options, integrates with Cloudflare Zero Trust',
      primaryUseCases: [
        'Phishing Prevention (preemptive)',
        'Business Email Compromise (BEC)',
        'Malware & Ransomware via Email',
        'Supply Chain Attacks',
      ],
      keyCapabilities: [
        'Preemptive crawling of attacker infrastructure',
        'DNS-level threat intelligence',
        'Integration with Cloudflare Gateway & Access',
        'Global network vantage point (300+ cities)',
      ],
      integrations: ['Microsoft 365', 'Google Workspace', 'Cloudflare Zero Trust', 'Cloudflare Gateway'],
    },

    // Differentiation
    differentiation: [
      {
        title: 'Infrastructure Vantage Point',
        description: 'Sees threats across global network before they reach email. Unique DNS/network-level signals.',
        icon: '🌐'
      },
      {
        title: 'Preemptive Detection',
        description: 'Crawls and identifies attacker infrastructure before campaigns launch.',
        icon: '🔮'
      },
      {
        title: 'Zero Trust Integration',
        description: 'Part of broader SASE/SSE platform. Email security + access + gateway unified.',
        icon: '🔒'
      },
      {
        title: 'Developer-First',
        description: 'Strong API, easy integration for technical teams. Cloudflare brand trust.',
        icon: '👨‍💻'
      },
    ],

    // Strengths & Weaknesses
    strengths: [
      'Unique infrastructure vantage point - sees threats others can\'t',
      'Part of broader Zero Trust platform - consolidation play',
      'Strong brand recognition and developer adoption',
      'Public company stability and continued investment',
      'Preemptive detection approach is differentiated',
      'Global network scale (300+ cities)',
    ],
    weaknesses: [
      'Email security is not core focus (vs. pure-play vendors)',
      'Less mature behavioral AI vs. Abnormal/Proofpoint',
      'Area 1 integration still evolving post-acquisition',
      'Limited enterprise email security track record',
      'Not separately positioned in Gartner Email Security MQ',
      'Less SOC workflow integration vs. incumbents',
    ],

    // Strategic Outlook
    outlook: {
      tailwinds: [
        'SASE/SSE consolidation trend favors platform players',
        'Zero Trust adoption driving bundled security purchases',
        'Developer/SMB segment strong for Cloudflare',
        'Continued investment as public company',
      ],
      headwinds: [
        'Competing against focused email security specialists',
        'Enterprise buyers may prefer best-of-breed for email',
        'Area 1 brand diluted into Cloudflare umbrella',
        'Less analyst coverage for email-specific capabilities',
      ],
      trajectory: 'Email security as feature of broader Zero Trust platform. Less likely to compete head-to-head with Abnormal/Proofpoint in enterprise.',
    },

    // Recent News
    news: [
      {
        date: 'Feb 2022',
        title: 'Area 1 Acquisition Closed',
        summary: 'Cloudflare completed $162M acquisition of Area 1 Security.',
        type: 'acquisition'
      },
      {
        date: '2024',
        title: 'Zero Trust Platform Integration',
        summary: 'Area 1 fully integrated into Cloudflare Zero Trust suite.',
        type: 'product'
      },
    ],
  };

  const sections = [
    { id: 'overview', name: 'Overview', icon: '📋' },
    { id: 'product', name: 'Product', icon: '🎯' },
    { id: 'differentiation', name: 'Differentiation', icon: '⚡' },
    { id: 'analysis', name: 'Analysis', icon: '📊' },
    { id: 'outlook', name: 'Outlook', icon: '🔮' },
    { id: 'news', name: 'Recent News', icon: '📰' },
  ];

  const getNewsTypeStyle = (type) => {
    switch (type) {
      case 'funding': return 'bg-green-900/50 text-green-400 border-green-700';
      case 'product': return 'bg-blue-900/50 text-blue-400 border-blue-700';
      case 'recognition': return 'bg-purple-900/50 text-purple-400 border-purple-700';
      case 'acquisition': return 'bg-orange-900/50 text-orange-400 border-orange-700';
      default: return 'bg-gray-800 text-gray-400 border-gray-700';
    }
  };

  const scrollToSection = (sectionId) => {
    setActiveSection(sectionId);
    document.getElementById(sectionId)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-gray-950 text-gray-100">
      {/* Navigation */}
      <nav className="border-b border-gray-800 bg-gray-950/80 backdrop-blur-sm sticky top-0 z-50">
        <div className="max-w-6xl mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <a href="/" className="flex items-center">
                <Logo size="default" />
              </a>
              <span className="text-gray-600 hidden sm:inline">/</span>
              <a href="/pillars/network-edge/email-security" className="text-gray-400 hover:text-white hidden sm:inline">Email Security</a>
              <span className="text-gray-600 hidden sm:inline">/</span>
              <span className="text-gray-300 hidden sm:inline">Cloudflare</span>
            </div>
            <div className="flex items-center gap-6 text-sm">
              <a href="/pillars/network-edge/email-security" className="text-gray-300 hover:text-white">← Back to Market</a>
            </div>
          </div>
        </div>
      </nav>

      <div className="max-w-6xl mx-auto px-6 py-8">
        
        {/* Header */}
        <div className="mb-8">
          <div className="flex items-start justify-between mb-4">
            <div>
              <div className="flex items-center gap-3 mb-2">
                <h1 className="text-4xl font-bold">{company.name}</h1>
                <span className="px-3 py-1 bg-cyan-900/50 text-cyan-400 border border-cyan-700 rounded-full text-sm">
                  {company.position}
                </span>
              </div>
              <p className="text-xl text-gray-400 mb-2">{company.tagline}</p>
              <p className="text-sm text-gray-500">{company.product}</p>
            </div>
            <a 
              href={company.website}
              target="_blank"
              rel="noopener noreferrer"
              className="px-4 py-2 bg-gray-800 hover:bg-gray-700 rounded-lg text-sm transition-colors"
            >
              Visit Website →
            </a>
          </div>
          
          <div className="flex items-center gap-4 text-sm text-gray-500">
            <span>Research Status: <span className="text-gray-400">Pending</span></span>
            <span>•</span>
            <span>Last updated: January 2026</span>
          </div>
        </div>

        {/* Snapshot Cards */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
          <div className="bg-gray-900 rounded-xl p-4 border border-gray-800">
            <div className="text-2xl font-bold text-white mb-1">~$30B</div>
            <div className="text-xs text-gray-400">Market Cap (NET)</div>
          </div>
          <div className="bg-gray-900 rounded-xl p-4 border border-gray-800">
            <div className="text-2xl font-bold text-orange-400 mb-1">$162M</div>
            <div className="text-xs text-gray-400">Area 1 Acquisition</div>
          </div>
          <div className="bg-gray-900 rounded-xl p-4 border border-gray-800">
            <div className="text-2xl font-bold text-white mb-1">300+</div>
            <div className="text-xs text-gray-400">Global Network Cities</div>
          </div>
          <div className="bg-gray-900 rounded-xl p-4 border border-gray-800">
            <div className="text-2xl font-bold text-white mb-1">4,000+</div>
            <div className="text-xs text-gray-400">Employees</div>
          </div>
        </div>

        {/* Main Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          
          {/* Left Sidebar - Navigation */}
          <div className="lg:col-span-1">
            <div className="sticky top-24">
              <div className="bg-gray-900 rounded-xl border border-gray-800 p-4 mb-6">
                <h3 className="text-sm font-semibold text-gray-400 mb-3">Sections</h3>
                <div className="space-y-1">
                  {sections.map((section) => (
                    <button
                      key={section.id}
                      onClick={() => scrollToSection(section.id)}
                      className={`w-full text-left px-3 py-2 rounded-lg text-sm flex items-center gap-2 transition-all ${
                        activeSection === section.id
                          ? 'bg-cyan-900/50 text-cyan-400 border border-cyan-800'
                          : 'text-gray-400 hover:bg-gray-800 hover:text-white'
                      }`}
                    >
                      <span>{section.icon}</span>
                      <span>{section.name}</span>
                    </button>
                  ))}
                </div>
              </div>

              {/* Research Notice */}
              <div className="bg-yellow-900/20 border border-yellow-800/50 rounded-xl p-4">
                <h3 className="text-sm font-semibold text-yellow-400 mb-2">⚠️ Research Pending</h3>
                <p className="text-xs text-gray-400">
                  This page contains preliminary research. Full SRP analysis coming soon.
                </p>
              </div>
            </div>
          </div>

          {/* Main Content Area */}
          <div className="lg:col-span-3 space-y-8">
            
            {/* Overview Section */}
            <section id="overview" className="bg-gray-900 rounded-xl border border-gray-800 p-6">
              <h2 className="text-xl font-semibold mb-4 flex items-center gap-2">
                <span>📋</span> Company Overview
              </h2>
              
              <div className="grid md:grid-cols-2 gap-6 mb-6">
                <div>
                  <h3 className="text-sm font-semibold text-gray-400 mb-3">Company Details</h3>
                  <div className="space-y-2 text-sm">
                    <div className="flex justify-between">
                      <span className="text-gray-500">Founded</span>
                      <span className="text-gray-300">{company.snapshot.founded}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-500">Headquarters</span>
                      <span className="text-gray-300">{company.snapshot.hq}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-500">Status</span>
                      <span className="text-gray-300">{company.snapshot.funding}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-500">Area 1 Deal</span>
                      <span className="text-gray-300">{company.snapshot.acquisition}</span>
                    </div>
                  </div>
                </div>
                <div>
                  <h3 className="text-sm font-semibold text-gray-400 mb-3">Market Position</h3>
                  <div className="space-y-2 text-sm">
                    <div className="flex justify-between">
                      <span className="text-gray-500">Category</span>
                      <span className="text-gray-300">{company.marketPosition.category}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-500">Sub-Category</span>
                      <span className="text-gray-300">{company.marketPosition.subCategory}</span>
                    </div>
                    <div>
                      <span className="text-gray-500 block mb-2">Gartner Position</span>
                      <span className="text-cyan-400 text-xs">{company.marketPosition.gartnerPosition}</span>
                    </div>
                  </div>
                </div>
              </div>
            </section>

            {/* Product Section */}
            <section id="product" className="bg-gray-900 rounded-xl border border-gray-800 p-6">
              <h2 className="text-xl font-semibold mb-4 flex items-center gap-2">
                <span>🎯</span> Product Overview
              </h2>

              <div className="grid md:grid-cols-2 gap-6 mb-6">
                <div>
                  <h3 className="text-sm font-semibold text-gray-400 mb-3">Architecture</h3>
                  <div className="bg-gray-800 rounded-lg p-4">
                    <div className="text-lg font-medium text-white mb-2">{company.coreProduct.architecture}</div>
                    <p className="text-sm text-gray-400">{company.coreProduct.deployment}</p>
                  </div>
                </div>
                <div>
                  <h3 className="text-sm font-semibold text-gray-400 mb-3">Integrations</h3>
                  <div className="flex flex-wrap gap-2">
                    {company.coreProduct.integrations.map((item, idx) => (
                      <span key={idx} className="px-3 py-1 bg-gray-800 rounded-lg text-xs text-gray-300">
                        {item}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h3 className="text-sm font-semibold text-gray-400 mb-3">Primary Use Cases</h3>
                  <div className="space-y-2">
                    {company.coreProduct.primaryUseCases.map((item, idx) => (
                      <div key={idx} className="flex items-center gap-2 text-sm text-gray-300">
                        <span className="text-cyan-400">→</span>
                        {item}
                      </div>
                    ))}
                  </div>
                </div>
                <div>
                  <h3 className="text-sm font-semibold text-gray-400 mb-3">Key Capabilities</h3>
                  <div className="space-y-2">
                    {company.coreProduct.keyCapabilities.map((item, idx) => (
                      <div key={idx} className="flex items-center gap-2 text-sm text-gray-300">
                        <span className="text-green-400">✓</span>
                        {item}
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </section>

            {/* Differentiation Section */}
            <section id="differentiation" className="bg-gray-900 rounded-xl border border-gray-800 p-6">
              <h2 className="text-xl font-semibold mb-4 flex items-center gap-2">
                <span>⚡</span> Competitive Differentiation
              </h2>

              <div className="grid md:grid-cols-2 gap-4">
                {company.differentiation.map((diff, idx) => (
                  <div key={idx} className="bg-gray-800 rounded-lg p-4 border-l-2 border-cyan-500">
                    <div className="flex items-center gap-2 mb-2">
                      <span className="text-xl">{diff.icon}</span>
                      <h3 className="font-medium text-white">{diff.title}</h3>
                    </div>
                    <p className="text-sm text-gray-400">{diff.description}</p>
                  </div>
                ))}
              </div>
            </section>

            {/* Analysis Section */}
            <section id="analysis" className="bg-gray-900 rounded-xl border border-gray-800 p-6">
              <h2 className="text-xl font-semibold mb-4 flex items-center gap-2">
                <span>📊</span> Strengths & Weaknesses
              </h2>

              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h3 className="text-sm font-semibold text-green-400 mb-3 flex items-center gap-2">
                    <span>💪</span> Strengths
                  </h3>
                  <div className="space-y-2">
                    {company.strengths.map((item, idx) => (
                      <div key={idx} className="flex items-start gap-2 text-sm text-gray-300">
                        <span className="text-green-500 mt-0.5">+</span>
                        {item}
                      </div>
                    ))}
                  </div>
                </div>
                <div>
                  <h3 className="text-sm font-semibold text-red-400 mb-3 flex items-center gap-2">
                    <span>⚠️</span> Weaknesses
                  </h3>
                  <div className="space-y-2">
                    {company.weaknesses.map((item, idx) => (
                      <div key={idx} className="flex items-start gap-2 text-sm text-gray-300">
                        <span className="text-red-500 mt-0.5">-</span>
                        {item}
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </section>

            {/* Outlook Section */}
            <section id="outlook" className="bg-gray-900 rounded-xl border border-gray-800 p-6">
              <h2 className="text-xl font-semibold mb-4 flex items-center gap-2">
                <span>🔮</span> Strategic Outlook
              </h2>

              <div className="grid md:grid-cols-2 gap-6 mb-6">
                <div>
                  <h3 className="text-sm font-semibold text-green-400 mb-3">Tailwinds</h3>
                  <div className="space-y-2">
                    {company.outlook.tailwinds.map((item, idx) => (
                      <div key={idx} className="flex items-start gap-2 text-sm text-gray-300">
                        <span className="text-green-500">↑</span>
                        {item}
                      </div>
                    ))}
                  </div>
                </div>
                <div>
                  <h3 className="text-sm font-semibold text-orange-400 mb-3">Headwinds</h3>
                  <div className="space-y-2">
                    {company.outlook.headwinds.map((item, idx) => (
                      <div key={idx} className="flex items-start gap-2 text-sm text-gray-300">
                        <span className="text-orange-500">↓</span>
                        {item}
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              <div className="bg-cyan-900/20 border border-cyan-800/50 rounded-lg p-4">
                <h3 className="text-sm font-semibold text-cyan-400 mb-2">Trajectory</h3>
                <p className="text-sm text-gray-300">{company.outlook.trajectory}</p>
              </div>
            </section>

            {/* News Section */}
            <section id="news" className="bg-gray-900 rounded-xl border border-gray-800 p-6">
              <h2 className="text-xl font-semibold mb-4 flex items-center gap-2">
                <span>📰</span> Recent News
              </h2>

              <div className="space-y-4">
                {company.news.map((item, idx) => (
                  <div key={idx} className="flex items-start gap-4 p-4 bg-gray-800 rounded-lg">
                    <div className="text-sm text-gray-500 whitespace-nowrap">{item.date}</div>
                    <div className="flex-1">
                      <div className="flex items-center gap-2 mb-1">
                        <h3 className="font-medium text-white">{item.title}</h3>
                        <span className={`text-xs px-2 py-0.5 rounded border ${getNewsTypeStyle(item.type)}`}>
                          {item.type}
                        </span>
                      </div>
                      <p className="text-sm text-gray-400">{item.summary}</p>
                    </div>
                  </div>
                ))}
              </div>
            </section>

          </div>
        </div>

        {/* Footer */}
        <footer className="mt-12 pt-8 border-t border-gray-800 text-center text-gray-500 text-sm">
          <p>Analysis by Andy Simko • CISSP, GPEN, CISA, GSNA, HCSFP • PMC-Level III</p>
          <p className="mt-1 text-gray-600">Independent research • Not affiliated with {company.name}</p>
        </footer>
      </div>
    </div>
  );
};

export default CloudflareCompanyPage;
