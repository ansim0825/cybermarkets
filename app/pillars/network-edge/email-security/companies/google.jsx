"use client";

import React, { useState } from 'react';

const GoogleWorkspaceSecurityProfile = () => {
  const [activeSection, setActiveSection] = useState('overview');

  const company = {
    name: 'Google Workspace Security',
    product: 'Gmail Security',
    tagline: 'The "other half" of email platform security alongside Microsoft',
    position: 'Platform Incumbent',
    website: 'https://workspace.google.com',
    
    snapshot: {
      gmailUsers: '3B+',
      businessCustomers: '6M+',
      k12Share: '58%',
      spamBlock: '99.9%',
      higherEd: '80%+',
    },

    companyDetails: {
      founded: '2004 (Gmail)',
      headquarters: 'Mountain View, CA',
      parentCompany: 'Alphabet Inc.',
      workspaceLaunch: '2020 (G Suite rebranding)',
      parentRevenue: '$307B (Alphabet FY2024)',
    },

    marketPosition: {
      category: 'Native Email Platform Security',
      subCategory: 'Platform Incumbent',
      gartnerPosition: 'Not separately rated (platform)',
    },

    recognition: [
      '3B+ Gmail Users Globally',
      '99.9% Spam Block Rate',
      'K-12 Market Leader (58%)',
    ],

    metrics: {
      gmailUsers: '3B+',
      businessCustomers: '6M+',
      k12Market: '58%',
      spamBlockRate: '99.9%',
    },

    marketContext: {
      hypeCyclePosition: 'Plateau of Productivity (native email security)',
      marketShare: '~50% global productivity suite market (with Microsoft)',
      keyGap: 'BEC/social engineering attacks bypass native controls - same as Microsoft',
    },

    securityGaps: [
      { gap: 'BEC / Social Engineering', detail: 'Gmail filters struggle with text-based intent attacks without payloads.', severity: 'critical' },
      { gap: 'Behavioral Analysis', detail: 'No mailbox-level behavioral baseline for communication pattern anomalies.', severity: 'high' },
      { gap: 'Internal Threat Detection', detail: 'Implicit trust of internal communications; compromised accounts bypass filters.', severity: 'high' },
      { gap: 'Post-Delivery Remediation', detail: 'Limited native ability to retract/quarantine post-delivery.', severity: 'medium' },
      { gap: 'Advanced Features Gated', detail: 'Security Sandbox, advanced DLP require Enterprise editions.', severity: 'medium' },
    ],

    stakeholders: {
      ciso: {
        role: 'CISO / Security Leadership',
        jtbd: 'Close the BEC gap without disrupting users',
        painPoints: ['Board pressure on email security', 'BEC losses despite 99.9% spam block'],
        valueProps: ['Native integration reduces friction', 'Cloud-native = smaller attack surface'],
      },
      secops: {
        role: 'Security Operations',
        jtbd: 'Detect what Gmail misses without alert overload',
        painPoints: ['The 0.1% that gets through includes high-value targets', 'Limited native forensics'],
        valueProps: ['Google Admin Console integration', 'API-based augmentation available'],
      },
      itAdmin: {
        role: 'IT / Workspace Admin',
        jtbd: 'Maintain email security with minimal overhead',
        painPoints: ['Security features require Enterprise licensing', 'Complex policy management'],
        valueProps: ['Cloud-native = automatic updates', 'No infrastructure to maintain'],
      },
    },

    economics: {
      pricing: 'Included in Workspace licensing ($6-18/user/month base)',
      roiDrivers: [
        'No additional cost for native security features',
        'Cloud-native reduces infrastructure overhead',
        'Automatic updates eliminate patching cycles',
      ],
      competitivePricing: 'Security "included" but gaps require third-party augmentation',
    },

    geminiIntegration: {
      launch: 'January 2025',
      capabilities: 'AI-powered email summaries, draft assistance, threat hunting',
      risk: 'GeminiJack vulnerability (Dec 2025) - zero-click data exfiltration via hidden instructions',
    },

    differentiation: [
      { title: 'Cloud-Native Architecture', description: '100% cloud = smaller attack surface, automatic updates, no desktop vulnerabilities.', icon: '☁️' },
      { title: 'Scale & Intelligence', description: '3B+ users provide massive threat signal. Blocks 99.9% of spam/phishing.', icon: '📊' },
      { title: 'Education Dominance', description: '58% K-12 market share, 80%+ higher ed. Default email for millions of students.', icon: '🎓' },
      { title: 'Gemini AI Integration', description: 'GenAI capabilities embedded in Workspace (with emerging security implications).', icon: '🤖' },
    ],

    strengths: [
      '99.9% spam/phishing block rate',
      'Cloud-native architecture advantages',
      'Massive threat intelligence from 3B+ users',
      'Education market dominance (K-12, Higher Ed)',
      'SMB/startup preference and growth',
      'Gemini AI integration and innovation',
    ],

    weaknesses: [
      'BEC gap same as Microsoft - text-based attacks bypass filters',
      'Limited behavioral analysis capabilities',
      'Advanced security features require Enterprise tiers',
      'Post-delivery remediation limitations',
      'Less enterprise penetration than Microsoft',
    ],

    outlook: {
      tailwinds: [
        'Cloud-native appeals to digital-first organizations',
        'Gemini AI driving innovation',
        'Education market loyalty and growth',
      ],
      headwinds: [
        'Microsoft 365 enterprise dominance',
        'BEC gap creates third-party opportunity',
        'GeminiJack-style AI vulnerabilities emerging',
      ],
      trajectory: 'Continued strength in education, SMB, and cloud-native enterprises. BEC gap ensures ongoing demand for third-party email security.',
    },

    news: [
      { date: 'Jan 2025', title: 'Gemini AI Integration', summary: 'Gemini integrated into Business and Enterprise plans.', type: 'product', source: 'Google Cloud Announcement' },
      { date: 'Dec 2025', title: 'GeminiJack Vulnerability', summary: 'Zero-click data exfiltration via hidden instructions disclosed.', type: 'security', source: 'Security Research Disclosure' },
    ],
  };

  const sections = [
    { id: 'overview', name: 'Overview', icon: '📋' },
    { id: 'market', name: 'Market Context', icon: '🌍' },
    { id: 'product', name: 'Product', icon: '🎯' },
    { id: 'stakeholders', name: 'Stakeholders', icon: '👥' },
    { id: 'economics', name: 'Economics', icon: '💰' },
    { id: 'differentiation', name: 'Differentiation', icon: '⚡' },
    { id: 'analysis', name: 'Analysis', icon: '📊' },
    { id: 'outlook', name: 'Outlook', icon: '🔮' },
    { id: 'news', name: 'Recent News', icon: '📰' },
  ];

  const getNewsTypeStyle = (type) => {
    switch (type) {
      case 'product': return 'bg-blue-900/50 text-blue-400 border-blue-700';
      case 'security': return 'bg-red-900/50 text-red-400 border-red-700';
      default: return 'bg-gray-800 text-gray-400 border-gray-700';
    }
  };

  const scrollToSection = (sectionId) => {
    setActiveSection(sectionId);
    document.getElementById(sectionId)?.scrollIntoView({ behavior: 'smooth' });
  };

  const CitationFooter = ({ citations }) => (
    <div className="mt-6 pt-4 border-t border-gray-700">
      <p className="text-xs text-gray-500 uppercase tracking-wider mb-2">Sources</p>
      <div className="space-y-1">
        {citations.map((cite, i) => (
          <p key={i} className="text-xs text-gray-500">[{i + 1}] {cite}</p>
        ))}
      </div>
    </div>
  );

  const HypeCycleSVG = () => (
    <svg viewBox="0 0 500 200" className="w-full h-48">
      <defs>
        <linearGradient id="curveGradientGoogle" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" stopColor="#8b5cf6" stopOpacity="0.8" />
          <stop offset="50%" stopColor="#06b6d4" stopOpacity="0.8" />
          <stop offset="100%" stopColor="#10b981" stopOpacity="0.8" />
        </linearGradient>
      </defs>
      <path d="M 30 180 Q 80 180 100 160 Q 120 140 140 60 Q 160 20 180 40 Q 200 60 220 120 Q 260 160 300 150 Q 340 140 380 130 Q 420 120 470 110" stroke="url(#curveGradientGoogle)" strokeWidth="3" fill="none" />
      <circle cx="140" cy="60" r="6" fill="#f97316" stroke="#fff" strokeWidth="2" />
      <text x="140" y="45" textAnchor="middle" fill="#f97316" fontSize="10" fontWeight="bold">GenAI Email</text>
      <text x="140" y="80" textAnchor="middle" fill="#9ca3af" fontSize="8">(Gemini)</text>
      <circle cx="350" cy="135" r="6" fill="#22c55e" stroke="#fff" strokeWidth="2" />
      <text x="350" y="120" textAnchor="middle" fill="#22c55e" fontSize="10" fontWeight="bold">API-based ICES</text>
      <circle cx="460" cy="110" r="8" fill="#22c55e" stroke="#fff" strokeWidth="2" />
      <text x="460" y="95" textAnchor="middle" fill="#22c55e" fontSize="10" fontWeight="bold">Native Email</text>
      <text x="460" y="130" textAnchor="middle" fill="#9ca3af" fontSize="8">(Gmail/Google)</text>
      <text x="60" y="195" fill="#6b7280" fontSize="8">Innovation Trigger</text>
      <text x="160" y="195" fill="#6b7280" fontSize="8">Peak</text>
      <text x="230" y="195" fill="#6b7280" fontSize="8">Trough</text>
      <text x="320" y="195" fill="#6b7280" fontSize="8">Slope of Enlightenment</text>
      <text x="440" y="195" fill="#6b7280" fontSize="8">Plateau</text>
    </svg>
  );

  return (
    <div className="min-h-screen bg-gray-950 text-gray-100">
      <nav className="border-b border-gray-800 bg-gray-950/80 backdrop-blur-sm sticky top-0 z-50">
        <div className="max-w-6xl mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <a href="/" className="text-gray-400 hover:text-white">Home</a>
              <span className="text-gray-600">/</span>
              <a href="/pillars/network-edge/email-security" className="text-gray-400 hover:text-white">Email Security</a>
              <span className="text-gray-600">/</span>
              <span className="text-gray-300">Google Workspace</span>
            </div>
            <a href="/pillars/network-edge/email-security" className="text-gray-300 hover:text-white text-sm">← Back to Market</a>
          </div>
        </div>
      </nav>

      <div className="max-w-6xl mx-auto px-6 py-8">
        <div className="mb-8">
          <div className="flex items-start justify-between mb-4">
            <div>
              <div className="flex items-center gap-3 mb-2">
                <h1 className="text-4xl font-bold">{company.name}</h1>
                <span className="px-3 py-1 bg-green-900/50 text-green-400 border border-green-700 rounded-full text-sm">{company.position}</span>
              </div>
              <p className="text-xl text-gray-400 mb-2">{company.tagline}</p>
              <p className="text-sm text-gray-500">{company.product}</p>
            </div>
            <a href={company.website} target="_blank" rel="noopener noreferrer" className="px-4 py-2 bg-gray-800 hover:bg-gray-700 rounded-lg text-sm transition-colors">Visit Website →</a>
          </div>
          <div className="flex items-center gap-4 text-sm text-gray-500">
            <span>Research Status: <span className="text-yellow-400">In Progress</span></span>
            <span>•</span>
            <span>Last updated: January 2026</span>
          </div>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-5 gap-4 mb-8">
          <div className="bg-gray-900 rounded-xl p-4 border border-gray-800">
            <div className="text-2xl font-bold text-white mb-1">{company.snapshot.gmailUsers}</div>
            <div className="text-xs text-gray-400">Gmail Users</div>
          </div>
          <div className="bg-gray-900 rounded-xl p-4 border border-gray-800">
            <div className="text-2xl font-bold text-green-400 mb-1">{company.snapshot.spamBlock}</div>
            <div className="text-xs text-gray-400">Spam Block Rate</div>
          </div>
          <div className="bg-gray-900 rounded-xl p-4 border border-gray-800">
            <div className="text-2xl font-bold text-white mb-1">{company.snapshot.k12Share}</div>
            <div className="text-xs text-gray-400">K-12 Market Share</div>
          </div>
          <div className="bg-gray-900 rounded-xl p-4 border border-gray-800">
            <div className="text-2xl font-bold text-white mb-1">{company.snapshot.businessCustomers}</div>
            <div className="text-xs text-gray-400">Business Customers</div>
          </div>
          <div className="bg-gray-900 rounded-xl p-4 border border-gray-800">
            <div className="text-2xl font-bold text-white mb-1">{company.snapshot.higherEd}</div>
            <div className="text-xs text-gray-400">Top 100 Higher Ed</div>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          <div className="lg:col-span-1">
            <div className="sticky top-24">
              <div className="bg-gray-900 rounded-xl border border-gray-800 p-4 mb-6">
                <h3 className="text-sm font-semibold text-gray-400 mb-3">Sections</h3>
                <div className="space-y-1">
                  {sections.map((section) => (
                    <button key={section.id} onClick={() => scrollToSection(section.id)}
                      className={`w-full text-left px-3 py-2 rounded-lg text-sm flex items-center gap-2 transition-all ${activeSection === section.id ? 'bg-green-900/50 text-green-400 border border-green-800' : 'text-gray-400 hover:bg-gray-800 hover:text-white'}`}>
                      <span>{section.icon}</span>
                      <span>{section.name}</span>
                    </button>
                  ))}
                </div>
              </div>

              <div className="bg-gray-900 rounded-xl border border-gray-800 p-4">
                <h3 className="text-sm font-semibold text-gray-400 mb-3">Key Metrics</h3>
                <div className="space-y-3 text-sm">
                  <div>
                    <span className="text-gray-500 block">Gmail Users</span>
                    <span className="text-green-400">{company.metrics.gmailUsers}</span>
                  </div>
                  <div>
                    <span className="text-gray-500 block">Business Customers</span>
                    <span className="text-white">{company.metrics.businessCustomers}</span>
                  </div>
                  <div>
                    <span className="text-gray-500 block">K-12 Market</span>
                    <span className="text-white">{company.metrics.k12Market}</span>
                  </div>
                  <div>
                    <span className="text-gray-500 block">Spam Block Rate</span>
                    <span className="text-green-400">{company.metrics.spamBlockRate}</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="lg:col-span-3 space-y-8">
            
            <section id="overview" className="bg-gray-900 rounded-xl border border-gray-800 p-6">
              <h2 className="text-xl font-semibold mb-4 flex items-center gap-2"><span>📋</span> Company Overview</h2>
              <div className="grid md:grid-cols-2 gap-6 mb-6">
                <div>
                  <h3 className="text-sm font-semibold text-gray-400 mb-3">Company Details</h3>
                  <div className="space-y-2 text-sm">
                    <div className="flex justify-between"><span className="text-gray-500">Gmail Launched</span><span className="text-gray-300">{company.companyDetails.founded}</span></div>
                    <div className="flex justify-between"><span className="text-gray-500">Headquarters</span><span className="text-gray-300">{company.companyDetails.headquarters}</span></div>
                    <div className="flex justify-between"><span className="text-gray-500">Parent Company</span><span className="text-gray-300">{company.companyDetails.parentCompany}</span></div>
                    <div className="flex justify-between"><span className="text-gray-500">Workspace Launch</span><span className="text-gray-300">{company.companyDetails.workspaceLaunch}</span></div>
                    <div className="flex justify-between"><span className="text-gray-500">Alphabet Revenue</span><span className="text-gray-300">{company.companyDetails.parentRevenue}</span></div>
                  </div>
                </div>
                <div>
                  <h3 className="text-sm font-semibold text-gray-400 mb-3">Market Position</h3>
                  <div className="space-y-2 text-sm">
                    <div className="flex justify-between"><span className="text-gray-500">Category</span><span className="text-gray-300">{company.marketPosition.category}</span></div>
                    <div className="flex justify-between"><span className="text-gray-500">Sub-Category</span><span className="text-gray-300">{company.marketPosition.subCategory}</span></div>
                    <div><span className="text-gray-500 block mb-1">Gartner Position</span><span className="text-gray-400 text-xs">{company.marketPosition.gartnerPosition}</span></div>
                  </div>
                </div>
              </div>
              <div className="mb-4">
                <h3 className="text-sm font-semibold text-gray-400 mb-3">Recognition</h3>
                <div className="flex flex-wrap gap-2">
                  {company.recognition.map((item, idx) => (
                    <span key={idx} className="px-3 py-1 bg-gray-800 rounded-full text-xs text-gray-300 border border-gray-700">{item}</span>
                  ))}
                </div>
              </div>
              <CitationFooter citations={['Google Workspace Customer Statistics', 'Alphabet Inc. Annual Report 2024']} />
            </section>

            <section id="market" className="bg-gray-900 rounded-xl border border-gray-800 p-6">
              <h2 className="text-xl font-semibold mb-4 flex items-center gap-2"><span>🌍</span> Market Context</h2>
              <div className="bg-gray-800 rounded-lg p-4 mb-4">
                <h3 className="text-sm font-semibold text-gray-400 mb-3">Email Security Hype Cycle Position</h3>
                <HypeCycleSVG />
                <p className="text-xs text-gray-500 text-center mt-2">[1] Gartner Hype Cycle for Security Operations, 2024</p>
              </div>
              <div className="grid md:grid-cols-2 gap-4 mb-4">
                <div className="bg-green-900/20 border border-green-800/50 rounded-lg p-4">
                  <h3 className="text-sm font-semibold text-green-400 mb-2">Market Share</h3>
                  <p className="text-xs text-gray-400">{company.marketContext.marketShare}</p>
                </div>
                <div className="bg-red-900/20 border border-red-800/50 rounded-lg p-4">
                  <h3 className="text-sm font-semibold text-red-400 mb-2">Key Gap</h3>
                  <p className="text-xs text-gray-400">{company.marketContext.keyGap}</p>
                </div>
              </div>
              <div className="bg-amber-900/20 border border-amber-800/50 rounded-lg p-4">
                <h3 className="text-sm font-semibold text-amber-400 mb-2">⚠️ Security Gaps (Pure-Play Opportunity)</h3>
                <div className="space-y-2 mt-2">
                  {company.securityGaps.map((item, idx) => (
                    <div key={idx} className="flex justify-between items-center text-xs">
                      <span className="text-gray-300">{item.gap}</span>
                      <span className={`px-2 py-0.5 rounded ${item.severity === 'critical' ? 'bg-red-900/50 text-red-400' : item.severity === 'high' ? 'bg-amber-900/50 text-amber-400' : 'bg-gray-700 text-gray-400'}`}>{item.severity}</span>
                    </div>
                  ))}
                </div>
              </div>
              <CitationFooter citations={['Gartner Hype Cycle for Security Operations, 2024', 'Google Workspace Security Documentation']} />
            </section>

            <section id="product" className="bg-gray-900 rounded-xl border border-gray-800 p-6">
              <h2 className="text-xl font-semibold mb-4 flex items-center gap-2"><span>🎯</span> Product</h2>
              <div className="grid md:grid-cols-2 gap-4 mb-4">
                <div className="bg-green-900/20 border border-green-800/50 rounded-lg p-4">
                  <h3 className="text-sm font-semibold text-green-400 mb-2">Gmail Security (Native)</h3>
                  <p className="text-xs text-gray-400">99.9% spam/phishing block rate, safe browsing, attachment scanning, confidential mode.</p>
                </div>
                <div className="bg-blue-900/20 border border-blue-800/50 rounded-lg p-4">
                  <h3 className="text-sm font-semibold text-blue-400 mb-2">Gemini AI ({company.geminiIntegration.launch})</h3>
                  <p className="text-xs text-gray-400">{company.geminiIntegration.capabilities}</p>
                </div>
              </div>
              <div className="bg-red-900/20 border border-red-800/50 rounded-lg p-4">
                <h3 className="text-sm font-semibold text-red-400 mb-2">⚠️ GeminiJack Vulnerability (Dec 2025)</h3>
                <p className="text-xs text-gray-400">{company.geminiIntegration.risk}</p>
              </div>
              <CitationFooter citations={['Google Workspace Security Features', 'GeminiJack Vulnerability Disclosure']} />
            </section>

            <section id="stakeholders" className="bg-gray-900 rounded-xl border border-gray-800 p-6">
              <h2 className="text-xl font-semibold mb-4 flex items-center gap-2"><span>👥</span> Stakeholders</h2>
              <div className="space-y-4">
                {Object.values(company.stakeholders).map((stakeholder, idx) => (
                  <div key={idx} className="bg-gray-800 rounded-lg p-4">
                    <h3 className="font-medium text-white mb-2">{stakeholder.role}</h3>
                    <p className="text-sm text-green-400 mb-3">JTBD: {stakeholder.jtbd}</p>
                    <div className="grid md:grid-cols-2 gap-4">
                      <div><span className="text-xs text-gray-500 uppercase">Pain Points</span>{stakeholder.painPoints.map((pain, i) => (<p key={i} className="text-xs text-gray-400 mt-1">• {pain}</p>))}</div>
                      <div><span className="text-xs text-gray-500 uppercase">Value Props</span>{stakeholder.valueProps.map((prop, i) => (<p key={i} className="text-xs text-gray-300 mt-1">• {prop}</p>))}</div>
                    </div>
                  </div>
                ))}
              </div>
              <CitationFooter citations={['Google Workspace Customer Case Studies', 'Gartner Voice of the Customer']} />
            </section>

            <section id="economics" className="bg-gray-900 rounded-xl border border-gray-800 p-6">
              <h2 className="text-xl font-semibold mb-4 flex items-center gap-2"><span>💰</span> Economics</h2>
              <div className="grid md:grid-cols-2 gap-4 mb-4">
                <div className="bg-gray-800 rounded-lg p-4"><h3 className="text-sm font-semibold text-gray-400 mb-2">Pricing Model</h3><p className="text-sm text-white">{company.economics.pricing}</p></div>
                <div className="bg-gray-800 rounded-lg p-4"><h3 className="text-sm font-semibold text-gray-400 mb-2">Market Position</h3><p className="text-sm text-white">{company.economics.competitivePricing}</p></div>
              </div>
              <div className="bg-green-900/20 border border-green-800/50 rounded-lg p-4">
                <h3 className="text-sm font-semibold text-green-400 mb-2">ROI Drivers</h3>
                {company.economics.roiDrivers.map((driver, idx) => (<p key={idx} className="text-xs text-gray-300 mt-1">• {driver}</p>))}
              </div>
              <CitationFooter citations={['Google Workspace Pricing', 'Industry ROI Analysis']} />
            </section>

            <section id="differentiation" className="bg-gray-900 rounded-xl border border-gray-800 p-6">
              <h2 className="text-xl font-semibold mb-4 flex items-center gap-2"><span>⚡</span> Differentiation</h2>
              <div className="grid md:grid-cols-2 gap-4">
                {company.differentiation.map((diff, idx) => (
                  <div key={idx} className="bg-gray-800 rounded-lg p-4 border-l-2 border-green-500">
                    <div className="flex items-center gap-2 mb-2"><span className="text-xl">{diff.icon}</span><h3 className="font-medium text-white">{diff.title}</h3></div>
                    <p className="text-sm text-gray-400">{diff.description}</p>
                  </div>
                ))}
              </div>
              <CitationFooter citations={['Google Workspace Security Overview', 'Education Market Analysis']} />
            </section>

            <section id="analysis" className="bg-gray-900 rounded-xl border border-gray-800 p-6">
              <h2 className="text-xl font-semibold mb-4 flex items-center gap-2"><span>📊</span> Analysis</h2>
              <div className="grid md:grid-cols-2 gap-6">
                <div><h3 className="text-sm font-semibold text-green-400 mb-3 flex items-center gap-2"><span>💪</span> Strengths</h3><div className="space-y-2">{company.strengths.map((item, idx) => (<div key={idx} className="flex items-start gap-2 text-sm text-gray-300"><span className="text-green-500 mt-0.5">+</span>{item}</div>))}</div></div>
                <div><h3 className="text-sm font-semibold text-red-400 mb-3 flex items-center gap-2"><span>⚠️</span> Weaknesses</h3><div className="space-y-2">{company.weaknesses.map((item, idx) => (<div key={idx} className="flex items-start gap-2 text-sm text-gray-300"><span className="text-red-500 mt-0.5">-</span>{item}</div>))}</div></div>
              </div>
              <CitationFooter citations={['Google Workspace Security Assessment', 'Industry Analyst Reports']} />
            </section>

            <section id="outlook" className="bg-gray-900 rounded-xl border border-gray-800 p-6">
              <h2 className="text-xl font-semibold mb-4 flex items-center gap-2"><span>🔮</span> Outlook</h2>
              <div className="grid md:grid-cols-2 gap-6 mb-6">
                <div><h3 className="text-sm font-semibold text-green-400 mb-3">Tailwinds</h3><div className="space-y-2">{company.outlook.tailwinds.map((item, idx) => (<div key={idx} className="flex items-start gap-2 text-sm text-gray-300"><span className="text-green-500">↑</span>{item}</div>))}</div></div>
                <div><h3 className="text-sm font-semibold text-orange-400 mb-3">Headwinds</h3><div className="space-y-2">{company.outlook.headwinds.map((item, idx) => (<div key={idx} className="flex items-start gap-2 text-sm text-gray-300"><span className="text-orange-500">↓</span>{item}</div>))}</div></div>
              </div>
              <div className="bg-green-900/20 border border-green-800/50 rounded-lg p-4"><h3 className="text-sm font-semibold text-green-400 mb-2">Trajectory</h3><p className="text-sm text-gray-300">{company.outlook.trajectory}</p></div>
              <CitationFooter citations={['Google Cloud Strategy', 'Market Analyst Forecasts']} />
            </section>

            <section id="news" className="bg-gray-900 rounded-xl border border-gray-800 p-6">
              <h2 className="text-xl font-semibold mb-4 flex items-center gap-2"><span>📰</span> Recent News</h2>
              <div className="space-y-4">
                {company.news.map((item, idx) => (
                  <div key={idx} className="flex items-start gap-4 p-4 bg-gray-800 rounded-lg">
                    <div className="text-sm text-gray-500 whitespace-nowrap">{item.date}</div>
                    <div className="flex-1">
                      <div className="flex items-center gap-2 mb-1"><h3 className="font-medium text-white">{item.title}</h3><span className={`text-xs px-2 py-0.5 rounded border ${getNewsTypeStyle(item.type)}`}>{item.type}</span></div>
                      <p className="text-sm text-gray-400">{item.summary}</p>
                      {item.source && <p className="text-xs text-gray-500 mt-1">Source: {item.source}</p>}
                    </div>
                  </div>
                ))}
              </div>
            </section>

          </div>
        </div>

        <footer className="mt-12 pt-8 border-t border-gray-800 text-center text-gray-500 text-sm">
          <p>Research compiled January 2026 • Andy Simko • Email Security Market Analysis</p>
          <p className="mt-1 text-gray-600">Independent research • Not affiliated with {company.name}</p>
        </footer>
      </div>
    </div>
  );
};

export default GoogleWorkspaceSecurityProfile;
