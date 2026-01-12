"use client";

import React, { useState } from 'react';

// Simple icon components to avoid external dependencies
const Icon = ({ children, className = "w-5 h-5" }) => (
  <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
    {children}
  </svg>
);

const ShieldIcon = ({ className }) => (
  <Icon className={className}>
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
  </Icon>
);

const UsersIcon = ({ className }) => (
  <Icon className={className}>
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" />
  </Icon>
);

const KeyIcon = ({ className }) => (
  <Icon className={className}>
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 7a2 2 0 012 2m4 0a6 6 0 01-7.743 5.743L11 17H9v2H7v2H4a1 1 0 01-1-1v-2.586a1 1 0 01.293-.707l5.964-5.964A6 6 0 1121 9z" />
  </Icon>
);

const AlertIcon = ({ className }) => (
  <Icon className={className}>
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
  </Icon>
);

const TrendingUpIcon = ({ className }) => (
  <Icon className={className}>
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
  </Icon>
);

const ActivityIcon = ({ className }) => (
  <Icon className={className}>
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
  </Icon>
);

const MailIcon = ({ className }) => (
  <Icon className={className}>
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
  </Icon>
);

const BrainIcon = ({ className }) => (
  <Icon className={className}>
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
  </Icon>
);

export default function PlatformVisionPage() {
  const [activeTab, setActiveTab] = useState('overview');
  const [selectedEmployee, setSelectedEmployee] = useState(null);

  // Sample data
  const employeeRiskProfiles = [
    {
      id: 1,
      name: 'Sarah Chen',
      title: 'CFO',
      department: 'Finance',
      riskScore: 94,
      riskLevel: 'critical',
      riskTrend: 'increasing',
      factors: {
        roleExposure: 95,
        publicFootprint: 88,
        behavioralRisk: 72,
        incidentHistory: 45,
        accessScope: 98
      },
      recentAlerts: 3,
      lastIncident: '2 days ago',
      osintFindings: ['Executive bio on company website', 'LinkedIn profile with org chart details', 'Speaking at FinanceWorld 2025 (public)'],
      attackSurface: ['Wire transfer authority', 'Board communications', 'M&A documents access']
    },
    {
      id: 2,
      name: 'Marcus Johnson',
      title: 'Senior Developer',
      department: 'Engineering',
      riskScore: 78,
      riskLevel: 'high',
      riskTrend: 'stable',
      factors: {
        roleExposure: 65,
        publicFootprint: 82,
        behavioralRisk: 68,
        incidentHistory: 30,
        accessScope: 85
      },
      recentAlerts: 1,
      lastIncident: '2 weeks ago',
      osintFindings: ['GitHub profile with code samples', 'Tech blog with architecture details', 'Conference talk recordings'],
      attackSurface: ['Production systems access', 'API keys management', 'CI/CD pipeline admin']
    },
    {
      id: 3,
      name: 'Emily Rodriguez',
      title: 'HR Director',
      department: 'Human Resources',
      riskScore: 86,
      riskLevel: 'high',
      riskTrend: 'increasing',
      factors: {
        roleExposure: 88,
        publicFootprint: 65,
        behavioralRisk: 45,
        incidentHistory: 62,
        accessScope: 92
      },
      recentAlerts: 2,
      lastIncident: '5 days ago',
      osintFindings: ['LinkedIn with employee connections', 'Glassdoor responses', 'Industry HR group member'],
      attackSurface: ['Employee PII access', 'Payroll system admin', 'Benefits portal']
    },
    {
      id: 4,
      name: 'David Park',
      title: 'Sales Director',
      department: 'Sales',
      riskScore: 71,
      riskLevel: 'elevated',
      riskTrend: 'decreasing',
      factors: {
        roleExposure: 72,
        publicFootprint: 90,
        behavioralRisk: 55,
        incidentHistory: 25,
        accessScope: 68
      },
      recentAlerts: 0,
      lastIncident: '1 month ago',
      osintFindings: ['LinkedIn Sales Navigator', 'CRM public demos', 'Podcast appearances'],
      attackSurface: ['Customer contracts', 'Pricing documents', 'Partner agreements']
    }
  ];

  const identityMetrics = {
    healthScore: 72,
    mfaCoverage: 94,
    privilegedAccounts: 156,
    orphanedAccounts: 23,
    stalePermissions: 847,
    nhi: { total: 2341, unmanaged: 312 },
    accessReviewCompliance: 78
  };

  const riskDrivenPolicies = [
    { trigger: 'Composite Risk Score > 80', action: 'Require phishing-resistant MFA, enable session recording, JIT access only', affected: 47 },
    { trigger: 'Flight Risk = Critical', action: 'Block bulk downloads, disable USB, elevate DLP sensitivity', affected: 12 },
    { trigger: 'Recent Incident Involvement', action: 'Mandatory security training, password reset, 30-day elevated monitoring', affected: 8 },
    { trigger: 'OSINT Exposure = High', action: 'Disable SMS MFA, require device binding, enable geo-fencing', affected: 34 },
    { trigger: 'Executive Role', action: 'Hardware security key required, deepfake verification enabled', affected: 23 }
  ];

  const itdrAlerts = [
    { id: 1, severity: 'critical', type: 'Impossible Travel', user: 'j.smith@company.com', details: 'Login from NYC, then Singapore within 2 hours', time: '3 min ago', status: 'investigating' },
    { id: 2, severity: 'high', type: 'Privilege Escalation', user: 'service-account-47', details: 'Unexpected admin role assignment in Azure AD', time: '12 min ago', status: 'auto-remediated' },
    { id: 3, severity: 'high', type: 'Credential Stuffing', user: 'multiple', details: '47 failed logins from known botnet IPs', time: '18 min ago', status: 'blocked' },
    { id: 4, severity: 'medium', type: 'Unusual Access Pattern', user: 'm.wong@company.com', details: 'First-time access to financial reports at 3AM', time: '1 hour ago', status: 'monitoring' }
  ];

  const getRiskColor = (level) => {
    switch (level) {
      case 'critical': return 'text-red-400 bg-red-900/30 border-red-700';
      case 'high': return 'text-orange-400 bg-orange-900/30 border-orange-700';
      case 'elevated': return 'text-yellow-400 bg-yellow-900/30 border-yellow-700';
      default: return 'text-green-400 bg-green-900/30 border-green-700';
    }
  };

  const getRiskBgColor = (score) => {
    if (score >= 80) return 'bg-red-500';
    if (score >= 60) return 'bg-orange-500';
    if (score >= 40) return 'bg-yellow-500';
    return 'bg-green-500';
  };

  const tabs = [
    { id: 'overview', label: 'Platform Overview', icon: ShieldIcon },
    { id: 'risk', label: 'Employee Risk Intelligence', icon: UsersIcon },
    { id: 'identity', label: 'Identity Security', icon: KeyIcon },
    { id: 'itdr', label: 'ITDR', icon: AlertIcon }
  ];

  return (
    <div className="min-h-screen bg-gray-950 text-gray-100">
      {/* Header */}
      <header className="bg-gray-900 border-b border-gray-800">
        <div className="max-w-7xl mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <div>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-gradient-to-br from-blue-500 to-purple-600 rounded-lg flex items-center justify-center">
                  <ShieldIcon className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h1 className="text-xl font-bold">Unified Security Platform</h1>
                  <p className="text-xs text-gray-400">Email + Identity + Human Risk Intelligence</p>
                </div>
              </div>
            </div>
            <div className="flex items-center gap-4">
              <div className="text-right">
                <div className="text-sm text-gray-400">Organization Risk Score</div>
                <div className="text-2xl font-bold text-orange-400">73</div>
              </div>
              <a href="/pillars/network-edge/email-security" className="text-sm text-gray-400 hover:text-white">
                ← Back to Research
              </a>
            </div>
          </div>
        </div>

        {/* Tab Navigation */}
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex gap-1 border-t border-gray-800 pt-2">
            {tabs.map(tab => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`flex items-center gap-2 px-4 py-3 text-sm font-medium rounded-t-lg transition-all ${
                  activeTab === tab.id
                    ? 'bg-gray-950 text-white border-t-2 border-blue-500'
                    : 'text-gray-400 hover:text-white hover:bg-gray-800'
                }`}
              >
                <tab.icon className="w-4 h-4" />
                {tab.label}
              </button>
            ))}
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-6 py-8">
        
        {/* Overview Tab */}
        {activeTab === 'overview' && (
          <div className="space-y-8">
            {/* Hero */}
            <div className="bg-gradient-to-br from-blue-900/30 to-purple-900/30 rounded-2xl border border-blue-800 p-8">
              <h2 className="text-3xl font-bold mb-4">The Convergence Thesis</h2>
              <p className="text-xl text-gray-300 mb-6 max-w-3xl">
                Email security, identity management, and security awareness are converging around a single concept: 
                <span className="text-blue-400 font-semibold"> understanding and protecting the human</span>.
              </p>
              <div className="grid md:grid-cols-3 gap-6">
                <div className="bg-gray-900/50 rounded-xl p-4 border border-gray-700">
                  <MailIcon className="w-8 h-8 text-blue-400 mb-2" />
                  <h3 className="font-semibold mb-1">Email Security</h3>
                  <p className="text-sm text-gray-400">Behavioral AI detects threats that bypass signatures</p>
                </div>
                <div className="bg-gray-900/50 rounded-xl p-4 border border-gray-700">
                  <KeyIcon className="w-8 h-8 text-purple-400 mb-2" />
                  <h3 className="font-semibold mb-1">Identity Security</h3>
                  <p className="text-sm text-gray-400">Risk-driven access policies adapt to threat context</p>
                </div>
                <div className="bg-gray-900/50 rounded-xl p-4 border border-gray-700">
                  <BrainIcon className="w-8 h-8 text-green-400 mb-2" />
                  <h3 className="font-semibold mb-1">Human Risk Intelligence</h3>
                  <p className="text-sm text-gray-400">Unified employee risk profiles predict who will be targeted</p>
                </div>
              </div>
            </div>

            {/* Key Metrics */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              <div className="bg-gray-900 rounded-xl p-4 border border-gray-800">
                <div className="text-3xl font-bold text-white">2,341</div>
                <div className="text-sm text-gray-400">Identities Monitored</div>
                <div className="text-xs text-green-400 mt-1">↑ 12% coverage increase</div>
              </div>
              <div className="bg-gray-900 rounded-xl p-4 border border-gray-800">
                <div className="text-3xl font-bold text-orange-400">47</div>
                <div className="text-sm text-gray-400">High-Risk Employees</div>
                <div className="text-xs text-yellow-400 mt-1">Requires attention</div>
              </div>
              <div className="bg-gray-900 rounded-xl p-4 border border-gray-800">
                <div className="text-3xl font-bold text-green-400">99.6%</div>
                <div className="text-sm text-gray-400">Threats Auto-Remediated</div>
                <div className="text-xs text-gray-500 mt-1">Last 30 days</div>
              </div>
              <div className="bg-gray-900 rounded-xl p-4 border border-gray-800">
                <div className="text-3xl font-bold text-blue-400">&lt;5s</div>
                <div className="text-sm text-gray-400">ITDR Detection Time</div>
                <div className="text-xs text-gray-500 mt-1">Mean time to detect</div>
              </div>
            </div>

            {/* Value Proposition */}
            <div className="bg-gray-900 rounded-xl border border-gray-800 p-6">
              <h3 className="text-lg font-semibold mb-4">Why This Matters</h3>
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h4 className="font-medium text-blue-400 mb-2">The Problem</h4>
                  <ul className="space-y-2 text-sm text-gray-400">
                    <li>• 80% of breaches involve compromised credentials</li>
                    <li>• Email is the #1 initial access vector</li>
                    <li>• Identity and email security operate in silos</li>
                    <li>• Attackers target people, not just systems</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-medium text-green-400 mb-2">The Solution</h4>
                  <ul className="space-y-2 text-sm text-gray-400">
                    <li>• Unified risk scoring across email + identity</li>
                    <li>• Behavioral baselines that detect anomalies</li>
                    <li>• Risk-driven policies that adapt in real-time</li>
                    <li>• OSINT monitoring predicts who will be targeted</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Employee Risk Intelligence Tab */}
        {activeTab === 'risk' && (
          <div className="space-y-6">
            <div className="flex items-center justify-between">
              <div>
                <h2 className="text-2xl font-bold">Employee Risk Intelligence</h2>
                <p className="text-gray-400">Unified risk profiles combining behavioral, OSINT, and access data</p>
              </div>
              <div className="flex items-center gap-4">
                <div className="text-sm text-gray-400">
                  <span className="text-red-400 font-semibold">12</span> Critical • 
                  <span className="text-orange-400 font-semibold ml-1">35</span> High • 
                  <span className="text-yellow-400 font-semibold ml-1">89</span> Elevated
                </div>
              </div>
            </div>

            <div className="grid lg:grid-cols-3 gap-6">
              {/* Employee List */}
              <div className="lg:col-span-1 space-y-3">
                {employeeRiskProfiles.map(emp => (
                  <button
                    key={emp.id}
                    onClick={() => setSelectedEmployee(emp)}
                    className={`w-full text-left p-4 rounded-xl border transition-all ${
                      selectedEmployee?.id === emp.id
                        ? 'bg-gray-800 border-blue-500'
                        : 'bg-gray-900 border-gray-800 hover:border-gray-700'
                    }`}
                  >
                    <div className="flex items-center justify-between mb-2">
                      <div>
                        <div className="font-medium">{emp.name}</div>
                        <div className="text-xs text-gray-500">{emp.title}</div>
                      </div>
                      <div className={`px-2 py-1 rounded text-xs font-semibold ${getRiskColor(emp.riskLevel)}`}>
                        {emp.riskScore}
                      </div>
                    </div>
                    <div className="flex items-center gap-2 text-xs text-gray-500">
                      <span>{emp.department}</span>
                      <span>•</span>
                      <span>{emp.recentAlerts} recent alerts</span>
                      {emp.riskTrend === 'increasing' && <span className="text-red-400">↑</span>}
                      {emp.riskTrend === 'decreasing' && <span className="text-green-400">↓</span>}
                    </div>
                  </button>
                ))}
              </div>

              {/* Employee Detail */}
              <div className="lg:col-span-2">
                {selectedEmployee ? (
                  <div className="bg-gray-900 rounded-xl border border-gray-800 p-6">
                    <div className="flex items-start justify-between mb-6">
                      <div>
                        <h3 className="text-xl font-semibold">{selectedEmployee.name}</h3>
                        <p className="text-gray-400">{selectedEmployee.title} • {selectedEmployee.department}</p>
                      </div>
                      <div className="text-right">
                        <div className={`text-4xl font-bold ${
                          selectedEmployee.riskScore >= 80 ? 'text-red-400' :
                          selectedEmployee.riskScore >= 60 ? 'text-orange-400' : 'text-yellow-400'
                        }`}>
                          {selectedEmployee.riskScore}
                        </div>
                        <div className="text-xs text-gray-500">Composite Risk Score</div>
                      </div>
                    </div>

                    {/* Risk Factors */}
                    <div className="mb-6">
                      <h4 className="text-sm font-semibold text-gray-400 mb-3">RISK FACTORS</h4>
                      <div className="space-y-3">
                        {Object.entries(selectedEmployee.factors).map(([key, value]) => (
                          <div key={key} className="flex items-center gap-3">
                            <div className="w-32 text-xs text-gray-500 capitalize">{key.replace(/([A-Z])/g, ' $1')}</div>
                            <div className="flex-1 bg-gray-800 rounded-full h-2">
                              <div 
                                className={`h-2 rounded-full ${getRiskBgColor(value)}`}
                                style={{ width: `${value}%` }}
                              />
                            </div>
                            <div className="w-8 text-xs text-right">{value}</div>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* OSINT Findings */}
                    <div className="mb-6">
                      <h4 className="text-sm font-semibold text-gray-400 mb-3">OSINT FINDINGS</h4>
                      <div className="space-y-2">
                        {selectedEmployee.osintFindings.map((finding, idx) => (
                          <div key={idx} className="flex items-start gap-2 text-sm">
                            <span className="text-blue-400">•</span>
                            <span className="text-gray-300">{finding}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Attack Surface */}
                    <div>
                      <h4 className="text-sm font-semibold text-gray-400 mb-3">ATTACK SURFACE</h4>
                      <div className="flex flex-wrap gap-2">
                        {selectedEmployee.attackSurface.map((item, idx) => (
                          <span key={idx} className="px-3 py-1 bg-red-900/30 text-red-400 text-xs rounded-full border border-red-800">
                            {item}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                ) : (
                  <div className="bg-gray-900 rounded-xl border border-gray-800 p-12 text-center text-gray-500">
                    <UsersIcon className="w-12 h-12 mx-auto mb-4 opacity-50" />
                    <p>Select an employee to view their risk profile</p>
                  </div>
                )}
              </div>
            </div>
          </div>
        )}

        {/* Identity Security Tab */}
        {activeTab === 'identity' && (
          <div className="space-y-6">
            <div>
              <h2 className="text-2xl font-bold">Identity Security</h2>
              <p className="text-gray-400">Risk-driven identity governance and access management</p>
            </div>

            {/* Identity Health Score */}
            <div className="grid md:grid-cols-4 gap-4">
              <div className="bg-gray-900 rounded-xl border border-gray-800 p-4">
                <div className="text-sm text-gray-400 mb-1">Identity Health Score</div>
                <div className="text-3xl font-bold text-yellow-400">{identityMetrics.healthScore}/100</div>
              </div>
              <div className="bg-gray-900 rounded-xl border border-gray-800 p-4">
                <div className="text-sm text-gray-400 mb-1">MFA Coverage</div>
                <div className="text-3xl font-bold text-green-400">{identityMetrics.mfaCoverage}%</div>
              </div>
              <div className="bg-gray-900 rounded-xl border border-gray-800 p-4">
                <div className="text-sm text-gray-400 mb-1">Orphaned Accounts</div>
                <div className="text-3xl font-bold text-orange-400">{identityMetrics.orphanedAccounts}</div>
              </div>
              <div className="bg-gray-900 rounded-xl border border-gray-800 p-4">
                <div className="text-sm text-gray-400 mb-1">Stale Permissions</div>
                <div className="text-3xl font-bold text-red-400">{identityMetrics.stalePermissions}</div>
              </div>
            </div>

            {/* Risk-Driven Policies */}
            <div className="bg-gray-900 rounded-xl border border-gray-800 p-6">
              <h3 className="text-lg font-semibold mb-4">Risk-Driven Access Policies</h3>
              <p className="text-sm text-gray-400 mb-4">Policies automatically triggered by employee risk intelligence</p>
              <div className="space-y-3">
                {riskDrivenPolicies.map((policy, idx) => (
                  <div key={idx} className="flex items-center justify-between p-4 bg-gray-800 rounded-lg">
                    <div className="flex-1">
                      <div className="font-medium text-sm text-blue-400 mb-1">{policy.trigger}</div>
                      <div className="text-sm text-gray-400">{policy.action}</div>
                    </div>
                    <div className="text-right">
                      <div className="text-lg font-semibold">{policy.affected}</div>
                      <div className="text-xs text-gray-500">affected users</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Non-Human Identities */}
            <div className="bg-gray-900 rounded-xl border border-gray-800 p-6">
              <h3 className="text-lg font-semibold mb-4">Non-Human Identity (NHI) Management</h3>
              <div className="grid md:grid-cols-3 gap-6">
                <div className="text-center p-4 bg-gray-800 rounded-lg">
                  <div className="text-3xl font-bold text-white">{identityMetrics.nhi.total}</div>
                  <div className="text-sm text-gray-400">Total NHIs</div>
                </div>
                <div className="text-center p-4 bg-gray-800 rounded-lg">
                  <div className="text-3xl font-bold text-red-400">{identityMetrics.nhi.unmanaged}</div>
                  <div className="text-sm text-gray-400">Unmanaged</div>
                </div>
                <div className="text-center p-4 bg-gray-800 rounded-lg">
                  <div className="text-3xl font-bold text-blue-400">15:1</div>
                  <div className="text-sm text-gray-400">NHI to Human Ratio</div>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* ITDR Tab */}
        {activeTab === 'itdr' && (
          <div className="space-y-6">
            <div className="flex items-center justify-between">
              <div>
                <h2 className="text-2xl font-bold">Identity Threat Detection & Response</h2>
                <p className="text-gray-400">Real-time detection of identity-based attacks</p>
              </div>
              <div className="flex items-center gap-2 px-4 py-2 bg-green-900/30 border border-green-700 rounded-lg">
                <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse" />
                <span className="text-green-400 text-sm font-medium">MTTD: &lt;5 seconds</span>
              </div>
            </div>

            {/* Alert Stats */}
            <div className="grid grid-cols-4 gap-4">
              <div className="bg-gray-900 rounded-xl border border-gray-800 p-4 text-center">
                <div className="text-3xl font-bold text-red-400">3</div>
                <div className="text-xs text-gray-400">Critical</div>
              </div>
              <div className="bg-gray-900 rounded-xl border border-gray-800 p-4 text-center">
                <div className="text-3xl font-bold text-orange-400">12</div>
                <div className="text-xs text-gray-400">High</div>
              </div>
              <div className="bg-gray-900 rounded-xl border border-gray-800 p-4 text-center">
                <div className="text-3xl font-bold text-yellow-400">47</div>
                <div className="text-xs text-gray-400">Medium</div>
              </div>
              <div className="bg-gray-900 rounded-xl border border-gray-800 p-4 text-center">
                <div className="text-3xl font-bold text-green-400">89%</div>
                <div className="text-xs text-gray-400">Auto-Remediated</div>
              </div>
            </div>

            {/* Alert Feed */}
            <div className="bg-gray-900 rounded-xl border border-gray-800 p-6">
              <h3 className="text-lg font-semibold mb-4">Live Alert Feed</h3>
              <div className="space-y-3">
                {itdrAlerts.map(alert => (
                  <div key={alert.id} className={`p-4 rounded-lg border ${
                    alert.severity === 'critical' ? 'bg-red-900/20 border-red-800' :
                    alert.severity === 'high' ? 'bg-orange-900/20 border-orange-800' :
                    'bg-yellow-900/20 border-yellow-800'
                  }`}>
                    <div className="flex items-start justify-between mb-2">
                      <div className="flex items-center gap-3">
                        <span className={`px-2 py-0.5 rounded text-xs font-semibold uppercase ${
                          alert.severity === 'critical' ? 'bg-red-900 text-red-300' :
                          alert.severity === 'high' ? 'bg-orange-900 text-orange-300' :
                          'bg-yellow-900 text-yellow-300'
                        }`}>
                          {alert.severity}
                        </span>
                        <span className="font-medium">{alert.type}</span>
                      </div>
                      <span className="text-xs text-gray-500">{alert.time}</span>
                    </div>
                    <div className="text-sm text-gray-400 mb-2">{alert.details}</div>
                    <div className="flex items-center justify-between text-xs">
                      <span className="text-gray-500">User: {alert.user}</span>
                      <span className={`px-2 py-0.5 rounded ${
                        alert.status === 'auto-remediated' ? 'bg-green-900/50 text-green-400' :
                        alert.status === 'blocked' ? 'bg-blue-900/50 text-blue-400' :
                        alert.status === 'investigating' ? 'bg-yellow-900/50 text-yellow-400' :
                        'bg-gray-700 text-gray-400'
                      }`}>
                        {alert.status}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}
      </main>

      {/* Footer */}
      <footer className="border-t border-gray-800 py-6 mt-12">
        <div className="max-w-7xl mx-auto px-6 text-center text-gray-500 text-sm">
          <p>Platform Vision Prototype • Demonstrating email + identity + human risk convergence</p>
          <p className="text-gray-600 mt-1">Built by Andy Simko</p>
        </div>
      </footer>
    </div>
  );
}
