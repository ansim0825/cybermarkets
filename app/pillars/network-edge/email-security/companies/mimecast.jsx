"use client";

import React, { useState } from 'react';

const MimecastCompanyPage = () => {
  const [activeSection, setActiveSection] = useState('overview');

  // Company data - comprehensive template structure
  const company = {
    name: 'Mimecast',
    product: 'Mimecast Advanced Email Security',
    tagline: 'Human Risk Management through AI-powered, API-enabled connected security',
    position: 'Full-Stack Leader',
    positionColor: 'orange',
    website: 'https://www.mimecast.com',
    
    // Snapshot
    snapshot: {
      founded: '2003',
      founders: 'Peter Bauer & Neil Murray',
      hq: 'London, United Kingdom',
      funding: 'Private (Permira)',
      valuation: '$5.8B (Acquisition, May 2022)',
      arr: '$550M+ (est. 2024)',
      customers: '42,000+ organizations',
      employees: '2,500+ globally',
      investors: 'Permira (PE owner since 2022)',
    },

    // Market Context
    marketContext: {
      hypeCyclePosition: 'Plateau of Productivity',
      hypeCycleDetail: 'Mimecast represents mature email security with gateway + API hybrid architecture. Now pivoting to Human Risk Management (HRM) platform positioning through strategic acquisitions (Code42, Elevate Security, Aware).',
      marketSize: {
        current: '$4.68B (2024)',
        projected: '$10.83B (2032)',
        cagr: '~12%',
      },
      architectureShift: {
        from: 'Email Security Point Product',
        to: 'Human Risk Management Platform',
        fromTraits: ['Gateway-only protection', 'Reactive detection', 'Siloed email data', 'Generic awareness training'],
        toTraits: ['Gateway + API hybrid', 'Behavioral risk scoring', 'Cross-channel visibility', 'Targeted interventions'],
      },
      whatsReplacingWhat: [
        { old: 'Standalone email security', new: 'Connected HRM platform' },
        { old: 'Generic security training', new: 'Risk-based adaptive learning' },
        { old: 'Point-in-time detection', new: 'Continuous human risk scoring' },
      ],
      adjacentCategories: [
        'Insider Threat Management (ITM)',
        'Security Awareness Training (SAT)',
        'Data Loss Prevention (DLP)',
        'Digital Communications Governance',
        'Email Archiving & Compliance',
      ],
    },

    // Market Position
    marketPosition: {
      gartnerPosition: 'Leader - Gartner MQ for Email Security Platforms (2024, 2025)',
      category: 'Email Security Platforms',
      subCategory: 'Gateway + API Hybrid / Human Risk Management',
      fortune500: 'Strong mid-market & enterprise',
      keyRecognition: [
        'Gartner Magic Quadrant Leader 2024, 2025',
        'Gartner MQ Leader - Digital Communications Governance & Archiving 2025',
        'Forrester Human Risk Management Wave Recognition',
        'G2 Leader Winter 2025 - Multiple Categories',
        'CRN Product of the Year 2025 - Email & Web Security',
      ]
    },

    // Stakeholder JTBD
    stakeholderJTBD: {
      ciso: {
        role: 'CISO',
        jobs: [
          'Consolidate email security, DLP, archiving, and SAT into one platform',
          'Identify and manage the riskiest 8% of employees causing 80% of incidents',
          'Demonstrate measurable reduction in human-driven security incidents',
        ],
        painPoints: [
          'Tool Sprawl: Managing 60+ security vendors with overlapping capabilities',
          'Human Factor: Employees remain the weakest link despite training investments',
          'Visibility Gap: Cannot correlate email threats with endpoint/identity risks',
        ],
      },
      socAnalyst: {
        role: 'SOC Analyst',
        jobs: [
          'Quickly triage and respond to email-borne threats',
          'Investigate incidents with cross-channel context (email, endpoint, identity)',
          'Automate repetitive investigation tasks',
        ],
        painPoints: [
          'Context switching between multiple consoles',
          'Manual correlation of email threats with user behavior',
          'Alert fatigue from high false positive rates',
        ],
      },
      complianceOfficer: {
        role: 'Compliance / Legal',
        jobs: [
          'Ensure email archiving meets regulatory requirements (GDPR, HIPAA, SEC)',
          'Enable rapid e-discovery and litigation hold',
          'Maintain audit trails for communications',
        ],
        painPoints: [
          'Expanding scope beyond email to Slack, Teams, Zoom',
          'Complex retention policy management',
          'Cross-jurisdictional compliance requirements',
        ],
      },
    },

    // Customer Voice
    customerVoice: {
      quotes: [
        {
          text: 'The Mimecast team has been a great pleasure to work with, from answering questions during our initial presentation demo, to the deployment and configuration phase and with support assistance post-launch. We are truly impressed!',
          source: 'Gartner Peer Insights',
          competitor: null,
        },
        {
          text: 'Mimecast is a great company to work with. The product has an excellent balance of power, but also ease of use. We transitioned from a different email security provider and our experience has been a very good one.',
          source: 'Gartner Peer Insights - Healthcare',
          competitor: 'Previous Provider',
        },
        {
          text: 'The piece that is most valuable from the Mimecast standpoint will be the sandboxing feature. In terms of efficacy, Proofpoint is better than Mimecast, though it\'s a little difficult to manage.',
          source: 'PeerSpot Review',
          competitor: 'Proofpoint',
        },
      ],
      commonThemes: [
        'Ease of deployment and administration',
        'Strong archiving and compliance capabilities',
        'Good balance of features and usability',
        'Responsive customer support',
        'Value in platform consolidation',
      ],
    },

    // Pain/Gain
    painGain: [
      { pain: 'Multiple vendor consoles', gain: 'Unified platform: email, archive, DLP, SAT' },
      { pain: 'Unknown high-risk employees', gain: 'Human risk scoring identifies riskiest 8%' },
      { pain: 'Complex gateway deployments', gain: 'Gateway + API flexibility' },
      { pain: 'Email-only visibility', gain: 'Cross-channel protection (Slack, Teams, Zoom)' },
      { pain: 'Generic security training', gain: 'Risk-based adaptive interventions' },
      { pain: 'Compliance gaps', gain: 'Integrated archiving & governance' },
    ],

    // Economics
    economics: {
      pricingModel: {
        type: 'Per-user subscription (tiered)',
        notes: 'Modular pricing: Core email security + add-on modules (archiving, awareness, DLP). Competitive mid-market pricing vs. Proofpoint premium.',
      },
      tcoAdvantages: [
        'Platform consolidation reduces vendor count',
        '2.55x ROI over three years (claimed)',
        '24% time savings on email-based attack response',
        '50% time savings on email platform management',
        'Lower complexity vs. Proofpoint configurations',
      ],
      roiMetrics: [
        { metric: '2.55x', description: 'ROI over 3 years' },
        { metric: '37%', description: 'Fewer incidents vs. Proofpoint (claimed)' },
        { metric: '24%', description: 'Time savings on attack response' },
        { metric: '1.4x', description: 'Better outcomes vs. Proofpoint (At-Bay)' },
      ],
      budgetTrends: [
        'Platform consolidation budgets (fewer vendors)',
        'Human Risk Management emerging category spend',
        'Compliance & archiving requirements growing',
        'Security awareness training integration',
      ],
    },

    // Core Product
    coreProduct: {
      architecture: 'Gateway + API hybrid (customer choice)',
      deployment: 'Cloud-native SaaS; API-based for M365/GWS or inline with MX changes',
      primaryUseCases: [
        'Advanced Email Security (phishing, BEC, ransomware)',
        'Email Archiving & Compliance',
        'Security Awareness Training (Mimecast Engage)',
        'Insider Threat Management (Code42 Incydr)',
        'Data Loss Prevention',
        'DMARC Authentication',
      ],
      keyCapabilities: [
        'AI-powered threat detection (multi-engine)',
        'URL & Attachment sandboxing',
        'Human Risk Management Platform',
        'Mimecast Engage (adaptive SAT)',
        'Cloud Archive with e-discovery',
        'Collaboration security (Slack, Teams, Zoom)',
        'SentinelOne integration (endpoint correlation)',
      ],
      integrations: ['Microsoft 365', 'Google Workspace', 'SentinelOne', 'CrowdStrike', 'SIEM/SOAR', 'Slack', 'Microsoft Teams', 'Zoom'],
      dataAssets: [
        { name: 'Human Risk Score', description: 'Behavioral risk profile per employee' },
        { name: 'Threat Intelligence', description: 'Global threat data from 42K+ customers' },
        { name: 'Archive Repository', description: 'Years of email data for compliance/eDiscovery' },
        { name: 'Training Analytics', description: 'Engagement and phishing simulation data' },
      ],
    },

    // Differentiation
    differentiation: [
      {
        title: 'Full-Stack Email Platform',
        description: 'Unlike pure-play API vendors, Mimecast offers security + archiving + compliance + SAT in one platform. Gateway + API flexibility.',
        icon: '🏗️'
      },
      {
        title: 'Human Risk Management Pioneer',
        description: 'First to pivot from email security to HRM. Acquisitions (Code42, Elevate, Aware) create unique insider threat + training + DLP bundle.',
        icon: '🎯'
      },
      {
        title: 'Archiving & Compliance Leader',
        description: 'Gartner MQ Leader in Digital Communications Governance. Strong compliance capabilities others lack (e-discovery, litigation hold, retention).',
        icon: '📁'
      },
      {
        title: '20+ Years of Email Heritage',
        description: 'Founded 2003. Deep email expertise. 42,000+ customers. Trusted by enterprises for mission-critical email infrastructure.',
        icon: '🏛️'
      },
    ],

    // Competitive Positioning
    competitivePositioning: {
      vsProofpoint: {
        mimecastWins: 'Simpler administration (37% fewer misconfigurations). Better mid-market value. Stronger archiving integration. Lower TCO.',
        competitorWins: 'Superior threat intelligence depth. Stronger enterprise brand. Higher Gartner execution score. More advanced AI detection (Nexus).',
      },
      vsAbnormal: {
        mimecastWins: 'Full platform (archiving, compliance, SAT vs. email-only). Gateway option for customers wanting inline. Established 20-year track record.',
        competitorWins: 'API-native architecture = faster deployment. Superior behavioral AI for BEC. Lower operational overhead. Higher Gartner vision score.',
      },
      vsMicrosoft: {
        mimecastWins: 'Superior detection for sophisticated threats. Independent archiving. Vendor diversification from Microsoft dependency.',
        competitorWins: 'Native integration. Included in E5 license (no incremental cost). Single vendor simplicity.',
      },
    },

    // Strengths & Weaknesses
    strengths: [
      'Full-stack platform: email security + archiving + SAT + DLP in one',
      'Gartner MQ Leader in both Email Security AND Digital Communications Governance',
      'Gateway + API hybrid architecture offers deployment flexibility',
      'Strong compliance/archiving capabilities differentiate from pure-play API vendors',
      'Human Risk Management positioning with Code42 + Elevate acquisitions',
      '42,000+ customers - large installed base',
      'SentinelOne strategic partnership deepens endpoint correlation',
      '4.5 star Gartner Peer Insights rating (535+ reviews)',
      'PE backing (Permira) provides investment for M&A and innovation',
    ],
    weaknesses: [
      'Architecture not API-native like Abnormal (bolted-on API capabilities)',
      'Lower vision score than Abnormal in Gartner MQ',
      'Threat intelligence depth inferior to Proofpoint',
      'Multiple acquisitions create integration complexity risk',
      'UI/navigation complaints from users (multiple portals)',
      'Third-party dependencies for some features (DMARC, encryption)',
      'Microsoft bundling pressure (Defender in E5)',
      'Premium pricing for full platform vs. point solutions',
    ],

    // Strategic Outlook
    outlook: {
      tailwinds: [
        'Human Risk Management category emergence (first-mover advantage)',
        'Platform consolidation trend favors full-stack vendors',
        'Regulatory expansion increases archiving/compliance demand',
        'Collaboration security expansion (Slack, Teams, Zoom)',
        'SentinelOne partnership positions for XDR/SIEM convergence',
      ],
      headwinds: [
        'API-native competitors (Abnormal) winning "detect what Defender misses" deals',
        'Microsoft bundling pressure (Defender for Office 365 in E5)',
        'Proofpoint deeper threat intelligence and enterprise relationships',
        'Integration risk from multiple acquisitions (Code42, Elevate, Aware)',
        'PE ownership may prioritize profitability over R&D investment',
      ],
      trajectory: 'Positioned as the "full-stack" alternative to both enterprise incumbents (Proofpoint) and API-native disruptors (Abnormal). HRM platform pivot differentiates but requires successful integration of acquisitions. IPO or strategic sale possible within 3-5 years under Permira.',
      ipoReadiness: [
        'Strong financials: $550M+ ARR, 42K customers',
        'Established PE ownership (Permira) with exit timeline',
        'New CEO Marc van Zadelhoff (Jan 2024) brought in to execute growth',
        'HRM platform positioning creates strategic narrative',
      ],
    },

    // Key Metrics
    metrics: {
      customers: '42,000+',
      peerInsightsRating: '4.5/5 (535+ reviews)',
      outcomeAdvantage: '1.4x better vs. Proofpoint (At-Bay)',
      roiClaimed: '2.55x over 3 years',
      timeSavings: '24% on attack response',
    },

    // Recent News
    news: [
      {
        date: 'Dec 2025',
        title: 'Gartner MQ Leader - Email Security (2nd consecutive year)',
        summary: 'Named Leader in Gartner Magic Quadrant for Email Security Platforms, December 2025.',
        type: 'recognition',
        source: 'Gartner Magic Quadrant for Email Security, December 2025'
      },
      {
        date: 'Oct 2025',
        title: 'AI-Driven HRM Platform Innovations at Elevate 2025',
        summary: 'Unveiled breakthrough AI capabilities across portfolio for comprehensive defense against human-targeted threats.',
        type: 'product',
        source: 'Mimecast Elevate 2025 Conference'
      },
      {
        date: 'Aug 2025',
        title: 'SentinelOne Partnership Deepened',
        summary: 'Expanded integration brings real-time endpoint telemetry into HRM platform. Named Strategic Technology Partner of the Year.',
        type: 'partnership',
        source: 'SentinelOne PartnerOne Awards 2025'
      },
      {
        date: 'Aug 2024',
        title: 'Aware Acquisition',
        summary: 'Acquired AI compliance software provider Aware to expand digital communications governance capabilities.',
        type: 'acquisition',
        source: 'Mimecast Press Release'
      },
      {
        date: 'Jul 2024',
        title: 'Code42 Acquisition',
        summary: 'Acquired insider threat management leader Code42 to bolster Human Risk Management platform with DLP capabilities.',
        type: 'acquisition',
        source: 'Mimecast Press Release'
      },
      {
        date: 'Jan 2024',
        title: 'New CEO Marc van Zadelhoff',
        summary: 'Former IBM Security and LogMeIn executive appointed CEO, replacing co-founder Peter Bauer.',
        type: 'leadership',
        source: 'Mimecast Press Release'
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
      case 'acquisition': return 'bg-green-900/50 text-green-400 border-green-700';
      case 'product': return 'bg-blue-900/50 text-blue-400 border-blue-700';
      case 'recognition': return 'bg-purple-900/50 text-purple-400 border-purple-700';
      case 'partnership': return 'bg-cyan-900/50 text-cyan-400 border-cyan-700';
      case 'leadership': return 'bg-yellow-900/50 text-yellow-400 border-yellow-700';
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
        {/* Mimecast - on Plateau */}
        <circle cx="520" cy="85" r="8" fill="#f97316"/>
        <text x="520" y="65" textAnchor="middle" className="text-xs" fill="#f97316" fontSize="10">Gateway + HRM</text>
        <text x="520" y="105" textAnchor="middle" className="text-xs" fill="#9ca3af" fontSize="9">(Mimecast)</text>
        {/* API-based ICES */}
        <circle cx="420" cy="105" r="6" fill="#22c55e" opacity="0.5"/>
        <text x="420" y="90" textAnchor="middle" fill="#22c55e" fontSize="9">API-based ICES</text>
        {/* GenAI Email */}
        <circle cx="120" cy="40" r="6" fill="#6366f1" opacity="0.5"/>
        <text x="120" y="25" textAnchor="middle" fill="#6366f1" fontSize="9">GenAI Email</text>
        {/* Labels */}
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
              <span className="text-gray-300">Mimecast</span>
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
                <span className="px-3 py-1 bg-orange-900/50 text-orange-400 border border-orange-700 rounded-full text-sm">
                  {company.position}
                </span>
              </div>
              <p className="text-xl text-gray-400 mb-2">{company.tagline}</p>
              <p className="text-sm text-gray-500">{company.product}</p>
            </div>
           
          </div>
          
          <div className="flex items-center gap-4 text-sm text-gray-500">
            <span>Research Status: <span className="text-green-400">Complete</span></span>
            <span>•</span>
            <span>Last updated: January 2026</span>
          </div>
        </div>

        {/* Snapshot Cards */}
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-4 mb-8">
          <div className="bg-gray-900 rounded-xl p-4 border border-gray-800">
            <div className="text-2xl font-bold text-white mb-1">{company.snapshot.valuation.split(' ')[0]}</div>
            <div className="text-xs text-gray-400">Valuation (2022)</div>
          </div>
          <div className="bg-gray-900 rounded-xl p-4 border border-gray-800">
            <div className="text-2xl font-bold text-orange-400 mb-1">{company.snapshot.arr.split(' ')[0]}</div>
            <div className="text-xs text-gray-400">ARR (est.)</div>
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
            <div className="text-2xl font-bold text-orange-400 mb-1">{company.metrics.peerInsightsRating}</div>
            <div className="text-xs text-gray-400">Gartner Peer Insights</div>
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
                          ? 'bg-orange-900/50 text-orange-400 border border-orange-800'
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
                    <span className="text-gray-500">Customers</span>
                    <span className="text-white">{company.metrics.customers}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-500">Peer Rating</span>
                    <span className="text-orange-400">{company.metrics.peerInsightsRating}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-500">ROI (claimed)</span>
                    <span className="text-white">{company.metrics.roiClaimed}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-500">Time Savings</span>
                    <span className="text-white">{company.metrics.timeSavings}</span>
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
                      <span className="text-gray-500">Ownership</span>
                      <span className="text-gray-300">{company.snapshot.funding}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-500">CEO</span>
                      <span className="text-gray-300">Marc van Zadelhoff (Jan 2024)</span>
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
                      <span className="text-orange-400 text-xs">{company.marketPosition.gartnerPosition}</span>
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
                'Mimecast Company Website - Corporate Information',
                'Permira Press Release - $5.8B Acquisition (December 2021)',
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
                  <span className="px-2 py-1 bg-orange-900/50 text-orange-400 text-xs rounded-full border border-orange-700">
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
                    <div className="text-lg font-bold text-orange-400">{company.marketContext.marketSize.cagr}</div>
                    <div className="text-xs text-gray-500">CAGR</div>
                  </div>
                </div>
              </div>

              {/* Architecture Shift */}
              <div className="mb-6">
                <h3 className="text-sm font-semibold text-gray-400 mb-3">Strategic Pivot</h3>
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
                'Mimecast Strategic Announcements - HRM Platform Pivot',
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
                        <span className="text-orange-400">→</span>
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
                <h3 className="text-sm font-semibold text-gray-400 mb-3">Platform Data Assets</h3>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
                  {company.coreProduct.dataAssets.map((asset, idx) => (
                    <div key={idx} className="bg-gray-800 rounded-lg p-3">
                      <div className="text-sm font-medium text-orange-400">{asset.name}</div>
                      <div className="text-xs text-gray-500">{asset.description}</div>
                    </div>
                  ))}
                </div>
              </div>

              <CitationFooter citations={[
                'Mimecast Product Documentation',
                'Mimecast Platform Architecture Overview',
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
                  <h3 className="text-sm font-semibold text-orange-400 mb-3">👔 {company.stakeholderJTBD.ciso.role}</h3>
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

                {/* Compliance Officer */}
                <div className="bg-gray-800 rounded-lg p-4">
                  <h3 className="text-sm font-semibold text-green-400 mb-3">⚖️ {company.stakeholderJTBD.complianceOfficer.role}</h3>
                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <div className="text-xs text-gray-500 mb-2">JOBS TO BE DONE</div>
                      {company.stakeholderJTBD.complianceOfficer.jobs.map((job, idx) => (
                        <div key={idx} className="text-sm text-gray-300 mb-1">• {job}</div>
                      ))}
                    </div>
                    <div>
                      <div className="text-xs text-gray-500 mb-2">PAIN POINTS</div>
                      {company.stakeholderJTBD.complianceOfficer.painPoints.map((pain, idx) => (
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
                    <div key={idx} className="bg-gray-800 rounded-lg p-4 border-l-2 border-orange-500">
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
                      <span key={idx} className="px-3 py-1 bg-orange-900/30 text-orange-400 rounded-full text-xs border border-orange-800/50">
                        {theme}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              <CitationFooter citations={[
                'Gartner Peer Insights - Mimecast Reviews',
                'PeerSpot - Email Security Comparisons',
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
                <h3 className="text-sm font-semibold text-gray-400 mb-3">ROI Metrics (Vendor Claims)</h3>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                  {company.economics.roiMetrics.map((item, idx) => (
                    <div key={idx} className="bg-gray-800 rounded-lg p-4 text-center">
                      <div className="text-xl font-bold text-orange-400">{item.metric}</div>
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
                'Mimecast ROI Claims and Case Studies',
                'At-Bay InsurSec Report 2024 - Mimecast vs. Proofpoint',
              ]} />
            </section>

            {/* Differentiation Section */}
            <section id="differentiation" className="bg-gray-900 rounded-xl border border-gray-800 p-6">
              <h2 className="text-xl font-semibold mb-4 flex items-center gap-2">
                <span>⚡</span> Competitive Differentiation
              </h2>

              <div className="grid md:grid-cols-2 gap-4 mb-6">
                {company.differentiation.map((diff, idx) => (
                  <div key={idx} className="bg-gray-800 rounded-lg p-4 border-l-2 border-orange-500">
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
                        <span className="text-green-400 text-xs">MIMECAST WINS:</span>
                        <p className="text-gray-400 mt-1">{company.competitivePositioning.vsProofpoint.mimecastWins}</p>
                      </div>
                      <div>
                        <span className="text-red-400 text-xs">COMPETITOR WINS:</span>
                        <p className="text-gray-400 mt-1">{company.competitivePositioning.vsProofpoint.competitorWins}</p>
                      </div>
                    </div>
                  </div>
                  <div className="bg-gray-800 rounded-lg p-4">
                    <div className="font-medium text-white mb-2">vs. Abnormal Security</div>
                    <div className="grid md:grid-cols-2 gap-4 text-sm">
                      <div>
                        <span className="text-green-400 text-xs">MIMECAST WINS:</span>
                        <p className="text-gray-400 mt-1">{company.competitivePositioning.vsAbnormal.mimecastWins}</p>
                      </div>
                      <div>
                        <span className="text-red-400 text-xs">COMPETITOR WINS:</span>
                        <p className="text-gray-400 mt-1">{company.competitivePositioning.vsAbnormal.competitorWins}</p>
                      </div>
                    </div>
                  </div>
                  <div className="bg-gray-800 rounded-lg p-4">
                    <div className="font-medium text-white mb-2">vs. Microsoft Defender</div>
                    <div className="grid md:grid-cols-2 gap-4 text-sm">
                      <div>
                        <span className="text-green-400 text-xs">MIMECAST WINS:</span>
                        <p className="text-gray-400 mt-1">{company.competitivePositioning.vsMicrosoft.mimecastWins}</p>
                      </div>
                      <div>
                        <span className="text-red-400 text-xs">COMPETITOR WINS:</span>
                        <p className="text-gray-400 mt-1">{company.competitivePositioning.vsMicrosoft.competitorWins}</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <CitationFooter citations={[
                'Gartner Magic Quadrant for Email Security Platforms, 2024 & 2025',
                'G2 Crowd Comparison Reports',
                'Proofpoint vs. Mimecast Competitive Analysis',
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

              {/* Exit Readiness */}
              <div className="mb-6">
                <h3 className="text-sm font-semibold text-gray-400 mb-3">Exit Readiness (PE-Owned)</h3>
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

              <div className="bg-orange-900/20 border border-orange-800/50 rounded-lg p-4">
                <h3 className="text-sm font-semibold text-orange-400 mb-2">Trajectory</h3>
                <p className="text-sm text-gray-300">{company.outlook.trajectory}</p>
              </div>

              <CitationFooter citations={[
                'Permira Holdings - Investment Portfolio',
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

export default MimecastCompanyPage;
