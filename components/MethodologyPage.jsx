"use client";

import React, { useState } from 'react';
import { Logo } from './Logo';

const MethodologyPage = () => {
  const [activePhase, setActivePhase] = useState('structure');

  const phases = [
    {
      id: 'structure',
      name: 'Structure',
      subtitle: 'Market Architecture',
      icon: '🏗️',
      color: 'blue',
      questions: [
        'Where does this fit in the 6 Pillars model?',
        'What are the sub-segments/ribs?',
        'Who are the top 10 vendors by consensus?',
        "What's the market size and growth rate?",
      ],
      activities: [
        'Identify Gartner Magic Quadrant + Forrester Wave',
        'Pull IDC MarketScape and spending forecasts',
        'Map to G2/TrustRadius user ratings',
      ],
      output: 'Market map with size, segments, and vendor positioning',
    },
    {
      id: 'dynamics',
      name: 'Dynamics',
      subtitle: 'Market Motion',
      icon: '📈',
      color: 'purple',
      questions: [
        "What's the hype cycle position?",
        'What are the 3-5 major trends for 2025-2026?',
        'Is this consolidating or fragmenting?',
        "What's replacing what, if any?",
      ],
      activities: [
        'Review latest Gartner Hype Cycle positioning',
        'Check vendor press releases from past 6 months',
        'Identify M&A activity (consolidation signals)',
        'Document 3-5 "Market Shifts for 2025" bullets',
      ],
      output: 'Trend analysis with directional indicators',
    },
    {
      id: 'stakeholders',
      name: 'Stakeholders',
      subtitle: 'Multi-Perspective Analysis',
      icon: '👥',
      color: 'green',
      questions: [
        'Analyst consensus: What do Gartner/Forrester/IDC say?',
        'CISO priorities: What pain are they trying to solve?',
        "PM imperatives: What's table stakes vs. differentiator?",
        'End user JTBD: What are they actually hiring this for?',
      ],
      activities: [
        'Check CIO/CISO survey data (Gartner, ESG)',
        'Read the "Critical Capabilities" documents',
        'Review G2 reviews for "what users wish it did better"',
        'Create pain/gain/JTBD profiles',
      ],
      output: 'Stakeholder profiles with jobs-to-be-done',
    },
    {
      id: 'economics',
      name: 'Economics',
      subtitle: 'Value & ROI',
      icon: '💰',
      color: 'yellow',
      questions: [
        'What are the primary ROI metrics (MTTR, MTTD, cost savings)?',
        'What pricing models dominate (per-user, data ingestion)?',
        'Budget allocation trends—increasing, flat, or consolidating?',
        'What are the hidden TCO considerations?',
      ],
      activities: [
        'Build ROI Calculation Framework',
        'Document pricing model comparisons',
        'Identify budget allocation trends',
        'Create economic synthesis with key takeaways',
      ],
      output: 'ROI framework and business case template',
    },
    {
      id: 'product',
      name: 'Product',
      subtitle: 'PM Strategic Elements',
      icon: '🎯',
      color: 'red',
      questions: [
        'What\'s the minimum viable feature set (2025 baseline)?',
        'Where does value competition actually happen?',
        'What integration requirements matter (API-first, ecosystem)?',
        'What wins deals vs. what\'s just table stakes?',
      ],
      activities: [
        'Document table-stakes features (required for RFP)',
        'Identify 5-7 key differentiators',
        'Create PM strategic checklist',
        'Summarize in "If I\'m a PM here, I need to know..." format',
      ],
      output: '1-page strategic brief for product leaders',
    },
  ];

  const strategicBrief = [
    { section: 'Executive Summary', pages: '2 pages', items: ['3 strategic theses in plain language', 'Recommended positioning for company', 'Why this wins in 2025-2026'] },
    { section: 'Market Structure & Dynamics', pages: '4 pages', items: ['Hype cycle positioning (with visual)', 'Market sizing with sources ($X billion, Y% CAGR)', 'Key trends (Agentic SOC, Platform Consolidation, Identity-first)'] },
    { section: 'Competitive Landscape', pages: '4 pages', items: ['Positioning matrix (with visual)', 'Top 5 competitors analyzed', "Company's current position and opportunity"] },
    { section: 'Strategic Theses', pages: '4 pages', items: ['Thesis 1 with supporting evidence', 'Thesis 2 with unit economics', 'Thesis 3 with data flywheel diagram'] },
    { section: 'Recommendation Strategy', pages: '3 pages', items: ['Specific positioning statement', 'Build/buy/partner decisions', '18-month priority roadmap', 'Success metrics'] },
    { section: 'Appendix', pages: '3 pages', items: ['Source bibliography', 'Additional vendor intelligence', 'Risk factors / pressure testing'] },
  ];

  const getColorClasses = (color, isActive) => {
    const colors = {
      blue: isActive ? 'bg-blue-900/50 border-blue-500 text-blue-400' : 'border-gray-700 hover:border-blue-500/50',
      purple: isActive ? 'bg-purple-900/50 border-purple-500 text-purple-400' : 'border-gray-700 hover:border-purple-500/50',
      green: isActive ? 'bg-green-900/50 border-green-500 text-green-400' : 'border-gray-700 hover:border-green-500/50',
      yellow: isActive ? 'bg-yellow-900/50 border-yellow-500 text-yellow-400' : 'border-gray-700 hover:border-yellow-500/50',
      red: isActive ? 'bg-red-900/50 border-red-500 text-red-400' : 'border-gray-700 hover:border-red-500/50',
    };
    return colors[color];
  };

  const getAccentColor = (color) => {
    const colors = {
      blue: 'text-blue-400',
      purple: 'text-purple-400',
      green: 'text-green-400',
      yellow: 'text-yellow-400',
      red: 'text-red-400',
    };
    return colors[color];
  };

  const activePhaseData = phases.find(p => p.id === activePhase);

  return (
    <div className="min-h-screen bg-gray-950 text-gray-100">
      {/* Navigation */}
      <nav className="border-b border-gray-800 bg-gray-950/80 backdrop-blur-sm sticky top-0 z-50">
        <div className="max-w-5xl mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <a href="/" className="flex items-center">
                <Logo size="default" />
              </a>
              <span className="text-gray-600 hidden sm:inline">/</span>
              <span className="text-gray-400 hidden sm:inline">Methodology</span>
            </div>
            <div className="flex items-center gap-6 text-sm">
              <a href="/#pillars" className="text-gray-300 hover:text-white transition-colors">Pillars</a>
              <a href="/#about" className="text-gray-400 hover:text-white transition-colors">About</a>
            </div>
          </div>
        </div>
      </nav>

      <div className="max-w-5xl mx-auto px-6 py-12">
        
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold mb-4">Systematic Research Process</h1>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            A structured methodology for analyzing cybersecurity markets. 
            Five phases that transform raw data into actionable intelligence.
          </p>
        </div>

        {/* The 5 Phases - Visual */}
        <div className="mb-12">
          <div className="flex items-center justify-between mb-8 overflow-x-auto pb-2">
            {phases.map((phase, idx) => (
              <React.Fragment key={phase.id}>
                <button
                  onClick={() => setActivePhase(phase.id)}
                  className={`flex flex-col items-center p-4 rounded-xl border-2 transition-all min-w-[120px] ${getColorClasses(phase.color, activePhase === phase.id)}`}
                >
                  <span className="text-2xl mb-1">{phase.icon}</span>
                  <span className={`font-semibold text-sm ${activePhase === phase.id ? getAccentColor(phase.color) : 'text-gray-300'}`}>
                    {phase.name}
                  </span>
                  <span className="text-xs text-gray-500">{phase.subtitle}</span>
                </button>
                {idx < phases.length - 1 && (
                  <div className="text-gray-600 px-2">→</div>
                )}
              </React.Fragment>
            ))}
          </div>

          {/* Active Phase Detail */}
          {activePhaseData && (
            <div className={`bg-gray-900 rounded-xl border-2 p-6 ${getColorClasses(activePhaseData.color, true)}`}>
              <div className="grid md:grid-cols-2 gap-6">
                {/* Questions */}
                <div>
                  <h3 className="text-sm font-semibold text-gray-400 mb-3 uppercase tracking-wide">Key Questions</h3>
                  <div className="space-y-2">
                    {activePhaseData.questions.map((q, idx) => (
                      <div key={idx} className="flex items-start gap-2 text-sm">
                        <span className={getAccentColor(activePhaseData.color)}>?</span>
                        <span className="text-gray-300">{q}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Activities */}
                <div>
                  <h3 className="text-sm font-semibold text-gray-400 mb-3 uppercase tracking-wide">Research Activities</h3>
                  <div className="space-y-2">
                    {activePhaseData.activities.map((a, idx) => (
                      <div key={idx} className="flex items-start gap-2 text-sm">
                        <span className="text-green-500">✓</span>
                        <span className="text-gray-300">{a}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Output */}
              <div className="mt-6 pt-4 border-t border-gray-700">
                <div className="flex items-center gap-2">
                  <span className="text-xs font-semibold text-gray-500 uppercase">Output:</span>
                  <span className={`text-sm ${getAccentColor(activePhaseData.color)}`}>{activePhaseData.output}</span>
                </div>
              </div>
            </div>
          )}
        </div>

        {/* Flow Diagram */}
        <div className="mb-12">
          <h2 className="text-2xl font-bold mb-6 text-center">How It All Connects</h2>
          <div className="bg-gray-900 rounded-xl border border-gray-800 p-6">
            <div className="font-mono text-sm text-center space-y-2">
              <div className="text-gray-500">Raw market data</div>
              <div className="text-gray-600">↓</div>
              <div className="flex items-center justify-center gap-2 flex-wrap">
                <span className="px-3 py-1 bg-blue-900/30 text-blue-400 rounded">Structure</span>
                <span className="text-gray-600">+</span>
                <span className="px-3 py-1 bg-purple-900/30 text-purple-400 rounded">Dynamics</span>
                <span className="text-gray-600">+</span>
                <span className="px-3 py-1 bg-green-900/30 text-green-400 rounded">Stakeholders</span>
              </div>
              <div className="text-gray-600">↓</div>
              <div className="flex items-center justify-center gap-2 flex-wrap">
                <span className="px-3 py-1 bg-yellow-900/30 text-yellow-400 rounded">Economics</span>
                <span className="text-gray-600">→</span>
                <span className="px-3 py-1 bg-red-900/30 text-red-400 rounded">Product Strategy</span>
              </div>
              <div className="text-gray-600">↓</div>
              <div className="text-white font-semibold">Strategic Theses & Actionable Intelligence</div>
            </div>
          </div>
        </div>

        {/* Strategic Brief Structure */}
        <div className="mb-12">
          <h2 className="text-2xl font-bold mb-2 text-center">The Strategic Brief</h2>
          <p className="text-gray-500 text-center mb-6">15-20 page deliverable synthesizing all research</p>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
            {strategicBrief.map((section, idx) => (
              <div key={idx} className="bg-gray-900 rounded-xl border border-gray-800 p-4">
                <div className="flex items-center justify-between mb-3">
                  <h3 className="font-semibold text-white">{section.section}</h3>
                  <span className="text-xs px-2 py-0.5 bg-gray-800 text-gray-400 rounded">{section.pages}</span>
                </div>
                <ul className="space-y-1">
                  {section.items.map((item, i) => (
                    <li key={i} className="text-xs text-gray-400 flex items-start gap-2">
                      <span className="text-gray-600">○</span>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        {/* Why This Matters */}
        <div className="mb-12">
          <div className="bg-gradient-to-br from-blue-900/30 to-purple-900/30 rounded-xl border border-blue-800 p-8">
            <h2 className="text-xl font-bold mb-4 text-center">Why Systematic Research?</h2>
            <div className="grid md:grid-cols-3 gap-6 text-center">
              <div>
                <div className="text-3xl mb-2">🎯</div>
                <h3 className="font-semibold text-white mb-1">Consistency</h3>
                <p className="text-sm text-gray-400">Same rigorous process applied to every market segment</p>
              </div>
              <div>
                <div className="text-3xl mb-2">🔍</div>
                <h3 className="font-semibold text-white mb-1">Completeness</h3>
                <p className="text-sm text-gray-400">No blind spots—structure, motion, stakeholders, economics, product</p>
              </div>
              <div>
                <div className="text-3xl mb-2">⚡</div>
                <h3 className="font-semibold text-white mb-1">Actionability</h3>
                <p className="text-sm text-gray-400">Every analysis ends with "If I'm a PM here, I need to know..."</p>
              </div>
            </div>
          </div>
        </div>

        {/* CTA */}
        <div className="text-center">
          <p className="text-gray-400 mb-4">See the methodology in action</p>
          <a 
            href="/pillars/network-edge/email-security"
            className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-red-600 via-purple-600 to-blue-600 hover:from-red-500 hover:via-purple-500 hover:to-blue-500 rounded-lg font-medium transition-all"
          >
            View Email Security Analysis
            <span>→</span>
          </a>
        </div>

      </div>

      {/* Footer */}
      <footer className="border-t border-gray-800 py-8 mt-12">
        <div className="max-w-5xl mx-auto px-6 text-center text-gray-500 text-sm">
          <p>Built by Andy Simko • CISSP, GPEN, OSIR, OSTH</p>
          <p className="text-gray-600 mt-1">10+ years in cybersecurity product management</p>
        </div>
      </footer>
    </div>
  );
};

export default MethodologyPage;
