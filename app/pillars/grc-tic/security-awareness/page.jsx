"use client";

import React, { useState } from 'react';
import { Logo } from '@/components/Logo';

const SATPage = () => {
  const [activeSection, setActiveSection] = useState('overview');

  // GRC & TIC sub-segments
  const subSegments = [
    { id: 'ctem', name: 'CTEM', active: false, href: '/pillars/grc-tic/ctem' },
    { id: 'compliance', name: 'Compliance', active: false, href: '#' },
    { id: 'grc', name: 'GRC Platforms', active: false, href: '#' },
    { id: 'security-awareness', name: 'Security Awareness', active: true, href: '/pillars/grc-tic/sat' },
    { id: 'threat-intel', name: 'Threat Intelligence', active: false, href: '/pillars/grc-tic/threat-intelligence' },
  ];

  const srpSections = [
    { id: 'overview', name: 'Overview', icon: '📋' },
    { id: 'structure', name: 'Market Structure', icon: '🏗️' },
    { id: 'motion', name: 'Market Dynamics', icon: '📈' },
    { id: 'stakeholders', name: 'Stakeholders', icon: '👥' },
    { id: 'economics', name: 'Economics & ROI', icon: '💰' },
    { id: 'product', name: 'PM Strategy', icon: '🎯' },
    { id: 'theses', name: 'Strategic Theses', icon: '🔮' },
  ];

  // Related pillars (for cross-reference)
  const relatedPillars = [
    { name: 'Identity', primary: false },
    { name: 'SecOps & Analytics', primary: false },
    { name: 'Data & Application', primary: false },
  ];

  const keyInsights = [
    { stat: '$5.8B', label: 'Market size (2025)' },
    { stat: '8%', label: 'Of employees cause 80% of incidents' },
    { stat: '276%', label: 'ROI over 3 years (Forrester TEI)' },
    { stat: '86%', label: 'Phish-prone reduction in 1 year' },
  ];

  const marketSizing = [
    { source: 'Mordor Intelligence (Platform)', val2024: '—', val2025: '$5.77B', projection: '$12.70B (2030)', cagr: '17.1%' },
    { source: 'Mordor Intelligence (Services)', val2024: '—', val2025: '$1.86B', projection: '$2.71B (2030)', cagr: '7.8%' },
    { source: 'Dataintelo', val2024: '$2.21B', val2025: '—', projection: '$11.25B (2033)', cagr: '18.7%' },
    { source: 'Cybersecurity Ventures', val2024: '—', val2025: '—', projection: '$10B (2027)', cagr: '—' },
  ];

  const marketSubSegments = [
    'Computer-Based Training (CBT)',
    'Phishing Simulation Platforms',
    'Human Risk Management (HRM)',
    'Security Behavior & Culture Programs (SBCP)',
    'Managed Security Awareness Services',
    'Compliance Training Modules',
  ];

  // Top vendors by consensus (from Dimension 1 research)
  const competitors = [
    {
      name: 'KnowBe4',
      product: 'KnowBe4 HRM+ Platform',
      position: 'Market Leader',
      focus: 'Largest library (1,271+ modules), G2 #1 for 22+ quarters, acquired Egress (email security), Vista Equity-backed ($4.6B).',
      status: 'in-progress',
      href: '/pillars/grc-tic/sat/companies/knowbe4'
    },
    {
      name: 'Proofpoint',
      product: 'Proofpoint Security Awareness',
      position: 'Platform Leader',
      focus: 'Threat intel integration, Wombat acquisition, Hornetsecurity acquisition ($1.8B Dec 2025), Thoma Bravo-backed.',
      status: 'in-progress',
      href: '/pillars/grc-tic/sat/companies/proofpoint'
    },
    {
      name: 'Mimecast',
      product: 'Mimecast Engage (HRM)',
      position: 'Platform Leader',
      focus: 'Unified HRM platform. Elevate Security + Code42 + Aware acquisitions (2024). Permira-backed ($5.8B).',
      status: 'in-progress',
      href: '/pillars/grc-tic/sat/companies/mimecast'
    },
    {
      name: 'Cofense',
      product: 'Cofense PhishMe',
      position: 'Pure-Play Leader',
      focus: 'Phishing incident response focus. SOC workflow integration. Strong managed services offering.',
      status: 'in-progress',
      href: '/pillars/grc-tic/sat/companies/cofense'
    },
    {
      name: 'Hoxhunt',
      product: 'Hoxhunt Platform + Respond',
      position: 'HRM Challenger',
      focus: 'Gamified behavioral training. AI SOC co-pilot (Respond, 2025). 60% report rate achievement. Forrester recognized.',
      status: 'in-progress',
      href: '/pillars/grc-tic/sat/companies/hoxhunt'
    },
    {
      name: 'CybSafe',
      product: 'CybSafe Platform',
      position: 'HRM Leader',
      focus: 'Forrester Wave Leader (Q3 2024). SebDB behavioral database (100+ behaviors). Data-led behavior change.',
      status: 'in-progress',
      href: '/pillars/grc-tic/sat/companies/cybsafe'
    },
    {
      name: 'Living Security',
      product: 'Living Security Unify',
      position: 'HRM Leader',
      focus: 'Forrester Wave Leader (Q3 2024). 250+ behavior integrations. Agentic HRM capabilities emerging.',
      status: 'in-progress',
      href: '/pillars/grc-tic/sat/companies/livingsecurity'
    },
    {
      name: 'SoSafe',
      product: 'SoSafe Platform',
      position: 'HRM Strong Performer',
      focus: 'European leader (Germany HQ). GDPR focus. Behavioral science approach. 5,000+ customers.',
      status: 'in-progress',
      href: '/pillars/grc-tic/sat/companies/sosafe'
    },
    {
      name: 'Adaptive Security',
      product: 'Adaptive Security Platform',
      position: 'AI-Native Emerging',
      focus: 'OpenAI investment ($146.5M total). AI-native deepfake/vishing. Multi-vector simulation leader.',
      status: 'in-progress',
      href: '/pillars/grc-tic/sat/companies/adaptivesecurity'
    },
    {
      name: 'SANS Institute',
      product: 'SANS Security Awareness',
      position: 'Premium Content',
      focus: 'Premium content quality. SANS brand credibility. "Managing Human Risk" rebrand.',
      status: 'in-progress',
      href: '/pillars/grc-tic/sat/companies/sans'
    },
    {
      name: 'Infosec IQ',
      product: 'Infosec IQ Platform',
      position: 'Mid-Market Leader',
      focus: '"Choose Your Own Adventure" games. 2,000+ resources. Strong mid-market focus.',
      status: 'in-progress',
      href: '/pillars/grc-tic/sat/companies/infosec'
    },
    {
      name: 'NINJIO',
      product: 'NINJIO Platform',
      position: 'Engagement Leader',
      focus: 'Netflix-style micro-learning. Anime content. Storytelling approach for SMB.',
      status: 'in-progress',
      href: '/pillars/grc-tic/sat/companies/ninjio'
    },
    {
      name: 'Arctic Wolf',
      product: 'Managed Security Awareness',
      position: 'Managed Service',
      focus: 'SAT as part of MDR. 24/7 SOC integration. 68% breach rate finding in 2025 Human Risk Report.',
      status: 'in-progress',
      href: '/pillars/grc-tic/sat/companies/arcticwolf'
    },
    {
      name: 'Huntress',
      product: 'Managed SAT (Curricula)',
      position: 'SMB Managed',
      focus: 'SMB-focused managed service. Curricula acquisition ($22M, 2023). 4.9/5 G2 rating.',
      status: 'in-progress',
      href: '/pillars/grc-tic/sat/companies/huntress'
    },
    {
      name: 'Barracuda',
      product: 'Barracuda Security Awareness',
      position: 'MSP Bundle',
      focus: 'MSP-focused. PhishLine acquisition (2018). Bundled with email security.',
      status: 'in-progress',
      href: '/pillars/grc-tic/sat/companies/barracuda'
    },
  ];

  // Helper function for research status styling
  const getStatusStyle = (status) => {
    switch (status) {
      case 'complete':
        return { bg: 'bg-green-900/50', text: 'text-green-400', dot: 'bg-green-400', label: 'Complete' };
      case 'in-progress':
        return { bg: 'bg-yellow-900/50', text: 'text-yellow-400', dot: 'bg-yellow-400', label: 'In Progress' };
      case 'pending':
      default:
        return { bg: 'bg-gray-800', text: 'text-gray-500', dot: 'bg-gray-500', label: 'Pending' };
    }
  };

  const trends = [
    {
      name: 'SAT → Human Risk Management (HRM) Evolution',
      description: 'Forrester officially renamed category to HRM (Q3 2024). Shift from compliance checkboxes to behavioral outcomes and risk quantification.'
    },
    {
      name: 'AI-Powered Personalization & Simulation',
      description: '82.6% of phishing emails now contain AI-generated content. Platforms embedding GenAI for OSINT-driven spear phishing and adaptive learning.'
    },
    {
      name: 'Cyber Insurance Driving Mandatory Adoption',
      description: '81% of organizations require SAT for cyber insurance coverage. Insurers demand evidence of ongoing programs, not annual checkboxes.'
    },
    {
      name: 'Multi-Channel Threat Simulation Expansion',
      description: 'Vishing attacks increased 449% in 2025. Training expanding beyond email to voice, SMS, QR codes, deepfakes, and collaboration tools.'
    },
    {
      name: 'Platform Consolidation with Email Security',
      description: 'KnowBe4+Egress, Mimecast+Elevate, Proofpoint+Hornetsecurity. Unified HRM platforms replacing point solutions.'
    },
  ];

  const hypePositions = [
    { tech: 'Traditional SAT/CBT', position: 'Plateau of Productivity', status: 'stable', note: 'Mature, commoditized' },
    { tech: 'Human Risk Management (HRM)', position: 'Slope of Enlightenment', status: 'rising', note: 'Forrester-defined category' },
    { tech: 'AI-Powered Adaptive Training', position: 'Peak of Inflated Expectations', status: 'hot', note: 'Every vendor claims AI' },
    { tech: 'Multi-Vector Simulation (Vishing/Deepfake)', position: 'Innovation Trigger → Peak', status: 'emerging', note: '449% vishing increase' },
    { tech: 'Agentic HRM Automation', position: 'Innovation Trigger', status: 'emerging', note: 'Living Security, Keepnet' },
  ];

  const maActivity = [
    { date: 'Dec 2025', acquirer: 'Proofpoint', target: 'Hornetsecurity', value: '$1.8B', signal: 'MSP/SMB expansion, European market' },
    { date: 'Aug 2024', acquirer: 'Mimecast', target: 'Aware', value: 'Undisclosed', signal: 'AI collaboration security' },
    { date: 'Jul 2024', acquirer: 'Mimecast', target: 'Code42', value: 'Undisclosed', signal: 'Insider threat, DLP' },
    { date: 'Jul 2024', acquirer: 'KnowBe4', target: 'Egress', value: 'Undisclosed', signal: 'Cloud email security' },
    { date: 'Jan 2024', acquirer: 'Mimecast', target: 'Elevate Security', value: 'Undisclosed', signal: 'Human risk scoring' },
    { date: 'Feb 2023', acquirer: 'Vista Equity', target: 'KnowBe4', value: '$4.6B', signal: 'PE consolidation play' },
    { date: 'May 2022', acquirer: 'Permira', target: 'Mimecast', value: '$5.8B', signal: 'PE consolidation play' },
    { date: '2021', acquirer: 'Thoma Bravo', target: 'Proofpoint', value: '$12.3B', signal: 'PE consolidation play' },
  ];

  const cisoJobs = [
    { job: 'Prove training actually reduces risk, not just completion', metric: 'Behavioral outcomes: report rates, real incident correlation' },
    { job: 'Quantify human risk for the board in dollars', metric: 'Risk dashboards, $ cost avoidance, incident reduction %' },
    { job: 'Justify SAT budget to CFO under tight constraints', metric: 'ROI dashboard, TEI studies, breach cost avoidance' },
    { job: 'Meet compliance requirements (NIS2, DORA, HIPAA)', metric: 'Audit-ready reports, framework mapping' },
  ];

  const secAwarenessManagerJobs = [
    { job: 'Run effective programs with minimal admin burden', metric: 'Automation, set-and-forget campaigns, admin hours/month' },
    { job: 'Keep content fresh—avoid employee fatigue', metric: 'Content variety, update frequency, engagement rates' },
    { job: 'Customize training for different roles/departments', metric: 'Role-based assignment, role-specific phish-prone rates' },
    { job: 'Correlate training to actual security behavior', metric: 'Closed-loop analytics, training-to-behavior correlation' },
  ];

  const socAnalystJobs = [
    { job: 'Manage user-reported phishing without queue overload', metric: 'Automated triage, AI classification, time saved per email' },
    { job: 'Connect real threats to training recommendations', metric: 'Threat-to-training integration, real incidents → training' },
    { job: 'Encourage employees to report more', metric: 'Frictionless reporting button, report rate improvement' },
  ];

  const endUserJobs = [
    { job: 'Complete required training quickly without boredom', metric: 'Micro-learning (3-5 min), completion rates, satisfaction' },
    { job: 'Not feel tricked or punished by simulations', metric: 'Constructive feedback, sentiment scores, participation' },
    { job: 'Know if an email is real or fake, and how to report', metric: 'Clear reporting UX, one-click button, report rate' },
  ];

  const tableStakes = [
    'Pre-built content library (100+ modules)',
    'Video-based training modules (3-10 min)',
    'Quizzes and post-training assessments',
    'Completion tracking and certificates',
    'Email phishing simulations (500+ templates)',
    'Click/failure rate tracking',
    'Post-click "teachable moment" pages',
    'Admin dashboard and basic analytics',
    'Microsoft 365 integration (user sync, email)',
    'Google Workspace integration',
    'SSO/SAML authentication support',
    'Cloud/SaaS deployment',
    'SCORM compatibility (LMS export)',
    'Multi-language support (10+ languages)',
  ];

  const tier1Differentiators = [
    { name: 'AI-Generated Spear Phishing', description: 'OSINT-driven, hyper-personalized simulations based on employee digital footprints (Brightside AI, Adaptive Security)' },
    { name: 'Multi-Vector Simulation', description: 'Beyond email: vishing (voice), smishing (SMS), QR code phishing, deepfake video, MFA fatigue attacks' },
    { name: 'Behavioral Risk Scoring', description: 'Individual user risk profiles based on actual behavior—8% of employees cause 80% of incidents' },
    { name: 'Closed-Loop Training', description: 'Real threat telemetry (blocked phishing, security alerts) triggers personalized training automatically' },
    { name: 'Adaptive Learning Paths', description: 'AI-driven personalization adjusting difficulty and content based on user performance—60% vs 7% report rates' },
    { name: 'Gamification & Engagement', description: 'Leaderboards, badges, competitive elements driving voluntary participation and sustained behavior change' },
  ];

  const tier2Differentiators = [
    { name: 'Deepfake Awareness Training', description: 'AI-generated video/voice deepfakes of executives for realistic multi-step simulations' },
    { name: 'Real-Time Coaching/Nudges', description: 'In-the-moment intervention when risky behavior detected, not post-facto training (SecurityCoach)' },
    { name: 'SOC Integration', description: 'Phishing reports flow directly into SIEM/SOAR for incident response (HoxHunt Respond)' },
    { name: 'Employee Empowerment', description: 'Showing employees their own OSINT exposure and helping them remediate (Brightside AI)' },
    { name: 'Agentic Automation', description: 'AI agents that observe, decide, act on human risk—just-in-time coaching, manager nudges, step-up MFA' },
  ];

  const roiMetrics = [
    { metric: 'Typical ROI range', value: '3x-7x investment' },
    { metric: 'Forrester TEI (KnowBe4)', value: '276% ROI, <3 mo payback' },
    { metric: 'Insider threat cost (Ponemon)', value: '$17.4M annual average' },
    { metric: 'Training cost savings', value: '$5.4M in insider costs' },
  ];

  const pricingTiers = [
    { tier: 'Budget/SMB', range: '$0.45-$1.25/user/mo', vendors: 'TitanHQ, Webroot', annual: '$5-15/user/yr' },
    { tier: 'Mid-Market (Silver/Gold)', range: '$1.50-$2.50/user/mo', vendors: 'KnowBe4 Silver/Gold, Infosec IQ', annual: '$18-30/user/yr' },
    { tier: 'Enterprise (Platinum/Diamond)', range: '$2.50-$3.25/user/mo', vendors: 'KnowBe4 Platinum/Diamond', annual: '$30-39/user/yr' },
    { tier: 'Premium HRM Bundle', range: '$5.00-$6.00/user/mo', vendors: 'Mimecast HRM+, KnowBe4 HRM+', annual: '$60-72/user/yr' },
  ];

  const tcoComponents = [
    { component: 'Platform license', range: '$12-36/user/year', notes: 'Core subscription cost' },
    { component: 'Admin FTE time', range: '0.25-1.0 FTE', notes: 'Campaign management, reporting' },
    { component: 'Employee training time', range: '2-4 hrs/user/year', notes: 'At $50/hr = $100-200/user' },
    { component: 'Integration/setup', range: '$5K-$25K', notes: 'One-time implementation' },
    { component: 'Content customization', range: '$2K-$10K/year', notes: 'Industry-specific or branded' },
  ];

  const theses = [
    {
      id: 1,
      title: 'The 8/80 Rule Drives Product Strategy',
      timeframe: '2025-2027',
      confidence: 'High',
      color: 'green',
      claim: '8% of employees cause 80% of security incidents. Products that efficiently identify and remediate high-risk users deliver disproportionate ROI. Spray-and-pray training is obsolete.',
      evidence: [
        'Mimecast research: "8% of employees cause 80% of security incidents"',
        'Only 7.5% of programs personalize training to individual risk levels',
        'Adaptive platforms show 60% report rates vs. 7% for quarterly training',
        'Behavioral risk scoring becoming RFP requirement as HRM matures'
      ],
      implication: 'Evaluate vendors on risk scoring granularity and ability to target high-risk users efficiently—not just content library size.',
    },
    {
      id: 2,
      title: 'Platform Consolidation into HRM is Inevitable',
      timeframe: '2025-2028',
      confidence: 'High',
      color: 'purple',
      claim: 'Standalone SAT is being absorbed into unified Human Risk Management platforms. By 2028, buying SAT separately from email security will be like buying endpoint without EDR.',
      evidence: [
        'KnowBe4+Egress, Mimecast+Elevate, Proofpoint+Hornetsecurity acquisitions',
        'PE firms (Vista, Permira, Thoma Bravo) funding aggressive roll-up strategies',
        'Forrester officially renamed category to HRM (Q3 2024)',
        'TCO favors consolidated platforms with unified risk scoring'
      ],
      implication: 'Pure-play SAT vendors face acquisition or extinction. Evaluate vendors on HRM roadmap and email security integration strategy.',
    },
    {
      id: 3,
      title: 'Report Rate > Click Rate as Success Metric',
      timeframe: '2025-2027',
      confidence: 'Medium-High',
      color: 'orange',
      claim: 'The industry is shifting from measuring failure (click rates) to measuring empowerment (report rates). Modern buyers care about behavior change, not compliance checkboxes.',
      evidence: [
        'Hoxhunt: 7% report rate with quarterly training → 60% with continuous programs',
        'Forrester: Only 15% of traditional SAT recipients change behavior',
        'Gartner: 90%+ of employees who took risky actions knew it was risky',
        'Gamification vendors (Hoxhunt, SoSafe) winning on engagement metrics'
      ],
      implication: 'Prioritize vendors with report rate tracking, gamification, and positive reinforcement over punitive "gotcha" approaches.',
    },
  ];

  const regulatoryDrivers = [
    { regulation: 'NIS2 (EU)', date: 'Oct 17, 2024', implication: 'Essential/digital service providers MUST train employees' },
    { regulation: 'DORA (EU Financial)', date: 'Jan 17, 2025', implication: 'Financial entities must demonstrate training effectiveness' },
    { regulation: 'GDPR', date: 'Ongoing', implication: 'Data protection training required with evidence of program' },
    { regulation: 'PCI DSS 4.0', date: 'Mar 2025', implication: 'Security awareness training now annual requirement' },
    { regulation: 'Cyber Insurance', date: 'Ongoing', implication: '81% of insurers require SAT for coverage eligibility' },
  ];

  const g2ReviewThemes = [
    { theme: 'Easy setup/deployment', sentiment: 'positive', frequency: 'Very High' },
    { theme: 'Content variety and regular updates', sentiment: 'positive', frequency: 'High' },
    { theme: 'Phishing simulation realism', sentiment: 'positive', frequency: 'High' },
    { theme: 'Content becomes repetitive', sentiment: 'negative', frequency: '34 mentions' },
    { theme: 'Customization complexity', sentiment: 'negative', frequency: '32 mentions' },
    { theme: 'Steep learning curve', sentiment: 'negative', frequency: '30 mentions' },
    { theme: 'Phishing filtering challenges', sentiment: 'negative', frequency: '51 mentions' },
  ];

  const getConfidenceColor = (confidence) => {
    switch (confidence) {
      case 'High':
        return 'bg-green-900/50 text-green-400 border-green-700';
      case 'Medium-High':
        return 'bg-blue-900/50 text-blue-400 border-blue-700';
      case 'Medium':
        return 'bg-yellow-900/50 text-yellow-400 border-yellow-700';
      default:
        return 'bg-gray-800 text-gray-400 border-gray-700';
    }
  };

  const getThesisAccent = (color) => {
    switch (color) {
      case 'green':
        return 'border-l-green-500';
      case 'purple':
        return 'border-l-purple-500';
      case 'orange':
        return 'border-l-orange-500';
      default:
        return 'border-l-blue-500';
    }
  };

  const scrollToSection = (sectionId) => {
    setActiveSection(sectionId);
    document.getElementById(sectionId)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-gray-950 text-white">
      {/* Navigation */}
      <nav className="border-b border-gray-800 px-6 py-4">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <div className="flex items-center gap-8">
            <Logo />
            <div className="flex items-center gap-2 text-sm text-gray-400">
              <span>/</span>
              <a href="/pillars/grc-tic" className="hover:text-white">GRC & TIC</a>
            </div>
          </div>
          <div className="flex items-center gap-6 text-sm">
            <a href="/pillars" className="text-gray-400 hover:text-white">Pillars</a>
            <a href="/theses" className="text-gray-400 hover:text-white">Theses</a>
            <a href="/about" className="text-gray-400 hover:text-white">About</a>
          </div>
        </div>
      </nav>

      {/* Sub-segment Navigation */}
      <div className="border-b border-gray-800 px-6 py-3 bg-gray-900/50">
        <div className="max-w-7xl mx-auto flex items-center gap-6 overflow-x-auto">
          {subSegments.map((seg) => (
            <a
              key={seg.id}
              href={seg.href}
              className={`text-sm whitespace-nowrap px-3 py-1.5 rounded-full transition-all flex items-center gap-2 ${
                seg.active
                  ? 'bg-blue-900/50 text-blue-400 border border-blue-800'
                  : 'text-gray-400 hover:text-white hover:bg-gray-800'
              }`}
            >
              {seg.active && <span className="text-xs">●</span>}
              {seg.name}
            </a>
          ))}
          
          {/* Related pillars */}
          <div className="ml-auto flex items-center gap-2 text-xs text-gray-500">
            <span>Also touches:</span>
            {relatedPillars.map((pillar, idx) => (
              <span key={idx} className={`px-2 py-1 rounded ${pillar.primary ? 'bg-blue-900/30 text-blue-400' : 'bg-gray-800 text-gray-400'}`}>
                {pillar.name}
              </span>
            ))}
          </div>
        </div>
      </div>

      {/* Header */}
      <header className="px-6 py-12 border-b border-gray-800">
        <div className="max-w-7xl mx-auto">
          <div className="flex items-start justify-between">
            <div>
              <div className="flex items-center gap-3 mb-4">
                <h1 className="text-4xl font-bold">Security Awareness Training</h1>
                <span className="px-3 py-1 bg-purple-900/50 text-purple-400 text-xs font-medium rounded-full border border-purple-800">
                  EVOLVING → HRM
                </span>
              </div>
              <p className="text-xl text-gray-400 max-w-3xl">
                The $5.8B market transforming from compliance checkboxes to Human Risk Management—where the 8% causing 80% of incidents become the product focus
              </p>
              <div className="flex items-center gap-4 mt-6 text-sm text-gray-500">
                <span>Last updated: January 2026</span>
                <span>•</span>
                <span>Methodology: SRP Framework</span>
                <span>•</span>
                <span className="flex items-center gap-1">
                  <span className="w-2 h-2 bg-yellow-400 rounded-full animate-pulse"></span>
                  Active research
                </span>
              </div>
            </div>
          </div>
          
          {/* Key Stats Bar */}
          <div className="grid grid-cols-4 gap-6 mt-8 p-6 bg-gray-900/50 rounded-xl border border-gray-800">
            {keyInsights.map((insight, idx) => (
              <div key={idx} className="text-center">
                <div className="text-3xl font-bold text-white">{insight.stat}</div>
                <div className="text-sm text-gray-400 mt-1">{insight.label}</div>
              </div>
            ))}
          </div>
          
          {/* The 8/80 Insight Callout */}
          <div className="mt-6 p-4 bg-gradient-to-r from-orange-900/20 to-purple-900/20 rounded-lg border border-orange-800/50">
            <div className="flex items-start gap-3">
              <span className="text-2xl">🎯</span>
              <div>
                <h3 className="font-semibold text-orange-400">The Core Insight</h3>
                <p className="text-gray-300 mt-1">
                  <strong>8% of employees cause 80% of security incidents.</strong> Traditional "spray-and-pray" training is giving way to 
                  behavioral risk scoring that identifies and remediates high-risk users. The market is evolving from SAT to Human Risk Management (HRM).
                </p>
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* Main Content Grid */}
      <div className="max-w-7xl mx-auto px-6 py-8 grid grid-cols-12 gap-8">
        
        {/* Left Sidebar - SRP Navigation */}
        <aside className="col-span-3 space-y-6">
          <div className="sticky top-8">
            <h3 className="text-sm font-medium text-gray-400 mb-4">SRP Analysis</h3>
            <nav className="space-y-1">
              {srpSections.map((section) => (
                <button
                  key={section.id}
                  onClick={() => scrollToSection(section.id)}
                  className={`w-full text-left px-3 py-2 rounded-lg text-sm flex items-center gap-2 transition-all ${
                    activeSection === section.id
                      ? 'bg-blue-900/50 text-blue-400 border border-blue-800'
                      : 'text-gray-400 hover:bg-gray-800 hover:text-white'
                  }`}
                >
                  <span>{section.icon}</span>
                  {section.name}
                </button>
              ))}
            </nav>
            
            {/* HRM Evolution Visual */}
            <div className="mt-8 p-4 bg-gray-900/50 rounded-lg border border-gray-800">
              <h4 className="text-xs font-medium text-gray-500 mb-3">Market Evolution</h4>
              <div className="space-y-2 text-xs">
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 rounded bg-gray-600"></div>
                  <span className="text-gray-400">Compliance SAT</span>
                  <span className="text-gray-600 ml-auto">Past</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 rounded bg-blue-500"></div>
                  <span className="text-blue-400">Human Risk Mgmt</span>
                  <span className="text-blue-400 ml-auto">Now</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 rounded bg-purple-500"></div>
                  <span className="text-purple-400">Adaptive Protection</span>
                  <span className="text-purple-400 ml-auto">2027+</span>
                </div>
              </div>
              <p className="text-xs text-gray-500 mt-3 italic">
                Per Forrester's HRM evolution framework
              </p>
            </div>
          </div>
        </aside>

        {/* Main Content Area */}
        <main className="col-span-9 space-y-12">
          
          {/* Overview Section */}
          <section id="overview" className="scroll-mt-8">
            <h2 className="text-2xl font-bold mb-6 flex items-center gap-2">
              <span>📋</span> Overview
            </h2>
            
            <div className="prose prose-invert max-w-none">
              <p className="text-gray-300 leading-relaxed">
                <strong>Security Awareness Training (SAT)</strong> is an educational process designed to equip employees with knowledge and skills to recognize cybersecurity threats 
                (phishing, malware, social engineering) and follow secure practices. The market is undergoing a fundamental transformation from compliance-driven training to 
                <strong> Human Risk Management (HRM)</strong>—a term Forrester formally adopted in Q3 2024.
              </p>
              
              <p className="text-gray-300 leading-relaxed mt-4">
                This evolution reflects industry recognition that traditional SAT has failed to change behavior—Gartner notes that 90%+ of employees who took risky actions 
                <em> knew</em> it was risky. The new paradigm focuses on behavioral outcomes, risk quantification, and targeting the 8% of employees who cause 80% of incidents.
              </p>
            </div>

            <div className="grid grid-cols-2 gap-6 mt-8">
              <div className="p-5 bg-gray-900/50 rounded-lg border border-gray-800">
                <h3 className="font-semibold text-white mb-3">Why Organizations Invest</h3>
                <ul className="space-y-2 text-sm text-gray-400">
                  <li className="flex items-start gap-2">
                    <span className="text-blue-400">•</span>
                    <span><strong>Human Element:</strong> 74-95% of breaches involve human error</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-blue-400">•</span>
                    <span><strong>Regulatory Mandates:</strong> NIS2, DORA, HIPAA, PCI DSS 4.0</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-blue-400">•</span>
                    <span><strong>Cyber Insurance:</strong> 81% of insurers require SAT for coverage</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-blue-400">•</span>
                    <span><strong>Cost Avoidance:</strong> Training saves $5.4M in insider costs</span>
                  </li>
                </ul>
              </div>
              
              <div className="p-5 bg-gray-900/50 rounded-lg border border-gray-800">
                <h3 className="font-semibold text-white mb-3">The HRM Transformation</h3>
                <ul className="space-y-2 text-sm text-gray-400">
                  <li className="flex items-start gap-2">
                    <span className="text-purple-400">•</span>
                    <span><strong>From:</strong> Completion rates, compliance checkboxes</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-purple-400">•</span>
                    <span><strong>To:</strong> Behavioral outcomes, risk quantification</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-purple-400">•</span>
                    <span><strong>Metric shift:</strong> Report rate &gt click rate</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-purple-400">•</span>
                    <span><strong>Platform convergence:</strong> SAT + email security + DLP</span>
                  </li>
                </ul>
              </div>
            </div>

            {/* Analyst Consensus Box */}
            <div className="mt-8 p-5 bg-gradient-to-r from-blue-900/20 to-purple-900/20 rounded-lg border border-blue-800/50">
              <h3 className="font-semibold text-blue-400 mb-3">📊 Analyst Consensus</h3>
              <div className="grid grid-cols-2 gap-6 text-sm">
                <div>
                  <h4 className="font-medium text-white mb-2">Gartner</h4>
                  <p className="text-gray-400">
                    "Traditional security awareness programs have failed to reduce unsecure employee behavior." 
                    Recommends Security Behavior and Culture Programs (SBCPs). Shifted from Magic Quadrant to Market Guide (signals maturity).
                  </p>
                </div>
                <div>
                  <h4 className="font-medium text-white mb-2">Forrester</h4>
                  <p className="text-gray-400">
                    Officially renamed category to <strong>Human Risk Management (HRM)</strong> in Q3 2024. 
                    "Only 15% of people who receive traditional SAT actually change their behavior."
                    <br />
                    <em className="text-purple-400">Wave Leaders: CybSafe, Living Security</em>
                  </p>
                </div>
              </div>
            </div>
          </section>

          {/* Market Structure Section */}
          <section id="structure" className="scroll-mt-8">
            <h2 className="text-2xl font-bold mb-6 flex items-center gap-2">
              <span>🏗️</span> Market Structure
            </h2>

            {/* Market Sizing */}
            <div className="mb-8">
              <h3 className="text-lg font-semibold mb-4">Market Size & Growth</h3>
              <div className="overflow-x-auto">
                <table className="w-full text-sm">
                  <thead>
                    <tr className="border-b border-gray-800">
                      <th className="text-left py-3 px-4 text-gray-400 font-medium">Source</th>
                      <th className="text-left py-3 px-4 text-gray-400 font-medium">2024</th>
                      <th className="text-left py-3 px-4 text-gray-400 font-medium">2025</th>
                      <th className="text-left py-3 px-4 text-gray-400 font-medium">Projection</th>
                      <th className="text-left py-3 px-4 text-gray-400 font-medium">CAGR</th>
                    </tr>
                  </thead>
                  <tbody>
                    {marketSizing.map((row, idx) => (
                      <tr key={idx} className="border-b border-gray-800/50 hover:bg-gray-900/50">
                        <td className="py-3 px-4 text-white">{row.source}</td>
                        <td className="py-3 px-4 text-gray-400">{row.val2024}</td>
                        <td className="py-3 px-4 text-gray-300">{row.val2025}</td>
                        <td className="py-3 px-4 text-blue-400">{row.projection}</td>
                        <td className="py-3 px-4 text-green-400">{row.cagr}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
              <p className="text-xs text-gray-500 mt-2">
                Note: Market size varies significantly ($2-6B) based on scope definition—narrow (CBT only) vs. broad (platform + services + HRM).
              </p>
            </div>

            {/* Sub-segments */}
            <div className="mb-8">
              <h3 className="text-lg font-semibold mb-4">SAT Sub-Segments (Converging into HRM)</h3>
              <div className="flex flex-wrap gap-2">
                {marketSubSegments.map((seg, idx) => (
                  <span key={idx} className="px-3 py-1.5 bg-gray-800 text-gray-300 text-sm rounded-lg border border-gray-700">
                    {seg}
                  </span>
                ))}
              </div>
              <p className="text-xs text-gray-500 mt-3">
                <strong>Key observation:</strong> Forrester formally retired "SAT" nomenclature in Q3 2024, replacing it with "Human Risk Management" in their Wave evaluation.
              </p>
            </div>

            {/* Regulatory Drivers */}
            <div className="mb-8">
              <h3 className="text-lg font-semibold mb-4">Regulatory Compliance Drivers</h3>
              <div className="overflow-x-auto">
                <table className="w-full text-sm">
                  <thead>
                    <tr className="border-b border-gray-800">
                      <th className="text-left py-3 px-4 text-gray-400 font-medium">Regulation</th>
                      <th className="text-left py-3 px-4 text-gray-400 font-medium">Effective Date</th>
                      <th className="text-left py-3 px-4 text-gray-400 font-medium">SAT Implication</th>
                    </tr>
                  </thead>
                  <tbody>
                    {regulatoryDrivers.map((row, idx) => (
                      <tr key={idx} className="border-b border-gray-800/50 hover:bg-gray-900/50">
                        <td className="py-3 px-4 text-white font-medium">{row.regulation}</td>
                        <td className="py-3 px-4 text-yellow-400">{row.date}</td>
                        <td className="py-3 px-4 text-gray-300">{row.implication}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>

            {/* Competitive Landscape */}
            <div className="mb-8">
              <h3 className="text-lg font-semibold mb-4">Top 15 Vendors by Consensus (2025)</h3>
              <div className="flex items-center gap-4 mb-4 text-xs">
                <div className="flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-green-400"></span>
                  <span className="text-gray-400">Complete</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-yellow-400"></span>
                  <span className="text-gray-400">In Progress</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-gray-500"></span>
                  <span className="text-gray-400">Pending</span>
                </div>
              </div>
              
              <div className="space-y-3">
                {competitors.map((comp, idx) => {
                  const statusStyle = getStatusStyle(comp.status);
                  return (
                    <a
                      key={idx}
                      href={comp.href}
                      className={`block p-4 rounded-lg border transition-all hover:border-blue-700 ${statusStyle.bg} border-gray-800`}
                    >
                      <div className="flex items-start justify-between">
                        <div className="flex-1">
                          <div className="flex items-center gap-3">
                            <h4 className="font-semibold text-white">{comp.name}</h4>
                            <span className="text-gray-500">•</span>
                            <span className="text-sm text-gray-400">{comp.product}</span>
                          </div>
                          <p className="text-sm text-gray-400 mt-1">{comp.focus}</p>
                        </div>
                        <div className="flex items-center gap-3">
                          <span className="px-2 py-1 bg-gray-800 text-gray-400 text-xs rounded">{comp.position}</span>
                          <div className="flex items-center gap-2">
                            <span className={`w-2 h-2 rounded-full ${statusStyle.dot}`}></span>
                            <span className={`text-xs ${statusStyle.text}`}>{statusStyle.label}</span>
                          </div>
                        </div>
                      </div>
                    </a>
                  );
                })}
              </div>
              <p className="text-xs text-gray-500 mt-4">
                <strong>G2 Dominance:</strong> KnowBe4 has been #1 in Security Awareness Training for 22+ consecutive quarters (6+ years).
              </p>
            </div>
          </section>

          {/* Market Dynamics Section */}
          <section id="motion" className="scroll-mt-8">
            <h2 className="text-2xl font-bold mb-6 flex items-center gap-2">
              <span>📈</span> Market Dynamics
            </h2>

            {/* Assessment */}
            <div className="mb-8 p-4 bg-blue-900/20 rounded-lg border border-blue-800/50">
              <div className="flex items-center gap-2 mb-2">
                <span className="text-lg">📊</span>
                <h3 className="font-semibold text-blue-400">Market Assessment</h3>
              </div>
              <p className="text-gray-300">
                <strong>Position:</strong> Late Slope of Enlightenment → Early Plateau of Productivity.<br />
                <strong>Direction:</strong> Strong Consolidation (PE-backed platform roll-ups).<br />
                <strong>Signal:</strong> Gartner's shift from Magic Quadrant to Market Guide indicates market maturation and commoditization of core capabilities.
              </p>
            </div>

            {/* Hype Cycle */}
            <div className="mb-8">
              <h3 className="text-lg font-semibold mb-4">Hype Cycle Positioning (2025)</h3>
              <div className="space-y-2">
                {hypePositions.map((item, idx) => (
                  <div key={idx} className="flex items-center justify-between p-3 bg-gray-900/50 rounded-lg border border-gray-800">
                    <div className="flex items-center gap-3">
                      <span className={`w-2 h-2 rounded-full ${
                        item.status === 'hot' ? 'bg-red-400' :
                        item.status === 'rising' ? 'bg-green-400' :
                        item.status === 'emerging' ? 'bg-purple-400' :
                        item.status === 'declining' ? 'bg-orange-400' :
                        'bg-gray-400'
                      }`}></span>
                      <span className="text-white">{item.tech}</span>
                      <span className="text-gray-500">—</span>
                      <span className="text-gray-400 text-sm italic">{item.note}</span>
                    </div>
                    <span className="text-sm text-gray-400">{item.position}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Major Trends */}
            <div className="mb-8">
              <h3 className="text-lg font-semibold mb-4">5 Major Trends for 2025-2026</h3>
              <div className="grid grid-cols-1 gap-4">
                {trends.map((trend, idx) => (
                  <div key={idx} className="p-4 bg-gray-900/50 rounded-lg border border-gray-800">
                    <h4 className="font-semibold text-white">{trend.name}</h4>
                    <p className="text-sm text-gray-400 mt-1">{trend.description}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* M&A Activity */}
            <div className="mb-8">
              <h3 className="text-lg font-semibold mb-4">M&A Activity (PE-Driven Consolidation)</h3>
              <div className="overflow-x-auto">
                <table className="w-full text-sm">
                  <thead>
                    <tr className="border-b border-gray-800">
                      <th className="text-left py-3 px-4 text-gray-400 font-medium">Date</th>
                      <th className="text-left py-3 px-4 text-gray-400 font-medium">Acquirer</th>
                      <th className="text-left py-3 px-4 text-gray-400 font-medium">Target</th>
                      <th className="text-left py-3 px-4 text-gray-400 font-medium">Value</th>
                      <th className="text-left py-3 px-4 text-gray-400 font-medium">Strategic Signal</th>
                    </tr>
                  </thead>
                  <tbody>
                    {maActivity.map((row, idx) => (
                      <tr key={idx} className="border-b border-gray-800/50 hover:bg-gray-900/50">
                        <td className="py-3 px-4 text-gray-400">{row.date}</td>
                        <td className="py-3 px-4 text-white">{row.acquirer}</td>
                        <td className="py-3 px-4 text-blue-400">{row.target}</td>
                        <td className="py-3 px-4 text-green-400">{row.value}</td>
                        <td className="py-3 px-4 text-gray-300">{row.signal}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
              <p className="text-xs text-gray-500 mt-3">
                <strong>Pattern:</strong> Top 3 PE firms (Vista, Permira, Thoma Bravo) control the top 3 vendors, funding aggressive acquisition strategies to build comprehensive HRM platforms.
              </p>
            </div>

            {/* What's Being Replaced */}
            <div className="mb-8">
              <h3 className="text-lg font-semibold mb-4">What's Being Replaced</h3>
              <div className="grid grid-cols-2 gap-4">
                <div className="p-4 bg-red-900/20 rounded-lg border border-red-800/50">
                  <h4 className="font-medium text-red-400 mb-2">❌ Being Replaced</h4>
                  <ul className="space-y-2 text-sm text-gray-400">
                    <li>• Compliance checkbox training (annual)</li>
                    <li>• Generic "one-size-fits-all" content</li>
                    <li>• Phishing simulation-only tools</li>
                    <li>• Completion rate as success metric</li>
                    <li>• Point solution SAT vendors</li>
                    <li>• Static phishing templates</li>
                  </ul>
                </div>
                <div className="p-4 bg-green-900/20 rounded-lg border border-green-800/50">
                  <h4 className="font-medium text-green-400 mb-2">✓ Replaced By</h4>
                  <ul className="space-y-2 text-sm text-gray-400">
                    <li>• Continuous, behavior-based programs</li>
                    <li>• AI-personalized learning paths</li>
                    <li>• Full HRM platforms (multi-channel)</li>
                    <li>• Behavioral outcomes (report rates)</li>
                    <li>• Integrated SAT + email security</li>
                    <li>• AI-generated, OSINT-powered simulations</li>
                  </ul>
                </div>
              </div>
            </div>
          </section>

          {/* Stakeholders Section */}
          <section id="stakeholders" className="scroll-mt-8">
            <h2 className="text-2xl font-bold mb-6 flex items-center gap-2">
              <span>👥</span> Stakeholders
            </h2>

            {/* CISO JTBD */}
            <div className="mb-8">
              <h3 className="text-lg font-semibold mb-4">CISO / Security Leadership</h3>
              <p className="text-gray-400 text-sm mb-4 italic">
                "Help me prove that training actually reduces risk—not just check compliance boxes—so I can justify budget to the CFO."
              </p>
              <div className="overflow-x-auto">
                <table className="w-full text-sm">
                  <thead>
                    <tr className="border-b border-gray-800">
                      <th className="text-left py-3 px-4 text-gray-400 font-medium">Job Statement</th>
                      <th className="text-left py-3 px-4 text-gray-400 font-medium">Success Metric / Feature</th>
                    </tr>
                  </thead>
                  <tbody>
                    {cisoJobs.map((row, idx) => (
                      <tr key={idx} className="border-b border-gray-800/50">
                        <td className="py-3 px-4 text-white">{row.job}</td>
                        <td className="py-3 px-4 text-gray-400">{row.metric}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>

            {/* Security Awareness Manager JTBD */}
            <div className="mb-8">
              <h3 className="text-lg font-semibold mb-4">Security Awareness Manager / Program Lead</h3>
              <p className="text-gray-400 text-sm mb-4 italic">
                "Help me run effective programs with minimal administrative burden while keeping content fresh."
              </p>
              <div className="overflow-x-auto">
                <table className="w-full text-sm">
                  <thead>
                    <tr className="border-b border-gray-800">
                      <th className="text-left py-3 px-4 text-gray-400 font-medium">Job Statement</th>
                      <th className="text-left py-3 px-4 text-gray-400 font-medium">Success Metric</th>
                    </tr>
                  </thead>
                  <tbody>
                    {secAwarenessManagerJobs.map((row, idx) => (
                      <tr key={idx} className="border-b border-gray-800/50">
                        <td className="py-3 px-4 text-white">{row.job}</td>
                        <td className="py-3 px-4 text-gray-400">{row.metric}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>

            {/* SOC Analyst JTBD */}
            <div className="mb-8">
              <h3 className="text-lg font-semibold mb-4">SOC Analyst</h3>
              <p className="text-gray-400 text-sm mb-4 italic">
                "Help me manage user-reported phishing without overwhelming my queue—and connect real threats to training."
              </p>
              <div className="overflow-x-auto">
                <table className="w-full text-sm">
                  <thead>
                    <tr className="border-b border-gray-800">
                      <th className="text-left py-3 px-4 text-gray-400 font-medium">Job Statement</th>
                      <th className="text-left py-3 px-4 text-gray-400 font-medium">Success Metric</th>
                    </tr>
                  </thead>
                  <tbody>
                    {socAnalystJobs.map((row, idx) => (
                      <tr key={idx} className="border-b border-gray-800/50">
                        <td className="py-3 px-4 text-white">{row.job}</td>
                        <td className="py-3 px-4 text-gray-400">{row.metric}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>

            {/* End User JTBD */}
            <div className="mb-8">
              <h3 className="text-lg font-semibold mb-4">End User (Employee)</h3>
              <p className="text-gray-400 text-sm mb-4 italic">
                "Help me complete required training quickly without feeling tricked or punished."
              </p>
              <div className="overflow-x-auto">
                <table className="w-full text-sm">
                  <thead>
                    <tr className="border-b border-gray-800">
                      <th className="text-left py-3 px-4 text-gray-400 font-medium">Job Statement</th>
                      <th className="text-left py-3 px-4 text-gray-400 font-medium">Success Metric</th>
                    </tr>
                  </thead>
                  <tbody>
                    {endUserJobs.map((row, idx) => (
                      <tr key={idx} className="border-b border-gray-800/50">
                        <td className="py-3 px-4 text-white">{row.job}</td>
                        <td className="py-3 px-4 text-gray-400">{row.metric}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>

            {/* G2 Review Themes */}
            <div className="mb-8">
              <h3 className="text-lg font-semibold mb-4">G2 User Feedback Themes (KnowBe4: 2,470+ reviews)</h3>
              <div className="grid grid-cols-2 gap-4">
                <div className="p-4 bg-green-900/20 rounded-lg border border-green-800/50">
                  <h4 className="font-medium text-green-400 mb-3">✓ What Users Love</h4>
                  <ul className="space-y-2 text-sm text-gray-400">
                    {g2ReviewThemes.filter(t => t.sentiment === 'positive').map((theme, idx) => (
                      <li key={idx}>• {theme.theme} ({theme.frequency})</li>
                    ))}
                  </ul>
                </div>
                <div className="p-4 bg-red-900/20 rounded-lg border border-red-800/50">
                  <h4 className="font-medium text-red-400 mb-3">⚠ What Users Want Improved</h4>
                  <ul className="space-y-2 text-sm text-gray-400">
                    {g2ReviewThemes.filter(t => t.sentiment === 'negative').map((theme, idx) => (
                      <li key={idx}>• {theme.theme} ({theme.frequency})</li>
                    ))}
                  </ul>
                </div>
              </div>
              <p className="text-xs text-gray-500 mt-3">
                <strong>Product opportunity:</strong> More personalization, fresher content, simpler customization, better Google Workspace integration.
              </p>
            </div>
          </section>

          {/* Economics Section */}
          <section id="economics" className="scroll-mt-8">
            <h2 className="text-2xl font-bold mb-6 flex items-center gap-2">
              <span>💰</span> Economics & ROI
            </h2>

            {/* ROI Metrics */}
            <div className="mb-8">
              <h3 className="text-lg font-semibold mb-4">The Business Case</h3>
              <div className="grid grid-cols-4 gap-4">
                {roiMetrics.map((item, idx) => (
                  <div key={idx} className="p-4 bg-gray-900/50 rounded-lg border border-gray-800 text-center">
                    <div className="text-2xl font-bold text-green-400">{item.value}</div>
                    <div className="text-sm text-gray-400 mt-1">{item.metric}</div>
                  </div>
                ))}
              </div>
            </div>

            {/* Phishing Susceptibility Metric */}
            <div className="mb-8 p-5 bg-gradient-to-r from-green-900/20 to-blue-900/20 rounded-lg border border-green-800/50">
              <h3 className="font-semibold text-green-400 mb-3">📊 The Universal ROI Metric: Phish-Prone Percentage (PPP)</h3>
              <div className="grid grid-cols-3 gap-4 text-center">
                <div>
                  <div className="text-3xl font-bold text-red-400">33.1%</div>
                  <div className="text-sm text-gray-400">Baseline PPP (before training)</div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-yellow-400">→ 40%↓</div>
                  <div className="text-sm text-gray-400">Reduction in 90 days</div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-green-400">→ 86%↓</div>
                  <div className="text-sm text-gray-400">Reduction in 1 year</div>
                </div>
              </div>
              <p className="text-sm text-gray-400 mt-4">
                Source: KnowBe4 Phishing by Industry Benchmarking Report 2025
              </p>
            </div>

            {/* Pricing Tiers */}
            <div className="mb-8">
              <h3 className="text-lg font-semibold mb-4">Pricing Tiers (Directional)</h3>
              <div className="overflow-x-auto">
                <table className="w-full text-sm">
                  <thead>
                    <tr className="border-b border-gray-800">
                      <th className="text-left py-3 px-4 text-gray-400 font-medium">Tier</th>
                      <th className="text-left py-3 px-4 text-gray-400 font-medium">Monthly Range</th>
                      <th className="text-left py-3 px-4 text-gray-400 font-medium">Annual Range</th>
                      <th className="text-left py-3 px-4 text-gray-400 font-medium">Representative Vendors</th>
                    </tr>
                  </thead>
                  <tbody>
                    {pricingTiers.map((row, idx) => (
                      <tr key={idx} className="border-b border-gray-800/50 hover:bg-gray-900/50">
                        <td className="py-3 px-4 text-white">{row.tier}</td>
                        <td className="py-3 px-4 text-gray-300">{row.range}</td>
                        <td className="py-3 px-4 text-green-400">{row.annual}</td>
                        <td className="py-3 px-4 text-gray-400">{row.vendors}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
              <p className="text-xs text-gray-500 mt-2">
                Benchmark: $12-36/user/year for platform access. Microsoft E5 includes Attack Simulation Training, creating price pressure.
              </p>
            </div>

            {/* TCO Components */}
            <div className="mb-8">
              <h3 className="text-lg font-semibold mb-4">Total Cost of Ownership (TCO) Considerations</h3>
              <div className="overflow-x-auto">
                <table className="w-full text-sm">
                  <thead>
                    <tr className="border-b border-gray-800">
                      <th className="text-left py-3 px-4 text-gray-400 font-medium">Component</th>
                      <th className="text-left py-3 px-4 text-gray-400 font-medium">Typical Range</th>
                      <th className="text-left py-3 px-4 text-gray-400 font-medium">Notes</th>
                    </tr>
                  </thead>
                  <tbody>
                    {tcoComponents.map((row, idx) => (
                      <tr key={idx} className="border-b border-gray-800/50 hover:bg-gray-900/50">
                        <td className="py-3 px-4 text-white">{row.component}</td>
                        <td className="py-3 px-4 text-gray-300">{row.range}</td>
                        <td className="py-3 px-4 text-gray-400">{row.notes}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
              <div className="mt-4 p-4 bg-yellow-900/20 rounded-lg border border-yellow-800/50">
                <p className="text-sm text-yellow-400">
                  <strong>⚠️ Key TCO Insight:</strong> Employee time in training often exceeds platform costs. A 1,000-user org at $24/user/year ($24K platform) 
                  with 3 hours of training per user at $50/hour = <strong>$150K in productivity costs</strong>. This makes training efficiency critical.
                </p>
              </div>
            </div>

            {/* ROI Calculation */}
            <div className="mb-8">
              <h3 className="text-lg font-semibold mb-4">Sample Business Case (1,000 Employees)</h3>
              <div className="grid grid-cols-2 gap-6">
                <div className="p-4 bg-gray-900/50 rounded-lg border border-gray-800">
                  <h4 className="font-medium text-red-400 mb-3">Investment</h4>
                  <div className="space-y-2 text-sm">
                    <div className="flex justify-between">
                      <span className="text-gray-400">Platform cost (1K × $24)</span>
                      <span className="text-white">$24,000</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-400">Admin time (0.5 FTE × $80K)</span>
                      <span className="text-white">$40,000</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-400">Employee time (1K × 3hr × $50)</span>
                      <span className="text-white">$150,000</span>
                    </div>
                    <div className="flex justify-between border-t border-gray-700 pt-2 mt-2">
                      <span className="text-white font-medium">Total Investment</span>
                      <span className="text-red-400 font-bold">$214,000</span>
                    </div>
                  </div>
                </div>
                <div className="p-4 bg-gray-900/50 rounded-lg border border-gray-800">
                  <h4 className="font-medium text-green-400 mb-3">Value / Risk Reduction</h4>
                  <div className="space-y-2 text-sm">
                    <div className="flex justify-between">
                      <span className="text-gray-400">Risk reduction (10% of $8.8M insider cost)</span>
                      <span className="text-white">$880,000</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-400">Incident reduction (30% × 10 × $50K)</span>
                      <span className="text-white">$150,000</span>
                    </div>
                    <div className="flex justify-between border-t border-gray-700 pt-2 mt-2">
                      <span className="text-white font-medium">Total Benefits</span>
                      <span className="text-green-400 font-bold">$1,030,000</span>
                    </div>
                    <div className="flex justify-between mt-2 pt-2 border-t border-green-700">
                      <span className="text-green-400 font-medium">Net ROI</span>
                      <span className="text-green-400 font-bold">381%</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* PM Strategy Section */}
          <section id="product" className="scroll-mt-8">
            <h2 className="text-2xl font-bold mb-6 flex items-center gap-2">
              <span>🎯</span> PM Strategic Elements
            </h2>

            {/* Table Stakes */}
            <div className="mb-8">
              <h3 className="text-lg font-semibold mb-4">Table Stakes (2025 MVP — Required for RFP)</h3>
              <div className="grid grid-cols-2 gap-2">
                {tableStakes.map((feature, idx) => (
                  <div key={idx} className="flex items-center gap-2 text-sm text-gray-400 p-2 bg-gray-900/30 rounded">
                    <span className="text-green-400">✓</span>
                    {feature}
                  </div>
                ))}
              </div>
              <p className="text-xs text-gray-500 mt-3">
                Missing any of these = immediate RFP disqualification. These are "license to compete" features, not differentiators.
              </p>
            </div>

            {/* Tier 1 Differentiators */}
            <div className="mb-8">
              <h3 className="text-lg font-semibold mb-4">Tier 1 Differentiators (Primary Competitive Battlegrounds)</h3>
              <div className="space-y-3">
                {tier1Differentiators.map((diff, idx) => (
                  <div key={idx} className="p-4 bg-gray-900/50 rounded-lg border border-blue-800/50">
                    <h4 className="font-semibold text-blue-400">{diff.name}</h4>
                    <p className="text-sm text-gray-400 mt-1">{diff.description}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Tier 2 Differentiators */}
            <div className="mb-8">
              <h3 className="text-lg font-semibold mb-4">Tier 2 Differentiators (Emerging Competitive Advantages)</h3>
              <div className="space-y-3">
                {tier2Differentiators.map((diff, idx) => (
                  <div key={idx} className="p-4 bg-gray-900/50 rounded-lg border border-purple-800/50">
                    <h4 className="font-semibold text-purple-400">{diff.name}</h4>
                    <p className="text-sm text-gray-400 mt-1">{diff.description}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* If I'm a PM Here Box */}
            <div className="p-6 bg-gradient-to-r from-blue-900/30 to-purple-900/30 rounded-xl border border-blue-800/50">
              <h3 className="text-lg font-semibold text-blue-400 mb-4 flex items-center gap-2">
                <span>💡</span> If I am a PM Here, I Need to Know...
              </h3>
              <ol className="space-y-3 text-sm">
                <li className="flex items-start gap-3">
                  <span className="font-bold text-blue-400">1.</span>
                  <span className="text-gray-300">
                    <strong>The 8/80 rule drives product strategy.</strong> 8% of employees cause 80% of incidents. Your product must identify and remediate high-risk users efficiently, not spray training at everyone equally.
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="font-bold text-blue-400">2.</span>
                  <span className="text-gray-300">
                    <strong>Microsoft is the floor, not the ceiling.</strong> If customers have E5/Defender for Office 365 P2, they already have Attack Simulation Training. Your value prop is what Microsoft doesn't do: multi-vector, behavior change, HRM integration.
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="font-bold text-blue-400">3.</span>
                  <span className="text-gray-300">
                    <strong>Compliance is mandatory, not differentiating.</strong> NIS2 and DORA made SAT legally required for many organizations. This drives volume but commoditizes baseline. Differentiate on outcomes.
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="font-bold text-blue-400">4.</span>
                  <span className="text-gray-300">
                    <strong>Report rate &gt click rate as success metric.</strong> 60% report rate vs 7% for quarterly training. Modern buyers care about behavior change, not just failure reduction.
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="font-bold text-blue-400">5.</span>
                  <span className="text-gray-300">
                    <strong>The market is consolidating into HRM platforms.</strong> Standalone SAT is being absorbed into unified Human Risk Management (Mimecast, KnowBe4+Egress, Proofpoint+Tessian). Plan to become a platform or integrate into one.
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="font-bold text-blue-400">6.</span>
                  <span className="text-gray-300">
                    <strong>AI is table stakes, not differentiator.</strong> Every vendor claims AI. True differentiation is in OSINT-driven personalization, adaptive learning paths, and agentic automation.
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="font-bold text-blue-400">7.</span>
                  <span className="text-gray-300">
                    <strong>Vishing is the next phishing.</strong> Vishing attacks increased 449% in 2025. Email-only simulation is becoming legacy. Multi-vector coverage wins RFPs.
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="font-bold text-blue-400">8.</span>
                  <span className="text-gray-300">
                    <strong>Closed-loop is the integration play.</strong> Products that connect real threat telemetry (blocked attacks, reported phishing) to personalized training create defensible ROI. This requires email security integration.
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="font-bold text-blue-400">9.</span>
                  <span className="text-gray-300">
                    <strong>Gamification drives engagement.</strong> Users describe Hoxhunt as "fun and game-like." Punitive "gotcha" approaches backfire. Reward and support &gt punishment.
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="font-bold text-blue-400">10.</span>
                  <span className="text-gray-300">
                    <strong>Budget is $12-36/user/year.</strong> Price competition is intensifying, but premium pricing holds for AI, coaching, and HRM bundles.
                  </span>
                </li>
              </ol>
            </div>

            {/* Strategic Positioning Matrix */}
            <div className="mt-8">
              <h3 className="text-lg font-semibold mb-4">Strategic Positioning Matrix: Where Do You Compete?</h3>
              <div className="grid grid-cols-2 gap-4">
                <div className="p-4 bg-gray-900/50 rounded-lg border border-gray-800">
                  <h4 className="font-medium text-blue-400 mb-2">Content Leader</h4>
                  <p className="text-sm text-gray-400">Massive library, frequent updates, multi-format</p>
                  <p className="text-xs text-gray-500 mt-2">Who wins: KnowBe4 (1,300+ modules)</p>
                </div>
                <div className="p-4 bg-gray-900/50 rounded-lg border border-gray-800">
                  <h4 className="font-medium text-purple-400 mb-2">AI/Innovation Leader</h4>
                  <p className="text-sm text-gray-400">Deepfakes, OSINT, adaptive learning, multi-vector</p>
                  <p className="text-xs text-gray-500 mt-2">Who wins: Adaptive Security, Hoxhunt, Brightside</p>
                </div>
                <div className="p-4 bg-gray-900/50 rounded-lg border border-gray-800">
                  <h4 className="font-medium text-green-400 mb-2">Platform/HRM Leader</h4>
                  <p className="text-sm text-gray-400">Unified SAT + email security + identity + DLP</p>
                  <p className="text-xs text-gray-500 mt-2">Who wins: Mimecast, KnowBe4 HRM+</p>
                </div>
                <div className="p-4 bg-gray-900/50 rounded-lg border border-gray-800">
                  <h4 className="font-medium text-orange-400 mb-2">Engagement Leader</h4>
                  <p className="text-sm text-gray-400">Gamification, UX, employee experience</p>
                  <p className="text-xs text-gray-500 mt-2">Who wins: Hoxhunt, SoSafe</p>
                </div>
                <div className="p-4 bg-gray-900/50 rounded-lg border border-gray-800">
                  <h4 className="font-medium text-yellow-400 mb-2">SMB/MSP Value</h4>
                  <p className="text-sm text-gray-400">Easy deployment, affordable, managed services</p>
                  <p className="text-xs text-gray-500 mt-2">Who wins: Usecure, Huntress, Phished</p>
                </div>
                <div className="p-4 bg-gray-900/50 rounded-lg border border-gray-800">
                  <h4 className="font-medium text-red-400 mb-2">Enterprise Compliance</h4>
                  <p className="text-sm text-gray-400">Deep reporting, regulatory mapping, audit-ready</p>
                  <p className="text-xs text-gray-500 mt-2">Who wins: Proofpoint, KnowBe4</p>
                </div>
              </div>
            </div>
          </section>

          {/* Strategic Theses Section */}
          <section id="theses" className="scroll-mt-8">
            <h2 className="text-2xl font-bold mb-6 flex items-center gap-2">
              <span>🔮</span> Strategic Theses
            </h2>
            
            <p className="text-gray-400 mb-8">
              Three structural shifts reshaping this market. Not incremental changes—fundamental rewirings of where value is created and captured.
            </p>

            <div className="space-y-6">
              {theses.map((thesis) => (
                <div
                  key={thesis.id}
                  className={`p-6 bg-gray-900/50 rounded-xl border border-gray-800 border-l-4 ${getThesisAccent(thesis.color)}`}
                >
                  <div className="flex items-start justify-between mb-4">
                    <h3 className="text-xl font-bold text-white">{thesis.title}</h3>
                    <div className="flex items-center gap-3">
                      <span className={`px-2 py-1 text-xs rounded border ${getConfidenceColor(thesis.confidence)}`}>
                        {thesis.confidence}
                      </span>
                      <span className="text-sm text-gray-500">{thesis.timeframe}</span>
                    </div>
                  </div>
                  
                  <p className="text-gray-300 mb-4">{thesis.claim}</p>
                  
                  <div className="mb-4">
                    <h4 className="text-xs font-medium text-gray-500 uppercase tracking-wider mb-2">EVIDENCE</h4>
                    <ul className="space-y-1">
                      {thesis.evidence.map((item, idx) => (
                        <li key={idx} className="text-sm text-gray-400 flex items-start gap-2">
                          <span className="text-gray-600">•</span>
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                  
                  <div className="p-3 bg-gray-800/50 rounded-lg">
                    <span className="text-sm text-gray-300">
                      <strong className="text-white">Implication:</strong> {thesis.implication}
                    </span>
                  </div>
                </div>
              ))}
            </div>

            {/* Synthesis */}
            <div className="mt-8 p-6 bg-gray-900/50 rounded-xl border border-gray-800">
              <h3 className="text-lg font-semibold mb-4">How These Connect</h3>
              <div className="flex items-center justify-center gap-4 text-sm">
                <div className="text-center">
                  <div className="text-green-400 font-medium">8/80 rule</div>
                  <div className="text-gray-500">identifies risk</div>
                </div>
                <span className="text-gray-600">→</span>
                <div className="text-center">
                  <div className="text-purple-400 font-medium">HRM platforms</div>
                  <div className="text-gray-500">enable targeting</div>
                </div>
                <span className="text-gray-600">→</span>
                <div className="text-center">
                  <div className="text-orange-400 font-medium">Report rates</div>
                  <div className="text-gray-500">prove behavior change</div>
                </div>
              </div>
            </div>

            {/* Recommendations */}
            <div className="mt-8 grid grid-cols-2 gap-6">
              {/* For Buyers */}
              <div className="p-5 bg-gray-900/50 rounded-lg border border-gray-800">
                <div className="flex items-center gap-2 mb-4">
                  <span className="w-8 h-8 rounded-full bg-blue-900/50 flex items-center justify-center text-blue-400 font-bold">B</span>
                  <h3 className="font-semibold text-white">For Enterprise Buyers</h3>
                </div>
                <ul className="space-y-2 text-sm text-gray-400">
                  <li className="flex items-start gap-2">
                    <span className="text-blue-400">•</span>
                    <span>Evaluate vendors on risk scoring and high-risk user targeting</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-blue-400">•</span>
                    <span>Prioritize report rate metrics over click rate metrics</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-blue-400">•</span>
                    <span>Consider HRM platform strategy, not standalone SAT</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-blue-400">•</span>
                    <span>Require multi-vector simulation (vishing, smishing, deepfake)</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-blue-400">•</span>
                    <span>If you have M365 E5, evaluate incremental value carefully</span>
                  </li>
                </ul>
              </div>

              {/* For Vendors */}
              <div className="p-5 bg-gray-900/50 rounded-lg border border-gray-800">
                <div className="flex items-center gap-2 mb-4">
                  <span className="w-8 h-8 rounded-full bg-purple-900/50 flex items-center justify-center text-purple-400 font-bold">V</span>
                  <h3 className="font-semibold text-white">For Vendors / Product Leaders</h3>
                </div>
                <ul className="space-y-2 text-sm text-gray-400">
                  <li className="flex items-start gap-2">
                    <span className="text-purple-400">•</span>
                    <span>Build or acquire email security capability—HRM convergence is inevitable</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-purple-400">•</span>
                    <span>Invest in multi-vector simulation—email-only is legacy</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-purple-400">•</span>
                    <span>Gamification and positive reinforcement beat "gotcha" approaches</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-purple-400">•</span>
                    <span>AI is table stakes—differentiate on OSINT and behavioral data</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-purple-400">•</span>
                    <span>Pure-play SAT faces acquisition or extinction—plan accordingly</span>
                  </li>
                </ul>
              </div>
            </div>
          </section>

          {/* Resources */}
          <section className="mt-12 p-6 bg-gray-900/30 rounded-xl border border-gray-800">
            <h3 className="text-lg font-semibold mb-4 flex items-center gap-2">
              <span>📎</span> Resources
            </h3>
            <div className="grid grid-cols-2 gap-4">
              <a href="#" className="p-4 bg-gray-800/50 rounded-lg hover:bg-gray-800 transition-all">
                <div className="flex items-center gap-3">
                  <span className="text-2xl">📄</span>
                  <div>
                    <div className="font-medium text-white">Full SAT Market Guide</div>
                    <div className="text-sm text-gray-500">Complete SRP analysis (PDF)</div>
                  </div>
                </div>
              </a>
              <a href="#" className="p-4 bg-gray-800/50 rounded-lg hover:bg-gray-800 transition-all">
                <div className="flex items-center gap-3">
                  <span className="text-2xl">📊</span>
                  <div>
                    <div className="font-medium text-white">Vendor Comparison Matrix</div>
                    <div className="text-sm text-gray-500">Side-by-side feature analysis</div>
                  </div>
                </div>
              </a>
            </div>
          </section>
        </main>
      </div>

      {/* Footer */}
      <footer className="border-t border-gray-800 px-6 py-8 mt-12">
        <div className="max-w-7xl mx-auto text-center text-sm text-gray-500">
          <p>Analysis by Andy Simko • CISSP • GPEN • CISA • GSNA • HCSFP • PMC-Level III</p>
          <p className="mt-2">15+ years in cybersecurity • Methodology: Systematic Research Process (SRP)</p>
        </div>
      </footer>
    </div>
  );
};

export default SATPage;
