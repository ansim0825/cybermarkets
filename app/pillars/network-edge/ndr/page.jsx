"use client";
import React, { useState } from 'react';
import { Logo } from '@/components/Logo';

const NDRPage = () => {
  const [activeSection, setActiveSection] = useState('overview');

  // Network & Edge sub-segments
  const subSegments = [
    { id: 'ndr', name: 'NDR', active: true, href: '/pillars/network-edge/ndr' },
    { id: 'ngfw', name: 'NGFW', active: false, href: '#' },
    { id: 'sd-wan', name: 'SD-WAN', active: false, href: '#' },
    { id: 'sase', name: 'SASE', active: false, href: '#' },
    { id: 'nac', name: 'NAC', active: false, href: '#' },
    { id: 'ddos', name: 'DDoS Protection', active: false, href: '#' },
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
    { name: 'SecOps & Analytics', primary: true },
    { name: 'Endpoint & Workload', primary: false },
    { name: 'Identity', primary: false },
  ];

  const keyInsights = [
    { stat: '$3.5B+', label: 'Market size (2025)' },
    { stat: '68.8%', label: 'Top 5 vendor market share' },
    { stat: '93%', label: 'Malware hiding in encrypted traffic' },
    { stat: '391%', label: '3-year ROI (IDC study)' },
  ];

  const marketSizing = [
    { source: 'Gartner (Security Forecast)', val2024: '~$3.5B', projection: 'Growing', cagr: '22.5%' },
    { source: 'Various Analysts', val2024: '$3.5-3.7B', projection: '$7-8B+ (2030)', cagr: '9.6-15%' },
    { source: 'Cloud Segment', val2024: '55% share', projection: 'Expanding', cagr: '7.8%' },
  ];

  const marketSubSegments = [
    'Pure-Play NDR',
    'Platform-Integrated NDR (XDR)',
    'Open NDR (Zeek/Suricata-based)',
    'Managed NDR (MDR-bundled)',
    'Cloud-Native NDR',
    'OT/ICS Network Monitoring',
  ];

  // Top vendors by positioning
  const competitors = [
    { 
      name: 'Vectra AI', 
      product: 'Vectra AI Platform',
      position: 'Gartner MQ Leader', 
      focus: 'Attack Signal Intelligence. Highest position in inaugural Gartner MQ. Identity-aware detection. MDR for NDR option.',
      status: 'in-progress',
      href: '/pillars/network-edge/ndr/companies/vectra'
    },
    { 
      name: 'Darktrace', 
      product: 'Enterprise Immune System',
      position: 'Pure-Play Leader', 
      focus: 'Self-learning AI. Autonomous response (Antigena). PE-owned (Thoma Bravo $5.3B). 70% of detections from AI.',
      status: 'in-progress',
      href: '/pillars/network-edge/ndr/companies/darktrace'
    },
    { 
      name: 'ExtraHop', 
      product: 'Reveal(x)',
      position: 'Pure-Play Leader', 
      focus: 'Cloud-native architecture. PE-owned. Strong cloud workload visibility. RevealX 360 platform.',
      status: 'in-progress',
      href: '/pillars/network-edge/ndr/companies/extrahop'
    },
    { 
      name: 'Corelight', 
      product: 'Corelight Platform',
      position: 'Open NDR Leader', 
      focus: 'Zeek-based open platform. Immediate detection (zero baseline). SOC customization. Transparency focus.',
      status: 'in-progress',
      href: '/pillars/network-edge/ndr/companies/corelight'
    },
    { 
      name: 'Cisco', 
      product: 'Secure Network Analytics + Splunk',
      position: 'Platform Leader', 
      focus: 'Network heritage. $28B Splunk acquisition. XDR integration. SnapAttack acquisition (Jan 2025).',
      status: 'in-progress',
      href: '/pillars/network-edge/ndr/companies/cisco'
    },
    { 
      name: 'Palo Alto Networks', 
      product: 'Cortex XDR / XSIAM',
      position: 'Platform Leader', 
      focus: 'XDR integration. Firewall ecosystem. Cortex platform. XSIAM 3.0 with proactive exposure management.',
      status: 'in-progress',
      href: '/pillars/network-edge/ndr/companies/paloalto'
    },
    { 
      name: 'Fortinet', 
      product: 'FortiNDR',
      position: 'Platform Leader', 
      focus: 'Security Fabric integration. Mid-market/enterprise focus. Virtual security analyst (FortiNDR Cloud).',
      status: 'in-progress',
      href: '/pillars/network-edge/ndr/companies/fortinet'
    },
    { 
      name: 'Microsoft', 
      product: 'Defender for IoT / XDR',
      position: 'Platform Incumbent', 
      focus: 'M365/Azure native. Identity correlation via Entra. E5 bundling. Ecosystem lock-in advantage.',
      status: 'in-progress',
      href: '/pillars/network-edge/ndr/companies/microsoft'
    },
    { 
      name: 'Trend Micro', 
      product: 'Vision One',
      position: 'Platform Player', 
      focus: 'XDR integration. Mid-market focus. Network sensor capability within broader platform.',
      status: 'in-progress',
      href: '/pillars/network-edge/ndr/companies/trendmicro'
    },
    { 
      name: 'Stellar Cyber', 
      product: 'Open XDR Platform',
      position: 'Open XDR', 
      focus: 'Unified platform. Accessible pricing. SMB/mid-market positioning. MQ Challenger.',
      status: 'in-progress',
      href: '/pillars/network-edge/ndr/companies/stellarcyber'
    },
    { 
      name: 'Stamus Networks', 
      product: 'Stamus Security Platform',
      position: 'Open NDR', 
      focus: 'Suricata-based. Open/customizable. Enterprise SOC focus. Transparency positioning.',
      status: 'in-progress',
      href: '/pillars/network-edge/ndr/companies/stamus'
    },
    { 
      name: 'Gatewatcher', 
      product: 'Aioniq Platform',
      position: 'Gartner Visionary', 
      focus: 'European vendor. Only Visionary in inaugural MQ. Compliance/regional focus.',
      status: 'in-progress',
      href: '/pillars/network-edge/ndr/companies/gatewatcher'
    },
    { 
      name: 'Arista Networks', 
      product: 'Arista NDR',
      position: 'Network-Native', 
      focus: 'Network infrastructure heritage. Data center focus. Deep packet inspection.',
      status: 'in-progress',
      href: '/pillars/network-edge/ndr/companies/arista'
    },
    { 
      name: 'WatchGuard', 
      product: 'ThreatSync NDR',
      position: 'MSP-Focused', 
      focus: 'MSP/MSSP channel. Mid-market/SMB positioning. ThreatSync platform.',
      status: 'in-progress',
      href: '/pillars/network-edge/ndr/companies/watchguard'
    },
    { 
      name: 'Barracuda', 
      product: 'Managed XDR',
      position: 'Managed Service', 
      focus: '24/7 SOC. MSP channel. Mid-market/SMB focus. Managed service bundle.',
      status: 'in-progress',
      href: '/pillars/network-edge/ndr/companies/barracuda'
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
    { name: 'AI/ML and GenAI Integration', description: 'GenAI assistants for natural language threat hunting. AI-driven triage reduces investigation from 40 min to 3-11 min. Autonomous response capabilities emerging.' },
    { name: 'XDR Convergence & Platform Absorption', description: 'Larger platforms absorbing NDR features. Within 5 years, most NDR capabilities will commoditize. Standalone pure-play faces existential pressure.' },
    { name: 'IT/OT Convergence', description: 'NDR extending to OT/ICS environments. 45% of organizations lack OT visibility. Manufacturing #1 targeted industry 4 years running.' },
    { name: 'Cloud-Native Architecture', description: 'Cloud-based NDR at 55% market share. Multi-cloud monitoring essential. IaaS traffic visibility becoming standard.' },
    { name: 'Zero Trust & Regulatory Mandates', description: '81% of enterprises targeting zero-trust by 2026. NIS2, GDPR, HIPAA driving compliance requirements. Only 5% achieve full microsegmentation.' },
  ];

  const hypePositions = [
    { tech: 'Core NDR Technology', position: 'Slope of Enlightenment → Early Plateau', status: 'stable', note: 'First Gartner MQ May 2025' },
    { tech: 'GenAI-Powered Investigation', position: 'Peak of Inflated Expectations', status: 'hot', note: 'Emerging differentiator' },
    { tech: 'OT/ICS Network Monitoring', position: 'Climbing toward Peak', status: 'rising', note: 'Primary expansion vector' },
    { tech: 'Cloud-Native NDR', position: 'Slope of Enlightenment', status: 'rising', note: '55% market share' },
    { tech: 'Encrypted Traffic Analysis', position: 'Late Slope', status: 'rising', note: '93% of malware in encrypted traffic' },
  ];

  const maActivity = [
    { date: 'Oct 2024', acquirer: 'Thoma Bravo', target: 'Darktrace', value: '$5.3B', signal: 'PE consolidation of NDR leader' },
    { date: 'Mar 2024', acquirer: 'Cisco', target: 'Splunk', value: '$28B', signal: 'SIEM + XDR/NDR integration' },
    { date: 'Aug 2025', acquirer: 'Zscaler', target: 'Red Canary', value: '$675M', signal: 'Zero trust + MDR convergence' },
    { date: 'Jan 2025', acquirer: 'Cisco', target: 'SnapAttack', value: 'Undisclosed', signal: 'Detection engineering' },
    { date: '2025', acquirer: 'Darktrace', target: 'Cado Security', value: 'Undisclosed', signal: 'Forensics + cloud investigation' },
  ];

  const tier1Jobs = [
    { job: 'Triage alerts efficiently', metric: 'Reduce time per alert from 40 min to <5 min' },
    { job: 'Distinguish real threats from false positives', metric: '<5% false positive rate; confidence scoring' },
    { job: 'Escalate correctly without missing threats', metric: 'Clear MITRE ATT&CK mapping; threat indicators' },
  ];

  const tier2Jobs = [
    { job: 'Investigate full scope of incident', metric: 'Attack timeline visualization; related event correlation' },
    { job: 'Correlate across data sources', metric: 'SIEM/EDR integration; identity correlation' },
    { job: 'Determine root cause and containment', metric: 'Packet forensics; automated response options' },
  ];

  const threatHunterJobs = [
    { job: 'Find threats not triggering alerts', metric: 'Behavioral baselining; anomaly detection' },
    { job: 'Test hypotheses about suspected activity', metric: 'Query-based investigation; historical search' },
    { job: 'Improve detection rules', metric: 'Custom rule creation; tuning capabilities' },
  ];

  const cisoJobs = [
    { job: 'Demonstrate network visibility improvement', metric: 'East-west coverage; encrypted traffic visibility' },
    { job: 'Justify NDR investment with ROI', metric: 'MTTD/MTTR reduction; productivity savings' },
    { job: 'Reduce organizational breach risk', metric: 'Measurable risk metrics; board reporting' },
  ];

  const tableStakes = [
    'AI/ML-based behavioral analytics',
    'North-south traffic monitoring',
    'East-west (lateral) traffic monitoring',
    'Real-time detection & alerting',
    'Full packet capture or rich metadata',
    'Threat intelligence integration (STIX/TAXII)',
    'Automated response actions',
    'SIEM integration (bi-directional)',
    'EDR/XDR integration',
    'API availability (RESTful)',
    'Cloud deployment option',
    'MITRE ATT&CK mapping',
    'Compliance reporting (SOC2, PCI-DSS)',
    'Role-based access control',
    '24/7 support availability',
  ];

  const differentiators = [
    { name: 'Encrypted Traffic Analysis Without Decryption', description: '93% of malware hides in encrypted traffic. Detection without decryption avoids latency, privacy, and certificate management complexity.' },
    { name: 'Zero Baseline / Immediate Time-to-Value', description: 'Traditional NDR requires 2-4 weeks of learning. Buyers explicitly asking "how long until we see value?"' },
    { name: 'False Positive Reduction / Attack Signal Intelligence', description: '#1 user complaint on G2/Gartner Peer Insights. AI-prioritized alerts with confidence scores separate leaders.' },
    { name: 'Identity-Aware Detection', description: 'Correlating network activity with user identity enables precise attribution. Bridges NDR and identity security.' },
    { name: 'GenAI-Powered Investigation', description: 'LLM assistants for natural language threat hunting. Accelerates analyst productivity and addresses skills shortage.' },
    { name: 'OT/ICS Coverage (Agentless)', description: 'Primary expansion vector. 45% of orgs lack OT visibility. Agentless monitoring required—can\'t put agents on PLCs.' },
    { name: 'MDR Service Bundling', description: 'Addresses 24/7 monitoring challenge. 53% of CISOs report understaffing. Services growing 15.6% CAGR.' },
  ];

  const roiMetrics = [
    { metric: '3-Year ROI', value: '391%' },
    { metric: 'Payback period', value: '6 months' },
    { metric: 'MTTD improvement', value: '47-80%' },
    { metric: 'Annual productivity savings', value: '$793K' },
  ];

  const pricingModels = [
    { model: 'Per-Device/Per-IP', trend: 'Declining', notes: 'Scales unpredictably with IoT/OT expansion' },
    { model: 'Data Ingestion Volume', trend: 'Mixed', notes: 'Creates perverse incentive to limit visibility' },
    { model: 'Per-User', trend: 'Emerging', notes: 'More predictable for identity-centric deployments' },
    { model: 'Flat/Bundled', trend: 'Preferred (Mid-market)', notes: 'Simpler budgeting; may hide overages' },
  ];

  const theses = [
    {
      id: 1,
      title: 'Standalone NDR Faces Existential Platform Absorption',
      timeframe: '2025-2028',
      confidence: 'High',
      color: 'green',
      claim: 'Within 5 years, most NDR capabilities will commoditize as XDR/SIEM platforms build them natively. Standalone pure-play vendors must demonstrate differentiated value or become acquisition targets.',
      evidence: ['Top 5 vendors control 68.8% of market', 'First Gartner MQ signals maturity', 'Cisco, Palo Alto, Microsoft integrating NDR into XDR', 'Organizations prefer "platformization" over point solutions'],
      implication: 'Evaluate NDR as platform capability unless requiring deep network visibility. Standalone vendors: differentiate on detection quality, become best integration partner, or prepare for acquisition.',
    },
    {
      id: 2,
      title: 'Encrypted Traffic Analysis Becomes the New Frontier',
      timeframe: '2025-2027',
      confidence: 'High',
      color: 'purple',
      claim: '93% of malware now hides in encrypted traffic. ETA without decryption is the most asked-about capability in evaluations. Vendors who solve this problem credibly win.',
      evidence: ['93% of malware in encrypted traffic (industry data)', 'TLS 1.3 complicates traditional inspection', 'Privacy regulations discourage decryption', 'Buyer signal: "How do you handle TLS 1.3 traffic?"'],
      implication: 'Prioritize encrypted traffic analysis capability. Behavioral/metadata analysis > decryption-dependent approaches.',
    },
    {
      id: 3,
      title: 'MDR Reshapes NDR Economics',
      timeframe: '2025-2028',
      confidence: 'Medium-High',
      color: 'orange',
      claim: 'Direct standalone NDR market is shrinking as managed services grow faster (15.6% CAGR). Skills shortage (53% of CISOs report understaffing) drives outsourcing. If you\'re not thinking MDR bundling, you\'re missing the growth vector.',
      evidence: ['Services segment growing 15.6% vs. 9.6% overall', '53% of CISOs report understaffing', 'Only 72% of cyber roles filled', 'Mid-market prefers managed over build'],
      implication: 'Evaluate MDR-bundled NDR if lacking SOC resources. Vendors: develop managed service capability or partner.',
    },
  ];

  const whiteSpaceGaps = [
    { gap: 'OT/ICS Coverage', severity: 'Critical', reason: '45% of orgs lack OT visibility; manufacturing #1 targeted industry' },
    { gap: 'Identity Correlation', severity: 'High', reason: 'Network + identity context enables precise attribution' },
    { gap: 'GenAI Investigation', severity: 'High', reason: 'Emerging differentiator; table stakes by 2027' },
    { gap: 'Cloud-Native Architecture', severity: 'Medium-High', reason: '55% cloud share; legacy appliance-based losing ground' },
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
      case 'orange': return 'border-l-orange-500';
      default: return 'border-l-blue-500';
    }
  };

  const scrollToSection = (sectionId) => {
    setActiveSection(sectionId);
    document.getElementById(sectionId)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-gray-950 text-white">

      {/* Navigation */}
      <nav className="border-b border-gray-800 bg-gray-900/80 backdrop-blur-sm sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3 text-sm text-gray-400">
              <a href="/" className="hover:text-white transition-colors">
                <Logo />
              </a>
              /
              <a href="/pillars/network-edge" className="text-cyan-400 hover:text-cyan-300">Network & Edge</a>
            </div>
            <div className="flex gap-6 text-sm">
              <a href="/pillars" className="text-gray-400 hover:text-white transition-colors">Pillars</a>
              <a href="/theses" className="text-gray-400 hover:text-white transition-colors">Theses</a>
              <a href="/about" className="text-gray-400 hover:text-white transition-colors">About</a>
            </div>
          </div>
        </div>
      </nav>

      <div className="max-w-7xl mx-auto px-4 py-6">
        
        {/* Sub-segment Navigation */}
        <div className="flex items-center justify-between mb-8">
          <div className="flex gap-2 flex-wrap">
            {subSegments.map((seg) => (
              <a
                key={seg.id}
                href={seg.href}
                className={`px-4 py-2 rounded-lg text-sm font-medium transition-all flex items-center gap-2 ${
                  seg.active
                    ? 'bg-cyan-900/50 text-cyan-400 border border-cyan-700'
                    : 'bg-gray-800 text-gray-400 hover:bg-gray-700 hover:text-white'
                }`}
              >
                {seg.active && <span className="text-cyan-400 text-xs">●</span>}
                {seg.name}
              </a>
            ))}
          </div>
          
          {/* Related pillars */}
          <div className="hidden md:flex items-center gap-2 text-xs text-gray-500">
            <span>Also touches:</span>
            {relatedPillars.map((pillar, idx) => (
              <span
                key={idx}
                className={`px-2 py-1 rounded ${pillar.primary ? 'bg-cyan-900/30 text-cyan-500' : 'bg-gray-800 text-gray-500'}`}
              >
                {pillar.name}
              </span>
            ))}
          </div>
        </div>

        
        {/* Header */}
        <div className="mb-8">
          <div className="flex items-center gap-4 mb-3">
            <h1 className="text-4xl font-bold bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
              Network Detection & Response
            </h1>
            <span className="px-3 py-1 bg-cyan-900/50 text-cyan-400 text-xs font-medium rounded-full border border-cyan-800">
              FIRST GARTNER MQ (2025)
            </span>
          </div>
          <p className="text-lg text-gray-400 max-w-3xl">
            The $3.5B+ market completing the SOC Visibility Triad—facing platform absorption as AI/ML detection becomes table stakes
          </p>
          
          <div className="flex items-center gap-4 mt-4 text-sm text-gray-500">
            <span>Last updated: January 2026</span>
            <span>•</span>
            <span>Methodology: SRP Framework</span>
            <span>•</span>
            <span className="text-cyan-400">● Active research</span>
          </div>
        </div>

        {/* Key Stats Bar */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
          {keyInsights.map((insight, idx) => (
            <div
              key={idx}
              className="bg-gray-900 border border-gray-800 rounded-xl p-4 text-center"
            >
              <div className="text-2xl font-bold text-cyan-400">{insight.stat}</div>
              <div className="text-sm text-gray-500 mt-1">{insight.label}</div>
            </div>
          ))}
        </div>

        {/* The SOC Visibility Triad Callout */}
        <div className="bg-gradient-to-r from-cyan-900/30 to-blue-900/30 border border-cyan-800/50 rounded-xl p-6 mb-8">
          <div className="flex items-start gap-4">
            <div className="text-3xl">🔺</div>
            <div>
              <h3 className="text-lg font-semibold text-cyan-400 mb-2">The SOC Visibility Triad</h3>
              <p className="text-gray-300 text-sm leading-relaxed">
                NDR completes the <span className="text-white font-medium">SOC Visibility Triad</span> alongside 
                <span className="text-cyan-400"> SIEM </span> and <span className="text-cyan-400">EDR</span>. 
                The network provides <span className="text-white font-medium">immutable, tamper-proof data</span>—
                logs can be deleted, endpoint agents can be disabled, but network traffic cannot be hidden.
                <span className="text-cyan-400 font-medium"> This is the "ground truth" positioning.</span>
              </p>
            </div>
          </div>
        </div>

        {/* Main Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          
          {/* Left Sidebar - SRP Navigation */}
          <div className="lg:col-span-1">
            <div className="sticky top-24 space-y-4">
              <div className="bg-gray-900 border border-gray-800 rounded-xl p-4">
                <h3 className="text-sm font-semibold text-gray-300 mb-3">SRP Analysis</h3>
                <div className="space-y-1">
                  {srpSections.map((section) => (
                    <button
                      key={section.id}
                      onClick={() => scrollToSection(section.id)}
                      className={`w-full text-left px-3 py-2 rounded-lg text-sm flex items-center gap-2 transition-all ${
                        activeSection === section.id
                          ? 'bg-cyan-900/50 text-cyan-400 border border-cyan-800'
                          : 'text-gray-400 hover:bg-gray-800 hover:text-white'
                      }`}
                    >
                      {section.icon}
                      {section.name}
                    </button>
                  ))}
                </div>
              </div>

              {/* SOC Triad Visual */}
              <div className="bg-gray-900 border border-gray-800 rounded-xl p-4">
                <h3 className="text-sm font-semibold text-gray-300 mb-3">SOC Visibility Triad</h3>
                <div className="flex flex-col items-center gap-2">
                  <div className="w-full flex justify-center">
                    <div className="px-4 py-2 bg-blue-900/50 border border-blue-700 rounded-lg text-center text-xs">
                      <div className="text-blue-400 font-semibold">SIEM</div>
                      <div className="text-gray-500">Logs & Correlation</div>
                    </div>
                  </div>
                  <div className="w-full flex justify-between px-2">
                    <div className="px-4 py-2 bg-purple-900/50 border border-purple-700 rounded-lg text-center text-xs">
                      <div className="text-purple-400 font-semibold">EDR</div>
                      <div className="text-gray-500">Endpoints</div>
                    </div>
                    <div className="px-4 py-2 bg-cyan-900/50 border border-cyan-700 rounded-lg text-center text-xs">
                      <div className="text-cyan-400 font-semibold">NDR ★</div>
                      <div className="text-gray-500">Network</div>
                    </div>
                  </div>
                </div>
                <p className="text-xs text-gray-500 mt-3 text-center">★ Network = immutable data source</p>
              </div>
            </div>
          </div>

          {/* Main Content Area */}
          <div className="lg:col-span-3 space-y-8">
            
            {/* Overview Section */}
            <section id="overview" className="bg-gray-900 border border-gray-800 rounded-xl p-6">
              <h2 className="text-xl font-semibold text-white mb-4 flex items-center gap-2">
                📋 Overview
              </h2>
              <div className="space-y-4 text-gray-300 text-sm leading-relaxed">
                <p>
                  <span className="text-white font-medium">Network Detection and Response (NDR)</span> continuously 
                  monitors and analyzes network traffic—both internal (east-west) and external (north-south)—to 
                  detect, investigate, and respond to cyber threats in real-time. Unlike signature-based tools, 
                  NDR uses <span className="text-cyan-400">behavioral analytics, machine learning, and AI</span> to 
                  identify anomalous activity indicating a breach.
                </p>
                <p>
                  The market reached a major milestone in <span className="text-white font-medium">May 2025</span> with 
                  Gartner publishing its <span className="text-cyan-400">first-ever Magic Quadrant for NDR</span>—signaling 
                  category maturity and mainstream enterprise adoption. However, standalone NDR faces existential 
                  pressure from platform absorption as XDR/SIEM solutions integrate network visibility.
                </p>
                <div className="bg-gray-800/50 rounded-lg p-4 mt-4">
                  <h4 className="text-white font-medium mb-2">Why NDR Matters</h4>
                  <ul className="space-y-2 text-gray-400">
                    <li className="flex items-start gap-2">
                      <span className="text-cyan-400">•</span>
                      <span><span className="text-white">Visibility gaps:</span> EDR requires agents; can't monitor IoT, OT, or unmanaged devices</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-cyan-400">•</span>
                      <span><span className="text-white">Encrypted traffic:</span> 93% of malware hides in encrypted traffic</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-cyan-400">•</span>
                      <span><span className="text-white">Lateral movement:</span> Most difficult attack phase to detect—cloaked in legitimate protocols</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-cyan-400">•</span>
                      <span><span className="text-white">Immutable data:</span> Network traffic can't be deleted or modified like logs</span>
                    </li>
                  </ul>
                </div>
              </div>
            </section>

            {/* Market Structure Section */}
            <section id="structure" className="bg-gray-900 border border-gray-800 rounded-xl p-6">
              <h2 className="text-xl font-semibold text-white mb-4 flex items-center gap-2">
                🏗️ Market Structure
              </h2>
              
              {/* Market Sizing */}
              <div className="mb-6">
                <h3 className="text-md font-medium text-gray-300 mb-3">Market Size & Growth</h3>
                <div className="overflow-x-auto">
                  <table className="w-full text-sm">
                    <thead>
                      <tr className="text-left text-gray-500 border-b border-gray-800">
                        <th className="pb-2">Source</th>
                        <th className="pb-2">2024/2025</th>
                        <th className="pb-2">Projection</th>
                        <th className="pb-2">CAGR</th>
                      </tr>
                    </thead>
                    <tbody>
                      {marketSizing.map((row, idx) => (
                        <tr key={idx} className="border-b border-gray-800/50">
                          <td className="py-2 text-gray-400">{row.source}</td>
                          <td className="py-2 text-cyan-400">{row.val2024}</td>
                          <td className="py-2 text-gray-300">{row.projection}</td>
                          <td className="py-2 text-green-400">{row.cagr}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
                <p className="text-xs text-gray-500 mt-2">Note: CAGR varies 9.6-22.5% depending on source and scope definition.</p>
              </div>

              {/* Sub-segments */}
              <div className="mb-6">
                <h3 className="text-md font-medium text-gray-300 mb-3">NDR Market Sub-Segments</h3>
                <div className="flex flex-wrap gap-2">
                  {marketSubSegments.map((seg, idx) => (
                    <span
                      key={idx}
                      className="px-3 py-1 bg-gray-800 text-gray-400 text-xs rounded-lg border border-gray-700"
                    >
                      {seg}
                    </span>
                  ))}
                </div>
              </div>

              {/* White Space Gaps */}
              <div className="mb-6">
                <h3 className="text-md font-medium text-gray-300 mb-3">White Space Opportunities</h3>
                <div className="space-y-2">
                  {whiteSpaceGaps.map((gap, idx) => (
                    <div key={idx} className="flex items-center justify-between bg-gray-800/50 rounded-lg p-3">
                      <span className="text-white font-medium text-sm">{gap.gap}</span>
                      <div className="flex items-center gap-3">
                        <span className="text-gray-400 text-xs">{gap.reason}</span>
                        <span className={`text-xs px-2 py-0.5 rounded ${gap.severity === 'Critical' ? 'bg-red-900/50 text-red-400' : gap.severity === 'High' ? 'bg-orange-900/50 text-orange-400' : 'bg-yellow-900/50 text-yellow-400'}`}>{gap.severity}</span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Competitive Landscape */}
              <div>
                <div className="flex items-center justify-between mb-3">
                  <h3 className="text-md font-medium text-gray-300">Top 15 Vendors by Positioning (2025)</h3>
                  <div className="flex gap-4 text-xs">
                    <span className="flex items-center gap-1">
                      <span className="w-2 h-2 rounded-full bg-green-400"></span>
                      Complete
                    </span>
                    <span className="flex items-center gap-1">
                      <span className="w-2 h-2 rounded-full bg-yellow-400"></span>
                      In Progress
                    </span>
                    <span className="flex items-center gap-1">
                      <span className="w-2 h-2 rounded-full bg-gray-500"></span>
                      Pending
                    </span>
                  </div>
                </div>
                <div className="space-y-2">
                  {competitors.map((comp, idx) => {
                    const statusStyle = getStatusStyle(comp.status);
                    return (
                      <a
                        key={idx}
                        href={comp.href}
                        className="flex items-center justify-between bg-gray-800/50 hover:bg-gray-800 rounded-lg p-3 transition-colors group"
                      >
                        <div className="flex-1">
                          <div className="flex items-center gap-2 mb-1">
                            <span className="text-white font-medium text-sm">{comp.name}</span>
                            <span className="text-gray-500 text-xs">•</span>
                            <span className="text-gray-400 text-xs">{comp.product}</span>
                          </div>
                          <p className="text-gray-500 text-xs">{comp.focus}</p>
                        </div>
                        <div className="flex items-center gap-3 ml-4">
                          <span className="text-xs px-2 py-1 bg-cyan-900/50 text-cyan-400 rounded">
                            {comp.position}
                          </span>
                          <span className={`flex items-center gap-1 text-xs ${statusStyle.text}`}>
                            <span className={`w-2 h-2 rounded-full ${statusStyle.dot}`}></span>
                            {statusStyle.label}
                          </span>
                          <span className="text-gray-600 group-hover:text-gray-400 transition-colors">
                            →
                          </span>
                        </div>
                      </a>
                    );
                  })}
                </div>
              </div>
            </section>

            {/* Market Dynamics Section */}
            <section id="motion" className="bg-gray-900 border border-gray-800 rounded-xl p-6">
              <h2 className="text-xl font-semibold text-white mb-4 flex items-center gap-2">
                📈 Market Dynamics
              </h2>

              {/* Assessment */}
              <div className="bg-gradient-to-r from-cyan-900/30 to-blue-900/30 border border-cyan-800/50 rounded-lg p-4 mb-6">
                <div className="flex items-center gap-3">
                  <span className="text-2xl">📊</span>
                  <h3 className="text-white font-medium">Market Assessment</h3>
                </div>
                <p className="text-gray-300 text-sm mt-2">
                  <span className="text-cyan-400 font-medium">Position:</span> Slope of Enlightenment → Early Plateau. 
                  <span className="text-cyan-400 font-medium ml-2">Direction:</span> Strong Consolidation. 
                  First Gartner MQ (May 2025) signals maturity. Top 5 vendors control 68.8% of market.
                </p>
              </div>

              {/* Hype Cycle */}
              <div className="mb-6">
                <h3 className="text-md font-medium text-gray-300 mb-3">Hype Cycle Positioning (2025)</h3>
                <div className="space-y-2">
                  {hypePositions.map((item, idx) => (
                    <div key={idx} className="flex items-center justify-between bg-gray-800/50 rounded-lg p-3">
                      <div>
                        <span className="text-white text-sm">{item.tech}</span>
                        <span className="text-gray-500 text-xs ml-2">— {item.note}</span>
                      </div>
                      <span className={`text-xs px-2 py-1 rounded ${
                        item.status === 'hot' ? 'bg-red-900/50 text-red-400' :
                        item.status === 'rising' ? 'bg-green-900/50 text-green-400' :
                        item.status === 'emerging' ? 'bg-purple-900/50 text-purple-400' :
                        'bg-gray-700 text-gray-400'
                      }`}>
                        {item.position}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Major Trends */}
              <div className="mb-6">
                <h3 className="text-md font-medium text-gray-300 mb-3">5 Major Trends for 2025-2026</h3>
                <div className="space-y-3">
                  {trends.map((trend, idx) => (
                    <div key={idx} className="bg-gray-800/50 rounded-lg p-4">
                      <h4 className="text-cyan-400 font-medium text-sm mb-1">{trend.name}</h4>
                      <p className="text-gray-400 text-xs">{trend.description}</p>
                    </div>
                  ))}
                </div>
              </div>

              {/* M&A Activity */}
              <div className="mb-6">
                <h3 className="text-md font-medium text-gray-300 mb-3">M&A Activity (Consolidation Signals)</h3>
                <div className="overflow-x-auto">
                  <table className="w-full text-sm">
                    <thead>
                      <tr className="text-left text-gray-500 border-b border-gray-800">
                        <th className="pb-2">Date</th>
                        <th className="pb-2">Acquirer</th>
                        <th className="pb-2">Target</th>
                        <th className="pb-2">Value</th>
                        <th className="pb-2">Strategic Signal</th>
                      </tr>
                    </thead>
                    <tbody>
                      {maActivity.map((row, idx) => (
                        <tr key={idx} className="border-b border-gray-800/50">
                          <td className="py-2 text-gray-500">{row.date}</td>
                          <td className="py-2 text-white">{row.acquirer}</td>
                          <td className="py-2 text-cyan-400">{row.target}</td>
                          <td className="py-2 text-green-400">{row.value}</td>
                          <td className="py-2 text-gray-400">{row.signal}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>

              {/* What's Replacing What */}
              <div>
                <h3 className="text-md font-medium text-gray-300 mb-3">What's Replacing What</h3>
                <div className="space-y-2 text-sm">
                  <div className="flex items-center gap-3 bg-gray-800/50 rounded-lg p-3">
                    <span className="text-red-400 line-through">Legacy IDS/IPS</span>
                    <span className="text-gray-500">→</span>
                    <span className="text-green-400">NDR with behavioral analysis</span>
                  </div>
                  <div className="flex items-center gap-3 bg-gray-800/50 rounded-lg p-3">
                    <span className="text-red-400 line-through">Standalone NDR</span>
                    <span className="text-gray-500">→</span>
                    <span className="text-green-400">XDR platforms with integrated NDR</span>
                  </div>
                  <div className="flex items-center gap-3 bg-gray-800/50 rounded-lg p-3">
                    <span className="text-red-400 line-through">Signature-based detection</span>
                    <span className="text-gray-500">→</span>
                    <span className="text-green-400">AI/ML behavioral analytics</span>
                  </div>
                  <div className="flex items-center gap-3 bg-gray-800/50 rounded-lg p-3">
                    <span className="text-red-400 line-through">Manual alert triage</span>
                    <span className="text-gray-500">→</span>
                    <span className="text-green-400">GenAI-assisted investigation</span>
                  </div>
                </div>
              </div>
            </section>

            {/* Stakeholders Section */}
            <section id="stakeholders" className="bg-gray-900 border border-gray-800 rounded-xl p-6">
              <h2 className="text-xl font-semibold text-white mb-4 flex items-center gap-2">
                👥 Stakeholders
              </h2>

              {/* Analyst Consensus */}
              <div className="bg-gray-800/50 rounded-lg p-4 mb-6">
                <h3 className="text-white font-medium mb-3">Analyst Consensus</h3>
                <div className="space-y-2 text-sm">
                  <div className="flex items-start gap-2">
                    <span className="text-cyan-400 font-medium min-w-[80px]">Gartner:</span>
                    <span className="text-gray-400">First MQ (May 2025). NDR as essential component of SOC Visibility Triad. 22.5% CAGR.</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <span className="text-cyan-400 font-medium min-w-[80px]">Forrester:</span>
                    <span className="text-gray-400">Uses "NAV" terminology. Prioritizes killing alert fatigue. Emphasizes decryption debate.</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <span className="text-cyan-400 font-medium min-w-[80px]">IDC:</span>
                    <span className="text-gray-400">"Network is first and final arbiter." NDR emerged as most effective detection tech (47%).</span>
                  </div>
                </div>
              </div>

              {/* CISO JTBD */}
              <div className="mb-6">
                <h3 className="text-md font-medium text-gray-300 mb-3">CISO / Security Director Jobs To Be Done</h3>
                <div className="overflow-x-auto">
                  <table className="w-full text-sm">
                    <thead>
                      <tr className="text-left text-gray-500 border-b border-gray-800">
                        <th className="pb-2">Job Statement</th>
                        <th className="pb-2">Success Metric</th>
                      </tr>
                    </thead>
                    <tbody>
                      {cisoJobs.map((row, idx) => (
                        <tr key={idx} className="border-b border-gray-800/50">
                          <td className="py-2 text-gray-300">{row.job}</td>
                          <td className="py-2 text-gray-500">{row.metric}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>

              {/* Tier 1 SOC Analyst JTBD */}
              <div className="mb-6">
                <h3 className="text-md font-medium text-gray-300 mb-3">Tier 1 SOC Analyst Jobs To Be Done</h3>
                <div className="bg-gray-800/30 rounded-lg p-3 mb-3">
                  <p className="text-gray-400 text-sm italic">
                    "Help me quickly determine if an alert is real or a false positive so I can avoid missing real threats while not wasting time."
                  </p>
                </div>
                <div className="overflow-x-auto">
                  <table className="w-full text-sm">
                    <thead>
                      <tr className="text-left text-gray-500 border-b border-gray-800">
                        <th className="pb-2">Job Statement</th>
                        <th className="pb-2">Success Metric</th>
                      </tr>
                    </thead>
                    <tbody>
                      {tier1Jobs.map((row, idx) => (
                        <tr key={idx} className="border-b border-gray-800/50">
                          <td className="py-2 text-gray-300">{row.job}</td>
                          <td className="py-2 text-gray-500">{row.metric}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>

              {/* Tier 2 SOC Analyst JTBD */}
              <div className="mb-6">
                <h3 className="text-md font-medium text-gray-300 mb-3">Tier 2 SOC Analyst Jobs To Be Done</h3>
                <div className="bg-gray-800/30 rounded-lg p-3 mb-3">
                  <p className="text-gray-400 text-sm italic">
                    "Help me understand the full scope of an attack across systems so I can recommend effective containment."
                  </p>
                </div>
                <div className="overflow-x-auto">
                  <table className="w-full text-sm">
                    <thead>
                      <tr className="text-left text-gray-500 border-b border-gray-800">
                        <th className="pb-2">Job Statement</th>
                        <th className="pb-2">Success Metric</th>
                      </tr>
                    </thead>
                    <tbody>
                      {tier2Jobs.map((row, idx) => (
                        <tr key={idx} className="border-b border-gray-800/50">
                          <td className="py-2 text-gray-300">{row.job}</td>
                          <td className="py-2 text-gray-500">{row.metric}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>

              {/* Threat Hunter JTBD */}
              <div className="mb-6">
                <h3 className="text-md font-medium text-gray-300 mb-3">Tier 3 / Threat Hunter Jobs To Be Done</h3>
                <div className="bg-gray-800/30 rounded-lg p-3 mb-3">
                  <p className="text-gray-400 text-sm italic">
                    "Help me find threats that aren't triggering alerts so I can prove my value and protect the organization proactively."
                  </p>
                </div>
                <div className="overflow-x-auto">
                  <table className="w-full text-sm">
                    <thead>
                      <tr className="text-left text-gray-500 border-b border-gray-800">
                        <th className="pb-2">Job Statement</th>
                        <th className="pb-2">Success Metric</th>
                      </tr>
                    </thead>
                    <tbody>
                      {threatHunterJobs.map((row, idx) => (
                        <tr key={idx} className="border-b border-gray-800/50">
                          <td className="py-2 text-gray-300">{row.job}</td>
                          <td className="py-2 text-gray-500">{row.metric}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>

              {/* Key Pain Points */}
              <div className="bg-red-900/20 border border-red-800/50 rounded-lg p-4">
                <h3 className="text-red-400 font-medium mb-3">Top User Complaints (G2/Gartner Peer Insights)</h3>
                <div className="space-y-2 text-sm">
                  <p className="text-gray-300">
                    <span className="text-red-400 font-medium">#1 False positives:</span> "So many false positives we were neglecting and not investigating alerts"
                  </p>
                  <p className="text-gray-300">
                    <span className="text-red-400 font-medium">#2 Pricing:</span> "Pricing bothers me and is one of the major factors when choosing"
                  </p>
                  <p className="text-gray-300">
                    <span className="text-red-400 font-medium">#3 Complex tuning:</span> "Higher number of false positives during initial implementation; needs manual tagging"
                  </p>
                </div>
              </div>
            </section>

            {/* Economics Section */}
            <section id="economics" className="bg-gray-900 border border-gray-800 rounded-xl p-6">
              <h2 className="text-xl font-semibold text-white mb-4 flex items-center gap-2">
                💰 Economics & ROI
              </h2>

              {/* ROI Metrics */}
              <div className="mb-6">
                <h3 className="text-md font-medium text-gray-300 mb-3">The Business Case (IDC Vectra AI Study)</h3>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                  {roiMetrics.map((item, idx) => (
                    <div key={idx} className="bg-gray-800/50 rounded-lg p-4 text-center">
                      <div className="text-xl font-bold text-green-400">{item.value}</div>
                      <div className="text-xs text-gray-500 mt-1">{item.metric}</div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Additional ROI Data */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
                <div className="bg-gray-800/50 rounded-lg p-4">
                  <h4 className="text-cyan-400 font-medium text-sm mb-2">Detection & Response Impact</h4>
                  <div className="space-y-2 text-sm">
                    <div className="flex justify-between">
                      <span className="text-gray-400">Alert triage time</span>
                      <span className="text-green-400">60% reduction</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-400">Investigation time</span>
                      <span className="text-green-400">50% reduction</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-400">Threats identified</span>
                      <span className="text-green-400">52% more</span>
                    </div>
                  </div>
                </div>
                <div className="bg-gray-800/50 rounded-lg p-4">
                  <h4 className="text-cyan-400 font-medium text-sm mb-2">Annual Value</h4>
                  <div className="space-y-2 text-sm">
                    <div className="flex justify-between">
                      <span className="text-gray-400">Productivity savings</span>
                      <span className="text-green-400">$793K/org</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-400">Benefits per 100 users</span>
                      <span className="text-green-400">$21,200</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-400">3-year NPV</span>
                      <span className="text-green-400">$6.4M</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Pricing Models */}
              <div className="mb-6">
                <h3 className="text-md font-medium text-gray-300 mb-3">Pricing Models</h3>
                <div className="overflow-x-auto">
                  <table className="w-full text-sm">
                    <thead>
                      <tr className="text-left text-gray-500 border-b border-gray-800">
                        <th className="pb-2">Model</th>
                        <th className="pb-2">Trend</th>
                        <th className="pb-2">Notes</th>
                      </tr>
                    </thead>
                    <tbody>
                      {pricingModels.map((row, idx) => (
                        <tr key={idx} className="border-b border-gray-800/50">
                          <td className="py-2 text-white">{row.model}</td>
                          <td className="py-2">
                            <span className={`text-xs px-2 py-1 rounded ${
                              row.trend === 'Declining' ? 'bg-red-900/50 text-red-400' :
                              row.trend === 'Emerging' ? 'bg-green-900/50 text-green-400' :
                              row.trend === 'Preferred (Mid-market)' ? 'bg-blue-900/50 text-blue-400' :
                              'bg-yellow-900/50 text-yellow-400'
                            }`}>{row.trend}</span>
                          </td>
                          <td className="py-2 text-gray-400">{row.notes}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>

              {/* TCO Considerations */}
              <div className="bg-yellow-900/20 border border-yellow-800/50 rounded-lg p-4">
                <h3 className="text-yellow-400 font-medium mb-3">TCO Considerations (Hidden Costs)</h3>
                <div className="space-y-2 text-sm text-gray-300">
                  <p><span className="text-yellow-400">•</span> <span className="text-white">Baselining period:</span> 2-4 weeks of limited detection during learning phase</p>
                  <p><span className="text-yellow-400">•</span> <span className="text-white">False positive tuning:</span> Ongoing FTE effort—#1 user complaint</p>
                  <p><span className="text-yellow-400">•</span> <span className="text-white">Cloud ingestion:</span> Data/storage fees can escalate unpredictably</p>
                  <p><span className="text-yellow-400">•</span> <span className="text-white">Skills shortage:</span> 53% of CISOs report understaffing—consider MDR</p>
                </div>
              </div>
            </section>

            {/* PM Strategy Section */}
            <section id="product" className="bg-gray-900 border border-gray-800 rounded-xl p-6">
              <h2 className="text-xl font-semibold text-white mb-4 flex items-center gap-2">
                🎯 PM Strategic Elements
              </h2>
              
              {/* Table Stakes */}
              <div className="mb-6">
                <h3 className="text-md font-medium text-gray-300 mb-3">Table Stakes (2025 MVP—Required for RFP)</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
                  {tableStakes.map((feature, idx) => (
                    <div key={idx} className="flex items-center gap-2 text-sm">
                      <span className="text-green-400">✓</span>
                      <span className="text-gray-400">{feature}</span>
                    </div>
                  ))}
                </div>
                <p className="text-xs text-gray-500 mt-3 bg-gray-800/50 p-2 rounded">
                  ⚠️ Missing any of these = immediate RFP disqualification. These are no longer differentiators.
                </p>
              </div>

              {/* Differentiators */}
              <div className="mb-6">
                <h3 className="text-md font-medium text-gray-300 mb-3">Key Differentiators (What Wins Deals)</h3>
                <div className="space-y-3">
                  {differentiators.map((diff, idx) => (
                    <div key={idx} className="bg-gray-800/50 rounded-lg p-4">
                      <h4 className="text-cyan-400 font-medium text-sm mb-1">{diff.name}</h4>
                      <p className="text-gray-400 text-xs">{diff.description}</p>
                    </div>
                  ))}
                </div>
              </div>

              {/* If I'm a PM Here Box */}
              <div className="bg-gradient-to-r from-cyan-900/30 to-blue-900/30 border border-cyan-800 rounded-xl p-5">
                <h3 className="text-lg font-semibold text-cyan-400 mb-4 flex items-center gap-2">
                  💡 If I am a PM Here, I Need to Know...
                </h3>
                <div className="space-y-3 text-sm">
                  <div className="flex gap-3">
                    <span className="text-cyan-400 font-bold">1.</span>
                    <span className="text-gray-300"><span className="text-white font-medium">NDR is consolidating, not dying.</span> Top 5 control 68.8%. First Gartner MQ signals maturity. But standalone pure-play is existentially challenged—platform absorption is real.</span>
                  </div>
                  <div className="flex gap-3">
                    <span className="text-cyan-400 font-bold">2.</span>
                    <span className="text-gray-300"><span className="text-white font-medium">AI/ML is now table stakes.</span> Differentiation has shifted to what kind of AI (GenAI assistants, identity-aware, attack signal intelligence) and how good it is (false positive rates, time-to-value).</span>
                  </div>
                  <div className="flex gap-3">
                    <span className="text-cyan-400 font-bold">3.</span>
                    <span className="text-gray-300"><span className="text-white font-medium">The encryption challenge is the new frontier.</span> 93% of malware hides in encrypted traffic. ETA without decryption is the most asked-about capability in evaluations.</span>
                  </div>
                  <div className="flex gap-3">
                    <span className="text-cyan-400 font-bold">4.</span>
                    <span className="text-gray-300"><span className="text-white font-medium">MDR is reshaping economics.</span> Direct standalone market shrinking as managed services grow faster (15.6% CAGR). If not thinking MDR bundling, you're missing the growth vector.</span>
                  </div>
                  <div className="flex gap-3">
                    <span className="text-cyan-400 font-bold">5.</span>
                    <span className="text-gray-300"><span className="text-white font-medium">OT/ICS is the expansion opportunity.</span> 45% of organizations lack OT visibility. IT/OT convergence driving new use cases. Agentless monitoring required.</span>
                  </div>
                  <div className="flex gap-3">
                    <span className="text-cyan-400 font-bold">6.</span>
                    <span className="text-gray-300"><span className="text-white font-medium">False positives kill deals and renewals.</span> #1 complaint on G2/Gartner Peer Insights. Detection engine must be tuned for precision, not just recall.</span>
                  </div>
                  <div className="flex gap-3">
                    <span className="text-cyan-400 font-bold">7.</span>
                    <span className="text-gray-300"><span className="text-white font-medium">Time-to-value is a selection criterion.</span> Buyers explicitly asking "how long until we see value?" Products requiring 2-4 weeks of baselining lose to those with immediate detection.</span>
                  </div>
                </div>
              </div>
            </section>

            {/* Strategic Theses Section */}
            <section id="theses" className="bg-gray-900 border border-gray-800 rounded-xl p-6">
              <h2 className="text-xl font-semibold text-white mb-4 flex items-center gap-2">
                🔮 Strategic Theses
              </h2>
              <p className="text-gray-400 text-sm mb-6">
                Three structural shifts reshaping this market. Not incremental changes—fundamental rewirings of where value is created and captured.
              </p>

              <div className="space-y-6">
                {theses.map((thesis) => (
                  <div
                    key={thesis.id}
                    className={`bg-gray-800/50 rounded-xl p-5 border-l-4 ${getThesisAccent(thesis.color)}`}
                  >
                    <div className="flex items-start justify-between mb-3">
                      <h3 className="text-lg font-semibold text-white">{thesis.title}</h3>
                      <div className="flex items-center gap-2">
                        <span className={`text-xs px-2 py-1 rounded border ${getConfidenceColor(thesis.confidence)}`}>
                          {thesis.confidence}
                        </span>
                        <span className="text-xs text-gray-500">{thesis.timeframe}</span>
                      </div>
                    </div>
                    
                    <p className="text-gray-300 text-sm mb-4">{thesis.claim}</p>
                    
                    <div className="mb-4">
                      <h4 className="text-xs font-medium text-gray-500 uppercase tracking-wider mb-2">EVIDENCE</h4>
                      <ul className="space-y-1">
                        {thesis.evidence.map((item, idx) => (
                          <li key={idx} className="text-gray-400 text-xs flex items-start gap-2">
                            <span className="text-cyan-400">•</span>
                            {item}
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div className="bg-gray-900/50 rounded-lg p-3">
                      <span className="text-cyan-400 font-medium text-xs">Implication: </span>
                      <span className="text-gray-300 text-xs">{thesis.implication}</span>
                    </div>
                  </div>
                ))}
              </div>

              {/* Synthesis */}
              <div className="mt-6 bg-gray-800/30 rounded-lg p-4">
                <h4 className="text-white font-medium mb-3">How These Connect</h4>
                <div className="space-y-2 text-sm">
                  <p className="text-gray-400">
                    <span className="text-cyan-400">Platform absorption</span> → forces standalone vendors to → 
                    <span className="text-cyan-400"> differentiate on detection quality</span>
                  </p>
                  <p className="text-gray-400">
                    <span className="text-purple-400">Encrypted traffic challenge</span> → creates demand for → 
                    <span className="text-purple-400"> behavioral/metadata analysis over decryption</span>
                  </p>
                  <p className="text-gray-400">
                    <span className="text-orange-400">Skills shortage</span> → drives adoption of → 
                    <span className="text-orange-400"> MDR-bundled NDR and GenAI automation</span>
                  </p>
                </div>
              </div>
            </section>

            {/* Recommendations */}
            <section className="bg-gray-900 border border-gray-800 rounded-xl p-6">
              <h2 className="text-xl font-semibold text-white mb-4 flex items-center gap-2">
                🎯 Recommendations
              </h2>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {/* For Buyers */}
                <div className="bg-gray-800/50 rounded-lg p-4">
                  <div className="flex items-center gap-2 mb-3">
                    <span className="w-8 h-8 rounded-full bg-blue-900/50 flex items-center justify-center text-blue-400 font-bold text-sm">B</span>
                    <span className="text-white font-medium">For Enterprise Buyers</span>
                  </div>
                  <ul className="space-y-2 text-sm text-gray-400">
                    <li className="flex items-start gap-2">
                      <span className="text-blue-400">•</span>
                      <span>Evaluate NDR as platform capability unless requiring deep network visibility</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-blue-400">•</span>
                      <span>Prioritize encrypted traffic analysis capability (TLS 1.3 specifically)</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-blue-400">•</span>
                      <span>Consider MDR-bundled NDR if lacking SOC resources</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-blue-400">•</span>
                      <span>Demand zero-baseline time-to-value over learning periods</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-blue-400">•</span>
                      <span>Verify OT/ICS coverage if relevant to your environment</span>
                    </li>
                  </ul>
                </div>

                {/* For Vendors */}
                <div className="bg-gray-800/50 rounded-lg p-4">
                  <div className="flex items-center gap-2 mb-3">
                    <span className="w-8 h-8 rounded-full bg-purple-900/50 flex items-center justify-center text-purple-400 font-bold text-sm">V</span>
                    <span className="text-white font-medium">For Vendors / Product Leaders</span>
                  </div>
                  <ul className="space-y-2 text-sm text-gray-400">
                    <li className="flex items-start gap-2">
                      <span className="text-purple-400">•</span>
                      <span>Decide: platform play, best-of-breed niche, or acquisition target</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-purple-400">•</span>
                      <span>Differentiate on detection quality, not just features</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-purple-400">•</span>
                      <span>Solve the encrypted traffic problem credibly</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-purple-400">•</span>
                      <span>Develop MDR capability or partner—services are the growth vector</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-purple-400">•</span>
                      <span>Integration depth (top 5 platforms) beats breadth (100 connectors)</span>
                    </li>
                  </ul>
                </div>
              </div>
            </section>

            {/* Resources */}
            <section className="bg-gray-900 border border-gray-800 rounded-xl p-6">
              <h2 className="text-xl font-semibold text-white mb-4 flex items-center gap-2">
                📎 Resources
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <a href="#" className="flex items-center gap-3 bg-gray-800/50 hover:bg-gray-800 rounded-lg p-4 transition-colors">
                  <span className="text-2xl">📄</span>
                  <div>
                    <div className="text-white font-medium text-sm">Full Strategic Brief</div>
                    <div className="text-gray-500 text-xs">Complete SRP analysis (PDF)</div>
                  </div>
                </a>
                <a href="#" className="flex items-center gap-3 bg-gray-800/50 hover:bg-gray-800 rounded-lg p-4 transition-colors">
                  <span className="text-2xl">📊</span>
                  <div>
                    <div className="text-white font-medium text-sm">Vendor Comparison Matrix</div>
                    <div className="text-gray-500 text-xs">Side-by-side feature analysis</div>
                  </div>
                </a>
              </div>
            </section>

          </div>
        </div>

        {/* Footer */}
        <footer className="mt-12 pt-8 border-t border-gray-800 text-center text-sm text-gray-500">
          <p>Analysis by Andy Simko • CISSP • GPEN • CISA • GSNA • HCSFP • PMC-Level III</p>
          <p className="mt-1">15+ years in cybersecurity • Methodology: Systematic Research Process (SRP)</p>
        </footer>
      </div>
    </div>
  );
};

export default NDRPage;
