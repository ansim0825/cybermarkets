import React, { useState } from 'react';

const CiscoSecureEmailProfile = () => {
  const [activeSection, setActiveSection] = useState('overview');

  const sections = [
    { id: 'overview', label: 'Overview', icon: '◉' },
    { id: 'history', label: 'History', icon: '◈' },
    { id: 'products', label: 'Products', icon: '◆' },
    { id: 'market', label: 'Market Position', icon: '◊' },
    { id: 'competitive', label: 'vs Abnormal', icon: '●' },
    { id: 'outlook', label: 'Outlook', icon: '◐' }
  ];

  const CitationFooter = ({ citations }) => (
    <div className="mt-8 pt-4 border-t border-slate-700">
      <p className="text-xs text-slate-500 uppercase tracking-wider mb-2">Sources</p>
      <div className="space-y-1">
        {citations.map((cite, i) => (
          <p key={i} className="text-xs text-slate-400">[{i + 1}] {cite.text}</p>
        ))}
      </div>
      <div className="mt-4 pt-4 border-t border-slate-800">
        <p className="text-xs text-slate-600 italic">Research compiled January 2026 • Andy Simko Portfolio</p>
      </div>
    </div>
  );

  const renderOverview = () => (
    <div className="space-y-6">
      <div className="bg-gradient-to-br from-blue-900/30 to-slate-800/50 rounded-2xl p-8 border border-blue-800/30">
        <div className="flex items-start justify-between">
          <div>
            <h2 className="text-3xl font-bold text-white mb-2">Cisco Secure Email</h2>
            <p className="text-blue-400 text-lg">Legacy SEG Transitioning to ICES</p>
          </div>
          <div className="text-right">
            <p className="text-4xl font-bold text-red-400">↓28%</p>
            <p className="text-slate-400 text-sm">Mindshare Decline YoY</p>
          </div>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-8">
          <div className="bg-slate-800/50 rounded-xl p-4 text-center">
            <p className="text-2xl font-bold text-white">$830M</p>
            <p className="text-slate-400 text-sm">IronPort (2007)</p>
          </div>
          <div className="bg-slate-800/50 rounded-xl p-4 text-center">
            <p className="text-2xl font-bold text-white">5.8%</p>
            <p className="text-slate-400 text-sm">Market Mindshare</p>
          </div>
          <div className="bg-slate-800/50 rounded-xl p-4 text-center">
            <p className="text-2xl font-bold text-white">800B</p>
            <p className="text-slate-400 text-sm">Talos Daily Events</p>
          </div>
          <div className="bg-slate-800/50 rounded-xl p-4 text-center">
            <p className="text-2xl font-bold text-white">M365 Only</p>
            <p className="text-slate-400 text-sm">ETD Platform</p>
          </div>
        </div>
      </div>

      <div className="bg-gradient-to-r from-amber-900/30 to-slate-800/50 rounded-xl p-6 border border-amber-800/30">
        <h3 className="text-lg font-semibold text-amber-400 mb-4">⚠️ The Legacy SEG Dilemma</h3>
        <p className="text-slate-300 mb-4">Cisco represents a critical case study in how legacy network security vendors navigate the transition from on-premise appliances to cloud-native, API-based email security. Market share declining as specialized ICES vendors gain traction.</p>
        <div className="grid md:grid-cols-2 gap-4">
          <div className="bg-red-900/20 rounded-lg p-4 border border-red-700/30">
            <p className="text-red-400 font-medium">Declining</p>
            <p className="text-slate-400 text-sm">PeerSpot mindshare dropped 8.1% → 5.8% (2024-2025)</p>
          </div>
          <div className="bg-emerald-900/20 rounded-lg p-4 border border-emerald-700/30">
            <p className="text-emerald-400 font-medium">Growing (Slowly)</p>
            <p className="text-slate-400 text-sm">Email Threat Defense mindshare 0.9% → 1.1%</p>
          </div>
        </div>
      </div>

      <div className="grid md:grid-cols-2 gap-6">
        <div className="bg-slate-800/50 rounded-xl p-6 border border-slate-700">
          <h3 className="text-lg font-semibold text-blue-400 mb-4">Talos Advantage</h3>
          <p className="text-slate-300 text-sm mb-4">Cisco's primary differentiator—one of the world's largest commercial threat intelligence organizations:</p>
          <div className="space-y-2">
            <div className="flex justify-between text-sm"><span className="text-slate-400">Daily Events</span><span className="text-white">800 billion</span></div>
            <div className="flex justify-between text-sm"><span className="text-slate-400">Emails Blocked/Hour</span><span className="text-white">9 million</span></div>
            <div className="flex justify-between text-sm"><span className="text-slate-400">Daily Threats Analyzed</span><span className="text-white">80 million</span></div>
            <div className="flex justify-between text-sm"><span className="text-slate-400">Domains Blocked/Sec</span><span className="text-white">2,000</span></div>
          </div>
        </div>
        <div className="bg-slate-800/50 rounded-xl p-6 border border-slate-700">
          <h3 className="text-lg font-semibold text-blue-400 mb-4">Key Acquisitions</h3>
          <div className="space-y-3">
            <div className="flex justify-between text-sm"><span className="text-slate-400">IronPort (2007)</span><span className="text-white">$830M - SEG Foundation</span></div>
            <div className="flex justify-between text-sm"><span className="text-slate-400">Armorblox (2023)</span><span className="text-white">~$71-97M - AI/ML</span></div>
            <div className="flex justify-between text-sm"><span className="text-slate-400">Splunk (2024)</span><span className="text-white">$28B - SIEM/XDR</span></div>
          </div>
        </div>
      </div>

      <CitationFooter citations={[
        { text: "Cisco IronPort Acquisition Announcement, January 2007 - $830M" },
        { text: "PeerSpot Email Security Category Analysis, 2024-2025" },
        { text: "Cisco Talos Threat Intelligence Documentation" },
        { text: "Cisco Armorblox Acquisition, July 2023" }
      ]} />
    </div>
  );

  const renderProducts = () => (
    <div className="space-y-6">
      <h2 className="text-2xl font-bold text-white mb-6">Product Portfolio (Fragmented)</h2>
      
      <div className="bg-amber-900/20 rounded-xl p-4 border border-amber-700/30 mb-6">
        <p className="text-amber-400 text-sm">⚠️ Cisco's three distinct products create customer confusion vs. unified competitors</p>
      </div>

      <div className="grid gap-6">
        <div className="bg-slate-800/50 rounded-xl p-6 border border-red-700/30">
          <div className="flex items-center gap-3 mb-4">
            <span className="px-2 py-1 bg-red-500/20 text-red-400 text-xs rounded">DECLINING</span>
            <h3 className="text-xl font-semibold text-white">Secure Email Gateway (Legacy SEG)</h3>
          </div>
          <p className="text-slate-300 text-sm mb-4">Traditional MX-record based gateway (on-premise hardware, virtual appliance, or cloud-hosted)</p>
          <div className="bg-slate-900/50 rounded-lg p-3">
            <p className="text-red-400 text-sm">⚠️ Hardware EOL: x95 series SW maintenance ends October 2026</p>
          </div>
        </div>

        <div className="bg-slate-800/50 rounded-xl p-6 border border-amber-700/30">
          <div className="flex items-center gap-3 mb-4">
            <span className="px-2 py-1 bg-amber-500/20 text-amber-400 text-xs rounded">TRANSITIONAL</span>
            <h3 className="text-xl font-semibold text-white">Secure Email Cloud Gateway</h3>
          </div>
          <p className="text-slate-300 text-sm">Cloud-hosted version of SEG in Cisco datacenters. Still requires MX record changes.</p>
        </div>

        <div className="bg-slate-800/50 rounded-xl p-6 border border-emerald-700/30">
          <div className="flex items-center gap-3 mb-4">
            <span className="px-2 py-1 bg-emerald-500/20 text-emerald-400 text-xs rounded">STRATEGIC FOCUS</span>
            <h3 className="text-xl font-semibold text-white">Email Threat Defense (API-Native ICES)</h3>
          </div>
          <p className="text-slate-300 text-sm mb-4">API-based integration with Microsoft 365 via Graph API. No MX record changes. Cisco's answer to ICES competitors.</p>
          <div className="bg-red-900/20 rounded-lg p-3">
            <p className="text-red-400 text-sm">⚠️ Limitation: Microsoft 365 only — no Google Workspace support</p>
          </div>
        </div>
      </div>

      <CitationFooter citations={[
        { text: "Cisco Secure Email Product Documentation" },
        { text: "Cisco End-of-Life Announcements - x95 Hardware Series" },
        { text: "Cisco Email Threat Defense Architecture Guide" }
      ]} />
    </div>
  );

  const renderCompetitive = () => (
    <div className="space-y-6">
      <h2 className="text-2xl font-bold text-white mb-6">Competitive Implications for Abnormal</h2>
      
      <div className="grid md:grid-cols-2 gap-6">
        <div className="bg-blue-900/20 rounded-xl p-6 border border-blue-700/30">
          <h3 className="text-lg font-semibold text-blue-400 mb-4">Where Cisco Competes Strongly</h3>
          <ul className="space-y-3 text-slate-300 text-sm">
            <li className="flex items-start gap-2">
              <span className="text-blue-400">→</span>
              <div><strong>Cisco-Heavy Enterprises:</strong> Organizations deeply invested in Cisco networking, endpoint, and identity face consolidation pressure</div>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-blue-400">→</span>
              <div><strong>Cross-Vector Detection:</strong> Talos intelligence genuinely enhances detection through network/endpoint correlation</div>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-blue-400">→</span>
              <div><strong>Procurement Relationships:</strong> Enterprise agreements make adding email security a simple line-item</div>
            </li>
          </ul>
        </div>
        <div className="bg-cyan-900/20 rounded-xl p-6 border border-cyan-700/30">
          <h3 className="text-lg font-semibold text-cyan-400 mb-4">Where Abnormal Wins</h3>
          <ul className="space-y-3 text-slate-300 text-sm">
            <li className="flex items-start gap-2">
              <span className="text-cyan-400">✓</span>
              <div><strong>Pure-Play Focus:</strong> 100% focus on email security vs. email as one of many Cisco priorities</div>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-cyan-400">✓</span>
              <div><strong>Google Workspace:</strong> Full support for Google customers that Cisco ETD cannot address</div>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-cyan-400">✓</span>
              <div><strong>Simplicity:</strong> Single product, clear pricing vs. Cisco's three-product confusion</div>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-cyan-400">✓</span>
              <div><strong>EOL Transitions:</strong> Hardware EOL forcing customer decisions—prime moment for alternatives</div>
            </li>
          </ul>
        </div>
      </div>

      <div className="bg-slate-800/50 rounded-xl p-6 border border-slate-700">
        <h3 className="text-xl font-semibold text-white mb-4">Positioning Recommendations</h3>
        <div className="space-y-4">
          {[
            { scenario: 'Cisco XDR Argument', positioning: '"Our behavioral AI detects threats that signature and reputation-based systems miss. We integrate with any XDR/SIEM platform, not just one vendor\'s ecosystem."' },
            { scenario: 'Talos Intelligence', positioning: '"Talos is powerful for known threats. Our behavioral AI catches novel attacks and insider threats that reputation databases cannot identify."' },
            { scenario: 'Cisco Shop Customer', positioning: '"We complement Cisco investments. Use Cisco for network and endpoint; add Abnormal for superior email-specific behavioral detection."' },
            { scenario: 'EOL Transition', positioning: '"While migrating from Cisco hardware, evaluate best-of-breed alternatives. Our API-native approach deploys in minutes without infrastructure changes."' }
          ].map((item, i) => (
            <div key={i} className="bg-slate-900/50 rounded-lg p-4">
              <h4 className="font-medium text-amber-400 mb-2">{item.scenario}</h4>
              <p className="text-slate-300 text-sm italic">{item.positioning}</p>
            </div>
          ))}
        </div>
      </div>

      <CitationFooter citations={[
        { text: "PeerSpot Email Security Mindshare Analysis - Abnormal 12.1% vs Cisco 5.8%" },
        { text: "Gartner Magic Quadrant for Email Security Platforms, 2024" },
        { text: "Cisco Email Threat Defense Supported Platforms Documentation" }
      ]} />
    </div>
  );

  const renderContent = () => {
    switch(activeSection) {
      case 'overview': return renderOverview();
      case 'products': return renderProducts();
      case 'competitive': return renderCompetitive();
      default: return <div className="text-slate-400">Section: {activeSection}</div>;
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950 text-white">
      <header className="bg-slate-900/80 backdrop-blur-sm border-b border-slate-800 sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-gradient-to-br from-blue-500 to-blue-700 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-lg">C</span>
              </div>
              <div>
                <h1 className="text-xl font-bold text-white">Cisco Secure Email</h1>
                <p className="text-slate-400 text-sm">Competitive Intelligence Profile</p>
              </div>
            </div>
            <div className="flex items-center gap-2">
              <span className="px-3 py-1 bg-amber-500/20 text-amber-400 text-xs rounded-full border border-amber-500/30">Legacy Transition</span>
              <span className="px-3 py-1 bg-blue-500/20 text-blue-400 text-xs rounded-full border border-blue-500/30">Talos Intel</span>
            </div>
          </div>
        </div>
      </header>
      <div className="max-w-7xl mx-auto px-6 py-8">
        <div className="flex gap-8">
          <nav className="w-64 flex-shrink-0">
            <div className="bg-slate-800/50 rounded-xl p-4 sticky top-24 border border-slate-700">
              <div className="space-y-1">
                {sections.map(section => (
                  <button key={section.id} onClick={() => setActiveSection(section.id)}
                    className={`w-full text-left px-4 py-3 rounded-lg transition-all flex items-center gap-3 ${activeSection === section.id ? 'bg-blue-600/20 text-blue-400 border border-blue-500/30' : 'text-slate-400 hover:bg-slate-700/50 hover:text-white'}`}>
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
    </div>
  );
};

export default CiscoSecureEmailProfile;
