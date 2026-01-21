"use client";
import React, { useState } from 'react';
import { Logo } from '@/components/Logo';

const SIEMPage = () => {
  const [activeSection, setActiveSection] = useState('overview');

  // SecOps & Analytics sub-segments
  const subSegments = [
    { id: 'siem', name: 'SIEM', active: true, href: '/pillars/secops/siem' },
    { id: 'xdr', name: 'XDR', active: false, href: '/pillars/secops/xdr' },
    { id: 'aidr', name: 'AIDR', active: false, href: '/pillars/secops/aidr' },
    { id: 'insider-risk', name: 'Insider Risk', active: false, href: '/pillars/secops/insider-risk' },
    { id: 'mdr', name: 'MDR', active: false, href: '#' },
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
    { name: 'GRC & TIC', primary: false },
    { name: 'Identity', primary: false },
    { name: 'Endpoint & Workload', primary: false },
    { name: 'Network & Edge', primary: false },
  ];

  const keyInsights = [
    { stat: '$6-12B', label: 'Market size (2024)' },
    { stat: '10-17%', label: 'CAGR through 2030' },
    { stat: '85%', label: 'Analysts say SOC work is "painful"' },
    { stat: '$28B', label: 'Cisco/Splunk acquisition' },
  ];

  const marketSizing = [
    { source: 'Mordor Intelligence', val2024: '$10.78B', projection: '$19.13B (2030)', cagr: '12.16%' },
    { source: 'Fortune Business Insights', val2024: '$12.56B', projection: '$31.45B (2032)', cagr: '12.08%' },
    { source: 'SkyQuest', val2024: '$8.33B', projection: '$33.69B (2033)', cagr: '16.8%' },
    { source: 'Grand View Research', val2024: '$5.12B', projection: '$18.22B (2033)', cagr: '15.3%' },
  ];

  const marketSubSegments = [
    'Log Management & Reporting (~40.6%)',
    'Threat Detection & Analytics (~32.7%)',
    'Security Analytics (Fastest growing)',
    'Compliance Management & Reporting',
    'Cloud Workload Security (19.9% CAGR)',
    'Threat Intelligence Integration',
  ];

  const deploymentSegments = [
    { name: 'On-Premises', share: '~56%', trend: 'Declining', notes: 'Still dominant in regulated industries' },
    { name: 'Cloud-Native SaaS', share: '~44%', trend: 'Growing', notes: '13.4% CAGR; becoming default' },
    { name: 'Hybrid', share: 'Growing', trend: 'Rising', notes: 'Bridge for regulated + cloud analytics' },
  ];

  // Top vendors by consensus
  const competitors = [
    { 
      name: 'Splunk (Cisco)', 
      product: 'Splunk Enterprise Security',
      position: 'Platform Leader', 
      focus: '47% market share. 10x Gartner MQ Leader. $28B Cisco acquisition (2024). #1 all Gartner use cases.',
      status: 'in-progress',
      href: '/pillars/secops/siem/companies/splunk'
    },
    { 
      name: 'Microsoft', 
      product: 'Sentinel + Copilot for Security',
      position: 'Platform Leader', 
      focus: '14% market share. Cloud-native. 78T daily signals. Security Copilot AI. Aggressive migration campaigns.',
      status: 'in-progress',
      href: '/pillars/secops/siem/companies/microsoft'
    },
    { 
      name: 'Google', 
      product: 'Chronicle SecOps',
      position: 'Platform Leader', 
      focus: 'Gartner MQ Leader (2025). BigQuery backend. Mandiant + VirusTotal integration. Highest "Completeness of Vision."',
      status: 'in-progress',
      href: '/pillars/secops/siem/companies/google'
    },
    { 
      name: 'IBM/Palo Alto', 
      product: 'QRadar → Cortex XSIAM',
      position: 'Platform Transition', 
      focus: '9.5% combined share. QRadar SaaS sold to Palo Alto ($500M). Customers migrating to XSIAM.',
      status: 'in-progress',
      href: '/pillars/secops/siem/companies/ibm-paloalto'
    },
    { 
      name: 'CrowdStrike', 
      product: 'Falcon LogScale SIEM',
      position: 'XDR-Native', 
      focus: '$220M+ ARR. AI-native. Charlotte AI. 70% faster MTTD claims. Free XDR data ingestion.',
      status: 'in-progress',
      href: '/pillars/secops/siem/companies/crowdstrike'
    },
    { 
      name: 'Exabeam', 
      product: 'Exabeam Security Operations Platform',
      position: 'UEBA Leader', 
      focus: 'Gartner Leader (6x). LogRhythm merger ($3.5B combined). Thoma Bravo portfolio.',
      status: 'in-progress',
      href: '/pillars/secops/siem/companies/exabeam'
    },
    { 
      name: 'Securonix', 
      product: 'Unified Defense SIEM',
      position: 'UEBA Pioneer', 
      focus: '6x Gartner Leader. UEBA heritage. Vista Equity portfolio. Strong behavioral analytics.',
      status: 'in-progress',
      href: '/pillars/secops/siem/companies/securonix'
    },
    { 
      name: 'Palo Alto Networks', 
      product: 'Cortex XSIAM',
      position: 'XDR-Native', 
      focus: 'XDR + SIEM convergence. Acquired QRadar SaaS. AI-driven SOC automation vision.',
      status: 'in-progress',
      href: '/pillars/secops/siem/companies/paloalto'
    },
    { 
      name: 'Elastic', 
      product: 'Elastic Security',
      position: 'Open Source Leader', 
      focus: 'Forrester/IDC Leader. Open detection rules. On-prem + cloud flexibility. GenAI pioneer.',
      status: 'in-progress',
      href: '/pillars/secops/siem/companies/elastic'
    },
    { 
      name: 'Fortinet', 
      product: 'FortiSIEM',
      position: 'Challenger', 
      focus: '8x Gartner MQ inclusion. Strong IT/OT. Security Fabric integration. Competitive pricing.',
      status: 'in-progress',
      href: '/pillars/secops/siem/companies/fortinet'
    },
    { 
      name: 'Rapid7', 
      product: 'InsightIDR',
      position: 'Mid-Market', 
      focus: 'Cloud SIEM + XDR hybrid. Strong SMB/mid-market. PE pressure (Jana Partners).',
      status: 'in-progress',
      href: '/pillars/secops/siem/companies/rapid7'
    },
    { 
      name: 'Sumo Logic', 
      product: 'Cloud SIEM',
      position: 'Cloud-Native', 
      focus: 'Easy deployment. Competitive pricing. Francisco Partners portfolio.',
      status: 'in-progress',
      href: '/pillars/secops/siem/companies/sumologic'
    },
    { 
      name: 'Devo', 
      product: 'Devo Platform',
      position: 'Cloud-Native', 
      focus: 'High-scale data ingestion. IDC recognition. Predictable pricing model.',
      status: 'in-progress',
      href: '/pillars/secops/siem/companies/devo'
    },
    { 
      name: 'SentinelOne', 
      product: 'Singularity AI SIEM',
      position: 'XDR-Native', 
      focus: 'AI-driven. EDR heritage. Purple AI claims 88% noise reduction, 338% ROI.',
      status: 'in-progress',
      href: '/pillars/secops/siem/companies/sentinelone'
    },
    { 
      name: 'Wazuh', 
      product: 'Wazuh (Open Source)',
      position: 'Open Source', 
      focus: 'Free/open-source. High G2/PeerSpot ratings. Largest "mind share" in peer searches.',
      status: 'in-progress',
      href: '/pillars/secops/siem/companies/wazuh'
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
    { name: 'AI/GenAI Integration Becomes Table Stakes', description: 'Every major vendor adding AI copilots, NL queries, automated investigation. Microsoft Copilot, CrowdStrike Charlotte AI, Google Gemini. Forrester: "AI differentiation was stark."' },
    { name: 'Agentic AI / Autonomous SOC', description: 'Evolution from AI-assisted to AI-autonomous. Trend Micro launched "Agentic SIEM" (Aug 2025). AI agents that independently triage, investigate, and respond.' },
    { name: 'SIEM + XDR Convergence', description: 'Boundary between SIEM and XDR blurring. XDR vendors adding SIEM-like log management; SIEM vendors adding XDR-like response. Forrester: "The SIEM vs. XDR fight intensifies."' },
    { name: 'Security Data Lakes & Pipelines', description: 'SIEM evolving from monolithic to modular. Separation of storage (data lakes) from analytics. Rise of SDPPs like Cribl. Cost optimization and reduced vendor lock-in.' },
    { name: 'Cloud-Native / SaaS-First Default', description: 'On-prem declining (56% → lower). Cloud-native growing at 13.4% CAGR. Subscription/consumption pricing becomes default. CapEx → OpEx shift.' },
  ];

  const hypePositions = [
    { tech: 'Traditional SIEM (Core)', position: 'Plateau of Productivity', status: 'stable', note: 'Mature, ubiquitous, commoditized' },
    { tech: 'Cloud-Native SIEM', position: 'Late Slope of Enlightenment', status: 'rising', note: 'Rapid adoption; becoming default' },
    { tech: 'AI-Powered SIEM', position: 'Peak of Inflated Expectations', status: 'hot', note: 'GenAI copilots, automated triage' },
    { tech: 'Agentic SIEM', position: 'Innovation Trigger', status: 'emerging', note: 'Just emerging (Trend Micro Aug 2025)' },
    { tech: 'XDR (as SIEM alternative)', position: 'Peak → Early Trough', status: 'hot', note: 'SIEM vs XDR fight intensifies' },
  ];

  const maActivity = [
    { date: 'Mar 2024', acquirer: 'Cisco', target: 'Splunk', value: '$28B', signal: 'Network + observability + security platform' },
    { date: 'May 2024', acquirer: 'Palo Alto Networks', target: 'IBM QRadar SaaS', value: '$500M', signal: 'XDR + SIEM convergence; customer base' },
    { date: 'May 2024', acquirer: 'Exabeam + LogRhythm', target: 'Merger', value: '$3.5B combined', signal: 'Thoma Bravo consolidation; UEBA + log mgmt' },
    { date: '2024', acquirer: 'Vista Equity Partners', target: 'Securonix', value: 'Undisclosed', signal: 'PE mid-market rollup' },
    { date: '2024', acquirer: 'Francisco Partners', target: 'Sumo Logic', value: 'Undisclosed', signal: 'PE mid-market rollup' },
  ];

  const gartnerCriticalRequirements = [
    'Real-time analytics (detect and prioritize)',
    'Batch analytics (correlate weak signals)',
    'Cloud capabilities (SaaS delivery, cloud log support)',
    'UEBA (behavioral baselines)',
    'SOAR integration (response automation)',
    'Compliance reporting (audit trails)',
    'Threat intelligence (enrichment, IOC matching)',
  ];

  const cisoJobs = [
    { job: 'Prove resilience, justify investment', metric: 'Risk-based reporting; breach cost avoidance proof; compliance confidence' },
    { job: 'Demonstrate ROI to the board', metric: 'MTTD/MTTR dashboards; cost savings quantification' },
    { job: 'Consolidate tools without losing coverage', metric: 'Fewer vendors; maintained detection coverage; TCO reduction 20-40%' },
  ];

  const socManagerJobs = [
    { job: 'Optimize team efficiency, retain talent', metric: '25% analyst turnover addressed; automation metrics; skill development path' },
    { job: 'Reduce alert fatigue killing my team', metric: 'High-fidelity alerts; AI pre-triage; 30-50% false positive reduction' },
    { job: 'Measure and improve operations', metric: 'MTTD/MTTR tracking; analyst productivity metrics' },
  ];

  const socAnalystJobs = [
    { job: 'Triage alerts quickly, identify what\'s real', metric: 'Reduce 100s of alerts to 10 actionable; one-click context' },
    { job: 'Investigate efficiently without "swivel chair"', metric: 'Unified investigation workspace; automated timelines; 1-query visibility' },
    { job: 'Stop wasting 25% of my time on false positives', metric: 'AI pre-triage; confidence scoring; prioritized queue' },
  ];

  const complianceOfficerJobs = [
    { job: 'Pass audits without scrambling', metric: 'Pre-built compliance templates; automated evidence collection' },
    { job: 'Generate reports efficiently', metric: 'Audit-ready dashboards; continuous monitoring proof' },
    { job: 'Maintain required log retention', metric: 'Configurable retention (1yr PCI, 6yr HIPAA, 7yr SOX)' },
  ];

  const tableStakes = [
    'Log aggregation from all sources (endpoints, network, cloud, SaaS)',
    'Syslog/API/agent-based collection',
    'Automated log normalization (OCSF/CEF standards)',
    'Event correlation engine & real-time alerting',
    'Predefined detection rules + basic anomaly detection',
    'Pre-built compliance templates (GDPR, HIPAA, PCI DSS, SOX, ISO 27001)',
    'Full-text log search & query language (KQL, SPL)',
    'Forensic timeline reconstruction & case management',
    'Centralized SOC dashboard with customizable views',
    'Threat intel integration (STIX/TAXII, IOC matching)',
    'Cloud-native SaaS option + hybrid deployment support',
    '100+ out-of-the-box connectors + REST API',
    'Handle 10K+ EPS minimum; elastic storage',
  ];

  const differentiators = [
    { name: 'AI/GenAI-Powered Detection & Triage', description: 'Reduces false positives 30-50%. AI Assistant for NL queries. Automated alert prioritization. "Agentic AI" SOC agents emerging.' },
    { name: 'Native UEBA (User & Entity Behavior Analytics)', description: 'Detects insider threats, compromised credentials. Behavioral baselines without separate purchase.' },
    { name: 'Built-in SOAR / Response Automation', description: 'Integrated playbooks. One-click containment. Reduces MTTR 80%+. No separate SOAR purchase required.' },
    { name: 'Unified Platform (SIEM + XDR + TI)', description: 'Consolidates 3-5 tools. Single license. Eliminates "swivel chair." Reduces TCO 20-40%.' },
    { name: 'Predictable Pricing / Flat-Rate Model', description: 'Eliminates "bill shock" from data spikes. Budgetable TCO. Competitive against volume-based models.' },
    { name: 'Security Data Lake / Pipeline Integration', description: 'Decouple storage from compute. Petabyte-scale retention at lower cost. Federated search across clouds.' },
    { name: 'Speed: MTTD/MTTR Metrics', description: 'CrowdStrike claims 70% faster MTTD. Sub-second search at scale. 1-minute mean time to alert.' },
  ];

  const roiMetrics = [
    { metric: 'Global avg breach cost (2025)', value: '$4.44M' },
    { metric: 'US breach cost (2025)', value: '$10.22M' },
    { metric: 'AI/automation breach savings', value: '$1.9M + 80 days faster' },
    { metric: '30-day containment savings', value: '$1.76M' },
  ];

  const socCostBenchmarks = [
    { level: 'Basic SOC', cost: '$1M+/year', tech: 'Minimal', labor: '12+ analysts', notes: '3-6 months to maturity' },
    { level: 'Intermediate (SIEM + UEBA)', cost: '$2.5M/year', tech: '$400K', labor: '$2.1M', notes: '6-12 months to maturity' },
    { level: 'Advanced (AI + Hunting)', cost: '$5M/year', tech: '$1.1M', labor: '$3.9M', notes: '12-24 months to maturity' },
  ];

  const pricingModels = [
    { model: 'Data Volume (GB/day)', pros: 'Scales with usage', cons: 'Unpredictable; consumption anxiety', vendors: 'Microsoft Sentinel (~$5/GB), Splunk' },
    { model: 'Events Per Second (EPS)', pros: 'Traditional; understood', cons: 'Hard to predict; spikes cause overages', vendors: 'LogRhythm, legacy SIEM' },
    { model: 'Flat-Rate/Subscription', pros: 'Budget certainty; no surprises', cons: 'May overpay if low volume', vendors: 'Logpoint, some cloud-native' },
    { model: 'Workload/Capacity', pros: 'Predictable for known workloads', cons: 'Requires capacity planning', vendors: 'Splunk (alternative)' },
  ];

  const theses = [
    {
      id: 1,
      title: 'SIEM is Being Reinvented, Not Replaced',
      timeframe: '2025-2028',
      confidence: 'High',
      color: 'green',
      claim: 'XDR will not replace SIEM. The market is converging, not substituting. SIEM retains unique value for log management, compliance, and non-threat analytics. Winners will offer unified platforms spanning both.',
      evidence: ['CrowdStrike and Palo Alto building SIEM capabilities into XDR', 'Gartner reframing SIEM as TDIR (Threat Detection, Investigation & Response)', 'XDR vendors acknowledge SIEM retains unique value', '$28B Cisco/Splunk validates SIEM as strategic asset'],
      implication: 'Evaluate SIEM and XDR together as platform capability. Don\'t buy either in isolation.',
    },
    {
      id: 2,
      title: 'AI is THE Battleground—Differentiation is Stark',
      timeframe: '2025-2027',
      confidence: 'High',
      color: 'purple',
      claim: 'Every vendor claims AI. Actual differentiation is stark. Winners will demonstrate measurable outcomes (false positive reduction, MTTD improvement) not marketing claims. Agentic AI (autonomous response) is the next frontier.',
      evidence: ['Forrester 2025: "AI differentiation between vendors was stark"', 'AI/automation reduces breach lifecycle by 80-98 days', 'Trend Micro launched "Agentic SIEM" (Aug 2025)', '85% of analysts say SOC work is "painful"—AI is the fix'],
      implication: 'Require proof of AI outcomes in POCs. Measure false positive reduction and time savings, not feature counts.',
    },
    {
      id: 3,
      title: 'Platform Consolidation Creates Oligopoly',
      timeframe: '2025-2028',
      confidence: 'Medium-High',
      color: 'orange',
      claim: 'The market is consolidating toward 3-5 dominant platforms. Top 3 vendors already hold 70%+ market share. Mid-market players face acquisition or irrelevance. "ServiceNow model" with dominant provider + ecosystem partners.',
      evidence: ['Splunk (47%) + Microsoft (14%) + IBM/Palo Alto (9.5%) = 70%+ share', 'Cisco/Splunk ($28B), Palo Alto/QRadar ($500M), Exabeam/LogRhythm ($3.5B)', 'Thoma Bravo, Vista, Francisco consolidating mid-market', 'Gartner analyst: "It\'s going to look like ServiceNow"'],
      implication: 'Evaluate vendor long-term viability. Standalone or small vendors face acquisition risk within 24 months.',
    },
  ];

  const pmStrategicConsiderations = [
    { area: 'Pricing Model Strategy', consideration: 'Volume-based creates friction. Flat-rate/predictable pricing is emerging differentiator. Consider entity-based, integration-based, or tiered models.' },
    { area: 'AI/GenAI Investment', consideration: 'AI copilots for investigation are table stakes by late 2025. Agentic AI (autonomous response) is next frontier. Balance hype vs. actual user value.' },
    { area: 'Platform vs. Best-of-Breed', consideration: 'Market consolidating toward platforms. Decision: expand into XDR/SOAR/TI natively or maintain "open" ecosystem play?' },
    { area: 'Detection Engineering', consideration: 'Content-as-a-Service is competitive advantage. Community detection rules (open repo) vs. proprietary research team.' },
    { area: 'Time-to-Value', consideration: 'SANS: "Average SIEM shelf life is 18-24 months." Focus on OOTB value, guided setup, rapid deployment (<30 days).' },
    { area: 'Analyst Experience (AX)', consideration: '85% of analysts say SOC work is "painful." UX/workflow optimization is massive opportunity. Measure analyst productivity, not just features.' },
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
      <nav className="border-b border-gray-800 bg-gray-950/95 backdrop-blur sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 py-3">
          <div className="flex justify-between items-center">
            <div className="flex items-center gap-2 text-sm">
              <a href="/" className="text-blue-400 hover:text-blue-300 transition-colors">
                <Logo />
              </a>
              <span className="text-gray-600">/</span>
              <a href="/pillars/secops" className="text-gray-400 hover:text-white transition-colors">SecOps & Analytics</a>
            </div>
            <div className="flex items-center gap-6 text-sm">
              <a href="/pillars" className="text-gray-400 hover:text-white transition-colors">Pillars</a>
              <a href="/theses" className="text-gray-400 hover:text-white transition-colors">Theses</a>
              <a href="/about" className="text-gray-400 hover:text-white transition-colors">About</a>
            </div>
          </div>
        </div>
      </nav>

      <main className="max-w-7xl mx-auto px-4 py-8">
        
        {/* Sub-segment Navigation */}
        <div className="mb-8 flex flex-wrap items-center justify-between gap-4">
          <div className="flex flex-wrap gap-2">
            {subSegments.map((seg) => (
              <a
                key={seg.id}
                href={seg.href}
                className={`px-3 py-1.5 rounded-full text-sm transition-all ${
                  seg.active
                    ? 'bg-blue-900/50 text-blue-400 border border-blue-700'
                    : 'bg-gray-800/50 text-gray-500 hover:text-gray-300 hover:bg-gray-800'
                }`}
              >
                {seg.active && <span className="mr-1.5">●</span>}
                {seg.name}
              </a>
            ))}
          </div>
          
          {/* Related pillars */}
          <div className="flex items-center gap-2 text-xs text-gray-500">
            <span>Data from all pillars:</span>
            {relatedPillars.map((pillar, idx) => (
              <span 
                key={idx}
                className="px-2 py-0.5 bg-gray-800/50 rounded text-gray-400"
              >
                {pillar.name}
              </span>
            ))}
          </div>
        </div>

        
        {/* Header */}
        <div className="mb-8">
          <div className="flex items-center gap-3 mb-2">
            <h1 className="text-4xl font-bold bg-gradient-to-r from-white to-gray-400 bg-clip-text text-transparent">
              Security Information & Event Management
            </h1>
            <span className="px-2 py-0.5 bg-green-900/50 text-green-400 text-xs rounded-full border border-green-800">
              MATURE CATEGORY
            </span>
          </div>
          <p className="text-xl text-gray-400 max-w-3xl">
            The $6-12B "analytical backbone" of the SOC—being reinvented through AI, cloud-native architectures, and platform convergence
          </p>
          
          <div className="mt-4 flex items-center gap-4 text-sm text-gray-500">
            <span>Last updated: January 2026</span>
            <span>•</span>
            <span>Methodology: SRP Framework</span>
            <span>•</span>
            <span className="text-yellow-400">● Active research</span>
          </div>
        </div>

        {/* Key Stats Bar */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
          {keyInsights.map((insight, idx) => (
            <div 
              key={idx} 
              className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 rounded-xl p-4 border border-gray-800"
            >
              <div className="text-2xl font-bold text-white mb-1">{insight.stat}</div>
              <div className="text-sm text-gray-400">{insight.label}</div>
            </div>
          ))}
        </div>

        {/* The Core Insight Callout */}
        <div className="mb-8 bg-gradient-to-r from-blue-900/30 to-purple-900/30 rounded-xl p-6 border border-blue-800/50">
          <div className="flex items-start gap-4">
            <div className="text-3xl">🎯</div>
            <div>
              <h3 className="font-semibold text-white mb-2">The Existential Question</h3>
              <p className="text-gray-300">
                <span className="text-blue-400 font-semibold">Is SIEM a platform or a feature?</span>{' '}
                If a platform: Build comprehensive SIEM + XDR + SOAR + Data Lake.{' '}
                If a feature: Accept SIEM capabilities get absorbed into broader security platforms.{' '}
                <span className="text-yellow-400">The market is voting: XDR vendors are staking claims on "a new era of SIEM capabilities."</span>
              </p>
            </div>
          </div>
        </div>

        {/* Main Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          
          {/* Left Sidebar - SRP Navigation */}
          <div className="lg:col-span-1">
            <div className="sticky top-24 space-y-6">
              <div className="bg-gray-900/50 rounded-xl p-4 border border-gray-800">
                <h3 className="text-sm font-semibold text-gray-400 mb-3">SRP Analysis</h3>
                <nav className="space-y-1">
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
                </nav>
              </div>

              {/* SIEM Position Visual */}
              <div className="bg-gray-900/50 rounded-xl p-4 border border-gray-800">
                <h3 className="text-sm font-semibold text-gray-400 mb-3">SIEM in Security Stack</h3>
                <div className="space-y-2 text-xs">
                  <div className="p-2 bg-gray-800/50 rounded text-center text-gray-500">
                    Detection Tools (EDR, NDR, etc.)
                  </div>
                  <div className="text-center text-gray-600">↓</div>
                  <div className="p-2 bg-blue-900/50 rounded text-center text-blue-400 border border-blue-700">
                    <span className="font-semibold">SIEM</span>
                    <br />
                    <span className="text-[10px]">Aggregation • Correlation • Analysis</span>
                  </div>
                  <div className="text-center text-gray-600">↓</div>
                  <div className="p-2 bg-gray-800/50 rounded text-center text-gray-500">
                    Response (SOAR, EDR, IAM)
                  </div>
                </div>
                <p className="mt-3 text-[10px] text-gray-500 text-center">
                  Central SOC hub—"analytical backbone"
                </p>
              </div>
            </div>
          </div>

          {/* Main Content Area */}
          <div className="lg:col-span-3 space-y-12">
            
            {/* Overview Section */}
            <section id="overview" className="scroll-mt-24">
              <h2 className="text-2xl font-bold text-white mb-6 flex items-center gap-2">
                📋 Overview
              </h2>
              <div className="prose prose-invert max-w-none space-y-4">
                <p className="text-gray-300">
                  SIEM (Security Information and Event Management) is a category of security software that collects, 
                  aggregates, normalizes, and analyzes log and event data from across an organization's IT infrastructure 
                  to detect, investigate, and respond to security threats in real time. The term was coined by 
                  Gartner analysts in 2005, combining SIM (Security Information Management) and SEM (Security Event Management).
                </p>
                <p className="text-gray-300">
                  SIEM sits at the center of the Security Operations Center (SOC), often described as the "analytical backbone" 
                  or "nervous system" of security operations. It receives telemetry from virtually every security pillar—
                  network, endpoint, identity, cloud—and coordinates detection and response across the entire security stack.
                </p>
                <div className="bg-gray-800/50 rounded-lg p-4 border border-gray-700">
                  <h4 className="font-semibold text-white mb-2">Core Functional Components</h4>
                  <ul className="text-sm text-gray-400 space-y-1 list-none">
                    <li>• <span className="text-white">Log Management:</span> Collect from servers, endpoints, network, firewalls, cloud</li>
                    <li>• <span className="text-white">Data Normalization:</span> Translate diverse formats into standardized schema</li>
                    <li>• <span className="text-white">Event Correlation:</span> Connect signals across systems; identify attack patterns</li>
                    <li>• <span className="text-white">Real-Time Monitoring:</span> Continuous analysis and alerting on anomalies</li>
                    <li>• <span className="text-white">Compliance Reporting:</span> Automated audit trails for regulatory frameworks</li>
                    <li>• <span className="text-white">Incident Response:</span> Forensic investigation, timeline reconstruction</li>
                  </ul>
                </div>
              </div>
            </section>

            {/* Market Structure Section */}
            <section id="structure" className="scroll-mt-24">
              <h2 className="text-2xl font-bold text-white mb-6 flex items-center gap-2">
                🏗️ Market Structure
              </h2>
              
              {/* Market Sizing */}
              <div className="mb-8">
                <h3 className="text-lg font-semibold text-white mb-4">Market Size & Growth (Significant Variance)</h3>
                <div className="overflow-x-auto">
                  <table className="w-full text-sm">
                    <thead>
                      <tr className="border-b border-gray-700">
                        <th className="text-left py-2 text-gray-400">Source</th>
                        <th className="text-left py-2 text-gray-400">2024</th>
                        <th className="text-left py-2 text-gray-400">Projection</th>
                        <th className="text-left py-2 text-gray-400">CAGR</th>
                      </tr>
                    </thead>
                    <tbody>
                      {marketSizing.map((row, idx) => (
                        <tr key={idx} className="border-b border-gray-800">
                          <td className="py-2 text-gray-300">{row.source}</td>
                          <td className="py-2 text-white font-mono">{row.val2024}</td>
                          <td className="py-2 text-gray-300">{row.projection}</td>
                          <td className="py-2 text-green-400">{row.cagr}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
                <p className="mt-2 text-xs text-gray-500">
                  Consensus: ~$6-12B (2024) → $15-33B (2030-33) at 10-17% CAGR. Variance reflects category boundary definition.
                </p>
              </div>

              {/* Sub-segments */}
              <div className="mb-8">
                <h3 className="text-lg font-semibold text-white mb-4">SIEM Sub-Segments by Function</h3>
                <div className="flex flex-wrap gap-2">
                  {marketSubSegments.map((seg, idx) => (
                    <span 
                      key={idx}
                      className="px-3 py-1.5 bg-gray-800/50 text-gray-300 rounded-full text-sm border border-gray-700"
                    >
                      {seg}
                    </span>
                  ))}
                </div>
              </div>

              {/* Deployment Models */}
              <div className="mb-8">
                <h3 className="text-lg font-semibold text-white mb-4">Deployment Model Shift</h3>
                <div className="overflow-x-auto">
                  <table className="w-full text-sm">
                    <thead>
                      <tr className="border-b border-gray-700">
                        <th className="text-left py-2 text-gray-400">Model</th>
                        <th className="text-left py-2 text-gray-400">2024 Share</th>
                        <th className="text-left py-2 text-gray-400">Trend</th>
                        <th className="text-left py-2 text-gray-400">Notes</th>
                      </tr>
                    </thead>
                    <tbody>
                      {deploymentSegments.map((row, idx) => (
                        <tr key={idx} className="border-b border-gray-800">
                          <td className="py-2 text-white">{row.name}</td>
                          <td className="py-2 text-gray-300 font-mono">{row.share}</td>
                          <td className="py-2">
                            <span className={`px-2 py-0.5 rounded text-xs ${
                              row.trend === 'Growing' || row.trend === 'Rising' ? 'bg-green-900/50 text-green-400' :
                              row.trend === 'Declining' ? 'bg-red-900/50 text-red-400' :
                              'bg-gray-700 text-gray-400'
                            }`}>{row.trend}</span>
                          </td>
                          <td className="py-2 text-gray-400 text-xs">{row.notes}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>

              {/* Competitive Landscape */}
              <div className="mb-8">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-lg font-semibold text-white">Top 15 Vendors by Consensus (2025)</h3>
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
                      <div key={idx} className="bg-gray-800/30 rounded-lg p-4 border border-gray-800 hover:border-gray-700 transition-colors">
                        <div className="flex justify-between items-start">
                          <div className="flex-1">
                            <div className="flex items-center gap-2 mb-1">
                              <span className="font-semibold text-white">{comp.name}</span>
                              <span className="text-gray-500">•</span>
                              <span className="text-gray-400 text-sm">{comp.product}</span>
                            </div>
                            <p className="text-sm text-gray-400">{comp.focus}</p>
                          </div>
                          <div className="flex items-center gap-3 ml-4">
                            <span className="px-2 py-1 bg-gray-700/50 text-gray-300 text-xs rounded">
                              {comp.position}
                            </span>
                            <div className={`flex items-center gap-1 px-2 py-1 rounded text-xs ${statusStyle.bg} ${statusStyle.text}`}>
                              <span className={`w-1.5 h-1.5 rounded-full ${statusStyle.dot}`}></span>
                              {statusStyle.label}
                            </div>
                            <a href={comp.href} className="text-blue-400 hover:text-blue-300 text-sm">
                              →
                            </a>
                          </div>
                        </div>
                      </div>
                    );
                  })}
                </div>
                <p className="mt-4 text-xs text-gray-500">
                  Top 3 (Splunk, Microsoft, IBM/Palo Alto) hold ~70% combined market share.
                </p>
              </div>
            </section>

            {/* Market Dynamics Section */}
            <section id="motion" className="scroll-mt-24">
              <h2 className="text-2xl font-bold text-white mb-6 flex items-center gap-2">
                📈 Market Dynamics
              </h2>

              {/* Assessment */}
              <div className="mb-8 bg-gray-800/30 rounded-lg p-4 border border-gray-700">
                <div className="flex items-center gap-3">
                  <span className="text-2xl">📊</span>
                  <div>
                    <span className="font-semibold text-white">Market Assessment: </span>
                    <span className="text-gray-300">
                      Core SIEM at <span className="text-green-400">Plateau of Productivity</span>. 
                      AI-SIEM at <span className="text-yellow-400">Peak of Inflated Expectations</span>.
                      Direction: <span className="text-orange-400">Strong Consolidation</span>.
                    </span>
                  </div>
                </div>
              </div>

              {/* Hype Cycle */}
              <div className="mb-8">
                <h3 className="text-lg font-semibold text-white mb-4">Hype Cycle Positioning (2025)</h3>
                <div className="space-y-3">
                  {hypePositions.map((item, idx) => (
                    <div key={idx} className="flex items-center justify-between bg-gray-800/30 p-3 rounded-lg border border-gray-800">
                      <div>
                        <span className="text-white">{item.tech}</span>
                        <span className="text-gray-500 text-sm ml-2">— {item.note}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <span className={`w-2 h-2 rounded-full ${
                          item.status === 'hot' ? 'bg-red-400' :
                          item.status === 'rising' ? 'bg-green-400' :
                          item.status === 'emerging' ? 'bg-blue-400' :
                          item.status === 'declining' ? 'bg-orange-400' :
                          'bg-gray-400'
                        }`}></span>
                        <span className="text-gray-400 text-sm">{item.position}</span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Major Trends */}
              <div className="mb-8">
                <h3 className="text-lg font-semibold text-white mb-4">5 Major Trends (2025-2026)</h3>
                <div className="space-y-4">
                  {trends.map((trend, idx) => (
                    <div key={idx} className="bg-gray-800/30 rounded-lg p-4 border border-gray-800">
                      <h4 className="font-semibold text-white mb-2">{trend.name}</h4>
                      <p className="text-sm text-gray-400">{trend.description}</p>
                    </div>
                  ))}
                </div>
              </div>

              {/* M&A Activity */}
              <div className="mb-8">
                <h3 className="text-lg font-semibold text-white mb-4">M&A Activity (Consolidation Signals)</h3>
                <div className="overflow-x-auto">
                  <table className="w-full text-sm">
                    <thead>
                      <tr className="border-b border-gray-700">
                        <th className="text-left py-2 text-gray-400">Date</th>
                        <th className="text-left py-2 text-gray-400">Acquirer</th>
                        <th className="text-left py-2 text-gray-400">Target</th>
                        <th className="text-left py-2 text-gray-400">Value</th>
                        <th className="text-left py-2 text-gray-400">Strategic Signal</th>
                      </tr>
                    </thead>
                    <tbody>
                      {maActivity.map((row, idx) => (
                        <tr key={idx} className="border-b border-gray-800">
                          <td className="py-2 text-gray-400">{row.date}</td>
                          <td className="py-2 text-white">{row.acquirer}</td>
                          <td className="py-2 text-gray-300">{row.target}</td>
                          <td className="py-2 text-green-400 font-mono">{row.value}</td>
                          <td className="py-2 text-gray-400 text-xs">{row.signal}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
                <p className="mt-4 text-xs text-gray-500">
                  Pattern: Platform giants acquiring SIEM leaders; PE rolling up mid-market; failed to innovate = acquired.
                </p>
              </div>

              {/* Market Trajectory */}
              <div className="bg-gray-800/30 rounded-lg p-4 border border-gray-700">
                <h3 className="text-lg font-semibold text-white mb-3">What's Replacing What</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
                  <div className="flex items-center gap-3">
                    <span className="text-red-400">On-prem SIEM</span>
                    <span className="text-gray-500">→</span>
                    <span className="text-green-400">Cloud-native SIEM (SaaS)</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <span className="text-red-400">Rule-based detection</span>
                    <span className="text-gray-500">→</span>
                    <span className="text-green-400">AI/ML behavioral analytics</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <span className="text-red-400">SIEM + separate SOAR</span>
                    <span className="text-gray-500">→</span>
                    <span className="text-green-400">Unified SIEM with embedded SOAR</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <span className="text-red-400">Manual alert triage</span>
                    <span className="text-gray-500">→</span>
                    <span className="text-green-400">AI SOC agents, automated investigation</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <span className="text-red-400">Volume-based pricing</span>
                    <span className="text-gray-500">→</span>
                    <span className="text-green-400">Flat-rate/predictable pricing</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <span className="text-red-400">SIEM category</span>
                    <span className="text-gray-500">→</span>
                    <span className="text-green-400">TDIR (Gartner rebrand)</span>
                  </div>
                </div>
              </div>
            </section>

            {/* Stakeholders Section */}
            <section id="stakeholders" className="scroll-mt-24">
              <h2 className="text-2xl font-bold text-white mb-6 flex items-center gap-2">
                👥 Stakeholders
              </h2>

              {/* Analyst Consensus */}
              <div className="mb-8 bg-gray-800/30 rounded-lg p-4 border border-gray-700">
                <h3 className="text-lg font-semibold text-white mb-3">Analyst Consensus</h3>
                <div className="space-y-2 text-sm">
                  <p>
                    <span className="text-blue-400 font-semibold">Gartner:</span>
                    <span className="text-gray-300"> SIEM evolving to TDIR (Threat Detection, Investigation & Response). Prioritize real-time analytics, cloud, UEBA, SOAR integration.</span>
                  </p>
                  <p>
                    <span className="text-blue-400 font-semibold">Forrester:</span>
                    <span className="text-gray-300"> "The SIEM vs. XDR fight intensifies." AI differentiation was stark. Customer frustration with legacy cost/complexity.</span>
                  </p>
                  <p>
                    <span className="text-blue-400 font-semibold">IDC:</span>
                    <span className="text-gray-300"> Leaders excel at data connectors, deployment flexibility, AI assistants, and threat intel enrichment.</span>
                  </p>
                </div>
              </div>

              {/* Gartner Critical Requirements */}
              <div className="mb-8">
                <h3 className="text-lg font-semibold text-white mb-4">Gartner's 7 Critical SIEM Requirements (2025)</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
                  {gartnerCriticalRequirements.map((req, idx) => (
                    <div key={idx} className="flex items-center gap-2 text-sm">
                      <span className="text-blue-400">✓</span>
                      <span className="text-gray-300">{req}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* CISO JTBD */}
              <div className="mb-6">
                <h3 className="text-lg font-semibold text-white mb-4">CISO / Security Leadership</h3>
                <div className="overflow-x-auto">
                  <table className="w-full text-sm">
                    <thead>
                      <tr className="border-b border-gray-700">
                        <th className="text-left py-2 text-gray-400">Job Statement</th>
                        <th className="text-left py-2 text-gray-400">Success Metric</th>
                      </tr>
                    </thead>
                    <tbody>
                      {cisoJobs.map((row, idx) => (
                        <tr key={idx} className="border-b border-gray-800">
                          <td className="py-2 text-white">{row.job}</td>
                          <td className="py-2 text-gray-400">{row.metric}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>

              {/* SOC Manager JTBD */}
              <div className="mb-6">
                <h3 className="text-lg font-semibold text-white mb-4">SOC Manager</h3>
                <div className="overflow-x-auto">
                  <table className="w-full text-sm">
                    <thead>
                      <tr className="border-b border-gray-700">
                        <th className="text-left py-2 text-gray-400">Job Statement</th>
                        <th className="text-left py-2 text-gray-400">Success Metric</th>
                      </tr>
                    </thead>
                    <tbody>
                      {socManagerJobs.map((row, idx) => (
                        <tr key={idx} className="border-b border-gray-800">
                          <td className="py-2 text-white">{row.job}</td>
                          <td className="py-2 text-gray-400">{row.metric}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>

              {/* SOC Analyst JTBD */}
              <div className="mb-6">
                <h3 className="text-lg font-semibold text-white mb-4">SOC Analyst (Tier 1/2)</h3>
                <div className="bg-gray-800/30 rounded-lg p-4 border border-gray-700 mb-4">
                  <p className="text-gray-300 italic">
                    "85% of analysts describe SOC work as 'painful or very painful.' 25% of time wasted on false positives. 
                    Average SOC uses 20+ tools for investigation—'swivel chair security.'"
                  </p>
                </div>
                <div className="overflow-x-auto">
                  <table className="w-full text-sm">
                    <thead>
                      <tr className="border-b border-gray-700">
                        <th className="text-left py-2 text-gray-400">Job Statement</th>
                        <th className="text-left py-2 text-gray-400">Success Metric</th>
                      </tr>
                    </thead>
                    <tbody>
                      {socAnalystJobs.map((row, idx) => (
                        <tr key={idx} className="border-b border-gray-800">
                          <td className="py-2 text-white">{row.job}</td>
                          <td className="py-2 text-gray-400">{row.metric}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>

              {/* Compliance Officer JTBD */}
              <div className="mb-6">
                <h3 className="text-lg font-semibold text-white mb-4">Compliance Officer</h3>
                <div className="overflow-x-auto">
                  <table className="w-full text-sm">
                    <thead>
                      <tr className="border-b border-gray-700">
                        <th className="text-left py-2 text-gray-400">Job Statement</th>
                        <th className="text-left py-2 text-gray-400">Success Metric</th>
                      </tr>
                    </thead>
                    <tbody>
                      {complianceOfficerJobs.map((row, idx) => (
                        <tr key={idx} className="border-b border-gray-800">
                          <td className="py-2 text-white">{row.job}</td>
                          <td className="py-2 text-gray-400">{row.metric}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>

              {/* Key Pain Stats */}
              <div className="bg-red-900/20 rounded-lg p-4 border border-red-800/50">
                <h3 className="text-lg font-semibold text-red-400 mb-3">User Pain Points (Quantified)</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-3 text-sm">
                  <div className="text-gray-300">• <span className="text-white">25%</span> of analyst time wasted on false positives</div>
                  <div className="text-gray-300">• <span className="text-white">74%</span> of breaches had alerts that were ignored</div>
                  <div className="text-gray-300">• <span className="text-white">85%</span> say SOC work is "painful or very painful"</div>
                  <div className="text-gray-300">• <span className="text-white">$5.3M</span> average enterprise SOC cost annually</div>
                  <div className="text-gray-300">• <span className="text-white">20+</span> tools average for single investigation</div>
                  <div className="text-gray-300">• <span className="text-white">76%</span> of CISOs overwhelmed by alert volume</div>
                </div>
              </div>
            </section>

            {/* Economics Section */}
            <section id="economics" className="scroll-mt-24">
              <h2 className="text-2xl font-bold text-white mb-6 flex items-center gap-2">
                💰 Economics & ROI
              </h2>

              {/* ROI Metrics */}
              <div className="mb-8">
                <h3 className="text-lg font-semibold text-white mb-4">The Business Case</h3>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                  {roiMetrics.map((item, idx) => (
                    <div key={idx} className="bg-gray-800/30 rounded-lg p-4 border border-gray-700 text-center">
                      <div className="text-xl font-bold text-green-400 mb-1">{item.value}</div>
                      <div className="text-xs text-gray-400">{item.metric}</div>
                    </div>
                  ))}
                </div>
              </div>

              {/* SOC Cost Benchmarks */}
              <div className="mb-8">
                <h3 className="text-lg font-semibold text-white mb-4">SOC Cost Benchmarks</h3>
                <div className="overflow-x-auto">
                  <table className="w-full text-sm">
                    <thead>
                      <tr className="border-b border-gray-700">
                        <th className="text-left py-2 text-gray-400">SOC Level</th>
                        <th className="text-left py-2 text-gray-400">Annual Cost</th>
                        <th className="text-left py-2 text-gray-400">Technology</th>
                        <th className="text-left py-2 text-gray-400">Labor</th>
                        <th className="text-left py-2 text-gray-400">Notes</th>
                      </tr>
                    </thead>
                    <tbody>
                      {socCostBenchmarks.map((row, idx) => (
                        <tr key={idx} className="border-b border-gray-800">
                          <td className="py-2 text-white">{row.level}</td>
                          <td className="py-2 text-green-400 font-mono">{row.cost}</td>
                          <td className="py-2 text-gray-300">{row.tech}</td>
                          <td className="py-2 text-gray-300">{row.labor}</td>
                          <td className="py-2 text-gray-400 text-xs">{row.notes}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
                <p className="mt-2 text-xs text-gray-500">
                  Key: In-house 24×7 SOC requires 8-12 FTEs. Managed SOC: $120K-$360K/year for mid-market. 
                  Gartner: 33% will fail to build effective internal SOC by 2025.
                </p>
              </div>

              {/* Pricing Models */}
              <div className="mb-8">
                <h3 className="text-lg font-semibold text-white mb-4">Pricing Model Comparison</h3>
                <div className="overflow-x-auto">
                  <table className="w-full text-sm">
                    <thead>
                      <tr className="border-b border-gray-700">
                        <th className="text-left py-2 text-gray-400">Model</th>
                        <th className="text-left py-2 text-gray-400">Pros</th>
                        <th className="text-left py-2 text-gray-400">Cons</th>
                        <th className="text-left py-2 text-gray-400">Vendors</th>
                      </tr>
                    </thead>
                    <tbody>
                      {pricingModels.map((row, idx) => (
                        <tr key={idx} className="border-b border-gray-800">
                          <td className="py-2 text-white">{row.model}</td>
                          <td className="py-2 text-green-400 text-xs">{row.pros}</td>
                          <td className="py-2 text-red-400 text-xs">{row.cons}</td>
                          <td className="py-2 text-gray-400 text-xs">{row.vendors}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
                <p className="mt-2 text-xs text-gray-500">
                  Trend: Flat-rate/predictable pricing emerging as competitive differentiator against Splunk's consumption-based model.
                </p>
              </div>

              {/* TCO Warning */}
              <div className="bg-yellow-900/20 rounded-lg p-4 border border-yellow-800/50">
                <h3 className="text-lg font-semibold text-yellow-400 mb-3">TCO Considerations (Hidden Costs)</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-3 text-sm">
                  <div className="text-gray-300">• <span className="text-white">Licensing = 15-30%</span> of true TCO</div>
                  <div className="text-gray-300">• <span className="text-white">Staffing/ops = 40-50%</span> of TCO</div>
                  <div className="text-gray-300">• <span className="text-white">Integration development</span> often underestimated 50%+</div>
                  <div className="text-gray-300">• <span className="text-white">Rule tuning</span> = $1.3M+ annually for enterprise</div>
                  <div className="text-gray-300">• <span className="text-white">Skills shortage premium</span> = $1.76M higher breach costs</div>
                  <div className="text-gray-300">• <span className="text-white">Cloud TCO</span> 44% lower than on-prem (Microsoft TEI)</div>
                </div>
              </div>

              {/* ROI Framework */}
              <div className="mt-8 bg-gray-800/30 rounded-lg p-4 border border-gray-700">
                <h3 className="text-lg font-semibold text-white mb-3">ROI Calculation Framework</h3>
                <div className="text-sm text-gray-300 mb-4">
                  <p className="font-mono bg-gray-900/50 p-2 rounded mb-2">
                    SIEM ROI = (Risk Reduction Value + Operational Savings) - TCO / TCO
                  </p>
                  <p className="text-gray-400">
                    Frame as <span className="text-green-400">cost avoidance</span>, not return. 
                    Focus on measurable time savings (MTTD/MTTR × analyst rate). 
                    Preventing 1 breach can yield 200%+ ROI.
                  </p>
                </div>
              </div>
            </section>

            {/* PM Strategy Section */}
            <section id="product" className="scroll-mt-24">
              <h2 className="text-2xl font-bold text-white mb-6 flex items-center gap-2">
                🎯 PM Strategic Elements
              </h2>
              
              {/* Table Stakes */}
              <div className="mb-8">
                <h3 className="text-lg font-semibold text-white mb-4">Table Stakes (2025 Minimum Viable—Required for RFP)</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
                  {tableStakes.map((feature, idx) => (
                    <div key={idx} className="flex items-start gap-2 text-sm">
                      <span className="text-green-400 mt-0.5">✓</span>
                      <span className="text-gray-300">{feature}</span>
                    </div>
                  ))}
                </div>
                <p className="mt-4 text-xs text-yellow-400 bg-yellow-900/20 p-2 rounded border border-yellow-800/50">
                  Missing any of these = immediate RFP disqualification. These are no longer differentiators.
                </p>
              </div>

              {/* Differentiators */}
              <div className="mb-8">
                <h3 className="text-lg font-semibold text-white mb-4">Key Differentiators (What Wins Deals)</h3>
                <div className="space-y-4">
                  {differentiators.map((diff, idx) => (
                    <div key={idx} className="bg-gray-800/30 rounded-lg p-4 border border-gray-800">
                      <h4 className="font-semibold text-white mb-2">{diff.name}</h4>
                      <p className="text-sm text-gray-400">{diff.description}</p>
                    </div>
                  ))}
                </div>
              </div>

              {/* PM Strategic Considerations */}
              <div className="mb-8">
                <h3 className="text-lg font-semibold text-white mb-4">PM Strategic Considerations</h3>
                <div className="overflow-x-auto">
                  <table className="w-full text-sm">
                    <thead>
                      <tr className="border-b border-gray-700">
                        <th className="text-left py-2 text-gray-400">Strategic Area</th>
                        <th className="text-left py-2 text-gray-400">Key Questions & Considerations</th>
                      </tr>
                    </thead>
                    <tbody>
                      {pmStrategicConsiderations.map((row, idx) => (
                        <tr key={idx} className="border-b border-gray-800">
                          <td className="py-2 text-white font-medium">{row.area}</td>
                          <td className="py-2 text-gray-400">{row.consideration}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>

              {/* If I'm a PM Here Box */}
              <div className="bg-gradient-to-r from-blue-900/30 to-purple-900/30 rounded-xl p-6 border border-blue-800/50">
                <h3 className="text-lg font-semibold text-white mb-4 flex items-center gap-2">
                  💡 If I am a PM Here, I Need to Know...
                </h3>
                <div className="space-y-3 text-sm">
                  <div className="flex gap-3">
                    <span className="text-blue-400 font-semibold">1.</span>
                    <span className="text-gray-300"><span className="text-white">AI is THE battleground</span>—every vendor claims it, but differentiation is stark. Require proof in POCs.</span>
                  </div>
                  <div className="flex gap-3">
                    <span className="text-blue-400 font-semibold">2.</span>
                    <span className="text-gray-300"><span className="text-white">85% of analysts say SOC work is "painful."</span> UX/workflow optimization is the biggest opportunity.</span>
                  </div>
                  <div className="flex gap-3">
                    <span className="text-blue-400 font-semibold">3.</span>
                    <span className="text-gray-300"><span className="text-white">Platform consolidation is not optional.</span> Top 3 vendors hold 70%+ share. Standalone faces extinction.</span>
                  </div>
                  <div className="flex gap-3">
                    <span className="text-blue-400 font-semibold">4.</span>
                    <span className="text-gray-300"><span className="text-white">Predictable pricing wins deals.</span> Volume-based creates "consumption anxiety." Flat-rate is differentiator.</span>
                  </div>
                  <div className="flex gap-3">
                    <span className="text-blue-400 font-semibold">5.</span>
                    <span className="text-gray-300"><span className="text-white">Average SIEM "shelf life" is 18-24 months.</span> Time-to-value (&lt;30 days) is critical for retention.</span>
                  </div>
                  <div className="flex gap-3">
                    <span className="text-blue-400 font-semibold">6.</span>
                    <span className="text-gray-300"><span className="text-white">SIEM vs. XDR is a false choice.</span> Market is converging—evaluate as unified capability.</span>
                  </div>
                  <div className="flex gap-3">
                    <span className="text-blue-400 font-semibold">7.</span>
                    <span className="text-gray-300"><span className="text-white">Security Data Lakes are strategic.</span> Own the data layer or integrate? Critical architecture decision.</span>
                  </div>
                  <div className="flex gap-3">
                    <span className="text-blue-400 font-semibold">8.</span>
                    <span className="text-gray-300"><span className="text-white">Managed SIEM growing at 22% CAGR.</span> Multi-tenancy is strategic for MSSP/MDR channel.</span>
                  </div>
                </div>
              </div>
            </section>

            {/* Strategic Theses Section */}
            <section id="theses" className="scroll-mt-24">
              <h2 className="text-2xl font-bold text-white mb-6 flex items-center gap-2">
                🔮 Strategic Theses
              </h2>
              <p className="text-gray-400 mb-6">
                Three structural shifts reshaping this market. Not incremental changes—fundamental rewirings of where value is created and captured.
              </p>
              <div className="space-y-6">
                {theses.map((thesis) => (
                  <div 
                    key={thesis.id} 
                    className={`bg-gray-800/30 rounded-xl p-6 border border-gray-800 border-l-4 ${getThesisAccent(thesis.color)}`}
                  >
                    <div className="flex items-start justify-between mb-4">
                      <h3 className="text-lg font-semibold text-white">{thesis.title}</h3>
                      <div className="flex items-center gap-2">
                        <span className={`px-2 py-0.5 rounded text-xs border ${getConfidenceColor(thesis.confidence)}`}>
                          {thesis.confidence}
                        </span>
                        <span className="text-gray-500 text-sm">{thesis.timeframe}</span>
                      </div>
                    </div>
                    
                    <p className="text-gray-300 mb-4">{thesis.claim}</p>
                    
                    <div className="mb-4">
                      <span className="text-xs text-gray-500 uppercase tracking-wider">EVIDENCE</span>
                      <ul className="mt-2 space-y-1">
                        {thesis.evidence.map((item, idx) => (
                          <li key={idx} className="text-sm text-gray-400 flex items-start gap-2">
                            <span className="text-blue-400">•</span>
                            {item}
                          </li>
                        ))}
                      </ul>
                    </div>
                    <div className="text-sm bg-gray-900/50 rounded p-3">
                      <span className="text-blue-400 font-semibold">Implication: </span>
                      <span className="text-gray-300">{thesis.implication}</span>
                    </div>
                  </div>
                ))}
              </div>

              {/* Synthesis */}
              <div className="mt-8 bg-gray-800/30 rounded-lg p-4 border border-gray-700">
                <h3 className="text-lg font-semibold text-white mb-3">How These Connect</h3>
                <div className="space-y-2 text-sm">
                  <p className="text-gray-300">
                    <span className="text-blue-400">SIEM reinvention</span> → forces evaluation as → <span className="text-green-400">unified platform capability</span>
                  </p>
                  <p className="text-gray-300">
                    <span className="text-blue-400">AI becomes battleground</span> → winners demonstrate → <span className="text-green-400">measurable outcomes, not features</span>
                  </p>
                  <p className="text-gray-300">
                    <span className="text-blue-400">Platform consolidation</span> → creates → <span className="text-green-400">oligopoly with 3-5 dominant players</span>
                  </p>
                </div>
              </div>
            </section>

            {/* Recommendations */}
            <section className="scroll-mt-24">
              <h2 className="text-2xl font-bold text-white mb-6 flex items-center gap-2">
                🎯 Recommendations
              </h2>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {/* For Buyers */}
                <div className="bg-gray-800/30 rounded-xl p-6 border border-gray-800">
                  <div className="flex items-center gap-2 mb-4">
                    <span className="w-8 h-8 bg-blue-900/50 rounded-full flex items-center justify-center text-blue-400 font-semibold">B</span>
                    <span className="font-semibold text-white">For Enterprise Buyers</span>
                  </div>
                  <ul className="space-y-2 text-sm text-gray-300">
                    <li>• Evaluate SIEM + XDR as unified capability, not either/or</li>
                    <li>• Require AI proof in POCs—measure false positive reduction</li>
                    <li>• Prioritize predictable pricing over volume-based models</li>
                    <li>• Assess vendor viability—standalone faces acquisition risk</li>
                    <li>• Target &lt;30 days time-to-value in deployment requirements</li>
                    <li>• Consider managed SIEM/SOC if lacking 8-12 FTE capacity</li>
                  </ul>
                </div>

                {/* For Vendors */}
                <div className="bg-gray-800/30 rounded-xl p-6 border border-gray-800">
                  <div className="flex items-center gap-2 mb-4">
                    <span className="w-8 h-8 bg-purple-900/50 rounded-full flex items-center justify-center text-purple-400 font-semibold">V</span>
                    <span className="font-semibold text-white">For Vendors / Product Leaders</span>
                  </div>
                  <ul className="space-y-2 text-sm text-gray-300">
                    <li>• AI differentiation requires measurable outcomes, not marketing</li>
                    <li>• Analyst experience (AX) is the biggest opportunity—85% say work is "painful"</li>
                    <li>• Build migration tools—huge installed base on legacy SIEM</li>
                    <li>• Predictable pricing is competitive weapon against incumbents</li>
                    <li>• Expand platform (XDR/SOAR/TI/Data Lake) or face absorption</li>
                    <li>• MSSP/MDR channel critical—managed SIEM growing 22% CAGR</li>
                  </ul>
                </div>
              </div>
            </section>

            {/* Resources */}
            <section className="scroll-mt-24">
              <h2 className="text-2xl font-bold text-white mb-6 flex items-center gap-2">
                📎 Resources
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <a href="#" className="bg-gray-800/30 rounded-lg p-4 border border-gray-800 hover:border-gray-700 transition-colors flex items-center gap-3">
                  <span className="text-2xl">📄</span>
                  <div>
                    <div className="font-semibold text-white">Full SIEM Market Guide</div>
                    <div className="text-sm text-gray-400">Complete SRP analysis (PDF)</div>
                  </div>
                </a>
                <a href="#" className="bg-gray-800/30 rounded-lg p-4 border border-gray-800 hover:border-gray-700 transition-colors flex items-center gap-3">
                  <span className="text-2xl">📊</span>
                  <div>
                    <div className="font-semibold text-white">Vendor Comparison Matrix</div>
                    <div className="text-sm text-gray-400">Side-by-side feature analysis</div>
                  </div>
                </a>
              </div>
            </section>

          </div>
        </div>

        {/* Footer */}
        <div className="mt-16 pt-8 border-t border-gray-800 text-center text-sm text-gray-500">
          <p>Analysis by Andy Simko • CISSP • GPEN • CISA • GSNA • HCSFP • PMC-Level III</p>
          <p className="mt-1">15+ years in cybersecurity • Methodology: Systematic Research Process (SRP)</p>
        </div>

      </main>
    </div>
  );
};

export default SIEMPage;
