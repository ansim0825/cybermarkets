"use client";
import React, { useState } from 'react';

const IronscalesProfile = () => {
  const [activeSection, setActiveSection] = useState('overview');

  const sections = [
    { id: 'overview', label: 'Overview', icon: '◉' },
    { id: 'philosophy', label: 'AI + Human', icon: '◈' },
    { id: 'products', label: 'Products', icon: '◆' },
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
      <div className="bg-gradient-to-br from-orange-900/30 to-slate-800/50 rounded-2xl p-8 border border-orange-800/30">
        <div className="flex items-start justify-between">
          <div>
            <h2 className="text-3xl font-bold text-white mb-2">IRONSCALES</h2>
            <p className="text-orange-400 text-lg">"AI + Human Insights" Email Security</p>
          </div>
          <div className="text-right">
            <p className="text-4xl font-bold text-orange-400">17K+</p>
            <p className="text-slate-400 text-sm">Customers</p>
          </div>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-8">
          <div className="bg-slate-800/50 rounded-xl p-4 text-center">
            <p className="text-2xl font-bold text-white">$95-126M</p>
            <p className="text-slate-400 text-sm">Total Funding</p>
          </div>
          <div className="bg-slate-800/50 rounded-xl p-4 text-center">
            <p className="text-2xl font-bold text-white">30K+</p>
            <p className="text-slate-400 text-sm">Analyst Community</p>
          </div>
          <div className="bg-slate-800/50 rounded-xl p-4 text-center">
            <p className="text-2xl font-bold text-white">Visionary</p>
            <p className="text-slate-400 text-sm">Gartner MQ 2024</p>
          </div>
          <div className="bg-slate-800/50 rounded-xl p-4 text-center">
            <p className="text-2xl font-bold text-white">4.8/5</p>
            <p className="text-slate-400 text-sm">Gartner Rating</p>
          </div>
        </div>
      </div>

      <div className="grid md:grid-cols-2 gap-6">
        <div className="bg-slate-800/50 rounded-xl p-6 border border-slate-700">
          <h3 className="text-lg font-semibold text-orange-400 mb-4">Company Profile</h3>
          <div className="space-y-3">
            <div className="flex justify-between"><span className="text-slate-400">Founded</span><span className="text-white">2013 (Israel)</span></div>
            <div className="flex justify-between"><span className="text-slate-400">Headquarters</span><span className="text-white">Atlanta, GA</span></div>
            <div className="flex justify-between"><span className="text-slate-400">Heritage</span><span className="text-white">8200 EISP Incubator</span></div>
            <div className="flex justify-between"><span className="text-slate-400">Founder/CEO</span><span className="text-white">Eyal Benishti</span></div>
          </div>
        </div>
        <div className="bg-slate-800/50 rounded-xl p-6 border border-slate-700">
          <h3 className="text-lg font-semibold text-orange-400 mb-4">Key Differentiators</h3>
          <div className="space-y-3 text-sm">
            <div className="flex justify-between"><span className="text-slate-400">Philosophy</span><span className="text-white">AI + Human Insights</span></div>
            <div className="flex justify-between"><span className="text-slate-400">Native SAT</span><span className="text-emerald-400">Integrated</span></div>
            <div className="flex justify-between"><span className="text-slate-400">Deepfake Detection</span><span className="text-cyan-400">First to Market</span></div>
            <div className="flex justify-between"><span className="text-slate-400">GTM Focus</span><span className="text-white">MSP/Channel Strong</span></div>
          </div>
        </div>
      </div>

      <div className="bg-gradient-to-r from-amber-900/30 to-slate-800/50 rounded-xl p-6 border border-amber-800/30">
        <h3 className="text-lg font-semibold text-amber-400 mb-4">⚡ Why This Matters</h3>
        <p className="text-slate-300">IRONSCALES represents a philosophically distinct approach: combining AI-driven detection with integrated phishing simulation and SAT, powered by a community of 30K+ security analysts providing human feedback. Different GTM (MSP-first) and pricing ($3.49-8.33/user) than Abnormal's enterprise-direct model.</p>
      </div>

      <CitationFooter citations={[
        { text: "IRONSCALES Company Profile - Founded 2013, 8200 EISP incubator" },
        { text: "Crunchbase - Total funding $95-126M" },
        { text: "Gartner Magic Quadrant for Email Security, 2024 - Visionary" },
        { text: "IRONSCALES Customer Count - 17,000+ organizations" }
      ]} />
    </div>
  );

  const renderPhilosophy = () => (
    <div className="space-y-6">
      <h2 className="text-2xl font-bold text-white mb-6">The "AI + Human Insights" Philosophy</h2>
      
      <div className="bg-orange-900/20 rounded-xl p-6 border border-orange-700/30">
        <h3 className="text-xl font-semibold text-orange-400 mb-4">Core Argument</h3>
        <p className="text-slate-300 mb-4">IRONSCALES' fundamental positioning is that AI alone is insufficient for email security:</p>
        <div className="space-y-3">
          {[
            { step: '1', text: 'AI catches most threats — machine learning detects patterns, anomalies, known-bad indicators' },
            { step: '2', text: 'AI misses novel attacks — zero-day threats and sophisticated social engineering can evade AI' },
            { step: '3', text: 'Humans see what AI misses — employees have context AI lacks ("This doesn\'t sound like my boss")' },
            { step: '4', text: 'Human insights improve AI — when employees report threats, that intelligence trains the AI' },
            { step: '5', text: 'Trained humans report better — SAT reduces false positives and improves threat identification' }
          ].map((item, i) => (
            <div key={i} className="flex gap-4 items-start">
              <div className="w-8 h-8 bg-orange-500/20 rounded-full flex items-center justify-center flex-shrink-0">
                <span className="text-orange-400 font-bold">{item.step}</span>
              </div>
              <p className="text-slate-300 text-sm">{item.text}</p>
            </div>
          ))}
        </div>
      </div>

      <div className="bg-slate-800/50 rounded-xl p-6 border border-slate-700">
        <h3 className="text-xl font-semibold text-white mb-4">IRONSCALES vs Abnormal Philosophy</h3>
        <div className="overflow-x-auto">
          <table className="w-full text-sm">
            <thead>
              <tr className="border-b border-slate-700">
                <th className="text-left py-3 text-slate-400">Dimension</th>
                <th className="text-left py-3 text-orange-400">IRONSCALES</th>
                <th className="text-left py-3 text-cyan-400">Abnormal</th>
              </tr>
            </thead>
            <tbody className="text-slate-300">
              <tr className="border-b border-slate-800">
                <td className="py-3">Philosophy</td>
                <td className="py-3">"AI + Human Insights"</td>
                <td className="py-3 text-cyan-300">"Pure Behavioral AI"</td>
              </tr>
              <tr className="border-b border-slate-800">
                <td className="py-3">Human Role</td>
                <td className="py-3">Active: report, train, validate</td>
                <td className="py-3 text-cyan-300">Passive: AI handles everything</td>
              </tr>
              <tr className="border-b border-slate-800">
                <td className="py-3">Training Integration</td>
                <td className="py-3">Native SAT + phishing simulation</td>
                <td className="py-3 text-cyan-300">JIT trigger-based only</td>
              </tr>
              <tr>
                <td className="py-3">Community Intel</td>
                <td className="py-3">30K+ analyst network</td>
                <td className="py-3 text-cyan-300">Proprietary AI only</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>

      <CitationFooter citations={[
        { text: "IRONSCALES Product Philosophy Documentation" },
        { text: "IRONSCALES Federation - 30,000+ security analyst community" }
      ]} />
    </div>
  );

  const renderCompetitive = () => (
    <div className="space-y-6">
      <h2 className="text-2xl font-bold text-white mb-6">Strategic Implications for Abnormal</h2>
      
      <div className="grid md:grid-cols-2 gap-6">
        <div className="bg-orange-900/20 rounded-xl p-6 border border-orange-700/30">
          <h3 className="text-lg font-semibold text-orange-400 mb-4">Where IRONSCALES Competes Strongly</h3>
          <ul className="space-y-3 text-slate-300 text-sm">
            <li>• <strong>MSP/Channel Deals:</strong> Multi-tenant, white-label, bundled-SAT purpose-built for MSPs</li>
            <li>• <strong>Price-Sensitive Buyers:</strong> $3.49-8.33/user significantly undercuts Abnormal</li>
            <li>• <strong>Compliance-Driven:</strong> Native SOC2/HIPAA/PCI training + phishing simulation</li>
            <li>• <strong>Deepfake Concerns:</strong> First-to-market real-time deepfake protection (2025)</li>
          </ul>
        </div>
        <div className="bg-cyan-900/20 rounded-xl p-6 border border-cyan-700/30">
          <h3 className="text-lg font-semibold text-cyan-400 mb-4">Where Abnormal Wins</h3>
          <ul className="space-y-3 text-slate-300 text-sm">
            <li>• <strong>Large Enterprise:</strong> Behavioral AI depth resonates with Fortune 500</li>
            <li>• <strong>SOC Efficiency:</strong> "Hands-off" automation appeals to understaffed teams</li>
            <li>• <strong>Analyst Recognition:</strong> Gartner Leader vs. Visionary</li>
            <li>• <strong>Valuation/Momentum:</strong> $5.1B signals market confidence</li>
          </ul>
        </div>
      </div>

      <div className="bg-slate-800/50 rounded-xl p-6 border border-slate-700">
        <h3 className="text-xl font-semibold text-white mb-4">Positioning Recommendations</h3>
        <div className="space-y-4">
          <div className="bg-slate-900/50 rounded-lg p-4">
            <h4 className="font-medium text-amber-400 mb-2">"Human Insights" Argument</h4>
            <p className="text-slate-300 text-sm italic">"Our behavioral AI learns from millions of communication patterns automatically—no manual reporting required. We don't burden employees with security work; we protect them while they work."</p>
          </div>
          <div className="bg-slate-900/50 rounded-lg p-4">
            <h4 className="font-medium text-amber-400 mb-2">SAT Integration</h4>
            <p className="text-slate-300 text-sm italic">"Training is valuable, but detection is paramount. We integrate with best-of-breed SAT providers (KnowBe4, Proofpoint) while focusing 100% on stopping attacks."</p>
          </div>
          <div className="bg-slate-900/50 rounded-lg p-4">
            <h4 className="font-medium text-amber-400 mb-2">Price Competition</h4>
            <p className="text-slate-300 text-sm italic">"Our ROI comes from breach prevention, not training bundling. One prevented BEC attack pays for years of Abnormal."</p>
          </div>
        </div>
      </div>

      <CitationFooter citations={[
        { text: "Gartner Magic Quadrant 2024 - Abnormal Leader, IRONSCALES Visionary" },
        { text: "IRONSCALES Pricing - $3.49-8.33/user/month range" },
        { text: "IRONSCALES Deepfake Protection Launch, RSA 2025" }
      ]} />
    </div>
  );

  const renderContent = () => {
    switch(activeSection) {
      case 'overview': return renderOverview();
      case 'philosophy': return renderPhilosophy();
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
              <div className="w-10 h-10 bg-gradient-to-br from-orange-500 to-orange-700 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-lg">I</span>
              </div>
              <div>
                <h1 className="text-xl font-bold text-white">IRONSCALES</h1>
                <p className="text-slate-400 text-sm">Competitive Intelligence Profile</p>
              </div>
            </div>
            <div className="flex items-center gap-2">
              <span className="px-3 py-1 bg-orange-500/20 text-orange-400 text-xs rounded-full border border-orange-500/30">AI + Human</span>
              <span className="px-3 py-1 bg-amber-500/20 text-amber-400 text-xs rounded-full border border-amber-500/30">Gartner Visionary</span>
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
                    className={`w-full text-left px-4 py-3 rounded-lg transition-all flex items-center gap-3 ${activeSection === section.id ? 'bg-orange-600/20 text-orange-400 border border-orange-500/30' : 'text-slate-400 hover:bg-slate-700/50 hover:text-white'}`}>
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

export default IronscalesProfile;
