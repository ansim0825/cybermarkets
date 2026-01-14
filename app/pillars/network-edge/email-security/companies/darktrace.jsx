"use client";

import React, { useState } from 'react';

const DarktraceEmailProfile = () => {
  const [activeSection, setActiveSection] = useState('overview');

  const company = {
    name: 'Darktrace',
    product: 'Darktrace / EMAIL',
    tagline: 'Self-Learning AI across the entire digital estate',
    position: 'Self-Learning AI Platform',
    website: 'https://www.darktrace.com',
    
    snapshot: {
      valuation: '$5.3B',
      emailCustomers: '6,000+',
      totalCustomers: '9,000+',
      employees: '2,200+',
      gartnerPosition: 'Leader',
    },

    companyDetails: {
      founded: '2013',
      founders: 'Cambridge mathematicians & intelligence experts',
      headquarters: 'Cambridge, UK',
      acquisition: '$5.3B by Thoma Bravo (Oct 2024)',
      employees: '2,200+',
    },

    marketPosition: {
      category: 'Integrated Cloud Email Security (ICES)',
      subCategory: 'Self-Learning AI Platform',
      gartnerPosition: 'Leader - Gartner MQ (2024, 2025)',
    },

    recognition: [
      'Gartner Magic Quadrant Leader 2024, 2025',
      '$5.3B Thoma Bravo Acquisition',
      'Self-Learning AI Pioneer',
    ],

    metrics: {
      valuation: '$5.3B',
      emailCustomers: '6,000+',
      totalCustomers: '9,000+',
      platformModules: '6',
    },

    marketContext: {
      hypeCyclePosition: 'Slope of Enlightenment',
      uniqueApproach: 'Unsupervised ML learns "normal" without rules or signatures',
      keyDifferentiator: 'Cross-domain correlation: email + network + cloud + endpoint + OT + identity',
    },

    platformComponents: [
      { name: 'Darktrace / EMAIL', description: 'AI-powered email security with behavioral analysis', isPrimary: true },
      { name: 'Darktrace / NETWORK', description: 'Network detection and response (NDR)' },
      { name: 'Darktrace / CLOUD', description: 'Cloud infrastructure security' },
      { name: 'Darktrace / ENDPOINT', description: 'Endpoint detection and response' },
      { name: 'Darktrace / OT', description: 'Operational technology security' },
      { name: 'Darktrace / IDENTITY', description: 'Identity threat detection' },
    ],

    stakeholders: {
      ciso: {
        role: 'CISO / Security Leadership',
        jtbd: 'Unified visibility across entire digital estate',
        painPoints: ['Siloed security tools', 'Cross-domain attack blind spots'],
        valueProps: ['Single platform for all security domains', 'Cross-domain threat correlation'],
      },
      secops: {
        role: 'Security Operations',
        jtbd: 'Detect novel threats without writing rules',
        painPoints: ['Rule-based systems miss zero-days', 'Alert fatigue from false positives'],
        valueProps: ['Self-learning reduces rule maintenance', 'Autonomous response capabilities'],
      },
      itAdmin: {
        role: 'IT / Infrastructure',
        jtbd: 'Security that understands our unique environment',
        painPoints: ['Generic signatures miss environment-specific threats', 'Tuning overhead'],
        valueProps: ['Learns your normal automatically', 'No training data required'],
      },
    },

    economics: {
      pricing: 'Platform pricing based on users/devices protected',
      roiDrivers: [
        'Platform consolidation (replace multiple point products)',
        'Cross-domain correlation improves detection',
        'Reduced rule maintenance overhead',
      ],
      competitivePricing: 'Premium positioning - justified by platform breadth',
    },

    selfLearningAi: {
      description: 'Unsupervised machine learning that learns "normal" for each environment without rules or signatures.',
      keyDifferentiator: 'No training data required - learns autonomously from day one.',
      crossDomainCorrelation: 'Unique ability to correlate signals across email + network + cloud + endpoint.',
    },

    differentiation: [
      { title: 'Self-Learning AI', description: 'No rules, no signatures. Learns your unique "normal" autonomously from day one.', icon: '🧠' },
      { title: 'Cross-Domain Correlation', description: 'Only platform correlating email + network + cloud + endpoint + OT + identity signals.', icon: '🔗' },
      { title: 'Platform Breadth', description: 'Email security as part of unified security platform - not point product.', icon: '🏗️' },
      { title: 'Autonomous Response', description: 'Antigena can take autonomous action to contain threats in real-time.', icon: '⚡' },
    ],

    strengths: [
      'Platform breadth - email is one of many integrated products',
      'Self-Learning AI - no rules, no signatures, autonomous learning',
      'Cross-domain correlation - network + email + cloud + endpoint signals',
      'Thoma Bravo backing ($5.3B) - resources for continued investment',
      'Gartner Leader recognition in multiple categories',
      'Strong EMEA presence and brand recognition',
    ],

    weaknesses: [
      'Email is not primary focus - breadth vs. depth tradeoff',
      'Premium pricing across platform',
      'Less email-specific innovation than pure-play vendors',
      'PE ownership may drive efficiency over innovation',
      'Complex platform may overwhelm email-only buyers',
    ],

    outlook: {
      tailwinds: [
        'Platform consolidation trend favors unified vendors',
        'Cross-domain correlation increasingly valuable',
        'Thoma Bravo resources for M&A and growth',
      ],
      headwinds: [
        'PE ownership pressure on margins',
        'Pure-play email vendors winning email-specific deals',
        'Microsoft platform expansion',
      ],
      trajectory: 'Email becomes entry point for broader Darktrace platform. Cross-sell from 6K email → full ActiveAI platform.',
    },

    news: [
      { date: 'Oct 2024', title: 'Thoma Bravo Acquisition', summary: '$5.3B take-private deal completed.', type: 'acquisition', source: 'Thoma Bravo Press Release' },
      { date: '2024', title: 'Gartner MQ Leader', summary: 'Named Leader in Email Security Platforms for second year.', type: 'recognition', source: 'Gartner Magic Quadrant 2024' },
      { date: '2025', title: 'ActiveAI Platform Launch', summary: 'Unified platform branding across all Darktrace products.', type: 'product', source: 'Darktrace Product Announcements' },
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
      case 'product': return 'bg-blue-900/50 text-blue-400 border-blue-700';
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
        <linearGradient id="curveGradientDT" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" stopColor="#8b5cf6" stopOpacity="0.8" />
          <stop offset="50%" stopColor="#06b6d4" stopOpacity="0.8" />
          <stop offset="100%" stopColor="#10b981" stopOpacity="0.8" />
        </linearGradient>
      </defs>
      <path d="M 30 180 Q 80 180 100 160 Q 120 140 140 60 Q 160 20 180 40 Q 200 60 220 120 Q 260 160 300 150 Q 340 140 380 130 Q 420 120 470 110" stroke="url(#curveGradientDT)" strokeWidth="3" fill="none" />
      <circle cx="140" cy="60" r="6" fill="#f97316" stroke="#fff" strokeWidth="2" />
      <text x="140" y="45" textAnchor="middle" fill="#f97316" fontSize="10" fontWeight="bold">GenAI Email</text>
      <circle cx="340" cy="140" r="8" fill="#a855f7" stroke="#fff" strokeWidth="2" />
      <text x="340" y="125" textAnchor="middle" fill="#a855f7" fontSize="10" fontWeight="bold">Self-Learning AI</text>
      <text x="340" y="165" textAnchor="middle" fill="#9ca3af" fontSize="8">(Darktrace)</text>
      <circle cx="450" cy="110" r="6" fill="#10b981" stroke="#fff" strokeWidth="2" />
      <text x="450" y="95" textAnchor="middle" fill="#10b981" fontSize="10" fontWeight="bold">SEG</text>
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
              <span className="text-gray-300">Darktrace</span>
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
                <span className="px-3 py-1 bg-purple-900/50 text-purple-400 border border-purple-700 rounded-full text-sm">{company.position}</span>
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
            <div className="text-2xl font-bold text-white mb-1">{company.snapshot.valuation}</div>
            <div className="text-xs text-gray-400">Thoma Bravo Acquisition</div>
          </div>
          <div className="bg-gray-900 rounded-xl p-4 border border-gray-800">
            <div className="text-2xl font-bold text-purple-400 mb-1">{company.snapshot.emailCustomers}</div>
            <div className="text-xs text-gray-400">Email Customers</div>
          </div>
          <div className="bg-gray-900 rounded-xl p-4 border border-gray-800">
            <div className="text-2xl font-bold text-white mb-1">{company.snapshot.totalCustomers}</div>
            <div className="text-xs text-gray-400">Total Customers</div>
          </div>
          <div className="bg-gray-900 rounded-xl p-4 border border-gray-800">
            <div className="text-2xl font-bold text-white mb-1">{company.snapshot.employees}</div>
            <div className="text-xs text-gray-400">Employees</div>
          </div>
          <div className="bg-gray-900 rounded-xl p-4 border border-gray-800">
            <div className="text-2xl font-bold text-green-400 mb-1">{company.snapshot.gartnerPosition}</div>
            <div className="text-xs text-gray-400">Gartner MQ 2024/25</div>
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
                      className={`w-full text-left px-3 py-2 rounded-lg text-sm flex items-center gap-2 transition-all ${activeSection === section.id ? 'bg-purple-900/50 text-purple-400 border border-purple-800' : 'text-gray-400 hover:bg-gray-800 hover:text-white'}`}>
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
                    <span className="text-gray-500 block">Valuation</span>
                    <span className="text-purple-400">{company.metrics.valuation}</span>
                  </div>
                  <div>
                    <span className="text-gray-500 block">Email Customers</span>
                    <span className="text-white">{company.metrics.emailCustomers}</span>
                  </div>
                  <div>
                    <span className="text-gray-500 block">Total Customers</span>
                    <span className="text-white">{company.metrics.totalCustomers}</span>
                  </div>
                  <div>
                    <span className="text-gray-500 block">Platform Modules</span>
                    <span className="text-white">{company.metrics.platformModules}</span>
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
                    <div className="flex justify-between"><span className="text-gray-500">Acquisition</span><span className="text-gray-300">{company.companyDetails.acquisition}</span></div>
                    <div className="flex justify-between"><span className="text-gray-500">Employees</span><span className="text-gray-300">{company.companyDetails.employees}</span></div>
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
              <CitationFooter citations={['Darktrace Company Information', 'Thoma Bravo Acquisition Announcement, October 2024', 'Gartner Magic Quadrant 2024']} />
            </section>

            <section id="market" className="bg-gray-900 rounded-xl border border-gray-800 p-6">
              <h2 className="text-xl font-semibold mb-4 flex items-center gap-2"><span>🌍</span> Market Context</h2>
              <div className="bg-gray-800 rounded-lg p-4 mb-4">
                <h3 className="text-sm font-semibold text-gray-400 mb-3">Email Security Hype Cycle Position</h3>
                <HypeCycleSVG />
                <p className="text-xs text-gray-500 text-center mt-2">[1] Gartner Hype Cycle for Security Operations, 2024</p>
              </div>
              <div className="grid md:grid-cols-2 gap-4">
                <div className="bg-purple-900/20 border border-purple-800/50 rounded-lg p-4">
                  <h3 className="text-sm font-semibold text-purple-400 mb-2">Unique Approach</h3>
                  <p className="text-xs text-gray-400">{company.marketContext.uniqueApproach}</p>
                </div>
                <div className="bg-gray-800 rounded-lg p-4">
                  <h3 className="text-sm font-semibold text-white mb-2">Key Differentiator</h3>
                  <p className="text-xs text-gray-400">{company.marketContext.keyDifferentiator}</p>
                </div>
              </div>
              <CitationFooter citations={['Gartner Hype Cycle for Security Operations, 2024', 'Darktrace Self-Learning AI Overview']} />
            </section>

            <section id="product" className="bg-gray-900 rounded-xl border border-gray-800 p-6">
              <h2 className="text-xl font-semibold mb-4 flex items-center gap-2"><span>🎯</span> Product (ActiveAI Security Platform)</h2>
              <p className="text-sm text-gray-400 mb-4">Email is one component of Darktrace's unified security platform - key differentiator is cross-domain correlation.</p>
              <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
                {company.platformComponents.map((component, idx) => (
                  <div key={idx} className={`rounded-lg p-4 border ${component.isPrimary ? 'bg-purple-900/20 border-purple-800/50' : 'bg-gray-800 border-gray-700'}`}>
                    <h3 className="font-medium text-white text-sm">{component.name}</h3>
                    <p className="text-xs text-gray-400 mt-1">{component.description}</p>
                    {component.isPrimary && <span className="text-xs text-purple-400 mt-2 block">Primary Focus</span>}
                  </div>
                ))}
              </div>
              <CitationFooter citations={['Darktrace ActiveAI Platform Documentation']} />
            </section>

            <section id="stakeholders" className="bg-gray-900 rounded-xl border border-gray-800 p-6">
              <h2 className="text-xl font-semibold mb-4 flex items-center gap-2"><span>👥</span> Stakeholders</h2>
              <div className="space-y-4">
                {Object.values(company.stakeholders).map((stakeholder, idx) => (
                  <div key={idx} className="bg-gray-800 rounded-lg p-4">
                    <h3 className="font-medium text-white mb-2">{stakeholder.role}</h3>
                    <p className="text-sm text-purple-400 mb-3">JTBD: {stakeholder.jtbd}</p>
                    <div className="grid md:grid-cols-2 gap-4">
                      <div><span className="text-xs text-gray-500 uppercase">Pain Points</span>{stakeholder.painPoints.map((pain, i) => (<p key={i} className="text-xs text-gray-400 mt-1">• {pain}</p>))}</div>
                      <div><span className="text-xs text-gray-500 uppercase">Value Props</span>{stakeholder.valueProps.map((prop, i) => (<p key={i} className="text-xs text-gray-300 mt-1">• {prop}</p>))}</div>
                    </div>
                  </div>
                ))}
              </div>
              <CitationFooter citations={['Darktrace Customer Case Studies', 'Gartner Voice of the Customer']} />
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
              <CitationFooter citations={['Darktrace Pricing Documentation', 'Industry ROI Analysis']} />
            </section>

            <section id="differentiation" className="bg-gray-900 rounded-xl border border-gray-800 p-6">
              <h2 className="text-xl font-semibold mb-4 flex items-center gap-2"><span>⚡</span> Differentiation</h2>
              <div className="grid md:grid-cols-2 gap-4">
                {company.differentiation.map((diff, idx) => (
                  <div key={idx} className="bg-gray-800 rounded-lg p-4 border-l-2 border-purple-500">
                    <div className="flex items-center gap-2 mb-2"><span className="text-xl">{diff.icon}</span><h3 className="font-medium text-white">{diff.title}</h3></div>
                    <p className="text-sm text-gray-400">{diff.description}</p>
                  </div>
                ))}
              </div>
              <CitationFooter citations={['Darktrace AI Technology White Paper', 'Darktrace Platform Overview']} />
            </section>

            <section id="analysis" className="bg-gray-900 rounded-xl border border-gray-800 p-6">
              <h2 className="text-xl font-semibold mb-4 flex items-center gap-2"><span>📊</span> Analysis</h2>
              <div className="grid md:grid-cols-2 gap-6">
                <div><h3 className="text-sm font-semibold text-green-400 mb-3 flex items-center gap-2"><span>💪</span> Strengths</h3><div className="space-y-2">{company.strengths.map((item, idx) => (<div key={idx} className="flex items-start gap-2 text-sm text-gray-300"><span className="text-green-500 mt-0.5">+</span>{item}</div>))}</div></div>
                <div><h3 className="text-sm font-semibold text-red-400 mb-3 flex items-center gap-2"><span>⚠️</span> Weaknesses</h3><div className="space-y-2">{company.weaknesses.map((item, idx) => (<div key={idx} className="flex items-start gap-2 text-sm text-gray-300"><span className="text-red-500 mt-0.5">-</span>{item}</div>))}</div></div>
              </div>
              <CitationFooter citations={['Gartner Critical Capabilities for Email Security', 'Industry Analyst Reports']} />
            </section>

            <section id="outlook" className="bg-gray-900 rounded-xl border border-gray-800 p-6">
              <h2 className="text-xl font-semibold mb-4 flex items-center gap-2"><span>🔮</span> Outlook</h2>
              <div className="grid md:grid-cols-2 gap-6 mb-6">
                <div><h3 className="text-sm font-semibold text-green-400 mb-3">Tailwinds</h3><div className="space-y-2">{company.outlook.tailwinds.map((item, idx) => (<div key={idx} className="flex items-start gap-2 text-sm text-gray-300"><span className="text-green-500">↑</span>{item}</div>))}</div></div>
                <div><h3 className="text-sm font-semibold text-orange-400 mb-3">Headwinds</h3><div className="space-y-2">{company.outlook.headwinds.map((item, idx) => (<div key={idx} className="flex items-start gap-2 text-sm text-gray-300"><span className="text-orange-500">↓</span>{item}</div>))}</div></div>
              </div>
              <div className="bg-purple-900/20 border border-purple-800/50 rounded-lg p-4"><h3 className="text-sm font-semibold text-purple-400 mb-2">Trajectory</h3><p className="text-sm text-gray-300">{company.outlook.trajectory}</p></div>
              <CitationFooter citations={['Thoma Bravo Investment Thesis', 'Market Analyst Forecasts']} />
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

export default DarktraceEmailProfile;
