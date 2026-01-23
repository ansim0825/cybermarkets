"use client";

import React, { useState } from 'react';
import { Logo } from '@/components/Logo';

const APISecurityPage = () => {
  const [activeSection, setActiveSection] = useState('overview');

  // Data & App pillar sub-segments (API Security primary home)
  const subSegments = [
    { id: 'api-security', name: 'API Security', active: true, href: '/pillars/data-app/api-security' },
    { id: 'cnapp', name: 'CNAPP', active: false, href: '/pillars/data-app/cnapp' },
    { id: 'dspm', name: 'DSPM', active: false, href: '#' },
    { id: 'dlp', name: 'DLP', active: false, href: '#' },
    { id: 'ast', name: 'App Security Testing', active: false, href: '#' },
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

  // Cross-pillar positioning (API Security touches multiple pillars)
  const relatedPillars = [
    { name: 'Network & Edge', primary: false },
    { name: 'Identity', primary: false },
  ];

  const keyInsights = [
    { stat: '$1.25B+', label: 'Market size (2025)' },
    { stat: '40%', label: 'Of API attacks target business logic (BOLA)' },
    { stat: '$591K', label: 'Average API incident cost' },
    { stat: '90%', label: 'Can\'t confirm APIs are shadow-free' },
  ];

  const marketSizing = [
    { source: 'Mordor Intelligence', val2024: '$1.25B', projection: '$4.6B (2030)', cagr: '29.66%' },
    { source: 'Future Market Insights', val2024: '$1.01B', projection: '$17.2B (2035)', cagr: '23.8%' },
    { source: 'Straits Research', val2024: '$874M', projection: '$3.73B (2033)', cagr: '17.5%' },
    { source: 'Verified Market Research', val2024: '$523M', projection: '$7.9B (2032)', cagr: '31.2%' },
  ];

  const marketSubSegments = [
    'API Discovery & Inventory',
    'API Posture Management',
    'Runtime Protection (WAAP)',
    'API Security Testing (SAST/DAST)',
    'Bot Management (API-focused)',
    'GenAI/LLM API Protection',
  ];

  // Top 15 vendors by consensus from Dimension 1
  const competitors = [
    {
      name: 'Salt Security',
      product: 'Salt Security Platform',
      position: 'Pure-Play Leader',
      focus: 'Largest API data lake. Patented AI threat detection. $75M revenue (2025). "Ask Pepper AI" for NL risk analysis.',
      status: 'in-progress',
      href: '/pillars/data-app/api-security/companies/salt'
    },
    {
      name: 'Akamai',
      product: 'Akamai API Security (Noname)',
      position: 'Platform Leader',
      focus: 'Acquired Noname ($450M, June 2024). Edge network integration. Shadow API discovery at scale.',
      status: 'in-progress',
      href: '/pillars/data-app/api-security/companies/akamai'
    },
    {
      name: 'Cequence Security',
      product: 'Unified API Protection (UAP)',
      position: 'Pure-Play Leader',
      focus: 'Strong bot management integration. GigaOm Leader. 92% Gartner recommend rate. <15 min onboarding.',
      status: 'in-progress',
      href: '/pillars/data-app/api-security/companies/cequence'
    },
    {
      name: 'Traceable AI (Harness)',
      product: 'Traceable API Security',
      position: 'DevSecOps Platform',
      focus: 'Merged with Harness (March 2025). ~$250M ARR combined. OmniTrace GenAI/LLM protection. ML behavioral analytics.',
      status: 'in-progress',
      href: '/pillars/data-app/api-security/companies/traceable'
    },
    {
      name: 'Imperva (Thales)',
      product: 'Imperva API Security',
      position: 'Platform Leader',
      focus: 'Acquired by Thales ($3.6B). Broader AppSec suite. WAF integration. Strong BFSI presence.',
      status: 'in-progress',
      href: '/pillars/data-app/api-security/companies/imperva'
    },
    {
      name: 'Cloudflare',
      product: 'API Gateway + Shield',
      position: 'Platform Leader',
      focus: 'Global edge network. Unified WAF+API. Forrester WAF Leader 2025. FS-ISAC member.',
      status: 'in-progress',
      href: '/pillars/data-app/api-security/companies/cloudflare'
    },
    {
      name: 'F5',
      product: 'Distributed Cloud API Security',
      position: 'Platform Leader',
      focus: 'IDC MarketScape Leader. WAAP integration. Multi-cloud deployment. TrustRadius Top Rated 2024.',
      status: 'in-progress',
      href: '/pillars/data-app/api-security/companies/f5'
    },
    {
      name: '42Crunch',
      product: '42Crunch Platform',
      position: 'Shift-Left Specialist',
      focus: 'Developer-first. OpenAPI spec-based. 1.6M+ developers. Design-time vulnerability detection.',
      status: 'in-progress',
      href: '/pillars/data-app/api-security/companies/42crunch'
    },
    {
      name: 'Wallarm',
      product: 'Wallarm API Security',
      position: 'Pure-Play',
      focus: 'AI/ML detection. Next-gen WAF integration. Real-time blocking. GraphQL + REST support.',
      status: 'in-progress',
      href: '/pillars/data-app/api-security/companies/wallarm'
    },
    {
      name: 'Data Theorem',
      product: 'API Discover & Protect',
      position: 'Pure-Play',
      focus: 'Strong API discovery. Mobile API focus. Continuous monitoring. High G2 ratings.',
      status: 'in-progress',
      href: '/pillars/data-app/api-security/companies/datatheorem'
    },
    {
      name: 'Google Cloud',
      product: 'Apigee Advanced API Security',
      position: 'API Mgmt-Led',
      focus: 'Gartner MQ Leader for API Management (10 consecutive years). Security module add-on.',
      status: 'in-progress',
      href: '/pillars/data-app/api-security/companies/google'
    },
    {
      name: 'Snyk',
      product: 'Snyk API & Web',
      position: 'DevSecOps Platform',
      focus: 'Acquired Probely (DAST). 245% QoQ growth in DAST ARR. Invariant Labs for AI agent security.',
      status: 'in-progress',
      href: '/pillars/data-app/api-security/companies/snyk'
    },
    {
      name: 'Kong',
      product: 'Kong Gateway + Konnect',
      position: 'API Mgmt-Led',
      focus: 'Open-source roots. Gateway-centric security. AI gateway capabilities emerging.',
      status: 'in-progress',
      href: '/pillars/data-app/api-security/companies/kong'
    },
    {
      name: 'Microsoft',
      product: 'Azure API Management + Defender',
      position: 'Platform Incumbent',
      focus: 'Native Azure integration. Defender for Cloud APIs. CNAPP integration. Enterprise breadth.',
      status: 'in-progress',
      href: '/pillars/data-app/api-security/companies/microsoft'
    },
    {
      name: 'Fortinet',
      product: 'FortiWeb',
      position: 'Platform',
      focus: 'GigaOm Leader/Outperformer. Integrated with Security Fabric. Strong WAF heritage.',
      status: 'in-progress',
      href: '/pillars/data-app/api-security/companies/fortinet'
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
    {
      name: 'AI/ML-Powered Behavioral Threat Detection',
      description: 'Behavioral baselining and anomaly detection replacing signature-based rules. Salt "Pepper AI," Traceable OmniTrace leading. AI bot traffic up 300% YoY.'
    },
    {
      name: 'Shift-Left DevSecOps Integration',
      description: 'API scanning becoming CI/CD gating criterion for 70% of pipelines by 2025. Pre-production detection saves 85% remediation cost. Only 12% run scans per commit today.'
    },
    {
      name: 'GenAI/LLM API Protection Emergence',
      description: 'New attack surface from AI applications. Prompt injection entered OWASP LLM Top 10 (LLM07). 94% of LLM agents vulnerable. "Vibe-coding" creating new vulnerabilities.'
    },
    {
      name: 'Zero Trust API Architectures',
      description: 'Sender-constrained tokens (DPoP, mTLS) replacing bearer tokens. Authorization #1 on OWASP API Top 10. FAPI 2.0 mandates. WIMSE for machine-to-machine.'
    },
    {
      name: 'Regulatory Compliance Acceleration',
      description: 'PCI DSS 4.0.1 mandatory March 2025 with explicit API security mandates. EU DORA effective January 2025. Open Banking v4.0 requirements.'
    },
  ];

  const hypePositions = [
    { tech: 'API Discovery & Inventory', position: 'Plateau of Productivity', status: 'stable', note: 'Commoditized' },
    { tech: 'Runtime Protection (WAAP)', position: 'Slope of Enlightenment', status: 'rising', note: 'WAF→WAAP complete' },
    { tech: 'Behavioral Analytics / BOLA Detection', position: 'Slope of Enlightenment', status: 'rising', note: 'Key differentiator' },
    { tech: 'Shift-Left API Testing', position: 'Peak → Slope Transition', status: 'hot', note: 'DAST commoditizing' },
    { tech: 'GenAI/LLM API Protection', position: 'Peak of Inflated Expectations', status: 'hot', note: 'Emerging demand' },
    { tech: 'Agentic AI Security (MCP)', position: 'Innovation Trigger', status: 'emerging', note: 'New frontier' },
  ];

  const maActivity = [
    { date: 'Mar 2025', acquirer: 'Harness', target: 'Traceable', value: 'Merger (~$5B combined)', signal: 'DevSecOps + API security convergence' },
    { date: 'Jun 2024', acquirer: 'Akamai', target: 'Noname Security', value: '$450M', signal: 'Edge + API discovery integration' },
    { date: 'Dec 2023', acquirer: 'Thales', target: 'Imperva', value: '$3.6B', signal: 'AppSec platform consolidation' },
    { date: 'Nov 2024', acquirer: 'Snyk', target: 'Probely', value: 'Undisclosed', signal: 'DAST/API testing for GenAI era' },
    { date: '2025', acquirer: 'A10 Networks', target: 'ThreatX', value: 'Undisclosed', signal: 'WAAP capability acquisition' },
  ];

  const cisoJobs = [
    { job: 'Quantify and communicate API risk to the board', metric: 'Executive-level risk dashboards; financial impact quantification' },
    { job: 'Close the shadow API visibility gap', metric: '90%+ API inventory coverage; continuous discovery' },
    { job: 'Prove compliance to auditors (PCI DSS 4.0.1, DORA)', metric: 'Compliance dashboards; exportable evidence packs' },
    { job: 'Justify budget with measurable security outcomes', metric: 'MTTD/MTTR improvements; incident cost avoidance' },
  ];

  const secEngineerJobs = [
    { job: 'Find all APIs I didn\'t know existed', metric: 'Automated discovery; zero-config deployment' },
    { job: 'Triage alerts without drowning in false positives', metric: '<5% FP rate; prioritized alerts with context' },
    { job: 'Respond faster to API-specific attacks', metric: 'SIEM/SOAR integration; one-click remediation' },
    { job: 'Understand attack context for investigation', metric: 'Full kill chain visualization; enriched context' },
  ];

  const devSecOpsJobs = [
    { job: 'Shift security left without slowing developers', metric: 'Sub-5-minute scans; CI/CD native integration' },
    { job: 'Give developers actionable feedback they can fix', metric: 'Code snippets; remediation guidance; low friction' },
    { job: 'Enforce API standards before production', metric: 'OpenAPI spec validation; policy automation' },
    { job: 'Bridge security and development cultures', metric: 'Developer NPS; adoption rates' },
  ];

  const complianceJobs = [
    { job: 'Prove complete API inventory for auditors', metric: 'PCI DSS 4.0.1 6.3.2 compliance; automated inventory' },
    { job: 'Track sensitive data flowing through APIs', metric: 'PII detection; data classification mapping' },
    { job: 'Generate compliance reports automatically', metric: 'Pre-built mappings (PCI, HIPAA, SOC 2, GDPR)' },
    { job: 'Stay ahead of new regulations proactively', metric: 'DORA, Open Banking v4.0 readiness' },
  ];

  const tableStakes = [
    'Automated API discovery (shadow/zombie detection)',
    'API inventory management and cataloging',
    'OWASP API Security Top 10 coverage',
    'Runtime threat detection and alerting',
    'OpenAPI/Swagger spec validation',
    'Cloud/SaaS deployment option',
    'CI/CD pipeline integration',
    'SIEM integration (Splunk, Sentinel, QRadar)',
    'Basic authentication/authorization validation',
    'Centralized dashboard and reporting',
    'REST API with OpenAPI 3.0 spec',
    'Compliance mapping and audit logging',
  ];

  const differentiators = [
    {
      name: 'BOLA/Business Logic Detection',
      description: '#1 attack vector (40% of API attacks). Requires behavioral understanding. Where legacy WAFs fail. Premium pricing justified.'
    },
    {
      name: 'Time-to-Value / Agentless Deployment',
      description: 'Minutes vs. weeks to deploy. Self-service onboarding. POC-to-production conversion accelerator.'
    },
    {
      name: 'False Positive Rate / Signal Quality',
      description: 'SOC teams reject noisy tools. Proof-based validation confirming exploitability. Risk scoring for prioritization.'
    },
    {
      name: 'Developer-Native Experience',
      description: 'CI/CD integration that doesn\'t break builds. Remediation guidance developers can use. Low friction = adoption.'
    },
    {
      name: 'Behavioral AI / ML Depth',
      description: 'Traffic baseline learning. "Low and slow" attack detection. Contextual business flow understanding.'
    },
    {
      name: 'Platform Consolidation (WAAP)',
      description: 'API Security + WAF + Bot Management unified. Reduced tool sprawl. Single vendor economics.'
    },
    {
      name: 'GenAI/Agentic AI Protection',
      description: 'LLM API security. Prompt injection detection. MCP/tool-use monitoring. Early differentiator → table stakes by 2026.'
    },
  ];

  const integrationTiers = [
    {
      tier: 'Tier 1: Must-Have',
      integrations: ['API Gateways (Kong, Apigee, AWS)', 'CI/CD (Jenkins, GitHub Actions, GitLab)', 'SIEM/SOAR (Splunk, Sentinel, QRadar)', 'Cloud Platforms (AWS, Azure, GCP)', 'Container/K8s']
    },
    {
      tier: 'Tier 2: Competitive Advantage',
      integrations: ['Identity Providers (Okta, Entra ID)', 'Ticketing (ServiceNow, Jira)', 'WAF/CDN (Cloudflare, Akamai)', 'AppSec (Snyk, Veracode)', 'Observability (Datadog, Dynatrace)']
    },
    {
      tier: 'Tier 3: Emerging',
      integrations: ['LLM Frameworks (LangChain, OpenAI)', 'MCP Servers (Agentic AI)', 'CNAPP (Wiz, Prisma, Orca)']
    },
  ];

  const roiMetrics = [
    { metric: 'Average API incident cost (global)', value: '$591K' },
    { metric: 'Financial services API incident', value: '$833K' },
    { metric: 'Pre-production vs runtime remediation savings', value: '85%' },
    { metric: 'AI-enhanced breach lifecycle reduction', value: '80 days' },
  ];

  const pricingTiers = [
    { tier: 'SMB/Entry', range: '$200-600/API/month', vendors: '42Crunch, APIsec, Wallarm', buyer: 'SMB (<500)' },
    { tier: 'Mid-Market', range: '$120K-$240K/year', vendors: 'Salt, Cequence, Traceable', buyer: 'Mid-Market (500-5K)' },
    { tier: 'Enterprise', range: '$200K-$500K+/year', vendors: 'Salt, Akamai, F5, Imperva', buyer: 'Enterprise (5K+)' },
    { tier: 'Platform Bundle', range: 'Traffic-based', vendors: 'Akamai, Cloudflare, F5 (WAAP)', buyer: 'All segments' },
  ];

  const theses = [
    {
      id: 1,
      title: 'Platform Consolidation Threatens Pure-Play Survival',
      timeframe: '2025-2028',
      confidence: 'High',
      color: 'green',
      claim: 'By 2028, 70%+ of API security will be consumed through WAAP platforms (Akamai, Cloudflare, F5) or DevSecOps suites rather than standalone pure-play products. Discovery is commoditized—the battle shifts to protection, remediation, and integration depth.',
      evidence: [
        'Akamai acquired Noname ($450M) after Noname\'s valuation dropped from $1B',
        'Harness/Traceable merger creates DevSecOps + API security convergence',
        '43% of organizations plan to consolidate AppSec tools (OpenText)',
        '"Standalone API security vendors will struggle" — BankInfoSecurity 2025'
      ],
      implication: 'Pure-plays must differentiate on depth (BOLA, AI) or position for acquisition. Platform economics increasingly favor bundled offerings.',
    },
    {
      id: 2,
      title: 'BOLA/Business Logic is THE Differentiator—Everything Else is Table Stakes',
      timeframe: '2025-2027',
      confidence: 'High',
      color: 'purple',
      claim: 'OWASP Top 10 coverage and API discovery have commoditized. The 40% of attacks targeting business logic vulnerabilities are where legacy tools fail—and where winning vendors prove value. Organizations that have experienced BOLA attacks pay premium pricing.',
      evidence: [
        '40% of API attacks target business logic (BOLA)',
        '27% YoY increase in business logic attacks (Thales)',
        '85% of CISOs overconfident in legacy tools vs. business logic attacks',
        'Behavioral understanding required—signatures cannot detect'
      ],
      implication: 'Lead demos with BOLA detection. Invest ruthlessly in behavioral AI. This is where you win or lose enterprise deals.',
    },
    {
      id: 3,
      title: 'GenAI Creates Both the Problem and the Opportunity',
      timeframe: '2025-2027',
      confidence: 'Medium-High',
      color: 'orange',
      claim: 'AI simultaneously expands the API attack surface (through "vibe-coding" vulnerabilities and LLM-powered attacks) and enables better defense (through behavioral analysis). Vendors without GenAI/agentic AI protection capabilities will be caught flat-footed by 2026.',
      evidence: [
        '94.4% of state-of-the-art LLM agents vulnerable to prompt injection',
        'Prompt injection entered OWASP LLM Top 10 as LLM07',
        '"Vibe-coding" creating new API vulnerability patterns (Akamai)',
        'Traceable first-mover on GenAI/LLM protection; others scrambling'
      ],
      implication: 'Build GenAI protection capability now. Monitor MCP/agentic AI tool-use APIs. First-movers capture emerging demand; laggards face obsolescence.',
    },
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
    <div className="min-h-screen bg-gradient-to-br from-gray-950 via-gray-900 to-gray-950 text-white">
      {/* Navigation */}
      <nav className="bg-gray-900/80 backdrop-blur-sm border-b border-gray-800 sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 py-3 flex items-center justify-between">
          <div className="flex items-center gap-4">
            <Logo />
            <span className="text-gray-500">/</span>
            <span className="text-cyan-400 font-medium">Data & App</span>
          </div>
          <div className="flex items-center gap-6 text-sm">
            <a href="/pillars" className="text-gray-400 hover:text-white transition-colors">Pillars</a>
            <a href="/theses" className="text-gray-400 hover:text-white transition-colors">Theses</a>
            <a href="/about" className="text-gray-400 hover:text-white transition-colors">About</a>
          </div>
        </div>
      </nav>

      {/* Sub-segment Navigation */}
      <div className="bg-gray-900/50 border-b border-gray-800">
        <div className="max-w-7xl mx-auto px-4 py-2 flex items-center gap-6 overflow-x-auto">
          {subSegments.map((seg) => (
            <a
              key={seg.id}
              href={seg.href}
              className={`whitespace-nowrap text-sm px-3 py-1.5 rounded-full transition-all ${
                seg.active 
                  ? 'bg-cyan-900/50 text-cyan-400 border border-cyan-700' 
                  : 'text-gray-400 hover:text-white hover:bg-gray-800'
              }`}
            >
              {seg.active && <span className="mr-1">●</span>}
              {seg.name}
            </a>
          ))}
          
          {/* Related pillars */}
          <div className="ml-auto flex items-center gap-2 text-xs text-gray-500">
            <span>Cross-pillar:</span>
            {relatedPillars.map((pillar, idx) => (
              <span key={idx} className="px-2 py-1 bg-gray-800 rounded text-gray-400">
                {pillar.name}
              </span>
            ))}
          </div>
        </div>
      </div>

      {/* Header */}
      <header className="max-w-7xl mx-auto px-4 py-8">
        <div className="flex items-start justify-between">
          <div>
            <div className="flex items-center gap-3 mb-2">
              <h1 className="text-4xl font-bold bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
                API Security
              </h1>
              <span className="px-2 py-1 text-xs font-medium bg-orange-900/50 text-orange-400 border border-orange-700 rounded">
                CONSOLIDATION INFLECTION
              </span>
            </div>
            <p className="text-gray-400 text-lg max-w-3xl">
              The $1B+ market at the intersection of application, network, and identity security—where WAF→WAAP convergence meets pure-play pressure
            </p>
            <p className="text-gray-500 text-sm mt-2">
              Last updated: January 2026 • Methodology: SRP Framework • <span className="text-yellow-400">●</span> Active research
            </p>
          </div>
        </div>

        {/* Key Stats Bar */}
        <div className="grid grid-cols-4 gap-4 mt-6">
          {keyInsights.map((insight, idx) => (
            <div key={idx} className="bg-gray-800/50 rounded-lg p-4 border border-gray-700">
              <div className="text-2xl font-bold text-cyan-400">{insight.stat}</div>
              <div className="text-sm text-gray-400">{insight.label}</div>
            </div>
          ))}
        </div>

        {/* The Core Insight Callout */}
        <div className="mt-6 bg-gradient-to-r from-cyan-900/30 to-blue-900/30 border border-cyan-800/50 rounded-lg p-4">
          <div className="flex items-start gap-3">
            <span className="text-2xl">🔌</span>
            <div>
              <h3 className="font-semibold text-cyan-400">The Core Tension</h3>
              <p className="text-gray-300 text-sm mt-1">
                APIs are the connective tissue of modern digital ecosystems—90%+ of internet traffic. Yet <strong>74% of security leaders are surprised by shadow APIs</strong>, 
                and <strong>only 17% have a comprehensive strategy</strong>. Discovery is commoditized; the battle is now BOLA detection, 
                developer experience, and platform integration. Pure-plays face existential pressure as WAAP vendors consolidate.
              </p>
            </div>
          </div>
        </div>
      </header>

      {/* Main Content Grid */}
      <div className="max-w-7xl mx-auto px-4 pb-12">
        <div className="grid grid-cols-12 gap-6">
          
          {/* Left Sidebar - SRP Navigation */}
          <div className="col-span-2">
            <div className="sticky top-24 space-y-4">
              <div className="bg-gray-800/50 rounded-lg p-4 border border-gray-700">
                <h3 className="text-sm font-semibold text-gray-400 mb-3">SRP Analysis</h3>
                <div className="space-y-1">
                  {srpSections.map((section) => (
                    <button
                      key={section.id}
                      onClick={() => scrollToSection(section.id)}
                      className={`w-full text-left px-3 py-2 rounded-lg text-sm flex items-center gap-2 transition-all ${
                        activeSection === section.id 
                          ? 'bg-cyan-900/50 text-cyan-400 border border-cyan-800' 
                          : 'text-gray-400 hover:bg-gray-800 hover:text-white'
                      }`}
                    >
                      <span>{section.icon}</span>
                      <span>{section.name}</span>
                    </button>
                  ))}
                </div>
              </div>

              {/* API Security Lifecycle Visual */}
              <div className="bg-gray-800/50 rounded-lg p-4 border border-gray-700">
                <h4 className="text-xs font-semibold text-gray-500 uppercase mb-3">API Security Lifecycle</h4>
                <div className="space-y-2 text-xs">
                  <div className="flex items-center gap-2">
                    <span className="w-6 h-6 rounded bg-gray-700 flex items-center justify-center text-gray-400">1</span>
                    <span className="text-gray-400">Discover</span>
                    <span className="text-gray-600 text-[10px]">Commoditized</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="w-6 h-6 rounded bg-gray-700 flex items-center justify-center text-gray-400">2</span>
                    <span className="text-gray-400">Posture</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="w-6 h-6 rounded bg-cyan-900/50 flex items-center justify-center text-cyan-400">3</span>
                    <span className="text-cyan-400">Protect</span>
                    <span className="text-cyan-500 text-[10px]">★ BOLA</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="w-6 h-6 rounded bg-gray-700 flex items-center justify-center text-gray-400">4</span>
                    <span className="text-gray-400">Test</span>
                    <span className="text-orange-400 text-[10px]">Shift-left</span>
                  </div>
                </div>
                <p className="text-[10px] text-gray-500 mt-3 border-t border-gray-700 pt-2">
                  Protection (esp. BOLA) is the new battleground
                </p>
              </div>
            </div>
          </div>

          {/* Main Content Area */}
          <div className="col-span-10 space-y-8">
            
            {/* Overview Section */}
            <section id="overview" className="bg-gray-800/30 rounded-xl p-6 border border-gray-700">
              <h2 className="text-xl font-bold mb-4 flex items-center gap-2">
                <span>📋</span> Overview
              </h2>
              <div className="prose prose-invert max-w-none">
                <p className="text-gray-300">
                  <strong>API Security</strong> refers to the practices, tools, and strategies designed to protect Application Programming Interfaces 
                  from cyber threats, unauthorized access, data breaches, and misuse. APIs have become the foundational connective tissue of modern 
                  digital ecosystems—over 90% of internet traffic flows through APIs, and the average enterprise maintains 15,000+ live endpoints 
                  (tripling every 18 months).
                </p>
                <p className="text-gray-300 mt-3">
                  The market sits at the <strong>intersection of three pillars</strong>: Data & App (primary—protecting application-layer interfaces), 
                  Network & Edge (API gateways, WAF/WAAP, rate limiting), and Identity (OAuth, mTLS, token validation). This cross-pillar nature 
                  explains why Gartner covers API security across multiple frameworks (Market Guide for API Protection, WAAP MQ, API Management MQ, AST MQ) 
                  rather than a standalone Magic Quadrant.
                </p>
                
                <div className="mt-4 p-4 bg-gray-900/50 rounded-lg border border-gray-700">
                  <h4 className="font-semibold text-cyan-400 mb-2">What Makes This Market Unique</h4>
                  <ul className="text-sm text-gray-400 space-y-1">
                    <li>• <strong>Cross-pillar positioning:</strong> Spans application, network, and identity security domains</li>
                    <li>• <strong>No standalone MQ:</strong> Covered across WAAP, API Management, AST—reflects emerging/maturing status</li>
                    <li>• <strong>Discovery commoditized:</strong> Every vendor finds shadow APIs. Differentiation is protection and remediation</li>
                    <li>• <strong>Platform convergence:</strong> WAF→WAAP nearly complete. DevOps+AppSec→DevSecOps accelerating</li>
                    <li>• <strong>Regulatory catalyst:</strong> PCI DSS 4.0.1 and DORA transforming API security from discretionary to mandatory</li>
                  </ul>
                </div>
              </div>
            </section>

            {/* Market Structure Section */}
            <section id="structure" className="bg-gray-800/30 rounded-xl p-6 border border-gray-700">
              <h2 className="text-xl font-bold mb-4 flex items-center gap-2">
                <span>🏗️</span> Market Structure
              </h2>

              {/* Market Sizing */}
              <div className="mb-6">
                <h3 className="text-lg font-semibold mb-3 text-gray-300">Market Size & Growth (Significant Variance)</h3>
                <div className="overflow-x-auto">
                  <table className="w-full text-sm">
                    <thead>
                      <tr className="border-b border-gray-700">
                        <th className="text-left py-2 text-gray-400">Source</th>
                        <th className="text-left py-2 text-gray-400">2024/2025</th>
                        <th className="text-left py-2 text-gray-400">Projection</th>
                        <th className="text-left py-2 text-gray-400">CAGR</th>
                      </tr>
                    </thead>
                    <tbody>
                      {marketSizing.map((row, idx) => (
                        <tr key={idx} className="border-b border-gray-800">
                          <td className="py-2 text-gray-300">{row.source}</td>
                          <td className="py-2 text-cyan-400">{row.val2024}</td>
                          <td className="py-2 text-gray-300">{row.projection}</td>
                          <td className="py-2 text-green-400">{row.cagr}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
                <p className="text-xs text-gray-500 mt-2">
                  Note: Wide variance ($523M to $1.25B) reflects different market definitions—pure API security vs. API+management vs. WAAP inclusive.
                </p>
              </div>

              {/* Sub-segments */}
              <div className="mb-6">
                <h3 className="text-lg font-semibold mb-3 text-gray-300">Market Sub-Segments (Converging)</h3>
                <div className="flex flex-wrap gap-2">
                  {marketSubSegments.map((seg, idx) => (
                    <span key={idx} className="px-3 py-1.5 bg-gray-700/50 rounded-full text-sm text-gray-300 border border-gray-600">
                      {seg}
                    </span>
                  ))}
                </div>
                <p className="text-xs text-gray-500 mt-2">
                  Critical: WAF → WAAP convergence nearly complete. CNAPP, ASPM, and API Security capabilities increasingly overlapping.
                </p>
              </div>

              {/* Competitive Landscape */}
              <div>
                <h3 className="text-lg font-semibold mb-3 text-gray-300">Top 15 Vendors by Consensus (2025)</h3>
                <div className="flex items-center gap-4 mb-3 text-xs">
                  <span className="flex items-center gap-1"><span className="w-2 h-2 rounded-full bg-green-400"></span> Complete</span>
                  <span className="flex items-center gap-1"><span className="w-2 h-2 rounded-full bg-yellow-400"></span> In Progress</span>
                  <span className="flex items-center gap-1"><span className="w-2 h-2 rounded-full bg-gray-500"></span> Pending</span>
                </div>
                <div className="grid grid-cols-1 gap-3">
                  {competitors.map((comp, idx) => {
                    const statusStyle = getStatusStyle(comp.status);
                    return (
                      <div key={idx} className={`p-4 rounded-lg border ${statusStyle.bg} border-gray-700 hover:border-gray-600 transition-colors`}>
                        <div className="flex items-start justify-between">
                          <div className="flex-1">
                            <div className="flex items-center gap-2">
                              <a href={comp.href} className="font-semibold text-white hover:text-cyan-400 transition-colors">
                                {comp.name}
                              </a>
                              <span className="text-gray-500">•</span>
                              <span className="text-sm text-gray-400">{comp.product}</span>
                            </div>
                            <p className="text-sm text-gray-400 mt-1">{comp.focus}</p>
                          </div>
                          <div className="flex items-center gap-2">
                            <span className="text-xs px-2 py-1 bg-gray-700 rounded text-gray-300">{comp.position}</span>
                            <span className={`text-xs px-2 py-1 rounded ${statusStyle.bg} ${statusStyle.text}`}>
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
            <section id="motion" className="bg-gray-800/30 rounded-xl p-6 border border-gray-700">
              <h2 className="text-xl font-bold mb-4 flex items-center gap-2">
                <span>📈</span> Market Dynamics
              </h2>

              {/* Assessment Box */}
              <div className="mb-6 p-4 bg-cyan-900/20 border border-cyan-800/50 rounded-lg">
                <h4 className="font-semibold text-cyan-400 mb-2">📊 Market Assessment</h4>
                <p className="text-sm text-gray-300">
                  <strong>Position:</strong> Transitioning from Peak of Inflated Expectations → Slope of Enlightenment. 
                  <strong className="ml-2">Direction:</strong> Active Consolidation.
                </p>
                <p className="text-sm text-gray-400 mt-1">
                  Core capabilities (discovery, runtime protection) maturing. AI-enhanced and agentic API security features remain earlier on the curve.
                </p>
              </div>

              {/* Hype Cycle */}
              <div className="mb-6">
                <h3 className="text-lg font-semibold mb-3 text-gray-300">Hype Cycle Positioning (2025)</h3>
                <div className="space-y-2">
                  {hypePositions.map((item, idx) => (
                    <div key={idx} className="flex items-center justify-between p-3 bg-gray-800/50 rounded-lg">
                      <div className="flex items-center gap-3">
                        <span className={`w-2 h-2 rounded-full ${
                          item.status === 'emerging' ? 'bg-purple-400' :
                          item.status === 'hot' ? 'bg-orange-400' :
                          item.status === 'rising' ? 'bg-green-400' :
                          'bg-gray-400'
                        }`}></span>
                        <span className="text-gray-300">{item.tech}</span>
                        <span className="text-xs text-gray-500">— {item.note}</span>
                      </div>
                      <span className="text-sm text-cyan-400">{item.position}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Major Trends */}
              <div className="mb-6">
                <h3 className="text-lg font-semibold mb-3 text-gray-300">5 Major Trends for 2025-2026</h3>
                <div className="grid grid-cols-1 gap-3">
                  {trends.map((trend, idx) => (
                    <div key={idx} className="p-4 bg-gray-800/50 rounded-lg border-l-4 border-cyan-500">
                      <h4 className="font-semibold text-white">{trend.name}</h4>
                      <p className="text-sm text-gray-400 mt-1">{trend.description}</p>
                    </div>
                  ))}
                </div>
              </div>

              {/* M&A Activity */}
              <div>
                <h3 className="text-lg font-semibold mb-3 text-gray-300">M&A Activity (Consolidation Signals)</h3>
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
                          <td className="py-2 text-white font-medium">{row.acquirer}</td>
                          <td className="py-2 text-cyan-400">{row.target}</td>
                          <td className="py-2 text-green-400">{row.value}</td>
                          <td className="py-2 text-gray-400 text-xs">{row.signal}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
                <p className="text-xs text-gray-500 mt-2">
                  Noname's $1B (2021) → $450M (2024) valuation drop signals tightened funding environment for pure-plays.
                </p>
              </div>
            </section>

            {/* Stakeholders Section */}
            <section id="stakeholders" className="bg-gray-800/30 rounded-xl p-6 border border-gray-700">
              <h2 className="text-xl font-bold mb-4 flex items-center gap-2">
                <span>👥</span> Stakeholders
              </h2>

              {/* Analyst Consensus */}
              <div className="mb-6 p-4 bg-gray-900/50 rounded-lg border border-gray-700">
                <h4 className="font-semibold text-cyan-400 mb-2">Analyst Consensus</h4>
                <div className="grid grid-cols-3 gap-4 text-sm">
                  <div>
                    <span className="text-gray-400 font-medium">Gartner:</span>
                    <p className="text-gray-300">Critical cross-cutting capability. Market Guide for API Protection. No standalone MQ.</p>
                  </div>
                  <div>
                    <span className="text-gray-400 font-medium">Forrester:</span>
                    <p className="text-gray-300">Top CISO budget priority for 2025. Eight-component framework. "Highly fragmented" market.</p>
                  </div>
                  <div>
                    <span className="text-gray-400 font-medium">IDC:</span>
                    <p className="text-gray-300">Part of broader WAAP. MarketScape Leaders: Akamai, F5, Imperva, Cloudflare.</p>
                  </div>
                </div>
              </div>

              {/* CISO JTBD */}
              <div className="mb-4">
                <h3 className="text-lg font-semibold mb-3 text-gray-300">CISO / Security Leadership</h3>
                <p className="text-sm text-gray-400 italic mb-3">"Help me quantify API risk so I can justify budget and prove compliance."</p>
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
                          <td className="py-2 text-gray-300">{row.job}</td>
                          <td className="py-2 text-gray-400 text-xs">{row.metric}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>

              {/* Security Engineer JTBD */}
              <div className="mb-4">
                <h3 className="text-lg font-semibold mb-3 text-gray-300">Security Engineer / SOC Analyst</h3>
                <p className="text-sm text-gray-400 italic mb-3">"Help me find shadow APIs and respond without drowning in false positives."</p>
                <div className="overflow-x-auto">
                  <table className="w-full text-sm">
                    <thead>
                      <tr className="border-b border-gray-700">
                        <th className="text-left py-2 text-gray-400">Job Statement</th>
                        <th className="text-left py-2 text-gray-400">Success Metric</th>
                      </tr>
                    </thead>
                    <tbody>
                      {secEngineerJobs.map((row, idx) => (
                        <tr key={idx} className="border-b border-gray-800">
                          <td className="py-2 text-gray-300">{row.job}</td>
                          <td className="py-2 text-gray-400 text-xs">{row.metric}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>

              {/* DevSecOps JTBD */}
              <div className="mb-4">
                <h3 className="text-lg font-semibold mb-3 text-gray-300">DevSecOps / Platform Engineer</h3>
                <p className="text-sm text-gray-400 italic mb-3">"Help me shift left without slowing developers or breaking builds."</p>
                <div className="overflow-x-auto">
                  <table className="w-full text-sm">
                    <thead>
                      <tr className="border-b border-gray-700">
                        <th className="text-left py-2 text-gray-400">Job Statement</th>
                        <th className="text-left py-2 text-gray-400">Success Metric</th>
                      </tr>
                    </thead>
                    <tbody>
                      {devSecOpsJobs.map((row, idx) => (
                        <tr key={idx} className="border-b border-gray-800">
                          <td className="py-2 text-gray-300">{row.job}</td>
                          <td className="py-2 text-gray-400 text-xs">{row.metric}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>

              {/* Compliance JTBD */}
              <div className="mb-4">
                <h3 className="text-lg font-semibold mb-3 text-gray-300">Compliance / GRC Officer</h3>
                <p className="text-sm text-gray-400 italic mb-3">"Help me prove API security posture for audits and stay ahead of new regulations."</p>
                <div className="overflow-x-auto">
                  <table className="w-full text-sm">
                    <thead>
                      <tr className="border-b border-gray-700">
                        <th className="text-left py-2 text-gray-400">Job Statement</th>
                        <th className="text-left py-2 text-gray-400">Success Metric</th>
                      </tr>
                    </thead>
                    <tbody>
                      {complianceJobs.map((row, idx) => (
                        <tr key={idx} className="border-b border-gray-800">
                          <td className="py-2 text-gray-300">{row.job}</td>
                          <td className="py-2 text-gray-400 text-xs">{row.metric}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>

              {/* Key Pain Point */}
              <div className="mt-6 p-4 bg-red-900/20 border border-red-800/50 rounded-lg">
                <h4 className="font-semibold text-red-400 mb-2">The Core Pain: The Visibility-Strategy Gap</h4>
                <p className="text-sm text-gray-300">
                  <strong>73% of CISOs</strong> consider API security a critical concern, but <strong>only 17%</strong> have a comprehensive strategy. 
                  <strong> 74%</strong> are "often surprised" by shadow API discovery. <strong>85%</strong> have false confidence that legacy tools 
                  can block business logic attacks—they can't. <strong>Only 16%</strong> feel adequately staffed to triage API alerts.
                </p>
              </div>
            </section>

            {/* Economics Section */}
            <section id="economics" className="bg-gray-800/30 rounded-xl p-6 border border-gray-700">
              <h2 className="text-xl font-bold mb-4 flex items-center gap-2">
                <span>💰</span> Economics & ROI
              </h2>

              {/* ROI Metrics */}
              <div className="grid grid-cols-4 gap-4 mb-6">
                {roiMetrics.map((item, idx) => (
                  <div key={idx} className="bg-gray-800/50 rounded-lg p-4 text-center border border-gray-700">
                    <div className="text-2xl font-bold text-green-400">{item.value}</div>
                    <div className="text-xs text-gray-400 mt-1">{item.metric}</div>
                  </div>
                ))}
              </div>

              {/* Pricing Tiers */}
              <div className="mb-6">
                <h3 className="text-lg font-semibold mb-3 text-gray-300">Pricing Tiers (Directional)</h3>
                <div className="overflow-x-auto">
                  <table className="w-full text-sm">
                    <thead>
                      <tr className="border-b border-gray-700">
                        <th className="text-left py-2 text-gray-400">Tier</th>
                        <th className="text-left py-2 text-gray-400">Annual Range</th>
                        <th className="text-left py-2 text-gray-400">Representative Vendors</th>
                        <th className="text-left py-2 text-gray-400">Typical Buyer</th>
                      </tr>
                    </thead>
                    <tbody>
                      {pricingTiers.map((row, idx) => (
                        <tr key={idx} className="border-b border-gray-800">
                          <td className="py-2 text-white font-medium">{row.tier}</td>
                          <td className="py-2 text-green-400">{row.range}</td>
                          <td className="py-2 text-gray-300">{row.vendors}</td>
                          <td className="py-2 text-gray-400">{row.buyer}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
                <p className="text-xs text-gray-500 mt-2">
                  Note: Most enterprise vendors require direct contact for quotes. Pricing opacity is a consistent market friction point.
                </p>
              </div>

              {/* ROI Calculation */}
              <div className="p-4 bg-gray-900/50 rounded-lg border border-gray-700">
                <h4 className="font-semibold text-cyan-400 mb-3">Sample 3-Year ROI (Mid-Market Enterprise)</h4>
                <div className="grid grid-cols-2 gap-6">
                  <div>
                    <h5 className="text-sm font-medium text-gray-400 mb-2">Investment</h5>
                    <div className="space-y-1 text-sm">
                      <div className="flex justify-between">
                        <span className="text-gray-400">Platform subscription (Y1)</span>
                        <span className="text-white">$180,000</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-gray-400">Implementation services</span>
                        <span className="text-white">$50,000</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-gray-400">Integration + Training</span>
                        <span className="text-white">$45,000</span>
                      </div>
                      <div className="flex justify-between border-t border-gray-700 pt-1 mt-1">
                        <span className="text-gray-300 font-medium">Year 1 Total</span>
                        <span className="text-cyan-400 font-medium">$275,000</span>
                      </div>
                    </div>
                  </div>
                  <div>
                    <h5 className="text-sm font-medium text-gray-400 mb-2">Value (Annual)</h5>
                    <div className="space-y-1 text-sm">
                      <div className="flex justify-between">
                        <span className="text-gray-400">Incident cost avoidance</span>
                        <span className="text-green-400">$300,000</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-gray-400">Operational efficiency</span>
                        <span className="text-green-400">$75,000</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-gray-400">Compliance/Developer productivity</span>
                        <span className="text-green-400">$75,000</span>
                      </div>
                      <div className="flex justify-between border-t border-gray-700 pt-1 mt-1">
                        <span className="text-gray-300 font-medium">Year 1 Net Benefit</span>
                        <span className="text-green-400 font-medium">$175,000 (64% ROI)</span>
                      </div>
                    </div>
                  </div>
                </div>
                <p className="text-xs text-gray-500 mt-3">
                  3-Year Cumulative ROI: 193%. Based on IBM breach data, Mordor shift-left economics, and Forrester efficiency benchmarks.
                </p>
              </div>

              {/* TCO Warning */}
              <div className="mt-4 p-4 bg-yellow-900/20 border border-yellow-800/50 rounded-lg">
                <h4 className="font-semibold text-yellow-400 mb-2">⚠️ TCO Extends Beyond License Costs</h4>
                <ul className="text-sm text-gray-300 space-y-1">
                  <li>• <strong>Integration complexity:</strong> 2-3x implementation premium for complex multi-cloud environments</li>
                  <li>• <strong>False positive overhead:</strong> Can consume 20-30% of analyst time</li>
                  <li>• <strong>Skills premium:</strong> AI/ML security engineers command $300K-$500K+</li>
                  <li>• <strong>Volume-based pricing:</strong> API count or traffic models can create cost escalation surprises at scale</li>
                </ul>
              </div>
            </section>

            {/* PM Strategy Section */}
            <section id="product" className="bg-gray-800/30 rounded-xl p-6 border border-gray-700">
              <h2 className="text-xl font-bold mb-4 flex items-center gap-2">
                <span>🎯</span> PM Strategic Elements
              </h2>

              {/* Table Stakes */}
              <div className="mb-6">
                <h3 className="text-lg font-semibold mb-3 text-gray-300">Table Stakes (2025 MVP—Required for RFP)</h3>
                <div className="grid grid-cols-3 gap-2">
                  {tableStakes.map((feature, idx) => (
                    <div key={idx} className="flex items-center gap-2 text-sm text-gray-400 bg-gray-800/50 rounded px-3 py-2">
                      <span className="text-green-400">✓</span>
                      <span>{feature}</span>
                    </div>
                  ))}
                </div>
                <p className="text-xs text-gray-500 mt-2">
                  Missing any of these = immediate RFP disqualification. These are no longer differentiators—they're checkboxes.
                </p>
              </div>

              {/* Differentiators */}
              <div className="mb-6">
                <h3 className="text-lg font-semibold mb-3 text-gray-300">Key Differentiators (What Wins Deals)</h3>
                <div className="grid grid-cols-1 gap-3">
                  {differentiators.map((diff, idx) => (
                    <div key={idx} className="p-4 bg-gray-800/50 rounded-lg border-l-4 border-cyan-500">
                      <h4 className="font-semibold text-white">{diff.name}</h4>
                      <p className="text-sm text-gray-400 mt-1">{diff.description}</p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Integration Tiers */}
              <div className="mb-6">
                <h3 className="text-lg font-semibold mb-3 text-gray-300">Integration Requirements (Ecosystem Plays)</h3>
                <div className="space-y-4">
                  {integrationTiers.map((tier, idx) => (
                    <div key={idx} className="p-4 bg-gray-800/50 rounded-lg">
                      <h4 className="font-semibold text-cyan-400 mb-2">{tier.tier}</h4>
                      <div className="flex flex-wrap gap-2">
                        {tier.integrations.map((int, i) => (
                          <span key={i} className="px-2 py-1 bg-gray-700 rounded text-xs text-gray-300">
                            {int}
                          </span>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* If I'm a PM Here Box */}
              <div className="p-4 bg-gradient-to-r from-cyan-900/30 to-blue-900/30 border border-cyan-800/50 rounded-lg">
                <h4 className="font-semibold text-cyan-400 mb-3 flex items-center gap-2">
                  <span>💡</span> If I am a PM Here, I Need to Know...
                </h4>
                <ol className="text-sm text-gray-300 space-y-2">
                  <li><strong>1.</strong> <strong>Discovery alone is commoditized</strong>—every vendor can find shadow APIs. The battle is protection, remediation, and integration depth.</li>
                  <li><strong>2.</strong> <strong>BOLA/business logic detection is THE differentiator</strong>—40% of attacks, where legacy WAFs fail. Lead every demo with this.</li>
                  <li><strong>3.</strong> <strong>Developer experience determines adoption</strong>—CI/CD integration, fast scans, low false positives. Security tools that create friction get circumvented.</li>
                  <li><strong>4.</strong> <strong>Platform consolidation creates pricing pressure</strong>—standalone must justify separate budget line. Consider "build vs. partner vs. be acquired" strategy.</li>
                  <li><strong>5.</strong> <strong>GenAI/agentic AI protection is the next frontier</strong>—94% of LLM agents vulnerable. First-movers capture demand; laggards face obsolescence by 2026.</li>
                  <li><strong>6.</strong> <strong>Proof-based detection wins POCs</strong>—validated exploitability beats theoretical vulnerabilities. Invest in reducing false positives ruthlessly.</li>
                  <li><strong>7.</strong> <strong>Compliance is now a forcing function</strong>—PCI DSS 4.0.1 and DORA make this mandatory, not discretionary. Build compliance-aligned messaging.</li>
                  <li><strong>8.</strong> <strong>Microsoft/AWS baseline is improving</strong>—native cloud API security capabilities are getting better. Articulate incremental value clearly.</li>
                </ol>
              </div>
            </section>

            {/* Strategic Theses Section */}
            <section id="theses" className="bg-gray-800/30 rounded-xl p-6 border border-gray-700">
              <h2 className="text-xl font-bold mb-4 flex items-center gap-2">
                <span>🔮</span> Strategic Theses
              </h2>
              <p className="text-gray-400 mb-6">
                Three structural shifts reshaping this market. Not incremental changes—fundamental rewirings of where value is created and captured.
              </p>

              <div className="space-y-6">
                {theses.map((thesis) => (
                  <div 
                    key={thesis.id} 
                    className={`p-5 bg-gray-900/50 rounded-lg border-l-4 ${getThesisAccent(thesis.color)}`}
                  >
                    <div className="flex items-start justify-between mb-3">
                      <h3 className="text-lg font-bold text-white">{thesis.title}</h3>
                      <div className="flex items-center gap-2">
                        <span className={`text-xs px-2 py-1 rounded border ${getConfidenceColor(thesis.confidence)}`}>
                          {thesis.confidence}
                        </span>
                        <span className="text-xs text-gray-500">{thesis.timeframe}</span>
                      </div>
                    </div>
                    <p className="text-gray-300 mb-4">{thesis.claim}</p>
                    
                    <div className="mb-3">
                      <h4 className="text-xs font-semibold text-gray-500 uppercase mb-2">EVIDENCE</h4>
                      <ul className="text-sm text-gray-400 space-y-1">
                        {thesis.evidence.map((item, idx) => (
                          <li key={idx} className="flex items-start gap-2">
                            <span className="text-cyan-400">→</span>
                            <span>{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                    
                    <div className="pt-3 border-t border-gray-700">
                      <span className="text-xs text-cyan-400 font-medium">Implication: </span>
                      <span className="text-sm text-gray-300">{thesis.implication}</span>
                    </div>
                  </div>
                ))}
              </div>

              {/* Synthesis */}
              <div className="mt-6 p-4 bg-gray-900/50 rounded-lg border border-gray-700">
                <h4 className="font-semibold text-white mb-3">How These Connect</h4>
                <div className="text-sm text-gray-400 space-y-2">
                  <p>
                    <span className="text-cyan-400">Platform consolidation</span> → commoditizes discovery → value shifts to → 
                    <span className="text-purple-400"> BOLA/behavioral detection</span>
                  </p>
                  <p>
                    <span className="text-purple-400">BOLA detection leadership</span> → requires behavioral AI → creates demand for → 
                    <span className="text-orange-400"> GenAI/agentic capabilities</span>
                  </p>
                  <p>
                    <span className="text-orange-400">GenAI attack surface expansion</span> → creates new protection domain → 
                    first-movers differentiate → laggards face absorption
                  </p>
                </div>
              </div>

              {/* Recommendations */}
              <div className="grid grid-cols-2 gap-4 mt-6">
                <div className="p-4 bg-cyan-900/20 border border-cyan-800/50 rounded-lg">
                  <h4 className="font-semibold text-cyan-400 mb-3 flex items-center gap-2">
                    <span className="text-lg">B</span> For Enterprise Buyers
                  </h4>
                  <ul className="text-sm text-gray-300 space-y-2">
                    <li>• Evaluate API security as platform capability vs. standalone purchase</li>
                    <li>• Prioritize BOLA/business logic detection in POC—this is where tools differentiate</li>
                    <li>• Require GenAI/LLM protection roadmap—will be table stakes by 2026</li>
                    <li>• Factor TCO beyond license: integration, FP overhead, skills</li>
                    <li>• Compliance (PCI DSS 4.0.1, DORA) makes this mandatory, not discretionary</li>
                  </ul>
                </div>
                
                <div className="p-4 bg-purple-900/20 border border-purple-800/50 rounded-lg">
                  <h4 className="font-semibold text-purple-400 mb-3 flex items-center gap-2">
                    <span className="text-lg">V</span> For Vendors / Product Leaders
                  </h4>
                  <ul className="text-sm text-gray-300 space-y-2">
                    <li>• Lead with BOLA detection in every demo—this wins deals</li>
                    <li>• Build GenAI/agentic AI protection now or face obsolescence</li>
                    <li>• Developer experience is non-negotiable—measure NPS with dev teams</li>
                    <li>• Integration depth = stickier customers. Prioritize where customers live</li>
                    <li>• Pure-plays: differentiate deeply or prepare for acquisition</li>
                  </ul>
                </div>
              </div>
            </section>

            {/* Resources */}
            <section className="bg-gray-800/30 rounded-xl p-6 border border-gray-700">
              <h2 className="text-xl font-bold mb-4 flex items-center gap-2">
                <span>📎</span> Resources
              </h2>
              <div className="grid grid-cols-2 gap-4">
                <a href="#" className="p-4 bg-gray-800/50 rounded-lg border border-gray-700 hover:border-cyan-700 transition-colors">
                  <div className="flex items-center gap-3">
                    <span className="text-2xl">📄</span>
                    <div>
                      <h4 className="font-semibold text-white">Full API Security Market Guide</h4>
                      <p className="text-sm text-gray-400">Complete SRP analysis (PDF)</p>
                    </div>
                  </div>
                </a>
                <a href="#" className="p-4 bg-gray-800/50 rounded-lg border border-gray-700 hover:border-cyan-700 transition-colors">
                  <div className="flex items-center gap-3">
                    <span className="text-2xl">📊</span>
                    <div>
                      <h4 className="font-semibold text-white">Vendor Comparison Matrix</h4>
                      <p className="text-sm text-gray-400">Side-by-side feature analysis</p>
                    </div>
                  </div>
                </a>
              </div>
            </section>

          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="bg-gray-900/80 border-t border-gray-800 py-6">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <p className="text-gray-400 text-sm">
            Analysis by <span className="text-white">Andy Simko</span> • CISSP • GPEN • CISA • GSNA • HCSFP • PMC-Level III
          </p>
          <p className="text-gray-500 text-xs mt-1">
            15+ years in cybersecurity • Methodology: Systematic Research Process (SRP)
          </p>
        </div>
      </footer>
    </div>
  );
};

export default APISecurityPage;
