"use client";

import React, { useState } from 'react';

const ProofpointCompanyPage = () => {
  const [activeSection, setActiveSection] = useState('overview');

  // Company data - comprehensive template structure
  const company = {
    name: 'Proofpoint',
    product: 'Proofpoint Prime Threat Protection',
    tagline: 'Human-centric security protecting people, data, and AI agents',
    position: 'Execution Leader',
    positionColor: 'green',
    website: 'https://www.proofpoint.com',
    
    // Snapshot
    snapshot: {
      founded: '2002',
      founders: 'Eric Hahn (former Netscape CTO)',
      hq: 'Sunnyvale, California',
      funding: 'Private (Thoma Bravo)',
      valuation: '$12.3B (Acquisition, Aug 2021)',
      arr: '$2B+ ARR (crossed mid-2024)',
      customers: '2.7M+ organizations',
      employees: '4,500+',
      investors: 'Thoma Bravo (PE owner since 2021)',
    },

    // Market Context
    marketContext: {
      hypeCyclePosition: 'Plateau of Productivity',
      hypeCycleDetail: 'Enterprise email security is mature and essential. Proofpoint represents the established leader category - proven at scale, dominant enterprise relationships, expanding into adjacent human-centric security categories.',
      marketSize: {
        current: '$4.68B (2024)',
        projected: '$10.83B (2032)',
        cagr: '~12%',
      },
      architectureShift: {
        from: 'Point Solution Email Security',
        to: 'Human-Centric Security Platform',
        fromTraits: ['Email-only protection', 'Siloed tools', 'Manual SOC workflows', 'Reactive defense'],
        toTraits: ['Multichannel protection', 'Unified platform', 'AI-automated response', 'Human risk insights'],
      },
      whatsReplacingWhat: [
        { old: 'Email-only SEG', new: 'Multichannel Prime Platform' },
        { old: 'Signature-based detection', new: 'Nexus AI behavioral models' },
        { old: 'Manual threat triage', new: 'Autonomous remediation' },
      ],
      adjacentCategories: [
        'Data Loss Prevention (DLP)',
        'Security Awareness Training (SAT)',
        'Identity Threat Defense',
        'Digital Communications Governance',
        'Data Security Posture Management (DSPM)',
      ],
    },

    // Market Position
    marketPosition: {
      gartnerPosition: 'Leader - Highest in Ability to Execute (2024, 2025)',
      category: 'Enterprise Email Security Platform',
      subCategory: 'Human-Centric Cybersecurity',
      fortune500: '85% of Fortune 100',
      keyRecognition: [
        'Gartner Magic Quadrant Leader 2024, 2025',
        '#1 in 4/5 Gartner Critical Capabilities',
        '4.6/5 Gartner Peer Insights (1,507 reviews)',
      ]
    },

    // Stakeholder JTBD
    stakeholderJTBD: {
      ciso: {
        role: 'CISO',
        jobs: [
          'Protect the organization from human-targeted attacks at enterprise scale',
          'Demonstrate ROI to the board with measurable risk reduction',
          'Consolidate vendors while maintaining best-in-class protection',
        ],
        painPoints: [
          'Email remains #1 attack vector despite heavy investment',
          'Board pressure to show security ROI and risk metrics',
          'Vendor sprawl increasing complexity and cost',
        ],
      },
      socAnalyst: {
        role: 'SOC Analyst',
        jobs: [
          'Quickly triage and remediate email threats with clear context',
          'Reduce alert fatigue with accurate, prioritized detections',
          'Investigate incidents across email, cloud, and collaboration tools',
        ],
        painPoints: [
          'Overwhelmed by volume of user-reported emails',
          'Manual investigation across disconnected tools',
          'Sophisticated BEC attacks evading detection',
        ],
      },
      compliance: {
        role: 'Compliance / Legal',
        jobs: [
          'Meet SEC, FINRA, and regulatory requirements for communications',
          'Enable efficient eDiscovery across all digital channels',
          'Ensure data retention policies are enforced consistently',
        ],
        painPoints: [
          'Multi-channel communications hard to capture and supervise',
          'eDiscovery costs and complexity increasing',
          'Regulatory scrutiny on digital communications growing',
        ],
      },
    },

    // Customer Voice
    customerVoice: {
      quotes: [
        {
          text: 'Proofpoint blocks threats that Microsoft Defender misses. The combination gives us defense in depth that our board expects.',
          source: 'Gartner Peer Insights',
          competitor: 'Microsoft',
        },
        {
          text: 'We evaluated several vendors but Proofpoint\'s detection efficacy was clearly superior. 99.99% threat blocking is real.',
          source: 'Gartner Peer Insights',
          competitor: 'Multiple',
        },
        {
          text: 'The platform breadth is unmatched - email, DLP, awareness training, archiving. One vendor for human-centric security.',
          source: 'G2 Review',
          competitor: null,
        },
      ],
      commonThemes: [
        'Superior detection efficacy vs. native M365',
        'Platform breadth reduces vendor sprawl',
        'Strong enterprise support and services',
        'Trusted by Fortune 100 companies',
      ],
    },

    // Pain/Gain
    painGain: [
      { pain: 'Missed sophisticated BEC/ATO attacks', gain: '99.99% threat detection efficacy' },
      { pain: 'Siloed email, DLP, SAT tools', gain: 'Unified Prime platform' },
      { pain: 'Manual SOC investigation burden', gain: 'GenAI-powered threat summaries' },
      { pain: 'No visibility into human risk', gain: 'Human Risk Scoring & insights' },
      { pain: 'Email-only protection gaps', gain: 'Multichannel defense (Teams, Slack, etc.)' },
      { pain: 'Microsoft Defender limitations', gain: 'Premium layer catching what native misses' },
    ],

    // Economics
    economics: {
      pricingModel: {
        type: 'Per-user subscription',
        notes: 'Tiered by capability bundle. Premium pricing justified by enterprise scale and platform breadth.',
      },
      tcoAdvantages: [
        'Platform consolidation reduces total vendor count',
        '99.99% efficacy reduces breach risk and incident costs',
        'Automated workflows reduce SOC headcount needs',
        'Compliance/archiving included vs. separate vendors',
      ],
      roiMetrics: [
        { metric: '99.99%', description: 'Threat detection rate' },
        { metric: '85%', description: 'Fortune 100 penetration' },
        { metric: '$2B+', description: 'ARR milestone (2024)' },
        { metric: '1,507', description: 'Gartner Peer reviews' },
      ],
      budgetTrends: [
        'Email security budgets increasing (12% CAGR)',
        'Platform consolidation driving vendor reduction',
        'Human risk management emerging as budget category',
      ],
    },

    // Core Product
    coreProduct: {
      architecture: 'API + Gateway (flexible deployment)',
      deployment: 'Cloud-native with M365/Google Workspace integration',
      primaryUseCases: [
        'Business Email Compromise (BEC)',
        'Account Takeover Detection (ATO)',
        'Credential Phishing & Malware',
        'Multichannel Attack Protection',
        'Data Loss Prevention (DLP)',
      ],
      keyCapabilities: [
        'Nexus AI Platform (5 integrated AI models)',
        'Multichannel Defense (email, Teams, Slack, Zoom)',
        'Human Risk Scoring & Insights',
        'Autonomous Threat Remediation',
        'Security Awareness Training (integrated)',
        'Digital Communications Archiving',
      ],
      integrations: ['Microsoft 365', 'Google Workspace', 'Slack', 'Microsoft Teams', 'Zoom', 'CrowdStrike', 'Splunk'],
      dataAssets: [
        { name: 'Nexus LM', description: 'Language Model for BEC detection' },
        { name: 'Nexus ML', description: 'Machine Learning threat prediction' },
        { name: 'Nexus RG', description: 'Relationship Graph behavioral analytics' },
        { name: 'Nexus CV', description: 'Computer Vision for QR/visual threats' },
        { name: 'Nexus TI', description: 'Threat Intelligence integration' },
        { name: 'Nexus GenAI', description: 'Generative AI for DLP analysis' },
      ],
    },

    // Differentiation
    differentiation: [
      {
        title: 'Execution Leader - Highest in Gartner MQ',
        description: 'Ranked #1 in Ability to Execute for two consecutive years. #1 in 4 of 5 Gartner Critical Capabilities use cases. Proven at enterprise scale.',
        icon: '🏆'
      },
      {
        title: 'Nexus AI Platform - 6 Integrated Models',
        description: 'Not just one AI approach - ensemble of Language Models, ML, Relationship Graphs, Computer Vision, Threat Intel, and GenAI working together.',
        icon: '🧠'
      },
      {
        title: 'Platform Breadth - Human-Centric Security',
        description: 'Only vendor with email + DLP + SAT + archiving + identity in unified platform. Reduces vendor sprawl while improving protection.',
        icon: '🔗'
      },
      {
        title: 'Enterprise Scale - 85% Fortune 100',
        description: 'Dominant enterprise presence creates network effects. 2.7M+ orgs, $2B+ ARR, financial stability under Thoma Bravo.',
        icon: '🏢'
      },
    ],

    // Competitive Positioning
    competitivePositioning: {
      vsAbnormal: {
        proofpointWins: 'Platform breadth (DLP, SAT, archiving), enterprise relationships, proven at scale, gateway + API flexibility.',
        competitorWins: 'Faster deployment, API-native architecture, lower operational overhead, newer behavioral AI.',
      },
      vsMicrosoft: {
        proofpointWins: 'Catches what Defender misses. 99.99% vs. native efficacy. Premium detection tier. Human risk insights.',
        competitorWins: 'Native integration, included in E5, no incremental cost, single vendor simplicity.',
      },
      vsMimecast: {
        proofpointWins: 'Gartner Leader vs. Challenger, broader platform, stronger Fortune 100 presence, Nexus AI.',
        competitorWins: 'Strong archiving/compliance heritage, aggressive pricing, mid-market focus.',
      },
    },

    // Strengths & Weaknesses
    strengths: [
      'Gartner MQ Leader - Highest in Execution (2024, 2025)',
      '#1 in 4 of 5 Gartner Critical Capabilities use cases',
      '99.99% threat detection efficacy - industry leading',
      '85% of Fortune 100 are customers',
      '$2B+ ARR - financial stability under Thoma Bravo',
      'Nexus AI platform with 6 integrated AI models',
      'Broadest platform: email + DLP + SAT + compliance + identity',
      'Hornetsecurity acquisition ($1.8B) expands MSP/SMB reach',
      'Strong Microsoft partnership - Defender complement strategy',
      '4.6/5 Gartner Peer Insights (1,507 reviews)',
    ],
    weaknesses: [
      'Premium pricing may challenge budget-constrained buyers',
      'Private equity ownership raises long-term strategic questions',
      'Legacy SEG perception despite modern platform capabilities',
      'Less API-native than pure-play ICES vendors (Abnormal)',
      'Hornetsecurity integration complexity (acquired Dec 2025)',
      'Platform breadth may create deployment complexity',
      'Competition from Microsoft native bundled offerings',
    ],

    // Strategic Outlook
    outlook: {
      tailwinds: [
        'Email remains #1 attack vector - market growing 12%+ CAGR',
        'Hornetsecurity deal creates largest email security company globally',
        'Thoma Bravo investment fueling aggressive M&A and innovation',
        'Platform consolidation trend favors unified vendors',
        'Agentic AI capabilities positioning for next-gen automation',
      ],
      headwinds: [
        'Microsoft Defender bundling erodes standalone email security TAM',
        'API-native pure-play vendors capturing greenfield deployments',
        'PE ownership may prioritize margin over innovation velocity',
        'Customer consolidation pressure in enterprise segment',
      ],
      trajectory: 'Proofpoint has cemented position as execution leader in enterprise email security. Hornetsecurity acquisition creates global scale. Key question: can they maintain innovation velocity while optimizing for PE returns?',
      peOwnership: [
        'Thoma Bravo acquired for $12.3B (Aug 2021)',
        'Crossed $2B ARR milestone (mid-2024)',
        'Aggressive M&A: Tessian, Normalyze, Hornetsecurity',
        'Potential IPO or strategic exit 2026-2028',
      ],
    },

    // Key Metrics
    metrics: {
      detectionRate: '99.99% threats blocked',
      mttd: 'Pre-delivery blocking',
      workloadReduction: 'GenAI-powered triage',
      deploymentTime: 'Cloud-native deployment',
      falsePositiveRate: 'Industry-leading precision',
      mailboxesProtected: '2.7M+ organizations',
    },

    // Recent News
    news: [
      {
        date: 'Dec 2025',
        title: 'Gartner MQ Leader - Highest in Execution',
        summary: 'Named Leader for second consecutive year. Ranked highest in Ability to Execute.',
        type: 'recognition',
        source: 'Gartner Magic Quadrant for Email Security, 2025'
      },
      {
        date: 'Dec 2025',
        title: 'Hornetsecurity Acquisition Closes ($1.8B)',
        summary: 'Creates world\'s largest email security company. Adds 125K+ SMB customers via 12K MSP partners.',
        type: 'funding',
        source: 'Proofpoint Press Release'
      },
      {
        date: 'Apr 2025',
        title: 'Prime Threat Protection Launch',
        summary: 'Unveiled unified multichannel defense platform with Nexus AI at RSAC 2025.',
        type: 'product',
        source: 'Proofpoint RSAC Announcement'
      },
      {
        date: 'Feb 2025',
        title: '#1 in Gartner Critical Capabilities',
        summary: 'Ranked #1 in 4 of 5 use cases: core email, outbound DLP, platform integration, power user.',
        type: 'recognition',
        source: 'Gartner Critical Capabilities for Email Security, 2025'
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
        {/* Proofpoint - Plateau */}
        <circle cx="540" cy="82" r="8" fill="#22c55e"/>
        <text x="540" y="62" textAnchor="middle" className="text-xs" fill="#22c55e" fontSize="10">Enterprise SEG</text>
        <text x="540" y="110" textAnchor="middle" className="text-xs" fill="#9ca3af" fontSize="9">(Proofpoint)</text>
        {/* API-based ICES */}
        <circle cx="420" cy="105" r="6" fill="#8b5cf6" opacity="0.7"/>
        <text x="420" y="85" textAnchor="middle" fill="#8b5cf6" fontSize="9">API-based ICES</text>
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
              <span className="text-gray-300">Proofpoint</span>
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
                <span className="px-3 py-1 bg-green-900/50 text-green-400 border border-green-700 rounded-full text-sm">
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
            <div className="text-2xl font-bold text-white mb-1">$12.3B</div>
            <div className="text-xs text-gray-400">Acquisition (2021)</div>
          </div>
          <div className="bg-gray-900 rounded-xl p-4 border border-gray-800">
            <div className="text-2xl font-bold text-green-400 mb-1">$2B+</div>
            <div className="text-xs text-gray-400">ARR (2024)</div>
          </div>
          <div className="bg-gray-900 rounded-xl p-4 border border-gray-800">
            <div className="text-2xl font-bold text-white mb-1">2.7M+</div>
            <div className="text-xs text-gray-400">Organizations</div>
          </div>
          <div className="bg-gray-900 rounded-xl p-4 border border-gray-800">
            <div className="text-2xl font-bold text-white mb-1">4,500+</div>
            <div className="text-xs text-gray-400">Employees</div>
          </div>
          <div className="bg-gray-900 rounded-xl p-4 border border-gray-800">
            <div className="text-2xl font-bold text-green-400 mb-1">{company.marketPosition.fortune500}</div>
            <div className="text-xs text-gray-400">Fortune 100</div>
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
                          ? 'bg-green-900/50 text-green-400 border border-green-800'
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
                    <span className="text-gray-500">Gartner Rating</span>
                    <span className="text-white">4.6/5 (1,507)</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-500">Fortune 100</span>
                    <span className="text-white">85%</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-500">Gartner MQ</span>
                    <span className="text-white">Leader (#1 Exec)</span>
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
                      <span className="text-gray-500">Founder</span>
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
                      <span className="text-gray-300">Sumit Dhawan (since 2023)</span>
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
                      <span className="text-green-400 text-xs">{company.marketPosition.gartnerPosition}</span>
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
                'Proofpoint Company Website - Corporate Information',
                'Thoma Bravo Portfolio Company Profile',
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
                    <div className="text-lg font-bold text-green-400">{company.marketContext.marketSize.cagr}</div>
                    <div className="text-xs text-gray-500">CAGR</div>
                  </div>
                </div>
              </div>

              {/* Architecture Shift */}
              <div className="mb-6">
                <h3 className="text-sm font-semibold text-gray-400 mb-3">Platform Evolution</h3>
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
                <h3 className="text-sm font-semibold text-gray-400 mb-3">Platform Expansion Categories</h3>
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
                        <span className="text-green-400">→</span>
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

              {/* Nexus AI Data Assets */}
              <div>
                <h3 className="text-sm font-semibold text-gray-400 mb-3">Nexus AI Platform - 6 Integrated Models</h3>
                <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
                  {company.coreProduct.dataAssets.map((asset, idx) => (
                    <div key={idx} className="bg-gray-800 rounded-lg p-3">
                      <div className="text-sm font-medium text-green-400">{asset.name}</div>
                      <div className="text-xs text-gray-500">{asset.description}</div>
                    </div>
                  ))}
                </div>
              </div>

              <CitationFooter citations={[
                'Proofpoint Nexus AI Platform Documentation',
                'Proofpoint Prime Threat Protection Product Page',
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
                  <h3 className="text-sm font-semibold text-green-400 mb-3">👔 {company.stakeholderJTBD.ciso.role}</h3>
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

                {/* Compliance */}
                <div className="bg-gray-800 rounded-lg p-4">
                  <h3 className="text-sm font-semibold text-purple-400 mb-3">⚖️ {company.stakeholderJTBD.compliance.role}</h3>
                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <div className="text-xs text-gray-500 mb-2">JOBS TO BE DONE</div>
                      {company.stakeholderJTBD.compliance.jobs.map((job, idx) => (
                        <div key={idx} className="text-sm text-gray-300 mb-1">• {job}</div>
                      ))}
                    </div>
                    <div>
                      <div className="text-xs text-gray-500 mb-2">PAIN POINTS</div>
                      {company.stakeholderJTBD.compliance.painPoints.map((pain, idx) => (
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
                    <div key={idx} className="bg-gray-800 rounded-lg p-4 border-l-2 border-green-500">
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
                'Gartner Peer Insights - Proofpoint Reviews',
                'G2 Crowd Reviews - Proofpoint Email Security',
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
                <h3 className="text-sm font-semibold text-gray-400 mb-3">Key Metrics</h3>
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
                'Proofpoint ROI Calculator and Case Studies',
                'Thoma Bravo Portfolio Performance Data',
              ]} />
            </section>

            {/* Differentiation Section */}
            <section id="differentiation" className="bg-gray-900 rounded-xl border border-gray-800 p-6">
              <h2 className="text-xl font-semibold mb-4 flex items-center gap-2">
                <span>⚡</span> Competitive Differentiation
              </h2>

              <div className="grid md:grid-cols-2 gap-4 mb-6">
                {company.differentiation.map((diff, idx) => (
                  <div key={idx} className="bg-gray-800 rounded-lg p-4 border-l-2 border-green-500">
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
                    <div className="font-medium text-white mb-2">vs. Abnormal Security</div>
                    <div className="grid md:grid-cols-2 gap-4 text-sm">
                      <div>
                        <span className="text-green-400 text-xs">PROOFPOINT WINS:</span>
                        <p className="text-gray-400 mt-1">{company.competitivePositioning.vsAbnormal.proofpointWins}</p>
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
                        <span className="text-green-400 text-xs">PROOFPOINT WINS:</span>
                        <p className="text-gray-400 mt-1">{company.competitivePositioning.vsMicrosoft.proofpointWins}</p>
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
                        <span className="text-green-400 text-xs">PROOFPOINT WINS:</span>
                        <p className="text-gray-400 mt-1">{company.competitivePositioning.vsMimecast.proofpointWins}</p>
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

              {/* PE Ownership */}
              <div className="mb-6">
                <h3 className="text-sm font-semibold text-gray-400 mb-3">Thoma Bravo Ownership</h3>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
                  {company.outlook.peOwnership.map((item, idx) => (
                    <div key={idx} className="bg-gray-800 rounded-lg p-3">
                      <div className="flex items-center gap-2 text-sm text-gray-300">
                        <span className="text-green-400">✓</span>
                        {item}
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="bg-green-900/20 border border-green-800/50 rounded-lg p-4">
                <h3 className="text-sm font-semibold text-green-400 mb-2">Trajectory</h3>
                <p className="text-sm text-gray-300">{company.outlook.trajectory}</p>
              </div>

              <CitationFooter citations={[
                'Thoma Bravo Portfolio Company Updates',
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

export default ProofpointCompanyPage;
