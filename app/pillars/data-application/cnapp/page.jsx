"use client";
import React, { useState } from 'react';
import { Logo } from '@/components/Logo';

const CNAPPPage = () => {
  const [activeSection, setActiveSection] = useState('overview');

  // Cloud Security pillar sub-segments
  const subSegments = [
    { id: 'cnapp', name: 'CNAPP', active: true, href: '/pillars/cloud-security/cnapp' },
    { id: 'cspm', name: 'CSPM', active: false, href: '#' },
    { id: 'cwpp', name: 'CWPP', active: false, href: '#' },
    { id: 'ciem', name: 'CIEM', active: false, href: '#' },
    { id: 'dspm', name: 'DSPM', active: false, href: '#' },
    { id: 'kspm', name: 'Kubernetes Security', active: false, href: '#' },
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
    { name: 'Identity', primary: true },
    { name: 'SecOps & Analytics', primary: true },
    { name: 'Data Security', primary: false },
  ];

  const keyInsights = [
    { stat: '$10.9B', label: 'Market size (2025)' },
    { stat: '20-25%', label: 'CAGR through 2030' },
    { stat: '$32B', label: 'Google/Wiz acquisition' },
    { stat: '83%', label: 'Orgs with cloud incident (2024)' },
  ];

  const marketSizing = [
    { source: 'Mordor Intelligence', val2024: '—', val2025: '$10.90B', projection: '$28.03B (2030)', cagr: '20.8%' },
    { source: 'P&S Market Research', val2024: '—', val2025: '$15.0B', projection: '$51.2B (2032)', cagr: '19.2%' },
    { source: 'Fortune Business Insights', val2024: '$9.38B', val2025: '$11.53B', projection: '$46.10B (2031)', cagr: '21.88%' },
    { source: 'Dell\'Oro Group', val2024: '$2B (2023)', val2025: '—', projection: '$12.9B (2030)', cagr: '~30%' },
  ];

  const marketSubSegments = [
    'Cloud Security Posture Management (CSPM)',
    'Cloud Workload Protection Platform (CWPP)',
    'Cloud Infrastructure Entitlement Management (CIEM)',
    'Kubernetes Security Posture Management (KSPM)',
    'Infrastructure-as-Code (IaC) Security',
    'Data Security Posture Management (DSPM)',
    'Cloud Detection & Response (CDR)',
    'Application Security Posture Management (ASPM)',
    'AI Security Posture Management (AI-SPM)',
  ];

  // Top vendors by consensus
  const competitors = [
    { 
      name: 'Palo Alto Networks', 
      product: 'Prisma Cloud / Cortex Cloud',
      position: 'Platform Leader', 
      focus: '~17% market share. Full CNAPP + CDR integration. Cortex Cloud AI-powered platform (Feb 2025).',
      status: 'in-progress',
      href: '/pillars/cloud-security/cnapp/companies/paloalto'
    },
    { 
      name: 'Wiz (Google)', 
      product: 'Wiz Cloud Security Platform',
      position: 'Pure-Play Leader', 
      focus: '~19% revenue share (Q3 2025). $32B Google acquisition (Mar 2025). Security Graph pioneer. Wiz Defend CDR launch.',
      status: 'in-progress',
      href: '/pillars/cloud-security/cnapp/companies/wiz'
    },
    { 
      name: 'CrowdStrike', 
      product: 'Falcon Cloud Security',
      position: 'Platform Leader', 
      focus: '~13% share. IDC MarketScape Leader 2025. Unified endpoint-to-cloud agent. ExPRT.AI prioritization.',
      status: 'in-progress',
      href: '/pillars/cloud-security/cnapp/companies/crowdstrike'
    },
    { 
      name: 'Microsoft', 
      product: 'Defender for Cloud',
      position: 'Hyperscaler', 
      focus: '~18% share. IDC MarketScape Leader 2025. Native Azure integration. E5 bundle economics.',
      status: 'in-progress',
      href: '/pillars/cloud-security/cnapp/companies/microsoft'
    },
    { 
      name: 'Orca Security', 
      product: 'Orca Platform',
      position: 'Pure-Play', 
      focus: 'Agentless SideScanning pioneer. Forrester Strong Performer. SAST/open-source license detection (Feb 2025).',
      status: 'in-progress',
      href: '/pillars/cloud-security/cnapp/companies/orca'
    },
    { 
      name: 'SentinelOne', 
      product: 'Singularity Cloud Security',
      position: 'Unified Platform', 
      focus: 'PingSafe acquisition (Feb 2024). Unified agent + agentless. AI-driven threat detection.',
      status: 'in-progress',
      href: '/pillars/cloud-security/cnapp/companies/sentinelone'
    },
    { 
      name: 'Check Point', 
      product: 'CloudGuard CNAPP',
      position: 'Platform', 
      focus: '52 security engines. Wiz strategic alliance (Feb 2025). Prevention-first approach.',
      status: 'in-progress',
      href: '/pillars/cloud-security/cnapp/companies/checkpoint'
    },
    { 
      name: 'Aqua Security', 
      product: 'Aqua Platform',
      position: 'Pure-Play', 
      focus: 'Container/Kubernetes specialist. Strong DevSecOps integration. Runtime protection depth.',
      status: 'in-progress',
      href: '/pillars/cloud-security/cnapp/companies/aqua'
    },
    { 
      name: 'Sysdig', 
      product: 'Sysdig Secure',
      position: 'Pure-Play', 
      focus: 'Runtime-focused. Built on open-source Falco. Sysdig Sage AI. DevOps team favorite.',
      status: 'in-progress',
      href: '/pillars/cloud-security/cnapp/companies/sysdig'
    },
    { 
      name: 'Fortinet', 
      product: 'FortiCNAPP',
      position: 'Platform', 
      focus: 'Lacework acquisition (Aug 2024). AI-powered cloud security. Security Fabric integration.',
      status: 'in-progress',
      href: '/pillars/cloud-security/cnapp/companies/fortinet'
    },
    { 
      name: 'Trend Micro', 
      product: 'Trend Vision One',
      position: 'Platform', 
      focus: 'IDC MarketScape Leader 2025. Multilayered AI-powered security. Cross-correlation.',
      status: 'in-progress',
      href: '/pillars/cloud-security/cnapp/companies/trendmicro'
    },
    { 
      name: 'Qualys', 
      product: 'TotalCloud',
      position: 'Platform', 
      focus: 'KuppingerCole Overall Leader. TruRisk quantification. VM heritage extended to cloud.',
      status: 'in-progress',
      href: '/pillars/cloud-security/cnapp/companies/qualys'
    },
    { 
      name: 'Tenable', 
      product: 'Tenable Cloud Security',
      position: 'Platform', 
      focus: 'Strong vulnerability management heritage. Exposure management integration.',
      status: 'in-progress',
      href: '/pillars/cloud-security/cnapp/companies/tenable'
    },
    { 
      name: 'Zscaler', 
      product: 'Posture Control',
      position: 'Zero Trust', 
      focus: '100% agentless. Zero trust architecture integration. Network-centric approach.',
      status: 'in-progress',
      href: '/pillars/cloud-security/cnapp/companies/zscaler'
    },
    { 
      name: 'Upwind Security', 
      product: 'Upwind Platform',
      position: 'Challenger', 
      focus: 'Runtime-first architecture. "Proof not theory" positioning. Rapid deployment.',
      status: 'in-progress',
      href: '/pillars/cloud-security/cnapp/companies/upwind'
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
    { name: 'Platform Consolidation & Tool Rationalization', description: 'Enterprises retiring fragmented CSPM, CWPP, CIEM, IaC tools. 60% consolidation to single vendor by 2025 (Gartner). Alert fatigue driving unified platform adoption.' },
    { name: 'Runtime-First Architecture Evolution', description: 'Market pivoting from agentless-only to hybrid models. Runtime-powered detection with inline prevention. Static posture scanning alone insufficient.' },
    { name: 'AI/GenAI Integration Becoming Foundational', description: 'AI no longer differentiator—it\'s foundational. Vendors without strong AI face "existential" competitive pressure. LLMs for remediation, policy recommendations.' },
    { name: 'Cloud Detection & Response (CDR) Integration', description: 'CNAPPs expanding beyond posture to real-time threat detection. CDR capabilities now mandatory. "Posture-only" solutions losing to active defense.' },
    { name: 'Hyperscaler Competition Intensifying', description: 'Google/Wiz ($32B), Microsoft Defender expansion. Cloud providers building native security. Independent vendors must differentiate through innovation.' },
  ];

  const hypePositions = [
    { tech: 'Core CNAPP (CSPM + CWPP)', position: 'Early Plateau of Productivity', status: 'stable', note: 'Mature, wide adoption' },
    { tech: 'Cloud Detection & Response (CDR)', position: 'Slope of Enlightenment', status: 'rising', note: 'Adoption accelerating' },
    { tech: 'AI-SPM (AI Security Posture)', position: 'Innovation Trigger', status: 'emerging', note: 'Greenfield opportunity' },
    { tech: 'ASPM (Application Security)', position: 'Peak → Slope Transition', status: 'hot', note: 'Converging into CNAPP' },
    { tech: 'Agentic AI Security', position: 'Innovation Trigger', status: 'emerging', note: 'No major CNAPP has dedicated view yet' },
  ];

  const maActivity = [
    { date: 'Mar 2025', acquirer: 'Google', target: 'Wiz', value: '$32B', signal: 'Largest cybersecurity acquisition ever. Hyperscaler owns CNAPP leader.' },
    { date: 'Nov 2024', acquirer: 'Wiz', target: 'Dazz', value: '$450M', signal: 'ASPM and remediation orchestration for Wiz Code.' },
    { date: 'Aug 2024', acquirer: 'Fortinet', target: 'Lacework', value: '~$150-200M', signal: 'AI-powered cloud security into Security Fabric.' },
    { date: 'Apr 2024', acquirer: 'Wiz', target: 'Gem Security', value: '$350M', signal: 'CDR expertise—beyond posture management.' },
    { date: 'Feb 2024', acquirer: 'SentinelOne', target: 'PingSafe', value: 'Undisclosed', signal: 'Agentless + agent-based unified platform.' },
    { date: 'Dec 2023', acquirer: 'Palo Alto Networks', target: 'Dig Security', value: '~$300-400M', signal: 'DSPM capabilities into Prisma Cloud.' },
  ];

  const consolidationSignals = [
    { being: 'Standalone CSPM tools', becoming: 'Unified CNAPP platforms', note: '75% of new purchases now bundled' },
    { being: 'Standalone CWPP tools', becoming: 'CNAPP with integrated workload protection', note: '60% vendor consolidation by 2025' },
    { being: 'Standalone CIEM tools', becoming: 'CNAPP with identity governance', note: 'Integrated into platform capabilities' },
    { being: 'Container image scanning', becoming: 'CNAPP vulnerability management', note: 'Absorbed into platform functions' },
    { being: 'Agentless-only architectures', becoming: 'Hybrid agent + agentless', note: 'Runtime protection requires sensors' },
    { being: 'Multiple security consoles', becoming: 'Single-pane-of-glass CNAPP', note: 'Operational overhead driving change' },
  ];

  const cisoJobs = [
    { job: 'Reduce tool sprawl and get unified cloud security view', metric: 'Single platform; vendor count reduction; consolidated dashboards' },
    { job: 'Focus team on risks that actually matter, not drown in alerts', metric: 'Alert-to-incident ratio; actionable finding count; noise reduction' },
    { job: 'Demonstrate continuous compliance with minimal effort', metric: 'Automated evidence collection; audit-ready reports; framework coverage' },
    { job: 'Prove security ROI to board and CFO', metric: 'TCO reduction vs. point tools; breach risk quantification' },
  ];

  const cloudArchitectJobs = [
    { job: 'Design security guardrails that scale with cloud adoption', metric: 'Policy coverage; IaC enforcement rate; deployment velocity maintained' },
    { job: 'Enforce least privilege across multi-cloud environments', metric: 'CIEM coverage; excessive permission detection; entitlement reduction' },
    { job: 'Understand effective risk across hybrid environments', metric: 'Attack path visibility; cross-cloud correlation; unified risk view' },
  ];

  const devSecOpsJobs = [
    { job: 'Embed security into CI/CD without slowing developers', metric: 'Pipeline scan time; developer friction score; PR comment integration' },
    { job: 'Get contextual findings with clear remediation guidance', metric: 'Fix suggestions per finding; code-level remediation; ownership assignment' },
    { job: 'Ship secure code without security team bottleneck', metric: 'Self-service remediation rate; security gate pass rate' },
  ];

  const socAnalystJobs = [
    { job: 'Detect and respond to cloud threats without drowning in alerts', metric: 'Cloud-specific MTTD/MTTR; alert quality; investigation context' },
    { job: 'Correlate cloud alerts with endpoint and identity context', metric: 'XDR integration; unified investigation; cross-domain visibility' },
    { job: 'Automate response to cloud misconfigurations', metric: 'SOAR integration; automated containment; playbook coverage' },
  ];

  const tableStakes = [
    'CSPM - Continuous misconfiguration detection',
    'CWPP - VM/container/serverless protection',
    'CIEM - Identity and entitlement management',
    'KSPM - Kubernetes security posture',
    'Multi-cloud support (AWS, Azure, GCP)',
    'IaC scanning (Terraform, CloudFormation)',
    'Container image scanning',
    'CI/CD pipeline integration',
    'Compliance frameworks (CIS, SOC2, PCI, HIPAA)',
    'Vulnerability management with CVE detection',
    'Basic alerting and notifications',
    'REST APIs for integration',
  ];

  const differentiators = [
    { name: 'Runtime-Powered Risk Prioritization', description: 'Real-time runtime telemetry identifies actually exploitable vulnerabilities. Reduces noise by 90%+. "Proof not theory" positioning.' },
    { name: 'Unified Security Graph / Attack Path Analysis', description: 'Visual representation of how risks chain into exploitable paths. Makes complex risk understandable to executives. Wiz pioneered this.' },
    { name: 'Deployment Speed & Time-to-Value', description: 'Agentless deployment achieving full visibility in hours, not weeks. POC success = deal success. Critical for mid-market.' },
    { name: 'Developer Experience (DevEx)', description: 'Native IDE/PR integration with low friction. Developer adoption is #1 predictor of DevSecOps success. Security as guardrails, not gates.' },
    { name: 'AI-Powered Investigation & Remediation', description: 'GenAI copilots for investigation, code-level fix generation. Addresses skills gap crisis. Sysdig Sage, CrowdStrike Charlotte AI.' },
    { name: 'SOC/SIEM/SOAR Integration Depth', description: 'CNAPPs in silos lose to platforms integrated into SOC workflows. CDR capabilities increasingly required.' },
    { name: 'Data Security Posture Management (DSPM)', description: 'Sensitive data discovery and classification across cloud storage. Moving from optional to expected.' },
  ];

  const roiMetrics = [
    { metric: 'Global breach cost (2024)', value: '$4.88M' },
    { metric: 'US breach cost (2024)', value: '$10.22M' },
    { metric: 'AI/automation savings', value: '$2.2M per breach' },
    { metric: 'Tool consolidation savings', value: '30-50% TCO reduction' },
  ];

  const pricingModels = [
    { model: 'Per-Workload', range: '$240-585/workload/year', vendors: 'Wiz, Aqua, Orca, Sysdig', note: 'Dominant model' },
    { model: 'Per-User', range: '$70-120/user/year', vendors: 'McAfee MVISION, some bundles', note: 'Enterprise bundles' },
    { model: 'Platform/Flat Fee', range: '$100K+ annually', vendors: 'Enterprise agreements', note: 'Negotiated deals' },
    { model: 'Consumption-Based', range: 'Variable', vendors: 'Microsoft Defender (Commit Units)', note: 'Up to 22% savings' },
  ];

  const theses = [
    {
      id: 1,
      title: 'Hyperscaler Disruption Changes Everything',
      timeframe: '2025-2028',
      confidence: 'High',
      color: 'green',
      claim: 'Google\'s $32B Wiz acquisition signals hyperscalers are serious about owning cloud security. Independent pure-plays must now differentiate through innovation velocity, not breadth. Microsoft\'s Defender bundling and Google\'s Wiz create existential pressure.',
      evidence: ['Google/Wiz: largest cybersecurity acquisition ever', 'Microsoft Defender bundled in E5 licenses', 'AWS Security Hub expanding native capabilities', 'Independent vendors face "build vs. bundle" pressure'],
      implication: 'Position against bundled solutions with unique value: runtime depth, multi-cloud neutrality, innovation speed. "Best-of-breed vs. good-enough-bundled" is the new battleground.',
    },
    {
      id: 2,
      title: 'Runtime Is the New Battleground',
      timeframe: '2025-2027',
      confidence: 'High',
      color: 'purple',
      claim: 'Posture management is table stakes. Winners in 2025-2026 will be those who detect AND prevent threats at runtime with minimal performance impact. Static scanning alone is insufficient against active attackers.',
      evidence: ['Gartner pivoting guidance toward runtime-first architectures', 'Wiz Defend launch signals market direction', '"Posture-only" explicitly called out as insufficient', 'CDR integration now mandatory in analyst evaluations'],
      implication: 'Evaluate vendors on runtime capabilities: behavioral detection, inline prevention, CDR integration. Agentless-only architectures face coverage gaps.',
    },
    {
      id: 3,
      title: 'AI-SPM Is the Greenfield Opportunity',
      timeframe: '2025-2027',
      confidence: 'Medium-High',
      color: 'orange',
      claim: 'Securing AI workloads (GenAI models, LLMs, AI pipelines, agentic AI) is an untapped opportunity. AI vulnerabilities grew 200%, prompt injection attacks up 540% in 2025. First-mover advantage available.',
      evidence: ['"Until now, no major CNAPP has offered dedicated view of AI agents" — Palo Alto Networks', 'AI vulnerabilities +200% in 2025', 'Prompt injection attacks +540%', 'Shadow AI creating unmanaged risk exposure'],
      implication: 'Build AI-SPM capabilities aggressively. Position for the AI workload security wave before it becomes table stakes.',
    },
  ];

  const pmChecklist = [
    { point: 'The market is consolidating fast. Google\'s $32B Wiz acquisition signals hyperscalers are serious. Differentiate through innovation, not breadth.' },
    { point: 'Runtime is the new battleground. Posture management is table stakes. Winners detect AND prevent threats at runtime.' },
    { point: 'Alert fatigue is killing adoption. 10,000+ alerts is common. Prioritization through attack path analysis and AI-powered triage wins.' },
    { point: 'Developer experience is non-negotiable. Security tools that developers hate don\'t get used. CI/CD integration, PR comments, IDE plugins required.' },
    { point: 'AI is both opportunity AND threat. AI-SPM is greenfield. But AI-powered attackers mean detection windows are shrinking.' },
    { point: 'The buying committee is expanding. Not just CISOs anymore. Cloud architects, DevSecOps, platform engineers, and CFOs are in the room.' },
    { point: 'Compliance is checkbox, not differentiator. Everyone supports SOC 2, PCI, HIPAA. Automated evidence collection and continuous monitoring differentiate.' },
    { point: 'TCO story beats feature lists. Enterprises want fewer tools that do more. Consolidation value prop often more compelling than any single feature.' },
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
              <a href="/" className="flex items-center gap-2 hover:opacity-80">
                <Logo />
              </a>
              /
              <a href="/pillars/cloud-security" className="text-blue-400 hover:text-blue-300">Cloud Security</a>
            </div>
            <div className="flex items-center gap-6 text-sm text-gray-400">
              <a href="/pillars" className="hover:text-white">Pillars</a>
              <a href="/theses" className="hover:text-white">Theses</a>
              <a href="/about" className="hover:text-white">About</a>
            </div>
          </div>
        </div>
      </nav>

      <div className="max-w-7xl mx-auto px-4 py-8">
        
        {/* Sub-segment Navigation */}
        <div className="flex items-center justify-between mb-6 overflow-x-auto pb-2">
          <div className="flex items-center gap-2">
            {subSegments.map((seg) => (
              <a
                key={seg.id}
                href={seg.href}
                className={`px-3 py-1.5 rounded-full text-sm whitespace-nowrap transition-all ${
                  seg.active
                    ? 'bg-blue-900/50 text-blue-400 border border-blue-800'
                    : 'text-gray-500 hover:text-gray-300 hover:bg-gray-800'
                }`}
              >
                {seg.active && <span className="mr-1">●</span>}
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
                className={`px-2 py-1 rounded ${pillar.primary ? 'bg-purple-900/30 text-purple-400' : 'bg-gray-800 text-gray-400'}`}
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
              Cloud-Native Application Protection Platform (CNAPP)
            </h1>
            <span className="px-2 py-1 text-xs font-medium bg-cyan-900/50 text-cyan-400 border border-cyan-800 rounded">
              PLATFORM CONVERGENCE
            </span>
          </div>
          <p className="text-xl text-gray-400 mb-4">
            The $10B+ unified platform consolidating cloud security point solutions—now facing hyperscaler disruption
          </p>
          
          <div className="flex items-center gap-4 text-sm text-gray-500">
            <span>Last updated: January 2026</span>
            <span>•</span>
            <span>Methodology: SRP Framework</span>
            <span>•</span>
            <span className="text-green-400">● Active research</span>
          </div>
        </div>

        {/* Key Stats Bar */}
        <div className="grid grid-cols-4 gap-4 mb-8">
          {keyInsights.map((insight, idx) => (
            <div key={idx} className="bg-gray-900/50 border border-gray-800 rounded-lg p-4 text-center">
              <div className="text-2xl font-bold text-white mb-1">{insight.stat}</div>
              <div className="text-sm text-gray-400">{insight.label}</div>
            </div>
          ))}
        </div>

        {/* The Core Insight Callout */}
        <div className="bg-gradient-to-r from-cyan-900/20 to-blue-900/20 border border-cyan-800/50 rounded-lg p-6 mb-8">
          <div className="flex items-start gap-4">
            <div className="text-3xl">☁️</div>
            <div>
              <h3 className="text-lg font-semibold text-cyan-400 mb-2">The Core Thesis</h3>
              <p className="text-gray-300">
                CNAPP represents the <span className="text-white font-semibold">convergence of cloud security point solutions</span>—
                CSPM, CWPP, CIEM, KSPM, IaC scanning—into unified platforms. But the market is now facing a 
                <span className="text-white font-semibold"> hyperscaler disruption</span>: Google's $32B Wiz acquisition 
                and Microsoft's E5 bundling create existential pressure on independent vendors. 
                <span className="text-cyan-400 font-semibold"> The standalone CNAPP era may be ending.</span>
              </p>
            </div>
          </div>
        </div>

        {/* Main Content Grid */}
        <div className="grid grid-cols-12 gap-6">
          
          {/* Left Sidebar - SRP Navigation */}
          <div className="col-span-3">
            <div className="sticky top-24 space-y-4">
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
                      {section.icon}
                      {section.name}
                    </button>
                  ))}
                </div>
              </div>

              {/* CNAPP Component Stack Visual */}
              <div className="bg-gray-900/50 border border-gray-800 rounded-lg p-4">
                <h4 className="text-sm font-semibold text-gray-400 mb-3">CNAPP Component Stack</h4>
                <div className="space-y-2">
                  <div className="bg-gradient-to-r from-cyan-900/50 to-cyan-800/30 border border-cyan-700/50 rounded px-3 py-2">
                    <div className="text-xs text-cyan-400 font-semibold">AI-SPM / Agentic</div>
                    <div className="text-xs text-gray-500">Emerging ★</div>
                  </div>
                  <div className="bg-gradient-to-r from-purple-900/50 to-purple-800/30 border border-purple-700/50 rounded px-3 py-2">
                    <div className="text-xs text-purple-400 font-semibold">CDR / Runtime</div>
                    <div className="text-xs text-gray-500">New battleground</div>
                  </div>
                  <div className="bg-gradient-to-r from-blue-900/50 to-blue-800/30 border border-blue-700/50 rounded px-3 py-2">
                    <div className="text-xs text-blue-400 font-semibold">DSPM / ASPM</div>
                    <div className="text-xs text-gray-500">Expanding scope</div>
                  </div>
                  <div className="bg-gradient-to-r from-green-900/50 to-green-800/30 border border-green-700/50 rounded px-3 py-2">
                    <div className="text-xs text-green-400 font-semibold">CSPM + CWPP + CIEM</div>
                    <div className="text-xs text-gray-500">Core (table stakes)</div>
                  </div>
                </div>
                <p className="text-xs text-gray-500 mt-3">★ Value migrating upward in stack</p>
              </div>
            </div>
          </div>

          {/* Main Content Area */}
          <div className="col-span-9 space-y-8">
            
            {/* Overview Section */}
            <section id="overview" className="bg-gray-900/30 border border-gray-800 rounded-lg p-6">
              <h2 className="text-xl font-bold mb-4 flex items-center gap-2">
                📋 Overview
              </h2>
              <div className="space-y-4 text-gray-300">
                <p>
                  A <span className="text-white font-semibold">Cloud-Native Application Protection Platform (CNAPP)</span> is a 
                  unified security platform consolidating multiple cloud security capabilities to protect cloud-native infrastructure 
                  and applications throughout their entire lifecycle—from development through production runtime. Gartner coined the 
                  term in 2021 to describe an all-in-one platform that unifies security and compliance capabilities.
                </p>
                <p>
                  Unlike traditional siloed security tools, CNAPPs integrate artifact scanning, security guardrails, configuration 
                  and compliance management, risk detection and prioritization, and behavioral analytics into a single platform. 
                  The market has evolved rapidly with <span className="text-cyan-400">83% of organizations experiencing at least 
                  one cloud security incident in 2024</span>.
                </p>
                <div className="bg-gray-800/50 rounded-lg p-4 mt-4">
                  <h4 className="text-white font-semibold mb-2">Why Organizations Invest in CNAPP</h4>
                  <ul className="space-y-2 text-sm">
                    <li className="flex items-start gap-2">
                      <span className="text-cyan-400">•</span>
                      <span><strong className="text-white">Tool Consolidation:</strong> Retire fragmented CSPM, CWPP, CIEM, IaC scanning tools creating alert fatigue</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-cyan-400">•</span>
                      <span><strong className="text-white">Cloud Complexity:</strong> Dynamic environments with VMs, containers, serverless functions introduce new attack paths</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-cyan-400">•</span>
                      <span><strong className="text-white">Shift-Left Security:</strong> Embed security into earliest stages of development, address vulnerabilities pre-production</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-cyan-400">•</span>
                      <span><strong className="text-white">Multi-Cloud Visibility:</strong> Unified visibility and consistent policies across AWS, Azure, GCP</span>
                    </li>
                  </ul>
                </div>
              </div>
            </section>

            {/* Market Structure Section */}
            <section id="structure" className="bg-gray-900/30 border border-gray-800 rounded-lg p-6">
              <h2 className="text-xl font-bold mb-4 flex items-center gap-2">
                🏗️ Market Structure
              </h2>
              
              {/* Market Sizing */}
              <div className="mb-6">
                <h3 className="text-lg font-semibold text-white mb-3">Market Size & Growth</h3>
                <div className="overflow-x-auto">
                  <table className="w-full text-sm">
                    <thead>
                      <tr className="text-left text-gray-400 border-b border-gray-700">
                        <th className="pb-2">Source</th>
                        <th className="pb-2">2024</th>
                        <th className="pb-2">2025</th>
                        <th className="pb-2">Projection</th>
                        <th className="pb-2">CAGR</th>
                      </tr>
                    </thead>
                    <tbody>
                      {marketSizing.map((row, idx) => (
                        <tr key={idx} className="border-b border-gray-800 text-gray-300">
                          <td className="py-2">{row.source}</td>
                          <td className="py-2">{row.val2024}</td>
                          <td className="py-2 text-cyan-400">{row.val2025}</td>
                          <td className="py-2">{row.projection}</td>
                          <td className="py-2 text-green-400">{row.cagr}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
                <p className="text-xs text-gray-500 mt-2">Consensus: $8-11B (2024-25) growing 20-25% CAGR to $28-51B by 2030. Variance reflects category boundary definitions.</p>
              </div>

              {/* Sub-segments */}
              <div className="mb-6">
                <h3 className="text-lg font-semibold text-white mb-3">CNAPP Sub-Segments (Converging)</h3>
                <div className="flex flex-wrap gap-2">
                  {marketSubSegments.map((seg, idx) => (
                    <span
                      key={idx}
                      className="px-3 py-1 bg-gray-800 border border-gray-700 rounded-full text-sm text-gray-300"
                    >
                      {seg}
                    </span>
                  ))}
                </div>
              </div>

              {/* Competitive Landscape */}
              <div>
                <div className="flex items-center justify-between mb-3">
                  <h3 className="text-lg font-semibold text-white">Top 15 Vendors by Consensus (2025)</h3>
                  <div className="flex items-center gap-4 text-xs">
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
                      <a key={idx} href={comp.href} className="block bg-gray-800/50 border border-gray-700 rounded-lg p-4 hover:border-cyan-700 transition-all">
                        <div className="flex items-start justify-between">
                          <div className="flex-1">
                            <div className="flex items-center gap-2 mb-1">
                              <span className="font-semibold text-white">{comp.name}</span>
                              <span className="text-gray-500">•</span>
                              <span className="text-gray-400 text-sm">{comp.product}</span>
                            </div>
                            <p className="text-sm text-gray-400">{comp.focus}</p>
                          </div>
                          <div className="flex items-center gap-2 ml-4">
                            <span className="text-xs px-2 py-1 bg-gray-700 rounded text-gray-300">
                              {comp.position}
                            </span>
                            <span className={`text-xs px-2 py-1 rounded flex items-center gap-1 ${statusStyle.bg} ${statusStyle.text}`}>
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
                <p className="text-xs text-gray-500 mt-3">Note: Top 3 (Wiz, Microsoft, Palo Alto) hold ~54% combined market share. Google/Wiz acquisition reshapes competitive dynamics.</p>
              </div>
            </section>

            {/* Market Dynamics Section */}
            <section id="motion" className="bg-gray-900/30 border border-gray-800 rounded-lg p-6">
              <h2 className="text-xl font-bold mb-4 flex items-center gap-2">
                📈 Market Dynamics
              </h2>

              {/* Assessment */}
              <div className="bg-cyan-900/20 border border-cyan-800/50 rounded-lg p-4 mb-6">
                <div className="flex items-center gap-2 mb-2">
                  <span className="text-xl">📊</span>
                  <span className="font-semibold text-cyan-400">Market Assessment</span>
                </div>
                <p className="text-gray-300">
                  <span className="text-white font-semibold">Position:</span> Late "Slope of Enlightenment" / Early "Plateau of Productivity." 
                  <span className="text-white font-semibold"> Direction:</span> Aggressive Consolidation. 
                  CNAPP is mature enterprise technology, not emerging concept. Category boundaries still being defined.
                </p>
              </div>

              {/* Hype Cycle */}
              <div className="mb-6">
                <h3 className="text-lg font-semibold text-white mb-3">Hype Cycle Positioning (2025)</h3>
                <div className="space-y-2">
                  {hypePositions.map((item, idx) => (
                    <div key={idx} className="flex items-center justify-between bg-gray-800/50 rounded-lg p-3">
                      <div>
                        <span className="text-white font-medium">{item.tech}</span>
                        <span className="text-gray-500 text-sm ml-2">— {item.note}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <span className={`w-2 h-2 rounded-full ${
                          item.status === 'stable' ? 'bg-blue-400' :
                          item.status === 'rising' ? 'bg-green-400' :
                          item.status === 'hot' ? 'bg-orange-400' :
                          item.status === 'emerging' ? 'bg-purple-400' :
                          'bg-gray-400'
                        }`}></span>
                        <span className="text-sm text-gray-400">{item.position}</span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Major Trends */}
              <div className="mb-6">
                <h3 className="text-lg font-semibold text-white mb-3">5 Key Market Trends (2025-2026)</h3>
                <div className="space-y-3">
                  {trends.map((trend, idx) => (
                    <div key={idx} className="bg-gray-800/50 rounded-lg p-4">
                      <h4 className="font-semibold text-cyan-400 mb-1">{trend.name}</h4>
                      <p className="text-sm text-gray-400">{trend.description}</p>
                    </div>
                  ))}
                </div>
              </div>

              {/* M&A Activity */}
              <div className="mb-6">
                <h3 className="text-lg font-semibold text-white mb-3">M&A Consolidation (12-18 Months)</h3>
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
                    <tbody>
                      {maActivity.map((row, idx) => (
                        <tr key={idx} className="border-b border-gray-800 text-gray-300">
                          <td className="py-2">{row.date}</td>
                          <td className="py-2 text-white font-medium">{row.acquirer}</td>
                          <td className="py-2 text-cyan-400">{row.target}</td>
                          <td className="py-2 text-green-400">{row.value}</td>
                          <td className="py-2 text-sm text-gray-400">{row.signal}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>

              {/* Consolidation Signals */}
              <div>
                <h3 className="text-lg font-semibold text-white mb-3">What's Being Replaced</h3>
                <div className="space-y-2">
                  {consolidationSignals.map((sig, idx) => (
                    <div key={idx} className="flex items-center gap-4 bg-gray-800/30 rounded-lg p-3">
                      <span className="text-gray-500 line-through text-sm flex-1">{sig.being}</span>
                      <span className="text-gray-500">→</span>
                      <span className="text-cyan-400 text-sm flex-1">{sig.becoming}</span>
                      <span className="text-xs text-gray-500 flex-1">{sig.note}</span>
                    </div>
                  ))}
                </div>
              </div>
            </section>

            {/* Stakeholders Section */}
            <section id="stakeholders" className="bg-gray-900/30 border border-gray-800 rounded-lg p-6">
              <h2 className="text-xl font-bold mb-4 flex items-center gap-2">
                👥 Stakeholders
              </h2>

              {/* Analyst Consensus */}
              <div className="bg-gray-800/50 rounded-lg p-4 mb-6">
                <h3 className="text-lg font-semibold text-white mb-3">Analyst Consensus</h3>
                <div className="space-y-2 text-sm">
                  <p className="text-gray-300">
                    <span className="text-cyan-400 font-semibold">Gartner:</span> "Unified and tightly integrated set of security and compliance capabilities." By 2029, 60% of enterprises without CNAPP will fail zero-trust goals.
                  </p>
                  <p className="text-gray-300">
                    <span className="text-cyan-400 font-semibold">Forrester:</span> CrowdStrike and Palo Alto Networks as Leaders in Cloud Workload Security.
                  </p>
                  <p className="text-gray-300">
                    <span className="text-cyan-400 font-semibold">IDC MarketScape 2025:</span> Microsoft, CrowdStrike, Trend Micro as Leaders.
                  </p>
                  <p className="text-gray-300">
                    <span className="text-cyan-400 font-semibold">KuppingerCole:</span> CrowdStrike, Fortinet, IBM, Microsoft, Palo Alto, Qualys, Wiz as Overall Leaders.
                  </p>
                </div>
              </div>

              {/* CISO JTBD */}
              <div className="mb-6">
                <h3 className="text-lg font-semibold text-white mb-2">CISO Jobs To Be Done</h3>
                <div className="overflow-x-auto">
                  <table className="w-full text-sm">
                    <thead>
                      <tr className="text-left text-gray-400 border-b border-gray-700">
                        <th className="pb-2">Job Statement</th>
                        <th className="pb-2">Success Metric</th>
                      </tr>
                    </thead>
                    <tbody>
                      {cisoJobs.map((row, idx) => (
                        <tr key={idx} className="border-b border-gray-800 text-gray-300">
                          <td className="py-2">{row.job}</td>
                          <td className="py-2 text-sm text-gray-400">{row.metric}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>

              {/* Cloud Security Architect JTBD */}
              <div className="mb-6">
                <h3 className="text-lg font-semibold text-white mb-2">Cloud Security Architect Jobs To Be Done</h3>
                <div className="overflow-x-auto">
                  <table className="w-full text-sm">
                    <thead>
                      <tr className="text-left text-gray-400 border-b border-gray-700">
                        <th className="pb-2">Job Statement</th>
                        <th className="pb-2">Success Metric</th>
                      </tr>
                    </thead>
                    <tbody>
                      {cloudArchitectJobs.map((row, idx) => (
                        <tr key={idx} className="border-b border-gray-800 text-gray-300">
                          <td className="py-2">{row.job}</td>
                          <td className="py-2 text-sm text-gray-400">{row.metric}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>

              {/* DevSecOps JTBD */}
              <div className="mb-6">
                <h3 className="text-lg font-semibold text-white mb-2">DevSecOps Engineer Jobs To Be Done</h3>
                <div className="bg-gray-800/50 rounded-lg p-4 mb-3">
                  <p className="text-gray-300 italic">
                    "Help me embed security into our pipelines so I can ship secure code without friction."
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
                    <tbody>
                      {devSecOpsJobs.map((row, idx) => (
                        <tr key={idx} className="border-b border-gray-800 text-gray-300">
                          <td className="py-2">{row.job}</td>
                          <td className="py-2 text-sm text-gray-400">{row.metric}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>

              {/* SOC Analyst JTBD */}
              <div className="mb-6">
                <h3 className="text-lg font-semibold text-white mb-2">SOC Analyst Jobs To Be Done</h3>
                <div className="overflow-x-auto">
                  <table className="w-full text-sm">
                    <thead>
                      <tr className="text-left text-gray-400 border-b border-gray-700">
                        <th className="pb-2">Job Statement</th>
                        <th className="pb-2">Success Metric</th>
                      </tr>
                    </thead>
                    <tbody>
                      {socAnalystJobs.map((row, idx) => (
                        <tr key={idx} className="border-b border-gray-800 text-gray-300">
                          <td className="py-2">{row.job}</td>
                          <td className="py-2 text-sm text-gray-400">{row.metric}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>

              {/* Key Pain Point */}
              <div className="bg-red-900/20 border border-red-800/50 rounded-lg p-4">
                <h4 className="text-white font-semibold mb-2">The Core Pain: Alert Fatigue & Tool Sprawl</h4>
                <p className="text-gray-300 text-sm">
                  68% of organizations use more than 11 tools for endpoint management and security. 
                  Enterprises average 76 security tools. The result is alert fatigue and fragmented data—
                  critical warnings get lost in noise. <span className="text-red-400">"Prioritizing risk findings is critical, 
                  as developers and security professionals are overloaded with alerts from siloed tools."</span> — Orca Security
                </p>
              </div>
            </section>

            {/* Economics Section */}
            <section id="economics" className="bg-gray-900/30 border border-gray-800 rounded-lg p-6">
              <h2 className="text-xl font-bold mb-4 flex items-center gap-2">
                💰 Economics & ROI
              </h2>

              {/* ROI Metrics */}
              <div className="mb-6">
                <h3 className="text-lg font-semibold text-white mb-3">The Business Case</h3>
                <div className="grid grid-cols-2 gap-4">
                  {roiMetrics.map((item, idx) => (
                    <div key={idx} className="bg-gray-800/50 rounded-lg p-4 text-center">
                      <div className="text-2xl font-bold text-green-400 mb-1">{item.value}</div>
                      <div className="text-sm text-gray-400">{item.metric}</div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Pricing Models */}
              <div className="mb-6">
                <h3 className="text-lg font-semibold text-white mb-3">Pricing Models (Directional)</h3>
                <div className="overflow-x-auto">
                  <table className="w-full text-sm">
                    <thead>
                      <tr className="text-left text-gray-400 border-b border-gray-700">
                        <th className="pb-2">Model</th>
                        <th className="pb-2">Range</th>
                        <th className="pb-2">Vendors</th>
                        <th className="pb-2">Note</th>
                      </tr>
                    </thead>
                    <tbody>
                      {pricingModels.map((row, idx) => (
                        <tr key={idx} className="border-b border-gray-800 text-gray-300">
                          <td className="py-2 font-medium text-white">{row.model}</td>
                          <td className="py-2 text-cyan-400">{row.range}</td>
                          <td className="py-2">{row.vendors}</td>
                          <td className="py-2 text-sm text-gray-500">{row.note}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
                <p className="text-xs text-gray-500 mt-2">Note: Published pricing is directional only. Negotiated deals show 30-70% off list in competitive situations.</p>
              </div>

              {/* ROI Calculation */}
              <div className="mb-6">
                <h3 className="text-lg font-semibold text-white mb-3">Sample ROI (Enterprise, 3-Year)</h3>
                <div className="bg-gray-800/50 rounded-lg p-4">
                  <div className="space-y-3">
                    <div className="flex items-center justify-between border-b border-gray-700 pb-2">
                      <span className="text-gray-400">Platform License (3yr)</span>
                      <span className="text-red-400">$618K</span>
                    </div>
                    <div className="flex items-center justify-between border-b border-gray-700 pb-2">
                      <span className="text-gray-400">Implementation + Training</span>
                      <span className="text-red-400">$65K</span>
                    </div>
                    <div className="flex items-center justify-between border-b border-gray-700 pb-2">
                      <span className="text-gray-400">Operations (FTE)</span>
                      <span className="text-red-400">$150K</span>
                    </div>
                    <div className="flex items-center justify-between border-b border-gray-700 pb-2">
                      <span className="text-gray-400 font-semibold">Total 3-Year Cost</span>
                      <span className="text-red-400 font-semibold">$833K</span>
                    </div>
                  </div>
                  <div className="mt-4 pt-4 border-t border-gray-700 space-y-2">
                    <div className="flex items-center justify-between">
                      <span className="text-gray-400">Tool Consolidation Savings</span>
                      <span className="text-green-400">$450K</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-gray-400">Breach Risk Reduction (probability-weighted)</span>
                      <span className="text-green-400">$600K</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-gray-400">FTE Efficiency + Compliance + Dev Productivity</span>
                      <span className="text-green-400">$505K</span>
                    </div>
                    <div className="flex items-center justify-between pt-2 border-t border-gray-600">
                      <span className="text-gray-400 font-semibold">Total 3-Year Benefits</span>
                      <span className="text-green-400 font-semibold">$1.555M</span>
                    </div>
                  </div>
                  <div className="mt-4 pt-4 border-t border-gray-600 flex items-center justify-between">
                    <span className="text-white font-semibold">3-Year ROI</span>
                    <span className="text-2xl font-bold text-green-400">87%</span>
                  </div>
                </div>
                <p className="text-xs text-gray-500 mt-2">Microsoft Defender for Cloud Forrester TEI Study (2025): 242% ROI over 3 years, 30% faster remediation.</p>
              </div>

              {/* TCO Warning */}
              <div className="bg-yellow-900/20 border border-yellow-800/50 rounded-lg p-4">
                <h4 className="text-yellow-400 font-semibold mb-2">TCO Considerations (Hidden Costs)</h4>
                <ul className="text-sm text-gray-300 space-y-1">
                  <li>• <strong>Agent deployment overhead:</strong> Agent-based CNAPPs require deployment across workloads</li>
                  <li>• <strong>Integration engineering:</strong> SIEM/SOAR/ticketing integrations add 5-10% of Y1 cost</li>
                  <li>• <strong>Alert tuning:</strong> False positive reduction requires ongoing FTE allocation</li>
                  <li>• <strong>Multi-cloud complexity:</strong> Per-cloud-provider licensing can multiply costs</li>
                  <li>• <strong>Renewal escalation:</strong> 3-8% annual price increases typical</li>
                </ul>
              </div>
            </section>

            {/* PM Strategy Section */}
            <section id="product" className="bg-gray-900/30 border border-gray-800 rounded-lg p-6">
              <h2 className="text-xl font-bold mb-4 flex items-center gap-2">
                🎯 PM Strategic Elements
              </h2>
              
              {/* Table Stakes */}
              <div className="mb-6">
                <h3 className="text-lg font-semibold text-white mb-3">Table Stakes (2025 Minimum Viable)</h3>
                <div className="grid grid-cols-2 gap-2">
                  {tableStakes.map((feature, idx) => (
                    <div key={idx} className="flex items-center gap-2 text-sm text-gray-300">
                      <span className="text-green-400">✓</span>
                      {feature}
                    </div>
                  ))}
                </div>
                <p className="text-xs text-gray-500 mt-3 bg-gray-800/50 p-2 rounded">
                  Missing any of these = immediate RFP disqualification. These are no longer differentiators.
                </p>
              </div>

              {/* Differentiators */}
              <div className="mb-6">
                <h3 className="text-lg font-semibold text-white mb-3">Key Differentiators (What Wins Deals)</h3>
                <div className="space-y-3">
                  {differentiators.map((diff, idx) => (
                    <div key={idx} className="bg-gray-800/50 rounded-lg p-4">
                      <h4 className="font-semibold text-cyan-400 mb-1">{diff.name}</h4>
                      <p className="text-sm text-gray-400">{diff.description}</p>
                    </div>
                  ))}
                </div>
              </div>

              {/* If I'm a PM Here Box */}
              <div className="bg-gradient-to-r from-blue-900/30 to-purple-900/30 border border-blue-800/50 rounded-lg p-6">
                <h3 className="text-lg font-semibold text-white mb-4 flex items-center gap-2">
                  💡 If I am a PM Here, I Need to Know...
                </h3>
                <div className="space-y-3">
                  {pmChecklist.map((item, idx) => (
                    <div key={idx} className="flex items-start gap-3">
                      <span className="text-cyan-400 font-bold">{idx + 1}.</span>
                      <span className="text-gray-300 text-sm">{item.point}</span>
                    </div>
                  ))}
                </div>
              </div>
            </section>

            {/* Strategic Theses Section */}
            <section id="theses" className="bg-gray-900/30 border border-gray-800 rounded-lg p-6">
              <h2 className="text-xl font-bold mb-4 flex items-center gap-2">
                🔮 Strategic Theses
              </h2>
              <p className="text-gray-400 mb-6">
                Three structural shifts reshaping this market. Not incremental changes—fundamental rewirings of where value is created and captured.
              </p>
              <div className="space-y-6">
                {theses.map((thesis) => (
                  <div
                    key={thesis.id}
                    className={`bg-gray-800/50 border-l-4 ${getThesisAccent(thesis.color)} rounded-lg p-5`}
                  >
                    <div className="flex items-start justify-between mb-3">
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
                      <ul className="mt-2 space-y-1">
                        {thesis.evidence.map((item, idx) => (
                          <li key={idx} className="text-sm text-gray-400 flex items-start gap-2">
                            <span className="text-cyan-400">•</span>
                            {item}
                          </li>
                        ))}
                      </ul>
                    </div>
                    <p className="text-sm text-gray-300 bg-gray-900/50 rounded p-3">
                      <span className="text-cyan-400 font-semibold">Implication: </span>
                      {thesis.implication}
                    </p>
                  </div>
                ))}
              </div>

              {/* Synthesis */}
              <div className="mt-6 bg-gray-800/30 rounded-lg p-4">
                <h4 className="text-white font-semibold mb-3">How These Connect</h4>
                <div className="space-y-2 text-sm">
                  <p className="text-gray-400">
                    <span className="text-cyan-400">Hyperscaler disruption</span> → forces independents to → <span className="text-cyan-400">differentiate on innovation</span>
                  </p>
                  <p className="text-gray-400">
                    <span className="text-cyan-400">Runtime becomes battleground</span> → posture-only insufficient → <span className="text-cyan-400">CDR integration mandatory</span>
                  </p>
                  <p className="text-gray-400">
                    <span className="text-cyan-400">AI workloads explode</span> → security gap emerges → <span className="text-cyan-400">AI-SPM first-mover advantage</span>
                  </p>
                </div>
              </div>
            </section>

            {/* Recommendations */}
            <section className="bg-gray-900/30 border border-gray-800 rounded-lg p-6">
              <h2 className="text-xl font-bold mb-4 flex items-center gap-2">
                🎯 Recommendations
              </h2>
              
              <div className="grid grid-cols-2 gap-6">
                {/* For Buyers */}
                <div className="bg-gray-800/50 rounded-lg p-5">
                  <div className="flex items-center gap-2 mb-4">
                    <span className="w-8 h-8 bg-blue-900/50 text-blue-400 rounded-full flex items-center justify-center font-bold">B</span>
                    <span className="font-semibold text-white">For Enterprise Buyers</span>
                  </div>
                  <ul className="space-y-2 text-sm text-gray-300">
                    <li className="flex items-start gap-2">
                      <span className="text-cyan-400">•</span>
                      Evaluate CNAPP as platform capability vs. standalone purchase
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-cyan-400">•</span>
                      Prioritize runtime capabilities—posture-only is insufficient
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-cyan-400">•</span>
                      Calculate TCO including integration, training, operations
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-cyan-400">•</span>
                      Require attack path analysis and risk prioritization
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-cyan-400">•</span>
                      Consider hyperscaler lock-in implications (Google/Wiz, Microsoft)
                    </li>
                  </ul>
                </div>
                {/* For Vendors */}
                <div className="bg-gray-800/50 rounded-lg p-5">
                  <div className="flex items-center gap-2 mb-4">
                    <span className="w-8 h-8 bg-purple-900/50 text-purple-400 rounded-full flex items-center justify-center font-bold">V</span>
                    <span className="font-semibold text-white">For Vendors / Product Leaders</span>
                  </div>
                  <ul className="space-y-2 text-sm text-gray-300">
                    <li className="flex items-start gap-2">
                      <span className="text-purple-400">•</span>
                      Runtime + CDR capabilities are now mandatory roadmap items
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-purple-400">•</span>
                      AI-SPM is greenfield—move fast for first-mover advantage
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-purple-400">•</span>
                      Developer experience differentiates—friction kills adoption
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-purple-400">•</span>
                      Multi-cloud neutrality is positioning against hyperscaler lock-in
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-purple-400">•</span>
                      Time-to-value is #1 mid-market criteria—optimize for fast POC
                    </li>
                  </ul>
                </div>
              </div>
            </section>

            {/* Resources */}
            <section className="bg-gray-900/30 border border-gray-800 rounded-lg p-6">
              <h2 className="text-xl font-bold mb-4 flex items-center gap-2">
                📎 Resources
              </h2>
              <div className="flex gap-4">
                <a href="#" className="flex items-center gap-3 bg-gray-800/50 rounded-lg p-4 hover:bg-gray-800 transition-all">
                  <span className="text-2xl">📄</span>
                  <div>
                    <div className="font-semibold text-white">Full CNAPP Strategic Brief</div>
                    <div className="text-sm text-gray-400">Complete SRP analysis (PDF)</div>
                  </div>
                </a>
                <a href="#" className="flex items-center gap-3 bg-gray-800/50 rounded-lg p-4 hover:bg-gray-800 transition-all">
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
        <div className="mt-12 pt-8 border-t border-gray-800 text-center text-sm text-gray-500">
          <p>Analysis by Andy Simko • CISSP • GPEN • CISA • GSNA • HCSFP • PMC-Level III</p>
          <p className="mt-1">15+ years in cybersecurity • Methodology: Systematic Research Process (SRP)</p>
        </div>
      </div>
    </div>
  );
};

export default CNAPPPage;
