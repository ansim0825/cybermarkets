"use client";
import React, { useState } from 'react';

const AbnormalResearchProfile = () => {
  const [activeSection, setActiveSection] = useState('overview');

  const sections = [
    { id: 'overview', label: 'Overview', icon: '◉' },
    { id: 'products', label: 'Products', icon: '◈' },
    { id: 'platform', label: 'Platform', icon: '◇' },
    { id: 'market', label: 'Market Context', icon: '◆' },
    { id: 'stakeholders', label: 'Stakeholders', icon: '◊' },
    { id: 'economics', label: 'Economics', icon: '○' },
    { id: 'competitive', label: 'Competitive', icon: '●' },
    { id: 'outlook', label: 'Outlook', icon: '◐' },
    { id: 'news', label: 'Recent News', icon: '◑' }
  ];

  const CitationFooter = ({ citations }) => (
    <div className="mt-8 pt-4 border-t border-slate-700">
      <p className="text-xs text-slate-500 uppercase tracking-wider mb-2">Sources</p>
      <div className="space-y-1">
        {citations.map((cite, i) => (
          <p key={i} className="text-xs text-slate-400">
            [{i + 1}] {cite.url ? (
              <a href={cite.url} target="_blank" rel="noopener noreferrer" className="text-cyan-400 hover:underline">{cite.text}</a>
            ) : cite.text}
          </p>
        ))}
      </div>
      <div className="mt-4 pt-4 border-t border-slate-800">
        <p className="text-xs text-slate-600 italic">Research compiled January 2026 • Andy Simko Portfolio</p>
      </div>
    </div>
  );

  const HypeCycleDiagram = () => (
    <div className="bg-slate-800/50 rounded-xl p-6 mt-6">
      <h4 className="text-sm font-semibold text-slate-300 mb-4">Gartner Hype Cycle Position</h4>
      <svg viewBox="0 0 500 200" className="w-full h-48">
        <line x1="50" y1="170" x2="450" y2="170" stroke="#334155" strokeWidth="1"/>
        <line x1="50" y1="170" x2="50" y2="30" stroke="#334155" strokeWidth="1"/>
        <text x="250" y="195" textAnchor="middle" className="fill-slate-500 text-xs">Time →</text>
        <text x="20" y="100" textAnchor="middle" className="fill-slate-500 text-xs" transform="rotate(-90, 20, 100)">Expectations</text>
        <path d="M 60 160 Q 100 160 120 60 Q 140 20 160 60 Q 180 120 220 140 Q 280 160 340 120 Q 400 90 440 80" fill="none" stroke="#0891b2" strokeWidth="2"/>
        <text x="90" y="185" textAnchor="middle" className="fill-slate-500" style={{fontSize: '8px'}}>Innovation</text>
        <text x="90" y="193" textAnchor="middle" className="fill-slate-500" style={{fontSize: '8px'}}>Trigger</text>
        <text x="150" y="185" textAnchor="middle" className="fill-slate-500" style={{fontSize: '8px'}}>Peak of</text>
        <text x="150" y="193" textAnchor="middle" className="fill-slate-500" style={{fontSize: '8px'}}>Expectations</text>
        <text x="220" y="185" textAnchor="middle" className="fill-slate-500" style={{fontSize: '8px'}}>Trough of</text>
        <text x="220" y="193" textAnchor="middle" className="fill-slate-500" style={{fontSize: '8px'}}>Disillusion</text>
        <text x="320" y="185" textAnchor="middle" className="fill-slate-500" style={{fontSize: '8px'}}>Slope of</text>
        <text x="320" y="193" textAnchor="middle" className="fill-slate-500" style={{fontSize: '8px'}}>Enlightenment</text>
        <text x="420" y="185" textAnchor="middle" className="fill-slate-500" style={{fontSize: '8px'}}>Plateau of</text>
        <text x="420" y="193" textAnchor="middle" className="fill-slate-500" style={{fontSize: '8px'}}>Productivity</text>
        <circle cx="320" cy="120" r="8" fill="#22d3ee" className="animate-pulse"/>
        <text x="320" y="108" textAnchor="middle" className="fill-cyan-300" style={{fontSize: '9px', fontWeight: 'bold'}}>API-Based ICES</text>
        <circle cx="440" cy="80" r="6" fill="#94a3b8"/>
        <text x="440" y="68" textAnchor="middle" className="fill-slate-400" style={{fontSize: '8px'}}>Legacy SEG</text>
      </svg>
      <p className="text-xs text-slate-500 mt-2 text-center">API-based ICES positioned on Slope of Enlightenment with 2-5 year mainstream adoption</p>
    </div>
  );

  const renderOverview = () => (
    <div className="space-y-6">
      <div className="bg-gradient-to-br from-cyan-900/30 to-slate-800/50 rounded-2xl p-8 border border-cyan-800/30">
        <div className="flex items-start justify-between">
          <div>
            <h2 className="text-3xl font-bold text-white mb-2">Abnormal Security</h2>
            <p className="text-cyan-400 text-lg">AI-Native Email Security Platform</p>
          </div>
          <div className="text-right">
            <p className="text-4xl font-bold text-cyan-400">$5.1B</p>
            <p className="text-slate-400 text-sm">Valuation (Aug 2024)</p>
          </div>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-8">
          <div className="bg-slate-800/50 rounded-xl p-4 text-center">
            <p className="text-2xl font-bold text-white">$200M+</p>
            <p className="text-slate-400 text-sm">ARR</p>
          </div>
          <div className="bg-slate-800/50 rounded-xl p-4 text-center">
            <p className="text-2xl font-bold text-white">100%</p>
            <p className="text-slate-400 text-sm">YoY Growth</p>
          </div>
          <div className="bg-slate-800/50 rounded-xl p-4 text-center">
            <p className="text-2xl font-bold text-white">3,200+</p>
            <p className="text-slate-400 text-sm">Customers</p>
          </div>
          <div className="bg-slate-800/50 rounded-xl p-4 text-center">
            <p className="text-2xl font-bold text-white">25%</p>
            <p className="text-slate-400 text-sm">of Fortune 500</p>
          </div>
        </div>
      </div>
      <div className="grid md:grid-cols-2 gap-6">
        <div className="bg-slate-800/50 rounded-xl p-6 border border-slate-700">
          <h3 className="text-lg font-semibold text-cyan-400 mb-4">Company Profile</h3>
          <div className="space-y-3">
            <div className="flex justify-between"><span className="text-slate-400">Founded</span><span className="text-white">2018</span></div>
            <div className="flex justify-between"><span className="text-slate-400">Headquarters</span><span className="text-white">Las Vegas, NV</span></div>
            <div className="flex justify-between"><span className="text-slate-400">Employees</span><span className="text-white">~1,300</span></div>
            <div className="flex justify-between"><span className="text-slate-400">Total Funding</span><span className="text-white">$284M</span></div>
          </div>
        </div>
        <div className="bg-slate-800/50 rounded-xl p-6 border border-slate-700">
          <h3 className="text-lg font-semibold text-cyan-400 mb-4">Leadership</h3>
          <div className="space-y-3">
            <div className="flex justify-between"><span className="text-slate-400">CEO</span><span className="text-white">Evan Reiser</span></div>
            <div className="flex justify-between"><span className="text-slate-400">CTO</span><span className="text-white">Sanjay Jeyakumar</span></div>
            <div className="flex justify-between"><span className="text-slate-400">Head of ML</span><span className="text-white">Jeshua Bratman</span></div>
            <div className="flex justify-between"><span className="text-slate-400">Background</span><span className="text-white">Twitter ML Team</span></div>
          </div>
        </div>
      </div>
      <div className="bg-gradient-to-r from-emerald-900/30 to-slate-800/50 rounded-xl p-6 border border-emerald-800/30">
        <h3 className="text-lg font-semibold text-emerald-400 mb-4">🏆 Analyst Recognition</h3>
        <div className="grid md:grid-cols-2 gap-4">
          <div className="flex items-center gap-3">
            <div className="w-12 h-12 bg-emerald-500/20 rounded-lg flex items-center justify-center"><span className="text-emerald-400 text-xl">★</span></div>
            <div><p className="text-white font-medium">Gartner MQ Leader</p><p className="text-slate-400 text-sm">Email Security 2024 & 2025</p></div>
          </div>
          <div className="flex items-center gap-3">
            <div className="w-12 h-12 bg-emerald-500/20 rounded-lg flex items-center justify-center"><span className="text-emerald-400 text-xl">→</span></div>
            <div><p className="text-white font-medium">Furthest Right Position</p><p className="text-slate-400 text-sm">Completeness of Vision (2 yrs)</p></div>
          </div>
          <div className="flex items-center gap-3">
            <div className="w-12 h-12 bg-emerald-500/20 rounded-lg flex items-center justify-center"><span className="text-emerald-400 text-xl">99%</span></div>
            <div><p className="text-white font-medium">Peer Insights</p><p className="text-slate-400 text-sm">Would Recommend (4.8/5.0)</p></div>
          </div>
          <div className="flex items-center gap-3">
            <div className="w-12 h-12 bg-emerald-500/20 rounded-lg flex items-center justify-center"><span className="text-emerald-400 text-xl">🏅</span></div>
            <div><p className="text-white font-medium">ISO 42001 Certified</p><p className="text-slate-400 text-sm">First AI Mgmt System (Sept 2025)</p></div>
          </div>
        </div>
      </div>
      <CitationFooter citations={[
        { text: "Abnormal Security Series D Announcement", url: "https://abnormalsecurity.com/blog/series-d" },
        { text: "Gartner Magic Quadrant for Email Security Platforms, December 2025" },
        { text: "Gartner Peer Insights - Abnormal Security Reviews (263 reviews as of Jan 2026)" },
        { text: "Abnormal Security ISO 42001 Press Release, September 2025" },
        { text: "Crunchbase - Abnormal Security Funding History" }
      ]} />
    </div>
  );

  const renderProducts = () => (
    <div className="space-y-6">
      <h2 className="text-2xl font-bold text-white mb-6">Product Portfolio</h2>
      <div className="bg-slate-800/50 rounded-xl p-6 border border-cyan-700/30">
        <h3 className="text-xl font-semibold text-cyan-400 mb-4">Cloud Email Security</h3>
        <div className="grid gap-4">
          {[
            { name: 'Inbound Email Security', desc: 'Autonomous AI detection for BEC, phishing, malware, social engineering attacks' },
            { name: 'Email Account Takeover Protection', desc: 'Detects compromised accounts across email platforms via behavioral analysis' },
            { name: 'Security Posture Management', desc: 'Identifies M365/Google Workspace misconfigurations and risky settings' },
            { name: 'Email Productivity', desc: 'AI-powered graymail filtering personalized to each user communication patterns' },
            { name: 'Misdirected Email Prevention', desc: 'Prevents wrong-recipient data leaks before send' }
          ].map((product, i) => (
            <div key={i} className="bg-slate-900/50 rounded-lg p-4 border border-slate-700">
              <h4 className="font-medium text-white">{product.name}</h4>
              <p className="text-slate-400 text-sm mt-1">{product.desc}</p>
            </div>
          ))}
        </div>
      </div>
      <div className="bg-slate-800/50 rounded-xl p-6 border border-purple-700/30">
        <h3 className="text-xl font-semibold text-purple-400 mb-4">AI Security Agents</h3>
        <div className="grid gap-4">
          {[
            { name: 'AI Security Mailbox', desc: 'Superhuman-speed triage of user-reported suspicious emails (replaces abuse mailbox)' },
            { name: 'AI Phishing Coach', desc: 'Hyperpersonalized security awareness training triggered by real threats' },
            { name: 'AI Data Analyst', desc: 'Natural language interface for security reporting and threat hunting' }
          ].map((product, i) => (
            <div key={i} className="bg-slate-900/50 rounded-lg p-4 border border-slate-700">
              <h4 className="font-medium text-white">{product.name}</h4>
              <p className="text-slate-400 text-sm mt-1">{product.desc}</p>
            </div>
          ))}
        </div>
      </div>
      <CitationFooter citations={[
        { text: "Abnormal Security Product Documentation", url: "https://abnormalsecurity.com/products" },
        { text: "Abnormal Security AI Security Mailbox Launch, 2024" },
        { text: "Abnormal Blog - SaaS Security Expansion Announcements" }
      ]} />
    </div>
  );

  const renderMarket = () => (
    <div className="space-y-6">
      <h2 className="text-2xl font-bold text-white mb-6">Market Context</h2>
      <div className="bg-gradient-to-br from-blue-900/30 to-slate-800/50 rounded-xl p-6 border border-blue-700/30">
        <h3 className="text-xl font-semibold text-blue-400 mb-4">Email Security Market Size</h3>
        <div className="grid md:grid-cols-3 gap-4">
          <div className="bg-slate-800/50 rounded-lg p-4 text-center">
            <p className="text-3xl font-bold text-white">$4.68B</p>
            <p className="text-slate-400 text-sm">2024 Market Size</p>
          </div>
          <div className="bg-slate-800/50 rounded-lg p-4 text-center">
            <p className="text-3xl font-bold text-cyan-400">$10.83B</p>
            <p className="text-slate-400 text-sm">2030 Projected</p>
          </div>
          <div className="bg-slate-800/50 rounded-lg p-4 text-center">
            <p className="text-3xl font-bold text-emerald-400">~12%</p>
            <p className="text-slate-400 text-sm">CAGR (2024-2030)</p>
          </div>
        </div>
      </div>
      <div className="bg-slate-800/50 rounded-xl p-6 border border-slate-700">
        <h3 className="text-xl font-semibold text-white mb-4">Architecture Shift: SEG → API-Native ICES</h3>
        <p className="text-slate-300 mb-4">The email security market is undergoing a fundamental architecture transition from gateway-based SEGs to API-native ICES solutions.</p>
        <div className="grid md:grid-cols-2 gap-4">
          <div className="bg-red-900/20 rounded-lg p-4 border border-red-700/30">
            <h4 className="font-semibold text-red-400 mb-2">Legacy SEG Challenges</h4>
            <ul className="text-slate-300 text-sm space-y-1">
              <li>• MX record changes expose security architecture</li>
              <li>• Cannot scan internal/lateral email</li>
              <li>• Single point of failure in mail flow</li>
            </ul>
          </div>
          <div className="bg-emerald-900/20 rounded-lg p-4 border border-emerald-700/30">
            <h4 className="font-semibold text-emerald-400 mb-2">API-Native ICES Advantages</h4>
            <ul className="text-slate-300 text-sm space-y-1">
              <li>• No MX changes required</li>
              <li>• Full visibility into internal email</li>
              <li>• Minutes to deploy</li>
            </ul>
          </div>
        </div>
      </div>
      <HypeCycleDiagram />
      <CitationFooter citations={[
        { text: "Gartner Magic Quadrant for Email Security Platforms, December 2025" },
        { text: "Gartner Hype Cycle for Email Security, December 2025 - API-based ICES on Slope of Enlightenment" },
        { text: "MarketsandMarkets Email Security Market Report, 2024 - Market size $4.68B to $10.83B" },
        { text: "FBI IC3 Report 2023 - BEC losses $2.9B" }
      ]} />
    </div>
  );

  const renderNews = () => (
    <div className="space-y-6">
      <h2 className="text-2xl font-bold text-white mb-6">Recent News & Milestones</h2>
      <div className="space-y-4">
        {[
          { date: 'December 2025', title: 'Named Leader in 2025 Gartner MQ', desc: 'Second consecutive year as Leader in Magic Quadrant for Email Security', url: 'https://abnormalsecurity.com/resources/gartner-magic-quadrant', type: 'recognition' },
          { date: 'September 2025', title: 'GovRAMP Authorization', desc: 'Achieved StateRAMP authorization for SLED deployments', url: 'https://abnormalsecurity.com/blog/stateramp', type: 'compliance' },
          { date: 'September 2025', title: 'ISO 42001 Certification', desc: 'First security vendor with AI Management System certification', url: 'https://abnormalsecurity.com/blog/iso-42001', type: 'compliance' },
          { date: 'August 2024', title: '$250M Series D at $5.1B Valuation', desc: 'Funding led by Wellington Management', url: 'https://abnormalsecurity.com/blog/series-d', type: 'funding' },
          { date: 'August 2024', title: 'Reached $200M ARR', desc: '100% year-over-year growth', url: 'https://abnormalsecurity.com/blog/series-d', type: 'milestone' },
          { date: '2025', title: 'FedRAMP Moderate Authorization', desc: 'Achieved in 256 days for federal deployments', url: 'https://abnormalsecurity.com/blog/fedramp', type: 'compliance' }
        ].map((item, i) => (
          <div key={i} className={`bg-slate-800/50 rounded-xl p-5 border ${item.type === 'funding' ? 'border-cyan-700/30' : item.type === 'recognition' ? 'border-emerald-700/30' : 'border-purple-700/30'}`}>
            <p className={`text-sm font-medium ${item.type === 'funding' ? 'text-cyan-400' : item.type === 'recognition' ? 'text-emerald-400' : 'text-purple-400'}`}>{item.date}</p>
            <h4 className="text-lg font-semibold text-white mt-1">{item.title}</h4>
            <p className="text-slate-400 text-sm mt-1">{item.desc}</p>
            <a href={item.url} target="_blank" rel="noopener noreferrer" className="inline-block mt-3 text-xs text-cyan-400 hover:underline">View Source →</a>
          </div>
        ))}
      </div>
      <CitationFooter citations={[
        { text: "Abnormal Security Blog", url: "https://abnormalsecurity.com/blog" },
        { text: "Abnormal Security Press Room", url: "https://abnormalsecurity.com/press" }
      ]} />
    </div>
  );

  const renderContent = () => {
    switch(activeSection) {
      case 'overview': return renderOverview();
      case 'products': return renderProducts();
      case 'market': return renderMarket();
      case 'news': return renderNews();
      default: return <div className="text-slate-400">Section: {activeSection}</div>;
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950 text-white">
      <header className="bg-slate-900/80 backdrop-blur-sm border-b border-slate-800 sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-gradient-to-br from-cyan-500 to-blue-600 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-lg">A</span>
              </div>
              <div>
                <h1 className="text-xl font-bold text-white">Abnormal Security</h1>
                <p className="text-slate-400 text-sm">Competitive Intelligence Profile</p>
              </div>
            </div>
            <div className="flex items-center gap-2">
              <span className="px-3 py-1 bg-emerald-500/20 text-emerald-400 text-xs rounded-full border border-emerald-500/30">Gartner Leader</span>
              <span className="px-3 py-1 bg-cyan-500/20 text-cyan-400 text-xs rounded-full border border-cyan-500/30">$5.1B Valuation</span>
            </div>
          </div>
        </div>
      </header>
      <div className="max-w-7xl mx-auto px-6 py-8">
        <div className="flex gap-8">
          <nav className="w-64 flex-shrink-0">
            <div className="bg-slate-800/50 rounded-xl p-4 sticky top-24 border border-slate-700">
              <h3 className="text-xs uppercase text-slate-500 font-semibold mb-4 tracking-wider">Navigation</h3>
              <div className="space-y-1">
                {sections.map(section => (
                  <button key={section.id} onClick={() => setActiveSection(section.id)}
                    className={`w-full text-left px-4 py-3 rounded-lg transition-all flex items-center gap-3 ${activeSection === section.id ? 'bg-cyan-600/20 text-cyan-400 border border-cyan-500/30' : 'text-slate-400 hover:bg-slate-700/50 hover:text-white'}`}>
                    <span className="text-lg">{section.icon}</span>
                    <span className="text-sm font-medium">{section.label}</span>
                  </button>
                ))}
              </div>
            </div>
          </nav>
          <main className="flex-1 min-w-0">{renderContent()}</main>
        </div>
      </div>
      <footer className="bg-slate-900/50 border-t border-slate-800 mt-12">
        <div className="max-w-7xl mx-auto px-6 py-6 text-center">
          <p className="text-slate-500 text-sm">Research compiled January 2026 • Andy Simko • Email Security Market Analysis</p>
        </div>
      </footer>
    </div>
  );
};

export default AbnormalResearchProfile;
