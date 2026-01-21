"use client";
import React, { useState } from 'react';
import { Logo } from '@/components/Logo';

const XDRPage = () => {
  const [activeSection, setActiveSection] = useState('overview');

  // SecOps & Analytics sub-segments
  const subSegments = [
    { id: 'siem', name: 'SIEM', active: false, href: '/pillars/secops/siem' },
    { id: 'soar', name: 'SOAR', active: false, href: '/pillars/secops/soar' },
    { id: 'xdr', name: 'XDR', active: true, href: '/pillars/secops/xdr' },
    { id: 'mdr', name: 'MDR/MXDR', active: false, href: '#' },
    { id: 'ndr', name: 'NDR', active: false, href: '#' },
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

  // Related pillars (XDR spans multiple domains)
  const relatedPillars = [
    { name: 'Endpoint & Workload', primary: true },
    { name: 'Identity', primary: true },
    { name: 'Network & Edge', primary: false },
    { name: 'Cloud Security', primary: false },
  ];

  const keyInsights = [
    { stat: '$10-12B', label: 'Market size (2024)' },
    { stat: '29 days', label: 'Faster detection vs. no XDR (IBM)' },
    { stat: '3.4M', label: 'Global cybersecurity workforce gap' },
    { stat: '60%', label: 'CISOs cite tool consolidation as #1 priority' },
  ];

  const marketSizing = [
    { source: 'Industry Consensus', val2024: '$10-12B', projection: '$12-14B (2025)', cagr: '15-20%' },
    { source: 'MDR Market (Services)', val2024: '$1.89B', projection: '$2.31B (2025)', cagr: '20.2%' },
    { source: 'Global Security Software', val2024: '$87B', projection: '$100.7B (2025)', cagr: '15.1%' },
  ];

  const marketSubSegments = [
    'Native XDR (Single Vendor)',
    'Open/Hybrid XDR (Multi-Vendor)',
    'Managed XDR (MXDR)',
    'XDR-SIEM Convergence Platforms',
    'Cloud-Native XDR',
    'SMB/MSP-Delivered XDR',
  ];

  // Top vendors by analyst consensus
  const competitors = [
    { 
      name: 'Microsoft', 
      product: 'Defender XDR + Sentinel',
      position: 'Platform Leader', 
      focus: 'Broadest native coverage (endpoint, identity, email, cloud). E5 bundle economics. Security Copilot AI integration.',
      status: 'in-progress',
      href: '/pillars/secops/xdr/companies/microsoft'
    },
    { 
      name: 'Palo Alto Networks', 
      product: 'Cortex XDR / XSIAM',
      position: 'Platform Leader', 
      focus: '100% MITRE detection. XSIAM >$1B bookings. AgentiX agentic AI. CyberArk acquisition for identity.',
      status: 'in-progress',
      href: '/pillars/secops/xdr/companies/paloalto'
    },
    { 
      name: 'CrowdStrike', 
      product: 'Falcon XDR + Next-Gen SIEM',
      position: 'Platform Leader', 
      focus: '100% MITRE ATT&CK (2025). Charlotte AI with 7 agentic agents. AIDR category pioneer.',
      status: 'in-progress',
      href: '/pillars/secops/xdr/companies/crowdstrike'
    },
    { 
      name: 'SentinelOne', 
      product: 'Singularity XDR',
      position: 'Platform Leader', 
      focus: 'First AI analyst (Purple AI). FedRAMP High authorized. Open API approach.',
      status: 'in-progress',
      href: '/pillars/secops/xdr/companies/sentinelone'
    },
    { 
      name: 'Trend Micro', 
      product: 'Vision One XDR',
      position: 'Platform Leader', 
      focus: 'Top Gartner score for Architecturally Constrained use case. Consumption-based pricing.',
      status: 'in-progress',
      href: '/pillars/secops/xdr/companies/trendmicro'
    },
    { 
      name: 'Sophos', 
      product: 'Sophos XDR + MDR',
      position: 'MXDR Leader', 
      focus: '#1 G2 Overall (XDR, MDR, EDR, Firewall). Secureworks acquisition ($859M). Largest pure-play MDR.',
      status: 'in-progress',
      href: '/pillars/secops/xdr/companies/sophos'
    },
    { 
      name: 'Cisco', 
      product: 'Cisco XDR + Splunk',
      position: 'Platform Leader', 
      focus: '$28B Splunk acquisition. Network-first heritage. SnapAttack acquisition (Jan 2025).',
      status: 'in-progress',
      href: '/pillars/secops/xdr/companies/cisco'
    },
    { 
      name: 'Elastic', 
      product: 'Elastic Security',
      position: 'Search Leader', 
      focus: 'IDC MarketScape Leader. Flexible data ingestion. Search capabilities.',
      status: 'in-progress',
      href: '/pillars/secops/xdr/companies/elastic'
    },
    { 
      name: 'Cynet', 
      product: 'Cynet All-in-One XDR',
      position: 'SMB Leader', 
      focus: 'All-in-one pricing (~$7/endpoint/month). Includes 24/7 MDR. SMB-focused.',
      status: 'in-progress',
      href: '/pillars/secops/xdr/companies/cynet'
    },
    { 
      name: 'Arctic Wolf', 
      product: 'Arctic Wolf Platform',
      position: 'MXDR Specialist', 
      focus: 'Concierge security model. Mid-market focus. Strong managed services.',
      status: 'in-progress',
      href: '/pillars/secops/xdr/companies/arcticwolf'
    },
    { 
      name: 'Stellar Cyber', 
      product: 'Open XDR Platform',
      position: 'Open XDR', 
      focus: 'Vendor-agnostic. MSSP-focused. Could disrupt with channel focus.',
      status: 'in-progress',
      href: '/pillars/secops/xdr/companies/stellarcyber'
    },
    { 
      name: 'Trellix', 
      product: 'Trellix XDR Platform',
      position: 'Enterprise', 
      focus: '650+ telemetry connectors. McAfee + FireEye heritage.',
      status: 'in-progress',
      href: '/pillars/secops/xdr/companies/trellix'
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
    { name: 'Agentic AI & Autonomous SOC', description: 'CrowdStrike Charlotte AI (7 agents), Palo Alto AgentiX. Analysts become orchestrators managing AI agent fleets. THE 2025 competitive frontier.' },
    { name: 'XDR-SIEM Convergence', description: 'Palo Alto XSIAM, CrowdStrike Falcon NG-SIEM positioned as SIEM replacements. Pure-play SIEM under existential pressure.' },
    { name: 'Platform Consolidation Accelerates', description: 'Top 5 vendors hold 50-60% share. $28B Cisco/Splunk, $859M Sophos/Secureworks. "Get big or get acquired" dynamics.' },
    { name: 'MXDR Explosion', description: 'Services growing 32.5% CAGR vs. 20% for solutions. SMB/mid-market can\'t staff 24/7 SOCs.' },
    { name: 'Identity as Core Telemetry', description: 'ITDR absorbed into XDR. CrowdStrike/SGNL ($740M), Palo Alto/CyberArk ($25B). Can\'t detect modern attacks without identity.' },
  ];

  const hypePositions = [
    { tech: 'Core XDR', position: 'Late Trough → Slope of Enlightenment', status: 'rising', note: 'Market maturing with clearer definitions' },
    { tech: 'Agentic AI SOC', position: 'Innovation Trigger', status: 'emerging', note: 'CrowdStrike & Palo Alto defining category' },
    { tech: 'XDR-SIEM Convergence', position: 'Early Slope of Enlightenment', status: 'hot', note: 'XSIAM, Falcon NG-SIEM leading' },
    { tech: 'SOAR (Standalone)', position: 'Trough of Disillusionment', status: 'declining', note: 'Being absorbed into XDR automation' },
    { tech: 'MXDR Services', position: 'Slope of Enlightenment', status: 'rising', note: 'Fastest-growing segment' },
  ];

  const maActivity = [
    { date: 'Feb 2025', acquirer: 'Sophos', target: 'Secureworks', value: '$859M', signal: 'MXDR scale; Taegis platform' },
    { date: '2025', acquirer: 'CrowdStrike', target: 'SGNL/Pangea', value: '~$740M', signal: 'Identity + AI agent security' },
    { date: 'Jul 2025', acquirer: 'Palo Alto Networks', target: 'CyberArk', value: '$25B (announced)', signal: 'Identity integration' },
    { date: '2024', acquirer: 'Cisco', target: 'Splunk', value: '$28B', signal: 'SIEM + network telemetry' },
    { date: '2022', acquirer: 'SentinelOne', target: 'Attivo Networks', value: '$616.5M', signal: 'Identity threat protection' },
  ];

  const acquisitionRisk = [
    { vendor: 'SentinelOne', probability: '45%', acquirers: 'Palo Alto (rumored $7-8.5B)', timeline: '12-24 months', note: 'Revenue growth slowed; still unprofitable' },
    { vendor: 'Stellar Cyber', probability: '40%', acquirers: 'Larger platform vendors', timeline: '12-24 months', note: 'Open XDR for MSSP channel' },
    { vendor: 'Cynet', probability: '35%', acquirers: 'Mid-market focused acquirers', timeline: '18-36 months', note: 'SMB all-in-one positioning' },
  ];

  const cisoJobs = [
    { job: 'Correlate threats across complex hybrid environment', metric: 'Single attack chain visibility; cross-domain detection' },
    { job: 'Reduce SOC analyst burnout and turnover', metric: '70% burnout rate; 26-month avg tenure—automation critical' },
    { job: 'Consolidate tool sprawl without losing coverage', metric: '60% cite as #1 priority; 45+ tools average' },
    { job: 'Demonstrate security maturity to board', metric: 'MITRE ATT&CK coverage; meaningful metrics' },
  ];

  const socAnalystJobs = [
    { job: 'See the whole attack chain, not just fragments', metric: 'Unified incident view; cross-domain correlation' },
    { job: 'Know what to investigate first without manual triage', metric: 'ML-driven prioritization; automated triage' },
    { job: 'Respond faster without switching between tools', metric: '<3 min containment; single console' },
    { job: 'Hunt threats proactively, not just react', metric: 'Query/search across data; threat hunting tools' },
  ];

  const midMarketJobs = [
    { job: 'Get enterprise-grade security without enterprise budget', metric: '<$50/endpoint/year; MXDR option' },
    { job: 'Offload 24/7 monitoring to managed service', metric: 'Relief from being "always on"; SLA guarantees' },
    { job: 'Protect against ransomware (existential threat)', metric: 'Auto-remediation; fast incident response' },
  ];

  const smbJobs = [
    { job: '"Just protect me"—don\'t want to become security expert', metric: 'Set and forget; minimal touch required' },
    { job: 'Avoid ransomware disaster that kills the business', metric: 'Business continuity; auto-response' },
    { job: 'Affordable protection that "just works"', metric: '<$10/endpoint/month; MSP bundles' },
  ];

  const tableStakes = [
    'Endpoint telemetry (native, Windows/macOS/Linux)',
    'Cross-domain correlation (endpoint, network, identity, email, cloud)',
    'ML/AI-driven detection (behavioral analytics)',
    'Automated response actions (isolate, block, disable)',
    'Unified incident console (single pane of glass)',
    'Normalized data model across sources',
    'Threat intelligence integration',
    '30-90 day log retention minimum',
    'Query/search capability for hunting',
    'MITRE ATT&CK technique mapping',
    'Cloud-delivered management console',
    'Role-based access control (RBAC)',
    'API access for integrations',
    'Compliance reporting (SOC 2, HIPAA, PCI)',
  ];

  const differentiators = [
    { name: 'Detection Quality (MITRE ATT&CK)', description: '100% technique detection is bragging rights. False positive rates matter. "Will it actually catch threats?" is #1 buyer question.' },
    { name: 'AI/Automation Sophistication (Agentic)', description: 'Beyond basic automation to autonomous triage, investigation, response. CrowdStrike Charlotte AI, Palo Alto AgentiX lead. THE 2025 battleground.' },
    { name: 'Unified Platform & Consolidation Value', description: 'Single vendor simplicity. 200-250% ROI documented. TCO story resonates with CFOs.' },
    { name: 'Analyst Experience & Investigation Workflow', description: '8x faster investigations. POC experience influences decisions. SOC burnout (70%) makes UX critical.' },
    { name: 'Managed Service Option (MXDR)', description: 'Mid-market can\'t build 24/7 SOC. Services growing 32.5% CAGR. Headcount avoidance ROI.' },
    { name: 'Identity Integration Depth', description: '80%+ breaches involve identity. ITDR being absorbed. Native identity detection now expected.' },
    { name: 'Pricing Transparency & Predictability', description: 'Data ingestion traps burn buyers. Predictable pricing is competitive advantage.' },
  ];

  const roiMetrics = [
    { metric: 'XDR detection/containment speedup', value: '29 days faster' },
    { metric: 'AI/automation breach savings', value: '$2.2M per breach' },
    { metric: 'Documented XDR ROI (Forrester TEI)', value: '200-250%' },
    { metric: 'Global average breach cost', value: '$4.88M' },
  ];

  const pricingTiers = [
    { tier: 'Enterprise Platform', range: '$75-185/endpoint/year', vendors: 'CrowdStrike, Palo Alto, Microsoft', buyer: 'Enterprise 5K+' },
    { tier: 'Mid-Market', range: '$35-75/endpoint/year', vendors: 'SentinelOne, Trend Micro, Sophos', buyer: 'Mid-Market 250-5K' },
    { tier: 'SMB/All-in-One', range: '$7-15/endpoint/month', vendors: 'Cynet, Huntress (managed)', buyer: 'SMB <250' },
    { tier: 'MXDR Premium', range: '$50-135/endpoint/year', vendors: 'Sophos MDR, CrowdStrike Complete, Arctic Wolf', buyer: 'All segments (managed)' },
  ];

  const tcoComponents = [
    { category: 'Direct Costs', components: 'License/subscription, hardware, cloud compute', pctTco: '30-40%' },
    { category: 'Implementation', components: 'Professional services, integration, customization', pctTco: '15-20%' },
    { category: 'Operational', components: 'Training, admin, tuning, content development', pctTco: '25-35%' },
    { category: 'Hidden/Indirect', components: 'Productivity loss during transition, opportunity costs', pctTco: '10-20%' },
  ];

  const theses = [
    {
      id: 1,
      title: 'XDR is a Unification Play, Not a Feature Set',
      timeframe: '2025-2027',
      confidence: 'High',
      color: 'green',
      claim: 'The value isn\'t any single capability—it\'s the correlation across domains. If your XDR can\'t tell a story across endpoint → identity → network → cloud, you\'re just selling EDR with a new label.',
      evidence: ['Forrester retired EDR Wave—XDR is now the evaluative category', 'Cross-domain correlation IS the "X" in XDR', '60% of CISOs cite tool consolidation as #1 priority', 'Platform vendors winning on bundled economics'],
      implication: 'Evaluate XDR on correlation depth across domains, not individual detection capabilities. Point solutions face extinction.',
    },
    {
      id: 2,
      title: 'Agentic AI Defines the 2025-2026 Competitive Frontier',
      timeframe: '2025-2026',
      confidence: 'High',
      color: 'purple',
      claim: 'CrowdStrike and Palo Alto are defining "autonomous SOC" right now. Vendors not shipping agentic capabilities are already behind. But beware AI theater—buyers are getting skeptical of vaporware.',
      evidence: ['CrowdStrike Charlotte AI: 7 mission-ready agents', 'Palo Alto AgentiX: 98% MTTR reduction claim', '3.4M global cybersecurity workforce gap—automation is existential', 'AIDR (AI Detection and Response) emerging as new category'],
      implication: 'AI credibility requires demonstrable outcomes (MTTR reduction, alerts auto-closed), not feature claims. Focus on measurable autonomy.',
    },
    {
      id: 3,
      title: 'Platform Consolidation is the Endgame',
      timeframe: '2025-2028',
      confidence: 'Medium-High',
      color: 'orange',
      claim: 'Microsoft, Palo Alto, and CrowdStrike are building security superstores. If you\'re not a platform, you\'re either a feature (acquisition target) or a niche player. Know which one you\'re aiming for.',
      evidence: ['Top 5 vendors hold 50-60% market share', '$28B Cisco/Splunk, $25B Palo Alto/CyberArk (announced)', 'XDR absorbing SIEM, SOAR, EDR, ITDR', 'SentinelOne acquisition rumors ($7-8.5B)'],
      implication: 'Second-tier vendors must differentiate on segment focus, unique capability depth, or prepare for acquisition. Horizontal competition against platforms is unwinnable.',
    },
  ];

  const segmentGuidance = [
    {
      segment: 'Enterprise',
      keyPoints: [
        'Depth > breadth in any given capability',
        'API extensibility and custom rules mandatory',
        'Integration with existing SIEM/SOAR investments',
        'Compliance and audit features matter more than you think',
        'Multi-tenancy for global deployments',
      ]
    },
    {
      segment: 'Mid-Market',
      keyPoints: [
        'Managed service option is non-negotiable',
        'Simplicity beats power; "good enough" that\'s easy wins',
        'Pricing must be predictable (<$50/endpoint/year)',
        'Fast deployment (<30 days to value)',
        'Partner/MSP channel is your distribution',
      ]
    },
    {
      segment: 'SMB',
      keyPoints: [
        '"Set and forget" is the goal',
        'Automatic everything—detection, response, updates',
        'Pricing transparency and simplicity',
        'MSP/partner channel is primary (not direct)',
        'Don\'t overwhelm with features they\'ll never use',
      ]
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
    <div className="min-h-screen bg-gray-950 text-white">

      {/* Navigation */}
      <nav className="border-b border-gray-800 bg-gray-950/80 backdrop-blur-sm sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 py-3">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3 text-sm">
              <a href="/" className="hover:opacity-80 transition-opacity">
                <Logo />
              </a>
              /
              <span className="text-blue-400">SecOps & Analytics</span>
            </div>
            <div className="flex gap-6 text-sm text-gray-400">
              <a href="/pillars" className="hover:text-white transition-colors">Pillars</a>
              <a href="/theses" className="hover:text-white transition-colors">Theses</a>
              <a href="/about" className="hover:text-white transition-colors">About</a>
            </div>
          </div>
        </div>
      </nav>

      <div className="max-w-7xl mx-auto px-4 py-6">
        
        {/* Sub-segment Navigation */}
        <div className="flex items-center justify-between mb-6">
          <div className="flex gap-2 flex-wrap">
            {subSegments.map((seg) => (
              <a
                key={seg.id}
                href={seg.href}
                className={`px-3 py-1.5 rounded-full text-sm transition-all flex items-center gap-1.5 ${
                  seg.active
                    ? 'bg-blue-900/50 text-blue-400 border border-blue-800'
                    : 'bg-gray-800/50 text-gray-400 hover:bg-gray-800 hover:text-white border border-transparent'
                }`}
              >
                {seg.active && <span className="text-xs">●</span>}
                {seg.name}
              </a>
            ))}
          </div>
          
          {/* Related pillars */}
          <div className="hidden md:flex items-center gap-2 text-xs text-gray-500">
            <span>Spans:</span>
            {relatedPillars.map((pillar, idx) => (
              <span
                key={idx}
                className={`px-2 py-1 rounded ${
                  pillar.primary ? 'bg-purple-900/30 text-purple-400' : 'bg-gray-800 text-gray-400'
                }`}
              >
                {pillar.name}
              </span>
            ))}
          </div>
        </div>

        
        {/* Header */}
        <div className="mb-8">
          <div className="flex items-center gap-3 mb-2">
            <h1 className="text-3xl font-bold">Extended Detection & Response (XDR)</h1>
            <span className="px-2 py-1 text-xs font-medium bg-blue-900/50 text-blue-400 rounded border border-blue-800">
              UNIFICATION PLAY
            </span>
          </div>
          <p className="text-gray-400 text-lg mb-4">
            The $10B+ market unifying security telemetry across endpoint, network, identity, and cloud—absorbing SIEM and SOAR
          </p>
          
          <div className="flex items-center gap-4 text-sm text-gray-500">
            <span>Last updated: January 2026</span>
            •
            <span>Methodology: SRP Framework</span>
            •
            <span className="flex items-center gap-1">
              <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></span>
              Active research
            </span>
          </div>
        </div>

        {/* Key Stats Bar */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
          {keyInsights.map((insight, idx) => (
            <div
              key={idx}
              className="bg-gray-900/50 border border-gray-800 rounded-lg p-4 text-center"
            >
              <div className="text-2xl font-bold text-white mb-1">{insight.stat}</div>
              <div className="text-xs text-gray-400">{insight.label}</div>
            </div>
          ))}
        </div>

        {/* The Core Insight Callout */}
        <div className="bg-gradient-to-r from-blue-900/30 to-purple-900/30 border border-blue-800/50 rounded-lg p-6 mb-8">
          <div className="flex items-start gap-4">
            <div className="text-3xl">🎯</div>
            <div>
              <h3 className="font-semibold text-white mb-2">The Core Insight: Unification, Not Features</h3>
              <p className="text-gray-300 text-sm leading-relaxed">
                XDR's value isn't any single capability—it's <span className="text-blue-400 font-medium">cross-domain correlation</span>. 
                If you can't tell a story across endpoint → identity → network → cloud, 
                you're selling EDR with a new label. The "X" in XDR means <span className="text-blue-400 font-medium">extended visibility</span>, 
                not extended marketing.
                <span className="text-gray-400"> The market is rapidly consolidating around platforms that deliver this promise.</span>
              </p>
            </div>
          </div>
        </div>

        {/* Main Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
          
          {/* Left Sidebar - SRP Navigation */}
          <div className="lg:col-span-1">
            <div className="sticky top-20 space-y-4">
              <div className="bg-gray-900/50 border border-gray-800 rounded-lg p-4">
                <h3 className="text-sm font-semibold text-gray-300 mb-3">SRP Analysis</h3>
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

              {/* XDR Value Chain Visual */}
              <div className="bg-gray-900/50 border border-gray-800 rounded-lg p-4">
                <h3 className="text-sm font-semibold text-gray-300 mb-3">XDR Telemetry Domains</h3>
                <div className="space-y-2">
                  <div className="flex items-center gap-2 text-xs">
                    <span className="w-8 h-8 rounded bg-blue-900/50 border border-blue-700 flex items-center justify-center">💻</span>
                    <div>
                      <div className="text-white font-medium">Endpoint</div>
                      <div className="text-gray-500">Native required</div>
                    </div>
                  </div>
                  <div className="flex items-center gap-2 text-xs">
                    <span className="w-8 h-8 rounded bg-purple-900/50 border border-purple-700 flex items-center justify-center">👤</span>
                    <div>
                      <div className="text-white font-medium">Identity</div>
                      <div className="text-gray-500">80%+ of breaches</div>
                    </div>
                  </div>
                  <div className="flex items-center gap-2 text-xs">
                    <span className="w-8 h-8 rounded bg-green-900/50 border border-green-700 flex items-center justify-center">📧</span>
                    <div>
                      <div className="text-white font-medium">Email</div>
                      <div className="text-gray-500">#1 initial access</div>
                    </div>
                  </div>
                  <div className="flex items-center gap-2 text-xs">
                    <span className="w-8 h-8 rounded bg-orange-900/50 border border-orange-700 flex items-center justify-center">🌐</span>
                    <div>
                      <div className="text-white font-medium">Network</div>
                      <div className="text-gray-500">Lateral movement</div>
                    </div>
                  </div>
                  <div className="flex items-center gap-2 text-xs">
                    <span className="w-8 h-8 rounded bg-cyan-900/50 border border-cyan-700 flex items-center justify-center">☁️</span>
                    <div>
                      <div className="text-white font-medium">Cloud</div>
                      <div className="text-gray-500">Multi-cloud reality</div>
                    </div>
                  </div>
                </div>
                <p className="text-xs text-gray-500 mt-3">Correlation across all domains = XDR value</p>
              </div>
            </div>
          </div>

          {/* Main Content Area */}
          <div className="lg:col-span-3 space-y-8">
            
            {/* Overview Section */}
            <section id="overview" className="bg-gray-900/30 border border-gray-800 rounded-lg p-6">
              <h2 className="text-xl font-semibold mb-4 flex items-center gap-2">
                <span>📋</span> Overview
              </h2>
              <div className="space-y-4 text-gray-300 text-sm leading-relaxed">
                <p>
                  <strong className="text-white">Extended Detection and Response (XDR)</strong> is a cybersecurity technology that 
                  unifies security telemetry from multiple sources—endpoints, networks, cloud workloads, email, identity systems, 
                  and servers—into a single platform for comprehensive threat detection, investigation, and automated response.
                </p>
                <p>
                  The term was coined by Nir Zuk (CTO, Palo Alto Networks) in 2018 and represents an evolution beyond 
                  Endpoint Detection and Response (EDR). Forrester officially retired the EDR Wave in 2023—XDR is now 
                  the evaluative category.
                </p>
                <div className="bg-gray-800/50 rounded-lg p-4 border border-gray-700">
                  <h4 className="text-white font-medium mb-2">Three Foundational Promises</h4>
                  <ul className="space-y-2">
                    <li className="flex items-start gap-2">
                      <span className="text-blue-400">•</span>
                      <span><strong className="text-white">Cross-Layered Detection:</strong> Visibility across endpoints, networks, cloud, email, and identity</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-blue-400">•</span>
                      <span><strong className="text-white">Meaningful Automation:</strong> AI/ML-powered analytics that reduce manual effort and alert fatigue</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-blue-400">•</span>
                      <span><strong className="text-white">Full Stack Integration:</strong> Unified view eliminating tool silos</span>
                    </li>
                  </ul>
                </div>
                <div className="grid grid-cols-2 gap-4 mt-4">
                  <div className="bg-gray-800/30 rounded p-3 border border-gray-700">
                    <h5 className="text-white font-medium text-sm mb-1">Native XDR</h5>
                    <p className="text-xs text-gray-400">Single vendor, integrated solution. Faster deployment, tighter integration. Trade-off: vendor lock-in.</p>
                  </div>
                  <div className="bg-gray-800/30 rounded p-3 border border-gray-700">
                    <h5 className="text-white font-medium text-sm mb-1">Open/Hybrid XDR</h5>
                    <p className="text-xs text-gray-400">Vendor-agnostic, third-party integrations. Preserves investments. Trade-off: integration complexity.</p>
                  </div>
                </div>
              </div>
            </section>

            {/* Market Structure Section */}
            <section id="structure" className="bg-gray-900/30 border border-gray-800 rounded-lg p-6">
              <h2 className="text-xl font-semibold mb-4 flex items-center gap-2">
                <span>🏗️</span> Market Structure
              </h2>
              
              {/* Market Sizing */}
              <div className="mb-6">
                <h3 className="text-sm font-semibold text-gray-300 mb-3">Market Size & Growth</h3>
                <div className="overflow-x-auto">
                  <table className="w-full text-sm">
                    <thead>
                      <tr className="text-left text-gray-400 border-b border-gray-700">
                        <th className="pb-2">Segment</th>
                        <th className="pb-2">2024</th>
                        <th className="pb-2">Projection</th>
                        <th className="pb-2">CAGR</th>
                      </tr>
                    </thead>
                    <tbody className="text-gray-300">
                      {marketSizing.map((row, idx) => (
                        <tr key={idx} className="border-b border-gray-800">
                          <td className="py-2 text-white">{row.source}</td>
                          <td className="py-2">{row.val2024}</td>
                          <td className="py-2">{row.projection}</td>
                          <td className="py-2 text-green-400">{row.cagr}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
                <p className="text-xs text-gray-500 mt-2">Security spending: 8.6% of IT budget (2020) → 13.2% (2024)</p>
              </div>

              {/* Sub-segments */}
              <div className="mb-6">
                <h3 className="text-sm font-semibold text-gray-300 mb-3">XDR Deployment Models</h3>
                <div className="flex flex-wrap gap-2">
                  {marketSubSegments.map((seg, idx) => (
                    <span
                      key={idx}
                      className="px-3 py-1.5 bg-gray-800 text-gray-300 rounded-full text-xs border border-gray-700"
                    >
                      {seg}
                    </span>
                  ))}
                </div>
              </div>

              {/* What's Replacing What */}
              <div className="mb-6">
                <h3 className="text-sm font-semibold text-gray-300 mb-3">Absorption Patterns</h3>
                <div className="space-y-2">
                  <div className="flex items-center justify-between bg-gray-800/50 rounded p-3">
                    <span className="text-gray-400">EDR → XDR</span>
                    <span className="text-green-400 text-sm">Complete (Forrester retired EDR Wave)</span>
                  </div>
                  <div className="flex items-center justify-between bg-gray-800/50 rounded p-3">
                    <span className="text-gray-400">SIEM → XDR/Next-Gen SIEM</span>
                    <span className="text-yellow-400 text-sm">In Progress (XSIAM, Falcon NG-SIEM)</span>
                  </div>
                  <div className="flex items-center justify-between bg-gray-800/50 rounded p-3">
                    <span className="text-gray-400">SOAR → Embedded Automation</span>
                    <span className="text-yellow-400 text-sm">Accelerating (SOAR in "Trough")</span>
                  </div>
                  <div className="flex items-center justify-between bg-gray-800/50 rounded p-3">
                    <span className="text-gray-400">ITDR → XDR Telemetry</span>
                    <span className="text-yellow-400 text-sm">2024-2026 (CrowdStrike/SGNL, etc.)</span>
                  </div>
                </div>
              </div>

              {/* Competitive Landscape */}
              <div className="mb-4">
                <div className="flex items-center justify-between mb-3">
                  <h3 className="text-sm font-semibold text-gray-300">Top 12 Vendors by Analyst Consensus (2025)</h3>
                  <div className="flex gap-3 text-xs">
                    <span className="flex items-center gap-1">
                      <span className="w-2 h-2 rounded-full bg-green-400"></span>
                      Complete
                    </span>
                    <span className="flex items-center gap-1">
                      <span className="w-2 h-2 rounded-full bg-yellow-400"></span>
                      In Progress
                    </span>
                    <span className="flex items-center gap-1">
                      <span className="w-2 h-2 rounded-full bg-gray-500"></span>
                      Pending
                    </span>
                  </div>
                </div>
                <div className="space-y-2">
                  {competitors.map((comp, idx) => {
                    const statusStyle = getStatusStyle(comp.status);
                    return (
                      <a
                        key={idx}
                        href={comp.href}
                        className="block bg-gray-800/50 hover:bg-gray-800 border border-gray-700 hover:border-gray-600 rounded-lg p-4 transition-all"
                      >
                        <div className="flex items-start justify-between gap-4">
                          <div className="flex-1">
                            <div className="flex items-center gap-2 mb-1">
                              <span className="text-white font-medium">{comp.name}</span>
                              <span className="text-gray-500">•</span>
                              <span className="text-gray-400 text-sm">{comp.product}</span>
                            </div>
                            <p className="text-gray-400 text-xs">{comp.focus}</p>
                          </div>
                          <div className="flex items-center gap-2">
                            <span className="text-xs px-2 py-1 rounded bg-gray-700 text-gray-300">
                              {comp.position}
                            </span>
                            <span className={`text-xs px-2 py-1 rounded ${statusStyle.bg} ${statusStyle.text} flex items-center gap-1`}>
                              <span className={`w-1.5 h-1.5 rounded-full ${statusStyle.dot}`}></span>
                              {statusStyle.label}
                            </span>
                            <span className="text-gray-500">
                              →
                            </span>
                          </div>
                        </div>
                      </a>
                    );
                  })}
                </div>
                <p className="text-xs text-gray-500 mt-3">Top 5 vendors hold 50-60% combined market share. Analyst sources: Gartner MQ (EPP), Forrester Wave (XDR), IDC MarketScape, G2.</p>
              </div>
            </section>

            {/* Market Dynamics Section */}
            <section id="motion" className="bg-gray-900/30 border border-gray-800 rounded-lg p-6">
              <h2 className="text-xl font-semibold mb-4 flex items-center gap-2">
                <span>📈</span> Market Dynamics
              </h2>

              {/* Assessment */}
              <div className="bg-gradient-to-r from-blue-900/20 to-purple-900/20 border border-blue-800/50 rounded-lg p-4 mb-6">
                <div className="flex items-center gap-3">
                  <span className="text-2xl">📊</span>
                  <span className="text-white font-medium">Market Assessment</span>
                </div>
                <p className="text-gray-300 text-sm mt-2">
                  <strong className="text-white">Position:</strong> Late Trough of Disillusionment → Early Slope of Enlightenment. 
                  <strong className="text-white ml-2">Direction:</strong> Strong Consolidation. 
                  XDR has matured beyond definitional chaos; proven outcomes and platform consolidation are clarifying winners.
                </p>
              </div>

              {/* Hype Cycle */}
              <div className="mb-6">
                <h3 className="text-sm font-semibold text-gray-300 mb-3">Hype Cycle Positioning (2025)</h3>
                <div className="space-y-2">
                  {hypePositions.map((item, idx) => (
                    <div key={idx} className="flex items-center justify-between bg-gray-800/50 rounded-lg p-3">
                      <div>
                        <span className="text-white text-sm">{item.tech}</span>
                        <span className="text-gray-500 text-xs ml-2">— {item.note}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <span className={`w-2 h-2 rounded-full ${
                          item.status === 'hot' ? 'bg-red-400' :
                          item.status === 'rising' ? 'bg-green-400' :
                          item.status === 'emerging' ? 'bg-blue-400' :
                          item.status === 'declining' ? 'bg-orange-400' :
                          'bg-gray-400'
                        }`}></span>
                        <span className="text-xs text-gray-400">{item.position}</span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Major Trends */}
              <div className="mb-6">
                <h3 className="text-sm font-semibold text-gray-300 mb-3">5 Key Market Trends (2025-2026)</h3>
                <div className="space-y-3">
                  {trends.map((trend, idx) => (
                    <div key={idx} className="bg-gray-800/30 border border-gray-700 rounded-lg p-4">
                      <h4 className="text-white font-medium text-sm mb-1">{trend.name}</h4>
                      <p className="text-gray-400 text-xs">{trend.description}</p>
                    </div>
                  ))}
                </div>
              </div>

              {/* M&A Activity */}
              <div className="mb-6">
                <h3 className="text-sm font-semibold text-gray-300 mb-3">M&A Consolidation</h3>
                <div className="overflow-x-auto">
                  <table className="w-full text-sm">
                    <thead>
                      <tr className="text-left text-gray-400 border-b border-gray-700">
                        <th className="pb-2">Date</th>
                        <th className="pb-2">Acquirer</th>
                        <th className="pb-2">Target</th>
                        <th className="pb-2">Value</th>
                        <th className="pb-2">Strategic Signal</th>
                      </tr>
                    </thead>
                    <tbody className="text-gray-300">
                      {maActivity.map((row, idx) => (
                        <tr key={idx} className="border-b border-gray-800">
                          <td className="py-2 text-gray-500">{row.date}</td>
                          <td className="py-2 text-white">{row.acquirer}</td>
                          <td className="py-2">{row.target}</td>
                          <td className="py-2 text-green-400">{row.value}</td>
                          <td className="py-2 text-xs text-gray-400">{row.signal}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>

              {/* Acquisition Risk */}
              <div className="mb-4">
                <h3 className="text-sm font-semibold text-gray-300 mb-3">Acquisition Risk Assessment</h3>
                <div className="overflow-x-auto">
                  <table className="w-full text-sm">
                    <thead>
                      <tr className="text-left text-gray-400 border-b border-gray-700">
                        <th className="pb-2">Vendor</th>
                        <th className="pb-2">Probability</th>
                        <th className="pb-2">Likely Acquirers</th>
                        <th className="pb-2">Timeline</th>
                      </tr>
                    </thead>
                    <tbody className="text-gray-300">
                      {acquisitionRisk.map((row, idx) => (
                        <tr key={idx} className="border-b border-gray-800">
                          <td className="py-2 text-white">{row.vendor}</td>
                          <td className="py-2">
                            <span className={`px-2 py-0.5 rounded text-xs ${
                              parseInt(row.probability) >= 45 ? 'bg-yellow-900/50 text-yellow-400' :
                              'bg-gray-700 text-gray-400'
                            }`}>{row.probability}</span>
                          </td>
                          <td className="py-2 text-xs">{row.acquirers}</td>
                          <td className="py-2 text-gray-400">{row.timeline}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
                <p className="text-xs text-gray-500 mt-2">Strategic implication: Second-tier vendors are acquisition targets or face marginalization.</p>
              </div>
            </section>

            {/* Stakeholders Section */}
            <section id="stakeholders" className="bg-gray-900/30 border border-gray-800 rounded-lg p-6">
              <h2 className="text-xl font-semibold mb-4 flex items-center gap-2">
                <span>👥</span> Stakeholders
              </h2>

              {/* Analyst Consensus */}
              <div className="bg-gray-800/30 rounded-lg p-4 mb-6 border border-gray-700">
                <h3 className="text-sm font-semibold text-white mb-3">Analyst Consensus (2025)</h3>
                <div className="space-y-2 text-sm">
                  <p className="text-gray-300">
                    <strong className="text-white">Gartner MQ (EPP):</strong> Leaders: Microsoft, Palo Alto, CrowdStrike, SentinelOne, Trend Micro, Sophos
                  </p>
                  <p className="text-gray-300">
                    <strong className="text-white">Forrester Wave (XDR):</strong> Leaders: Microsoft, Palo Alto, CrowdStrike. EDR Wave officially retired.
                  </p>
                  <p className="text-gray-300">
                    <strong className="text-white">IDC MarketScape:</strong> Leaders: Microsoft, Elastic, Trend Micro
                  </p>
                  <p className="text-gray-400 text-xs mt-2">
                    Key insight: "XDR is the first market that shows true promise to significantly augment, if not outright replace, the SIEM market." — Forrester
                  </p>
                </div>
              </div>

              {/* Enterprise CISO JTBD */}
              <div className="mb-6">
                <h3 className="text-sm font-semibold text-gray-300 mb-2">Enterprise CISO Jobs To Be Done</h3>
                <div className="overflow-x-auto">
                  <table className="w-full text-sm">
                    <thead>
                      <tr className="text-left text-gray-400 border-b border-gray-700">
                        <th className="pb-2">Job Statement</th>
                        <th className="pb-2">Success Metric / XDR Feature</th>
                      </tr>
                    </thead>
                    <tbody className="text-gray-300">
                      {cisoJobs.map((row, idx) => (
                        <tr key={idx} className="border-b border-gray-800">
                          <td className="py-2 text-white">{row.job}</td>
                          <td className="py-2 text-xs">{row.metric}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>

              {/* SOC Analyst JTBD */}
              <div className="mb-6">
                <h3 className="text-sm font-semibold text-gray-300 mb-2">SOC Analyst Jobs To Be Done</h3>
                <div className="overflow-x-auto">
                  <table className="w-full text-sm">
                    <thead>
                      <tr className="text-left text-gray-400 border-b border-gray-700">
                        <th className="pb-2">Job Statement</th>
                        <th className="pb-2">Success Metric</th>
                      </tr>
                    </thead>
                    <tbody className="text-gray-300">
                      {socAnalystJobs.map((row, idx) => (
                        <tr key={idx} className="border-b border-gray-800">
                          <td className="py-2 text-white">{row.job}</td>
                          <td className="py-2 text-xs">{row.metric}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>

              {/* Mid-Market JTBD */}
              <div className="mb-6">
                <h3 className="text-sm font-semibold text-gray-300 mb-2">Mid-Market (250-5,000 employees)</h3>
                <div className="bg-gray-800/30 rounded p-3 mb-3 border border-gray-700">
                  <p className="text-gray-400 text-xs italic">
                    "Get enterprise-grade security without enterprise budget; offload 24/7 monitoring."
                  </p>
                </div>
                <div className="overflow-x-auto">
                  <table className="w-full text-sm">
                    <thead>
                      <tr className="text-left text-gray-400 border-b border-gray-700">
                        <th className="pb-2">Job Statement</th>
                        <th className="pb-2">Success Metric</th>
                      </tr>
                    </thead>
                    <tbody className="text-gray-300">
                      {midMarketJobs.map((row, idx) => (
                        <tr key={idx} className="border-b border-gray-800">
                          <td className="py-2 text-white">{row.job}</td>
                          <td className="py-2 text-xs">{row.metric}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>

              {/* SMB JTBD */}
              <div className="mb-6">
                <h3 className="text-sm font-semibold text-gray-300 mb-2">SMB (&lt;250 employees)</h3>
                <div className="bg-gray-800/30 rounded p-3 mb-3 border border-gray-700">
                  <p className="text-gray-400 text-xs italic">
                    "Just protect me—I don't want to become a security expert."
                  </p>
                </div>
                <div className="overflow-x-auto">
                  <table className="w-full text-sm">
                    <thead>
                      <tr className="text-left text-gray-400 border-b border-gray-700">
                        <th className="pb-2">Job Statement</th>
                        <th className="pb-2">Success Metric</th>
                      </tr>
                    </thead>
                    <tbody className="text-gray-300">
                      {smbJobs.map((row, idx) => (
                        <tr key={idx} className="border-b border-gray-800">
                          <td className="py-2 text-white">{row.job}</td>
                          <td className="py-2 text-xs">{row.metric}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>

              {/* Key Pain Points */}
              <div className="bg-red-900/20 border border-red-800/50 rounded-lg p-4">
                <h3 className="text-sm font-semibold text-red-400 mb-2">Top Pain Points Driving XDR Investment</h3>
                <div className="grid grid-cols-2 gap-3 text-xs">
                  <div className="text-gray-300">
                    <span className="text-red-400 font-bold">10,000</span> alerts/day received by SOCs
                  </div>
                  <div className="text-gray-300">
                    <span className="text-red-400 font-bold">100</span> alerts/day analysts can validate
                  </div>
                  <div className="text-gray-300">
                    <span className="text-red-400 font-bold">70%</span> SOC analyst burnout rate
                  </div>
                  <div className="text-gray-300">
                    <span className="text-red-400 font-bold">26 months</span> average analyst tenure
                  </div>
                  <div className="text-gray-300">
                    <span className="text-red-400 font-bold">45-130</span> security tools per organization
                  </div>
                  <div className="text-gray-300">
                    <span className="text-red-400 font-bold">47%</span> lack adequate SecOps skills
                  </div>
                </div>
              </div>
            </section>

            {/* Economics Section */}
            <section id="economics" className="bg-gray-900/30 border border-gray-800 rounded-lg p-6">
              <h2 className="text-xl font-semibold mb-4 flex items-center gap-2">
                <span>💰</span> Economics & ROI
              </h2>

              {/* ROI Metrics */}
              <div className="mb-6">
                <h3 className="text-sm font-semibold text-gray-300 mb-3">The Business Case</h3>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
                  {roiMetrics.map((item, idx) => (
                    <div key={idx} className="bg-gray-800/50 rounded-lg p-4 text-center border border-gray-700">
                      <div className="text-xl font-bold text-green-400 mb-1">{item.value}</div>
                      <div className="text-xs text-gray-400">{item.metric}</div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Pricing Tiers */}
              <div className="mb-6">
                <h3 className="text-sm font-semibold text-gray-300 mb-3">Pricing Benchmarks (2024-2025)</h3>
                <div className="overflow-x-auto">
                  <table className="w-full text-sm">
                    <thead>
                      <tr className="text-left text-gray-400 border-b border-gray-700">
                        <th className="pb-2">Tier</th>
                        <th className="pb-2">Annual Range</th>
                        <th className="pb-2">Representative Vendors</th>
                        <th className="pb-2">Typical Buyer</th>
                      </tr>
                    </thead>
                    <tbody className="text-gray-300">
                      {pricingTiers.map((row, idx) => (
                        <tr key={idx} className="border-b border-gray-800">
                          <td className="py-2 text-white">{row.tier}</td>
                          <td className="py-2 text-green-400">{row.range}</td>
                          <td className="py-2 text-xs">{row.vendors}</td>
                          <td className="py-2 text-gray-400">{row.buyer}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
                <p className="text-xs text-gray-500 mt-2">⚠️ Watch for: Data ingestion pricing can create "runaway costs" during incidents.</p>
              </div>

              {/* TCO Components */}
              <div className="mb-6">
                <h3 className="text-sm font-semibold text-gray-300 mb-3">TCO Framework (Hidden Costs)</h3>
                <div className="overflow-x-auto">
                  <table className="w-full text-sm">
                    <thead>
                      <tr className="text-left text-gray-400 border-b border-gray-700">
                        <th className="pb-2">Category</th>
                        <th className="pb-2">Components</th>
                        <th className="pb-2">% of TCO</th>
                      </tr>
                    </thead>
                    <tbody className="text-gray-300">
                      {tcoComponents.map((row, idx) => (
                        <tr key={idx} className="border-b border-gray-800">
                          <td className="py-2 text-white">{row.category}</td>
                          <td className="py-2 text-xs">{row.components}</td>
                          <td className="py-2 text-yellow-400">{row.pctTco}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
                <p className="text-xs text-gray-500 mt-2">Gartner benchmark: Average TCO is 3-5x initial purchase price over system lifetime.</p>
              </div>

              {/* ROI Calculation */}
              <div className="mb-6">
                <h3 className="text-sm font-semibold text-gray-300 mb-3">Sample ROI Calculation (Mid-Market: 750 Endpoints)</h3>
                <div className="bg-gray-800/50 rounded-lg p-4 border border-gray-700">
                  <div className="space-y-3">
                    <div className="flex justify-between items-center border-b border-gray-700 pb-2">
                      <span className="text-gray-400">XDR License (750 × $75)</span>
                      <span className="text-white">$56,250/year</span>
                    </div>
                    <div className="flex justify-between items-center border-b border-gray-700 pb-2">
                      <span className="text-gray-400">Implementation + Training</span>
                      <span className="text-white">$55,000 (Year 1)</span>
                    </div>
                    <div className="flex justify-between items-center border-b border-gray-700 pb-2">
                      <span className="text-gray-400">Tool Consolidation Savings</span>
                      <span className="text-green-400">$100K-120K/year</span>
                    </div>
                    <div className="flex justify-between items-center border-b border-gray-700 pb-2">
                      <span className="text-gray-400">SOC Efficiency (1 FTE equivalent)</span>
                      <span className="text-green-400">$75K-100K/year</span>
                    </div>
                    <div className="flex justify-between items-center border-b border-gray-700 pb-2">
                      <span className="text-gray-400">Breach Cost Avoidance (10% reduction × $2M)</span>
                      <span className="text-green-400">$200K/year</span>
                    </div>
                  </div>
                  <div className="mt-4 pt-4 border-t border-gray-600">
                    <div className="flex justify-between items-center">
                      <span className="text-white font-medium">3-Year ROI</span>
                      <span className="text-green-400 font-bold text-lg">~300%</span>
                    </div>
                  </div>
                </div>
                <p className="text-xs text-gray-500 mt-2">Based on Forrester TEI studies showing 200-250% ROI for XDR investments.</p>
              </div>

              {/* Budget Reality */}
              <div className="bg-yellow-900/20 border border-yellow-800/50 rounded-lg p-4">
                <h3 className="text-sm font-semibold text-yellow-400 mb-2">Budget Reality Check</h3>
                <div className="grid grid-cols-2 gap-4 text-xs">
                  <div>
                    <p className="text-gray-300"><span className="text-yellow-400 font-bold">46%</span> of CISOs: budget same as last year</p>
                    <p className="text-gray-300"><span className="text-yellow-400 font-bold">39%</span> have increased budget</p>
                  </div>
                  <div>
                    <p className="text-gray-300"><span className="text-yellow-400 font-bold">51%</span> of CISOs feel underfunded</p>
                    <p className="text-gray-300"><span className="text-yellow-400 font-bold">~8%</span> nominal budget growth (5% real)</p>
                  </div>
                </div>
                <p className="text-gray-400 text-xs mt-3">Implication: XDR wins by replacing multiple tools, not adding to them. Consolidation is the dominant strategy.</p>
              </div>
            </section>

            {/* PM Strategy Section */}
            <section id="product" className="bg-gray-900/30 border border-gray-800 rounded-lg p-6">
              <h2 className="text-xl font-semibold mb-4 flex items-center gap-2">
                <span>🎯</span> PM Strategic Elements
              </h2>
              
              {/* Table Stakes */}
              <div className="mb-6">
                <h3 className="text-sm font-semibold text-gray-300 mb-3">Table Stakes (2025 MVP—Required for RFP)</h3>
                <div className="grid grid-cols-2 gap-2">
                  {tableStakes.map((feature, idx) => (
                    <div key={idx} className="flex items-center gap-2 text-xs text-gray-300">
                      <span className="text-green-400">✓</span>
                      {feature}
                    </div>
                  ))}
                </div>
                <div className="mt-3 p-3 bg-gray-800/50 rounded border border-gray-700">
                  <p className="text-xs text-gray-400">
                    Missing any of these = immediate RFP disqualification. These are no longer differentiators.
                  </p>
                </div>
              </div>

              {/* Differentiators */}
              <div className="mb-6">
                <h3 className="text-sm font-semibold text-gray-300 mb-3">Key Differentiators (What Wins Deals)</h3>
                <div className="space-y-3">
                  {differentiators.map((diff, idx) => (
                    <div key={idx} className="bg-gray-800/30 border border-gray-700 rounded-lg p-4">
                      <h4 className="text-white font-medium text-sm mb-1">{idx + 1}. {diff.name}</h4>
                      <p className="text-gray-400 text-xs">{diff.description}</p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Segment-Specific Guidance */}
              <div className="mb-6">
                <h3 className="text-sm font-semibold text-gray-300 mb-3">Segment-Specific PM Guidance</h3>
                <div className="space-y-4">
                  {segmentGuidance.map((seg, idx) => (
                    <div key={idx} className="bg-gray-800/30 border border-gray-700 rounded-lg p-4">
                      <h4 className="text-white font-medium text-sm mb-2">If building for {seg.segment}:</h4>
                      <ul className="space-y-1">
                        {seg.keyPoints.map((point, pidx) => (
                          <li key={pidx} className="text-gray-400 text-xs flex items-start gap-2">
                            <span className="text-blue-400">○</span>
                            {point}
                          </li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>
              </div>

              {/* If I'm a PM Here Box */}
              <div className="bg-gradient-to-r from-blue-900/30 to-purple-900/30 border border-blue-800/50 rounded-lg p-5">
                <h3 className="text-white font-semibold mb-4 flex items-center gap-2">
                  💡 If I am a PM Here, I Need to Know...
                </h3>
                <div className="space-y-3">
                  <div className="flex gap-3 text-sm">
                    <span className="text-blue-400 font-bold">1.</span>
                    <span className="text-gray-300"><strong className="text-white">XDR is a unification play, not a feature set.</strong> If you can't tell a story across endpoint → identity → network → cloud, you're selling EDR with a new label.</span>
                  </div>
                  <div className="flex gap-3 text-sm">
                    <span className="text-blue-400 font-bold">2.</span>
                    <span className="text-gray-300"><strong className="text-white">Detection quality is the moat.</strong> MITRE ATT&CK scores, false positive rates, and real-world breach coverage. Invest in detection engineering like your life depends on it.</span>
                  </div>
                  <div className="flex gap-3 text-sm">
                    <span className="text-blue-400 font-bold">3.</span>
                    <span className="text-gray-300"><strong className="text-white">Agentic AI is the 2025-2026 battleground.</strong> CrowdStrike and Palo Alto are defining "autonomous SOC." If you're not shipping agentic capabilities, you're already behind.</span>
                  </div>
                  <div className="flex gap-3 text-sm">
                    <span className="text-blue-400 font-bold">4.</span>
                    <span className="text-gray-300"><strong className="text-white">The segment cascade is real.</strong> Enterprise sets the standard → Mid-Market adapts with managed services → SMB simplifies to "just protect me."</span>
                  </div>
                  <div className="flex gap-3 text-sm">
                    <span className="text-blue-400 font-bold">5.</span>
                    <span className="text-gray-300"><strong className="text-white">Identity is no longer optional.</strong> ITDR is being absorbed into XDR. If you don't have native identity detection, you're missing 80% of modern attack chains.</span>
                  </div>
                  <div className="flex gap-3 text-sm">
                    <span className="text-blue-400 font-bold">6.</span>
                    <span className="text-gray-300"><strong className="text-white">The SIEM relationship is complex.</strong> XDR isn't replacing SIEM for everyone—compliance and long retention remain SIEM strengths. Position clearly: complement, converge, or compete.</span>
                  </div>
                  <div className="flex gap-3 text-sm">
                    <span className="text-blue-400 font-bold">7.</span>
                    <span className="text-gray-300"><strong className="text-white">Managed services are table stakes for mid-market.</strong> MXDR growing 32.5% CAGR. If you don't have a managed offering, you're invisible to mid-market buyers.</span>
                  </div>
                  <div className="flex gap-3 text-sm">
                    <span className="text-blue-400 font-bold">8.</span>
                    <span className="text-gray-300"><strong className="text-white">Pricing model can make or break adoption.</strong> Data ingestion pricing creates "runaway cost" fears. Predictable per-endpoint/per-user models win.</span>
                  </div>
                  <div className="flex gap-3 text-sm">
                    <span className="text-blue-400 font-bold">9.</span>
                    <span className="text-gray-300"><strong className="text-white">POC experience is where deals are won or lost.</strong> A confusing first experience = lost deal. Invest in guided onboarding and fast time-to-first-detection.</span>
                  </div>
                  <div className="flex gap-3 text-sm">
                    <span className="text-blue-400 font-bold">10.</span>
                    <span className="text-gray-300"><strong className="text-white">Platform consolidation is the endgame.</strong> Microsoft, Palo Alto, and CrowdStrike are building security superstores. If you're not a platform, know if you're a feature (acquisition target) or a niche player.</span>
                  </div>
                </div>
              </div>
            </section>

            {/* Strategic Theses Section */}
            <section id="theses" className="bg-gray-900/30 border border-gray-800 rounded-lg p-6">
              <h2 className="text-xl font-semibold mb-4 flex items-center gap-2">
                <span>🔮</span> Strategic Theses
              </h2>
              <p className="text-gray-400 text-sm mb-6">
                Three structural shifts reshaping this market. Not incremental changes—fundamental rewirings of where value is created and captured.
              </p>
              <div className="space-y-6">
                {theses.map((thesis) => (
                  <div
                    key={thesis.id}
                    className={`bg-gray-800/30 border border-gray-700 rounded-lg p-5 border-l-4 ${getThesisAccent(thesis.color)}`}
                  >
                    <div className="flex items-start justify-between mb-3">
                      <h3 className="text-white font-semibold">{thesis.title}</h3>
                      <div className="flex items-center gap-2 text-xs">
                        <span className={`px-2 py-1 rounded border ${getConfidenceColor(thesis.confidence)}`}>
                          {thesis.confidence}
                        </span>
                        <span className="text-gray-500">{thesis.timeframe}</span>
                      </div>
                    </div>
                    
                    <p className="text-gray-300 text-sm mb-4">{thesis.claim}</p>
                    
                    <div className="mb-4">
                      <h4 className="text-xs text-gray-500 uppercase tracking-wide mb-2">EVIDENCE</h4>
                      <ul className="space-y-1">
                        {thesis.evidence.map((item, idx) => (
                          <li key={idx} className="text-gray-400 text-xs flex items-start gap-2">
                            <span className="text-gray-600">•</span>
                            {item}
                          </li>
                        ))}
                      </ul>
                    </div>
                    <div className="bg-gray-900/50 rounded p-3">
                      <span className="text-xs text-gray-500">Implication: </span>
                      <span className="text-xs text-gray-300">{thesis.implication}</span>
                    </div>
                  </div>
                ))}
              </div>

              {/* Synthesis */}
              <div className="mt-6 bg-gray-800/30 border border-gray-700 rounded-lg p-4">
                <h4 className="text-white font-medium text-sm mb-3">How These Connect</h4>
                <div className="space-y-2 text-xs text-gray-400">
                  <p className="flex items-center gap-2">
                    <span className="text-green-400">→</span>
                    Unification play creates demand for cross-domain correlation
                  </p>
                  <p className="flex items-center gap-2">
                    <span className="text-purple-400">→</span>
                    Correlation at scale requires agentic AI automation
                  </p>
                  <p className="flex items-center gap-2">
                    <span className="text-orange-400">→</span>
                    AI investment requirements favor well-capitalized platforms
                  </p>
                  <p className="flex items-center gap-2">
                    <span className="text-blue-400">→</span>
                    Platform economics create "get big or get acquired" dynamics
                  </p>
                </div>
              </div>
            </section>

            {/* Recommendations */}
            <section className="bg-gray-900/30 border border-gray-800 rounded-lg p-6">
              <h2 className="text-xl font-semibold mb-4 flex items-center gap-2">
                <span>🎯</span> Recommendations
              </h2>
              
              <div className="grid md:grid-cols-2 gap-6">
                {/* For Buyers */}
                <div className="bg-gray-800/30 border border-gray-700 rounded-lg p-5">
                  <div className="flex items-center gap-2 mb-4">
                    <span className="w-8 h-8 rounded-full bg-green-900/50 border border-green-700 flex items-center justify-center text-sm text-green-400">B</span>
                    <span className="text-white font-medium">For Enterprise Buyers</span>
                  </div>
                  <ul className="space-y-2 text-sm text-gray-300">
                    <li className="flex items-start gap-2">
                      <span className="text-green-400">•</span>
                      Evaluate XDR on cross-domain correlation depth, not feature count
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-green-400">•</span>
                      Prioritize platform consolidation—200-250% ROI documented
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-green-400">•</span>
                      Require identity telemetry integration (80%+ of breaches)
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-green-400">•</span>
                      Avoid data ingestion pricing traps—demand predictable costs
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-green-400">•</span>
                      Test POC experience—confusing first run = poor long-term adoption
                    </li>
                  </ul>
                </div>

                {/* For Vendors */}
                <div className="bg-gray-800/30 border border-gray-700 rounded-lg p-5">
                  <div className="flex items-center gap-2 mb-4">
                    <span className="w-8 h-8 rounded-full bg-purple-900/50 border border-purple-700 flex items-center justify-center text-sm text-purple-400">V</span>
                    <span className="text-white font-medium">For Vendors / Product Leaders</span>
                  </div>
                  <ul className="space-y-2 text-sm text-gray-300">
                    <li className="flex items-start gap-2">
                      <span className="text-purple-400">•</span>
                      Agentic AI is the 2025-2026 battleground—ship or fall behind
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-purple-400">•</span>
                      Build or acquire identity detection capabilities
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-purple-400">•</span>
                      Segment cascade: Enterprise → Mid-Market → SMB (different products)
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-purple-400">•</span>
                      MXDR is table stakes for mid-market reach
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-purple-400">•</span>
                      Know your position: platform, feature (acquisition), or niche
                    </li>
                  </ul>
                </div>
              </div>
            </section>

            {/* Resources */}
            <section className="bg-gray-900/30 border border-gray-800 rounded-lg p-6">
              <h2 className="text-xl font-semibold mb-4 flex items-center gap-2">
                <span>📎</span> Resources
              </h2>
              <div className="grid md:grid-cols-2 gap-4">
                <a href="#" className="flex items-center gap-3 bg-gray-800/50 hover:bg-gray-800 rounded-lg p-4 transition-colors border border-gray-700">
                  <span className="text-2xl">📄</span>
                  <div>
                    <div className="text-white font-medium text-sm">Full XDR Strategic Brief</div>
                    <div className="text-gray-400 text-xs">Complete SRP analysis (PDF)</div>
                  </div>
                </a>
                <a href="#" className="flex items-center gap-3 bg-gray-800/50 hover:bg-gray-800 rounded-lg p-4 transition-colors border border-gray-700">
                  <span className="text-2xl">📊</span>
                  <div>
                    <div className="text-white font-medium text-sm">Vendor Comparison Matrix</div>
                    <div className="text-gray-400 text-xs">Side-by-side feature analysis</div>
                  </div>
                </a>
              </div>
            </section>

          </div>
        </div>

        {/* Footer */}
        <div className="mt-12 pt-6 border-t border-gray-800 text-center text-sm text-gray-500">
          <p>Analysis by Andy Simko • CISSP • GPEN • CISA • GSNA • HCSFP • PMC-Level III</p>
          <p className="mt-1">15+ years in cybersecurity • Methodology: Systematic Research Process (SRP)</p>
        </div>
      </div>
    </div>
  );
};

export default XDRPage;
