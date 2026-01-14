"use client";

import React, { useState } from 'react';

const FortinetProfile = () => {
  const [activeSection, setActiveSection] = useState('overview');

  const company = {
    name: 'Fortinet',
    product: 'FortiMail Email and Workspace Security',
    tagline: 'Broadest, most customizable AI-powered email security platform',
    position: 'Security Fabric Challenger',
    website: 'https://www.fortinet.com',
    
    snapshot: {
      revenue: '$5.96B',
      employees: '14,000+',
      customers: '500,000+',
      gartnerPosition: 'Challenger',
      mqRecognition: '12 MQs',
    },

    companyDetails: {
      founded: '2000',
      founders: 'Ken Xie, Michael Xie',
      headquarters: 'Sunnyvale, California',
      ceo: 'Ken Xie (Founder, Chairman, CEO)',
      ownership: 'Public (NASDAQ: FTNT)',
    },

    marketPosition: {
      category: 'Email Security + Network Security Platform',
      subCategory: 'Security Fabric Integrated Email',
      gartnerPosition: 'Challenger - Gartner MQ Email Security (2025)',
    },

    recognition: [
      'Gartner MQ Challenger - Email Security 2025',
      'Gartner MQ Leader - Hybrid Mesh Firewall',
      'Gartner MQ Leader - SASE Platforms',
      'Recognized in 12 Gartner Magic Quadrants',
    ],

    metrics: {
      revenue: '$5.96B',
      saseARR: '$1.12B',
      customers: '500,000+',
      secOpsARR: '$422M',
    },

    marketContext: {
      hypeCyclePosition: 'Slope of Enlightenment (expanding platform)',
      uniqueApproach: 'Email as component of unified Security Fabric - broadest deployment flexibility',
      keyDifferentiator: 'Multiple deployment modes (gateway, server, ICES, hybrid) with ASIC-powered performance',
    },

    platformStrategy: {
      platformName: 'Fortinet Security Fabric',
      description: 'AI-powered cybersecurity platform converging networking and security across 50+ products',
      pillars: [
        { name: 'Email & Workspace Security', isPrimary: true },
        { name: 'Secure Networking (FortiGate)', isPrimary: false },
        { name: 'Unified SASE', isPrimary: false },
        { name: 'Security Operations', isPrimary: false },
        { name: 'Cloud Security', isPrimary: false },
        { name: 'Endpoint Security', isPrimary: false },
      ],
      attachRate: 'Security Fabric consolidation driving growth',
    },

    acquisitionHighlight: {
      company: 'Perception Point',
      date: 'December 2024',
      value: '~$100M (reported)',
      significance: 'Gartner Visionary (2024 MQ) - expands ICES and collaboration security capabilities',
      capabilities: 'AI-powered email, browser, Slack/Teams, cloud storage protection',
    },

    emailCapabilities: [
      { name: 'Multi-Mode Deployment', description: 'Gateway, server, ICES, hybrid - appliance, VM, hosted, SaaS' },
      { name: 'AI-Powered Threat Detection', description: 'Phishing, BEC, malware, ransomware, zero-day protection' },
      { name: 'FortiSandbox Integration', description: 'Advanced threat analysis with sandbox detonation' },
      { name: 'Collaboration Security', description: 'M365, Teams, Google Workspace, Slack via Perception Point' },
      { name: 'Browser Security', description: 'Web-borne attack protection integrated into workspace suite' },
      { name: 'DLP & Compliance', description: 'Data loss prevention with FortiDLP integration' },
    ],

    stakeholders: {
      ciso: {
        role: 'CISO / Security Leadership',
        jtbd: 'Consolidate security tools into unified platform with consistent policies',
        painPoints: ['Managing dozens of point solutions', 'Inconsistent security policies across domains'],
        valueProps: ['Security Fabric consolidation', 'Single vendor for network + email + cloud', 'FortiOS everywhere'],
      },
      secops: {
        role: 'Security Operations / SOC',
        jtbd: 'Unified visibility and response across all attack vectors',
        painPoints: ['Context switching between tools', 'Alert fatigue from siloed products'],
        valueProps: ['FortiAnalyzer centralized logging', 'FortiSOAR automation', 'Integrated incident response'],
      },
      itAdmin: {
        role: 'IT Admin / Network Admin',
        jtbd: 'Deploy and manage email security with flexibility for any environment',
        painPoints: ['Limited deployment options', 'Complex migrations'],
        valueProps: ['Most flexible deployment modes', 'Highly configurable UI', 'On-prem to cloud options'],
      },
    },

    economics: {
      pricing: 'Perpetual license or subscription + FortiGuard services',
      roiDrivers: [
        'Platform consolidation reduces TCO',
        'ASIC-powered performance reduces hardware needs',
        'Single vendor simplifies procurement and support',
      ],
      competitivePricing: 'Competitive vs. pure-play vendors; value in Security Fabric bundle',
    },

    differentiation: [
      { title: 'Deployment Flexibility', description: 'Gateway, server, ICES, or hybrid modes across appliance, VM, hosted, or SaaS.', icon: '🔧' },
      { title: 'Security Fabric Integration', description: 'Email threats correlated with firewall, endpoint, SASE, and cloud telemetry.', icon: '🔗' },
      { title: 'ASIC Performance', description: 'Custom ASICs deliver high-performance security without latency trade-offs.', icon: '⚡' },
      { title: 'Perception Point AI', description: 'Advanced AI-powered detection for email, browsers, and collaboration tools.', icon: '🤖' },
    ],

    strengths: [
      'Recognized in 12 Gartner Magic Quadrants - broadest platform validation',
      'Perception Point acquisition adds Gartner Visionary ICES capabilities',
      'Most flexible email deployment options in the market',
      'Security Fabric integration provides cross-layer correlation',
      '$5.96B revenue, $50B+ market cap - strong financial foundation',
      'ASIC-powered performance for high-throughput environments',
      'Unified SASE ARR growing 28% YoY ($1.12B)',
      'FortiOS single operating system across all form factors',
    ],

    weaknesses: [
      'Email security not historically core competency (network-first heritage)',
      'Gartner Challenger position vs. Leaders like Microsoft, Proofpoint',
      'Perception Point integration still maturing (acquired Dec 2024)',
      'Less specialized behavioral AI than pure-play vendors (Abnormal)',
      'Complexity of full Security Fabric may overwhelm email-only buyers',
      'Brand perception as firewall company, not email specialist',
    ],

    outlook: {
      tailwinds: [
        'Platform consolidation trend favors unified vendors',
        'Perception Point adds modern ICES and collaboration capabilities',
        'Strong financial results: +17% Q4 2024 revenue growth',
        'Unified SASE and SecOps ARR growing 28-32% YoY',
      ],
      headwinds: [
        'Pure-play email specialists have deeper detection capabilities',
        'Gartner Challenger position requires more market proof',
        'Integration timeline for Perception Point acquisition',
        'Enterprise focus may limit SMB traction',
      ],
      trajectory: 'Fortinet is executing on workspace security expansion via Perception Point. The Security Fabric strategy positions them well for organizations seeking consolidation. Email security will benefit from platform momentum, but must prove detection efficacy vs. specialized vendors.',
    },

    news: [
      { date: 'Dec 2025', title: 'Gartner MQ Challenger - Email Security', summary: 'Named Challenger in 2025 Gartner Magic Quadrant for Email Security.', type: 'recognition', source: 'Gartner' },
      { date: 'Jun 2025', title: 'FortiMail Workspace Security Launch', summary: 'Unveiled AI-powered workspace security suite integrating Perception Point capabilities.', type: 'product', source: 'Fortinet' },
      { date: 'Feb 2025', title: 'FY2024 Results: $5.96B Revenue', summary: '+12.3% YoY revenue. Record 39% non-GAAP operating margin in Q4.', type: 'milestone', source: 'Fortinet Earnings' },
      { date: 'Dec 2024', title: 'Perception Point Acquisition', summary: 'Acquired Israeli email and collaboration security company for ~$100M.', type: 'acquisition', source: 'SecurityWeek' },
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
      case 'acquisition': return 'bg-purple-900/50 text-purple-400 border-purple-700';
      case 'product': return 'bg-cyan-900/50 text-cyan-400 border-cyan-700';
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
        <linearGradient id="curveGradientFortinet" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" stopColor="#8b5cf6" stopOpacity="0.8" />
          <stop offset="50%" stopColor="#06b6d4" stopOpacity="0.8" />
          <stop offset="100%" stopColor="#10b981" stopOpacity="0.8" />
        </linearGradient>
      </defs>
      <path d="M 30 180 Q 80 180 100 160 Q 120 140 140 60 Q 160 20 180 40 Q 200 60 220 120 Q 260 160 300 150 Q 340 140 380 130 Q 420 120 470 110" stroke="url(#curveGradientFortinet)" strokeWidth="3" fill="none" />
      <circle cx="140" cy="60" r="6" fill="#f97316" stroke="#fff" strokeWidth="2" />
      <text x="140" y="45" textAnchor="middle" fill="#f97316" fontSize="10" fontWeight="bold">GenAI Email</text>
      <circle cx="320" cy="145" r="8" fill="#ef4444" stroke="#fff" strokeWidth="2" />
      <text x="320" y="130" textAnchor="middle" fill="#ef4444" fontSize="10" fontWeight="bold">FortiMail WS</text>
      <text x="320" y="165" textAnchor="middle" fill="#9ca3af" fontSize="8">(Fortinet)</text>
      <circle cx="380" cy="130" r="6" fill="#3b82f6" stroke="#fff" strokeWidth="2" />
      <text x="380" y="115" textAnchor="middle" fill="#3b82f6" fontSize="10" fontWeight="bold">API-based ICES</text>
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
              <span className="text-gray-300">Fortinet</span>
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
            <div className="text-2xl font-bold text-orange-400 mb-1">{company.snapshot.revenue}</div>
            <div className="text-xs text-gray-400">Revenue (2024)</div>
          </div>
          <div className="bg-gray-900 rounded-xl p-4 border border-gray-800">
            <div className="text-2xl font-bold text-white mb-1">{company.snapshot.saseARR}</div>
            <div className="text-xs text-gray-400">Unified SASE ARR</div>
          </div>
          <div className="bg-gray-900 rounded-xl p-4 border border-gray-800">
            <div className="text-2xl font-bold text-white mb-1">{company.snapshot.customers}</div>
            <div className="text-xs text-gray-400">Customers</div>
          </div>
          <div className="bg-gray-900 rounded-xl p-4 border border-gray-800">
            <div className="text-2xl font-bold text-white mb-1">{company.snapshot.mqRecognition}</div>
            <div className="text-xs text-gray-400">Gartner MQ Reports</div>
          </div>
          <div className="bg-gray-900 rounded-xl p-4 border border-gray-800">
            <div className="text-2xl font-bold text-yellow-400 mb-1">{company.snapshot.gartnerPosition}</div>
            <div className="text-xs text-gray-400">Email MQ 2025</div>
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
                    <span className="text-gray-500 block">Revenue</span>
                    <span className="text-orange-400">{company.metrics.revenue}</span>
                  </div>
                  <div>
                    <span className="text-gray-500 block">SASE ARR</span>
                    <span className="text-white">{company.metrics.saseARR}</span>
                  </div>
                  <div>
                    <span className="text-gray-500 block">Customers</span>
                    <span className="text-white">{company.metrics.customers}</span>
                  </div>
                  <div>
                    <span className="text-gray-500 block">SecOps ARR</span>
                    <span className="text-white">{company.metrics.secOpsARR}</span>
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
                    <div><span className="text-gray-500 block mb-1">Gartner Position</span><span className="text-yellow-400 text-xs">{company.marketPosition.gartnerPosition}</span></div>
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
              <CitationFooter citations={['Fortinet Investor Relations', 'Gartner Magic Quadrant 2025', 'Wikipedia']} />
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
              
              <div className="bg-purple-900/20 border border-purple-800/50 rounded-lg p-4 mb-4">
                <h3 className="text-sm font-semibold text-purple-400 mb-3">🎯 Key Acquisition: {company.acquisitionHighlight.company}</h3>
                <div className="grid md:grid-cols-2 gap-4 text-xs">
                  <div>
                    <span className="text-gray-500">Date:</span> <span className="text-gray-300">{company.acquisitionHighlight.date}</span><br/>
                    <span className="text-gray-500">Value:</span> <span className="text-gray-300">{company.acquisitionHighlight.value}</span>
                  </div>
                  <div>
                    <span className="text-gray-500">Significance:</span> <span className="text-gray-300">{company.acquisitionHighlight.significance}</span>
                  </div>
                </div>
                <p className="text-xs text-gray-400 mt-2"><span className="text-gray-500">Capabilities:</span> {company.acquisitionHighlight.capabilities}</p>
              </div>

              <div className="bg-orange-900/20 border border-orange-800/50 rounded-lg p-4">
                <h3 className="text-sm font-semibold text-orange-400 mb-3">🔗 Security Fabric Platform Strategy</h3>
                <p className="text-xs text-gray-400 mb-3">{company.platformStrategy.description}</p>
                <div className="grid md:grid-cols-3 gap-2">
                  {company.platformStrategy.pillars.map((pillar, idx) => (
                    <div key={idx} className={`text-xs p-2 rounded ${pillar.isPrimary ? 'bg-orange-900/30 text-orange-300 border border-orange-700' : 'bg-gray-800 text-gray-400'}`}>
                      {pillar.name}
                      {pillar.isPrimary && <span className="block text-orange-400 mt-1">← Email Focus</span>}
                    </div>
                  ))}
                </div>
              </div>
              <CitationFooter citations={['Gartner Hype Cycle for Security Operations, 2024', 'Fortinet Q4 2024 Earnings']} />
            </section>

            <section id="product" className="bg-gray-900 rounded-xl border border-gray-800 p-6">
              <h2 className="text-xl font-semibold mb-4 flex items-center gap-2"><span>🎯</span> Product</h2>
              <p className="text-sm text-gray-400 mb-4">FortiMail Email and Workspace Security is the industry's broadest and most customizable email security platform, now expanded with Perception Point capabilities for collaboration and browser protection.</p>
              <div className="grid md:grid-cols-2 gap-3 mb-6">
                {company.emailCapabilities.map((capability, idx) => (
                  <div key={idx} className="bg-gray-800 border border-gray-700 rounded-lg p-4">
                    <h3 className="font-medium text-white text-sm">{capability.name}</h3>
                    <p className="text-xs text-gray-400 mt-1">{capability.description}</p>
                  </div>
                ))}
              </div>
              <CitationFooter citations={['Fortinet Product Documentation', 'Gartner Magic Quadrant Analysis']} />
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
              <CitationFooter citations={['Fortinet Customer Case Studies', 'Gartner Peer Insights']} />
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
              <CitationFooter citations={['Fortinet Pricing', 'Customer TCO Studies']} />
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
              <CitationFooter citations={['Fortinet Technology Overview', 'Perception Point Integration']} />
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
              <div className="bg-orange-900/20 border border-orange-800/50 rounded-lg p-4"><h3 className="text-sm font-semibold text-orange-400 mb-2">Trajectory</h3><p className="text-sm text-gray-300">{company.outlook.trajectory}</p></div>
              <CitationFooter citations={['Fortinet Investor Relations', 'Market Analysis']} />
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

export default FortinetProfile;
