"use client";
import React, { useState } from 'react';
import { Logo } from '@/components/Logo';

const DLPPage = () => {
  const [activeSection, setActiveSection] = useState('overview');

  // Data & Application sub-segments
  const subSegments = [
    { id: 'dlp', name: 'DLP', active: true, href: '/pillars/data-application/dlp' },
    { id: 'dspm', name: 'DSPM', active: false, href: '#' },
    { id: 'drm', name: 'DRM / IRM', active: false, href: '#' },
    { id: 'encryption', name: 'Encryption', active: false, href: '#' },
    { id: 'database-security', name: 'Database Security', active: false, href: '#' },
  ];

  const srpSections = [
    { id: 'overview', name: 'Overview', icon: '📋' },
    { id: 'structure', name: 'Market Structure', icon: '🏗️' },
    { id: 'motion', name: 'Market Dynamics', icon: '📈' },
    { id: 'stakeholders', name: 'Stakeholders', icon: '👥' },
    { id: 'economics', name: 'Economics & ROI', icon: '💰' },
    { id: 'product', name: 'PM Strategy', icon: '🎯' },
    { id: 'theses', name: 'Strategic Theses', icon: '🔮' },
  ];

  // Related pillars (DLP touches multiple pillars)
  const relatedPillars = [
    { name: 'Endpoint & Workload', primary: false },
    { name: 'Network & Edge', primary: false },
    { name: 'SecOps & Analytics', primary: false },
    { name: 'GRC & TIC', primary: false },
  ];

  const keyInsights = [
    { stat: '$17.4M', label: 'Annual insider threat cost' },
    { stat: '14%', label: 'DLP incidents now GenAI-related' },
    { stat: '70%', label: 'CISOs consolidating DLP+IRM by 2027' },
    { stat: '81 days', label: 'Avg time to contain insider incident' },
  ];

  const marketSizing = [
    { source: 'Mordor Intelligence', val2024: '$35.38B (2025)', projection: '$94.09B (2030)', cagr: '21.6%' },
    { source: 'Precedence Research', val2024: '$2.80B', projection: '$21B (2034)', cagr: '22.3%' },
    { source: 'MarketsandMarkets', val2024: '$3.4B (2023)', projection: '$8.9B (2028)', cagr: '21.2%' },
    { source: 'Stratview Research', val2024: '$4.29B', projection: '$19.08B (2032)', cagr: '20.7%' },
    { source: 'Research and Markets', val2024: '$5.36B', projection: '$15.12B (2030)', cagr: '18.9%' },
  ];

  const marketSubSegments = [
    'Endpoint DLP',
    'Network DLP',
    'Cloud DLP (SaaS/IaaS)',
    'Email DLP',
    'DSPM (Data Security Posture Mgmt)',
    'IRM (Insider Risk Management)',
    'DRM (Digital Rights Management)',
    'CASB (Cloud Access Security Broker)',
  ];

  // Top vendors by consensus
  const competitors = [
    {
      name: 'Microsoft Purview',
      product: 'Microsoft Purview DLP',
      position: 'Platform Incumbent',
      focus: 'Dominant in M365 environments. 11.5% mind share (PeerSpot). Native Teams/Exchange/SharePoint integration. E5 bundling.',
      status: 'in-progress',
      href: '/pillars/data-application/dlp/companies/microsoft'
    },
    {
      name: 'Symantec (Broadcom)',
      product: 'Symantec DLP',
      position: 'Pure-Play Leader',
      focus: '8 consecutive years as Gartner MQ leader (pre-2018). Strongest content inspection. Enterprise-grade depth.',
      status: 'in-progress',
      href: '/pillars/data-application/dlp/companies/symantec'
    },
    {
      name: 'Forcepoint',
      product: 'Forcepoint ONE Data Security',
      position: 'Pure-Play Leader',
      focus: 'IDC MarketScape 2025 Leader. AI Mesh classification. Risk-adaptive protection. Strongest cross-channel policy engine.',
      status: 'in-progress',
      href: '/pillars/data-application/dlp/companies/forcepoint'
    },
    {
      name: 'Zscaler',
      product: 'Zscaler DLP',
      position: 'SASE Leader',
      focus: 'IDC MarketScape 2025 Leader. DLP integrated into Zero Trust Exchange. Strong GenAI protection.',
      status: 'in-progress',
      href: '/pillars/data-application/dlp/companies/zscaler'
    },
    {
      name: 'Netskope',
      product: 'Netskope One DLP',
      position: 'CASB Leader',
      focus: 'Strong CASB heritage. Acquired Dasera (DSPM, Oct 2024). Cloud-native architecture.',
      status: 'in-progress',
      href: '/pillars/data-application/dlp/companies/netskope'
    },
    {
      name: 'Proofpoint',
      product: 'Proofpoint DLP + ITM',
      position: 'Email Security Leader',
      focus: 'Email DLP leader. Strong insider threat management (ITM). People-centric security.',
      status: 'in-progress',
      href: '/pillars/data-application/dlp/companies/proofpoint'
    },
    {
      name: 'Trellix',
      product: 'Trellix DLP',
      position: 'Enterprise',
      focus: 'Ex-McAfee enterprise endpoint DLP. Strong forensics capabilities.',
      status: 'in-progress',
      href: '/pillars/data-application/dlp/companies/trellix'
    },
    {
      name: 'Palo Alto Networks',
      product: 'Enterprise DLP (Prisma)',
      position: 'Platform Leader',
      focus: 'Acquired Dig Security (DSPM). Talon acquisition. Full security fabric integration.',
      status: 'in-progress',
      href: '/pillars/data-application/dlp/companies/paloalto'
    },
    {
      name: 'Fortinet',
      product: 'FortiDLP',
      position: 'SASE Integrated',
      focus: 'Acquired Next DLP (Aug 2024). AI-enhanced insider risk. FortiSASE integration.',
      status: 'in-progress',
      href: '/pillars/data-application/dlp/companies/fortinet'
    },
    {
      name: 'Digital Guardian (Fortra)',
      product: 'Digital Guardian',
      position: 'IP-Focused',
      focus: 'IP protection specialist. Strong Linux support. SC Magazine "Lab Approved".',
      status: 'in-progress',
      href: '/pillars/data-application/dlp/companies/fortra'
    },
    {
      name: 'Mimecast',
      product: 'Mimecast DLP + Code42',
      position: 'HRM Leader',
      focus: 'Acquired Code42 (July 2024). Human risk management focus. Email security heritage.',
      status: 'in-progress',
      href: '/pillars/data-application/dlp/companies/mimecast'
    },
    {
      name: 'CrowdStrike',
      product: 'Falcon Data Protection',
      position: 'Endpoint Leader',
      focus: 'Strong endpoint telemetry. Unified platform approach. Charlotte AI integration.',
      status: 'in-progress',
      href: '/pillars/data-application/dlp/companies/crowdstrike'
    },
    {
      name: 'Cyberhaven',
      product: 'Cyberhaven Data Detection',
      position: 'Innovator',
      focus: 'Data lineage pioneer. Deloitte Fast 500 #51. 90% false positive reduction. $88M Series C.',
      status: 'in-progress',
      href: '/pillars/data-application/dlp/companies/cyberhaven'
    },
    {
      name: 'Nightfall AI',
      product: 'Nightfall Platform',
      position: 'Cloud-Native',
      focus: 'API-first cloud DLP. Strong GenAI protection. Slack/GitHub focus. Transparent pricing.',
      status: 'in-progress',
      href: '/pillars/data-application/dlp/companies/nightfall'
    },
    {
      name: 'Safetica',
      product: 'Safetica ONE',
      position: 'SMB Leader',
      focus: 'G2 #1 Satisfaction for DLP (Spring 2025). Radicati "Trailblazer". SMB-friendly.',
      status: 'in-progress',
      href: '/pillars/data-application/dlp/companies/safetica'
    },
  ];

  // Helper function for research status styling
  const getStatusStyle = (status) => {
    switch (status) {
      case 'complete':
        return { bg: 'bg-green-900/50', text: 'text-green-400', dot: 'bg-green-400', label: 'Complete' };
      case 'in-progress':
        return { bg: 'bg-yellow-900/50', text: 'text-yellow-400', dot: 'bg-yellow-400', label: 'In Progress' };
      case 'pending':
      default:
        return { bg: 'bg-gray-800', text: 'text-gray-500', dot: 'bg-gray-500', label: 'Pending' };
    }
  };

  const trends = [
    {
      name: 'DLP + Insider Risk Management (IRM) Convergence',
      description: '70% of CISOs consolidating by 2027. Shift from content-centric to user-centric data protection.'
    },
    {
      name: 'GenAI Protection as Critical Use Case',
      description: 'GenAI DLP incidents increased 2.5x. 14% of all DLP incidents now GenAI-related. Shadow AI adds $670K to breach costs.'
    },
    {
      name: 'DSPM + DLP Integration',
      description: '"Discover-then-protect" becoming standard architecture. Major M&A: Palo Alto/Dig, Netskope/Dasera, Forcepoint/Getvisibility.'
    },
    {
      name: 'Risk-Adaptive / Intent-Based DLP',
      description: 'Moving from static policies to dynamic, context-aware enforcement. User behavior analytics distinguishing malicious vs. accidental.'
    },
    {
      name: 'Cloud-Native DLP Dominance',
      description: '67% of DLP deployments now cloud-based. 22.1% CAGR for cloud segment. On-prem relegated to highly regulated sectors.'
    },
  ];

  const hypePositions = [
    { tech: 'Traditional DLP (Content-only)', position: 'Plateau of Productivity', status: 'stable', note: 'Mature, commoditizing' },
    { tech: 'Cloud-Native DLP', position: 'Slope of Enlightenment', status: 'rising', note: '67% deployment share' },
    { tech: 'GenAI/LLM Protection', position: 'Peak of Inflated Expectations', status: 'hot', note: 'Fastest-growing use case' },
    { tech: 'DSPM + DLP Convergence', position: 'Climbing to Peak', status: 'rising', note: 'Major M&A activity' },
    { tech: 'Risk-Adaptive DLP', position: 'Slope of Enlightenment', status: 'rising', note: 'Behavioral AI focus' },
    { tech: 'Data Lineage DLP', position: 'Innovation Trigger', status: 'emerging', note: 'Cyberhaven pioneering' },
  ];

  const maActivity = [
    { date: 'Aug 2024', acquirer: 'Fortinet', target: 'Next DLP', value: 'Undisclosed', signal: 'SASE/endpoint DLP enhancement' },
    { date: 'Oct 2024', acquirer: 'Netskope', target: 'Dasera', value: 'Undisclosed', signal: 'DSPM for Netskope One' },
    { date: 'Jul 2024', acquirer: 'Mimecast', target: 'Code42', value: 'Undisclosed', signal: 'Insider risk + DLP' },
    { date: 'Mar 2025', acquirer: 'Forcepoint', target: 'Getvisibility', value: 'Undisclosed', signal: 'AI-driven DSPM/DDR' },
    { date: 'May 2025', acquirer: 'Fortra', target: 'Lookout Cloud Security', value: 'Undisclosed', signal: 'SSE + DSPM' },
    { date: 'Dec 2023', acquirer: 'Palo Alto Networks', target: 'Dig Security', value: '~$300-400M', signal: 'DSPM for Prisma Cloud' },
  ];

  const cisoJobs = [
    { job: 'Demonstrate compliance to auditors and board', metric: 'Audit pass rate; incident count; regulatory fine avoidance' },
    { job: 'Reduce breach cost exposure from insider threats', metric: '$17.4M annual baseline; MTTR reduction' },
    { job: 'Enable GenAI productivity without data exposure', metric: 'Shadow AI incidents; GenAI DLP coverage' },
    { job: 'Consolidate DLP tools without losing coverage', metric: 'Tool count (avg 6 today); policy consistency' },
  ];

  const secAnalystJobs = [
    { job: 'Triage alerts efficiently without false positive overload', metric: 'False positive rate <5%; alert-to-incident ratio' },
    { job: 'Investigate incidents with sufficient context', metric: 'Mean time to respond (MTTR); context richness' },
    { job: 'Distinguish malicious intent from honest mistakes', metric: 'Intent classification accuracy; user risk scoring' },
  ];

  const complianceJobs = [
    { job: 'Generate audit-ready reports automatically', metric: 'Report generation time; audit prep hours' },
    { job: 'Map policies to regulatory requirements', metric: 'Compliance coverage %; template alignment' },
    { job: 'Demonstrate continuous compliance posture', metric: 'Real-time dashboards; continuous monitoring' },
  ];

  const itOpsJobs = [
    { job: 'Deploy without disrupting business workflows', metric: 'User ticket volume; productivity impact' },
    { job: 'Maintain cross-platform coverage (Win/Mac/Linux)', metric: 'Feature parity score; OS coverage %' },
    { job: 'Integrate with existing security stack', metric: 'Integration count; API availability' },
  ];

  const tableStakes = [
    'Data at rest, in motion, in use coverage',
    'Multi-channel enforcement (email, endpoint, network, cloud)',
    'Content inspection (regex, keywords, fingerprinting)',
    'Automated data classification',
    'Pre-built compliance templates (GDPR, HIPAA, PCI-DSS, CCPA)',
    'Windows endpoint agent',
    'Centralized management console',
    'Incident alerting and workflow',
    'Basic reporting and dashboards',
    'Role-based access control',
    'Cloud deployment option',
    'REST API access',
  ];

  const differentiators = [
    {
      name: 'AI/ML Classification Accuracy',
      description: '35%+ false positive reduction. Machine learning improves over time. Microsoft, Nightfall, Forcepoint leading.'
    },
    {
      name: 'GenAI/LLM Protection',
      description: 'ChatGPT, Copilot, Gemini DLP controls. Prompt inspection, response monitoring. #1 emerging CISO concern.'
    },
    {
      name: 'Data Lineage Tracking',
      description: 'Follows data origin and movement. 90% false positive reduction vs. pattern-matching. Cyberhaven pioneering.'
    },
    {
      name: 'DSPM Integration',
      description: '"Discover-then-protect" architecture. Unified data discovery + DLP enforcement. Major vendors converging here.'
    },
    {
      name: 'Time-to-Value',
      description: '6-week deployment (cloud-native) vs. 6-month (legacy). Critical for mid-market. Nightfall, Safetica leading.'
    },
    {
      name: 'Risk-Adaptive Policies',
      description: 'Dynamic enforcement based on user risk score. 130+ behavioral indicators (Forcepoint). Reduces business friction.'
    },
    {
      name: 'Cross-Platform Parity',
      description: 'Mac/Linux features equal to Windows. 25%+ of enterprise endpoints now Mac. Endpoint Protector, Symantec leading.'
    },
  ];

  const roiMetrics = [
    { metric: 'Annual insider threat cost', value: '$17.4M' },
    { metric: 'Avg breach cost', value: '$4.88M' },
    { metric: 'AI-enabled breach savings', value: '$1.9M' },
    { metric: 'Containment <31 days savings', value: '$8.1M' },
  ];

  const pricingTiers = [
    { tier: 'Platform-Bundled (Microsoft)', range: '$15-57/user/mo', vendors: 'Microsoft Purview (E3-E5)', buyer: 'M365-centric orgs' },
    { tier: 'Enterprise On-Prem', range: '$50K+ annually', vendors: 'Symantec, Forcepoint', buyer: 'Regulated, complex' },
    { tier: 'Cloud-Native SaaS', range: '$3-15/user/mo', vendors: 'Nightfall, Safetica, Cyberhaven', buyer: 'Cloud-first orgs' },
    { tier: 'SASE-Integrated', range: 'Bundled with SASE', vendors: 'Zscaler, Netskope, Fortinet', buyer: 'Network consolidation' },
  ];

  const whiteSpaceGaps = [
    { gap: 'GenAI-Native Protection', severity: 'Critical', reason: 'Only 40% RFP frequency for prompt inspection; 14% of incidents' },
    { gap: 'True Cross-Platform Parity', severity: 'High', reason: '25%+ Mac endpoints; Linux for developers; Windows-only insufficient' },
    { gap: 'Automated Remediation', severity: 'High', reason: 'Beyond alerting to auto-redaction, masking, permission revocation' },
    { gap: 'SMB-Accessible DLP', severity: 'Medium', reason: 'SMB segment growing 23.2% CAGR; need "just works" simplicity' },
  ];

  const theses = [
    {
      id: 1,
      title: 'GenAI is the New DLP Battleground',
      timeframe: '2025-2027',
      confidence: 'High',
      color: 'green',
      claim: 'GenAI data leakage has emerged as the primary catalyst for renewed DLP investment. Vendors without ChatGPT/Copilot/Gemini protection will be disqualified from enterprise RFPs by 2026.',
      evidence: [
        'GenAI DLP incidents increased 2.5x YoY, now 14% of all DLP incidents',
        'Shadow AI adds $670K to breach costs (IBM 2025)',
        '30x increase in data shared with AI tools in one year',
        'Average org shares 7.7GB/month with AI tools; 66 GenAI apps per org'
      ],
      implication: 'If not shipping GenAI DLP controls in 2025, you\'re already behind. This is the fastest-growing use case.',
    },
    {
      id: 2,
      title: 'DLP + IRM Convergence Creates Platform Winners',
      timeframe: '2025-2027',
      confidence: 'High',
      color: 'purple',
      claim: 'By 2027, 70% of CISOs will adopt consolidated DLP + Insider Risk Management. Content-only approaches are obsolete. User context and behavioral analytics determine winners.',
      evidence: [
        'Gartner: 70% of large enterprises consolidating by 2027',
        'Insider risk budget doubled: 8.2% → 16.5% of cyber budget',
        '$17.4M average annual insider threat cost',
        'M&A: Mimecast/Code42, Fortinet/Next DLP signal convergence'
      ],
      implication: 'Point solutions focused only on content inspection face obsolescence. Build or acquire user behavior capabilities.',
    },
    {
      id: 3,
      title: 'Microsoft Purview Creates Two-Tier Market',
      timeframe: '2025-2028',
      confidence: 'Medium-High',
      color: 'orange',
      claim: 'Microsoft\'s E5 bundling makes basic DLP "free" for M365 enterprises, creating a bifurcated market: "good enough" Purview vs. best-of-breed specialists competing on accuracy, cross-platform, and GenAI depth.',
      evidence: [
        '11.5% mind share per PeerSpot—dominant platform position',
        'E3/E5 bundling removes cost barrier for basic DLP',
        'Trainable classifiers and Adaptive Protection in E5',
        'DSPM capabilities expanding (Dec 2025 announcement)'
      ],
      implication: 'Pure-play vendors must differentiate on accuracy, cross-platform coverage, or GenAI depth—not basic content inspection.',
    },
  ];

  const getConfidenceColor = (confidence) => {
    switch (confidence) {
      case 'High':
        return 'bg-green-900/50 text-green-400 border-green-700';
      case 'Medium-High':
        return 'bg-blue-900/50 text-blue-400 border-blue-700';
      case 'Medium':
        return 'bg-yellow-900/50 text-yellow-400 border-yellow-700';
      default:
        return 'bg-gray-800 text-gray-400 border-gray-700';
    }
  };

  const getThesisAccent = (color) => {
    switch (color) {
      case 'green':
        return 'border-l-green-500';
      case 'purple':
        return 'border-l-purple-500';
      case 'orange':
        return 'border-l-orange-500';
      default:
        return 'border-l-blue-500';
    }
  };

  const scrollToSection = (sectionId) => {
    setActiveSection(sectionId);
    document.getElementById(sectionId)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-gray-950 text-white">
      {/* Navigation */}
      <nav className="border-b border-gray-800 bg-gray-950/95 backdrop-blur sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 py-3 flex items-center justify-between">
          <div className="flex items-center gap-4">
            <Logo />
            <span className="text-gray-600">/</span>
            <span className="text-gray-400">Data & Application</span>
          </div>
          <div className="flex gap-6 text-sm">
            <a href="/pillars" className="text-gray-400 hover:text-white transition-colors">Pillars</a>
            <a href="/theses" className="text-gray-400 hover:text-white transition-colors">Theses</a>
            <a href="/about" className="text-gray-400 hover:text-white transition-colors">About</a>
          </div>
        </div>
      </nav>

      {/* Sub-segment Navigation */}
      <div className="border-b border-gray-800 bg-gray-900/50">
        <div className="max-w-7xl mx-auto px-4 py-2 flex items-center gap-6 overflow-x-auto">
          {subSegments.map((seg) => (
            <a
              key={seg.id}
              href={seg.href}
              className={`text-sm whitespace-nowrap px-3 py-1.5 rounded-full transition-all flex items-center gap-1.5 ${
                seg.active 
                  ? 'bg-blue-900/50 text-blue-400 border border-blue-800' 
                  : 'text-gray-500 hover:text-gray-300'
              }`}
            >
              {seg.active && <span className="w-1.5 h-1.5 rounded-full bg-blue-400"></span>}
              {seg.name}
            </a>
          ))}
          <div className="ml-auto flex items-center gap-2 text-xs text-gray-500">
            <span>Also touches:</span>
            {relatedPillars.map((pillar, idx) => (
              <span key={idx} className="px-2 py-0.5 bg-gray-800 rounded text-gray-400">
                {pillar.name}
              </span>
            ))}
          </div>
        </div>
      </div>

      {/* Header */}
      <header className="border-b border-gray-800 bg-gradient-to-b from-gray-900 to-gray-950">
        <div className="max-w-7xl mx-auto px-4 py-12">
          <div className="flex items-start justify-between">
            <div>
              <div className="flex items-center gap-3 mb-4">
                <h1 className="text-4xl font-bold">Data Loss Prevention</h1>
                <span className="px-2 py-1 bg-amber-900/50 text-amber-400 text-xs rounded border border-amber-800">
                  SECOND WAVE
                </span>
              </div>
              <p className="text-xl text-gray-400 max-w-2xl">
                The $3-5B mature market experiencing renewed investment driven by GenAI data protection—addressing the $17.4M insider threat problem
              </p>
            </div>
          </div>
          <div className="mt-6 flex items-center gap-4 text-sm text-gray-500">
            <span>Last updated: January 2026</span>
            <span>•</span>
            <span>Methodology: SRP Framework</span>
            <span>•</span>
            <span className="flex items-center gap-1.5">
              <span className="w-2 h-2 rounded-full bg-yellow-400 animate-pulse"></span>
              Active research
            </span>
          </div>
        </div>
      </header>

      {/* Key Stats Bar */}
      <div className="border-b border-gray-800 bg-gray-900/30">
        <div className="max-w-7xl mx-auto px-4 py-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {keyInsights.map((insight, idx) => (
              <div key={idx} className="text-center">
                <div className="text-3xl font-bold text-white">{insight.stat}</div>
                <div className="text-sm text-gray-500 mt-1">{insight.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* The $17.4M Anchor Callout */}
      <div className="max-w-7xl mx-auto px-4 py-6">
        <div className="bg-gradient-to-r from-amber-900/20 to-orange-900/20 border border-amber-800/50 rounded-xl p-6">
          <div className="flex items-start gap-4">
            <span className="text-3xl">💰</span>
            <div>
              <h3 className="text-lg font-semibold text-amber-400">The $17.4M Insider Threat Anchor</h3>
              <p className="text-gray-300 mt-1">
                The average annual cost of insider threats reached $17.4M—up from $16.2M in 2023. This is the most defensible quantitative anchor for DLP ROI calculations. 
                Organizations containing incidents under 31 days save <span className="text-amber-400 font-semibold">$8.1M</span> vs. those taking 91+ days.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content Grid */}
      <div className="max-w-7xl mx-auto px-4 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          
          {/* Left Sidebar - SRP Navigation */}
          <div className="lg:col-span-1">
            <div className="sticky top-24 space-y-6">
              <div className="bg-gray-900 rounded-xl border border-gray-800 p-4">
                <h3 className="text-sm font-semibold text-gray-400 mb-3">SRP Analysis</h3>
                <div className="space-y-1">
                  {srpSections.map((section) => (
                    <button
                      key={section.id}
                      onClick={() => scrollToSection(section.id)}
                      className={`w-full text-left px-3 py-2 rounded-lg text-sm flex items-center gap-2 transition-all ${
                        activeSection === section.id
                          ? 'bg-blue-900/50 text-blue-400 border border-blue-800'
                          : 'text-gray-400 hover:bg-gray-800 hover:text-white'
                      }`}
                    >
                      <span>{section.icon}</span>
                      {section.name}
                    </button>
                  ))}
                </div>
              </div>

              {/* DLP Data States Visual */}
              <div className="bg-gray-900 rounded-xl border border-gray-800 p-4">
                <h3 className="text-sm font-semibold text-gray-400 mb-3">DLP Data States</h3>
                <div className="space-y-2">
                  <div className="flex items-center gap-2 px-3 py-2 bg-blue-900/30 rounded-lg border border-blue-800/50">
                    <span className="text-blue-400 font-mono text-xs">REST</span>
                    <span className="text-sm text-gray-300">Data at Rest</span>
                  </div>
                  <div className="flex items-center gap-2 px-3 py-2 bg-green-900/30 rounded-lg border border-green-800/50">
                    <span className="text-green-400 font-mono text-xs">MOTION</span>
                    <span className="text-sm text-gray-300">Data in Motion</span>
                  </div>
                  <div className="flex items-center gap-2 px-3 py-2 bg-purple-900/30 rounded-lg border border-purple-800/50">
                    <span className="text-purple-400 font-mono text-xs">USE</span>
                    <span className="text-sm text-gray-300">Data in Use</span>
                  </div>
                </div>
                <p className="text-xs text-gray-500 mt-3">
                  All three states = core DLP definition
                </p>
              </div>

              {/* Market Evolution Visual */}
              <div className="bg-gray-900 rounded-xl border border-gray-800 p-4">
                <h3 className="text-sm font-semibold text-gray-400 mb-3">Market Evolution</h3>
                <div className="space-y-3 text-xs">
                  <div className="flex items-center justify-between">
                    <span className="text-gray-500">Content-only</span>
                    <span className="text-gray-500">→</span>
                    <span className="text-blue-400">Context + Behavior</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-gray-500">Standalone DLP</span>
                    <span className="text-gray-500">→</span>
                    <span className="text-purple-400">DLP + IRM + DSPM</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-gray-500">On-prem</span>
                    <span className="text-gray-500">→</span>
                    <span className="text-green-400">Cloud-native (67%)</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Main Content Area */}
          <div className="lg:col-span-3 space-y-12">
            
            {/* Overview Section */}
            <section id="overview" className="scroll-mt-24">
              <h2 className="text-2xl font-bold mb-6 flex items-center gap-2">
                <span>📋</span> Overview
              </h2>
              <div className="prose prose-invert max-w-none">
                <p className="text-gray-300 text-lg leading-relaxed">
                  Data Loss Prevention (DLP) is a set of technologies, policies, and processes designed to detect and prevent unauthorized access, 
                  transfer, or disclosure of sensitive data—whether at rest, in motion, or in use. The market is experiencing a <span className="text-amber-400">second wave of investment</span> driven 
                  by GenAI data protection needs, cloud transformation, and regulatory intensification.
                </p>
                <p className="text-gray-400 mt-4">
                  Gartner discontinued the standalone DLP Magic Quadrant after 2018, signaling market maturity—but the category is now being 
                  revitalized through convergence with Insider Risk Management (IRM), Data Security Posture Management (DSPM), and SASE platforms.
                </p>
              </div>

              {/* Why Organizations Invest */}
              <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="bg-gray-900/50 rounded-lg border border-gray-800 p-4">
                  <h4 className="font-semibold text-white mb-3">Why Organizations Invest</h4>
                  <ul className="space-y-2 text-sm text-gray-400">
                    <li className="flex items-start gap-2">
                      <span className="text-blue-400">•</span>
                      <span><strong className="text-gray-300">Regulatory Compliance:</strong> GDPR, HIPAA, CCPA, PCI-DSS mandates</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-blue-400">•</span>
                      <span><strong className="text-gray-300">Breach Cost Mitigation:</strong> $4.88M average; $10.22M in US</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-blue-400">•</span>
                      <span><strong className="text-gray-300">Insider Threat Management:</strong> 83% of orgs experienced insider attacks in 2024</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-blue-400">•</span>
                      <span><strong className="text-gray-300">GenAI Risk Mitigation:</strong> New critical use case—fastest-growing driver</span>
                    </li>
                  </ul>
                </div>
                <div className="bg-gray-900/50 rounded-lg border border-gray-800 p-4">
                  <h4 className="font-semibold text-white mb-3">DLP is #1 Data Security Priority</h4>
                  <p className="text-gray-400 text-sm mb-4">
                    Data loss prevention is the No. 1 data security spending priority for enterprises, according to Enterprise Strategy Group.
                  </p>
                  <div className="space-y-2">
                    <div className="flex items-center justify-between text-sm">
                      <span className="text-gray-400">CISO DLP spend increase planned (2025)</span>
                      <span className="text-green-400 font-semibold">39%</span>
                    </div>
                    <div className="flex items-center justify-between text-sm">
                      <span className="text-gray-400">Insider risk budget allocation (2024)</span>
                      <span className="text-green-400 font-semibold">16.5%</span>
                    </div>
                    <div className="flex items-center justify-between text-sm">
                      <span className="text-gray-400">vs. 2023 allocation</span>
                      <span className="text-gray-500">8.2% (doubled)</span>
                    </div>
                  </div>
                </div>
              </div>
            </section>

            {/* Market Structure Section */}
            <section id="structure" className="scroll-mt-24">
              <h2 className="text-2xl font-bold mb-6 flex items-center gap-2">
                <span>🏗️</span> Market Structure
              </h2>

              {/* Market Sizing */}
              <div className="bg-gray-900 rounded-xl border border-gray-800 p-6 mb-6">
                <h3 className="text-lg font-semibold mb-4">Market Size & Growth (Significant Variance)</h3>
                <div className="overflow-x-auto">
                  <table className="w-full text-sm">
                    <thead>
                      <tr className="text-left text-gray-500 border-b border-gray-800">
                        <th className="pb-3">Source</th>
                        <th className="pb-3">2024/2025</th>
                        <th className="pb-3">Projection</th>
                        <th className="pb-3">CAGR</th>
                      </tr>
                    </thead>
                    <tbody>
                      {marketSizing.map((row, idx) => (
                        <tr key={idx} className="border-b border-gray-800/50">
                          <td className="py-3 text-gray-300">{row.source}</td>
                          <td className="py-3 text-gray-400">{row.val2024}</td>
                          <td className="py-3 text-gray-400">{row.projection}</td>
                          <td className="py-3 text-green-400">{row.cagr}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
                <p className="text-xs text-gray-500 mt-4">
                  Note: "Core" DLP market appears to be $3-5B in 2024. Broader definitions including DSPM/IRM push estimates higher. Variance reflects category boundary confusion.
                </p>
              </div>

              {/* Sub-segments */}
              <div className="bg-gray-900 rounded-xl border border-gray-800 p-6 mb-6">
                <h3 className="text-lg font-semibold mb-4">DLP Sub-Segments (Converging)</h3>
                <div className="flex flex-wrap gap-2">
                  {marketSubSegments.map((seg, idx) => (
                    <span key={idx} className="px-3 py-1.5 bg-gray-800 text-gray-300 rounded-lg text-sm">
                      {seg}
                    </span>
                  ))}
                </div>
                <p className="text-xs text-gray-500 mt-4">
                  Critical: DLP + DSPM + IRM converging into unified "Data Security Platforms." Standalone categories face absorption.
                </p>
              </div>

              {/* White Space Gaps */}
              <div className="bg-gray-900 rounded-xl border border-gray-800 p-6 mb-6">
                <h3 className="text-lg font-semibold mb-4">White Space Opportunities</h3>
                <div className="space-y-3">
                  {whiteSpaceGaps.map((gap, idx) => (
                    <div key={idx} className="flex items-start justify-between p-3 bg-gray-800/50 rounded-lg">
                      <div>
                        <span className="text-white font-medium">{gap.gap}</span>
                        <p className="text-gray-500 text-sm mt-1">{gap.reason}</p>
                      </div>
                      <span className={`px-2 py-1 rounded text-xs ${
                        gap.severity === 'Critical' ? 'bg-red-900/50 text-red-400' :
                        gap.severity === 'High' ? 'bg-orange-900/50 text-orange-400' :
                        'bg-yellow-900/50 text-yellow-400'
                      }`}>
                        {gap.severity}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Competitive Landscape */}
              <div className="bg-gray-900 rounded-xl border border-gray-800 p-6">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-lg font-semibold">Top 15 Vendors by Consensus (2025)</h3>
                  <div className="flex items-center gap-4 text-xs">
                    <div className="flex items-center gap-1.5">
                      <span className="w-2 h-2 rounded-full bg-green-400"></span>
                      <span className="text-gray-500">Complete</span>
                    </div>
                    <div className="flex items-center gap-1.5">
                      <span className="w-2 h-2 rounded-full bg-yellow-400"></span>
                      <span className="text-gray-500">In Progress</span>
                    </div>
                    <div className="flex items-center gap-1.5">
                      <span className="w-2 h-2 rounded-full bg-gray-500"></span>
                      <span className="text-gray-500">Pending</span>
                    </div>
                  </div>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {competitors.map((comp, idx) => {
                    const statusStyle = getStatusStyle(comp.status);
                    return (
                      <a
                        key={idx}
                        href={comp.href}
                        className="block p-4 bg-gray-800/50 rounded-lg border border-gray-700 hover:border-gray-600 transition-all group"
                      >
                        <div className="flex items-start justify-between mb-2">
                          <div>
                            <h4 className="font-semibold text-white group-hover:text-blue-400 transition-colors">
                              {comp.name}
                            </h4>
                            <p className="text-xs text-gray-500">{comp.product}</p>
                          </div>
                          <span className={`px-2 py-1 rounded text-xs flex items-center gap-1.5 ${statusStyle.bg} ${statusStyle.text}`}>
                            <span className={`w-1.5 h-1.5 rounded-full ${statusStyle.dot}`}></span>
                            {statusStyle.label}
                          </span>
                        </div>
                        <p className="text-sm text-gray-400 mb-2">{comp.focus}</p>
                        <span className="text-xs text-blue-400">{comp.position}</span>
                      </a>
                    );
                  })}
                </div>
              </div>
            </section>

            {/* Market Dynamics Section */}
            <section id="motion" className="scroll-mt-24">
              <h2 className="text-2xl font-bold mb-6 flex items-center gap-2">
                <span>📈</span> Market Dynamics
              </h2>

              {/* Market Assessment */}
              <div className="bg-gradient-to-r from-blue-900/20 to-purple-900/20 border border-blue-800/50 rounded-xl p-6 mb-6">
                <div className="flex items-center gap-2 mb-2">
                  <span className="text-xl">📊</span>
                  <h3 className="text-lg font-semibold text-blue-400">Market Assessment</h3>
                </div>
                <p className="text-gray-300">
                  <strong>Position:</strong> Slope of Enlightenment / Early Plateau of Productivity. Traditional DLP is mature, but experiencing a <span className="text-amber-400">second wave</span> driven by GenAI.
                </p>
                <p className="text-gray-400 text-sm mt-2">
                  <strong>Direction:</strong> Strong Consolidation. DLP converging with IRM, DSPM, and SASE platforms. Standalone point solutions face absorption pressure.
                </p>
              </div>

              {/* Hype Cycle */}
              <div className="bg-gray-900 rounded-xl border border-gray-800 p-6 mb-6">
                <h3 className="text-lg font-semibold mb-4">Hype Cycle Positioning (2025)</h3>
                <div className="space-y-3">
                  {hypePositions.map((item, idx) => (
                    <div key={idx} className="flex items-center justify-between p-3 bg-gray-800/50 rounded-lg">
                      <div>
                        <span className="text-white">{item.tech}</span>
                        <span className="text-gray-500 text-sm ml-2">— {item.note}</span>
                      </div>
                      <span className={`px-2 py-1 rounded text-xs ${
                        item.status === 'hot' ? 'bg-red-900/50 text-red-400' :
                        item.status === 'rising' ? 'bg-green-900/50 text-green-400' :
                        item.status === 'emerging' ? 'bg-blue-900/50 text-blue-400' :
                        'bg-gray-700 text-gray-400'
                      }`}>
                        {item.position}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Major Trends */}
              <div className="bg-gray-900 rounded-xl border border-gray-800 p-6 mb-6">
                <h3 className="text-lg font-semibold mb-4">5 Major Trends for 2025-2026</h3>
                <div className="space-y-4">
                  {trends.map((trend, idx) => (
                    <div key={idx} className="border-l-2 border-blue-500 pl-4">
                      <h4 className="font-medium text-white">{trend.name}</h4>
                      <p className="text-sm text-gray-400 mt-1">{trend.description}</p>
                    </div>
                  ))}
                </div>
              </div>

              {/* M&A Activity */}
              <div className="bg-gray-900 rounded-xl border border-gray-800 p-6 mb-6">
                <h3 className="text-lg font-semibold mb-4">M&A Activity (Consolidation Signals)</h3>
                <div className="overflow-x-auto">
                  <table className="w-full text-sm">
                    <thead>
                      <tr className="text-left text-gray-500 border-b border-gray-800">
                        <th className="pb-3">Date</th>
                        <th className="pb-3">Acquirer</th>
                        <th className="pb-3">Target</th>
                        <th className="pb-3">Value</th>
                        <th className="pb-3">Signal</th>
                      </tr>
                    </thead>
                    <tbody>
                      {maActivity.map((row, idx) => (
                        <tr key={idx} className="border-b border-gray-800/50">
                          <td className="py-3 text-gray-500">{row.date}</td>
                          <td className="py-3 text-gray-300">{row.acquirer}</td>
                          <td className="py-3 text-white font-medium">{row.target}</td>
                          <td className="py-3 text-gray-400">{row.value}</td>
                          <td className="py-3 text-gray-500 text-xs">{row.signal}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
                <p className="text-xs text-gray-500 mt-4">
                  M&A pattern: SASE/SSE platforms acquiring DLP/DSPM to complete integrated offerings. DLP specialists acquiring AI classification/DSPM to modernize.
                </p>
              </div>

              {/* What's Replacing What */}
              <div className="bg-gray-900 rounded-xl border border-gray-800 p-6">
                <h3 className="text-lg font-semibold mb-4">Legacy → Modern Transitions</h3>
                <div className="space-y-3">
                  <div className="grid grid-cols-3 gap-4 p-3 bg-gray-800/50 rounded-lg">
                    <span className="text-gray-500">Content-only DLP (regex, patterns)</span>
                    <span className="text-gray-500 text-center">→</span>
                    <span className="text-green-400">Data lineage + behavioral DLP</span>
                  </div>
                  <div className="grid grid-cols-3 gap-4 p-3 bg-gray-800/50 rounded-lg">
                    <span className="text-gray-500">On-premises appliances</span>
                    <span className="text-gray-500 text-center">→</span>
                    <span className="text-green-400">Cloud-delivered DLP (SaaS)</span>
                  </div>
                  <div className="grid grid-cols-3 gap-4 p-3 bg-gray-800/50 rounded-lg">
                    <span className="text-gray-500">Standalone Enterprise DLP</span>
                    <span className="text-gray-500 text-center">→</span>
                    <span className="text-green-400">Integrated DLP within SASE/SSE</span>
                  </div>
                  <div className="grid grid-cols-3 gap-4 p-3 bg-gray-800/50 rounded-lg">
                    <span className="text-gray-500">Reactive blocking</span>
                    <span className="text-gray-500 text-center">→</span>
                    <span className="text-green-400">Risk-adaptive, intent-based protection</span>
                  </div>
                </div>
              </div>
            </section>

            {/* Stakeholders Section */}
            <section id="stakeholders" className="scroll-mt-24">
              <h2 className="text-2xl font-bold mb-6 flex items-center gap-2">
                <span>👥</span> Stakeholders
              </h2>

              {/* Analyst Consensus */}
              <div className="bg-gradient-to-r from-purple-900/20 to-pink-900/20 border border-purple-800/50 rounded-xl p-6 mb-6">
                <h3 className="text-lg font-semibold text-purple-400 mb-3">Analyst Consensus</h3>
                <div className="space-y-3 text-sm">
                  <div>
                    <span className="text-gray-300 font-medium">Gartner:</span>
                    <span className="text-gray-400 ml-2">"By 2027, 70% of CISOs will adopt consolidated DLP + IRM." Market Guide (no MQ since 2018)</span>
                  </div>
                  <div>
                    <span className="text-gray-300 font-medium">Forrester:</span>
                    <span className="text-gray-400 ml-2">"Microsoft shines with ecosystem approach—if you go all in." Data Security Platforms Wave Q1 2025</span>
                  </div>
                  <div>
                    <span className="text-gray-300 font-medium">IDC:</span>
                    <span className="text-gray-400 ml-2">"DLP has been bumpy but resilient and dynamic." Leaders: Forcepoint, Zscaler, Netskope (MarketScape 2025)</span>
                  </div>
                </div>
              </div>

              {/* CISO JTBD */}
              <div className="bg-gray-900 rounded-xl border border-gray-800 p-6 mb-6">
                <h3 className="text-lg font-semibold mb-4">CISO Jobs To Be Done</h3>
                <div className="overflow-x-auto">
                  <table className="w-full text-sm">
                    <thead>
                      <tr className="text-left text-gray-500 border-b border-gray-800">
                        <th className="pb-3">Job Statement</th>
                        <th className="pb-3">Success Metric</th>
                      </tr>
                    </thead>
                    <tbody>
                      {cisoJobs.map((row, idx) => (
                        <tr key={idx} className="border-b border-gray-800/50">
                          <td className="py-3 text-gray-300">{row.job}</td>
                          <td className="py-3 text-gray-500">{row.metric}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>

              {/* Security Analyst JTBD */}
              <div className="bg-gray-900 rounded-xl border border-gray-800 p-6 mb-6">
                <h3 className="text-lg font-semibold mb-4">Security Analyst Jobs To Be Done</h3>
                <div className="overflow-x-auto">
                  <table className="w-full text-sm">
                    <thead>
                      <tr className="text-left text-gray-500 border-b border-gray-800">
                        <th className="pb-3">Job Statement</th>
                        <th className="pb-3">Success Metric</th>
                      </tr>
                    </thead>
                    <tbody>
                      {secAnalystJobs.map((row, idx) => (
                        <tr key={idx} className="border-b border-gray-800/50">
                          <td className="py-3 text-gray-300">{row.job}</td>
                          <td className="py-3 text-gray-500">{row.metric}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>

              {/* Compliance/GRC JTBD */}
              <div className="bg-gray-900 rounded-xl border border-gray-800 p-6 mb-6">
                <h3 className="text-lg font-semibold mb-4">Compliance / GRC Manager Jobs To Be Done</h3>
                <div className="overflow-x-auto">
                  <table className="w-full text-sm">
                    <thead>
                      <tr className="text-left text-gray-500 border-b border-gray-800">
                        <th className="pb-3">Job Statement</th>
                        <th className="pb-3">Success Metric</th>
                      </tr>
                    </thead>
                    <tbody>
                      {complianceJobs.map((row, idx) => (
                        <tr key={idx} className="border-b border-gray-800/50">
                          <td className="py-3 text-gray-300">{row.job}</td>
                          <td className="py-3 text-gray-500">{row.metric}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>

              {/* IT Operations JTBD */}
              <div className="bg-gray-900 rounded-xl border border-gray-800 p-6 mb-6">
                <h3 className="text-lg font-semibold mb-4">IT Operations Jobs To Be Done</h3>
                <div className="overflow-x-auto">
                  <table className="w-full text-sm">
                    <thead>
                      <tr className="text-left text-gray-500 border-b border-gray-800">
                        <th className="pb-3">Job Statement</th>
                        <th className="pb-3">Success Metric</th>
                      </tr>
                    </thead>
                    <tbody>
                      {itOpsJobs.map((row, idx) => (
                        <tr key={idx} className="border-b border-gray-800/50">
                          <td className="py-3 text-gray-300">{row.job}</td>
                          <td className="py-3 text-gray-500">{row.metric}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>

              {/* Key Pain Points */}
              <div className="bg-red-900/20 border border-red-800/50 rounded-xl p-6">
                <h3 className="text-lg font-semibold text-red-400 mb-3">Top User Pain Points (G2/TrustRadius)</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
                  <div className="space-y-2">
                    <div className="flex items-start gap-2">
                      <span className="text-red-400">⚠</span>
                      <span className="text-gray-300"><strong>False positive overload:</strong> #1 complaint across vendors</span>
                    </div>
                    <div className="flex items-start gap-2">
                      <span className="text-red-400">⚠</span>
                      <span className="text-gray-300"><strong>Complex initial setup:</strong> Policy creation challenging</span>
                    </div>
                    <div className="flex items-start gap-2">
                      <span className="text-red-400">⚠</span>
                      <span className="text-gray-300"><strong>Steep learning curve:</strong> Complex interface for new users</span>
                    </div>
                  </div>
                  <div className="space-y-2">
                    <div className="flex items-start gap-2">
                      <span className="text-red-400">⚠</span>
                      <span className="text-gray-300"><strong>Policy tuning burden:</strong> Incident count too high initially</span>
                    </div>
                    <div className="flex items-start gap-2">
                      <span className="text-red-400">⚠</span>
                      <span className="text-gray-300"><strong>Cross-platform gaps:</strong> Windows features missing on Mac</span>
                    </div>
                    <div className="flex items-start gap-2">
                      <span className="text-red-400">⚠</span>
                      <span className="text-gray-300"><strong>Tool sprawl:</strong> Avg 6 DLP tools per org</span>
                    </div>
                  </div>
                </div>
              </div>
            </section>

            {/* Economics Section */}
            <section id="economics" className="scroll-mt-24">
              <h2 className="text-2xl font-bold mb-6 flex items-center gap-2">
                <span>💰</span> Economics & ROI
              </h2>

              {/* ROI Metrics */}
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
                {roiMetrics.map((item, idx) => (
                  <div key={idx} className="bg-gray-900 rounded-xl border border-gray-800 p-4 text-center">
                    <div className="text-2xl font-bold text-green-400">{item.value}</div>
                    <div className="text-sm text-gray-500 mt-1">{item.metric}</div>
                  </div>
                ))}
              </div>

              {/* Pricing Tiers */}
              <div className="bg-gray-900 rounded-xl border border-gray-800 p-6 mb-6">
                <h3 className="text-lg font-semibold mb-4">Pricing Tiers (Directional)</h3>
                <div className="overflow-x-auto">
                  <table className="w-full text-sm">
                    <thead>
                      <tr className="text-left text-gray-500 border-b border-gray-800">
                        <th className="pb-3">Tier</th>
                        <th className="pb-3">Range</th>
                        <th className="pb-3">Representative Vendors</th>
                        <th className="pb-3">Typical Buyer</th>
                      </tr>
                    </thead>
                    <tbody>
                      {pricingTiers.map((row, idx) => (
                        <tr key={idx} className="border-b border-gray-800/50">
                          <td className="py-3 text-white font-medium">{row.tier}</td>
                          <td className="py-3 text-green-400">{row.range}</td>
                          <td className="py-3 text-gray-400">{row.vendors}</td>
                          <td className="py-3 text-gray-500">{row.buyer}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>

              {/* ROI Calculation Examples */}
              <div className="bg-gray-900 rounded-xl border border-gray-800 p-6 mb-6">
                <h3 className="text-lg font-semibold mb-4">Sample ROI Calculation (5,000 Employees)</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <h4 className="text-sm font-semibold text-gray-400 mb-3">Investment</h4>
                    <div className="space-y-2 text-sm">
                      <div className="flex justify-between">
                        <span className="text-gray-400">Platform licensing</span>
                        <span className="text-white">$150K/year</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-gray-400">Admin FTE (1.5)</span>
                        <span className="text-white">$180K/year</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-gray-400">Implementation (amortized)</span>
                        <span className="text-white">$25K/year</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-gray-400">Integration costs</span>
                        <span className="text-white">$25K/year</span>
                      </div>
                      <div className="flex justify-between border-t border-gray-700 pt-2 mt-2">
                        <span className="text-gray-300 font-semibold">Total Annual Investment</span>
                        <span className="text-amber-400 font-semibold">$380K</span>
                      </div>
                    </div>
                  </div>
                  <div>
                    <h4 className="text-sm font-semibold text-gray-400 mb-3">Value / Risk Reduction</h4>
                    <div className="space-y-2 text-sm">
                      <div className="flex justify-between">
                        <span className="text-gray-400">Negligence incident reduction (20%)</span>
                        <span className="text-green-400">$1.06M</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-gray-400">Faster containment (91→60 days)</span>
                        <span className="text-green-400">$1.2M</span>
                      </div>
                      <div className="flex justify-between border-t border-gray-700 pt-2 mt-2">
                        <span className="text-gray-300 font-semibold">Total Annual Value</span>
                        <span className="text-green-400 font-semibold">$2.26M</span>
                      </div>
                      <div className="flex justify-between mt-2">
                        <span className="text-gray-300 font-semibold">Net ROI</span>
                        <span className="text-green-400 font-bold text-lg">495%</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* TCO Warning */}
              <div className="bg-amber-900/20 border border-amber-800/50 rounded-xl p-6">
                <h3 className="text-lg font-semibold text-amber-400 mb-3">TCO Considerations (Hidden Costs)</h3>
                <p className="text-gray-400 text-sm mb-4">
                  DLP has a reputation for high TCO. Personnel costs can account for up to 70% of total TCO. Hidden costs account for 40-60% of total costs over 5 years.
                </p>
                <div className="grid grid-cols-2 md:grid-cols-3 gap-4 text-sm">
                  <div className="bg-gray-800/50 p-3 rounded-lg">
                    <span className="text-amber-400 font-semibold">20-30%</span>
                    <p className="text-gray-500 text-xs mt-1">Platform licensing</p>
                  </div>
                  <div className="bg-gray-800/50 p-3 rounded-lg">
                    <span className="text-amber-400 font-semibold">40-50%</span>
                    <p className="text-gray-500 text-xs mt-1">Personnel (admin, tuning, policy)</p>
                  </div>
                  <div className="bg-gray-800/50 p-3 rounded-lg">
                    <span className="text-amber-400 font-semibold">10-15%</span>
                    <p className="text-gray-500 text-xs mt-1">Integration & infrastructure</p>
                  </div>
                  <div className="bg-gray-800/50 p-3 rounded-lg">
                    <span className="text-amber-400 font-semibold">5-10%</span>
                    <p className="text-gray-500 text-xs mt-1">False positive management</p>
                  </div>
                  <div className="bg-gray-800/50 p-3 rounded-lg">
                    <span className="text-amber-400 font-semibold">5-10%</span>
                    <p className="text-gray-500 text-xs mt-1">Training & change mgmt</p>
                  </div>
                  <div className="bg-gray-800/50 p-3 rounded-lg">
                    <span className="text-amber-400 font-semibold">5-15%</span>
                    <p className="text-gray-500 text-xs mt-1">Tool sprawl overhead</p>
                  </div>
                </div>
                <p className="text-xs text-gray-500 mt-4">
                  TCO Optimization: Companies achieved $3.29M savings over 3 years by retiring legacy DLP, UAM, and UEBA tools through consolidation.
                </p>
              </div>
            </section>

            {/* PM Strategy Section */}
            <section id="product" className="scroll-mt-24">
              <h2 className="text-2xl font-bold mb-6 flex items-center gap-2">
                <span>🎯</span> PM Strategic Elements
              </h2>

              {/* Table Stakes */}
              <div className="bg-gray-900 rounded-xl border border-gray-800 p-6 mb-6">
                <h3 className="text-lg font-semibold mb-4">Table Stakes (Required for RFP)</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
                  {tableStakes.map((feature, idx) => (
                    <div key={idx} className="flex items-center gap-2 text-sm">
                      <span className="text-green-400">✓</span>
                      <span className="text-gray-300">{feature}</span>
                    </div>
                  ))}
                </div>
                <p className="text-xs text-gray-500 mt-4">
                  Missing any of these = immediate RFP disqualification. These are no longer differentiators.
                </p>
              </div>

              {/* Differentiators */}
              <div className="bg-gray-900 rounded-xl border border-gray-800 p-6 mb-6">
                <h3 className="text-lg font-semibold mb-4">Key Differentiators (What Wins Deals)</h3>
                <div className="space-y-4">
                  {differentiators.map((diff, idx) => (
                    <div key={idx} className="border-l-2 border-purple-500 pl-4">
                      <h4 className="font-medium text-white">{diff.name}</h4>
                      <p className="text-sm text-gray-400 mt-1">{diff.description}</p>
                    </div>
                  ))}
                </div>
              </div>

              {/* If I'm a PM Here Box */}
              <div className="bg-gradient-to-r from-blue-900/30 to-purple-900/30 border border-blue-800 rounded-xl p-6">
                <h3 className="text-lg font-semibold text-blue-400 mb-4 flex items-center gap-2">
                  <span>💡</span> If I am a PM Here, I Need to Know...
                </h3>
                <div className="space-y-3 text-sm">
                  <div className="flex items-start gap-3">
                    <span className="text-blue-400 font-bold">1.</span>
                    <span className="text-gray-300">
                      <strong className="text-white">GenAI is the new battleground.</strong> If not shipping ChatGPT/Copilot/Gemini protection in 2025, you're already behind. 14% of DLP incidents are GenAI-related, growing 2.5x YoY.
                    </span>
                  </div>
                  <div className="flex items-start gap-3">
                    <span className="text-blue-400 font-bold">2.</span>
                    <span className="text-gray-300">
                      <strong className="text-white">False positives kill adoption.</strong> Users cite false positives as #1 pain point. AI/ML classification isn't "nice-to-have"—it's the differentiator. Target 35%+ reduction.
                    </span>
                  </div>
                  <div className="flex items-start gap-3">
                    <span className="text-blue-400 font-bold">3.</span>
                    <span className="text-gray-300">
                      <strong className="text-white">DLP is consolidating into data security platforms.</strong> Gartner predicts 70% of large enterprises will adopt consolidated DLP + IRM by 2027. Point solutions need platform strategy.
                    </span>
                  </div>
                  <div className="flex items-start gap-3">
                    <span className="text-blue-400 font-bold">4.</span>
                    <span className="text-gray-300">
                      <strong className="text-white">"Discover-then-protect" is becoming standard.</strong> DSPM + DLP convergence is real. You need data discovery capabilities—build or partner.
                    </span>
                  </div>
                  <div className="flex items-start gap-3">
                    <span className="text-blue-400 font-bold">5.</span>
                    <span className="text-gray-300">
                      <strong className="text-white">Time-to-value is a competitive weapon.</strong> Mid-market expects weeks, not months. Cloud-native deploying in 6 weeks beats legacy 6-month implementations.
                    </span>
                  </div>
                  <div className="flex items-start gap-3">
                    <span className="text-blue-400 font-bold">6.</span>
                    <span className="text-gray-300">
                      <strong className="text-white">Microsoft Purview is the 800-pound gorilla.</strong> E3/E5 bundling makes it "good enough" for M365 shops. Differentiate on accuracy, cross-platform, or GenAI depth.
                    </span>
                  </div>
                  <div className="flex items-start gap-3">
                    <span className="text-blue-400 font-bold">7.</span>
                    <span className="text-gray-300">
                      <strong className="text-white">Integration is a moat.</strong> Enterprise buyers expect SIEM, SOAR, CASB, EDR, IAM integrations out-of-box. Poor APIs = lost deals.
                    </span>
                  </div>
                  <div className="flex items-start gap-3">
                    <span className="text-blue-400 font-bold">8.</span>
                    <span className="text-gray-300">
                      <strong className="text-white">Cross-platform parity matters.</strong> 25%+ of enterprise endpoints are Mac. Developer environments use Linux. Windows-only is insufficient.
                    </span>
                  </div>
                  <div className="flex items-start gap-3">
                    <span className="text-blue-400 font-bold">9.</span>
                    <span className="text-gray-300">
                      <strong className="text-white">User coaching beats blocking.</strong> The best DLP programs balance security with productivity. In-line education and exception workflows win.
                    </span>
                  </div>
                  <div className="flex items-start gap-3">
                    <span className="text-blue-400 font-bold">10.</span>
                    <span className="text-gray-300">
                      <strong className="text-white">Watch the acquisitions.</strong> Fortinet/Next DLP, Mimecast/Code42, Palo Alto/Dig Security, Forcepoint/Getvisibility—these signal where the market is heading.
                    </span>
                  </div>
                </div>
              </div>
            </section>

            {/* Strategic Theses Section */}
            <section id="theses" className="scroll-mt-24">
              <h2 className="text-2xl font-bold mb-6 flex items-center gap-2">
                <span>🔮</span> Strategic Theses
              </h2>
              <p className="text-gray-400 mb-8">
                Three structural shifts reshaping this market. Not incremental changes—fundamental rewirings of where value is created and captured.
              </p>

              <div className="space-y-6">
                {theses.map((thesis) => (
                  <div
                    key={thesis.id}
                    className={`bg-gray-900 rounded-xl border border-gray-800 p-6 border-l-4 ${getThesisAccent(thesis.color)}`}
                  >
                    <div className="flex items-start justify-between mb-4">
                      <div>
                        <h3 className="text-xl font-bold text-white">{thesis.title}</h3>
                      </div>
                      <div className="flex items-center gap-2">
                        <span className={`px-2 py-1 rounded text-xs border ${getConfidenceColor(thesis.confidence)}`}>
                          {thesis.confidence}
                        </span>
                        <span className="text-sm text-gray-500">{thesis.timeframe}</span>
                      </div>
                    </div>
                    
                    <p className="text-gray-300 mb-4">{thesis.claim}</p>
                    
                    <div className="mb-4">
                      <h4 className="text-xs font-semibold text-gray-500 mb-2">EVIDENCE</h4>
                      <ul className="space-y-1">
                        {thesis.evidence.map((item, idx) => (
                          <li key={idx} className="text-sm text-gray-400 flex items-start gap-2">
                            <span className="text-gray-600">•</span>
                            {item}
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div className="bg-gray-800/50 rounded-lg p-3">
                      <span className="text-gray-500 text-sm">Implication: </span>
                      <span className="text-gray-300 text-sm">{thesis.implication}</span>
                    </div>
                  </div>
                ))}
              </div>

              {/* Synthesis */}
              <div className="mt-8 bg-gray-900 rounded-xl border border-gray-800 p-6">
                <h3 className="text-lg font-semibold mb-4">How These Connect</h3>
                <div className="space-y-3 text-sm">
                  <div className="flex items-center gap-2 text-gray-400">
                    <span className="text-green-400">GenAI explosion</span>
                    <span>→ creates urgent new attack surface →</span>
                    <span className="text-amber-400">DLP investment surge</span>
                  </div>
                  <div className="flex items-center gap-2 text-gray-400">
                    <span className="text-purple-400">DLP + IRM convergence</span>
                    <span>→ favors platforms over point solutions →</span>
                    <span className="text-blue-400">consolidated vendors win</span>
                  </div>
                  <div className="flex items-center gap-2 text-gray-400">
                    <span className="text-orange-400">Microsoft bundling</span>
                    <span>→ commoditizes basic DLP →</span>
                    <span className="text-green-400">pure-play must differentiate</span>
                  </div>
                </div>
              </div>
            </section>

            {/* Recommendations */}
            <section className="scroll-mt-24">
              <h2 className="text-2xl font-bold mb-6 flex items-center gap-2">
                <span>🎯</span> Recommendations
              </h2>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {/* For Buyers */}
                <div className="bg-gray-900 rounded-xl border border-gray-800 p-6">
                  <div className="flex items-center gap-2 mb-4">
                    <span className="w-8 h-8 rounded-full bg-blue-900/50 flex items-center justify-center text-blue-400 font-bold">B</span>
                    <h3 className="text-lg font-semibold">For Enterprise Buyers</h3>
                  </div>
                  <ul className="space-y-2 text-sm text-gray-400">
                    <li className="flex items-start gap-2">
                      <span className="text-blue-400">•</span>
                      <span>Prioritize GenAI protection capabilities—fastest-growing attack vector</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-blue-400">•</span>
                      <span>Evaluate DLP as part of broader data security platform (DLP + IRM + DSPM)</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-blue-400">•</span>
                      <span>Audit tool sprawl—avg 6 DLP tools creates TCO and policy consistency issues</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-blue-400">•</span>
                      <span>Require cross-platform parity (Mac/Linux equal to Windows)</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-blue-400">•</span>
                      <span>Demand false positive benchmarks—AI/ML classification should deliver 35%+ reduction</span>
                    </li>
                  </ul>
                </div>

                {/* For Vendors */}
                <div className="bg-gray-900 rounded-xl border border-gray-800 p-6">
                  <div className="flex items-center gap-2 mb-4">
                    <span className="w-8 h-8 rounded-full bg-purple-900/50 flex items-center justify-center text-purple-400 font-bold">V</span>
                    <h3 className="text-lg font-semibold">For Vendors / Product Leaders</h3>
                  </div>
                  <ul className="space-y-2 text-sm text-gray-400">
                    <li className="flex items-start gap-2">
                      <span className="text-purple-400">•</span>
                      <span>GenAI protection is non-negotiable—ship in 2025 or be behind</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-purple-400">•</span>
                      <span>Invest in AI/ML classification—false positives are the #1 deal-killer</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-purple-400">•</span>
                      <span>Build or partner for DSPM—"discover-then-protect" is becoming standard</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-purple-400">•</span>
                      <span>API-first architecture—integration ecosystem is a competitive moat</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-purple-400">•</span>
                      <span>Time-to-value differentiation—6 weeks (cloud-native) beats 6 months (legacy)</span>
                    </li>
                  </ul>
                </div>
              </div>
            </section>

            {/* Resources */}
            <section className="scroll-mt-24">
              <h2 className="text-2xl font-bold mb-6 flex items-center gap-2">
                <span>📎</span> Resources
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <a href="#" className="flex items-center gap-4 p-4 bg-gray-900 rounded-xl border border-gray-800 hover:border-gray-700 transition-colors">
                  <span className="text-2xl">📄</span>
                  <div>
                    <h4 className="font-semibold text-white">Full Strategic Brief</h4>
                    <p className="text-sm text-gray-500">Complete SRP analysis (PDF)</p>
                  </div>
                </a>
                <a href="#" className="flex items-center gap-4 p-4 bg-gray-900 rounded-xl border border-gray-800 hover:border-gray-700 transition-colors">
                  <span className="text-2xl">📊</span>
                  <div>
                    <h4 className="font-semibold text-white">Vendor Comparison Matrix</h4>
                    <p className="text-sm text-gray-500">Side-by-side feature analysis</p>
                  </div>
                </a>
              </div>
            </section>

          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="border-t border-gray-800 bg-gray-950 mt-16">
        <div className="max-w-7xl mx-auto px-4 py-8 text-center">
          <p className="text-gray-500 text-sm">
            Analysis by Andy Simko • CISSP • GPEN • CISA • GSNA • HCSFP • PMC-Level III
          </p>
          <p className="text-gray-600 text-xs mt-2">
            15+ years in cybersecurity • Methodology: Systematic Research Process (SRP)
          </p>
        </div>
      </footer>
    </div>
  );
};

export default DLPPage;
