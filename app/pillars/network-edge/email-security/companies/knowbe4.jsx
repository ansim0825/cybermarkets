import React, { useState } from 'react';

const KnowBe4Profile = () => {
  const [activeSection, setActiveSection] = useState('overview');

  const sections = [
    { id: 'overview', label: 'Overview', icon: '◉' },
    { id: 'egress', label: 'Egress Acquisition', icon: '◈' },
    { id: 'products', label: 'HRM+ Platform', icon: '◆' },
    { id: 'competitive', label: 'vs Abnormal', icon: '●' }
  ];

  const CitationFooter = ({ citations }) => (
    <div className="mt-8 pt-4 border-t border-slate-700">
      <p className="text-xs text-slate-500 uppercase tracking-wider mb-2">Sources</p>
      <div className="space-y-1">
        {citations.map((cite, i) => (
          <p key={i} className="text-xs text-slate-400">[{i + 1}] {cite.text}</p>
        ))}
      </div>
    </div>
  );

  const renderOverview = () => (
    <div className="space-y-6">
      <div className="bg-gradient-to-br from-amber-900/30 to-slate-800/50 rounded-2xl p-8 border border-amber-800/30">
        <div className="flex items-start justify-between">
          <div>
            <h2 className="text-3xl font-bold text-white mb-2">KnowBe4</h2>
            <p className="text-amber-400 text-lg">SAT Leader → Human Risk Management Platform</p>
          </div>
          <div className="text-right">
            <p className="text-4xl font-bold text-amber-400">$4.6B</p>
            <p className="text-slate-400 text-sm">Vista Acquisition (Feb 2023)</p>
          </div>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-8">
          <div className="bg-slate-800/50 rounded-xl p-4 text-center">
            <p className="text-2xl font-bold text-white">70K+</p>
            <p className="text-slate-400 text-sm">SAT Customers</p>
          </div>
          <div className="bg-slate-800/50 rounded-xl p-4 text-center">
            <p className="text-2xl font-bold text-white">2,000+</p>
            <p className="text-slate-400 text-sm">Employees</p>
          </div>
          <div className="bg-slate-800/50 rounded-xl p-4 text-center">
            <p className="text-2xl font-bold text-white">Leader</p>
            <p className="text-slate-400 text-sm">Gartner MQ 2024/25</p>
          </div>
          <div className="bg-slate-800/50 rounded-xl p-4 text-center">
            <p className="text-2xl font-bold text-white">1,300+</p>
            <p className="text-slate-400 text-sm">Training Modules</p>
          </div>
        </div>
      </div>

      <div className="bg-gradient-to-r from-red-900/30 to-slate-800/50 rounded-xl p-6 border border-red-800/30">
        <h3 className="text-lg font-semibold text-red-400 mb-4">⚡ Strategic Transformation (2024)</h3>
        <p className="text-slate-300 mb-4">KnowBe4 acquired Egress in April 2024, transforming from security awareness training provider to comprehensive Human Risk Management (HRM) platform with email security capabilities. This is a fundamentally different competitive dynamic than pure-play email vendors.</p>
        <div className="grid md:grid-cols-2 gap-4">
          <div className="bg-slate-800/50 rounded-lg p-4">
            <p className="text-slate-400 text-sm"><strong>Before:</strong> World's largest SAT platform (training + phishing simulation)</p>
          </div>
          <div className="bg-slate-800/50 rounded-lg p-4">
            <p className="text-slate-400 text-sm"><strong>After:</strong> HRM+ platform (SAT + email security + real-time coaching + risk scoring)</p>
          </div>
        </div>
      </div>

      <div className="grid md:grid-cols-2 gap-6">
        <div className="bg-slate-800/50 rounded-xl p-6 border border-slate-700">
          <h3 className="text-lg font-semibold text-amber-400 mb-4">Company Profile</h3>
          <div className="space-y-3">
            <div className="flex justify-between"><span className="text-slate-400">Founded</span><span className="text-white">2010 by Stu Sjouwerman</span></div>
            <div className="flex justify-between"><span className="text-slate-400">Headquarters</span><span className="text-white">Clearwater, FL</span></div>
            <div className="flex justify-between"><span className="text-slate-400">CEO</span><span className="text-white">Bryan Palma (May 2025)</span></div>
            <div className="flex justify-between"><span className="text-slate-400">Ownership</span><span className="text-white">Vista Equity Partners</span></div>
          </div>
        </div>
        <div className="bg-slate-800/50 rounded-xl p-6 border border-slate-700">
          <h3 className="text-lg font-semibold text-amber-400 mb-4">Recognition</h3>
          <div className="space-y-3 text-sm">
            <div className="flex justify-between"><span className="text-slate-400">Email Security MQ</span><span className="text-emerald-400">Gartner Leader 2024/25</span></div>
            <div className="flex justify-between"><span className="text-slate-400">SAT G2 Ranking</span><span className="text-emerald-400">#1 (20+ quarters)</span></div>
            <div className="flex justify-between"><span className="text-slate-400">Inc. 5000</span><span className="text-white">5 consecutive years</span></div>
            <div className="flex justify-between"><span className="text-slate-400">Kevin Mitnick</span><span className="text-white">Chief Hacking Officer (d. 2023)</span></div>
          </div>
        </div>
      </div>

      <CitationFooter citations={[
        { text: "Vista Equity Partners - KnowBe4 Acquisition $4.6B, February 2023" },
        { text: "KnowBe4 Egress Acquisition Announcement, April 2024" },
        { text: "Gartner Magic Quadrant for Email Security Platforms, 2024 & 2025 - Leader" },
        { text: "G2 - KnowBe4 #1 Security Awareness Training, 20+ consecutive quarters" }
      ]} />
    </div>
  );

  const renderEgress = () => (
    <div className="space-y-6">
      <h2 className="text-2xl font-bold text-white mb-6">Egress Acquisition - The Transformation</h2>
      
      <div className="bg-slate-800/50 rounded-xl p-6 border border-slate-700">
        <h3 className="text-xl font-semibold text-white mb-4">Egress Background</h3>
        <div className="grid md:grid-cols-2 gap-4">
          <div className="space-y-3">
            <div className="flex justify-between text-sm"><span className="text-slate-400">Founded</span><span className="text-white">2007 (London)</span></div>
            <div className="flex justify-between text-sm"><span className="text-slate-400">Founder</span><span className="text-white">Tony Pepper (ex-Check Point)</span></div>
            <div className="flex justify-between text-sm"><span className="text-slate-400">Funding Raised</span><span className="text-white">$40M+</span></div>
            <div className="flex justify-between text-sm"><span className="text-slate-400">Employees</span><span className="text-white">~329 at acquisition</span></div>
          </div>
          <div className="space-y-3">
            <div className="flex justify-between text-sm"><span className="text-slate-400">Focus</span><span className="text-white">Cloud email security</span></div>
            <div className="flex justify-between text-sm"><span className="text-slate-400">Strength</span><span className="text-white">Inbound + Outbound DLP</span></div>
            <div className="flex justify-between text-sm"><span className="text-slate-400">Technology</span><span className="text-white">Behavioral AI, NLP/NLU</span></div>
            <div className="flex justify-between text-sm"><span className="text-slate-400">Gartner Status</span><span className="text-emerald-400">Leader (pre-acquisition)</span></div>
          </div>
        </div>
      </div>

      <div className="bg-gradient-to-br from-emerald-900/20 to-slate-800/50 rounded-xl p-6 border border-emerald-700/30">
        <h3 className="text-xl font-semibold text-emerald-400 mb-4">Strategic Rationale</h3>
        <div className="grid md:grid-cols-2 gap-4">
          {[
            { point: 'Closed-Loop Training', detail: 'Real email threats automatically inform personalized training recommendations' },
            { point: 'Unified Human Risk', detail: 'Combined risk scoring across phishing simulation, training completion, and email threats' },
            { point: 'Platform Cross-Sell', detail: '70,000 SAT customers represent massive email security expansion opportunity' },
            { point: 'Outbound DLP', detail: 'Egress adds misdirected email and data loss prevention—complements inbound focus' }
          ].map((item, i) => (
            <div key={i} className="bg-slate-800/50 rounded-lg p-4">
              <h4 className="font-medium text-white">{item.point}</h4>
              <p className="text-slate-400 text-sm mt-1">{item.detail}</p>
            </div>
          ))}
        </div>
      </div>

      <div className="bg-slate-800/50 rounded-xl p-6 border border-slate-700">
        <h3 className="text-xl font-semibold text-white mb-4">Egress Products (Rebranded)</h3>
        <div className="space-y-3">
          <div className="bg-slate-900/50 rounded-lg p-4">
            <div className="flex justify-between items-center">
              <span className="font-medium text-white">KnowBe4 Defend</span>
              <span className="text-xs px-2 py-1 bg-cyan-500/20 text-cyan-400 rounded">Inbound</span>
            </div>
            <p className="text-slate-400 text-sm mt-1">AI-powered inbound email threat protection (formerly Egress Defend)</p>
          </div>
          <div className="bg-slate-900/50 rounded-lg p-4">
            <div className="flex justify-between items-center">
              <span className="font-medium text-white">KnowBe4 Prevent</span>
              <span className="text-xs px-2 py-1 bg-amber-500/20 text-amber-400 rounded">Outbound DLP</span>
            </div>
            <p className="text-slate-400 text-sm mt-1">Behavioral DLP for misdirected email and data loss prevention</p>
          </div>
          <div className="bg-slate-900/50 rounded-lg p-4">
            <div className="flex justify-between items-center">
              <span className="font-medium text-white">KnowBe4 Protect</span>
              <span className="text-xs px-2 py-1 bg-purple-500/20 text-purple-400 rounded">Encryption</span>
            </div>
            <p className="text-slate-400 text-sm mt-1">Email encryption and secure messaging</p>
          </div>
        </div>
      </div>

      <CitationFooter citations={[
        { text: "KnowBe4 Egress Acquisition Press Release, April 2024" },
        { text: "Egress Company Background and Funding History" },
        { text: "KnowBe4 Product Rebranding Documentation" }
      ]} />
    </div>
  );

  const renderCompetitive = () => (
    <div className="space-y-6">
      <h2 className="text-2xl font-bold text-white mb-6">KnowBe4 vs Abnormal Security</h2>
      
      <div className="bg-slate-800/50 rounded-xl p-6 border border-slate-700">
        <h3 className="text-xl font-semibold text-white mb-4">Different Competitive Dynamic</h3>
        <p className="text-slate-300 mb-4">KnowBe4's strength lies not in email security innovation but in platform integration and installed base leverage. They compete differently than pure-play email vendors.</p>
        <div className="overflow-x-auto">
          <table className="w-full text-sm">
            <thead>
              <tr className="border-b border-slate-700">
                <th className="text-left py-3 text-slate-400">Dimension</th>
                <th className="text-left py-3 text-amber-400">KnowBe4</th>
                <th className="text-left py-3 text-cyan-400">Abnormal</th>
              </tr>
            </thead>
            <tbody className="text-slate-300">
              <tr className="border-b border-slate-800">
                <td className="py-3">Primary Focus</td>
                <td className="py-3">Human Risk Management (SAT + email)</td>
                <td className="py-3 text-cyan-300">Email security specialist</td>
              </tr>
              <tr className="border-b border-slate-800">
                <td className="py-3">Email Approach</td>
                <td className="py-3">ICES via Egress acquisition</td>
                <td className="py-3 text-cyan-300">Purpose-built behavioral AI</td>
              </tr>
              <tr className="border-b border-slate-800">
                <td className="py-3">Customer Base</td>
                <td className="py-3">70,000+ orgs (HRM); growing email</td>
                <td className="py-3 text-cyan-300">3,200+ enterprise customers</td>
              </tr>
              <tr>
                <td className="py-3">Gartner MQ</td>
                <td className="py-3">Leader (2024, 2025)</td>
                <td className="py-3 text-cyan-300">Leader (2024, 2025)</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>

      <div className="grid md:grid-cols-2 gap-6">
        <div className="bg-amber-900/20 rounded-xl p-6 border border-amber-700/30">
          <h3 className="text-lg font-semibold text-amber-400 mb-4">KnowBe4 Competitive Strengths</h3>
          <ul className="space-y-2 text-slate-300 text-sm">
            <li>• <strong>Installed Base:</strong> 70K+ customers for cross-sell opportunity</li>
            <li>• <strong>Integrated Platform:</strong> SAT + email + coaching creates stickier relationships</li>
            <li>• <strong>Closed-Loop Value:</strong> Real threats inform personalized training</li>
            <li>• <strong>Bundle Pricing:</strong> Compelling discounts when bundling SAT + email</li>
            <li>• <strong>Microsoft Relationship:</strong> First ICES vendor in Microsoft's ecosystem (June 2025)</li>
          </ul>
        </div>
        <div className="bg-cyan-900/20 rounded-xl p-6 border border-cyan-700/30">
          <h3 className="text-lg font-semibold text-cyan-400 mb-4">Abnormal Competitive Advantages</h3>
          <ul className="space-y-2 text-slate-300 text-sm">
            <li>• <strong>Email-Native:</strong> Purpose-built for email vs. bolted-on acquisition</li>
            <li>• <strong>Behavioral AI Depth:</strong> Deeper email-specific innovation</li>
            <li>• <strong>Integration Maturity:</strong> Egress integration still evolving; potential friction</li>
            <li>• <strong>Enterprise Focus:</strong> Concentrated expertise in large enterprise</li>
            <li>• <strong>Google Workspace:</strong> Strong GWS support vs. KnowBe4's M365 focus</li>
          </ul>
        </div>
      </div>

      <div className="bg-slate-800/50 rounded-xl p-6 border border-slate-700">
        <h3 className="text-xl font-semibold text-white mb-4">Positioning for Abnormal</h3>
        <div className="space-y-4">
          <div className="bg-slate-900/50 rounded-lg p-4">
            <h4 className="font-medium text-amber-400 mb-2">Against Platform Narrative</h4>
            <p className="text-slate-300 text-sm italic">"Email security is too critical for good-enough bundled solutions. We're the specialist that catches what bundled tools miss."</p>
          </div>
          <div className="bg-slate-900/50 rounded-lg p-4">
            <h4 className="font-medium text-amber-400 mb-2">For Existing KnowBe4 SAT Customers</h4>
            <p className="text-slate-300 text-sm italic">"We complement your KnowBe4 training investment with deeper email protection. Best-of-breed email + KnowBe4 training beats their bundled approach."</p>
          </div>
          <div className="bg-slate-900/50 rounded-lg p-4">
            <h4 className="font-medium text-amber-400 mb-2">Enterprise Differentiation</h4>
            <p className="text-slate-300 text-sm italic">"KnowBe4's all-segment approach may dilute enterprise focus. We're purpose-built for Fortune 500 security requirements."</p>
          </div>
        </div>
      </div>

      <CitationFooter citations={[
        { text: "Gartner Magic Quadrant for Email Security Platforms, 2024 & 2025" },
        { text: "KnowBe4 Customer Count - 70,000+ organizations" },
        { text: "KnowBe4 Microsoft Ecosystem Partnership, June 2025" }
      ]} />
    </div>
  );

  const renderContent = () => {
    switch(activeSection) {
      case 'overview': return renderOverview();
      case 'egress': return renderEgress();
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
              <div className="w-10 h-10 bg-gradient-to-br from-amber-500 to-amber-700 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-lg">K</span>
              </div>
              <div>
                <h1 className="text-xl font-bold text-white">KnowBe4</h1>
                <p className="text-slate-400 text-sm">Competitive Intelligence Profile</p>
              </div>
            </div>
            <div className="flex items-center gap-2">
              <span className="px-3 py-1 bg-amber-500/20 text-amber-400 text-xs rounded-full border border-amber-500/30">HRM Platform</span>
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
                    className={`w-full text-left px-4 py-3 rounded-lg transition-all flex items-center gap-3 ${activeSection === section.id ? 'bg-amber-600/20 text-amber-400 border border-amber-500/30' : 'text-slate-400 hover:bg-slate-700/50 hover:text-white'}`}>
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

export default KnowBe4Profile;
