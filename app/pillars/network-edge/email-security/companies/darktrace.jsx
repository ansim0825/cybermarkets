import React, { useState } from 'react';

const DarktraceEmailProfile = () => {
  const [activeSection, setActiveSection] = useState('overview');

  const sections = [
    { id: 'overview', label: 'Overview', icon: '◉' },
    { id: 'platform', label: 'Platform', icon: '◈' },
    { id: 'technology', label: 'Technology', icon: '◇' },
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
      <div className="bg-gradient-to-br from-purple-900/30 to-slate-800/50 rounded-2xl p-8 border border-purple-800/30">
        <div className="flex items-start justify-between">
          <div>
            <h2 className="text-3xl font-bold text-white mb-2">Darktrace / EMAIL</h2>
            <p className="text-purple-400 text-lg">Self-Learning AI Security Platform</p>
          </div>
          <div className="text-right">
            <p className="text-4xl font-bold text-purple-400">$5.3B</p>
            <p className="text-slate-400 text-sm">Thoma Bravo (Oct 2024)</p>
          </div>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-8">
          <div className="bg-slate-800/50 rounded-xl p-4 text-center">
            <p className="text-2xl font-bold text-white">$782M</p>
            <p className="text-slate-400 text-sm">Total ARR (FY24)</p>
          </div>
          <div className="bg-slate-800/50 rounded-xl p-4 text-center">
            <p className="text-2xl font-bold text-white">6,000+</p>
            <p className="text-slate-400 text-sm">Email Customers</p>
          </div>
          <div className="bg-slate-800/50 rounded-xl p-4 text-center">
            <p className="text-2xl font-bold text-white">Leader</p>
            <p className="text-slate-400 text-sm">Gartner MQ 2025</p>
          </div>
          <div className="bg-slate-800/50 rounded-xl p-4 text-center">
            <p className="text-2xl font-bold text-white">4.8/5</p>
            <p className="text-slate-400 text-sm">Peer Insights</p>
          </div>
        </div>
      </div>

      <div className="grid md:grid-cols-2 gap-6">
        <div className="bg-slate-800/50 rounded-xl p-6 border border-slate-700">
          <h3 className="text-lg font-semibold text-purple-400 mb-4">Company Profile</h3>
          <div className="space-y-3">
            <div className="flex justify-between"><span className="text-slate-400">Founded</span><span className="text-white">2013 (Cambridge, UK)</span></div>
            <div className="flex justify-between"><span className="text-slate-400">Heritage</span><span className="text-white">GCHQ/MI5 Founders</span></div>
            <div className="flex justify-between"><span className="text-slate-400">CEO</span><span className="text-white">Jill Popelka (Sept 2024)</span></div>
            <div className="flex justify-between"><span className="text-slate-400">Employees</span><span className="text-white">2,400+</span></div>
          </div>
        </div>
        <div className="bg-slate-800/50 rounded-xl p-6 border border-slate-700">
          <h3 className="text-lg font-semibold text-purple-400 mb-4">Platform Breadth</h3>
          <div className="space-y-3 text-sm">
            <div className="flex justify-between"><span className="text-slate-400">Email Security</span><span className="text-emerald-400">Gartner Leader</span></div>
            <div className="flex justify-between"><span className="text-slate-400">NDR</span><span className="text-emerald-400">Gartner Leader</span></div>
            <div className="flex justify-between"><span className="text-slate-400">CPS/OT</span><span className="text-amber-400">Gartner Visionary</span></div>
            <div className="flex justify-between"><span className="text-slate-400">Patents Filed</span><span className="text-white">200+</span></div>
          </div>
        </div>
      </div>

      <div className="bg-gradient-to-r from-amber-900/30 to-slate-800/50 rounded-xl p-6 border border-amber-800/30">
        <h3 className="text-lg font-semibold text-amber-400 mb-4">⚡ Unique Competitive Dynamic</h3>
        <p className="text-slate-300 mb-4">Darktrace approaches email as one component of a unified, AI-native security platform spanning network, cloud, endpoint, identity, and OT. Both Darktrace and Abnormal emphasize AI-native behavioral approaches—but platform breadth vs. email depth creates different value propositions.</p>
        <div className="grid md:grid-cols-2 gap-4">
          <div className="bg-purple-900/20 rounded-lg p-4 border border-purple-700/30">
            <p className="text-purple-400 font-medium">Darktrace Approach</p>
            <p className="text-slate-400 text-sm">Platform breadth, cross-domain correlation</p>
          </div>
          <div className="bg-cyan-900/20 rounded-lg p-4 border border-cyan-700/30">
            <p className="text-cyan-400 font-medium">Abnormal Approach</p>
            <p className="text-slate-400 text-sm">Email-focused depth, purpose-built behavioral AI</p>
          </div>
        </div>
      </div>

      <CitationFooter citations={[
        { text: "Thoma Bravo - Darktrace Acquisition Announcement, $5.3B, October 2024" },
        { text: "Gartner Magic Quadrant for Email Security Platforms, December 2025 - Leader" },
        { text: "Gartner Magic Quadrant for NDR, 2025 - Leader" },
        { text: "Darktrace FY2024 Financial Results - $782.2M ARR" },
        { text: "Gartner Peer Insights - Darktrace Email Security Reviews (340 reviews)" }
      ]} />
    </div>
  );

  const renderPlatform = () => (
    <div className="space-y-6">
      <h2 className="text-2xl font-bold text-white mb-6">ActiveAI Security Platform</h2>
      
      <div className="bg-slate-800/50 rounded-xl p-6 border border-purple-700/30">
        <h3 className="text-xl font-semibold text-purple-400 mb-4">Platform Components</h3>
        <div className="grid md:grid-cols-2 gap-4">
          {[
            { name: 'Darktrace / EMAIL', desc: 'AI-native email security with behavioral detection and autonomous response', status: 'Leader' },
            { name: 'Darktrace / NETWORK', desc: 'Network detection and response (NDR)', status: 'Leader' },
            { name: 'Darktrace / CLOUD', desc: 'Cloud security for AWS, Azure, GCP', status: 'Available' },
            { name: 'Darktrace / ENDPOINT', desc: 'Endpoint visibility with NEXT agent combining NDR+EDR', status: 'New' },
            { name: 'Darktrace / IDENTITY', desc: 'Identity security with risk management', status: 'Available' },
            { name: 'Darktrace / OT', desc: 'Operational technology security', status: 'Visionary' },
            { name: 'Cyber AI Analyst', desc: 'Agentic AI automating investigations across domains', status: 'Core' },
            { name: 'PREVENT', desc: 'Proactive exposure management, attack path analysis', status: 'New' }
          ].map((item, i) => (
            <div key={i} className="bg-slate-900/50 rounded-lg p-4">
              <div className="flex justify-between items-start mb-2">
                <h4 className="font-medium text-white">{item.name}</h4>
                <span className={`text-xs px-2 py-1 rounded ${item.status === 'Leader' ? 'bg-emerald-500/20 text-emerald-400' : item.status === 'New' ? 'bg-cyan-500/20 text-cyan-400' : 'bg-slate-700 text-slate-400'}`}>{item.status}</span>
              </div>
              <p className="text-slate-400 text-sm">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>

      <div className="bg-gradient-to-br from-emerald-900/20 to-slate-800/50 rounded-xl p-6 border border-emerald-700/30">
        <h3 className="text-xl font-semibold text-emerald-400 mb-4">Cross-Domain Correlation Advantage</h3>
        <p className="text-slate-300 mb-4">The Cyber AI Analyst operates natively across endpoint, network, cloud, SaaS, identity, and email—correlating events without external integrations, data lakes, or manual correlation.</p>
        <div className="bg-slate-800/50 rounded-lg p-4">
          <p className="text-slate-300 text-sm">This enables detection of multi-vector attacks that move across domain boundaries—something email-focused vendors like Abnormal cannot replicate without external integrations.</p>
        </div>
      </div>

      <CitationFooter citations={[
        { text: "Darktrace ActiveAI Security Platform Launch, April 2024" },
        { text: "Darktrace NEXT Agent Announcement, October 2025" },
        { text: "Gartner Magic Quadrants - Email Security (Leader), NDR (Leader), CPS (Visionary)" }
      ]} />
    </div>
  );

  const renderCompetitive = () => (
    <div className="space-y-6">
      <h2 className="text-2xl font-bold text-white mb-6">Darktrace vs Abnormal Security</h2>
      
      <div className="bg-slate-800/50 rounded-xl p-6 border border-slate-700">
        <h3 className="text-xl font-semibold text-white mb-4">Strategic Positioning Comparison</h3>
        <div className="overflow-x-auto">
          <table className="w-full text-sm">
            <thead>
              <tr className="border-b border-slate-700">
                <th className="text-left py-3 text-slate-400">Dimension</th>
                <th className="text-left py-3 text-purple-400">Darktrace</th>
                <th className="text-left py-3 text-cyan-400">Abnormal</th>
              </tr>
            </thead>
            <tbody className="text-slate-300">
              <tr className="border-b border-slate-800">
                <td className="py-3">Core Identity</td>
                <td className="py-3">AI-native security platform vendor</td>
                <td className="py-3 text-cyan-300">Email-focused behavioral AI specialist</td>
              </tr>
              <tr className="border-b border-slate-800">
                <td className="py-3">Product Scope</td>
                <td className="py-3">Email + Network + Cloud + Endpoint + OT</td>
                <td className="py-3 text-cyan-300">Email security + adjacent expansion</td>
              </tr>
              <tr className="border-b border-slate-800">
                <td className="py-3">Email Customers</td>
                <td className="py-3">6,000+</td>
                <td className="py-3 text-cyan-300">3,200+</td>
              </tr>
              <tr className="border-b border-slate-800">
                <td className="py-3">Gartner MQ 2025</td>
                <td className="py-3">Leader</td>
                <td className="py-3 text-cyan-300">Leader</td>
              </tr>
              <tr>
                <td className="py-3">Valuation/Backing</td>
                <td className="py-3">$5.3B (Thoma Bravo)</td>
                <td className="py-3 text-cyan-300">$5.1B (VC)</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>

      <div className="grid md:grid-cols-2 gap-6">
        <div className="bg-purple-900/20 rounded-xl p-6 border border-purple-700/30">
          <h3 className="text-lg font-semibold text-purple-400 mb-4">Where Darktrace Competes Effectively</h3>
          <ul className="space-y-3 text-slate-300 text-sm">
            <li>• <strong>Platform Consolidators:</strong> Organizations seeking vendor reduction across email, network, cloud, endpoint</li>
            <li>• <strong>Cross-Domain Visibility:</strong> Teams needing to correlate threats across IT domains</li>
            <li>• <strong>OT/IT Convergence:</strong> Industrial organizations with unified IT/OT visibility needs</li>
            <li>• <strong>Existing Darktrace NDR:</strong> Easy add-on for current customers</li>
          </ul>
        </div>
        <div className="bg-cyan-900/20 rounded-xl p-6 border border-cyan-700/30">
          <h3 className="text-lg font-semibold text-cyan-400 mb-4">Where Abnormal Wins</h3>
          <ul className="space-y-3 text-slate-300 text-sm">
            <li>• <strong>Email-Focused Buyers:</strong> Organizations prioritizing email depth over platform breadth</li>
            <li>• <strong>BEC Specialists:</strong> Companies with significant executive impersonation/vendor fraud concerns</li>
            <li>• <strong>Simpler Deployment:</strong> Rapid email-only deployment without platform complexity</li>
            <li>• <strong>Cost-Sensitive Enterprise:</strong> Email budget cannot justify full platform investment</li>
          </ul>
        </div>
      </div>

      <div className="bg-slate-800/50 rounded-xl p-6 border border-slate-700">
        <h3 className="text-xl font-semibold text-white mb-4">Positioning for Abnormal</h3>
        <div className="space-y-4">
          <div className="bg-slate-900/50 rounded-lg p-4">
            <h4 className="font-medium text-amber-400 mb-2">Against Platform Argument</h4>
            <p className="text-slate-300 text-sm italic">"Best-of-breed email security integrates with any platform. Email is too critical for compromise—purpose-built AI consistently outperforms multi-purpose tools."</p>
          </div>
          <div className="bg-slate-900/50 rounded-lg p-4">
            <h4 className="font-medium text-amber-400 mb-2">On Depth vs. Breadth</h4>
            <p className="text-slate-300 text-sm italic">"We've processed billions of emails specifically to understand email-based attacks. Our entire R&D investment is focused on email security innovation."</p>
          </div>
          <div className="bg-slate-900/50 rounded-lg p-4">
            <h4 className="font-medium text-amber-400 mb-2">For Existing Darktrace NDR Customers</h4>
            <p className="text-slate-300 text-sm italic">"We can complement your Darktrace investment with deeper email-specific protection. You'll get purpose-built BEC detection that catches threats their broader approach may miss."</p>
          </div>
        </div>
      </div>

      <CitationFooter citations={[
        { text: "Gartner Magic Quadrant for Email Security Platforms, 2025 - Both vendors named Leaders" },
        { text: "Darktrace Customer Count - 6,000+ email security customers" },
        { text: "Abnormal Security Customer Count - 3,200+ organizations" },
        { text: "Thoma Bravo - Darktrace acquisition $5.3B; Abnormal Series D $5.1B valuation" }
      ]} />
    </div>
  );

  const renderContent = () => {
    switch(activeSection) {
      case 'overview': return renderOverview();
      case 'platform': return renderPlatform();
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
              <div className="w-10 h-10 bg-gradient-to-br from-purple-500 to-purple-700 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-lg">D</span>
              </div>
              <div>
                <h1 className="text-xl font-bold text-white">Darktrace / EMAIL</h1>
                <p className="text-slate-400 text-sm">Competitive Intelligence Profile</p>
              </div>
            </div>
            <div className="flex items-center gap-2">
              <span className="px-3 py-1 bg-purple-500/20 text-purple-400 text-xs rounded-full border border-purple-500/30">Self-Learning AI</span>
              <span className="px-3 py-1 bg-emerald-500/20 text-emerald-400 text-xs rounded-full border border-emerald-500/30">Gartner Leader</span>
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
                    className={`w-full text-left px-4 py-3 rounded-lg transition-all flex items-center gap-3 ${activeSection === section.id ? 'bg-purple-600/20 text-purple-400 border border-purple-500/30' : 'text-slate-400 hover:bg-slate-700/50 hover:text-white'}`}>
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

export default DarktraceEmailProfile;
