"use client";

import React, { useState } from 'react';

const MicrosoftDefenderProfile = () => {
  const [activeSection, setActiveSection] = useState('overview');

  const company = {
    name: 'Microsoft Defender for Office 365',
    product: 'Microsoft Defender for Office 365 (MDO)',
    tagline: 'The baseline every email security vendor must beat',
    position: 'Platform Incumbent',
    website: 'https://www.microsoft.com/security',
    
    snapshot: {
      m365Companies: '3.7M+',
      dailySignals: '84T',
      securityRevenue: '$28B+',
      fortune500: '~75%',
      gartnerPosition: 'Leader',
    },

    companyDetails: {
      founded: '1975 (Microsoft)',
      headquarters: 'Redmond, WA',
      ceo: 'Satya Nadella',
      securityRevenue: '$28B+ (2024)',
      m365Customers: '3.7M+ companies',
    },

    marketPosition: {
      category: 'Native Email Platform Security',
      subCategory: 'Platform Incumbent + ICES',
      gartnerPosition: 'Leader - Gartner MQ (2024, 2025)',
    },

    recognition: [
      'Gartner Magic Quadrant Leader 2024, 2025',
      '84 Trillion Daily Security Signals',
      '~75% Fortune 500 Adoption',
    ],

    metrics: {
      m365Companies: '3.7M+',
      dailySignals: '84 trillion',
      securityRevenue: '$28B+',
      becMissRate: '88%',
    },

    marketContext: {
      hypeCyclePosition: 'Plateau of Productivity',
      marketReality: 'Microsoft IS the email security baseline - every vendor positions against MDO',
      keyGap: '88% of BEC attacks bypass Defender (Osterman Research) - the pure-play opportunity',
    },

    productTiers: [
      { name: 'Exchange Online Protection (EOP)', description: 'Basic filtering included with all M365 plans', pricing: 'Included', tier: 'Base' },
      { name: 'Defender for Office 365 Plan 1', description: 'Safe Attachments, Safe Links, anti-phishing', pricing: '$2/user/month', tier: 'P1' },
      { name: 'Defender for Office 365 Plan 2', description: 'Threat Explorer, AIR, Attack Simulation', pricing: '$5/user/month', tier: 'P2' },
      { name: 'Microsoft 365 E5 Security', description: 'Full MDO + Defender XDR + Identity + Cloud Apps', pricing: '$38/user/month', tier: 'E5' },
    ],

    securityGaps: [
      { gap: 'BEC / Social Engineering', detail: '88% of BEC attacks bypass Defender (Osterman Research). Text-based attacks without payloads evade signature detection.', severity: 'critical' },
      { gap: 'Behavioral Analysis', detail: 'Limited mailbox-level behavioral baseline. Doesn\'t learn individual communication patterns.', severity: 'high' },
      { gap: 'Internal Threat Detection', detail: 'Compromised internal accounts can send malicious email with implicit trust.', severity: 'high' },
      { gap: 'Zero-Day Payloads', detail: 'Safe Attachments detonation has latency; sophisticated payloads can evade sandbox.', severity: 'medium' },
      { gap: 'Vendor Email Compromise', detail: 'Trusted vendor domains bypass many controls - supply chain attacks increasing.', severity: 'medium' },
    ],

    stakeholders: {
      ciso: {
        role: 'CISO / Security Leadership',
        jtbd: 'Close the gap between Defender and actual email risk',
        painPoints: ['Board asking why BEC still succeeds', 'Budget pressure to use "included" security'],
        valueProps: ['Native platform = reduced complexity', 'XDR integration story'],
      },
      secops: {
        role: 'Security Operations',
        jtbd: 'Investigate and respond to email threats efficiently',
        painPoints: ['Alert fatigue from false positives', 'Limited forensics in lower tiers'],
        valueProps: ['Threat Explorer (P2)', 'AIR automated investigation', 'Sentinel integration'],
      },
      itAdmin: {
        role: 'IT / M365 Admin',
        jtbd: 'Maintain email security without specialized expertise',
        painPoints: ['Complex policy configuration', 'Feature sprawl across tiers'],
        valueProps: ['Native integration', 'Unified admin portal', 'No MX changes'],
      },
    },

    economics: {
      pricing: 'EOP (included) → P1 ($2/user) → P2 ($5/user) → E5 ($38/user)',
      roiDrivers: [
        'Already paying for M365 - incremental security cost is low',
        'No additional vendor management overhead',
        'XDR platform consolidation value',
      ],
      competitivePricing: 'Bundled pricing makes per-seat cost appear low vs. standalone vendors',
    },

    securityCopilot: {
      launch: '2024',
      emailFeatures: [
        'Phishing Triage Agent - automated email threat investigation',
        'LLM-based BEC detection - natural language understanding',
        'Alert summarization and response recommendations',
      ],
      implication: 'Microsoft using AI to close the BEC gap - threat to pure-play vendors if successful.',
    },

    differentiation: [
      { title: 'Scale & Intelligence', description: '84 trillion daily signals. Threat intelligence from 3.7M+ M365 customers globally.', icon: '📊' },
      { title: 'Native Integration', description: 'Zero deployment friction. No MX changes. Works immediately with M365.', icon: '🔗' },
      { title: 'XDR Platform', description: 'Email + endpoint + identity + cloud apps in unified Defender XDR platform.', icon: '🛡️' },
      { title: 'Security Copilot', description: 'AI-powered threat investigation and response. Potential BEC gap closer.', icon: '🤖' },
    ],

    strengths: [
      'Native M365 integration - zero deployment friction',
      'Massive scale (84T signals, 3.7M customers)',
      'Bundled pricing makes it "free" relative to M365 cost',
      'XDR platform integration (endpoint, identity, cloud)',
      'Security Copilot AI investment',
      'Gartner Leader recognition',
    ],

    weaknesses: [
      '88% BEC miss rate (Osterman) - the pure-play opportunity',
      'Limited behavioral AI for communication pattern analysis',
      'Feature complexity across tiers confuses buyers',
      'Best features require expensive E5 licensing',
      'Internal/VEC threats bypass trust model',
    ],

    abnormalImplications: {
      positioning: 'Abnormal positions as "defense-in-depth" layer that catches what Defender misses.',
      keyStats: [
        '88% of BEC bypasses Defender → Abnormal catches',
        '99.6% threats auto-remediated by Abnormal',
        '<5 seconds MTTD vs. Defender\'s reactive model',
      ],
      coexistence: 'Most Abnormal customers keep Defender for commodity threats; Abnormal handles advanced attacks.',
    },

    outlook: {
      tailwinds: [
        'M365 adoption continues growing',
        'Security Copilot AI investment',
        'Platform consolidation trend',
        'E5 upsell driving security revenue',
      ],
      headwinds: [
        'BEC gap validates pure-play vendors',
        'Complexity drives customers to seek simplicity elsewhere',
        'AI-native vendors moving faster on behavioral detection',
      ],
      trajectory: 'Microsoft will continue improving but architectural limitations (signature-based, reactive) create persistent gap for behavioral AI vendors.',
    },

    news: [
      { date: '2024', title: 'Security Copilot GA', summary: 'AI-powered security assistant generally available with email threat features.', type: 'product', source: 'Microsoft Ignite 2024' },
      { date: '2024', title: 'Gartner MQ Leader', summary: 'Named Leader in Email Security Platforms Magic Quadrant.', type: 'recognition', source: 'Gartner Magic Quadrant 2024' },
      { date: '2024', title: '$28B Security Revenue', summary: 'Microsoft security business exceeds $28B annual revenue.', type: 'milestone', source: 'Microsoft Earnings' },
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
      case 'recognition': return 'bg-green-900/50 text-green-400 border-green-700';
      case 'milestone': return 'bg-purple-900/50 text-purple-400 border-purple-700';
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
        <linearGradient id="curveGradientMS" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" stopColor="#8b5cf6" stopOpacity="0.8" />
          <stop offset="50%" stopColor="#06b6d4" stopOpacity="0.8" />
          <stop offset="100%" stopColor="#10b981" stopOpacity="0.8" />
        </linearGradient>
      </defs>
      <path d="M 30 180 Q 80 180 100 160 Q 120 140 140 60 Q 160 20 180 40 Q 200 60 220 120 Q 260 160 300 150 Q 340 140 380 130 Q 420 120 470 110" stroke="url(#curveGradientMS)" strokeWidth="3" fill="none" />
      <circle cx="140" cy="60" r="6" fill="#f97316" stroke="#fff" strokeWidth="2" />
      <text x="140" y="45" textAnchor="middle" fill="#f97316" fontSize="10" fontWeight="bold">Security Copilot</text>
      <circle cx="350" cy="135" r="6" fill="#3b82f6" stroke="#fff" strokeWidth="2" />
      <text x="350" y="120" textAnchor="middle" fill="#3b82f6" fontSize="10" fontWeight="bold">API-based ICES</text>
      <circle cx="460" cy="110" r="8" fill="#3b82f6" stroke="#fff" strokeWidth="2" />
      <text x="460" y="95" textAnchor="middle" fill="#3b82f6" fontSize="10" fontWeight="bold">MDO/EOP</text>
      <text x="460" y="130" textAnchor="middle" fill="#9ca3af" fontSize="8">(Microsoft)</text>
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
              <span className="text-gray-300">Microsoft Defender</span>
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
                <span className="px-3 py-1 bg-blue-900/50 text-blue-400 border border-blue-700 rounded-full text-sm">{company.position}</span>
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
            <div className="text-2xl font-bold text-white mb-1">{company.snapshot.m365Companies}</div>
            <div className="text-xs text-gray-400">M365 Companies</div>
          </div>
          <div className="bg-gray-900 rounded-xl p-4 border border-gray-800">
            <div className="text-2xl font-bold text-blue-400 mb-1">{company.snapshot.dailySignals}</div>
            <div className="text-xs text-gray-400">Daily Signals</div>
          </div>
          <div className="bg-gray-900 rounded-xl p-4 border border-gray-800">
            <div className="text-2xl font-bold text-white mb-1">{company.snapshot.securityRevenue}</div>
            <div className="text-xs text-gray-400">Security Revenue</div>
          </div>
          <div className="bg-gray-900 rounded-xl p-4 border border-gray-800">
            <div className="text-2xl font-bold text-white mb-1">{company.snapshot.fortune500}</div>
            <div className="text-xs text-gray-400">Fortune 500</div>
          </div>
          <div className="bg-gray-900 rounded-xl p-4 border border-gray-800">
            <div className="text-2xl font-bold text-green-400 mb-1">{company.snapshot.gartnerPosition}</div>
            <div className="text-xs text-gray-400">Gartner MQ 2024</div>
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
                      className={`w-full text-left px-3 py-2 rounded-lg text-sm flex items-center gap-2 transition-all ${activeSection === section.id ? 'bg-blue-900/50 text-blue-400 border border-blue-800' : 'text-gray-400 hover:bg-gray-800 hover:text-white'}`}>
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
                    <span className="text-gray-500 block">M365 Companies</span>
                    <span className="text-blue-400">{company.metrics.m365Companies}</span>
                  </div>
                  <div>
                    <span className="text-gray-500 block">Daily Signals</span>
                    <span className="text-white">{company.metrics.dailySignals}</span>
                  </div>
                  <div>
                    <span className="text-gray-500 block">Security Revenue</span>
                    <span className="text-white">{company.metrics.securityRevenue}</span>
                  </div>
                  <div>
                    <span className="text-gray-500 block">BEC Miss Rate</span>
                    <span className="text-red-400">{company.metrics.becMissRate}</span>
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
                    <div className="flex justify-between"><span className="text-gray-500">Founded</span><span className="text-gray-300">{company.companyDetails.founded}</span></div>
                    <div className="flex justify-between"><span className="text-gray-500">CEO</span><span className="text-gray-300">{company.companyDetails.ceo}</span></div>
                    <div className="flex justify-between"><span className="text-gray-500">Headquarters</span><span className="text-gray-300">{company.companyDetails.headquarters}</span></div>
                    <div className="flex justify-between"><span className="text-gray-500">Security Revenue</span><span className="text-gray-300">{company.companyDetails.securityRevenue}</span></div>
                    <div className="flex justify-between"><span className="text-gray-500">M365 Customers</span><span className="text-gray-300">{company.companyDetails.m365Customers}</span></div>
                  </div>
                </div>
                <div>
                  <h3 className="text-sm font-semibold text-gray-400 mb-3">Market Position</h3>
                  <div className="space-y-2 text-sm">
                    <div className="flex justify-between"><span className="text-gray-500">Category</span><span className="text-gray-300">{company.marketPosition.category}</span></div>
                    <div className="flex justify-between"><span className="text-gray-500">Sub-Category</span><span className="text-gray-300">{company.marketPosition.subCategory}</span></div>
                    <div><span className="text-gray-500 block mb-1">Gartner Position</span><span className="text-green-400 text-xs">{company.marketPosition.gartnerPosition}</span></div>
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
              <CitationFooter citations={['Microsoft Annual Report 2024', 'Gartner Magic Quadrant for Email Security Platforms, 2024']} />
            </section>

            <section id="market" className="bg-gray-900 rounded-xl border border-gray-800 p-6">
              <h2 className="text-xl font-semibold mb-4 flex items-center gap-2"><span>🌍</span> Market Context</h2>
              <div className="bg-gray-800 rounded-lg p-4 mb-4">
                <h3 className="text-sm font-semibold text-gray-400 mb-3">Email Security Hype Cycle Position</h3>
                <HypeCycleSVG />
                <p className="text-xs text-gray-500 text-center mt-2">[1] Gartner Hype Cycle for Security Operations, 2024</p>
              </div>
              <div className="grid md:grid-cols-2 gap-4 mb-4">
                <div className="bg-blue-900/20 border border-blue-800/50 rounded-lg p-4">
                  <h3 className="text-sm font-semibold text-blue-400 mb-2">Market Reality</h3>
                  <p className="text-xs text-gray-400">{company.marketContext.marketReality}</p>
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
                    <div key={idx} className="flex justify-between items-start text-xs">
                      <div className="flex-1">
                        <span className="text-gray-300 font-medium">{item.gap}</span>
                        <p className="text-gray-500 mt-0.5">{item.detail}</p>
                      </div>
                      <span className={`px-2 py-0.5 rounded ml-2 ${item.severity === 'critical' ? 'bg-red-900/50 text-red-400' : item.severity === 'high' ? 'bg-amber-900/50 text-amber-400' : 'bg-gray-700 text-gray-400'}`}>{item.severity}</span>
                    </div>
                  ))}
                </div>
              </div>
              <CitationFooter citations={['Gartner Hype Cycle for Security Operations, 2024', 'Osterman Research - Email Security Efficacy Study']} />
            </section>

            <section id="product" className="bg-gray-900 rounded-xl border border-gray-800 p-6">
              <h2 className="text-xl font-semibold mb-4 flex items-center gap-2"><span>🎯</span> Product Tiers</h2>
              <div className="space-y-3 mb-4">
                {company.productTiers.map((tier, idx) => (
                  <div key={idx} className={`rounded-lg p-4 border ${tier.tier === 'E5' ? 'bg-blue-900/20 border-blue-800/50' : 'bg-gray-800 border-gray-700'}`}>
                    <div className="flex justify-between items-start">
                      <div>
                        <h3 className="font-medium text-white">{tier.name}</h3>
                        <p className="text-sm text-gray-400">{tier.description}</p>
                      </div>
                      <span className={`text-sm font-bold ${tier.pricing === 'Included' ? 'text-green-400' : 'text-blue-400'}`}>{tier.pricing}</span>
                    </div>
                  </div>
                ))}
              </div>
              <div className="bg-purple-900/20 border border-purple-800/50 rounded-lg p-4">
                <h3 className="text-sm font-semibold text-purple-400 mb-2">🤖 Security Copilot ({company.securityCopilot.launch})</h3>
                <div className="space-y-1">
                  {company.securityCopilot.emailFeatures.map((feature, idx) => (
                    <p key={idx} className="text-xs text-gray-300">• {feature}</p>
                  ))}
                </div>
                <p className="text-xs text-amber-400 mt-2">{company.securityCopilot.implication}</p>
              </div>
              <CitationFooter citations={['Microsoft 365 Licensing Documentation', 'Microsoft Ignite 2024 - Security Copilot Announcements']} />
            </section>

            <section id="stakeholders" className="bg-gray-900 rounded-xl border border-gray-800 p-6">
              <h2 className="text-xl font-semibold mb-4 flex items-center gap-2"><span>👥</span> Stakeholders</h2>
              <div className="space-y-4">
                {Object.values(company.stakeholders).map((stakeholder, idx) => (
                  <div key={idx} className="bg-gray-800 rounded-lg p-4">
                    <h3 className="font-medium text-white mb-2">{stakeholder.role}</h3>
                    <p className="text-sm text-blue-400 mb-3">JTBD: {stakeholder.jtbd}</p>
                    <div className="grid md:grid-cols-2 gap-4">
                      <div><span className="text-xs text-gray-500 uppercase">Pain Points</span>{stakeholder.painPoints.map((pain, i) => (<p key={i} className="text-xs text-gray-400 mt-1">• {pain}</p>))}</div>
                      <div><span className="text-xs text-gray-500 uppercase">Value Props</span>{stakeholder.valueProps.map((prop, i) => (<p key={i} className="text-xs text-gray-300 mt-1">• {prop}</p>))}</div>
                    </div>
                  </div>
                ))}
              </div>
              <CitationFooter citations={['Microsoft Customer Case Studies', 'Gartner Voice of the Customer']} />
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
              <CitationFooter citations={['Microsoft 365 Pricing', 'Industry ROI Analysis']} />
            </section>

            <section id="differentiation" className="bg-gray-900 rounded-xl border border-gray-800 p-6">
              <h2 className="text-xl font-semibold mb-4 flex items-center gap-2"><span>⚡</span> Differentiation</h2>
              <div className="grid md:grid-cols-2 gap-4 mb-4">
                {company.differentiation.map((diff, idx) => (
                  <div key={idx} className="bg-gray-800 rounded-lg p-4 border-l-2 border-blue-500">
                    <div className="flex items-center gap-2 mb-2"><span className="text-xl">{diff.icon}</span><h3 className="font-medium text-white">{diff.title}</h3></div>
                    <p className="text-sm text-gray-400">{diff.description}</p>
                  </div>
                ))}
              </div>
              <div className="bg-purple-900/20 border border-purple-800/50 rounded-lg p-4">
                <h3 className="text-sm font-semibold text-purple-400 mb-2">Implications for Abnormal Security</h3>
                <p className="text-xs text-gray-300 mb-2">{company.abnormalImplications.positioning}</p>
                <div className="space-y-1">
                  {company.abnormalImplications.keyStats.map((stat, idx) => (
                    <p key={idx} className="text-xs text-gray-400">• {stat}</p>
                  ))}
                </div>
                <p className="text-xs text-gray-500 mt-2">{company.abnormalImplications.coexistence}</p>
              </div>
              <CitationFooter citations={['Microsoft Security Documentation', 'Abnormal Security Efficacy Reports']} />
            </section>

            <section id="analysis" className="bg-gray-900 rounded-xl border border-gray-800 p-6">
              <h2 className="text-xl font-semibold mb-4 flex items-center gap-2"><span>📊</span> Analysis</h2>
              <div className="grid md:grid-cols-2 gap-6">
                <div><h3 className="text-sm font-semibold text-green-400 mb-3 flex items-center gap-2"><span>💪</span> Strengths</h3><div className="space-y-2">{company.strengths.map((item, idx) => (<div key={idx} className="flex items-start gap-2 text-sm text-gray-300"><span className="text-green-500 mt-0.5">+</span>{item}</div>))}</div></div>
                <div><h3 className="text-sm font-semibold text-red-400 mb-3 flex items-center gap-2"><span>⚠️</span> Weaknesses</h3><div className="space-y-2">{company.weaknesses.map((item, idx) => (<div key={idx} className="flex items-start gap-2 text-sm text-gray-300"><span className="text-red-500 mt-0.5">-</span>{item}</div>))}</div></div>
              </div>
              <CitationFooter citations={['Gartner Critical Capabilities for Email Security', 'Osterman Research Reports']} />
            </section>

            <section id="outlook" className="bg-gray-900 rounded-xl border border-gray-800 p-6">
              <h2 className="text-xl font-semibold mb-4 flex items-center gap-2"><span>🔮</span> Outlook</h2>
              <div className="grid md:grid-cols-2 gap-6 mb-6">
                <div><h3 className="text-sm font-semibold text-green-400 mb-3">Tailwinds</h3><div className="space-y-2">{company.outlook.tailwinds.map((item, idx) => (<div key={idx} className="flex items-start gap-2 text-sm text-gray-300"><span className="text-green-500">↑</span>{item}</div>))}</div></div>
                <div><h3 className="text-sm font-semibold text-orange-400 mb-3">Headwinds</h3><div className="space-y-2">{company.outlook.headwinds.map((item, idx) => (<div key={idx} className="flex items-start gap-2 text-sm text-gray-300"><span className="text-orange-500">↓</span>{item}</div>))}</div></div>
              </div>
              <div className="bg-blue-900/20 border border-blue-800/50 rounded-lg p-4"><h3 className="text-sm font-semibold text-blue-400 mb-2">Trajectory</h3><p className="text-sm text-gray-300">{company.outlook.trajectory}</p></div>
              <CitationFooter citations={['Microsoft Strategic Communications', 'Market Analyst Forecasts']} />
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

export default MicrosoftDefenderProfile;
