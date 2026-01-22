"use client";
import React, { useState } from 'react';
import { Logo } from '@/components/Logo';

const IAMPage = () => {
  const [activeSection, setActiveSection] = useState('overview');

  // Identity pillar sub-segments
  const subSegments = [
    { id: 'iam', name: 'IAM', active: true, href: '/pillars/identity/iam' },
    { id: 'itdr', name: 'ITDR', active: false, href: '/pillars/identity/itdr' },
    { id: 'pam', name: 'PAM', active: false, href: '/pillars/identity/pam' },
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

  // Related pillars (IAM touches everything)
  const relatedPillars = [
    { name: 'SecOps & Analytics', primary: false },
    { name: 'Network & Edge', primary: false },
    { name: 'Data Security', primary: false },
    { name: 'Cloud Security', primary: false },
  ];

  const keyInsights = [
    { stat: '$26B', label: 'Market size (2025)' },
    { stat: '78%', label: 'Breaches involve identity' },
    { stat: '82:1', label: 'NHI to human ratio' },
    { stat: '70%', label: 'Prefer converged platforms' },
  ];

  const marketSizing = [
    { source: 'MarketsandMarkets', val2024: '$23B', projection: '$42.6B (2030)', cagr: '10.4%' },
    { source: 'Precedence Research', val2024: '$20.4B', projection: '$65.7B (2034)', cagr: '12.4%' },
    { source: 'Fortune Business Insights', val2024: '$17.8B', projection: '$61.7B (2032)', cagr: '15.3%' },
    { source: 'Research and Markets', val2024: '—', projection: '$67.7B (2030)', cagr: '15.5%' },
  ];

  const marketSubSegments = [
    'Access Management (AM)',
    'Identity Governance & Administration (IGA)',
    'Privileged Access Management (PAM)',
    'Customer IAM (CIAM)',
    'Multi-Factor Authentication (MFA)',
    'Identity as a Service (IDaaS)',
    'Directory Services',
    'Identity Verification (IDV)',
    'Non-Human Identity (NHI) / Machine Identity',
    'Identity Threat Detection & Response (ITDR)',
    'Decentralized Identity',
  ];

  // Top vendors by consensus (from Dimension 1 research)
  const competitors = [
    { 
      name: 'Microsoft', 
      product: 'Entra ID (formerly Azure AD)',
      position: 'Platform Leader', 
      focus: '8th consecutive year Gartner MQ Leader. Highest "Ability to Execute." E5 bundle economics. Comprehensive ecosystem integration.',
      status: 'in-progress',
      href: '/pillars/identity/iam/companies/microsoft'
    },
    { 
      name: 'Okta', 
      product: 'Workforce & Customer Identity Cloud',
      position: 'Pure-Play Leader', 
      focus: '9th consecutive year Gartner MQ Leader. 18,000+ customers. Cloud-native. Auth0 for CIAM. Developer-first approach.',
      status: 'in-progress',
      href: '/pillars/identity/iam/companies/okta'
    },
    { 
      name: 'CyberArk', 
      product: 'Identity Security Platform',
      position: 'Expanding Leader', 
      focus: 'PAM market leader evolving to comprehensive identity security. $25B Palo Alto acquisition announced. Leaders in both PAM and workforce identity.',
      status: 'in-progress',
      href: '/pillars/identity/iam/companies/cyberark'
    },
    { 
      name: 'Ping Identity', 
      product: 'PingOne Platform',
      position: 'Enterprise Leader', 
      focus: 'Post-ForgeRock merger protects 8B+ identities. Highest Critical Capabilities scores (all 5 use cases). Enterprise federation strength.',
      status: 'in-progress',
      href: '/pillars/identity/iam/companies/ping'
    },
    { 
      name: 'SailPoint', 
      product: 'Atlas IGA Platform',
      position: 'IGA Leader', 
      focus: 'IGA market leader. AI-powered governance. Feb 2025 IPO raised $1.38B at $11.5B valuation. Strong compliance automation.',
      status: 'in-progress',
      href: '/pillars/identity/iam/companies/sailpoint'
    },
    { 
      name: 'IBM', 
      product: 'Security Verify',
      position: 'Enterprise Platform', 
      focus: 'Enterprise-scale IAM. Strong services/consulting arm. Zero Trust integration. Forrester Wave Leader.',
      status: 'in-progress',
      href: '/pillars/identity/iam/companies/ibm'
    },
    { 
      name: 'Oracle', 
      product: 'Identity Governance Suite',
      position: 'Platform', 
      focus: 'Integrated IAM across Oracle cloud, applications, and databases. Strong in Oracle-centric enterprises.',
      status: 'in-progress',
      href: '/pillars/identity/iam/companies/oracle'
    },
    { 
      name: 'Saviynt', 
      product: 'Enterprise Identity Cloud',
      position: 'Converged Platform', 
      focus: 'Cloud-native converged IGA + PAM + Cloud PAM. AI/ML capabilities. "Industry disruptor" positioning.',
      status: 'in-progress',
      href: '/pillars/identity/iam/companies/saviynt'
    },
    { 
      name: 'BeyondTrust', 
      product: 'Identity Security Platform',
      position: 'PAM Leader', 
      focus: 'PAM leader with endpoint privilege management. Gartner & Forrester Leader. Validated PAM and Identity Security position in 2025.',
      status: 'in-progress',
      href: '/pillars/identity/iam/companies/beyondtrust'
    },
    { 
      name: 'One Identity (Quest)', 
      product: 'Unified Identity Platform',
      position: 'Broad Portfolio', 
      focus: 'IGA, PAM, AD management. OneLogin acquisition. Broad portfolio across identity domains.',
      status: 'in-progress',
      href: '/pillars/identity/iam/companies/oneidentity'
    },
    { 
      name: 'Thales', 
      product: 'SafeNet Trusted Access',
      position: 'Enterprise Security', 
      focus: 'Enterprise security, CIAM (OneWelcome acquisition), authentication. Strong in Europe, regulated industries.',
      status: 'in-progress',
      href: '/pillars/identity/iam/companies/thales'
    },
    { 
      name: 'Cisco (Duo)', 
      product: 'Duo Security',
      position: 'MFA Leader', 
      focus: 'MFA market leader. Zero-trust access. Strong SMB presence. Cisco network integration.',
      status: 'in-progress',
      href: '/pillars/identity/iam/companies/cisco'
    },
    { 
      name: 'RSA Security', 
      product: 'SecurID Suite',
      position: 'High-Security', 
      focus: 'High-security authentication. Government, finance, energy, regulated industries. Heritage trust.',
      status: 'in-progress',
      href: '/pillars/identity/iam/companies/rsa'
    },
    { 
      name: 'JumpCloud', 
      product: 'Open Directory Platform',
      position: 'SMB Leader', 
      focus: 'SMB-focused open directory platform. G2 Leader in 81 categories. 2,300+ verified reviews. All-in-one approach.',
      status: 'in-progress',
      href: '/pillars/identity/iam/companies/jumpcloud'
    },
    { 
      name: 'Entrust', 
      product: 'Identity Essentials',
      position: 'Authentication', 
      focus: 'Authentication, identity verification, PKI. Gartner Challenger (3rd year). Strong in certificates.',
      status: 'in-progress',
      href: '/pillars/identity/iam/companies/entrust'
    },
  ];

  // Emerging players
  const emergingPlayers = [
    { name: 'Veza', focus: 'Access visibility, authorization graph. ServiceNow acquisition (~$1B). Identity governance for AI agents.' },
    { name: 'Lumos', focus: 'Self-service access management, app governance. IGA for AI agents.' },
    { name: 'HYPR', focus: 'Passwordless authentication. Phishing-resistant MFA innovation.' },
    { name: 'Beyond Identity', focus: 'Zero-trust, passwordless. Device-bound credentials.' },
    { name: 'ConductorOne', focus: 'Access management automation. Modern IGA for engineering teams.' },
    { name: 'Strata Identity', focus: 'Identity orchestration. Multi-vendor identity integration.' },
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
    { name: 'Non-Human Identity (NHI) Explosion', description: 'Machine identities outnumber humans 17-82:1. Service accounts, API keys, AI agents are the fastest-growing attack surface. OWASP released Top 10 NHI Risks in 2025.' },
    { name: 'Passwordless / Passkeys Go Mainstream', description: '70% of users now have at least one passkey. 48% of top 100 websites support passkeys. NIST SP 800-63-4 mandates phishing-resistant MFA option. 93% login success rate vs 63% for passwords.' },
    { name: 'Platform Convergence Accelerates', description: 'AM + IGA + PAM + CIAM converging into unified platforms. 70% of organizations prefer converged solutions (Gartner). Palo Alto/CyberArk ($25B) signals identity as strategic pillar.' },
    { name: 'Agentic AI Identity Security', description: 'AI agents are "superhuman identities with persistent access." Gartner: 33% of enterprise apps will include agentic AI by 2028. Cyber-criminals weaponizing agentic AI for identity attacks.' },
    { name: 'Identity as the Security Perimeter', description: 'Zero Trust maturation makes identity the primary control point. By 2025, 60% of enterprises adopt zero-trust principles. Continuous Access Evaluation Protocol (CAEP) gaining adoption.' },
  ];

  const hypePositions = [
    { tech: 'Core IAM (AM, SSO, MFA)', position: 'Plateau of Productivity', status: 'stable', note: 'Mature, commoditized' },
    { tech: 'Identity Governance (IGA)', position: 'Late Slope of Enlightenment', status: 'rising', note: 'Enterprise adoption accelerating' },
    { tech: 'Privileged Access Management (PAM)', position: 'Plateau of Productivity', status: 'stable', note: 'Established, CyberArk dominance' },
    { tech: 'Identity Threat Detection (ITDR)', position: 'Peak → Trough Transition', status: 'hot', note: 'Being absorbed into platforms' },
    { tech: 'Non-Human Identity (NHI) Security', position: 'Innovation Trigger → Peak', status: 'emerging', note: 'Fastest-growing segment' },
    { tech: 'AI for Access Administration', position: 'Innovation Trigger', status: 'emerging', note: 'New 2025 Gartner category' },
    { tech: 'Agentic AI Identity', position: 'Pre-Innovation', status: 'emerging', note: '2026: year of agentic identity sprawl' },
  ];

  const maActivity = [
    { date: 'Jul 2025', acquirer: 'Palo Alto Networks', target: 'CyberArk', value: '$25B', signal: 'Identity security as strategic platform pillar' },
    { date: 'Dec 2025', acquirer: 'ServiceNow', target: 'Veza', value: '~$1B', signal: 'ITSM-to-identity expansion; AI access governance' },
    { date: 'Aug 2025', acquirer: 'Okta', target: 'Axiom Security', value: 'Undisclosed', signal: 'SaaS identity threat detection' },
    { date: 'Feb 2025', acquirer: 'IPO', target: 'SailPoint', value: '$1.38B raised', signal: 'IGA market validation; $11.5B valuation' },
    { date: 'Early 2025', acquirer: 'CyberArk', target: 'Zilla Security', value: 'Undisclosed', signal: 'Modern IGA capabilities' },
    { date: '2024', acquirer: 'CyberArk', target: 'Venafi', value: '$1.5B', signal: 'Machine identity / certificates' },
  ];

  const cisoJobs = [
    { job: 'Secure all identities with a unified platform', metric: 'Single pane of glass; cross-domain visibility' },
    { job: 'Prove compliance quickly to auditors', metric: 'Automated compliance dashboards; one-click audit reports' },
    { job: 'Detect identity-based attacks before breach', metric: 'ITDR capability; behavioral analytics; real-time alerts' },
    { job: 'Manage machine identities at scale', metric: 'NHI discovery, inventory, lifecycle management' },
  ];

  const itOpsJobs = [
    { job: 'Automate user provisioning without delays', metric: 'Zero-touch provisioning; HR system integration' },
    { job: 'Eliminate password reset tickets', metric: 'Self-service portal; passwordless options; 50%+ ticket reduction' },
    { job: 'Complete access reviews in days, not weeks', metric: 'AI-assisted certification with risk scoring' },
    { job: 'Manage all identity types from one console', metric: 'Single admin interface; human + machine + AI' },
  ];

  const developerJobs = [
    { job: 'Embed identity without slowing deployment', metric: 'Self-service access request; automated approval workflows' },
    { job: 'Centralize secrets management', metric: 'Secrets vault with CI/CD integration' },
    { job: 'Prevent certificate outages', metric: 'Automated certificate lifecycle management' },
    { job: 'Access quality documentation and SDKs', metric: 'Developer portal; SDKs; sandbox; samples' },
  ];

  const endUserJobs = [
    { job: 'Access all apps without multiple passwords', metric: 'Passwordless/passkey authentication; SSO' },
    { job: 'Stop constant MFA prompts', metric: 'Adaptive MFA with intelligent risk-based step-up' },
    { job: 'Request new access quickly', metric: 'Mobile-first self-service; real-time approval' },
    { job: 'Recover access without help desk', metric: 'Recovery options beyond email/SMS (trusted devices)' },
  ];

  const tableStakes = [
    'Single Sign-On (SSO) - SAML 2.0 & OIDC',
    'Multi-Factor Authentication (MFA) - TOTP, push, SMS',
    'Adaptive/Risk-Based Authentication',
    'User Provisioning & Deprovisioning',
    'Directory Integration (AD, LDAP)',
    'SCIM 2.0 for SaaS Provisioning',
    'Role-Based Access Control (RBAC)',
    'Audit Logging & Activity Tracking',
    'Access Certification Campaigns',
    'Cloud Deployment (SaaS/IDaaS)',
    'REST API for Programmatic Access',
    '50+ Pre-Built Application Connectors',
    'SOC 2 Type II Certification',
  ];

  const differentiators = [
    { name: 'ITDR Capability Depth', description: 'Identity-centric threat detection with behavioral analytics. Automated response actions. XDR/SIEM integration. 78% of companies experienced identity-related breaches.' },
    { name: 'Non-Human Identity Management', description: 'Service account discovery across cloud and on-prem. Secrets management with automated rotation. NHI lifecycle governance. NHIs outnumber humans 17-82:1.' },
    { name: 'Passwordless/Passkey Leadership', description: 'Native FIDO2 WebAuthn support. Cross-platform passkey support (iOS, Android, Windows, macOS). NIST mandates phishing-resistant MFA. 93% login success rate.' },
    { name: 'AI-Powered Automation & Recommendations', description: 'Intelligent access recommendations based on peer analysis. Automated certification with risk scoring. Natural language policy creation. 67% of buyers cite AI as critical.' },
    { name: 'Platform Convergence (Unified Identity)', description: 'Single platform covering AM + IGA + PAM + CIAM. Unified data model for all identity types. Single admin console. 70% prefer converged; 85% cite cost savings as driver.' },
    { name: 'Time-to-Value & Implementation Simplicity', description: 'Rapid deployment (days/weeks, not months). No-code/low-code workflow configuration. Strong professional services. G2 reviews cite implementation complexity as top pain.' },
    { name: 'Ecosystem Integration Depth', description: '500+ pre-built connectors with deep provisioning. Native cloud provider integration (AWS, Azure, GCP). Support for disconnected/legacy apps without SCIM. Long-tail coverage increasingly decisive.' },
  ];

  const roiMetrics = [
    { metric: 'Average data breach cost', value: '$4.44M' },
    { metric: 'Annual insider risk cost', value: '$17.4M' },
    { metric: 'Credential theft incident cost', value: '$779K' },
    { metric: 'PAM annual savings', value: '$5.9M' },
  ];

  const pricingTiers = [
    { tier: 'Okta Workforce', range: '$6-17/user/month', notes: 'Starter to Enterprise. $1,500 annual minimum.' },
    { tier: 'Microsoft Entra ID', range: '$6-12/user/month', notes: 'P1 to Suite. Often bundled with E3/E5.' },
    { tier: 'CyberArk Workforce', range: '$2-5/user/month', notes: 'MFA/SSO. PAM $30K+ median annually.' },
    { tier: 'SailPoint IGA', range: 'Quote-based', notes: 'Per module. Enterprise-grade pricing.' },
  ];

  const budgetTrends = [
    { trend: '99% plan to increase', detail: 'Cybersecurity budgets over next 2-3 years (KPMG 2025)' },
    { trend: '43% prioritize IAM', detail: 'CISOs plan to invest in IAM/MFA/Zero Trust (Gartner 2025)' },
    { trend: '16.5% of security budget', detail: 'Insider risk management (up from 8.2% in 2023) (Ponemon 2025)' },
    { trend: '7% budget growth', detail: 'Lowest in 4 years; CFOs demanding clear ROI (IANS 2025)' },
  ];

  const theses = [
    {
      id: 1,
      title: 'Platform Convergence is Mandatory—Standalone Point Solutions Face Extinction',
      timeframe: '2025-2028',
      confidence: 'High',
      color: 'green',
      claim: 'By 2028, 70%+ of enterprise IAM deployments will be converged platforms (AM + IGA + PAM + CIAM) rather than best-of-breed point solutions. Pure-play specialists must either consolidate, differentiate into niches, or be acquired.',
      evidence: ['70% of organizations prefer converged platforms (Gartner)', '85% cite cost savings as top consolidation driver', 'Palo Alto/CyberArk ($25B) signals platform-level consolidation', 'Thoma Bravo consolidating Ping + ForgeRock + SailPoint'],
      implication: 'Evaluate IAM as platform capability, not point solution. Standalone MFA, IGA, or PAM purchases face integration tax and acquisition risk.',
    },
    {
      id: 2,
      title: 'Non-Human Identities Become the Primary Attack Surface',
      timeframe: '2025-2027',
      confidence: 'High',
      color: 'purple',
      claim: 'By 2027, NHI-focused attacks will exceed human identity attacks. Service accounts, API keys, secrets, and AI agents represent the fastest-growing and least-governed attack surface. IAM without NHI coverage is incomplete.',
      evidence: ['Machine identities outnumber humans 17-82:1', 'OWASP Top 10 Non-Human Identity Risks released 2025', '50+ breaches linked to NHI in H1 2025 (Doppler)', 'NHI segment expected to register highest CAGR (MarketsandMarkets)'],
      implication: 'Prioritize IAM solutions with explicit NHI coverage—human-only IAM is obsolete. Build NHI roadmap as top priority.',
    },
    {
      id: 3,
      title: 'Passwordless/Passkeys Reach Tipping Point—Passwords Become Legacy',
      timeframe: '2025-2027',
      confidence: 'High',
      color: 'orange',
      claim: 'By 2027, passwordless authentication (passkeys, FIDO2) will be the default for enterprise and consumer identity. Organizations still relying primarily on passwords face increased breach risk and user friction.',
      evidence: ['70% of users now have at least one passkey (FIDO Alliance)', 'NIST SP 800-63-4 mandates phishing-resistant MFA option at AAL2', 'UAE banning SMS OTP for financial services by March 2026', '93% login success rate for passkeys vs 63% for passwords'],
      implication: 'Passwordless must be on every IAM roadmap. Native FIDO2/WebAuthn support is table stakes by 2026. Plan SMS OTP deprecation.',
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
      <nav className="border-b border-gray-800 bg-gray-950/80 backdrop-blur-sm sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 py-3">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2 text-sm">
              <a href="/" className="flex items-center gap-2 hover:opacity-80">
                <Logo className="h-6 w-6" />
              </a>
              /
              <a href="/pillars/identity" className="text-blue-400 hover:text-blue-300">Identity</a>
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
        <div className="mb-6">
          <div className="flex flex-wrap gap-2 mb-3">
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
            <span>IAM touches all pillars:</span>
            {relatedPillars.map((pillar, idx) => (
              <span 
                key={idx} 
                className="px-2 py-0.5 rounded bg-gray-800/50 text-gray-400"
              >
                {pillar.name}
              </span>
            ))}
          </div>
        </div>

        
        {/* Header */}
        <div className="mb-8">
          <div className="flex items-center gap-3 mb-2">
            <h1 className="text-3xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
              Identity & Access Management
            </h1>
            <span className="px-2 py-1 text-xs bg-purple-900/50 text-purple-400 rounded border border-purple-800">
              FOUNDATIONAL PILLAR
            </span>
          </div>
          <p className="text-gray-400 text-lg mb-4">
            The $26B market where identity becomes the new security perimeter—platform convergence reshaping the competitive landscape
          </p>
          
          <div className="flex items-center gap-4 text-sm text-gray-500">
            <span>Last updated: January 2026</span>
            <span>•</span>
            <span>Methodology: SRP Framework</span>
            <span>•</span>
            <span className="flex items-center gap-1">
              <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></span>
              Active research
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
              <div className="text-2xl font-bold text-blue-400 mb-1">{insight.stat}</div>
              <div className="text-xs text-gray-500">{insight.label}</div>
            </div>
          ))}
        </div>

        {/* The Identity Perimeter Callout */}
        <div className="bg-gradient-to-r from-blue-900/30 to-purple-900/30 border border-blue-800/50 rounded-lg p-6 mb-8">
          <div className="flex items-start gap-4">
            <div className="text-3xl">🔐</div>
            <div>
              <h3 className="text-lg font-semibold text-blue-400 mb-2">The New Security Perimeter</h3>
              <p className="text-gray-300">
                Breaches no longer begin at the network perimeter, the endpoint, or the firewall. 
                <span className="text-blue-400 font-semibold"> They begin with identity.</span> 
                {' '}IAM has evolved from IT administration tool to foundational security layer. 
                With 78% of breaches involving compromised identities and machine identities outnumbering humans 82:1, 
                <span className="text-purple-400 font-semibold"> identity IS the perimeter.</span>
              </p>
            </div>
          </div>
        </div>

        {/* Main Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
          
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

              {/* IAM Framework Visual */}
              <div className="bg-gray-900/50 border border-gray-800 rounded-lg p-4">
                <h3 className="text-sm font-semibold text-gray-400 mb-3">IAM Convergence</h3>
                <div className="space-y-2 text-xs">
                  <div className="flex items-center gap-2 p-2 bg-blue-900/30 rounded border border-blue-800/50">
                    <span className="w-6 h-6 rounded bg-blue-600 flex items-center justify-center text-white font-bold">AM</span>
                    <span className="text-gray-300">Access Management</span>
                  </div>
                  <div className="flex items-center gap-2 p-2 bg-purple-900/30 rounded border border-purple-800/50">
                    <span className="w-6 h-6 rounded bg-purple-600 flex items-center justify-center text-white font-bold">IGA</span>
                    <span className="text-gray-300">Identity Governance</span>
                  </div>
                  <div className="flex items-center gap-2 p-2 bg-orange-900/30 rounded border border-orange-800/50">
                    <span className="w-6 h-6 rounded bg-orange-600 flex items-center justify-center text-white font-bold">PAM</span>
                    <span className="text-gray-300">Privileged Access</span>
                  </div>
                  <div className="flex items-center gap-2 p-2 bg-green-900/30 rounded border border-green-800/50">
                    <span className="w-6 h-6 rounded bg-green-600 flex items-center justify-center text-white font-bold">NHI</span>
                    <span className="text-gray-300">Non-Human Identity ★</span>
                  </div>
                </div>
                <p className="text-xs text-gray-500 mt-3">★ Fastest-growing segment; 40%+ CAGR</p>
              </div>
            </div>
          </div>

          {/* Main Content Area */}
          <div className="lg:col-span-3 space-y-8">
            
            {/* Overview Section */}
            <section id="overview" className="bg-gray-900/30 border border-gray-800 rounded-lg p-6">
              <h2 className="text-xl font-semibold mb-4 flex items-center gap-2">
                <span>📋</span> Overview
              </h2>
              <div className="prose prose-invert max-w-none">
                <p className="text-gray-300 mb-4">
                  Identity and Access Management (IAM) encompasses the processes, policies, and technologies 
                  used to manage digital identities and control access to organizational resources. Modern IAM 
                  platforms go beyond basic authentication and access control, serving as critical infrastructure 
                  for Zero Trust security, regulatory compliance, and operational efficiency.
                </p>
                <p className="text-gray-300 mb-4">
                  The market is consolidating rapidly around unified identity platforms that converge Access Management, 
                  Identity Governance (IGA), Privileged Access Management (PAM), and Customer Identity (CIAM). 
                  With the Palo Alto/CyberArk $25B acquisition and ServiceNow/Veza deal, identity has become 
                  a board-level strategic priority.
                </p>
                <div className="bg-gray-800/50 rounded-lg p-4 mt-4">
                  <h4 className="text-sm font-semibold text-blue-400 mb-2">Why Organizations Invest in IAM</h4>
                  <ul className="text-sm text-gray-300 space-y-2">
                    <li className="flex items-start gap-2">
                      <span className="text-blue-400">•</span>
                      <span><strong>Zero Trust Architecture:</strong> Identity is the primary control point—"never trust, always verify"</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-blue-400">•</span>
                      <span><strong>Identity-Based Attack Prevention:</strong> 78% of breaches involve compromised identities</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-blue-400">•</span>
                      <span><strong>Regulatory Compliance:</strong> GDPR, NIS2, CCPA, SOX require meticulous identity administration</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-blue-400">•</span>
                      <span><strong>Digital Transformation:</strong> Multi-cloud, hybrid IT, and remote workforce demand scalable IAM</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-blue-400">•</span>
                      <span><strong>Operational Efficiency:</strong> Automation reduces manual provisioning, access reviews, and help desk tickets</span>
                    </li>
                  </ul>
                </div>
              </div>
            </section>

            {/* Market Structure Section */}
            <section id="structure" className="bg-gray-900/30 border border-gray-800 rounded-lg p-6">
              <h2 className="text-xl font-semibold mb-4 flex items-center gap-2">
                <span>🏗️</span> Market Structure
              </h2>
              
              {/* Market Sizing */}
              <div className="mb-6">
                <h3 className="text-sm font-semibold text-gray-400 mb-3">Market Size & Growth (Significant Variance)</h3>
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
                          <td className="py-2 text-gray-300">{row.val2024}</td>
                          <td className="py-2 text-blue-400">{row.projection}</td>
                          <td className="py-2 text-green-400">{row.cagr}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
                <p className="text-xs text-gray-500 mt-2">Note: Market size varies by category boundary definition. Consensus: $26B (2025) at 10-15% CAGR.</p>
              </div>

              {/* Sub-segments */}
              <div className="mb-6">
                <h3 className="text-sm font-semibold text-gray-400 mb-3">IAM Sub-Segments (Converging)</h3>
                <div className="flex flex-wrap gap-2">
                  {marketSubSegments.map((seg, idx) => (
                    <span 
                      key={idx}
                      className="px-3 py-1 bg-gray-800 text-gray-300 rounded-full text-xs"
                    >
                      {seg}
                    </span>
                  ))}
                </div>
                <p className="text-xs text-gray-500 mt-2">Critical: AM + IGA + PAM converging into unified platforms. By 2025, Gartner predicts 70% prefer converged solutions.</p>
              </div>

              {/* Emerging Players */}
              <div className="mb-6">
                <h3 className="text-sm font-semibold text-gray-400 mb-3">Emerging Players to Watch</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                  {emergingPlayers.map((player, idx) => (
                    <div key={idx} className="bg-gray-800/50 rounded-lg p-3">
                      <div className="font-semibold text-purple-400 text-sm">{player.name}</div>
                      <div className="text-xs text-gray-400">{player.focus}</div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Competitive Landscape */}
              <div>
                <div className="flex items-center justify-between mb-3">
                  <h3 className="text-sm font-semibold text-gray-400">Top 15 Vendors by Consensus (2025)</h3>
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
                <div className="space-y-3">
                  {competitors.map((comp, idx) => {
                    const statusStyle = getStatusStyle(comp.status);
                    return (
                      <div 
                        key={idx}
                        className="bg-gray-800/50 border border-gray-700 rounded-lg p-4 hover:border-gray-600 transition-all"
                      >
                        <div className="flex items-start justify-between">
                          <div className="flex-1">
                            <div className="flex items-center gap-2 mb-1">
                              <span className="font-semibold text-white">{comp.name}</span>
                              <span className="text-gray-500">•</span>
                              <span className="text-sm text-gray-400">{comp.product}</span>
                            </div>
                            <p className="text-sm text-gray-400">{comp.focus}</p>
                          </div>
                          <div className="flex flex-col items-end gap-2">
                            <span className="px-2 py-1 bg-blue-900/50 text-blue-400 rounded text-xs">
                              {comp.position}
                            </span>
                            <div className={`flex items-center gap-1 px-2 py-1 rounded text-xs ${statusStyle.bg} ${statusStyle.text}`}>
                              <span className={`w-1.5 h-1.5 rounded-full ${statusStyle.dot}`}></span>
                              {statusStyle.label}
                            </div>
                            <a href={comp.href} className="text-xs text-gray-500 hover:text-blue-400">
                              View analysis →
                            </a>
                          </div>
                        </div>
                      </div>
                    );
                  })}
                </div>
                <p className="text-xs text-gray-500 mt-3">Note: Microsoft, Ping, IBM, Okta, and Oracle together contribute 25-30% of global market share.</p>
              </div>
            </section>

            {/* Market Dynamics Section */}
            <section id="motion" className="bg-gray-900/30 border border-gray-800 rounded-lg p-6">
              <h2 className="text-xl font-semibold mb-4 flex items-center gap-2">
                <span>📈</span> Market Dynamics
              </h2>

              {/* Assessment */}
              <div className="bg-gradient-to-r from-blue-900/20 to-purple-900/20 border border-blue-800/30 rounded-lg p-4 mb-6">
                <div className="flex items-center gap-3">
                  <span className="text-2xl">📊</span>
                  <span className="text-gray-300">
                    <strong className="text-blue-400">Position:</strong> Core IAM at Plateau of Productivity; NHI/AI at Innovation Trigger. 
                    <strong className="text-purple-400"> Direction:</strong> Strong consolidation at platform level, fragmentation at emerging edges.
                  </span>
                </div>
              </div>

              {/* Hype Cycle */}
              <div className="mb-6">
                <h3 className="text-sm font-semibold text-gray-400 mb-3">Hype Cycle Positioning (2025)</h3>
                <div className="space-y-2">
                  {hypePositions.map((item, idx) => (
                    <div key={idx} className="flex items-center justify-between bg-gray-800/50 rounded-lg p-3">
                      <div>
                        <span className="text-gray-300 text-sm">{item.tech}</span>
                        <span className="text-gray-500 text-xs ml-2">— {item.note}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <span className={`w-2 h-2 rounded-full ${
                          item.status === 'emerging' ? 'bg-purple-400' :
                          item.status === 'hot' ? 'bg-red-400' :
                          item.status === 'rising' ? 'bg-green-400' :
                          item.status === 'stable' ? 'bg-blue-400' :
                          'bg-yellow-400'
                        }`}></span>
                        <span className="text-xs text-gray-400">{item.position}</span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Major Trends */}
              <div className="mb-6">
                <h3 className="text-sm font-semibold text-gray-400 mb-3">5 Major Trends for 2025-2026</h3>
                <div className="space-y-4">
                  {trends.map((trend, idx) => (
                    <div key={idx} className="border-l-2 border-blue-600 pl-4">
                      <h4 className="font-semibold text-white mb-1">{trend.name}</h4>
                      <p className="text-sm text-gray-400">{trend.description}</p>
                    </div>
                  ))}
                </div>
              </div>

              {/* M&A Activity */}
              <div className="mb-6">
                <h3 className="text-sm font-semibold text-gray-400 mb-3">M&A Activity (Consolidation Signals)</h3>
                <div className="overflow-x-auto">
                  <table className="w-full text-sm">
                    <thead>
                      <tr className="border-b border-gray-700">
                        <th className="text-left py-2 text-gray-400">Date</th>
                        <th className="text-left py-2 text-gray-400">Acquirer</th>
                        <th className="text-left py-2 text-gray-400">Target</th>
                        <th className="text-left py-2 text-gray-400">Value</th>
                        <th className="text-left py-2 text-gray-400">Signal</th>
                      </tr>
                    </thead>
                    <tbody>
                      {maActivity.map((row, idx) => (
                        <tr key={idx} className="border-b border-gray-800">
                          <td className="py-2 text-gray-500">{row.date}</td>
                          <td className="py-2 text-gray-300">{row.acquirer}</td>
                          <td className="py-2 text-blue-400">{row.target}</td>
                          <td className="py-2 text-green-400">{row.value}</td>
                          <td className="py-2 text-gray-400 text-xs">{row.signal}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
                <p className="text-xs text-gray-500 mt-2">Thoma Bravo dominates IAM PE: Ping + ForgeRock merger, SailPoint re-IPO after $6.9B take-private.</p>
              </div>

              {/* What's Replacing What */}
              <div>
                <h3 className="text-sm font-semibold text-gray-400 mb-3">Technology Displacement Patterns</h3>
                <div className="space-y-2">
                  <div className="flex items-center gap-4 bg-gray-800/50 rounded-lg p-3">
                    <span className="text-red-400 line-through text-sm">Passwords + SMS OTP</span>
                    <span className="text-gray-500">→</span>
                    <span className="text-green-400 text-sm">Passkeys (FIDO2/WebAuthn), Biometrics</span>
                    <span className="text-xs text-gray-500 ml-auto">2025-2027</span>
                  </div>
                  <div className="flex items-center gap-4 bg-gray-800/50 rounded-lg p-3">
                    <span className="text-red-400 line-through text-sm">VPN-based access</span>
                    <span className="text-gray-500">→</span>
                    <span className="text-green-400 text-sm">Zero Trust Network Access (ZTNA)</span>
                    <span className="text-xs text-gray-500 ml-auto">Underway</span>
                  </div>
                  <div className="flex items-center gap-4 bg-gray-800/50 rounded-lg p-3">
                    <span className="text-red-400 line-through text-sm">Point AM/IGA/PAM tools</span>
                    <span className="text-gray-500">→</span>
                    <span className="text-green-400 text-sm">Unified Identity Platforms</span>
                    <span className="text-xs text-gray-500 ml-auto">2024-2027</span>
                  </div>
                  <div className="flex items-center gap-4 bg-gray-800/50 rounded-lg p-3">
                    <span className="text-red-400 line-through text-sm">Human-only IAM</span>
                    <span className="text-gray-500">→</span>
                    <span className="text-green-400 text-sm">Unified Human + NHI + AI Agent governance</span>
                    <span className="text-xs text-gray-500 ml-auto">2025-2028</span>
                  </div>
                </div>
              </div>
            </section>

            {/* Stakeholders Section */}
            <section id="stakeholders" className="bg-gray-900/30 border border-gray-800 rounded-lg p-6">
              <h2 className="text-xl font-semibold mb-4 flex items-center gap-2">
                <span>👥</span> Stakeholders
              </h2>

              {/* Analyst Consensus */}
              <div className="bg-gray-800/50 rounded-lg p-4 mb-6">
                <h3 className="text-sm font-semibold text-gray-400 mb-3">Analyst Consensus</h3>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-sm">
                  <div>
                    <span className="text-blue-400 font-semibold">Gartner:</span>
                    <span className="text-gray-300"> "IAM is both a business enabler and cybersecurity control." 70% prefer converged platforms. 90% embedded ITDR by 2026.</span>
                  </div>
                  <div>
                    <span className="text-purple-400 font-semibold">Forrester:</span>
                    <span className="text-gray-300"> "Workforce identity platforms energize centripetal force to combat IAM deployment challenges."</span>
                  </div>
                  <div>
                    <span className="text-green-400 font-semibold">IDC:</span>
                    <span className="text-gray-300"> "Identity is the new perimeter for network security." NHI management is critical requirement.</span>
                  </div>
                </div>
              </div>

              {/* CISO JTBD */}
              <div className="mb-6">
                <h3 className="text-sm font-semibold text-gray-400 mb-2">Enterprise CISO Jobs To Be Done</h3>
                <div className="overflow-x-auto">
                  <table className="w-full text-sm">
                    <thead>
                      <tr className="border-b border-gray-700">
                        <th className="text-left py-2 text-gray-400">Job Statement</th>
                        <th className="text-left py-2 text-gray-400">Success Metric / Feature Need</th>
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

              {/* IT Ops JTBD */}
              <div className="mb-6">
                <h3 className="text-sm font-semibold text-gray-400 mb-2">IT Operations Manager Jobs To Be Done</h3>
                <div className="overflow-x-auto">
                  <table className="w-full text-sm">
                    <thead>
                      <tr className="border-b border-gray-700">
                        <th className="text-left py-2 text-gray-400">Job Statement</th>
                        <th className="text-left py-2 text-gray-400">Success Metric</th>
                      </tr>
                    </thead>
                    <tbody>
                      {itOpsJobs.map((row, idx) => (
                        <tr key={idx} className="border-b border-gray-800">
                          <td className="py-2 text-gray-300">{row.job}</td>
                          <td className="py-2 text-gray-400">{row.metric}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>

              {/* Developer JTBD */}
              <div className="mb-6">
                <h3 className="text-sm font-semibold text-gray-400 mb-2">Developer / Platform Team Jobs To Be Done</h3>
                <div className="overflow-x-auto">
                  <table className="w-full text-sm">
                    <thead>
                      <tr className="border-b border-gray-700">
                        <th className="text-left py-2 text-gray-400">Job Statement</th>
                        <th className="text-left py-2 text-gray-400">Success Metric</th>
                      </tr>
                    </thead>
                    <tbody>
                      {developerJobs.map((row, idx) => (
                        <tr key={idx} className="border-b border-gray-800">
                          <td className="py-2 text-gray-300">{row.job}</td>
                          <td className="py-2 text-gray-400">{row.metric}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>

              {/* End User JTBD */}
              <div className="mb-6">
                <h3 className="text-sm font-semibold text-gray-400 mb-2">End User Jobs To Be Done</h3>
                <div className="overflow-x-auto">
                  <table className="w-full text-sm">
                    <thead>
                      <tr className="border-b border-gray-700">
                        <th className="text-left py-2 text-gray-400">Job Statement</th>
                        <th className="text-left py-2 text-gray-400">Success Metric</th>
                      </tr>
                    </thead>
                    <tbody>
                      {endUserJobs.map((row, idx) => (
                        <tr key={idx} className="border-b border-gray-800">
                          <td className="py-2 text-gray-300">{row.job}</td>
                          <td className="py-2 text-gray-400">{row.metric}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>

              {/* Key Pain Points */}
              <div className="bg-red-900/20 border border-red-800/50 rounded-lg p-4">
                <h3 className="text-sm font-semibold text-red-400 mb-2">Top User Pain Points (G2 Reviews)</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-3 text-sm text-gray-300">
                  <div>• Frequent authentication prompts (30 mentions - Okta)</div>
                  <div>• Complex initial setup (27 mentions - Okta)</div>
                  <div>• Pricing at scale (27 mentions - Okta)</div>
                  <div>• High cost / inflexible program (SailPoint)</div>
                  <div>• Non-Microsoft ecosystem complexity (Entra)</div>
                  <div>• Implementation complexity (CyberArk, SailPoint)</div>
                </div>
              </div>
            </section>

            {/* Economics Section */}
            <section id="economics" className="bg-gray-900/30 border border-gray-800 rounded-lg p-6">
              <h2 className="text-xl font-semibold mb-4 flex items-center gap-2">
                <span>💰</span> Economics & ROI
              </h2>

              {/* ROI Metrics */}
              <div className="mb-6">
                <h3 className="text-sm font-semibold text-gray-400 mb-3">The Cost of Getting It Wrong</h3>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                  {roiMetrics.map((item, idx) => (
                    <div key={idx} className="bg-gray-800/50 rounded-lg p-4 text-center">
                      <div className="text-xl font-bold text-red-400 mb-1">{item.value}</div>
                      <div className="text-xs text-gray-500">{item.metric}</div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Pricing Tiers */}
              <div className="mb-6">
                <h3 className="text-sm font-semibold text-gray-400 mb-3">Pricing Tiers (Directional Indicators)</h3>
                <div className="overflow-x-auto">
                  <table className="w-full text-sm">
                    <thead>
                      <tr className="border-b border-gray-700">
                        <th className="text-left py-2 text-gray-400">Vendor</th>
                        <th className="text-left py-2 text-gray-400">Range</th>
                        <th className="text-left py-2 text-gray-400">Notes</th>
                      </tr>
                    </thead>
                    <tbody>
                      {pricingTiers.map((row, idx) => (
                        <tr key={idx} className="border-b border-gray-800">
                          <td className="py-2 text-gray-300">{row.tier}</td>
                          <td className="py-2 text-green-400">{row.range}</td>
                          <td className="py-2 text-gray-400">{row.notes}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
                <p className="text-xs text-gray-500 mt-2">Note: Published pricing is directional. Enterprise deals involve significant discounts, bundling, and custom terms.</p>
              </div>

              {/* Budget Trends */}
              <div className="mb-6">
                <h3 className="text-sm font-semibold text-gray-400 mb-3">Budget Trends (2025)</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                  {budgetTrends.map((item, idx) => (
                    <div key={idx} className="bg-gray-800/50 rounded-lg p-3">
                      <div className="font-semibold text-blue-400 text-sm">{item.trend}</div>
                      <div className="text-xs text-gray-400">{item.detail}</div>
                    </div>
                  ))}
                </div>
              </div>

              {/* ROI Calculation */}
              <div className="mb-6">
                <h3 className="text-sm font-semibold text-gray-400 mb-3">Sample ROI (5,000 Employee Organization)</h3>
                <div className="bg-gray-800/50 rounded-lg p-4">
                  <div className="space-y-3">
                    <div className="flex justify-between items-center border-b border-gray-700 pb-2">
                      <span className="text-gray-400">Software Licensing (3-year)</span>
                      <span className="text-red-400">$500K</span>
                    </div>
                    <div className="flex justify-between items-center border-b border-gray-700 pb-2">
                      <span className="text-gray-400">Implementation + Internal Labor</span>
                      <span className="text-red-400">$650K</span>
                    </div>
                    <div className="flex justify-between items-center border-b border-gray-700 pb-2">
                      <span className="text-gray-400">Training / Change Management</span>
                      <span className="text-red-400">$50K</span>
                    </div>
                    <div className="flex justify-between items-center border-b border-gray-700 pb-2 font-semibold">
                      <span className="text-white">Total 3-Year Cost</span>
                      <span className="text-red-400">$1.2M</span>
                    </div>
                  </div>
                  <div className="mt-4 pt-4 border-t border-gray-700 space-y-3">
                    <div className="flex justify-between items-center">
                      <span className="text-gray-400">Risk Reduction (insider threat prevention)</span>
                      <span className="text-green-400">$2.0M</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-gray-400">Operational Efficiency (help desk, provisioning)</span>
                      <span className="text-green-400">$1.5M</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-gray-400">Compliance/Audit Time Savings</span>
                      <span className="text-green-400">$400K</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-gray-400">Productivity Gains (faster onboarding)</span>
                      <span className="text-green-400">$300K</span>
                    </div>
                    <div className="flex justify-between items-center font-semibold">
                      <span className="text-white">Total 3-Year Benefits</span>
                      <span className="text-green-400">$4.2M</span>
                    </div>
                  </div>
                  <div className="mt-4 pt-4 border-t border-gray-600 grid grid-cols-3 gap-4 text-center">
                    <div>
                      <div className="text-2xl font-bold text-green-400">250%</div>
                      <div className="text-xs text-gray-500">ROI</div>
                    </div>
                    <div>
                      <div className="text-2xl font-bold text-blue-400">&lt;8 mo</div>
                      <div className="text-xs text-gray-500">Payback</div>
                    </div>
                    <div>
                      <div className="text-2xl font-bold text-purple-400">$3.0M</div>
                      <div className="text-xs text-gray-500">NPV (10%)</div>
                    </div>
                  </div>
                </div>
                <p className="text-xs text-gray-500 mt-2">Based on Forrester TEI methodology. Cloud IAM consistently shows 200-300% ROI with &lt;6 month payback.</p>
              </div>

              {/* TCO Warning */}
              <div className="bg-yellow-900/20 border border-yellow-800/50 rounded-lg p-4">
                <h3 className="text-sm font-semibold text-yellow-400 mb-2">TCO Hidden Costs</h3>
                <div className="text-sm text-gray-300 space-y-1">
                  <div>• Implementation: Budget 2-3x estimates for complex environments</div>
                  <div>• Personnel: $150K+ fully burdened for IAM specialists</div>
                  <div>• Integration: Apps without SCIM/SAML create ongoing manual burden</div>
                  <div>• Hybrid tax: Running on-prem + cloud IAM doubles integration costs temporarily</div>
                  <div>• Support: Premium support tiers often essential for complex deployments</div>
                </div>
              </div>
            </section>

            {/* PM Strategy Section */}
            <section id="product" className="bg-gray-900/30 border border-gray-800 rounded-lg p-6">
              <h2 className="text-xl font-semibold mb-4 flex items-center gap-2">
                <span>🎯</span> PM Strategic Elements
              </h2>
              
              {/* Table Stakes */}
              <div className="mb-6">
                <h3 className="text-sm font-semibold text-gray-400 mb-3">Table Stakes (2025 Minimum Viable Feature Set)</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
                  {tableStakes.map((feature, idx) => (
                    <div key={idx} className="flex items-center gap-2 text-sm">
                      <span className="text-green-500">✓</span>
                      <span className="text-gray-300">{feature}</span>
                    </div>
                  ))}
                </div>
                <div className="mt-3 p-3 bg-gray-800/50 rounded text-xs text-gray-400">
                  Missing any of these = immediate RFP disqualification. These are no longer differentiators.
                </div>
              </div>

              {/* Differentiators */}
              <div className="mb-6">
                <h3 className="text-sm font-semibold text-gray-400 mb-3">Key Differentiators (What Wins Deals)</h3>
                <div className="space-y-4">
                  {differentiators.map((diff, idx) => (
                    <div key={idx} className="border-l-2 border-purple-600 pl-4">
                      <h4 className="font-semibold text-white mb-1">{diff.name}</h4>
                      <p className="text-sm text-gray-400">{diff.description}</p>
                    </div>
                  ))}
                </div>
              </div>

              {/* If I'm a PM Here Box */}
              <div className="bg-gradient-to-r from-blue-900/30 to-purple-900/30 border border-blue-800/50 rounded-lg p-6">
                <h3 className="text-lg font-semibold text-blue-400 mb-4">
                  💡 If I am a PM Here, I Need to Know...
                </h3>
                <div className="space-y-3 text-sm">
                  <div className="flex gap-3">
                    <span className="text-blue-400 font-bold">1.</span>
                    <span className="text-gray-300"><strong>Core IAM is commoditized.</strong> SSO, MFA, directory—everyone has it. Differentiation has moved to ITDR, NHI, and AI.</span>
                  </div>
                  <div className="flex gap-3">
                    <span className="text-blue-400 font-bold">2.</span>
                    <span className="text-gray-300"><strong>Microsoft Entra wins through bundle economics.</strong> Your value prop is incremental capability or ecosystem neutrality.</span>
                  </div>
                  <div className="flex gap-3">
                    <span className="text-blue-400 font-bold">3.</span>
                    <span className="text-gray-300"><strong>NHI is the next battleground.</strong> Machine identities outnumber humans 17-82:1. Build NHI roadmap as top priority.</span>
                  </div>
                  <div className="flex gap-3">
                    <span className="text-blue-400 font-bold">4.</span>
                    <span className="text-gray-300"><strong>67% cite AI as critical evaluation criterion.</strong> AI-powered access recommendations and automation are table stakes by 2026.</span>
                  </div>
                  <div className="flex gap-3">
                    <span className="text-blue-400 font-bold">5.</span>
                    <span className="text-gray-300"><strong>Passwordless is mainstream.</strong> 70%+ users have passkeys. Native FIDO2 support is required. Plan SMS OTP deprecation.</span>
                  </div>
                  <div className="flex gap-3">
                    <span className="text-blue-400 font-bold">6.</span>
                    <span className="text-gray-300"><strong>Platform consolidation is mandatory.</strong> 70% prefer converged. Pure-play specialists must differentiate or prepare for acquisition.</span>
                  </div>
                  <div className="flex gap-3">
                    <span className="text-blue-400 font-bold">7.</span>
                    <span className="text-gray-300"><strong>Time-to-value is #1 mid-market criteria.</strong> G2 reviews cite implementation complexity as top pain. Target &lt;30 days to value.</span>
                  </div>
                  <div className="flex gap-3">
                    <span className="text-blue-400 font-bold">8.</span>
                    <span className="text-gray-300"><strong>Developer experience (DX) is competitive differentiator.</strong> API quality, SDK coverage, and documentation matter for platform teams.</span>
                  </div>
                </div>
              </div>
            </section>

            {/* Strategic Theses Section */}
            <section id="theses" className="bg-gray-900/30 border border-gray-800 rounded-lg p-6">
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
                    className={`bg-gray-800/50 border border-gray-700 rounded-lg p-5 border-l-4 ${getThesisAccent(thesis.color)}`}
                  >
                    <div className="flex items-start justify-between mb-3">
                      <h3 className="text-lg font-semibold text-white">{thesis.title}</h3>
                      <div className="flex items-center gap-2">
                        <span className={`px-2 py-1 rounded text-xs border ${getConfidenceColor(thesis.confidence)}`}>
                          {thesis.confidence}
                        </span>
                        <span className="text-xs text-gray-500">{thesis.timeframe}</span>
                      </div>
                    </div>
                    
                    <p className="text-gray-300 mb-4">{thesis.claim}</p>
                    
                    <div className="mb-4">
                      <span className="text-xs font-semibold text-gray-500 uppercase tracking-wide">EVIDENCE</span>
                      <div className="flex flex-wrap gap-2 mt-2">
                        {thesis.evidence.map((item, idx) => (
                          <span 
                            key={idx}
                            className="px-2 py-1 bg-gray-700/50 text-gray-300 rounded text-xs"
                          >
                            {item}
                          </span>
                        ))}
                      </div>
                    </div>
                    <div className="text-sm text-gray-400 border-t border-gray-700 pt-3">
                      <strong className="text-gray-300">Implication: </strong>
                      {thesis.implication}
                    </div>
                  </div>
                ))}
              </div>

              {/* Synthesis */}
              <div className="mt-6 bg-gray-800/30 border border-gray-700 rounded-lg p-4">
                <h3 className="text-sm font-semibold text-gray-400 mb-3">How These Connect</h3>
                <div className="space-y-2 text-sm">
                  <div className="text-gray-300">
                    <span className="text-blue-400">Platform convergence</span> → forces standalone vendors to → 
                    <span className="text-purple-400"> differentiate or be acquired</span>
                  </div>
                  <div className="text-gray-300">
                    <span className="text-purple-400">NHI explosion</span> → expands attack surface → 
                    <span className="text-orange-400"> human-only IAM becomes obsolete</span>
                  </div>
                  <div className="text-gray-300">
                    <span className="text-orange-400">Passwordless mainstream</span> → shifts authentication model → 
                    <span className="text-green-400"> password-centric IAM faces friction</span>
                  </div>
                </div>
              </div>
            </section>

            {/* Recommendations */}
            <section className="bg-gray-900/30 border border-gray-800 rounded-lg p-6">
              <h2 className="text-xl font-semibold mb-4 flex items-center gap-2">
                <span>🎯</span> Recommendations
              </h2>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {/* For Buyers */}
                <div className="bg-gray-800/50 rounded-lg p-4">
                  <div className="flex items-center gap-2 mb-3">
                    <span className="w-8 h-8 rounded-full bg-blue-600 flex items-center justify-center text-white font-bold">B</span>
                    <span className="font-semibold text-white">For Enterprise Buyers</span>
                  </div>
                  <ul className="space-y-2 text-sm text-gray-300">
                    <li className="flex items-start gap-2">
                      <span className="text-blue-400">•</span>
                      <span>Evaluate IAM as platform capability, not point solution</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-blue-400">•</span>
                      <span>Require NHI coverage—human-only IAM is obsolete</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-blue-400">•</span>
                      <span>Plan passwordless roadmap—passkeys are table stakes by 2026</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-blue-400">•</span>
                      <span>Consolidate vendors—85% cite cost savings as driver</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-blue-400">•</span>
                      <span>Evaluate vendor acquisition risk in selection criteria</span>
                    </li>
                  </ul>
                </div>

                {/* For Vendors */}
                <div className="bg-gray-800/50 rounded-lg p-4">
                  <div className="flex items-center gap-2 mb-3">
                    <span className="w-8 h-8 rounded-full bg-purple-600 flex items-center justify-center text-white font-bold">V</span>
                    <span className="font-semibold text-white">For Vendors / Product Leaders</span>
                  </div>
                  <ul className="space-y-2 text-sm text-gray-300">
                    <li className="flex items-start gap-2">
                      <span className="text-purple-400">•</span>
                      <span>Build NHI roadmap—fastest-growing segment (40%+ CAGR)</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-purple-400">•</span>
                      <span>AI features must be on every roadmap (67% cite as critical)</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-purple-400">•</span>
                      <span>Native FIDO2/passkey support is table stakes by 2026</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-purple-400">•</span>
                      <span>Time-to-value is #1 mid-market criteria—target &lt;30 days</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-purple-400">•</span>
                      <span>Decide convergence strategy: build, partner, or acquire</span>
                    </li>
                  </ul>
                </div>
              </div>
            </section>

            {/* Resources */}
            <section className="bg-gray-900/30 border border-gray-800 rounded-lg p-6">
              <h2 className="text-xl font-semibold mb-4 flex items-center gap-2">
                <span>📎</span> Resources
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <a href="#" className="flex items-center gap-3 p-4 bg-gray-800/50 rounded-lg hover:bg-gray-800 transition-all">
                  <span className="text-2xl">📄</span>
                  <div>
                    <div className="font-semibold text-white">Full IAM Strategic Brief</div>
                    <div className="text-sm text-gray-400">Complete SRP analysis (PDF)</div>
                  </div>
                </a>
                <a href="#" className="flex items-center gap-3 p-4 bg-gray-800/50 rounded-lg hover:bg-gray-800 transition-all">
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

export default IAMPage;
