"use client";
import React, { useState } from 'react';
import { Logo } from '@/components/Logo';

const PAMPage = () => {
  const [activeSection, setActiveSection] = useState('overview');

  // Identity pillar sub-segments
  const subSegments = [
    { id: 'pam', name: 'PAM', active: true, href: '/pillars/identity/pam' },
    { id: 'itdr', name: 'ITDR', active: false, href: '/pillars/identity/itdr' },
    { id: 'iam', name: 'IAM / IGA', active: false, href: '#' },
    { id: 'ciam', name: 'CIAM', active: false, href: '#' },
    { id: 'mfa', name: 'Passwordless / MFA', active: false, href: '#' },
    { id: 'nhi', name: 'Non-Human Identity', active: false, href: '#' },
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
    { name: 'GRC & TIC', primary: false },
    { name: 'Data Security', primary: false },
  ];

  const keyInsights = [
    { stat: '$4.25B', label: 'Market size (2025)' },
    { stat: '80%', label: 'Breaches from compromised credentials' },
    { stat: '40:1', label: 'Machine-to-human identity ratio' },
    { stat: '$25B', label: 'Palo Alto/CyberArk deal (pending)' },
  ];

  const marketSizing = [
    { source: 'Mordor Intelligence', val2024: '$4.25B', projection: '$11.59B (2030)', cagr: '22.2%' },
    { source: 'Precedence Research', val2024: '$1.18B (US)', projection: '$29.88B global (2034)', cagr: '23.6%' },
    { source: 'Persistence Market Research', val2024: '$3.28B (2023)', projection: '$22.69B (2033)', cagr: '21.4%' },
    { source: 'Cybersecurity Ventures', val2024: '$3.5B (2023)', projection: '$7B (2028)', cagr: '15%' },
  ];

  const marketSubSegments = [
    'PASM (Privileged Account & Session Management)',
    'PEDM / EPM (Endpoint Privilege Management)',
    'Secrets Management',
    'CIEM (Cloud Infrastructure Entitlement Management)',
    'RPAM (Remote Privileged Access Management)',
  ];

  // Top vendors by analyst consensus
  const competitors = [
    { 
      name: 'CyberArk', 
      product: 'CyberArk Identity Security Platform',
      position: 'Platform Leader', 
      focus: '~40% market share. 7x Gartner MQ Leader. Furthest in Completeness of Vision. Venafi ($1.54B) + Zilla acquisitions. Being acquired by Palo Alto Networks ($25B).',
      status: 'in-progress',
      href: '/pillars/identity/pam/companies/cyberark'
    },
    { 
      name: 'BeyondTrust', 
      product: 'Pathfinder Platform',
      position: 'Platform Leader', 
      focus: '7x Gartner MQ Leader. Highest in Ability to Execute. Exceeded $400M ARR. True Privilege Graph AI. First-to-market agentic AI security.',
      status: 'in-progress',
      href: '/pillars/identity/pam/companies/beyondtrust'
    },
    { 
      name: 'Delinea', 
      product: 'Delinea Platform',
      position: 'Platform Leader', 
      focus: 'Formed from Thycotic + Centrify (2021). Gartner MQ Leader. "Fastest time to value." Acquiring StrongDM (Jan 2026). Runtime AI authorization.',
      status: 'in-progress',
      href: '/pillars/identity/pam/companies/delinea'
    },
    { 
      name: 'One Identity', 
      product: 'One Identity PAM + Safeguard',
      position: 'Converged Platform', 
      focus: 'KuppingerCole Overall Leader. Converged PAM + IGA + AM. AI-driven administration. Flexible deployment.',
      status: 'in-progress',
      href: '/pillars/identity/pam/companies/oneidentity'
    },
    { 
      name: 'Microsoft', 
      product: 'Entra PIM (Privileged Identity Management)',
      position: 'Platform Incumbent', 
      focus: 'Native to Azure/M365 environments. JIT access for Microsoft workloads. E5 bundle economics.',
      status: 'in-progress',
      href: '/pillars/identity/pam/companies/microsoft'
    },
    { 
      name: 'Saviynt', 
      product: 'Saviynt Identity Cloud',
      position: 'Cloud-Native', 
      focus: 'Gartner MQ Challenger. KuppingerCole Overall Leader (3 consecutive years). Cloud-native converged platform.',
      status: 'in-progress',
      href: '/pillars/identity/pam/companies/saviynt'
    },
    { 
      name: 'ManageEngine (Zoho)', 
      product: 'PAM360',
      position: 'Mid-Market', 
      focus: 'Gartner MQ Challenger. Strong mid-market traction. Competitive pricing below market average.',
      status: 'in-progress',
      href: '/pillars/identity/pam/companies/manageengine'
    },
    { 
      name: 'HashiCorp (IBM)', 
      product: 'Vault + Boundary',
      position: 'DevOps/Cloud-Native', 
      focus: 'Secrets management leader. Open-source roots. Strong DevOps adoption. Acquired by IBM (2024).',
      status: 'in-progress',
      href: '/pillars/identity/pam/companies/hashicorp'
    },
    { 
      name: 'WALLIX', 
      product: 'WALLIX Bastion',
      position: 'EMEA Leader', 
      focus: 'European market leader (HQ: France). Gartner MQ recognized. Strong regulatory compliance positioning.',
      status: 'in-progress',
      href: '/pillars/identity/pam/companies/wallix'
    },
    { 
      name: 'Segura (fka senhasegura)', 
      product: 'Segura PAM',
      position: 'Challenger', 
      focus: 'Gartner MQ Challenger. Forrester Strong Performer. Brazilian HQ. Fast global growth.',
      status: 'in-progress',
      href: '/pillars/identity/pam/companies/segura'
    },
    { 
      name: 'Keeper Security', 
      product: 'KeeperPAM',
      position: 'SMB/Mid-Market', 
      focus: 'Recognized in Gartner MQ 2025. Cloud-native. Strong SMB/mid-market traction.',
      status: 'in-progress',
      href: '/pillars/identity/pam/companies/keeper'
    },
    { 
      name: 'Teleport', 
      product: 'Teleport Platform',
      position: 'Cloud-Native Challenger', 
      focus: 'Zero-trust access plane. Biometric/passwordless. Strong Kubernetes focus. Well-funded startup.',
      status: 'in-progress',
      href: '/pillars/identity/pam/companies/teleport'
    },
    { 
      name: 'StrongDM', 
      product: 'StrongDM Platform',
      position: 'Cloud-Native Challenger', 
      focus: 'Zero Trust PAM. JIT access for DBs, servers, K8s. Being acquired by Delinea (Jan 2026). $70/user/month.',
      status: 'in-progress',
      href: '/pillars/identity/pam/companies/strongdm'
    },
    { 
      name: 'Apono', 
      product: 'Apono JIT Platform',
      position: 'Cloud JIT Specialist', 
      focus: 'Israeli startup. Eliminates standing privileges. Built for NHI governance and AI workloads.',
      status: 'in-progress',
      href: '/pillars/identity/pam/companies/apono'
    },
    { 
      name: 'ARCON', 
      product: 'ARCON PAM',
      position: 'APAC Leader', 
      focus: '6x Gartner MQ Challenger. India HQ. Strong APAC and regulated industries.',
      status: 'in-progress',
      href: '/pillars/identity/pam/companies/arcon'
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
    { name: 'Zero Standing Privileges (ZSP) / Just-In-Time Access', description: '"Privilege is best when fleeting" (Forrester). JIT shifting from premium feature to baseline expectation. Cyber insurers mandating JIT controls.' },
    { name: 'PAM for AI Agents & Non-Human Identities', description: 'NHIs outnumber humans 40-82:1. Agentic AI creates "superhuman identities with persistent access." CyberArk and BeyondTrust announcing solutions.' },
    { name: 'Platform Consolidation & Identity Security Convergence', description: 'Palo Alto/CyberArk $25B deal establishes identity as core platform pillar. PAM + IGA + CIEM + Secrets converging into unified platforms.' },
    { name: 'Cyber Insurance as Primary Adoption Driver', description: '15-25% of new PAM deployments driven by cyber insurance requirements. 42% of orgs required PAM for policy eligibility. Premium reductions up to 18%.' },
    { name: 'Cloud-Native PAM Democratizes SMB Market', description: 'SMB PAM segment growing at 25.5% CAGR. Per-user pricing ($70/user/month) removes infrastructure barriers. Time-to-value < 90 days.' },
  ];

  const hypePositions = [
    { tech: 'Core PAM (PASM / Credential Vaulting)', position: 'Plateau of Productivity', status: 'stable', note: 'Mature, widely adopted, commoditizing' },
    { tech: 'Zero Standing Privileges / JIT Access', position: 'Slope of Enlightenment', status: 'rising', note: 'Mainstream adoption accelerating' },
    { tech: 'Secrets Management', position: 'Slope of Enlightenment', status: 'rising', note: 'Growing significantly per Gartner' },
    { tech: 'CIEM (Cloud Infrastructure Entitlement Mgmt)', position: 'Peak → Trough', status: 'declining', note: 'Being absorbed into broader platforms' },
    { tech: 'Agentic AI / NHI Security', position: 'Innovation Trigger', status: 'emerging', note: 'Critical new frontier' },
  ];

  const maActivity = [
    { date: 'Jul 2025', acquirer: 'Palo Alto Networks', target: 'CyberArk', value: '$25B', signal: 'Identity as core platform pillar' },
    { date: 'Jan 2026', acquirer: 'Delinea', target: 'StrongDM', value: 'Undisclosed', signal: 'Runtime authorization, agentic AI' },
    { date: 'Oct 2024', acquirer: 'CyberArk', target: 'Venafi', value: '$1.54B', signal: 'Machine identity management' },
    { date: '2025', acquirer: 'CyberArk', target: 'Zilla Security', value: '$175M', signal: 'IGA capabilities' },
    { date: 'Mar 2025', acquirer: 'Delinea', target: 'Authomize + Fastpath', value: 'Undisclosed', signal: 'Identity threat detection, governance' },
    { date: '2024', acquirer: 'IBM', target: 'HashiCorp', value: 'Undisclosed', signal: 'DevOps secrets management' },
    { date: '2025', acquirer: 'BeyondTrust', target: 'Entitle', value: 'Undisclosed', signal: 'Cloud JIT access' },
  ];

  const cisoJobs = [
    { job: 'Reduce privilege-related breach risk by 50%+', metric: 'Zero identity-based breaches; attack surface reduction' },
    { job: 'Pass compliance audits with minimal preparation', metric: 'Pre-built compliance reports; audit-ready posture' },
    { job: 'Demonstrate ROI of security investments to leadership', metric: 'Executive dashboards; risk reduction metrics' },
    { job: 'Simplify vendor consolidation around identity', metric: 'Fewer tools; unified identity security platform' },
  ];

  const secAdminJobs = [
    { job: 'Onboard new privileged accounts in minutes, not days', metric: 'Auto-discovery + auto-onboarding; Smart Rules automation' },
    { job: 'Rotate credentials automatically without breaking services', metric: 'Intelligent rotation with dependency mapping' },
    { job: 'Grant/revoke access based on job role changes in real-time', metric: 'Dynamic provisioning; JIT workflows' },
    { job: 'Investigate suspicious activity quickly with session recordings', metric: 'Search/replay; anomaly alerting' },
  ];

  const devOpsJobs = [
    { job: 'Inject secrets into CI/CD without exposing credentials', metric: 'API-first secrets management; pipeline integration' },
    { job: 'Deploy infrastructure with temporary, scoped credentials', metric: 'Dynamic/ephemeral secrets; auto-expiration' },
    { job: 'Eliminate hardcoded secrets from repositories', metric: 'Secrets scanning; auto-rotation without downtime' },
    { job: 'Maintain velocity while meeting security requirements', metric: 'Developer-friendly CLI/SDK; minimal friction' },
  ];

  const complianceJobs = [
    { job: 'Generate SOC 2 / ISO 27001 evidence packages on demand', metric: 'Pre-built templates; continuous monitoring' },
    { job: 'Prove least privilege is enforced across the organization', metric: 'Privilege creep detection; access certification' },
    { job: 'Identify excessive privileges before auditors do', metric: 'Proactive alerting; historical access reconstruction' },
  ];

  const tableStakes = [
    'Password/Credential Vaulting',
    'Session Monitoring & Recording',
    'Password Rotation',
    'MFA Integration',
    'Role-Based Access Control (RBAC)',
    'Audit Logging & Compliance Reporting',
    'Basic Account Discovery',
    'Cloud Support (SaaS delivery)',
    'Web-Based Management Console',
    'Basic Approval Workflows',
    'Active Directory Integration',
    'Pre-built Compliance Reports (SOX, HIPAA, PCI-DSS)',
  ];

  const differentiators = [
    { name: 'Just-In-Time (JIT) / Zero Standing Privilege', description: '"Privilege is best when fleeting." Cyber insurers mandating. BeyondTrust Entitle acquisition, Delinea/StrongDM deal validate.' },
    { name: 'Secrets Management', description: '"Interest has continued to grow significantly" (Gartner). CyberArk #1 for two consecutive years. DevOps demand accelerating.' },
    { name: 'AI-Driven Threat Detection / Behavioral Analytics', description: 'Delinea "runtime AI authorization agent." BeyondTrust "True Privilege graph." Risk-based access decisions.' },
    { name: 'Identity Threat Detection & Response (ITDR)', description: 'Forrester top evaluation criterion. Bridges PAM with SOC. CyberArk, BeyondTrust investing heavily.' },
    { name: 'Agentic AI / Non-Human Identity Security', description: '96% recognize AI agents as risk, <50% have controls. BeyondTrust "first to market." 82:1 NHI-to-human ratio.' },
    { name: 'Time-to-Value / Deployment Speed', description: 'Delinea: "fastest time to value." Target <90 days for mid-market. CyberArk criticized for 6-12 month deployments.' },
    { name: 'Unified Platform / Reduced Vendor Sprawl', description: 'Palo Alto $25B CyberArk deal validates. Consolidated platforms win. Integration story matters as much as features.' },
  ];

  const roiMetrics = [
    { metric: 'Credential breach cost', value: '$4.67-4.81M' },
    { metric: 'Credential breach dwell time', value: '292 days' },
    { metric: 'PAM insider threat savings', value: '$5.9M/year' },
    { metric: 'Early vs. late detection', value: '$8.1M differential' },
  ];

  const pricingTiers = [
    { tier: 'Enterprise Premium', range: 'Quote-based (high)', vendors: 'CyberArk, BeyondTrust', buyer: 'Large Enterprise 10K+' },
    { tier: 'Enterprise', range: '$100K-500K+/year', vendors: 'Delinea, One Identity, Saviynt', buyer: 'Enterprise 5K-10K' },
    { tier: 'Mid-Market', range: '$50K-150K/year', vendors: 'ManageEngine, Keeper, WALLIX', buyer: 'Mid-Market 1K-5K' },
    { tier: 'Cloud-Native/SMB', range: '$70/user/month', vendors: 'StrongDM, Teleport, Apono', buyer: 'SMB/DevOps-heavy' },
  ];

  const theses = [
    {
      id: 1,
      title: 'Identity Security Becomes a Platform Category',
      timeframe: '2025-2028',
      confidence: 'High',
      color: 'green',
      claim: 'Palo Alto Networks\' $25B acquisition of CyberArk signals that PAM has matured from a specialized control into a core pillar of enterprise security platforms. Standalone PAM is giving way to integrated identity security platforms combining PAM, IGA, secrets management, and CIEM.',
      evidence: ['$25B acquisition—largest identity security M&A ever', 'Delinea acquiring StrongDM, Authomize, Fastpath', 'BeyondTrust acquiring Entitle', '71% of practitioners believe "consolidated offering is the destination"'],
      implication: 'Standalone PAM vendors face existential pressure. Evaluate as platform capability, not point solution.',
    },
    {
      id: 2,
      title: 'Zero Standing Privileges Transition from Best Practice to Baseline',
      timeframe: '2025-2027',
      confidence: 'High',
      color: 'purple',
      claim: 'JIT access and ZSP are shifting from advanced capabilities to standard expectations. Cyber insurers increasingly mandate these controls, and Gartner explicitly recommends JIT as the target model. Standing privileges are becoming a legacy approach.',
      evidence: ['"Privilege is best when fleeting" (Forrester 2025)', '15-25% of new PAM deployments driven by cyber insurance', 'CSA calls for elimination of persistent privileged accounts', '80% of breaches involve credential misuse'],
      implication: 'JIT/ZSP is table stakes by 2027. Stop treating as premium feature—build as foundation.',
    },
    {
      id: 3,
      title: 'Machine and AI Identities Dominate the Growth Equation',
      timeframe: '2025-2028',
      confidence: 'Medium-High',
      color: 'orange',
      claim: 'Non-human identities (40-82:1 ratio to humans) and agentic AI are fundamentally expanding PAM\'s scope. Securing AI agents, workloads, APIs, and autonomous systems—not just human administrators—is becoming the primary growth vector.',
      evidence: ['NHIs outnumber humans 40-82:1', 'Gartner: 33% of enterprise apps include agentic AI by 2028', 'BeyondTrust "first to market" with agentic AI solution', 'CyberArk Venafi acquisition ($1.54B) for machine identity'],
      implication: 'Human-only PAM is yesterday\'s product. NHI and AI agent coverage is the 2026 differentiator.',
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
      <nav className="border-b border-gray-800 bg-gray-950/95 backdrop-blur-sm sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 py-3">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3 text-sm">
              <a href="/" className="hover:text-blue-400 transition-colors">
                <Logo />
              </a>
              /
              <a href="/pillars/identity" className="text-blue-400 hover:text-blue-300">Identity</a>
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
        <div className="flex items-center justify-between mb-6 pb-4 border-b border-gray-800">
          <div className="flex gap-2 flex-wrap">
            {subSegments.map((seg) => (
              <a 
                key={seg.id}
                href={seg.href}
                className={`px-3 py-1.5 rounded-full text-xs font-medium transition-all ${
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
            <span>Also touches:</span>
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
          <div className="flex items-center gap-4 mb-2">
            <h1 className="text-4xl font-bold bg-gradient-to-r from-white via-blue-100 to-blue-400 bg-clip-text text-transparent">
              Privileged Access Management
            </h1>
            <span className="px-2 py-1 text-xs font-medium bg-amber-900/50 text-amber-400 border border-amber-700 rounded">
              CONSOLIDATING
            </span>
          </div>
          <p className="text-xl text-gray-400 mb-4">
            The $4.25B market controlling "keys to the kingdom"—now being absorbed into identity security platforms
          </p>
          
          <div className="flex items-center gap-4 text-sm text-gray-500">
            <span>Last updated: January 2026</span>
            <span>•</span>
            <span>Methodology: SRP Framework</span>
            <span>•</span>
            <span className="text-yellow-400">● Active research</span>
          </div>
        </div>

        {/* Key Stats Bar */}
        <div className="grid grid-cols-4 gap-4 mb-8">
          {keyInsights.map((insight, idx) => (
            <div 
              key={idx}
              className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 border border-gray-700 rounded-xl p-4 text-center"
            >
              <div className="text-2xl font-bold text-white mb-1">{insight.stat}</div>
              <div className="text-xs text-gray-400">{insight.label}</div>
            </div>
          ))}
        </div>

        {/* The Keys to the Kingdom Callout */}
        <div className="bg-gradient-to-r from-blue-900/30 via-purple-900/20 to-blue-900/30 border border-blue-800/50 rounded-xl p-6 mb-8">
          <div className="flex items-start gap-4">
            <span className="text-3xl">🔑</span>
            <div>
              <h3 className="text-lg font-semibold text-white mb-2">The Core Positioning</h3>
              <p className="text-gray-300">
                PAM controls access to the most sensitive systems—the "keys to the kingdom." 
                <span className="text-blue-400 font-medium"> 80% of data breaches stem from stolen or compromised credentials.</span> 
                {' '}But standalone PAM is transforming: the $25B Palo Alto/CyberArk deal signals that 
                <span className="text-purple-400 font-medium"> PAM is becoming a pillar within identity security platforms</span>, 
                not a standalone product category.
              </p>
            </div>
          </div>
        </div>

        {/* Main Content Grid */}
        <div className="grid grid-cols-12 gap-6">
          
          {/* Left Sidebar - SRP Navigation */}
          <div className="col-span-3">
            <div className="sticky top-20">
              <div className="bg-gray-900/50 border border-gray-800 rounded-xl p-4 mb-4">
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

              {/* PAM Scope Visual */}
              <div className="bg-gray-900/50 border border-gray-800 rounded-xl p-4">
                <h3 className="text-sm font-semibold text-gray-300 mb-3">PAM Sub-Segments</h3>
                <div className="space-y-2 text-xs">
                  <div className="flex items-center gap-2 p-2 rounded bg-blue-900/30 border border-blue-800/50">
                    <span className="w-8 h-8 rounded-full bg-blue-900 flex items-center justify-center text-blue-400 font-bold">1</span>
                    <div>
                      <div className="text-white font-medium">PASM</div>
                      <div className="text-gray-500">Credential vaulting, sessions</div>
                    </div>
                  </div>
                  <div className="flex items-center gap-2 p-2 rounded bg-purple-900/30 border border-purple-800/50">
                    <span className="w-8 h-8 rounded-full bg-purple-900 flex items-center justify-center text-purple-400 font-bold">2</span>
                    <div>
                      <div className="text-white font-medium">PEDM/EPM</div>
                      <div className="text-gray-500">Endpoint privilege elevation</div>
                    </div>
                  </div>
                  <div className="flex items-center gap-2 p-2 rounded bg-green-900/30 border border-green-800/50">
                    <span className="w-8 h-8 rounded-full bg-green-900 flex items-center justify-center text-green-400 font-bold">3</span>
                    <div>
                      <div className="text-white font-medium">Secrets Mgmt</div>
                      <div className="text-gray-500">API keys, tokens, certs</div>
                    </div>
                  </div>
                  <div className="flex items-center gap-2 p-2 rounded bg-orange-900/30 border border-orange-800/50">
                    <span className="w-8 h-8 rounded-full bg-orange-900 flex items-center justify-center text-orange-400 font-bold">4</span>
                    <div>
                      <div className="text-white font-medium">CIEM</div>
                      <div className="text-gray-500">Cloud entitlements</div>
                    </div>
                  </div>
                  <div className="flex items-center gap-2 p-2 rounded bg-pink-900/30 border border-pink-800/50">
                    <span className="w-8 h-8 rounded-full bg-pink-900 flex items-center justify-center text-pink-400 font-bold">5</span>
                    <div>
                      <div className="text-white font-medium">RPAM</div>
                      <div className="text-gray-500">Remote/vendor access</div>
                    </div>
                  </div>
                </div>
                <p className="text-gray-500 text-xs mt-3 italic">Converging into unified identity security platforms</p>
              </div>
            </div>
          </div>

          {/* Main Content Area */}
          <div className="col-span-9 space-y-8">
            
            {/* Overview Section */}
            <section id="overview" className="bg-gray-900/30 border border-gray-800 rounded-xl p-6">
              <h2 className="text-xl font-semibold mb-4 flex items-center gap-2">
                <span>📋</span> Overview
              </h2>
              <div className="prose prose-invert max-w-none">
                <p className="text-gray-300 mb-4">
                  Privileged Access Management (PAM) is a comprehensive cybersecurity strategy—comprising people, 
                  processes, and technology—designed to control, monitor, secure, and audit all human and non-human 
                  privileged identities and activities across enterprise IT environments. PAM is grounded in the 
                  <span className="text-blue-400"> principle of least privilege</span>, ensuring users receive only 
                  the minimum access required to perform their job functions.
                </p>
                <p className="text-gray-300 mb-4">
                  The market sits at the intersection of identity security, access management, and endpoint security. 
                  PAM provides the critical control layer between human/machine users and an organization's most 
                  sensitive systems and data. It complements broader IAM solutions by providing granular control 
                  specifically for administrative or privileged identities.
                </p>
                <div className="bg-gray-800/50 rounded-lg p-4 mt-4">
                  <h4 className="text-white font-semibold mb-2">Why PAM is at an Inflection Point</h4>
                  <ul className="text-gray-400 text-sm space-y-2">
                    <li>• <span className="text-blue-400 font-medium">Platform absorption:</span> Palo Alto's $25B CyberArk acquisition signals standalone PAM becoming a platform pillar</li>
                    <li>• <span className="text-purple-400 font-medium">NHI explosion:</span> Machine identities outnumber humans 40:1, forcing automation of credential vaulting</li>
                    <li>• <span className="text-green-400 font-medium">Insurance mandate:</span> 15-25% of new PAM deployments driven by cyber insurance requirements</li>
                    <li>• <span className="text-orange-400 font-medium">JIT becomes baseline:</span> Zero Standing Privileges shifting from premium to expected capability</li>
                    <li>• <span className="text-pink-400 font-medium">AI agents emerging:</span> Agentic AI creates new privileged access patterns requiring governance</li>
                  </ul>
                </div>
              </div>
            </section>

            {/* Market Structure Section */}
            <section id="structure" className="bg-gray-900/30 border border-gray-800 rounded-xl p-6">
              <h2 className="text-xl font-semibold mb-4 flex items-center gap-2">
                <span>🏗️</span> Market Structure
              </h2>
              
              {/* Market Sizing */}
              <div className="mb-6">
                <h3 className="text-sm font-semibold text-gray-400 uppercase tracking-wider mb-3">Market Size & Growth</h3>
                <div className="overflow-x-auto">
                  <table className="w-full text-sm">
                    <thead>
                      <tr className="border-b border-gray-700">
                        <th className="text-left py-2 text-gray-400 font-medium">Source</th>
                        <th className="text-left py-2 text-gray-400 font-medium">2024/2025</th>
                        <th className="text-left py-2 text-gray-400 font-medium">Projection</th>
                        <th className="text-left py-2 text-gray-400 font-medium">CAGR</th>
                      </tr>
                    </thead>
                    <tbody>
                      {marketSizing.map((row, idx) => (
                        <tr key={idx} className="border-b border-gray-800">
                          <td className="py-2 text-gray-300">{row.source}</td>
                          <td className="py-2 text-white font-medium">{row.val2024}</td>
                          <td className="py-2 text-blue-400">{row.projection}</td>
                          <td className="py-2 text-green-400">{row.cagr}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
                <p className="text-gray-500 text-xs mt-2">Consensus: $3.5-4.5B in 2024-2025, growing to $20-30B by 2033-2034 at 21-24% CAGR.</p>
              </div>

              {/* Sub-segments */}
              <div className="mb-6">
                <h3 className="text-sm font-semibold text-gray-400 uppercase tracking-wider mb-3">PAM Sub-Segments (Gartner Definition)</h3>
                <div className="flex flex-wrap gap-2">
                  {marketSubSegments.map((seg, idx) => (
                    <span 
                      key={idx}
                      className="px-3 py-1.5 bg-gray-800 border border-gray-700 rounded-lg text-sm text-gray-300"
                    >
                      {seg}
                    </span>
                  ))}
                </div>
              </div>

              {/* Segment Breakdown */}
              <div className="mb-6 grid grid-cols-3 gap-4">
                <div className="bg-gray-800/50 rounded-lg p-4">
                  <h4 className="text-sm font-medium text-gray-400 mb-2">By Deployment</h4>
                  <div className="space-y-2">
                    <div className="flex justify-between">
                      <span className="text-gray-300">Cloud</span>
                      <span className="text-blue-400 font-medium">57.7%</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-300">On-Prem</span>
                      <span className="text-gray-400">42.3%</span>
                    </div>
                    <div className="text-xs text-gray-500 mt-2">Hybrid growing fastest at 24.8% CAGR</div>
                  </div>
                </div>
                <div className="bg-gray-800/50 rounded-lg p-4">
                  <h4 className="text-sm font-medium text-gray-400 mb-2">By Access Type</h4>
                  <div className="space-y-2">
                    <div className="flex justify-between">
                      <span className="text-gray-300">Endpoint Privilege</span>
                      <span className="text-purple-400 font-medium">38.3%</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-300">Cloud/SaaS</span>
                      <span className="text-green-400">Fastest (24.6%)</span>
                    </div>
                  </div>
                </div>
                <div className="bg-gray-800/50 rounded-lg p-4">
                  <h4 className="text-sm font-medium text-gray-400 mb-2">By Region</h4>
                  <div className="space-y-2">
                    <div className="flex justify-between">
                      <span className="text-gray-300">North America</span>
                      <span className="text-blue-400 font-medium">38-39%</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-300">APAC</span>
                      <span className="text-green-400">Fastest (24.3%)</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Competitive Landscape */}
              <div>
                <div className="flex items-center justify-between mb-3">
                  <h3 className="text-sm font-semibold text-gray-400 uppercase tracking-wider">Top 15 Vendors by Analyst Consensus (2025)</h3>
                  <div className="flex items-center gap-4 text-xs">
                    <div className="flex items-center gap-1">
                      <span className="w-2 h-2 rounded-full bg-green-400"></span>
                      Complete
                    </div>
                    <div className="flex items-center gap-1">
                      <span className="w-2 h-2 rounded-full bg-yellow-400"></span>
                      In Progress
                    </div>
                    <div className="flex items-center gap-1">
                      <span className="w-2 h-2 rounded-full bg-gray-500"></span>
                      Pending
                    </div>
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
                        <div className="flex items-start justify-between">
                          <div className="flex-1">
                            <div className="flex items-center gap-2 mb-1">
                              <span className="text-white font-medium">{comp.name}</span>
                              <span className="text-gray-500">•</span>
                              <span className="text-gray-400 text-sm">{comp.product}</span>
                            </div>
                            <p className="text-sm text-gray-400">{comp.focus}</p>
                          </div>
                          <div className="flex items-center gap-2 ml-4">
                            <span className="text-xs px-2 py-1 rounded bg-blue-900/50 text-blue-400 border border-blue-800">
                              {comp.position}
                            </span>
                            <span className={`text-xs px-2 py-1 rounded ${statusStyle.bg} ${statusStyle.text} flex items-center gap-1`}>
                              <span className={`w-1.5 h-1.5 rounded-full ${statusStyle.dot}`}></span>
                              {statusStyle.label}
                            </span>
                            <span className="text-gray-600">
                              →
                            </span>
                          </div>
                        </div>
                      </a>
                    );
                  })}
                </div>
                <p className="text-gray-500 text-xs mt-3">Note: Top 3 (CyberArk, BeyondTrust, Delinea) dominate analyst rankings across Gartner MQ, Forrester Wave, and KuppingerCole.</p>
              </div>
            </section>

            {/* Market Dynamics Section */}
            <section id="motion" className="bg-gray-900/30 border border-gray-800 rounded-xl p-6">
              <h2 className="text-xl font-semibold mb-4 flex items-center gap-2">
                <span>📈</span> Market Dynamics
              </h2>

              {/* Market Assessment */}
              <div className="bg-gradient-to-r from-purple-900/30 to-blue-900/30 border border-purple-800/50 rounded-lg p-4 mb-6">
                <div className="flex items-center gap-3 mb-2">
                  <span className="text-2xl">📊</span>
                  <span className="font-semibold text-white">Market Assessment</span>
                </div>
                <p className="text-gray-300 text-sm">
                  <span className="text-purple-400 font-medium">Position:</span> Late Slope of Enlightenment / Early Plateau of Productivity. 
                  <span className="text-blue-400 font-medium"> Direction:</span> Strong Consolidation at top, Fragmentation at edges. 
                  Core PAM is mature, but platform convergence creates new dynamics.
                </p>
              </div>

              {/* Hype Cycle */}
              <div className="mb-6">
                <h3 className="text-sm font-semibold text-gray-400 uppercase tracking-wider mb-3">Hype Cycle Positioning (2025)</h3>
                <div className="space-y-2">
                  {hypePositions.map((item, idx) => (
                    <div key={idx} className="flex items-center justify-between p-3 bg-gray-800/50 rounded-lg">
                      <div>
                        <span className="text-white">{item.tech}</span>
                        <span className="text-gray-500 text-sm ml-2">— {item.note}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <span className={`w-2 h-2 rounded-full ${
                          item.status === 'emerging' ? 'bg-cyan-400' :
                          item.status === 'hot' ? 'bg-red-400' :
                          item.status === 'rising' ? 'bg-green-400' :
                          item.status === 'declining' ? 'bg-orange-400' :
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
                <h3 className="text-sm font-semibold text-gray-400 uppercase tracking-wider mb-3">5 Major Trends for 2025-2026</h3>
                <div className="space-y-3">
                  {trends.map((trend, idx) => (
                    <div key={idx} className="bg-gray-800/50 rounded-lg p-4 border-l-4 border-blue-500">
                      <h4 className="text-white font-medium mb-1">{trend.name}</h4>
                      <p className="text-gray-400 text-sm">{trend.description}</p>
                    </div>
                  ))}
                </div>
              </div>

              {/* M&A Activity */}
              <div className="mb-6">
                <h3 className="text-sm font-semibold text-gray-400 uppercase tracking-wider mb-3">M&A Activity (Consolidation Signals)</h3>
                <div className="overflow-x-auto">
                  <table className="w-full text-sm">
                    <thead>
                      <tr className="border-b border-gray-700">
                        <th className="text-left py-2 text-gray-400 font-medium">Date</th>
                        <th className="text-left py-2 text-gray-400 font-medium">Acquirer</th>
                        <th className="text-left py-2 text-gray-400 font-medium">Target</th>
                        <th className="text-left py-2 text-gray-400 font-medium">Value</th>
                        <th className="text-left py-2 text-gray-400 font-medium">Strategic Signal</th>
                      </tr>
                    </thead>
                    <tbody>
                      {maActivity.map((row, idx) => (
                        <tr key={idx} className="border-b border-gray-800">
                          <td className="py-2 text-gray-400">{row.date}</td>
                          <td className="py-2 text-white font-medium">{row.acquirer}</td>
                          <td className="py-2 text-blue-400">{row.target}</td>
                          <td className="py-2 text-green-400">{row.value}</td>
                          <td className="py-2 text-gray-300">{row.signal}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
                <p className="text-gray-500 text-xs mt-2">Palo Alto/CyberArk $25B deal validates identity security as core platform pillar alongside network, cloud, and endpoint security.</p>
              </div>

              {/* Market Structure */}
              <div className="bg-gray-800/50 rounded-lg p-4">
                <h3 className="text-sm font-semibold text-gray-400 uppercase tracking-wider mb-3">What's Replacing What</h3>
                <div className="grid grid-cols-2 gap-4 text-sm">
                  <div>
                    <div className="text-gray-500 mb-1">Legacy Approach</div>
                    <ul className="space-y-2 text-gray-400">
                      <li>• Standing privileges / always-on admin rights</li>
                      <li>• On-premises password vaults</li>
                      <li>• Human-only identity governance</li>
                      <li>• Siloed PAM, IGA, secrets management</li>
                      <li>• Pure-play PAM vendors</li>
                    </ul>
                  </div>
                  <div>
                    <div className="text-green-400 mb-1">Modern Replacement</div>
                    <ul className="space-y-2 text-gray-300">
                      <li>→ Zero Standing Privileges + JIT access</li>
                      <li>→ Cloud-native / SaaS PAM</li>
                      <li>→ Unified human + machine + AI identity</li>
                      <li>→ Converged identity security platforms</li>
                      <li>→ Integrated security platform vendors</li>
                    </ul>
                  </div>
                </div>
              </div>
            </section>

            {/* Stakeholders Section */}
            <section id="stakeholders" className="bg-gray-900/30 border border-gray-800 rounded-xl p-6">
              <h2 className="text-xl font-semibold mb-4 flex items-center gap-2">
                <span>👥</span> Stakeholders
              </h2>

              {/* Analyst Consensus */}
              <div className="bg-gradient-to-r from-blue-900/30 to-purple-900/30 border border-blue-800/50 rounded-lg p-4 mb-6">
                <h3 className="text-sm font-semibold text-gray-400 uppercase tracking-wider mb-3">Analyst Consensus</h3>
                <div className="grid grid-cols-3 gap-4 text-sm">
                  <div>
                    <span className="text-blue-400 font-medium">Gartner:</span>
                    <span className="text-gray-300 ml-2">JIT critical capability; SaaS primary delivery</span>
                  </div>
                  <div>
                    <span className="text-purple-400 font-medium">Forrester:</span>
                    <span className="text-gray-300 ml-2">"Privilege is best when fleeting"</span>
                  </div>
                  <div>
                    <span className="text-green-400 font-medium">KuppingerCole:</span>
                    <span className="text-gray-300 ml-2">PAM converging into identity platforms</span>
                  </div>
                </div>
              </div>

              {/* CISO JTBD */}
              <div className="mb-6">
                <h3 className="text-sm font-semibold text-gray-400 uppercase tracking-wider mb-3">CISO / Security Leadership</h3>
                <div className="bg-gray-800/50 rounded-lg p-4 mb-2">
                  <p className="text-gray-300 italic">
                    "Reduce privilege-related breach risk and demonstrate ROI to leadership while simplifying our identity security stack."
                  </p>
                </div>
                <div className="overflow-x-auto">
                  <table className="w-full text-sm">
                    <thead>
                      <tr className="border-b border-gray-700">
                        <th className="text-left py-2 text-gray-400 font-medium">Job Statement</th>
                        <th className="text-left py-2 text-gray-400 font-medium">Success Metric</th>
                      </tr>
                    </thead>
                    <tbody>
                      {cisoJobs.map((row, idx) => (
                        <tr key={idx} className="border-b border-gray-800">
                          <td className="py-2 text-gray-300">{row.job}</td>
                          <td className="py-2 text-gray-400">{row.metric}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>

              {/* Security Admin JTBD */}
              <div className="mb-6">
                <h3 className="text-sm font-semibold text-gray-400 uppercase tracking-wider mb-3">IT Security Administrator</h3>
                <div className="bg-gray-800/50 rounded-lg p-4 mb-2">
                  <p className="text-gray-300 italic">
                    "Automate credential management so I can maintain security without becoming a productivity bottleneck."
                  </p>
                </div>
                <div className="overflow-x-auto">
                  <table className="w-full text-sm">
                    <thead>
                      <tr className="border-b border-gray-700">
                        <th className="text-left py-2 text-gray-400 font-medium">Job Statement</th>
                        <th className="text-left py-2 text-gray-400 font-medium">Success Metric</th>
                      </tr>
                    </thead>
                    <tbody>
                      {secAdminJobs.map((row, idx) => (
                        <tr key={idx} className="border-b border-gray-800">
                          <td className="py-2 text-gray-300">{row.job}</td>
                          <td className="py-2 text-gray-400">{row.metric}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>

              {/* DevOps JTBD */}
              <div className="mb-6">
                <h3 className="text-sm font-semibold text-gray-400 uppercase tracking-wider mb-3">DevOps Engineer / Developer</h3>
                <div className="bg-gray-800/50 rounded-lg p-4 mb-2">
                  <p className="text-gray-300 italic">
                    "Traditional PAM models impede the user experience or workflows. I need security that doesn't slow deployment velocity."
                  </p>
                </div>
                <div className="overflow-x-auto">
                  <table className="w-full text-sm">
                    <thead>
                      <tr className="border-b border-gray-700">
                        <th className="text-left py-2 text-gray-400 font-medium">Job Statement</th>
                        <th className="text-left py-2 text-gray-400 font-medium">Success Metric</th>
                      </tr>
                    </thead>
                    <tbody>
                      {devOpsJobs.map((row, idx) => (
                        <tr key={idx} className="border-b border-gray-800">
                          <td className="py-2 text-gray-300">{row.job}</td>
                          <td className="py-2 text-gray-400">{row.metric}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>

              {/* Compliance JTBD */}
              <div className="mb-6">
                <h3 className="text-sm font-semibold text-gray-400 uppercase tracking-wider mb-3">Compliance / Internal Audit Team</h3>
                <div className="overflow-x-auto">
                  <table className="w-full text-sm">
                    <thead>
                      <tr className="border-b border-gray-700">
                        <th className="text-left py-2 text-gray-400 font-medium">Job Statement</th>
                        <th className="text-left py-2 text-gray-400 font-medium">Success Metric</th>
                      </tr>
                    </thead>
                    <tbody>
                      {complianceJobs.map((row, idx) => (
                        <tr key={idx} className="border-b border-gray-800">
                          <td className="py-2 text-gray-300">{row.job}</td>
                          <td className="py-2 text-gray-400">{row.metric}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>

              {/* User Pain Points */}
              <div className="bg-red-900/20 border border-red-800/50 rounded-lg p-4">
                <h3 className="text-sm font-semibold text-red-400 uppercase tracking-wider mb-3">Top User Complaints (G2/PeerSpot)</h3>
                <div className="grid grid-cols-3 gap-4 text-sm">
                  <div>
                    <div className="text-white font-medium mb-1">CyberArk</div>
                    <ul className="text-gray-400 space-y-1">
                      <li>• Complex setup (6-12 months)</li>
                      <li>• "Most expensive in industry"</li>
                      <li>• Resource-intensive maintenance</li>
                    </ul>
                  </div>
                  <div>
                    <div className="text-white font-medium mb-1">BeyondTrust</div>
                    <ul className="text-gray-400 space-y-1">
                      <li>• Limited Mac support</li>
                      <li>• À la carte pricing inflates costs</li>
                      <li>• "Training doesn't happen enough"</li>
                    </ul>
                  </div>
                  <div>
                    <div className="text-white font-medium mb-1">Delinea</div>
                    <ul className="text-gray-400 space-y-1">
                      <li>• Documentation inconsistent</li>
                      <li>• API/integration challenges</li>
                      <li>• "Mobile app is terrible"</li>
                    </ul>
                  </div>
                </div>
              </div>
            </section>

            {/* Economics Section */}
            <section id="economics" className="bg-gray-900/30 border border-gray-800 rounded-xl p-6">
              <h2 className="text-xl font-semibold mb-4 flex items-center gap-2">
                <span>💰</span> Economics & ROI
              </h2>

              {/* ROI Metrics */}
              <div className="mb-6">
                <h3 className="text-sm font-semibold text-gray-400 uppercase tracking-wider mb-3">The Cost of Credential Compromise</h3>
                <div className="grid grid-cols-4 gap-4">
                  {roiMetrics.map((item, idx) => (
                    <div key={idx} className="bg-gray-800/50 rounded-lg p-4 text-center">
                      <div className="text-xl font-bold text-red-400 mb-1">{item.value}</div>
                      <div className="text-xs text-gray-400">{item.metric}</div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Pricing Tiers */}
              <div className="mb-6">
                <h3 className="text-sm font-semibold text-gray-400 uppercase tracking-wider mb-3">Pricing Tiers (Directional)</h3>
                <div className="overflow-x-auto">
                  <table className="w-full text-sm">
                    <thead>
                      <tr className="border-b border-gray-700">
                        <th className="text-left py-2 text-gray-400 font-medium">Tier</th>
                        <th className="text-left py-2 text-gray-400 font-medium">Annual Range</th>
                        <th className="text-left py-2 text-gray-400 font-medium">Representative Vendors</th>
                        <th className="text-left py-2 text-gray-400 font-medium">Typical Buyer</th>
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
                <p className="text-gray-500 text-xs mt-2">Note: CyberArk and BeyondTrust use quote-based pricing. Gartner criticized CyberArk for "high cost" and Delinea for "uneven pricing."</p>
              </div>

              {/* ROI Calculation */}
              <div className="bg-gray-800/50 rounded-lg p-6 mb-6">
                <h3 className="text-sm font-semibold text-gray-400 uppercase tracking-wider mb-4">Sample ROI (Mid-Market: 5,000 employees, 500 privileged users)</h3>
                <div className="grid grid-cols-2 gap-6">
                  <div>
                    <div className="text-gray-400 text-sm mb-3">Investment (Year 1)</div>
                    <div className="space-y-2">
                      <div className="flex justify-between">
                        <span className="text-gray-300">PAM License (~$70/user × 500)</span>
                        <span className="text-red-400 font-medium">$420K</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-gray-300">Implementation</span>
                        <span className="text-red-400 font-medium">$150K</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-gray-300">Training & Operations</span>
                        <span className="text-red-400 font-medium">$50K</span>
                      </div>
                      <div className="flex justify-between border-t border-gray-700 pt-2">
                        <span className="text-white font-medium">Total Year 1 Cost</span>
                        <span className="text-red-400 font-bold">$620K</span>
                      </div>
                    </div>
                  </div>
                  <div>
                    <div className="text-gray-400 text-sm mb-3">Returns (Annual)</div>
                    <div className="space-y-2">
                      <div className="flex justify-between">
                        <span className="text-gray-300">Breach risk reduction (10% × $4.88M)</span>
                        <span className="text-green-400 font-medium">$488K</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-gray-300">Insider threat reduction</span>
                        <span className="text-green-400 font-medium">$2.61M*</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-gray-300">Operational efficiency</span>
                        <span className="text-green-400 font-medium">$332K</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-gray-300">Insurance premium reduction</span>
                        <span className="text-green-400 font-medium">$30K</span>
                      </div>
                      <div className="flex justify-between border-t border-gray-700 pt-2">
                        <span className="text-white font-medium">Net ROI (Year 1)</span>
                        <span className="text-green-400 font-bold">$2.84M (458%)</span>
                      </div>
                    </div>
                  </div>
                </div>
                <p className="text-gray-500 text-xs mt-4">*Insider threat baseline adjusted for organization size. Based on Ponemon, IBM Cost of a Data Breach, and StrongDM estimates.</p>
              </div>

              {/* Cyber Insurance Impact */}
              <div className="bg-gradient-to-r from-green-900/30 to-blue-900/30 border border-green-800/50 rounded-lg p-4">
                <h3 className="text-sm font-semibold text-green-400 uppercase tracking-wider mb-3">Cyber Insurance as Economic Driver</h3>
                <div className="grid grid-cols-4 gap-4 text-sm">
                  <div className="text-center">
                    <div className="text-2xl font-bold text-white">42%</div>
                    <div className="text-gray-400">Required PAM for policy eligibility</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-bold text-white">18%</div>
                    <div className="text-gray-400">Premium reduction with PAM</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-bold text-white">2-3x</div>
                    <div className="text-gray-400">Higher premiums without PAM</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-bold text-white">15-25%</div>
                    <div className="text-gray-400">New deployments insurance-driven</div>
                  </div>
                </div>
              </div>
            </section>

            {/* PM Strategy Section */}
            <section id="product" className="bg-gray-900/30 border border-gray-800 rounded-xl p-6">
              <h2 className="text-xl font-semibold mb-4 flex items-center gap-2">
                <span>🎯</span> PM Strategic Elements
              </h2>
              
              {/* Table Stakes */}
              <div className="mb-6">
                <h3 className="text-sm font-semibold text-gray-400 uppercase tracking-wider mb-3">Table Stakes (2025 MVP—Required for RFP)</h3>
                <div className="grid grid-cols-3 gap-2">
                  {tableStakes.map((feature, idx) => (
                    <div key={idx} className="flex items-center gap-2 text-sm">
                      <span className="text-green-400">✓</span>
                      <span className="text-gray-300">{feature}</span>
                    </div>
                  ))}
                </div>
                <div className="bg-gray-800/50 rounded-lg p-3 mt-3">
                  <p className="text-gray-400 text-sm">
                    Missing any of these = immediate RFP disqualification. PSM is "increasingly mature with fewer distinctions" (Gartner 2025). 
                    These are no longer differentiators—only lose deals by being deficient.
                  </p>
                </div>
              </div>

              {/* Differentiators */}
              <div className="mb-6">
                <h3 className="text-sm font-semibold text-gray-400 uppercase tracking-wider mb-3">Key Differentiators (Where Value Competition Happens)</h3>
                <div className="space-y-3">
                  {differentiators.map((diff, idx) => (
                    <div key={idx} className="bg-gray-800/50 rounded-lg p-4 border-l-4 border-purple-500">
                      <h4 className="text-white font-medium mb-1">{diff.name}</h4>
                      <p className="text-gray-400 text-sm">{diff.description}</p>
                    </div>
                  ))}
                </div>
              </div>

              {/* If I'm a PM Here Box */}
              <div className="bg-gradient-to-r from-blue-900/40 to-purple-900/40 border border-blue-700 rounded-xl p-6">
                <h3 className="text-lg font-semibold text-white mb-4 flex items-center gap-2">
                  💡 If I am a PM Here, I Need to Know...
                </h3>
                <div className="space-y-3">
                  <div className="flex gap-3">
                    <span className="text-blue-400 font-bold">1.</span>
                    <span className="text-gray-300"><span className="text-white font-medium">Platform consolidation is real.</span> Palo Alto/CyberArk $25B validates. Standalone PAM is becoming a commodity. Become the platform, or be acquired into one.</span>
                  </div>
                  <div className="flex gap-3">
                    <span className="text-blue-400 font-bold">2.</span>
                    <span className="text-gray-300"><span className="text-white font-medium">JIT/ZSP is becoming table stakes.</span> Stop treating as differentiator—build as foundation. Cyber insurers mandate it.</span>
                  </div>
                  <div className="flex gap-3">
                    <span className="text-blue-400 font-bold">3.</span>
                    <span className="text-gray-300"><span className="text-white font-medium">NHI and AI agents are the growth vector.</span> 40-82:1 machine-to-human ratio. Human-only PAM is yesterday's product.</span>
                  </div>
                  <div className="flex gap-3">
                    <span className="text-blue-400 font-bold">4.</span>
                    <span className="text-gray-300"><span className="text-white font-medium">Time-to-value is the #1 mid-market criteria.</span> CyberArk's 6-12 month deployments are competitive disadvantage. Target &lt;90 days.</span>
                  </div>
                  <div className="flex gap-3">
                    <span className="text-blue-400 font-bold">5.</span>
                    <span className="text-gray-300"><span className="text-white font-medium">Developer experience matters.</span> DevOps won't tolerate friction. API-first, CLI/SDK, pipeline integrations are non-negotiable.</span>
                  </div>
                  <div className="flex gap-3">
                    <span className="text-blue-400 font-bold">6.</span>
                    <span className="text-gray-300"><span className="text-white font-medium">Secrets management is now core.</span> "Interest has continued to grow significantly" (Gartner). Build native—don't bolt on.</span>
                  </div>
                  <div className="flex gap-3">
                    <span className="text-blue-400 font-bold">7.</span>
                    <span className="text-gray-300"><span className="text-white font-medium">"Layer on top" beats "rip and replace."</span> StrongDM wins land-and-expand. Integration story matters as much as feature story.</span>
                  </div>
                  <div className="flex gap-3">
                    <span className="text-blue-400 font-bold">8.</span>
                    <span className="text-gray-300"><span className="text-white font-medium">Support quality is universal weakness.</span> All three leaders criticized. Differentiate here for renewals and references.</span>
                  </div>
                </div>
              </div>
            </section>

            {/* Strategic Theses Section */}
            <section id="theses" className="bg-gray-900/30 border border-gray-800 rounded-xl p-6">
              <h2 className="text-xl font-semibold mb-4 flex items-center gap-2">
                <span>🔮</span> Strategic Theses
              </h2>
              <p className="text-gray-400 mb-6">
                Three structural shifts reshaping this market. Not incremental changes—fundamental rewirings of where value is created and captured.
              </p>

              <div className="space-y-6">
                {theses.map((thesis) => (
                  <div 
                    key={thesis.id}
                    className={`bg-gray-800/50 rounded-xl p-6 border-l-4 ${getThesisAccent(thesis.color)}`}
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
                      <div className="text-xs font-semibold text-gray-500 uppercase tracking-wider mb-2">EVIDENCE</div>
                      <ul className="grid grid-cols-2 gap-2">
                        {thesis.evidence.map((item, idx) => (
                          <li key={idx} className="text-sm text-gray-400 flex items-start gap-2">
                            <span className="text-blue-400">•</span>
                            {item}
                          </li>
                        ))}
                      </ul>
                    </div>
                    <div className="bg-gray-900/50 rounded-lg p-3">
                      <span className="text-gray-500 text-sm">Implication: </span>
                      <span className="text-white text-sm">{thesis.implication}</span>
                    </div>
                  </div>
                ))}
              </div>

              {/* Synthesis */}
              <div className="bg-gray-800/30 rounded-lg p-4 mt-6">
                <h4 className="text-sm font-semibold text-gray-400 uppercase tracking-wider mb-3">How These Connect</h4>
                <div className="space-y-2 text-sm">
                  <div className="text-gray-300">
                    <span className="text-green-400">Platform absorption</span> → forces standalone PAM to → <span className="text-blue-400">consolidate or be acquired</span>
                  </div>
                  <div className="text-gray-300">
                    <span className="text-purple-400">JIT becomes baseline</span> → shifts differentiation to → <span className="text-blue-400">NHI and agentic AI coverage</span>
                  </div>
                  <div className="text-gray-300">
                    <span className="text-orange-400">NHI explosion</span> → expands addressable market → <span className="text-blue-400">beyond human administrators</span>
                  </div>
                </div>
              </div>
            </section>

            {/* Recommendations */}
            <section className="bg-gray-900/30 border border-gray-800 rounded-xl p-6">
              <h2 className="text-xl font-semibold mb-4 flex items-center gap-2">
                <span>🎯</span> Recommendations
              </h2>
              
              <div className="grid grid-cols-2 gap-6">
                {/* For Buyers */}
                <div className="bg-gray-800/50 rounded-lg p-4">
                  <div className="flex items-center gap-2 mb-3">
                    <span className="w-8 h-8 rounded-full bg-blue-900 flex items-center justify-center text-blue-400 font-bold text-sm">B</span>
                    <span className="font-medium text-white">For Enterprise Buyers</span>
                  </div>
                  <ul className="space-y-2 text-sm text-gray-300">
                    <li>• Evaluate PAM as <span className="text-blue-400">platform capability</span>, not standalone purchase</li>
                    <li>• Require <span className="text-purple-400">JIT/ZSP</span> as default architecture</li>
                    <li>• Prioritize <span className="text-green-400">NHI coverage</span>—human-only is obsolete</li>
                    <li>• Secrets management must be <span className="text-orange-400">native, not bolted-on</span></li>
                    <li>• Target <span className="text-pink-400">&lt;90 day time-to-value</span> for mid-market</li>
                    <li>• Audit cyber insurance requirements—may drive 15-25% of decision</li>
                  </ul>
                </div>

                {/* For Vendors */}
                <div className="bg-gray-800/50 rounded-lg p-4">
                  <div className="flex items-center gap-2 mb-3">
                    <span className="w-8 h-8 rounded-full bg-purple-900 flex items-center justify-center text-purple-400 font-bold text-sm">V</span>
                    <span className="font-medium text-white">For Vendors / Product Leaders</span>
                  </div>
                  <ul className="space-y-2 text-sm text-gray-300">
                    <li>• <span className="text-blue-400">Platform strategy is mandatory</span>—become it or integrate into it</li>
                    <li>• Build <span className="text-purple-400">agentic AI security</span> capabilities before market demands</li>
                    <li>• Invest in <span className="text-green-400">developer experience</span>—DevOps won't tolerate friction</li>
                    <li>• "Layer on top" positioning beats <span className="text-orange-400">"rip and replace"</span></li>
                    <li>• <span className="text-pink-400">Support quality</span> is universal weakness—differentiate here</li>
                    <li>• Measure and publicize time-to-value metrics</li>
                  </ul>
                </div>
              </div>
            </section>

            {/* Resources */}
            <section className="bg-gray-900/30 border border-gray-800 rounded-xl p-6">
              <h2 className="text-xl font-semibold mb-4 flex items-center gap-2">
                <span>📎</span> Resources
              </h2>
              <div className="flex gap-4">
                <a href="#" className="flex items-center gap-3 bg-gray-800/50 hover:bg-gray-800 border border-gray-700 rounded-lg p-4 transition-all">
                  <span className="text-2xl">📄</span>
                  <div>
                    <div className="text-white font-medium">Full PAM Strategic Brief</div>
                    <div className="text-gray-400 text-sm">Complete SRP analysis (PDF)</div>
                  </div>
                </a>
                <a href="#" className="flex items-center gap-3 bg-gray-800/50 hover:bg-gray-800 border border-gray-700 rounded-lg p-4 transition-all">
                  <span className="text-2xl">📊</span>
                  <div>
                    <div className="text-white font-medium">Vendor Comparison Matrix</div>
                    <div className="text-gray-400 text-sm">Side-by-side feature analysis</div>
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

export default PAMPage;
