"use client";

import React, { useState } from 'react';

const SophosCompanyPage = () => {
  const [activeSection, setActiveSection] = useState('overview');

  // Company data - comprehensive template structure
  const company = {
    name: 'Sophos',
    product: 'Sophos Email Security',
    tagline: 'MDR-optimized email security with 40 years of protection heritage',
    position: 'Platform Leader',
    positionColor: 'cyan',
    website: 'https://www.sophos.com',
    
    // Snapshot
    snapshot: {
      founded: '1985',
      founders: 'Jan Hruska & Peter Lammer',
      hq: 'Oxford, United Kingdom',
      funding: 'Private (Thoma Bravo)',
      valuation: '$3.9B (Acquisition, Mar 2020)',
      arr: '$1B+ (est. largest MDR)',
      customers: '600,000+ organizations',
      employees: '5,000+ globally',
      investors: 'Thoma Bravo (PE owner since 2020)',
    },

    // Market Context
    marketContext: {
      hypeCyclePosition: 'Plateau of Productivity',
      hypeCycleDetail: 'Sophos represents mature, integrated security platform play. Email security is one component of a comprehensive Adaptive Cybersecurity Ecosystem spanning endpoint, network, email, cloud, and managed services.',
      marketSize: {
        current: '$4.68B (2024)',
        projected: '$10.83B (2032)',
        cagr: '~12%',
      },
      architectureShift: {
        from: 'Standalone Email Security',
        to: 'MDR-Integrated Platform',
        fromTraits: ['Siloed email gateway', 'Manual SOC triage', 'Limited visibility', 'Reactive defense'],
        toTraits: ['Unified Central console', '24/7 MDR response', 'Cross-vector visibility', 'Proactive threat hunting'],
      },
      whatsReplacingWhat: [
        { old: 'Standalone SEG', new: 'Ecosystem-integrated email' },
        { old: 'Manual threat response', new: 'MDR analyst-led remediation' },
        { old: 'Single-vendor email only', new: 'Multi-vector detection & response' },
      ],
      adjacentCategories: [
        'Managed Detection & Response (MDR)',
        'Extended Detection & Response (XDR)',
        'Endpoint Protection Platform (EPP)',
        'Network Firewall',
        'Identity Threat Detection & Response (ITDR)',
      ],
    },

    // Market Position
    marketPosition: {
      gartnerPosition: 'Leader - EPP 16 consecutive years (2007-2025)',
      category: 'Integrated Security Platform',
      subCategory: 'MDR-Optimized Email Security',
      fortune500: '28,000+ MDR customers',
      keyRecognition: [
        'KuppingerCole Email Security Leader (All 4 categories) 2025',
        'Gartner EPP Leader - 16 consecutive years',
        'Gartner Peer Insights Customers\' Choice (4.9/5 MDR)',
      ]
    },

    // Stakeholder JTBD
    stakeholderJTBD: {
      ciso: {
        role: 'CISO / IT Director',
        jobs: [
          'Consolidate security vendors onto a single platform',
          'Get 24/7 protection without building a SOC',
          'Prove security ROI with measurable outcomes',
        ],
        painPoints: [
          'Too many point products to manage',
          'Can\'t afford 24/7 security team staffing',
          'Board pressure for measurable risk reduction',
        ],
      },
      socAnalyst: {
        role: 'MSP / MSSP Owner',
        jobs: [
          'Deliver profitable managed security services',
          'Scale operations without proportional headcount',
          'Differentiate from competitors with premium MDR',
        ],
        painPoints: [
          'Margin pressure on managed services',
          'Talent shortage for 24/7 SOC staffing',
          'Multiple vendor consoles creating operational chaos',
        ],
      },
      endUser: {
        role: 'IT Administrator',
        jobs: [
          'Protect users from phishing without constant tuning',
          'Quickly remediate threats when they\'re detected',
          'Manage email security from one console with everything else',
        ],
        painPoints: [
          'Alert fatigue from too many notifications',
          'Manual investigation takes too much time',
          'Switching between consoles for endpoint vs email vs network',
        ],
      },
    },

    // Customer Voice
    customerVoice: {
      quotes: [
        {
          text: 'Sophos MDR helps us sleep at night knowing our environment is monitored 24/7. The integration with email security means threats don\'t slip through.',
          source: 'G2 Review',
          competitor: null,
        },
        {
          text: 'The integration between Sophos Email and the broader ecosystem is seamless. One console for everything reduces our operational burden significantly.',
          source: 'Gartner Peer Insights',
          competitor: null,
        },
        {
          text: 'Moving from Mimecast to Sophos gave us better integration with our endpoint and firewall protection. The unified view is invaluable.',
          source: 'G2 Review',
          competitor: 'Mimecast',
        },
      ],
      commonThemes: [
        'Single console for all security (Sophos Central)',
        'MDR integration is unique differentiator',
        'Channel-friendly for MSP partners',
        'Strong SMB/mid-market fit',
      ],
    },

    // Pain/Gain
    painGain: [
      { pain: 'Multiple security consoles', gain: 'Single Sophos Central platform' },
      { pain: 'No 24/7 security coverage', gain: 'MDR analyst response included' },
      { pain: 'Phishing bypassing defenses', gain: 'NLP-powered BEC detection' },
      { pain: 'Slow post-delivery remediation', gain: 'Real-time MDR clawback' },
      { pain: 'Standalone email security gaps', gain: 'Cross-vector threat correlation' },
      { pain: 'Managing multiple vendors', gain: 'Unified ecosystem approach' },
    ],

    // Economics
    economics: {
      pricingModel: {
        type: 'Per-user subscription',
        notes: 'Bundled pricing with broader Sophos platform. Attractive for organizations already using Sophos endpoint/firewall.',
      },
      tcoAdvantages: [
        'Platform consolidation reduces total vendor count',
        'MDR included - no separate SOC investment needed',
        'Single console reduces admin overhead',
        'Channel pricing through MSPs creates flexibility',
      ],
      roiMetrics: [
        { metric: '97.5%', description: 'Less cyber insurance claims (MDR)' },
        { metric: '28,000+', description: 'MDR customers protected' },
        { metric: '4.9/5', description: 'Gartner Peer Insights (MDR)' },
        { metric: '100%', description: 'MITRE detection rate' },
      ],
      budgetTrends: [
        'Platform consolidation driving unified purchases',
        'MDR services growing 14%+ annually',
        'MSP-delivered security accelerating',
      ],
    },

    // Core Product
    coreProduct: {
      architecture: 'Gateway + API (flexible deployment)',
      deployment: 'Cloud-native via Sophos Central with M365/Google API integration',
      primaryUseCases: [
        'Business Email Compromise (BEC)',
        'Phishing & Credential Theft',
        'Malware & Ransomware Delivery',
        'Impersonation Attacks',
        'Data Loss Prevention (DLP)',
      ],
      keyCapabilities: [
        'Natural Language Processing (NLP) for BEC',
        'MDR-integrated threat response',
        'Post-delivery clawback',
        'Sophos Central unified management',
        'DMARC Manager (Sendmarc partnership)',
        'Sophos Phish Threat (SAT included)',
      ],
      integrations: ['Microsoft 365', 'Google Workspace', 'Sophos Endpoint', 'Sophos Firewall', 'Sophos XDR', 'SIEM/SOAR'],
      dataAssets: [
        { name: 'Sophos X-Ops', description: 'Threat intelligence & research' },
        { name: 'Secureworks CTU', description: 'Counter Threat Unit intel' },
        { name: 'Central Data Lake', description: 'Cross-product telemetry' },
        { name: 'MDR Telemetry', description: '28,000+ customer signals' },
      ],
    },

    // Differentiation
    differentiation: [
      {
        title: 'Only MDR-Optimized Email Security',
        description: 'Unique market position - email security with native MDR integration. Real-time threat response and manual clawback by MDR analysts during active attacks.',
        icon: '🛡️'
      },
      {
        title: 'Adaptive Cybersecurity Ecosystem',
        description: 'Email is one component of integrated platform spanning endpoint, network, cloud, and identity. Shared threat intelligence across all vectors via Sophos Central.',
        icon: '🔗'
      },
      {
        title: '40 Years of Security Heritage',
        description: 'Founded 1985 in Oxford. 16 consecutive years as Gartner EPP Leader. Deep expertise spanning antivirus, encryption, network, and managed services.',
        icon: '🏛️'
      },
      {
        title: 'Channel-First Go-To-Market',
        description: 'Purpose-built for MSPs and MSSPs. 600,000+ organizations protected through partner ecosystem. MSP Flex licensing and partner-friendly economics.',
        icon: '🤝'
      },
    ],

    // Competitive Positioning
    competitivePositioning: {
      vsProofpoint: {
        sophosWins: 'Platform integration (endpoint, network, email in one), MDR-included response, better SMB/mid-market fit, channel-friendly.',
        competitorWins: 'Deeper enterprise relationships, broader compliance/archiving, larger Fortune 500 presence.',
      },
      vsAbnormal: {
        sophosWins: 'Full platform (not email-only), MDR human response, broader security coverage, established brand, channel presence.',
        competitorWins: 'API-native architecture, faster deployment, behavioral AI focus, higher venture valuation.',
      },
      vsMimecast: {
        sophosWins: 'Platform integration beyond email, MDR-optimized, stronger endpoint/firewall synergies, KuppingerCole Leader all categories.',
        competitorWins: 'Deeper archiving/compliance features, stronger email-specific brand recognition.',
      },
    },

    // Strengths & Weaknesses
    strengths: [
      'Only email security with native MDR integration',
      'KuppingerCole Leader - all 4 categories (2025)',
      'Perfect malware catch rate, zero false positives (VBSpam Q2 2025)',
      '16 consecutive years Gartner EPP Leader',
      'Unified Sophos Central console across all products',
      'Largest pure-play MDR provider (28,000+ customers)',
      '40 years security heritage - established trust',
      'Secureworks acquisition adds XDR/ITDR capabilities',
    ],
    weaknesses: [
      'Less brand recognition in email security vs. Proofpoint/Mimecast',
      'Primarily SMB/mid-market - lighter enterprise presence',
      'Platform value diminished for non-Sophos shops',
      'PE ownership raises questions about R&D investment',
      'Secureworks integration still in progress',
      'Not API-native like newer ICES players (Abnormal)',
    ],

    // Strategic Outlook
    outlook: {
      tailwinds: [
        'MDR services market growing 14%+ CAGR',
        'Platform consolidation favors unified vendors',
        'Secureworks acquisition adds enterprise capabilities',
        'MSP market acceleration benefits channel model',
        'Security talent shortage drives managed services',
      ],
      headwinds: [
        'API-native ICES players (Abnormal) capturing greenfield',
        'Proofpoint/Microsoft dominate large enterprise',
        'PE ownership may prioritize margin over innovation',
        'Email security not primary GTM focus',
      ],
      trajectory: 'Sophos is executing a platform consolidation strategy with email as one component of the broader ecosystem. The unique MDR integration is a genuine differentiator. Key question: can they compete against email-focused specialists?',
      ipoReadiness: [
        'Secureworks Taegis XDR integration (2025)',
        'Sophos ITDR launch (Oct 2025)',
        'Sophos AI Assistant (early 2025)',
        'All integrations included free (Nov 2025)',
      ],
    },

    // Key Metrics
    metrics: {
      detectionRate: '100% MITRE ATT&CK',
      mttd: 'Real-time MDR',
      workloadReduction: 'MDR handles 24/7',
      deploymentTime: 'Gateway + API',
      falsePositiveRate: 'Zero FP (VBSpam)',
      mailboxesProtected: '28,000+ MDR customers',
    },

    // Recent News
    news: [
      {
        date: 'Nov 2025',
        title: 'KuppingerCole Email Security Leader - All 4 Categories',
        summary: 'Named Overall, Product, Innovation, and Market Leader. Highest product score among 14 vendors evaluated.',
        type: 'recognition',
        source: 'KuppingerCole Leadership Compass 2025'
      },
      {
        date: 'Oct 2025',
        title: 'Sophos ITDR Launch',
        summary: 'Identity Threat Detection & Response launched, leveraging Secureworks capabilities for identity protection.',
        type: 'product',
        source: 'Sophos Press Release'
      },
      {
        date: 'Jul 2025',
        title: 'Gartner EPP Leader - 16th Consecutive Year',
        summary: 'Only vendor named Customers\' Choice in both EPP and XDR Voice of Customer reports.',
        type: 'recognition',
        source: 'Gartner Magic Quadrant EPP 2025'
      },
      {
        date: 'Feb 2025',
        title: 'Secureworks Acquisition Closes ($859M)',
        summary: 'Creates largest pure-play MDR provider with 28,000+ customers. Adds Taegis XDR platform.',
        type: 'funding',
        source: 'Thoma Bravo Press Release'
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
        <circle cx="520" cy="82" r="8" fill="#06b6d4"/>
        <text x="520" y="62" textAnchor="middle" className="text-xs" fill="#06b6d4" fontSize="10">Integrated Platform</text>
        <text x="520" y="110" textAnchor="middle" className="text-xs" fill="#9ca3af" fontSize="9">(Sophos)</text>
        <circle cx="420" cy="105" r="6" fill="#22c55e" opacity="0.5"/>
        <text x="420" y="85" textAnchor="middle" fill="#22c55e" fontSize="9">API-based ICES</text>
        <circle cx="120" cy="40" r="6" fill="#6366f1" opacity="0.5"/>
        <text x="120" y="25" textAnchor="middle" fill="#6366f1" fontSize="9">GenAI Email</text>
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
              <span className="text-gray-300">Sophos</span>
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
                <span className="px-3 py-1 bg-cyan-900/50 text-cyan-400 border border-cyan-700 rounded-full text-sm">
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
            <div className="text-xs text-gray-400">ARR (est. MDR leader)</div>
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
            <div className="text-2xl font-bold text-cyan-400 mb-1">{company.marketPosition.fortune500}</div>
            <div className="text-xs text-gray-400">MDR Scale</div>
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
                          ? 'bg-cyan-900/50 text-cyan-400 border border-cyan-800'
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
                    <span className="text-gray-500">SOC Coverage</span>
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
                      <span className="text-cyan-400 text-xs">{company.marketPosition.gartnerPosition}</span>
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
                'Sophos Company Website - Corporate Information',
                'Thoma Bravo Portfolio Company Profile',
                'KuppingerCole Leadership Compass for Email Security, 2025',
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
                    <div className="text-lg font-bold text-cyan-400">{company.marketContext.marketSize.cagr}</div>
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
                        <span className="text-cyan-400">→</span>
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
                <h3 className="text-sm font-semibold text-gray-400 mb-3">Threat Intelligence Data Assets</h3>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
                  {company.coreProduct.dataAssets.map((asset, idx) => (
                    <div key={idx} className="bg-gray-800 rounded-lg p-3">
                      <div className="text-sm font-medium text-cyan-400">{asset.name}</div>
                      <div className="text-xs text-gray-500">{asset.description}</div>
                    </div>
                  ))}
                </div>
              </div>

              <CitationFooter citations={[
                'Sophos Email Product Documentation',
                'Sophos Central Platform Architecture Overview',
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
                  <h3 className="text-sm font-semibold text-cyan-400 mb-3">👔 {company.stakeholderJTBD.ciso.role}</h3>
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

                {/* SOC Analyst / MSP */}
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

                {/* End User / IT Admin */}
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
                    <div key={idx} className="bg-gray-800 rounded-lg p-4 border-l-2 border-cyan-500">
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
                'G2 Crowd Reviews - Sophos Email Security',
                'Gartner Peer Insights - MDR Reviews',
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
                'Sophos Quantifying ROI Report, February 2025',
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
                  <div key={idx} className="bg-gray-800 rounded-lg p-4 border-l-2 border-cyan-500">
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
                        <span className="text-green-400 text-xs">SOPHOS WINS:</span>
                        <p className="text-gray-400 mt-1">{company.competitivePositioning.vsProofpoint.sophosWins}</p>
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
                        <span className="text-green-400 text-xs">SOPHOS WINS:</span>
                        <p className="text-gray-400 mt-1">{company.competitivePositioning.vsAbnormal.sophosWins}</p>
                      </div>
                      <div>
                        <span className="text-red-400 text-xs">COMPETITOR WINS:</span>
                        <p className="text-gray-400 mt-1">{company.competitivePositioning.vsAbnormal.competitorWins}</p>
                      </div>
                    </div>
                  </div>
                  <div className="bg-gray-800 rounded-lg p-4">
                    <div className="font-medium text-white mb-2">vs. Mimecast</div>
                    <div className="grid md:grid-cols-2 gap-4 text-sm">
                      <div>
                        <span className="text-green-400 text-xs">SOPHOS WINS:</span>
                        <p className="text-gray-400 mt-1">{company.competitivePositioning.vsMimecast.sophosWins}</p>
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
                'KuppingerCole Leadership Compass for Email Security, 2025',
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
                'KuppingerCole Leadership Compass Analysis',
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

              {/* Platform Evolution */}
              <div className="mb-6">
                <h3 className="text-sm font-semibold text-gray-400 mb-3">Platform Evolution (2025)</h3>
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

              <div className="bg-cyan-900/20 border border-cyan-800/50 rounded-lg p-4">
                <h3 className="text-sm font-semibold text-cyan-400 mb-2">Trajectory</h3>
                <p className="text-sm text-gray-300">{company.outlook.trajectory}</p>
              </div>

              <CitationFooter citations={[
                'Sophos Product Announcements 2025',
                'Industry Analyst Forecasts - MDR Market',
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

export default SophosCompanyPage;
