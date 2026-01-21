"use client";
import React, { useState } from 'react';
import { Logo } from '@/components/Logo';

const UEBAPage = () => {
  const [activeSection, setActiveSection] = useState('overview');

  // SecOps pillar sub-segments
  const subSegments = [
    { id: 'siem', name: 'SIEM', active: false, href: '#' },
    { id: 'soar', name: 'SOAR', active: false, href: '#' },
    { id: 'irm', name: 'Insider Risk Mgmt', active: true, href: '/pillars/secops/insider-risk-mgmt' },
    { id: 'xdr', name: 'XDR', active: false, href: '#' },
    { id: 'asm', name: 'ASM', active: false, href: '#' },
    { id: 'vuln-mgmt', name: 'Vuln Mgmt', active: false, href: '#' },
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

  // Related pillars
  const relatedPillars = [
    { name: 'Identity', primary: true },
    { name: 'Data & Application', primary: false },
  ];

  const keyInsights = [
    { stat: '$1.5-2.5B', label: 'Market size (2024)' },
    { stat: '$17.4M', label: 'Avg annual insider threat cost' },
    { stat: '292 days', label: 'MTTD for credential-based breach' },
    { stat: '64%', label: 'View insiders as greater threat' },
  ];

  const marketSizing = [
    { source: 'Market Data Forecast', val2024: '$1.93B', projection: '$62.24B (2033)', cagr: '47.1%' },
    { source: 'Verified Market Research', val2024: '$1.27B', projection: '$19.40B (2032)', cagr: '40.5%' },
    { source: 'Polaris Market Research', val2024: '$1.30B (2022)', projection: '$23.35B (2032)', cagr: '33.5%' },
    { source: 'Future Market Report', val2024: '$1.38B', projection: '$3.23B (2033)', cagr: '11.25%' },
    { source: 'Triangulated Estimate', val2024: '$1.5-2.5B', projection: '$10-15B (2030)', cagr: '25-35%' },
  ];

  const marketSubSegments = [
    'Insider Threat Detection',
    'Compromised Credential Detection',
    'Privilege Abuse Monitoring',
    'Data Exfiltration Prevention',
    'Lateral Movement Detection',
    'Cloud Workload Anomaly Detection',
    'Peer Group Analysis',
  ];

  // Top vendors by consensus (from Dimension 1 research)
  const competitors = [
    { 
      name: 'Splunk (Cisco)', 
      product: 'Splunk UBA',
      position: 'Platform Leader', 
      focus: 'Scale, customization, extensive data ingestion. $28B Cisco acquisition (Mar 2024). ES Premier bundles SIEM+SOAR+UEBA.',
      status: 'in-progress',
      href: '/pillars/secops/ueba/companies/splunk'
    },
    { 
      name: 'Microsoft', 
      product: 'Sentinel UEBA / Defender for Identity',
      position: 'Platform Leader', 
      focus: 'Deep Microsoft 365/Azure integration. Unified SecOps platform. Bundled with E5 licensing.',
      status: 'in-progress',
      href: '/pillars/secops/ueba/companies/microsoft'
    },
    { 
      name: 'Exabeam', 
      product: 'New-Scale Fusion',
      position: 'Platform Leader', 
      focus: 'Smart Timelines™ for investigation. 1,800+ detection rules, 750 behavioral models. Merged with LogRhythm (2024).',
      status: 'in-progress',
      href: '/pillars/secops/ueba/companies/exabeam'
    },
    { 
      name: 'Securonix', 
      product: 'Unified Defense SIEM',
      position: 'Platform Leader', 
      focus: 'Cloud-native architecture. 6x Gartner SIEM Leader. UEBA baked into foundation. Agentic AI (Apr 2025).',
      status: 'in-progress',
      href: '/pillars/secops/ueba/companies/securonix'
    },
    { 
      name: 'IBM (Palo Alto)', 
      product: 'QRadar UBA',
      position: 'Enterprise', 
      focus: 'Enterprise-grade. X-Force threat intelligence. QRadar SaaS sold to Palo Alto ($500M, 2024).',
      status: 'in-progress',
      href: '/pillars/secops/ueba/companies/ibm'
    },
    { 
      name: 'Gurucul', 
      product: 'Next-Gen SIEM/UEBA',
      position: 'Visionary', 
      focus: '1,500+ ML models out-of-box. Identity analytics specialization. Created UEBA market (2010). AI-IRM (Sept 2025).',
      status: 'in-progress',
      href: '/pillars/secops/ueba/companies/gurucul'
    },
    { 
      name: 'Varonis', 
      product: 'Data Security Platform',
      position: 'Data-Centric', 
      focus: 'Data-centric security. File access monitoring specialization. Unique data+behavior correlation.',
      status: 'in-progress',
      href: '/pillars/secops/ueba/companies/varonis'
    },
    { 
      name: 'Rapid7', 
      product: 'InsightIDR',
      position: 'Challenger', 
      focus: 'Combined SIEM + XDR + UEBA. Automated investigation creation. PE pressure (Jana Partners).',
      status: 'in-progress',
      href: '/pillars/secops/ueba/companies/rapid7'
    },
    { 
      name: 'DTEX Systems', 
      product: 'InTERCEPT',
      position: 'IRM Leader', 
      focus: 'Rich endpoint telemetry. Converged UEBA + UAM + DLP. GigaOm "Outperformer." AWS Security Hub integration.',
      status: 'in-progress',
      href: '/pillars/secops/ueba/companies/dtex'
    },
    { 
      name: 'Proofpoint', 
      product: 'Insider Threat Management',
      position: 'Strong', 
      focus: 'Visual activity recordings. DLP integration. Forensic evidence capability.',
      status: 'in-progress',
      href: '/pillars/secops/ueba/companies/proofpoint'
    },
    { 
      name: 'CrowdStrike', 
      product: 'Falcon Identity/NG-SIEM',
      position: 'Platform Leader', 
      focus: 'Identity-focused behavioral analysis. AI-driven UEBA risk scoring. Falcon Next-Gen SIEM (Apr 2025).',
      status: 'in-progress',
      href: '/pillars/secops/ueba/companies/crowdstrike'
    },
    { 
      name: 'Fortinet', 
      product: 'FortiInsight/FortiSIEM',
      position: 'Challenger', 
      focus: 'UEBA within broader security fabric. FortiGuard threat intelligence integration.',
      status: 'in-progress',
      href: '/pillars/secops/ueba/companies/fortinet'
    },
    { 
      name: 'Cyberhaven', 
      product: 'Data Behavior Analytics (DaBA)',
      position: 'Emerging', 
      focus: 'Data lineage tracking. Innovative data-aware insider threat approach. Understands data movement, not just user behavior.',
      status: 'in-progress',
      href: '/pillars/secops/ueba/companies/cyberhaven'
    },
    { 
      name: 'Teramind', 
      product: 'UEBA + DLP + Workforce',
      position: 'Emerging', 
      focus: 'Comprehensive employee monitoring. Competitive pricing. Real-time intervention/blocking.',
      status: 'in-progress',
      href: '/pillars/secops/ueba/companies/teramind'
    },
    { 
      name: 'Above Security', 
      product: 'LLM-Based Insider Risk',
      position: 'Emerging', 
      focus: 'Next-gen AI/LLM-based intent detection. Real-time behavioral coaching. Prevention-first approach.',
      status: 'in-progress',
      href: '/pillars/secops/ueba/companies/above-security'
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
    { name: 'GenAI & Agentic AI Integration', description: '48% of deployments now AI-based. Leading vendors launching "Agentic AI" for autonomous threat detection and natural language investigation.' },
    { name: 'UEBA-SIEM Convergence Acceleration', description: '55% of organizations integrate UEBA with SIEM. Pure-play UEBA disappearing—behavioral analytics becoming embedded feature.' },
    { name: 'Cloud-Native Dominance', description: '60%+ of new UEBA deployments are cloud-based. On-premises declining to ~35% share (primarily regulated industries).' },
    { name: 'Insider Threat Premium', description: '64% view insiders as greater threat than external actors. $17.4M avg annual cost. 76% seeing unauthorized GenAI tool usage by employees.' },
    { name: 'Category Rename to Insider Risk Management', description: 'Gartner renamed UEBA to "Insider Risk Management Solutions" in 2024. Convergence of UEBA + DLP + ITM expected.' },
  ];

  const hypePositions = [
    { tech: 'SIEM (with embedded UEBA)', position: 'Plateau of Productivity', status: 'stable' },
    { tech: 'Standalone UEBA', position: 'Late Slope → Plateau', status: 'declining' },
    { tech: 'Insider Risk Management (IRM)', position: 'Slope of Enlightenment', status: 'rising' },
    { tech: 'XDR (with UEBA)', position: 'Slope of Enlightenment', status: 'rising' },
    { tech: 'AI SOC Agents', position: 'Peak of Inflated Expectations', status: 'hot' },
    { tech: 'Agentic AI for Security', position: 'Innovation Trigger', status: 'emerging' },
  ];

  const maActivity = [
    { date: 'Mar 2024', acquirer: 'Cisco', target: 'Splunk', value: '$28B', signal: 'Largest security software acquisition ever; SIEM+UEBA+observability' },
    { date: '2024', acquirer: 'Exabeam + LogRhythm', target: 'Merger (PE-backed)', value: '$3.5B combined', signal: 'Complementary SIEM/UEBA capabilities' },
    { date: '2024', acquirer: 'Palo Alto Networks', target: 'IBM QRadar SaaS', value: '$500M', signal: 'QRadar absorbed into Cortex XSIAM' },
    { date: 'Oct 2025', acquirer: 'Cisco/Splunk', target: 'ES Premier launch', value: '—', signal: 'Unified SIEM+SOAR+UEBA with Agentic AI' },
    { date: 'Sept 2025', acquirer: 'Gurucul', target: 'AI-IRM launch', value: '—', signal: 'First AI-native Insider Analyst for autonomous detection' },
  ];

  const socAnalystJobs = [
    { job: 'Help me triage alerts faster', metric: 'Risk scoring prioritizes genuine threats; alert-to-incident ratio' },
    { job: 'Help me investigate incidents with context', metric: 'Behavioral timelines; no manual log hunting; MTTR reduction' },
    { job: 'Help me detect threats I\'m currently missing', metric: 'ML catches anomalies signature-based tools miss' },
  ];

  const cisoJobs = [
    { job: 'Help me reduce insider threat risk', metric: 'Incident cost reduction ($17.4M baseline); time-to-contain' },
    { job: 'Help me demonstrate ROI to the board', metric: 'Risk quantification; breach cost avoidance; tool consolidation' },
    { job: 'Help me consolidate security tools', metric: 'Platform convergence; vendor count reduction' },
  ];

  const threatHunterJobs = [
    { job: 'Help me find hidden threats proactively', metric: 'Anomaly-driven hunting queries; threats found before incident' },
    { job: 'Help me track lateral movement', metric: 'Attack path visibility; TTP coverage; dwell time reduction' },
    { job: 'Help me understand attack patterns', metric: 'MITRE ATT&CK mapping depth; peer group analysis' },
  ];

  const itAdminJobs = [
    { job: 'Help me deploy without major disruption', metric: 'Time-to-deploy; time-to-first-detection; system uptime' },
    { job: 'Help me maintain without dedicated headcount', metric: 'Maintenance hours/week; automated tuning' },
    { job: 'Help me integrate with existing stack', metric: 'Integration breadth; pre-built connectors; API coverage' },
  ];

  const tableStakes = [
    'ML-based behavioral baselining',
    'Anomaly detection with risk scoring',
    'Entity profiling (users, devices, hosts, IPs)',
    'Active Directory integration (Entra ID + on-prem)',
    'SIEM bidirectional integration',
    'Pre-built detection models (out-of-box)',
    'Multi-source log ingestion',
    'Basic dashboards and reporting',
    'Alert management with severity levels',
    'Cloud-native deployment option',
    'Compliance reporting templates',
    'REST APIs for integration',
  ];

  const differentiators = [
    { name: 'Smart Timelines / Investigation UX', description: 'Automatically stitches events into coherent incident narratives. Exabeam\'s signature differentiator—investigations from days to hours.' },
    { name: 'AI/LLM-Based Intent Detection', description: '3rd generation UEBA moving beyond anomaly to intent understanding. "What are they trying to do" vs. "this is anomalous." Above Security, Securonix leading.' },
    { name: 'Real-Time Intervention/Blocking', description: 'Prevention vs. detection-only. Only ~20% of vendors offer real-time blocking. Major differentiation opportunity.' },
    { name: 'Data Lineage Tracking', description: 'Cyberhaven\'s approach: understanding not just user behavior but the actual data being accessed/moved and its sensitivity.' },
    { name: 'Platform Convergence (SIEM+UEBA+SOAR)', description: 'Single platform combining behavioral analytics with SIEM and response. Microsoft, Splunk, Securonix winning here.' },
    { name: 'Endpoint Telemetry Richness', description: 'Deep visibility into endpoint-level data including encrypted traffic. DTEX named GigaOm "Outperformer" for endpoint-first approach.' },
    { name: '1,500+ ML Models Out-of-Box', description: 'Gurucul\'s rapid time-to-value. Extensive pre-built detection library—buyers expect value in weeks, not months.' },
  ];

  const roiMetrics = [
    { metric: 'Annual insider threat cost', value: '$17.4M average' },
    { metric: 'AI/automation breach savings', value: '$1.9M per breach' },
    { metric: 'Credential breach MTTD', value: '292 days (addressable)' },
    { metric: 'Insider incident containment', value: '81 days (down from 86)' },
  ];

  const containmentCosts = [
    { timeframe: 'Under 31 days', cost: '$10.6M' },
    { timeframe: '31-90 days', cost: '$15.2M' },
    { timeframe: 'Over 91 days', cost: '$18.7M' },
  ];

  const theses = [
    {
      id: 1,
      title: 'IRM Platforms Will Dominate by 2027',
      timeframe: '2025-2027',
      confidence: 'High',
      color: 'green',
      claim: 'Pure-play UEBA vendors will cease to exist as independent entities by 2027. The market has consolidated into "Insider Risk Management" platforms that unify UEBA + DLP + ITM within SIEM/XDR ecosystems.',
      evidence: ['Gartner discontinued standalone UEBA Magic Quadrant', 'Category renamed to Insider Risk Management (2024)', '$32B in M&A (Cisco→Splunk, Exabeam+LogRhythm, Palo Alto→QRadar)', '55% of UEBA now SIEM-integrated'],
      implication: 'Build IRM as a platform capability, not a standalone product. Acquisition is the most likely exit for remaining pure-plays.',
    },
    {
      id: 2,
      title: 'AI/LLM Intent Detection Is the 2025-2026 Battleground',
      timeframe: '2025-2026',
      confidence: 'High',
      color: 'purple',
      claim: 'Traditional ML-based anomaly detection becomes table stakes. The next wave of differentiation is LLM-based intent detection—understanding "what are they trying to do" rather than just "this is anomalous."',
      evidence: ['48% of deployments now AI-based', 'Gurucul, Securonix, CrowdStrike launching Agentic AI', 'Natural language investigation queries becoming standard', '87% of CISOs turning to AI-powered tech'],
      implication: 'Invest heavily in LLM/GenAI capabilities. Natural language querying and autonomous investigation will be expected features by 2026.',
    },
    {
      id: 3,
      title: 'Prevention Beats Detection',
      timeframe: '2025-2028',
      confidence: 'Medium-High',
      color: 'orange',
      claim: 'The market will shift from "detect and respond" to "detect and prevent." Real-time blocking and behavioral coaching will become expected capabilities, not differentiators.',
      evidence: ['Only ~20% of vendors offer real-time blocking', 'Above Security and Teramind differentiate on prevention', '$17.4M annual insider threat cost drives demand', '81-day containment time is unacceptable'],
      implication: 'Real-time intervention is a clear differentiation opportunity. Build inline blocking, behavioral coaching, and automated containment.',
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
        <div className="max-w-6xl mx-auto px-4 py-3">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2 text-sm">
              <a href="/" className="hover:opacity-80 transition-opacity">
                <Logo size="small" />
              </a>
              <span className="text-gray-600">/</span>
              <span className="text-gray-400">SecOps</span>
            </div>
            <div className="flex items-center gap-6 text-sm">
              <a href="/#pillars" className="text-gray-400 hover:text-white transition-colors">Pillars</a>
              <a href="/#theses" className="text-gray-400 hover:text-white transition-colors">Theses</a>
              <a href="/#about" className="text-gray-400 hover:text-white transition-colors">About</a>
            </div>
          </div>
        </div>
      </nav>

      <div className="max-w-6xl mx-auto px-4 py-6">
        
        {/* Sub-segment Navigation */}
        <div className="flex items-center justify-between mb-6">
          <div className="flex items-center gap-2 flex-wrap">
            {subSegments.map((seg) => (
              <a
                key={seg.id}
                href={seg.href}
                className={`px-3 py-1.5 rounded-full text-sm transition-all ${
                  seg.active
                    ? 'bg-blue-900/50 text-blue-400 border border-blue-800'
                    : 'text-gray-500 hover:text-gray-300 hover:bg-gray-800/50'
                }`}
              >
                {seg.active && <span className="mr-1.5 text-blue-400">●</span>}
                {seg.name}
              </a>
            ))}
          </div>
          
          {/* Related pillars */}
          <div className="hidden md:flex items-center gap-2 text-xs text-gray-500">
            <span>Also touches:</span>
            {relatedPillars.map((pillar, idx) => (
              <span
                key={idx}
                className={`px-2 py-1 rounded ${
                  pillar.primary ? 'bg-blue-900/30 text-blue-400' : 'bg-gray-800/50 text-gray-400'
                }`}
              >
                {pillar.name}
              </span>
            ))}
          </div>
        </div>
        
        {/* Header */}
        <div className="mb-6">
          <div className="flex items-center gap-3 mb-2">
            <h1 className="text-3xl font-bold">Insider Risk Management</h1>
            <span className="px-2 py-1 bg-blue-900/50 text-blue-400 text-xs font-medium rounded border border-blue-800">
              FORMERLY "UEBA"
            </span>
          </div>
          <p className="text-gray-400 text-lg max-w-3xl">
            The evolution of UEBA—detecting insider threats through behavioral analytics, now converging with DLP and ITM into unified platforms
          </p>
          
          <div className="flex items-center gap-4 mt-4 text-sm text-gray-500">
            <span>Last updated: January 2026</span>
            <span>•</span>
            <span>Methodology: SRP Framework</span>
            <span>•</span>
            <span className="text-green-400">● Active research</span>
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
              <div className="text-xs text-gray-500">{insight.label}</div>
            </div>
          ))}
        </div>

        {/* The Category Evolution Callout */}
        <div className="bg-gradient-to-r from-blue-900/20 to-purple-900/20 border border-blue-800/50 rounded-xl p-6 mb-8">
          <div className="flex items-start gap-4">
            <div className="text-3xl">🔄</div>
            <div>
              <h3 className="font-semibold text-blue-400 mb-2">Category Evolution: UEBA → Insider Risk Management</h3>
              <p className="text-gray-300">
                Gartner renamed UEBA to <span className="text-blue-400 font-medium">"Insider Risk Management Solutions"</span> in 2024, 
                reflecting the convergence of UEBA + DLP + Insider Threat Management. 55% of behavioral analytics is now SIEM-integrated. 
                The strategic question isn't "how do we build better UEBA"—it's 
                <span className="text-white font-medium"> "how do we build the unified insider risk platform that detects, prevents, and responds?"</span>
              </p>
            </div>
          </div>
        </div>

        {/* Main Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          
          {/* Left Sidebar - SRP Navigation */}
          <div className="lg:col-span-1">
            <div className="sticky top-20 space-y-6">
              <div className="bg-gray-900/50 border border-gray-800 rounded-xl p-4">
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

              {/* IRM Evolution Visual */}
              <div className="bg-gray-900/50 border border-gray-800 rounded-xl p-4">
                <h3 className="text-sm font-semibold text-gray-400 mb-3">Category Evolution</h3>
                <div className="space-y-2 text-xs">
                  <div className="flex items-center gap-2 p-2 bg-gray-800/50 rounded">
                    <span className="text-gray-500">2015</span>
                    <span className="text-gray-400">Gartner coins "UEBA"</span>
                  </div>
                  <div className="flex items-center gap-2 p-2 bg-gray-800/50 rounded">
                    <span className="text-gray-500">2017</span>
                    <span className="text-gray-400">UEBA MQ sunset → SIEM</span>
                  </div>
                  <div className="flex items-center gap-2 p-2 bg-blue-900/30 rounded border border-blue-800/50">
                    <span className="text-blue-400">2024</span>
                    <span className="text-blue-300">→ "Insider Risk Mgmt"</span>
                  </div>
                  <div className="flex items-center gap-2 p-2 bg-green-900/30 rounded border border-green-800/50">
                    <span className="text-green-400">2025+</span>
                    <span className="text-green-300">UEBA+DLP+ITM unified</span>
                  </div>
                </div>
                <p className="text-gray-500 text-xs mt-3">IRM = next-gen insider threat</p>
              </div>
            </div>
          </div>

          {/* Main Content Area */}
          <div className="lg:col-span-3 space-y-12">
            
            {/* Overview Section */}
            <section id="overview">
              <h2 className="text-xl font-bold mb-4 flex items-center gap-2">
                <span>📋</span> Overview
              </h2>
              <div className="prose prose-invert max-w-none">
                <p className="text-gray-300 mb-4">
                  <strong>Insider Risk Management (IRM)</strong> is the evolved category formerly known as User and Entity 
                  Behavior Analytics (UEBA). It uses machine learning and advanced analytics to baseline "normal" behavior 
                  for users AND entities, detecting anomalies that indicate insider threats, compromised credentials, 
                  data exfiltration, and advanced persistent threats.
                </p>
                <p className="text-gray-300 mb-4">
                  Gartner renamed the category to "Insider Risk Management Solutions" in 2024, signaling the convergence 
                  of UEBA + DLP + Insider Threat Management into unified platforms. Standalone UEBA products are being 
                  absorbed—the winners in 2025-2027 will be platform players offering detection, prevention, AND response.
                </p>
                <div className="bg-gray-900/50 border border-gray-800 rounded-lg p-4 mt-4">
                  <h4 className="font-semibold text-white mb-2">Primary Use Cases</h4>
                  <ul className="text-gray-300 space-y-1 text-sm">
                    <li>• <strong>Insider Threat Detection</strong> — #1 use case; 64% view insiders as greater threat than external actors</li>
                    <li>• <strong>Compromised Credential Detection</strong> — 70% of breaches start with stolen credentials; 292-day MTTD</li>
                    <li>• <strong>Privilege Abuse Monitoring</strong> — PAM integration; superuser creation; unauthorized escalation</li>
                    <li>• <strong>Data Exfiltration Prevention</strong> — Growing requirement; large file transfers; cloud storage abuse</li>
                    <li>• <strong>Lateral Movement Detection</strong> — Critical for APT detection; multi-stage attack correlation</li>
                  </ul>
                </div>
              </div>
            </section>

            {/* Market Structure Section */}
            <section id="structure">
              <h2 className="text-xl font-bold mb-4 flex items-center gap-2">
                <span>🏗️</span> Market Structure
              </h2>
              
              {/* Market Sizing */}
              <div className="mb-8">
                <h3 className="text-lg font-semibold mb-3 text-gray-200">Market Size & Growth (Wide Variance)</h3>
                <div className="overflow-x-auto">
                  <table className="w-full text-sm">
                    <thead>
                      <tr className="border-b border-gray-800">
                        <th className="text-left py-3 px-4 text-gray-400">Source</th>
                        <th className="text-left py-3 px-4 text-gray-400">2024</th>
                        <th className="text-left py-3 px-4 text-gray-400">Projection</th>
                        <th className="text-left py-3 px-4 text-gray-400">CAGR</th>
                      </tr>
                    </thead>
                    <tbody>
                      {marketSizing.map((row, idx) => (
                        <tr key={idx} className={`border-b border-gray-800/50 ${row.source === 'Triangulated Estimate' ? 'bg-blue-900/20' : ''}`}>
                          <td className={`py-3 px-4 ${row.source === 'Triangulated Estimate' ? 'text-blue-400 font-medium' : 'text-gray-300'}`}>{row.source}</td>
                          <td className="py-3 px-4 text-gray-300">{row.val2024}</td>
                          <td className="py-3 px-4 text-gray-300">{row.projection}</td>
                          <td className="py-3 px-4 text-gray-300">{row.cagr}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
                <p className="text-xs text-gray-500 mt-2">Note: Wide variance reflects definitional differences—some include standalone UEBA only, others include capabilities embedded in SIEM/XDR/IRM platforms.</p>
              </div>

              {/* Sub-segments */}
              <div className="mb-8">
                <h3 className="text-lg font-semibold mb-3 text-gray-200">UEBA Sub-Segments (Use Cases)</h3>
                <div className="flex flex-wrap gap-2">
                  {marketSubSegments.map((seg, idx) => (
                    <span
                      key={idx}
                      className="px-3 py-1.5 bg-gray-800/50 text-gray-300 rounded-full text-sm"
                    >
                      {seg}
                    </span>
                  ))}
                </div>
              </div>

              {/* Competitive Landscape */}
              <div className="mb-8">
                <div className="flex items-center justify-between mb-3">
                  <h3 className="text-lg font-semibold text-gray-200">Top 15 Vendors by Consensus (2025)</h3>
                  <div className="flex items-center gap-4 text-xs">
                    <div className="flex items-center gap-1">
                      <span className="w-2 h-2 rounded-full bg-green-400"></span>
                      <span className="text-gray-400">Complete</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <span className="w-2 h-2 rounded-full bg-yellow-400"></span>
                      <span className="text-gray-400">In Progress</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <span className="w-2 h-2 rounded-full bg-gray-500"></span>
                      <span className="text-gray-400">Pending</span>
                    </div>
                  </div>
                </div>
                <div className="space-y-3">
                  {competitors.map((comp, idx) => {
                    const statusStyle = getStatusStyle(comp.status);
                    return (
                      <div key={idx} className="bg-gray-900/50 border border-gray-800 rounded-lg p-4 hover:border-gray-700 transition-colors">
                        <div className="flex items-start justify-between">
                          <div className="flex-1">
                            <div className="flex items-center gap-2 mb-1">
                              <span className="font-semibold text-white">{comp.name}</span>
                              <span className="text-gray-500">•</span>
                              <span className="text-blue-400 text-sm">{comp.product}</span>
                            </div>
                            <p className="text-gray-400 text-sm">{comp.focus}</p>
                          </div>
                          <div className="flex items-center gap-2 ml-4">
                            <span className="text-xs px-2 py-1 bg-gray-800 text-gray-400 rounded">
                              {comp.position}
                            </span>
                            <span className={`text-xs px-2 py-1 rounded flex items-center gap-1 ${statusStyle.bg} ${statusStyle.text}`}>
                              <span className={`w-1.5 h-1.5 rounded-full ${statusStyle.dot}`}></span>
                              {statusStyle.label}
                            </span>
                            <a href={comp.href} className="text-gray-500 hover:text-white">
                              <span>→</span>
                            </a>
                          </div>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
            </section>

            {/* Market Dynamics Section */}
            <section id="motion">
              <h2 className="text-xl font-bold mb-4 flex items-center gap-2">
                <span>📈</span> Market Dynamics
              </h2>

              {/* Market Assessment */}
              <div className="bg-gradient-to-r from-amber-900/20 to-red-900/20 border border-amber-800/50 rounded-lg p-4 mb-6">
                <div className="flex items-center gap-2 mb-2">
                  <span>📊</span>
                  <h3 className="font-semibold text-amber-400">Market Assessment</h3>
                </div>
                <p className="text-gray-300 text-sm">
                  <strong>Position:</strong> Late Slope of Enlightenment → Plateau of Productivity. 
                  <strong> Direction:</strong> <span className="text-red-400">STRONGLY CONSOLIDATING</span>. 
                  Standalone UEBA is being absorbed into SIEM/XDR platforms. $32B+ in M&A activity in 2024 alone.
                </p>
              </div>

              {/* Hype Cycle */}
              <div className="mb-8">
                <h3 className="text-lg font-semibold mb-3 text-gray-200">Hype Cycle Positioning (2025)</h3>
                <div className="space-y-2">
                  {hypePositions.map((item, idx) => (
                    <div key={idx} className="flex items-center justify-between bg-gray-900/50 border border-gray-800 rounded-lg p-3">
                      <span className="text-gray-300">{item.tech}</span>
                      <div className="flex items-center gap-2">
                        <span className={`w-2 h-2 rounded-full ${
                          item.status === 'stable' ? 'bg-green-400' :
                          item.status === 'rising' ? 'bg-blue-400' :
                          item.status === 'hot' ? 'bg-orange-400' :
                          item.status === 'declining' ? 'bg-gray-400' :
                          'bg-purple-400'
                        }`}></span>
                        <span className="text-gray-400 text-sm">{item.position}</span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Major Trends */}
              <div className="mb-8">
                <h3 className="text-lg font-semibold mb-3 text-gray-200">5 Major Trends for 2025-2026</h3>
                <div className="space-y-4">
                  {trends.map((trend, idx) => (
                    <div key={idx} className="border-l-2 border-blue-500 pl-4">
                      <h4 className="font-medium text-white mb-1">{trend.name}</h4>
                      <p className="text-gray-400 text-sm">{trend.description}</p>
                    </div>
                  ))}
                </div>
              </div>

              {/* M&A Activity */}
              <div className="mb-8">
                <h3 className="text-lg font-semibold mb-3 text-gray-200">M&A Activity ($32B+ in 2024)</h3>
                <div className="overflow-x-auto">
                  <table className="w-full text-sm">
                    <thead>
                      <tr className="border-b border-gray-800">
                        <th className="text-left py-3 px-4 text-gray-400">Date</th>
                        <th className="text-left py-3 px-4 text-gray-400">Acquirer</th>
                        <th className="text-left py-3 px-4 text-gray-400">Target</th>
                        <th className="text-left py-3 px-4 text-gray-400">Value</th>
                        <th className="text-left py-3 px-4 text-gray-400">Strategic Signal</th>
                      </tr>
                    </thead>
                    <tbody>
                      {maActivity.map((row, idx) => (
                        <tr key={idx} className="border-b border-gray-800/50">
                          <td className="py-3 px-4 text-gray-500">{row.date}</td>
                          <td className="py-3 px-4 text-gray-300">{row.acquirer}</td>
                          <td className="py-3 px-4 text-blue-400">{row.target}</td>
                          <td className="py-3 px-4 text-gray-300">{row.value}</td>
                          <td className="py-3 px-4 text-gray-400 text-xs">{row.signal}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            </section>

            {/* Stakeholders Section */}
            <section id="stakeholders">
              <h2 className="text-xl font-bold mb-4 flex items-center gap-2">
                <span>👥</span> Stakeholders
              </h2>

              {/* SOC Analyst JTBD */}
              <div className="mb-6">
                <h3 className="text-lg font-semibold mb-3 text-gray-200">SOC Analyst Jobs To Be Done</h3>
                <div className="overflow-x-auto">
                  <table className="w-full text-sm">
                    <thead>
                      <tr className="border-b border-gray-800">
                        <th className="text-left py-3 px-4 text-gray-400">Job Statement</th>
                        <th className="text-left py-3 px-4 text-gray-400">Success Metric</th>
                      </tr>
                    </thead>
                    <tbody>
                      {socAnalystJobs.map((row, idx) => (
                        <tr key={idx} className="border-b border-gray-800/50">
                          <td className="py-3 px-4 text-gray-300">"{row.job}"</td>
                          <td className="py-3 px-4 text-gray-400">{row.metric}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>

              {/* CISO JTBD */}
              <div className="mb-6">
                <h3 className="text-lg font-semibold mb-3 text-gray-200">CISO Jobs To Be Done</h3>
                <div className="overflow-x-auto">
                  <table className="w-full text-sm">
                    <thead>
                      <tr className="border-b border-gray-800">
                        <th className="text-left py-3 px-4 text-gray-400">Job Statement</th>
                        <th className="text-left py-3 px-4 text-gray-400">Success Metric</th>
                      </tr>
                    </thead>
                    <tbody>
                      {cisoJobs.map((row, idx) => (
                        <tr key={idx} className="border-b border-gray-800/50">
                          <td className="py-3 px-4 text-gray-300">"{row.job}"</td>
                          <td className="py-3 px-4 text-gray-400">{row.metric}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>

              {/* Threat Hunter JTBD */}
              <div className="mb-6">
                <h3 className="text-lg font-semibold mb-3 text-gray-200">Threat Hunter Jobs To Be Done</h3>
                <div className="overflow-x-auto">
                  <table className="w-full text-sm">
                    <thead>
                      <tr className="border-b border-gray-800">
                        <th className="text-left py-3 px-4 text-gray-400">Job Statement</th>
                        <th className="text-left py-3 px-4 text-gray-400">Success Metric</th>
                      </tr>
                    </thead>
                    <tbody>
                      {threatHunterJobs.map((row, idx) => (
                        <tr key={idx} className="border-b border-gray-800/50">
                          <td className="py-3 px-4 text-gray-300">"{row.job}"</td>
                          <td className="py-3 px-4 text-gray-400">{row.metric}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>

              {/* IT Admin JTBD */}
              <div className="mb-6">
                <h3 className="text-lg font-semibold mb-3 text-gray-200">IT/Security Admin Jobs To Be Done</h3>
                <div className="overflow-x-auto">
                  <table className="w-full text-sm">
                    <thead>
                      <tr className="border-b border-gray-800">
                        <th className="text-left py-3 px-4 text-gray-400">Job Statement</th>
                        <th className="text-left py-3 px-4 text-gray-400">Success Metric</th>
                      </tr>
                    </thead>
                    <tbody>
                      {itAdminJobs.map((row, idx) => (
                        <tr key={idx} className="border-b border-gray-800/50">
                          <td className="py-3 px-4 text-gray-300">"{row.job}"</td>
                          <td className="py-3 px-4 text-gray-400">{row.metric}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>

              {/* Key Pain Point */}
              <div className="bg-gray-900/50 border border-gray-800 rounded-lg p-4">
                <h3 className="text-lg font-semibold mb-2 text-white">The Core Pain: Alert Fatigue & False Positives</h3>
                <p className="text-gray-300 text-sm">
                  "Alert fatigue is the #1 SOC complaint. Without regular feedback, false positives can 
                  overwhelm analysts and erode trust in detection systems." UEBA systems are notably hard 
                  to tune and can lead to too many false positives. The #1 technical differentiator is 
                  proving 50%+ false positive reduction vs. rule-based approaches.
                </p>
              </div>
            </section>

            {/* Economics Section */}
            <section id="economics">
              <h2 className="text-xl font-bold mb-4 flex items-center gap-2">
                <span>💰</span> Economics & ROI
              </h2>

              {/* ROI Metrics */}
              <div className="mb-8">
                <h3 className="text-lg font-semibold mb-3 text-gray-200">The Business Case</h3>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                  {roiMetrics.map((item, idx) => (
                    <div key={idx} className="bg-gray-900/50 border border-gray-800 rounded-lg p-4 text-center">
                      <div className="text-xl font-bold text-white mb-1">{item.value}</div>
                      <div className="text-xs text-gray-500">{item.metric}</div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Containment Cost */}
              <div className="mb-8">
                <h3 className="text-lg font-semibold mb-3 text-gray-200">Cost Impact by Containment Time</h3>
                <div className="grid grid-cols-3 gap-4">
                  {containmentCosts.map((item, idx) => (
                    <div key={idx} className={`rounded-lg p-4 text-center ${
                      idx === 0 ? 'bg-green-900/20 border border-green-800/50' :
                      idx === 1 ? 'bg-yellow-900/20 border border-yellow-800/50' :
                      'bg-red-900/20 border border-red-800/50'
                    }`}>
                      <div className={`text-2xl font-bold mb-1 ${
                        idx === 0 ? 'text-green-400' :
                        idx === 1 ? 'text-yellow-400' :
                        'text-red-400'
                      }`}>{item.cost}</div>
                      <div className="text-xs text-gray-400">{item.timeframe}</div>
                    </div>
                  ))}
                </div>
                <p className="text-xs text-gray-500 mt-2">The longer it takes to contain, the higher the cost: $18.7M for incidents contained in 91+ days vs $10.6M for under 31 days (Ponemon 2025).</p>
              </div>

              {/* Budget Trends */}
              <div className="bg-gray-900/50 border border-gray-800 rounded-lg p-4">
                <h3 className="text-lg font-semibold mb-3 text-white">Insider Risk Budget Allocation</h3>
                <div className="flex items-center gap-4 mb-4">
                  <div className="flex-1">
                    <div className="flex justify-between text-sm mb-1">
                      <span className="text-gray-400">2023</span>
                      <span className="text-gray-300">8.2% of cyber budget</span>
                    </div>
                    <div className="h-2 bg-gray-800 rounded-full">
                      <div className="h-2 bg-gray-600 rounded-full" style={{width: '8.2%'}}></div>
                    </div>
                  </div>
                  <span className="text-2xl">→</span>
                  <div className="flex-1">
                    <div className="flex justify-between text-sm mb-1">
                      <span className="text-gray-400">2024</span>
                      <span className="text-green-400">16.5% of cyber budget</span>
                    </div>
                    <div className="h-2 bg-gray-800 rounded-full">
                      <div className="h-2 bg-green-500 rounded-full" style={{width: '16.5%'}}></div>
                    </div>
                  </div>
                </div>
                <p className="text-sm text-gray-400">
                  <span className="text-green-400 font-medium">+101% increase</span> in insider risk budget allocation. 
                  81% of organizations now have or are planning an insider risk management program.
                </p>
              </div>
            </section>

            {/* PM Strategy Section */}
            <section id="product">
              <h2 className="text-xl font-bold mb-4 flex items-center gap-2">
                <span>🎯</span> PM Strategic Elements
              </h2>
              
              {/* Table Stakes */}
              <div className="mb-8">
                <h3 className="text-lg font-semibold mb-3 text-gray-200">Table Stakes (Must-Have for RFP)</h3>
                <div className="bg-gray-900/50 border border-gray-800 rounded-lg p-4">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
                    {tableStakes.map((feature, idx) => (
                      <div key={idx} className="flex items-center gap-2 text-sm">
                        <span className="text-green-400">✓</span>
                        <span className="text-gray-300">{feature}</span>
                      </div>
                    ))}
                  </div>
                  <p className="text-xs text-gray-500 mt-4 pt-4 border-t border-gray-800">
                    Missing any of these = immediate RFP disqualification. These are no longer differentiators.
                  </p>
                </div>
              </div>

              {/* Differentiators */}
              <div className="mb-8">
                <h3 className="text-lg font-semibold mb-3 text-gray-200">Key Differentiators (What Wins Deals)</h3>
                <div className="space-y-3">
                  {differentiators.map((diff, idx) => (
                    <div key={idx} className="border-l-2 border-blue-500 bg-gray-900/50 rounded-r-lg p-4">
                      <h4 className="font-medium text-white mb-1">{diff.name}</h4>
                      <p className="text-gray-400 text-sm">{diff.description}</p>
                    </div>
                  ))}
                </div>
              </div>

              {/* If I'm a PM Here Box */}
              <div className="bg-gradient-to-r from-blue-900/30 to-purple-900/30 border border-blue-800/50 rounded-xl p-6">
                <h3 className="text-lg font-semibold mb-4 text-white flex items-center gap-2">
                  <span>💡</span> If I am a PM Here, I Need to Know...
                </h3>
                <div className="space-y-3">
                  <div className="flex items-start gap-3">
                    <span className="text-blue-400 font-bold">1.</span>
                    <span className="text-gray-300 text-sm">The strategic question isn't "how do we build better UEBA"—it's "how do we build the unified Insider Risk Management platform that detects, prevents, and responds?"</span>
                  </div>
                  <div className="flex items-start gap-3">
                    <span className="text-blue-400 font-bold">2.</span>
                    <span className="text-gray-300 text-sm">False positive reduction is the #1 technical differentiator. If you can't prove 50%+ reduction vs. rule-based approaches, you lose.</span>
                  </div>
                  <div className="flex items-start gap-3">
                    <span className="text-blue-400 font-bold">3.</span>
                    <span className="text-gray-300 text-sm">Investigation workflow is where deals are won or lost. Your UX for investigators matters as much as your detection algorithms.</span>
                  </div>
                  <div className="flex items-start gap-3">
                    <span className="text-blue-400 font-bold">4.</span>
                    <span className="text-gray-300 text-sm">Time-to-value is non-negotiable. Buyers expect actionable results in weeks, not months. Out-of-box content library matters.</span>
                  </div>
                  <div className="flex items-start gap-3">
                    <span className="text-blue-400 font-bold">5.</span>
                    <span className="text-gray-300 text-sm">Prevention is the next frontier. Most UEBA is detection-only—real-time blocking is offered by only ~20% of vendors.</span>
                  </div>
                  <div className="flex items-start gap-3">
                    <span className="text-blue-400 font-bold">6.</span>
                    <span className="text-gray-300 text-sm">Platform convergence is inevitable. Microsoft has Sentinel + Purview. Splunk has native UEBA in ES Premier. You need a platform story or a clear acquisition path.</span>
                  </div>
                  <div className="flex items-start gap-3">
                    <span className="text-blue-400 font-bold">7.</span>
                    <span className="text-gray-300 text-sm">The buyer is changing. Insider risk programs increasingly involve HR, Legal, and Privacy teams—not just Security. Build for cross-functional governance.</span>
                  </div>
                </div>
              </div>
            </section>

            {/* Strategic Theses Section */}
            <section id="theses">
              <h2 className="text-xl font-bold mb-4 flex items-center gap-2">
                <span>🔮</span> Strategic Theses
              </h2>
              <p className="text-gray-400 mb-6">
                Three structural shifts reshaping this market. Not incremental changes—fundamental rewirings of where value is created and captured.
              </p>
              <div className="space-y-6">
                {theses.map((thesis) => (
                  <div key={thesis.id} className={`bg-gray-900/50 border border-gray-800 rounded-xl p-6 border-l-4 ${getThesisAccent(thesis.color)}`}>
                    <div className="flex items-start justify-between mb-4">
                      <h3 className="text-lg font-semibold text-white">{thesis.title}</h3>
                      <div className="flex items-center gap-2">
                        <span className={`text-xs px-2 py-1 rounded border ${getConfidenceColor(thesis.confidence)}`}>
                          {thesis.confidence}
                        </span>
                        <span className="text-xs text-gray-500">{thesis.timeframe}</span>
                      </div>
                    </div>
                    
                    <p className="text-gray-300 mb-4">{thesis.claim}</p>
                    
                    <div className="mb-4">
                      <span className="text-xs text-gray-500 uppercase tracking-wider">EVIDENCE</span>
                      <div className="flex flex-wrap gap-2 mt-2">
                        {thesis.evidence.map((item, idx) => (
                          <span key={idx} className="text-xs px-2 py-1 bg-gray-800 text-gray-400 rounded">
                            {item}
                          </span>
                        ))}
                      </div>
                    </div>
                    <div className="text-sm text-gray-400 border-t border-gray-800 pt-4">
                      <span className="text-white font-medium">Implication: </span>
                      {thesis.implication}
                    </div>
                  </div>
                ))}
              </div>

              {/* Synthesis */}
              <div className="mt-8 bg-gray-900/50 border border-gray-800 rounded-xl p-6">
                <h3 className="text-lg font-semibold mb-4 text-white">How These Connect</h3>
                <div className="space-y-3 text-sm">
                  <p className="text-gray-400">
                    <span className="text-green-400">IRM platform dominance</span> → forces vendors to → <span className="text-blue-400">embed in platforms or be acquired</span>
                  </p>
                  <p className="text-gray-400">
                    <span className="text-purple-400">AI/LLM battleground</span> → enables → <span className="text-blue-400">intent detection beyond anomaly</span> → accelerates → <span className="text-orange-400">prevention capabilities</span>
                  </p>
                  <p className="text-gray-400">
                    <span className="text-orange-400">Prevention &gt detection</span> → differentiates → <span className="text-blue-400">~20% of vendors</span> → creates → <span className="text-green-400">acquisition premium</span>
                  </p>
                </div>
              </div>
            </section>

            {/* Resources */}
            <section className="border-t border-gray-800 pt-8">
              <h2 className="text-xl font-bold mb-4 flex items-center gap-2">
                <span>📎</span> Resources
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <a href="#" className="flex items-center gap-3 bg-gray-900/50 border border-gray-800 rounded-lg p-4 hover:border-gray-700 transition-colors">
                  <span className="text-2xl">📄</span>
                  <div>
                    <div className="font-medium text-white">Full Strategic Brief</div>
                    <div className="text-sm text-gray-500">Complete SRP analysis (PDF)</div>
                  </div>
                </a>
                <a href="#" className="flex items-center gap-3 bg-gray-900/50 border border-gray-800 rounded-lg p-4 hover:border-gray-700 transition-colors">
                  <span className="text-2xl">📊</span>
                  <div>
                    <div className="font-medium text-white">Vendor Comparison Matrix</div>
                    <div className="text-sm text-gray-500">Side-by-side feature analysis</div>
                  </div>
                </a>
              </div>
            </section>

          </div>
        </div>

        {/* Footer */}
        <div className="mt-16 pt-8 border-t border-gray-800 text-center text-sm text-gray-500">
          <p className="mb-2">Analysis by Andy Simko • CISSP • GPEN • CISA • GSNA • HCSFP • PMC-Level III</p>
          <p>15+ years in cybersecurity • Methodology: Systematic Research Process (SRP)</p>
        </div>
      </div>
    </div>
  );
};

export default UEBAPage;
