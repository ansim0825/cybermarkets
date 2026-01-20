"use client";
import React, { useState } from 'react';
import { Logo } from '@/components/Logo';

const AIDRPage = () => {
  const [activeSection, setActiveSection] = useState('overview');

  // SecOps & Analytics pillar sub-segments
  const subSegments = [
    { id: 'aidr', name: 'AIDR', active: true, href: '/pillars/secops/aidr' },
    { id: 'siem', name: 'SIEM', active: false, href: '#' },
    { id: 'soar', name: 'SOAR', active: false, href: '#' },
    { id: 'xdr', name: 'XDR', active: false, href: '#' },
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
    { name: 'Identity', primary: false },
    { name: 'Endpoint & Workload', primary: false },
    { name: 'Network & Edge', primary: false },
  ];

  const keyInsights = [
    { stat: '1-5%', label: 'Market penetration (Innovation Trigger)' },
    { stat: '40%', label: 'Alerts never investigated today' },
    { stat: '4M+', label: 'Global cybersecurity talent shortage' },
    { stat: '<10 min', label: 'Target investigation time' },
  ];

  const marketSizing = [
    { source: 'Grand View Research', val2024: '$22.56B', projection: '$322B (2033)', cagr: '34.4%' },
    { source: 'ResearchAndMarkets', val2024: '~$17B', projection: '$227.74B (2032)', cagr: '34%' },
    { source: 'Market.us', val2024: '$738M', projection: '$173B (2034)', cagr: '39.7%' },
    { source: 'Academic Survey', val2024: '$24.8B', projection: '$146.5B (2034)', cagr: '—' },
  ];

  const marketSubSegments = [
    'Autonomous Alert Triage',
    'Autonomous Investigation',
    'Autonomous Response/Remediation',
    'Autonomous Threat Hunting',
    'AI-Powered Detection Engineering',
    'Multi-Agent Orchestration',
  ];

  const architectureTypes = [
    { name: 'Black-Box Overlays', description: 'AI layer on top of existing tools, limited transparency', status: 'losing' },
    { name: 'Workflow Emulators', description: 'Replicate analyst workflows with AI', status: 'transitional' },
    { name: 'Integrated AI SOC Platforms', description: 'Full-stack, AI-native from ground up', status: 'winning' },
  ];

  // Top vendors by consensus (Tier 1: Platform Incumbents)
  const tier1Vendors = [
    { 
      name: 'Microsoft', 
      product: 'Security Copilot + Sentinel',
      position: 'Platform Incumbent', 
      focus: '78T daily signals. Phishing Triage Agent (40% resolution time reduction). MCP server for agentic tools.',
      status: 'in-progress',
      href: '/pillars/secops/aidr/companies/microsoft'
    },
    { 
      name: 'CrowdStrike', 
      product: 'Charlotte AI + Falcon Next-Gen SIEM',
      position: 'Platform Leader', 
      focus: 'Agentic SOC vision. Charlotte AI AgentWorks. Pangea acquisition (AI detection/response).',
      status: 'in-progress',
      href: '/pillars/secops/aidr/companies/crowdstrike'
    },
    { 
      name: 'Palo Alto Networks', 
      product: 'Cortex XSIAM + AgentiX',
      position: 'Platform Leader', 
      focus: 'Fastest to $1B+ bookings. AgentiX framework (Oct 2025). Trained on 1.2B playbook executions.',
      status: 'in-progress',
      href: '/pillars/secops/aidr/companies/paloalto'
    },
    { 
      name: 'Google', 
      product: 'Security Operations + Agentic SOC',
      position: 'Platform Leader', 
      focus: 'Alert Triage agent. Unified defense platform. Wiz acquisition ($32B pending).',
      status: 'in-progress',
      href: '/pillars/secops/aidr/companies/google'
    },
    { 
      name: 'SentinelOne', 
      product: 'Purple AI',
      position: 'Unified Platform', 
      focus: 'Autonomous SOC for multi-cloud. Agentic AI analyst. 63% faster detection claimed.',
      status: 'in-progress',
      href: '/pillars/secops/aidr/companies/sentinelone'
    },
    { 
      name: 'Cisco/Splunk', 
      product: 'Enterprise Security + SOAR',
      position: 'Platform Leader', 
      focus: 'SnapAttack acquisition (Jan 2025). Agentic AI integration. Premier & Essentials tiers.',
      status: 'in-progress',
      href: '/pillars/secops/aidr/companies/splunk'
    },
  ];

  // Tier 2: Pure-Play Agentic SOC Startups
  const tier2Vendors = [
    { 
      name: 'Torq', 
      product: 'HyperSOC',
      position: 'Hyperautomation Leader', 
      focus: '$332M raised, $1.2B valuation (Jan 2026). GigaOm closest to bullseye. 300% revenue growth.',
      status: 'in-progress',
      href: '/pillars/secops/aidr/companies/torq'
    },
    { 
      name: 'Prophet Security', 
      product: 'Agentic AI SOC Platform',
      position: 'Investigation Specialist', 
      focus: '$30M (Jul 2025). 1M+ autonomous investigations. 96% false positive reduction claimed.',
      status: 'in-progress',
      href: '/pillars/secops/aidr/companies/prophet'
    },
    { 
      name: 'Seven AI (7AI)', 
      product: 'Autonomous Security Platform',
      position: 'Continuous Learning', 
      focus: '$130M Series A. DXC Technology partnership. Continuous adaptive threat response.',
      status: 'in-progress',
      href: '/pillars/secops/aidr/companies/7ai'
    },
    { 
      name: 'Dropzone AI', 
      product: 'Pre-trained AI SOC Analyst',
      position: 'Investigation Specialist', 
      focus: 'Gartner-referenced. 30-min setup via API. 3-10 min investigations with 99.9% accuracy.',
      status: 'in-progress',
      href: '/pillars/secops/aidr/companies/dropzone'
    },
    { 
      name: 'Stellar Cyber', 
      product: 'Open XDR + Agentic AI',
      position: 'Mid-Market Focus', 
      focus: 'Multi-agent system architecture. SIEM-agnostic. Mid-market accessibility.',
      status: 'in-progress',
      href: '/pillars/secops/aidr/companies/stellarcyber'
    },
    { 
      name: 'Exaforce', 
      product: 'Exabots (Tier 1-3 Analyst Agents)',
      position: 'Tiered Agents', 
      focus: 'GigaOm Leader + Outperformer. Specialized agents per analyst tier.',
      status: 'in-progress',
      href: '/pillars/secops/aidr/companies/exaforce'
    },
  ];

  // Tier 3: Emerging/Specialized
  const tier3Vendors = [
    { 
      name: 'Radiant Security', 
      product: 'Agentic AI SOC',
      position: 'Emerging', 
      focus: '90% false positive reduction. 100+ data source integrations.',
      status: 'pending',
      href: '#'
    },
    { 
      name: 'Intezer', 
      product: 'Forensic AI SOC',
      position: 'Forensic Focus', 
      focus: 'Agent-to-agent workflows. Forensic evidence collaboration.',
      status: 'pending',
      href: '#'
    },
    { 
      name: 'Sekoia.io', 
      product: 'Full-spectrum AI SOC',
      position: 'European Player', 
      focus: 'Native CTI integration. Full SOC automation.',
      status: 'pending',
      href: '#'
    },
    { 
      name: 'Conifers.ai', 
      product: 'CognitiveSOC',
      position: 'Emerging', 
      focus: 'Tier-2/3 investigation depth. Institutional knowledge embedding.',
      status: 'pending',
      href: '#'
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
    { name: 'SOAR → SecOps Automation Transition', description: 'GigaOm renamed "SOAR Radar" to "SecOps Automation Radar." Legacy SOAR declared obsolete. Brittle playbooks replaced by LLM-powered reasoning.' },
    { name: 'Copilot → Agentic AI Architecture', description: '2024 was copilots (reactive, query-based). 2025-2026 is agentic AI (autonomous, goal-driven). Multi-agent architectures emerging.' },
    { name: 'Platform Consolidation at Enterprise Tier', description: 'ServiceNow $11.6B security acquisition spree. XSIAM fastest to $1B+. Platform incumbents building "control tower" approaches.' },
    { name: 'Non-Human Identity (NHI) Security', description: 'AI agents create new insider threat class. Machines outnumber humans 82:1. "Agentic GRC + Security" emerging as governance layer.' },
    { name: 'Graduated/Gated Autonomy Models', description: 'Not full autonomy but human-in-the-loop with increasing delegation. "Bounded autonomy"—systems ask permission for high-risk actions.' },
  ];

  const hypePositions = [
    { tech: 'AI SOC Agents', position: 'Innovation Trigger', status: 'emerging', note: '1-5% adoption, Gartner June 2025' },
    { tech: 'Cybersecurity AI Assistants', position: 'Peak of Inflated Expectations', status: 'hot', note: 'Climbing toward peak' },
    { tech: 'Agentic SecOps Automation', position: 'Innovation Trigger', status: 'emerging', note: 'Category renamed 2025' },
    { tech: 'AI in EDR', position: 'Plateau of Productivity', status: 'stable', note: 'Mature capability' },
  ];

  const maActivity = [
    { date: 'Jan 2026', acquirer: 'Torq', target: 'Revrod', value: 'Undisclosed', signal: 'Multi-agent RAG capabilities' },
    { date: 'Dec 2025', acquirer: 'ServiceNow', target: 'Armis + Moveworks + Veza', value: '$11.6B', signal: 'AI Control Tower strategy' },
    { date: 'Sept 2025', acquirer: 'CrowdStrike', target: 'Pangea', value: '$260M', signal: 'AI/LLM security' },
    { date: 'Sept 2025', acquirer: 'Cisco', target: 'SnapAttack', value: 'Undisclosed', signal: 'Detection engineering' },
    { date: '2025', acquirer: 'Google', target: 'Wiz', value: '$32B', signal: 'Cloud security dominance (pending)' },
  ];

  const fundingActivity = [
    { vendor: 'Torq', round: 'Series D', amount: '$140M', valuation: '$1.2B', date: 'Jan 2026' },
    { vendor: '7AI', round: 'Series A', amount: '$130M', valuation: '—', date: '2025' },
    { vendor: 'WitnessAI', round: 'Series B', amount: '$58M', valuation: '—', date: '2025' },
    { vendor: 'Novee', round: 'Stealth', amount: '$51.5M', valuation: '—', date: '2025' },
    { vendor: 'Prophet Security', round: 'Series A', amount: '$30M', valuation: '—', date: 'Jul 2025' },
    { vendor: 'Lumia Security', round: 'Seed', amount: '$18M', valuation: '—', date: 'Dec 2025' },
  ];

  const cisoJobs = [
    { job: 'Reduce breach risk without scaling headcount linearly', metric: 'Measurable risk reduction, CFO-friendly ROI, audit-ready compliance' },
    { job: 'Demonstrate security program value to the board', metric: 'Cost per investigation, MTTR reduction, coverage metrics' },
    { job: 'Get ahead of AI-powered threats', metric: 'AI threat detection rates, speed parity with attackers' },
  ];

  const socManagerJobs = [
    { job: 'Keep my team productive without burning them out', metric: '<10 min investigation time, 90%+ alert coverage, team retention' },
    { job: 'Make junior analysts productive faster', metric: 'Time to competency, reduced training burden' },
    { job: 'Prove SOC value with real metrics', metric: 'MTTA, MTTR, auto-resolution rate, coverage %' },
  ];

  const analystJobs = [
    { job: 'Stop wasting time on false positives', metric: '50%+ time reduction on false positives, meaningful investigations' },
    { job: 'Get full context without tool-hopping', metric: 'Single pane of glass, automated enrichment' },
    { job: 'Career growth beyond Tier-1 triage', metric: 'Upskilling to Tier-2/3 work, threat hunting time' },
  ];

  const detectionEngineerJobs = [
    { job: 'Get feedback on which detections are working', metric: 'Feedback loops, suppression logic, detection analytics' },
    { job: 'Tune rules without manual analysis', metric: 'Auto-tuning suggestions, FP rate by rule' },
  ];

  const tableStakes = [
    'Autonomous Tier-1 alert classification and prioritization',
    'Automated context gathering from connected tools (SIEM, EDR, identity)',
    'Zero-shot/few-shot learning (no customer data for model training)',
    'API-first architecture; minimum 50+ connectors',
    'Transparent reasoning trails showing tool calls and why',
    'Graduated autonomy controls; analyst override capability',
    'Decision-ready investigation reports with executive summaries',
    'Cloud-native; <30-day implementation; no playbook/code required',
    'Sub-10-minute investigation time benchmark',
    '24/7 coverage without analyst supervision',
    'SOC 2 Type II minimum; GDPR compliance',
    'Complete audit logs for compliance and forensics',
  ];

  const differentiators = [
    { name: 'Agentic vs. Copilot Architecture', description: 'Autonomous agents execute without prompts vs. copilots require human initiation. The architectural decision that defines market position.' },
    { name: 'Multi-Tier Investigation Depth', description: 'Tier-1 triage is table stakes. Handling complex Tier-2/3 investigations (lateral movement, EDR analysis, phishing) is competitive.' },
    { name: 'Institutional Knowledge Embedding', description: 'AI learns org-specific risk profiles, policies, and detection engineering. Survives analyst turnover—creates stickiness.' },
    { name: 'Speed + Accuracy Combination', description: '3-10 min investigations with 99%+ accuracy. Speed without sacrificing quality is the benchmark.' },
    { name: 'Non-Disruptive Integration', description: 'Augments existing tools without rip-and-replace. SIEM-agnostic architecture is competitive advantage.' },
    { name: 'Third-Party ROI Validation', description: 'Forrester TEI or similar independent validation. XSIAM\'s 257% ROI study gives enterprise credibility advantage.' },
    { name: '92%+ Auto-Resolution Rate', description: 'Proves autonomous value. Reduces MTTA to seconds. Leading AI SOC solutions achieve this benchmark.' },
  ];

  const roiMetrics = [
    { metric: 'MTTD reduction', value: '90%+' },
    { metric: 'MTTR reduction', value: '75-90%' },
    { metric: 'Investigation time reduction', value: '85%' },
    { metric: 'XSIAM 3-year ROI (Forrester TEI)', value: '257%' },
  ];

  const vendorPricing = [
    { vendor: 'Dropzone AI', model: 'Per-investigation', price: '~$36K/year', notes: '4,000 AI investigations included' },
    { vendor: 'Prophet Security', model: 'Consumption-based', price: '~$50K', notes: '5,000 investigations' },
    { vendor: 'Torq HyperSOC', model: 'Platform license', price: '~$60K+', notes: 'No-code workflows, enterprise focus' },
    { vendor: 'XSIAM', model: 'Platform + data ingestion', price: 'Enterprise-tier', notes: '73% savings vs. traditional claimed' },
  ];

  const tcoFactors = [
    { factor: 'Integration Complexity', impact: '30-40% budget overruns in Year 1', notes: 'Data silos, custom connectors, auth/access' },
    { factor: 'Enterprise vs. Advertised Price', impact: '3-5x advertised subscription', notes: 'Integration, customization, infrastructure' },
    { factor: 'AI Cost Misestimation', impact: '85% of orgs underestimate by >10%', notes: 'Data prep, model retraining often unplanned' },
    { factor: 'Change Management', impact: 'Can exceed technical costs by 3:1', notes: 'Training, workflow redesign, adoption friction' },
    { factor: 'Model Drift/Retraining', impact: '15-25% additional compute', notes: '91% of ML models degrade over time' },
  ];

  const theses = [
    {
      id: 1,
      title: 'Agentic Architecture Wins—Copilots Are Already Obsolete',
      timeframe: '2025-2027',
      confidence: 'High',
      color: 'green',
      claim: 'By 2027, prompt-based copilots will be considered legacy technology. The market is rapidly shifting to autonomous agents that plan, reason, and execute without human initiation. "Building a copilot in an agentic market" is already a red flag.',
      evidence: ['Multi-agent architectures emerging as standard', 'Gartner: AI systems will handle 15% of day-to-day decisions by 2028 (up from ~0% in 2024)', 'Torq, Prophet, 7AI all positioning as agentic-first', 'Microsoft, CrowdStrike, Palo Alto all launching agentic frameworks'],
      implication: 'If your roadmap still centers on copilot/assistant paradigms, you\'re building for yesterday\'s market. Evaluate vendors on autonomous execution capability.',
    },
    {
      id: 2,
      title: 'Human-Augmented Autonomy Is the Consensus—Not Full Automation',
      timeframe: '2025-2028',
      confidence: 'High',
      color: 'purple',
      claim: 'Gartner\'s "There Will Never Be an Autonomous SOC" framing is correct. The winning model is graduated autonomy with human oversight—not full automation. Trust ladders, explainability, and approval gates are non-negotiable.',
      evidence: ['"Bounded autonomy" with approval for high-risk actions', 'By 2028, 40% of CIOs will demand "Guardian Agents" to oversee AI agent actions', '42% of cybersecurity leaders piloting AI assistants; 46% planning within year', 'Explainability cited as critical differentiator across all analyst reports'],
      implication: 'Don\'t position for "fully autonomous SOC"—position for "human-augmented autonomy." Build trust metrics and graduated autonomy scaling into product.',
    },
    {
      id: 3,
      title: 'Platform Consolidation Creates a Barbell Market',
      timeframe: '2025-2028',
      confidence: 'Medium-High',
      color: 'orange',
      claim: 'The market is forming a barbell: massive platform consolidation at enterprise tier (Microsoft, CrowdStrike, Palo Alto, Google) + explosive startup formation at innovation tier. 50+ Agentic SOC startups, but only 3-5 will survive independently.',
      evidence: ['ServiceNow $11.6B security acquisition spree in 2025', '$8.5B funding across 175 AI security companies (24 months)', 'Omdia tracking 50+ Agentic SOC startups', 'XSIAM consolidated up to 21 tools per deployment'],
      implication: 'Pure-play startups must either (a) be acquired, (b) dominate a niche, or (c) achieve platform scale. "Good product" is not a survival strategy.',
    },
  ];

  const redFlags = [
    'Building a copilot in an agentic market',
    'Requiring playbooks/code for basic operation',
    'Vendor lock-in (SIEM, EDR, cloud)',
    'Black-box AI without explainability',
    'Pricing tied to data volume (SIEM model)',
    'Ignoring the trust ladder (jumping straight to full autonomy)',
    'No ROI evidence or third-party validation',
    'Engineering-intensive setup (weeks of professional services)',
  ];

  const metricsToTrack = [
    { metric: 'MTTA (Mean Time to Acknowledge)', target: 'Seconds', note: 'AI should reduce to near-instant' },
    { metric: 'MTTR (Mean Time to Respond)', target: '75-90% reduction', note: 'From hours to minutes' },
    { metric: 'Investigation Time', target: '<10 minutes', note: 'Dropzone benchmark' },
    { metric: 'Auto-Resolution Rate', target: '92%+', note: 'Leading solutions achieve this' },
    { metric: 'Alert Coverage', target: '100%', note: 'vs. 40% never investigated today' },
    { metric: 'Time-to-Value', target: '<90 days', note: 'Ideally 30 min to first investigation' },
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
        <div className="max-w-7xl mx-auto px-4 py-3">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2 text-sm">
              <a href="/" className="text-blue-400 hover:text-blue-300">
                <Logo className="h-6 w-6" />
              </a>
              <span className="text-gray-600">/</span>
              <a href="/pillars/secops" className="text-blue-400 hover:text-blue-300">SecOps & Analytics</a>
            </div>
            <div className="flex items-center gap-6 text-sm">
              <a href="/pillars" className="text-gray-400 hover:text-white">Pillars</a>
              <a href="/theses" className="text-gray-400 hover:text-white">Theses</a>
              <a href="/about" className="text-gray-400 hover:text-white">About</a>
            </div>
          </div>
        </div>
      </nav>

      <div className="max-w-7xl mx-auto px-4 py-6">
        
        {/* Sub-segment Navigation */}
        <div className="mb-8">
          <div className="flex flex-wrap gap-2 mb-4">
            {subSegments.map((seg) => (
              <a
                key={seg.id}
                href={seg.href}
                className={`px-3 py-1.5 rounded-full text-sm transition-all ${
                  seg.active
                    ? 'bg-blue-900/50 text-blue-400 border border-blue-700'
                    : 'bg-gray-800/50 text-gray-500 border border-gray-700 hover:border-gray-600 hover:text-gray-400'
                }`}
              >
                {seg.active && <span className="mr-1.5">●</span>}
                {seg.name}
              </a>
            ))}
          </div>
          
          {/* Related pillars */}
          <div className="flex items-center gap-2 text-xs text-gray-500">
            <span>Also touches:</span>
            {relatedPillars.map((pillar, idx) => (
              <span
                key={idx}
                className={`px-2 py-0.5 rounded ${
                  pillar.primary ? 'bg-blue-900/30 text-blue-400' : 'bg-gray-800/50 text-gray-500'
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
            <h1 className="text-4xl font-bold text-white">AI Detection & Response (AIDR)</h1>
            <span className="px-2 py-1 bg-purple-900/50 text-purple-400 text-xs font-medium rounded border border-purple-700">
              PRE-CATEGORY MARKET
            </span>
          </div>
          <p className="text-xl text-gray-400 max-w-3xl">
            The emerging $17-25B market where autonomous AI agents replace Tier-1 SOC functions—still at 1-5% penetration with no dedicated analyst evaluations
          </p>
          
          <div className="flex items-center gap-4 mt-4 text-sm text-gray-500">
            <span>Last updated: January 2026</span>
            <span>•</span>
            <span>Methodology: SRP Framework</span>
            <span>•</span>
            <span className="flex items-center gap-1">
              <span className="w-2 h-2 rounded-full bg-purple-400 animate-pulse"></span>
              Innovation Trigger stage
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
              <div className="text-2xl font-bold text-blue-400">{insight.stat}</div>
              <div className="text-xs text-gray-500 mt-1">{insight.label}</div>
            </div>
          ))}
        </div>

        {/* The Core Insight Callout */}
        <div className="bg-gradient-to-r from-purple-900/30 to-blue-900/30 border border-purple-700/50 rounded-xl p-6 mb-8">
          <div className="flex items-start gap-4">
            <div className="text-3xl">🤖</div>
            <div>
              <h3 className="text-lg font-semibold text-white mb-2">The Agentic Shift</h3>
              <p className="text-gray-300">
                This is <span className="text-purple-400 font-semibold">NOT a mature market</span>. 
                AIDR is at Innovation Trigger with 1-5% penetration. There's no dedicated Gartner Magic Quadrant 
                or Forrester Wave. The terminology is still fluid—"Agentic SOC," "AI SOC," "Autonomous SOC," 
                "SecOps Automation" are all in use. <span className="text-blue-400 font-semibold">This is category creation, not category competition.</span>
              </p>
            </div>
          </div>
        </div>

        {/* Main Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          
          {/* Left Sidebar - SRP Navigation */}
          <div className="lg:col-span-1">
            <div className="sticky top-20 space-y-4">
              <div className="bg-gray-900/50 border border-gray-800 rounded-lg p-4">
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

              {/* Copilot vs Agentic Visual */}
              <div className="bg-gray-900/50 border border-gray-800 rounded-lg p-4">
                <h3 className="text-sm font-semibold text-gray-400 mb-3">Architecture Paradigm</h3>
                <div className="space-y-2 text-xs">
                  <div className="flex items-center gap-2 p-2 bg-red-900/20 border border-red-800/50 rounded">
                    <span className="text-red-400">✗</span>
                    <div>
                      <div className="text-red-400 font-medium">Copilot (Legacy)</div>
                      <div className="text-gray-500">Reactive, prompt-driven</div>
                    </div>
                  </div>
                  <div className="flex items-center gap-2 p-2 bg-green-900/20 border border-green-800/50 rounded">
                    <span className="text-green-400">✓</span>
                    <div>
                      <div className="text-green-400 font-medium">Agentic (Winning)</div>
                      <div className="text-gray-500">Autonomous, goal-driven</div>
                    </div>
                  </div>
                </div>
                <p className="text-gray-500 text-xs mt-3 italic">
                  "Building a copilot in an agentic market" = red flag
                </p>
              </div>
            </div>
          </div>

          {/* Main Content Area */}
          <div className="lg:col-span-3 space-y-12">
            
            {/* Overview Section */}
            <section id="overview" className="scroll-mt-24">
              <h2 className="text-2xl font-bold text-white mb-4 flex items-center gap-2">
                <span>📋</span> Overview
              </h2>
              <div className="prose prose-invert max-w-none">
                <p className="text-gray-300 mb-4">
                  AIDR (AI Detection & Response) is <span className="text-purple-400 font-medium">not yet a formalized market category</span> like EDR, NDR, or XDR. 
                  Rather, it represents an emerging capability layer manifesting across the security stack under various names: 
                  Agentic AI Security, Autonomous SOC, AI-Native Security Operations, and AI SOC Analyst.
                </p>
                <p className="text-gray-300 mb-4">
                  The distinction between "AI as a feature" (which most security products now have) and "AI Detection & Response" 
                  lies in <span className="text-blue-400 font-medium">autonomy</span>. Agentic AI introduces persistent state, 
                  tool use, and self-directed control loops that enable planning, action, and revision across long-lived, 
                  multi-step workflows—a fundamental shift from isolated inference to autonomous agency.
                </p>
                <div className="bg-gray-900/50 border border-gray-800 rounded-lg p-4 mt-6">
                  <h4 className="text-white font-semibold mb-3">Why Organizations Invest in AIDR</h4>
                  <ul className="space-y-2 text-sm">
                    <li className="flex items-start gap-2">
                      <span className="text-red-400 mt-1">1.</span>
                      <div>
                        <span className="text-white font-medium">Alert Fatigue Crisis:</span>
                        <span className="text-gray-400"> 3,000+ alerts/day across 28+ tools. Only 4-10% investigated. AI-driven phishing up 703%.</span>
                      </div>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-red-400 mt-1">2.</span>
                      <div>
                        <span className="text-white font-medium">Talent Shortage:</span>
                        <span className="text-gray-400"> 4M+ global cybersecurity workforce shortage. Cannot hire out of the problem.</span>
                      </div>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-red-400 mt-1">3.</span>
                      <div>
                        <span className="text-white font-medium">Speed Gap:</span>
                        <span className="text-gray-400"> Attackers operate at machine speed; defenders at human speed. Salt Typhoon undetected 1-2 years.</span>
                      </div>
                    </li>
                  </ul>
                </div>
              </div>
            </section>

            {/* Market Structure Section */}
            <section id="structure" className="scroll-mt-24">
              <h2 className="text-2xl font-bold text-white mb-4 flex items-center gap-2">
                <span>🏗️</span> Market Structure
              </h2>
              
              {/* Market Sizing */}
              <div className="bg-gray-900/50 border border-gray-800 rounded-lg p-4 mb-6">
                <h3 className="text-white font-semibold mb-3">Market Size & Growth (Wide Variance)</h3>
                <div className="overflow-x-auto">
                  <table className="w-full text-sm">
                    <thead>
                      <tr className="text-gray-500 border-b border-gray-800">
                        <th className="text-left py-2">Source</th>
                        <th className="text-left py-2">2024</th>
                        <th className="text-left py-2">Projection</th>
                        <th className="text-left py-2">CAGR</th>
                      </tr>
                    </thead>
                    <tbody>
                      {marketSizing.map((row, idx) => (
                        <tr key={idx} className="border-b border-gray-800/50">
                          <td className="py-2 text-gray-300">{row.source}</td>
                          <td className="py-2 text-blue-400">{row.val2024}</td>
                          <td className="py-2 text-gray-400">{row.projection}</td>
                          <td className="py-2 text-green-400">{row.cagr}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
                <p className="text-xs text-gray-500 mt-3">
                  Note: Wide variance ($738M vs $22B) reflects definitional inconsistency—some include all AI-in-security, others only autonomous/agentic capabilities.
                </p>
              </div>

              {/* Architecture Types */}
              <div className="bg-gray-900/50 border border-gray-800 rounded-lg p-4 mb-6">
                <h3 className="text-white font-semibold mb-3">Architecture Types (Per SACR 2025)</h3>
                <div className="space-y-3">
                  {architectureTypes.map((arch, idx) => (
                    <div 
                      key={idx} 
                      className={`p-3 rounded-lg border ${
                        arch.status === 'winning' ? 'bg-green-900/20 border-green-800/50' :
                        arch.status === 'losing' ? 'bg-red-900/20 border-red-800/50' :
                        'bg-yellow-900/20 border-yellow-800/50'
                      }`}
                    >
                      <div className="flex items-center justify-between">
                        <span className={`font-medium ${
                          arch.status === 'winning' ? 'text-green-400' :
                          arch.status === 'losing' ? 'text-red-400' :
                          'text-yellow-400'
                        }`}>{arch.name}</span>
                        <span className={`text-xs px-2 py-0.5 rounded ${
                          arch.status === 'winning' ? 'bg-green-900/50 text-green-400' :
                          arch.status === 'losing' ? 'bg-red-900/50 text-red-400' :
                          'bg-yellow-900/50 text-yellow-400'
                        }`}>
                          {arch.status === 'winning' ? 'WINNING' : arch.status === 'losing' ? 'LOSING' : 'TRANSITIONAL'}
                        </span>
                      </div>
                      <p className="text-sm text-gray-400 mt-1">{arch.description}</p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Sub-segments */}
              <div className="bg-gray-900/50 border border-gray-800 rounded-lg p-4 mb-6">
                <h3 className="text-white font-semibold mb-3">AIDR Sub-Segments (By SOC Function)</h3>
                <div className="flex flex-wrap gap-2">
                  {marketSubSegments.map((seg, idx) => (
                    <span
                      key={idx}
                      className="px-3 py-1.5 bg-gray-800 text-gray-300 text-sm rounded-full border border-gray-700"
                    >
                      {seg}
                    </span>
                  ))}
                </div>
              </div>

              {/* Tier 1 Vendors */}
              <div className="bg-gray-900/50 border border-gray-800 rounded-lg p-4 mb-6">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-white font-semibold">Tier 1: Platform Incumbents</h3>
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
                  {tier1Vendors.map((comp, idx) => {
                    const statusStyle = getStatusStyle(comp.status);
                    return (
                      <a
                        key={idx}
                        href={comp.href}
                        className="block p-3 bg-gray-800/50 rounded-lg border border-gray-700 hover:border-blue-700 transition-colors"
                      >
                        <div className="flex items-start justify-between">
                          <div className="flex-1">
                            <div className="flex items-center gap-2 mb-1">
                              <span className="text-white font-medium">{comp.name}</span>
                              <span className="text-gray-500">•</span>
                              <span className="text-gray-400 text-sm">{comp.product}</span>
                            </div>
                            <p className="text-sm text-gray-500">{comp.focus}</p>
                          </div>
                          <div className="flex flex-col items-end gap-1 ml-4">
                            <span className="text-xs px-2 py-0.5 bg-blue-900/30 text-blue-400 rounded">
                              {comp.position}
                            </span>
                            <div className="flex items-center gap-1 text-xs">
                              <span className={`w-1.5 h-1.5 rounded-full ${statusStyle.dot}`}></span>
                              <span className={statusStyle.text}>{statusStyle.label}</span>
                            </div>
                            <span className="text-gray-600 text-lg">→</span>
                          </div>
                        </div>
                      </a>
                    );
                  })}
                </div>
              </div>

              {/* Tier 2 Vendors */}
              <div className="bg-gray-900/50 border border-gray-800 rounded-lg p-4 mb-6">
                <h3 className="text-white font-semibold mb-4">Tier 2: Pure-Play Agentic SOC Startups</h3>
                <div className="space-y-3">
                  {tier2Vendors.map((comp, idx) => {
                    const statusStyle = getStatusStyle(comp.status);
                    return (
                      <a
                        key={idx}
                        href={comp.href}
                        className="block p-3 bg-gray-800/50 rounded-lg border border-gray-700 hover:border-purple-700 transition-colors"
                      >
                        <div className="flex items-start justify-between">
                          <div className="flex-1">
                            <div className="flex items-center gap-2 mb-1">
                              <span className="text-white font-medium">{comp.name}</span>
                              <span className="text-gray-500">•</span>
                              <span className="text-gray-400 text-sm">{comp.product}</span>
                            </div>
                            <p className="text-sm text-gray-500">{comp.focus}</p>
                          </div>
                          <div className="flex flex-col items-end gap-1 ml-4">
                            <span className="text-xs px-2 py-0.5 bg-purple-900/30 text-purple-400 rounded">
                              {comp.position}
                            </span>
                            <div className="flex items-center gap-1 text-xs">
                              <span className={`w-1.5 h-1.5 rounded-full ${statusStyle.dot}`}></span>
                              <span className={statusStyle.text}>{statusStyle.label}</span>
                            </div>
                          </div>
                        </div>
                      </a>
                    );
                  })}
                </div>
                <p className="text-xs text-gray-500 mt-3">
                  Omdia is tracking 50+ Agentic SOC startups as of late 2025. Total AI security startup funding: $8.5B across 175 companies (Jan 2024 - Dec 2025).
                </p>
              </div>

              {/* Tier 3 Vendors */}
              <div className="bg-gray-900/50 border border-gray-800 rounded-lg p-4">
                <h3 className="text-white font-semibold mb-4">Tier 3: Emerging/Specialized</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                  {tier3Vendors.map((comp, idx) => {
                    const statusStyle = getStatusStyle(comp.status);
                    return (
                      <div
                        key={idx}
                        className="p-3 bg-gray-800/30 rounded-lg border border-gray-700/50"
                      >
                        <div className="flex items-center justify-between mb-1">
                          <span className="text-white font-medium text-sm">{comp.name}</span>
                          <span className="text-xs px-1.5 py-0.5 bg-gray-700 text-gray-400 rounded">
                            {comp.position}
                          </span>
                        </div>
                        <p className="text-xs text-gray-500">{comp.focus}</p>
                      </div>
                    );
                  })}
                </div>
              </div>
            </section>

            {/* Market Dynamics Section */}
            <section id="motion" className="scroll-mt-24">
              <h2 className="text-2xl font-bold text-white mb-4 flex items-center gap-2">
                <span>📈</span> Market Dynamics
              </h2>

              {/* Hype Cycle */}
              <div className="bg-gray-900/50 border border-gray-800 rounded-lg p-4 mb-6">
                <h3 className="text-white font-semibold mb-3">Hype Cycle Positioning (2025)</h3>
                <div className="space-y-2">
                  {hypePositions.map((item, idx) => (
                    <div key={idx} className="flex items-center justify-between p-2 bg-gray-800/50 rounded">
                      <div>
                        <span className="text-gray-300">{item.tech}</span>
                        <span className="text-gray-600 text-xs ml-2">— {item.note}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <span className={`w-2 h-2 rounded-full ${
                          item.status === 'emerging' ? 'bg-purple-400' :
                          item.status === 'hot' ? 'bg-red-400' :
                          item.status === 'rising' ? 'bg-green-400' :
                          'bg-gray-400'
                        }`}></span>
                        <span className="text-sm text-gray-400">{item.position}</span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Major Trends */}
              <div className="bg-gray-900/50 border border-gray-800 rounded-lg p-4 mb-6">
                <h3 className="text-white font-semibold mb-3">5 Key Market Trends (2025-2026)</h3>
                <div className="space-y-4">
                  {trends.map((trend, idx) => (
                    <div key={idx} className="border-l-2 border-blue-600 pl-4">
                      <h4 className="text-white font-medium">{trend.name}</h4>
                      <p className="text-sm text-gray-400 mt-1">{trend.description}</p>
                    </div>
                  ))}
                </div>
              </div>

              {/* M&A Activity */}
              <div className="bg-gray-900/50 border border-gray-800 rounded-lg p-4 mb-6">
                <h3 className="text-white font-semibold mb-3">M&A Activity (Consolidation Signals)</h3>
                <div className="overflow-x-auto">
                  <table className="w-full text-sm">
                    <thead>
                      <tr className="text-gray-500 border-b border-gray-800">
                        <th className="text-left py-2">Date</th>
                        <th className="text-left py-2">Acquirer</th>
                        <th className="text-left py-2">Target</th>
                        <th className="text-left py-2">Value</th>
                        <th className="text-left py-2">Strategic Signal</th>
                      </tr>
                    </thead>
                    <tbody>
                      {maActivity.map((row, idx) => (
                        <tr key={idx} className="border-b border-gray-800/50">
                          <td className="py-2 text-gray-500">{row.date}</td>
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

              {/* Funding Activity */}
              <div className="bg-gray-900/50 border border-gray-800 rounded-lg p-4">
                <h3 className="text-white font-semibold mb-3">Recent Funding (Pure-Play Startups)</h3>
                <div className="overflow-x-auto">
                  <table className="w-full text-sm">
                    <thead>
                      <tr className="text-gray-500 border-b border-gray-800">
                        <th className="text-left py-2">Vendor</th>
                        <th className="text-left py-2">Round</th>
                        <th className="text-left py-2">Amount</th>
                        <th className="text-left py-2">Valuation</th>
                        <th className="text-left py-2">Date</th>
                      </tr>
                    </thead>
                    <tbody>
                      {fundingActivity.map((row, idx) => (
                        <tr key={idx} className="border-b border-gray-800/50">
                          <td className="py-2 text-white">{row.vendor}</td>
                          <td className="py-2 text-gray-400">{row.round}</td>
                          <td className="py-2 text-green-400">{row.amount}</td>
                          <td className="py-2 text-blue-400">{row.valuation}</td>
                          <td className="py-2 text-gray-500">{row.date}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
                <p className="text-xs text-gray-500 mt-3">
                  Q1 2024: $274M across 8 deals → Q4 2025: $2.17B across 28 deals (8x growth in 18 months)
                </p>
              </div>
            </section>

            {/* Stakeholders Section */}
            <section id="stakeholders" className="scroll-mt-24">
              <h2 className="text-2xl font-bold text-white mb-4 flex items-center gap-2">
                <span>👥</span> Stakeholders
              </h2>

              {/* Analyst Consensus */}
              <div className="bg-gradient-to-r from-blue-900/30 to-purple-900/30 border border-blue-700/50 rounded-lg p-4 mb-6">
                <h3 className="text-white font-semibold mb-3">Analyst Consensus (2025)</h3>
                <div className="space-y-2 text-sm">
                  <p className="text-gray-300">
                    <span className="text-blue-400 font-medium">Gartner:</span> AI SOC Agents at Innovation Trigger (1-5% penetration). 
                    "There Will Never Be an Autonomous SOC" — goal is human-augmented autonomy, not full automation.
                  </p>
                  <p className="text-gray-300">
                    <span className="text-purple-400 font-medium">Omdia:</span> Tracking 50+ Agentic SOC startups. 
                    "Autonomous SOC may become standard for CISOs within 1-2 years."
                  </p>
                  <p className="text-gray-300">
                    <span className="text-green-400 font-medium">GigaOm:</span> Renamed SOAR Radar → SecOps Automation Radar. 
                    Legacy SOAR declared obsolete.
                  </p>
                </div>
              </div>

              {/* CISO JTBD */}
              <div className="bg-gray-900/50 border border-gray-800 rounded-lg p-4 mb-6">
                <h3 className="text-white font-semibold mb-2">CISO Jobs To Be Done</h3>
                <p className="text-sm text-gray-500 mb-3 italic">
                  "CISOs are not buying 'AI' — they're buying reduced alert backlog + analyst retention + measurable ROI"
                </p>
                <div className="overflow-x-auto">
                  <table className="w-full text-sm">
                    <thead>
                      <tr className="text-gray-500 border-b border-gray-800">
                        <th className="text-left py-2">Job Statement</th>
                        <th className="text-left py-2">Success Metric / Desired Outcome</th>
                      </tr>
                    </thead>
                    <tbody>
                      {cisoJobs.map((row, idx) => (
                        <tr key={idx} className="border-b border-gray-800/50">
                          <td className="py-2 text-gray-300">{row.job}</td>
                          <td className="py-2 text-gray-400">{row.metric}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>

              {/* SOC Manager JTBD */}
              <div className="bg-gray-900/50 border border-gray-800 rounded-lg p-4 mb-6">
                <h3 className="text-white font-semibold mb-2">SOC Manager Jobs To Be Done</h3>
                <p className="text-sm text-gray-500 mb-3 italic">
                  "3,000-10,000+ alerts/day, 40% never investigated, 61% miss critical alerts"
                </p>
                <div className="overflow-x-auto">
                  <table className="w-full text-sm">
                    <thead>
                      <tr className="text-gray-500 border-b border-gray-800">
                        <th className="text-left py-2">Job Statement</th>
                        <th className="text-left py-2">Success Metric</th>
                      </tr>
                    </thead>
                    <tbody>
                      {socManagerJobs.map((row, idx) => (
                        <tr key={idx} className="border-b border-gray-800/50">
                          <td className="py-2 text-gray-300">{row.job}</td>
                          <td className="py-2 text-gray-400">{row.metric}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>

              {/* Analyst JTBD */}
              <div className="bg-gray-900/50 border border-gray-800 rounded-lg p-4 mb-6">
                <h3 className="text-white font-semibold mb-2">SOC Analyst (Tier-1/2) Jobs To Be Done</h3>
                <p className="text-sm text-gray-500 mb-3 italic">
                  "50%+ time on false positives, tedious manual triage, career stagnation"
                </p>
                <div className="overflow-x-auto">
                  <table className="w-full text-sm">
                    <thead>
                      <tr className="text-gray-500 border-b border-gray-800">
                        <th className="text-left py-2">Job Statement</th>
                        <th className="text-left py-2">Success Metric</th>
                      </tr>
                    </thead>
                    <tbody>
                      {analystJobs.map((row, idx) => (
                        <tr key={idx} className="border-b border-gray-800/50">
                          <td className="py-2 text-gray-300">{row.job}</td>
                          <td className="py-2 text-gray-400">{row.metric}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>

              {/* Detection Engineer JTBD */}
              <div className="bg-gray-900/50 border border-gray-800 rounded-lg p-4">
                <h3 className="text-white font-semibold mb-2">Detection Engineer Jobs To Be Done</h3>
                <div className="overflow-x-auto">
                  <table className="w-full text-sm">
                    <thead>
                      <tr className="text-gray-500 border-b border-gray-800">
                        <th className="text-left py-2">Job Statement</th>
                        <th className="text-left py-2">Success Metric</th>
                      </tr>
                    </thead>
                    <tbody>
                      {detectionEngineerJobs.map((row, idx) => (
                        <tr key={idx} className="border-b border-gray-800/50">
                          <td className="py-2 text-gray-300">{row.job}</td>
                          <td className="py-2 text-gray-400">{row.metric}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            </section>

            {/* Economics Section */}
            <section id="economics" className="scroll-mt-24">
              <h2 className="text-2xl font-bold text-white mb-4 flex items-center gap-2">
                <span>💰</span> Economics & ROI
              </h2>

              {/* ROI Metrics */}
              <div className="bg-gray-900/50 border border-gray-800 rounded-lg p-4 mb-6">
                <h3 className="text-white font-semibold mb-3">Primary ROI Metrics</h3>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                  {roiMetrics.map((item, idx) => (
                    <div key={idx} className="text-center p-3 bg-gray-800/50 rounded-lg">
                      <div className="text-xl font-bold text-green-400">{item.value}</div>
                      <div className="text-xs text-gray-500 mt-1">{item.metric}</div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Pricing Models */}
              <div className="bg-gray-900/50 border border-gray-800 rounded-lg p-4 mb-6">
                <h3 className="text-white font-semibold mb-3">AIDR Pricing Landscape (2025)</h3>
                <div className="overflow-x-auto">
                  <table className="w-full text-sm">
                    <thead>
                      <tr className="text-gray-500 border-b border-gray-800">
                        <th className="text-left py-2">Vendor</th>
                        <th className="text-left py-2">Model</th>
                        <th className="text-left py-2">Starting Price</th>
                        <th className="text-left py-2">Notes</th>
                      </tr>
                    </thead>
                    <tbody>
                      {vendorPricing.map((row, idx) => (
                        <tr key={idx} className="border-b border-gray-800/50">
                          <td className="py-2 text-white">{row.vendor}</td>
                          <td className="py-2 text-blue-400">{row.model}</td>
                          <td className="py-2 text-green-400">{row.price}</td>
                          <td className="py-2 text-gray-400">{row.notes}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
                <p className="text-xs text-gray-500 mt-3">
                  Key Insight: Shift from volume-based SIEM pricing → per-investigation/outcome-based pricing aligns vendor incentives with customer outcomes.
                </p>
              </div>

              {/* TCO Factors */}
              <div className="bg-gray-900/50 border border-gray-800 rounded-lg p-4 mb-6">
                <h3 className="text-white font-semibold mb-3">TCO Reality Check (Hidden Costs)</h3>
                <div className="overflow-x-auto">
                  <table className="w-full text-sm">
                    <thead>
                      <tr className="text-gray-500 border-b border-gray-800">
                        <th className="text-left py-2">Hidden Cost Category</th>
                        <th className="text-left py-2">Impact</th>
                        <th className="text-left py-2">Notes</th>
                      </tr>
                    </thead>
                    <tbody>
                      {tcoFactors.map((row, idx) => (
                        <tr key={idx} className="border-b border-gray-800/50">
                          <td className="py-2 text-gray-300">{row.factor}</td>
                          <td className="py-2 text-red-400">{row.impact}</td>
                          <td className="py-2 text-gray-500">{row.notes}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
                <div className="bg-red-900/20 border border-red-800/50 rounded-lg p-3 mt-4">
                  <p className="text-sm text-red-300">
                    <span className="font-medium">Critical:</span> Plan for 3-5x advertised costs. 85% of organizations underestimate AI project costs by >10%. 
                    95% of AI pilots fail due to integration issues and poor operational readiness.
                  </p>
                </div>
              </div>

              {/* ROI Calculation Example */}
              <div className="bg-gray-900/50 border border-gray-800 rounded-lg p-4">
                <h3 className="text-white font-semibold mb-3">XSIAM ROI Case Study (Forrester TEI)</h3>
                <p className="text-sm text-gray-400 mb-4">For a composite organization: $5B revenue, 13 SecOps FTEs</p>
                <div className="space-y-2">
                  <div className="flex justify-between p-2 bg-gray-800/50 rounded">
                    <span className="text-gray-300">Operational Cost Reduction</span>
                    <span className="text-green-400">$2.4M (3yr)</span>
                  </div>
                  <div className="flex justify-between p-2 bg-gray-800/50 rounded">
                    <span className="text-gray-300">Legacy Tool Consolidation</span>
                    <span className="text-green-400">$3.1M (3yr)</span>
                  </div>
                  <div className="flex justify-between p-2 bg-gray-800/50 rounded">
                    <span className="text-gray-300">Breach Risk Reduction</span>
                    <span className="text-green-400">$2.2M avoided</span>
                  </div>
                  <div className="flex justify-between p-2 bg-blue-900/30 rounded border border-blue-800/50">
                    <span className="text-blue-300 font-medium">Total 3-Year Benefits</span>
                    <span className="text-blue-400 font-bold">$7.7M</span>
                  </div>
                  <div className="flex justify-between p-2 bg-gray-800/50 rounded">
                    <span className="text-gray-300">Total Costs (Platform + Implementation)</span>
                    <span className="text-gray-400">$2.2M</span>
                  </div>
                </div>
                <div className="grid grid-cols-3 gap-4 mt-4 pt-4 border-t border-gray-800">
                  <div className="text-center">
                    <div className="text-2xl font-bold text-green-400">257%</div>
                    <div className="text-xs text-gray-500">ROI</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-bold text-blue-400"><6 mo</div>
                    <div className="text-xs text-gray-500">Payback Period</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-bold text-purple-400">$5.6M</div>
                    <div className="text-xs text-gray-500">NPV</div>
                  </div>
                </div>
                <p className="text-xs text-gray-500 mt-4">
                  Note: XSIAM's Forrester TEI study is the gold standard reference. Most pure-play AIDR startups lack third-party validation at this depth.
                </p>
              </div>
            </section>

            {/* PM Strategy Section */}
            <section id="product" className="scroll-mt-24">
              <h2 className="text-2xl font-bold text-white mb-4 flex items-center gap-2">
                <span>🎯</span> PM Strategic Elements
              </h2>
              
              {/* Table Stakes */}
              <div className="bg-gray-900/50 border border-gray-800 rounded-lg p-4 mb-6">
                <h3 className="text-white font-semibold mb-3">Table Stakes (2025 MVP—Required for RFP)</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
                  {tableStakes.map((feature, idx) => (
                    <div key={idx} className="flex items-start gap-2 text-sm">
                      <span className="text-green-400 mt-0.5">✓</span>
                      <span className="text-gray-300">{feature}</span>
                    </div>
                  ))}
                </div>
                <div className="bg-yellow-900/20 border border-yellow-800/50 rounded-lg p-3 mt-4">
                  <p className="text-sm text-yellow-300">
                    <span className="font-medium">Key Insight:</span> Tier-1 triage is now table stakes — AI that only assists with Tier-1 is no longer differentiated. 
                    Top-tier platforms must also support Tier-2 and Tier-3 investigations.
                  </p>
                </div>
              </div>

              {/* Differentiators */}
              <div className="bg-gray-900/50 border border-gray-800 rounded-lg p-4 mb-6">
                <h3 className="text-white font-semibold mb-3">Key Differentiators (What Wins Deals)</h3>
                <div className="space-y-4">
                  {differentiators.map((diff, idx) => (
                    <div key={idx} className="border-l-2 border-purple-600 pl-4">
                      <h4 className="text-white font-medium">{diff.name}</h4>
                      <p className="text-sm text-gray-400 mt-1">{diff.description}</p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Metrics That Matter */}
              <div className="bg-gray-900/50 border border-gray-800 rounded-lg p-4 mb-6">
                <h3 className="text-white font-semibold mb-3">Metrics That Matter</h3>
                <div className="overflow-x-auto">
                  <table className="w-full text-sm">
                    <thead>
                      <tr className="text-gray-500 border-b border-gray-800">
                        <th className="text-left py-2">Metric</th>
                        <th className="text-left py-2">Target</th>
                        <th className="text-left py-2">Note</th>
                      </tr>
                    </thead>
                    <tbody>
                      {metricsToTrack.map((row, idx) => (
                        <tr key={idx} className="border-b border-gray-800/50">
                          <td className="py-2 text-gray-300">{row.metric}</td>
                          <td className="py-2 text-green-400 font-medium">{row.target}</td>
                          <td className="py-2 text-gray-500">{row.note}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>

              {/* Red Flags */}
              <div className="bg-red-900/20 border border-red-800/50 rounded-lg p-4 mb-6">
                <h3 className="text-red-400 font-semibold mb-3">🚩 Red Flags to Avoid</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
                  {redFlags.map((flag, idx) => (
                    <div key={idx} className="flex items-start gap-2 text-sm">
                      <span className="text-red-400 mt-0.5">✗</span>
                      <span className="text-red-300">{flag}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* If I'm a PM Here Box */}
              <div className="bg-gradient-to-r from-blue-900/30 to-purple-900/30 border border-blue-700/50 rounded-lg p-6">
                <h3 className="text-white font-semibold mb-4 flex items-center gap-2">
                  <span>💡</span> If I am a PM Here, I Need to Know...
                </h3>
                <div className="space-y-3 text-sm">
                  <div className="flex gap-3">
                    <span className="text-blue-400 font-bold">1.</span>
                    <span className="text-gray-300"><span className="text-white font-medium">You're building in a pre-category market</span> (1-5% adoption, no dedicated analyst evaluations). Position for category creation, not competition.</span>
                  </div>
                  <div className="flex gap-3">
                    <span className="text-blue-400 font-bold">2.</span>
                    <span className="text-gray-300"><span className="text-white font-medium">The terminology is still fluid</span> — "Agentic SOC," "AI SOC," "Autonomous SOC," "SecOps Automation" all in use. Monitor consolidation.</span>
                  </div>
                  <div className="flex gap-3">
                    <span className="text-blue-400 font-bold">3.</span>
                    <span className="text-gray-300"><span className="text-white font-medium">SOAR is dying</span> — position as replacement, not complement. GigaOm explicitly renamed the category.</span>
                  </div>
                  <div className="flex gap-3">
                    <span className="text-blue-400 font-bold">4.</span>
                    <span className="text-gray-300"><span className="text-white font-medium">Platform incumbents have data advantages</span> but are adding AI as features, not AI-first architecture. Pure-plays compete on speed and focus.</span>
                  </div>
                  <div className="flex gap-3">
                    <span className="text-blue-400 font-bold">5.</span>
                    <span className="text-gray-300"><span className="text-white font-medium">Third-party ROI validation is a competitive moat</span> — XSIAM has Forrester TEI; most startups don't. Build the evidence.</span>
                  </div>
                  <div className="flex gap-3">
                    <span className="text-blue-400 font-bold">6.</span>
                    <span className="text-gray-300"><span className="text-white font-medium">Explainability is non-negotiable</span> — "black box" AI loses trust and deals. Budget for this; it's not optional.</span>
                  </div>
                  <div className="flex gap-3">
                    <span className="text-blue-400 font-bold">7.</span>
                    <span className="text-gray-300"><span className="text-white font-medium">Consolidation is coming</span> — either be an acquirer or have a clear path to acquisition/IPO. 50+ startups won't all survive.</span>
                  </div>
                </div>
              </div>
            </section>

            {/* Strategic Theses Section */}
            <section id="theses" className="scroll-mt-24">
              <h2 className="text-2xl font-bold text-white mb-4 flex items-center gap-2">
                <span>🔮</span> Strategic Theses
              </h2>
              <p className="text-gray-400 mb-6">
                Three structural shifts reshaping this market. Not incremental changes—fundamental rewirings of where value is created and captured.
              </p>

              <div className="space-y-6">
                {theses.map((thesis) => (
                  <div
                    key={thesis.id}
                    className={`bg-gray-900/50 border border-gray-800 rounded-lg p-6 border-l-4 ${getThesisAccent(thesis.color)}`}
                  >
                    <div className="flex items-start justify-between mb-3">
                      <h3 className="text-lg font-semibold text-white">{thesis.title}</h3>
                      <div className="flex items-center gap-2 text-xs">
                        <span className={`px-2 py-0.5 rounded border ${getConfidenceColor(thesis.confidence)}`}>
                          {thesis.confidence}
                        </span>
                        <span className="text-gray-500">{thesis.timeframe}</span>
                      </div>
                    </div>
                    
                    <p className="text-gray-300 mb-4">{thesis.claim}</p>
                    
                    <div className="mb-4">
                      <h4 className="text-xs font-semibold text-gray-500 uppercase tracking-wider mb-2">EVIDENCE</h4>
                      <ul className="space-y-1">
                        {thesis.evidence.map((item, idx) => (
                          <li key={idx} className="text-sm text-gray-400 flex items-start gap-2">
                            <span className="text-gray-600">•</span>
                            {item}
                          </li>
                        ))}
                      </ul>
                    </div>

                    <p className="text-sm text-blue-400 border-t border-gray-800 pt-3">
                      <span className="font-medium">Implication: </span>
                      {thesis.implication}
                    </p>
                  </div>
                ))}
              </div>

              {/* Synthesis */}
              <div className="bg-gray-800/50 border border-gray-700 rounded-lg p-4 mt-6">
                <h4 className="text-white font-semibold mb-3">How These Connect</h4>
                <div className="space-y-2 text-sm">
                  <p className="text-gray-400">
                    <span className="text-green-400">Agentic architecture wins</span> → but only with → 
                    <span className="text-purple-400"> human-augmented autonomy</span>
                  </p>
                  <p className="text-gray-400">
                    <span className="text-purple-400">Trust ladders required</span> → enables → 
                    <span className="text-orange-400"> enterprise adoption at scale</span>
                  </p>
                  <p className="text-gray-400">
                    <span className="text-orange-400">Platform consolidation</span> → creates → 
                    <span className="text-blue-400"> barbell market (giants + specialists)</span>
                  </p>
                </div>
              </div>
            </section>

            {/* Recommendations */}
            <section className="scroll-mt-24">
              <h2 className="text-2xl font-bold text-white mb-4 flex items-center gap-2">
                <span>🎯</span> Recommendations
              </h2>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {/* For Buyers */}
                <div className="bg-gray-900/50 border border-gray-800 rounded-lg p-4">
                  <div className="flex items-center gap-2 mb-3">
                    <span className="w-8 h-8 bg-blue-900/50 rounded-full flex items-center justify-center text-blue-400 font-bold">B</span>
                    <span className="text-white font-semibold">For Enterprise Buyers</span>
                  </div>
                  <ul className="space-y-2 text-sm text-gray-400">
                    <li className="flex items-start gap-2">
                      <span className="text-blue-400">•</span>
                      <span>Don't buy "AI" — buy reduced alert backlog + analyst retention + measurable ROI</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-blue-400">•</span>
                      <span>Evaluate on agentic architecture, not copilot paradigms</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-blue-400">•</span>
                      <span>Require explainability, graduated autonomy, and evidence (trust ladder)</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-blue-400">•</span>
                      <span>Time-to-value <90 days; SIEM-agnostic architecture is competitive advantage</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-blue-400">•</span>
                      <span>Plan TCO at 3-5x advertised costs (integration, change management, drift)</span>
                    </li>
                  </ul>
                </div>

                {/* For Vendors */}
                <div className="bg-gray-900/50 border border-gray-800 rounded-lg p-4">
                  <div className="flex items-center gap-2 mb-3">
                    <span className="w-8 h-8 bg-purple-900/50 rounded-full flex items-center justify-center text-purple-400 font-bold">V</span>
                    <span className="text-white font-semibold">For Vendors / Product Leaders</span>
                  </div>
                  <ul className="space-y-2 text-sm text-gray-400">
                    <li className="flex items-start gap-2">
                      <span className="text-purple-400">•</span>
                      <span>Position for category creation, not category competition</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-purple-400">•</span>
                      <span>Build Tier-2/3 investigation depth — Tier-1 is table stakes</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-purple-400">•</span>
                      <span>Invest in third-party ROI validation (Forrester TEI creates moat)</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-purple-400">•</span>
                      <span>Outcome-based pricing wins — per-investigation models align with value</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-purple-400">•</span>
                      <span>50+ startups won't survive — position for acquisition or platform scale</span>
                    </li>
                  </ul>
                </div>
              </div>
            </section>

            {/* Resources */}
            <section className="scroll-mt-24">
              <h2 className="text-2xl font-bold text-white mb-4 flex items-center gap-2">
                <span>📎</span> Resources
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <a href="#" className="flex items-center gap-3 p-4 bg-gray-900/50 border border-gray-800 rounded-lg hover:border-blue-700 transition-colors">
                  <span className="text-2xl">📄</span>
                  <div>
                    <div className="text-white font-medium">Full AIDR Strategic Brief</div>
                    <div className="text-sm text-gray-500">Complete SRP analysis (PDF)</div>
                  </div>
                </a>
                <a href="#" className="flex items-center gap-3 p-4 bg-gray-900/50 border border-gray-800 rounded-lg hover:border-blue-700 transition-colors">
                  <span className="text-2xl">📊</span>
                  <div>
                    <div className="text-white font-medium">Vendor Comparison Matrix</div>
                    <div className="text-sm text-gray-500">Side-by-side feature analysis</div>
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
      </div>
    </div>
  );
};

export default AIDRPage;
