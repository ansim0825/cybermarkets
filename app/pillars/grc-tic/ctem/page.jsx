"use client";

import React, { useState } from 'react';
import { Logo } from '@/components/Logo';

const CTEMPage = () => {
  const [activeSection, setActiveSection] = useState('overview');

  // GRC & TIC sub-segments
  const subSegments = [
    { id: 'ctem', name: 'CTEM', active: true, href: '/pillars/grc-tic/ctem' },
    { id: 'compliance', name: 'Compliance', active: false, href: '#' },
    { id: 'grc', name: 'GRC Platforms', active: false, href: '#' },
    { id: 'security-awareness', name: 'Security Awareness', active: false, href: '#' },
    { id: 'threat-intel', name: 'Threat Intelligence', active: false, href: '#' },
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
    { name: 'Identity', primary: false },
    { name: 'Network & Edge', primary: false },
  ];

  const keyInsights = [
    { stat: '$3.3B+', label: 'Market size (2024)' },
    { stat: '2%', label: 'Of exposures actually threaten critical assets' },
    { stat: '3x', label: 'Less likely to breach with CTEM (Gartner)' },
    { stat: '$84B+', label: '2025 cybersecurity M&A activity' },
  ];

  const marketSizing = [
    { source: 'Grand View Research', val2024: '$3.27B', projection: '$10.9B (2030)', cagr: '22.9%' },
    { source: 'Straits Research', val2024: '$2.54B', projection: '$23.26B (2033)', cagr: '27.9%' },
    { source: 'Global Market Estimates', val2024: '—', projection: '—', cagr: '10.1%' },
  ];

  const marketSubSegments = [
    'Exposure Assessment Platforms (EAP)',
    'Attack Surface Management (ASM/EASM)',
    'Breach & Attack Simulation (BAS)',
    'Adversarial Exposure Validation (AEV)',
    'Vulnerability Prioritization Technology (VPT)',
    'Attack Path Analysis',
    'Remediation Orchestration',
    'Cyber Asset Attack Surface Mgmt (CAASM)',
  ];

  // Top vendors by quadrant positioning
  const competitors = [
    { 
      name: 'Tenable', 
      product: 'Tenable One Exposure Management',
      position: 'Platform Leader', 
      focus: 'Full-stack exposure management. Vulcan Cyber acquisition ($150M) adds remediation orchestration. VPR proprietary prioritization.',
      status: 'in-progress',
      href: '/pillars/grc-tic/ctem/companies/tenable'
    },
    { 
      name: 'Palo Alto Networks', 
      product: 'Cortex XSIAM + Prisma Cloud',
      position: 'Platform Leader', 
      focus: 'CyberArk acquisition ($25B) adds identity exposure. Full security fabric integration. XSIAM AI-driven SOC.',
      status: 'in-progress',
      href: '/pillars/grc-tic/ctem/companies/paloalto'
    },
    { 
      name: 'CrowdStrike', 
      product: 'Falcon Exposure Management',
      position: 'Platform Leader', 
      focus: 'ExPRT.AI combines endpoint telemetry with exposure prioritization. Unified human + NHI protection.',
      status: 'in-progress',
      href: '/pillars/grc-tic/ctem/companies/crowdstrike'
    },
    { 
      name: 'Wiz (Google)', 
      product: 'Wiz Cloud Security Platform',
      position: 'Platform Leader', 
      focus: '$32B Google acquisition. Cloud-native exposure management. Multi-cloud attack path analysis.',
      status: 'in-progress',
      href: '/pillars/grc-tic/ctem/companies/wiz'
    },
    { 
      name: 'Qualys', 
      product: 'Qualys VMDR + TruRisk',
      position: 'Platform Leader', 
      focus: 'Legacy VM transformed to exposure platform. TruRisk quantification. Strong compliance mapping.',
      status: 'in-progress',
      href: '/pillars/grc-tic/ctem/companies/qualys'
    },
    { 
      name: 'Cymulate', 
      product: 'Cymulate Exposure Management',
      position: 'BAS Specialist', 
      focus: 'BAS category leader. Continuous validation. "Proof not theory" positioning. Prime acquisition target.',
      status: 'in-progress',
      href: '/pillars/grc-tic/ctem/companies/cymulate'
    },
    { 
      name: 'Pentera', 
      product: 'Pentera Platform + Resolve',
      position: 'AEV Specialist', 
      focus: 'Automated penetration testing. Pentera Resolve adds remediation orchestration. High-growth trajectory.',
      status: 'in-progress',
      href: '/pillars/grc-tic/ctem/companies/pentera'
    },
    { 
      name: 'XM Cyber', 
      product: 'XM Cyber Continuous Exposure Management',
      position: 'Attack Path Leader', 
      focus: 'Attack path analysis pioneer. Choke point identification. "75% of exposures are dead ends" research.',
      status: 'in-progress',
      href: '/pillars/grc-tic/ctem/companies/xmcyber'
    },
    { 
      name: 'CyCognito', 
      product: 'CyCognito Platform',
      position: 'EASM Specialist', 
      focus: 'External attack surface management leader. Attacker-perspective discovery. Strong mid-market traction.',
      status: 'in-progress',
      href: '/pillars/grc-tic/ctem/companies/cycognito'
    },
    { 
      name: 'Axonius', 
      product: 'Axonius Platform',
      position: 'Asset Intelligence', 
      focus: 'Cyber asset management foundation. 600+ integrations. SaaS Management Platform expansion.',
      status: 'in-progress',
      href: '/pillars/grc-tic/ctem/companies/axonius'
    },
    { 
      name: 'Rapid7', 
      product: 'InsightVM + Command Platform',
      position: 'Visionary', 
      focus: 'Broad exposure capabilities. PE pressure (Jana Partners). Potential acquisition target or acquirer.',
      status: 'in-progress',
      href: '/pillars/grc-tic/ctem/companies/rapid7'
    },
    { 
      name: 'Nozomi Networks', 
      product: 'Nozomi Vantage',
      position: 'OT/IoT Specialist', 
      focus: 'OT/IoT exposure leader. Industrial/critical infrastructure focus. Partnership model for IT vendors.',
      status: 'in-progress',
      href: '/pillars/grc-tic/ctem/companies/nozomi'
    },
    { 
      name: 'SafeBreach', 
      product: 'SafeBreach Platform',
      position: 'BAS Niche', 
      focus: 'BAS specialist. Strong validation capabilities. Acquisition risk within 12-24 months.',
      status: 'in-progress',
      href: '/pillars/grc-tic/ctem/companies/safebreach'
    },
    { 
      name: 'Picus Security', 
      product: 'Picus Security Control Validation',
      position: 'BAS Niche', 
      focus: 'Security control validation. MITRE ATT&CK mapping. High acquisition probability (60%).',
      status: 'in-progress',
      href: '/pillars/grc-tic/ctem/companies/picus'
    },
    { 
      name: 'SAFE Security + Balbix', 
      product: 'SAFE One Platform',
      position: 'Risk Quantification', 
      focus: 'Merged CTEM + CRQ. FAIR-based risk quantification. Board-level risk communication.',
      status: 'in-progress',
      href: '/pillars/grc-tic/ctem/companies/safe'
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
    { name: 'VM → Exposure Management Paradigm Shift', description: 'From CVE lists to exploitable risk in business context. By 2027, 30% less unplanned downtime from exploited vulnerabilities.' },
    { name: 'Platform Consolidation Accelerating', description: '$84B+ in 2025 M&A. Google/Wiz ($32B), Palo Alto/CyberArk ($25B). 3-5 dominant platforms by 2027.' },
    { name: 'Agentic AI for Autonomous Validation', description: 'AI agents shifting from copilot to autonomous. HackerOne Hai, Ridge Security RidgeGen, Zafran Agentic Exposure Management.' },
    { name: 'AI Attack Surface Expansion', description: 'AI vulnerabilities +200%, prompt injection +540% in 2025. CTEM must now address shadow AI and model poisoning.' },
    { name: 'Identity + Exposure Convergence', description: '94% of cyberattacks target identity. Palo Alto/CyberArk signals strategic importance of identity exposure in CTEM.' },
  ];

  const hypePositions = [
    { tech: 'Exposure Assessment Platforms (EAP)', position: 'Innovation Trigger', status: 'emerging', note: 'First Gartner MQ Nov 2025' },
    { tech: 'BAS / Adversarial Exposure Validation', position: 'Peak → Slope Transition', status: 'hot', note: 'Adoption accelerating' },
    { tech: 'Vulnerability Prioritization (VPT)', position: 'Slope of Enlightenment', status: 'rising', note: 'Being absorbed into EAP' },
    { tech: 'PTaaS (Pentest-as-a-Service)', position: 'Early Mainstream', status: 'rising', note: 'Credit models proven' },
    { tech: 'EASM / CAASM', position: 'Trough → Obsolete', status: 'declining', note: 'Gartner declared CAASM obsolete' },
  ];

  const maActivity = [
    { date: '2025', acquirer: 'Google/Alphabet', target: 'Wiz', value: '$32B', signal: 'Cloud-native exposure management' },
    { date: '2025', acquirer: 'Palo Alto Networks', target: 'CyberArk', value: '$25B', signal: 'Identity + Exposure convergence' },
    { date: '2025', acquirer: 'Tenable', target: 'Vulcan Cyber', value: '$150M', signal: 'Remediation orchestration' },
    { date: '2025', acquirer: 'ServiceNow', target: 'Armis', value: '~$1B+', signal: 'OT/IoT asset discovery' },
    { date: '2025', acquirer: 'SAFE Security', target: 'Balbix', value: 'Undisclosed', signal: 'CTEM + Risk Quantification' },
  ];

  const acquisitionRisk = [
    { vendor: 'Rapid7', probability: '65%', acquirers: 'PE firms, Palo Alto, Cisco', timeline: '6-18 months', multiple: '4-6x ARR' },
    { vendor: 'Picus Security', probability: '60%', acquirers: 'Tenable, Qualys, Fortinet', timeline: '6-18 months', multiple: '6-10x ARR' },
    { vendor: 'SafeBreach', probability: '55%', acquirers: 'Palo Alto, IBM, Cisco', timeline: '12-24 months', multiple: '7-11x ARR' },
    { vendor: 'CyCognito', probability: '50%', acquirers: 'CrowdStrike, Palo Alto, Google', timeline: '12-24 months', multiple: '10-14x ARR' },
    { vendor: 'Pentera', probability: '45%', acquirers: 'CrowdStrike, Tenable, Google', timeline: '12-24 months', multiple: '10-15x ARR' },
    { vendor: 'Cymulate', probability: '40%', acquirers: 'Palo Alto, CrowdStrike, Cisco', timeline: '12-24 months', multiple: '8-12x ARR' },
  ];

  const cisoJobs = [
    { job: 'Translate exposure into business risk for board', metric: 'Risk in $; FAIR-based quantification' },
    { job: 'Prove which 2% of exposures actually matter', metric: 'Validated critical exposure count' },
    { job: 'Consolidate tools without losing coverage', metric: 'Tool count reduction; coverage maintained' },
    { job: 'Demonstrate ROI on security investments', metric: '3x breach reduction; measurable MTTR' },
  ];

  const secOpsJobs = [
    { job: 'Know what to fix first without manual analysis', metric: 'Automated prioritization; clear "fix this" guidance' },
    { job: 'Validate that remediations actually work', metric: 'Post-fix validation; verified closure' },
    { job: 'Bridge gap between VM findings and IT action', metric: 'Ticket automation; SLA tracking' },
  ];

  const vmAnalystJobs = [
    { job: 'Escape spreadsheet hell', metric: 'Single console; automated workflows' },
    { job: 'Stop chasing patch status across tools', metric: 'Unified view; remediation tracking' },
    { job: 'Focus on real threats, not noise', metric: '<1% false positive rate' },
  ];

  const tableStakes = [
    'Continuous asset discovery',
    'Multi-environment coverage (cloud, hybrid, on-prem)',
    'Risk-based prioritization (beyond CVSS)',
    'Threat intelligence correlation',
    'ITSM/ticketing integration (ServiceNow, Jira)',
    'Compliance mapping (NIST, CIS, ISO)',
    'Executive dashboards',
    'API-first architecture',
    'SIEM/SOAR integration',
    'Basic reporting & SLAs',
  ];

  const differentiators = [
    { name: 'Validation Capability (Proof, Not Theory)', description: 'BAS/AEV that proves exploitability, not just lists vulnerabilities. Only 2% of exposures matter.' },
    { name: 'Attack Path Analysis + Choke Points', description: 'XM Cyber-style visualization showing paths to crown jewels. 75% of exposures are dead ends.' },
    { name: 'Remediation Orchestration', description: 'Finding is solved; fixing at scale is the battleground. Tenable/Vulcan, Pentera/Resolve models.' },
    { name: 'Risk Quantification in Dollars', description: 'FAIR-based business impact. Board-speak is mandatory. SAFE+Balbix leading.' },
    { name: 'Time-to-Value (<30 Days)', description: 'Mid-market decision criteria #1. Fast deployment with immediate actionable insights.' },
    { name: 'Identity Exposure Integration', description: '94% of attacks target identity. Credential paths, privilege escalation, identity misconfiguration.' },
    { name: 'OT/IoT Coverage', description: 'Most platforms IT-centric. 75% of attacks now target non-traditional assets.' },
  ];

  const roiMetrics = [
    { metric: 'Average US breach cost', value: '$10.22M' },
    { metric: 'Consolidated vs fragmented ROI', value: '101% vs 28% (4x)' },
    { metric: 'Breach risk reduction', value: '90% with proper CTEM' },
    { metric: 'Breach identification time', value: '181 days average' },
  ];

  const investmentBySegment = [
    { segment: 'Enterprise (5,000+)', spend: '$200K-$500K+', timeline: '12-24 months', driver: 'Risk reduction, compliance' },
    { segment: 'Mid-Market (500-5K)', spend: '$50K-$150K', timeline: '6-12 months', driver: 'Consolidation, efficiency' },
    { segment: 'SMB (<500)', spend: 'Via MSSP', timeline: 'Immediate', driver: 'Breach prevention' },
  ];

  const whiteSpaceGaps = [
    { gap: 'Remediation Orchestration', severity: 'Critical', reason: 'Finding is solved; fixing at scale is not' },
    { gap: 'OT/IoT Coverage', severity: 'Critical', reason: 'Most platforms IT-centric; 75% attacks target non-traditional' },
    { gap: 'Identity Exposure', severity: 'High', reason: '94% of attacks target identity systems' },
    { gap: 'Third-Party/Supply Chain', severity: 'High', reason: '30% of breaches involve third parties (doubled YoY)' },
  ];

  const theses = [
    {
      id: 1,
      title: 'Validation > Enumeration',
      timeframe: '2025-2027',
      confidence: 'High',
      color: 'green',
      claim: 'The market has solved finding vulnerabilities. With 20,000+ CVEs annually and 250,000+ open vulnerabilities, winners will be those who prove exploitability, not just enumerate findings.',
      evidence: ['Only 2% of exposures lead to critical assets', '75% of exposures are dead ends (XM Cyber)', 'CVSS called "intellectual bankruptcy"', 'Gartner AEV Market Guide validates validation pillar'],
      implication: 'Evaluate vendors on validation depth. BAS/AEV (Cymulate, Pentera) worth premium pricing.',
    },
    {
      id: 2,
      title: 'Services + Technology Creates Defensible Moats',
      timeframe: '2025-2028',
      confidence: 'High',
      color: 'purple',
      claim: 'Pure technology plays face commoditization. Consolidated platforms achieve 4x ROI vs fragmented (101% vs 28%). The hybrid model justifies $200K-$500K+ enterprise contracts.',
      evidence: ['45-83 tools per org creates "integration tax"', 'TCO 15-20% above sticker price', '51% face cybersecurity skills gap', '5-year TCO can be 5-10x initial purchase'],
      implication: 'Platform consolidation is not optional. Evaluate vendors on integration depth and managed services.',
    },
    {
      id: 3,
      title: 'The Telemetry Wars Have Begun',
      timeframe: '2025-2028',
      confidence: 'Medium-High',
      color: 'orange',
      claim: 'Platform consolidation creates data network effects. More telemetry → better AI prioritization → more customers → more data. Winners are building unified exposure data lakes.',
      evidence: ['CrowdStrike ExPRT.AI endpoint + exposure', 'Tenable VPR proprietary threat intel', 'Wiz/Google multi-cloud exposure data', 'Every vendor claims "AI-powered"—differentiation requires proprietary data'],
      implication: 'AI credibility requires proprietary data, not marketing claims. Evaluate on data sources.',
    },
  ];

  const successMetrics = [
    { metric: 'Critical Exposure Reduction', definition: '% decrease in validated critical exposures', target: '>90%' },
    { metric: 'MTTR (Critical)', definition: 'Time from discovery to remediation', target: 'Hours, not weeks' },
    { metric: 'Coverage Ratio', definition: '% of assets under continuous monitoring', target: '>95%' },
    { metric: 'Validation Rate', definition: '% of exposures tested for exploitability', target: 'Industry lagging' },
    { metric: 'Time-to-First-Value', definition: 'Days from deployment to actionable insights', target: '<30 days' },
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
    <div className="min-h-screen bg-gray-950 text-gray-100">
      {/* Navigation */}
      <nav className="border-b border-gray-800 bg-gray-950/80 backdrop-blur-sm sticky top-0 z-50">
        <div className="max-w-6xl mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <a href="/" className="flex items-center">
                <Logo size="default" />
              </a>
              <span className="text-gray-600 hidden sm:inline">/</span>
              <span className="text-gray-400 hidden sm:inline">GRC & TIC</span>
            </div>
            <div className="flex items-center gap-6 text-sm">
              <a href="/#pillars" className="text-gray-300 hover:text-white">Pillars</a>
              <a href="#theses" className="text-gray-300 hover:text-white">Theses</a>
              <a href="/#about" className="text-gray-400 hover:text-white text-xs">About</a>
            </div>
          </div>
        </div>
      </nav>

      <div className="max-w-6xl mx-auto px-6 py-8">
        
        {/* Sub-segment Navigation */}
        <div className="mb-6">
          <div className="flex items-center gap-2 flex-wrap">
            {subSegments.map((seg) => (
              <a
                key={seg.id}
                href={seg.href}
                className={`text-xs px-3 py-1.5 rounded-full border transition-all ${
                  seg.active 
                    ? 'bg-green-900/50 text-green-400 border-green-700' 
                    : 'bg-gray-800/50 text-gray-500 border-gray-700 hover:text-gray-400 hover:border-gray-600'
                }`}
              >
                {seg.active && <span className="mr-1">●</span>}
                {seg.name}
              </a>
            ))}
          </div>
          
          {/* Related pillars */}
          <div className="flex items-center gap-2 mt-3">
            <span className="text-xs text-gray-600">Also touches:</span>
            {relatedPillars.map((pillar, idx) => (
              <span 
                key={idx}
                className={`text-xs px-2 py-0.5 rounded border ${
                  pillar.primary 
                    ? 'bg-blue-900/30 text-blue-400 border-blue-800' 
                    : 'bg-gray-800/50 text-gray-500 border-gray-800'
                }`}
              >
                {pillar.name}
              </span>
            ))}
          </div>
        </div>
        
        {/* Header */}
        <div className="mb-8">
          <div className="flex items-center gap-3 mb-3">
            <h1 className="text-4xl font-bold">Continuous Threat Exposure Management</h1>
            <span className="text-xs px-2 py-1 bg-purple-900/50 text-purple-400 border border-purple-700 rounded-full">
              NEW CATEGORY
            </span>
          </div>
          <p className="text-xl text-gray-400 mb-4">
            Gartner's framework-to-product transition: the $3B+ market solving the "which 2% matters" problem
          </p>
          
          <div className="flex items-center gap-4 text-sm text-gray-500">
            <span>Last updated: January 2026</span>
            <span>•</span>
            <span>Methodology: SRP Framework</span>
            <span>•</span>
            <span className="text-green-500">● Active research</span>
          </div>
        </div>

        {/* Key Stats Bar */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
          {keyInsights.map((insight, idx) => (
            <div key={idx} className="bg-gray-900 rounded-xl p-4 border border-gray-800">
              <div className="text-2xl font-bold text-white mb-1">{insight.stat}</div>
              <div className="text-xs text-gray-400">{insight.label}</div>
            </div>
          ))}
        </div>

        {/* The 2% Insight Callout */}
        <div className="bg-gradient-to-r from-purple-900/30 via-blue-900/30 to-purple-900/30 rounded-xl p-6 border border-purple-800/50 mb-8">
          <div className="flex items-start gap-4">
            <div className="text-3xl">🎯</div>
            <div>
              <h3 className="font-semibold text-white mb-2">The Core Insight</h3>
              <p className="text-gray-300">
                Organizations accumulate <span className="text-purple-400 font-semibold">250,000+ vulnerabilities</span>, 
                but only <span className="text-green-400 font-semibold">2% actually lead to critical assets</span>. 
                75% represent dead ends with no viable attack path. 
                <span className="text-white font-medium"> CTEM solves the prioritization crisis.</span>
              </p>
            </div>
          </div>
        </div>

        {/* Main Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          
          {/* Left Sidebar - SRP Navigation */}
          <div className="lg:col-span-1">
            <div className="sticky top-24">
              <div className="bg-gray-900 rounded-xl border border-gray-800 p-4 mb-6">
                <h3 className="text-sm font-semibold text-gray-400 mb-3">SRP Analysis</h3>
                <div className="space-y-1">
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
                      <span>{section.name}</span>
                    </button>
                  ))}
                </div>
              </div>

              {/* CTEM Framework Visual */}
              <div className="bg-gray-900 rounded-xl border border-gray-800 p-4">
                <h3 className="text-sm font-semibold text-gray-400 mb-3">CTEM Framework</h3>
                <div className="space-y-2 text-xs">
                  <div className="flex items-center gap-2 p-2 bg-gray-800 rounded">
                    <span className="w-6 h-6 flex items-center justify-center bg-blue-900/50 text-blue-400 rounded font-bold">1</span>
                    <span className="text-gray-300">Scope</span>
                  </div>
                  <div className="flex items-center gap-2 p-2 bg-gray-800 rounded">
                    <span className="w-6 h-6 flex items-center justify-center bg-blue-900/50 text-blue-400 rounded font-bold">2</span>
                    <span className="text-gray-300">Discover</span>
                  </div>
                  <div className="flex items-center gap-2 p-2 bg-gray-800 rounded">
                    <span className="w-6 h-6 flex items-center justify-center bg-purple-900/50 text-purple-400 rounded font-bold">3</span>
                    <span className="text-gray-300">Prioritize</span>
                  </div>
                  <div className="flex items-center gap-2 p-2 bg-green-900/30 rounded border border-green-800/50">
                    <span className="w-6 h-6 flex items-center justify-center bg-green-900/50 text-green-400 rounded font-bold">4</span>
                    <span className="text-green-400">Validate ★</span>
                  </div>
                  <div className="flex items-center gap-2 p-2 bg-gray-800 rounded">
                    <span className="w-6 h-6 flex items-center justify-center bg-orange-900/50 text-orange-400 rounded font-bold">5</span>
                    <span className="text-gray-300">Mobilize</span>
                  </div>
                </div>
                <p className="text-xs text-gray-500 mt-3">★ Validation is the new battleground</p>
              </div>
            </div>
          </div>

          {/* Main Content Area */}
          <div className="lg:col-span-3 space-y-8">
            
            {/* Overview Section */}
            <section id="overview" className="bg-gray-900 rounded-xl border border-gray-800 p-6">
              <h2 className="text-xl font-semibold mb-4 flex items-center gap-2">
                <span>📋</span> Overview
              </h2>
              <div className="prose prose-invert max-w-none">
                <p className="text-gray-300 mb-4">
                  Continuous Threat Exposure Management (CTEM) is Gartner's five-phase programmatic framework 
                  for proactive security: <span className="text-blue-400">Scope → Discover → Prioritize → Validate → Mobilize</span>. 
                  In November 2025, Gartner published its inaugural Magic Quadrant for Exposure Assessment Platforms (EAPs), 
                  signaling CTEM's official transition from framework to product category.
                </p>
                <p className="text-gray-300 mb-4">
                  Traditional vulnerability management (finding CVEs, CVSS-based prioritization) is giving way to 
                  exposure management (exploitable risk in business context). The market is consolidating rapidly—
                  VM, RBVM, ASM, CAASM, ASPM, BAS, and CTEM are converging into unified platforms.
                </p>
                <div className="bg-gray-800 rounded-lg p-4 border border-gray-700">
                  <h4 className="font-medium text-white mb-2">What Makes This Market Unique</h4>
                  <ul className="text-sm text-gray-400 space-y-2">
                    <li>• <strong className="text-gray-300">Framework-to-category transition:</strong> Following Zero Trust, XDR, SASE trajectory</li>
                    <li>• <strong className="text-gray-300">Dual-market positioning:</strong> Spans both SecOps (reactive) and GRC (proactive)</li>
                    <li>• <strong className="text-gray-300">The 2% insight:</strong> Prioritization efficiency is the core value proposition</li>
                    <li>• <strong className="text-gray-300">Obsolescence signals:</strong> Gartner marking CAASM, EASM, XDR, SOAR as 'obsolete'</li>
                    <li>• <strong className="text-gray-300">Remediation as battleground:</strong> Finding is solved; fixing at scale is not</li>
                  </ul>
                </div>
              </div>
            </section>

            {/* Market Structure Section */}
            <section id="structure" className="bg-gray-900 rounded-xl border border-gray-800 p-6">
              <h2 className="text-xl font-semibold mb-4 flex items-center gap-2">
                <span>🏗️</span> Market Structure
              </h2>
              
              {/* Market Sizing */}
              <div className="mb-6">
                <h3 className="text-sm font-semibold text-gray-400 mb-3">Market Size & Growth</h3>
                <div className="bg-gray-800 rounded-lg overflow-hidden">
                  <table className="w-full text-sm">
                    <thead>
                      <tr className="border-b border-gray-700">
                        <th className="text-left p-3 text-gray-400 font-medium">Source</th>
                        <th className="text-left p-3 text-gray-400 font-medium">2024</th>
                        <th className="text-left p-3 text-gray-400 font-medium">Projection</th>
                        <th className="text-left p-3 text-gray-400 font-medium">CAGR</th>
                      </tr>
                    </thead>
                    <tbody>
                      {marketSizing.map((row, idx) => (
                        <tr key={idx} className="border-b border-gray-700/50 last:border-0">
                          <td className="p-3 text-gray-300">{row.source}</td>
                          <td className="p-3 text-gray-400">{row.val2024}</td>
                          <td className="p-3 text-gray-400">{row.projection}</td>
                          <td className="p-3 text-green-400">{row.cagr}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
                <p className="text-xs text-gray-500 mt-2">Note: Market size varies by definition, reflecting category boundaries still being established.</p>
              </div>

              {/* Sub-segments */}
              <div className="mb-6">
                <h3 className="text-sm font-semibold text-gray-400 mb-3">CTEM Sub-Segments (Converging)</h3>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
                  {marketSubSegments.map((seg, idx) => (
                    <div key={idx} className="px-3 py-2 bg-gray-800 rounded-lg text-xs text-gray-300">
                      {seg}
                    </div>
                  ))}
                </div>
              </div>

              {/* White Space Gaps */}
              <div className="mb-6">
                <h3 className="text-sm font-semibold text-gray-400 mb-3">White Space Opportunities</h3>
                <div className="space-y-2">
                  {whiteSpaceGaps.map((gap, idx) => (
                    <div key={idx} className="flex items-center justify-between p-3 bg-gray-800 rounded-lg">
                      <span className="text-gray-300 text-sm">{gap.gap}</span>
                      <div className="flex items-center gap-3">
                        <span className="text-xs text-gray-500">{gap.reason}</span>
                        <span className={`text-xs px-2 py-1 rounded ${
                          gap.severity === 'Critical' ? 'bg-red-900/50 text-red-400' : 'bg-yellow-900/50 text-yellow-400'
                        }`}>{gap.severity}</span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Competitive Landscape */}
              <div>
                <div className="flex items-center justify-between mb-3">
                  <h3 className="text-sm font-semibold text-gray-400">Top 15 Vendors by Positioning (2025)</h3>
                  <div className="flex items-center gap-4 text-xs">
                    <div className="flex items-center gap-1">
                      <span className="w-2 h-2 rounded-full bg-green-400"></span>
                      <span className="text-gray-500">Complete</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <span className="w-2 h-2 rounded-full bg-yellow-400"></span>
                      <span className="text-gray-500">In Progress</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <span className="w-2 h-2 rounded-full bg-gray-500"></span>
                      <span className="text-gray-500">Pending</span>
                    </div>
                  </div>
                </div>
                <div className="space-y-3">
                  {competitors.map((comp, idx) => {
                    const statusStyle = getStatusStyle(comp.status);
                    return (
                      <a 
                        key={idx} 
                        href={comp.href}
                        className="flex items-center justify-between p-3 bg-gray-800 rounded-lg hover:bg-gray-750 hover:border-gray-600 border border-transparent transition-all group"
                      >
                        <div className="flex-1 min-w-0">
                          <div className="flex items-center gap-2">
                            <span className="font-medium text-white group-hover:text-blue-400 transition-colors">{comp.name}</span>
                            <span className="text-xs text-gray-600">•</span>
                            <span className="text-xs text-gray-500 truncate">{comp.product}</span>
                          </div>
                          <div className="text-xs text-gray-500 mt-1 line-clamp-2">{comp.focus}</div>
                        </div>
                        <div className="flex items-center gap-3 ml-4">
                          <span className="text-xs px-2 py-1 bg-gray-700 rounded text-gray-400 whitespace-nowrap">
                            {comp.position}
                          </span>
                          <div className={`flex items-center gap-1.5 px-2 py-1 rounded text-xs ${statusStyle.bg}`}>
                            <span className={`w-2 h-2 rounded-full ${statusStyle.dot}`}></span>
                            <span className={statusStyle.text}>{statusStyle.label}</span>
                          </div>
                          <svg className="w-4 h-4 text-gray-600 group-hover:text-blue-400 transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                          </svg>
                        </div>
                      </a>
                    );
                  })}
                </div>
              </div>
            </section>

            {/* Market Dynamics Section */}
            <section id="motion" className="bg-gray-900 rounded-xl border border-gray-800 p-6">
              <h2 className="text-xl font-semibold mb-4 flex items-center gap-2">
                <span>📈</span> Market Dynamics
              </h2>

              {/* Hype Cycle */}
              <div className="mb-6">
                <h3 className="text-sm font-semibold text-gray-400 mb-3">Hype Cycle Positioning (2025)</h3>
                <div className="space-y-2">
                  {hypePositions.map((item, idx) => (
                    <div key={idx} className="flex items-center justify-between p-3 bg-gray-800 rounded-lg">
                      <div className="flex-1">
                        <span className="text-gray-300 text-sm">{item.tech}</span>
                        <span className="text-xs text-gray-600 ml-2">— {item.note}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <span className={`w-2 h-2 rounded-full ${
                          item.status === 'hot' ? 'bg-red-500' :
                          item.status === 'rising' ? 'bg-green-500' :
                          item.status === 'declining' ? 'bg-yellow-500' :
                          'bg-blue-500'
                        }`}></span>
                        <span className="text-xs px-2 py-1 bg-gray-700 rounded text-gray-400">{item.position}</span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Major Trends */}
              <div className="mb-6">
                <h3 className="text-sm font-semibold text-gray-400 mb-3">5 Key Market Trends (2025-2026)</h3>
                <div className="space-y-3">
                  {trends.map((trend, idx) => (
                    <div key={idx} className="p-3 bg-gray-800 rounded-lg border-l-2 border-blue-500">
                      <div className="font-medium text-white text-sm">{trend.name}</div>
                      <div className="text-xs text-gray-400 mt-1">{trend.description}</div>
                    </div>
                  ))}
                </div>
              </div>

              {/* M&A Activity */}
              <div className="mb-6">
                <h3 className="text-sm font-semibold text-gray-400 mb-3">M&A Consolidation ($84B+ in 2025)</h3>
                <div className="bg-gray-800 rounded-lg overflow-hidden">
                  <table className="w-full text-sm">
                    <thead>
                      <tr className="border-b border-gray-700">
                        <th className="text-left p-3 text-gray-400 font-medium">Acquirer</th>
                        <th className="text-left p-3 text-gray-400 font-medium">Target</th>
                        <th className="text-left p-3 text-gray-400 font-medium">Value</th>
                        <th className="text-left p-3 text-gray-400 font-medium">Strategic Signal</th>
                      </tr>
                    </thead>
                    <tbody>
                      {maActivity.map((row, idx) => (
                        <tr key={idx} className="border-b border-gray-700/50 last:border-0">
                          <td className="p-3 text-gray-300">{row.acquirer}</td>
                          <td className="p-3 text-white font-medium">{row.target}</td>
                          <td className="p-3 text-green-400">{row.value}</td>
                          <td className="p-3 text-gray-400 text-xs">{row.signal}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>

              {/* Acquisition Risk */}
              <div>
                <h3 className="text-sm font-semibold text-gray-400 mb-3">Acquisition Risk Assessment</h3>
                <div className="bg-gray-800 rounded-lg overflow-hidden">
                  <table className="w-full text-sm">
                    <thead>
                      <tr className="border-b border-gray-700">
                        <th className="text-left p-3 text-gray-400 font-medium">Vendor</th>
                        <th className="text-left p-3 text-gray-400 font-medium">Probability</th>
                        <th className="text-left p-3 text-gray-400 font-medium">Likely Acquirers</th>
                        <th className="text-left p-3 text-gray-400 font-medium">Timeline</th>
                      </tr>
                    </thead>
                    <tbody>
                      {acquisitionRisk.map((row, idx) => (
                        <tr key={idx} className="border-b border-gray-700/50 last:border-0">
                          <td className="p-3 text-gray-300">{row.vendor}</td>
                          <td className="p-3">
                            <span className={`text-xs px-2 py-1 rounded ${
                              parseInt(row.probability) >= 60 ? 'bg-red-900/50 text-red-400' :
                              parseInt(row.probability) >= 50 ? 'bg-yellow-900/50 text-yellow-400' :
                              'bg-gray-700 text-gray-400'
                            }`}>{row.probability}</span>
                          </td>
                          <td className="p-3 text-gray-400 text-xs">{row.acquirers}</td>
                          <td className="p-3 text-gray-400 text-xs">{row.timeline}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            </section>

            {/* Stakeholders Section */}
            <section id="stakeholders" className="bg-gray-900 rounded-xl border border-gray-800 p-6">
              <h2 className="text-xl font-semibold mb-4 flex items-center gap-2">
                <span>👥</span> Stakeholders
              </h2>

              {/* CISO JTBD */}
              <div className="mb-6">
                <h3 className="text-sm font-semibold text-gray-400 mb-3">CISO / Security Leadership</h3>
                <div className="bg-gray-800/50 rounded-lg p-4 border border-gray-700 mb-3">
                  <p className="text-sm text-gray-300 italic">
                    "Translate exposure into business risk so I can justify budget, demonstrate progress, and protect myself legally."
                  </p>
                </div>
                <div className="bg-gray-800 rounded-lg overflow-hidden">
                  <table className="w-full text-sm">
                    <thead>
                      <tr className="border-b border-gray-700">
                        <th className="text-left p-3 text-gray-400 font-medium">Job Statement</th>
                        <th className="text-left p-3 text-gray-400 font-medium">Success Metric</th>
                      </tr>
                    </thead>
                    <tbody>
                      {cisoJobs.map((row, idx) => (
                        <tr key={idx} className="border-b border-gray-700/50 last:border-0">
                          <td className="p-3 text-gray-300">{row.job}</td>
                          <td className="p-3 text-gray-400 text-xs">{row.metric}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>

              {/* SecOps Manager JTBD */}
              <div className="mb-6">
                <h3 className="text-sm font-semibold text-gray-400 mb-3">SecOps Manager / VM Lead</h3>
                <div className="bg-gray-800/50 rounded-lg p-4 border border-gray-700 mb-3">
                  <p className="text-sm text-gray-300 italic">
                    "Show me what actually matters so my team can fix the right things before attackers exploit them."
                  </p>
                </div>
                <div className="bg-gray-800 rounded-lg overflow-hidden">
                  <table className="w-full text-sm">
                    <thead>
                      <tr className="border-b border-gray-700">
                        <th className="text-left p-3 text-gray-400 font-medium">Job Statement</th>
                        <th className="text-left p-3 text-gray-400 font-medium">Success Metric</th>
                      </tr>
                    </thead>
                    <tbody>
                      {secOpsJobs.map((row, idx) => (
                        <tr key={idx} className="border-b border-gray-700/50 last:border-0">
                          <td className="p-3 text-gray-300">{row.job}</td>
                          <td className="p-3 text-gray-400 text-xs">{row.metric}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>

              {/* VM Analyst JTBD */}
              <div className="mb-6">
                <h3 className="text-sm font-semibold text-gray-400 mb-3">VM Analyst / Security Engineer</h3>
                <div className="bg-gray-800/50 rounded-lg p-4 border border-gray-700 mb-3">
                  <p className="text-sm text-gray-300 italic">
                    "Automate the boring stuff so I can focus on actual security work instead of chasing patch status."
                  </p>
                </div>
                <div className="bg-gray-800 rounded-lg overflow-hidden">
                  <table className="w-full text-sm">
                    <thead>
                      <tr className="border-b border-gray-700">
                        <th className="text-left p-3 text-gray-400 font-medium">Job Statement</th>
                        <th className="text-left p-3 text-gray-400 font-medium">Success Metric</th>
                      </tr>
                    </thead>
                    <tbody>
                      {vmAnalystJobs.map((row, idx) => (
                        <tr key={idx} className="border-b border-gray-700/50 last:border-0">
                          <td className="p-3 text-gray-300">{row.job}</td>
                          <td className="p-3 text-gray-400 text-xs">{row.metric}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>

              {/* Key Pain Point */}
              <div className="bg-red-900/20 border border-red-800/50 rounded-lg p-4">
                <h4 className="text-sm font-semibold text-red-400 mb-2">The Core Pain</h4>
                <p className="text-sm text-gray-300">
                  88% of organizations still suffer incidents despite significant security investments. 
                  The problem isn't finding vulnerabilities—it's finding the ones that matter and fixing them. 
                  20,000+ CVEs disclosed annually, 72% report severe productivity losses from false positive alerts, 
                  and only 25% trust their security tool data.
                </p>
              </div>
            </section>

            {/* Economics Section */}
            <section id="economics" className="bg-gray-900 rounded-xl border border-gray-800 p-6">
              <h2 className="text-xl font-semibold mb-4 flex items-center gap-2">
                <span>💰</span> Economics & ROI
              </h2>

              {/* ROI Metrics */}
              <div className="mb-6">
                <h3 className="text-sm font-semibold text-gray-400 mb-3">The Business Case</h3>
                <div className="grid grid-cols-2 gap-4">
                  {roiMetrics.map((item, idx) => (
                    <div key={idx} className="bg-gray-800 rounded-lg p-4">
                      <div className="text-lg font-bold text-white">{item.value}</div>
                      <div className="text-xs text-gray-400">{item.metric}</div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Investment by Segment */}
              <div className="mb-6">
                <h3 className="text-sm font-semibold text-gray-400 mb-3">Investment by Segment</h3>
                <div className="bg-gray-800 rounded-lg overflow-hidden">
                  <table className="w-full text-sm">
                    <thead>
                      <tr className="border-b border-gray-700">
                        <th className="text-left p-3 text-gray-400 font-medium">Segment</th>
                        <th className="text-left p-3 text-gray-400 font-medium">Annual Spend</th>
                        <th className="text-left p-3 text-gray-400 font-medium">ROI Timeline</th>
                        <th className="text-left p-3 text-gray-400 font-medium">Key Driver</th>
                      </tr>
                    </thead>
                    <tbody>
                      {investmentBySegment.map((row, idx) => (
                        <tr key={idx} className="border-b border-gray-700/50 last:border-0">
                          <td className="p-3 text-gray-300">{row.segment}</td>
                          <td className="p-3 text-green-400 font-medium">{row.spend}</td>
                          <td className="p-3 text-gray-400">{row.timeline}</td>
                          <td className="p-3 text-gray-400 text-xs">{row.driver}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>

              {/* ROI Calculation */}
              <div className="bg-green-900/20 border border-green-800/50 rounded-lg p-4">
                <h4 className="text-sm font-semibold text-green-400 mb-3">Sample ROI Calculation (Enterprise)</h4>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-sm mb-4">
                  <div>
                    <div className="text-gray-400">Breach Prevention</div>
                    <div className="text-white font-medium">$1.02M</div>
                    <div className="text-xs text-gray-500">$10.22M × 10% reduction</div>
                  </div>
                  <div>
                    <div className="text-gray-400">MTTR Improvement</div>
                    <div className="text-white font-medium">$150K</div>
                    <div className="text-xs text-gray-500">30% faster × analyst hours</div>
                  </div>
                  <div>
                    <div className="text-gray-400">Tool Consolidation</div>
                    <div className="text-white font-medium">$200K</div>
                    <div className="text-xs text-gray-500">3 tools retired</div>
                  </div>
                  <div>
                    <div className="text-gray-400">Compliance Efficiency</div>
                    <div className="text-white font-medium">$75K</div>
                    <div className="text-xs text-gray-500">Audit prep reduction</div>
                  </div>
                </div>
                <div className="border-t border-green-800/50 pt-3 flex justify-between items-center">
                  <div>
                    <span className="text-gray-400">Platform Cost:</span>
                    <span className="text-white ml-2">$300K/year</span>
                  </div>
                  <div>
                    <span className="text-gray-400">Total Value:</span>
                    <span className="text-green-400 font-bold ml-2">$1.445M → 382% ROI</span>
                  </div>
                </div>
              </div>
            </section>

            {/* PM Strategy Section */}
            <section id="product" className="bg-gray-900 rounded-xl border border-gray-800 p-6">
              <h2 className="text-xl font-semibold mb-4 flex items-center gap-2">
                <span>🎯</span> PM Strategic Elements
              </h2>
              
              {/* Table Stakes */}
              <div className="mb-6">
                <h3 className="text-sm font-semibold text-gray-400 mb-3">Table Stakes (Must-Have for RFP)</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
                  {tableStakes.map((feature, idx) => (
                    <div key={idx} className="flex items-center gap-2 text-sm text-gray-300">
                      <span className="text-green-500">✓</span>
                      {feature}
                    </div>
                  ))}
                </div>
                <p className="text-xs text-gray-500 mt-3">
                  Missing any of these = immediate RFP disqualification. These are no longer differentiators.
                </p>
              </div>

              {/* Differentiators */}
              <div className="mb-6">
                <h3 className="text-sm font-semibold text-gray-400 mb-3">Key Differentiators (What Wins Deals)</h3>
                <div className="space-y-3">
                  {differentiators.map((diff, idx) => (
                    <div key={idx} className="p-3 bg-gray-800 rounded-lg border-l-2 border-blue-500">
                      <div className="font-medium text-white text-sm">{diff.name}</div>
                      <div className="text-xs text-gray-400">{diff.description}</div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Success Metrics */}
              <div className="mb-6">
                <h3 className="text-sm font-semibold text-gray-400 mb-3">Key Success Metrics</h3>
                <div className="bg-gray-800 rounded-lg overflow-hidden">
                  <table className="w-full text-sm">
                    <thead>
                      <tr className="border-b border-gray-700">
                        <th className="text-left p-3 text-gray-400 font-medium">Metric</th>
                        <th className="text-left p-3 text-gray-400 font-medium">Definition</th>
                        <th className="text-left p-3 text-gray-400 font-medium">Target</th>
                      </tr>
                    </thead>
                    <tbody>
                      {successMetrics.map((row, idx) => (
                        <tr key={idx} className="border-b border-gray-700/50 last:border-0">
                          <td className="p-3 text-white font-medium">{row.metric}</td>
                          <td className="p-3 text-gray-400 text-xs">{row.definition}</td>
                          <td className="p-3 text-green-400">{row.target}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>

              {/* If I'm a PM Here Box */}
              <div className="bg-gradient-to-br from-blue-900/30 to-purple-900/30 rounded-xl p-6 border border-blue-800">
                <h3 className="font-semibold text-white mb-4 flex items-center gap-2">
                  <span>💡</span> If I am a PM Here, I Need to Know...
                </h3>
                <div className="space-y-3 text-sm">
                  <div className="flex gap-3">
                    <span className="text-blue-400 font-bold">1.</span>
                    <span className="text-gray-300">The market has solved finding vulnerabilities. Proving which 2% matter is the new battleground.</span>
                  </div>
                  <div className="flex gap-3">
                    <span className="text-blue-400 font-bold">2.</span>
                    <span className="text-gray-300">Validation (BAS/AEV) commands premium pricing. "Proof not theory" differentiates.</span>
                  </div>
                  <div className="flex gap-3">
                    <span className="text-blue-400 font-bold">3.</span>
                    <span className="text-gray-300">Platform consolidation is not optional. 4x ROI (101% vs 28%) for consolidated vs. fragmented.</span>
                  </div>
                  <div className="flex gap-3">
                    <span className="text-blue-400 font-bold">4.</span>
                    <span className="text-gray-300">Remediation orchestration is the white space. Finding → Fix → Verify is incomplete in most platforms.</span>
                  </div>
                  <div className="flex gap-3">
                    <span className="text-blue-400 font-bold">5.</span>
                    <span className="text-gray-300">Time-to-value is #1 mid-market criteria. Target &lt;30 days to actionable insights.</span>
                  </div>
                  <div className="flex gap-3">
                    <span className="text-blue-400 font-bold">6.</span>
                    <span className="text-gray-300">CAASM and EASM are explicitly obsolete (Gartner). Do NOT buy standalone.</span>
                  </div>
                  <div className="flex gap-3">
                    <span className="text-blue-400 font-bold">7.</span>
                    <span className="text-gray-300">18-month window for BAS specialists—position for acquisition or scale rapidly.</span>
                  </div>
                  <div className="flex gap-3">
                    <span className="text-blue-400 font-bold">8.</span>
                    <span className="text-gray-300">AI credibility requires proprietary data. "AI-powered" marketing claims are noise.</span>
                  </div>
                </div>
              </div>
            </section>

            {/* Strategic Theses Section */}
            <section id="theses" className="bg-gray-900 rounded-xl border border-gray-800 p-6">
              <h2 className="text-xl font-semibold mb-2 flex items-center gap-2">
                <span>🔮</span> Strategic Theses
              </h2>
              <p className="text-gray-400 text-sm mb-6">
                Three structural shifts reshaping this market. Not incremental changes—fundamental rewirings of where value is created and captured.
              </p>

              <div className="space-y-4">
                {theses.map((thesis) => (
                  <div 
                    key={thesis.id}
                    className={`bg-gray-800 rounded-lg p-4 border-l-4 ${getThesisAccent(thesis.color)}`}
                  >
                    <div className="flex items-start justify-between mb-2">
                      <h3 className="font-semibold text-white">{thesis.title}</h3>
                      <div className="flex items-center gap-2 ml-3">
                        <span className={`text-xs px-2 py-0.5 rounded-full border ${getConfidenceColor(thesis.confidence)}`}>
                          {thesis.confidence}
                        </span>
                        <span className="text-xs text-gray-500">{thesis.timeframe}</span>
                      </div>
                    </div>
                    
                    <p className="text-sm text-gray-300 mb-3">{thesis.claim}</p>
                    
                    <div className="mb-3">
                      <div className="text-xs font-semibold text-gray-500 mb-1">EVIDENCE</div>
                      <div className="flex flex-wrap gap-2">
                        {thesis.evidence.map((item, idx) => (
                          <span key={idx} className="text-xs px-2 py-1 bg-gray-700 rounded text-gray-300">
                            {item}
                          </span>
                        ))}
                      </div>
                    </div>

                    <div className="text-xs text-gray-400 border-t border-gray-700 pt-3">
                      <span className="font-semibold text-gray-300">Implication: </span>
                      {thesis.implication}
                    </div>
                  </div>
                ))}
              </div>

              {/* Synthesis */}
              <div className="mt-6 bg-gray-800/50 rounded-lg p-4 border border-gray-700">
                <h4 className="text-sm font-semibold text-gray-300 mb-2">How These Connect</h4>
                <div className="font-mono text-xs text-gray-400 space-y-1">
                  <div>Enumeration commoditizes → <span className="text-green-400">value shifts to</span> → Validation</div>
                  <div>Validation proves risk → <span className="text-purple-400">enables</span> → Platform consolidation ROI</div>
                  <div>Platform consolidation → <span className="text-orange-400">creates</span> → Telemetry data moats</div>
                </div>
              </div>
            </section>

            {/* Recommendations */}
            <section className="bg-gray-900 rounded-xl border border-gray-800 p-6">
              <h2 className="text-xl font-semibold mb-4 flex items-center gap-2">
                <span>🎯</span> Recommendations
              </h2>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {/* For Buyers */}
                <div className="bg-gray-800 rounded-lg p-4">
                  <h3 className="font-semibold text-white mb-3 flex items-center gap-2">
                    <span className="w-6 h-6 bg-blue-900/50 rounded flex items-center justify-center text-blue-400 text-xs">B</span>
                    For Enterprise Buyers
                  </h3>
                  <ul className="space-y-2 text-sm text-gray-300">
                    <li>• Pursue platform consolidation with validation depth</li>
                    <li>• Do NOT buy standalone CAASM or EASM (obsolete)</li>
                    <li>• Treat BAS/AEV as strategic—best-of-breed worth premium</li>
                    <li>• Evaluate vendor roadmaps, not just current capabilities</li>
                    <li>• Require risk quantification in dollars—board-speak mandatory</li>
                  </ul>
                </div>

                {/* For Vendors */}
                <div className="bg-gray-800 rounded-lg p-4">
                  <h3 className="font-semibold text-white mb-3 flex items-center gap-2">
                    <span className="w-6 h-6 bg-purple-900/50 rounded flex items-center justify-center text-purple-400 text-xs">V</span>
                    For Vendors / Product Leaders
                  </h3>
                  <ul className="space-y-2 text-sm text-gray-300">
                    <li>• Own validation and remediation orchestration</li>
                    <li>• Integration ecosystem depth determines adoption</li>
                    <li>• Time-to-value is #1 mid-market decision criteria</li>
                    <li>• AI credibility requires proprietary data</li>
                    <li>• 18-month window for BAS specialists—position accordingly</li>
                  </ul>
                </div>
              </div>
            </section>

            {/* Resources */}
            <section className="bg-gray-900 rounded-xl border border-gray-800 p-6">
              <h2 className="text-xl font-semibold mb-4 flex items-center gap-2">
                <span>📎</span> Resources
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <a href="#" className="flex items-center gap-3 p-4 bg-gray-800 hover:bg-gray-700 rounded-lg transition-colors">
                  <span className="text-2xl">📄</span>
                  <div>
                    <div className="font-medium">Full CTEM Market Guide</div>
                    <div className="text-xs text-gray-500">Complete SRP analysis (PDF)</div>
                  </div>
                </a>
                <a href="#" className="flex items-center gap-3 p-4 bg-gray-800 hover:bg-gray-700 rounded-lg transition-colors">
                  <span className="text-2xl">📊</span>
                  <div>
                    <div className="font-medium">CTEM Market Brief</div>
                    <div className="text-xs text-gray-500">Executive summary (1-pager)</div>
                  </div>
                </a>
              </div>
            </section>

          </div>
        </div>

        {/* Footer */}
        <footer className="mt-12 pt-8 border-t border-gray-800 text-center text-gray-500 text-sm">
          <p>Analysis by Andy Simko • CISSP • GPEN • CISA • GSNA • HCSFP • PMC-Level III</p>
          <p className="mt-1 text-gray-600">15+ years in cybersecurity • Methodology: Systematic Research Process (SRP)</p>
        </footer>
      </div>
    </div>
  );
};

export default CTEMPage;
