"use client";

import React, { useState } from 'react';

const BarracudaProfile = () => {
  const [activeSection, setActiveSection] = useState('overview');

  const company = {
    name: 'Barracuda Networks',
    product: 'Barracuda Email Protection',
    tagline: 'Complete email protection for SMB and mid-market - MSP-first approach',
    position: 'SMB/MSP Leader',
    website: 'https://www.barracuda.com',
    
    snapshot: {
      valuation: '~$4B',
      customers: '200,000+',
      revenue: '$500M+',
      employees: '1,500+',
      gartnerPosition: 'Visionary',
    },

    companyDetails: {
      founded: '2003',
      founders: 'Dean Drako, Michael Perone, Zach Levow',
      headquarters: 'Campbell, CA',
      ownership: 'KKR (acquired Aug 2022, ~$4B)',
      ceo: 'Rohit Ghai (Sept 2025, ex-RSA CEO)',
    },

    marketPosition: {
      category: 'Email Security (SEG + ICES hybrid)',
      subCategory: 'SMB/Mid-Market Focus',
      gartnerPosition: 'Visionary - Gartner MQ (2024, 2025)',
    },

    recognition: [
      'Gartner MQ Visionary 2024, 2025',
      'CRN Product of the Year 2025',
      '200,000+ Customers Worldwide',
    ],

    metrics: {
      customers: '200,000+',
      mspGrowth: '280%',
      revenueMultiplier: '3-5.5x',
      platformPillars: '4',
    },

    marketContext: {
      hypeCyclePosition: 'Slope of Enlightenment (SEG+ICES hybrid)',
      targetMarket: 'SMB and Mid-Market (primary), MSPs (fastest growth)',
      keyDifferentiator: 'Unified platform + MSP-first + deployment flexibility (API or inline)',
    },

    platformPillars: [
      { name: 'Email Protection', description: 'SEG + AI-powered BEC/phishing + SAT + backup', isPrimary: true },
      { name: 'Network Protection', description: 'CloudGen Firewall, SecureEdge SASE, ZTNA', isPrimary: false },
      { name: 'Data Protection', description: 'Backup appliances, Cloud-to-Cloud, Entra ID backup', isPrimary: false },
      { name: 'Managed XDR', description: '24/7 SOC service with SOAR and AI assistant', isPrimary: false },
    ],

    emailComponents: [
      { name: 'Secure Email Gateway', description: 'Pre-delivery filtering for spam, malware, phishing' },
      { name: 'Phishing & Impersonation Protection', description: 'AI-based behavioral detection for BEC, spear phishing' },
      { name: 'Account Takeover Protection', description: 'Detect compromised accounts via behavioral analysis' },
      { name: 'Security Awareness Training', description: 'Phishing simulation and user education' },
      { name: 'Incident Response', description: 'Automated remediation and threat hunting' },
      { name: 'Cloud-to-Cloud Backup', description: 'M365 data protection (Exchange, SharePoint, OneDrive, Teams)' },
    ],

    stakeholders: {
      msp: {
        role: 'MSP / MSSP',
        jtbd: 'Deliver comprehensive security to SMB clients profitably',
        painPoints: ['Tool sprawl across clients', 'Per-customer management overhead', 'Margin pressure'],
        valueProps: ['Multi-tenant BarracudaONE console', '3-5.5x revenue multiplier', 'Monthly billing'],
      },
      smbIt: {
        role: 'SMB IT Director / Manager',
        jtbd: 'Protect the organization without specialized security expertise',
        painPoints: ['Limited staff/budget', 'Complex enterprise tools', 'Too many vendors'],
        valueProps: ['Ease of use - clear dashboards', 'All-in-one platform', 'Free onboarding support'],
      },
      ciso: {
        role: 'Mid-Market CISO',
        jtbd: 'Defense-in-depth email security with platform consolidation',
        painPoints: ['Board pressure on email security', 'Vendor sprawl', 'Budget constraints'],
        valueProps: ['Unified platform (email + network + data + XDR)', 'Value pricing', 'Deployment flexibility'],
      },
    },

    economics: {
      pricing: 'Tiered plans: Starter, Professional, Premium (per-user)',
      roiDrivers: [
        'MSP partners generate 3-5.5x revenue multiplier',
        'Platform consolidation reduces tool sprawl',
        'Free onboarding and setup support included',
      ],
      competitivePricing: 'Value leader for SMB/mid-market - undercuts enterprise vendors significantly',
    },

    channelStrategy: {
      program: 'Barracuda Partner Success Program',
      mspGrowth: '280% international MSP growth since 2017',
      keyBenefits: ['Multi-tenant management', 'Monthly billing', 'White-label options', 'Partner enablement'],
    },

    differentiation: [
      { title: 'MSP-First Design', description: 'Dedicated Barracuda MSP unit. Multi-tenant console, monthly billing, 280% MSP growth.', icon: '🤝' },
      { title: 'Deployment Flexibility', description: 'API-based OR inline with MX changes - meets customers where they are technically.', icon: '🔄' },
      { title: 'Unified Platform', description: 'BarracudaONE consolidates email + network + data + XDR in single console.', icon: '🏗️' },
      { title: 'Ease of Use', description: 'Products designed for IT teams with limited resources. Clear dashboards, minimal training.', icon: '✨' },
    ],

    strengths: [
      'MSP channel dominance - 280% growth, 3-5.5x multiplier',
      '200,000+ customer base for cross-sell',
      'Unified BarracudaONE platform (email + network + data + XDR)',
      'Deployment flexibility (API or inline)',
      'Value pricing for SMB/mid-market',
      'Ease of use - designed for resource-constrained IT',
      'KKR backing and resources',
    ],

    weaknesses: [
      'Gartner Visionary vs. Leader (perception gap)',
      'Less advanced behavioral AI than Abnormal/Proofpoint',
      'SMB focus limits enterprise penetration',
      'Platform breadth vs. email depth tradeoff',
      'PE ownership pressure on margins',
      'CEO transition (Rohit Ghai new Sept 2025)',
    ],

    outlook: {
      tailwinds: [
        'MSP market growth - SMBs outsourcing security',
        'Platform consolidation trend',
        'Mid-market underserved by enterprise vendors',
        'KKR investment for growth',
      ],
      headwinds: [
        'Behavioral AI vendors winning enterprise deals',
        'Microsoft native security improving',
        'Price pressure from platform bundling',
        'CEO transition creates uncertainty',
      ],
      trajectory: 'Dominant in MSP/SMB segment. Growth depends on BarracudaONE platform adoption and mid-market expansion. Enterprise segment remains challenging.',
    },

    news: [
      { date: 'Sept 2025', title: 'New CEO Rohit Ghai', summary: 'Former RSA CEO appointed to lead Barracuda, replacing Hatem Naguib.', type: 'leadership', source: 'Barracuda Press Release' },
      { date: '2025', title: 'CRN Product of the Year', summary: 'Email Protection wins CRN Product of the Year (Email & Web Security).', type: 'recognition', source: 'CRN Awards' },
      { date: '2024', title: 'BarracudaONE Launch', summary: 'Unified AI-powered cybersecurity platform launched.', type: 'product', source: 'Barracuda Product Announcement' },
      { date: '2024', title: 'Gartner MQ Visionary', summary: 'Named Visionary in Email Security Platforms Magic Quadrant.', type: 'recognition', source: 'Gartner Magic Quadrant 2024' },
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
      case 'leadership': return 'bg-amber-900/50 text-amber-400 border-amber-700';
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
        <linearGradient id="curveGradientBarracuda" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" stopColor="#8b5cf6" stopOpacity="0.8" />
          <stop offset="50%" stopColor="#06b6d4" stopOpacity="0.8" />
          <stop offset="100%" stopColor="#10b981" stopOpacity="0.8" />
        </linearGradient>
      </defs>
      <path d="M 30 180 Q 80 180 100 160 Q 120 140 140 60 Q 160 20 180 40 Q 200 60 220 120 Q 260 160 300 150 Q 340 140 380 130 Q 420 120 470 110" stroke="url(#curveGradientBarracuda)" strokeWidth="3" fill="none" />
      <circle cx="140" cy="60" r="6" fill="#f97316" stroke="#fff" strokeWidth="2" />
      <text x="140" y="45" textAnchor="middle" fill="#f97316" fontSize="10" fontWeight="bold">GenAI Email</text>
      <circle cx="340" cy="140" r="8" fill="#06b6d4" stroke="#fff" strokeWidth="2" />
      <text x="340" y="125" textAnchor="middle" fill="#06b6d4" fontSize="10" fontWeight="bold">SEG+ICES Hybrid</text>
      <text x="340" y="165" textAnchor="middle" fill="#9ca3af" fontSize="8">(Barracuda)</text>
      <circle cx="460" cy="110" r="6" fill="#10b981" stroke="#fff" strokeWidth="2" />
      <text x="460" y="95" textAnchor="middle" fill="#10b981" fontSize="10" fontWeight="bold">Pure SEG</text>
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
              <span className="text-gray-300">Barracuda</span>
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
                <span className="px-3 py-1 bg-cyan-900/50 text-cyan-400 border border-cyan-700 rounded-full text-sm">{company.position}</span>
              </div>
              <p className="text-xl text-gray-400 mb-2">{company.tagline}</p>
              <p className="text-sm text-gray-500">{company.product}</p>
            </div>

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
            <div className="text-xs text-gray-400">KKR Acquisition</div>
          </div>
          <div className="bg-gray-900 rounded-xl p-4 border border-gray-800">
            <div className="text-2xl font-bold text-cyan-400 mb-1">{company.snapshot.customers}</div>
            <div className="text-xs text-gray-400">Customers</div>
          </div>
          <div className="bg-gray-900 rounded-xl p-4 border border-gray-800">
            <div className="text-2xl font-bold text-white mb-1">{company.snapshot.revenue}</div>
            <div className="text-xs text-gray-400">Annual Revenue</div>
          </div>
          <div className="bg-gray-900 rounded-xl p-4 border border-gray-800">
            <div className="text-2xl font-bold text-white mb-1">{company.snapshot.employees}</div>
            <div className="text-xs text-gray-400">Employees</div>
          </div>
          <div className="bg-gray-900 rounded-xl p-4 border border-gray-800">
            <div className="text-2xl font-bold text-amber-400 mb-1">{company.snapshot.gartnerPosition}</div>
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
                      className={`w-full text-left px-3 py-2 rounded-lg text-sm flex items-center gap-2 transition-all ${activeSection === section.id ? 'bg-cyan-900/50 text-cyan-400 border border-cyan-800' : 'text-gray-400 hover:bg-gray-800 hover:text-white'}`}>
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
                    <span className="text-cyan-400">{company.metrics.customers}</span>
                  </div>
                  <div>
                    <span className="text-gray-500 block">MSP Growth</span>
                    <span className="text-green-400">{company.metrics.mspGrowth}</span>
                  </div>
                  <div>
                    <span className="text-gray-500 block">Revenue Multiplier</span>
                    <span className="text-white">{company.metrics.revenueMultiplier}</span>
                  </div>
                  <div>
                    <span className="text-gray-500 block">Platform Pillars</span>
                    <span className="text-white">{company.metrics.platformPillars}</span>
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
                    <div className="flex justify-between"><span className="text-gray-500">Ownership</span><span className="text-gray-300">{company.companyDetails.ownership}</span></div>
                    <div className="flex justify-between"><span className="text-gray-500">CEO</span><span className="text-gray-300">{company.companyDetails.ceo}</span></div>
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
              <CitationFooter citations={['Barracuda Networks Company Information', 'KKR Acquisition Announcement, August 2022', 'Gartner Magic Quadrant 2024']} />
            </section>

            <section id="market" className="bg-gray-900 rounded-xl border border-gray-800 p-6">
              <h2 className="text-xl font-semibold mb-4 flex items-center gap-2"><span>🌍</span> Market Context</h2>
              <div className="bg-gray-800 rounded-lg p-4 mb-4">
                <h3 className="text-sm font-semibold text-gray-400 mb-3">Email Security Hype Cycle Position</h3>
                <HypeCycleSVG />
                <p className="text-xs text-gray-500 text-center mt-2">[1] Gartner Hype Cycle for Security Operations, 2024</p>
              </div>
              <div className="grid md:grid-cols-2 gap-4 mb-4">
                <div className="bg-cyan-900/20 border border-cyan-800/50 rounded-lg p-4">
                  <h3 className="text-sm font-semibold text-cyan-400 mb-2">Target Market</h3>
                  <p className="text-xs text-gray-400">{company.marketContext.targetMarket}</p>
                </div>
                <div className="bg-gray-800 rounded-lg p-4">
                  <h3 className="text-sm font-semibold text-white mb-2">Key Differentiator</h3>
                  <p className="text-xs text-gray-400">{company.marketContext.keyDifferentiator}</p>
                </div>
              </div>
              <div className="bg-green-900/20 border border-green-800/50 rounded-lg p-4">
                <h3 className="text-sm font-semibold text-green-400 mb-2">📈 MSP Channel Success</h3>
                <div className="grid md:grid-cols-3 gap-4 text-xs">
                  <div><span className="text-gray-500 block">Growth</span><span className="text-white">{company.channelStrategy.mspGrowth}</span></div>
                  <div><span className="text-gray-500 block">Program</span><span className="text-white">{company.channelStrategy.program}</span></div>
                  <div><span className="text-gray-500 block">Benefits</span><span className="text-white">{company.channelStrategy.keyBenefits.slice(0,2).join(', ')}</span></div>
                </div>
              </div>
              <CitationFooter citations={['Gartner Hype Cycle for Security Operations, 2024', 'Barracuda Partner Success Program']} />
            </section>

            <section id="product" className="bg-gray-900 rounded-xl border border-gray-800 p-6">
              <h2 className="text-xl font-semibold mb-4 flex items-center gap-2"><span>🎯</span> Product (BarracudaONE Platform)</h2>
              <p className="text-sm text-gray-400 mb-4">BarracudaONE is a unified AI-powered platform with four pillars. Email Protection is the primary focus for this analysis.</p>
              <div className="grid md:grid-cols-2 gap-3 mb-6">
                {company.platformPillars.map((pillar, idx) => (
                  <div key={idx} className={`rounded-lg p-4 border ${pillar.isPrimary ? 'bg-cyan-900/20 border-cyan-800/50' : 'bg-gray-800 border-gray-700'}`}>
                    <h3 className="font-medium text-white text-sm">{pillar.name}</h3>
                    <p className="text-xs text-gray-400 mt-1">{pillar.description}</p>
                    {pillar.isPrimary && <span className="text-xs text-cyan-400 mt-2 block">Primary Focus</span>}
                  </div>
                ))}
              </div>
              <div className="bg-cyan-900/20 border border-cyan-800/50 rounded-lg p-4">
                <h3 className="text-sm font-semibold text-cyan-400 mb-3">Email Protection Components</h3>
                <div className="grid md:grid-cols-2 gap-2">
                  {company.emailComponents.map((component, idx) => (
                    <div key={idx} className="text-xs">
                      <span className="text-white font-medium">{component.name}</span>
                      <p className="text-gray-500">{component.description}</p>
                    </div>
                  ))}
                </div>
              </div>
              <CitationFooter citations={['Barracuda Email Protection Product Documentation', 'BarracudaONE Platform Overview']} />
            </section>

            <section id="stakeholders" className="bg-gray-900 rounded-xl border border-gray-800 p-6">
              <h2 className="text-xl font-semibold mb-4 flex items-center gap-2"><span>👥</span> Stakeholders</h2>
              <div className="space-y-4">
                {Object.values(company.stakeholders).map((stakeholder, idx) => (
                  <div key={idx} className="bg-gray-800 rounded-lg p-4">
                    <h3 className="font-medium text-white mb-2">{stakeholder.role}</h3>
                    <p className="text-sm text-cyan-400 mb-3">JTBD: {stakeholder.jtbd}</p>
                    <div className="grid md:grid-cols-2 gap-4">
                      <div><span className="text-xs text-gray-500 uppercase">Pain Points</span>{stakeholder.painPoints.map((pain, i) => (<p key={i} className="text-xs text-gray-400 mt-1">• {pain}</p>))}</div>
                      <div><span className="text-xs text-gray-500 uppercase">Value Props</span>{stakeholder.valueProps.map((prop, i) => (<p key={i} className="text-xs text-gray-300 mt-1">• {prop}</p>))}</div>
                    </div>
                  </div>
                ))}
              </div>
              <CitationFooter citations={['Barracuda Customer Case Studies', 'Barracuda MSP Partner Resources']} />
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
              <CitationFooter citations={['Barracuda Pricing Information', 'Barracuda Partner Economics']} />
            </section>

            <section id="differentiation" className="bg-gray-900 rounded-xl border border-gray-800 p-6">
              <h2 className="text-xl font-semibold mb-4 flex items-center gap-2"><span>⚡</span> Differentiation</h2>
              <div className="grid md:grid-cols-2 gap-4">
                {company.differentiation.map((diff, idx) => (
                  <div key={idx} className="bg-gray-800 rounded-lg p-4 border-l-2 border-cyan-500">
                    <div className="flex items-center gap-2 mb-2"><span className="text-xl">{diff.icon}</span><h3 className="font-medium text-white">{diff.title}</h3></div>
                    <p className="text-sm text-gray-400">{diff.description}</p>
                  </div>
                ))}
              </div>
              <CitationFooter citations={['Barracuda Product Documentation', 'Barracuda MSP Program Details']} />
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
              <div className="bg-cyan-900/20 border border-cyan-800/50 rounded-lg p-4"><h3 className="text-sm font-semibold text-cyan-400 mb-2">Trajectory</h3><p className="text-sm text-gray-300">{company.outlook.trajectory}</p></div>
              <CitationFooter citations={['Barracuda Strategic Communications', 'Market Analyst Forecasts']} />
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

export default BarracudaProfile;
