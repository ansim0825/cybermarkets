"use client";

import React, { useState } from 'react';
import { Logo } from '@/components/Logo';

const EmailSecurityPage = () => {
  const [activeSection, setActiveSection] = useState('overview');

  // Network & Edge sub-segments
  const subSegments = [
    { id: 'email-security', name: 'Email Security', active: true, href: '/pillars/network-edge/email-security' },
    { id: 'sase', name: 'SASE/SSE', active: false, href: '#' },
    { id: 'ngfw', name: 'Next-Gen Firewall', active: false, href: '#' },
    { id: 'ndr', name: 'NDR', active: false, href: '#' },
    { id: 'ddos', name: 'DDoS Protection', active: false, href: '#' },
    { id: 'waf', name: 'WAF', active: false, href: '#' },
    { id: 'dns', name: 'DNS Security', active: false, href: '#' },
    { id: 'sdwan', name: 'SD-WAN', active: false, href: '#' },
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
    { name: 'Data & Application', primary: false },
    { name: 'Identity', primary: false },
    { name: 'SecOps', primary: false },
  ];

  const keyInsights = [
    { stat: '$4.8M', label: 'Average cost per phishing breach' },
    { stat: '5 min', label: 'GenAI-enabled attack creation (was 16 hrs)' },
    { stat: '51%', label: 'SOC teams reporting alert fatigue' },
    { stat: '66%', label: 'YoY increase in vendor email compromise' },
  ];

  const marketSizing = [
    { source: 'Fortune Business Insights', val2024: '$4.68B', val2025: '$5.17B', projection: '$10.68B (2032)', cagr: '10.9%' },
    { source: 'Mordor Intelligence', val2024: '$4.56B', val2025: '$5.23B', projection: '$9.55B (2030)', cagr: '12.78%' },
  ];

  const marketSubSegments = [
    'Secure Email Gateway (SEG)',
    'Integrated Cloud Email Security (ICES)',
    'Email Data Loss Prevention',
    'Email Authentication (DMARC)',
    'Security Awareness Training',
    'Email Archive & Compliance',
  ];

  // Updated competitors list - Top 15 Vendors by Consensus (2025)
  // Research status: 'complete' | 'in-progress' | 'pending'
  const competitors = [
    { 
      name: 'Proofpoint', 
      product: 'Proofpoint Email Protection',
      position: 'Execution Leader', 
      focus: 'Highest in Ability to Execute in 2025 Gartner MQ. PE-owned (Thoma Bravo), dominant in enterprise. 45K+ customers. Acquired Tessian for AI capabilities.',
      status: 'in-progress',
      href: '/pillars/network-edge/email-security/companies/proofpoint'
    },
    { 
      name: 'Microsoft', 
      product: 'Defender for Office 365',
      position: 'Platform Incumbent', 
      focus: 'Named 2025 MQ Leader. The "good enough" baseline every third-party must justify displacing. Bundled with E3/E5.',
      status: 'in-progress',
      href: '/pillars/network-edge/email-security/companies/microsoft'
    },
    { 
      name: 'Abnormal', 
      product: 'Abnormal Email Security',
      position: 'Vision Leader', 
      focus: 'Furthest on Completeness of Vision axis in 2025 MQ. API-first, behavioral AI architecture. Series D, $5.1B+ valuation.',
      status: 'in-progress',
      href: '/pillars/network-edge/email-security/companies/abnormal'
    },
    { 
      name: 'Mimecast', 
      product: 'Advanced Email Security',
      position: 'Full-Stack Defender', 
      focus: '2025 MQ Leader. Gateway + API hybrid. Strong in archiving and compliance. 42K+ customers. Human Risk Management pivot.',
      status: 'in-progress',
      href: '/pillars/network-edge/email-security/companies/mimecast'
    },
    { 
      name: 'Check Point', 
      product: 'Harmony Email & Collaboration',
      position: 'Cloud-Native Challenger', 
      focus: 'Named 2025 MQ Leader post-Avanan acquisition. API-first architecture with broader platform integration.',
      status: 'in-progress',
      href: '/pillars/network-edge/email-security/companies/checkpoint'
    },
    { 
      name: 'Cisco', 
      product: 'Cisco Secure Email',
      position: 'Platform Player', 
      focus: 'Armorblox acquisition (2023) added AI/ML. Integration with broader Cisco security stack (XDR, Talos TI).',
      status: 'in-progress',
      href: '/pillars/network-edge/email-security/companies/cisco'
    },
    { 
      name: 'Darktrace', 
      product: 'Darktrace/Email',
      position: 'AI Innovator', 
      focus: 'Named 2025 MQ Leader. Self-learning AI, behavioral detection. Strong EMEA presence.',
      status: 'in-progress',
      href: '/pillars/network-edge/email-security/companies/darktrace'
    },
    { 
      name: 'Trend Micro', 
      product: 'Vision One - Email & Collaboration Security',
      position: 'Platform Leader', 
      focus: '2024/2025 MQ Leader. Vision One XDR/ASRM platform integration. $1.87B revenue. 19 consecutive years Gartner EPP Leader.',
      status: 'in-progress',
      href: '/pillars/network-edge/email-security/companies/trendmicro'
    },
    { 
      name: 'Fortinet', 
      product: 'FortiMail + Workspace Security',
      position: 'Security Fabric Challenger', 
      focus: '2025 MQ Challenger. Perception Point acquisition (Dec 2024). Most deployment flexibility. $5.96B revenue, Security Fabric integration.',
      status: 'in-progress',
      href: '/pillars/network-edge/email-security/companies/fortinet'
    },
    { 
      name: 'IRONSCALES', 
      product: 'IRONSCALES Platform',
      position: 'Mid-Market Specialist', 
      focus: 'Named Visionary in 2025 MQ. API-based, strong SAT integration. Agentic AI focus.',
      status: 'in-progress',
      href: '/pillars/network-edge/email-security/companies/ironscales'
    },
    { 
      name: 'Barracuda', 
      product: 'Barracuda Email Protection',
      position: 'SMB Champion', 
      focus: 'Named Visionary in 2025 MQ (2nd consecutive year). 200K+ customers. AI-powered, multilayered defense. Strong MSP/channel presence. Price-competitive.',
      status: 'in-progress',
      href: '/pillars/network-edge/email-security/companies/barracuda'
    },
    { 
      name: 'Sophos', 
      product: 'Sophos Email',
      position: 'Platform Security Player', 
      focus: '4.8★ Gartner Peer Insights. Part of Sophos Central ecosystem. 600K+ orgs globally. Acquired Secureworks (Feb 2025). Strong SMB/mid-market focus.',
      status: 'in-progress',
      href: '/pillars/network-edge/email-security/companies/sophos'
    },
    { 
      name: 'KnowBe4', 
      product: 'Egress Intelligent Email Security',
      position: 'Human Risk Integrator', 
      focus: 'Named 2024 MQ Leader. Acquired by KnowBe4 (2024). Unique inbound + outbound DLP focus. SAT integration play. Adaptive AI-enabled platform.',
      status: 'in-progress',
      href: '/pillars/network-edge/email-security/companies/knowbe4'
    },
    { 
      name: 'Material Security', 
      product: 'Material Security Platform',
      position: 'Post-Delivery Innovator', 
      focus: '$1.1B unicorn valuation. $166M raised. Zero-trust approach to email. Protects data even after delivery. Focus on M365 + Google Workspace. Founded by ex-Dropbox engineers.',
      status: 'in-progress',
      href: '/pillars/network-edge/email-security/companies/materialsecurity'
    },
    { 
      name: 'Cloudflare', 
      product: 'Area 1 Email Security',
      position: 'Infrastructure Challenger', 
      focus: 'Acquired Area 1 ($162M, 2022). Preemptive threat detection via DNS/network-level signals. Part of broader SASE/Zero Trust platform. Unique infrastructure vantage point.',
      status: 'in-progress',
      href: '/pillars/network-edge/email-security/companies/cloudflare'
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
    { name: 'SEG Sunset, ICES Sunrise', description: '80% consolidating around Microsoft + ICES. API-first wins.' },
    { name: 'AI Arms Race Escalates', description: '60% phishing success rate with GenAI. Behavioral AI is the defense.' },
    { name: 'Email & Identity Convergence', description: 'Credential phishing up 703%. ATO detection is table stakes.' },
    { name: 'Human Risk Management Emergence', description: 'Unified platforms correlating email, identity, and training.' },
    { name: 'Market Consolidation', description: 'PE activity, platformization mandate, Microsoft bundling pressure.' },
  ];

  const hypePositions = [
    { tech: 'Secure Email Gateway (SEG)', position: 'Plateau of Productivity', status: 'declining' },
    { tech: 'Integrated Cloud Email Security', position: 'Slope of Enlightenment', status: 'rising' },
    { tech: 'Behavioral AI / Social Graph', position: 'Peak of Inflated Expectations', status: 'hot' },
    { tech: 'Agentic AI (Auto-Remediation)', position: 'Innovation Trigger', status: 'emerging' },
    { tech: 'Human Risk Management', position: 'Climbing toward Peak', status: 'rising' },
  ];

  const cisoJobs = [
    { job: 'Prevent financial loss from email-based fraud', metric: '$0 BEC losses; blocked wire transfer attempts' },
    { job: 'Demonstrate security ROI to the board', metric: 'Risk reduction metrics; cost per threat blocked' },
    { job: 'Reduce vendor sprawl without losing capability', metric: 'Fewer tools; maintained or improved detection' },
    { job: 'Get ahead of AI-powered attacks', metric: 'AI-generated phishing catch rate' },
  ];

  const socJobs = [
    { job: 'Quickly determine if alert is real or false positive', metric: 'Triage time per alert; FP rate' },
    { job: 'Remediate threats before damage occurs', metric: 'MTTR; click-to-clawback time' },
    { job: 'Not get overwhelmed by alert volume', metric: 'Alerts per analyst per day; burnout rate' },
  ];

  const tableStakes = [
    'M365/Google Workspace integration',
    'Phishing & spam detection',
    'URL rewriting & time-of-click analysis',
    'Attachment sandboxing',
    'SPF/DKIM/DMARC authentication',
    'Quarantine management',
    'Basic reporting & dashboards',
    'API deployment option',
  ];

  const differentiators = [
    { name: 'Behavioral AI / Social Graph', description: '"Does this behavior make sense?" vs. signature matching' },
    { name: 'Account Takeover Detection', description: 'Identity-email convergence, impossible travel detection' },
    { name: 'Vendor Email Compromise (VEC)', description: 'Supply chain attack detection—up 66% YoY' },
    { name: 'Autonomous Response', description: '<10 second remediation, SOC force multiplier' },
    { name: 'Human Risk Scoring', description: 'User-level risk feeding broader security programs' },
    { name: 'Multi-Channel Protection', description: 'Teams, Slack, Zoom—beyond the inbox' },
    { name: 'Detection Explainability', description: 'Clear "why flagged" context for analyst trust' },
  ];

  const roiMetrics = [
    { metric: 'Phishing breach cost', value: '$4.8M average' },
    { metric: 'AI/automation savings', value: '$2.2M per breach' },
    { metric: 'Breach lifecycle reduction', value: '80 days faster with AI' },
    { metric: 'BEC loss prevention', value: '$24,586 avg wire transfer blocked' },
  ];

  const theses = [
    {
      id: 1,
      title: 'The Architecture War is Over—API Wins',
      timeframe: '2025-2027',
      confidence: 'High',
      color: 'green',
      claim: 'By 2027, API-first ICES will capture 70%+ of new deployments. SEG becomes legacy infrastructure.',
      evidence: ['80% consolidating around Microsoft + ICES', 'ICES growing at 13.9% CAGR vs 10.9% overall', 'SEG share declining YoY'],
      implication: 'New deployments should default to ICES. Evaluate SEG renewals critically.',
    },
    {
      id: 2,
      title: 'Detection Commoditizes—Identity is the New Moat',
      timeframe: '2025-2028',
      confidence: 'Medium-High',
      color: 'purple',
      claim: 'Behavioral AI commoditizes within 24 months. The next moat is identity convergence and cross-channel risk correlation.',
      evidence: ['Credential phishing up 703%', 'Vishing up 449%', '43% of CISOs prioritizing IAM/Zero Trust'],
      implication: 'Evaluate vendors on identity integration depth, not just detection efficacy.',
    },
    {
      id: 3,
      title: 'Email Security Becomes a Feature, Not a Product',
      timeframe: '2026-2028',
      confidence: 'Medium',
      color: 'orange',
      claim: 'By 2028, standalone email security is absorbed into Human Risk Management platforms.',
      evidence: ['75% of firms reducing vendors', '6 in 10 CISOs list consolidation as #1', 'Mimecast, Proofpoint, KnowBe4 all pivoting to HRM'],
      implication: 'Evaluate email as part of broader human risk strategy, not standalone purchase.',
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
        <div className="max-w-6xl mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <a href="/" className="flex items-center">
                <Logo size="default" />
              </a>
              <span className="text-gray-600 hidden sm:inline">/</span>
              <span className="text-gray-400 hidden sm:inline">Network & Edge</span>
            </div>
            <div className="flex items-center gap-6 text-sm">
              <a href="/#pillars" className="text-gray-300 hover:text-white">Pillars</a>
              <a href="#theses" className="text-gray-300 hover:text-white">Theses</a>
              <a href="/#about" className="text-gray-400 hover:text-white text-xs">About</a>
            </div>
          </div>
        </div>
      </nav>

      <div className="max-w-6xl mx-auto px-6 py-8">
        
        {/* Sub-segment Navigation */}
        <div className="mb-6">
          <div className="flex items-center gap-2 flex-wrap">
            {subSegments.map((seg) => (
              <a
                key={seg.id}
                href={seg.href}
                className={`text-xs px-3 py-1.5 rounded-full border transition-all ${
                  seg.active 
                    ? 'bg-green-900/50 text-green-400 border-green-700' 
                    : 'bg-gray-800/50 text-gray-500 border-gray-700 hover:text-gray-400 hover:border-gray-600'
                }`}
              >
                {seg.active && <span className="mr-1">●</span>}
                {seg.name}
              </a>
            ))}
          </div>
          
          {/* Related pillars */}
          <div className="flex items-center gap-2 mt-3">
            <span className="text-xs text-gray-600">Also touches:</span>
            {relatedPillars.map((pillar, idx) => (
              <span 
                key={idx}
                className="text-xs px-2 py-0.5 rounded bg-gray-800/50 text-gray-500 border border-gray-800"
              >
                {pillar.name}
              </span>
            ))}
          </div>
        </div>
        
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-4xl font-bold mb-3">Email Security</h1>
          <p className="text-xl text-gray-400 mb-4">
            The $6B+ market where behavioral AI is disrupting 20 years of gateway architecture
          </p>
          
          <div className="flex items-center gap-4 text-sm text-gray-500">
            <span>Last updated: January 2026</span>
            <span>•</span>
            <span>Methodology: SRP Framework</span>
            <span>•</span>
            <span className="text-green-500">● Active research</span>
          </div>
        </div>

        {/* Key Stats Bar */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
          {keyInsights.map((insight, idx) => (
            <div key={idx} className="bg-gray-900 rounded-xl p-4 border border-gray-800">
              <div className="text-2xl font-bold text-white mb-1">{insight.stat}</div>
              <div className="text-xs text-gray-400">{insight.label}</div>
            </div>
          ))}
        </div>

        {/* Main Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          
          {/* Left Sidebar - SRP Navigation */}
          <div className="lg:col-span-1">
            <div className="sticky top-24">
              <div className="bg-gray-900 rounded-xl border border-gray-800 p-4 mb-6">
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

              {/* CTA to Platform Vision */}
              <div className="bg-gradient-to-br from-purple-900/50 to-blue-900/50 rounded-xl border border-purple-800 p-4">
                <div className="text-sm font-semibold mb-2 flex items-center gap-2">
                  <span>🚀</span> See It In Action
                </div>
                <p className="text-xs text-gray-400 mb-3">
                  Interactive prototype showing the convergence of email security, identity, and employee risk.
                </p>
                <a 
                  href="https://hologramai.tech/platform" 
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block w-full text-center px-4 py-2 bg-purple-600 hover:bg-purple-500 rounded-lg text-sm font-medium transition-colors"
                >
                  View Platform Vision →
                </a>
              </div>
            </div>
          </div>

          {/* Main Content Area */}
          <div className="lg:col-span-3 space-y-8">
            
            {/* Overview Section */}
            <section id="overview" className="bg-gray-900 rounded-xl border border-gray-800 p-6">
              <h2 className="text-xl font-semibold mb-4 flex items-center gap-2">
                <span>📋</span> Overview
              </h2>
              <div className="prose prose-invert max-w-none">
                <p className="text-gray-300 mb-4">
                  Email remains the #1 attack vector, responsible for over 90% of successful breaches. 
                  The market has evolved from simple spam filtering to sophisticated behavioral analysis 
                  that understands human communication patterns, organizational relationships, and 
                  real-time threat intelligence.
                </p>
                <p className="text-gray-300 mb-4">
                  The architectural debate is settled: API-native deployment has won over traditional 
                  Secure Email Gateways (SEGs). This enables post-delivery detection, remediation 
                  without mail flow disruption, and richer behavioral signals.
                </p>
                <div className="bg-gray-800 rounded-lg p-4 border border-gray-700">
                  <h4 className="font-medium text-white mb-2">The Convergence Thesis</h4>
                  <p className="text-sm text-gray-400">
                    Email security is colliding with Identity (account takeover, ITDR), 
                    Security Awareness (human risk scoring), and SecOps (XDR telemetry). 
                    The winners will be platforms that unify these signals around the human—not 
                    point solutions defending a single channel.
                  </p>
                </div>
              </div>
            </section>

            {/* Market Structure Section */}
            <section id="structure" className="bg-gray-900 rounded-xl border border-gray-800 p-6">
              <h2 className="text-xl font-semibold mb-4 flex items-center gap-2">
                <span>🏗️</span> Market Structure
              </h2>
              
              {/* Market Sizing */}
              <div className="mb-6">
                <h3 className="text-sm font-semibold text-gray-400 mb-3">Market Size & Growth</h3>
                <div className="bg-gray-800 rounded-lg overflow-hidden">
                  <table className="w-full text-sm">
                    <thead>
                      <tr className="border-b border-gray-700">
                        <th className="text-left p-3 text-gray-400 font-medium">Source</th>
                        <th className="text-left p-3 text-gray-400 font-medium">2024</th>
                        <th className="text-left p-3 text-gray-400 font-medium">2025</th>
                        <th className="text-left p-3 text-gray-400 font-medium">Projection</th>
                        <th className="text-left p-3 text-gray-400 font-medium">CAGR</th>
                      </tr>
                    </thead>
                    <tbody>
                      {marketSizing.map((row, idx) => (
                        <tr key={idx} className="border-b border-gray-700/50 last:border-0">
                          <td className="p-3 text-gray-300">{row.source}</td>
                          <td className="p-3 text-gray-400">{row.val2024}</td>
                          <td className="p-3 text-gray-400">{row.val2025}</td>
                          <td className="p-3 text-gray-400">{row.projection}</td>
                          <td className="p-3 text-green-400">{row.cagr}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>

              {/* Sub-segments */}
              <div className="mb-6">
                <h3 className="text-sm font-semibold text-gray-400 mb-3">Email Security Sub-Segments</h3>
                <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
                  {marketSubSegments.map((seg, idx) => (
                    <div key={idx} className="px-3 py-2 bg-gray-800 rounded-lg text-sm text-gray-300">
                      {seg}
                    </div>
                  ))}
                </div>
              </div>

              {/* Competitive Landscape - Updated with 15 vendors */}
              <div>
                <div className="flex items-center justify-between mb-3">
                  <h3 className="text-sm font-semibold text-gray-400">Top 15 Vendors by Consensus (2025)</h3>
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
                  {competitors.map((comp, idx) => {
                    const statusStyle = getStatusStyle(comp.status);
                    return (
                      <a 
                        key={idx} 
                        href={comp.href}
                        className="flex items-center justify-between p-3 bg-gray-800 rounded-lg hover:bg-gray-750 hover:border-gray-600 border border-transparent transition-all group"
                      >
                        <div className="flex-1 min-w-0">
                          <div className="flex items-center gap-2">
                            <span className="font-medium text-white group-hover:text-blue-400 transition-colors">{comp.name}</span>
                            <span className="text-xs text-gray-600">•</span>
                            <span className="text-xs text-gray-500 truncate">{comp.product}</span>
                          </div>
                          <div className="text-xs text-gray-500 mt-1 line-clamp-2">{comp.focus}</div>
                        </div>
                        <div className="flex items-center gap-3 ml-4">
                          <span className="text-xs px-2 py-1 bg-gray-700 rounded text-gray-400 whitespace-nowrap">
                            {comp.position}
                          </span>
                          <div className={`flex items-center gap-1.5 px-2 py-1 rounded text-xs ${statusStyle.bg}`}>
                            <span className={`w-2 h-2 rounded-full ${statusStyle.dot}`}></span>
                            <span className={statusStyle.text}>{statusStyle.label}</span>
                          </div>
                          <svg className="w-4 h-4 text-gray-600 group-hover:text-blue-400 transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                          </svg>
                        </div>
                      </a>
                    );
                  })}
                </div>
              </div>
            </section>

            {/* Market Dynamics Section */}
            <section id="motion" className="bg-gray-900 rounded-xl border border-gray-800 p-6">
              <h2 className="text-xl font-semibold mb-4 flex items-center gap-2">
                <span>📈</span> Market Dynamics
              </h2>

              {/* Hype Cycle */}
              <div className="mb-6">
                <h3 className="text-sm font-semibold text-gray-400 mb-3">Hype Cycle Positioning (2025)</h3>
                <div className="space-y-2">
                  {hypePositions.map((item, idx) => (
                    <div key={idx} className="flex items-center justify-between p-3 bg-gray-800 rounded-lg">
                      <span className="text-gray-300 text-sm">{item.tech}</span>
                      <div className="flex items-center gap-2">
                        <span className={`w-2 h-2 rounded-full ${
                          item.status === 'hot' ? 'bg-red-500' :
                          item.status === 'rising' ? 'bg-green-500' :
                          item.status === 'declining' ? 'bg-yellow-500' :
                          'bg-blue-500'
                        }`}></span>
                        <span className="text-xs px-2 py-1 bg-gray-700 rounded text-gray-400">{item.position}</span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Major Trends */}
              <div>
                <h3 className="text-sm font-semibold text-gray-400 mb-3">5 Major Trends for 2025-2026</h3>
                <div className="space-y-3">
                  {trends.map((trend, idx) => (
                    <div key={idx} className="p-3 bg-gray-800 rounded-lg border-l-2 border-blue-500">
                      <div className="font-medium text-white text-sm">{trend.name}</div>
                      <div className="text-xs text-gray-400 mt-1">{trend.description}</div>
                    </div>
                  ))}
                </div>
              </div>
            </section>

            {/* Stakeholders Section */}
            <section id="stakeholders" className="bg-gray-900 rounded-xl border border-gray-800 p-6">
              <h2 className="text-xl font-semibold mb-4 flex items-center gap-2">
                <span>👥</span> Stakeholders
              </h2>

              {/* CISO JTBD */}
              <div className="mb-6">
                <h3 className="text-sm font-semibold text-gray-400 mb-3">CISO Jobs To Be Done</h3>
                <div className="bg-gray-800 rounded-lg overflow-hidden">
                  <table className="w-full text-sm">
                    <thead>
                      <tr className="border-b border-gray-700">
                        <th className="text-left p-3 text-gray-400 font-medium">Job Statement</th>
                        <th className="text-left p-3 text-gray-400 font-medium">Success Metric</th>
                      </tr>
                    </thead>
                    <tbody>
                      {cisoJobs.map((row, idx) => (
                        <tr key={idx} className="border-b border-gray-700/50 last:border-0">
                          <td className="p-3 text-gray-300">{row.job}</td>
                          <td className="p-3 text-gray-400 text-xs">{row.metric}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>

              {/* SOC Analyst JTBD */}
              <div className="mb-6">
                <h3 className="text-sm font-semibold text-gray-400 mb-3">SOC Analyst Jobs To Be Done</h3>
                <div className="bg-gray-800 rounded-lg overflow-hidden">
                  <table className="w-full text-sm">
                    <thead>
                      <tr className="border-b border-gray-700">
                        <th className="text-left p-3 text-gray-400 font-medium">Job Statement</th>
                        <th className="text-left p-3 text-gray-400 font-medium">Success Metric</th>
                      </tr>
                    </thead>
                    <tbody>
                      {socJobs.map((row, idx) => (
                        <tr key={idx} className="border-b border-gray-700/50 last:border-0">
                          <td className="p-3 text-gray-300">{row.job}</td>
                          <td className="p-3 text-gray-400 text-xs">{row.metric}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>

              {/* Key Pain Point */}
              <div className="bg-red-900/20 border border-red-800/50 rounded-lg p-4">
                <h4 className="text-sm font-semibold text-red-400 mb-2">The Core Pain</h4>
                <p className="text-sm text-gray-300">
                  88% of CISOs report experiencing a successful email attack in the last quarter. 
                  Despite this, investment and innovation levels are not matching the threat evolution.
                  SOC teams are overwhelmed: 51% report alert fatigue, 62% of alerts go entirely ignored.
                </p>
              </div>
            </section>

            {/* Economics Section */}
            <section id="economics" className="bg-gray-900 rounded-xl border border-gray-800 p-6">
              <h2 className="text-xl font-semibold mb-4 flex items-center gap-2">
                <span>💰</span> Economics & ROI
              </h2>

              {/* ROI Metrics */}
              <div className="mb-6">
                <h3 className="text-sm font-semibold text-gray-400 mb-3">The Cost of Getting It Wrong</h3>
                <div className="grid grid-cols-2 gap-4">
                  {roiMetrics.map((item, idx) => (
                    <div key={idx} className="bg-gray-800 rounded-lg p-4">
                      <div className="text-lg font-bold text-white">{item.value}</div>
                      <div className="text-xs text-gray-400">{item.metric}</div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Pricing Model */}
              <div className="mb-6">
                <h3 className="text-sm font-semibold text-gray-400 mb-3">Dominant Pricing Model</h3>
                <div className="bg-gray-800 rounded-lg p-4">
                  <p className="text-sm text-gray-300 mb-3">
                    <strong className="text-white">Per-user/per-seat</strong> pricing dominates (90%+ of market). 
                    Enterprise ranges from $25-70/user/year for full-suite protection.
                  </p>
                  <p className="text-xs text-gray-400">
                    List prices are starting points. Enterprise buyers routinely achieve 15-40% discounts 
                    through competitive bake-offs, multi-year commitments, and bundle negotiation.
                  </p>
                </div>
              </div>

              {/* ROI Calculation */}
              <div className="bg-green-900/20 border border-green-800/50 rounded-lg p-4">
                <h4 className="text-sm font-semibold text-green-400 mb-2">Sample ROI (1,000 Users)</h4>
                <div className="grid grid-cols-2 gap-4 text-sm">
                  <div>
                    <div className="text-gray-400">Investment</div>
                    <div className="text-white font-medium">$35,000/year</div>
                  </div>
                  <div>
                    <div className="text-gray-400">Value Protected</div>
                    <div className="text-green-400 font-medium">$384,000+/year</div>
                  </div>
                </div>
                <p className="text-xs text-gray-400 mt-3">
                  Based on: BEC attempts blocked, analyst time saved, breach probability reduction, insurance premium reduction.
                </p>
              </div>
            </section>

            {/* PM Strategy Section */}
            <section id="product" className="bg-gray-900 rounded-xl border border-gray-800 p-6">
              <h2 className="text-xl font-semibold mb-4 flex items-center gap-2">
                <span>🎯</span> PM Strategic Elements
              </h2>
              
              {/* Table Stakes */}
              <div className="mb-6">
                <h3 className="text-sm font-semibold text-gray-400 mb-3">Table Stakes (Minimum Viable Feature Set)</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
                  {tableStakes.map((feature, idx) => (
                    <div key={idx} className="flex items-center gap-2 text-sm text-gray-300">
                      <span className="text-green-500">✓</span>
                      {feature}
                    </div>
                  ))}
                </div>
                <p className="text-xs text-gray-500 mt-3">
                  Missing any of these = immediate RFP disqualification. These are no longer differentiators.
                </p>
              </div>

              {/* Differentiators */}
              <div className="mb-6">
                <h3 className="text-sm font-semibold text-gray-400 mb-3">Key Differentiators (What Wins Deals)</h3>
                <div className="space-y-3">
                  {differentiators.map((diff, idx) => (
                    <div key={idx} className="p-3 bg-gray-800 rounded-lg border-l-2 border-blue-500">
                      <div className="font-medium text-white text-sm">{diff.name}</div>
                      <div className="text-xs text-gray-400">{diff.description}</div>
                    </div>
                  ))}
                </div>
              </div>

              {/* If I'm a PM Here Box */}
              <div className="bg-gradient-to-br from-blue-900/30 to-purple-900/30 rounded-xl p-6 border border-blue-800">
                <h3 className="font-semibold text-white mb-4 flex items-center gap-2">
                  <span>💡</span> If I am a PM Here, I Need to Know...
                </h3>
                <div className="space-y-3 text-sm">
                  <div className="flex gap-3">
                    <span className="text-blue-400 font-bold">1.</span>
                    <span className="text-gray-300">Microsoft Defender is the baseline. Your value prop is incremental detection—what did Defender miss?</span>
                  </div>
                  <div className="flex gap-3">
                    <span className="text-blue-400 font-bold">2.</span>
                    <span className="text-gray-300">63% of orgs use 2+ email security vendors. Position as the behavioral complement, not rip-and-replace.</span>
                  </div>
                  <div className="flex gap-3">
                    <span className="text-blue-400 font-bold">3.</span>
                    <span className="text-gray-300">VEC (supply chain email attacks) is up 66% YoY and under-addressed. High-value opportunity.</span>
                  </div>
                  <div className="flex gap-3">
                    <span className="text-blue-400 font-bold">4.</span>
                    <span className="text-gray-300">XDR is absorbing SIEM/SOAR. Email telemetry integration determines your platform relevance.</span>
                  </div>
                  <div className="flex gap-3">
                    <span className="text-blue-400 font-bold">5.</span>
                    <span className="text-gray-300">Human Risk Management is the consolidation play—email + awareness + identity = employee risk score.</span>
                  </div>
                </div>
              </div>
            </section>

            {/* Strategic Theses Section */}
            <section id="theses" className="bg-gray-900 rounded-xl border border-gray-800 p-6">
              <h2 className="text-xl font-semibold mb-2 flex items-center gap-2">
                <span>🔮</span> Strategic Theses
              </h2>
              <p className="text-gray-400 text-sm mb-6">
                Three structural shifts reshaping this market. Not incremental changes—fundamental rewirings of where value is created and captured.
              </p>

              <div className="space-y-4">
                {theses.map((thesis) => (
                  <div 
                    key={thesis.id}
                    className={`bg-gray-800 rounded-lg p-4 border-l-4 ${getThesisAccent(thesis.color)}`}
                  >
                    <div className="flex items-start justify-between mb-2">
                      <h3 className="font-semibold text-white">{thesis.title}</h3>
                      <div className="flex items-center gap-2 ml-3">
                        <span className={`text-xs px-2 py-0.5 rounded-full border ${getConfidenceColor(thesis.confidence)}`}>
                          {thesis.confidence}
                        </span>
                        <span className="text-xs text-gray-500">{thesis.timeframe}</span>
                      </div>
                    </div>
                    
                    <p className="text-sm text-gray-300 mb-3">{thesis.claim}</p>
                    
                    <div className="mb-3">
                      <div className="text-xs font-semibold text-gray-500 mb-1">EVIDENCE</div>
                      <div className="flex flex-wrap gap-2">
                        {thesis.evidence.map((item, idx) => (
                          <span key={idx} className="text-xs px-2 py-1 bg-gray-700 rounded text-gray-300">
                            {item}
                          </span>
                        ))}
                      </div>
                    </div>

                    <div className="text-xs text-gray-400 border-t border-gray-700 pt-3">
                      <span className="font-semibold text-gray-300">Implication: </span>
                      {thesis.implication}
                    </div>
                  </div>
                ))}
              </div>

              {/* Synthesis */}
              <div className="mt-6 bg-gray-800/50 rounded-lg p-4 border border-gray-700">
                <h4 className="text-sm font-semibold text-gray-300 mb-2">How These Connect</h4>
                <div className="font-mono text-xs text-gray-400 space-y-1">
                  <div>Architecture (API) → <span className="text-blue-400">enables</span> → Detection at scale</div>
                  <div>Detection commoditizes → <span className="text-purple-400">value shifts to</span> → Identity convergence</div>
                  <div>Identity convergence → <span className="text-orange-400">feeds</span> → Human Risk Management platforms</div>
                </div>
              </div>
            </section>

            {/* Downloads / Resources */}
            <section className="bg-gray-900 rounded-xl border border-gray-800 p-6">
              <h2 className="text-xl font-semibold mb-4 flex items-center gap-2">
                <span>📎</span> Resources
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <a href="#" className="flex items-center gap-3 p-4 bg-gray-800 hover:bg-gray-700 rounded-lg transition-colors">
                  <span className="text-2xl">📄</span>
                  <div>
                    <div className="font-medium">Full Strategic Brief</div>
                    <div className="text-xs text-gray-500">Complete SRP analysis (PDF)</div>
                  </div>
                </a>
                <a 
                  href="https://hologramai.tech/platform" 
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 p-4 bg-gray-800 hover:bg-gray-700 rounded-lg transition-colors"
                >
                  <span className="text-2xl">🚀</span>
                  <div>
                    <div className="font-medium">Platform Vision Prototype</div>
                    <div className="text-xs text-gray-500">Interactive unified security concept</div>
                  </div>
                </a>
              </div>
            </section>

          </div>
        </div>

        {/* Footer */}
        <footer className="mt-12 pt-8 border-t border-gray-800 text-center text-gray-500 text-sm">
          <p>Analysis by Andy Simko • CISSP • GPEN • CISA • GSNA • HCSFP • PMC-Level III</p>
          <p className="mt-1 text-gray-600">15+ years in cybersecurity • Methodology: Systematic Research Process (SRP)</p>
        </footer>
      </div>
    </div>
  );
};

export default EmailSecurityPage;
