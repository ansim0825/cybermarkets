"use client";
import React, { useState } from 'react';
import { Logo } from '@/components/Logo';

const MDRPage = () => {
  const [activeSection, setActiveSection] = useState('overview');

    // SecOps & Analytics sub-segments
    const subSegments = [
      { id: 'siem', name: 'SIEM', active: true, href: '/pillars/secops/siem' },
      { id: 'soar', name: 'SOAR', active: true, href: '/pillars/secops/soar' },
      { id: 'xdr', name: 'XDR', active: true, href: '/pillars/secops/xdr' },
      { id: 'mdr', name: 'MDR/MXDR', active: true, href: '/pillars/secops/mdr' },
      { id: 'ndr', name: 'NDR', active: true, href: '/pillars/secops/ndr' },
      { id: 'aidr', name: 'NDR', active: true, href: '/pillars/secops/aidr' },
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

  const relatedPillars = [
    { name: 'Endpoint & Workload', primary: true },
    { name: 'Network & Edge', primary: false },
    { name: 'Identity', primary: false },
  ];

  const keyInsights = [
    { stat: '$4B+', label: 'Market size (2025)' },
    { stat: '23.5%', label: 'CAGR through 2029' },
    { stat: '600+', label: 'Vendors claiming MDR' },
    { stat: '3 hrs', label: 'MDR MTTR vs 66 hrs in-house' },
  ];

  const marketSizing = [
    { source: 'Gartner (Market Guide)', val2024: '$4.1B', projection: '$12B (2029)', cagr: '23.5%' },
    { source: 'Grand View Research', val2024: '$4.32B', projection: '$15.31B (2030)', cagr: '23.5%' },
    { source: 'Mordor Intelligence', val2024: '$4.19B', projection: '$11.30B (2030)', cagr: '21.95%' },
    { source: 'MarketsandMarkets', val2024: '$4.1B', projection: '$11.8B (2029)', cagr: '23.5%' },
  ];

  const marketSubSegments = [
    'Pure-Play MDR',
    'Vendor-Attached MDR (EDR/XDR)',
    'MSSP-Evolved MDR',
    'Telco/IT Services MDR',
    'SMB/MSP-Focused MDR',
    'Enterprise MDR',
  ];

  const competitors = [
    { 
      name: 'CrowdStrike', 
      product: 'Falcon Complete',
      position: 'Forrester Leader', 
      focus: 'Highest Strategy scores. Charlotte AI for agentic workflows. Cross-domain detection (endpoint, identity, cloud). Platform integration.',
      status: 'in-progress',
      href: '/pillars/secops/mdr/companies/crowdstrike'
    },
    { 
      name: 'Arctic Wolf', 
      product: 'Aurora Platform',
      position: 'Pure-Play Leader', 
      focus: 'IDC MarketScape Leader. Concierge Security Team model. Cylance acquisition for native endpoint. Mid-market dominant.',
      status: 'in-progress',
      href: '/pillars/secops/mdr/companies/arcticwolf'
    },
    { 
      name: 'Red Canary', 
      product: 'Red Canary MDR (Now Zscaler)',
      position: 'Forrester Leader', 
      focus: 'Detection engineering pioneer. Acquired by Zscaler ($675M). Highest scores in 10 Forrester criteria. Agentic AI capabilities.',
      status: 'in-progress',
      href: '/pillars/secops/mdr/companies/redcanary'
    },
    { 
      name: 'Expel', 
      product: 'Expel MDR',
      position: 'Forrester Leader', 
      focus: 'Transparent workbench model. Sub-23 min MTTR. 90% alert noise reduction. 15/21 highest Forrester scores.',
      status: 'in-progress',
      href: '/pillars/secops/mdr/companies/expel'
    },
    { 
      name: 'Sophos', 
      product: 'Sophos MDR',
      position: 'Vendor-Attached Leader', 
      focus: 'G2 #1 overall. Gartner Customers\' Choice. Secureworks acquisition ($859M). Largest pure-play post-merger.',
      status: 'in-progress',
      href: '/pillars/secops/mdr/companies/sophos'
    },
    { 
      name: 'SentinelOne', 
      product: 'Vigilance MDR',
      position: 'Vendor-Attached Leader', 
      focus: '95% willingness to recommend. 30-minute MTTR. 85% false positive reduction. Purple AI integration.',
      status: 'in-progress',
      href: '/pillars/secops/mdr/companies/sentinelone'
    },
    { 
      name: 'eSentire', 
      product: 'eSentire MDR',
      position: 'Pure-Play Leader', 
      focus: 'IDC MarketScape Leader. 300+ technology integrations. Outcome-based provider. GenAI leadership.',
      status: 'in-progress',
      href: '/pillars/secops/mdr/companies/esentire'
    },
    { 
      name: 'Secureworks', 
      product: 'Taegis MDR/XDR',
      position: 'MSSP-Evolved', 
      focus: 'Acquired by Sophos ($859M). Dell backing. Taegis XDR + ITDR + next-gen SIEM integration.',
      status: 'in-progress',
      href: '/pillars/secops/mdr/companies/secureworks'
    },
    { 
      name: 'Huntress', 
      product: 'Huntress Managed EDR',
      position: 'SMB/MSP Leader', 
      focus: 'PeerSpot 9.4/10. Purpose-built for MSPs. Low false positive rate. G2 Leader.',
      status: 'in-progress',
      href: '/pillars/secops/mdr/companies/huntress'
    },
    { 
      name: 'Rapid7', 
      product: 'Rapid7 MDR',
      position: 'Integrated Platform', 
      focus: 'InsightIDR integration. Agentic AI workflows. Mid-market strength.',
      status: 'in-progress',
      href: '/pillars/secops/mdr/companies/rapid7'
    },
    { 
      name: 'Microsoft', 
      product: 'Defender Experts',
      position: 'Platform Incumbent', 
      focus: 'Massive E5 installed base. Native M365 integration. Bundled economics.',
      status: 'in-progress',
      href: '/pillars/secops/mdr/companies/microsoft'
    },
    { 
      name: 'Palo Alto Networks', 
      product: 'Unit 42 MDR',
      position: 'Platform Leader', 
      focus: 'Cortex XDR foundation. Unit 42 threat intel. Platform integration.',
      status: 'in-progress',
      href: '/pillars/secops/mdr/companies/paloalto'
    },
    { 
      name: 'Binary Defense', 
      product: 'Binary Defense MDR',
      position: 'Strong Performer', 
      focus: 'Regional strength. Veteran-founded. Forrester Strong Performer.',
      status: 'in-progress',
      href: '/pillars/secops/mdr/companies/binarydefense'
    },
    { 
      name: 'Blackpoint Cyber', 
      product: 'Blackpoint MDR',
      position: 'MSP-Focused', 
      focus: 'Rapid SMB growth. Strong MSP partnerships. G2 Leader.',
      status: 'in-progress',
      href: '/pillars/secops/mdr/companies/blackpoint'
    },
    { 
      name: 'LevelBlue', 
      product: 'LevelBlue MDR',
      position: 'MSSP Consolidator', 
      focus: 'Cybereason acquisition. Unified XDR + MDR + DFIR. Largest pure-play MSSP.',
      status: 'in-progress',
      href: '/pillars/secops/mdr/companies/levelblue'
    },
  ];

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
    { name: 'Agentic AI & Autonomous SOC', description: 'AI agents investigating, triaging, and responding autonomously. 1,445% surge in multi-agent system inquiries. CrowdStrike Charlotte AI, Ontinue sub-60-second containment.' },
    { name: 'Proactive Posture Management', description: 'MDR evolving from reactive D&R to exposure management, attack surface management, and security posture improvement. Detection alone is table stakes.' },
    { name: 'Platform Consolidation / "Platformization"', description: 'MDR + XDR + SIEM + ITDR converging. Standalone MDR giving way to MDR-as-platform-layer. Zscaler/Red Canary, Sophos/Secureworks signal trend.' },
    { name: 'Detection-as-Code at Scale', description: 'Software-driven deployment of detections with unit testing. Forrester: "the only way to scale given the enormous amount of data."' },
    { name: 'Regulatory-Driven Adoption', description: 'NIS2 (Oct 2024), DORA (Jan 2025), US critical infrastructure rules converting MDR from optional to mandatory for essential services.' },
  ];

  const hypePositions = [
    { tech: 'Core MDR Services', position: 'Late Slope → Early Plateau', status: 'stable', note: 'Established market per Gartner' },
    { tech: 'Agentic AI Investigation', position: 'Peak of Inflated Expectations', status: 'hot', note: 'Transforms labor economics' },
    { tech: 'Exposure-Aware MDR', position: 'Climbing toward Peak', status: 'rising', note: '50% of findings by 2028' },
    { tech: 'Detection-as-Code', position: 'Slope of Enlightenment', status: 'rising', note: 'Table stakes for leaders' },
    { tech: 'Cloud-Native MDR', position: 'Early Plateau', status: 'stable', note: '70.4% of 2024 revenue' },
  ];

  const maActivity = [
    { date: 'Aug 2025', acquirer: 'Zscaler', target: 'Red Canary', value: '$675M', signal: 'Zero Trust + MDR + Agentic AI' },
    { date: 'Feb 2025', acquirer: 'Sophos (Thoma Bravo)', target: 'Secureworks', value: '$859M', signal: 'Largest pure-play MDR (28K+ customers)' },
    { date: 'Feb 2025', acquirer: 'Arctic Wolf', target: 'BlackBerry Cylance', value: '$160M+', signal: 'Native endpoint for Aurora platform' },
    { date: 'Nov 2025', acquirer: 'LevelBlue', target: 'Cybereason', value: 'Undisclosed', signal: 'XDR + MDR + DFIR unification' },
    { date: 'Jun 2025', acquirer: 'Darktrace', target: 'MDR Launch', value: 'N/A', signal: 'AI-native vendor enters MDR' },
  ];

  const smbJobs = [
    { job: 'Protect my business from shutdown attack', metric: '61% worry attack could put them out of business' },
    { job: 'Get enterprise-grade security without enterprise budget', metric: 'Access to SOC expertise for $30-75K/year' },
    { job: 'Meet cyber insurance requirements', metric: 'Insurability + premium reduction' },
  ];

  const midMarketJobs = [
    { job: 'Get 24/7 coverage without hiring 5+ analysts', metric: 'Extend team with MDR; co-managed model' },
    { job: 'Reduce alert fatigue so team can focus on real threats', metric: '85-90% false positive reduction' },
    { job: 'Prove security ROI to leadership', metric: 'MTTD/MTTR reporting; executive dashboards' },
  ];

  const enterpriseJobs = [
    { job: 'Augment existing SOC with specialized expertise', metric: 'Expert overlay without full headcount' },
    { job: 'Leverage existing tool investments', metric: 'MDR that integrates, not replaces' },
    { job: 'Maintain control while getting external help', metric: 'Shared response model with approval gates' },
  ];

  const mspJobs = [
    { job: 'Deliver enterprise security to SMB clients', metric: 'Force multiplier for small team' },
    { job: 'Reduce per-client operational burden', metric: '100+ hours/month per client relief' },
    { job: 'Protect my reputation when client is attacked', metric: 'White-label/co-branded options' },
  ];

  const tableStakes = [
    '24/7/365 continuous monitoring',
    'Human-led investigation (not just automation)',
    'Threat detection (EDR/XDR telemetry)',
    'Alert triage & prioritization',
    'Incident response (notification + guidance minimum)',
    'Basic threat hunting (proactive)',
    'Reporting & metrics (MTTD, MTTR, dashboards)',
    'SLA guarantees (response time commitments)',
    'Endpoint telemetry coverage',
    'Cloud telemetry (AWS, Azure, GCP)',
    'Identity telemetry (M365, Entra ID)',
    'SIEM integration (Splunk, Sentinel, QRadar)',
    'SOC 2 Type II certification',
    'Defined onboarding timeline',
    'Multiple communication channels',
  ];

  const differentiators = [
    { name: 'Depth of Response', description: 'Notify-only vs. hands-on containment vs. full remediation authority. Enterprise wants control; SMB wants "fix it for me."' },
    { name: 'Detection Engineering Quality', description: 'Custom vs. out-of-box detections; signal-to-noise ratio. Red Canary, Expel win on detection fidelity.' },
    { name: 'Transparency & Explainability', description: 'Full visibility into investigations. Expel transparent workbench vs. "black box" competitors. Show your work.' },
    { name: 'Dedicated Analyst Relationship', description: 'Named analysts who know your environment vs. anonymous SOC ticket numbers. Arctic Wolf Concierge model.' },
    { name: 'Integration Breadth', description: '300+ integrations for leaders (eSentire). Critical for multi-vendor environments. Works with customer\'s existing stack.' },
    { name: 'Speed Metrics (MTTR)', description: 'Sub-hour MTTR (SentinelOne: 30 min, Expel: sub-23 min) vs. days for in-house.' },
    { name: 'AI + Human Balance', description: 'Agentic AI for scale; human judgment for decisions. Gartner: "MDR must remain human-led; AI should support, not replace."' },
  ];

  const roiMetrics = [
    { metric: 'MTTR improvement', value: '3 hrs vs 66 hrs' },
    { metric: 'MTTD improvement', value: '50-63% faster' },
    { metric: 'Breach lifecycle reduction', value: '80 days (with AI)' },
    { metric: 'AI breach cost savings', value: '$1.9M average' },
  ];

  const pricingBySegment = [
    { segment: 'SMB (<100 employees)', spend: '$30K-75K/year', budget: '20-40% of security budget', driver: 'Cyber insurance, survival' },
    { segment: 'Mid-Market (100-1,000)', spend: '$75K-250K/year', budget: '10-30% of security budget', driver: 'Talent shortage, coverage' },
    { segment: 'Enterprise (1,000+)', spend: '$250K-1M+/year', budget: '5-15% of security budget', driver: 'Augmentation, compliance' },
  ];

  const pricingModels = [
    { model: 'Per-Endpoint/Device', range: '$10-30/endpoint/month', notes: 'Predictable environments; scales with growth' },
    { model: 'Per-User', range: '$8-15/user/month', notes: 'User-centric orgs; doesn\'t account for device sprawl' },
    { model: 'Tiered/Bundled', range: '$4,500-20,000+/month', notes: 'Mid-market to enterprise; feature lock-in risk' },
    { model: 'Flat Fee', range: 'Custom', notes: 'Large enterprises; may overpay if environment shrinks' },
  ];

  const theses = [
    {
      id: 1,
      title: 'MDR is a Services Business, Not a Product Business',
      timeframe: '2025-2028',
      confidence: 'High',
      color: 'green',
      claim: 'Success depends on analyst quality as much as detection quality. The providers who get the human-AI balance right will win. "Fake MDR" (600+ vendors) that lacks human oversight will be exposed as buyers mature.',
      evidence: ['Gartner: "MDR must remain human-led; AI should support, not replace"', 'Forrester explicitly evaluates detection engineering', '"Fake MDR" problem reaching inflection point', 'Transparency (Expel model) becoming expectation'],
      implication: 'Evaluate MDR on analyst relationship and detection quality, not just technology. Ask: "Can I see what you\'re doing?"',
    },
    {
      id: 2,
      title: 'Agentic AI Transforms MDR Economics',
      timeframe: '2025-2027',
      confidence: 'High',
      color: 'purple',
      claim: 'The human analyst bottleneck that defined MDR economics is being disrupted. Leading providers report 70-80% reduction in human work on false positives through AI agents. This changes analyst-to-customer ratios fundamentally.',
      evidence: ['1,445% surge in multi-agent system inquiries (Gartner)', 'CrowdStrike Charlotte AI, Ontinue sub-60-second containment', '75% of firms interested in AI agents for SOC investigations', 'Alert fatigue: 11,000+ alerts/day; 40% never investigated'],
      implication: 'AI capabilities are table stakes by 2026. Evaluate how AI augments analysts, not replaces them. Watch for outcome improvements, not AI marketing.',
    },
    {
      id: 3,
      title: 'Platform Consolidation Creates Two Winning Models',
      timeframe: '2025-2028',
      confidence: 'Medium-High',
      color: 'orange',
      claim: 'The market is consolidating around two poles: (1) Platform vendors adding MDR services (CrowdStrike, SentinelOne, Palo Alto) and (2) Pure-play MDR with exceptional detection engineering (Expel, Red Canary). If you\'re not in either camp, you\'re in danger.',
      evidence: ['Zscaler/Red Canary ($675M), Sophos/Secureworks ($859M), Arctic Wolf/Cylance ($160M)', 'Microsoft + CrowdStrike control ~44% endpoint market', 'Pure-play MDR providers acquiring tech to reduce platform dependency', 'Mid-market being squeezed'],
      implication: 'Standalone MDR without platform or detection differentiation faces acquisition or irrelevance. Segment specialists (Huntress for SMB/MSP) can survive in niches.',
    },
  ];

  const whiteSpaceGaps = [
    { gap: 'SaaS Application Coverage', severity: 'High', reason: 'SaaS sprawl creates visibility gaps; Salesforce, Workday, Slack emerging' },
    { gap: 'Exposure Management Integration', severity: 'High', reason: 'Gartner: 50% of MDR findings will include exposures by 2028' },
    { gap: 'Identity-Centric Detection', severity: 'High', reason: 'Identity is #1 attack vector; ITDR capabilities becoming expected' },
    { gap: 'OT/IoT Coverage', severity: 'Medium', reason: 'Vertical-specific; critical infrastructure and manufacturing' },
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
      <nav className="border-b border-gray-800 bg-gray-900/80 backdrop-blur-sm sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3 text-sm text-gray-400">
              <a href="/" className="hover:text-white transition-colors">
                <Logo />
              </a>
              /
              <a href="/pillars/secops" className="text-purple-400 hover:text-purple-300">SecOps & Analytics</a>
            </div>
            <div className="flex gap-6 text-sm">
              <a href="/pillars" className="text-gray-400 hover:text-white transition-colors">Pillars</a>
              <a href="/theses" className="text-gray-400 hover:text-white transition-colors">Theses</a>
              <a href="/about" className="text-gray-400 hover:text-white transition-colors">About</a>
            </div>
          </div>
        </div>
      </nav>

      <div className="max-w-7xl mx-auto px-4 py-6">
        
        {/* Sub-segment Navigation */}
        <div className="flex items-center justify-between mb-8">
          <div className="flex gap-2 flex-wrap">
            {subSegments.map((seg) => (
              <a
                key={seg.id}
                href={seg.href}
                className={`px-4 py-2 rounded-lg text-sm font-medium transition-all flex items-center gap-2 ${
                  seg.active
                    ? 'bg-purple-900/50 text-purple-400 border border-purple-700'
                    : 'bg-gray-800 text-gray-400 hover:bg-gray-700 hover:text-white'
                }`}
              >
                {seg.active && <span className="text-purple-400 text-xs">●</span>}
                {seg.name}
              </a>
            ))}
          </div>
          
          <div className="hidden md:flex items-center gap-2 text-xs text-gray-500">
            <span>Adjacent to:</span>
            {relatedPillars.map((pillar, idx) => (
              <span
                key={idx}
                className={`px-2 py-1 rounded ${pillar.primary ? 'bg-purple-900/30 text-purple-500' : 'bg-gray-800 text-gray-500'}`}
              >
                {pillar.name}
              </span>
            ))}
          </div>
        </div>

        {/* Header */}
        <div className="mb-8">
          <div className="flex items-center gap-4 mb-3">
            <h1 className="text-4xl font-bold bg-gradient-to-r from-purple-400 to-pink-500 bg-clip-text text-transparent">
              Managed Detection & Response
            </h1>
            <span className="px-3 py-1 bg-purple-900/50 text-purple-400 text-xs font-medium rounded-full border border-purple-800">
              SERVICES LAYER
            </span>
          </div>
          <p className="text-lg text-gray-400 max-w-3xl">
            The $4B+ market wrapping human expertise around detection technology—facing Agentic AI transformation and platform consolidation
          </p>
          
          <div className="flex items-center gap-4 mt-4 text-sm text-gray-500">
            <span>Last updated: January 2026</span>
            <span>•</span>
            <span>Methodology: SRP Framework</span>
            <span>•</span>
            <span className="text-purple-400">● Active research</span>
          </div>
        </div>

        {/* Key Stats Bar */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
          {keyInsights.map((insight, idx) => (
            <div key={idx} className="bg-gray-900 border border-gray-800 rounded-xl p-4 text-center">
              <div className="text-2xl font-bold text-purple-400">{insight.stat}</div>
              <div className="text-sm text-gray-500 mt-1">{insight.label}</div>
            </div>
          ))}
        </div>

        {/* The Services Layer Callout */}
        <div className="bg-gradient-to-r from-purple-900/30 to-pink-900/30 border border-purple-800/50 rounded-xl p-6 mb-8">
          <div className="flex items-start gap-4">
            <div className="text-3xl">🛡️</div>
            <div>
              <h3 className="text-lg font-semibold text-purple-400 mb-2">The Fundamental MDR Distinction</h3>
              <p className="text-gray-300 text-sm leading-relaxed">
                MDR is a <span className="text-white font-medium">services business enabled by technology</span>, 
                not a product business with services attached. It sits at the 
                <span className="text-purple-400"> services layer</span> of the detection stack, 
                consuming telemetry from EDR, NDR, ITDR, and cloud security tools below.
                <span className="text-purple-400 font-medium"> Your success depends on analyst quality as much as detection quality.</span>
              </p>
            </div>
          </div>
        </div>

        {/* Main Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          
          {/* Left Sidebar - SRP Navigation */}
          <div className="lg:col-span-1">
            <div className="sticky top-24 space-y-4">
              <div className="bg-gray-900 border border-gray-800 rounded-xl p-4">
                <h3 className="text-sm font-semibold text-gray-300 mb-3">SRP Analysis</h3>
                <div className="space-y-1">
                  {srpSections.map((section) => (
                    <button
                      key={section.id}
                      onClick={() => scrollToSection(section.id)}
                      className={`w-full text-left px-3 py-2 rounded-lg text-sm flex items-center gap-2 transition-all ${
                        activeSection === section.id
                          ? 'bg-purple-900/50 text-purple-400 border border-purple-800'
                          : 'text-gray-400 hover:bg-gray-800 hover:text-white'
                      }`}
                    >
                      {section.icon}
                      {section.name}
                    </button>
                  ))}
                </div>
              </div>

              {/* MDR Stack Visual */}
              <div className="bg-gray-900 border border-gray-800 rounded-xl p-4">
                <h3 className="text-sm font-semibold text-gray-300 mb-3">Detection & Response Stack</h3>
                <div className="space-y-2 text-xs">
                  <div className="px-3 py-2 bg-purple-900/50 border border-purple-700 rounded-lg text-center">
                    <div className="text-purple-400 font-semibold">SERVICES LAYER ★</div>
                    <div className="text-gray-500">MDR • IR Retainer • Threat Hunting</div>
                  </div>
                  <div className="px-3 py-2 bg-gray-800 border border-gray-700 rounded-lg text-center">
                    <div className="text-gray-400 font-semibold">ORCHESTRATION</div>
                    <div className="text-gray-500">SOAR • Case Mgmt</div>
                  </div>
                  <div className="px-3 py-2 bg-gray-800 border border-gray-700 rounded-lg text-center">
                    <div className="text-gray-400 font-semibold">ANALYTICS</div>
                    <div className="text-gray-500">SIEM • XDR • Data Lake</div>
                  </div>
                  <div className="px-3 py-2 bg-gray-800 border border-gray-700 rounded-lg text-center">
                    <div className="text-gray-400 font-semibold">TELEMETRY</div>
                    <div className="text-gray-500">EDR • NDR • ITDR • Cloud</div>
                  </div>
                </div>
                <p className="text-xs text-gray-500 mt-3 text-center">★ MDR wraps expertise around the stack</p>
              </div>
            </div>
          </div>

          {/* Main Content Area */}
          <div className="lg:col-span-3 space-y-8">
            
            {/* Overview Section */}
            <section id="overview" className="bg-gray-900 border border-gray-800 rounded-xl p-6">
              <h2 className="text-xl font-semibold text-white mb-4 flex items-center gap-2">
                📋 Overview
              </h2>
              <div className="space-y-4 text-gray-300 text-sm leading-relaxed">
                <p>
                  <span className="text-white font-medium">Managed Detection and Response (MDR)</span> is an 
                  outsourced cybersecurity service combining technology, human expertise, and defined processes 
                  to provide 24/7 threat monitoring, detection, investigation, and response—delivered as a 
                  managed service rather than a product.
                </p>
                <p>
                  Gartner characterizes MDR as providing <span className="text-purple-400">"remotely delivered, 
                  human-led, turnkey, modern SOC functions, ultimately delivering threat disruption and containment."</span> 
                  With 600+ vendors claiming MDR capabilities, buyer sophistication is increasing and the distinction 
                  between "real MDR" and "MDR-washed" products is emerging as critical.
                </p>
                <div className="bg-gray-800/50 rounded-lg p-4 mt-4">
                  <h4 className="text-white font-medium mb-2">What MDR is NOT</h4>
                  <ul className="space-y-2 text-gray-400">
                    <li className="flex items-start gap-2">
                      <span className="text-red-400">✗</span>
                      <span><span className="text-white">Not just alerting</span> — MSSPs forward alerts; MDR investigates and acts</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-red-400">✗</span>
                      <span><span className="text-white">Not a product</span> — Unlike EDR/XDR which are tools, MDR is a service with humans in the loop</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-red-400">✗</span>
                      <span><span className="text-white">Not full SOC outsourcing</span> — MDR is scoped to D&R; doesn't cover compliance, vuln mgmt, or full SIEM ops</span>
                    </li>
                  </ul>
                </div>
              </div>
            </section>

            {/* Market Structure Section */}
            <section id="structure" className="bg-gray-900 border border-gray-800 rounded-xl p-6">
              <h2 className="text-xl font-semibold text-white mb-4 flex items-center gap-2">
                🏗️ Market Structure
              </h2>
              
              {/* Market Sizing */}
              <div className="mb-6">
                <h3 className="text-md font-medium text-gray-300 mb-3">Market Size & Growth</h3>
                <div className="overflow-x-auto">
                  <table className="w-full text-sm">
                    <thead>
                      <tr className="text-left text-gray-500 border-b border-gray-800">
                        <th className="pb-2">Source</th>
                        <th className="pb-2">2024/2025</th>
                        <th className="pb-2">Projection</th>
                        <th className="pb-2">CAGR</th>
                      </tr>
                    </thead>
                    <tbody>
                      {marketSizing.map((row, idx) => (
                        <tr key={idx} className="border-b border-gray-800/50">
                          <td className="py-2 text-gray-400">{row.source}</td>
                          <td className="py-2 text-purple-400">{row.val2024}</td>
                          <td className="py-2 text-gray-300">{row.projection}</td>
                          <td className="py-2 text-green-400">{row.cagr}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
                <p className="text-xs text-gray-500 mt-2">Note: Gartner publishes Market Guide (not MQ) due to 600+ vendor fragmentation.</p>
              </div>

              {/* Sub-segments */}
              <div className="mb-6">
                <h3 className="text-md font-medium text-gray-300 mb-3">MDR Delivery Models</h3>
                <div className="flex flex-wrap gap-2">
                  {marketSubSegments.map((seg, idx) => (
                    <span key={idx} className="px-3 py-1 bg-gray-800 text-gray-400 text-xs rounded-lg border border-gray-700">
                      {seg}
                    </span>
                  ))}
                </div>
                <div className="mt-3 grid grid-cols-1 md:grid-cols-2 gap-3 text-xs">
                  <div className="bg-gray-800/50 rounded-lg p-3">
                    <span className="text-purple-400 font-medium">Pure-Play:</span>
                    <span className="text-gray-400 ml-1">Tech-agnostic; works with customer's existing tools</span>
                  </div>
                  <div className="bg-gray-800/50 rounded-lg p-3">
                    <span className="text-purple-400 font-medium">Vendor-Attached:</span>
                    <span className="text-gray-400 ml-1">Built on own EDR (CrowdStrike, SentinelOne)</span>
                  </div>
                </div>
              </div>

              {/* White Space Gaps */}
              <div className="mb-6">
                <h3 className="text-md font-medium text-gray-300 mb-3">Emerging Coverage Gaps</h3>
                <div className="space-y-2">
                  {whiteSpaceGaps.map((gap, idx) => (
                    <div key={idx} className="flex items-center justify-between bg-gray-800/50 rounded-lg p-3">
                      <span className="text-white font-medium text-sm">{gap.gap}</span>
                      <div className="flex items-center gap-3">
                        <span className="text-gray-400 text-xs">{gap.reason}</span>
                        <span className={`text-xs px-2 py-0.5 rounded ${gap.severity === 'Critical' ? 'bg-red-900/50 text-red-400' : gap.severity === 'High' ? 'bg-orange-900/50 text-orange-400' : 'bg-yellow-900/50 text-yellow-400'}`}>{gap.severity}</span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Competitive Landscape */}
              <div>
                <div className="flex items-center justify-between mb-3">
                  <h3 className="text-md font-medium text-gray-300">Top 15 Vendors by Analyst Consensus (2025)</h3>
                  <div className="flex gap-4 text-xs">
                    <span className="flex items-center gap-1"><span className="w-2 h-2 rounded-full bg-green-400"></span>Complete</span>
                    <span className="flex items-center gap-1"><span className="w-2 h-2 rounded-full bg-yellow-400"></span>In Progress</span>
                    <span className="flex items-center gap-1"><span className="w-2 h-2 rounded-full bg-gray-500"></span>Pending</span>
                  </div>
                </div>
                <div className="space-y-2">
                  {competitors.map((comp, idx) => {
                    const statusStyle = getStatusStyle(comp.status);
                    return (
                      <a key={idx} href={comp.href} className="flex items-center justify-between bg-gray-800/50 hover:bg-gray-800 rounded-lg p-3 transition-colors group">
                        <div className="flex-1">
                          <div className="flex items-center gap-2 mb-1">
                            <span className="text-white font-medium text-sm">{comp.name}</span>
                            <span className="text-gray-500 text-xs">•</span>
                            <span className="text-gray-400 text-xs">{comp.product}</span>
                          </div>
                          <p className="text-gray-500 text-xs">{comp.focus}</p>
                        </div>
                        <div className="flex items-center gap-3 ml-4">
                          <span className="text-xs px-2 py-1 bg-purple-900/50 text-purple-400 rounded">{comp.position}</span>
                          <span className={`flex items-center gap-1 text-xs ${statusStyle.text}`}>
                            <span className={`w-2 h-2 rounded-full ${statusStyle.dot}`}></span>
                            {statusStyle.label}
                          </span>
                          <span className="text-gray-600 group-hover:text-gray-400 transition-colors">→</span>
                        </div>
                      </a>
                    );
                  })}
                </div>
              </div>
            </section>

            {/* Market Dynamics Section */}
            <section id="motion" className="bg-gray-900 border border-gray-800 rounded-xl p-6">
              <h2 className="text-xl font-semibold text-white mb-4 flex items-center gap-2">
                📈 Market Dynamics
              </h2>

              {/* Assessment */}
              <div className="bg-gradient-to-r from-purple-900/30 to-pink-900/30 border border-purple-800/50 rounded-lg p-4 mb-6">
                <div className="flex items-center gap-3">
                  <span className="text-2xl">📊</span>
                  <h3 className="text-white font-medium">Market Assessment</h3>
                </div>
                <p className="text-gray-300 text-sm mt-2">
                  <span className="text-purple-400 font-medium">Position:</span> Late Slope of Enlightenment → Early Plateau. 
                  <span className="text-purple-400 font-medium ml-2">Direction:</span> Rapid Consolidation. 
                  Gartner predicts 50% of organizations will use MDR by 2025. The "fake MDR" problem is reaching inflection point.
                </p>
              </div>

              {/* Hype Cycle */}
              <div className="mb-6">
                <h3 className="text-md font-medium text-gray-300 mb-3">Hype Cycle Positioning (2025)</h3>
                <div className="space-y-2">
                  {hypePositions.map((item, idx) => (
                    <div key={idx} className="flex items-center justify-between bg-gray-800/50 rounded-lg p-3">
                      <div>
                        <span className="text-white text-sm">{item.tech}</span>
                        <span className="text-gray-500 text-xs ml-2">— {item.note}</span>
                      </div>
                      <span className={`text-xs px-2 py-1 rounded ${
                        item.status === 'hot' ? 'bg-red-900/50 text-red-400' :
                        item.status === 'rising' ? 'bg-green-900/50 text-green-400' :
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
                <h3 className="text-md font-medium text-gray-300 mb-3">5 Major Trends for 2025-2026</h3>
                <div className="space-y-3">
                  {trends.map((trend, idx) => (
                    <div key={idx} className="bg-gray-800/50 rounded-lg p-4">
                      <h4 className="text-purple-400 font-medium text-sm mb-1">{trend.name}</h4>
                      <p className="text-gray-400 text-xs">{trend.description}</p>
                    </div>
                  ))}
                </div>
              </div>

              {/* M&A Activity */}
              <div className="mb-6">
                <h3 className="text-md font-medium text-gray-300 mb-3">M&A Activity (Consolidation Signals)</h3>
                <div className="overflow-x-auto">
                  <table className="w-full text-sm">
                    <thead>
                      <tr className="text-left text-gray-500 border-b border-gray-800">
                        <th className="pb-2">Date</th>
                        <th className="pb-2">Acquirer</th>
                        <th className="pb-2">Target</th>
                        <th className="pb-2">Value</th>
                        <th className="pb-2">Strategic Signal</th>
                      </tr>
                    </thead>
                    <tbody>
                      {maActivity.map((row, idx) => (
                        <tr key={idx} className="border-b border-gray-800/50">
                          <td className="py-2 text-gray-500">{row.date}</td>
                          <td className="py-2 text-white">{row.acquirer}</td>
                          <td className="py-2 text-purple-400">{row.target}</td>
                          <td className="py-2 text-green-400">{row.value}</td>
                          <td className="py-2 text-gray-400">{row.signal}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>

              {/* What's Replacing What */}
              <div>
                <h3 className="text-md font-medium text-gray-300 mb-3">What's Replacing What</h3>
                <div className="space-y-2 text-sm">
                  <div className="flex items-center gap-3 bg-gray-800/50 rounded-lg p-3">
                    <span className="text-red-400 line-through">Traditional MSSP</span>
                    <span className="text-gray-500">→</span>
                    <span className="text-green-400">MDR with outcome-based SLAs</span>
                  </div>
                  <div className="flex items-center gap-3 bg-gray-800/50 rounded-lg p-3">
                    <span className="text-red-400 line-through">In-house SOC (for many)</span>
                    <span className="text-gray-500">→</span>
                    <span className="text-green-400">Outsourced MDR (talent gap)</span>
                  </div>
                  <div className="flex items-center gap-3 bg-gray-800/50 rounded-lg p-3">
                    <span className="text-red-400 line-through">Standalone SIEM</span>
                    <span className="text-gray-500">→</span>
                    <span className="text-green-400">XDR + MDR / MXDR</span>
                  </div>
                  <div className="flex items-center gap-3 bg-gray-800/50 rounded-lg p-3">
                    <span className="text-red-400 line-through">Alert-only automation</span>
                    <span className="text-gray-500">→</span>
                    <span className="text-green-400">Agentic AI with autonomous response</span>
                  </div>
                </div>
              </div>
            </section>

            {/* Stakeholders Section */}
            <section id="stakeholders" className="bg-gray-900 border border-gray-800 rounded-xl p-6">
              <h2 className="text-xl font-semibold text-white mb-4 flex items-center gap-2">
                👥 Stakeholders
              </h2>

              {/* Analyst Consensus */}
              <div className="bg-gray-800/50 rounded-lg p-4 mb-6">
                <h3 className="text-white font-medium mb-3">Analyst Consensus</h3>
                <div className="space-y-2 text-sm">
                  <div className="flex items-start gap-2">
                    <span className="text-purple-400 font-medium min-w-[80px]">Gartner:</span>
                    <span className="text-gray-400">600+ vendors; $4.1B→$12B (2029). "Misnamed offerings confuse buyers." MDR must be human-led.</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <span className="text-purple-400 font-medium min-w-[80px]">Forrester:</span>
                    <span className="text-gray-400">Leaders: CrowdStrike, Expel, Red Canary. Detection-as-code is "only way to scale."</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <span className="text-purple-400 font-medium min-w-[80px]">IDC:</span>
                    <span className="text-gray-400">"MDR services have become a beacon of hope." Leaders: Arctic Wolf, eSentire, CrowdStrike, Expel, Sophos.</span>
                  </div>
                </div>
              </div>

              {/* SMB JTBD */}
              <div className="mb-6">
                <h3 className="text-md font-medium text-gray-300 mb-3">SMB Buyer Jobs To Be Done (&lt;100 employees)</h3>
                <div className="bg-gray-800/30 rounded-lg p-3 mb-3">
                  <p className="text-gray-400 text-sm italic">"Protect my business from an attack that could shut us down. Get enterprise-grade security without enterprise budget."</p>
                </div>
                <div className="overflow-x-auto">
                  <table className="w-full text-sm">
                    <thead>
                      <tr className="text-left text-gray-500 border-b border-gray-800">
                        <th className="pb-2">Job Statement</th>
                        <th className="pb-2">Evidence/Metric</th>
                      </tr>
                    </thead>
                    <tbody>
                      {smbJobs.map((row, idx) => (
                        <tr key={idx} className="border-b border-gray-800/50">
                          <td className="py-2 text-gray-300">{row.job}</td>
                          <td className="py-2 text-gray-500">{row.metric}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>

              {/* Mid-Market JTBD */}
              <div className="mb-6">
                <h3 className="text-md font-medium text-gray-300 mb-3">Mid-Market Buyer Jobs To Be Done (100-1,000 employees)</h3>
                <div className="bg-gray-800/30 rounded-lg p-3 mb-3">
                  <p className="text-gray-400 text-sm italic">"Get 24/7 coverage without hiring 5+ analysts. Reduce alert fatigue so my team can focus on real threats."</p>
                </div>
                <div className="overflow-x-auto">
                  <table className="w-full text-sm">
                    <thead>
                      <tr className="text-left text-gray-500 border-b border-gray-800">
                        <th className="pb-2">Job Statement</th>
                        <th className="pb-2">Evidence/Metric</th>
                      </tr>
                    </thead>
                    <tbody>
                      {midMarketJobs.map((row, idx) => (
                        <tr key={idx} className="border-b border-gray-800/50">
                          <td className="py-2 text-gray-300">{row.job}</td>
                          <td className="py-2 text-gray-500">{row.metric}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>

              {/* Enterprise JTBD */}
              <div className="mb-6">
                <h3 className="text-md font-medium text-gray-300 mb-3">Enterprise Buyer Jobs To Be Done (1,000+ employees)</h3>
                <div className="bg-gray-800/30 rounded-lg p-3 mb-3">
                  <p className="text-gray-400 text-sm italic">"Augment my existing SOC with specialized expertise. Leverage my existing tool investments. Maintain control."</p>
                </div>
                <div className="overflow-x-auto">
                  <table className="w-full text-sm">
                    <thead>
                      <tr className="text-left text-gray-500 border-b border-gray-800">
                        <th className="pb-2">Job Statement</th>
                        <th className="pb-2">Evidence/Metric</th>
                      </tr>
                    </thead>
                    <tbody>
                      {enterpriseJobs.map((row, idx) => (
                        <tr key={idx} className="border-b border-gray-800/50">
                          <td className="py-2 text-gray-300">{row.job}</td>
                          <td className="py-2 text-gray-500">{row.metric}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>

              {/* MSP JTBD */}
              <div className="mb-6">
                <h3 className="text-md font-medium text-gray-300 mb-3">MSP/MSSP Partner Jobs To Be Done</h3>
                <div className="bg-gray-800/30 rounded-lg p-3 mb-3">
                  <p className="text-gray-400 text-sm italic">"Help me deliver enterprise security to SMB clients. Reduce my per-client operational burden."</p>
                </div>
                <div className="overflow-x-auto">
                  <table className="w-full text-sm">
                    <thead>
                      <tr className="text-left text-gray-500 border-b border-gray-800">
                        <th className="pb-2">Job Statement</th>
                        <th className="pb-2">Evidence/Metric</th>
                      </tr>
                    </thead>
                    <tbody>
                      {mspJobs.map((row, idx) => (
                        <tr key={idx} className="border-b border-gray-800/50">
                          <td className="py-2 text-gray-300">{row.job}</td>
                          <td className="py-2 text-gray-500">{row.metric}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>

              {/* Universal Pain Points */}
              <div className="bg-red-900/20 border border-red-800/50 rounded-lg p-4">
                <h3 className="text-red-400 font-medium mb-3">Universal Pain Points</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-3 text-sm">
                  <div className="text-gray-300"><span className="text-red-400 font-medium">Talent shortage:</span> 3.4M+ unfilled positions globally</div>
                  <div className="text-gray-300"><span className="text-red-400 font-medium">Alert fatigue:</span> 40% of alerts never investigated</div>
                  <div className="text-gray-300"><span className="text-red-400 font-medium">Dwell time:</span> 277 days avg to identify + contain</div>
                  <div className="text-gray-300"><span className="text-red-400 font-medium">Analyst burnout:</span> 35-44% report symptoms</div>
                </div>
              </div>
            </section>

            {/* Economics Section */}
            <section id="economics" className="bg-gray-900 border border-gray-800 rounded-xl p-6">
              <h2 className="text-xl font-semibold text-white mb-4 flex items-center gap-2">
                💰 Economics & ROI
              </h2>

              {/* ROI Metrics */}
              <div className="mb-6">
                <h3 className="text-md font-medium text-gray-300 mb-3">The Business Case</h3>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                  {roiMetrics.map((item, idx) => (
                    <div key={idx} className="bg-gray-800/50 rounded-lg p-4 text-center">
                      <div className="text-xl font-bold text-green-400">{item.value}</div>
                      <div className="text-xs text-gray-500 mt-1">{item.metric}</div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Build vs Buy */}
              <div className="mb-6">
                <h3 className="text-md font-medium text-gray-300 mb-3">Build vs. Buy: In-House SOC vs. MDR</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="bg-red-900/20 border border-red-800/50 rounded-lg p-4">
                    <h4 className="text-red-400 font-medium text-sm mb-2">In-House SOC (24/7)</h4>
                    <div className="space-y-2 text-sm">
                      <div className="flex justify-between"><span className="text-gray-400">Personnel (6-9 analysts)</span><span className="text-red-400">$600K-1.2M</span></div>
                      <div className="flex justify-between"><span className="text-gray-400">SIEM/SOAR licensing</span><span className="text-red-400">$100K-500K</span></div>
                      <div className="flex justify-between"><span className="text-gray-400">Threat intel feeds</span><span className="text-red-400">$50K-150K</span></div>
                      <div className="flex justify-between"><span className="text-gray-400">Infrastructure</span><span className="text-red-400">$100K-300K</span></div>
                      <div className="flex justify-between border-t border-red-800 pt-2 mt-2"><span className="text-white font-medium">Total Year 1</span><span className="text-red-400 font-medium">$770K-2.2M+</span></div>
                      <p className="text-xs text-gray-500 mt-2">+ 6-18 months to operational maturity</p>
                    </div>
                  </div>
                  <div className="bg-green-900/20 border border-green-800/50 rounded-lg p-4">
                    <h4 className="text-green-400 font-medium text-sm mb-2">MDR Service</h4>
                    <div className="space-y-2 text-sm">
                      <div className="flex justify-between"><span className="text-gray-400">Base service (mid-market)</span><span className="text-green-400">$50K-200K</span></div>
                      <div className="flex justify-between"><span className="text-gray-400">Onboarding</span><span className="text-green-400">Often included</span></div>
                      <div className="flex justify-between"><span className="text-gray-400">Integrations</span><span className="text-green-400">$0-50K</span></div>
                      <div className="flex justify-between"><span className="text-gray-400">IR retainer</span><span className="text-green-400">Often included</span></div>
                      <div className="flex justify-between border-t border-green-800 pt-2 mt-2"><span className="text-white font-medium">Total Year 1</span><span className="text-green-400 font-medium">$150K-250K</span></div>
                      <p className="text-xs text-gray-500 mt-2">Operational in days to weeks</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Pricing by Segment */}
              <div className="mb-6">
                <h3 className="text-md font-medium text-gray-300 mb-3">Typical Investment by Segment</h3>
                <div className="overflow-x-auto">
                  <table className="w-full text-sm">
                    <thead>
                      <tr className="text-left text-gray-500 border-b border-gray-800">
                        <th className="pb-2">Segment</th>
                        <th className="pb-2">Annual Spend</th>
                        <th className="pb-2">% of Security Budget</th>
                        <th className="pb-2">Primary Driver</th>
                      </tr>
                    </thead>
                    <tbody>
                      {pricingBySegment.map((row, idx) => (
                        <tr key={idx} className="border-b border-gray-800/50">
                          <td className="py-2 text-white">{row.segment}</td>
                          <td className="py-2 text-purple-400">{row.spend}</td>
                          <td className="py-2 text-gray-400">{row.budget}</td>
                          <td className="py-2 text-gray-500">{row.driver}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>

              {/* Pricing Models */}
              <div className="mb-6">
                <h3 className="text-md font-medium text-gray-300 mb-3">Common Pricing Models</h3>
                <div className="overflow-x-auto">
                  <table className="w-full text-sm">
                    <thead>
                      <tr className="text-left text-gray-500 border-b border-gray-800">
                        <th className="pb-2">Model</th>
                        <th className="pb-2">Typical Range</th>
                        <th className="pb-2">Considerations</th>
                      </tr>
                    </thead>
                    <tbody>
                      {pricingModels.map((row, idx) => (
                        <tr key={idx} className="border-b border-gray-800/50">
                          <td className="py-2 text-white">{row.model}</td>
                          <td className="py-2 text-purple-400">{row.range}</td>
                          <td className="py-2 text-gray-400">{row.notes}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>

              {/* Hidden Costs Warning */}
              <div className="bg-yellow-900/20 border border-yellow-800/50 rounded-lg p-4">
                <h3 className="text-yellow-400 font-medium mb-3">Hidden MDR Costs to Watch</h3>
                <div className="space-y-2 text-sm text-gray-300">
                  <p><span className="text-yellow-400">•</span> <span className="text-white">"Free" features in Year 1:</span> Often become line items at renewal</p>
                  <p><span className="text-yellow-400">•</span> <span className="text-white">Per-endpoint scaling:</span> 20% growth = 20% cost increase</p>
                  <p><span className="text-yellow-400">•</span> <span className="text-white">Data ingestion caps:</span> Overage charges can be punitive</p>
                  <p><span className="text-yellow-400">•</span> <span className="text-white">Extraction costs:</span> Switching vendors is painful; data often locked in</p>
                </div>
              </div>
            </section>

            {/* PM Strategy Section */}
            <section id="product" className="bg-gray-900 border border-gray-800 rounded-xl p-6">
              <h2 className="text-xl font-semibold text-white mb-4 flex items-center gap-2">
                🎯 PM Strategic Elements
              </h2>
              
              {/* Table Stakes */}
              <div className="mb-6">
                <h3 className="text-md font-medium text-gray-300 mb-3">Table Stakes (2025 MVP—Required for RFP)</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
                  {tableStakes.map((feature, idx) => (
                    <div key={idx} className="flex items-center gap-2 text-sm">
                      <span className="text-green-400">✓</span>
                      <span className="text-gray-400">{feature}</span>
                    </div>
                  ))}
                </div>
                <p className="text-xs text-gray-500 mt-3 bg-gray-800/50 p-2 rounded">
                  ⚠️ Gartner: "Validate core requirements via RFPs and POCs." Missing any of these disqualifies you.
                </p>
              </div>

              {/* Differentiators */}
              <div className="mb-6">
                <h3 className="text-md font-medium text-gray-300 mb-3">Key Differentiators (What Wins Deals)</h3>
                <div className="space-y-3">
                  {differentiators.map((diff, idx) => (
                    <div key={idx} className="bg-gray-800/50 rounded-lg p-4">
                      <h4 className="text-purple-400 font-medium text-sm mb-1">{diff.name}</h4>
                      <p className="text-gray-400 text-xs">{diff.description}</p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Segment-Specific Deal Winners */}
              <div className="mb-6">
                <h3 className="text-md font-medium text-gray-300 mb-3">What Closes Deals (by Segment)</h3>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <div className="bg-gray-800/50 rounded-lg p-4">
                    <h4 className="text-purple-400 font-medium text-sm mb-2">SMB</h4>
                    <ul className="space-y-1 text-xs text-gray-400">
                      <li>• Simplicity, MSP-friendly</li>
                      <li>• Bundled pricing</li>
                      <li>• Cyber insurance alignment</li>
                      <li>• "Set-it-and-forget-it"</li>
                    </ul>
                  </div>
                  <div className="bg-gray-800/50 rounded-lg p-4">
                    <h4 className="text-purple-400 font-medium text-sm mb-2">Mid-Market</h4>
                    <ul className="space-y-1 text-xs text-gray-400">
                      <li>• Dedicated analyst relationship</li>
                      <li>• Co-management flexibility</li>
                      <li>• Proof of ROI</li>
                      <li>• Risk score translation</li>
                    </ul>
                  </div>
                  <div className="bg-gray-800/50 rounded-lg p-4">
                    <h4 className="text-purple-400 font-medium text-sm mb-2">Enterprise</h4>
                    <ul className="space-y-1 text-xs text-gray-400">
                      <li>• Customization depth</li>
                      <li>• Compliance support</li>
                      <li>• Existing SOC integration</li>
                      <li>• Platform consolidation</li>
                    </ul>
                  </div>
                </div>
              </div>

              {/* If I'm a PM Here Box */}
              <div className="bg-gradient-to-r from-purple-900/30 to-pink-900/30 border border-purple-800 rounded-xl p-5">
                <h3 className="text-lg font-semibold text-purple-400 mb-4 flex items-center gap-2">
                  💡 If I am a PM Here, I Need to Know...
                </h3>
                <div className="space-y-3 text-sm">
                  <div className="flex gap-3">
                    <span className="text-purple-400 font-bold">1.</span>
                    <span className="text-gray-300"><span className="text-white font-medium">MDR is a services business enabled by technology.</span> Your success depends on analyst quality as much as detection quality. The human-AI balance is everything.</span>
                  </div>
                  <div className="flex gap-3">
                    <span className="text-purple-400 font-bold">2.</span>
                    <span className="text-gray-300"><span className="text-white font-medium">Pick your segment and own it.</span> SMB/MSP (Huntress), mid-market (Arctic Wolf), and enterprise (CrowdStrike Complete) require fundamentally different products, pricing, and GTM.</span>
                  </div>
                  <div className="flex gap-3">
                    <span className="text-purple-400 font-bold">3.</span>
                    <span className="text-gray-300"><span className="text-white font-medium">Detection quality is your moat.</span> The "fake MDR" problem (600+ vendors) means buyers are increasingly sophisticated. Forrester and Gartner explicitly evaluate detection engineering.</span>
                  </div>
                  <div className="flex gap-3">
                    <span className="text-purple-400 font-bold">4.</span>
                    <span className="text-gray-300"><span className="text-white font-medium">Transparency wins trust.</span> "Black box" MDR is dying. Expel's transparent workbench model is now the expectation. Show your work.</span>
                  </div>
                  <div className="flex gap-3">
                    <span className="text-purple-400 font-bold">5.</span>
                    <span className="text-gray-300"><span className="text-white font-medium">AI is table stakes, but human judgment remains the differentiator.</span> Gartner 2025: "MDR must remain human-led; AI should support, not replace."</span>
                  </div>
                  <div className="flex gap-3">
                    <span className="text-purple-400 font-bold">6.</span>
                    <span className="text-gray-300"><span className="text-white font-medium">Integration is your ecosystem play.</span> Pure-play MDR lives or dies on integration breadth. 300+ integrations is the new bar.</span>
                  </div>
                  <div className="flex gap-3">
                    <span className="text-purple-400 font-bold">7.</span>
                    <span className="text-gray-300"><span className="text-white font-medium">Watch for year-2 price shock.</span> Many contracts have aggressive price escalation. Get multi-year pricing.</span>
                  </div>
                </div>
              </div>
            </section>

            {/* Strategic Theses Section */}
            <section id="theses" className="bg-gray-900 border border-gray-800 rounded-xl p-6">
              <h2 className="text-xl font-semibold text-white mb-4 flex items-center gap-2">
                🔮 Strategic Theses
              </h2>
              <p className="text-gray-400 text-sm mb-6">
                Three structural shifts reshaping this market. Not incremental changes—fundamental rewirings of where value is created and captured.
              </p>

              <div className="space-y-6">
                {theses.map((thesis) => (
                  <div key={thesis.id} className={`bg-gray-800/50 rounded-xl p-5 border-l-4 ${getThesisAccent(thesis.color)}`}>
                    <div className="flex items-start justify-between mb-3">
                      <h3 className="text-lg font-semibold text-white">{thesis.title}</h3>
                      <div className="flex items-center gap-2">
                        <span className={`text-xs px-2 py-1 rounded border ${getConfidenceColor(thesis.confidence)}`}>{thesis.confidence}</span>
                        <span className="text-xs text-gray-500">{thesis.timeframe}</span>
                      </div>
                    </div>
                    
                    <p className="text-gray-300 text-sm mb-4">{thesis.claim}</p>
                    
                    <div className="mb-4">
                      <h4 className="text-xs font-medium text-gray-500 uppercase tracking-wider mb-2">EVIDENCE</h4>
                      <ul className="space-y-1">
                        {thesis.evidence.map((item, idx) => (
                          <li key={idx} className="text-gray-400 text-xs flex items-start gap-2">
                            <span className="text-purple-400">•</span>
                            {item}
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div className="bg-gray-900/50 rounded-lg p-3">
                      <span className="text-purple-400 font-medium text-xs">Implication: </span>
                      <span className="text-gray-300 text-xs">{thesis.implication}</span>
                    </div>
                  </div>
                ))}
              </div>

              {/* Synthesis */}
              <div className="mt-6 bg-gray-800/30 rounded-lg p-4">
                <h4 className="text-white font-medium mb-3">How These Connect</h4>
                <div className="space-y-2 text-sm">
                  <p className="text-gray-400"><span className="text-green-400">Services nature</span> → requires → <span className="text-green-400"> human-AI balance and detection quality</span></p>
                  <p className="text-gray-400"><span className="text-purple-400">Agentic AI</span> → transforms → <span className="text-purple-400"> analyst-to-customer economics and MTTR</span></p>
                  <p className="text-gray-400"><span className="text-orange-400">Platform consolidation</span> → creates → <span className="text-orange-400"> two winning models: platform or exceptional detection</span></p>
                </div>
              </div>
            </section>

            {/* 5 Questions */}
            <section className="bg-gray-900 border border-gray-800 rounded-xl p-6">
              <h2 className="text-xl font-semibold text-white mb-4 flex items-center gap-2">
                ❓ 5 Questions to Drive Your MDR Evaluation
              </h2>
              <div className="space-y-4">
                <div className="bg-gray-800/50 rounded-lg p-4">
                  <h4 className="text-purple-400 font-medium text-sm mb-1">1. "What does 'response' actually mean?"</h4>
                  <p className="text-gray-400 text-xs">Notification-only MDR is just an expensive alerting service. Ask specifically: What containment actions can they take? Do they need your approval?</p>
                </div>
                <div className="bg-gray-800/50 rounded-lg p-4">
                  <h4 className="text-purple-400 font-medium text-sm mb-1">2. "Can I see what you're doing?"</h4>
                  <p className="text-gray-400 text-xs">Request a demo of their investigation workflow. If they can't show you how they work, that's a red flag. Transparency = accountability.</p>
                </div>
                <div className="bg-gray-800/50 rounded-lg p-4">
                  <h4 className="text-purple-400 font-medium text-sm mb-1">3. "How do you handle our existing tools?"</h4>
                  <p className="text-gray-400 text-xs">If they require rip-and-replace of your EDR/SIEM, factor that cost into TCO. Pure-play MDR should augment, not replace.</p>
                </div>
                <div className="bg-gray-800/50 rounded-lg p-4">
                  <h4 className="text-purple-400 font-medium text-sm mb-1">4. "What happens in year 2?"</h4>
                  <p className="text-gray-400 text-xs">Many MDR contracts have aggressive price escalation. Get multi-year pricing in writing. Ask about data extraction costs if you switch.</p>
                </div>
                <div className="bg-gray-800/50 rounded-lg p-4">
                  <h4 className="text-purple-400 font-medium text-sm mb-1">5. "How do you prove value?"</h4>
                  <p className="text-gray-400 text-xs">Ask for sample reports, MTTD/MTTR metrics from similar customers, and references in your industry.</p>
                </div>
              </div>
            </section>

            {/* Recommendations */}
            <section className="bg-gray-900 border border-gray-800 rounded-xl p-6">
              <h2 className="text-xl font-semibold text-white mb-4 flex items-center gap-2">
                🎯 Recommendations
              </h2>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="bg-gray-800/50 rounded-lg p-4">
                  <div className="flex items-center gap-2 mb-3">
                    <span className="w-8 h-8 rounded-full bg-blue-900/50 flex items-center justify-center text-blue-400 font-bold text-sm">B</span>
                    <span className="text-white font-medium">For Enterprise Buyers</span>
                  </div>
                  <ul className="space-y-2 text-sm text-gray-400">
                    <li className="flex items-start gap-2"><span className="text-blue-400">•</span><span>Validate "real MDR" vs. "MDR-washed"—demand transparency</span></li>
                    <li className="flex items-start gap-2"><span className="text-blue-400">•</span><span>Build vs. buy: MDR TCO is typically 5-10x lower than in-house SOC</span></li>
                    <li className="flex items-start gap-2"><span className="text-blue-400">•</span><span>Evaluate response depth: notification vs. containment vs. remediation</span></li>
                    <li className="flex items-start gap-2"><span className="text-blue-400">•</span><span>Get multi-year pricing; watch for Year 2 escalation</span></li>
                    <li className="flex items-start gap-2"><span className="text-blue-400">•</span><span>Prioritize detection engineering quality over marketing</span></li>
                  </ul>
                </div>

                <div className="bg-gray-800/50 rounded-lg p-4">
                  <div className="flex items-center gap-2 mb-3">
                    <span className="w-8 h-8 rounded-full bg-purple-900/50 flex items-center justify-center text-purple-400 font-bold text-sm">V</span>
                    <span className="text-white font-medium">For Vendors / Product Leaders</span>
                  </div>
                  <ul className="space-y-2 text-sm text-gray-400">
                    <li className="flex items-start gap-2"><span className="text-purple-400">•</span><span>Pick your segment and own it—SMB, mid-market, or enterprise</span></li>
                    <li className="flex items-start gap-2"><span className="text-purple-400">•</span><span>Invest heavily in detection engineering—it's your moat</span></li>
                    <li className="flex items-start gap-2"><span className="text-purple-400">•</span><span>Build transparency into your model (Expel-style workbench)</span></li>
                    <li className="flex items-start gap-2"><span className="text-purple-400">•</span><span>Agentic AI for Tier 1-2 triage; humans for judgment</span></li>
                    <li className="flex items-start gap-2"><span className="text-purple-400">•</span><span>300+ integrations is the new bar—pure-play depends on it</span></li>
                  </ul>
                </div>
              </div>
            </section>

            {/* Resources */}
            <section className="bg-gray-900 border border-gray-800 rounded-xl p-6">
              <h2 className="text-xl font-semibold text-white mb-4 flex items-center gap-2">
                📎 Resources
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <a href="#" className="flex items-center gap-3 bg-gray-800/50 hover:bg-gray-800 rounded-lg p-4 transition-colors">
                  <span className="text-2xl">📄</span>
                  <div>
                    <div className="text-white font-medium text-sm">Full Strategic Brief</div>
                    <div className="text-gray-500 text-xs">Complete SRP analysis (PDF)</div>
                  </div>
                </a>
                <a href="#" className="flex items-center gap-3 bg-gray-800/50 hover:bg-gray-800 rounded-lg p-4 transition-colors">
                  <span className="text-2xl">📊</span>
                  <div>
                    <div className="text-white font-medium text-sm">Vendor Comparison Matrix</div>
                    <div className="text-gray-500 text-xs">Side-by-side feature analysis</div>
                  </div>
                </a>
              </div>
            </section>

          </div>
        </div>

        {/* Footer */}
        <footer className="mt-12 pt-8 border-t border-gray-800 text-center text-sm text-gray-500">
          <p>Analysis by Andy Simko • CISSP • GPEN • CISA • GSNA • HCSFP • PMC-Level III</p>
          <p className="mt-1">15+ years in cybersecurity • Methodology: Systematic Research Process (SRP)</p>
        </footer>
      </div>
    </div>
  );
};

export default MDRPage;
