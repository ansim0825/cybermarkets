"use client";

import React, { useState } from 'react';

const IronscalesProfile = () => {
  const [activeSection, setActiveSection] = useState('overview');

  const company = {
    name: 'IRONSCALES',
    product: 'IRONSCALES Email Security Platform',
    tagline: '"AI + Human Insights" - combining machine learning with analyst community',
    position: 'AI + Human Insights',
    website: 'https://ironscales.com',
    
    snapshot: {
      customers: '17,000+',
      analystNetwork: '30,000+',
      gartnerRating: '4.8/5',
      startingPrice: '$3.49',
      gartnerPosition: 'Visionary',
    },

    companyDetails: {
      founded: '2013 (Israel)',
      founder: 'Eyal Benishti (CEO)',
      headquarters: 'Atlanta, GA',
      heritage: '8200 EISP Incubator',
      funding: '$95-126M total',
    },

    marketPosition: {
      category: 'Integrated Cloud Email Security (ICES)',
      subCategory: 'AI + Human Insights Platform',
      gartnerPosition: 'Visionary - Gartner MQ 2024',
    },

    recognition: [
      'Gartner Peer Insights 4.8/5 Rating',
      '8200 Intelligence Heritage',
      'First-to-Market Deepfake Protection',
    ],

    metrics: {
      customers: '17,000+',
      analystNetwork: '30,000+',
      mspPartners: '3,500+',
      priceRange: '$3.49-8.33',
    },

    marketContext: {
      hypeCyclePosition: 'Slope of Enlightenment',
      uniqueApproach: 'AI detection enhanced by 30,000+ analyst community feedback loop',
      keyDifferentiator: 'Native SAT integration + federated analyst intelligence network',
    },

    philosophy: {
      core: 'AI alone is insufficient for email security - human insights improve detection.',
      steps: [
        { num: 1, text: 'AI catches most threats — machine learning detects patterns and known-bad indicators' },
        { num: 2, text: 'AI misses novel attacks — zero-day and sophisticated social engineering can evade AI' },
        { num: 3, text: 'Humans see what AI misses — employees have context AI lacks' },
        { num: 4, text: 'Human insights improve AI — reported threats train the AI' },
        { num: 5, text: 'Trained humans report better — SAT reduces false positives' },
      ],
    },

    products: [
      { name: 'Themis AI', description: 'Core AI engine for threat detection', isPrimary: true },
      { name: 'Phishing Simulation', description: 'Native SAT with simulated phishing campaigns', isPrimary: false },
      { name: 'Federation Network', description: '30,000+ analysts providing crowd-sourced intelligence', isPrimary: false },
      { name: 'Deepfake Protection', description: 'Real-time deepfake detection (RSA 2025)', isPrimary: false },
    ],

    stakeholders: {
      ciso: {
        role: 'CISO / Security Leadership',
        jtbd: 'Build security culture while improving detection',
        painPoints: ['User reporting overwhelms SOC', 'SAT and email security disconnected'],
        valueProps: ['Closed-loop SAT + email security', 'User reports improve AI without SOC burden'],
      },
      secops: {
        role: 'Security Operations',
        jtbd: 'Leverage user reports without drowning in false positives',
        painPoints: ['Too many user-reported emails to triage', 'Lack of context for decisions'],
        valueProps: ['AI pre-triages user reports', 'Federation provides crowd-sourced validation'],
      },
      msp: {
        role: 'MSP / MSSP',
        jtbd: 'Deliver email security at scale with margins',
        painPoints: ['Per-customer management overhead', 'Price pressure from clients'],
        valueProps: ['Multi-tenant dashboard', 'White-label options', 'Competitive pricing'],
      },
    },

    economics: {
      pricing: '$3.49 - $8.33/user/month (tiered by feature set)',
      roiDrivers: [
        'Significantly undercuts Abnormal/Proofpoint pricing',
        'Integrated SAT eliminates separate vendor cost',
        'MSP-friendly margins and multi-tenant efficiency',
      ],
      competitivePricing: 'Price leader in ICES category - aggressive vs premium vendors',
    },

    differentiation: [
      { title: 'AI + Human Insights', description: 'Philosophy: AI detection + human reporting + community intelligence = better outcomes.', icon: '🧠' },
      { title: 'Native SAT Integration', description: 'Built-in security awareness training and phishing simulation - not bolted on.', icon: '📚' },
      { title: 'Federation Network', description: '30,000+ security analysts providing crowd-sourced threat intelligence.', icon: '🌐' },
      { title: 'Deepfake Protection', description: 'Industry-first real-time deepfake detection for video/voice (RSA 2025).', icon: '🎭' },
    ],

    strengths: [
      'Integrated SAT + email security platform',
      '30,000+ analyst community provides crowd-sourced intelligence',
      'Price competitive vs. pure-play vendors ($3.49-8.33/user)',
      'Strong MSP/channel ecosystem (3,500+ partners)',
      'First-to-market deepfake protection',
      '8200 intelligence heritage',
    ],

    weaknesses: [
      'Gartner Visionary vs. Leader (perception gap)',
      'Less enterprise penetration than Abnormal/Proofpoint',
      '"AI + Human" requires user participation vs. autonomous',
      'Smaller R&D budget than well-funded competitors',
    ],

    outlook: {
      tailwinds: [
        'SAT + email consolidation trend',
        'MSP market growth',
        'Deepfake concerns increasing',
      ],
      headwinds: [
        'Behavioral AI narrative dominates analyst coverage',
        'Enterprise deals going to better-funded competitors',
        'Platform vendors bundling more capabilities',
      ],
      trajectory: 'Strong mid-market and MSP position. May struggle to move upmarket against Abnormal/Proofpoint.',
    },

    news: [
      { date: 'RSA 2025', title: 'Deepfake Protection Launch', summary: 'Industry-first real-time deepfake detection for video/voice.', type: 'product', source: 'IRONSCALES RSA Announcement' },
      { date: '2024', title: 'Gartner Visionary', summary: 'Named Visionary in Email Security Platforms Magic Quadrant.', type: 'recognition', source: 'Gartner Magic Quadrant 2024' },
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
      case 'product': return 'bg-blue-900/50 text-blue-400 border-blue-700';
      case 'recognition': return 'bg-green-900/50 text-green-400 border-green-700';
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
        <linearGradient id="curveGradientIS" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" stopColor="#8b5cf6" stopOpacity="0.8" />
          <stop offset="50%" stopColor="#06b6d4" stopOpacity="0.8" />
          <stop offset="100%" stopColor="#10b981" stopOpacity="0.8" />
        </linearGradient>
      </defs>
      <path d="M 30 180 Q 80 180 100 160 Q 120 140 140 60 Q 160 20 180 40 Q 200 60 220 120 Q 260 160 300 150 Q 340 140 380 130 Q 420 120 470 110" stroke="url(#curveGradientIS)" strokeWidth="3" fill="none" />
      <circle cx="140" cy="60" r="6" fill="#f97316" stroke="#fff" strokeWidth="2" />
      <text x="140" y="45" textAnchor="middle" fill="#f97316" fontSize="10" fontWeight="bold">GenAI Email</text>
      <circle cx="330" cy="145" r="8" fill="#f97316" stroke="#fff" strokeWidth="2" />
      <text x="330" y="130" textAnchor="middle" fill="#f97316" fontSize="10" fontWeight="bold">AI + Human ICES</text>
      <text x="330" y="170" textAnchor="middle" fill="#9ca3af" fontSize="8">(IRONSCALES)</text>
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
              <span className="text-gray-300">IRONSCALES</span>
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
                <span className="px-3 py-1 bg-orange-900/50 text-orange-400 border border-orange-700 rounded-full text-sm">{company.position}</span>
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
            <div className="text-2xl font-bold text-white mb-1">{company.snapshot.customers}</div>
            <div className="text-xs text-gray-400">Customers</div>
          </div>
          <div className="bg-gray-900 rounded-xl p-4 border border-gray-800">
            <div className="text-2xl font-bold text-orange-400 mb-1">{company.snapshot.analystNetwork}</div>
            <div className="text-xs text-gray-400">Analyst Network</div>
          </div>
          <div className="bg-gray-900 rounded-xl p-4 border border-gray-800">
            <div className="text-2xl font-bold text-white mb-1">{company.snapshot.gartnerRating}</div>
            <div className="text-xs text-gray-400">Gartner Rating</div>
          </div>
          <div className="bg-gray-900 rounded-xl p-4 border border-gray-800">
            <div className="text-2xl font-bold text-green-400 mb-1">{company.snapshot.startingPrice}</div>
            <div className="text-xs text-gray-400">Starting Price</div>
          </div>
          <div className="bg-gray-900 rounded-xl p-4 border border-gray-800">
            <div className="text-2xl font-bold text-amber-400 mb-1">{company.snapshot.gartnerPosition}</div>
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
                      className={`w-full text-left px-3 py-2 rounded-lg text-sm flex items-center gap-2 transition-all ${activeSection === section.id ? 'bg-orange-900/50 text-orange-400 border border-orange-800' : 'text-gray-400 hover:bg-gray-800 hover:text-white'}`}>
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
                    <span className="text-gray-500 block">Customers</span>
                    <span className="text-orange-400">{company.metrics.customers}</span>
                  </div>
                  <div>
                    <span className="text-gray-500 block">Analyst Network</span>
                    <span className="text-white">{company.metrics.analystNetwork}</span>
                  </div>
                  <div>
                    <span className="text-gray-500 block">MSP Partners</span>
                    <span className="text-white">{company.metrics.mspPartners}</span>
                  </div>
                  <div>
                    <span className="text-gray-500 block">Price/User</span>
                    <span className="text-green-400">{company.metrics.priceRange}</span>
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
                    <div className="flex justify-between"><span className="text-gray-500">Founder/CEO</span><span className="text-gray-300">{company.companyDetails.founder}</span></div>
                    <div className="flex justify-between"><span className="text-gray-500">Headquarters</span><span className="text-gray-300">{company.companyDetails.headquarters}</span></div>
                    <div className="flex justify-between"><span className="text-gray-500">Heritage</span><span className="text-gray-300">{company.companyDetails.heritage}</span></div>
                    <div className="flex justify-between"><span className="text-gray-500">Total Funding</span><span className="text-gray-300">{company.companyDetails.funding}</span></div>
                  </div>
                </div>
                <div>
                  <h3 className="text-sm font-semibold text-gray-400 mb-3">Market Position</h3>
                  <div className="space-y-2 text-sm">
                    <div className="flex justify-between"><span className="text-gray-500">Category</span><span className="text-gray-300">{company.marketPosition.category}</span></div>
                    <div className="flex justify-between"><span className="text-gray-500">Sub-Category</span><span className="text-gray-300">{company.marketPosition.subCategory}</span></div>
                    <div><span className="text-gray-500 block mb-1">Gartner Position</span><span className="text-amber-400 text-xs">{company.marketPosition.gartnerPosition}</span></div>
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
              <CitationFooter citations={['IRONSCALES Company Information', 'Crunchbase Funding History', 'Gartner Magic Quadrant 2024']} />
            </section>

            <section id="market" className="bg-gray-900 rounded-xl border border-gray-800 p-6">
              <h2 className="text-xl font-semibold mb-4 flex items-center gap-2"><span>🌍</span> Market Context</h2>
              <div className="bg-gray-800 rounded-lg p-4 mb-4">
                <h3 className="text-sm font-semibold text-gray-400 mb-3">Email Security Hype Cycle Position</h3>
                <HypeCycleSVG />
                <p className="text-xs text-gray-500 text-center mt-2">[1] Gartner Hype Cycle for Security Operations, 2024</p>
              </div>
              <div className="grid md:grid-cols-2 gap-4 mb-4">
                <div className="bg-orange-900/20 border border-orange-800/50 rounded-lg p-4">
                  <h3 className="text-sm font-semibold text-orange-400 mb-2">Unique Approach</h3>
                  <p className="text-xs text-gray-400">{company.marketContext.uniqueApproach}</p>
                </div>
                <div className="bg-gray-800 rounded-lg p-4">
                  <h3 className="text-sm font-semibold text-white mb-2">Key Differentiator</h3>
                  <p className="text-xs text-gray-400">{company.marketContext.keyDifferentiator}</p>
                </div>
              </div>
              <div className="bg-orange-900/20 border border-orange-800/50 rounded-lg p-4">
                <h3 className="text-sm font-semibold text-orange-400 mb-3">The "AI + Human Insights" Philosophy</h3>
                <p className="text-xs text-gray-400 mb-3">{company.philosophy.core}</p>
                <div className="space-y-2">
                  {company.philosophy.steps.map((step) => (
                    <div key={step.num} className="flex gap-3 items-start">
                      <div className="w-6 h-6 bg-orange-500/20 rounded-full flex items-center justify-center flex-shrink-0">
                        <span className="text-orange-400 font-bold text-xs">{step.num}</span>
                      </div>
                      <p className="text-xs text-gray-300">{step.text}</p>
                    </div>
                  ))}
                </div>
              </div>
              <CitationFooter citations={['Gartner Hype Cycle for Security Operations, 2024', 'IRONSCALES Product Philosophy']} />
            </section>

            <section id="product" className="bg-gray-900 rounded-xl border border-gray-800 p-6">
              <h2 className="text-xl font-semibold mb-4 flex items-center gap-2"><span>🎯</span> Product</h2>
              <div className="grid md:grid-cols-2 gap-3">
                {company.products.map((product, idx) => (
                  <div key={idx} className={`rounded-lg p-4 border ${product.isPrimary ? 'bg-orange-900/20 border-orange-800/50' : 'bg-gray-800 border-gray-700'}`}>
                    <h3 className="font-medium text-white text-sm">{product.name}</h3>
                    <p className="text-xs text-gray-400 mt-1">{product.description}</p>
                    {product.isPrimary && <span className="text-xs text-orange-400 mt-2 block">Core Engine</span>}
                  </div>
                ))}
              </div>
              <CitationFooter citations={['IRONSCALES Product Documentation']} />
            </section>

            <section id="stakeholders" className="bg-gray-900 rounded-xl border border-gray-800 p-6">
              <h2 className="text-xl font-semibold mb-4 flex items-center gap-2"><span>👥</span> Stakeholders</h2>
              <div className="space-y-4">
                {Object.values(company.stakeholders).map((stakeholder, idx) => (
                  <div key={idx} className="bg-gray-800 rounded-lg p-4">
                    <h3 className="font-medium text-white mb-2">{stakeholder.role}</h3>
                    <p className="text-sm text-orange-400 mb-3">JTBD: {stakeholder.jtbd}</p>
                    <div className="grid md:grid-cols-2 gap-4">
                      <div><span className="text-xs text-gray-500 uppercase">Pain Points</span>{stakeholder.painPoints.map((pain, i) => (<p key={i} className="text-xs text-gray-400 mt-1">• {pain}</p>))}</div>
                      <div><span className="text-xs text-gray-500 uppercase">Value Props</span>{stakeholder.valueProps.map((prop, i) => (<p key={i} className="text-xs text-gray-300 mt-1">• {prop}</p>))}</div>
                    </div>
                  </div>
                ))}
              </div>
              <CitationFooter citations={['IRONSCALES Customer Case Studies', 'MSP Partner Program']} />
            </section>

            <section id="economics" className="bg-gray-900 rounded-xl border border-gray-800 p-6">
              <h2 className="text-xl font-semibold mb-4 flex items-center gap-2"><span>💰</span> Economics</h2>
              <div className="grid md:grid-cols-2 gap-4 mb-4">
                <div className="bg-green-900/20 border border-green-800/50 rounded-lg p-4"><h3 className="text-sm font-semibold text-green-400 mb-2">Pricing Model</h3><p className="text-lg text-white font-bold">{company.economics.pricing}</p></div>
                <div className="bg-gray-800 rounded-lg p-4"><h3 className="text-sm font-semibold text-gray-400 mb-2">Market Position</h3><p className="text-sm text-white">{company.economics.competitivePricing}</p></div>
              </div>
              <div className="bg-green-900/20 border border-green-800/50 rounded-lg p-4">
                <h3 className="text-sm font-semibold text-green-400 mb-2">ROI Drivers</h3>
                {company.economics.roiDrivers.map((driver, idx) => (<p key={idx} className="text-xs text-gray-300 mt-1">• {driver}</p>))}
              </div>
              <CitationFooter citations={['IRONSCALES Pricing Information', 'Industry ROI Analysis']} />
            </section>

            <section id="differentiation" className="bg-gray-900 rounded-xl border border-gray-800 p-6">
              <h2 className="text-xl font-semibold mb-4 flex items-center gap-2"><span>⚡</span> Differentiation</h2>
              <div className="grid md:grid-cols-2 gap-4">
                {company.differentiation.map((diff, idx) => (
                  <div key={idx} className="bg-gray-800 rounded-lg p-4 border-l-2 border-orange-500">
                    <div className="flex items-center gap-2 mb-2"><span className="text-xl">{diff.icon}</span><h3 className="font-medium text-white">{diff.title}</h3></div>
                    <p className="text-sm text-gray-400">{diff.description}</p>
                  </div>
                ))}
              </div>
              <CitationFooter citations={['IRONSCALES Product Documentation', 'IRONSCALES RSA 2025 Announcements']} />
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
              <div className="bg-orange-900/20 border border-orange-800/50 rounded-lg p-4"><h3 className="text-sm font-semibold text-orange-400 mb-2">Trajectory</h3><p className="text-sm text-gray-300">{company.outlook.trajectory}</p></div>
              <CitationFooter citations={['Market Analyst Forecasts', 'Industry Trends Analysis']} />
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

export default IronscalesProfile;
