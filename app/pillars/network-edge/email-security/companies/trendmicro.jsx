"use client";

import React, { useState } from 'react';

const TrendMicroProfile = () => {
  const [activeSection, setActiveSection] = useState('overview');

  const company = {
    name: 'Trend Micro',
    product: 'Trend Vision One - Email and Collaboration Security',
    tagline: 'Email security unified within AI-powered enterprise platform',
    position: 'Platform Leader',
    website: 'https://www.trendmicro.com',
    
    snapshot: {
      revenue: '$1.87B',
      employees: '7,000',
      customers: '500,000+',
      enterpriseARR: '$1.3B+',
      gartnerPosition: 'Leader',
    },

    companyDetails: {
      founded: '1988',
      founders: 'Steve Chang, Jenny Chang, Eva Chen',
      headquarters: 'Tokyo, Japan (Originally LA)',
      ceo: 'Eva Chen (Co-Founder, CEO since 2005)',
      ownership: 'Public (TYO: 4704, TSE: 4704)',
    },

    marketPosition: {
      category: 'Email Security + Unified Platform',
      subCategory: 'Platform-Integrated Email Security',
      gartnerPosition: 'Leader - Gartner MQ Email Security (2024)',
    },

    recognition: [
      'Gartner MQ Leader - Email Security 2024',
      'Gartner MQ Leader - EPP 19 Consecutive Years',
      '100% MITRE ATT&CK Coverage',
    ],

    metrics: {
      revenue: '$1.87B',
      enterpriseARR: '$1.3B+',
      customers: '500,000+',
      employees: '7,000',
    },

    marketContext: {
      hypeCyclePosition: 'Plateau of Productivity (established platform)',
      uniqueApproach: 'Email security as integrated component of broader Vision One XDR/ASRM platform',
      keyDifferentiator: 'Cross-layer correlation: email + endpoint + network + cloud in single platform',
    },

    platformStrategy: {
      platformName: 'Trend Vision One',
      description: 'AI-powered enterprise cybersecurity platform with unified ASRM and XDR',
      pillars: [
        { name: 'Email & Collaboration Security', isPrimary: true },
        { name: 'Endpoint Security', isPrimary: false },
        { name: 'Cloud Security', isPrimary: false },
        { name: 'Network Security', isPrimary: false },
        { name: 'Attack Surface Risk Management', isPrimary: false },
        { name: 'XDR / SOC Operations', isPrimary: false },
      ],
      attachRate: '37% platform attach rate (Q3 2024)',
    },

    emailCapabilities: [
      { name: 'AI & Sandbox Analysis', description: 'Zero-day threat detection with sandbox detonation' },
      { name: 'BEC Detection', description: 'Business email compromise and impersonation protection' },
      { name: 'Phishing Protection', description: 'URL rewriting, time-of-click analysis' },
      { name: 'DLP for Email', description: 'Data loss prevention and compliance' },
      { name: '200+ Compliance Templates', description: 'Pre-built templates for M365, OneDrive, etc.' },
      { name: 'XDR Integration', description: 'Email threats correlated with endpoint/network/cloud' },
    ],

    stakeholders: {
      ciso: {
        role: 'CISO / Security Leadership',
        jtbd: 'Unified security platform with cross-layer visibility',
        painPoints: ['Tool sprawl and siloed visibility', 'Alert fatigue across multiple products'],
        valueProps: ['Single platform for email + endpoint + cloud + network', 'Correlated threat intelligence'],
      },
      secops: {
        role: 'Security Operations / SOC',
        jtbd: 'Investigate threats across attack chain efficiently',
        painPoints: ['Context switching between tools', 'Manual correlation of alerts'],
        valueProps: ['XDR workbench for unified investigation', 'Automated playbooks', '65% dwell time reduction'],
      },
      itAdmin: {
        role: 'IT Admin / M365 Admin',
        jtbd: 'Protect email and collaboration without complexity',
        painPoints: ['Multiple vendors to manage', 'Compliance template management'],
        valueProps: ['200+ pre-built compliance templates', 'Native M365/GWS integration', 'Single console'],
      },
    },

    economics: {
      pricing: 'Platform subscription + module-based pricing',
      roiDrivers: [
        'Platform consolidation reduces tool sprawl',
        '65% reduction in threat dwell time',
        'Unified licensing across security domains',
      ],
      competitivePricing: 'Premium enterprise pricing, value in platform consolidation',
    },

    differentiation: [
      { title: 'Platform Integration', description: 'Email security natively integrated into Vision One XDR/ASRM platform.', icon: '🔗' },
      { title: '35+ Years Experience', description: 'Founded 1988. Deep threat intelligence from Zero Day Initiative (ZDI).', icon: '🏛️' },
      { title: 'Cross-Layer Correlation', description: 'Email threats correlated with endpoint, network, and cloud telemetry.', icon: '🔄' },
      { title: 'Global Threat Intel', description: 'Smart Protection Network with billions of sensors powering detection.', icon: '🌐' },
    ],

    strengths: [
      'Gartner Leader for both Email Security AND Endpoint Protection',
      'Vision One platform enables cross-layer threat correlation',
      'Deep threat intelligence (Zero Day Initiative, 60%+ of CVEs)',
      '35+ years of security expertise and R&D',
      'Global scale: 500K+ customers, 7K employees, 70 countries',
      'Strong compliance capabilities (200+ templates)',
      'Public company financial stability',
    ],

    weaknesses: [
      'Platform complexity may overwhelm smaller organizations',
      'Email security reputation overshadowed by endpoint legacy',
      'Less specialized than pure-play email vendors (Abnormal, Proofpoint)',
      'Premium pricing requires platform adoption to justify',
      'Feature depth in email may lag behavioral AI specialists',
    ],

    outlook: {
      tailwinds: [
        'Platform consolidation trend favors unified vendors',
        'XDR market growth driving Vision One adoption',
        'Strong Q4 2024 results (+10% YoY)',
        'AI/ML investment accelerating',
      ],
      headwinds: [
        'Behavioral AI specialists winning best-of-breed deals',
        'Enterprise focus limits SMB penetration',
        'Market fragmentation in email security category',
      ],
      trajectory: 'Strong platform play for enterprises seeking consolidation. Email security benefits from Vision One momentum. Growth depends on platform adoption rate and winning against specialized email vendors.',
    },

    news: [
      { date: 'Dec 2024', title: 'Gartner MQ Leader - Email Security', summary: 'Named Leader in 2024 Gartner Magic Quadrant for Email Security Platforms.', type: 'recognition', source: 'Gartner' },
      { date: 'Feb 2025', title: 'FY2024 Results: +10% YoY', summary: 'Enterprise ARR exceeded $1.3B. Platform attach rate at 37%.', type: 'milestone', source: 'Trend Micro Earnings' },
      { date: '2024', title: '100% MITRE ATT&CK Coverage', summary: 'Achieved 100% coverage rate in MITRE ATT&CK Evaluations.', type: 'recognition', source: 'MITRE' },
      { date: 'Oct 2024', title: 'McLaren F1 Partnership', summary: 'Announced as Official Partner of McLaren Formula 1 Team.', type: 'partnership', source: 'Trend Micro Newsroom' },
    ],
  };

  const sections = [
    { id: 'overview', name: 'Overview', icon: '📋' },
    { id: 'market', name: 'Market Context', icon: '🌍' },
    { id: 'product', name: 'Product', icon: '🎯' },
    { id: 'stakeholders', name: 'Stakeholders', icon: '👥' },
    { id: 'economics', name: 'Economics', icon: '💰' },
    { id: 'differentiation', name: 'Differentiation', icon: '⚡' },
    { id: 'analysis', name: 'Analysis', icon: '📊' },
    { id: 'outlook', name: 'Outlook', icon: '🔮' },
    { id: 'news', name: 'Recent News', icon: '📰' },
  ];

  const getNewsTypeStyle = (type) => {
    switch (type) {
      case 'recognition': return 'bg-green-900/50 text-green-400 border-green-700';
      case 'milestone': return 'bg-blue-900/50 text-blue-400 border-blue-700';
      case 'partnership': return 'bg-purple-900/50 text-purple-400 border-purple-700';
      default: return 'bg-gray-800 text-gray-400 border-gray-700';
    }
  };

  const scrollToSection = (sectionId) => {
    setActiveSection(sectionId);
    document.getElementById(sectionId)?.scrollIntoView({ behavior: 'smooth' });
  };

  const CitationFooter = ({ citations }) => (
    <div className="mt-6 pt-4 border-t border-gray-700">
      <p className="text-xs text-gray-500 uppercase tracking-wider mb-2">Sources</p>
      <div className="space-y-1">
        {citations.map((cite, i) => (
          <p key={i} className="text-xs text-gray-500">[{i + 1}] {cite}</p>
        ))}
      </div>
    </div>
  );

  const HypeCycleSVG = () => (
    <svg viewBox="0 0 500 200" className="w-full h-48">
      <defs>
        <linearGradient id="curveGradientTrend" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" stopColor="#8b5cf6" stopOpacity="0.8" />
          <stop offset="50%" stopColor="#06b6d4" stopOpacity="0.8" />
          <stop offset="100%" stopColor="#10b981" stopOpacity="0.8" />
        </linearGradient>
      </defs>
      <path d="M 30 180 Q 80 180 100 160 Q 120 140 140 60 Q 160 20 180 40 Q 200 60 220 120 Q 260 160 300 150 Q 340 140 380 130 Q 420 120 470 110" stroke="url(#curveGradientTrend)" strokeWidth="3" fill="none" />
      <circle cx="140" cy="60" r="6" fill="#f97316" stroke="#fff" strokeWidth="2" />
      <text x="140" y="45" textAnchor="middle" fill="#f97316" fontSize="10" fontWeight="bold">GenAI Email</text>
      <circle cx="350" cy="135" r="6" fill="#3b82f6" stroke="#fff" strokeWidth="2" />
      <text x="350" y="120" textAnchor="middle" fill="#3b82f6" fontSize="10" fontWeight="bold">API-based ICES</text>
      <circle cx="430" cy="115" r="8" fill="#ef4444" stroke="#fff" strokeWidth="2" />
      <text x="430" y="100" textAnchor="middle" fill="#ef4444" fontSize="10" fontWeight="bold">Platform Email</text>
      <text x="430" y="140" textAnchor="middle" fill="#9ca3af" fontSize="8">(Trend Micro)</text>
      <circle cx="460" cy="110" r="6" fill="#10b981" stroke="#fff" strokeWidth="2" />
      <text x="460" y="95" textAnchor="middle" fill="#10b981" fontSize="10" fontWeight="bold">SEG</text>
      <text x="60" y="195" fill="#6b7280" fontSize="8">Innovation Trigger</text>
      <text x="160" y="195" fill="#6b7280" fontSize="8">Peak</text>
      <text x="230" y="195" fill="#6b7280" fontSize="8">Trough</text>
      <text x="320" y="195" fill="#6b7280" fontSize="8">Slope of Enlightenment</text>
      <text x="440" y="195" fill="#6b7280" fontSize="8">Plateau</text>
    </svg>
  );

  return (
    <div className="min-h-screen bg-gray-950 text-gray-100">
      <nav className="border-b border-gray-800 bg-gray-950/80 backdrop-blur-sm sticky top-0 z-50">
        <div className="max-w-6xl mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <a href="/" className="text-gray-400 hover:text-white">Home</a>
              <span className="text-gray-600">/</span>
              <a href="/pillars/network-edge/email-security" className="text-gray-400 hover:text-white">Email Security</a>
              <span className="text-gray-600">/</span>
              <span className="text-gray-300">Trend Micro</span>
            </div>
            <a href="/pillars/network-edge/email-security" className="text-gray-300 hover:text-white text-sm">← Back to Market</a>
          </div>
        </div>
      </nav>

      <div className="max-w-6xl mx-auto px-6 py-8">
        <div className="mb-8">
          <div className="flex items-start justify-between mb-4">
            <div>
              <div className="flex items-center gap-3 mb-2">
                <h1 className="text-4xl font-bold">{company.name}</h1>
                <span className="px-3 py-1 bg-red-900/50 text-red-400 border border-red-700 rounded-full text-sm">{company.position}</span>
              </div>
              <p className="text-xl text-gray-400 mb-2">{company.tagline}</p>
              <p className="text-sm text-gray-500">{company.product}</p>
            </div>
            <a href={company.website} target="_blank" rel="noopener noreferrer" className="px-4 py-2 bg-gray-800 hover:bg-gray-700 rounded-lg text-sm transition-colors">Visit Website →</a>
          </div>
          <div className="flex items-center gap-4 text-sm text-gray-500">
            <span>Research Status: <span className="text-yellow-400">In Progress</span></span>
            <span>•</span>
            <span>Last updated: January 2026</span>
          </div>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-5 gap-4 mb-8">
          <div className="bg-gray-900 rounded-xl p-4 border border-gray-800">
            <div className="text-2xl font-bold text-red-400 mb-1">{company.snapshot.revenue}</div>
            <div className="text-xs text-gray-400">Revenue (2024)</div>
          </div>
          <div className="bg-gray-900 rounded-xl p-4 border border-gray-800">
            <div className="text-2xl font-bold text-white mb-1">{company.snapshot.enterpriseARR}</div>
            <div className="text-xs text-gray-400">Enterprise ARR</div>
          </div>
          <div className="bg-gray-900 rounded-xl p-4 border border-gray-800">
            <div className="text-2xl font-bold text-white mb-1">{company.snapshot.customers}</div>
            <div className="text-xs text-gray-400">Customers</div>
          </div>
          <div className="bg-gray-900 rounded-xl p-4 border border-gray-800">
            <div className="text-2xl font-bold text-white mb-1">{company.snapshot.employees}</div>
            <div className="text-xs text-gray-400">Employees</div>
          </div>
          <div className="bg-gray-900 rounded-xl p-4 border border-gray-800">
            <div className="text-2xl font-bold text-green-400 mb-1">{company.snapshot.gartnerPosition}</div>
            <div className="text-xs text-gray-400">Gartner MQ 2024</div>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          <div className="lg:col-span-1">
            <div className="sticky top-24">
              <div className="bg-gray-900 rounded-xl border border-gray-800 p-4 mb-6">
                <h3 className="text-sm font-semibold text-gray-400 mb-3">Sections</h3>
                <div className="space-y-1">
                  {sections.map((section) => (
                    <button key={section.id} onClick={() => scrollToSection(section.id)}
                      className={`w-full text-left px-3 py-2 rounded-lg text-sm flex items-center gap-2 transition-all ${activeSection === section.id ? 'bg-red-900/50 text-red-400 border border-red-800' : 'text-gray-400 hover:bg-gray-800 hover:text-white'}`}>
                      <span>{section.icon}</span>
                      <span>{section.name}</span>
                    </button>
                  ))}
                </div>
              </div>

              <div className="bg-gray-900 rounded-xl border border-gray-800 p-4">
                <h3 className="text-sm font-semibold text-gray-400 mb-3">Key Metrics</h3>
                <div className="space-y-3 text-sm">
                  <div>
                    <span className="text-gray-500 block">Revenue</span>
                    <span className="text-red-400">{company.metrics.revenue}</span>
                  </div>
                  <div>
                    <span className="text-gray-500 block">Enterprise ARR</span>
                    <span className="text-white">{company.metrics.enterpriseARR}</span>
                  </div>
                  <div>
                    <span className="text-gray-500 block">Customers</span>
                    <span className="text-white">{company.metrics.customers}</span>
                  </div>
                  <div>
                    <span className="text-gray-500 block">Employees</span>
                    <span className="text-white">{company.metrics.employees}</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="lg:col-span-3 space-y-8">
            
            <section id="overview" className="bg-gray-900 rounded-xl border border-gray-800 p-6">
              <h2 className="text-xl font-semibold mb-4 flex items-center gap-2"><span>📋</span> Company Overview</h2>
              <div className="grid md:grid-cols-2 gap-6 mb-6">
                <div>
                  <h3 className="text-sm font-semibold text-gray-400 mb-3">Company Details</h3>
                  <div className="space-y-2 text-sm">
                    <div className="flex justify-between"><span className="text-gray-500">Founded</span><span className="text-gray-300">{company.companyDetails.founded}</span></div>
                    <div className="flex justify-between"><span className="text-gray-500">Founders</span><span className="text-gray-300">{company.companyDetails.founders}</span></div>
                    <div className="flex justify-between"><span className="text-gray-500">Headquarters</span><span className="text-gray-300">{company.companyDetails.headquarters}</span></div>
                    <div className="flex justify-between"><span className="text-gray-500">CEO</span><span className="text-gray-300">{company.companyDetails.ceo}</span></div>
                    <div className="flex justify-between"><span className="text-gray-500">Ownership</span><span className="text-gray-300">{company.companyDetails.ownership}</span></div>
                  </div>
                </div>
                <div>
                  <h3 className="text-sm font-semibold text-gray-400 mb-3">Market Position</h3>
                  <div className="space-y-2 text-sm">
                    <div className="flex justify-between"><span className="text-gray-500">Category</span><span className="text-gray-300">{company.marketPosition.category}</span></div>
                    <div className="flex justify-between"><span className="text-gray-500">Sub-Category</span><span className="text-gray-300">{company.marketPosition.subCategory}</span></div>
                    <div><span className="text-gray-500 block mb-1">Gartner Position</span><span className="text-green-400 text-xs">{company.marketPosition.gartnerPosition}</span></div>
                  </div>
                </div>
              </div>
              <div className="mb-4">
                <h3 className="text-sm font-semibold text-gray-400 mb-3">Recognition</h3>
                <div className="flex flex-wrap gap-2">
                  {company.recognition.map((item, idx) => (
                    <span key={idx} className="px-3 py-1 bg-gray-800 rounded-full text-xs text-gray-300 border border-gray-700">{item}</span>
                  ))}
                </div>
              </div>
              <CitationFooter citations={['Trend Micro Newsroom', 'Gartner Magic Quadrant 2024', 'Wikipedia']} />
            </section>

            <section id="market" className="bg-gray-900 rounded-xl border border-gray-800 p-6">
              <h2 className="text-xl font-semibold mb-4 flex items-center gap-2"><span>🌍</span> Market Context</h2>
              <div className="bg-gray-800 rounded-lg p-4 mb-4">
                <h3 className="text-sm font-semibold text-gray-400 mb-3">Email Security Hype Cycle Position</h3>
                <HypeCycleSVG />
                <p className="text-xs text-gray-500 text-center mt-2">[1] Gartner Hype Cycle for Security Operations, 2024</p>
              </div>
              <div className="grid md:grid-cols-2 gap-4 mb-4">
                <div className="bg-red-900/20 border border-red-800/50 rounded-lg p-4">
                  <h3 className="text-sm font-semibold text-red-400 mb-2">Unique Approach</h3>
                  <p className="text-xs text-gray-400">{company.marketContext.uniqueApproach}</p>
                </div>
                <div className="bg-gray-800 rounded-lg p-4">
                  <h3 className="text-sm font-semibold text-white mb-2">Key Differentiator</h3>
                  <p className="text-xs text-gray-400">{company.marketContext.keyDifferentiator}</p>
                </div>
              </div>
              <div className="bg-red-900/20 border border-red-800/50 rounded-lg p-4">
                <h3 className="text-sm font-semibold text-red-400 mb-3">🔗 Vision One Platform Strategy</h3>
                <p className="text-xs text-gray-400 mb-3">{company.platformStrategy.description}</p>
                <div className="grid md:grid-cols-3 gap-2">
                  {company.platformStrategy.pillars.map((pillar, idx) => (
                    <div key={idx} className={`text-xs p-2 rounded ${pillar.isPrimary ? 'bg-red-900/30 text-red-300 border border-red-700' : 'bg-gray-800 text-gray-400'}`}>
                      {pillar.name}
                      {pillar.isPrimary && <span className="block text-red-400 mt-1">← Email Focus</span>}
                    </div>
                  ))}
                </div>
                <p className="text-xs text-gray-500 mt-3">{company.platformStrategy.attachRate}</p>
              </div>
              <CitationFooter citations={['Gartner Hype Cycle for Security Operations, 2024', 'Trend Micro Q3 2024 Earnings']} />
            </section>

            <section id="product" className="bg-gray-900 rounded-xl border border-gray-800 p-6">
              <h2 className="text-xl font-semibold mb-4 flex items-center gap-2"><span>🎯</span> Product</h2>
              <p className="text-sm text-gray-400 mb-4">Email and Collaboration Security is integrated into the Trend Vision One platform, providing correlated threat intelligence across security layers.</p>
              <div className="grid md:grid-cols-2 gap-3 mb-6">
                {company.emailCapabilities.map((capability, idx) => (
                  <div key={idx} className="bg-gray-800 border border-gray-700 rounded-lg p-4">
                    <h3 className="font-medium text-white text-sm">{capability.name}</h3>
                    <p className="text-xs text-gray-400 mt-1">{capability.description}</p>
                  </div>
                ))}
              </div>
              <CitationFooter citations={['Trend Micro Product Documentation', 'Gartner Magic Quadrant Analysis']} />
            </section>

            <section id="stakeholders" className="bg-gray-900 rounded-xl border border-gray-800 p-6">
              <h2 className="text-xl font-semibold mb-4 flex items-center gap-2"><span>👥</span> Stakeholders</h2>
              <div className="space-y-4">
                {Object.values(company.stakeholders).map((stakeholder, idx) => (
                  <div key={idx} className="bg-gray-800 rounded-lg p-4">
                    <h3 className="font-medium text-white mb-2">{stakeholder.role}</h3>
                    <p className="text-sm text-red-400 mb-3">JTBD: {stakeholder.jtbd}</p>
                    <div className="grid md:grid-cols-2 gap-4">
                      <div><span className="text-xs text-gray-500 uppercase">Pain Points</span>{stakeholder.painPoints.map((pain, i) => (<p key={i} className="text-xs text-gray-400 mt-1">• {pain}</p>))}</div>
                      <div><span className="text-xs text-gray-500 uppercase">Value Props</span>{stakeholder.valueProps.map((prop, i) => (<p key={i} className="text-xs text-gray-300 mt-1">• {prop}</p>))}</div>
                    </div>
                  </div>
                ))}
              </div>
              <CitationFooter citations={['Trend Micro Customer Case Studies', 'G2 Reviews']} />
            </section>

            <section id="economics" className="bg-gray-900 rounded-xl border border-gray-800 p-6">
              <h2 className="text-xl font-semibold mb-4 flex items-center gap-2"><span>💰</span> Economics</h2>
              <div className="grid md:grid-cols-2 gap-4 mb-4">
                <div className="bg-gray-800 rounded-lg p-4"><h3 className="text-sm font-semibold text-gray-400 mb-2">Pricing Model</h3><p className="text-sm text-white">{company.economics.pricing}</p></div>
                <div className="bg-gray-800 rounded-lg p-4"><h3 className="text-sm font-semibold text-gray-400 mb-2">Market Position</h3><p className="text-sm text-white">{company.economics.competitivePricing}</p></div>
              </div>
              <div className="bg-green-900/20 border border-green-800/50 rounded-lg p-4">
                <h3 className="text-sm font-semibold text-green-400 mb-2">ROI Drivers</h3>
                {company.economics.roiDrivers.map((driver, idx) => (<p key={idx} className="text-xs text-gray-300 mt-1">• {driver}</p>))}
              </div>
              <CitationFooter citations={['Trend Micro Pricing', 'Customer ROI Studies']} />
            </section>

            <section id="differentiation" className="bg-gray-900 rounded-xl border border-gray-800 p-6">
              <h2 className="text-xl font-semibold mb-4 flex items-center gap-2"><span>⚡</span> Differentiation</h2>
              <div className="grid md:grid-cols-2 gap-4">
                {company.differentiation.map((diff, idx) => (
                  <div key={idx} className="bg-gray-800 rounded-lg p-4 border-l-2 border-red-500">
                    <div className="flex items-center gap-2 mb-2"><span className="text-xl">{diff.icon}</span><h3 className="font-medium text-white">{diff.title}</h3></div>
                    <p className="text-sm text-gray-400">{diff.description}</p>
                  </div>
                ))}
              </div>
              <CitationFooter citations={['Trend Micro Technology Overview', 'Zero Day Initiative']} />
            </section>

            <section id="analysis" className="bg-gray-900 rounded-xl border border-gray-800 p-6">
              <h2 className="text-xl font-semibold mb-4 flex items-center gap-2"><span>📊</span> Analysis</h2>
              <div className="grid md:grid-cols-2 gap-6">
                <div><h3 className="text-sm font-semibold text-green-400 mb-3 flex items-center gap-2"><span>💪</span> Strengths</h3><div className="space-y-2">{company.strengths.map((item, idx) => (<div key={idx} className="flex items-start gap-2 text-sm text-gray-300"><span className="text-green-500 mt-0.5">+</span>{item}</div>))}</div></div>
                <div><h3 className="text-sm font-semibold text-red-400 mb-3 flex items-center gap-2"><span>⚠️</span> Weaknesses</h3><div className="space-y-2">{company.weaknesses.map((item, idx) => (<div key={idx} className="flex items-start gap-2 text-sm text-gray-300"><span className="text-red-500 mt-0.5">-</span>{item}</div>))}</div></div>
              </div>
              <CitationFooter citations={['Gartner Critical Capabilities', 'Industry Analysis']} />
            </section>

            <section id="outlook" className="bg-gray-900 rounded-xl border border-gray-800 p-6">
              <h2 className="text-xl font-semibold mb-4 flex items-center gap-2"><span>🔮</span> Outlook</h2>
              <div className="grid md:grid-cols-2 gap-6 mb-6">
                <div><h3 className="text-sm font-semibold text-green-400 mb-3">Tailwinds</h3><div className="space-y-2">{company.outlook.tailwinds.map((item, idx) => (<div key={idx} className="flex items-start gap-2 text-sm text-gray-300"><span className="text-green-500">↑</span>{item}</div>))}</div></div>
                <div><h3 className="text-sm font-semibold text-orange-400 mb-3">Headwinds</h3><div className="space-y-2">{company.outlook.headwinds.map((item, idx) => (<div key={idx} className="flex items-start gap-2 text-sm text-gray-300"><span className="text-orange-500">↓</span>{item}</div>))}</div></div>
              </div>
              <div className="bg-red-900/20 border border-red-800/50 rounded-lg p-4"><h3 className="text-sm font-semibold text-red-400 mb-2">Trajectory</h3><p className="text-sm text-gray-300">{company.outlook.trajectory}</p></div>
              <CitationFooter citations={['Trend Micro Investor Relations', 'Market Analysis']} />
            </section>

            <section id="news" className="bg-gray-900 rounded-xl border border-gray-800 p-6">
              <h2 className="text-xl font-semibold mb-4 flex items-center gap-2"><span>📰</span> Recent News</h2>
              <div className="space-y-4">
                {company.news.map((item, idx) => (
                  <div key={idx} className="flex items-start gap-4 p-4 bg-gray-800 rounded-lg">
                    <div className="text-sm text-gray-500 whitespace-nowrap">{item.date}</div>
                    <div className="flex-1">
                      <div className="flex items-center gap-2 mb-1"><h3 className="font-medium text-white">{item.title}</h3><span className={`text-xs px-2 py-0.5 rounded border ${getNewsTypeStyle(item.type)}`}>{item.type}</span></div>
                      <p className="text-sm text-gray-400">{item.summary}</p>
                      {item.source && <p className="text-xs text-gray-500 mt-1">Source: {item.source}</p>}
                    </div>
                  </div>
                ))}
              </div>
            </section>

          </div>
        </div>

        <footer className="mt-12 pt-8 border-t border-gray-800 text-center text-gray-500 text-sm">
          <p>Research compiled January 2026 • Andy Simko • Email Security Market Analysis</p>
          <p className="mt-1 text-gray-600">Independent research • Not affiliated with {company.name}</p>
        </footer>
      </div>
    </div>
  );
};

export default TrendMicroProfile;
