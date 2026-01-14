"use client";

import React, { useState } from 'react';

const AbnormalCompanyPage = () => {
  const [activeSection, setActiveSection] = useState('overview');

  // Company data - comprehensive template structure
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

    // Market Context
    marketContext: {
      hypeCyclePosition: 'Slope of Enlightenment',
      hypeCycleDetail: 'API-based email security has moved past "Peak of Inflated Expectations." Proven ROI cases, mature integrations, moving from "innovative" to "table stakes."',
      marketSize: {
        current: '$4.68B (2024)',
        projected: '$10.83B (2032)',
        cagr: '~12%',
      },
      architectureShift: {
        from: 'Secure Email Gateway (SEG)',
        to: 'API-Native / ICES',
        fromTraits: ['MX Routing (Inline)', 'Static Rules', 'Threat Intelligence', 'Days to deploy'],
        toTraits: ['API Direct (Post-Delivery)', 'Behavioral AI', 'Anomaly Detection', '60-second deploy'],
      },
      whatsReplacingWhat: [
        { old: 'Inline SEG', new: 'API-based ICES' },
        { old: 'Static Rules / Signatures', new: 'Behavioral AI' },
        { old: 'Manual SOC Triage', new: 'Autonomous Remediation' },
      ],
      adjacentCategories: [
        'Identity Threat Detection & Response (ITDR)',
        'Data Loss Prevention (DLP)',
        'Security Awareness Training (SAT)',
        'Cloud Application Security',
      ],
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

    // Stakeholder JTBD
    stakeholderJTBD: {
      ciso: {
        role: 'CISO',
        jobs: [
          'Show me ROI and reduce breach risk without massive operational overhead',
          'Reduce vendor sprawl while improving detection',
          'Get ahead of AI-powered attacks before board asks',
        ],
        painPoints: [
          'Volume Problem: Endless queue of employee-reported emails',
          'Sophistication Gap: Traditional tools miss socially-engineered attacks',
          'Resource Constraint: SOC teams overwhelmed; need automation',
        ],
      },
      socAnalyst: {
        role: 'SOC Analyst',
        jobs: [
          'Automate the tedious work so I can focus on real threats',
          'Quickly determine if an alert is real or false positive',
          'Remediate threats before damage occurs',
        ],
        painPoints: [
          'Alert fatigue from high false positive rates',
          'Manual investigation for every user-reported email',
          'Context-switching between multiple tools',
        ],
      },
      endUser: {
        role: 'End User / Employee',
        jobs: [
          'Protect me without slowing me down or confusing me',
          'Don\'t block legitimate emails from vendors and partners',
          'Give me quick feedback when I report something suspicious',
        ],
        painPoints: [
          'Legitimate emails getting quarantined',
          'No feedback loop when reporting phishing',
          'Confusing security warnings',
        ],
      },
    },

    // Customer Voice
    customerVoice: {
      quotes: [
        {
          text: 'I am genuinely impressed by how accurately Abnormal AI detects threats, ensuring that it doesn\'t mistakenly block legitimate emails... The switch from Mimecast, which failed to reliably block malicious emails, was long overdue.',
          source: 'G2 Review',
          competitor: 'Mimecast',
        },
        {
          text: 'Abnormal was the only one of 3-4 products tested that handled [account hijacking scenarios].',
          source: 'G2 Review',
          competitor: 'Multiple',
        },
        {
          text: 'The setup process for Abnormal AI was effortlessly easy... Since we started using Abnormal AI, the number of email threats reaching end users has dropped to nearly zero.',
          source: 'G2 Review',
          competitor: null,
        },
      ],
      commonThemes: [
        'Ease of deployment (vs. Proofpoint complexity)',
        'Low false positives (vs. Mimecast manual tuning)',
        '"Set it and forget it" operations',
        'Better detection than legacy SEG solutions',
      ],
    },

    // Pain/Gain
    painGain: [
      { pain: 'Manual phishing triage', gain: '95% workload reduction' },
      { pain: 'High false positives', gain: 'Industry-low FP rates' },
      { pain: 'Complex deployment (days/weeks)', gain: '60-second setup' },
      { pain: 'Missed sophisticated attacks', gain: 'Behavioral AI catches novel threats' },
      { pain: 'Ongoing operational overhead', gain: '"Set it and forget it" operations' },
      { pain: 'No visibility into account takeover', gain: 'ATO detection built-in' },
    ],

    // Economics
    economics: {
      pricingModel: {
        type: 'Per-user / per-mailbox',
        notes: 'Standard SaaS model. API-based = no hardware, no MX routing changes.',
      },
      tcoAdvantages: [
        'No professional services required (vs. Proofpoint)',
        'Minimal ongoing admin overhead',
        'Fast time-to-value (days vs. months)',
        '60-second deployment eliminates implementation costs',
      ],
      roiMetrics: [
        { metric: '95%', description: 'SOC workload reduction' },
        { metric: 'Milliseconds', description: 'Detection time (vs. hours/days)' },
        { metric: '$13.5M', description: 'Payment fraud stopped (case study)' },
        { metric: '~Zero', description: 'Professional services cost' },
      ],
      budgetTrends: [
        'Email security budgets increasing (12% CAGR market growth)',
        'Migration budgets from SEG → API solutions',
        'Consolidation of SAT into email security platforms',
      ],
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
      dataAssets: [
        { name: 'PeopleBase', description: 'Employee behavior baselines' },
        { name: 'VendorBase', description: 'Vendor relationship patterns' },
        { name: 'TenantBase', description: 'Organizational communication norms' },
        { name: 'ThreatBase', description: 'Cross-customer threat intelligence' },
      ],
    },

    // Differentiation
    differentiation: [
      {
        title: 'Behavioral AI ≠ Traditional AI/ML',
        description: 'Creates unique baseline for each organization. Not just LLMs or threat intelligence. Network effects from 3,000+ customers, 1.4B+ mailboxes.',
        icon: '🧠'
      },
      {
        title: 'API-Native from Day 1',
        description: 'Legacy vendors (Proofpoint, Mimecast) built on SEG architecture. Bolted-on API capabilities don\'t match native design. 10x more behavioral signals.',
        icon: '⚡'
      },
      {
        title: 'Autonomous Operations',
        description: 'Full closed-loop detection, investigation, and remediation. AI Security Mailbox differentiator. Reduces dependency on scarce security talent.',
        icon: '🤖'
      },
      {
        title: 'Vision + Execution Balance',
        description: 'Furthest on Gartner vision axis AND strong execution (100% YoY growth, Fortune 500 penetration). Well-capitalized for continued innovation.',
        icon: '📈'
      },
    ],

    // Competitive Positioning
    competitivePositioning: {
      vsProofpoint: {
        abnormalWins: 'Faster deployment (60s vs weeks), lower operational overhead, better AI detection, no professional services required.',
        competitorWins: 'Deeper enterprise relationships, high switching costs, broader platform (DLP, archiving, awareness).',
      },
      vsMicrosoft: {
        abnormalWins: 'Catches what Defender misses. Behavioral AI vs. static rules. Premium detection tier.',
        competitorWins: 'Native integration, included in E5, no incremental cost, single vendor simplicity.',
      },
      vsMimecast: {
        abnormalWins: 'API-native vs. gateway-first. Lower false positives, faster time-to-value, less manual tuning.',
        competitorWins: 'Stronger on archiving/compliance, established brand, broader mid-market presence.',
      },
    },

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
        'M&A risk - could be acquired by XDR platforms (CrowdStrike, Palo Alto)',
        'Behavioral AI commoditization over 24-36 months',
      ],
      trajectory: 'IPO likely 2026-2027. Expansion into broader Human Risk Management platform. Platform consolidation: email + Slack + Teams + Zoom + SAT.',
      ipoReadiness: [
        'Strong financials: $200M+ ARR, 100% growth',
        'Blue-chip investors: Wellington, Greylock, CrowdStrike',
        'Executive bench depth: CFO (ex-Okta), President (ex-Exabeam), CLO (ex-Zoom)',
        'FedRAMP authorization pathway (public sector)',
      ],
    },

    // Key Metrics
    metrics: {
      detectionRate: '99.6% threats auto-remediated',
      mttd: '<5 seconds',
      workloadReduction: '95% workload reduction',
      deploymentTime: '60 seconds',
      falsePositiveRate: 'Industry-lowest FP rate',
      mailboxesProtected: '1.4B+ (network effects)',
    },

    // Recent News
    news: [
      {
        date: 'Aug 2024',
        title: 'Series D at $5.1B Valuation',
        summary: 'Raised additional funding, doubling valuation from 2023.',
        type: 'funding',
        source: 'Abnormal Security Press Release'
      },
      {
        date: 'Jan 2025',
        title: 'Gartner MQ Leader - Vision Axis',
        summary: 'Named furthest on Completeness of Vision for second consecutive year.',
        type: 'recognition',
        source: 'Gartner Magic Quadrant for Email Security Platforms, 2025'
      },
      {
        date: 'Dec 2024',
        title: 'Multi-Channel Expansion',
        summary: 'Extended protection to Slack, Teams, and Zoom collaboration platforms.',
        type: 'product',
        source: 'Abnormal Security Product Announcement'
      },
      {
        date: 'Nov 2024',
        title: 'AI Security Mailbox Launch',
        summary: 'Autonomous triage of user-reported emails with AI-generated responses.',
        type: 'product',
        source: 'Abnormal Security Blog'
      },
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

  // Hype Cycle SVG Component
  const HypeCycleDiagram = () => (
    <div className="bg-gray-800 rounded-lg p-4 mb-6">
      <h3 className="text-sm font-semibold text-gray-400 mb-3">Email Security Hype Cycle Position</h3>
      <svg viewBox="0 0 600 200" className="w-full h-40">
        <defs>
          <linearGradient id="curveGradient" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#6366f1" stopOpacity="0.3"/>
            <stop offset="50%" stopColor="#8b5cf6" stopOpacity="0.3"/>
            <stop offset="100%" stopColor="#22c55e" stopOpacity="0.3"/>
          </linearGradient>
        </defs>
        <path d="M 30 180 Q 80 180 120 40 Q 160 -20 200 100 Q 240 160 300 140 Q 400 110 570 80" fill="none" stroke="url(#curveGradient)" strokeWidth="40" opacity="0.3"/>
        <path d="M 30 180 Q 80 180 120 40 Q 160 -20 200 100 Q 240 160 300 140 Q 400 110 570 80" fill="none" stroke="#8b5cf6" strokeWidth="2"/>
        <circle cx="420" cy="105" r="8" fill="#22c55e"/>
        <text x="420" y="85" textAnchor="middle" className="text-xs" fill="#22c55e" fontSize="10">API-based ICES</text>
        <text x="420" y="135" textAnchor="middle" className="text-xs" fill="#9ca3af" fontSize="9">(Abnormal)</text>
        <circle cx="120" cy="40" r="6" fill="#6366f1" opacity="0.5"/>
        <text x="120" y="25" textAnchor="middle" fill="#6366f1" fontSize="9">GenAI Email</text>
        <circle cx="520" cy="85" r="6" fill="#22c55e" opacity="0.5"/>
        <text x="520" y="70" textAnchor="middle" fill="#22c55e" fontSize="9">SEG</text>
        <text x="60" y="195" fill="#6b7280" fontSize="8">Innovation Trigger</text>
        <text x="180" y="195" fill="#6b7280" fontSize="8">Peak</text>
        <text x="280" y="195" fill="#6b7280" fontSize="8">Trough</text>
        <text x="400" y="195" fill="#6b7280" fontSize="8">Slope of Enlightenment</text>
        <text x="540" y="195" fill="#6b7280" fontSize="8">Plateau</text>
      </svg>
      <p className="text-xs text-gray-500 mt-2 text-center">[1] Gartner Hype Cycle for Security Operations, 2024</p>
    </div>
  );

  // Citation Footer Component
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
              <span className="text-gray-300">Abnormal</span>
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

              <CitationFooter citations={[
                'Abnormal Security Company Website - Corporate Information',
                'Crunchbase - Funding History and Valuation',
                'Gartner Magic Quadrant for Email Security Platforms, 2024 & 2025',
              ]} />
            </section>

            {/* Market Context Section */}
            <section id="market" className="bg-gray-900 rounded-xl border border-gray-800 p-6">
              <h2 className="text-xl font-semibold mb-4 flex items-center gap-2">
                <span>🌍</span> Market Context
              </h2>

              {/* Hype Cycle Visualization */}
              <HypeCycleDiagram />

              {/* Hype Cycle Text */}
              <div className="mb-6">
                <div className="flex items-center gap-3 mb-2">
                  <h3 className="text-sm font-semibold text-gray-400">Hype Cycle Position</h3>
                  <span className="px-2 py-1 bg-green-900/50 text-green-400 text-xs rounded-full border border-green-700">
                    {company.marketContext.hypeCyclePosition}
                  </span>
                </div>
                <p className="text-sm text-gray-400">{company.marketContext.hypeCycleDetail}</p>
              </div>

              {/* Market Size */}
              <div className="mb-6">
                <h3 className="text-sm font-semibold text-gray-400 mb-3">Market Size</h3>
                <div className="grid grid-cols-3 gap-4">
                  <div className="bg-gray-800 rounded-lg p-3 text-center">
                    <div className="text-lg font-bold text-white">{company.marketContext.marketSize.current}</div>
                    <div className="text-xs text-gray-500">Current (2024)</div>
                  </div>
                  <div className="bg-gray-800 rounded-lg p-3 text-center">
                    <div className="text-lg font-bold text-green-400">{company.marketContext.marketSize.projected}</div>
                    <div className="text-xs text-gray-500">Projected (2032)</div>
                  </div>
                  <div className="bg-gray-800 rounded-lg p-3 text-center">
                    <div className="text-lg font-bold text-purple-400">{company.marketContext.marketSize.cagr}</div>
                    <div className="text-xs text-gray-500">CAGR</div>
                  </div>
                </div>
              </div>

              {/* Architecture Shift */}
              <div className="mb-6">
                <h3 className="text-sm font-semibold text-gray-400 mb-3">Architecture Shift</h3>
                <div className="grid md:grid-cols-2 gap-4">
                  <div className="bg-red-900/20 border border-red-800/50 rounded-lg p-4">
                    <div className="text-sm font-medium text-red-400 mb-2">❌ {company.marketContext.architectureShift.from}</div>
                    <div className="space-y-1">
                      {company.marketContext.architectureShift.fromTraits.map((trait, idx) => (
                        <div key={idx} className="text-xs text-gray-400">• {trait}</div>
                      ))}
                    </div>
                  </div>
                  <div className="bg-green-900/20 border border-green-800/50 rounded-lg p-4">
                    <div className="text-sm font-medium text-green-400 mb-2">✓ {company.marketContext.architectureShift.to}</div>
                    <div className="space-y-1">
                      {company.marketContext.architectureShift.toTraits.map((trait, idx) => (
                        <div key={idx} className="text-xs text-gray-400">• {trait}</div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>

              {/* What's Replacing What */}
              <div className="mb-6">
                <h3 className="text-sm font-semibold text-gray-400 mb-3">What's Replacing What</h3>
                <div className="space-y-2">
                  {company.marketContext.whatsReplacingWhat.map((item, idx) => (
                    <div key={idx} className="flex items-center gap-3 text-sm">
                      <span className="text-red-400 line-through">{item.old}</span>
                      <span className="text-gray-600">→</span>
                      <span className="text-green-400">{item.new}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Adjacent Categories */}
              <div>
                <h3 className="text-sm font-semibold text-gray-400 mb-3">Adjacent / Expansion Categories</h3>
                <div className="flex flex-wrap gap-2">
                  {company.marketContext.adjacentCategories.map((cat, idx) => (
                    <span key={idx} className="px-3 py-1 bg-gray-800 rounded-lg text-xs text-gray-300 border border-gray-700">
                      {cat}
                    </span>
                  ))}
                </div>
              </div>

              <CitationFooter citations={[
                'Gartner Hype Cycle for Security Operations, 2024',
                'Fortune Business Insights - Email Security Market Size Report',
                'Mordor Intelligence - Email Security Market Analysis',
              ]} />
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

              <div className="grid md:grid-cols-2 gap-6 mb-6">
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

              {/* Data Assets */}
              <div>
                <h3 className="text-sm font-semibold text-gray-400 mb-3">Behavioral AI Data Assets</h3>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
                  {company.coreProduct.dataAssets.map((asset, idx) => (
                    <div key={idx} className="bg-gray-800 rounded-lg p-3">
                      <div className="text-sm font-medium text-purple-400">{asset.name}</div>
                      <div className="text-xs text-gray-500">{asset.description}</div>
                    </div>
                  ))}
                </div>
              </div>

              <CitationFooter citations={[
                'Abnormal Security Product Documentation',
                'Abnormal Security Platform Architecture Overview',
              ]} />
            </section>

            {/* Stakeholders Section */}
            <section id="stakeholders" className="bg-gray-900 rounded-xl border border-gray-800 p-6">
              <h2 className="text-xl font-semibold mb-4 flex items-center gap-2">
                <span>👥</span> Stakeholder Jobs To Be Done
              </h2>

              <div className="space-y-6">
                {/* CISO */}
                <div className="bg-gray-800 rounded-lg p-4">
                  <h3 className="text-sm font-semibold text-purple-400 mb-3">👔 {company.stakeholderJTBD.ciso.role}</h3>
                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <div className="text-xs text-gray-500 mb-2">JOBS TO BE DONE</div>
                      {company.stakeholderJTBD.ciso.jobs.map((job, idx) => (
                        <div key={idx} className="text-sm text-gray-300 mb-1">• {job}</div>
                      ))}
                    </div>
                    <div>
                      <div className="text-xs text-gray-500 mb-2">PAIN POINTS</div>
                      {company.stakeholderJTBD.ciso.painPoints.map((pain, idx) => (
                        <div key={idx} className="text-sm text-red-400/80 mb-1">• {pain}</div>
                      ))}
                    </div>
                  </div>
                </div>

                {/* SOC Analyst */}
                <div className="bg-gray-800 rounded-lg p-4">
                  <h3 className="text-sm font-semibold text-blue-400 mb-3">🖥️ {company.stakeholderJTBD.socAnalyst.role}</h3>
                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <div className="text-xs text-gray-500 mb-2">JOBS TO BE DONE</div>
                      {company.stakeholderJTBD.socAnalyst.jobs.map((job, idx) => (
                        <div key={idx} className="text-sm text-gray-300 mb-1">• {job}</div>
                      ))}
                    </div>
                    <div>
                      <div className="text-xs text-gray-500 mb-2">PAIN POINTS</div>
                      {company.stakeholderJTBD.socAnalyst.painPoints.map((pain, idx) => (
                        <div key={idx} className="text-sm text-red-400/80 mb-1">• {pain}</div>
                      ))}
                    </div>
                  </div>
                </div>

                {/* End User */}
                <div className="bg-gray-800 rounded-lg p-4">
                  <h3 className="text-sm font-semibold text-green-400 mb-3">👤 {company.stakeholderJTBD.endUser.role}</h3>
                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <div className="text-xs text-gray-500 mb-2">JOBS TO BE DONE</div>
                      {company.stakeholderJTBD.endUser.jobs.map((job, idx) => (
                        <div key={idx} className="text-sm text-gray-300 mb-1">• {job}</div>
                      ))}
                    </div>
                    <div>
                      <div className="text-xs text-gray-500 mb-2">PAIN POINTS</div>
                      {company.stakeholderJTBD.endUser.painPoints.map((pain, idx) => (
                        <div key={idx} className="text-sm text-red-400/80 mb-1">• {pain}</div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>

              {/* Customer Voice */}
              <div className="mt-6">
                <h3 className="text-sm font-semibold text-gray-400 mb-3">💬 Customer Voice</h3>
                <div className="space-y-3">
                  {company.customerVoice.quotes.map((quote, idx) => (
                    <div key={idx} className="bg-gray-800 rounded-lg p-4 border-l-2 border-purple-500">
                      <p className="text-sm text-gray-300 italic">"{quote.text}"</p>
                      <div className="flex items-center gap-2 mt-2">
                        <span className="text-xs text-gray-500">— {quote.source}</span>
                        {quote.competitor && (
                          <span className="text-xs px-2 py-0.5 bg-gray-700 rounded text-gray-400">
                            vs. {quote.competitor}
                          </span>
                        )}
                      </div>
                    </div>
                  ))}
                </div>

                {/* Common Themes */}
                <div className="mt-4">
                  <div className="text-xs text-gray-500 mb-2">COMMON THEMES FROM REVIEWS</div>
                  <div className="flex flex-wrap gap-2">
                    {company.customerVoice.commonThemes.map((theme, idx) => (
                      <span key={idx} className="px-3 py-1 bg-green-900/30 text-green-400 rounded-full text-xs border border-green-800/50">
                        {theme}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              <CitationFooter citations={[
                'G2 Crowd Reviews - Abnormal Security',
                'Gartner Peer Insights - Email Security Reviews',
              ]} />
            </section>

            {/* Economics Section */}
            <section id="economics" className="bg-gray-900 rounded-xl border border-gray-800 p-6">
              <h2 className="text-xl font-semibold mb-4 flex items-center gap-2">
                <span>💰</span> Economics & ROI
              </h2>

              {/* Pain → Gain Table */}
              <div className="mb-6">
                <h3 className="text-sm font-semibold text-gray-400 mb-3">Pain → Gain</h3>
                <div className="bg-gray-800 rounded-lg overflow-hidden">
                  <table className="w-full text-sm">
                    <thead>
                      <tr className="border-b border-gray-700">
                        <th className="text-left p-3 text-red-400 font-medium">Before (Pain)</th>
                        <th className="text-left p-3 text-green-400 font-medium">After (Gain)</th>
                      </tr>
                    </thead>
                    <tbody>
                      {company.painGain.map((row, idx) => (
                        <tr key={idx} className="border-b border-gray-700/50 last:border-0">
                          <td className="p-3 text-gray-400">{row.pain}</td>
                          <td className="p-3 text-gray-300">{row.gain}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>

              {/* ROI Metrics */}
              <div className="mb-6">
                <h3 className="text-sm font-semibold text-gray-400 mb-3">ROI Metrics</h3>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                  {company.economics.roiMetrics.map((item, idx) => (
                    <div key={idx} className="bg-gray-800 rounded-lg p-4 text-center">
                      <div className="text-xl font-bold text-green-400">{item.metric}</div>
                      <div className="text-xs text-gray-500">{item.description}</div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Pricing & TCO */}
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h3 className="text-sm font-semibold text-gray-400 mb-3">Pricing Model</h3>
                  <div className="bg-gray-800 rounded-lg p-4">
                    <div className="text-lg font-medium text-white mb-1">{company.economics.pricingModel.type}</div>
                    <p className="text-sm text-gray-400">{company.economics.pricingModel.notes}</p>
                  </div>
                </div>
                <div>
                  <h3 className="text-sm font-semibold text-gray-400 mb-3">TCO Advantages</h3>
                  <div className="space-y-2">
                    {company.economics.tcoAdvantages.map((item, idx) => (
                      <div key={idx} className="flex items-center gap-2 text-sm text-gray-300">
                        <span className="text-green-400">✓</span>
                        {item}
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Budget Trends */}
              <div className="mt-6">
                <h3 className="text-sm font-semibold text-gray-400 mb-3">Budget Allocation Trends</h3>
                <div className="flex flex-wrap gap-2">
                  {company.economics.budgetTrends.map((trend, idx) => (
                    <span key={idx} className="px-3 py-1 bg-gray-800 rounded-lg text-xs text-gray-300 border border-gray-700">
                      {trend}
                    </span>
                  ))}
                </div>
              </div>

              <CitationFooter citations={[
                'Abnormal Security ROI Calculator and Case Studies',
                'Industry Average: Ponemon Institute Cost of a Data Breach Report',
              ]} />
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

              {/* Head-to-Head Comparisons */}
              <div>
                <h3 className="text-sm font-semibold text-gray-400 mb-3">Head-to-Head</h3>
                <div className="space-y-3">
                  <div className="bg-gray-800 rounded-lg p-4">
                    <div className="font-medium text-white mb-2">vs. Proofpoint</div>
                    <div className="grid md:grid-cols-2 gap-4 text-sm">
                      <div>
                        <span className="text-green-400 text-xs">ABNORMAL WINS:</span>
                        <p className="text-gray-400 mt-1">{company.competitivePositioning.vsProofpoint.abnormalWins}</p>
                      </div>
                      <div>
                        <span className="text-red-400 text-xs">COMPETITOR WINS:</span>
                        <p className="text-gray-400 mt-1">{company.competitivePositioning.vsProofpoint.competitorWins}</p>
                      </div>
                    </div>
                  </div>
                  <div className="bg-gray-800 rounded-lg p-4">
                    <div className="font-medium text-white mb-2">vs. Microsoft Defender</div>
                    <div className="grid md:grid-cols-2 gap-4 text-sm">
                      <div>
                        <span className="text-green-400 text-xs">ABNORMAL WINS:</span>
                        <p className="text-gray-400 mt-1">{company.competitivePositioning.vsMicrosoft.abnormalWins}</p>
                      </div>
                      <div>
                        <span className="text-red-400 text-xs">COMPETITOR WINS:</span>
                        <p className="text-gray-400 mt-1">{company.competitivePositioning.vsMicrosoft.competitorWins}</p>
                      </div>
                    </div>
                  </div>
                  <div className="bg-gray-800 rounded-lg p-4">
                    <div className="font-medium text-white mb-2">vs. Mimecast</div>
                    <div className="grid md:grid-cols-2 gap-4 text-sm">
                      <div>
                        <span className="text-green-400 text-xs">ABNORMAL WINS:</span>
                        <p className="text-gray-400 mt-1">{company.competitivePositioning.vsMimecast.abnormalWins}</p>
                      </div>
                      <div>
                        <span className="text-red-400 text-xs">COMPETITOR WINS:</span>
                        <p className="text-gray-400 mt-1">{company.competitivePositioning.vsMimecast.competitorWins}</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <CitationFooter citations={[
                'Gartner Magic Quadrant for Email Security Platforms, 2024 & 2025',
                'G2 Crowd Comparison Reports',
              ]} />
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

              <CitationFooter citations={[
                'Gartner Critical Capabilities for Email Security',
                'Industry Analyst Reports and Competitive Analysis',
              ]} />
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

              {/* IPO Readiness */}
              <div className="mb-6">
                <h3 className="text-sm font-semibold text-gray-400 mb-3">IPO Readiness</h3>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
                  {company.outlook.ipoReadiness.map((item, idx) => (
                    <div key={idx} className="bg-gray-800 rounded-lg p-3">
                      <div className="flex items-center gap-2 text-sm text-gray-300">
                        <span className="text-green-400">✓</span>
                        {item}
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="bg-purple-900/20 border border-purple-800/50 rounded-lg p-4">
                <h3 className="text-sm font-semibold text-purple-400 mb-2">Trajectory</h3>
                <p className="text-sm text-gray-300">{company.outlook.trajectory}</p>
              </div>

              <CitationFooter citations={[
                'SEC Filings and IPO Market Analysis',
                'Industry Analyst Forecasts - Email Security Market',
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

export default AbnormalCompanyPage;
