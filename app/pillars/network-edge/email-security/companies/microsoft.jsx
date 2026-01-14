"use client";
import React, { useState } from 'react';

const MicrosoftDefenderProfile = () => {
  const [activeSection, setActiveSection] = useState('overview');

  const sections = [
    { id: 'overview', label: 'Overview', icon: '◉' },
    { id: 'tiers', label: 'Product Tiers', icon: '◈' },
    { id: 'gaps', label: 'Security Gaps', icon: '◆' },
    { id: 'competitive', label: 'vs Abnormal', icon: '●' },
    { id: 'copilot', label: 'AI Evolution', icon: '◐' }
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
      <div className="bg-gradient-to-br from-blue-900/30 to-slate-800/50 rounded-2xl p-8 border border-blue-800/30">
        <div className="flex items-start justify-between">
          <div>
            <h2 className="text-3xl font-bold text-white mb-2">Microsoft Defender for Office 365</h2>
            <p className="text-blue-400 text-lg">The "Good Enough" Baseline Every Vendor Competes Against</p>
          </div>
          <div className="text-right">
            <p className="text-4xl font-bold text-blue-400">3.7M+</p>
            <p className="text-slate-400 text-sm">M365 Companies</p>
          </div>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-8">
          <div className="bg-slate-800/50 rounded-xl p-4 text-center">
            <p className="text-2xl font-bold text-white">84T</p>
            <p className="text-slate-400 text-sm">Daily Threat Signals</p>
          </div>
          <div className="bg-slate-800/50 rounded-xl p-4 text-center">
            <p className="text-2xl font-bold text-white">30B+</p>
            <p className="text-slate-400 text-sm">Phishing Blocked (2024)</p>
          </div>
          <div className="bg-slate-800/50 rounded-xl p-4 text-center">
            <p className="text-2xl font-bold text-white">Leader</p>
            <p className="text-slate-400 text-sm">Gartner MQ 2025</p>
          </div>
          <div className="bg-slate-800/50 rounded-xl p-4 text-center">
            <p className="text-2xl font-bold text-red-400">88%</p>
            <p className="text-slate-400 text-sm">BEC Miss Rate</p>
          </div>
        </div>
      </div>

      <div className="bg-gradient-to-r from-amber-900/30 to-slate-800/50 rounded-xl p-6 border border-amber-800/30">
        <h3 className="text-lg font-semibold text-amber-400 mb-4">⚡ Strategic Significance</h3>
        <p className="text-slate-300 mb-4">Microsoft Defender for Office 365 is the 800-pound gorilla in email security—not because it's the best, but because it's bundled with every M365 deployment. Every pure-play vendor is fundamentally selling against Microsoft's "good enough" baseline.</p>
        <div className="grid md:grid-cols-2 gap-4">
          <div className="bg-emerald-900/20 rounded-lg p-4 border border-emerald-700/30">
            <p className="text-emerald-400 font-medium">Platform Strength</p>
            <p className="text-slate-400 text-sm">Native integration, XDR correlation, "free" in E5 bundle, 84T daily signals</p>
          </div>
          <div className="bg-red-900/20 rounded-lg p-4 border border-red-700/30">
            <p className="text-red-400 font-medium">BEC Weakness</p>
            <p className="text-slate-400 text-sm">88% miss rate on conversation hijacking—the core opportunity for behavioral AI</p>
          </div>
        </div>
      </div>

      <div className="bg-slate-800/50 rounded-xl p-6 border border-slate-700">
        <h3 className="text-lg font-semibold text-white mb-4">Key Insight</h3>
        <p className="text-slate-300">Microsoft's own transparency benchmarking acknowledges that combining ICES solutions with MDO improves detection. The "layered defense" narrative is now validated by Microsoft itself, creating the primary value proposition for pure-play vendors like Abnormal.</p>
      </div>

      <CitationFooter citations={[
        { text: "Microsoft 365 Customer Statistics - 3.7M+ companies globally" },
        { text: "Microsoft Security Blog - 84 trillion daily threat signals" },
        { text: "Gartner Magic Quadrant for Email Security Platforms, 2025 - Leader" },
        { text: "SE Labs / Third-party testing - 88% conversation hijacking miss rate" }
      ]} />
    </div>
  );

  const renderTiers = () => (
    <div className="space-y-6">
      <h2 className="text-2xl font-bold text-white mb-6">Product Tiers & Pricing</h2>
      
      <div className="bg-slate-800/50 rounded-xl p-6 border border-slate-700">
        <h3 className="text-xl font-semibold text-white mb-4">MDO Product Tiers</h3>
        <div className="space-y-4">
          <div className="bg-slate-900/50 rounded-lg p-4 border border-slate-700">
            <div className="flex justify-between items-center mb-2">
              <h4 className="font-medium text-white">EOP (Exchange Online Protection)</h4>
              <span className="text-xs px-2 py-1 bg-slate-700 text-slate-300 rounded">Baseline</span>
            </div>
            <p className="text-slate-400 text-sm">Anti-spam, anti-malware, basic filtering. Included with all Exchange Online mailboxes.</p>
          </div>
          <div className="bg-slate-900/50 rounded-lg p-4 border border-blue-700/30">
            <div className="flex justify-between items-center mb-2">
              <h4 className="font-medium text-white">MDO Plan 1</h4>
              <span className="text-xs px-2 py-1 bg-blue-500/20 text-blue-400 rounded">~$2/user/mo</span>
            </div>
            <p className="text-slate-400 text-sm">Safe Links, Safe Attachments, anti-phishing, Teams/SharePoint/OneDrive protection</p>
            <p className="text-slate-500 text-xs mt-1">Included in: Business Premium</p>
          </div>
          <div className="bg-slate-900/50 rounded-lg p-4 border border-purple-700/30">
            <div className="flex justify-between items-center mb-2">
              <h4 className="font-medium text-white">MDO Plan 2</h4>
              <span className="text-xs px-2 py-1 bg-purple-500/20 text-purple-400 rounded">~$5/user/mo</span>
            </div>
            <p className="text-slate-400 text-sm">Plan 1 + Threat Explorer, AIR (Automated Investigation), Attack Simulation, XDR integration</p>
            <p className="text-slate-500 text-xs mt-1">Included in: M365 E5/A5/G5</p>
          </div>
        </div>
      </div>

      <div className="bg-amber-900/20 rounded-xl p-6 border border-amber-700/30">
        <h3 className="text-xl font-semibold text-amber-400 mb-4">The "Free" Problem</h3>
        <p className="text-slate-300 mb-4">Most customers get MDO bundled: "It's already included in our E5 license" is the most common justification for not adding third-party email security. Pure-play vendors must overcome this with demonstrable superior value.</p>
        <div className="bg-slate-800/50 rounded-lg p-4">
          <p className="text-slate-300 text-sm"><strong>E5 Total Cost:</strong> ~$57/user/month includes MDO P2 + Security Copilot (400 SCUs/month per 1,000 users)</p>
        </div>
      </div>

      <CitationFooter citations={[
        { text: "Microsoft 365 Pricing Documentation" },
        { text: "Microsoft Ignite 2025 - Security Copilot included in E5 announcement" }
      ]} />
    </div>
  );

  const renderGaps = () => (
    <div className="space-y-6">
      <h2 className="text-2xl font-bold text-white mb-6">Security Gaps (Pure-Play Opportunity)</h2>
      
      <div className="bg-red-900/20 rounded-xl p-6 border border-red-700/30">
        <h3 className="text-xl font-semibold text-red-400 mb-4">Where Microsoft Defender Falls Short</h3>
        <div className="grid gap-4">
          {[
            { gap: 'BEC/Social Engineering', detail: 'SEG architecture focuses on known threats and payloads. Struggles with text-based attacks relying on intent rather than malicious content. 88% miss rate on conversation hijacking.', severity: 'critical' },
            { gap: 'Behavioral Analysis', detail: 'ICES solutions operate at mailbox level, learning communication patterns. MDO approach is more static/rule-based (though LLM integration is addressing this).', severity: 'high' },
            { gap: 'Internal Threat Detection', detail: 'MDO has implicit trust of internal communications. Compromised accounts sending BEC from within the org often bypass detection.', severity: 'high' },
            { gap: 'Testability Risk', detail: 'Publicly available, widely deployed—attackers can test campaigns specifically against MDO detection.', severity: 'medium' },
            { gap: 'Configuration Burden', detail: 'Protection effectiveness varies significantly based on configuration. Default settings leave gaps; optimal configuration requires expertise.', severity: 'medium' },
            { gap: 'Impersonation Limits', detail: 'Anti-phishing policies limited to 60 internal/external addresses for impersonation protection.', severity: 'low' }
          ].map((item, i) => (
            <div key={i} className="bg-slate-800/50 rounded-lg p-4">
              <div className="flex justify-between items-start mb-2">
                <h4 className="font-medium text-white">{item.gap}</h4>
                <span className={`text-xs px-2 py-1 rounded ${item.severity === 'critical' ? 'bg-red-500/20 text-red-400' : item.severity === 'high' ? 'bg-amber-500/20 text-amber-400' : 'bg-slate-700 text-slate-400'}`}>{item.severity}</span>
              </div>
              <p className="text-slate-400 text-sm">{item.detail}</p>
            </div>
          ))}
        </div>
      </div>

      <CitationFooter citations={[
        { text: "SE Labs Email Security Testing - BEC detection efficacy" },
        { text: "Microsoft Security Documentation - Anti-phishing policy limits" },
        { text: "Third-party security assessments - Configuration complexity analysis" }
      ]} />
    </div>
  );

  const renderCompetitive = () => (
    <div className="space-y-6">
      <h2 className="text-2xl font-bold text-white mb-6">Competitive Implications for Abnormal</h2>
      
      <div className="bg-cyan-900/20 rounded-xl p-6 border border-cyan-700/30">
        <h3 className="text-xl font-semibold text-cyan-400 mb-4">The Core Pitch</h3>
        <p className="text-slate-300 text-lg italic">"Abnormal exists because Microsoft's SEG architecture fundamentally cannot detect BEC, account takeover, and social engineering attacks that rely on intent rather than payload. MDO's 88% miss rate on conversation hijacking validates Abnormal's behavioral AI approach."</p>
      </div>

      <div className="grid md:grid-cols-2 gap-6">
        <div className="bg-blue-900/20 rounded-xl p-6 border border-blue-700/30">
          <h3 className="text-lg font-semibold text-blue-400 mb-4">Microsoft Strengths</h3>
          <ul className="space-y-2 text-slate-300 text-sm">
            <li>• <strong>Native Integration:</strong> No MX changes, seamless with Outlook/Teams/SharePoint</li>
            <li>• <strong>XDR Correlation:</strong> Email signals correlate with endpoint, identity, cloud</li>
            <li>• <strong>Security Copilot:</strong> AI capabilities for investigation and threat hunting</li>
            <li>• <strong>Telemetry Scale:</strong> 84 trillion daily signals from millions of organizations</li>
            <li>• <strong>Platform Economics:</strong> Bundled pricing makes standalone purchases hard to justify</li>
          </ul>
        </div>
        <div className="bg-cyan-900/20 rounded-xl p-6 border border-cyan-700/30">
          <h3 className="text-lg font-semibold text-cyan-400 mb-4">Abnormal Advantages</h3>
          <ul className="space-y-2 text-slate-300 text-sm">
            <li>• <strong>BEC Detection:</strong> Purpose-built behavioral AI for payload-less attacks</li>
            <li>• <strong>Account Takeover:</strong> Detects compromised internal accounts Microsoft trusts</li>
            <li>• <strong>Cross-Tenant Intel:</strong> Threat intelligence across 3,200+ organizations</li>
            <li>• <strong>No Configuration:</strong> Works out-of-box vs. MDO's complexity</li>
            <li>• <strong>Pure-Play Focus:</strong> 100% R&D on email vs. broad portfolio</li>
          </ul>
        </div>
      </div>

      <div className="bg-slate-800/50 rounded-xl p-6 border border-slate-700">
        <h3 className="text-xl font-semibold text-white mb-4">Key Battlegrounds 2025-2026</h3>
        <div className="grid md:grid-cols-2 gap-4">
          {[
            { battle: 'BEC Detection Efficacy', detail: 'Head-to-head detection rates on social engineering attacks. Pure-play must win decisively.' },
            { battle: 'Account Takeover', detail: 'Detecting compromised accounts sending internal phishing. MDO weakness; Abnormal strength.' },
            { battle: 'Time to Value', detail: 'How quickly organizations see protection improvement? MDO requires configuration; ICES promises immediate behavioral learning.' },
            { battle: 'ROI Quantification', detail: 'With MDO "free" in bundles, pure-play must demonstrate concrete value to justify incremental spend.' }
          ].map((item, i) => (
            <div key={i} className="bg-slate-900/50 rounded-lg p-4">
              <h4 className="font-medium text-amber-400">{item.battle}</h4>
              <p className="text-slate-400 text-sm mt-1">{item.detail}</p>
            </div>
          ))}
        </div>
      </div>

      <CitationFooter citations={[
        { text: "Microsoft Security Blog - Defense-in-Depth Benchmarking Studies" },
        { text: "Gartner Market Guide for Email Security - Layered defense validation" },
        { text: "FBI IC3 Report - BEC losses justify behavioral AI investment" }
      ]} />
    </div>
  );

  const renderCopilot = () => (
    <div className="space-y-6">
      <h2 className="text-2xl font-bold text-white mb-6">Microsoft's AI Evolution (The Threat)</h2>
      
      <div className="bg-gradient-to-br from-purple-900/30 to-slate-800/50 rounded-xl p-6 border border-purple-700/30">
        <h3 className="text-xl font-semibold text-purple-400 mb-4">Security Copilot Integration (2025)</h3>
        <p className="text-slate-300 mb-4">Microsoft's most significant competitive move: integrating Security Copilot agents directly into Defender workflows. M365 E5 customers now receive Security Copilot at no additional cost.</p>
        <div className="grid md:grid-cols-2 gap-4">
          <div className="bg-slate-800/50 rounded-lg p-4">
            <h4 className="font-medium text-white">Phishing Triage Agent (GA Nov 2025)</h4>
            <p className="text-slate-400 text-sm mt-1">Autonomously analyzes user-reported phishing using LLM-based reasoning. Claims 550% faster detection, 95%+ false positive auto-filtering.</p>
          </div>
          <div className="bg-slate-800/50 rounded-lg p-4">
            <h4 className="font-medium text-white">LLM-Based BEC Detection</h4>
            <p className="text-slate-400 text-sm mt-1">New LLM filters analyze email language and infer intent—direct response to MDO's BEC weakness.</p>
          </div>
        </div>
      </div>

      <div className="bg-amber-900/20 rounded-xl p-6 border border-amber-700/30">
        <h3 className="text-xl font-semibold text-amber-400 mb-4">⚠️ Strategic Implication</h3>
        <p className="text-slate-300 mb-4">Microsoft is actively addressing its email security weaknesses. Abnormal must stay ahead on detection efficacy and demonstrate measurable superiority as Microsoft's AI capabilities improve.</p>
        <div className="bg-slate-800/50 rounded-lg p-4">
          <p className="text-slate-300 text-sm"><strong>Key Watch:</strong> Microsoft's LLM-based BEC detection and Security Copilot represent direct competitive response. Monitor efficacy claims vs. real-world performance.</p>
        </div>
      </div>

      <div className="bg-slate-800/50 rounded-xl p-6 border border-slate-700">
        <h3 className="text-xl font-semibold text-white mb-4">Microsoft 2025-2026 Announcements</h3>
        <div className="space-y-3">
          {[
            { date: 'March 2025', event: 'Security Copilot agents announced, including Phishing Triage Agent' },
            { date: 'April 2025', event: 'Teams protection GA in MDO' },
            { date: 'October 2025', event: 'E5 Security renamed to Microsoft Defender Suite' },
            { date: 'November 2025', event: 'Security Copilot included in M365 E5 (Ignite announcement)' },
            { date: 'November 2025', event: 'Phishing Triage Agent GA' },
            { date: 'December 2025', event: 'Gartner MQ Leader recognition' }
          ].map((item, i) => (
            <div key={i} className="flex gap-4 items-start">
              <div className="w-28 flex-shrink-0"><span className="text-purple-400 text-sm font-medium">{item.date}</span></div>
              <p className="text-slate-300 text-sm">{item.event}</p>
            </div>
          ))}
        </div>
      </div>

      <CitationFooter citations={[
        { text: "Microsoft Ignite 2025 - Security Copilot announcements" },
        { text: "Microsoft Security Blog - Phishing Triage Agent GA, November 2025" },
        { text: "Microsoft 365 Roadmap - Email security feature releases" }
      ]} />
    </div>
  );

  const renderContent = () => {
    switch(activeSection) {
      case 'overview': return renderOverview();
      case 'tiers': return renderTiers();
      case 'gaps': return renderGaps();
      case 'competitive': return renderCompetitive();
      case 'copilot': return renderCopilot();
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
                <span className="text-white font-bold text-lg">M</span>
              </div>
              <div>
                <h1 className="text-xl font-bold text-white">Microsoft Defender for O365</h1>
                <p className="text-slate-400 text-sm">Platform Incumbent Profile</p>
              </div>
            </div>
            <div className="flex items-center gap-2">
              <span className="px-3 py-1 bg-blue-500/20 text-blue-400 text-xs rounded-full border border-blue-500/30">Platform Incumbent</span>
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

export default MicrosoftDefenderProfile;
