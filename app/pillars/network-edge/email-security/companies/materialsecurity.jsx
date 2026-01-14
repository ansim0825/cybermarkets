"use client";

import React, { useState } from 'react';

const MaterialSecurityProfile = () => {
  const [activeSection, setActiveSection] = useState('overview');

  const company = {
    name: 'Material Security',
    product: 'Material Cloud Workspace Security Platform',
    tagline: 'Zero trust for email - protect data even after compromise',
    position: 'Data-Centric Security',
    website: 'https://material.security',
    
    snapshot: {
      valuation: '$1.1B',
      funding: '$166M',
      customers: '100+',
      platforms: 'GWS + M365',
      gartnerRating: '4.8/5',
    },

    companyDetails: {
      founded: '2017',
      founders: 'Ryan Noon, Abhishek Agrawal, Chris Park',
      headquarters: 'Redwood City, CA',
      background: 'Ex-Dropbox engineers',
      ceo: 'Abhishek Agrawal (Ryan Noon → Chairman 2023)',
    },

    marketPosition: {
      category: 'Cloud Workspace Security',
      subCategory: 'Data-Centric / Post-Compromise Protection',
      gartnerPosition: 'Emerging - Gartner Peer Insights 4.8/5',
    },

    recognition: [
      '$1.1B Unicorn (Series C 2022)',
      'Andreessen Horowitz & Founders Fund Backed',
      'Ex-Dropbox Founding Team',
    ],

    metrics: {
      valuation: '$1.1B',
      totalFunding: '$166M',
      enterpriseCustomers: '100+',
      peerInsightsRating: '4.8/5',
    },

    marketContext: {
      hypeCyclePosition: 'Slope of Enlightenment (emerging category)',
      uniqueApproach: 'Assumes attacker is already in - protects data even after compromise',
      keyDifferentiator: 'Zero trust for email content: MFA gates sensitive messages, DLP at rest, post-compromise resilience',
    },

    corePhilosophy: {
      insight: '"At Material, we begin with the assumption that a hacker is already in your email and limit the damage they can do." - Ryan Noon, Co-Founder',
      contrast: 'Traditional email security focuses on blocking threats at the gate. Material protects data even when perimeter fails.',
      approach: [
        { step: 'Protect sensitive content', detail: 'MFA gates password resets, financial data, PII even after mailbox compromise' },
        { step: 'Contain account takeover', detail: 'Limit blast radius when accounts are compromised' },
        { step: 'Detect & remediate', detail: 'Behavioral analysis + rapid phishing response across org' },
        { step: 'Reduce data exposure', detail: 'DLP at rest - protect what\'s already in mailboxes' },
      ],
    },

    productCapabilities: [
      { name: 'Sensitive Content Protection', description: 'MFA verification for password resets, financial data, PII in email', isPrimary: true },
      { name: 'Account Takeover Protection', description: 'Contain blast radius of compromised accounts', isPrimary: true },
      { name: 'Phishing Protection', description: 'BEC/VEC detection with "herd immunity" from user reports', isPrimary: false },
      { name: 'Data Loss Prevention', description: 'DLP at rest - protect sensitive data already in mailboxes', isPrimary: false },
      { name: 'Posture Management', description: 'M365/GWS misconfiguration detection', isPrimary: false },
      { name: 'User Behavior Analytics', description: 'Detect anomalous access patterns and risky behavior', isPrimary: false },
    ],

    stakeholders: {
      ciso: {
        role: 'CISO / Security Leadership',
        jtbd: 'Defense-in-depth that protects data even when perimeter fails',
        painPoints: ['BEC losses despite gateway protection', 'Data exposure from compromised accounts'],
        valueProps: ['Post-compromise resilience', 'Zero trust for email content', 'Reduces blast radius'],
      },
      secops: {
        role: 'Security Operations',
        jtbd: 'Rapid phishing response without manual toil',
        painPoints: ['20-30 min per phishing investigation', 'Siloed tools miss context'],
        valueProps: ['Herd immunity - one report protects everyone', '2-5 min investigations', 'Unified workspace view'],
      },
      itAdmin: {
        role: 'IT / Workspace Admin',
        jtbd: 'Protect cloud workspace without disrupting productivity',
        painPoints: ['Native GWS/M365 security gaps', 'User friction from heavy-handed controls'],
        valueProps: ['Seamless API integration', 'Friction only on high-risk content', 'No MX changes'],
      },
    },

    economics: {
      pricing: 'Subscription based on users/mailboxes protected',
      roiDrivers: [
        'Investigation time: 20-30 min → 2-5 min per incident',
        'Post-compromise protection reduces breach impact',
        'Unified platform reduces tool sprawl',
      ],
      competitivePricing: 'Enterprise pricing - positioned for mid-market and large enterprise',
    },

    notableCustomers: [
      'DoorDash', 'Lyft', 'Figma', 'Roblox', 'Mars', 'MassMutual', 
      'Fox', 'Gusto', 'PagerDuty', 'Flexport', 'Sonos', 'Amplitude', 'Databricks'
    ],

    investors: [
      { name: 'Founders Fund', role: 'Series C Lead', partner: 'Trae Stephens' },
      { name: 'Andreessen Horowitz', role: 'Series A Lead', partner: 'Martin Casado' },
      { name: 'Elad Gil', role: 'Series B Lead', partner: 'Solo Capitalist' },
      { name: 'Notable Angels', role: 'Individual', partner: 'Drew Houston (Dropbox CEO), Andy Bechtolsheim' },
    ],

    differentiation: [
      { title: 'Post-Compromise Protection', description: 'Assumes breach happens. Protects data even when attacker is in mailbox.', icon: '🛡️' },
      { title: 'MFA for Sensitive Content', description: 'Verification step before accessing password resets, financial data, PII.', icon: '🔐' },
      { title: 'Herd Immunity', description: 'One user report instantly protects entire organization from same threat.', icon: '🦠' },
      { title: 'Dropbox DNA', description: 'Founded by ex-Dropbox engineers. Productivity-first approach to security.', icon: '📦' },
    ],

    strengths: [
      'Unique differentiated approach - post-compromise / zero trust for email',
      'Strong enterprise customer base (DoorDash, Lyft, Figma, Mars)',
      'Unicorn valuation with tier-1 investors (a16z, Founders Fund)',
      'Ex-Dropbox founding team (productivity + security expertise)',
      'Excellent Gartner Peer Insights rating (4.8/5)',
      'Both Google Workspace and Microsoft 365 support',
      'Reduces investigation time dramatically (20-30 min → 2-5 min)',
    ],

    weaknesses: [
      'Less brand recognition than Abnormal/Proofpoint',
      'Unique approach requires buyer education',
      'Not traditional ICES/SEG - may not fit all evaluation frameworks',
      'Smaller scale than established vendors',
      'Enterprise focus may limit SMB/MSP market',
    ],

    outlook: {
      tailwinds: [
        'Zero trust mindset gaining traction',
        'Post-compromise protection increasingly valued',
        'Cloud workspace security as category expanding',
        'Strong customer references and word-of-mouth',
      ],
      headwinds: [
        'Behavioral AI vendors (Abnormal) dominating analyst attention',
        'Category education required for differentiated approach',
        'Enterprise sales cycle in tough macro environment',
      ],
      trajectory: 'Strong position in cloud-native enterprise segment. Differentiated approach resonates with sophisticated buyers. Growth depends on category education and expanding beyond tech sector.',
    },

    news: [
      { date: 'May 2022', title: '$100M Series C at $1.1B', summary: 'Founders Fund led round achieving unicorn status.', type: 'funding', source: 'Material Security Press Release' },
      { date: '2024', title: 'Gartner Peer Insights 4.8/5', summary: 'High customer satisfaction ratings on Gartner Peer Insights.', type: 'recognition', source: 'Gartner Peer Insights' },
      { date: '2023', title: 'Ryan Noon → Chairman', summary: 'Co-founder Ryan Noon transitioned to Chairman, Abhishek Agrawal as CEO.', type: 'leadership', source: 'Material Security' },
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
      case 'funding': return 'bg-green-900/50 text-green-400 border-green-700';
      case 'recognition': return 'bg-purple-900/50 text-purple-400 border-purple-700';
      case 'leadership': return 'bg-amber-900/50 text-amber-400 border-amber-700';
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
        <linearGradient id="curveGradientMaterial" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" stopColor="#8b5cf6" stopOpacity="0.8" />
          <stop offset="50%" stopColor="#06b6d4" stopOpacity="0.8" />
          <stop offset="100%" stopColor="#10b981" stopOpacity="0.8" />
        </linearGradient>
      </defs>
      <path d="M 30 180 Q 80 180 100 160 Q 120 140 140 60 Q 160 20 180 40 Q 200 60 220 120 Q 260 160 300 150 Q 340 140 380 130 Q 420 120 470 110" stroke="url(#curveGradientMaterial)" strokeWidth="3" fill="none" />
      <circle cx="140" cy="60" r="6" fill="#f97316" stroke="#fff" strokeWidth="2" />
      <text x="140" y="45" textAnchor="middle" fill="#f97316" fontSize="10" fontWeight="bold">GenAI Email</text>
      <circle cx="300" cy="150" r="8" fill="#ec4899" stroke="#fff" strokeWidth="2" />
      <text x="300" y="135" textAnchor="middle" fill="#ec4899" fontSize="10" fontWeight="bold">Data-Centric</text>
      <text x="300" y="175" textAnchor="middle" fill="#9ca3af" fontSize="8">(Material)</text>
      <circle cx="350" cy="135" r="6" fill="#3b82f6" stroke="#fff" strokeWidth="2" />
      <text x="350" y="120" textAnchor="middle" fill="#3b82f6" fontSize="10" fontWeight="bold">Behavioral ICES</text>
      <circle cx="460" cy="110" r="6" fill="#10b981" stroke="#fff" strokeWidth="2" />
      <text x="460" y="95" textAnchor="middle" fill="#10b981" fontSize="10" fontWeight="bold">SEG</text>
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
              <span className="text-gray-300">Material Security</span>
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
                <span className="px-3 py-1 bg-pink-900/50 text-pink-400 border border-pink-700 rounded-full text-sm">{company.position}</span>
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
            <div className="text-2xl font-bold text-pink-400 mb-1">{company.snapshot.valuation}</div>
            <div className="text-xs text-gray-400">Valuation (2022)</div>
          </div>
          <div className="bg-gray-900 rounded-xl p-4 border border-gray-800">
            <div className="text-2xl font-bold text-white mb-1">{company.snapshot.funding}</div>
            <div className="text-xs text-gray-400">Total Funding</div>
          </div>
          <div className="bg-gray-900 rounded-xl p-4 border border-gray-800">
            <div className="text-2xl font-bold text-white mb-1">{company.snapshot.customers}</div>
            <div className="text-xs text-gray-400">Enterprise Customers</div>
          </div>
          <div className="bg-gray-900 rounded-xl p-4 border border-gray-800">
            <div className="text-2xl font-bold text-white mb-1">{company.snapshot.platforms}</div>
            <div className="text-xs text-gray-400">Platforms</div>
          </div>
          <div className="bg-gray-900 rounded-xl p-4 border border-gray-800">
            <div className="text-2xl font-bold text-green-400 mb-1">{company.snapshot.gartnerRating}</div>
            <div className="text-xs text-gray-400">Peer Insights</div>
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
                      className={`w-full text-left px-3 py-2 rounded-lg text-sm flex items-center gap-2 transition-all ${activeSection === section.id ? 'bg-pink-900/50 text-pink-400 border border-pink-800' : 'text-gray-400 hover:bg-gray-800 hover:text-white'}`}>
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
                    <span className="text-gray-500 block">Valuation</span>
                    <span className="text-pink-400">{company.metrics.valuation}</span>
                  </div>
                  <div>
                    <span className="text-gray-500 block">Total Funding</span>
                    <span className="text-white">{company.metrics.totalFunding}</span>
                  </div>
                  <div>
                    <span className="text-gray-500 block">Enterprise Customers</span>
                    <span className="text-white">{company.metrics.enterpriseCustomers}</span>
                  </div>
                  <div>
                    <span className="text-gray-500 block">Peer Insights</span>
                    <span className="text-green-400">{company.metrics.peerInsightsRating}</span>
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
                    <div className="flex justify-between"><span className="text-gray-500">Founders</span><span className="text-gray-300">{company.companyDetails.founders}</span></div>
                    <div className="flex justify-between"><span className="text-gray-500">Headquarters</span><span className="text-gray-300">{company.companyDetails.headquarters}</span></div>
                    <div className="flex justify-between"><span className="text-gray-500">Background</span><span className="text-gray-300">{company.companyDetails.background}</span></div>
                    <div className="flex justify-between"><span className="text-gray-500">CEO</span><span className="text-gray-300">{company.companyDetails.ceo}</span></div>
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
              <div className="bg-pink-900/20 border border-pink-800/50 rounded-lg p-4 mb-4">
                <h3 className="text-sm font-semibold text-pink-400 mb-2">Notable Customers</h3>
                <div className="flex flex-wrap gap-2">
                  {company.notableCustomers.map((customer, idx) => (
                    <span key={idx} className="px-2 py-1 bg-gray-800 rounded text-xs text-gray-300">{customer}</span>
                  ))}
                </div>
              </div>
              <CitationFooter citations={['Material Security Company Information', 'Crunchbase Funding Data', 'Gartner Peer Insights']} />
            </section>

            <section id="market" className="bg-gray-900 rounded-xl border border-gray-800 p-6">
              <h2 className="text-xl font-semibold mb-4 flex items-center gap-2"><span>🌍</span> Market Context</h2>
              <div className="bg-gray-800 rounded-lg p-4 mb-4">
                <h3 className="text-sm font-semibold text-gray-400 mb-3">Email Security Hype Cycle Position</h3>
                <HypeCycleSVG />
                <p className="text-xs text-gray-500 text-center mt-2">[1] Gartner Hype Cycle for Security Operations, 2024</p>
              </div>
              <div className="grid md:grid-cols-2 gap-4 mb-4">
                <div className="bg-pink-900/20 border border-pink-800/50 rounded-lg p-4">
                  <h3 className="text-sm font-semibold text-pink-400 mb-2">Unique Approach</h3>
                  <p className="text-xs text-gray-400">{company.marketContext.uniqueApproach}</p>
                </div>
                <div className="bg-gray-800 rounded-lg p-4">
                  <h3 className="text-sm font-semibold text-white mb-2">Key Differentiator</h3>
                  <p className="text-xs text-gray-400">{company.marketContext.keyDifferentiator}</p>
                </div>
              </div>
              <div className="bg-pink-900/20 border border-pink-800/50 rounded-lg p-4">
                <h3 className="text-sm font-semibold text-pink-400 mb-3">💡 Core Philosophy</h3>
                <p className="text-xs text-gray-300 italic mb-3">{company.corePhilosophy.insight}</p>
                <p className="text-xs text-gray-400 mb-4">{company.corePhilosophy.contrast}</p>
                <div className="grid md:grid-cols-2 gap-3">
                  {company.corePhilosophy.approach.map((item, idx) => (
                    <div key={idx} className="bg-gray-800/50 rounded p-3">
                      <div className="flex items-center gap-2 mb-1">
                        <div className="w-5 h-5 bg-pink-500/20 rounded-full flex items-center justify-center flex-shrink-0">
                          <span className="text-pink-400 font-bold text-xs">{idx + 1}</span>
                        </div>
                        <span className="text-white text-xs font-medium">{item.step}</span>
                      </div>
                      <p className="text-xs text-gray-500 ml-7">{item.detail}</p>
                    </div>
                  ))}
                </div>
              </div>
              <CitationFooter citations={['Material Security Website', 'SiliconANGLE Series C Coverage', 'First Round Review Interview']} />
            </section>

            <section id="product" className="bg-gray-900 rounded-xl border border-gray-800 p-6">
              <h2 className="text-xl font-semibold mb-4 flex items-center gap-2"><span>🎯</span> Product</h2>
              <p className="text-sm text-gray-400 mb-4">Cloud workspace security platform for Google Workspace and Microsoft 365 - focused on protecting data even after compromise.</p>
              <div className="grid md:grid-cols-2 gap-3 mb-6">
                {company.productCapabilities.map((capability, idx) => (
                  <div key={idx} className={`rounded-lg p-4 border ${capability.isPrimary ? 'bg-pink-900/20 border-pink-800/50' : 'bg-gray-800 border-gray-700'}`}>
                    <h3 className="font-medium text-white text-sm">{capability.name}</h3>
                    <p className="text-xs text-gray-400 mt-1">{capability.description}</p>
                    {capability.isPrimary && <span className="text-xs text-pink-400 mt-2 block">Core Differentiator</span>}
                  </div>
                ))}
              </div>
              <div className="bg-green-900/20 border border-green-800/50 rounded-lg p-4">
                <h3 className="text-sm font-semibold text-green-400 mb-3">Tier-1 Investors</h3>
                <div className="grid md:grid-cols-2 gap-3">
                  {company.investors.map((investor, idx) => (
                    <div key={idx} className="text-xs">
                      <span className="text-white font-medium">{investor.name}</span>
                      <span className="text-gray-500"> ({investor.role})</span>
                      <p className="text-gray-400">{investor.partner}</p>
                    </div>
                  ))}
                </div>
              </div>
              <CitationFooter citations={['Material Security Product Documentation', 'Crunchbase Investor Data']} />
            </section>

            <section id="stakeholders" className="bg-gray-900 rounded-xl border border-gray-800 p-6">
              <h2 className="text-xl font-semibold mb-4 flex items-center gap-2"><span>👥</span> Stakeholders</h2>
              <div className="space-y-4">
                {Object.values(company.stakeholders).map((stakeholder, idx) => (
                  <div key={idx} className="bg-gray-800 rounded-lg p-4">
                    <h3 className="font-medium text-white mb-2">{stakeholder.role}</h3>
                    <p className="text-sm text-pink-400 mb-3">JTBD: {stakeholder.jtbd}</p>
                    <div className="grid md:grid-cols-2 gap-4">
                      <div><span className="text-xs text-gray-500 uppercase">Pain Points</span>{stakeholder.painPoints.map((pain, i) => (<p key={i} className="text-xs text-gray-400 mt-1">• {pain}</p>))}</div>
                      <div><span className="text-xs text-gray-500 uppercase">Value Props</span>{stakeholder.valueProps.map((prop, i) => (<p key={i} className="text-xs text-gray-300 mt-1">• {prop}</p>))}</div>
                    </div>
                  </div>
                ))}
              </div>
              <CitationFooter citations={['Material Security Customer Case Studies', 'G2 Reviews', 'Gartner Peer Insights']} />
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
              <CitationFooter citations={['Material Security', 'Customer Testimonials']} />
            </section>

            <section id="differentiation" className="bg-gray-900 rounded-xl border border-gray-800 p-6">
              <h2 className="text-xl font-semibold mb-4 flex items-center gap-2"><span>⚡</span> Differentiation</h2>
              <div className="grid md:grid-cols-2 gap-4">
                {company.differentiation.map((diff, idx) => (
                  <div key={idx} className="bg-gray-800 rounded-lg p-4 border-l-2 border-pink-500">
                    <div className="flex items-center gap-2 mb-2"><span className="text-xl">{diff.icon}</span><h3 className="font-medium text-white">{diff.title}</h3></div>
                    <p className="text-sm text-gray-400">{diff.description}</p>
                  </div>
                ))}
              </div>
              <CitationFooter citations={['Material Security Technology Overview', 'First Round Review']} />
            </section>

            <section id="analysis" className="bg-gray-900 rounded-xl border border-gray-800 p-6">
              <h2 className="text-xl font-semibold mb-4 flex items-center gap-2"><span>📊</span> Analysis</h2>
              <div className="grid md:grid-cols-2 gap-6">
                <div><h3 className="text-sm font-semibold text-green-400 mb-3 flex items-center gap-2"><span>💪</span> Strengths</h3><div className="space-y-2">{company.strengths.map((item, idx) => (<div key={idx} className="flex items-start gap-2 text-sm text-gray-300"><span className="text-green-500 mt-0.5">+</span>{item}</div>))}</div></div>
                <div><h3 className="text-sm font-semibold text-red-400 mb-3 flex items-center gap-2"><span>⚠️</span> Weaknesses</h3><div className="space-y-2">{company.weaknesses.map((item, idx) => (<div key={idx} className="flex items-start gap-2 text-sm text-gray-300"><span className="text-red-500 mt-0.5">-</span>{item}</div>))}</div></div>
              </div>
              <CitationFooter citations={['Gartner Peer Insights Reviews', 'Industry Analyst Reports']} />
            </section>

            <section id="outlook" className="bg-gray-900 rounded-xl border border-gray-800 p-6">
              <h2 className="text-xl font-semibold mb-4 flex items-center gap-2"><span>🔮</span> Outlook</h2>
              <div className="grid md:grid-cols-2 gap-6 mb-6">
                <div><h3 className="text-sm font-semibold text-green-400 mb-3">Tailwinds</h3><div className="space-y-2">{company.outlook.tailwinds.map((item, idx) => (<div key={idx} className="flex items-start gap-2 text-sm text-gray-300"><span className="text-green-500">↑</span>{item}</div>))}</div></div>
                <div><h3 className="text-sm font-semibold text-orange-400 mb-3">Headwinds</h3><div className="space-y-2">{company.outlook.headwinds.map((item, idx) => (<div key={idx} className="flex items-start gap-2 text-sm text-gray-300"><span className="text-orange-500">↓</span>{item}</div>))}</div></div>
              </div>
              <div className="bg-pink-900/20 border border-pink-800/50 rounded-lg p-4"><h3 className="text-sm font-semibold text-pink-400 mb-2">Trajectory</h3><p className="text-sm text-gray-300">{company.outlook.trajectory}</p></div>
              <CitationFooter citations={['Market Analysis', 'Unusual Ventures Podcast Interview']} />
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

export default MaterialSecurityProfile;
