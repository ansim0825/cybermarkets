"use client";

import React, { useState } from 'react';

const EmailSecurityPage = () => {
  const [activeSection, setActiveSection] = useState('overview');

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

  // Updated competitors - all with profiles are "in-progress"
  const competitors = [
    { 
      name: 'Abnormal Security', 
      product: 'Behavioral AI Email Security',
      position: 'Vision Leader', 
      focus: 'Furthest on Completeness of Vision in 2024/2025 MQ. API-native behavioral AI. $5.1B valuation, $200M+ ARR.',
      status: 'in-progress',
      href: '/pillars/network-edge/email-security/companies/abnormal'
    },
    { 
      name: 'Barracuda Networks', 
      product: 'Email Protection + BarracudaONE',
      position: 'SMB Champion', 
      focus: 'Gartner Visionary 2024/2025. 200K+ customers. KKR-owned (~$4B). Strong MSP ecosystem.',
      status: 'in-progress',
      href: '/pillars/network-edge/email-security/companies/barracuda'
    },
    { 
      name: 'Check Point / Avanan', 
      product: 'Harmony Email & Collaboration',
      position: 'Inline API Pioneer', 
      focus: 'Gartner Leader 2024. Acquired Avanan 2021 ($227-300M). Inline API architecture. ThreatCloud integration.',
      status: 'in-progress',
      href: '/pillars/network-edge/email-security/companies/checkpoint'
    },
    { 
      name: 'Cisco Secure Email', 
      product: 'Email Threat Defense',
      position: 'Legacy SEG Transitioning', 
      focus: 'IronPort heritage ($830M, 2007). Talos intel (800B events/day). Declining mindshare 8.1%→5.8%.',
      status: 'in-progress',
      href: '/pillars/network-edge/email-security/companies/cisco'
    },
    { 
      name: 'Darktrace', 
      product: 'Darktrace / EMAIL',
      position: 'Self-Learning AI Platform', 
      focus: 'Gartner Leader 2025. Thoma Bravo $5.3B acquisition. Cross-domain correlation advantage.',
      status: 'in-progress',
      href: '/pillars/network-edge/email-security/companies/darktrace'
    },
    { 
      name: 'Google Workspace', 
      product: 'Gmail Security',
      position: 'Platform Incumbent', 
      focus: '3B+ users. 58% K-12, 80%+ higher ed. 99.9% spam block but BEC gap persists.',
      status: 'in-progress',
      href: '/pillars/network-edge/email-security/companies/google'
    },
    { 
      name: 'IRONSCALES', 
      product: 'Email Security + SAT',
      position: 'AI + Human Insights', 
      focus: 'Gartner Visionary 2024. 17K+ customers, 30K+ analyst community. Native SAT integration. First deepfake protection.',
      status: 'in-progress',
      href: '/pillars/network-edge/email-security/companies/ironscales'
    },
    { 
      name: 'KnowBe4', 
      product: 'Defend (Egress) + KSAT',
      position: 'Human Risk Management', 
      focus: 'Gartner Leader 2024/2025. Vista $4.6B. 70K+ SAT customers. Egress acquisition transformed to HRM platform.',
      status: 'in-progress',
      href: '/pillars/network-edge/email-security/companies/knowbe4'
    },
    { 
      name: 'Microsoft', 
      product: 'Defender for Office 365',
      position: 'Platform Incumbent', 
      focus: 'Gartner Leader 2025. 3.7M+ M365 companies. 84T daily signals. 88% BEC miss rate creates ICES opportunity.',
      status: 'in-progress',
      href: '/pillars/network-edge/email-security/companies/microsoft'
    },
    { 
      name: 'Proofpoint', 
      product: 'Email Protection',
      position: 'Execution Leader', 
      focus: 'Highest Ability to Execute in 2025 MQ. Thoma Bravo owned. 45K+ customers. Tessian acquisition.',
      status: 'in-progress',
      href: '/pillars/network-edge/email-security/companies/proofpoint'
    },
    { 
      name: 'Mimecast', 
      product: 'Advanced Email Security',
      position: 'Full-Stack Defender', 
      focus: 'Gartner Leader 2025. Gateway + API hybrid. 42K+ customers. Human Risk Management pivot.',
      status: 'in-progress',
      href: '/pillars/network-edge/email-security/companies/mimecast'
    },
    { 
      name: 'Material Security', 
      product: 'Material Platform',
      position: 'Post-Delivery Innovator', 
      focus: '$1.1B unicorn. Zero-trust email approach. Ex-Dropbox founders. Google Workspace specialist.',
      status: 'pending',
      href: '/pillars/network-edge/email-security/companies/materialsecurity'
    },
    { 
      name: 'Trend Micro', 
      product: 'Cloud App Security',
      position: 'Enterprise Incumbent', 
      focus: 'Part of Vision One platform. Strong APJ markets.',
      status: 'pending',
      href: '/pillars/network-edge/email-security/companies/trendmicro'
    },
    { 
      name: 'Fortinet', 
      product: 'FortiMail',
      position: 'Challenger', 
      focus: 'SEG + ICES hybrid. Network security ecosystem integration.',
      status: 'pending',
      href: '/pillars/network-edge/email-security/companies/fortinet'
    },
  ];

  const getStatusStyle = (status) => {
    switch (status) {
      case 'in-progress':
        return { bg: 'bg-yellow-900/50', text: 'text-yellow-400', border: 'border-yellow-500/30', dot: 'bg-yellow-400', label: 'In Progress' };
      case 'pending':
      default:
        return { bg: 'bg-gray-800', text: 'text-gray-500', border: 'border-gray-700', dot: 'bg-gray-500', label: 'Pending' };
    }
  };

  const trends = [
    { name: 'SEG Sunset, ICES Sunrise', description: '80% consolidating around Microsoft + ICES. API-first wins.' },
    { name: 'AI Arms Race Escalates', description: '60% phishing success rate with GenAI. Behavioral AI is the defense.' },
    { name: 'Email & Identity Convergence', description: 'Credential phishing up 703%. ATO detection is table stakes.' },
    { name: 'Human Risk Management', description: 'SAT vendors (KnowBe4) acquiring email security. Integrated approach.' },
  ];

  const renderOverview = () => (
    <div className="space-y-8">
      {/* Hero Stats */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {keyInsights.map((insight, i) => (
          <div key={i} className="bg-gradient-to-br from-cyan-900/30 to-slate-800/50 rounded-xl p-5 border border-cyan-700/30">
            <p className="text-3xl font-bold text-cyan-400">{insight.stat}</p>
            <p className="text-slate-400 text-sm mt-1">{insight.label}</p>
          </div>
        ))}
      </div>

      {/* Market Overview */}
      <div className="bg-slate-800/50 rounded-xl p-6 border border-slate-700">
        <h3 className="text-xl font-semibold text-white mb-4">Market Overview</h3>
        <p className="text-slate-300 mb-6">
          Email security is undergoing a fundamental architecture shift from gateway-based SEGs to API-native ICES solutions. 
          The market is consolidating around Microsoft + third-party behavioral AI, with BEC remaining the primary threat vector 
          and the core value proposition for specialized vendors.
        </p>
        <div className="overflow-x-auto">
          <table className="w-full text-sm">
            <thead>
              <tr className="border-b border-slate-700">
                <th className="text-left py-2 text-slate-400">Source</th>
                <th className="text-left py-2 text-slate-400">2024</th>
                <th className="text-left py-2 text-slate-400">2025</th>
                <th className="text-left py-2 text-slate-400">Projection</th>
                <th className="text-left py-2 text-slate-400">CAGR</th>
              </tr>
            </thead>
            <tbody className="text-slate-300">
              {marketSizing.map((row, i) => (
                <tr key={i} className="border-b border-slate-800">
                  <td className="py-2">{row.source}</td>
                  <td className="py-2">{row.val2024}</td>
                  <td className="py-2">{row.val2025}</td>
                  <td className="py-2 text-cyan-400">{row.projection}</td>
                  <td className="py-2 text-emerald-400">{row.cagr}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Key Trends */}
      <div className="bg-slate-800/50 rounded-xl p-6 border border-slate-700">
        <h3 className="text-xl font-semibold text-white mb-4">Key Market Trends (2025)</h3>
        <div className="grid md:grid-cols-2 gap-4">
          {trends.map((trend, i) => (
            <div key={i} className="bg-slate-900/50 rounded-lg p-4">
              <h4 className="font-medium text-cyan-400">{trend.name}</h4>
              <p className="text-slate-400 text-sm mt-1">{trend.description}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Vendor Landscape */}
      <div className="bg-slate-800/50 rounded-xl p-6 border border-slate-700">
        <div className="flex items-center justify-between mb-6">
          <h3 className="text-xl font-semibold text-white">Vendor Research Profiles</h3>
          <div className="flex gap-4 text-xs">
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 rounded-full bg-yellow-400"></div>
              <span className="text-slate-400">In Progress (11)</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 rounded-full bg-gray-500"></div>
              <span className="text-slate-400">Pending (3)</span>
            </div>
          </div>
        </div>
        <div className="grid gap-3">
          {competitors.map((vendor, i) => {
            const style = getStatusStyle(vendor.status);
            return (
              <div key={i} className={`${style.bg} rounded-lg p-4 border ${style.border}`}>
                <div className="flex items-start justify-between">
                  <div className="flex-1">
                    <div className="flex items-center gap-3">
                      {vendor.status === 'in-progress' ? (
                        <a href={vendor.href} className="font-semibold text-white hover:text-yellow-400 transition-colors">
                          {vendor.name}
                        </a>
                      ) : (
                        <h4 className="font-semibold text-white">{vendor.name}</h4>
                      )}
                      <span className={`text-xs px-2 py-0.5 rounded ${style.bg} ${style.text}`}>{vendor.position}</span>
                    </div>
                    <p className="text-slate-500 text-xs mt-1">{vendor.product}</p>
                    <p className="text-slate-400 text-sm mt-2">{vendor.focus}</p>
                  </div>
                  <div className="flex items-center gap-2 text-xs">
                    <div className={`w-2 h-2 rounded-full ${style.dot}`}></div>
                    <span className={style.text}>{style.label}</span>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950 text-white">
      {/* Header */}
      <header className="bg-slate-900/80 backdrop-blur-sm border-b border-slate-800 sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-4">
              <a href="/" className="text-cyan-400 hover:text-cyan-300">← Home</a>
              <span className="text-slate-600">|</span>
              <span className="text-slate-400">Network & Edge</span>
              <span className="text-slate-600">/</span>
              <span className="text-white font-medium">Email Security</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="px-3 py-1 bg-yellow-500/20 text-yellow-400 text-xs rounded-full">11 Profiles In Progress</span>
            </div>
          </div>
        </div>
      </header>

      {/* Sub-segments Navigation */}
      <div className="bg-slate-900/50 border-b border-slate-800">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex gap-1 overflow-x-auto py-2">
            {subSegments.map(seg => (
              <a key={seg.id} href={seg.href}
                className={`px-4 py-2 rounded-lg text-sm whitespace-nowrap transition-colors ${
                  seg.active 
                    ? 'bg-cyan-600/20 text-cyan-400 border border-cyan-500/30' 
                    : 'text-slate-400 hover:bg-slate-800/50 hover:text-white'
                }`}>
                {seg.name}
              </a>
            ))}
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-6 py-8">
        <div className="flex gap-8">
          {/* Sidebar */}
          <nav className="w-64 flex-shrink-0">
            <div className="bg-slate-800/50 rounded-xl p-4 sticky top-24 border border-slate-700">
              <h3 className="text-xs uppercase text-slate-500 font-semibold mb-4 tracking-wider">SRP Framework</h3>
              <div className="space-y-1">
                {srpSections.map(section => (
                  <button key={section.id} onClick={() => setActiveSection(section.id)}
                    className={`w-full text-left px-4 py-3 rounded-lg transition-all flex items-center gap-3 ${
                      activeSection === section.id 
                        ? 'bg-cyan-600/20 text-cyan-400 border border-cyan-500/30' 
                        : 'text-slate-400 hover:bg-slate-700/50 hover:text-white'
                    }`}>
                    <span>{section.icon}</span>
                    <span className="text-sm font-medium">{section.name}</span>
                  </button>
                ))}
              </div>
            </div>
          </nav>

          {/* Content */}
          <main className="flex-1 min-w-0">
            <div className="mb-8">
              <h1 className="text-3xl font-bold text-white mb-2">Email Security Market Analysis</h1>
              <p className="text-slate-400">Comprehensive research across 14 vendors using the Strategic Research Process framework</p>
            </div>
            {renderOverview()}
          </main>
        </div>
      </div>

      {/* Footer */}
      <footer className="bg-slate-900/50 border-t border-slate-800 mt-12">
        <div className="max-w-7xl mx-auto px-6 py-6 text-center">
          <p className="text-slate-500 text-sm">Research compiled January 2026 • Andy Simko • Cybersecurity Product Strategy</p>
        </div>
      </footer>
    </div>
  );
};

export default EmailSecurityPage;
