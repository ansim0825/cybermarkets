"use client";

import React, { useState } from 'react';
import { Logo } from '@/components/Logo';

const AbnormalCompanyPage = () => {
  const [activeSection, setActiveSection] = useState('overview');

  // Company data - this would be the template structure for all vendors
  const company = {
    name: 'Abnormal Security',
    product: 'Abnormal Email Security',
    tagline: 'AI-native email security that stops attacks humans can\'t detect',
    position: 'Vision Leader',
    positionColor: 'purple',
    website: 'https://abnormal.ai',
    
    // Snapshot
    snapshot: {
      founded: '2018',
      founders: 'Evan Reiser (CEO) & Sanjay Jeyakumar',
      hq: 'Las Vegas, NV',
      funding: '$546M raised',
      valuation: '$5.1B (Series D, Aug 2024)',
      arr: '$200M+ (100% YoY growth)',
      customers: '3,000+ across 35 countries',
      employees: '1,000+ (70% growth in 2024)',
      investors: 'Greylock, Wellington, CrowdStrike Ventures',
    },

    // Market Position
    marketPosition: {
      gartnerPosition: 'Leader - Furthest on Completeness of Vision (2024, 2025)',
      category: 'Integrated Cloud Email Security (ICES)',
      subCategory: 'AI-Native Human Behavior Security',
      fortune500: '17% of Fortune 500',
      keyRecognition: [
        'Gartner Magic Quadrant Leader 2024, 2025',
        'CNBC Disruptor 50',
        'Forbes Cloud 100',
      ]
    },

    // Core Product
    coreProduct: {
      architecture: 'API-native (post-delivery)',
      deployment: '60-second setup via M365/Google Workspace API',
      primaryUseCases: [
        'Business Email Compromise (BEC)',
        'Account Takeover Detection',
        'Vendor Email Compromise (VEC)',
        'Credential Phishing',
        'Supply Chain Attacks',
      ],
      keyCapabilities: [
        'Behavioral AI Engine (PeopleBase, VendorBase, TenantBase)',
        'AI Security Mailbox (autonomous triage)',
        'Multi-channel protection (Slack, Teams, Zoom)',
        'Zero-touch remediation',
        'Human Risk Scoring',
      ],
      integrations: ['Microsoft 365', 'Google Workspace', 'Slack', 'Microsoft Teams', 'Zoom', 'SIEM/SOAR'],
    },

    // Differentiation
    differentiation: [
      {
        title: 'Behavioral AI ≠ Traditional AI/ML',
        description: 'Creates unique baseline for each organization. Not just LLMs or threat intelligence.',
        icon: '🧠'
      },
      {
        title: 'API-Native from Day 1',
        description: 'Legacy vendors built on SEG architecture can\'t match native API design speed-to-value.',
        icon: '⚡'
      },
      {
        title: 'Autonomous Operations',
        description: 'Full closed-loop detection, investigation, and remediation. AI Security Mailbox differentiator.',
        icon: '🤖'
      },
      {
        title: 'Network Effects at Scale',
        description: '3,000+ customers, 1.4B+ mailboxes powering continuous model improvement.',
        icon: '📈'
      },
    ],

    // Strengths & Weaknesses
    strengths: [
      'Furthest on Gartner vision axis - recognized thought leader',
      'API-native architecture - fastest deployment in market',
      'Best-in-class behavioral AI for BEC/ATO detection',
      'Low false positives - "set it and forget it" operations',
      '95% SOC workload reduction claims',
      'Strong Fortune 500 penetration (17%)',
      'Well-funded ($546M) for continued innovation',
      'IPO-ready executive bench (ex-Okta, Zoom, Microsoft, CrowdStrike)',
    ],
    weaknesses: [
      'Premium pricing vs. mid-market competitors',
      'Microsoft Defender bundling pressure in E5 deals',
      'Less established in EMEA/APAC vs. incumbents',
      'Dependent on M365/Google ecosystem',
      'Limited on-premise support',
      'Newer brand vs. Proofpoint/Mimecast legacy relationships',
    ],

    // Strategic Outlook
    outlook: {
      tailwinds: [
        'AI-powered attacks accelerating (GenAI arms race)',
        'Cloud migration complete for most enterprises (M365/GWS dominance)',
        'SEG model obsolescence recognized by analysts and buyers',
        'Security talent shortage driving automation demand',
        'Platform consolidation trend (extend beyond email)',
      ],
      headwinds: [
        'Microsoft Defender native integration advantage (included in E5)',
        'Proofpoint entrenched enterprise relationships, high switching costs',
        'M&A risk - could be acquired by XDR platforms',
        'Behavioral AI commoditization over 24-36 months',
      ],
      trajectory: 'IPO likely 2026-2027. Expansion into broader Human Risk Management platform.',
    },

    // Key Metrics
    metrics: {
      detectionRate: '99.6% threats auto-remediated',
      mttd: '<5 seconds mean time to detect',
      workloadReduction: '95% SOC workload reduction',
      deploymentTime: '60 seconds',
      falsePositiveRate: 'Industry-lowest FP rate',
    },

    // Recent News
    news: [
      {
        date: 'Aug 2024',
        title: 'Series D at $5.1B Valuation',
        summary: 'Raised additional funding, doubling valuation from 2023.',
        type: 'funding'
      },
      {
        date: 'Jan 2025',
        title: 'Gartner MQ Leader - Vision Axis',
        summary: 'Named furthest on Completeness of Vision for second consecutive year.',
        type: 'recognition'
      },
      {
        date: 'Dec 2024',
        title: 'Multi-Channel Expansion',
        summary: 'Extended protection to Slack, Teams, and Zoom collaboration platforms.',
        type: 'product'
      },
      {
        date: 'Nov 2024',
        title: 'AI Security Mailbox Launch',
        summary: 'Autonomous triage of user-reported emails with AI-generated responses.',
        type: 'product'
      },
    ],

    // Competitive Positioning
    competitivePositioning: {
      vsProofpoint: 'Faster deployment (60s vs weeks), lower operational overhead, better AI detection. Proofpoint has deeper enterprise relationships.',
      vsMicrosoft: 'Catches what Defender misses. Behavioral AI vs. static rules. Premium tier vs. bundled "good enough".',
      vsMimecast: 'API-native vs. gateway-first. Lower false positives, faster time-to-value. Mimecast stronger on archiving/compliance.',
    }
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
      case 'partnership': return 'bg-cyan-900/50 text-cyan-400 border-cyan-700';
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
              <span className="text-gray-300 hidden sm:inline">Abnormal</span>
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
                <span className="px-3 py-1 bg-purple-900/50 text-purple-400 border border-purple-700 rounded-full text-sm">
                  {company.position}
                </span>
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

        {/* Snapshot Cards */}
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-4 mb-8">
          <div className="bg-gray-900 rounded-xl p-4 border border-gray-800">
            <div className="text-2xl font-bold text-white mb-1">{company.snapshot.valuation.split(' ')[0]}</div>
            <div className="text-xs text-gray-400">Valuation</div>
          </div>
          <div className="bg-gray-900 rounded-xl p-4 border border-gray-800">
            <div className="text-2xl font-bold text-green-400 mb-1">{company.snapshot.arr.split(' ')[0]}</div>
            <div className="text-xs text-gray-400">ARR (100% YoY)</div>
          </div>
          <div className="bg-gray-900 rounded-xl p-4 border border-gray-800">
            <div className="text-2xl font-bold text-white mb-1">{company.snapshot.customers.split(' ')[0]}</div>
            <div className="text-xs text-gray-400">Customers</div>
          </div>
          <div className="bg-gray-900 rounded-xl p-4 border border-gray-800">
            <div className="text-2xl font-bold text-white mb-1">{company.snapshot.employees.split(' ')[0]}</div>
            <div className="text-xs text-gray-400">Employees</div>
          </div>
          <div className="bg-gray-900 rounded-xl p-4 border border-gray-800">
            <div className="text-2xl font-bold text-purple-400 mb-1">{company.marketPosition.fortune500}</div>
            <div className="text-xs text-gray-400">Fortune 500</div>
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
                          ? 'bg-purple-900/50 text-purple-400 border border-purple-800'
                          : 'text-gray-400 hover:bg-gray-800 hover:text-white'
                      }`}
                    >
                      <span>{section.icon}</span>
                      <span>{section.name}</span>
                    </button>
                  ))}
                </div>
              </div>

              {/* Quick Stats */}
              <div className="bg-gray-900 rounded-xl border border-gray-800 p-4">
                <h3 className="text-sm font-semibold text-gray-400 mb-3">Key Metrics</h3>
                <div className="space-y-3 text-sm">
                  <div className="flex justify-between">
                    <span className="text-gray-500">Detection Rate</span>
                    <span className="text-green-400">{company.metrics.detectionRate}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-500">MTTD</span>
                    <span className="text-white">{company.metrics.mttd}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-500">SOC Reduction</span>
                    <span className="text-white">{company.metrics.workloadReduction}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-500">Deployment</span>
                    <span className="text-white">{company.metrics.deploymentTime}</span>
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
                      <span className="text-gray-300">{company.snapshot.founded}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-500">Founders</span>
                      <span className="text-gray-300">{company.snapshot.founders}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-500">Headquarters</span>
                      <span className="text-gray-300">{company.snapshot.hq}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-500">Total Funding</span>
                      <span className="text-gray-300">{company.snapshot.funding}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-500">Key Investors</span>
                      <span className="text-gray-300">{company.snapshot.investors}</span>
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
                      <span className="text-purple-400 text-xs">{company.marketPosition.gartnerPosition}</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Recognition */}
              <div>
                <h3 className="text-sm font-semibold text-gray-400 mb-3">Recognition</h3>
                <div className="flex flex-wrap gap-2">
                  {company.marketPosition.keyRecognition.map((item, idx) => (
                    <span key={idx} className="px-3 py-1 bg-gray-800 rounded-full text-xs text-gray-300">
                      {item}
                    </span>
                  ))}
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
                        <span className="text-purple-400">→</span>
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

              <div className="grid md:grid-cols-2 gap-4 mb-6">
                {company.differentiation.map((diff, idx) => (
                  <div key={idx} className="bg-gray-800 rounded-lg p-4 border-l-2 border-purple-500">
                    <div className="flex items-center gap-2 mb-2">
                      <span className="text-xl">{diff.icon}</span>
                      <h3 className="font-medium text-white">{diff.title}</h3>
                    </div>
                    <p className="text-sm text-gray-400">{diff.description}</p>
                  </div>
                ))}
              </div>

              {/* Competitive Positioning */}
              <div>
                <h3 className="text-sm font-semibold text-gray-400 mb-3">Head-to-Head</h3>
                <div className="space-y-3">
                  <div className="bg-gray-800 rounded-lg p-4">
                    <div className="font-medium text-white mb-1">vs. Proofpoint</div>
                    <p className="text-sm text-gray-400">{company.competitivePositioning.vsProofpoint}</p>
                  </div>
                  <div className="bg-gray-800 rounded-lg p-4">
                    <div className="font-medium text-white mb-1">vs. Microsoft Defender</div>
                    <p className="text-sm text-gray-400">{company.competitivePositioning.vsMicrosoft}</p>
                  </div>
                  <div className="bg-gray-800 rounded-lg p-4">
                    <div className="font-medium text-white mb-1">vs. Mimecast</div>
                    <p className="text-sm text-gray-400">{company.competitivePositioning.vsMimecast}</p>
                  </div>
                </div>
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

              <div className="bg-purple-900/20 border border-purple-800/50 rounded-lg p-4">
                <h3 className="text-sm font-semibold text-purple-400 mb-2">Trajectory</h3>
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

              <div className="mt-4 text-center">
                <button className="text-sm text-gray-500 hover:text-white transition-colors">
                  Load more news →
                </button>
              </div>
            </section>

          </div>
        </div>

        {/* Footer */}
        <footer className="mt-12 pt-8 border-t border-gray-800 text-center text-gray-500 text-sm">
          <p>Analysis by Andy Simko • CISSP • GPEN • CISA • GSNA • HCSFP • PMC-Level III</p>
          <p className="mt-1 text-gray-600">Independent research • Not affiliated with {company.name}</p>
        </footer>
      </div>
    </div>
  );
};

export default AbnormalCompanyPage;
