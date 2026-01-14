"use client";

import React, { useState } from 'react';

const KnowBe4Profile = () => {
  const [activeSection, setActiveSection] = useState('overview');

  const company = {
    name: 'KnowBe4',
    product: 'Defend (Egress) + KSAT',
    tagline: 'SAT leader transformed into Human Risk Management platform',
    position: 'Human Risk Management',
    website: 'https://www.knowbe4.com',
    
    snapshot: {
      vistaValuation: '$4.6B',
      satCustomers: '70,000+',
      trainingModules: '1,300+',
      employees: '2,000+',
      gartnerPosition: 'Leader',
    },

    companyDetails: {
      founded: '2010 by Stu Sjouwerman',
      ceo: 'Bryan Palma (May 2025)',
      headquarters: 'Clearwater, FL',
      ownership: 'Vista Equity Partners ($4.6B, Feb 2023)',
      employees: '2,000+',
    },

    marketPosition: {
      category: 'Human Risk Management (HRM)',
      subCategory: 'SAT + Email Security Platform',
      gartnerPosition: 'Leader - Gartner MQ (2024, 2025)',
    },

    recognition: [
      'Gartner Magic Quadrant Leader 2024, 2025',
      '70,000+ SAT Customers Worldwide',
      'First ICES Vendor in Microsoft Ecosystem (June 2025)',
    ],

    metrics: {
      satCustomers: '70,000+',
      trainingModules: '1,300+',
      employees: '2,000+',
      vistaValuation: '$4.6B',
    },

    marketContext: {
      hypeCyclePosition: 'Slope of Enlightenment',
      strategicShift: 'SAT leader acquiring email security to become Human Risk Management platform',
      keyDifferentiator: 'Closed-loop: real email threats automatically inform personalized training',
    },

    egressAcquisition: {
      date: 'April 2024',
      target: 'Egress',
      egressFounding: '2007 (London)',
      egressFounder: 'Tony Pepper (ex-Check Point)',
      rationale: 'Add email security to SAT platform for unified Human Risk Management.',
    },

    products: [
      { name: 'KnowBe4 Defend', description: 'AI-powered inbound email threat protection (formerly Egress Defend)', type: 'Inbound', isPrimary: true },
      { name: 'KnowBe4 Prevent', description: 'Behavioral DLP for misdirected email and data loss prevention', type: 'Outbound DLP', isPrimary: false },
      { name: 'KnowBe4 Protect', description: 'Email encryption and secure messaging', type: 'Encryption', isPrimary: false },
      { name: 'KSAT', description: 'Security Awareness Training with 1,300+ modules', type: 'SAT', isPrimary: false },
    ],

    stakeholders: {
      ciso: {
        role: 'CISO / Security Leadership',
        jtbd: 'Reduce human risk with unified platform',
        painPoints: ['Disconnected SAT and email security', 'Measuring actual risk reduction'],
        valueProps: ['Closed-loop training from real threats', 'Unified human risk scoring'],
      },
      secops: {
        role: 'Security Operations',
        jtbd: 'Automate response to human-targeted threats',
        painPoints: ['Manual correlation of email threats and training needs', 'Separate vendor workflows'],
        valueProps: ['Automated training triggers from incidents', 'Single pane of glass'],
      },
      trainingAdmin: {
        role: 'Security Awareness Manager',
        jtbd: 'Deliver relevant, engaging training at scale',
        painPoints: ['Generic training content', 'Measuring effectiveness'],
        valueProps: ['1,300+ training modules', 'Real threat data drives relevance'],
      },
    },

    economics: {
      pricing: 'Platform bundle pricing (SAT + email security)',
      roiDrivers: [
        '70,000 SAT customers for cross-sell',
        'Closed-loop value: threats inform training',
        'Platform consolidation savings vs. separate vendors',
      ],
      competitivePricing: 'Bundle pricing competitive vs. separate SAT + email security vendors',
    },

    strategicRationale: [
      { point: 'Closed-Loop Training', detail: 'Real email threats automatically inform personalized training recommendations.' },
      { point: 'Unified Human Risk', detail: 'Combined risk scoring across phishing simulation, training, and email threats.' },
      { point: 'Platform Cross-Sell', detail: '70,000 SAT customers represent massive email security expansion opportunity.' },
      { point: 'Outbound DLP', detail: 'Egress adds misdirected email and data loss prevention - complements inbound focus.' },
    ],

    differentiation: [
      { title: '70K Customer Base', description: 'Massive SAT customer base for email security cross-sell. Built-in distribution.', icon: '👥' },
      { title: 'Closed-Loop Platform', description: 'Real email threats automatically trigger relevant training. Unique feedback loop.', icon: '🔄' },
      { title: 'Microsoft Partnership', description: 'First ICES vendor in Microsoft security ecosystem program (June 2025).', icon: '🤝' },
      { title: 'Outbound DLP', description: 'Egress adds misdirected email protection - most ICES vendors ignore outbound.', icon: '📤' },
    ],

    strengths: [
      '70,000+ SAT customers for cross-sell',
      'Integrated platform: SAT + email + coaching',
      'Closed-loop value: threats inform training',
      'Vista Equity backing and resources',
      'Gartner Leader recognition',
      'First ICES vendor in Microsoft ecosystem (June 2025)',
    ],

    weaknesses: [
      'Email security via acquisition, not native',
      'Egress integration still maturing',
      'Email is add-on, not core focus',
      'Less email-specific innovation than pure-play',
      'M365 focus - weaker on Google Workspace',
    ],

    outlook: {
      tailwinds: [
        'SAT + email consolidation trend',
        'Human Risk Management narrative gaining traction',
        'Microsoft partnership momentum',
      ],
      headwinds: [
        'Pure-play email vendors winning email-specific deals',
        'Integration complexity post-acquisition',
        'Premium pricing when bundled',
      ],
      trajectory: 'Platform play succeeds if integration matures. Risk: email becomes "good enough" add-on vs. best-of-breed.',
    },

    news: [
      { date: 'Apr 2024', title: 'Egress Acquisition', summary: 'Acquired Egress to add cloud email security capabilities.', type: 'acquisition', source: 'KnowBe4 Press Release' },
      { date: 'Jun 2025', title: 'Microsoft Ecosystem Program', summary: 'First ICES vendor in Microsoft security ecosystem program.', type: 'partnership', source: 'Microsoft Security Blog' },
      { date: 'May 2025', title: 'New CEO Bryan Palma', summary: 'Bryan Palma appointed CEO, founder Stu Sjouwerman to Chairman.', type: 'leadership', source: 'KnowBe4 Press Release' },
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
      case 'partnership': return 'bg-blue-900/50 text-blue-400 border-blue-700';
      case 'leadership': return 'bg-amber-900/50 text-amber-400 border-amber-700';
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
        <linearGradient id="curveGradientKB4" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" stopColor="#8b5cf6" stopOpacity="0.8" />
          <stop offset="50%" stopColor="#06b6d4" stopOpacity="0.8" />
          <stop offset="100%" stopColor="#10b981" stopOpacity="0.8" />
        </linearGradient>
      </defs>
      <path d="M 30 180 Q 80 180 100 160 Q 120 140 140 60 Q 160 20 180 40 Q 200 60 220 120 Q 260 160 300 150 Q 340 140 380 130 Q 420 120 470 110" stroke="url(#curveGradientKB4)" strokeWidth="3" fill="none" />
      <circle cx="140" cy="60" r="6" fill="#f97316" stroke="#fff" strokeWidth="2" />
      <text x="140" y="45" textAnchor="middle" fill="#f97316" fontSize="10" fontWeight="bold">GenAI Email</text>
      <circle cx="340" cy="140" r="8" fill="#f59e0b" stroke="#fff" strokeWidth="2" />
      <text x="340" y="125" textAnchor="middle" fill="#f59e0b" fontSize="10" fontWeight="bold">HRM Platform</text>
      <text x="340" y="165" textAnchor="middle" fill="#9ca3af" fontSize="8">(KnowBe4)</text>
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
              <span className="text-gray-300">KnowBe4</span>
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
                <span className="px-3 py-1 bg-amber-900/50 text-amber-400 border border-amber-700 rounded-full text-sm">{company.position}</span>
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
            <div className="text-2xl font-bold text-white mb-1">{company.snapshot.vistaValuation}</div>
            <div className="text-xs text-gray-400">Vista Acquisition</div>
          </div>
          <div className="bg-gray-900 rounded-xl p-4 border border-gray-800">
            <div className="text-2xl font-bold text-amber-400 mb-1">{company.snapshot.satCustomers}</div>
            <div className="text-xs text-gray-400">SAT Customers</div>
          </div>
          <div className="bg-gray-900 rounded-xl p-4 border border-gray-800">
            <div className="text-2xl font-bold text-white mb-1">{company.snapshot.trainingModules}</div>
            <div className="text-xs text-gray-400">Training Modules</div>
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
                      className={`w-full text-left px-3 py-2 rounded-lg text-sm flex items-center gap-2 transition-all ${activeSection === section.id ? 'bg-amber-900/50 text-amber-400 border border-amber-800' : 'text-gray-400 hover:bg-gray-800 hover:text-white'}`}>
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
                    <span className="text-gray-500 block">SAT Customers</span>
                    <span className="text-amber-400">{company.metrics.satCustomers}</span>
                  </div>
                  <div>
                    <span className="text-gray-500 block">Training Modules</span>
                    <span className="text-white">{company.metrics.trainingModules}</span>
                  </div>
                  <div>
                    <span className="text-gray-500 block">Employees</span>
                    <span className="text-white">{company.metrics.employees}</span>
                  </div>
                  <div>
                    <span className="text-gray-500 block">Vista Valuation</span>
                    <span className="text-white">{company.metrics.vistaValuation}</span>
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
                    <div className="flex justify-between"><span className="text-gray-500">CEO</span><span className="text-gray-300">{company.companyDetails.ceo}</span></div>
                    <div className="flex justify-between"><span className="text-gray-500">Headquarters</span><span className="text-gray-300">{company.companyDetails.headquarters}</span></div>
                    <div className="flex justify-between"><span className="text-gray-500">Ownership</span><span className="text-gray-300">{company.companyDetails.ownership}</span></div>
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
              <CitationFooter citations={['Vista Equity Partners Acquisition Announcement, Feb 2023', 'KnowBe4 Company Information', 'Gartner Magic Quadrant 2024']} />
            </section>

            <section id="market" className="bg-gray-900 rounded-xl border border-gray-800 p-6">
              <h2 className="text-xl font-semibold mb-4 flex items-center gap-2"><span>🌍</span> Market Context</h2>
              <div className="bg-gray-800 rounded-lg p-4 mb-4">
                <h3 className="text-sm font-semibold text-gray-400 mb-3">Email Security Hype Cycle Position</h3>
                <HypeCycleSVG />
                <p className="text-xs text-gray-500 text-center mt-2">[1] Gartner Hype Cycle for Security Operations, 2024</p>
              </div>
              <div className="grid md:grid-cols-2 gap-4 mb-4">
                <div className="bg-amber-900/20 border border-amber-800/50 rounded-lg p-4">
                  <h3 className="text-sm font-semibold text-amber-400 mb-2">Strategic Shift</h3>
                  <p className="text-xs text-gray-400">{company.marketContext.strategicShift}</p>
                </div>
                <div className="bg-gray-800 rounded-lg p-4">
                  <h3 className="text-sm font-semibold text-white mb-2">Key Differentiator</h3>
                  <p className="text-xs text-gray-400">{company.marketContext.keyDifferentiator}</p>
                </div>
              </div>
              <div className="bg-purple-900/20 border border-purple-800/50 rounded-lg p-4">
                <h3 className="text-sm font-semibold text-purple-400 mb-3">Egress Acquisition ({company.egressAcquisition.date})</h3>
                <div className="grid md:grid-cols-2 gap-4 text-xs">
                  <div>
                    <p className="text-gray-400"><span className="text-gray-500">Target:</span> {company.egressAcquisition.target}</p>
                    <p className="text-gray-400"><span className="text-gray-500">Founded:</span> {company.egressAcquisition.egressFounding}</p>
                    <p className="text-gray-400"><span className="text-gray-500">Founder:</span> {company.egressAcquisition.egressFounder}</p>
                  </div>
                  <div>
                    <p className="text-gray-300">{company.egressAcquisition.rationale}</p>
                  </div>
                </div>
              </div>
              <CitationFooter citations={['Gartner Hype Cycle for Security Operations, 2024', 'KnowBe4 Egress Acquisition Press Release, April 2024']} />
            </section>

            <section id="product" className="bg-gray-900 rounded-xl border border-gray-800 p-6">
              <h2 className="text-xl font-semibold mb-4 flex items-center gap-2"><span>🎯</span> Product (Egress + KSAT)</h2>
              <div className="grid md:grid-cols-2 gap-3 mb-4">
                {company.products.map((product, idx) => (
                  <div key={idx} className={`rounded-lg p-4 border ${product.isPrimary ? 'bg-amber-900/20 border-amber-800/50' : 'bg-gray-800 border-gray-700'}`}>
                    <div className="flex justify-between items-start">
                      <h3 className="font-medium text-white text-sm">{product.name}</h3>
                      <span className={`text-xs px-2 py-0.5 rounded ${product.type === 'Inbound' ? 'bg-cyan-900/50 text-cyan-400' : product.type === 'SAT' ? 'bg-amber-900/50 text-amber-400' : 'bg-gray-700 text-gray-400'}`}>{product.type}</span>
                    </div>
                    <p className="text-xs text-gray-400 mt-1">{product.description}</p>
                  </div>
                ))}
              </div>
              <div className="bg-green-900/20 border border-green-800/50 rounded-lg p-4">
                <h3 className="text-sm font-semibold text-green-400 mb-3">Strategic Rationale</h3>
                <div className="grid md:grid-cols-2 gap-3">
                  {company.strategicRationale.map((item, idx) => (
                    <div key={idx} className="text-xs">
                      <span className="text-white font-medium">{item.point}:</span>
                      <p className="text-gray-400 mt-1">{item.detail}</p>
                    </div>
                  ))}
                </div>
              </div>
              <CitationFooter citations={['KnowBe4 Product Documentation', 'KnowBe4 Strategic Communications']} />
            </section>

            <section id="stakeholders" className="bg-gray-900 rounded-xl border border-gray-800 p-6">
              <h2 className="text-xl font-semibold mb-4 flex items-center gap-2"><span>👥</span> Stakeholders</h2>
              <div className="space-y-4">
                {Object.values(company.stakeholders).map((stakeholder, idx) => (
                  <div key={idx} className="bg-gray-800 rounded-lg p-4">
                    <h3 className="font-medium text-white mb-2">{stakeholder.role}</h3>
                    <p className="text-sm text-amber-400 mb-3">JTBD: {stakeholder.jtbd}</p>
                    <div className="grid md:grid-cols-2 gap-4">
                      <div><span className="text-xs text-gray-500 uppercase">Pain Points</span>{stakeholder.painPoints.map((pain, i) => (<p key={i} className="text-xs text-gray-400 mt-1">• {pain}</p>))}</div>
                      <div><span className="text-xs text-gray-500 uppercase">Value Props</span>{stakeholder.valueProps.map((prop, i) => (<p key={i} className="text-xs text-gray-300 mt-1">• {prop}</p>))}</div>
                    </div>
                  </div>
                ))}
              </div>
              <CitationFooter citations={['KnowBe4 Customer Case Studies', 'Gartner Voice of the Customer']} />
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
              <CitationFooter citations={['KnowBe4 Pricing Information', 'Industry ROI Analysis']} />
            </section>

            <section id="differentiation" className="bg-gray-900 rounded-xl border border-gray-800 p-6">
              <h2 className="text-xl font-semibold mb-4 flex items-center gap-2"><span>⚡</span> Differentiation</h2>
              <div className="grid md:grid-cols-2 gap-4">
                {company.differentiation.map((diff, idx) => (
                  <div key={idx} className="bg-gray-800 rounded-lg p-4 border-l-2 border-amber-500">
                    <div className="flex items-center gap-2 mb-2"><span className="text-xl">{diff.icon}</span><h3 className="font-medium text-white">{diff.title}</h3></div>
                    <p className="text-sm text-gray-400">{diff.description}</p>
                  </div>
                ))}
              </div>
              <CitationFooter citations={['KnowBe4 Product Documentation', 'Microsoft Security Blog, June 2025']} />
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
              <div className="bg-amber-900/20 border border-amber-800/50 rounded-lg p-4"><h3 className="text-sm font-semibold text-amber-400 mb-2">Trajectory</h3><p className="text-sm text-gray-300">{company.outlook.trajectory}</p></div>
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

export default KnowBe4Profile;
