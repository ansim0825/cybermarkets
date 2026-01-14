"use client";

import React, { useState } from 'react';

const CheckPointAvananProfile = () => {
  const [activeSection, setActiveSection] = useState('overview');

  const company = {
    name: 'Check Point / Avanan',
    product: 'Harmony Email & Collaboration',
    tagline: 'Inline API architecture - prevention before the inbox',
    position: 'Inline API Pioneer',
    website: 'https://www.checkpoint.com',
    
    snapshot: {
      acquisitionPrice: '$227-300M',
      customerGrowth: '8x',
      emailCustomers: '5,000+',
      parentRevenue: '$2.4B',
      gartnerPosition: 'Leader',
    },

    companyDetails: {
      founded: '2014 (Avanan)',
      founders: 'Gil Friedrich (CEO) & team',
      headquarters: 'Tel Aviv / New York',
      acquisition: '$227-300M (Aug 2021)',
      parentCompany: 'Check Point Software Technologies',
    },

    marketPosition: {
      category: 'Integrated Cloud Email Security (ICES)',
      subCategory: 'Inline API Prevention',
      gartnerPosition: 'Leader - Gartner MQ (2024, 2025)',
    },

    recognition: [
      'Gartner Magic Quadrant Leader 2024, 2025',
      'Patented Inline API Technology',
      '8x Customer Growth Post-Acquisition',
    ],

    metrics: {
      architecture: 'Inline API (patented)',
      threatCloud: '2B+ decisions/day',
      customerGrowth: '8x since 2021',
      deployment: 'Minutes via API',
    },

    marketContext: {
      hypeCyclePosition: 'Slope of Enlightenment',
      architectureDebate: 'Inline (prevention) vs Post-Delivery (detection)',
      keyDifferentiator: 'Only vendor blocking threats BEFORE inbox delivery via API',
    },

    products: [
      { name: 'Harmony Email & Collaboration', description: 'Core email security for M365, Google Workspace, Slack, Teams', isPrimary: true },
      { name: 'Harmony SASE', description: 'Secure Access Service Edge integration' },
      { name: 'ThreatCloud AI', description: 'Threat intelligence from 100K+ customers' },
      { name: 'Infinity XDR', description: 'Extended detection and response platform' },
    ],

    stakeholders: {
      ciso: {
        role: 'CISO / Security Leadership',
        jtbd: 'Reduce email-borne risk with defense-in-depth',
        painPoints: ['BEC attacks bypassing native controls', 'Board pressure on email security'],
        valueProps: ['Prevention-first blocks before users see threats', 'Unified platform reduces vendor sprawl'],
      },
      secops: {
        role: 'Security Operations',
        jtbd: 'Reduce alert fatigue while improving coverage',
        painPoints: ['Too many tools', 'Manual investigation overhead'],
        valueProps: ['Automated blocking reduces tickets', 'ThreatCloud intelligence pre-validated'],
      },
      itAdmin: {
        role: 'IT / Email Admin',
        jtbd: 'Deploy and maintain email security without disruption',
        painPoints: ['MX record changes', 'Mail flow complexity'],
        valueProps: ['API deployment in minutes', 'No MX changes required'],
      },
    },

    economics: {
      pricing: 'Platform bundle pricing (part of Harmony suite)',
      roiDrivers: [
        'Reduced incident response time (prevention vs remediation)',
        'Lower SOC workload from automated blocking',
        'Platform consolidation savings',
      ],
      competitivePricing: 'Premium positioning as part of broader Check Point relationship',
    },

    differentiation: [
      { title: 'Inline API Patent', description: 'Only vendor with patented inline API approach - blocks BEFORE inbox delivery.', icon: '🛡️' },
      { title: 'Prevention-First Philosophy', description: 'Check Point DNA: prevent threats, don\'t just detect. Zero risk window.', icon: '🚫' },
      { title: 'Platform Integration', description: 'Part of Infinity architecture - email + endpoint + network + cloud unified.', icon: '🔗' },
      { title: 'ThreatCloud Scale', description: '100,000+ customers feeding threat intelligence. 2B+ security decisions daily.', icon: '☁️' },
    ],

    strengths: [
      'Patented inline API architecture - unique market position',
      'Prevention-first approach aligns with CISO risk appetite',
      'Check Point brand and enterprise relationships',
      'Unified platform story (Infinity architecture)',
      'Strong threat intelligence (ThreatCloud)',
      'Gartner Leader recognition',
    ],

    weaknesses: [
      'Integration complexity post-acquisition still evolving',
      'Less specialized in BEC than pure-play behavioral AI vendors',
      'Premium pricing as part of larger platform',
      'Avanan talent retention post-acquisition',
      'Platform breadth vs. email depth tradeoff',
    ],

    outlook: {
      tailwinds: [
        'Platform consolidation trend benefits unified vendors',
        'Prevention-first resonates with risk-averse CISOs',
        'Check Point R&D investment and stability',
      ],
      headwinds: [
        'Behavioral AI narrative dominates analyst coverage',
        'Post-acquisition integration challenges',
        'Competition from both SEG incumbents and API-native startups',
      ],
      trajectory: 'Continued integration into Infinity platform. Email becomes entry point for broader Check Point relationship.',
    },

    news: [
      { date: 'Aug 2021', title: 'Check Point Acquires Avanan', summary: '$227-300M acquisition to add cloud email security.', type: 'acquisition', source: 'Check Point Press Release' },
      { date: '2024', title: 'Gartner MQ Leader', summary: 'Named Leader in Email Security Platforms Magic Quadrant.', type: 'recognition', source: 'Gartner Magic Quadrant 2024' },
      { date: '2024', title: '8x Customer Growth', summary: 'Customer base grew 8x since acquisition in 2021.', type: 'milestone', source: 'Check Point Investor Relations' },
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
      case 'acquisition': return 'bg-purple-900/50 text-purple-400 border-purple-700';
      case 'recognition': return 'bg-green-900/50 text-green-400 border-green-700';
      case 'milestone': return 'bg-blue-900/50 text-blue-400 border-blue-700';
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

  // Hype Cycle SVG Component
  const HypeCycleSVG = () => (
    <svg viewBox="0 0 500 200" className="w-full h-48">
      <defs>
        <linearGradient id="curveGradientCP" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" stopColor="#8b5cf6" stopOpacity="0.8" />
          <stop offset="50%" stopColor="#06b6d4" stopOpacity="0.8" />
          <stop offset="100%" stopColor="#10b981" stopOpacity="0.8" />
        </linearGradient>
      </defs>
      <path d="M 30 180 Q 80 180 100 160 Q 120 140 140 60 Q 160 20 180 40 Q 200 60 220 120 Q 260 160 300 150 Q 340 140 380 130 Q 420 120 470 110" stroke="url(#curveGradientCP)" strokeWidth="3" fill="none" />
      <circle cx="140" cy="60" r="6" fill="#f97316" stroke="#fff" strokeWidth="2" />
      <text x="140" y="45" textAnchor="middle" fill="#f97316" fontSize="10" fontWeight="bold">GenAI Email</text>
      <circle cx="320" cy="145" r="8" fill="#ef4444" stroke="#fff" strokeWidth="2" />
      <text x="320" y="130" textAnchor="middle" fill="#ef4444" fontSize="10" fontWeight="bold">Inline API ICES</text>
      <text x="320" y="170" textAnchor="middle" fill="#9ca3af" fontSize="8">(Check Point/Avanan)</text>
      <circle cx="440" cy="115" r="6" fill="#10b981" stroke="#fff" strokeWidth="2" />
      <text x="440" y="100" textAnchor="middle" fill="#10b981" fontSize="10" fontWeight="bold">SEG</text>
      <text x="60" y="195" fill="#6b7280" fontSize="8">Innovation Trigger</text>
      <text x="160" y="195" fill="#6b7280" fontSize="8">Peak</text>
      <text x="230" y="195" fill="#6b7280" fontSize="8">Trough</text>
      <text x="320" y="195" fill="#6b7280" fontSize="8">Slope of Enlightenment</text>
      <text x="440" y="195" fill="#6b7280" fontSize="8">Plateau</text>
    </svg>
  );

  return (
    <div className="min-h-screen bg-gray-950 text-gray-100">
      {/* Navigation */}
      <nav className="border-b border-gray-800 bg-gray-950/80 backdrop-blur-sm sticky top-0 z-50">
        <div className="max-w-6xl mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <a href="/" className="text-gray-400 hover:text-white">Home</a>
              <span className="text-gray-600">/</span>
              <a href="/pillars/network-edge/email-security" className="text-gray-400 hover:text-white">Email Security</a>
              <span className="text-gray-600">/</span>
              <span className="text-gray-300">Check Point / Avanan</span>
            </div>
            <a href="/pillars/network-edge/email-security" className="text-gray-300 hover:text-white text-sm">← Back to Market</a>
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
                <span className="px-3 py-1 bg-red-900/50 text-red-400 border border-red-700 rounded-full text-sm">
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
            <span>Research Status: <span className="text-yellow-400">In Progress</span></span>
            <span>•</span>
            <span>Last updated: January 2026</span>
          </div>
        </div>

        {/* Snapshot Cards */}
        <div className="grid grid-cols-2 md:grid-cols-5 gap-4 mb-8">
          <div className="bg-gray-900 rounded-xl p-4 border border-gray-800">
            <div className="text-2xl font-bold text-white mb-1">{company.snapshot.acquisitionPrice}</div>
            <div className="text-xs text-gray-400">Acquisition Price</div>
          </div>
          <div className="bg-gray-900 rounded-xl p-4 border border-gray-800">
            <div className="text-2xl font-bold text-green-400 mb-1">{company.snapshot.customerGrowth}</div>
            <div className="text-xs text-gray-400">Customer Growth</div>
          </div>
          <div className="bg-gray-900 rounded-xl p-4 border border-gray-800">
            <div className="text-2xl font-bold text-white mb-1">{company.snapshot.emailCustomers}</div>
            <div className="text-xs text-gray-400">Customers</div>
          </div>
          <div className="bg-gray-900 rounded-xl p-4 border border-gray-800">
            <div className="text-2xl font-bold text-white mb-1">{company.snapshot.parentRevenue}</div>
            <div className="text-xs text-gray-400">Parent Revenue</div>
          </div>
          <div className="bg-gray-900 rounded-xl p-4 border border-gray-800">
            <div className="text-2xl font-bold text-red-400 mb-1">{company.snapshot.gartnerPosition}</div>
            <div className="text-xs text-gray-400">Gartner MQ 2024</div>
          </div>
        </div>

        {/* Main Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          
          {/* Left Sidebar */}
          <div className="lg:col-span-1">
            <div className="sticky top-24">
              {/* Sections Navigation */}
              <div className="bg-gray-900 rounded-xl border border-gray-800 p-4 mb-6">
                <h3 className="text-sm font-semibold text-gray-400 mb-3">Sections</h3>
                <div className="space-y-1">
                  {sections.map((section) => (
                    <button
                      key={section.id}
                      onClick={() => scrollToSection(section.id)}
                      className={`w-full text-left px-3 py-2 rounded-lg text-sm flex items-center gap-2 transition-all ${
                        activeSection === section.id
                          ? 'bg-red-900/50 text-red-400 border border-red-800'
                          : 'text-gray-400 hover:bg-gray-800 hover:text-white'
                      }`}
                    >
                      <span>{section.icon}</span>
                      <span>{section.name}</span>
                    </button>
                  ))}
                </div>
              </div>

              {/* Key Metrics */}
              <div className="bg-gray-900 rounded-xl border border-gray-800 p-4">
                <h3 className="text-sm font-semibold text-gray-400 mb-3">Key Metrics</h3>
                <div className="space-y-3 text-sm">
                  <div>
                    <span className="text-gray-500 block">Architecture</span>
                    <span className="text-red-400">{company.metrics.architecture}</span>
                  </div>
                  <div>
                    <span className="text-gray-500 block">ThreatCloud</span>
                    <span className="text-white">{company.metrics.threatCloud}</span>
                  </div>
                  <div>
                    <span className="text-gray-500 block">Customer Growth</span>
                    <span className="text-green-400">{company.metrics.customerGrowth}</span>
                  </div>
                  <div>
                    <span className="text-gray-500 block">Deployment</span>
                    <span className="text-white">{company.metrics.deployment}</span>
                  </div>
                </div>
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
                      <span className="text-gray-300">{company.companyDetails.founded}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-500">Founders</span>
                      <span className="text-gray-300">{company.companyDetails.founders}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-500">Headquarters</span>
                      <span className="text-gray-300">{company.companyDetails.headquarters}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-500">Acquisition</span>
                      <span className="text-gray-300">{company.companyDetails.acquisition}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-500">Parent Company</span>
                      <span className="text-gray-300">{company.companyDetails.parentCompany}</span>
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
                      <span className="text-gray-500 block mb-1">Gartner Position</span>
                      <span className="text-red-400 text-xs">{company.marketPosition.gartnerPosition}</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Recognition */}
              <div className="mb-4">
                <h3 className="text-sm font-semibold text-gray-400 mb-3">Recognition</h3>
                <div className="flex flex-wrap gap-2">
                  {company.recognition.map((item, idx) => (
                    <span key={idx} className="px-3 py-1 bg-gray-800 rounded-full text-xs text-gray-300 border border-gray-700">
                      {item}
                    </span>
                  ))}
                </div>
              </div>

              <CitationFooter citations={[
                'Check Point Software Technologies - Corporate Information',
                'Crunchbase - Avanan Acquisition History',
                'Gartner Magic Quadrant for Email Security Platforms, 2024 & 2025',
              ]} />
            </section>

            {/* Market Context Section */}
            <section id="market" className="bg-gray-900 rounded-xl border border-gray-800 p-6">
              <h2 className="text-xl font-semibold mb-4 flex items-center gap-2">
                <span>🌍</span> Market Context
              </h2>

              <div className="bg-gray-800 rounded-lg p-4 mb-4">
                <h3 className="text-sm font-semibold text-gray-400 mb-3">Email Security Hype Cycle Position</h3>
                <HypeCycleSVG />
                <p className="text-xs text-gray-500 text-center mt-2">[1] Gartner Hype Cycle for Security Operations, 2024</p>
              </div>

              <div className="grid md:grid-cols-2 gap-4">
                <div className="bg-red-900/20 border border-red-800/50 rounded-lg p-4">
                  <h3 className="text-sm font-semibold text-red-400 mb-2">Architecture Debate</h3>
                  <p className="text-xs text-gray-400">{company.marketContext.architectureDebate}</p>
                </div>
                <div className="bg-gray-800 rounded-lg p-4">
                  <h3 className="text-sm font-semibold text-white mb-2">Key Differentiator</h3>
                  <p className="text-xs text-gray-400">{company.marketContext.keyDifferentiator}</p>
                </div>
              </div>

              <CitationFooter citations={[
                'Gartner Hype Cycle for Security Operations, 2024',
                'Check Point Avanan Technical Architecture',
              ]} />
            </section>

            {/* Product Section */}
            <section id="product" className="bg-gray-900 rounded-xl border border-gray-800 p-6">
              <h2 className="text-xl font-semibold mb-4 flex items-center gap-2">
                <span>🎯</span> Product
              </h2>

              <div className="space-y-3">
                {company.products.map((product, idx) => (
                  <div key={idx} className={`rounded-lg p-4 ${product.isPrimary ? 'bg-red-900/20 border border-red-800/50' : 'bg-gray-800'}`}>
                    <div className="flex justify-between items-start">
                      <div>
                        <h3 className="font-medium text-white">{product.name}</h3>
                        <p className="text-sm text-gray-400">{product.description}</p>
                      </div>
                      {product.isPrimary && (
                        <span className="text-xs px-2 py-1 bg-red-900/50 text-red-400 rounded">Primary</span>
                      )}
                    </div>
                  </div>
                ))}
              </div>

              <CitationFooter citations={[
                'Check Point Harmony Product Documentation',
              ]} />
            </section>

            {/* Stakeholders Section */}
            <section id="stakeholders" className="bg-gray-900 rounded-xl border border-gray-800 p-6">
              <h2 className="text-xl font-semibold mb-4 flex items-center gap-2">
                <span>👥</span> Stakeholders
              </h2>

              <div className="space-y-4">
                {Object.values(company.stakeholders).map((stakeholder, idx) => (
                  <div key={idx} className="bg-gray-800 rounded-lg p-4">
                    <h3 className="font-medium text-white mb-2">{stakeholder.role}</h3>
                    <p className="text-sm text-red-400 mb-3">JTBD: {stakeholder.jtbd}</p>
                    <div className="grid md:grid-cols-2 gap-4">
                      <div>
                        <span className="text-xs text-gray-500 uppercase">Pain Points</span>
                        {stakeholder.painPoints.map((pain, i) => (
                          <p key={i} className="text-xs text-gray-400 mt-1">• {pain}</p>
                        ))}
                      </div>
                      <div>
                        <span className="text-xs text-gray-500 uppercase">Value Props</span>
                        {stakeholder.valueProps.map((prop, i) => (
                          <p key={i} className="text-xs text-gray-300 mt-1">• {prop}</p>
                        ))}
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              <CitationFooter citations={[
                'Check Point Customer Case Studies',
                'Gartner Voice of the Customer',
              ]} />
            </section>

            {/* Economics Section */}
            <section id="economics" className="bg-gray-900 rounded-xl border border-gray-800 p-6">
              <h2 className="text-xl font-semibold mb-4 flex items-center gap-2">
                <span>💰</span> Economics
              </h2>

              <div className="grid md:grid-cols-2 gap-4 mb-4">
                <div className="bg-gray-800 rounded-lg p-4">
                  <h3 className="text-sm font-semibold text-gray-400 mb-2">Pricing Model</h3>
                  <p className="text-sm text-white">{company.economics.pricing}</p>
                </div>
                <div className="bg-gray-800 rounded-lg p-4">
                  <h3 className="text-sm font-semibold text-gray-400 mb-2">Market Position</h3>
                  <p className="text-sm text-white">{company.economics.competitivePricing}</p>
                </div>
              </div>

              <div className="bg-green-900/20 border border-green-800/50 rounded-lg p-4">
                <h3 className="text-sm font-semibold text-green-400 mb-2">ROI Drivers</h3>
                {company.economics.roiDrivers.map((driver, idx) => (
                  <p key={idx} className="text-xs text-gray-300 mt-1">• {driver}</p>
                ))}
              </div>

              <CitationFooter citations={[
                'Check Point Pricing Documentation',
                'Industry ROI Analysis',
              ]} />
            </section>

            {/* Differentiation Section */}
            <section id="differentiation" className="bg-gray-900 rounded-xl border border-gray-800 p-6">
              <h2 className="text-xl font-semibold mb-4 flex items-center gap-2">
                <span>⚡</span> Differentiation
              </h2>

              <div className="grid md:grid-cols-2 gap-4">
                {company.differentiation.map((diff, idx) => (
                  <div key={idx} className="bg-gray-800 rounded-lg p-4 border-l-2 border-red-500">
                    <div className="flex items-center gap-2 mb-2">
                      <span className="text-xl">{diff.icon}</span>
                      <h3 className="font-medium text-white">{diff.title}</h3>
                    </div>
                    <p className="text-sm text-gray-400">{diff.description}</p>
                  </div>
                ))}
              </div>

              <CitationFooter citations={[
                'Check Point ThreatCloud Intelligence Report',
                'US Patent #10,372,931 - Inline API Method',
              ]} />
            </section>

            {/* Analysis Section */}
            <section id="analysis" className="bg-gray-900 rounded-xl border border-gray-800 p-6">
              <h2 className="text-xl font-semibold mb-4 flex items-center gap-2">
                <span>📊</span> Analysis
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

              <CitationFooter citations={[
                'Gartner Critical Capabilities for Email Security',
                'Industry Analyst Reports',
              ]} />
            </section>

            {/* Outlook Section */}
            <section id="outlook" className="bg-gray-900 rounded-xl border border-gray-800 p-6">
              <h2 className="text-xl font-semibold mb-4 flex items-center gap-2">
                <span>🔮</span> Outlook
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

              <div className="bg-red-900/20 border border-red-800/50 rounded-lg p-4">
                <h3 className="text-sm font-semibold text-red-400 mb-2">Trajectory</h3>
                <p className="text-sm text-gray-300">{company.outlook.trajectory}</p>
              </div>

              <CitationFooter citations={[
                'Check Point Strategic Roadmap',
                'Industry Analyst Forecasts',
              ]} />
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
                      {item.source && (
                        <p className="text-xs text-gray-500 mt-1">Source: {item.source}</p>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </section>

          </div>
        </div>

        {/* Footer */}
        <footer className="mt-12 pt-8 border-t border-gray-800 text-center text-gray-500 text-sm">
          <p>Research compiled January 2026 • Andy Simko • Email Security Market Analysis</p>
          <p className="mt-1 text-gray-600">Independent research • Not affiliated with {company.name}</p>
        </footer>
      </div>
    </div>
  );
};

export default CheckPointAvananProfile;
