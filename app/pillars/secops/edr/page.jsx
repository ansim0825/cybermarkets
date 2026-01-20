"use client";
import React, { useState } from 'react';
import { Logo } from '@/components/Logo';

const EDRPage = () => {
  const [activeSection, setActiveSection] = useState('overview');

  // SecOps & Analytics sub-segments
  const subSegments = [
    { id: 'siem', name: 'SIEM', active: false, href: '/pillars/secops/siem' },
    { id: 'soar', name: 'SOAR', active: false, href: '/pillars/secops/soar' },
    { id: 'xdr', name: 'XDR', active: false, href: '/pillars/secops/xdr' },
    { id: 'edr', name: 'EDR', active: true, href: '/pillars/secops/edr' },
    { id: 'ndr', name: 'NDR', active: false, href: '/pillars/secops/ndr' },
    { id: 'mdr', name: 'MDR', active: false, href: '/pillars/secops/mdr' },
    { id: 'aidr', name: 'AIDR', active: false, href: '/pillars/secops/aidr' },
  ];

  const srpSections = [
    { id: 'overview', name: 'Overview', icon: '📋' },
    { id: 'structure', name: 'Peak State (2018-2020)', icon: '🏗️' },
    { id: 'motion', name: 'The Five Forces', icon: '⚡' },
    { id: 'stakeholders', name: 'Survivors & Acquired', icon: '🎯' },
    { id: 'economics', name: 'Absorption Economics', icon: '💀' },
    { id: 'product', name: 'The Escape Playbook', icon: '🚀' },
    { id: 'theses', name: 'Transferable Lessons', icon: '🔮' },
  ];

  // Related pillars
  const relatedPillars = [
    { name: 'Endpoint & Workload', primary: true },
    { name: 'Network & Edge', primary: false },
  ];

  const keyInsights = [
    { stat: '2013-2022', label: 'Category lifespan (~9 years)' },
    { stat: '$2.1B', label: 'Carbon Black acquisition (2019)' },
    { stat: '4 years', label: 'Lag between M&A wave & analyst retirement' },
    { stat: '2', label: 'Survivors out of 7 major players' },
  ];

  // Peak state market data
  const peakMarketData = [
    { metric: 'Market Size (2018)', value: '~$1.14B' },
    { metric: 'Market Size (2019)', value: '~$1.5-2B' },
    { metric: 'CAGR', value: '22-25%' },
    { metric: 'Cloud vs On-Prem', value: '55% / 45%' },
    { metric: 'Enterprise vs SMB', value: '80% / 20%' },
  ];

  const coreCapabilities = [
    { capability: 'Continuous Telemetry Collection', description: 'Process execution, file changes, registry mods, network connections, user behavior' },
    { capability: 'Behavioral Analytics', description: 'IOAs (Indicators of Attack) vs. signature-based IOCs' },
    { capability: 'Threat Hunting', description: 'Proactive search using custom queries and IOC sweeps' },
    { capability: 'Forensic Investigation', description: 'Historical telemetry, timelines, attack reconstruction' },
    { capability: 'Incident Response', description: 'Endpoint isolation, process termination, file quarantine, rollback' },
    { capability: 'MITRE ATT&CK Alignment', description: 'Standardized TTP mapping for detection classification' },
  ];

  const subSegmentsAtPeak = [
    { name: 'Pure EDR', description: 'Detection/investigation only', examples: 'Early Carbon Black' },
    { name: 'EDR + NGAV Hybrid', description: 'Prevention + detection', examples: 'CrowdStrike, SentinelOne' },
    { name: 'Cloud-Native EDR', description: 'SaaS-delivered', examples: 'CrowdStrike Falcon' },
    { name: 'On-Premises EDR', description: 'Air-gapped environments', examples: 'Carbon Black Response' },
    { name: 'Managed EDR', description: 'EDR + threat hunting services', examples: 'CrowdStrike OverWatch' },
  ];

  // The Five Forces of Absorption
  const fiveForces = [
    {
      id: 1,
      name: 'Agent Footprint Trap',
      severity: 'Critical',
      description: 'EDR required the same deployment footprint as EPP. Zero marginal distribution cost for EPP vendors who already had agent presence.',
      evidence: '40% of EDR deployments used EDR and EPP from the same vendor. Standalone EDR vendors had to convince buyers to deploy a second agent—a losing proposition.',
      lesson: 'If your deployment model overlaps with an adjacent platform, you\'re structurally vulnerable.',
    },
    {
      id: 2,
      name: 'Microsoft E5 "Free with Bundle" Effect',
      severity: 'Critical',
      description: 'Microsoft Defender for Endpoint included in E5 licensing. Created "double-dipping" problem for CISOs.',
      evidence: 'Organizations paying for CrowdStrike while holding unused Defender P2 licenses via E5. TCO argument shifted from "Is it better?" to "Can it justify cost on top of what I already have?"',
      lesson: 'When a platform vendor can include your category "free," standalone pricing becomes existential.',
    },
    {
      id: 3,
      name: 'Detection Logic Commoditization',
      severity: 'High',
      description: 'By 2023, 70%+ of EDR platforms had ML-based detection. The gap between "adequate" and "best" narrowed.',
      evidence: 'Defender: 90-95% detection. CrowdStrike: 95-98%. A 3-5% gap became indefensible for budget-constrained buyers.',
      lesson: 'When your core value proposition becomes table stakes, premium pricing collapses.',
    },
    {
      id: 4,
      name: 'XDR Category Hijack',
      severity: 'High',
      description: 'EDR didn\'t disappear—it became a feature of XDR. This stripped standalone vendors of their positioning.',
      evidence: '"Move toward unified XDR platforms is largely a response to customer fatigue from managing too many fragmented tools." — CSO Online',
      lesson: 'When your category can be repositioned as a "feature" of a larger category, standalone viability ends.',
    },
    {
      id: 5,
      name: 'CISO Budget Consolidation',
      severity: 'Medium',
      description: '~70% of CISOs now use platforms over best-of-breed. Budget conversation changed fundamentally.',
      evidence: 'Question shifted from "Which EDR?" to "Does my platform include EDR?" Budget constraints forced complexity reduction.',
      lesson: 'Macro budget trends can eliminate entire categories regardless of technical merit.',
    },
  ];

  // M&A Timeline
  const maTimeline = [
    { year: '2018', acquirer: 'BlackBerry', target: 'Cylance', value: '$1.4B', logic: 'IoT/embedded security play', outcome: 'Languishing in portfolio' },
    { year: '2019', acquirer: 'VMware', target: 'Carbon Black', value: '$2.1B', logic: 'Virtualization + endpoint convergence', outcome: 'Divested by Broadcom (2024)' },
    { year: '2019', acquirer: 'Broadcom', target: 'Symantec (enterprise)', value: '$10.7B', logic: 'Portfolio consolidation', outcome: 'Cost synergies focus' },
    { year: '2019', acquirer: 'Elastic', target: 'Endgame', value: '$234M', logic: 'SIEM + EDR convergence', outcome: 'Integrated into Elastic Security' },
    { year: '2023', acquirer: 'Broadcom', target: 'VMware', value: '$69B', logic: 'Carbon Black changes hands again', outcome: 'Failed integration' },
    { year: '2024', acquirer: 'Broadcom', target: 'Carbon Black (divest)', value: '—', logic: 'Divestiture announced', outcome: 'Merged with Symantec' },
  ];

  // Analyst Recognition Timeline
  const analystTimeline = [
    { year: '2017', org: 'Gartner', action: 'Predicted EPP+EDR merge "by 2019"', significance: 'Early warning signal' },
    { year: '2018', org: 'Gartner', action: 'Redefined EPP to include EDR capabilities', significance: 'Category boundary dissolved' },
    { year: '—', org: 'Gartner', action: 'Never had standalone EDR MQ; absorbed into EPP', significance: 'No independent analyst coverage' },
    { year: 'Q1 2020', org: 'Forrester', action: 'Published Wave: EDR', significance: 'Standalone coverage continued' },
    { year: 'Q2 2022', org: 'Forrester', action: 'Published Wave: EDR (final)', significance: 'Last standalone evaluation' },
    { year: 'Q4 2023', org: 'Forrester', action: 'Retired EDR Wave, merged into XDR', significance: 'Official category death' },
  ];

  // Vendor Fates
  const vendorFates = [
    { 
      name: 'CrowdStrike', 
      peakPosition: 'Leader',
      fate: 'SURVIVED',
      outcome: 'Became platform leader',
      fateColor: 'green',
      keyMoves: ['Cloud-native Day 1', 'Never called "EDR vendor"', 'Preempt acquisition (identity)', 'Humio acquisition (data)', 'IPO 2019'],
    },
    { 
      name: 'SentinelOne', 
      peakPosition: 'Visionary',
      fate: 'SURVIVED',
      outcome: 'Became platform leader',
      fateColor: 'green',
      keyMoves: ['Cloud-native Day 1', '"Autonomous XDR" positioning', 'Scalyr acquisition (data)', 'Attivo acquisition (identity)', 'IPO 2021'],
    },
    { 
      name: 'Carbon Black', 
      peakPosition: 'Leader/Visionary',
      fate: 'ACQUIRED',
      outcome: 'VMware (2019) → Broadcom → Divested (2024)',
      fateColor: 'red',
      keyMoves: ['Hybrid/legacy architecture', 'Stayed "EDR company"', 'No identity acquisition', 'No data platform acquisition', 'Acquired before escape'],
    },
    { 
      name: 'Cylance', 
      peakPosition: 'Visionary',
      fate: 'ACQUIRED',
      outcome: 'BlackBerry (2018) → Languishing',
      fateColor: 'red',
      keyMoves: ['On-prem architectural roots', '"AI AV" positioning', 'No adjacent expansion', 'Limited cloud workload', 'Acquired early'],
    },
    { 
      name: 'Endgame', 
      peakPosition: 'Strong Performer',
      fate: 'ACQUIRED',
      outcome: 'Elastic (2019) → Integrated',
      fateColor: 'amber',
      keyMoves: ['Strong detection capability', 'Acquired by SIEM vendor', 'Became feature of Elastic Security'],
    },
    { 
      name: 'Cybereason', 
      peakPosition: 'Strong Performer',
      fate: 'STRUGGLING',
      outcome: 'Remained independent, seeking position',
      fateColor: 'amber',
      keyMoves: ['Delayed platform expansion', 'Funding challenges', 'Position unclear'],
    },
    { 
      name: 'Tanium', 
      peakPosition: 'Niche',
      fate: 'PIVOTED',
      outcome: 'Straddling security/IT operations',
      fateColor: 'amber',
      keyMoves: ['Pivoted to IT operations', 'Avoided pure EDR positioning'],
    },
  ];

  // Survivor Strategy Matrix
  const survivorMatrix = [
    { move: 'Cloud-native architecture', crowdstrike: '✅ Day 1', sentinelone: '✅ Day 1', carbonblack: '❌ Hybrid/legacy', cylance: '❌ On-prem roots' },
    { move: 'Platform positioning', crowdstrike: '✅ "Falcon Platform"', sentinelone: '✅ "Singularity Platform"', carbonblack: '❌ "EDR vendor"', cylance: '❌ "AI AV"' },
    { move: 'Identity acquisition', crowdstrike: '✅ Preempt (2020)', sentinelone: '✅ Attivo (2022)', carbonblack: '❌ None', cylance: '❌ None' },
    { move: 'Data platform acquisition', crowdstrike: '✅ Humio (2021)', sentinelone: '✅ Scalyr (2021)', carbonblack: '❌ None', cylance: '❌ None' },
    { move: 'Cloud workload expansion', crowdstrike: '✅ 2019', sentinelone: '✅ 2021', carbonblack: '⚠️ Via VMware', cylance: '❌ None' },
    { move: 'Managed services', crowdstrike: '✅ OverWatch, Complete', sentinelone: '✅ Vigilance', carbonblack: '❌ Partner-dependent', cylance: '❌ Limited' },
    { move: 'IPO/capital access', crowdstrike: '✅ 2019', sentinelone: '✅ 2021', carbonblack: '❌ Acquired 2019', cylance: '❌ Acquired 2018' },
  ];

  // TCO Evolution
  const tcoEvolution = [
    { era: '2015-2017', argument: '"Best-of-breed EDR catches threats EPP misses"', winner: 'Standalone EDR (Carbon Black, Cylance)' },
    { era: '2018-2019', argument: '"Single agent reduces complexity"', winner: 'Converged EPP+EDR (CrowdStrike, SentinelOne)' },
    { era: '2020-2022', argument: '"Why pay extra when E5 includes it?"', winner: 'Platform vendors (Microsoft, Palo Alto)' },
    { era: '2023+', argument: '"XDR gives correlated visibility"', winner: 'XDR platforms' },
  ];

  // Pricing Collapse
  const pricingData = [
    { tier: 'Mid-tier EDR', price: '$20-70/endpoint/year' },
    { tier: 'Enterprise EDR', price: '$100+/endpoint/year' },
    { tier: 'CrowdStrike Falcon Pro', price: '~$84/endpoint/year' },
    { tier: 'Microsoft 365 E5', price: '~$57/user/month (includes Defender P2 + 50 other features)' },
  ];

  // Vulnerability Checklist
  const highVulnerability = [
    { indicator: 'Shared deployment footprint with incumbent', signal: 'Same agent/infrastructure as larger category', edrExample: 'EDR agent = EPP agent' },
    { indicator: 'Detection logic commoditizing', signal: 'ML/AI making core detection table stakes', edrExample: 'Behavioral detection became commodity' },
    { indicator: 'Bundle economics exist', signal: 'Platform vendor can include "free"', edrExample: 'Microsoft E5 included Defender' },
    { indicator: 'Same buyer as incumbent', signal: 'Competing for identical budget line', edrExample: 'Endpoint security budget' },
    { indicator: 'Category positioned as "replacement"', signal: 'Marketed as better version of existing tool', edrExample: '"EDR replaces legacy AV"' },
    { indicator: 'No unique telemetry', signal: 'Data can be replicated by platform vendor', edrExample: 'OS vendors have endpoint telemetry' },
  ];

  const lowVulnerability = [
    { indicator: 'Unique deployment architecture', signal: 'Different infrastructure than incumbents', ndrExample: 'Agentless sensors vs. endpoint agents' },
    { indicator: 'Unique telemetry source', signal: 'Data others can\'t easily replicate', ndrExample: 'Encrypted traffic, east-west flow' },
    { indicator: 'No bundle economics', signal: 'No platform vendor including "free"', ndrExample: 'No "Defender for Networks" in E5' },
    { indicator: 'Adjacent buyer', signal: 'Different budget owner', ndrExample: 'Network security vs. endpoint security' },
    { indicator: 'Category positioned as "complement"', signal: 'Marketed as addition, not replacement', ndrExample: '"NDR complements EDR"' },
    { indicator: 'Technical moat', signal: 'Hard-to-replicate capability', ndrExample: 'Encrypted traffic analysis' },
  ];

  // EDR vs NDR Comparison
  const edrNdrComparison = [
    { factor: 'Deployment Model', edr: 'Agent on every endpoint', ndr: 'Agentless (sensors, TAPs, SPAN ports)', implication: 'EDR shared footprint with EPP; NDR has unique deployment' },
    { factor: 'Incumbent Overlap', edr: 'EPP vendors already had agent installed', ndr: 'No equivalent "network prevention platform"', implication: 'EDR faced zero-marginal-cost competition' },
    { factor: 'Bundling Economics', edr: 'Microsoft E5 included Defender for Endpoint "free"', ndr: 'No equivalent bundle includes NDR', implication: 'EDR faced devastating bundle pressure' },
    { factor: 'Detection Commoditization', edr: 'ML/behavioral detection became table stakes by 2020', ndr: 'Encrypted traffic analysis, OT/IoT coverage still differentiated', implication: 'EDR detection commoditized faster' },
    { factor: 'Platform Absorber', edr: 'Clear absorber: EPP → EDR → XDR', ndr: 'Absorber less clear: XDR includes but doesn\'t replace', implication: 'EDR had single destination; NDR feeds multiple platforms' },
    { factor: 'Telemetry Uniqueness', edr: 'Endpoint telemetry duplicated by OS vendors', ndr: 'Network telemetry (east-west, encrypted) uniquely valuable', implication: 'NDR provides telemetry others can\'t replicate' },
    { factor: 'Buyer', edr: 'Same buyer as EPP (endpoint security team)', ndr: 'Different buyer (network security, SOC, OT)', implication: 'EDR competed in same budget; NDR has adjacent budget' },
  ];

  // Markets Showing EDR Signals
  const marketsAtRisk = [
    { market: 'SOAR', risk: 'Complete', timeline: 'Done', signal: 'Fully absorbed into SIEM/XDR by 2024 (Demisto→Palo Alto, Phantom→Splunk, Siemplify→Google)' },
    { market: 'ITDR', risk: 'Medium-High', timeline: '3-4 years', signal: 'Microsoft Entra ID includes some ITDR; CrowdStrike/SentinelOne already absorbed it' },
    { market: 'Email Security', risk: 'High', timeline: 'Now', signal: 'Microsoft Defender for O365 in E5 creates EDR-like bundle pressure' },
    { market: 'CNAPP', risk: 'Medium', timeline: '5-7 years', signal: 'Hyperscaler native tools create pressure but multi-cloud creates opportunity' },
    { market: 'NDR', risk: 'Lower', timeline: '5+ years', signal: 'Structural factors (agentless, unique telemetry) provide protection—but signals emerging' },
  ];

  // Warning Signs
  const warningSigns = [
    { sign: 'Analysts retire your standalone Magic Quadrant', significance: 'Category no longer warrants independent evaluation', edrExample: 'EDR MQ was retired and merged into EPP' },
    { sign: 'Platform vendor launches "good enough" version', significance: 'Bundled alternative eliminates premium positioning', edrExample: 'Microsoft Defender achieving parity' },
    { sign: 'Customers ask about consolidation', significance: 'Budget pressure manifesting in deals', edrExample: '"Can we get this from our XDR vendor?"' },
    { sign: 'M&A wave begins', significance: 'Standalone vendors seeking exits', edrExample: 'Competitors acquired at declining multiples' },
    { sign: 'Pricing pressure from bundles', significance: 'Economic model under attack', edrExample: 'Customers citing "free" alternatives' },
  ];

  // Escape Strategies
  const escapeStrategies = [
    { strategy: 'Race to Platform', when: 'You have capital and market position', example: 'CrowdStrike: EDR → Cloud → Identity → SIEM', requirements: 'IPO/growth capital, M&A capability, cloud-native architecture' },
    { strategy: 'Find Unique Data', when: 'You have specialized telemetry', example: 'NDR: East-west visibility, encrypted traffic', requirements: 'Technical moat, different deployment model' },
    { strategy: 'Vertical Specialization', when: 'You can own a niche', example: 'OT security, healthcare, government', requirements: 'Deep domain expertise, compliance knowledge' },
    { strategy: 'Managed Service Wrapper', when: 'You can add human expertise', example: 'MDR providers wrapping EDR', requirements: 'SOC talent, 24/7 operations, customer trust' },
    { strategy: 'Exit (M&A)', when: 'Market window closing', example: 'Cylance, Carbon Black, Endgame', requirements: 'Timing, strategic buyer interest, differentiation remaining' },
  ];

  // Theses (Transferable Lessons)
  const theses = [
    {
      id: 1,
      title: 'Shared Footprint = Shared Fate',
      timeframe: 'Transferable',
      confidence: 'High',
      color: 'red',
      claim: 'If your deployment model overlaps with an adjacent, larger platform—you\'re structurally vulnerable. The adjacent platform can add your functionality at near-zero marginal cost.',
      evidence: ['EDR agent = EPP agent (same footprint)', 'Zero incremental distribution cost for EPP vendors', 'Standalone EDR required convincing buyers to deploy second agent', 'Gartner predicted merge by 2019—they were right'],
      implication: 'Evaluate your deployment model vs. adjacent platforms. If overlap exists, your survival window is 3-5 years from first M&A signals.',
    },
    {
      id: 2,
      title: 'Bundle Economics Are Brutal',
      timeframe: 'Transferable',
      confidence: 'High',
      color: 'purple',
      claim: 'When a platform vendor can include your category "free" in a bundle buyers already own, standalone pricing becomes existential. The TCO argument shifts from "Is it better?" to "Can it justify cost on top of what I already have?"',
      evidence: ['Microsoft E5 included Defender for Endpoint "free"', 'CISOs paying for CrowdStrike while holding unused Defender licenses', '3-5% detection gap became indefensible', 'Premium pricing collapsed when "adequate" was free'],
      implication: 'Monitor platform vendor bundle roadmaps. If your category appears on their "included features" list, you have 18-24 months to respond.',
    },
    {
      id: 3,
      title: 'The Survivors Didn\'t Defend—They Escaped',
      timeframe: 'Transferable',
      confidence: 'High',
      color: 'green',
      claim: 'CrowdStrike and SentinelOne didn\'t win by being the best EDR. They won by becoming platforms before the EDR category commoditized. They flipped from "EDR vendor getting eaten by EPP" to "next-gen endpoint platform displacing legacy EPP."',
      evidence: ['Both made identity acquisitions within months of each other', 'Both made data/log platform acquisitions within months of each other', 'Both IPO\'d and used capital for M&A', 'Both never called themselves "EDR companies"—always "platforms"'],
      implication: 'If absorption signals appear, your strategic options are: (1) Race to platform, (2) Find unique data/deployment, (3) Specialize vertically, (4) Exit via M&A. Defending your current category is not a winning strategy.',
    },
  ];

  // Key Dates
  const keyDates = [
    { date: 'July 2013', event: 'Anton Chuvakin coins "ETDR" at Gartner' },
    { date: '2015', event: 'Gartner shortens to "EDR"' },
    { date: '2017', event: 'Gartner MQ predicts EPP+EDR merge by 2019' },
    { date: 'Feb 2018', event: 'BlackBerry announces Cylance acquisition ($1.4B)' },
    { date: 'Aug 2019', event: 'VMware announces Carbon Black acquisition ($2.1B)' },
    { date: 'Jun 2019', event: 'Elastic announces Endgame acquisition ($234M)' },
    { date: 'Q1 2020', event: 'Forrester Wave: EDR (standalone)' },
    { date: 'Q2 2022', event: 'Forrester Wave: EDR (final standalone Wave)' },
    { date: 'Nov 2023', event: 'Broadcom completes VMware acquisition' },
    { date: 'Q4 2023', event: 'Forrester retires EDR Wave, merges into XDR' },
    { date: 'Dec 2023', event: 'Broadcom announces intent to divest Carbon Black' },
  ];

  const getConfidenceColor = (confidence) => {
    switch (confidence) {
      case 'High': return 'bg-green-900/50 text-green-400 border-green-700';
      case 'Medium-High': return 'bg-blue-900/50 text-blue-400 border-blue-700';
      case 'Medium': return 'bg-yellow-900/50 text-yellow-400 border-yellow-700';
      default: return 'bg-gray-800 text-gray-400 border-gray-700';
    }
  };

  const getThesisAccent = (color) => {
    switch (color) {
      case 'green': return 'border-l-green-500';
      case 'purple': return 'border-l-purple-500';
      case 'red': return 'border-l-red-500';
      case 'orange': return 'border-l-orange-500';
      default: return 'border-l-blue-500';
    }
  };

  const getFateColor = (fateColor) => {
    switch (fateColor) {
      case 'green': return 'bg-green-900/50 text-green-400 border-green-700';
      case 'red': return 'bg-red-900/50 text-red-400 border-red-700';
      case 'amber': return 'bg-amber-900/50 text-amber-400 border-amber-700';
      default: return 'bg-gray-800 text-gray-400 border-gray-700';
    }
  };

  const getSeverityColor = (severity) => {
    switch (severity) {
      case 'Critical': return 'bg-red-900/50 text-red-400';
      case 'High': return 'bg-orange-900/50 text-orange-400';
      case 'Medium': return 'bg-yellow-900/50 text-yellow-400';
      default: return 'bg-gray-800 text-gray-400';
    }
  };

  const getRiskColor = (risk) => {
    switch (risk) {
      case 'Complete': return 'bg-red-900/50 text-red-400';
      case 'High': return 'bg-orange-900/50 text-orange-400';
      case 'Medium-High': return 'bg-amber-900/50 text-amber-400';
      case 'Medium': return 'bg-yellow-900/50 text-yellow-400';
      case 'Lower': return 'bg-green-900/50 text-green-400';
      default: return 'bg-gray-800 text-gray-400';
    }
  };

  const scrollToSection = (sectionId) => {
    setActiveSection(sectionId);
    document.getElementById(sectionId)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-gray-950 text-white">

      {/* Navigation */}
      <nav className="border-b border-gray-800 bg-gray-950/80 backdrop-blur-sm sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center gap-2 text-gray-400">
              <a href="/" className="hover:text-white transition-colors">
                <Logo />
              </a>
              /
              <a href="/pillars/secops" className="hover:text-white transition-colors">SecOps & Analytics</a>
            </div>
            <div className="flex items-center gap-6 text-sm">
              <a href="/pillars" className="text-gray-400 hover:text-white transition-colors">Pillars</a>
              <a href="/theses" className="text-gray-400 hover:text-white transition-colors">Theses</a>
              <a href="/about" className="text-gray-400 hover:text-white transition-colors">About</a>
            </div>
          </div>
        </div>
      </nav>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        
        {/* Sub-segment Navigation */}
        <div className="mb-8">
          <div className="flex flex-wrap gap-2 mb-4">
            {subSegments.map((seg) => (
              <a 
                key={seg.id}
                href={seg.href}
                className={`px-3 py-1.5 rounded-full text-sm transition-all flex items-center gap-1.5 ${
                  seg.active 
                    ? 'bg-red-900/50 text-red-400 border border-red-700' 
                    : 'bg-gray-800 text-gray-400 hover:bg-gray-700 border border-transparent'
                }`}
              >
                {seg.active && <span className="text-red-400">●</span>}
                {seg.name}
              </a>
            ))}
          </div>
          
          {/* Related pillars */}
          <div className="flex items-center gap-2 text-xs text-gray-500">
            <span>Also touches:</span>
            {relatedPillars.map((pillar, idx) => (
              <span key={idx} className={`px-2 py-0.5 rounded ${pillar.primary ? 'bg-gray-800 text-gray-300' : 'bg-gray-900 text-gray-500'}`}>
                {pillar.name}
              </span>
            ))}
          </div>
        </div>

        
        {/* Header */}
        <div className="mb-8">
          <div className="flex items-center gap-3 mb-2">
            <h1 className="text-3xl font-bold">Endpoint Detection & Response (EDR)</h1>
            <span className="px-2 py-1 bg-red-900/50 text-red-400 text-xs font-medium rounded border border-red-700">
              CATEGORY ABSORBED
            </span>
          </div>
          <p className="text-gray-400 text-lg max-w-3xl">
            A forensic case study of market absorption: how a $2B category was consumed by platforms in under 5 years—and the transferable lessons for PMs navigating consolidating markets
          </p>
          
          <div className="flex items-center gap-4 mt-4 text-sm text-gray-500">
            <span>Category lifespan: 2013-2022</span>
            <span>•</span>
            <span>Methodology: Absorption Forensics</span>
            <span>•</span>
            <span className="flex items-center gap-1"><span className="text-red-400">●</span> Historical case study</span>
          </div>
        </div>

        {/* Key Stats Bar */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
          {keyInsights.map((insight, idx) => (
            <div key={idx} className="bg-gradient-to-br from-gray-900 to-gray-950 border border-gray-800 rounded-lg p-4 text-center">
              <div className="text-2xl font-bold text-red-400">{insight.stat}</div>
              <div className="text-xs text-gray-500 mt-1">{insight.label}</div>
            </div>
          ))}
        </div>

        {/* The Historical Case Study Callout */}
        <div className="bg-gradient-to-r from-red-950/50 to-gray-900 border border-red-900/50 rounded-xl p-6 mb-8">
          <div className="flex items-start gap-4">
            <span className="text-3xl">📚</span>
            <div>
              <h3 className="text-white font-semibold mb-2">Historical Case Study: The Absorption Playbook</h3>
              <p className="text-gray-400 text-sm">
                EDR is not a market to buy into—it's a <span className="text-red-400 font-medium">lesson to learn from</span>. 
                This page documents how a standalone category was absorbed into platforms, 
                who survived (and how), and provides a <span className="text-red-400 font-medium">transferable framework</span> for 
                identifying absorption signals in other markets. If you're a PM in a consolidating market, 
                this is your playbook.
              </p>
            </div>
          </div>
        </div>

        {/* Main Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          
          {/* Left Sidebar - SRP Navigation */}
          <div className="lg:col-span-1">
            <div className="sticky top-24 space-y-6">
              <div className="bg-gray-900 border border-gray-800 rounded-xl p-4">
                <h3 className="text-sm font-semibold text-gray-400 mb-3">Forensic Analysis</h3>
                <div className="space-y-1">
                  {srpSections.map((section) => (
                    <button
                      key={section.id}
                      onClick={() => scrollToSection(section.id)}
                      className={`w-full text-left px-3 py-2 rounded-lg text-sm flex items-center gap-2 transition-all ${
                        activeSection === section.id
                          ? 'bg-red-900/50 text-red-400 border border-red-800'
                          : 'text-gray-400 hover:bg-gray-800 hover:text-white'
                      }`}
                    >
                      {section.icon}
                      {section.name}
                    </button>
                  ))}
                </div>
              </div>

              {/* Absorption Timeline Visual */}
              <div className="bg-gray-900 border border-gray-800 rounded-xl p-4">
                <h3 className="text-sm font-semibold text-gray-400 mb-3">Absorption Timeline</h3>
                <div className="space-y-3">
                  <div className="flex items-center gap-2">
                    <div className="w-3 h-3 rounded-full bg-green-500"></div>
                    <div className="text-xs">
                      <div className="text-white">2013-2017</div>
                      <div className="text-gray-500">Category emergence</div>
                    </div>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                    <div className="text-xs">
                      <div className="text-white">2018-2019</div>
                      <div className="text-gray-500">Peak + M&A wave</div>
                    </div>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-3 h-3 rounded-full bg-orange-500"></div>
                    <div className="text-xs">
                      <div className="text-white">2020-2022</div>
                      <div className="text-gray-500">Commoditization</div>
                    </div>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-3 h-3 rounded-full bg-red-500"></div>
                    <div className="text-xs">
                      <div className="text-white">2023+</div>
                      <div className="text-gray-500">Category retired</div>
                    </div>
                  </div>
                </div>
                <p className="text-xs text-gray-600 mt-3">~5 years from peak to absorption</p>
              </div>
            </div>
          </div>

          {/* Main Content Area */}
          <div className="lg:col-span-3 space-y-8">
            
            {/* Overview Section */}
            <section id="overview" className="bg-gray-900 border border-gray-800 rounded-xl p-6">
              <h2 className="text-xl font-semibold text-white mb-4 flex items-center gap-2">
                📋 Overview: Why This Page Exists
              </h2>
              <div className="space-y-4 text-gray-300">
                <p>
                  EDR (Endpoint Detection & Response) represents the <span className="text-red-400 font-medium">clearest example</span> of 
                  a security market category that was fully absorbed into adjacent platforms. The market existed as an 
                  independent category for roughly <span className="text-white font-medium">5 years (2015-2020)</span> before 
                  being subsumed into EPP/XDR.
                </p>
                <p>
                  This page is different from other market pages on wonwithdata.com. Rather than analyzing an active market, 
                  we're conducting <span className="text-red-400 font-medium">forensic analysis</span> of what EDR was, 
                  why it died, who survived, and—most importantly—what it predicts for other markets showing similar signals.
                </p>
                <div className="bg-gray-800/50 rounded-lg p-4 mt-4">
                  <h4 className="text-white font-medium mb-2">What You'll Learn</h4>
                  <ul className="space-y-2 text-sm">
                    <li className="flex items-start gap-2">
                      <span className="text-red-400">1.</span>
                      <span><span className="text-white">The Five Forces</span> that drove EDR absorption (transferable to other markets)</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-red-400">2.</span>
                      <span><span className="text-white">Survivor vs. Acquired analysis</span>—what separated CrowdStrike/SentinelOne from Carbon Black/Cylance</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-red-400">3.</span>
                      <span><span className="text-white">The Vulnerability Checklist</span>—how to assess any market's absorption risk</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-red-400">4.</span>
                      <span><span className="text-white">The Escape Playbook</span>—strategic options when you see absorption signals</span>
                    </li>
                  </ul>
                </div>
              </div>
            </section>

            {/* Peak State Section */}
            <section id="structure" className="bg-gray-900 border border-gray-800 rounded-xl p-6">
              <h2 className="text-xl font-semibold text-white mb-4 flex items-center gap-2">
                🏗️ Peak State Architecture (2018-2020)
              </h2>
              
              {/* Origin Story */}
              <div className="bg-gray-800/50 rounded-lg p-4 mb-6">
                <h3 className="text-white font-medium mb-2">Origins</h3>
                <div className="grid grid-cols-2 gap-4 text-sm">
                  <div>
                    <span className="text-gray-500">Coined:</span>
                    <span className="text-white ml-2">July 2013 by Anton Chuvakin (Gartner)</span>
                  </div>
                  <div>
                    <span className="text-gray-500">Original term:</span>
                    <span className="text-white ml-2">Endpoint Threat Detection & Response (ETDR)</span>
                  </div>
                  <div className="col-span-2">
                    <span className="text-gray-500">Catalyst:</span>
                    <span className="text-white ml-2">2013 Target breach exposed that traditional AV/EPP was insufficient for post-compromise visibility</span>
                  </div>
                </div>
              </div>

              {/* Value Proposition */}
              <div className="bg-red-950/30 border border-red-900/50 rounded-lg p-4 mb-6">
                <h3 className="text-red-400 font-medium mb-2">The Core Value Proposition</h3>
                <p className="text-gray-300 text-sm">
                  <span className="text-white font-medium">"Post-breach visibility"</span> — EDR didn't just block malware; 
                  it logged the entire attack sequence before, during, and after compromise. This enabled investigation 
                  that traditional prevention tools couldn't provide.
                </p>
              </div>

              {/* Core Capabilities */}
              <div className="mb-6">
                <h3 className="text-md font-medium text-gray-300 mb-3">Core Capabilities at Peak</h3>
                <div className="overflow-x-auto">
                  <table className="w-full text-sm">
                    <thead>
                      <tr className="text-left text-gray-500 border-b border-gray-800">
                        <th className="pb-2 pr-4">Capability</th>
                        <th className="pb-2">Function</th>
                      </tr>
                    </thead>
                    <tbody>
                      {coreCapabilities.map((row, idx) => (
                        <tr key={idx} className="border-b border-gray-800/50">
                          <td className="py-2 pr-4 text-white">{row.capability}</td>
                          <td className="py-2 text-gray-400">{row.description}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>

              {/* Market Data at Peak */}
              <div className="mb-6">
                <h3 className="text-md font-medium text-gray-300 mb-3">Market Structure at Peak</h3>
                <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
                  {peakMarketData.map((item, idx) => (
                    <div key={idx} className="bg-gray-800/50 rounded-lg p-3">
                      <div className="text-gray-500 text-xs">{item.metric}</div>
                      <div className="text-white font-medium">{item.value}</div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Sub-segments at Peak */}
              <div className="mb-6">
                <h3 className="text-md font-medium text-gray-300 mb-3">Sub-Segments at Independence</h3>
                <div className="overflow-x-auto">
                  <table className="w-full text-sm">
                    <thead>
                      <tr className="text-left text-gray-500 border-b border-gray-800">
                        <th className="pb-2 pr-4">Sub-Segment</th>
                        <th className="pb-2 pr-4">Description</th>
                        <th className="pb-2">Examples</th>
                      </tr>
                    </thead>
                    <tbody>
                      {subSegmentsAtPeak.map((row, idx) => (
                        <tr key={idx} className="border-b border-gray-800/50">
                          <td className="py-2 pr-4 text-white">{row.name}</td>
                          <td className="py-2 pr-4 text-gray-400">{row.description}</td>
                          <td className="py-2 text-gray-500">{row.examples}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>

              {/* Seeds of Absorption */}
              <div className="bg-amber-950/30 border border-amber-900/50 rounded-lg p-4">
                <h3 className="text-amber-400 font-medium mb-2">⚠️ The Seeds of Absorption Were Already Visible</h3>
                <p className="text-gray-300 text-sm mb-3">
                  Even at peak, Gartner's 2017 MQ predicted EPP+EDR would merge by 2019. The structural vulnerabilities were apparent:
                </p>
                <ul className="space-y-1 text-sm text-gray-400">
                  <li>• <span className="text-white">Same Agent Footprint:</span> EPP and EDR both deployed endpoint agents—customers resisted running two</li>
                  <li>• <span className="text-white">Data Gravity:</span> Both collected endpoint telemetry—why store it twice?</li>
                  <li>• <span className="text-white">Vendor Economics:</span> EPP vendors had massive installed bases; EDR vendors had to displace them</li>
                  <li>• <span className="text-white">XDR Narrative:</span> By 2018-2019, "extend beyond endpoint" story was gaining traction</li>
                </ul>
              </div>
            </section>

            {/* The Five Forces Section */}
            <section id="motion" className="bg-gray-900 border border-gray-800 rounded-xl p-6">
              <h2 className="text-xl font-semibold text-white mb-4 flex items-center gap-2">
                ⚡ The Five Forces of Absorption
              </h2>
              <p className="text-gray-400 text-sm mb-6">
                These are the structural economic forces that drove EDR's absorption. They're transferable—look for these patterns in other markets.
              </p>

              <div className="space-y-4">
                {fiveForces.map((force) => (
                  <div key={force.id} className="bg-gray-800/50 border border-gray-700 rounded-lg p-4">
                    <div className="flex items-center justify-between mb-2">
                      <h3 className="text-white font-medium flex items-center gap-2">
                        <span className="text-red-400">{force.id}.</span>
                        {force.name}
                      </h3>
                      <span className={`px-2 py-0.5 rounded text-xs ${getSeverityColor(force.severity)}`}>
                        {force.severity}
                      </span>
                    </div>
                    <p className="text-gray-300 text-sm mb-3">{force.description}</p>
                    <div className="bg-gray-900/50 rounded p-3 mb-3">
                      <span className="text-gray-500 text-xs">Evidence:</span>
                      <p className="text-gray-400 text-sm mt-1">{force.evidence}</p>
                    </div>
                    <div className="flex items-start gap-2">
                      <span className="text-red-400 text-sm">→</span>
                      <p className="text-red-400 text-sm font-medium">{force.lesson}</p>
                    </div>
                  </div>
                ))}
              </div>

              {/* M&A Timeline */}
              <div className="mt-8">
                <h3 className="text-md font-medium text-gray-300 mb-3">The M&A Wave (2018-2024)</h3>
                <div className="overflow-x-auto">
                  <table className="w-full text-sm">
                    <thead>
                      <tr className="text-left text-gray-500 border-b border-gray-800">
                        <th className="pb-2 pr-4">Year</th>
                        <th className="pb-2 pr-4">Acquirer</th>
                        <th className="pb-2 pr-4">Target</th>
                        <th className="pb-2 pr-4">Value</th>
                        <th className="pb-2 pr-4">Logic</th>
                        <th className="pb-2">Outcome</th>
                      </tr>
                    </thead>
                    <tbody>
                      {maTimeline.map((row, idx) => (
                        <tr key={idx} className="border-b border-gray-800/50">
                          <td className="py-2 pr-4 text-gray-400">{row.year}</td>
                          <td className="py-2 pr-4 text-white">{row.acquirer}</td>
                          <td className="py-2 pr-4 text-white">{row.target}</td>
                          <td className="py-2 pr-4 text-red-400">{row.value}</td>
                          <td className="py-2 pr-4 text-gray-400">{row.logic}</td>
                          <td className="py-2 text-gray-500 text-xs">{row.outcome}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
                <p className="text-gray-500 text-xs mt-2">
                  Carbon Black's trajectory—standalone leader → VMware acquisition → Broadcom divesting—is the absorption story in miniature.
                </p>
              </div>

              {/* Analyst Timeline */}
              <div className="mt-8">
                <h3 className="text-md font-medium text-gray-300 mb-3">Analyst Recognition Timeline</h3>
                <div className="overflow-x-auto">
                  <table className="w-full text-sm">
                    <thead>
                      <tr className="text-left text-gray-500 border-b border-gray-800">
                        <th className="pb-2 pr-4">Year</th>
                        <th className="pb-2 pr-4">Organization</th>
                        <th className="pb-2 pr-4">Action</th>
                        <th className="pb-2">Significance</th>
                      </tr>
                    </thead>
                    <tbody>
                      {analystTimeline.map((row, idx) => (
                        <tr key={idx} className="border-b border-gray-800/50">
                          <td className="py-2 pr-4 text-gray-400">{row.year}</td>
                          <td className="py-2 pr-4 text-white">{row.org}</td>
                          <td className="py-2 pr-4 text-gray-300">{row.action}</td>
                          <td className="py-2 text-gray-500 text-xs">{row.significance}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
                <div className="bg-gray-800/50 rounded-lg p-3 mt-3">
                  <span className="text-amber-400 font-medium">The Lag:</span>
                  <span className="text-gray-400 text-sm ml-2">
                    M&A wave: 2018-2019. Analyst retirement: Q4 2023. <span className="text-white">~4 year lag.</span> 
                    Analyst coverage persists well beyond practical market independence.
                  </span>
                </div>
              </div>
            </section>

            {/* Survivors & Acquired Section */}
            <section id="stakeholders" className="bg-gray-900 border border-gray-800 rounded-xl p-6">
              <h2 className="text-xl font-semibold text-white mb-4 flex items-center gap-2">
                🎯 Survivors & Acquired: The Tale of Two Trajectories
              </h2>
              <p className="text-gray-400 text-sm mb-6">
                Of 7 major standalone EDR vendors at peak, only 2 survived as independent companies. The difference wasn't luck—it was deliberate product and strategic positioning.
              </p>

              {/* Vendor Fate Cards */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
                {vendorFates.map((vendor, idx) => (
                  <div key={idx} className={`border rounded-lg p-4 ${
                    vendor.fateColor === 'green' ? 'bg-green-950/30 border-green-900/50' :
                    vendor.fateColor === 'red' ? 'bg-red-950/30 border-red-900/50' :
                    'bg-amber-950/30 border-amber-900/50'
                  }`}>
                    <div className="flex items-center justify-between mb-2">
                      <h3 className="text-white font-medium">{vendor.name}</h3>
                      <span className={`px-2 py-0.5 rounded text-xs font-medium ${getFateColor(vendor.fateColor)}`}>
                        {vendor.fate}
                      </span>
                    </div>
                    <p className="text-gray-500 text-xs mb-2">Peak position: {vendor.peakPosition}</p>
                    <p className={`text-sm mb-3 ${
                      vendor.fateColor === 'green' ? 'text-green-400' :
                      vendor.fateColor === 'red' ? 'text-red-400' :
                      'text-amber-400'
                    }`}>{vendor.outcome}</p>
                    <div className="space-y-1">
                      {vendor.keyMoves.map((move, moveIdx) => (
                        <div key={moveIdx} className="flex items-center gap-2 text-xs text-gray-400">
                          <span className={
                            vendor.fateColor === 'green' ? 'text-green-500' :
                            vendor.fateColor === 'red' ? 'text-red-500' :
                            'text-amber-500'
                          }>•</span>
                          {move}
                        </div>
                      ))}
                    </div>
                  </div>
                ))}
              </div>

              {/* Survivor Strategy Matrix */}
              <div className="mb-6">
                <h3 className="text-md font-medium text-gray-300 mb-3">Survivor Strategy Matrix</h3>
                <div className="overflow-x-auto">
                  <table className="w-full text-sm">
                    <thead>
                      <tr className="text-left text-gray-500 border-b border-gray-800">
                        <th className="pb-2 pr-4">Strategic Move</th>
                        <th className="pb-2 pr-2 text-green-400">CrowdStrike</th>
                        <th className="pb-2 pr-2 text-green-400">SentinelOne</th>
                        <th className="pb-2 pr-2 text-red-400">Carbon Black</th>
                        <th className="pb-2 text-red-400">Cylance</th>
                      </tr>
                    </thead>
                    <tbody>
                      {survivorMatrix.map((row, idx) => (
                        <tr key={idx} className="border-b border-gray-800/50">
                          <td className="py-2 pr-4 text-white">{row.move}</td>
                          <td className="py-2 pr-2 text-gray-300 text-xs">{row.crowdstrike}</td>
                          <td className="py-2 pr-2 text-gray-300 text-xs">{row.sentinelone}</td>
                          <td className="py-2 pr-2 text-gray-400 text-xs">{row.carbonblack}</td>
                          <td className="py-2 text-gray-400 text-xs">{row.cylance}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>

              {/* The Critical Insight */}
              <div className="bg-green-950/30 border border-green-900/50 rounded-lg p-4">
                <h3 className="text-green-400 font-medium mb-2">💡 The Critical Insight</h3>
                <p className="text-gray-300 text-sm">
                  <span className="text-white font-medium">The survivors didn't escape absorption—they became the absorbers.</span> 
                  They flipped the script from "EDR vendor getting eaten by EPP" to "next-gen endpoint platform displacing legacy EPP." 
                  CrowdStrike and SentinelOne won by becoming platforms before the EDR category commoditized.
                </p>
              </div>
            </section>

            {/* Absorption Economics Section */}
            <section id="economics" className="bg-gray-900 border border-gray-800 rounded-xl p-6">
              <h2 className="text-xl font-semibold text-white mb-4 flex items-center gap-2">
                💀 Absorption Economics: The Brutal Math
              </h2>

              {/* TCO Evolution */}
              <div className="mb-6">
                <h3 className="text-md font-medium text-gray-300 mb-3">TCO Argument Evolution</h3>
                <div className="overflow-x-auto">
                  <table className="w-full text-sm">
                    <thead>
                      <tr className="text-left text-gray-500 border-b border-gray-800">
                        <th className="pb-2 pr-4">Era</th>
                        <th className="pb-2 pr-4">Buyer Argument</th>
                        <th className="pb-2">Winner</th>
                      </tr>
                    </thead>
                    <tbody>
                      {tcoEvolution.map((row, idx) => (
                        <tr key={idx} className="border-b border-gray-800/50">
                          <td className="py-2 pr-4 text-gray-400">{row.era}</td>
                          <td className="py-2 pr-4 text-white">"{row.argument}"</td>
                          <td className="py-2 text-gray-300">{row.winner}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>

              {/* Pricing Collapse */}
              <div className="mb-6">
                <h3 className="text-md font-medium text-gray-300 mb-3">Pricing Collapse</h3>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
                  {pricingData.map((item, idx) => (
                    <div key={idx} className="bg-gray-800/50 rounded-lg p-3">
                      <div className="text-gray-500 text-xs">{item.tier}</div>
                      <div className="text-white font-medium text-sm">{item.price}</div>
                    </div>
                  ))}
                </div>
                <div className="bg-red-950/30 border border-red-900/50 rounded-lg p-3 mt-3">
                  <p className="text-red-400 text-sm">
                    <span className="font-medium">The death blow:</span> When EDR is one of 50+ features in a bundle 
                    you're already buying, standalone pricing becomes existential.
                  </p>
                </div>
              </div>

              {/* Carbon Black Case Study */}
              <div className="bg-gray-800/50 rounded-lg p-4">
                <h3 className="text-white font-medium mb-2">📉 Case Study: Carbon Black's Post-Acquisition Fate</h3>
                <blockquote className="text-gray-400 text-sm italic border-l-2 border-red-500 pl-3 mb-3">
                  "A security company is still driven by engineering talent. After several rounds of layoffs, 
                  it should be clear to any buyer that they've cut the muscle of the company instead of merely fat. 
                  There is nothing wrong with Broadcom wanting to focus on its core competencies, but it has 
                  taken an asset and has driven it into the ground."
                  <span className="text-gray-500 not-italic"> — CSO Online</span>
                </blockquote>
                <p className="text-gray-300 text-sm">
                  Companies that got acquired became <span className="text-white">features of larger platforms</span> rather 
                  than platform owners. They lost: R&D velocity, go-to-market independence, talent, and customer confidence.
                </p>
              </div>
            </section>

            {/* The Escape Playbook Section */}
            <section id="product" className="bg-gray-900 border border-gray-800 rounded-xl p-6">
              <h2 className="text-xl font-semibold text-white mb-4 flex items-center gap-2">
                🚀 The Escape Playbook
              </h2>
              <p className="text-gray-400 text-sm mb-6">
                Transferable frameworks for PMs in markets showing absorption signals.
              </p>

              {/* Warning Signs */}
              <div className="mb-8">
                <h3 className="text-md font-medium text-gray-300 mb-3">⚠️ Warning Signs (You Have 18-24 Months)</h3>
                <div className="space-y-2">
                  {warningSigns.map((sign, idx) => (
                    <div key={idx} className="bg-gray-800/50 rounded-lg p-3 flex items-start gap-3">
                      <span className="text-amber-400 font-bold">{idx + 1}</span>
                      <div>
                        <p className="text-white text-sm">{sign.sign}</p>
                        <p className="text-gray-500 text-xs">{sign.significance}</p>
                        <p className="text-gray-400 text-xs mt-1">EDR example: {sign.edrExample}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Vulnerability Checklist */}
              <div className="mb-8">
                <h3 className="text-md font-medium text-gray-300 mb-3">🔍 The Absorption Vulnerability Checklist</h3>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {/* High Vulnerability */}
                  <div className="bg-red-950/20 border border-red-900/50 rounded-lg p-4">
                    <h4 className="text-red-400 font-medium mb-3">HIGH VULNERABILITY (EDR Pattern)</h4>
                    <div className="space-y-2">
                      {highVulnerability.map((item, idx) => (
                        <div key={idx} className="text-xs">
                          <div className="flex items-center gap-2">
                            <span className="text-red-400">☑</span>
                            <span className="text-white">{item.indicator}</span>
                          </div>
                          <p className="text-gray-500 ml-5">{item.signal}</p>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Low Vulnerability */}
                  <div className="bg-green-950/20 border border-green-900/50 rounded-lg p-4">
                    <h4 className="text-green-400 font-medium mb-3">LOW VULNERABILITY (NDR Pattern)</h4>
                    <div className="space-y-2">
                      {lowVulnerability.map((item, idx) => (
                        <div key={idx} className="text-xs">
                          <div className="flex items-center gap-2">
                            <span className="text-green-400">☑</span>
                            <span className="text-white">{item.indicator}</span>
                          </div>
                          <p className="text-gray-500 ml-5">{item.signal}</p>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>

              {/* EDR vs NDR Comparison */}
              <div className="mb-8">
                <h3 className="text-md font-medium text-gray-300 mb-3">EDR vs. NDR: Why Different Outcomes?</h3>
                <div className="overflow-x-auto">
                  <table className="w-full text-xs">
                    <thead>
                      <tr className="text-left text-gray-500 border-b border-gray-800">
                        <th className="pb-2 pr-4">Factor</th>
                        <th className="pb-2 pr-4 text-red-400">EDR</th>
                        <th className="pb-2 pr-4 text-green-400">NDR</th>
                        <th className="pb-2">Implication</th>
                      </tr>
                    </thead>
                    <tbody>
                      {edrNdrComparison.map((row, idx) => (
                        <tr key={idx} className="border-b border-gray-800/50">
                          <td className="py-2 pr-4 text-white">{row.factor}</td>
                          <td className="py-2 pr-4 text-gray-400">{row.edr}</td>
                          <td className="py-2 pr-4 text-gray-400">{row.ndr}</td>
                          <td className="py-2 text-gray-500">{row.implication}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
                <p className="text-gray-500 text-xs mt-2">
                  NDR's agentless model and network-specific visibility create structural barriers to absorption that EDR lacked.
                </p>
              </div>

              {/* Markets at Risk */}
              <div className="mb-8">
                <h3 className="text-md font-medium text-gray-300 mb-3">Markets Showing EDR-Like Signals</h3>
                <div className="overflow-x-auto">
                  <table className="w-full text-sm">
                    <thead>
                      <tr className="text-left text-gray-500 border-b border-gray-800">
                        <th className="pb-2 pr-4">Market</th>
                        <th className="pb-2 pr-4">Absorption Risk</th>
                        <th className="pb-2 pr-4">Timeline</th>
                        <th className="pb-2">Key Signal</th>
                      </tr>
                    </thead>
                    <tbody>
                      {marketsAtRisk.map((row, idx) => (
                        <tr key={idx} className="border-b border-gray-800/50">
                          <td className="py-2 pr-4 text-white">{row.market}</td>
                          <td className="py-2 pr-4">
                            <span className={`px-2 py-0.5 rounded text-xs ${getRiskColor(row.risk)}`}>
                              {row.risk}
                            </span>
                          </td>
                          <td className="py-2 pr-4 text-gray-400">{row.timeline}</td>
                          <td className="py-2 text-gray-500 text-xs">{row.signal}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>

              {/* Escape Strategies */}
              <div className="mb-6">
                <h3 className="text-md font-medium text-gray-300 mb-3">Strategic Response Options</h3>
                <div className="space-y-3">
                  {escapeStrategies.map((strategy, idx) => (
                    <div key={idx} className="bg-gray-800/50 rounded-lg p-4 border-l-4 border-blue-500">
                      <div className="flex items-center justify-between mb-1">
                        <h4 className="text-white font-medium">{strategy.strategy}</h4>
                        <span className="text-gray-500 text-xs">When: {strategy.when}</span>
                      </div>
                      <p className="text-gray-400 text-sm mb-2">Example: {strategy.example}</p>
                      <p className="text-gray-500 text-xs">Requirements: {strategy.requirements}</p>
                    </div>
                  ))}
                </div>
              </div>

              {/* If I'm a PM Here Box */}
              <div className="bg-gradient-to-r from-blue-950/50 to-gray-900 border border-blue-900/50 rounded-xl p-5">
                <h3 className="text-blue-400 font-semibold mb-4 flex items-center gap-2">
                  💡 If I am a PM in a Consolidating Market...
                </h3>
                <div className="space-y-3">
                  <div className="flex items-start gap-3">
                    <span className="text-blue-400 font-bold">1.</span>
                    <span className="text-gray-300 text-sm">
                      <span className="text-white font-medium">Monitor the warning signs.</span> Analyst coverage retirement, 
                      platform vendor "good enough" launches, M&A wave beginning, pricing pressure from bundles.
                    </span>
                  </div>
                  <div className="flex items-start gap-3">
                    <span className="text-blue-400 font-bold">2.</span>
                    <span className="text-gray-300 text-sm">
                      <span className="text-white font-medium">Run the vulnerability checklist.</span> Score your market 
                      on footprint overlap, bundle economics, detection commoditization, buyer overlap, and positioning.
                    </span>
                  </div>
                  <div className="flex items-start gap-3">
                    <span className="text-blue-400 font-bold">3.</span>
                    <span className="text-gray-300 text-sm">
                      <span className="text-white font-medium">Defending the category is not a winning strategy.</span> 
                      CrowdStrike and SentinelOne won by escaping EDR, not defending it. Pick your escape route.
                    </span>
                  </div>
                  <div className="flex items-start gap-3">
                    <span className="text-blue-400 font-bold">4.</span>
                    <span className="text-gray-300 text-sm">
                      <span className="text-white font-medium">Timing is everything.</span> The window between "category 
                      established" and "absorption complete" is typically 4-6 years. Act within 18-24 months of first signals.
                    </span>
                  </div>
                  <div className="flex items-start gap-3">
                    <span className="text-blue-400 font-bold">5.</span>
                    <span className="text-gray-300 text-sm">
                      <span className="text-white font-medium">If escape fails, sell early in the wave.</span> 
                      Carbon Black sold for $2.1B in 2019; it would fetch far less today.
                    </span>
                  </div>
                </div>
              </div>
            </section>

            {/* Strategic Theses Section */}
            <section id="theses" className="bg-gray-900 border border-gray-800 rounded-xl p-6">
              <h2 className="text-xl font-semibold text-white mb-4 flex items-center gap-2">
                🔮 Transferable Lessons
              </h2>
              <p className="text-gray-400 text-sm mb-6">
                Three structural patterns from EDR's absorption that transfer to other markets.
              </p>

              <div className="space-y-6">
                {theses.map((thesis) => (
                  <div key={thesis.id} className={`bg-gray-800/50 border border-gray-700 rounded-xl p-5 border-l-4 ${getThesisAccent(thesis.color)}`}>
                    <div className="flex items-start justify-between mb-3">
                      <h3 className="text-lg font-semibold text-white">{thesis.title}</h3>
                      <div className="flex items-center gap-2">
                        <span className={`px-2 py-0.5 rounded text-xs border ${getConfidenceColor(thesis.confidence)}`}>
                          {thesis.confidence}
                        </span>
                        <span className="text-gray-500 text-xs">{thesis.timeframe}</span>
                      </div>
                    </div>
                    
                    <p className="text-gray-300 text-sm mb-4">{thesis.claim}</p>
                    
                    <div className="bg-gray-900/50 rounded-lg p-3 mb-3">
                      <span className="text-gray-500 text-xs uppercase tracking-wider">Evidence</span>
                      <ul className="mt-2 space-y-1">
                        {thesis.evidence.map((item, idx) => (
                          <li key={idx} className="text-gray-400 text-sm flex items-start gap-2">
                            <span className="text-gray-600">•</span>
                            {item}
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div className="flex items-start gap-2">
                      <span className="text-gray-500 text-sm">Implication:</span>
                      <span className="text-gray-300 text-sm">{thesis.implication}</span>
                    </div>
                  </div>
                ))}
              </div>

              {/* Key Dates Summary */}
              <div className="mt-8">
                <h3 className="text-md font-medium text-gray-300 mb-3">📅 Key Dates</h3>
                <div className="grid grid-cols-2 md:grid-cols-3 gap-2">
                  {keyDates.map((item, idx) => (
                    <div key={idx} className="bg-gray-800/50 rounded p-2 text-xs">
                      <span className="text-gray-500">{item.date}:</span>
                      <span className="text-gray-300 ml-1">{item.event}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Synthesis */}
              <div className="bg-gray-800/30 rounded-lg p-4 mt-6">
                <h4 className="text-gray-300 font-medium mb-3">The Bottom Line</h4>
                <div className="space-y-2">
                  <p className="text-gray-400 text-sm flex items-center gap-2">
                    <span className="text-red-400">→</span>
                    EDR's absorption was <span className="text-white">predictable</span> and driven by <span className="text-white">structural economics</span>
                  </p>
                  <p className="text-gray-400 text-sm flex items-center gap-2">
                    <span className="text-red-400">→</span>
                    The survivors recognized the forces early and executed an <span className="text-white">escape strategy</span>
                  </p>
                  <p className="text-gray-400 text-sm flex items-center gap-2">
                    <span className="text-red-400">→</span>
                    The framework <span className="text-white">transfers</span>: assess footprint overlap, bundle economics, detection commoditization
                  </p>
                  <p className="text-gray-400 text-sm flex items-center gap-2">
                    <span className="text-red-400">→</span>
                    Categories showing EDR-like patterns have <span className="text-white">4-6 years</span> from establishment to absorption
                  </p>
                </div>
              </div>
            </section>

            {/* Resources / Related */}
            <section className="bg-gray-900 border border-gray-800 rounded-xl p-6">
              <h2 className="text-xl font-semibold text-white mb-4 flex items-center gap-2">
                📎 Related Resources
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <a href="/playbooks/absorption" className="flex items-center gap-3 p-4 bg-gray-800 hover:bg-gray-700 rounded-lg transition-colors">
                  <span className="text-2xl">📘</span>
                  <div>
                    <div className="font-medium">The Absorption Playbook</div>
                    <div className="text-xs text-gray-500">Executive framework (coming soon)</div>
                  </div>
                </a>
                <a href="/pillars/secops/xdr" className="flex items-center gap-3 p-4 bg-gray-800 hover:bg-gray-700 rounded-lg transition-colors">
                  <span className="text-2xl">📄</span>
                  <div>
                    <div className="font-medium">XDR Market Analysis</div>
                    <div className="text-xs text-gray-500">Where EDR went</div>
                  </div>
                </a>
                <a href="/pillars/secops/ndr" className="flex items-center gap-3 p-4 bg-gray-800 hover:bg-gray-700 rounded-lg transition-colors">
                  <span className="text-2xl">📄</span>
                  <div>
                    <div className="font-medium">NDR Market Analysis</div>
                    <div className="text-xs text-gray-500">The counter-example</div>
                  </div>
                </a>
                <a href="/pillars/secops/soar" className="flex items-center gap-3 p-4 bg-gray-800 hover:bg-gray-700 rounded-lg transition-colors">
                  <span className="text-2xl">📄</span>
                  <div>
                    <div className="font-medium">SOAR Market Analysis</div>
                    <div className="text-xs text-gray-500">Another absorbed category</div>
                  </div>
                </a>
              </div>
            </section>

          </div>
        </div>

        {/* Footer */}
        <footer className="mt-12 pt-8 border-t border-gray-800 text-center text-gray-500 text-sm">
          <p>Analysis by Andy Simko • CISSP • GPEN • CISA • GSNA • HCSFP • PMC-Level III</p>
          <p className="mt-1 text-gray-600">15+ years in cybersecurity • Methodology: Absorption Forensics</p>
        </footer>
      </div>
    </div>
  );
};

export default EDRPage;
