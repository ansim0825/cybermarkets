"use client";

import React, { useState } from 'react';
import { Logo } from '@/components/Logo';

const InsiderThreatPage = () => {
  const [activeSection, setActiveSection] = useState('overview');

  // Identity pillar sub-segments (ITM sits in Identity pillar - behavioral monitoring of human identities)
  const subSegments = [
    { id: 'itdr', name: 'ITDR', active: false, href: '/pillars/identity/itdr' },
    { id: 'iam', name: 'IAM / IGA', active: false, href: '/pillars/identity/iam' },
    { id: 'pam', name: 'PAM', active: false, href: '/pillars/identity/pam' },
    { id: 'insider-threat', name: 'Insider Threat', active: true, href: '/pillars/identity/insider-threat' },
    { id: 'ciam', name: 'CIAM', active: false, href: '#' },
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
    { name: 'SecOps & Analytics', primary: true },
    { name: 'Data & Application', primary: false },
    { name: 'GRC & TIC', primary: false },
  ];

  const keyInsights = [
    { stat: '93%', label: 'Harder to detect than external attacks' },
    { stat: '23%', label: 'Confident in insider detection' },
    { stat: '$17.4M', label: 'Annual insider incident cost' },
    { stat: '81 days', label: 'Avg containment time (first decline)' },
  ];

  const marketSizing = [
    { source: 'MarketsandMarkets', val2024: '$3.21B', projection: '$6.02B (2029)', cagr: '13.4%' },
    { source: 'Grand View Research', val2024: '$3.65B', projection: '$10.63B (2030)', cagr: '19.5%' },
    { source: 'Fortune Business Insights', val2024: '$5.0B', projection: '$12.12B (2032)', cagr: '11.88%' },
    { source: 'Mordor Intelligence', val2024: '$4.1B', projection: '$9.9B (2030)', cagr: '16.0%' },
  ];

  const marketSubSegments = [
    'User & Entity Behavior Analytics (UEBA)',
    'Data Loss Prevention (DLP)',
    'Insider Risk Management (IRM) Platforms',
    'User Activity Monitoring (UAM)',
    'Employee Monitoring Software',
    'Managed Insider Threat Services',
    'Case Management & Investigation Tools',
    'GenAI/Shadow AI Monitoring',
  ];

  // Top 15 vendors by consensus
  const competitors = [
    { name: 'DTEX Systems', product: 'DTEX InTERCEPT + Ai³', position: 'Platform Leader', focus: 'Gartner Representative Vendor. Ai³ platform integrates UEBA+DLP+investigation. FedRAMP High. $3.3M+ TCO savings.', status: 'in-progress', href: '/pillars/identity/insider-threat/companies/dtex' },
    { name: 'Microsoft', product: 'Purview Insider Risk Management', position: 'Platform Incumbent', focus: 'E5 bundled. Copilot Triage Agents (Dec 2025). 90%+ orgs have M365. Detection-heavy, lacks real-time prevention.', status: 'in-progress', href: '/pillars/identity/insider-threat/companies/microsoft' },
    { name: 'Proofpoint', product: 'ITM (ObserveIT + UEBA + DLP)', position: 'Platform Leader', focus: 'Human Risk Management platform vision. ObserveIT acquisition integrated. Microsoft alliance.', status: 'in-progress', href: '/pillars/identity/insider-threat/companies/proofpoint' },
    { name: 'Teramind', product: 'Teramind Platform', position: 'Mid-Market Leader', focus: '$10-50/user/month. Productivity + security overlap. Strong SMB/mid-market traction.', status: 'in-progress', href: '/pillars/identity/insider-threat/companies/teramind' },
    { name: 'Varonis', product: 'Data Security Platform', position: 'Data-Centric', focus: 'File system behavior monitoring. AI Identity Protection. ChatGPT Enterprise API integration.', status: 'in-progress', href: '/pillars/identity/insider-threat/companies/varonis' },
    { name: 'Forcepoint', product: 'Risk-Adaptive Protection', position: 'Enterprise', focus: 'DLP heritage. Risk-adaptive enforcement. Government/defense strength.', status: 'in-progress', href: '/pillars/identity/insider-threat/companies/forcepoint' },
    { name: 'Securonix', product: 'Unified Defense SIEM + UEBA', position: 'SIEM-Integrated', focus: 'UEBA pioneer. SIEM convergence. Strong threat detection analytics.', status: 'in-progress', href: '/pillars/identity/insider-threat/companies/securonix' },
    { name: 'Code42 (Mimecast)', product: 'Incydr', position: 'HRM Platform', focus: 'Human Risk Management. Mimecast acquisition (Dec 2024). Source code protection focus.', status: 'in-progress', href: '/pillars/identity/insider-threat/companies/code42' },
    { name: 'Cyberhaven', product: 'Data Detection & Response', position: 'Emerging Leader', focus: 'Data lineage approach. 90% false positive reduction claims. Shadow AI visibility.', status: 'in-progress', href: '/pillars/identity/insider-threat/companies/cyberhaven' },
    { name: 'Veriato', product: 'Veriato Platform', position: 'SMB Focus', focus: 'Employee monitoring heritage. Cerebral acquisition. Productivity + security.', status: 'in-progress', href: '/pillars/identity/insider-threat/companies/veriato' },
    { name: 'Gurucul', product: 'REVEAL Platform', position: 'Analytics Leader', focus: 'UEBA/analytics strength. ML-driven risk scoring. Open architecture.', status: 'in-progress', href: '/pillars/identity/insider-threat/companies/gurucul' },
    { name: 'Exabeam', product: 'New-Scale SIEM + UEBA', position: 'SIEM-Integrated', focus: 'Behavioral analytics. SIEM platform approach. Cloud-native architecture.', status: 'in-progress', href: '/pillars/identity/insider-threat/companies/exabeam' },
    { name: 'Above Security', product: 'Above Security Platform', position: 'Prevention-First', focus: 'Days deployment (not months). LLM-based intent detection (5.0/5 AI). Real-time coaching. $900K TCO.', status: 'in-progress', href: '/pillars/identity/insider-threat/companies/above-security' },
    { name: 'Safetica', product: 'Safetica NXT', position: 'EU Leader', focus: 'DLP+IRM convergence. GDPR/works council compliance. European market strength.', status: 'in-progress', href: '/pillars/identity/insider-threat/companies/safetica' },
    { name: 'Netwrix', product: 'Netwrix Auditor + Threat Manager', position: 'Compliance-First', focus: 'Auditing heritage. AD/file server monitoring. Mid-market compliance focus.', status: 'in-progress', href: '/pillars/identity/insider-threat/companies/netwrix' },
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
    { name: 'GenAI as Primary Exfiltration Vector', description: '75% of enterprises use GenAI, 72% via personal accounts. ChatGPT accounts for 71.2% of AI data exposures. 7.7GB/month shared with AI tools (30x YoY increase).' },
    { name: 'DPRK IT Worker Infiltration', description: '220% YoY increase in North Korean operatives posing as remote IT workers. Multiple Fortune 500 companies compromised. New insider threat vector requiring identity verification.' },
    { name: 'Prevention > Detection Paradigm Shift', description: 'Prevention-first platforms achieve 60-80% incident reduction vs 30-50% for detection-only. User coaching at point of risk changes behavior.' },
    { name: 'Platform Consolidation (HRM Vision)', description: 'DLP + IRM + IAM converging. Gartner predicts 70% will consolidate by 2027. Code42→Mimecast, SlashNext→Varonis signal acceleration.' },
    { name: 'Privacy-Preserving Analytics', description: 'GDPR Article 5(1)(c), works council requirements driving pseudonymization by default. EU expansion requires privacy-first architecture.' },
  ];

  const hypePositions = [
    { tech: 'Core UEBA', position: 'Plateau of Productivity', status: 'stable', note: 'Mature, being absorbed' },
    { tech: 'DLP (Traditional)', position: 'Trough of Disillusionment', status: 'declining', note: 'Reinventing as DDR' },
    { tech: 'IRM Platforms', position: 'Early Slope of Enlightenment', status: 'rising', note: 'Gartner Market Guide format' },
    { tech: 'GenAI/Shadow AI Monitoring', position: 'Peak of Inflated Expectations', status: 'hot', note: 'Rapid adoption' },
    { tech: 'Agentic AI Governance', position: 'Innovation Trigger', status: 'emerging', note: 'Microsoft Dec 2026' },
  ];

  const maActivity = [
    { date: 'Dec 2024', acquirer: 'Mimecast', target: 'Code42', value: '~$400M', signal: 'HRM platform consolidation' },
    { date: 'Jan 2025', acquirer: 'Varonis', target: 'SlashNext', value: '$14M', signal: 'AI + insider threat' },
    { date: '2023', acquirer: 'Proofpoint (Thoma Bravo)', target: 'ObserveIT (integrated)', value: '—', signal: 'ITM platform completion' },
    { date: '2020', acquirer: 'Proofpoint', target: 'ObserveIT', value: '$225M', signal: 'UAM + UEBA integration' },
    { date: 'Ongoing', acquirer: 'Microsoft', target: 'Building internally', value: 'E5 Bundle', signal: 'Platform bundling pressure' },
  ];

  const cisoJobs = [
    { job: 'Protect crown jewel data from departing employees', metric: 'Pre-termination detection; exfiltration blocked before departure' },
    { job: 'Enable safe GenAI adoption without data leakage', metric: 'Shadow AI visibility; policy enforcement; productivity preserved' },
    { job: 'Demonstrate measurable ROI to the board', metric: 'Containment time reduction ($8.1M savings); incident count decrease' },
    { job: 'Maintain employee trust while protecting data', metric: 'Privacy-preserving architecture; proportionate monitoring; transparency' },
  ];

  const socAnalystJobs = [
    { job: 'Investigate suspicious activity with full context quickly', metric: 'User timeline; access history; behavioral baseline deviation' },
    { job: 'Determine real threat vs false positive before data leaves', metric: '<5% false positive rate; clear risk scoring; intent signals' },
    { job: 'Contain threats in minutes, not days', metric: 'One-click response; automated playbooks; <31 day containment' },
  ];

  const hrLegalJobs = [
    { job: 'Partner with Security to address employee risks', metric: 'Early warning indicators; flight risk detection; HR workflow integration' },
    { job: 'Protect from wrongful termination claims', metric: 'Evidence-grade audit trail; legal hold support; defensible process' },
    { job: 'Maintain workforce trust during investigations', metric: 'Pseudonymized monitoring; proportionate escalation; works council compliance' },
  ];

  const midMarketJobs = [
    { job: 'Get visibility into employee data activity', metric: 'Cloud-delivered; <30 day deployment; no infrastructure' },
    { job: 'Catch obvious risks without dedicated security team', metric: 'Pre-built policies; automated alerting; low FTE requirement' },
    { job: 'Meet compliance without enterprise infrastructure', metric: 'Audit reports; SOC2/HIPAA templates; regulatory mapping' },
  ];

  const tableStakes = [
    'User & Entity Behavior Analytics (UEBA)',
    'ML-based behavioral baselining',
    'Risk scoring with contextual factors',
    'Multi-channel data exfiltration detection',
    'Content inspection (DLP integration)',
    'Case management & investigation workflow',
    'Audit trail for compliance/legal',
    'SIEM integration (bidirectional API)',
    'Agent-based endpoint deployment',
    'RBAC with least-privilege access',
    'Compliance reporting (SOC2, HIPAA, GDPR)',
    'Real-time alerting (<60 sec)',
  ];

  const differentiators = [
    { name: 'Deployment Speed (Days vs Months)', description: 'Above Security deploys in days; DTEX/Securonix take 3-6 months. $4M-8M risk exposure during implementation gap.' },
    { name: 'AI Sophistication (LLM Intent vs Rules)', description: 'Above Security (5.0/5 AI) uses LLM-based intent detection. SMB tools (<2.0/5) rely on simple rules. False positive reduction is the key metric.' },
    { name: 'Prevention vs Detection Capability', description: 'Real-time blocking and coaching achieves 60-80% incident reduction vs 30-50% for detection-only. Prevention changes behavior.' },
    { name: 'GenAI/Shadow AI Visibility', description: 'ChatGPT prompt monitoring, Copilot governance, shadow AI discovery. 75% enterprise adoption makes this P0 requirement.' },
    { name: 'M365 Ecosystem Positioning', description: 'For non-Microsoft vendors: must demonstrate value for "40% of environment that isn\'t Microsoft". Purview covers basics; differentiate on prevention, speed, or non-M365.' },
    { name: 'Privacy Architecture (Pseudonymization)', description: 'GDPR proportionality, works council workflows, configurable monitoring scope. EU expansion requires privacy-by-design, not bolt-on.' },
    { name: 'TCO Transparency', description: 'Total cost including integration ($50K-150K savings for no-integration), staffing (2-4 FTEs), and training. Hidden costs can 5-10x sticker price.' },
  ];

  const roiMetrics = [
    { metric: 'Average annual insider cost', value: '$17.4M' },
    { metric: 'Containment time ROI', value: '$8.1M savings' },
    { metric: 'User training ROI', value: '$5.2M savings' },
    { metric: 'Tech stack consolidation', value: '$3.3M (3yr)' },
  ];

  const pricingTiers = [
    { tier: 'Enterprise Platform', range: '$22-59/user/year', vendors: 'DTEX, Proofpoint ITM, Microsoft Purview (E5)', buyer: 'Enterprise 5K+' },
    { tier: 'Mid-Market SaaS', range: '$10-50/user/month', vendors: 'Teramind, Veriato, Code42', buyer: 'Mid-Market 500-5K' },
    { tier: 'Platform Fee + Per-User', range: '$100K-750K Year 1', vendors: 'DTEX, Securonix, Forcepoint', buyer: 'Complex deployments' },
    { tier: 'Prevention-First', range: '~$900K TCO', vendors: 'Above Security', buyer: 'Speed-prioritized' },
  ];

  const containmentImpact = [
    { timeframe: '<31 days', cost: '$10.6M', savings: '$8.1M vs longest' },
    { timeframe: '31-60 days', cost: '$13.9M', savings: '$4.8M vs longest' },
    { timeframe: '61-90 days', cost: '$16.1M', savings: '$2.6M vs longest' },
    { timeframe: '>91 days', cost: '$18.7M', savings: 'Baseline (worst)' },
  ];

  const theses = [
    {
      id: 1,
      title: 'Prevention > Detection Paradigm Shift',
      timeframe: '2025-2027',
      confidence: 'High',
      color: 'green',
      claim: 'By 2027, prevention-first platforms will dominate enterprise ITM deployments. Organizations choosing detection-only face 2x incident rates and containment cost penalties.',
      evidence: [
        'Prevention-first achieves 60-80% incident reduction vs 30-50% detection-only',
        'User training delivers highest ROI ($5.2M savings) by changing behavior',
        'Real-time coaching reduces friction vs post-facto investigation',
        'Containment time directly correlates to cost ($8.1M delta)',
      ],
      implication: 'Detection-only platforms face commoditization pressure. Invest in real-time prevention, coaching, and behavioral intervention capabilities.',
    },
    {
      id: 2,
      title: 'Microsoft Purview Bundling Forces Differentiation',
      timeframe: '2025-2026',
      confidence: 'High',
      color: 'purple',
      claim: 'E5 bundling commoditizes baseline insider detection. Standalone ITM vendors must own prevention capability, non-M365 environment visibility, or deployment speed to survive.',
      evidence: [
        '90%+ of organizations have M365 deployments',
        'Purview is "free" with E5 licensing—detection-heavy but lacks prevention',
        'Copilot Triage Agents (Dec 2025) add AI-assisted investigation',
        '40% of enterprise data lives outside M365 ecosystem',
      ],
      implication: 'Standalone detection-only ITM faces existential pressure. Differentiate on prevention, non-Microsoft coverage, deployment speed, or prepare for acquisition.',
    },
    {
      id: 3,
      title: 'GenAI Governance Becomes Table Stakes',
      timeframe: '2025-2027',
      confidence: 'Medium-High',
      color: 'orange',
      claim: 'By 2027, ITM solutions without GenAI/shadow AI monitoring capabilities will be RFP-disqualified. Agentic AI governance emerges as 2026-2027 differentiator.',
      evidence: [
        '75% enterprise GenAI adoption, 72% via personal accounts',
        'ChatGPT accounts for 71.2% of AI data exposures',
        '7.7GB/month shared with AI tools (30x YoY increase)',
        'Microsoft "Risky Agents" governance capability targeting Dec 2026',
      ],
      implication: 'GenAI visibility is P0 product requirement today. Agentic AI governance (autonomous agents with data access) is the 2026-2027 differentiator window.',
    },
  ];

  const successMetrics = [
    { metric: 'Containment Time', definition: 'Days from detection to resolution', target: '<31 days' },
    { metric: 'False Positive Rate', definition: 'Alerts requiring no action', target: '<5%' },
    { metric: 'Time-to-Value', definition: 'Days from contract to production', target: '<30 days' },
    { metric: 'Incident Reduction', definition: 'YoY insider incident decrease', target: '60-80%' },
    { metric: 'Detection Confidence', definition: 'Analyst trust in alerts', target: '>80% (vs 23% baseline)' },
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
    <div className="min-h-screen bg-gray-950 text-gray-100">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-gray-900/95 backdrop-blur-sm border-b border-gray-800">
        <div className="max-w-7xl mx-auto px-4 py-3 flex items-center justify-between">
          <div className="flex items-center gap-6">
            <Logo />
            <span className="text-gray-500">/</span>
            <a href="/pillars/identity" className="text-gray-400 hover:text-white">Identity</a>
          </div>
          <div className="flex items-center gap-6">
            <a href="/pillars" className="text-gray-400 hover:text-white text-sm">Pillars</a>
            <a href="/theses" className="text-gray-400 hover:text-white text-sm">Theses</a>
            <a href="/about" className="text-gray-400 hover:text-white text-sm">About</a>
          </div>
        </div>
      </nav>

      {/* Sub-segment Navigation */}
      <div className="fixed top-14 left-0 right-0 z-40 bg-gray-900/90 backdrop-blur-sm border-b border-gray-800">
        <div className="max-w-7xl mx-auto px-4 py-2 flex items-center gap-4 overflow-x-auto">
          {subSegments.map((seg) => (
            <a
              key={seg.id}
              href={seg.href}
              className={`px-3 py-1 rounded-full text-sm whitespace-nowrap transition-all ${
                seg.active
                  ? 'bg-blue-900/50 text-blue-400 border border-blue-700'
                  : 'text-gray-400 hover:text-white hover:bg-gray-800'
              }`}
            >
              {seg.active && <span className="mr-1">●</span>}
              {seg.name}
            </a>
          ))}
          <span className="text-gray-600 text-sm ml-4">Also touches:</span>
          {relatedPillars.map((pillar, idx) => (
            <span key={idx} className={`text-xs px-2 py-1 rounded ${pillar.primary ? 'bg-purple-900/50 text-purple-400' : 'bg-gray-800 text-gray-500'}`}>
              {pillar.name}
            </span>
          ))}
        </div>
      </div>

      {/* Header */}
      <header className="pt-32 pb-8 px-4 bg-gradient-to-b from-gray-900 to-gray-950">
        <div className="max-w-7xl mx-auto">
          <div className="flex items-center gap-3 mb-4">
            <h1 className="text-4xl font-bold">Insider Threat Management</h1>
            <span className="px-3 py-1 bg-amber-900/50 text-amber-400 text-sm rounded-full border border-amber-700">
              MARKET GUIDE FORMAT
            </span>
          </div>
          <p className="text-xl text-gray-400 max-w-3xl">
            The $3-5B market protecting organizations from their most dangerous threat vector—93% harder to detect than external attacks, yet only 23% are confident in their detection capabilities
          </p>
          <div className="mt-4 text-sm text-gray-500">
            Last updated: January 2026 • Methodology: SRP Framework • <span className="text-green-400">● Active research</span>
          </div>
        </div>
      </header>

      {/* Key Stats Bar */}
      <div className="bg-gray-900 border-y border-gray-800 py-6">
        <div className="max-w-7xl mx-auto px-4 grid grid-cols-2 md:grid-cols-4 gap-6">
          {keyInsights.map((insight, idx) => (
            <div key={idx} className="text-center">
              <div className="text-3xl font-bold text-blue-400">{insight.stat}</div>
              <div className="text-sm text-gray-400">{insight.label}</div>
            </div>
          ))}
        </div>
      </div>

      {/* The 93% Detection Gap Callout */}
      <div className="max-w-7xl mx-auto px-4 py-6">
        <div className="bg-gradient-to-r from-red-900/30 to-orange-900/30 border border-red-800/50 rounded-lg p-6">
          <div className="flex items-start gap-4">
            <span className="text-3xl">🎯</span>
            <div>
              <h3 className="text-lg font-semibold text-red-400 mb-2">The Detection Confidence Crisis</h3>
              <p className="text-gray-300">
                <strong>93% of security leaders</strong> say insider threats are harder to detect than external attacks, yet <strong>only 23%</strong> are confident in their detection capabilities.
                Meanwhile, <strong>66% experienced data loss</strong> in the past year (up from 46%), and <strong>74% cite human error</strong> as the leading cause of incidents.
                The gap between threat severity and detection confidence defines this market's opportunity.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content Grid */}
      <div className="max-w-7xl mx-auto px-4 py-8 grid grid-cols-1 lg:grid-cols-4 gap-8">
        {/* Left Sidebar - SRP Navigation */}
        <div className="lg:col-span-1">
          <div className="sticky top-32 space-y-6">
            <div className="bg-gray-900 rounded-lg border border-gray-800 p-4">
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
                    <span>{section.name}</span>
                  </button>
                ))}
              </nav>
            </div>

            {/* ITM Formula Visual */}
            <div className="bg-gray-900 rounded-lg border border-gray-800 p-4">
              <h3 className="text-sm font-semibold text-gray-400 mb-3">ITM = UEBA + DLP + Response</h3>
              <div className="space-y-2 text-xs">
                <div className="bg-blue-900/30 rounded p-2 border border-blue-800/50">
                  <span className="text-blue-400 font-semibold">UEBA</span>
                  <div className="text-gray-400">Behavioral anomaly detection</div>
                </div>
                <div className="text-center text-gray-500">+</div>
                <div className="bg-purple-900/30 rounded p-2 border border-purple-800/50">
                  <span className="text-purple-400 font-semibold">DLP</span>
                  <div className="text-gray-400">Content-aware protection</div>
                </div>
                <div className="text-center text-gray-500">+</div>
                <div className="bg-green-900/30 rounded p-2 border border-green-800/50">
                  <span className="text-green-400 font-semibold">Investigation</span>
                  <div className="text-gray-400">Case management & response</div>
                </div>
              </div>
              <div className="mt-3 pt-3 border-t border-gray-700 text-xs text-gray-500">
                ⚡ No Gartner MQ—Market Guide format indicates emerging category
              </div>
            </div>
          </div>
        </div>

        {/* Main Content Area */}
        <div className="lg:col-span-3 space-y-12">
          {/* Overview Section */}
          <section id="overview" className="space-y-6">
            <h2 className="text-2xl font-bold flex items-center gap-3">
              <span>📋</span> Overview
            </h2>
            <div className="prose prose-invert max-w-none">
              <p className="text-gray-300 text-lg">
                Insider Threat Management (ITM), also called Insider Risk Management (IRM), protects organizations from threats originating within—employees, contractors, and partners with legitimate access who intentionally or accidentally compromise data, systems, or operations.
              </p>
              <p className="text-gray-400">
                The market has evolved beyond traditional User Activity Monitoring (UAM) to integrate three core capabilities: <strong>UEBA</strong> (behavioral analytics), <strong>DLP</strong> (content-aware data protection), and <strong>investigation/response</strong> (case management and remediation). This convergence creates true Insider Risk Management platforms.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="bg-gray-900 rounded-lg border border-gray-800 p-4">
                <h4 className="font-semibold text-white mb-3">What Makes This Market Unique</h4>
                <ul className="space-y-2 text-sm text-gray-400">
                  <li className="flex items-start gap-2">
                    <span className="text-blue-400">•</span>
                    <span><strong>Human-centric threat vector:</strong> Unlike external attacks, insiders have legitimate access and business context</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-blue-400">•</span>
                    <span><strong>Privacy tension:</strong> Monitoring must balance security with employee privacy rights (GDPR, works councils)</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-blue-400">•</span>
                    <span><strong>HR/Legal stakeholder:</strong> Unlike pure security tools, ITM involves HR, Legal, and compliance teams</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-blue-400">•</span>
                    <span><strong>GenAI inflection point:</strong> ChatGPT/Copilot create new exfiltration vectors requiring new capabilities</span>
                  </li>
                </ul>
              </div>

              <div className="bg-gray-900 rounded-lg border border-gray-800 p-4">
                <h4 className="font-semibold text-white mb-3">The Three Insider Threat Types</h4>
                <div className="space-y-3 text-sm">
                  <div className="flex items-center gap-3">
                    <span className="bg-red-900/50 text-red-400 px-2 py-1 rounded text-xs">Malicious</span>
                    <span className="text-gray-400">Intentional theft, sabotage, fraud (departing employees, competitors)</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <span className="bg-yellow-900/50 text-yellow-400 px-2 py-1 rounded text-xs">Negligent</span>
                    <span className="text-gray-400">Accidental exposure through carelessness (74% cite human error)</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <span className="bg-purple-900/50 text-purple-400 px-2 py-1 rounded text-xs">Compromised</span>
                    <span className="text-gray-400">Credential theft, social engineering, DPRK IT workers (220% YoY)</span>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Market Structure Section */}
          <section id="structure" className="space-y-6">
            <h2 className="text-2xl font-bold flex items-center gap-3">
              <span>🏗️</span> Market Structure
            </h2>

            {/* Market Sizing */}
            <div className="bg-gray-900 rounded-lg border border-gray-800 overflow-hidden">
              <div className="p-4 border-b border-gray-800">
                <h3 className="font-semibold">Market Size & Growth (Significant Variance)</h3>
              </div>
              <div className="overflow-x-auto">
                <table className="w-full text-sm">
                  <thead className="bg-gray-800">
                    <tr>
                      <th className="text-left p-3 text-gray-400">Source</th>
                      <th className="text-left p-3 text-gray-400">2024</th>
                      <th className="text-left p-3 text-gray-400">Projection</th>
                      <th className="text-left p-3 text-gray-400">CAGR</th>
                    </tr>
                  </thead>
                  <tbody>
                    {marketSizing.map((row, idx) => (
                      <tr key={idx} className="border-t border-gray-800">
                        <td className="p-3 text-gray-300">{row.source}</td>
                        <td className="p-3 text-white font-medium">{row.val2024}</td>
                        <td className="p-3 text-gray-300">{row.projection}</td>
                        <td className="p-3 text-green-400">{row.cagr}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
              <div className="p-3 bg-gray-800/50 text-xs text-gray-500">
                Note: Wide variance ($3B-$5B) reflects category boundary confusion—ITM overlaps with DLP, UEBA, and employee monitoring markets.
              </div>
            </div>

            {/* Sub-segments */}
            <div className="bg-gray-900 rounded-lg border border-gray-800 p-4">
              <h3 className="font-semibold mb-3">ITM Sub-Segments (Converging)</h3>
              <div className="flex flex-wrap gap-2">
                {marketSubSegments.map((seg, idx) => (
                  <span key={idx} className="px-3 py-1 bg-gray-800 text-gray-300 text-sm rounded-full border border-gray-700">
                    {seg}
                  </span>
                ))}
              </div>
              <div className="mt-3 text-xs text-amber-400">
                ⚠️ Gartner predicts 70% of organizations will consolidate DLP + IRM + IAM by 2027
              </div>
            </div>

            {/* Competitive Landscape */}
            <div className="bg-gray-900 rounded-lg border border-gray-800 overflow-hidden">
              <div className="p-4 border-b border-gray-800 flex items-center justify-between">
                <h3 className="font-semibold">Top 15 Vendors by Consensus (2025)</h3>
                <div className="flex items-center gap-4 text-xs">
                  <span className="flex items-center gap-1"><span className="w-2 h-2 rounded-full bg-green-400"></span> Complete</span>
                  <span className="flex items-center gap-1"><span className="w-2 h-2 rounded-full bg-yellow-400"></span> In Progress</span>
                  <span className="flex items-center gap-1"><span className="w-2 h-2 rounded-full bg-gray-500"></span> Pending</span>
                </div>
              </div>
              <div className="divide-y divide-gray-800">
                {competitors.map((comp, idx) => {
                  const statusStyle = getStatusStyle(comp.status);
                  return (
                    <div key={idx} className="p-4 hover:bg-gray-800/50 transition-colors">
                      <div className="flex items-start justify-between gap-4">
                        <div className="flex-1">
                          <div className="flex items-center gap-2 mb-1">
                            <span className="font-semibold text-white">{comp.name}</span>
                            <span className="text-gray-500">•</span>
                            <span className="text-sm text-gray-400">{comp.product}</span>
                          </div>
                          <p className="text-sm text-gray-400">{comp.focus}</p>
                        </div>
                        <div className="flex flex-col items-end gap-2">
                          <span className="text-xs px-2 py-1 bg-blue-900/50 text-blue-400 rounded">{comp.position}</span>
                          <span className={`text-xs px-2 py-1 rounded flex items-center gap-1 ${statusStyle.bg} ${statusStyle.text}`}>
                            <span className={`w-1.5 h-1.5 rounded-full ${statusStyle.dot}`}></span>
                            {statusStyle.label}
                          </span>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </section>

          {/* Market Dynamics Section */}
          <section id="motion" className="space-y-6">
            <h2 className="text-2xl font-bold flex items-center gap-3">
              <span>📈</span> Market Dynamics
            </h2>

            {/* Market Assessment */}
            <div className="bg-gradient-to-r from-blue-900/30 to-purple-900/30 rounded-lg border border-blue-800/50 p-4">
              <h3 className="font-semibold text-blue-400 mb-2">📊 Market Assessment</h3>
              <p className="text-gray-300">
                <strong>Position:</strong> Early Slope of Enlightenment. <strong>Direction:</strong> Consolidation + GenAI Inflection.
                Core ITM has matured beyond early adoption, but GenAI creates new innovation cycle. Market Guide format (no MQ) indicates emerging category still defining boundaries.
              </p>
            </div>

            {/* Hype Cycle */}
            <div className="bg-gray-900 rounded-lg border border-gray-800 p-4">
              <h3 className="font-semibold mb-4">Hype Cycle Positioning (2025)</h3>
              <div className="space-y-3">
                {hypePositions.map((item, idx) => (
                  <div key={idx} className="flex items-center justify-between p-2 rounded bg-gray-800/50">
                    <div>
                      <span className="text-gray-200">{item.tech}</span>
                      <span className="text-gray-500 text-sm ml-2">— {item.note}</span>
                    </div>
                    <span className={`text-xs px-2 py-1 rounded ${
                      item.status === 'hot' ? 'bg-red-900/50 text-red-400' :
                      item.status === 'rising' ? 'bg-green-900/50 text-green-400' :
                      item.status === 'emerging' ? 'bg-blue-900/50 text-blue-400' :
                      item.status === 'declining' ? 'bg-orange-900/50 text-orange-400' :
                      'bg-gray-700 text-gray-400'
                    }`}>
                      {item.position}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* Major Trends */}
            <div className="bg-gray-900 rounded-lg border border-gray-800 p-4">
              <h3 className="font-semibold mb-4">5 Major Trends for 2025-2026</h3>
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
            <div className="bg-gray-900 rounded-lg border border-gray-800 overflow-hidden">
              <div className="p-4 border-b border-gray-800">
                <h3 className="font-semibold">M&A Activity (Consolidation Signals)</h3>
              </div>
              <div className="overflow-x-auto">
                <table className="w-full text-sm">
                  <thead className="bg-gray-800">
                    <tr>
                      <th className="text-left p-3 text-gray-400">Date</th>
                      <th className="text-left p-3 text-gray-400">Acquirer</th>
                      <th className="text-left p-3 text-gray-400">Target</th>
                      <th className="text-left p-3 text-gray-400">Value</th>
                      <th className="text-left p-3 text-gray-400">Signal</th>
                    </tr>
                  </thead>
                  <tbody>
                    {maActivity.map((row, idx) => (
                      <tr key={idx} className="border-t border-gray-800">
                        <td className="p-3 text-gray-400">{row.date}</td>
                        <td className="p-3 text-white">{row.acquirer}</td>
                        <td className="p-3 text-gray-300">{row.target}</td>
                        <td className="p-3 text-green-400">{row.value}</td>
                        <td className="p-3 text-gray-400">{row.signal}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </section>

          {/* Stakeholders Section */}
          <section id="stakeholders" className="space-y-6">
            <h2 className="text-2xl font-bold flex items-center gap-3">
              <span>👥</span> Stakeholders
            </h2>

            {/* CISO JTBD */}
            <div className="bg-gray-900 rounded-lg border border-gray-800 overflow-hidden">
              <div className="p-4 border-b border-gray-800 bg-gradient-to-r from-blue-900/30 to-transparent">
                <h3 className="font-semibold">Enterprise CISO Jobs To Be Done</h3>
                <p className="text-sm text-gray-400 mt-1">"Protect crown jewel data from departing employees and GenAI leakage while maintaining employee trust and demonstrating measurable ROI to board"</p>
              </div>
              <table className="w-full text-sm">
                <thead className="bg-gray-800">
                  <tr>
                    <th className="text-left p-3 text-gray-400">Job Statement</th>
                    <th className="text-left p-3 text-gray-400">Success Metric / Feature</th>
                  </tr>
                </thead>
                <tbody>
                  {cisoJobs.map((row, idx) => (
                    <tr key={idx} className="border-t border-gray-800">
                      <td className="p-3 text-gray-300">{row.job}</td>
                      <td className="p-3 text-gray-400">{row.metric}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            {/* SOC Analyst JTBD */}
            <div className="bg-gray-900 rounded-lg border border-gray-800 overflow-hidden">
              <div className="p-4 border-b border-gray-800 bg-gradient-to-r from-purple-900/30 to-transparent">
                <h3 className="font-semibold">SOC Analyst Jobs To Be Done</h3>
                <p className="text-sm text-gray-400 mt-1">"Investigate suspicious activity quickly with full context to determine real threat vs false positive before data leaves"</p>
              </div>
              <table className="w-full text-sm">
                <thead className="bg-gray-800">
                  <tr>
                    <th className="text-left p-3 text-gray-400">Job Statement</th>
                    <th className="text-left p-3 text-gray-400">Success Metric</th>
                  </tr>
                </thead>
                <tbody>
                  {socAnalystJobs.map((row, idx) => (
                    <tr key={idx} className="border-t border-gray-800">
                      <td className="p-3 text-gray-300">{row.job}</td>
                      <td className="p-3 text-gray-400">{row.metric}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            {/* HR/Legal JTBD */}
            <div className="bg-gray-900 rounded-lg border border-gray-800 overflow-hidden">
              <div className="p-4 border-b border-gray-800 bg-gradient-to-r from-green-900/30 to-transparent">
                <h3 className="font-semibold">HR / Legal Jobs To Be Done</h3>
                <p className="text-sm text-gray-400 mt-1">"Partner with Security to address employee risks while protecting from wrongful termination claims and maintaining workforce trust"</p>
              </div>
              <table className="w-full text-sm">
                <thead className="bg-gray-800">
                  <tr>
                    <th className="text-left p-3 text-gray-400">Job Statement</th>
                    <th className="text-left p-3 text-gray-400">Success Metric</th>
                  </tr>
                </thead>
                <tbody>
                  {hrLegalJobs.map((row, idx) => (
                    <tr key={idx} className="border-t border-gray-800">
                      <td className="p-3 text-gray-300">{row.job}</td>
                      <td className="p-3 text-gray-400">{row.metric}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            {/* Mid-Market IT Director JTBD */}
            <div className="bg-gray-900 rounded-lg border border-gray-800 overflow-hidden">
              <div className="p-4 border-b border-gray-800 bg-gradient-to-r from-orange-900/30 to-transparent">
                <h3 className="font-semibold">Mid-Market IT Director Jobs To Be Done</h3>
                <p className="text-sm text-gray-400 mt-1">"Get visibility into employee data activity, catch obvious risks, meet compliance—without dedicated team or enterprise infrastructure"</p>
              </div>
              <table className="w-full text-sm">
                <thead className="bg-gray-800">
                  <tr>
                    <th className="text-left p-3 text-gray-400">Job Statement</th>
                    <th className="text-left p-3 text-gray-400">Success Metric</th>
                  </tr>
                </thead>
                <tbody>
                  {midMarketJobs.map((row, idx) => (
                    <tr key={idx} className="border-t border-gray-800">
                      <td className="p-3 text-gray-300">{row.job}</td>
                      <td className="p-3 text-gray-400">{row.metric}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            {/* Key Pain Point */}
            <div className="bg-red-900/20 border border-red-800/50 rounded-lg p-4">
              <h4 className="font-semibold text-red-400 mb-2">The Core Pain: Detection Confidence Gap</h4>
              <p className="text-gray-300">
                "93% of security leaders say insider threats are harder to detect than external attacks, yet only 23% express confidence in their organization's ability to detect them."
                <span className="text-gray-500 ml-2">— Ponemon Institute 2024</span>
              </p>
            </div>
          </section>

          {/* Economics Section */}
          <section id="economics" className="space-y-6">
            <h2 className="text-2xl font-bold flex items-center gap-3">
              <span>💰</span> Economics & ROI
            </h2>

            {/* ROI Metrics */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {roiMetrics.map((item, idx) => (
                <div key={idx} className="bg-gray-900 rounded-lg border border-gray-800 p-4 text-center">
                  <div className="text-2xl font-bold text-green-400">{item.value}</div>
                  <div className="text-sm text-gray-400">{item.metric}</div>
                </div>
              ))}
            </div>

            {/* Containment Time Impact */}
            <div className="bg-gray-900 rounded-lg border border-gray-800 overflow-hidden">
              <div className="p-4 border-b border-gray-800">
                <h3 className="font-semibold">Containment Time → Cost Correlation (The $8.1M Insight)</h3>
              </div>
              <table className="w-full text-sm">
                <thead className="bg-gray-800">
                  <tr>
                    <th className="text-left p-3 text-gray-400">Containment Time</th>
                    <th className="text-left p-3 text-gray-400">Average Annual Cost</th>
                    <th className="text-left p-3 text-gray-400">Savings vs Longest</th>
                  </tr>
                </thead>
                <tbody>
                  {containmentImpact.map((row, idx) => (
                    <tr key={idx} className={`border-t border-gray-800 ${idx === 0 ? 'bg-green-900/20' : ''}`}>
                      <td className="p-3 text-gray-300 font-medium">{row.timeframe}</td>
                      <td className="p-3 text-white">{row.cost}</td>
                      <td className={`p-3 ${idx === 0 ? 'text-green-400 font-semibold' : 'text-gray-400'}`}>{row.savings}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
              <div className="p-3 bg-green-900/20 text-sm text-green-400">
                💡 Key insight: Organizations that contain incidents in &lt;31 days save $8.1M annually vs those taking &gt;91 days. This is the #1 ROI metric for ITM.
              </div>
            </div>

            {/* Pricing Tiers */}
            <div className="bg-gray-900 rounded-lg border border-gray-800 overflow-hidden">
              <div className="p-4 border-b border-gray-800">
                <h3 className="font-semibold">Pricing Tiers (Directional)</h3>
              </div>
              <table className="w-full text-sm">
                <thead className="bg-gray-800">
                  <tr>
                    <th className="text-left p-3 text-gray-400">Tier</th>
                    <th className="text-left p-3 text-gray-400">Annual Range</th>
                    <th className="text-left p-3 text-gray-400">Representative Vendors</th>
                    <th className="text-left p-3 text-gray-400">Typical Buyer</th>
                  </tr>
                </thead>
                <tbody>
                  {pricingTiers.map((row, idx) => (
                    <tr key={idx} className="border-t border-gray-800">
                      <td className="p-3 text-white font-medium">{row.tier}</td>
                      <td className="p-3 text-green-400">{row.range}</td>
                      <td className="p-3 text-gray-300">{row.vendors}</td>
                      <td className="p-3 text-gray-400">{row.buyer}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            {/* Budget Allocation */}
            <div className="bg-gradient-to-r from-blue-900/30 to-purple-900/30 rounded-lg border border-blue-800/50 p-4">
              <h4 className="font-semibold text-blue-400 mb-2">📊 Budget Momentum</h4>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-sm">
                <div>
                  <div className="text-2xl font-bold text-white">16.5%</div>
                  <div className="text-gray-400">Of IT security budget allocated to insider threat (doubled from 8.2%)</div>
                </div>
                <div>
                  <div className="text-2xl font-bold text-white">81%</div>
                  <div className="text-gray-400">Have or plan formal IRM program</div>
                </div>
                <div>
                  <div className="text-2xl font-bold text-white">99%</div>
                  <div className="text-gray-400">Expect budget increases through 2028</div>
                </div>
              </div>
            </div>

            {/* TCO Warning */}
            <div className="bg-amber-900/20 border border-amber-800/50 rounded-lg p-4">
              <h4 className="font-semibold text-amber-400 mb-2">⚠️ TCO Considerations (Hidden Costs)</h4>
              <ul className="text-sm text-gray-300 space-y-1">
                <li>• <strong>Deployment time:</strong> Days (Above Security) vs 3-6 months (DTEX, Securonix) = $4M-8M exposure during gap</li>
                <li>• <strong>Integration complexity:</strong> $50K-150K for SIEM/SOAR/HR integrations</li>
                <li>• <strong>Analyst overhead:</strong> 2-4 FTEs required for enterprise deployment</li>
                <li>• <strong>User training:</strong> Delivers highest ROI ($5.2M savings) but often underfunded</li>
                <li>• <strong>5-year TCO can be 5-10x initial purchase price</strong></li>
              </ul>
            </div>
          </section>

          {/* PM Strategy Section */}
          <section id="product" className="space-y-6">
            <h2 className="text-2xl font-bold flex items-center gap-3">
              <span>🎯</span> PM Strategic Elements
            </h2>

            {/* Table Stakes */}
            <div className="bg-gray-900 rounded-lg border border-gray-800 p-4">
              <h3 className="font-semibold mb-3">Table Stakes (2025 MVP—Required for RFP)</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
                {tableStakes.map((feature, idx) => (
                  <div key={idx} className="flex items-center gap-2 text-sm">
                    <span className="text-green-400">✓</span>
                    <span className="text-gray-300">{feature}</span>
                  </div>
                ))}
              </div>
              <div className="mt-4 p-2 bg-gray-800 rounded text-xs text-gray-400">
                Missing any of these = immediate RFP disqualification. These are no longer differentiators.
              </div>
            </div>

            {/* Differentiators */}
            <div className="bg-gray-900 rounded-lg border border-gray-800 p-4">
              <h3 className="font-semibold mb-4">Key Differentiators (What Wins Deals)</h3>
              <div className="space-y-4">
                {differentiators.map((diff, idx) => (
                  <div key={idx} className="border-l-2 border-purple-500 pl-4">
                    <h4 className="font-medium text-purple-400">{diff.name}</h4>
                    <p className="text-sm text-gray-400 mt-1">{diff.description}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Success Metrics */}
            <div className="bg-gray-900 rounded-lg border border-gray-800 overflow-hidden">
              <div className="p-4 border-b border-gray-800">
                <h3 className="font-semibold">Key Success Metrics</h3>
              </div>
              <table className="w-full text-sm">
                <thead className="bg-gray-800">
                  <tr>
                    <th className="text-left p-3 text-gray-400">Metric</th>
                    <th className="text-left p-3 text-gray-400">Definition</th>
                    <th className="text-left p-3 text-gray-400">Target</th>
                  </tr>
                </thead>
                <tbody>
                  {successMetrics.map((row, idx) => (
                    <tr key={idx} className="border-t border-gray-800">
                      <td className="p-3 text-white font-medium">{row.metric}</td>
                      <td className="p-3 text-gray-400">{row.definition}</td>
                      <td className="p-3 text-green-400">{row.target}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            {/* If I'm a PM Here Box */}
            <div className="bg-gradient-to-r from-yellow-900/30 to-orange-900/30 border border-yellow-700/50 rounded-lg p-6">
              <h3 className="text-lg font-semibold text-yellow-400 mb-4">💡 If I am a PM Here, I Need to Know...</h3>
              <div className="space-y-3 text-sm">
                <div className="flex items-start gap-3">
                  <span className="text-yellow-400 font-bold">1.</span>
                  <span className="text-gray-300"><strong>Prevention beats detection.</strong> 60-80% incident reduction (prevention) vs 30-50% (detection). Real-time coaching changes behavior.</span>
                </div>
                <div className="flex items-start gap-3">
                  <span className="text-yellow-400 font-bold">2.</span>
                  <span className="text-gray-300"><strong>Microsoft Purview is bundled in E5.</strong> Your value prop must be: prevention capability, non-M365 coverage, or deployment speed. Detection-only faces existential pressure.</span>
                </div>
                <div className="flex items-start gap-3">
                  <span className="text-yellow-400 font-bold">3.</span>
                  <span className="text-gray-300"><strong>GenAI visibility is P0 today, agentic AI governance is 2026-2027.</strong> ChatGPT/Copilot monitoring is table stakes; Microsoft "Risky Agents" targeting Dec 2026.</span>
                </div>
                <div className="flex items-start gap-3">
                  <span className="text-yellow-400 font-bold">4.</span>
                  <span className="text-gray-300"><strong>Containment time is the ultimate KPI.</strong> $8.1M difference between &lt;31 days and &gt;91 days. Build for speed-to-resolution.</span>
                </div>
                <div className="flex items-start gap-3">
                  <span className="text-yellow-400 font-bold">5.</span>
                  <span className="text-gray-300"><strong>False positive rate kills adoption.</strong> &lt;5% FP is target. Behavioral AI and tuning capabilities are non-negotiable.</span>
                </div>
                <div className="flex items-start gap-3">
                  <span className="text-yellow-400 font-bold">6.</span>
                  <span className="text-gray-300"><strong>Privacy-by-design is required for EU expansion.</strong> GDPR proportionality, works council workflows, pseudonymization—not bolt-on features.</span>
                </div>
                <div className="flex items-start gap-3">
                  <span className="text-yellow-400 font-bold">7.</span>
                  <span className="text-gray-300"><strong>Deployment speed differentiates.</strong> Days (Above Security) vs months (DTEX, Securonix) = $4M-8M exposure during implementation.</span>
                </div>
                <div className="flex items-start gap-3">
                  <span className="text-yellow-400 font-bold">8.</span>
                  <span className="text-gray-300"><strong>HR/Legal are key stakeholders.</strong> Unlike pure security tools, ITM must serve HR workflows, legal hold, and works council requirements.</span>
                </div>
              </div>
            </div>
          </section>

          {/* Strategic Theses Section */}
          <section id="theses" className="space-y-6">
            <h2 className="text-2xl font-bold flex items-center gap-3">
              <span>🔮</span> Strategic Theses
            </h2>
            <p className="text-gray-400">
              Three structural shifts reshaping this market. Not incremental changes—fundamental rewirings of where value is created and captured.
            </p>

            {theses.map((thesis) => (
              <div key={thesis.id} className={`bg-gray-900 rounded-lg border border-gray-800 overflow-hidden border-l-4 ${getThesisAccent(thesis.color)}`}>
                <div className="p-4 border-b border-gray-800">
                  <div className="flex items-center justify-between mb-2">
                    <h3 className="font-semibold text-lg">{thesis.title}</h3>
                    <div className="flex items-center gap-2">
                      <span className={`text-xs px-2 py-1 rounded border ${getConfidenceColor(thesis.confidence)}`}>
                        {thesis.confidence}
                      </span>
                      <span className="text-xs text-gray-500">{thesis.timeframe}</span>
                    </div>
                  </div>
                  <p className="text-gray-300">{thesis.claim}</p>
                </div>
                <div className="p-4 bg-gray-800/30">
                  <h4 className="text-xs font-semibold text-gray-400 mb-2">EVIDENCE</h4>
                  <ul className="space-y-1">
                    {thesis.evidence.map((item, idx) => (
                      <li key={idx} className="text-sm text-gray-400 flex items-start gap-2">
                        <span className="text-gray-600">→</span>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                  <div className="mt-4 pt-3 border-t border-gray-700">
                    <span className="text-sm"><strong className="text-white">Implication:</strong> <span className="text-gray-400">{thesis.implication}</span></span>
                  </div>
                </div>
              </div>
            ))}

            {/* Synthesis */}
            <div className="bg-gray-900 rounded-lg border border-gray-800 p-6">
              <h3 className="font-semibold mb-4">How These Connect</h3>
              <div className="flex flex-col md:flex-row items-center justify-center gap-4 text-sm">
                <div className="bg-green-900/30 px-4 py-2 rounded border border-green-800/50 text-green-400">
                  Prevention paradigm
                </div>
                <span className="text-gray-500">→ forces →</span>
                <div className="bg-purple-900/30 px-4 py-2 rounded border border-purple-800/50 text-purple-400">
                  Microsoft differentiation
                </div>
                <span className="text-gray-500">→ while →</span>
                <div className="bg-orange-900/30 px-4 py-2 rounded border border-orange-800/50 text-orange-400">
                  GenAI creates new attack surface
                </div>
              </div>
              <p className="text-gray-400 text-sm text-center mt-4">
                Detection commoditizes (Purview bundling) → value shifts to prevention → GenAI monitoring becomes P0 → agentic AI governance is 2026-2027 differentiator window
              </p>
            </div>

            {/* Recommendations */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* For Buyers */}
              <div className="bg-gray-900 rounded-lg border border-gray-800 p-4">
                <div className="flex items-center gap-2 mb-3">
                  <span className="bg-blue-900/50 text-blue-400 px-2 py-1 rounded text-sm font-semibold">B</span>
                  <h4 className="font-semibold">For Enterprise Buyers</h4>
                </div>
                <ul className="space-y-2 text-sm text-gray-400">
                  <li className="flex items-start gap-2">
                    <span className="text-blue-400">•</span>
                    <span>Evaluate prevention capability, not just detection—60-80% vs 30-50% incident reduction</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-blue-400">•</span>
                    <span>Audit Microsoft Purview coverage gaps before buying standalone ITM</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-blue-400">•</span>
                    <span>Require GenAI/shadow AI monitoring capabilities</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-blue-400">•</span>
                    <span>Prioritize deployment speed—$4M-8M exposure during implementation</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-blue-400">•</span>
                    <span>Calculate true TCO including integration and FTE costs</span>
                  </li>
                </ul>
              </div>

              {/* For Vendors */}
              <div className="bg-gray-900 rounded-lg border border-gray-800 p-4">
                <div className="flex items-center gap-2 mb-3">
                  <span className="bg-purple-900/50 text-purple-400 px-2 py-1 rounded text-sm font-semibold">V</span>
                  <h4 className="font-semibold">For Vendors / Product Leaders</h4>
                </div>
                <ul className="space-y-2 text-sm text-gray-400">
                  <li className="flex items-start gap-2">
                    <span className="text-purple-400">•</span>
                    <span>Build prevention, not just detection—real-time coaching changes behavior</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-purple-400">•</span>
                    <span>Differentiate against Microsoft: prevention, non-M365, or speed</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-purple-400">•</span>
                    <span>GenAI visibility is P0 today; agentic AI governance is 2026-2027 window</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-purple-400">•</span>
                    <span>Privacy-by-design is required for EU expansion</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-purple-400">•</span>
                    <span>Target &lt;5% false positive rate—FP kills adoption</span>
                  </li>
                </ul>
              </div>
            </div>
          </section>

          {/* Resources */}
          <section className="space-y-4">
            <h2 className="text-xl font-bold">📎 Resources</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <a href="#" className="bg-gray-900 rounded-lg border border-gray-800 p-4 hover:border-gray-700 transition-colors">
                <div className="flex items-center gap-3">
                  <span className="text-2xl">📄</span>
                  <div>
                    <div className="font-medium">Full ITM Strategic Brief</div>
                    <div className="text-sm text-gray-500">Complete SRP analysis (PDF)</div>
                  </div>
                </div>
              </a>
              <a href="#" className="bg-gray-900 rounded-lg border border-gray-800 p-4 hover:border-gray-700 transition-colors">
                <div className="flex items-center gap-3">
                  <span className="text-2xl">📊</span>
                  <div>
                    <div className="font-medium">Vendor Comparison Matrix</div>
                    <div className="text-sm text-gray-500">Side-by-side feature analysis</div>
                  </div>
                </div>
              </a>
            </div>
          </section>
        </div>
      </div>

      {/* Footer */}
      <footer className="border-t border-gray-800 py-8 mt-12">
        <div className="max-w-7xl mx-auto px-4 text-center text-sm text-gray-500">
          <p>Analysis by <span className="text-white">Andy Simko</span> • CISSP • GPEN • CISA • GSNA • HCSFP • PMC-Level III</p>
          <p className="mt-1">15+ years in cybersecurity • Methodology: Systematic Research Process (SRP)</p>
        </div>
      </footer>
    </div>
  );
};

export default InsiderThreatPage;
