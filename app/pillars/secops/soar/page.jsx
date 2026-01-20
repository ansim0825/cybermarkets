"use client";
import React, { useState } from 'react';
import { Logo } from '@/components/Logo';

const SOARPage = () => {
  const [activeSection, setActiveSection] = useState('overview');

  // SecOps & Analytics sub-segments
  const subSegments = [
    { id: 'siem', name: 'SIEM', active: false, href: '#' },
    { id: 'xdr', name: 'XDR', active: false, href: '/pillars/secops/xdr' },
    { id: 'soar', name: 'SOAR', active: true, href: '/pillars/secops/soar' },
    { id: 'aidr', name: 'AIDR', active: false, href: '/pillars/secops/aidr' },
    { id: 'mdr', name: 'MDR', active: false, href: '#' },
    { id: 'insider-risk', name: 'Insider Risk Management', active: false, href: '/pillars/secops/insider-risk-management' },
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
    { name: 'Network & Edge', primary: false },
    { name: 'Identity', primary: false },
    { name: 'GRC & TIC', primary: false },
  ];

  const keyInsights = [
    { stat: '$1.6-1.7B', label: 'Market size (2024)' },
    { stat: '90%', label: 'Incident remediation time reduction' },
    { stat: '$2.2M', label: 'Avg savings with AI/automation' },
    { stat: 'OBSOLETE', label: 'Gartner Hype Cycle designation' },
  ];

  const marketSizing = [
    { source: 'Mordor Intelligence', val2024: '$1.58B', projection: '$4.42B (2030)', cagr: '18.8%' },
    { source: 'Grand View Research', val2024: '$1.72B', projection: '$4.11B (2030)', cagr: '15.8%' },
    { source: 'MarketsandMarkets', val2024: '$1.27B (2023)', projection: '$3.48B', cagr: '15.5%' },
  ];

  const marketSubSegments = [
    'Full-Code/Legacy SOAR',
    'Low-Code SOAR',
    'No-Code SOAR',
    'Hyperautomation Platforms',
    'SIEM-Embedded SOAR',
    'XDR-Native Automation',
    'Platform-Absorbed SOAR',
  ];

  // Top vendors by consensus
  const competitors = [
    { 
      name: 'Palo Alto Networks', 
      product: 'Cortex XSOAR → XSIAM',
      position: 'Platform Leader', 
      focus: 'Absorbed into XSIAM platform. Precision AI-powered. Acquired IBM QRadar SaaS assets (Aug 2024).',
      status: 'in-progress',
      href: '/pillars/secops/soar/companies/paloalto'
    },
    { 
      name: 'Splunk (Cisco)', 
      product: 'Splunk SOAR',
      position: 'Platform Leader', 
      focus: 'Post-Cisco acquisition ($28B). Unified with Enterprise Security. Forrester Wave Leader.',
      status: 'in-progress',
      href: '/pillars/secops/soar/companies/splunk'
    },
    { 
      name: 'Microsoft', 
      product: 'Sentinel (Native SOAR)',
      position: 'Platform Incumbent', 
      focus: 'Embedded in SIEM/XDR platform. Security Copilot AI integration. Bundled with Azure/E5.',
      status: 'in-progress',
      href: '/pillars/secops/soar/companies/microsoft'
    },
    { 
      name: 'Google', 
      product: 'Google SecOps (Chronicle SOAR)',
      position: 'Platform Leader', 
      focus: 'Absorbed Siemplify ($500M, 2022). Alert Triage agent (Agentic AI). Embedded in SecOps.',
      status: 'in-progress',
      href: '/pillars/secops/soar/companies/google'
    },
    { 
      name: 'CrowdStrike', 
      product: 'Falcon Fusion + Charlotte SOAR',
      position: 'Platform Leader', 
      focus: 'Charlotte Agentic SOAR (Nov 2025). AI agents that reason, decide, act. Native platform integration.',
      status: 'in-progress',
      href: '/pillars/secops/soar/companies/crowdstrike'
    },
    { 
      name: 'Swimlane', 
      product: 'Swimlane Turbine',
      position: 'Pure-Play Leader', 
      focus: 'QKS SPARK Matrix Leader & "Ace Performer." Low-code focus. Hero AI for playbook creation.',
      status: 'in-progress',
      href: '/pillars/secops/soar/companies/swimlane'
    },
    { 
      name: 'Tines', 
      product: 'Tines',
      position: 'No-Code Leader', 
      focus: 'No-code workflow automation. "48-hour time-to-value" positioning. Event-driven architecture.',
      status: 'in-progress',
      href: '/pillars/secops/soar/companies/tines'
    },
    { 
      name: 'Torq', 
      product: 'Torq Hyperautomation',
      position: 'Hyperautomation Leader', 
      focus: 'Socrates Agentic AI. "Hyperautomation" positioning vs. legacy SOAR. 30-day value programs.',
      status: 'in-progress',
      href: '/pillars/secops/soar/companies/torq'
    },
    { 
      name: 'Fortinet', 
      product: 'FortiSOAR',
      position: 'Ecosystem Embedded', 
      focus: '2025 Gartner Peer Insights Customers\' Choice. KuppingerCole #1 Innovator/Leader. IT/OT coverage.',
      status: 'in-progress',
      href: '/pillars/secops/soar/companies/fortinet'
    },
    { 
      name: 'ServiceNow', 
      product: 'Security Operations',
      position: 'IT/Security Convergence', 
      focus: 'IT/Security workflow convergence. Moveworks acquisition ($2.85B). Agentic AI assistant.',
      status: 'in-progress',
      href: '/pillars/secops/soar/companies/servicenow'
    },
    { 
      name: 'D3 Security', 
      product: 'D3 SOAR',
      position: 'MSSP/MDR Focus', 
      focus: 'Multi-tenant architecture. MSSP/MDR specialization. Pure-play survivor strategy.',
      status: 'in-progress',
      href: '/pillars/secops/soar/companies/d3'
    },
    { 
      name: 'Rapid7', 
      product: 'InsightConnect',
      position: 'Low-Code', 
      focus: 'Low-code SOAR. Integrated with InsightIDR SIEM. 311% validated ROI.',
      status: 'in-progress',
      href: '/pillars/secops/soar/companies/rapid7'
    },
    { 
      name: 'IBM', 
      product: 'QRadar SOAR',
      position: 'Legacy/Transition', 
      focus: 'Being migrated to Palo Alto XSIAM. QRadar SaaS sold to PANW. Legacy customer base.',
      status: 'in-progress',
      href: '/pillars/secops/soar/companies/ibm'
    },
    { 
      name: 'Blink', 
      product: 'Blink Ops',
      position: 'No-Code Challenger', 
      focus: 'GenAI-native automation. Targeting "SOAR replacement" positioning.',
      status: 'in-progress',
      href: '/pillars/secops/soar/companies/blink'
    },
    { 
      name: 'Prophet Security', 
      product: 'Prophet Security',
      position: 'AI-Native', 
      focus: 'Autonomous AI agents. Claims to eliminate workflow building. Pure agentic approach.',
      status: 'in-progress',
      href: '/pillars/secops/soar/companies/prophet'
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
    { name: 'Rise of Agentic AI & Autonomous SOC', description: 'Shift from playbook-based SOAR to autonomous AI agents. CrowdStrike Charlotte, Torq Socrates, Google Alert Triage agent. 52% of executives have AI agents in production.' },
    { name: 'Hyperautomation Replacing Legacy SOAR', description: 'GenAI + agentic AI + low-code/no-code + cloud-native. Unlike traditional automation, it thinks, learns, and scales—mimicking human analyst reasoning.' },
    { name: 'Platform Consolidation (SIEM/SOAR/XDR)', description: 'SOAR preferred as integrated response functionality rather than standalone. Cortex XSIAM, Google SecOps, Microsoft Sentinel embedding SOAR natively.' },
    { name: 'SME Adoption Acceleration', description: 'SMEs hold 51.6% market share in 2025. Smaller organizations lacking dedicated security teams need automated orchestration.' },
    { name: 'Cloud-Native Dominance', description: 'Cloud deployments captured 71% market share in 2024. API-first designs. Cloud SOAR growing at 24.4% CAGR through 2030.' },
  ];

  const hypePositions = [
    { tech: 'Standalone SOAR', position: 'OBSOLETE BEFORE PLATEAU', status: 'declining', note: 'Gartner 2024 verdict' },
    { tech: 'Agentic AI / Autonomous SOC', position: 'Innovation Trigger', status: 'emerging', note: '50+ startups tracked' },
    { tech: 'Hyperautomation Platforms', position: 'Peak of Inflated Expectations', status: 'hot', note: 'Torq, Swimlane leading' },
    { tech: 'Platform-Embedded SOAR', position: 'Slope of Enlightenment', status: 'rising', note: 'XSIAM, Sentinel, SecOps' },
    { tech: 'Low-Code/No-Code SOAR', position: 'Early Mainstream', status: 'stable', note: 'Now table stakes' },
  ];

  const maActivity = [
    { date: '2025', acquirer: 'Google', target: 'Wiz', value: '$32B', signal: 'Cloud-native security consolidation' },
    { date: '2025', acquirer: 'Palo Alto Networks', target: 'CyberArk', value: '$25B', signal: 'Identity + automation convergence' },
    { date: '2024', acquirer: 'Cisco', target: 'Splunk', value: '$28B', signal: 'SIEM/SOAR consolidation' },
    { date: '2025', acquirer: 'ServiceNow', target: 'Moveworks', value: '$2.85B', signal: 'Agentic AI assistant' },
    { date: '2024', acquirer: 'Palo Alto Networks', target: 'IBM QRadar SaaS', value: '~$500M', signal: 'SOAR asset absorption' },
    { date: '2022', acquirer: 'Google', target: 'Siemplify', value: '~$500M', signal: 'SOAR capability acquisition' },
  ];

  const acquisitionHistory = [
    { year: '2017', acquirer: 'Microsoft', target: 'Hexadite', status: 'Absorbed' },
    { year: '2018', acquirer: 'Splunk', target: 'Phantom (~$350M)', status: 'Splunk SOAR' },
    { year: '2019', acquirer: 'Palo Alto', target: 'Demisto ($560M)', status: 'Cortex XSOAR → XSIAM' },
    { year: '2019', acquirer: 'Fortinet', target: 'CyberSponse', status: 'FortiSOAR' },
    { year: '2022', acquirer: 'Google', target: 'Siemplify (~$500M)', status: 'Chronicle SOAR' },
    { year: '2024', acquirer: 'LogRhythm + Exabeam', target: 'Merger', status: 'Combined entity' },
  ];

  const cisoJobs = [
    { job: 'Prove ROI to the board', metric: 'Board-reportable dashboards; cost-per-incident tracking; MTTR reduction' },
    { job: 'Connect our 45-83 tool sprawl', metric: 'Unified orchestration layer; single pane of glass' },
    { job: 'Do more with flat/shrinking budget', metric: 'Automation multiplier; FTE avoidance; consolidation savings' },
    { job: 'Address platform economics question', metric: '"Why buy standalone SOAR when SIEM/XDR includes it?"' },
  ];

  const socManagerJobs = [
    { job: 'Make my analysts\' lives not miserable', metric: 'Reduce repetitive work; cut alert fatigue; improve retention' },
    { job: 'Don\'t let things slip through the cracks', metric: '100% triage coverage; no dropped alerts; consistent handling' },
    { job: 'Speed up our response time', metric: 'MTTR from hours to minutes; demonstrable improvement' },
    { job: 'Ensure consistent incident handling', metric: 'Playbooks enforce best practices regardless of analyst' },
  ];

  const socAnalystJobs = [
    { job: 'Stop drowning in alerts and burning out', metric: '80%+ reduction in Tier-1 manual work; reasonable workload' },
    { job: 'Focus on interesting investigations', metric: 'Less tedious work; career growth opportunities' },
    { job: 'Don\'t get blamed for missed alerts', metric: 'Every alert triaged; automated documentation' },
  ];

  const secEngineerJobs = [
    { job: 'Build automation that doesn\'t break constantly', metric: 'Reliable integrations; auto-updating connectors' },
    { job: 'Escape playbook maintenance burden', metric: 'Reusable components; version control; self-healing' },
    { job: 'Integrate without months of work', metric: 'Pre-built connectors; Python/REST SDK; quick deployment' },
  ];

  const tableStakes = [
    'Visual/low-code playbook builder with conditional logic',
    'Case management with audit trails',
    '200+ pre-built connectors (SIEM, EDR, firewall, TIP)',
    'Threat intelligence auto-enrichment from multiple feeds',
    'Automated alert deduplication, correlation, prioritization',
    'Cloud-native SaaS deployment option (71% of market)',
    'MITRE ATT&CK mapping (RFP requirement)',
    'Open, bidirectional REST APIs',
    'Real-time SOC metrics dashboards (MTTR, case volume)',
    'SOC 2 Type II compliance',
    'RBAC with audit logging',
    'GenAI assistance for playbook creation (2025 addition)',
  ];

  const differentiators = [
    { name: 'Agentic AI / Autonomous SOC', description: 'AI agents that reason, decide, and act without predefined playbooks. Torq Socrates, CrowdStrike Charlotte, Prophet Security. The new battleground.' },
    { name: 'Time-to-Value', description: 'Deploy in days, not months. Out-of-box content that works. Tines "48-hour value," Torq "30-day programs." This is the #1 decision driver.' },
    { name: 'True No-Code Accessibility', description: 'Security analysts (not engineers) can build/modify automation. Tines, Torq, Blink. Eliminates scripting expertise requirement.' },
    { name: 'Platform Economics', description: 'Bundled with SIEM/XDR at no incremental cost. Microsoft Sentinel, CrowdStrike Falcon Fusion. Brutal for pure-play vendors.' },
    { name: 'Multi-Vendor Orchestration', description: 'Works across heterogeneous environments, no lock-in. Swimlane, D3 Security. Wins in best-of-breed environments.' },
    { name: 'MSSP/MDR Architecture', description: 'Multi-tenant, white-label, scalable for service providers. Torq, Swimlane, D3 Security. Fastest-growing adopter segment.' },
    { name: 'Vertical Specialization', description: 'OT/ICS focus, healthcare compliance, financial services. FortiSOAR (IT/OT), D3 Security (MSSP). Differentiate on depth.' },
  ];

  const roiMetrics = [
    { metric: 'Incident remediation time reduction', value: '90%' },
    { metric: 'Malware investigation time reduction', value: '89%' },
    { metric: 'Manual work reduction', value: '75%+' },
    { metric: 'Average savings with AI/automation', value: '$2.2M' },
    { metric: 'Breach identification acceleration', value: '~100 days faster' },
  ];

  const pricingModels = [
    { model: 'Per-User/Seat', example: 'IBM QRadar SOAR, Splunk SOAR', note: 'Based on analyst count' },
    { model: 'Per-Action', example: 'Some pure-play vendors', note: 'Based on automated actions executed' },
    { model: 'Flat Enterprise', example: 'Cortex XSOAR (~$250K/year)', note: 'Annual license regardless of usage' },
    { model: 'Data Ingestion', example: 'Microsoft Sentinel (~$5/GB)', note: 'Based on volume processed' },
    { model: 'Platform-Bundled', example: 'XSIAM, Sentinel, Google SecOps', note: 'Included in SIEM/XDR bundle' },
  ];

  const tcoConsiderations = [
    { cost: 'Implementation Complexity', impact: '6-12+ months for full operationalization', hidden: true },
    { cost: 'Playbook Development', impact: 'Custom playbooks require documented SOPs + scripting', hidden: true },
    { cost: 'SOAR Engineer Role', impact: '$100K-$150K/year dedicated FTE for maintenance', hidden: true },
    { cost: 'Skills Gap', impact: 'Python, API integration, workflow design training', hidden: true },
    { cost: 'Integration Breakage', impact: 'Connectors break with vendor API updates', hidden: true },
    { cost: 'Shelfware Risk', impact: 'May sit unused after expensive procurement', hidden: true },
  ];

  const theses = [
    {
      id: 1,
      title: 'Standalone SOAR is Mid-Collapse—The Category is Being Absorbed',
      timeframe: '2025-2027',
      confidence: 'High',
      color: 'green',
      claim: 'Gartner retired the Magic Quadrant. Forrester retired the Wave. The capability is essential, but the standalone market is being absorbed into platforms. By 2027, 80%+ of SOAR consumption will be via embedded platform modules.',
      evidence: ['Gartner 2024: SOAR "obsolete before plateau"', 'Both MQ and Wave retired for standalone SOAR', 'SOAR now evaluated within Security Analytics Platforms', 'Major vendors absorbed: Demisto, Phantom, Siemplify, Cybersponse, Resilient'],
      implication: 'If you\'re evaluating standalone SOAR: (a) verify the vendor has a platform strategy, (b) consider embedded alternatives, (c) plan for acquisition or obsolescence.',
    },
    {
      id: 2,
      title: 'Agentic AI is the New Battleground—Static Playbooks Are Legacy',
      timeframe: '2025-2027',
      confidence: 'High',
      color: 'purple',
      claim: 'The competitive question has shifted from "do you have SOAR?" to "is your automation intelligent and autonomous?" Static playbooks are now legacy technology. Omdia tracks 50+ agentic SOC startups; autonomous SOC may become standard within 1-2 years.',
      evidence: ['CrowdStrike Charlotte Agentic SOAR (Nov 2025)', 'Torq Socrates, Google Alert Triage agent', '52% of executives have AI agents in production', 'Prophet Security: eliminate workflow building entirely'],
      implication: 'Invest heavily in AI that can reason, decide, and act—not just execute predefined playbooks. This is the differentiation that matters in 2025+.',
    },
    {
      id: 3,
      title: 'Platform Economics Are Brutal—Pure-Play Must Differentiate on Capability',
      timeframe: '2025-2028',
      confidence: 'Medium-High',
      color: 'orange',
      claim: 'When Microsoft includes SOAR in Sentinel at no incremental cost, or Palo Alto bundles XSOAR into XSIAM, pure-play vendors must differentiate on capability, not price. The "Why buy standalone?" question is reshaping procurement.',
      evidence: ['54% of CISOs have flat/shrinking budgets', '75% of organizations reducing security vendors', 'Microsoft Sentinel SOAR: $0 incremental', 'Cortex XSOAR absorbed into XSIAM bundle'],
      implication: 'For pure-plays: win on innovation speed (agentic AI, no-code, time-to-value), multi-vendor flexibility, vertical specialization, or customer success. Don\'t fight the platform battle on price.',
    },
  ];

  const dealWinningPatterns = [
    { pattern: 'Enterprise with existing vendor investment', winner: 'Platform-embedded', example: 'Palo Alto customer → XSIAM, Microsoft shop → Sentinel' },
    { pattern: 'Multi-vendor, best-of-breed environment', winner: 'Pure-play', example: 'Torq, Swimlane, Tines' },
    { pattern: 'MSSP/MDR provider', winner: 'Multi-tenant architecture', example: 'Torq, Swimlane, D3 Security' },
    { pattern: 'Budget-constrained', winner: 'Bundled pricing', example: 'Microsoft Sentinel, CrowdStrike Fusion' },
  ];

  const whereToCompete = [
    { segment: 'Multi-vendor environments', rationale: 'Enterprises with heterogeneous security stacks (45+ tools) need vendor-agnostic orchestration.' },
    { segment: 'MSSP/MDR providers', rationale: 'Service providers need multi-tenant, white-label, scalable automation. Underserved by platform-embedded.' },
    { segment: 'Time-to-value sensitive buyers', rationale: '"Deploy in 48 hours" beats "best features in 6 months." Pre-built content, quick wins.' },
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
      <nav className="border-b border-gray-800 bg-gray-950/95 backdrop-blur sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 py-3">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2 text-sm">
              <a href="/" className="hover:text-blue-400 transition-colors">
                <Logo />
              </a>
              /
              <a href="/pillars/secops" className="text-blue-400 hover:text-blue-300">SecOps & Analytics</a>
            </div>
            <div className="flex items-center gap-6 text-sm text-gray-400">
              <a href="/pillars" className="hover:text-white transition-colors">Pillars</a>
              <a href="/theses" className="hover:text-white transition-colors">Theses</a>
              <a href="/about" className="hover:text-white transition-colors">About</a>
            </div>
          </div>
        </div>
      </nav>

      <div className="max-w-7xl mx-auto px-4 py-6">
        
        {/* Sub-segment Navigation */}
        <div className="mb-6 flex items-center justify-between flex-wrap gap-4">
          <div className="flex items-center gap-2 flex-wrap">
            {subSegments.map((seg) => (
              <a
                key={seg.id}
                href={seg.href}
                className={`px-3 py-1.5 rounded-full text-sm transition-all ${
                  seg.active
                    ? 'bg-blue-900/50 text-blue-400 border border-blue-700'
                    : 'bg-gray-800 text-gray-400 hover:bg-gray-700 hover:text-white'
                }`}
              >
                {seg.active && <span className="mr-1">●</span>}
                {seg.name}
              </a>
            ))}
          </div>
          
          {/* Related pillars */}
          <div className="flex items-center gap-2 text-xs text-gray-500">
            <span>Integrates with:</span>
            {relatedPillars.map((pillar, idx) => (
              <span
                key={idx}
                className="px-2 py-1 rounded bg-gray-800/50 text-gray-400"
              >
                {pillar.name}
              </span>
            ))}
          </div>
        </div>

        
        {/* Header */}
        <div className="mb-8">
          <div className="flex items-center gap-3 mb-2">
            <h1 className="text-3xl font-bold">Security Orchestration, Automation & Response</h1>
            <span className="px-2 py-1 text-xs font-medium bg-red-900/50 text-red-400 border border-red-700 rounded">
              CATEGORY IN TRANSITION
            </span>
          </div>
          <p className="text-lg text-gray-400 max-w-3xl">
            The $1.6B+ capability being absorbed into platforms—standalone SOAR declared "obsolete before plateau" by Gartner
          </p>
          
          <div className="mt-4 flex items-center gap-4 text-sm text-gray-500">
            <span>Last updated: January 2026</span>
            <span>•</span>
            <span>Methodology: SRP Framework</span>
            <span>•</span>
            <span className="flex items-center gap-1">
              <span className="w-2 h-2 rounded-full bg-yellow-400"></span>
              Active research
            </span>
          </div>
        </div>

        {/* Key Stats Bar */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
          {keyInsights.map((insight, idx) => (
            <div
              key={idx}
              className="bg-gray-900 border border-gray-800 rounded-lg p-4 text-center"
            >
              <div className={`text-2xl font-bold ${insight.stat === 'OBSOLETE' ? 'text-red-400' : 'text-blue-400'} mb-1`}>{insight.stat}</div>
              <div className="text-sm text-gray-400">{insight.label}</div>
            </div>
          ))}
        </div>

        {/* The Absorption Warning Callout */}
        <div className="mb-8 p-4 bg-gradient-to-r from-red-900/20 to-orange-900/20 border border-red-800/50 rounded-xl">
          <div className="flex items-start gap-4">
            <div className="text-3xl">⚠️</div>
            <div>
              <h3 className="font-semibold text-red-400 mb-1">The Absorption Reality</h3>
              <p className="text-gray-300 text-sm">
                <span className="text-red-400 font-medium">Gartner retired the SOAR Magic Quadrant. Forrester retired the SOAR Wave.</span>{' '}
                The capability is essential and growing, but standalone SOAR is being absorbed into SIEM, XDR, and unified SecOps platforms.
                {' '}<span className="text-orange-400">Pure-play vendors must differentiate on agentic AI, time-to-value, or vertical specialization—not price.</span>
              </p>
            </div>
          </div>
        </div>

        {/* Main Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
          
          {/* Left Sidebar - SRP Navigation */}
          <div className="lg:col-span-1">
            <div className="sticky top-20 space-y-4">
              <div className="bg-gray-900 border border-gray-800 rounded-xl p-4">
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
                      {section.icon}
                      {section.name}
                    </button>
                  ))}
                </div>
              </div>

              {/* SOAR Components Visual */}
              <div className="bg-gray-900 border border-gray-800 rounded-xl p-4">
                <h4 className="text-sm font-semibold text-gray-400 mb-3">SOAR Components</h4>
                <div className="space-y-2 text-xs">
                  <div className="p-2 bg-blue-900/30 border border-blue-800 rounded-lg">
                    <span className="text-blue-400 font-medium">Orchestration</span>
                    <p className="text-gray-400 mt-1">Connects disparate tools via APIs</p>
                  </div>
                  <div className="p-2 bg-purple-900/30 border border-purple-800 rounded-lg">
                    <span className="text-purple-400 font-medium">Automation</span>
                    <p className="text-gray-400 mt-1">Executes tasks via playbooks</p>
                  </div>
                  <div className="p-2 bg-green-900/30 border border-green-800 rounded-lg">
                    <span className="text-green-400 font-medium">Response</span>
                    <p className="text-gray-400 mt-1">Manages incident workflows</p>
                  </div>
                </div>
                <p className="text-xs text-gray-500 mt-3">★ Now being absorbed into unified platforms</p>
              </div>
            </div>
          </div>

          {/* Main Content Area */}
          <div className="lg:col-span-3 space-y-8">
            
            {/* Overview Section */}
            <section id="overview" className="bg-gray-900 border border-gray-800 rounded-xl p-6">
              <h2 className="text-xl font-semibold mb-4 flex items-center gap-2">
                📋 Overview
              </h2>
              <div className="prose prose-invert prose-sm max-w-none space-y-4">
                <p className="text-gray-300">
                  <strong>Security Orchestration, Automation, and Response (SOAR)</strong>—a term coined by Gartner in 2017—combines 
                  three capabilities: <strong>Orchestration</strong> (connecting disparate security tools via APIs), 
                  <strong> Automation</strong> (executing repetitive tasks without human intervention via playbooks), and 
                  <strong> Response</strong> (managing incident workflows and coordinated remediation).
                </p>
                <p className="text-gray-300">
                  Organizations invest in SOAR to address alert overload (SOCs face millions of logs daily), the 
                  4.8M global cybersecurity talent shortage, MTTD/MTTR reduction requirements, and tool sprawl 
                  management (enterprises operate 45-83 security tools). SOAR serves as the "glue layer" that 
                  translates alerts into actions.
                </p>
                <div className="bg-red-950/30 border border-red-800/50 rounded-lg p-4">
                  <h4 className="text-red-400 font-medium mb-2">The Existential Reality</h4>
                  <ul className="text-gray-300 text-sm space-y-1">
                    <li>• <strong>Gartner 2024:</strong> SOAR placed in "Trough of Disillusionment," labeled "obsolete before plateau"</li>
                    <li>• <strong>Analyst coverage retired:</strong> No standalone SOAR Magic Quadrant or Forrester Wave exists</li>
                    <li>• <strong>Capability vs. category:</strong> SOAR technology is alive and essential—the standalone market is not</li>
                    <li>• <strong>Absorption thesis:</strong> SOAR is "transitioning to SIEM"—being absorbed into platforms</li>
                  </ul>
                </div>
              </div>
            </section>

            {/* Market Structure Section */}
            <section id="structure" className="bg-gray-900 border border-gray-800 rounded-xl p-6">
              <h2 className="text-xl font-semibold mb-4 flex items-center gap-2">
                🏗️ Market Structure
              </h2>
              
              {/* Market Sizing */}
              <div className="mb-6">
                <h3 className="text-sm font-semibold text-gray-400 mb-3">Market Size & Growth</h3>
                <div className="overflow-x-auto">
                  <table className="w-full text-sm">
                    <thead>
                      <tr className="border-b border-gray-700 text-gray-400">
                        <th className="text-left py-2">Source</th>
                        <th className="text-left py-2">2024</th>
                        <th className="text-left py-2">Projection</th>
                        <th className="text-left py-2">CAGR</th>
                      </tr>
                    </thead>
                    <tbody>
                      {marketSizing.map((row, idx) => (
                        <tr key={idx} className="border-b border-gray-800">
                          <td className="py-2 text-gray-300">{row.source}</td>
                          <td className="py-2 text-blue-400">{row.val2024}</td>
                          <td className="py-2 text-gray-300">{row.projection}</td>
                          <td className="py-2 text-green-400">{row.cagr}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
                <p className="text-xs text-yellow-500 mt-2">⚠️ Critical caveat: These figures increasingly capture SOAR as a capability within larger platforms, not standalone SOAR revenue.</p>
              </div>

              {/* Sub-segments */}
              <div className="mb-6">
                <h3 className="text-sm font-semibold text-gray-400 mb-3">SOAR Sub-Segments (Evolving)</h3>
                <div className="flex flex-wrap gap-2">
                  {marketSubSegments.map((seg, idx) => (
                    <span
                      key={idx}
                      className="px-3 py-1.5 bg-gray-800 text-gray-300 rounded-lg text-sm"
                    >
                      {seg}
                    </span>
                  ))}
                </div>
                <p className="text-xs text-gray-500 mt-2">Sub-segmentation is shifting from "SOAR types" to "automation approaches": Full-code → Low-code → No-code → AI-native/Agentic</p>
              </div>

              {/* Ecosystem Fork */}
              <div className="mb-6 grid md:grid-cols-2 gap-4">
                <div className="p-4 bg-blue-950/30 border border-blue-800/50 rounded-lg">
                  <h4 className="text-blue-400 font-medium mb-2">Path A: Platform-Embedded (Absorbers)</h4>
                  <p className="text-sm text-gray-300 mb-2">Palo Alto XSIAM, Microsoft Sentinel, CrowdStrike Falcon, Google SecOps</p>
                  <p className="text-xs text-green-400">✓ Native integration, bundled pricing, single vendor</p>
                  <p className="text-xs text-red-400">✗ Vendor lock-in, limited multi-vendor orchestration</p>
                </div>
                <div className="p-4 bg-purple-950/30 border border-purple-800/50 rounded-lg">
                  <h4 className="text-purple-400 font-medium mb-2">Path B: Vendor-Agnostic (Pure-Play Survivors)</h4>
                  <p className="text-sm text-gray-300 mb-2">Swimlane, Tines, Torq, D3 Security</p>
                  <p className="text-xs text-green-400">✓ Multi-vendor orchestration, flexibility, no lock-in</p>
                  <p className="text-xs text-red-400">✗ Platform economics favor bundled solutions</p>
                </div>
              </div>

              {/* Competitive Landscape */}
              <div>
                <div className="flex items-center justify-between mb-3">
                  <h3 className="text-sm font-semibold text-gray-400">Top 15 Vendors by Consensus (2025)</h3>
                  <div className="flex items-center gap-3 text-xs">
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
                        className="block p-3 bg-gray-800/50 hover:bg-gray-800 border border-gray-700 rounded-lg transition-all group"
                      >
                        <div className="flex items-start justify-between gap-4">
                          <div className="flex-1">
                            <div className="flex items-center gap-2 mb-1">
                              <span className="font-medium text-white group-hover:text-blue-400 transition-colors">{comp.name}</span>
                              <span className="text-gray-500">•</span>
                              <span className="text-sm text-gray-400">{comp.product}</span>
                            </div>
                            <p className="text-xs text-gray-400">{comp.focus}</p>
                          </div>
                          <div className="flex items-center gap-2 shrink-0">
                            <span className="text-xs px-2 py-1 rounded bg-gray-700 text-gray-300">
                              {comp.position}
                            </span>
                            <span className={`text-xs px-2 py-1 rounded flex items-center gap-1 ${statusStyle.bg} ${statusStyle.text}`}>
                              <span className={`w-1.5 h-1.5 rounded-full ${statusStyle.dot}`}></span>
                              {statusStyle.label}
                            </span>
                            <span className="text-gray-600 group-hover:text-blue-400 transition-colors">
                              →
                            </span>
                          </div>
                        </div>
                      </a>
                    );
                  })}
                </div>
              </div>
            </section>

            {/* Market Dynamics Section */}
            <section id="motion" className="bg-gray-900 border border-gray-800 rounded-xl p-6">
              <h2 className="text-xl font-semibold mb-4 flex items-center gap-2">
                📈 Market Dynamics
              </h2>

              {/* Hype Cycle */}
              <div className="mb-6">
                <h3 className="text-sm font-semibold text-gray-400 mb-3">Hype Cycle Positioning (2024-2025)</h3>
                <div className="space-y-2">
                  {hypePositions.map((item, idx) => (
                    <div key={idx} className="flex items-center justify-between p-3 bg-gray-800/50 rounded-lg">
                      <div>
                        <span className="text-white font-medium">{item.tech}</span>
                        <span className="text-gray-500 text-sm ml-2">— {item.note}</span>
                      </div>
                      <span className={`text-xs px-2 py-1 rounded ${
                        item.status === 'declining' ? 'bg-red-900/50 text-red-400' :
                        item.status === 'hot' ? 'bg-orange-900/50 text-orange-400' :
                        item.status === 'rising' ? 'bg-green-900/50 text-green-400' :
                        item.status === 'emerging' ? 'bg-purple-900/50 text-purple-400' :
                        'bg-gray-700 text-gray-400'
                      }`}>
                        {item.position}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Major Trends */}
              <div className="mb-6">
                <h3 className="text-sm font-semibold text-gray-400 mb-3">5 Major Trends for 2025-2026</h3>
                <div className="space-y-3">
                  {trends.map((trend, idx) => (
                    <div key={idx} className="p-3 bg-gray-800/50 border border-gray-700 rounded-lg">
                      <h4 className="text-white font-medium mb-1">{trend.name}</h4>
                      <p className="text-sm text-gray-400">{trend.description}</p>
                    </div>
                  ))}
                </div>
              </div>

              {/* What's Replacing What */}
              <div className="mb-6">
                <h3 className="text-sm font-semibold text-gray-400 mb-3">What's Replacing What</h3>
                <div className="grid md:grid-cols-2 gap-3">
                  <div className="p-3 bg-red-950/30 border border-red-800/50 rounded-lg">
                    <p className="text-red-400 text-xs font-medium mb-1">BEING REPLACED</p>
                    <ul className="text-sm text-gray-300 space-y-1">
                      <li>• Standalone SOAR platforms</li>
                      <li>• Playbook-based automation</li>
                      <li>• Manual alert triage</li>
                      <li>• Point solutions</li>
                      <li>• Human-dependent response</li>
                    </ul>
                  </div>
                  <div className="p-3 bg-green-950/30 border border-green-800/50 rounded-lg">
                    <p className="text-green-400 text-xs font-medium mb-1">REPLACED BY</p>
                    <ul className="text-sm text-gray-300 space-y-1">
                      <li>• Integrated SIEM+SOAR+XDR platforms</li>
                      <li>• Agentic AI with autonomous reasoning</li>
                      <li>• AI-powered automated investigation</li>
                      <li>• Consolidated security platforms</li>
                      <li>• Autonomous response with human oversight</li>
                    </ul>
                  </div>
                </div>
              </div>

              {/* M&A Activity */}
              <div className="mb-6">
                <h3 className="text-sm font-semibold text-gray-400 mb-3">M&A Activity (Consolidation Signals)</h3>
                <div className="overflow-x-auto">
                  <table className="w-full text-sm">
                    <thead>
                      <tr className="border-b border-gray-700 text-gray-400">
                        <th className="text-left py-2">Date</th>
                        <th className="text-left py-2">Acquirer</th>
                        <th className="text-left py-2">Target</th>
                        <th className="text-left py-2">Value</th>
                        <th className="text-left py-2">Signal</th>
                      </tr>
                    </thead>
                    <tbody>
                      {maActivity.map((row, idx) => (
                        <tr key={idx} className="border-b border-gray-800">
                          <td className="py-2 text-gray-400">{row.date}</td>
                          <td className="py-2 text-white">{row.acquirer}</td>
                          <td className="py-2 text-blue-400">{row.target}</td>
                          <td className="py-2 text-green-400">{row.value}</td>
                          <td className="py-2 text-gray-400">{row.signal}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>

              {/* SOAR Acquisition History */}
              <div>
                <h3 className="text-sm font-semibold text-gray-400 mb-3">SOAR-Specific Acquisition History</h3>
                <div className="overflow-x-auto">
                  <table className="w-full text-sm">
                    <thead>
                      <tr className="border-b border-gray-700 text-gray-400">
                        <th className="text-left py-2">Year</th>
                        <th className="text-left py-2">Acquirer</th>
                        <th className="text-left py-2">Target</th>
                        <th className="text-left py-2">Current Status</th>
                      </tr>
                    </thead>
                    <tbody>
                      {acquisitionHistory.map((row, idx) => (
                        <tr key={idx} className="border-b border-gray-800">
                          <td className="py-2 text-gray-400">{row.year}</td>
                          <td className="py-2 text-white">{row.acquirer}</td>
                          <td className="py-2 text-blue-400">{row.target}</td>
                          <td className="py-2 text-gray-400">{row.status}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
                <p className="text-xs text-gray-500 mt-2">Few independent SOAR vendors remain—most have been absorbed into larger suites.</p>
              </div>
            </section>

            {/* Stakeholders Section */}
            <section id="stakeholders" className="bg-gray-900 border border-gray-800 rounded-xl p-6">
              <h2 className="text-xl font-semibold mb-4 flex items-center gap-2">
                👥 Stakeholders
              </h2>

              {/* Analyst Consensus */}
              <div className="mb-6 p-4 bg-gray-800/50 rounded-lg">
                <h3 className="text-sm font-semibold text-gray-400 mb-3">Analyst Consensus</h3>
                <div className="space-y-2 text-sm">
                  <p className="text-gray-300">
                    <span className="text-red-400 font-medium">Gartner:</span> No standalone SOAR MQ—only Market Guide. SOAR in "Trough of Disillusionment," labeled "obsolete before plateau." Recommends evaluating if standalone SOAR is right vs. embedded alternatives.
                  </p>
                  <p className="text-gray-300">
                    <span className="text-blue-400 font-medium">Forrester:</span> No standalone SOAR Wave. SOAR now evaluated within Security Analytics Platforms Wave (Q2 2025). Leaders: Splunk, Microsoft, Elastic.
                  </p>
                  <p className="text-gray-300">
                    <span className="text-purple-400 font-medium">Alternative Coverage:</span> QKS Group SPARK Matrix (Swimlane = Leader/"Ace Performer"), KuppingerCole Leadership Compass (FortiSOAR = #1 Innovator/Leader).
                  </p>
                </div>
              </div>

              {/* CISO JTBD */}
              <div className="mb-6">
                <h3 className="text-sm font-semibold text-gray-400 mb-2">CISO / Security Leadership</h3>
                <div className="overflow-x-auto">
                  <table className="w-full text-sm">
                    <thead>
                      <tr className="border-b border-gray-700 text-gray-400">
                        <th className="text-left py-2">Job Statement</th>
                        <th className="text-left py-2">Success Metric / TI Feature</th>
                      </tr>
                    </thead>
                    <tbody>
                      {cisoJobs.map((row, idx) => (
                        <tr key={idx} className="border-b border-gray-800">
                          <td className="py-2 text-white">"{row.job}"</td>
                          <td className="py-2 text-gray-400">{row.metric}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>

              {/* SOC Manager JTBD */}
              <div className="mb-6">
                <h3 className="text-sm font-semibold text-gray-400 mb-2">SOC Manager / Security Operations Lead</h3>
                <div className="overflow-x-auto">
                  <table className="w-full text-sm">
                    <thead>
                      <tr className="border-b border-gray-700 text-gray-400">
                        <th className="text-left py-2">Job Statement</th>
                        <th className="text-left py-2">Success Metric</th>
                      </tr>
                    </thead>
                    <tbody>
                      {socManagerJobs.map((row, idx) => (
                        <tr key={idx} className="border-b border-gray-800">
                          <td className="py-2 text-white">"{row.job}"</td>
                          <td className="py-2 text-gray-400">{row.metric}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>

              {/* SOC Analyst JTBD */}
              <div className="mb-6">
                <h3 className="text-sm font-semibold text-gray-400 mb-2">SOC Analyst (Tier 1-2)</h3>
                <div className="overflow-x-auto">
                  <table className="w-full text-sm">
                    <thead>
                      <tr className="border-b border-gray-700 text-gray-400">
                        <th className="text-left py-2">Job Statement</th>
                        <th className="text-left py-2">Success Metric</th>
                      </tr>
                    </thead>
                    <tbody>
                      {socAnalystJobs.map((row, idx) => (
                        <tr key={idx} className="border-b border-gray-800">
                          <td className="py-2 text-white">"{row.job}"</td>
                          <td className="py-2 text-gray-400">{row.metric}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>

              {/* Security Engineer JTBD */}
              <div className="mb-6">
                <h3 className="text-sm font-semibold text-gray-400 mb-2">Security Engineer / Automation Developer</h3>
                <div className="overflow-x-auto">
                  <table className="w-full text-sm">
                    <thead>
                      <tr className="border-b border-gray-700 text-gray-400">
                        <th className="text-left py-2">Job Statement</th>
                        <th className="text-left py-2">Success Metric</th>
                      </tr>
                    </thead>
                    <tbody>
                      {secEngineerJobs.map((row, idx) => (
                        <tr key={idx} className="border-b border-gray-800">
                          <td className="py-2 text-white">"{row.job}"</td>
                          <td className="py-2 text-gray-400">{row.metric}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>

              {/* Key Pain Points */}
              <div className="p-4 bg-red-950/30 border border-red-800/50 rounded-lg">
                <h4 className="text-red-400 font-medium mb-2">Pain Points Users Hate About Current Solutions</h4>
                <div className="grid md:grid-cols-2 gap-2 text-sm">
                  <div className="text-gray-300">• <strong>Complexity:</strong> Steep learning curve; requires scripting expertise</div>
                  <div className="text-gray-300">• <strong>Playbook Maintenance:</strong> Constant updates; playbooks break when APIs change</div>
                  <div className="text-gray-300">• <strong>Integration Challenges:</strong> Custom connectors for niche tools; legacy systems difficult</div>
                  <div className="text-gray-300">• <strong>High TCO:</strong> Initial implementation expensive; ongoing costs underestimated</div>
                  <div className="text-gray-300">• <strong>Over-Promising:</strong> "SOAR viewed as silver bullet but not designed for every scenario"</div>
                  <div className="text-gray-300">• <strong>Alert Fatigue Shifted:</strong> Poor config can "shift noise from one system to another"</div>
                </div>
              </div>
            </section>

            {/* Economics Section */}
            <section id="economics" className="bg-gray-900 border border-gray-800 rounded-xl p-6">
              <h2 className="text-xl font-semibold mb-4 flex items-center gap-2">
                💰 Economics & ROI
              </h2>

              {/* ROI Metrics */}
              <div className="mb-6">
                <h3 className="text-sm font-semibold text-gray-400 mb-3">Documented SOAR Impact</h3>
                <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                  {roiMetrics.map((item, idx) => (
                    <div key={idx} className="bg-gray-800/50 rounded-lg p-4 text-center">
                      <div className="text-xl font-bold text-green-400 mb-1">{item.value}</div>
                      <div className="text-xs text-gray-400">{item.metric}</div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Pricing Models */}
              <div className="mb-6">
                <h3 className="text-sm font-semibold text-gray-400 mb-3">Common Pricing Models</h3>
                <div className="overflow-x-auto">
                  <table className="w-full text-sm">
                    <thead>
                      <tr className="border-b border-gray-700 text-gray-400">
                        <th className="text-left py-2">Model</th>
                        <th className="text-left py-2">Example Vendors</th>
                        <th className="text-left py-2">Note</th>
                      </tr>
                    </thead>
                    <tbody>
                      {pricingModels.map((row, idx) => (
                        <tr key={idx} className="border-b border-gray-800">
                          <td className="py-2 text-white font-medium">{row.model}</td>
                          <td className="py-2 text-gray-300">{row.example}</td>
                          <td className="py-2 text-gray-400">{row.note}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>

              {/* TCO Considerations */}
              <div className="mb-6">
                <h3 className="text-sm font-semibold text-gray-400 mb-3">TCO: Hidden Costs (Often Underestimated)</h3>
                <div className="space-y-2">
                  {tcoConsiderations.map((item, idx) => (
                    <div key={idx} className="flex items-start gap-3 p-3 bg-yellow-950/30 border border-yellow-800/50 rounded-lg">
                      <span className="text-yellow-500 text-lg">⚠️</span>
                      <div>
                        <span className="text-yellow-400 font-medium">{item.cost}:</span>
                        <span className="text-gray-300 ml-2">{item.impact}</span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* ROI Calculation */}
              <div className="mb-6">
                <h3 className="text-sm font-semibold text-gray-400 mb-3">Sample ROI Calculation</h3>
                <div className="p-4 bg-gray-800/50 rounded-lg">
                  <p className="text-xs text-gray-400 mb-3">Assumptions: 5 SOC analysts at $100K fully-loaded; 40 hours/week on automatable tasks; SOAR reduces by 70%; SOAR cost: $150K/year</p>
                  <div className="grid md:grid-cols-2 gap-4 mb-4">
                    <div className="p-3 bg-gray-700/50 rounded">
                      <p className="text-gray-400 text-xs mb-1">Labor Savings</p>
                      <p className="text-green-400 font-bold">~$70K/year</p>
                    </div>
                    <div className="p-3 bg-gray-700/50 rounded">
                      <p className="text-gray-400 text-xs mb-1">FTE Avoidance</p>
                      <p className="text-green-400 font-bold">$100K/year</p>
                    </div>
                    <div className="p-3 bg-gray-700/50 rounded">
                      <p className="text-gray-400 text-xs mb-1">Reduced Breach Risk</p>
                      <p className="text-green-400 font-bold">~$45K/year</p>
                    </div>
                    <div className="p-3 bg-gray-700/50 rounded">
                      <p className="text-gray-400 text-xs mb-1">Net ROI</p>
                      <p className="text-blue-400 font-bold">43%</p>
                    </div>
                  </div>
                  <p className="text-sm text-gray-300">Industry benchmarks: 200-311% ROI within 18 months (Rapid7 validated: 311%). Breakeven typically 12-18 months.</p>
                </div>
              </div>

              {/* The Economics Paradox */}
              <div className="p-4 bg-gradient-to-r from-blue-950/30 to-purple-950/30 border border-blue-800/50 rounded-lg">
                <h4 className="text-blue-400 font-medium mb-2">The SOAR Economics Paradox</h4>
                <div className="grid md:grid-cols-2 gap-4 text-sm">
                  <div>
                    <p className="text-green-400 font-medium mb-1">The Good News:</p>
                    <ul className="text-gray-300 space-y-1">
                      <li>• 70-90% MTTR reductions documented</li>
                      <li>• $1.76-$2.2M average breach savings</li>
                      <li>• 3-4x analyst productivity multiplier</li>
                    </ul>
                  </div>
                  <div>
                    <p className="text-red-400 font-medium mb-1">The Challenge:</p>
                    <ul className="text-gray-300 space-y-1">
                      <li>• Significant upfront investment required</li>
                      <li>• Playbooks aren't "set and forget"</li>
                      <li>• Platform-bundled SOAR now "free"</li>
                    </ul>
                  </div>
                </div>
              </div>
            </section>

            {/* PM Strategy Section */}
            <section id="product" className="bg-gray-900 border border-gray-800 rounded-xl p-6">
              <h2 className="text-xl font-semibold mb-4 flex items-center gap-2">
                🎯 PM Strategic Elements
              </h2>
              
              {/* Table Stakes */}
              <div className="mb-6">
                <h3 className="text-sm font-semibold text-gray-400 mb-3">Table Stakes (2025 Minimum Viable Feature Set)</h3>
                <div className="grid md:grid-cols-2 gap-2">
                  {tableStakes.map((feature, idx) => (
                    <div key={idx} className="flex items-center gap-2 text-sm">
                      <span className="text-green-400">✓</span>
                      <span className="text-gray-300">{feature}</span>
                    </div>
                  ))}
                </div>
                <p className="text-xs text-yellow-500 mt-3">
                  ⚠️ Critical: What was "differentiator" in 2022 (low-code, cloud-native) is now table stakes. Pure-code SOAR is considered "legacy."
                </p>
              </div>

              {/* Differentiators */}
              <div className="mb-6">
                <h3 className="text-sm font-semibold text-gray-400 mb-3">Key Differentiators (What Wins Deals)</h3>
                <div className="space-y-3">
                  {differentiators.map((diff, idx) => (
                    <div key={idx} className="p-3 bg-gray-800/50 border border-gray-700 rounded-lg">
                      <h4 className="text-white font-medium mb-1">{diff.name}</h4>
                      <p className="text-sm text-gray-400">{diff.description}</p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Deal-Winning Patterns */}
              <div className="mb-6">
                <h3 className="text-sm font-semibold text-gray-400 mb-3">Deal-Winning Patterns</h3>
                <div className="overflow-x-auto">
                  <table className="w-full text-sm">
                    <thead>
                      <tr className="border-b border-gray-700 text-gray-400">
                        <th className="text-left py-2">Buyer Profile</th>
                        <th className="text-left py-2">Winner</th>
                        <th className="text-left py-2">Example</th>
                      </tr>
                    </thead>
                    <tbody>
                      {dealWinningPatterns.map((row, idx) => (
                        <tr key={idx} className="border-b border-gray-800">
                          <td className="py-2 text-white">{row.pattern}</td>
                          <td className="py-2 text-blue-400">{row.winner}</td>
                          <td className="py-2 text-gray-400">{row.example}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>

              {/* If I'm a PM Here Box */}
              <div className="p-4 bg-gradient-to-r from-blue-950/30 to-purple-950/30 border border-blue-800/50 rounded-xl">
                <h3 className="text-blue-400 font-semibold mb-4 flex items-center gap-2">
                  💡 If I am a PM Here, I Need to Know...
                </h3>
                <div className="space-y-3 text-sm">
                  <div className="flex gap-3">
                    <span className="text-blue-400 font-bold">1.</span>
                    <span className="text-gray-300"><strong>Standalone SOAR is mid-collapse.</strong> Gartner retired the MQ; Forrester retired the Wave. The capability is essential, but the standalone market is being absorbed.</span>
                  </div>
                  <div className="flex gap-3">
                    <span className="text-blue-400 font-bold">2.</span>
                    <span className="text-gray-300"><strong>Agentic AI is the new battleground.</strong> Static playbooks are legacy. Invest in AI that reasons, decides, acts—not just executes predefined workflows.</span>
                  </div>
                  <div className="flex gap-3">
                    <span className="text-blue-400 font-bold">3.</span>
                    <span className="text-gray-300"><strong>Platform economics are brutal.</strong> When Microsoft includes SOAR in Sentinel at no cost, pure-plays must differentiate on capability, not price.</span>
                  </div>
                  <div className="flex gap-3">
                    <span className="text-blue-400 font-bold">4.</span>
                    <span className="text-gray-300"><strong>Multi-vendor environments are your market.</strong> Enterprises with 45+ tools need vendor-agnostic orchestration—this is where pure-plays win.</span>
                  </div>
                  <div className="flex gap-3">
                    <span className="text-blue-400 font-bold">5.</span>
                    <span className="text-gray-300"><strong>Time-to-value is the #1 decision driver.</strong> "Deploy in 48 hours" beats "best features in 6 months." Pre-built content, quick wins, measurable outcomes.</span>
                  </div>
                  <div className="flex gap-3">
                    <span className="text-blue-400 font-bold">6.</span>
                    <span className="text-gray-300"><strong>Avoid the "SOAR" label.</strong> Pure-plays are repositioning as "hyperautomation," "workflow automation"—the SOAR term carries legacy baggage.</span>
                  </div>
                  <div className="flex gap-3">
                    <span className="text-blue-400 font-bold">7.</span>
                    <span className="text-gray-300"><strong>MSSP/MDR is a growth opportunity.</strong> Service providers need multi-tenant, scalable automation—underserved by platform-embedded solutions.</span>
                  </div>
                  <div className="flex gap-3">
                    <span className="text-blue-400 font-bold">8.</span>
                    <span className="text-gray-300"><strong>TCO transparency wins trust.</strong> Hidden costs (playbook maintenance, SOAR engineer, integration complexity) are a major pain point. Be transparent.</span>
                  </div>
                </div>
              </div>
            </section>

            {/* Strategic Theses Section */}
            <section id="theses" className="bg-gray-900 border border-gray-800 rounded-xl p-6">
              <h2 className="text-xl font-semibold mb-4 flex items-center gap-2">
                🔮 Strategic Theses
              </h2>
              <p className="text-gray-400 text-sm mb-6">
                Three structural shifts reshaping this market. Not incremental changes—fundamental rewirings of where value is created and captured.
              </p>

              <div className="space-y-6">
                {theses.map((thesis) => (
                  <div
                    key={thesis.id}
                    className={`p-4 bg-gray-800/50 border-l-4 ${getThesisAccent(thesis.color)} rounded-r-lg`}
                  >
                    <div className="flex items-start justify-between mb-2">
                      <h3 className="text-lg font-semibold text-white">{thesis.title}</h3>
                      <div className="flex items-center gap-2 shrink-0">
                        <span className={`text-xs px-2 py-1 rounded border ${getConfidenceColor(thesis.confidence)}`}>
                          {thesis.confidence}
                        </span>
                        <span className="text-xs text-gray-500">{thesis.timeframe}</span>
                      </div>
                    </div>
                    
                    <p className="text-gray-300 mb-4">{thesis.claim}</p>
                    
                    <div className="mb-4">
                      <p className="text-xs text-gray-500 uppercase tracking-wide mb-2">EVIDENCE</p>
                      <ul className="space-y-1">
                        {thesis.evidence.map((item, idx) => (
                          <li key={idx} className="text-sm text-gray-400 flex items-start gap-2">
                            <span className="text-blue-400">•</span>
                            {item}
                          </li>
                        ))}
                      </ul>
                    </div>

                    <p className="text-sm text-gray-300 border-t border-gray-700 pt-3">
                      <span className="text-blue-400 font-medium">Implication: </span>
                      {thesis.implication}
                    </p>
                  </div>
                ))}
              </div>

              {/* Synthesis */}
              <div className="mt-6 p-4 bg-gray-800/50 rounded-lg">
                <h4 className="text-gray-400 text-sm font-semibold mb-3">How These Connect</h4>
                <div className="space-y-2 text-sm">
                  <p className="text-gray-300">
                    <span className="text-green-400">Category absorption</span> → forces standalone vendors to → 
                    <span className="text-purple-400"> differentiate on agentic AI</span>
                  </p>
                  <p className="text-gray-300">
                    <span className="text-purple-400">Agentic AI differentiation</span> → requires → 
                    <span className="text-orange-400"> capability innovation over price competition</span>
                  </p>
                  <p className="text-gray-300">
                    <span className="text-orange-400">Platform economics</span> → pushes pure-plays toward → 
                    <span className="text-blue-400"> multi-vendor, MSSP, and vertical specialization</span>
                  </p>
                </div>
              </div>
            </section>

            {/* Recommendations */}
            <section className="bg-gray-900 border border-gray-800 rounded-xl p-6">
              <h2 className="text-xl font-semibold mb-4 flex items-center gap-2">
                🎯 Recommendations
              </h2>
              
              <div className="grid md:grid-cols-2 gap-4">
                {/* For Buyers */}
                <div className="p-4 bg-gray-800/50 rounded-lg">
                  <h3 className="font-semibold text-white mb-3 flex items-center gap-2">
                    <span className="w-6 h-6 rounded bg-blue-600 flex items-center justify-center text-xs">B</span>
                    For Enterprise Buyers
                  </h3>
                  <ul className="space-y-2 text-sm text-gray-300">
                    <li>• <strong>First question:</strong> Does my SIEM/XDR platform already include this capability?</li>
                    <li>• Evaluate standalone only if you need multi-vendor orchestration or platform lacks depth</li>
                    <li>• Time-to-value > feature completeness for most use cases</li>
                    <li>• Budget for SOAR engineer role (full or partial FTE)</li>
                    <li>• Assess vendor acquisition risk—many will be absorbed or obsoleted</li>
                  </ul>
                </div>

                {/* For Vendors */}
                <div className="p-4 bg-gray-800/50 rounded-lg">
                  <h3 className="font-semibold text-white mb-3 flex items-center gap-2">
                    <span className="w-6 h-6 rounded bg-purple-600 flex items-center justify-center text-xs">V</span>
                    For Vendors / Product Leaders
                  </h3>
                  <ul className="space-y-2 text-sm text-gray-300">
                    <li>• <strong>If platform vendor:</strong> Absorb SOAR aggressively, bundle pricing, emphasize unified experience</li>
                    <li>• <strong>If pure-play:</strong> Win on agentic AI, time-to-value, multi-vendor flexibility, MSSP architecture</li>
                    <li>• Consider repositioning away from "SOAR" label (hyperautomation, workflow automation)</li>
                    <li>• Customer success is critical—SOAR failures are usually implementation failures</li>
                    <li>• Integration velocity is table stakes—300+ connectors to compete</li>
                  </ul>
                </div>
              </div>
            </section>

            {/* Resources */}
            <section className="bg-gray-900 border border-gray-800 rounded-xl p-6">
              <h2 className="text-xl font-semibold mb-4 flex items-center gap-2">
                📎 Resources
              </h2>
              <div className="grid md:grid-cols-2 gap-4">
                <a href="#" className="p-4 bg-gray-800/50 hover:bg-gray-800 rounded-lg transition-colors flex items-center gap-3">
                  <span className="text-2xl">📄</span>
                  <div>
                    <p className="font-medium text-white">Full SOAR Strategic Brief</p>
                    <p className="text-sm text-gray-400">Complete SRP analysis (PDF)</p>
                  </div>
                </a>
                <a href="#" className="p-4 bg-gray-800/50 hover:bg-gray-800 rounded-lg transition-colors flex items-center gap-3">
                  <span className="text-2xl">📊</span>
                  <div>
                    <p className="font-medium text-white">SOAR Vendor Comparison Matrix</p>
                    <p className="text-sm text-gray-400">Platform vs. pure-play analysis</p>
                  </div>
                </a>
              </div>
            </section>

          </div>
        </div>

        {/* Footer */}
        <div className="mt-12 pt-8 border-t border-gray-800 text-center text-sm text-gray-500">
          <p>Analysis by Andy Simko • CISSP • GPEN • CISA • GSNA • HCSFP • PMC-Level III</p>
          <p className="mt-1">15+ years in cybersecurity • Methodology: Systematic Research Process (SRP)</p>
        </div>
      </div>
    </div>
  );
};

export default SOARPage;
