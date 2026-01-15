"use client";

import React, { useState } from 'react';
import { Logo } from '@/components/Logo';

const ITDRPage = () => {
  const [activeSection, setActiveSection] = useState('overview');

  // Identity pillar sub-segments
  const subSegments = [
    { id: 'itdr', name: 'ITDR', active: true, href: '/pillars/identity/itdr' },
    { id: 'iam', name: 'IAM / IGA', active: false, href: '#' },
    { id: 'pam', name: 'PAM', active: false, href: '#' },
    { id: 'ciam', name: 'CIAM', active: false, href: '#' },
    { id: 'mfa', name: 'Passwordless / MFA', active: false, href: '#' },
    { id: 'governance', name: 'Identity Governance', active: false, href: '#' },
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

  // Related pillars (for cross-reference)
  const relatedPillars = [
    { name: 'SecOps & Analytics', primary: false },
    { name: 'Endpoint & Workload', primary: false },
  ];

  const keyInsights = [
    { stat: '$4.8M', label: 'Average credential breach cost' },
    { stat: '292 days', label: 'Avg dwell time for credential attacks' },
    { stat: '80%+', label: 'Breaches involving compromised identities' },
    { stat: '22%', label: 'CAGR growth rate through 2029' },
  ];

  const marketSizing = [
    { source: 'MarketsandMarkets', val2024: '$12.8B', projection: '$35.6B (2029)', cagr: '22.6%' },
    { source: 'Polaris Market Research', val2024: '$13.1B', projection: '$68.9B (2032)', cagr: '23.0%' },
    { source: '360iResearch', val2024: '$13.0B', projection: '$47.7B (2030)', cagr: '24.05%' },
  ];

  const marketSubSegments = [
    'Active Directory Protection',
    'Cloud Identity Protection',
    'SaaS Identity Monitoring',
    'Privileged Identity Threat Detection',
    'Non-Human Identity (NHI) Security',
    'Managed ITDR Services',
  ];

  // Top vendors by consensus
  const competitors = [
    { 
      name: 'CrowdStrike', 
      product: 'Falcon Identity Protection',
      position: 'Platform Leader', 
      focus: 'Perfect GigaOm scores, KuppingerCole Overall Leader. Unified human + NHI + AI agent protection.',
      status: 'in-progress',
      href: '/pillars/identity/itdr/companies/crowdstrike'
    },
    { 
      name: 'Microsoft', 
      product: 'Defender for Identity + Entra ID Protection',
      position: 'Platform Incumbent', 
      focus: 'KuppingerCole Overall Leader. Native M365 integration. Bundled with E5.',
      status: 'in-progress',
      href: '/pillars/identity/itdr/companies/microsoft'
    },
    { 
      name: 'BeyondTrust', 
      product: 'Identity Security Insights',
      position: 'PAM Leader', 
      focus: 'KuppingerCole Leader (all 4 categories). PAM-centric ITDR approach.',
      status: 'in-progress',
      href: '/pillars/identity/itdr/companies/beyondtrust'
    },
    { 
      name: 'CyberArk', 
      product: 'Identity Security Platform',
      position: 'Enterprise Leader', 
      focus: 'IDC MarketScape Leader. PAM heritage. Venafi acquisition for machine identity.',
      status: 'in-progress',
      href: '/pillars/identity/itdr/companies/cyberark'
    },
    { 
      name: 'Okta', 
      product: 'Identity Threat Protection with Okta AI',
      position: 'IdP Native', 
      focus: 'KuppingerCole 2025 Overall Leader. Spera Security acquisition for ISPM.',
      status: 'in-progress',
      href: '/pillars/identity/itdr/companies/okta'
    },
    { 
      name: 'SentinelOne', 
      product: 'Singularity Identity',
      position: 'Unified Platform', 
      focus: 'Highest PeerSpot rating (9.1). Unified EDR+ITDR approach.',
      status: 'in-progress',
      href: '/pillars/identity/itdr/companies/sentinelone'
    },
    { 
      name: 'Varonis', 
      product: 'Data Security Platform (ITDR)',
      position: 'Data-Centric', 
      focus: 'GigaOm Leader. Unique data+identity correlation approach.',
      status: 'in-progress',
      href: '/pillars/identity/itdr/companies/varonis'
    },
    { 
      name: 'Vectra AI', 
      product: 'Vectra AI Platform',
      position: 'AI Leader', 
      focus: 'GigaOm Leader & Outperformer. Behavioral AI focus.',
      status: 'in-progress',
      href: '/pillars/identity/itdr/companies/vectra'
    },
    { 
      name: 'Silverfort', 
      product: 'Identity Security Platform',
      position: 'Agentless', 
      focus: 'Agentless deployment. Hybrid AD+cloud coverage.',
      status: 'in-progress',
      href: '/pillars/identity/itdr/companies/silverfort'
    },
    { 
      name: 'Semperis', 
      product: 'Directory Services Protector',
      position: 'AD Specialist', 
      focus: 'AD-focused. Lightning Identity Runtime Protection.',
      status: 'in-progress',
      href: '/pillars/identity/itdr/companies/semperis'
    },
    { 
      name: 'Huntress', 
      product: 'Managed ITDR',
      position: 'Managed Service', 
      focus: 'SMB/mid-market managed service. 4.9/5 G2 rating.',
      status: 'in-progress',
      href: '/pillars/identity/itdr/companies/huntress'
    },
    { 
      name: 'Zscaler', 
      product: 'Zscaler ITDR',
      position: 'Zero Trust', 
      focus: 'Zero trust architecture integration. AD visibility.',
      status: 'in-progress',
      href: '/pillars/identity/itdr/companies/zscaler'
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
    { name: 'Non-Human Identity (NHI) Explosion', description: 'Machine identities now outnumber humans. Service accounts, API keys, AI agents are majority attack surface.' },
    { name: 'Agentic AI Identity Risk', description: 'AI agents = "superhuman identities with persistent access." 2026 breach predictions from AI agent compromise.' },
    { name: 'Platform Consolidation', description: 'CISOs mandate vendor reduction. CrowdStrike unifies PAM + ITDR + SaaS security.' },
    { name: 'IAM-SOC Convergence', description: 'KuppingerCole: "IAM Meets the SOC." ITDR bridges identity admins and security operations.' },
    { name: 'Zero Standing Privileges (ZSP)', description: 'JIT access becoming table stakes. Eliminates lateral movement via persistent privileged access.' },
  ];

  const hypePositions = [
    { tech: 'AD Protection', position: 'Plateau of Productivity', status: 'declining' },
    { tech: 'Cloud Identity Protection', position: 'Slope of Enlightenment', status: 'rising' },
    { tech: 'NHI Security', position: 'Peak of Inflated Expectations', status: 'hot' },
    { tech: 'AI Agent Identity', position: 'Innovation Trigger', status: 'emerging' },
    { tech: 'Identity Posture Management (ISPM)', position: 'Climbing toward Peak', status: 'rising' },
  ];

  const cisoJobs = [
    { job: 'Demonstrate identity is defended, not just managed', metric: 'Zero identity-based breaches; detection capability proof' },
    { job: 'Quantify identity risk for the board', metric: 'Risk reduction metrics; dwell time reduction' },
    { job: 'Consolidate vendors without losing coverage', metric: 'Fewer tools; hybrid AD+cloud+SaaS coverage' },
    { job: 'Get ahead of NHI/AI agent risks', metric: 'NHI coverage; AI agent monitoring' },
  ];

  const socJobs = [
    { job: 'Quickly determine if identity alert is real', metric: 'Triage time per alert; FP rate <1%' },
    { job: 'See full blast radius of credential compromise', metric: 'User timeline visibility; related entity mapping' },
    { job: 'Contain identity threats in seconds, not hours', metric: 'MTTR; one-click response actions' },
  ];

  const identityAdminJobs = [
    { job: 'See identity threats before SOC calls me', metric: 'Proactive posture alerts; <24hr response' },
    { job: 'Track NHI sprawl (service accounts, API keys)', metric: 'NHI inventory; dormant account detection' },
    { job: 'Prove identity hygiene to auditors', metric: 'Audit-ready reports; compliance dashboards' },
  ];

  const tableStakes = [
    'AD + Entra ID integration',
    'Cloud IdP support (Okta, Ping)',
    'Impossible travel detection',
    'Credential stuffing detection',
    'MFA bypass/fatigue detection',
    'Privilege escalation detection',
    'Real-time alerting (<60 sec)',
    'SIEM integration (Splunk, Sentinel)',
    'Basic response actions',
    'Audit trail for compliance',
    'REST API access',
    'Dashboard & reporting',
  ];

  const differentiators = [
    { name: 'Non-Human Identity (NHI) Coverage', description: 'Service accounts, API keys, machine identities, AI agents—most ITDR is still human-focused' },
    { name: 'Cross-Environment Correlation', description: 'Unified detection across IdP → IaaS → SaaS → on-prem eliminates swivel-chair investigations' },
    { name: 'Behavioral AI / Low False Positives', description: 'ML-driven baselines reducing alert noise while maintaining detection fidelity' },
    { name: 'Automated Response', description: 'One-click or zero-touch response with SOAR integration—MTTR from hours to minutes' },
    { name: 'SOC-Ready Investigation Context', description: 'User timeline, access history, blast radius visualization—bridges IAM-SOC gap' },
    { name: 'Identity Posture Management (ISPM)', description: 'Continuous misconfiguration detection—prevention + detection in one solution' },
    { name: 'Platform Integration', description: 'Part of broader XDR/unified platform vs. point solution—bundled economics' },
  ];

  const roiMetrics = [
    { metric: 'Credential breach cost', value: '$4.8M average' },
    { metric: 'AI/automation savings', value: '$1.9M per breach' },
    { metric: 'Detection speed with AI', value: '80 days faster' },
    { metric: 'Cost per day of dwell', value: '~$1M (prorated)' },
  ];

  const theses = [
    {
      id: 1,
      title: 'IAM Meets the SOC—ITDR is the Bridge',
      timeframe: '2025-2027',
      confidence: 'High',
      color: 'green',
      claim: 'By 2027, ITDR will be the default integration point between identity administration and security operations. Organizations without ITDR face detection gaps.',
      evidence: ['80%+ of breaches involve compromised identities', 'KuppingerCole 2025: "IAM Meets the SOC"', 'Gartner predicts 90% embedded ITDR adoption by 2026'],
      implication: 'Evaluate ITDR on IAM-SOC workflow integration, not just detection efficacy.',
    },
    {
      id: 2,
      title: 'Non-Human Identities Become the Primary Attack Surface',
      timeframe: '2025-2027',
      confidence: 'High',
      color: 'purple',
      claim: 'By 2027, NHI-focused attacks will exceed human identity attacks. Service accounts, API keys, and AI agents represent the next frontier.',
      evidence: ['NHIs now outnumber human users in enterprises', 'OWASP Top 10 Non-Human Identity Risks released 2025', 'CrowdStrike launched unified human + NHI + AI agent protection'],
      implication: 'Prioritize ITDR solutions with explicit NHI coverage—human-only is obsolete.',
    },
    {
      id: 3,
      title: 'Platform Consolidation Absorbs Standalone ITDR',
      timeframe: '2025-2028',
      confidence: 'Medium-High',
      color: 'orange',
      claim: 'By 2028, 70%+ of ITDR deployments will be platform modules (CrowdStrike, Microsoft, Palo Alto) rather than standalone products.',
      evidence: ['75% of firms reducing security vendors', 'Palo Alto acquiring CyberArk (announced)', 'Thoma Bravo consolidating identity portfolio'],
      implication: 'Standalone ITDR faces acquisition or irrelevance. Evaluate as platform capability.',
    },
  ];

  const maActivity = [
    { date: 'Jul 2025', acquirer: 'Palo Alto Networks', target: 'CyberArk', value: 'Announced' },
    { date: 'Mar 2025', acquirer: 'Google', target: 'Wiz', value: '$32B' },
    { date: 'Feb 2025', acquirer: 'Sophos', target: 'Secureworks', value: '$859M' },
    { date: 'Oct 2024', acquirer: 'CyberArk', target: 'Venafi', value: '$1.54B' },
    { date: 'Q4 2024', acquirer: 'Thoma Bravo', target: 'Saviynt', value: '$1.3B' },
    { date: 'Feb 2024', acquirer: 'Okta', target: 'Spera Security', value: '~$100-130M' },
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
              <span className="text-gray-400 hidden sm:inline">Identity</span>
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
            <span className="text-xs text-gray-600">Also touches:</span>
            {relatedPillars.map((pillar, idx) => (
              <span 
                key={idx}
                className="text-xs px-2 py-0.5 rounded bg-gray-800/50 text-gray-500 border border-gray-800"
              >
                {pillar.name}
              </span>
            ))}
          </div>
        </div>
        
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-4xl font-bold mb-3">Identity Threat Detection & Response</h1>
          <p className="text-xl text-gray-400 mb-4">
            The $12B+ market bridging IAM and SOC as identity becomes the #1 attack vector
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

        {/* Main Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          
          {/* Left Sidebar - SRP Navigation */}
          <div className="lg:col-span-1">
            <div className="sticky top-24">
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
                      <span>{section.name}</span>
                    </button>
                  ))}
                </div>
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
                  Identity has become the #1 attack vector, responsible for over 80% of successful breaches. 
                  ITDR represents the "detection layer" that IAM has historically lacked—bridging the gap 
                  between identity administration and security operations.
                </p>
                <p className="text-gray-300 mb-4">
                  The market has evolved from AD-only protection to comprehensive coverage spanning 
                  on-prem directories, cloud IdPs, SaaS applications, and increasingly, non-human identities 
                  (NHIs) like service accounts, API keys, and AI agents.
                </p>
                <div className="bg-gray-800 rounded-lg p-4 border border-gray-700">
                  <h4 className="font-medium text-white mb-2">The IAM-SOC Bridge Thesis</h4>
                  <p className="text-sm text-gray-400">
                    ITDR is colliding with SecOps (XDR telemetry), PAM (privileged access), and IGA 
                    (identity governance). The winners will be platforms that unify identity signals 
                    with security operations—not point solutions defending a single identity store.
                  </p>
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
                <h3 className="text-sm font-semibold text-gray-400 mb-3">Market Size & Growth</h3>
                <div className="bg-gray-800 rounded-lg overflow-hidden">
                  <table className="w-full text-sm">
                    <thead>
                      <tr className="border-b border-gray-700">
                        <th className="text-left p-3 text-gray-400 font-medium">Source</th>
                        <th className="text-left p-3 text-gray-400 font-medium">2024</th>
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
              </div>

              {/* Sub-segments */}
              <div className="mb-6">
                <h3 className="text-sm font-semibold text-gray-400 mb-3">ITDR Sub-Segments</h3>
                <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
                  {marketSubSegments.map((seg, idx) => (
                    <div key={idx} className="px-3 py-2 bg-gray-800 rounded-lg text-sm text-gray-300">
                      {seg}
                    </div>
                  ))}
                </div>
              </div>

              {/* Competitive Landscape */}
              <div>
                <div className="flex items-center justify-between mb-3">
                  <h3 className="text-sm font-semibold text-gray-400">Top 12 Vendors by Consensus (2025)</h3>
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
              </div>
            </section>

            {/* Market Dynamics Section */}
            <section id="motion" className="bg-gray-900 rounded-xl border border-gray-800 p-6">
              <h2 className="text-xl font-semibold mb-4 flex items-center gap-2">
                <span>📈</span> Market Dynamics
              </h2>

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
                          item.status === 'declining' ? 'bg-yellow-500' :
                          'bg-blue-500'
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
              <div>
                <h3 className="text-sm font-semibold text-gray-400 mb-3">M&A Activity (Consolidation Signals)</h3>
                <div className="bg-gray-800 rounded-lg overflow-hidden">
                  <table className="w-full text-sm">
                    <thead>
                      <tr className="border-b border-gray-700">
                        <th className="text-left p-3 text-gray-400 font-medium">Date</th>
                        <th className="text-left p-3 text-gray-400 font-medium">Acquirer</th>
                        <th className="text-left p-3 text-gray-400 font-medium">Target</th>
                        <th className="text-left p-3 text-gray-400 font-medium">Value</th>
                      </tr>
                    </thead>
                    <tbody>
                      {maActivity.map((row, idx) => (
                        <tr key={idx} className="border-b border-gray-700/50 last:border-0">
                          <td className="p-3 text-gray-400">{row.date}</td>
                          <td className="p-3 text-gray-300">{row.acquirer}</td>
                          <td className="p-3 text-gray-300">{row.target}</td>
                          <td className="p-3 text-green-400">{row.value}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            </section>

            {/* Stakeholders Section */}
            <section id="stakeholders" className="bg-gray-900 rounded-xl border border-gray-800 p-6">
              <h2 className="text-xl font-semibold mb-4 flex items-center gap-2">
                <span>👥</span> Stakeholders
              </h2>

              {/* CISO JTBD */}
              <div className="mb-6">
                <h3 className="text-sm font-semibold text-gray-400 mb-3">CISO Jobs To Be Done</h3>
                <div className="bg-gray-800 rounded-lg overflow-hidden">
                  <table className="w-full text-sm">
                    <thead>
                      <tr className="border-b border-gray-700">
                        <th className="text-left p-3 text-gray-400 font-medium">Job Statement</th>
                        <th className="text-left p-3 text-gray-400 font-medium">Success Metric</th>
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
                      {socJobs.map((row, idx) => (
                        <tr key={idx} className="border-b border-gray-700/50 last:border-0">
                          <td className="p-3 text-gray-300">{row.job}</td>
                          <td className="p-3 text-gray-400 text-xs">{row.metric}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>

              {/* Identity Admin JTBD */}
              <div className="mb-6">
                <h3 className="text-sm font-semibold text-gray-400 mb-3">Identity Admin Jobs To Be Done</h3>
                <div className="bg-gray-800 rounded-lg overflow-hidden">
                  <table className="w-full text-sm">
                    <thead>
                      <tr className="border-b border-gray-700">
                        <th className="text-left p-3 text-gray-400 font-medium">Job Statement</th>
                        <th className="text-left p-3 text-gray-400 font-medium">Success Metric</th>
                      </tr>
                    </thead>
                    <tbody>
                      {identityAdminJobs.map((row, idx) => (
                        <tr key={idx} className="border-b border-gray-700/50 last:border-0">
                          <td className="p-3 text-gray-300">{row.job}</td>
                          <td className="p-3 text-gray-400 text-xs">{row.metric}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>

              {/* Key Pain Point */}
              <div className="bg-red-900/20 border border-red-800/50 rounded-lg p-4">
                <h4 className="text-sm font-semibold text-red-400 mb-2">The Core Pain: The IAM-SOC Gap</h4>
                <p className="text-sm text-gray-300">
                  "Identity-related threats span multiple domains, creating a problem that no longer fits 
                  neatly within the scope of a single team. IT administrators have visibility into identity 
                  systems but lack threat context. SOC analysts hunt threats but have limited familiarity 
                  with IAM systems." — KuppingerCole 2025
                </p>
              </div>
            </section>

            {/* Economics Section */}
            <section id="economics" className="bg-gray-900 rounded-xl border border-gray-800 p-6">
              <h2 className="text-xl font-semibold mb-4 flex items-center gap-2">
                <span>💰</span> Economics & ROI
              </h2>

              {/* ROI Metrics */}
              <div className="mb-6">
                <h3 className="text-sm font-semibold text-gray-400 mb-3">The Cost of Getting It Wrong</h3>
                <div className="grid grid-cols-2 gap-4">
                  {roiMetrics.map((item, idx) => (
                    <div key={idx} className="bg-gray-800 rounded-lg p-4">
                      <div className="text-lg font-bold text-white">{item.value}</div>
                      <div className="text-xs text-gray-400">{item.metric}</div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Pricing Model */}
              <div className="mb-6">
                <h3 className="text-sm font-semibold text-gray-400 mb-3">Dominant Pricing Model</h3>
                <div className="bg-gray-800 rounded-lg p-4">
                  <p className="text-sm text-gray-300 mb-3">
                    <strong className="text-white">Per-user/per-seat</strong> pricing dominates. Platform add-ons 
                    (CrowdStrike, Microsoft E5) offer bundled economics. Managed ITDR shifts CapEx to OpEx.
                  </p>
                  <div className="grid grid-cols-2 gap-4 text-sm mt-3">
                    <div>
                      <div className="text-gray-500">Microsoft Entra ID P2</div>
                      <div className="text-white">$9-12/user/month (E5 bundle)</div>
                    </div>
                    <div>
                      <div className="text-gray-500">Platform Add-On</div>
                      <div className="text-white">Incremental to base platform</div>
                    </div>
                  </div>
                </div>
              </div>

              {/* ROI Calculation */}
              <div className="bg-green-900/20 border border-green-800/50 rounded-lg p-4">
                <h4 className="text-sm font-semibold text-green-400 mb-2">Sample ROI (10,000 Users)</h4>
                <div className="grid grid-cols-2 gap-4 text-sm">
                  <div>
                    <div className="text-gray-400">Investment</div>
                    <div className="text-white font-medium">$960K/year</div>
                    <div className="text-xs text-gray-500">10K users × $8 × 12 months</div>
                  </div>
                  <div>
                    <div className="text-gray-400">Value Protected</div>
                    <div className="text-green-400 font-medium">$4.8M+</div>
                    <div className="text-xs text-gray-500">Breach avoided + dwell time reduction</div>
                  </div>
                </div>
                <p className="text-xs text-gray-400 mt-3">
                  Based on: credential breach probability, dwell time reduction (292 → 50 days), AI detection savings, regulatory fine avoidance.
                </p>
              </div>
            </section>

            {/* PM Strategy Section */}
            <section id="product" className="bg-gray-900 rounded-xl border border-gray-800 p-6">
              <h2 className="text-xl font-semibold mb-4 flex items-center gap-2">
                <span>🎯</span> PM Strategic Elements
              </h2>
              
              {/* Table Stakes */}
              <div className="mb-6">
                <h3 className="text-sm font-semibold text-gray-400 mb-3">Table Stakes (Minimum Viable Feature Set)</h3>
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
                    <span className="text-gray-300">80%+ of breaches involve compromised identities—this is the foundational market driver.</span>
                  </div>
                  <div className="flex gap-3">
                    <span className="text-blue-400 font-bold">2.</span>
                    <span className="text-gray-300">Microsoft Defender for Identity is bundled in E5. Your value prop is incremental detection.</span>
                  </div>
                  <div className="flex gap-3">
                    <span className="text-blue-400 font-bold">3.</span>
                    <span className="text-gray-300">Non-human identities now outnumber humans. NHI coverage is the 2025-2026 differentiator.</span>
                  </div>
                  <div className="flex gap-3">
                    <span className="text-blue-400 font-bold">4.</span>
                    <span className="text-gray-300">54% of CISOs have flat/shrinking budgets. ITDR must displace spend or prove immediate ROI.</span>
                  </div>
                  <div className="flex gap-3">
                    <span className="text-blue-400 font-bold">5.</span>
                    <span className="text-gray-300">The IAM-SOC gap is real. ITDR that bridges this collaboration problem wins.</span>
                  </div>
                  <div className="flex gap-3">
                    <span className="text-blue-400 font-bold">6.</span>
                    <span className="text-gray-300">False positives kill adoption. Behavioral AI and tuning capabilities are non-negotiable.</span>
                  </div>
                  <div className="flex gap-3">
                    <span className="text-blue-400 font-bold">7.</span>
                    <span className="text-gray-300">XDR is absorbing ITDR. Position as platform module, not standalone.</span>
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
                  <div>IAM-SOC convergence → <span className="text-green-400">creates demand for</span> → unified detection</div>
                  <div>NHI explosion → <span className="text-purple-400">expands attack surface</span> → human-only ITDR obsolete</div>
                  <div>Platform consolidation → <span className="text-orange-400">absorbs point solutions</span> → standalone faces extinction</div>
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

export default ITDRPage;
