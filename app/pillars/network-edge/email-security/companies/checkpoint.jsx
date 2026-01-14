import React, { useState } from 'react';

const CheckPointAvananProfile = () => {
  const [activeSection, setActiveSection] = useState('overview');

  const sections = [
    { id: 'overview', label: 'Overview', icon: '◉' },
    { id: 'acquisition', label: 'Acquisition Story', icon: '◈' },
    { id: 'architecture', label: 'Architecture', icon: '◇' },
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
          <p key={i} className="text-xs text-slate-400">
            [{i + 1}] {cite.url ? (
              <a href={cite.url} target="_blank" rel="noopener noreferrer" className="text-red-400 hover:underline">{cite.text}</a>
            ) : cite.text}
          </p>
        ))}
      </div>
      <div className="mt-4 pt-4 border-t border-slate-800">
        <p className="text-xs text-slate-600 italic">Research compiled January 2026 • Andy Simko Portfolio</p>
      </div>
    </div>
  );

  const renderOverview = () => (
    <div className="space-y-6">
      <div className="bg-gradient-to-br from-red-900/30 to-slate-800/50 rounded-2xl p-8 border border-red-800/30">
        <div className="flex items-start justify-between">
          <div>
            <h2 className="text-3xl font-bold text-white mb-2">Check Point / Avanan</h2>
            <p className="text-red-400 text-lg">Acquisition-Driven Cloud Email Security</p>
          </div>
          <div className="text-right">
            <p className="text-4xl font-bold text-red-400">$100M</p>
            <p className="text-slate-400 text-sm">Email Security ARR (2024)</p>
          </div>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-8">
          <div className="bg-slate-800/50 rounded-xl p-4 text-center">
            <p className="text-2xl font-bold text-white">$227-300M</p>
            <p className="text-slate-400 text-sm">Acquisition (2021)</p>
          </div>
          <div className="bg-slate-800/50 rounded-xl p-4 text-center">
            <p className="text-2xl font-bold text-white">8x</p>
            <p className="text-slate-400 text-sm">Customer Growth (3yr)</p>
          </div>
          <div className="bg-slate-800/50 rounded-xl p-4 text-center">
            <p className="text-2xl font-bold text-white">99.91%</p>
            <p className="text-slate-400 text-sm">Malware Catch Rate</p>
          </div>
          <div className="bg-slate-800/50 rounded-xl p-4 text-center">
            <p className="text-2xl font-bold text-white">Leader</p>
            <p className="text-slate-400 text-sm">Gartner MQ 2024</p>
          </div>
        </div>
      </div>

      <div className="grid md:grid-cols-2 gap-6">
        <div className="bg-slate-800/50 rounded-xl p-6 border border-slate-700">
          <h3 className="text-lg font-semibold text-red-400 mb-4">Check Point Overview</h3>
          <div className="space-y-3">
            <div className="flex justify-between"><span className="text-slate-400">Parent Founded</span><span className="text-white">1993 (Israel)</span></div>
            <div className="flex justify-between"><span className="text-slate-400">Parent Revenue</span><span className="text-white">$2B+ annual</span></div>
            <div className="flex justify-between"><span className="text-slate-400">Avanan Acquired</span><span className="text-white">August 2021</span></div>
            <div className="flex justify-between"><span className="text-slate-400">Email Product</span><span className="text-white">Harmony Email</span></div>
          </div>
        </div>
        <div className="bg-slate-800/50 rounded-xl p-6 border border-slate-700">
          <h3 className="text-lg font-semibold text-red-400 mb-4">Avanan Heritage</h3>
          <div className="space-y-3">
            <div className="flex justify-between"><span className="text-slate-400">Founded</span><span className="text-white">2015 (Tel Aviv/NYC)</span></div>
            <div className="flex justify-between"><span className="text-slate-400">Founder/VP</span><span className="text-white">Gil Friedrich</span></div>
            <div className="flex justify-between"><span className="text-slate-400">Key Patent</span><span className="text-white">US #10,372,931</span></div>
            <div className="flex justify-between"><span className="text-slate-400">At Acquisition</span><span className="text-white">5,000+ customers</span></div>
          </div>
        </div>
      </div>

      <div className="bg-gradient-to-r from-amber-900/30 to-slate-800/50 rounded-xl p-6 border border-amber-800/30">
        <h3 className="text-lg font-semibold text-amber-400 mb-4">⚡ Strategic Significance</h3>
        <p className="text-slate-300 mb-4">Check Point's acquisition of Avanan represents a build vs. buy case study—how a traditional network security vendor acquired API-based cloud email security rather than building organically.</p>
        <div className="grid md:grid-cols-2 gap-4">
          <div className="bg-slate-800/50 rounded-lg p-4">
            <h4 className="font-medium text-amber-400">Architecture Debate</h4>
            <p className="text-slate-400 text-sm">Avanan's "inline API" vs. Abnormal's "pure API" represents fundamental philosophical split</p>
          </div>
          <div className="bg-slate-800/50 rounded-lg p-4">
            <h4 className="font-medium text-amber-400">Platform Integration</h4>
            <p className="text-slate-400 text-sm">Check Point leverages Infinity ecosystem (ThreatCloud, XDR)—Abnormal is email-focused specialist</p>
          </div>
        </div>
      </div>

      <CitationFooter citations={[
        { text: "Check Point Acquisition of Avanan Announcement, August 2021" },
        { text: "Gartner Magic Quadrant for Email Security Platforms, December 2024" },
        { text: "NSS Labs Email Security Testing - 99.91% malware catch rate" },
        { text: "USPTO Patent #10,372,931 - Inline API Security (Priority Dec 2015)" },
        { text: "Check Point Investor Reports - Email Security ARR" }
      ]} />
    </div>
  );

  const renderAcquisition = () => (
    <div className="space-y-6">
      <h2 className="text-2xl font-bold text-white mb-6">The Acquisition Story</h2>
      
      <div className="bg-slate-800/50 rounded-xl p-6 border border-slate-700">
        <h3 className="text-xl font-semibold text-white mb-4">Avanan Timeline to Acquisition</h3>
        <div className="space-y-4">
          {[
            { date: 'July 2014', event: 'Seed funding from StageOne Ventures, Magma Venture Partners' },
            { date: '2015', event: 'Company founded; begins development of inline API technology' },
            { date: 'May 2016', event: 'Series A ($14.9M) led by TPG Growth' },
            { date: 'December 2018', event: 'Series B ($25M); total funding reaches $41.4M' },
            { date: 'August 2019', event: 'US Patent #10,372,931 granted for inline API security' },
            { date: '2019', event: 'Surpasses 1,000 customers; 500% YoY growth; licenses patent to 3 vendors' },
            { date: 'January 2021', event: 'Gartner Peer Insights Customers Choice for Email Security' },
            { date: 'June 2021', event: 'Exceeds 4,000 customers; 260% YoY growth' },
            { date: 'August 2021', event: 'Check Point announces acquisition ($227-300M estimated)' }
          ].map((item, i) => (
            <div key={i} className="flex gap-4 items-start">
              <div className="w-32 flex-shrink-0">
                <span className="text-red-400 text-sm font-medium">{item.date}</span>
              </div>
              <div className="flex-1 bg-slate-900/50 rounded-lg p-3">
                <p className="text-slate-300 text-sm">{item.event}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="bg-gradient-to-br from-red-900/20 to-slate-800/50 rounded-xl p-6 border border-red-700/30">
        <h3 className="text-xl font-semibold text-red-400 mb-4">Why Check Point Bought vs. Built</h3>
        <div className="grid md:grid-cols-2 gap-4">
          {[
            { reason: 'Speed to Market', detail: 'Avanan already had 5,000 customers and proven technology—building organically would take years' },
            { reason: 'Patent Protection', detail: 'Avanan inline API patent created defensible moat expensive to design around' },
            { reason: 'Team Acquisition', detail: 'Gil Friedrich (founder) became VP of Email Security—retaining domain expertise' },
            { reason: 'Platform Integration', detail: 'Avanan technology could leverage ThreatCloud intelligence and unified management' }
          ].map((item, i) => (
            <div key={i} className="bg-slate-800/50 rounded-lg p-4">
              <h4 className="font-medium text-white">{item.reason}</h4>
              <p className="text-slate-400 text-sm mt-1">{item.detail}</p>
            </div>
          ))}
        </div>
      </div>

      <CitationFooter citations={[
        { text: "Check Point Acquisition Press Release, August 30, 2021" },
        { text: "Crunchbase - Avanan Funding History" },
        { text: "USPTO Patent Database - US #10,372,931" }
      ]} />
    </div>
  );

  const renderArchitecture = () => (
    <div className="space-y-6">
      <h2 className="text-2xl font-bold text-white mb-6">Architecture: Inline API Approach</h2>
      
      <div className="bg-gradient-to-br from-blue-900/30 to-slate-800/50 rounded-xl p-6 border border-blue-700/30">
        <h3 className="text-xl font-semibold text-blue-400 mb-4">The Inline API Innovation</h3>
        <p className="text-slate-300 mb-4">Avanan pioneered "inline API-based" email security—a hybrid approach using cloud APIs to intercept emails <strong>before</strong> inbox delivery (inline), not after (post-delivery). This is fundamentally different from both traditional SEGs and pure API solutions like Abnormal.</p>
      </div>

      <div className="bg-slate-800/50 rounded-xl p-6 border border-slate-700">
        <h3 className="text-xl font-semibold text-white mb-4">Architecture Comparison</h3>
        <div className="overflow-x-auto">
          <table className="w-full text-sm">
            <thead>
              <tr className="border-b border-slate-700">
                <th className="text-left py-3 text-slate-400">Aspect</th>
                <th className="text-left py-3 text-slate-400">Traditional SEG</th>
                <th className="text-left py-3 text-red-400">Check Point (Inline API)</th>
                <th className="text-left py-3 text-cyan-400">Abnormal (Pure API)</th>
              </tr>
            </thead>
            <tbody className="text-slate-300">
              <tr className="border-b border-slate-800">
                <td className="py-3">MX Record Change</td>
                <td className="py-3">Required</td>
                <td className="py-3 text-red-300">Not required</td>
                <td className="py-3 text-cyan-300">Not required</td>
              </tr>
              <tr className="border-b border-slate-800">
                <td className="py-3">Scanning Timing</td>
                <td className="py-3">Pre-delivery</td>
                <td className="py-3 text-red-300">Pre-delivery (inline)</td>
                <td className="py-3 text-cyan-300">Post-delivery</td>
              </tr>
              <tr className="border-b border-slate-800">
                <td className="py-3">Internal Email</td>
                <td className="py-3">Cannot scan</td>
                <td className="py-3 text-red-300">Can scan</td>
                <td className="py-3 text-cyan-300">Can scan</td>
              </tr>
              <tr className="border-b border-slate-800">
                <td className="py-3">Mail Delivery Risk</td>
                <td className="py-3">SPOF if gateway fails</td>
                <td className="py-3 text-red-300">Some latency risk</td>
                <td className="py-3 text-cyan-300">No delivery impact</td>
              </tr>
              <tr>
                <td className="py-3">Detection Philosophy</td>
                <td className="py-3">Block known threats</td>
                <td className="py-3 text-red-300">Block before inbox</td>
                <td className="py-3 text-cyan-300">Behavioral anomaly</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>

      <div className="grid md:grid-cols-2 gap-6">
        <div className="bg-red-900/20 rounded-xl p-6 border border-red-700/30">
          <h3 className="text-lg font-semibold text-red-400 mb-4">Check Point's Position: "Prevention First"</h3>
          <ul className="space-y-2 text-slate-300 text-sm">
            <li>• Block threats before they reach the inbox—users never see malicious emails</li>
            <li>• Claims 99.91% malware catch rate (NSS Labs validated)</li>
            <li>• Uses transport rules to hold mail for scanning before delivery</li>
            <li>• Argument: "Why let threats reach the inbox at all?"</li>
          </ul>
        </div>
        <div className="bg-cyan-900/20 rounded-xl p-6 border border-cyan-700/30">
          <h3 className="text-lg font-semibold text-cyan-400 mb-4">Abnormal's Position: "Behavioral AI"</h3>
          <ul className="space-y-2 text-slate-300 text-sm">
            <li>• Post-delivery analysis allows deeper behavioral context</li>
            <li>• No mail flow disruption—remediation in milliseconds after delivery</li>
            <li>• Better for detecting payload-less BEC attacks (social engineering)</li>
            <li>• Argument: "Inline creates latency and complexity; modern attacks require behavioral detection"</li>
          </ul>
        </div>
      </div>

      <CitationFooter citations={[
        { text: "Check Point Harmony Email Architecture Documentation" },
        { text: "USPTO Patent #10,372,931 - Inline API Security Method" },
        { text: "NSS Labs Email Security Testing Report - Malware Catch Rates" },
        { text: "Abnormal Security Competitive Positioning Materials" }
      ]} />
    </div>
  );

  const renderCompetitive = () => (
    <div className="space-y-6">
      <h2 className="text-2xl font-bold text-white mb-6">Competitive Positioning vs Abnormal</h2>
      
      <div className="grid md:grid-cols-2 gap-6">
        <div className="bg-cyan-900/20 rounded-xl p-6 border border-cyan-700/30">
          <h3 className="text-lg font-semibold text-cyan-400 mb-4">Where Abnormal Should Win</h3>
          <ul className="space-y-3 text-slate-300 text-sm">
            <li className="flex items-start gap-2">
              <span className="text-cyan-400">✓</span>
              <div><strong>Behavioral AI Superiority:</strong> 50,000+ behavioral signals vs. Check Point's prevention-first approach. BEC attacks without payloads favor behavioral detection.</div>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-cyan-400">✓</span>
              <div><strong>Pure API Architecture:</strong> No mail flow risk, no latency, no transport rule complexity. "We don't disrupt Microsoft—we augment it."</div>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-cyan-400">✓</span>
              <div><strong>Focus & Depth:</strong> Email security specialist vs. part of Check Point's broad portfolio. Single-minded product development.</div>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-cyan-400">✓</span>
              <div><strong>No Lock-In:</strong> Works alongside any existing security stack; Check Point incentivizes full Infinity adoption.</div>
            </li>
          </ul>
        </div>
        <div className="bg-red-900/20 rounded-xl p-6 border border-red-700/30">
          <h3 className="text-lg font-semibold text-red-400 mb-4">Where Check Point Competes Strongly</h3>
          <ul className="space-y-3 text-slate-300 text-sm">
            <li className="flex items-start gap-2">
              <span className="text-red-400">✓</span>
              <div><strong>Platform Integration:</strong> ThreatCloud intelligence + XDR + network/endpoint creates unified security story.</div>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-red-400">✓</span>
              <div><strong>Existing Customer Base:</strong> 100,000+ Check Point customers can add email security with minimal friction.</div>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-red-400">✓</span>
              <div><strong>Pre-Delivery Blocking:</strong> "Users never see threats" is compelling narrative for risk-averse buyers.</div>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-red-400">✓</span>
              <div><strong>Price Competition:</strong> Bundle discounts + lower SMB pricing creates cost pressure.</div>
            </li>
          </ul>
        </div>
      </div>

      <div className="bg-slate-800/50 rounded-xl p-6 border border-slate-700">
        <h3 className="text-xl font-semibold text-white mb-4">Positioning Recommendations</h3>
        <div className="space-y-4">
          {[
            { scenario: 'vs. Check Point Customers', positioning: '"We\'re the behavioral layer Check Point can\'t provide. Their prevention catches known threats; we catch the novel BEC attacks that bypass signature-based detection."' },
            { scenario: 'Architecture Debate', positioning: '"Inline APIs create complexity and mail flow risk. Microsoft actively discourages transport rule modifications. Pure API = zero disruption with millisecond remediation."' },
            { scenario: 'Platform vs. Specialist', positioning: '"Check Point spreads attention across network, cloud, endpoint. We\'re 100% focused on email security with dedicated behavioral AI research."' },
            { scenario: 'BEC Detection', positioning: '"$2.8B in BEC losses (FBI 2024) happen with payload-less attacks. Prevention-first architectures miss these because there\'s nothing to block pre-delivery."' }
          ].map((item, i) => (
            <div key={i} className="bg-slate-900/50 rounded-lg p-4">
              <h4 className="font-medium text-amber-400 mb-2">{item.scenario}</h4>
              <p className="text-slate-300 text-sm italic">{item.positioning}</p>
            </div>
          ))}
        </div>
      </div>

      <CitationFooter citations={[
        { text: "Gartner Magic Quadrant for Email Security Platforms, 2024 - Both vendors named Leaders" },
        { text: "FBI IC3 Report 2024 - BEC Losses Statistics" },
        { text: "Abnormal Security Competitive Battle Cards" },
        { text: "Check Point Infinity Platform Documentation" }
      ]} />
    </div>
  );

  const renderContent = () => {
    switch(activeSection) {
      case 'overview': return renderOverview();
      case 'acquisition': return renderAcquisition();
      case 'architecture': return renderArchitecture();
      case 'competitive': return renderCompetitive();
      default: return <div className="text-slate-400">Section: {activeSection} - Content in development</div>;
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950 text-white">
      <header className="bg-slate-900/80 backdrop-blur-sm border-b border-slate-800 sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-gradient-to-br from-red-500 to-red-700 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-lg">✓</span>
              </div>
              <div>
                <h1 className="text-xl font-bold text-white">Check Point / Avanan</h1>
                <p className="text-slate-400 text-sm">Competitive Intelligence Profile</p>
              </div>
            </div>
            <div className="flex items-center gap-2">
              <span className="px-3 py-1 bg-red-500/20 text-red-400 text-xs rounded-full border border-red-500/30">Inline API</span>
              <span className="px-3 py-1 bg-emerald-500/20 text-emerald-400 text-xs rounded-full border border-emerald-500/30">Gartner Leader</span>
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
                    className={`w-full text-left px-4 py-3 rounded-lg transition-all flex items-center gap-3 ${activeSection === section.id ? 'bg-red-600/20 text-red-400 border border-red-500/30' : 'text-slate-400 hover:bg-slate-700/50 hover:text-white'}`}>
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

export default CheckPointAvananProfile;
