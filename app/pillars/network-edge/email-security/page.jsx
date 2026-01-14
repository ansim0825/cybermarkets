"use client";

import React, { useState } from 'react';
import { Logo } from './Logo';

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
    { id: 'vendors', name: 'Vendor Profiles', icon: '🏢' },
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

  // Updated vendor profiles with links and status
  const vendorProfiles = [
    // Leaders
    { 
      name: 'Abnormal Security', 
      position: 'Vision Leader', 
      gartnerQuadrant: 'Leader',
      focus: 'Furthest on MQ vision axis. API-first, behavioral AI. $4B+ valuation.',
      status: 'complete',
      href: '/pillars/network-edge/email-security/abnormal',
      color: 'purple'
    },
    { 
      name: 'Proofpoint', 
      position: 'Execution Leader', 
      gartnerQuadrant: 'Leader',
      focus: 'Highest MQ execution. PE-owned (Thoma Bravo), 45K+ customers. Acquired Tessian.',
      status: 'planned',
      href: '#',
      color: 'blue'
    },
    { 
      name: 'Microsoft', 
      position: 'Platform Incumbent', 
      gartnerQuadrant: 'Leader',
      focus: 'Defender for O365 is the baseline. Bundled with E3/E5. 88% BEC miss rate.',
      status: 'complete',
      href: '/pillars/network-edge/email-security/microsoft',
      color: 'blue'
    },
    { 
      name: 'Mimecast', 
      position: 'Full-Stack Defender', 
      gartnerQuadrant: 'Leader',
      focus: 'Gateway + API hybrid. HRM platform pivot. 42K+ customers.',
      status: 'planned',
      href: '#',
      color: 'blue'
    },
    // Challengers
    { 
      name: 'Trend Micro', 
      position: 'Platform Leader', 
      gartnerQuadrant: 'Leader',
      focus: 'Vision One platform integration. Email + endpoint + cloud correlation. $1.87B revenue.',
      status: 'complete',
      href: '/pillars/network-edge/email-security/trend-micro',
      color: 'red'
    },
    { 
      name: 'Fortinet', 
      position: 'Security Fabric Challenger', 
      gartnerQuadrant: 'Challenger',
      focus: 'FortiMail Workspace Security. Perception Point acquisition. Most deployment flexibility.',
      status: 'complete',
      href: '/pillars/network-edge/email-security/fortinet',
      color: 'orange'
    },
    { 
      name: 'Barracuda', 
      position: 'SMB/MSP Leader', 
      gartnerQuadrant: 'Challenger',
      focus: 'Complete email protection for SMB. MSP-first (280% growth). KKR-owned.',
      status: 'complete',
      href: '/pillars/network-edge/email-security/barracuda',
      color: 'cyan'
    },
    // Visionaries
    { 
      name: 'Check Point', 
      position: 'Cloud-Native Challenger', 
      gartnerQuadrant: 'Visionary',
      focus: 'Post-Avanan acquisition. API-first architecture. Harmony Email.',
      status: 'complete',
      href: '/pillars/network-edge/email-security/check-point',
      color: 'purple'
    },
    { 
      name: 'Darktrace', 
      position: 'AI Innovator', 
      gartnerQuadrant: 'Visionary',
      focus: 'Self-learning AI, behavioral detection. $5.3B Thoma Bravo take-private.',
      status: 'complete',
      href: '/pillars/network-edge/email-security/darktrace',
      color: 'purple'
    },
    { 
      name: 'IRONSCALES', 
      position: 'AI + Human Insights', 
      gartnerQuadrant: 'Visionary',
      focus: '30K+ analyst federation network. Native SAT integration. Price leader.',
      status: 'complete',
      href: '/pillars/network-edge/email-security/ironscales',
      color: 'blue'
    },
    { 
      name: 'KnowBe4', 
      position: 'Human Risk Management', 
      gartnerQuadrant: 'Visionary',
      focus: 'SAT leader transformed to HRM. Egress acquisition. 70K+ SAT customers for cross-sell.',
      status: 'complete',
      href: '/pillars/network-edge/email-security/knowbe4',
      color: 'green'
    },
    // Niche Players / Other
    { 
      name: 'Cisco', 
      position: 'Legacy SEG Transitioning', 
      gartnerQuadrant: 'Niche Player',
      focus: 'Three-product fragmentation. Talos intelligence. Hardware EOL forcing migrations.',
      status: 'complete',
      href: '/pillars/network-edge/email-security/cisco',
      color: 'cyan'
    },
    { 
      name: 'Google', 
      position: 'Platform Incumbent', 
      gartnerQuadrant: 'Niche Player',
      focus: 'The other half of email platforms. 3B+ Gmail users. Education dominance.',
      status: 'complete',
      href: '/pillars/network-edge/email-security/google',
      color: 'green'
    },
    // Emerging / Specialist
    { 
      name: 'Material Security', 
      position: 'Data-Centric Security', 
      gartnerQuadrant: 'Emerging',
      focus: 'Zero trust for email. Post-compromise protection. $1.1B unicorn valuation.',
      status: 'complete',
      href: '/pillars/network-edge/email-security/material-security',
      color: 'blue'
    },
  ];

  const getStatusStyle = (status) => {
    switch (status) {
      case 'complete': return { bg: 'bg-green-900/50', text: 'text-green-400', border: 'border-green-700', label: 'Complete' };
      case 'in-progress': return { bg: 'bg-yellow-900/50', text: 'text-yellow-400', border: 'border-yellow-700', label: 'In Progress' };
      case 'planned': return { bg: 'bg-gray-800', text: 'text-gray-400', border: 'border-gray-700', label: 'Planned' };
      default: return { bg: 'bg-gray-800', text: 'text-gray-500', border: 'border-gray-700', label: 'TBD' };
    }
  };

  const getQuadrantStyle = (quadrant) => {
    switch (quadrant) {
      case 'Leader': return 'bg-green-900/50 text-green-400 border-green-700';
      case 'Challenger': return 'bg-blue-900/50 text-blue-400 border-blue-700';
      case 'Visionary': return 'bg-purple-900/50 text-purple-400 border-purple-700';
      case 'Niche Player': return 'bg-gray-800 text-gray-400 border-gray-700';
      case 'Emerging': return 'bg-cyan-900/50 text-cyan-400 border-cyan-700';
      default: return 'bg-gray-800 text-gray-400 border-gray-700';
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

  // Calculate research stats
  const completeCount = vendorProfiles.filter(v => v.status === 'complete').length;
  const totalCount = vendorProfiles.length;

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
            <span className="text-green-500">● {completeCount}/{totalCount} profiles complete</span>
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
                  href="#" 
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
              <div>
                <h3 className="text-sm font-semibold text-gray-400 mb-3">Email Security Sub-Segments</h3>
                <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
                  {marketSubSegments.map((seg, idx) => (
                    <div key={idx} className="px-3 py-2 bg-gray-800 rounded-lg text-sm text-gray-300">
                      {seg}
                    </div>
                  ))}
                </div>
              </div>
            </section>

            {/* NEW: Vendor Profiles Section */}
            <section id="vendors" className="bg-gray-900 rounded-xl border border-gray-800 p-6">
              <h2 className="text-xl font-semibold mb-2 flex items-center gap-2">
                <span>🏢</span> Vendor Profiles
              </h2>
              <p className="text-gray-400 text-sm mb-4">
                Deep-dive research on {totalCount} email security vendors. Click to view full analysis.
              </p>
              
              {/* Progress indicator */}
              <div className="mb-6 p-4 bg-gray-800 rounded-lg">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-sm text-gray-400">Research Progress</span>
                  <span className="text-sm text-green-400">{completeCount}/{totalCount} complete</span>
                </div>
                <div className="w-full bg-gray-700 rounded-full h-2">
                  <div 
                    className="bg-green-500 h-2 rounded-full transition-all"
                    style={{ width: `${(completeCount / totalCount) * 100}%` }}
                  ></div>
                </div>
              </div>

              {/* Vendor Grid */}
              <div className="space-y-3">
                {vendorProfiles.map((vendor, idx) => {
                  const statusStyle = getStatusStyle(vendor.status);
                  const isClickable = vendor.status === 'complete';
                  
                  const CardContent = (
                    <div className={`flex items-center justify-between p-4 bg-gray-800 rounded-lg border-l-4 ${
                      vendor.color === 'purple' ? 'border-l-purple-500' :
                      vendor.color === 'blue' ? 'border-l-blue-500' :
                      vendor.color === 'green' ? 'border-l-green-500' :
                      vendor.color === 'orange' ? 'border-l-orange-500' :
                      vendor.color === 'red' ? 'border-l-red-500' :
                      vendor.color === 'cyan' ? 'border-l-cyan-500' :
                      'border-l-gray-500'
                    } ${isClickable ? 'hover:bg-gray-700 cursor-pointer' : ''} transition-colors`}>
                      <div className="flex-1">
                        <div className="flex items-center gap-3 mb-1">
                          <span className="font-medium text-white">{vendor.name}</span>
                          <span className={`text-xs px-2 py-0.5 rounded border ${getQuadrantStyle(vendor.gartnerQuadrant)}`}>
                            {vendor.gartnerQuadrant}
                          </span>
                          <span className={`text-xs px-2 py-0.5 rounded border ${statusStyle.bg} ${statusStyle.text} ${statusStyle.border}`}>
                            {statusStyle.label}
                          </span>
                        </div>
                        <div className="text-xs text-gray-400">{vendor.position}</div>
                        <div className="text-xs text-gray-500 mt-1">{vendor.focus}</div>
                      </div>
                      {isClickable && (
                        <div className="ml-4 text-gray-500">
                          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                          </svg>
                        </div>
                      )}
                    </div>
                  );

                  return isClickable ? (
                    <a key={idx} href={vendor.href} className="block">
                      {CardContent}
                    </a>
                  ) : (
                    <div key={idx}>
                      {CardContent}
                    </div>
                  );
                })}
              </div>

              {/* Legend */}
              <div className="mt-6 pt-4 border-t border-gray-700">
                <div className="flex flex-wrap gap-4 text-xs">
                  <div className="flex items-center gap-2">
                    <span className="w-3 h-3 rounded bg-green-900/50 border border-green-700"></span>
                    <span className="text-gray-400">Complete - Click to view</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="w-3 h-3 rounded bg-yellow-900/50 border border-yellow-700"></span>
                    <span className="text-gray-400">In Progress</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="w-3 h-3 rounded bg-gray-800 border border-gray-700"></span>
                    <span className="text-gray-400">Planned</span>
                  </div>
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
                <h4 className="font-medium text-red-400 mb-2">⚠️ Critical Pain Point: Alert Fatigue</h4>
                <p className="text-sm text-gray-300">
                  51% of SOC teams report alert fatigue. Security tools that increase alerts without 
                  improving signal quality create organizational resistance to adoption. The bar for 
                  new tools is demonstrably better SNR, not just "more detection."
                </p>
              </div>
            </section>

            {/* Economics Section */}
            <section id="economics" className="bg-gray-900 rounded-xl border border-gray-800 p-6">
              <h2 className="text-xl font-semibold mb-4 flex items-center gap-2">
                <span>💰</span> Economics & ROI
              </h2>

              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
                {roiMetrics.map((item, idx) => (
                  <div key={idx} className="p-4 bg-gray-800 rounded-lg text-center">
                    <div className="text-lg font-bold text-green-400">{item.value}</div>
                    <div className="text-xs text-gray-400 mt-1">{item.metric}</div>
                  </div>
                ))}
              </div>

              <div className="bg-blue-900/20 border border-blue-800/50 rounded-lg p-4">
                <h4 className="font-medium text-blue-400 mb-2">💡 ROI Positioning for PMs</h4>
                <p className="text-sm text-gray-300">
                  Don't sell detection rates. Sell operational leverage. The winning pitch is: 
                  "Same team size, 10x more coverage" or "Reduce SOC headcount needs by 40%." 
                  CISOs are measured on risk reduction per dollar spent, not threat detection volume.
                </p>
              </div>
            </section>

            {/* PM Strategy Section */}
            <section id="product" className="bg-gray-900 rounded-xl border border-gray-800 p-6">
              <h2 className="text-xl font-semibold mb-4 flex items-center gap-2">
                <span>🎯</span> PM Strategy
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
                <a href="#" className="flex items-center gap-3 p-4 bg-gray-800 hover:bg-gray-700 rounded-lg transition-colors">
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
          <p>Analysis by Andy Simko • CISSP, GPEN, OSIR, OSTH</p>
          <p className="mt-1 text-gray-600">10+ years in cybersecurity • Methodology: Systematic Research Process (SRP)</p>
        </footer>
      </div>
    </div>
  );
};

export default EmailSecurityPage;
