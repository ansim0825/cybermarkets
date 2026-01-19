"use client";

import React, { useState } from 'react';
import { Logo } from '@/components/Logo';

const ThreatIntelligencePage = () => {
  const [activeSection, setActiveSection] = useState('overview');

  // GRC & TIC sub-segments (TI sits in this pillar)
  const subSegments = [
    { id: 'ctem', name: 'CTEM', active: false, href: '/pillars/grc-tic/ctem' },
    { id: 'compliance', name: 'Compliance', active: false, href: '#' },
    { id: 'grc', name: 'GRC Platforms', active: false, href: '#' },
    { id: 'security-awareness', name: 'Security Awareness', active: false, href: '#' },
    { id: 'threat-intel', name: 'Threat Intelligence', active: true, href: '/pillars/grc-tic/threat-intelligence' },
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

  // Related pillars (TI is horizontal—touches everything)
  const relatedPillars = [
    { name: 'SecOps & Analytics', primary: true },
    { name: 'Network & Edge', primary: false },
    { name: 'Identity', primary: false },
    { name: 'Endpoint & Workload', primary: false },
  ];

  const keyInsights = [
    { stat: '$11-12B', label: 'Market size (2025)' },
    { stat: '14.7%', label: 'CAGR through 2030' },
    { stat: '78T', label: 'Daily signals (Microsoft)' },
    { stat: '63%', label: 'Orgs lacking CTI skills' },
  ];

  const marketSizing = [
    { source: 'MarketsandMarkets', val2024: '$11.55B', projection: '$22.97B (2030)', cagr: '14.7%' },
    { source: 'Grand View Research', val2024: '$14.59B', projection: '$36.53B (2030)', cagr: '14.7%' },
    { source: 'Mordor Intelligence', val2024: '$9.21B', projection: '$16.90B (2030)', cagr: '12.9%' },
    { source: 'IDC (Pure-play TI)', val2024: '~$1.9B', projection: '—', cagr: '—' },
  ];

  const marketSubSegments = [
    'Threat Intelligence Platforms (TIP)',
    'Commercial Threat Intelligence Feeds',
    'Digital Risk Protection Services (DRPS)',
    'External Attack Surface Management (EASM)',
    'Managed Threat Intelligence Services',
    'Strategic Intelligence Services',
  ];

  // Top vendors by consensus (from Dimension 1 research)
  const competitors = [
    { 
      name: 'Recorded Future', 
      product: 'Intelligence Cloud (Mastercard)',
      position: 'Platform Leader', 
      focus: '~14% market share. 900B+ daily data points. NLP-powered analysis. $2.65B Mastercard acquisition (Dec 2024).',
      status: 'in-progress',
      href: '/pillars/grc-tic/threat-intelligence/companies/recorded-future'
    },
    { 
      name: 'Google/Mandiant', 
      product: 'Mandiant Advantage + VirusTotal',
      position: 'Platform Leader', 
      focus: '~13% market share. 200K+ hours/year frontline IR expertise. Forrester: "poised to become most dominant TI provider."',
      status: 'in-progress',
      href: '/pillars/grc-tic/threat-intelligence/companies/mandiant'
    },
    { 
      name: 'CrowdStrike', 
      product: 'Falcon Intelligence',
      position: 'Platform Leader', 
      focus: '~6% market share. Real-time telemetry from 23K+ customers. Charlotte AI for automated response.',
      status: 'in-progress',
      href: '/pillars/grc-tic/threat-intelligence/companies/crowdstrike'
    },
    { 
      name: 'Microsoft', 
      product: 'Defender Threat Intelligence',
      position: 'Platform Incumbent', 
      focus: '78 trillion daily signals. Security Copilot AI integration. Bundled with M365/E5 ecosystem.',
      status: 'in-progress',
      href: '/pillars/grc-tic/threat-intelligence/companies/microsoft'
    },
    { 
      name: 'Palo Alto Networks', 
      product: 'Unit 42 + Cortex XSOAR',
      position: 'Platform Leader', 
      focus: 'Unit 42 research team. XSOAR for operationalization. Cortex platform integration.',
      status: 'in-progress',
      href: '/pillars/grc-tic/threat-intelligence/companies/paloalto'
    },
    { 
      name: 'IBM', 
      product: 'X-Force Threat Intelligence',
      position: 'Enterprise', 
      focus: 'Decades of research heritage. QRadar SIEM integration. Strong managed services.',
      status: 'in-progress',
      href: '/pillars/grc-tic/threat-intelligence/companies/ibm'
    },
    { 
      name: 'Cisco/Talos', 
      product: 'Talos Intelligence + Splunk',
      position: 'Platform Leader', 
      focus: 'Massive network visibility. SnapAttack acquisition (Jan 2025). Splunk integration.',
      status: 'in-progress',
      href: '/pillars/grc-tic/threat-intelligence/companies/cisco'
    },
    { 
      name: 'Flashpoint', 
      product: 'Ignite Platform',
      position: 'Niche Leader', 
      focus: 'Deep/dark web expertise. Human-curated finished intelligence. Strong HUMINT.',
      status: 'in-progress',
      href: '/pillars/grc-tic/threat-intelligence/companies/flashpoint'
    },
    { 
      name: 'Intel 471', 
      product: 'TITAN Platform',
      position: 'Niche Leader', 
      focus: 'Underground threat actor focus. Adversary intelligence specialization.',
      status: 'in-progress',
      href: '/pillars/grc-tic/threat-intelligence/companies/intel471'
    },
    { 
      name: 'ThreatConnect', 
      product: 'ThreatConnect Platform',
      position: 'TIP Leader', 
      focus: 'TIP + Risk Quantification integration. Strong orchestration capabilities.',
      status: 'in-progress',
      href: '/pillars/grc-tic/threat-intelligence/companies/threatconnect'
    },
    { 
      name: 'Anomali', 
      product: 'ThreatStream + Match',
      position: 'TIP Leader', 
      focus: 'Large feed marketplace. TIP aggregation strength. MSSP-friendly architecture.',
      status: 'in-progress',
      href: '/pillars/grc-tic/threat-intelligence/companies/anomali'
    },
    { 
      name: 'SOCRadar', 
      product: 'Extended Threat Intelligence (XTI)',
      position: 'Challenger', 
      focus: 'CTI + DRPS + EASM bundled. SMB-accessible pricing. Agentic TI platform (Aug 2025).',
      status: 'in-progress',
      href: '/pillars/grc-tic/threat-intelligence/companies/socradar'
    },
    { 
      name: 'ZeroFox', 
      product: 'ZeroFox Platform',
      position: 'DRPS Leader', 
      focus: 'Digital risk protection. Takedown services. Haveli PE acquisition ($350M, May 2024).',
      status: 'in-progress',
      href: '/pillars/grc-tic/threat-intelligence/companies/zerofox'
    },
    { 
      name: 'Cyble', 
      product: 'Cyble Vision',
      position: 'Challenger', 
      focus: 'AI-powered dark web monitoring. Gartner Hype Cycle recognition (DRPS).',
      status: 'in-progress',
      href: '/pillars/grc-tic/threat-intelligence/companies/cyble'
    },
    { 
      name: 'Group-IB', 
      product: 'Threat Intelligence Platform',
      position: 'Regional Leader', 
      focus: 'APAC/EMEA strength. Fraud intelligence specialization. Attribution expertise.',
      status: 'in-progress',
      href: '/pillars/grc-tic/threat-intelligence/companies/group-ib'
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
    { name: 'AI/Agentic Intelligence Becomes the New Battleground', description: 'Agentic AI capabilities far exceed basic AI. Microsoft Copilot analyzes 78T signals. CrowdStrike Charlotte AI automates response playbooks.' },
    { name: 'Platform Convergence Accelerates', description: 'TI + DRPS + EASM converging into unified platforms. Standalone TIPs face existential pressure from SIEM/XDR absorption.' },
    { name: 'Services Outpace Technology', description: 'Services segment growing 18.1% CAGR vs. 14.7% overall. Skills shortage driving managed TI adoption.' },
    { name: 'Geopolitical Drivers Intensify', description: 'Nation-state activity, supply chain risk, and regulatory pressure (NIS2, DORA, SEC) driving strategic TI investment.' },
    { name: 'Democratization Through SME Accessibility', description: 'SME segment growing fastest. SaaS/cloud delivery and tiered pricing enabling smaller organizations.' },
  ];

  const hypePositions = [
    { tech: 'Core TI Platforms (TIP)', position: 'Plateau of Productivity', status: 'stable' },
    { tech: 'AI-Enhanced TI', position: 'Peak of Inflated Expectations', status: 'hot' },
    { tech: 'Digital Risk Protection (DRPS)', position: 'Late Slope of Enlightenment', status: 'rising' },
    { tech: 'External ASM (EASM)', position: 'Slope of Enlightenment', status: 'rising' },
    { tech: 'Agentic TI', position: 'Innovation Trigger', status: 'emerging' },
  ];

  const maActivity = [
    { date: 'Dec 2024', acquirer: 'Mastercard', target: 'Recorded Future', value: '$2.65B', signal: 'Payment fraud + TI convergence' },
    { date: 'Oct 2024', acquirer: 'Check Point', target: 'Cyberint', value: '~$200M', signal: 'SOC + DRPS capabilities' },
    { date: 'Dec 2024', acquirer: 'Bitsight', target: 'Cybersixgill', value: '$115M', signal: 'Dark web + risk ratings' },
    { date: 'May 2024', acquirer: 'Haveli (PE)', target: 'ZeroFox', value: '$350M', signal: 'DRPS consolidation' },
    { date: 'Jan 2025', acquirer: 'Cisco', target: 'SnapAttack', value: 'Undisclosed', signal: 'Detection engineering' },
  ];

  const cisoJobs = [
    { job: 'Tell me if we\'re targeted and what to do about it', metric: 'Strategic intelligence; risk prioritization; executive briefings' },
    { job: 'Help me justify security investments to the board', metric: 'Business impact quantification; ROI reporting; breach cost avoidance' },
    { job: 'Demonstrate security program value', metric: 'Risk dashboards; board-ready outputs; compliance support' },
  ];

  const socAnalystJobs = [
    { job: 'Help me triage alerts faster without missing real threats', metric: 'Time-to-context <2 min; reduced false positives; priority scoring' },
    { job: 'When I see an IOC, tell me instantly if it\'s bad and why', metric: 'Real-time lookup; threat actor attribution; confidence scoring' },
    { job: 'Reduce investigation time per alert', metric: '21 min savings per incident; auto-enrichment; one-click investigation' },
  ];

  const threatHunterJobs = [
    { job: 'Help me find threats before they cause damage', metric: 'Hypothesis-driven queries; behavioral analytics; proactive detection' },
    { job: 'Show me what adversaries are targeting my industry', metric: 'Industry-specific intel; vertical threat reports; actor tracking' },
    { job: 'Map threats to detection gaps', metric: 'MITRE ATT&CK TTP mapping; detection rule guidance' },
  ];

  const tiManagerJobs = [
    { job: 'Help me demonstrate TI program value to leadership', metric: 'ROI metrics; executive reporting; risk quantification' },
    { job: 'Help me manage multiple intelligence sources efficiently', metric: 'Feed orchestration; deduplication; confidence scoring' },
    { job: 'Reduce chaos from 26+ avg. commercial feeds', metric: 'Consolidated view; vendor audit; ROI per feed' },
  ];

  const tableStakes = [
    'Multi-source feed aggregation (commercial, OSINT, ISAC)',
    'IOC lifecycle management (ingest, normalize, dedupe)',
    'STIX/TAXII compliance for feed import/export',
    'SIEM integration (Splunk, Sentinel, QRadar minimum)',
    'MITRE ATT&CK mapping for TTP correlation',
    'Automated IOC enrichment and contextual alerting',
    'Historical search and IOC lookup capabilities',
    'Standard reporting/dashboards (analyst + executive)',
    'REST APIs for integration and automation',
    'Confidence/severity scoring',
    'Threat actor profiles (basic)',
    'Audit logging and RBAC',
  ];

  const differentiators = [
    { name: 'GenAI-Powered Investigation', description: 'Natural language queries, auto-generated reports, AI analyst assistance. Addresses skills shortage; impressive in demos.' },
    { name: 'Frontline/IR-Sourced Intelligence', description: 'Intel from actual breach investigations (Mandiant: 200K+ hrs/year). "Ground truth" unavailable through technical collection alone.' },
    { name: 'Identity & Credential Intelligence', description: 'Compromised credential monitoring, stealer log analysis. Addresses #1 attack vector (84% increase in infostealer attacks).' },
    { name: 'Dark Web & Telegram Coverage', description: 'Real-time monitoring of 58K+ Telegram channels, underground forums, paste sites. Pre-attack planning visibility.' },
    { name: 'Time-to-Operationalization', description: 'How quickly intel translates to detection rules, blocks, and actions. "Intel collected but not used" is #1 user complaint.' },
    { name: 'Unified Platform Strategy', description: 'TI embedded in broader SecOps platform vs. standalone. Consolidated platforms achieve 4x ROI vs. fragmented.' },
    { name: 'Managed Services Option', description: 'TI delivered as managed service vs. pure platform. Services growing 18.1% CAGR; bridges skills gap.' },
  ];

  const roiMetrics = [
    { metric: 'AI/automation savings per breach', value: '$2.2M' },
    { metric: 'Time saved per incident with TI', value: '21 min' },
    { metric: 'False positive reduction (quality TI)', value: '60-70%' },
    { metric: 'Average breach cost (US)', value: '$10.22M' },
  ];

  const pricingTiers = [
    { tier: 'Premium', range: '$150K-500K+/year', vendors: 'Recorded Future, Mandiant, CrowdStrike', buyer: 'Enterprise 10K+' },
    { tier: 'Enterprise', range: '$75K-200K/year', vendors: 'Anomali, ThreatConnect, Flashpoint', buyer: 'Enterprise 5K-10K' },
    { tier: 'Mid-Market', range: '$30K-100K/year', vendors: 'SOCRadar, Cyberint, ThreatQuotient', buyer: 'Mid-Market 1K-5K' },
    { tier: 'SMB/Entry', range: '$10K-50K/year', vendors: 'Microsoft Defender TI, Feedly TI', buyer: 'SMB <1K' },
  ];

  const theses = [
    {
      id: 1,
      title: 'Platform Absorption Accelerates—Standalone TIPs Face Existential Risk',
      timeframe: '2025-2028',
      confidence: 'High',
      color: 'green',
      claim: 'By 2028, 70%+ of TI consumption will be through embedded platform modules (SIEM, XDR, SecOps) rather than standalone TIPs. The "TIP as product category" may not survive the decade.',
      evidence: ['362 cybersecurity acquisitions in 2024', 'Mastercard/Recorded Future ($2.65B) signals non-security buyers entering', 'SIEM/XDR platforms embedding TI natively', 'Gartner publishes Market Guide, not Magic Quadrant'],
      implication: 'If you\'re a standalone TIP: (a) differentiate on unique intel (IR, dark web), (b) become best integration partner, or (c) prepare for acquisition.',
    },
    {
      id: 2,
      title: 'Identity Intelligence is the New Frontier',
      timeframe: '2025-2027',
      confidence: 'High',
      color: 'purple',
      claim: 'Credential theft, infostealer malware, and identity-based attacks now account for the majority of initial access vectors. TI platforms without identity/credential exposure monitoring miss the #1 attack vector.',
      evidence: ['84% increase in infostealer phishing emails (IBM X-Force 2025)', 'Majority of initial access vectors are identity-based', 'Flare Microsoft Entra ID integration for automated credential validation', 'OWASP Top 10 Non-Human Identity Risks released 2025'],
      implication: 'If your TI platform doesn\'t address credential exposure and identity-based threats, you\'re missing the #1 attack vector. Build or partner for identity intel.',
    },
    {
      id: 3,
      title: 'Operationalization > Data Volume—Context Wins',
      timeframe: '2025-2027',
      confidence: 'Medium-High',
      color: 'orange',
      claim: 'The #1 user complaint is "intelligence collected but not actionable." Organizations already have 26+ feeds on average. Winners focus on workflow integration, automated response, and time-to-operationalize—not adding more data sources.',
      evidence: ['78% of analysts say investigation takes 10+ min per alert', 'SOC analysts handle only 14% of alerts generated', '63% lack staff/skills for CTI program', 'Forrester: "no shortage of data; shortage of context"'],
      implication: 'Focus product roadmap on workflow integration, automated response actions, and reducing time-to-operationalize over adding more feed sources.',
    },
  ];

  const getConfidenceColor = (confidence) => {
    switch (confidence) {
      case 'High': return 'bg-green-900/50 text-green-400 border-green-700';
      case 'Medium-High': return 'bg-blue-900/50 text-blue-400 border-blue-700';
      case 'Medium': return 'bg-yellow-900/50 text-yellow-400 border-yellow-700';
      default: return 'bg-gray-800 text-gray-400 border-gray-700';
    }
  };

  const getThesisAccent = (color) => {
    switch (color) {
      case 'green': return 'border-l-green-500';
      case 'purple': return 'border-l-purple-500';
      case 'orange': return 'border-l-orange-500';
      default: return 'border-l-blue-500';
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
              <span className="text-gray-400 hidden sm:inline">GRC & TIC</span>
            </div>
            <div className="flex items-center gap-6 text-sm">
              <a href="/#pillars" className="text-gray-300 hover:text-white">Pillars</a>
              <a href="#theses" className="text-gray-300 hover:text-white">Theses</a>
              <a href="/#about" className="text-gray-400 hover:text-white text-xs">About</a>
            </div>
          </div>
        </div>
      </nav>

      <div className="max-w-6xl mx-auto px-6 py-8">
        
        {/* Sub-segment Navigation */}
        <div className="mb-6">
          <div className="flex items-center gap-2 flex-wrap">
            {subSegments.map((seg) => (
              <a
                key={seg.id}
                href={seg.href}
                className={`text-xs px-3 py-1.5 rounded-full border transition-all ${
                  seg.active 
                    ? 'bg-green-900/50 text-green-400 border-green-700' 
                    : 'bg-gray-800/50 text-gray-500 border-gray-700 hover:text-gray-400 hover:border-gray-600'
                }`}
              >
                {seg.active && <span className="mr-1">●</span>}
                {seg.name}
              </a>
            ))}
          </div>
          
          {/* Related pillars */}
          <div className="flex items-center gap-2 mt-3">
            <span className="text-xs text-gray-600">Horizontal layer—touches:</span>
            {relatedPillars.map((pillar, idx) => (
              <span 
                key={idx}
                className={`text-xs px-2 py-0.5 rounded border ${
                  pillar.primary 
                    ? 'bg-blue-900/30 text-blue-400 border-blue-800' 
                    : 'bg-gray-800/50 text-gray-500 border-gray-800'
                }`}
              >
                {pillar.name}
              </span>
            ))}
          </div>
        </div>
        
        {/* Header */}
        <div className="mb-8">
          <div className="flex items-center gap-3 mb-3">
            <h1 className="text-4xl font-bold">Threat Intelligence</h1>
            <span className="text-xs px-2 py-1 bg-blue-900/50 text-blue-400 border border-blue-700 rounded-full">
              HORIZONTAL ENABLER
            </span>
          </div>
          <p className="text-xl text-gray-400 mb-4">
            The $11B+ market providing adversary context across all security functions—facing platform absorption
          </p>
          
          <div className="flex items-center gap-4 text-sm text-gray-500">
            <span>Last updated: January 2026</span>
            <span>•</span>
            <span>Methodology: SRP Framework</span>
            <span>•</span>
            <span className="text-green-500">● Active research</span>
          </div>
        </div>

        {/* Key Stats Bar */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
          {keyInsights.map((insight, idx) => (
            <div key={idx} className="bg-gray-900 rounded-xl p-4 border border-gray-800">
              <div className="text-2xl font-bold text-white mb-1">{insight.stat}</div>
              <div className="text-xs text-gray-400">{insight.label}</div>
            </div>
          ))}
        </div>

        {/* The Horizontal Layer Callout */}
        <div className="bg-gradient-to-r from-blue-900/30 via-purple-900/30 to-blue-900/30 rounded-xl p-6 border border-blue-800/50 mb-8">
          <div className="flex items-start gap-4">
            <div className="text-3xl">🌐</div>
            <div>
              <h3 className="font-semibold text-white mb-2">The Core Positioning</h3>
              <p className="text-gray-300">
                Threat Intelligence is a <span className="text-blue-400 font-semibold">horizontal enabling layer</span>, 
                not a vertical market segment. It functions as "connective tissue" feeding virtually every security function—
                SIEM, XDR, MDR, SOAR, CTEM, and more.
                <span className="text-white font-medium"> This explains why standalone TIPs face platform absorption pressure.</span>
              </p>
            </div>
          </div>
        </div>

        {/* Main Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          
          {/* Left Sidebar - SRP Navigation */}
          <div className="lg:col-span-1">
            <div className="sticky top-24">
              <div className="bg-gray-900 rounded-xl border border-gray-800 p-4 mb-6">
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
                      <span>{section.name}</span>
                    </button>
                  ))}
                </div>
              </div>

              {/* Intelligence Pyramid */}
              <div className="bg-gray-900 rounded-xl border border-gray-800 p-4">
                <h3 className="text-sm font-semibold text-gray-400 mb-3">Intelligence Pyramid</h3>
                <div className="space-y-2 text-xs">
                  <div className="flex items-center gap-2 p-2 bg-purple-900/30 rounded border border-purple-800/50">
                    <span className="w-6 h-6 flex items-center justify-center bg-purple-900/50 text-purple-400 rounded font-bold text-xs">S</span>
                    <div>
                      <span className="text-purple-400">Strategic</span>
                      <span className="text-gray-500 ml-1">~10% budget</span>
                    </div>
                  </div>
                  <div className="flex items-center gap-2 p-2 bg-blue-900/30 rounded border border-blue-800/50">
                    <span className="w-6 h-6 flex items-center justify-center bg-blue-900/50 text-blue-400 rounded font-bold text-xs">O</span>
                    <div>
                      <span className="text-blue-400">Operational</span>
                      <span className="text-gray-500 ml-1">Campaigns, TTPs</span>
                    </div>
                  </div>
                  <div className="flex items-center gap-2 p-2 bg-gray-800 rounded">
                    <span className="w-6 h-6 flex items-center justify-center bg-gray-700 text-gray-400 rounded font-bold text-xs">T</span>
                    <div>
                      <span className="text-gray-300">Tactical</span>
                      <span className="text-gray-500 ml-1">Detection rules</span>
                    </div>
                  </div>
                  <div className="flex items-center gap-2 p-2 bg-gray-800 rounded">
                    <span className="w-6 h-6 flex items-center justify-center bg-gray-700 text-gray-400 rounded font-bold text-xs">I</span>
                    <div>
                      <span className="text-gray-300">Technical (IOCs)</span>
                      <span className="text-gray-500 ml-1">~80% budget ⚠️</span>
                    </div>
                  </div>
                </div>
                <p className="text-xs text-gray-500 mt-3">⚠️ Inverted allocation is common problem</p>
              </div>
            </div>
          </div>

          {/* Main Content Area */}
          <div className="lg:col-span-3 space-y-8">
            
            {/* Overview Section */}
            <section id="overview" className="bg-gray-900 rounded-xl border border-gray-800 p-6">
              <h2 className="text-xl font-semibold mb-4 flex items-center gap-2">
                <span>📋</span> Overview
              </h2>
              <div className="prose prose-invert max-w-none">
                <p className="text-gray-300 mb-4">
                  Threat Intelligence (TI/CTI) is evidence-based knowledge providing context, mechanisms, indicators, 
                  and actionable guidance about existing or emerging threats. Distinguished from raw data by processing 
                  and analysis that creates <span className="text-blue-400">actionable insight</span>.
                </p>
                <p className="text-gray-300 mb-4">
                  Unlike vertical markets that fit cleanly into one pillar, TI operates as foundational infrastructure 
                  that makes every other security function more effective. This horizontal nature explains why TI is 
                  often bundled into platform offerings (XDR, SIEM, MDR) and why standalone TIP vendors face platform 
                  absorption pressure.
                </p>
                <div className="bg-gray-800 rounded-lg p-4 border border-gray-700">
                  <h4 className="font-medium text-white mb-2">Three Defining Characteristics</h4>
                  <ul className="text-sm text-gray-400 space-y-2">
                    <li>• <strong className="text-gray-300">Organization-specific:</strong> Tailored to your threat landscape, not hypothetical</li>
                    <li>• <strong className="text-gray-300">Actionable:</strong> Provides clear detection/prevention/response guidance</li>
                    <li>• <strong className="text-gray-300">Contextual:</strong> Addresses who/why/how, not just what (bare IOCs are not intelligence)</li>
                  </ul>
                </div>
              </div>
            </section>

            {/* Market Structure Section */}
            <section id="structure" className="bg-gray-900 rounded-xl border border-gray-800 p-6">
              <h2 className="text-xl font-semibold mb-4 flex items-center gap-2">
                <span>🏗️</span> Market Structure
              </h2>
              
              {/* Market Sizing */}
              <div className="mb-6">
                <h3 className="text-sm font-semibold text-gray-400 mb-3">Market Size & Growth (Significant Variance)</h3>
                <div className="bg-gray-800 rounded-lg overflow-hidden">
                  <table className="w-full text-sm">
                    <thead>
                      <tr className="border-b border-gray-700">
                        <th className="text-left p-3 text-gray-400 font-medium">Source</th>
                        <th className="text-left p-3 text-gray-400 font-medium">2024/2025</th>
                        <th className="text-left p-3 text-gray-400 font-medium">Projection</th>
                        <th className="text-left p-3 text-gray-400 font-medium">CAGR</th>
                      </tr>
                    </thead>
                    <tbody>
                      {marketSizing.map((row, idx) => (
                        <tr key={idx} className="border-b border-gray-700/50 last:border-0">
                          <td className="p-3 text-gray-300">{row.source}</td>
                          <td className="p-3 text-gray-400">{row.val2024}</td>
                          <td className="p-3 text-gray-400">{row.projection}</td>
                          <td className="p-3 text-green-400">{row.cagr}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
                <p className="text-xs text-gray-500 mt-2">Note: Market size varies 3x ($5.8B to $16.8B) based on scope definition—indicates category boundary confusion.</p>
              </div>

              {/* Sub-segments */}
              <div className="mb-6">
                <h3 className="text-sm font-semibold text-gray-400 mb-3">TI Sub-Segments (Converging)</h3>
                <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
                  {marketSubSegments.map((seg, idx) => (
                    <div key={idx} className="px-3 py-2 bg-gray-800 rounded-lg text-xs text-gray-300">
                      {seg}
                    </div>
                  ))}
                </div>
                <p className="text-xs text-gray-500 mt-2">Critical: TI + DRPS + EASM are rapidly converging into "Extended Threat Intelligence" (XTI) or being absorbed into broader platforms.</p>
              </div>

              {/* Competitive Landscape */}
              <div>
                <div className="flex items-center justify-between mb-3">
                  <h3 className="text-sm font-semibold text-gray-400">Top 15 Vendors by Consensus (2025)</h3>
                  <div className="flex items-center gap-4 text-xs">
                    <div className="flex items-center gap-1">
                      <span className="w-2 h-2 rounded-full bg-green-400"></span>
                      <span className="text-gray-500">Complete</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <span className="w-2 h-2 rounded-full bg-yellow-400"></span>
                      <span className="text-gray-500">In Progress</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <span className="w-2 h-2 rounded-full bg-gray-500"></span>
                      <span className="text-gray-500">Pending</span>
                    </div>
                  </div>
                </div>
                <div className="space-y-3">
                  {competitors.map((comp, idx) => {
                    const statusStyle = getStatusStyle(comp.status);
                    return (
                      <a 
                        key={idx} 
                        href={comp.href}
                        className="flex items-center justify-between p-3 bg-gray-800 rounded-lg hover:bg-gray-750 hover:border-gray-600 border border-transparent transition-all group"
                      >
                        <div className="flex-1 min-w-0">
                          <div className="flex items-center gap-2">
                            <span className="font-medium text-white group-hover:text-blue-400 transition-colors">{comp.name}</span>
                            <span className="text-xs text-gray-600">•</span>
                            <span className="text-xs text-gray-500 truncate">{comp.product}</span>
                          </div>
                          <div className="text-xs text-gray-500 mt-1 line-clamp-2">{comp.focus}</div>
                        </div>
                        <div className="flex items-center gap-3 ml-4">
                          <span className="text-xs px-2 py-1 bg-gray-700 rounded text-gray-400 whitespace-nowrap">
                            {comp.position}
                          </span>
                          <div className={`flex items-center gap-1.5 px-2 py-1 rounded text-xs ${statusStyle.bg}`}>
                            <span className={`w-2 h-2 rounded-full ${statusStyle.dot}`}></span>
                            <span className={statusStyle.text}>{statusStyle.label}</span>
                          </div>
                          <svg className="w-4 h-4 text-gray-600 group-hover:text-blue-400 transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                          </svg>
                        </div>
                      </a>
                    );
                  })}
                </div>
                <p className="text-xs text-gray-500 mt-3">Note: Top 3 vendors (Recorded Future, Mandiant, CrowdStrike) hold ~33% combined market share.</p>
              </div>
            </section>

            {/* Market Dynamics Section */}
            <section id="motion" className="bg-gray-900 rounded-xl border border-gray-800 p-6">
              <h2 className="text-xl font-semibold mb-4 flex items-center gap-2">
                <span>📈</span> Market Dynamics
              </h2>

              {/* Assessment */}
              <div className="bg-blue-900/20 border border-blue-800/50 rounded-lg p-4 mb-6">
                <div className="flex items-center gap-3 mb-2">
                  <span className="text-lg">📊</span>
                  <h4 className="font-semibold text-blue-400">Market Assessment</h4>
                </div>
                <p className="text-sm text-gray-300">
                  <strong className="text-white">Position:</strong> Late Slope of Enlightenment → Early Plateau of Productivity. 
                  <strong className="text-white ml-2">Direction:</strong> Strong Consolidation. 
                  Core TI has matured beyond early adoption, but platform convergence creates new innovation cycles.
                </p>
              </div>

              {/* Hype Cycle */}
              <div className="mb-6">
                <h3 className="text-sm font-semibold text-gray-400 mb-3">Hype Cycle Positioning (2025)</h3>
                <div className="space-y-2">
                  {hypePositions.map((item, idx) => (
                    <div key={idx} className="flex items-center justify-between p-3 bg-gray-800 rounded-lg">
                      <span className="text-gray-300 text-sm">{item.tech}</span>
                      <div className="flex items-center gap-2">
                        <span className={`w-2 h-2 rounded-full ${
                          item.status === 'hot' ? 'bg-red-500' :
                          item.status === 'rising' ? 'bg-green-500' :
                          item.status === 'stable' ? 'bg-blue-500' :
                          'bg-purple-500'
                        }`}></span>
                        <span className="text-xs px-2 py-1 bg-gray-700 rounded text-gray-400">{item.position}</span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Major Trends */}
              <div className="mb-6">
                <h3 className="text-sm font-semibold text-gray-400 mb-3">5 Major Trends for 2025-2026</h3>
                <div className="space-y-3">
                  {trends.map((trend, idx) => (
                    <div key={idx} className="p-3 bg-gray-800 rounded-lg border-l-2 border-blue-500">
                      <div className="font-medium text-white text-sm">{trend.name}</div>
                      <div className="text-xs text-gray-400 mt-1">{trend.description}</div>
                    </div>
                  ))}
                </div>
              </div>

              {/* M&A Activity */}
              <div className="mb-6">
                <h3 className="text-sm font-semibold text-gray-400 mb-3">M&A Activity (Consolidation Signals)</h3>
                <div className="bg-gray-800 rounded-lg overflow-hidden">
                  <table className="w-full text-sm">
                    <thead>
                      <tr className="border-b border-gray-700">
                        <th className="text-left p-3 text-gray-400 font-medium">Date</th>
                        <th className="text-left p-3 text-gray-400 font-medium">Acquirer</th>
                        <th className="text-left p-3 text-gray-400 font-medium">Target</th>
                        <th className="text-left p-3 text-gray-400 font-medium">Value</th>
                        <th className="text-left p-3 text-gray-400 font-medium">Signal</th>
                      </tr>
                    </thead>
                    <tbody>
                      {maActivity.map((row, idx) => (
                        <tr key={idx} className="border-b border-gray-700/50 last:border-0">
                          <td className="p-3 text-gray-400">{row.date}</td>
                          <td className="p-3 text-gray-300">{row.acquirer}</td>
                          <td className="p-3 text-white font-medium">{row.target}</td>
                          <td className="p-3 text-green-400">{row.value}</td>
                          <td className="p-3 text-gray-400 text-xs">{row.signal}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
                <p className="text-xs text-gray-500 mt-2">Recorded Future's $2.65B acquisition (3x its 2019 valuation) signals sustained value creation in the category.</p>
              </div>

              {/* Market Trajectory */}
              <div className="bg-gray-800 rounded-lg p-4">
                <h4 className="text-sm font-semibold text-gray-300 mb-2">Market Structure Trajectory</h4>
                <div className="font-mono text-xs text-gray-400 space-y-1">
                  <div><span className="text-gray-500">2020-2022:</span> Fragmented (50+ independent vendors)</div>
                  <div><span className="text-gray-500">2023-2024:</span> Consolidating (Major M&A activity)</div>
                  <div><span className="text-blue-400">2025-2026:</span> Platform-dominated with specialists</div>
                  <div><span className="text-gray-500">2027+:</span> Oligopoly likely (3-5 major platforms + niche specialists)</div>
                </div>
              </div>
            </section>

            {/* Stakeholders Section */}
            <section id="stakeholders" className="bg-gray-900 rounded-xl border border-gray-800 p-6">
              <h2 className="text-xl font-semibold mb-4 flex items-center gap-2">
                <span>👥</span> Stakeholders
              </h2>

              {/* Analyst Consensus */}
              <div className="mb-6 bg-gray-800/50 rounded-lg p-4 border border-gray-700">
                <h3 className="text-sm font-semibold text-gray-300 mb-2">Analyst Consensus</h3>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-3 text-xs">
                  <div>
                    <span className="text-blue-400 font-medium">Gartner:</span>
                    <span className="text-gray-400 ml-1">TI evolving to "Unified Cyber Risk Intelligence" (UCRI); AI-driven analysis</span>
                  </div>
                  <div>
                    <span className="text-purple-400 font-medium">Forrester:</span>
                    <span className="text-gray-400 ml-1">"No shortage of data; shortage of context"</span>
                  </div>
                  <div>
                    <span className="text-green-400 font-medium">Scale VP:</span>
                    <span className="text-gray-400 ml-1">TI ranked #3 CISO priority (2025)</span>
                  </div>
                </div>
              </div>

              {/* CISO JTBD */}
              <div className="mb-6">
                <h3 className="text-sm font-semibold text-gray-400 mb-3">CISO Jobs To Be Done</h3>
                <div className="bg-gray-800 rounded-lg overflow-hidden">
                  <table className="w-full text-sm">
                    <thead>
                      <tr className="border-b border-gray-700">
                        <th className="text-left p-3 text-gray-400 font-medium">Job Statement</th>
                        <th className="text-left p-3 text-gray-400 font-medium">Success Metric / TI Feature</th>
                      </tr>
                    </thead>
                    <tbody>
                      {cisoJobs.map((row, idx) => (
                        <tr key={idx} className="border-b border-gray-700/50 last:border-0">
                          <td className="p-3 text-gray-300">{row.job}</td>
                          <td className="p-3 text-gray-400 text-xs">{row.metric}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>

              {/* SOC Analyst JTBD */}
              <div className="mb-6">
                <h3 className="text-sm font-semibold text-gray-400 mb-3">SOC Analyst Jobs To Be Done</h3>
                <div className="bg-gray-800 rounded-lg overflow-hidden">
                  <table className="w-full text-sm">
                    <thead>
                      <tr className="border-b border-gray-700">
                        <th className="text-left p-3 text-gray-400 font-medium">Job Statement</th>
                        <th className="text-left p-3 text-gray-400 font-medium">Success Metric</th>
                      </tr>
                    </thead>
                    <tbody>
                      {socAnalystJobs.map((row, idx) => (
                        <tr key={idx} className="border-b border-gray-700/50 last:border-0">
                          <td className="p-3 text-gray-300">{row.job}</td>
                          <td className="p-3 text-gray-400 text-xs">{row.metric}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>

              {/* Threat Hunter JTBD */}
              <div className="mb-6">
                <h3 className="text-sm font-semibold text-gray-400 mb-3">Threat Hunter Jobs To Be Done</h3>
                <div className="bg-gray-800 rounded-lg overflow-hidden">
                  <table className="w-full text-sm">
                    <thead>
                      <tr className="border-b border-gray-700">
                        <th className="text-left p-3 text-gray-400 font-medium">Job Statement</th>
                        <th className="text-left p-3 text-gray-400 font-medium">Success Metric</th>
                      </tr>
                    </thead>
                    <tbody>
                      {threatHunterJobs.map((row, idx) => (
                        <tr key={idx} className="border-b border-gray-700/50 last:border-0">
                          <td className="p-3 text-gray-300">{row.job}</td>
                          <td className="p-3 text-gray-400 text-xs">{row.metric}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>

              {/* TI Manager JTBD */}
              <div className="mb-6">
                <h3 className="text-sm font-semibold text-gray-400 mb-3">Threat Intel Manager Jobs To Be Done</h3>
                <div className="bg-gray-800 rounded-lg overflow-hidden">
                  <table className="w-full text-sm">
                    <thead>
                      <tr className="border-b border-gray-700">
                        <th className="text-left p-3 text-gray-400 font-medium">Job Statement</th>
                        <th className="text-left p-3 text-gray-400 font-medium">Success Metric</th>
                      </tr>
                    </thead>
                    <tbody>
                      {tiManagerJobs.map((row, idx) => (
                        <tr key={idx} className="border-b border-gray-700/50 last:border-0">
                          <td className="p-3 text-gray-300">{row.job}</td>
                          <td className="p-3 text-gray-400 text-xs">{row.metric}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>

              {/* Key Pain Points */}
              <div className="bg-red-900/20 border border-red-800/50 rounded-lg p-4">
                <h4 className="text-sm font-semibold text-red-400 mb-2">Top Pains Addressed</h4>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-3 text-sm text-gray-300">
                  <div>• <strong className="text-white">Alert fatigue:</strong> 78% of analysts say investigation takes 10+ min per alert</div>
                  <div>• <strong className="text-white">Context deficiency:</strong> Bare IOCs without "so what" context</div>
                  <div>• <strong className="text-white">Operationalization gap:</strong> Intelligence collected but not actioned</div>
                  <div>• <strong className="text-white">Skills shortage:</strong> 63% cite lack of staff to manage CTI programs</div>
                </div>
              </div>
            </section>

            {/* Economics Section */}
            <section id="economics" className="bg-gray-900 rounded-xl border border-gray-800 p-6">
              <h2 className="text-xl font-semibold mb-4 flex items-center gap-2">
                <span>💰</span> Economics & ROI
              </h2>

              {/* ROI Metrics */}
              <div className="mb-6">
                <h3 className="text-sm font-semibold text-gray-400 mb-3">The Business Case</h3>
                <div className="grid grid-cols-2 gap-4">
                  {roiMetrics.map((item, idx) => (
                    <div key={idx} className="bg-gray-800 rounded-lg p-4">
                      <div className="text-lg font-bold text-white">{item.value}</div>
                      <div className="text-xs text-gray-400">{item.metric}</div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Pricing Tiers */}
              <div className="mb-6">
                <h3 className="text-sm font-semibold text-gray-400 mb-3">Pricing Tiers (Directional)</h3>
                <div className="bg-gray-800 rounded-lg overflow-hidden">
                  <table className="w-full text-sm">
                    <thead>
                      <tr className="border-b border-gray-700">
                        <th className="text-left p-3 text-gray-400 font-medium">Tier</th>
                        <th className="text-left p-3 text-gray-400 font-medium">Annual Range</th>
                        <th className="text-left p-3 text-gray-400 font-medium">Representative Vendors</th>
                        <th className="text-left p-3 text-gray-400 font-medium">Typical Buyer</th>
                      </tr>
                    </thead>
                    <tbody>
                      {pricingTiers.map((row, idx) => (
                        <tr key={idx} className="border-b border-gray-700/50 last:border-0">
                          <td className="p-3 text-white font-medium">{row.tier}</td>
                          <td className="p-3 text-green-400">{row.range}</td>
                          <td className="p-3 text-gray-400 text-xs">{row.vendors}</td>
                          <td className="p-3 text-gray-400 text-xs">{row.buyer}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
                <p className="text-xs text-gray-500 mt-2">Note: Most vendors are opaque about pricing. Expect low six figures annually for larger, more complex infrastructure.</p>
              </div>

              {/* ROI Calculation */}
              <div className="bg-green-900/20 border border-green-800/50 rounded-lg p-4 mb-6">
                <h4 className="text-sm font-semibold text-green-400 mb-3">Sample ROI (Mid-Market: 2,500 employees)</h4>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-sm mb-4">
                  <div>
                    <div className="text-gray-400">TI Investment</div>
                    <div className="text-white font-medium">$150K/year</div>
                    <div className="text-xs text-gray-500">Platform + feeds + 0.5 FTE</div>
                  </div>
                  <div>
                    <div className="text-gray-400">Expected Breach Cost</div>
                    <div className="text-white font-medium">$1.22M → $0.78M</div>
                    <div className="text-xs text-gray-500">Risk reduction</div>
                  </div>
                  <div>
                    <div className="text-gray-400">Annual Cost Avoidance</div>
                    <div className="text-green-400 font-medium">$440K</div>
                    <div className="text-xs text-gray-500">Net of investment</div>
                  </div>
                  <div>
                    <div className="text-gray-400">ROI</div>
                    <div className="text-green-400 font-bold text-lg">193%</div>
                    <div className="text-xs text-gray-500">When operationalized</div>
                  </div>
                </div>
                <p className="text-xs text-gray-400 border-t border-green-800/50 pt-3">
                  ⚠️ Critical caveat: &lt;50% of organizations can effectively demonstrate TI ROI. Attribution remains a challenge.
                </p>
              </div>

              {/* TCO Warning */}
              <div className="bg-yellow-900/20 border border-yellow-800/50 rounded-lg p-4">
                <h4 className="text-sm font-semibold text-yellow-400 mb-2">TCO Considerations (Hidden Costs)</h4>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-3 text-sm text-gray-300">
                  <div>• <strong className="text-white">Feed overload:</strong> Avg. 26 commercial feeds per org—audit ROI</div>
                  <div>• <strong className="text-white">Data normalization:</strong> Time/effort to standardize feeds</div>
                  <div>• <strong className="text-white">Skills shortage:</strong> 63% lack CTI skills—consider managed services</div>
                  <div>• <strong className="text-white">Integration complexity:</strong> 15-25% TCO add for non-standard stacks</div>
                </div>
              </div>
            </section>

            {/* PM Strategy Section */}
            <section id="product" className="bg-gray-900 rounded-xl border border-gray-800 p-6">
              <h2 className="text-xl font-semibold mb-4 flex items-center gap-2">
                <span>🎯</span> PM Strategic Elements
              </h2>
              
              {/* Table Stakes */}
              <div className="mb-6">
                <h3 className="text-sm font-semibold text-gray-400 mb-3">Table Stakes (2025 MVP—Required for RFP)</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
                  {tableStakes.map((feature, idx) => (
                    <div key={idx} className="flex items-center gap-2 text-sm text-gray-300">
                      <span className="text-green-500">✓</span>
                      {feature}
                    </div>
                  ))}
                </div>
                <p className="text-xs text-gray-500 mt-3">
                  Missing any of these = immediate RFP disqualification. These are no longer differentiators.
                </p>
              </div>

              {/* Differentiators */}
              <div className="mb-6">
                <h3 className="text-sm font-semibold text-gray-400 mb-3">Key Differentiators (What Wins Deals)</h3>
                <div className="space-y-3">
                  {differentiators.map((diff, idx) => (
                    <div key={idx} className="p-3 bg-gray-800 rounded-lg border-l-2 border-blue-500">
                      <div className="font-medium text-white text-sm">{diff.name}</div>
                      <div className="text-xs text-gray-400">{diff.description}</div>
                    </div>
                  ))}
                </div>
              </div>

              {/* If I'm a PM Here Box */}
              <div className="bg-gradient-to-br from-blue-900/30 to-purple-900/30 rounded-xl p-6 border border-blue-800">
                <h3 className="font-semibold text-white mb-4 flex items-center gap-2">
                  <span>💡</span> If I am a PM Here, I Need to Know...
                </h3>
                <div className="space-y-3 text-sm">
                  <div className="flex gap-3">
                    <span className="text-blue-400 font-bold">1.</span>
                    <span className="text-gray-300"><strong className="text-white">Platform consolidation is real.</strong> If you're standalone: (a) differentiate on unique intel, (b) become best integration partner, or (c) prepare for acquisition.</span>
                  </div>
                  <div className="flex gap-3">
                    <span className="text-blue-400 font-bold">2.</span>
                    <span className="text-gray-300"><strong className="text-white">AI is no longer optional—it's the prime differentiator.</strong> GenAI features (NL queries, auto-reports, AI analyst) are table stakes by 2026.</span>
                  </div>
                  <div className="flex gap-3">
                    <span className="text-blue-400 font-bold">3.</span>
                    <span className="text-gray-300"><strong className="text-white">Identity intelligence is the new frontier.</strong> 84% increase in infostealer attacks. Build or partner for credential exposure coverage.</span>
                  </div>
                  <div className="flex gap-3">
                    <span className="text-blue-400 font-bold">4.</span>
                    <span className="text-gray-300"><strong className="text-white">Operationalization &gt; more data.</strong> #1 user complaint: "intel collected but not actionable." Focus on workflow integration over feed count.</span>
                  </div>
                  <div className="flex gap-3">
                    <span className="text-blue-400 font-bold">5.</span>
                    <span className="text-gray-300"><strong className="text-white">Services are outpacing platforms.</strong> 18.1% CAGR vs. 14.7%. Consider managed TI delivery model—product with analysts wins.</span>
                  </div>
                  <div className="flex gap-3">
                    <span className="text-blue-400 font-bold">6.</span>
                    <span className="text-gray-300"><strong className="text-white">Regulatory compliance is a buyer.</strong> NIS2, DORA, SEC rules create demand. Build compliance-aligned capabilities and messaging.</span>
                  </div>
                  <div className="flex gap-3">
                    <span className="text-blue-400 font-bold">7.</span>
                    <span className="text-gray-300"><strong className="text-white">Skills shortage is your design constraint.</strong> 63% lack CTI skills. Product must reduce expertise barrier—automation and guided workflows are competitive advantages.</span>
                  </div>
                </div>
              </div>
            </section>

            {/* Strategic Theses Section */}
            <section id="theses" className="bg-gray-900 rounded-xl border border-gray-800 p-6">
              <h2 className="text-xl font-semibold mb-2 flex items-center gap-2">
                <span>🔮</span> Strategic Theses
              </h2>
              <p className="text-gray-400 text-sm mb-6">
                Three structural shifts reshaping this market. Not incremental changes—fundamental rewirings of where value is created and captured.
              </p>

              <div className="space-y-4">
                {theses.map((thesis) => (
                  <div 
                    key={thesis.id}
                    className={`bg-gray-800 rounded-lg p-4 border-l-4 ${getThesisAccent(thesis.color)}`}
                  >
                    <div className="flex items-start justify-between mb-2">
                      <h3 className="font-semibold text-white">{thesis.title}</h3>
                      <div className="flex items-center gap-2 ml-3">
                        <span className={`text-xs px-2 py-0.5 rounded-full border ${getConfidenceColor(thesis.confidence)}`}>
                          {thesis.confidence}
                        </span>
                        <span className="text-xs text-gray-500">{thesis.timeframe}</span>
                      </div>
                    </div>
                    
                    <p className="text-sm text-gray-300 mb-3">{thesis.claim}</p>
                    
                    <div className="mb-3">
                      <div className="text-xs font-semibold text-gray-500 mb-1">EVIDENCE</div>
                      <div className="flex flex-wrap gap-2">
                        {thesis.evidence.map((item, idx) => (
                          <span key={idx} className="text-xs px-2 py-1 bg-gray-700 rounded text-gray-300">
                            {item}
                          </span>
                        ))}
                      </div>
                    </div>

                    <div className="text-xs text-gray-400 border-t border-gray-700 pt-3">
                      <span className="font-semibold text-gray-300">Implication: </span>
                      {thesis.implication}
                    </div>
                  </div>
                ))}
              </div>

              {/* Synthesis */}
              <div className="mt-6 bg-gray-800/50 rounded-lg p-4 border border-gray-700">
                <h4 className="text-sm font-semibold text-gray-300 mb-2">How These Connect</h4>
                <div className="font-mono text-xs text-gray-400 space-y-1">
                  <div>Platform absorption → <span className="text-green-400">forces standalone TIPs to</span> → differentiate or integrate</div>
                  <div>Identity attacks dominate → <span className="text-purple-400">creates demand for</span> → credential/identity intel</div>
                  <div>Operationalization gap → <span className="text-orange-400">shifts value from</span> → data volume to workflow integration</div>
                </div>
              </div>
            </section>

            {/* Recommendations */}
            <section className="bg-gray-900 rounded-xl border border-gray-800 p-6">
              <h2 className="text-xl font-semibold mb-4 flex items-center gap-2">
                <span>🎯</span> Recommendations
              </h2>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {/* For Buyers */}
                <div className="bg-gray-800 rounded-lg p-4">
                  <h3 className="font-semibold text-white mb-3 flex items-center gap-2">
                    <span className="w-6 h-6 bg-blue-900/50 rounded flex items-center justify-center text-blue-400 text-xs">B</span>
                    For Enterprise Buyers
                  </h3>
                  <ul className="space-y-2 text-sm text-gray-300">
                    <li>• Evaluate TI as platform capability, not standalone purchase</li>
                    <li>• Prioritize operationalization speed over feed count</li>
                    <li>• Require identity/credential intelligence coverage</li>
                    <li>• Audit your 26+ feeds—consolidate for ROI</li>
                    <li>• Consider managed services if lacking CTI expertise</li>
                  </ul>
                </div>

                {/* For Vendors */}
                <div className="bg-gray-800 rounded-lg p-4">
                  <h3 className="font-semibold text-white mb-3 flex items-center gap-2">
                    <span className="w-6 h-6 bg-purple-900/50 rounded flex items-center justify-center text-purple-400 text-xs">V</span>
                    For Vendors / Product Leaders
                  </h3>
                  <ul className="space-y-2 text-sm text-gray-300">
                    <li>• GenAI features must be on every roadmap (table stakes by 2026)</li>
                    <li>• Build or partner for identity/credential intelligence</li>
                    <li>• Focus on workflow integration, not feed expansion</li>
                    <li>• Consider managed service delivery model</li>
                    <li>• Unique data sources (IR, dark web) create defensible moats</li>
                  </ul>
                </div>
              </div>
            </section>

            {/* Resources */}
            <section className="bg-gray-900 rounded-xl border border-gray-800 p-6">
              <h2 className="text-xl font-semibold mb-4 flex items-center gap-2">
                <span>📎</span> Resources
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <a href="#" className="flex items-center gap-3 p-4 bg-gray-800 hover:bg-gray-700 rounded-lg transition-colors">
                  <span className="text-2xl">📄</span>
                  <div>
                    <div className="font-medium">Full Strategic Brief</div>
                    <div className="text-xs text-gray-500">Complete SRP analysis (PDF)</div>
                  </div>
                </a>
                <a href="#" className="flex items-center gap-3 p-4 bg-gray-800 hover:bg-gray-700 rounded-lg transition-colors">
                  <span className="text-2xl">📊</span>
                  <div>
                    <div className="font-medium">Vendor Comparison Matrix</div>
                    <div className="text-xs text-gray-500">Side-by-side feature analysis</div>
                  </div>
                </a>
              </div>
            </section>

          </div>
        </div>

        {/* Footer */}
        <footer className="mt-12 pt-8 border-t border-gray-800 text-center text-gray-500 text-sm">
          <p>Analysis by Andy Simko • CISSP • GPEN • CISA • GSNA • HCSFP • PMC-Level III</p>
          <p className="mt-1 text-gray-600">15+ years in cybersecurity • Methodology: Systematic Research Process (SRP)</p>
        </footer>
      </div>
    </div>
  );
};

export default ThreatIntelligencePage;
