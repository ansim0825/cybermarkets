"use client";

import React, { useEffect, useState, useRef } from 'react';
import { Logo } from '@/components/Logo';

// ============================================================================
// ANIMATED PARTICLE NETWORK - The "Connected Dots" Background
// ============================================================================

const ParticleNetwork = () => {
  const canvasRef = useRef(null);
  
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    
    const ctx = canvas.getContext('2d');
    if (!ctx) return;
    
    let animationId;
    let particles = [];
    
    const resize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    
    const createParticles = () => {
      const particleCount = Math.floor((canvas.width * canvas.height) / 15000);
      particles = [];
      
      for (let i = 0; i < particleCount; i++) {
        particles.push({
          x: Math.random() * canvas.width,
          y: Math.random() * canvas.height,
          vx: (Math.random() - 0.5) * 0.3,
          vy: (Math.random() - 0.5) * 0.3,
          radius: Math.random() * 2 + 1,
          opacity: Math.random() * 0.5 + 0.2,
        });
      }
    };
    
    const drawParticles = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      
      // Draw connections
      for (let i = 0; i < particles.length; i++) {
        for (let j = i + 1; j < particles.length; j++) {
          const dx = particles[i].x - particles[j].x;
          const dy = particles[i].y - particles[j].y;
          const distance = Math.sqrt(dx * dx + dy * dy);
          
          if (distance < 150) {
            const opacity = (1 - distance / 150) * 0.15;
            ctx.beginPath();
            ctx.strokeStyle = `rgba(139, 92, 246, ${opacity})`; // Purple connections
            ctx.lineWidth = 1;
            ctx.moveTo(particles[i].x, particles[i].y);
            ctx.lineTo(particles[j].x, particles[j].y);
            ctx.stroke();
          }
        }
      }
      
      // Draw particles
      particles.forEach((particle) => {
        ctx.beginPath();
        const gradient = ctx.createRadialGradient(
          particle.x, particle.y, 0,
          particle.x, particle.y, particle.radius * 2
        );
        gradient.addColorStop(0, `rgba(139, 92, 246, ${particle.opacity})`);
        gradient.addColorStop(1, 'rgba(139, 92, 246, 0)');
        ctx.fillStyle = gradient;
        ctx.arc(particle.x, particle.y, particle.radius * 2, 0, Math.PI * 2);
        ctx.fill();
        
        // Core dot
        ctx.beginPath();
        ctx.fillStyle = `rgba(167, 139, 250, ${particle.opacity + 0.3})`;
        ctx.arc(particle.x, particle.y, particle.radius * 0.5, 0, Math.PI * 2);
        ctx.fill();
      });
    };
    
    const updateParticles = () => {
      particles.forEach((particle) => {
        particle.x += particle.vx;
        particle.y += particle.vy;
        
        // Bounce off edges with slight randomization
        if (particle.x < 0 || particle.x > canvas.width) {
          particle.vx *= -1;
          particle.vx += (Math.random() - 0.5) * 0.1;
        }
        if (particle.y < 0 || particle.y > canvas.height) {
          particle.vy *= -1;
          particle.vy += (Math.random() - 0.5) * 0.1;
        }
      });
    };
    
    const animate = () => {
      updateParticles();
      drawParticles();
      animationId = requestAnimationFrame(animate);
    };
    
    resize();
    createParticles();
    animate();
    
    window.addEventListener('resize', () => {
      resize();
      createParticles();
    });
    
    return () => {
      cancelAnimationFrame(animationId);
      window.removeEventListener('resize', resize);
    };
  }, []);
  
  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 pointer-events-none z-0"
      style={{ opacity: 0.6 }}
    />
  );
};

// ============================================================================
// MAIN LANDING PAGE
// ============================================================================

const LandingPage = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    setIsVisible(true);
    
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const pillars = [
    { 
      id: 'network-edge',
      name: 'Network & Edge', 
      icon: '🌐', 
      active: true,
      href: '/pillars/network-edge/email-security',
      description: 'Perimeter Defense, Email, SASE'
    },
    { 
      id: 'data-application',
      name: 'Data & App', 
      icon: '🗄️', 
      active: false,
      href: '#',
      description: 'DSPM, AppSec, API Security'
    },
    { 
      id: 'identity',
      name: 'Identity', 
      icon: '🔐', 
      active: true,
      href: '/pillars/identity/itdr',
      description: 'IAM, PAM, ITDR'
    },
    { 
      id: 'endpoint-workload',
      name: 'Endpoint', 
      icon: '💻', 
      active: false,
      href: '#',
      description: 'EDR, Server Protection'
    },
    { 
      id: 'secops',
      name: 'SecOps', 
      icon: '📊', 
      active: true,
      href: '/pillars/secops/xdr',
      description: 'SIEM, SOAR, XDR, AIDR'
    },
  ];

  const activeResearch = [
    {
      id: 'email-security',
      title: 'Email Security',
      pillar: 'Network & Edge',
      href: '/pillars/network-edge/email-security',
    },
    {
      id: 'itdr',
      title: 'Identity Threat Detection & Response',
      pillar: 'Identity',
      href: '/pillars/identity/itdr',
    },
    {
      id: 'ctem',
      title: 'Continuous Threat Exposure Management',
      pillar: 'GRC & TIC',
      href: '/pillars/grc-tic/ctem',
    },
    {
      id: 'threat-intelligence',
      title: 'Threat Intelligence',
      pillar: 'GRC & TIC',
      href: '/pillars/grc-tic/threat-intelligence',
    },
  ];

  return (
    <div className="min-h-screen bg-gray-950 text-gray-100 relative overflow-hidden">
      {/* Animated Particle Network Background */}
      <ParticleNetwork />
      
      {/* Gradient overlays for depth */}
      <div className="fixed inset-0 pointer-events-none z-0">
        <div className="absolute -top-40 -right-40 w-96 h-96 bg-red-500/8 rounded-full blur-3xl"></div>
        <div className="absolute top-1/3 -left-40 w-96 h-96 bg-purple-500/8 rounded-full blur-3xl"></div>
        <div className="absolute -bottom-40 right-1/4 w-96 h-96 bg-blue-500/8 rounded-full blur-3xl"></div>
      </div>

      {/* Navigation */}
      <nav className={`border-b border-gray-800/50 sticky top-0 z-50 transition-all duration-300 ${
        scrolled ? 'bg-gray-950/90 backdrop-blur-lg' : 'bg-gray-950/50 backdrop-blur-sm'
      }`}>
        <div className="max-w-5xl mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <Logo size="default" />
            <div className="flex items-center gap-6 text-sm">
              <a href="#research" className="text-gray-400 hover:text-white transition-colors">Research</a>
              <a href="#pillars" className="text-gray-400 hover:text-white transition-colors">Pillars</a>
              <a href="#methodology" className="text-gray-400 hover:text-white transition-colors">Methodology</a>
              <a href="#about" className="text-gray-400 hover:text-white transition-colors">About</a>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section - Mission & Vision */}
      <section className={`relative z-10 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
        <div className="max-w-5xl mx-auto px-6 py-20 text-center">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6">
            <span className="text-white">Connecting the dots</span>
            <br />
            <span className="bg-gradient-to-r from-red-400 via-purple-400 to-blue-400 bg-clip-text text-transparent">
              in cybersecurity research
            </span>
          </h1>
          
          <p className="text-lg md:text-xl text-gray-400 mb-6 max-w-3xl mx-auto leading-relaxed">
            Deep market analysis for cybersecurity professionals who need more than surface-level insights. 
            We apply a systematic research process to decode market structure, dynamics, and strategic implications 
            across the security landscape.
          </p>
          
          <p className="text-gray-500 text-sm mb-8 max-w-2xl mx-auto">
            Built for product managers, investors, and security leaders who make decisions 
            that shape the future of cybersecurity.
          </p>
        </div>
      </section>

      {/* Active Research Section */}
      <section id="research" className="relative z-10 py-16">
        <div className="max-w-5xl mx-auto px-6">
          <div className="text-center mb-10">
            <h2 className="text-2xl md:text-3xl font-bold mb-3">Active Research</h2>
            <p className="text-gray-500">Deep-dive market analyses currently available</p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
            {activeResearch.map((research) => (
              <a
                key={research.id}
                href={research.href}
                className="group relative p-6 bg-gray-900/60 backdrop-blur-sm rounded-2xl border border-gray-800 hover:border-gray-700 transition-all duration-300 hover:-translate-y-1 flex flex-col"
              >
                {/* Glow effect on hover */}
                <div className="absolute inset-0 bg-gradient-to-r from-red-600 via-purple-600 to-blue-600 opacity-0 group-hover:opacity-5 rounded-2xl transition-opacity" />
                
                <div className="relative flex flex-col flex-grow">
                  <div className="text-xs text-gray-500 mb-2 uppercase tracking-wider">{research.pillar}</div>
                  <h3 className="text-lg font-semibold text-white mb-3 flex-grow">{research.title}</h3>
                  <div className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-red-600 via-purple-600 to-blue-600 hover:from-red-500 hover:via-purple-500 hover:to-blue-500 rounded-lg text-sm font-medium transition-all shadow-lg shadow-purple-500/20 w-fit">
                    Explore Research
                    <span className="group-hover:translate-x-1 transition-transform">→</span>
                  </div>
                </div>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* Divider */}
      <div className="relative z-10 max-w-5xl mx-auto px-6">
        <div className="h-px bg-gradient-to-r from-transparent via-gray-700 to-transparent" />
      </div>

      {/* Pillars Section */}
      <section id="pillars" className="relative z-10 py-16">
        <div className="max-w-5xl mx-auto px-6">
          <div className="text-center mb-10">
            <h2 className="text-2xl md:text-3xl font-bold mb-3">The 6 Pillars of Cybersecurity</h2>
            <p className="text-gray-500">A framework for organizing the security landscape</p>
          </div>
          
          {/* 6-column grid */}
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3">
            {pillars.map((pillar) => (
              <a
                key={pillar.id}
                href={pillar.href}
                className={`group relative p-4 rounded-xl border transition-all text-center ${
                  pillar.active 
                    ? 'bg-gray-900/80 border-gray-700 hover:border-gray-600 hover:bg-gray-800/80 cursor-pointer' 
                    : 'bg-gray-900/40 border-gray-800/50 cursor-default opacity-60'
                }`}
              >
                {/* Status dot */}
                <div className={`absolute top-2 right-2 w-2 h-2 rounded-full ${
                  pillar.active ? 'bg-green-500 shadow-lg shadow-green-500/50' : 'bg-gray-600'
                }`}>
                  {pillar.active && (
                    <div className="absolute inset-0 bg-green-500 rounded-full animate-ping opacity-75" />
                  )}
                </div>
                
                <div className={`text-2xl mb-2 ${pillar.active ? '' : 'grayscale'}`}>{pillar.icon}</div>
                <div className={`font-medium text-sm mb-1 ${pillar.active ? 'text-white' : 'text-gray-500'}`}>
                  {pillar.name}
                </div>
                <div className={`text-xs ${pillar.active ? 'text-gray-400' : 'text-gray-600'}`}>
                  {pillar.description}
                </div>
                
                {pillar.active && (
                  <div className="mt-2 text-xs text-green-400 opacity-0 group-hover:opacity-100 transition-opacity">
                    View research →
                  </div>
                )}
              </a>
            ))}
          </div>
          
          {/* Legend */}
          <div className="flex items-center justify-center gap-6 mt-6 text-xs text-gray-500">
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-green-500 rounded-full" />
              <span>Research available</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-gray-600 rounded-full" />
              <span>Coming soon</span>
            </div>
          </div>
        </div>
      </section>

      {/* Divider */}
      <div className="relative z-10 max-w-5xl mx-auto px-6">
        <div className="h-px bg-gradient-to-r from-transparent via-gray-700 to-transparent" />
      </div>

      {/* Methodology Section */}
      <section id="methodology" className="relative z-10 py-16">
        <div className="max-w-5xl mx-auto px-6">
          <div className="bg-gray-900/60 backdrop-blur-sm rounded-2xl border border-gray-800 p-8 md:p-10">
            <div className="text-center mb-8">
              <h2 className="text-2xl md:text-3xl font-bold mb-3">Systematic Research Process</h2>
              <p className="text-gray-500 max-w-2xl mx-auto">
                Every market analysis follows a structured five-dimension methodology designed to surface 
                actionable insights — not just data.
              </p>
            </div>
            
            {/* 5 Dimensions */}
            <div className="grid grid-cols-2 md:grid-cols-5 gap-4 mb-8">
              {[
                { num: '01', name: 'Structure', desc: 'Market Architecture, Segments, Players', icon: '🏗️', color: 'purple' },
                { num: '02', name: 'Motion', desc: 'Hype Cycles, Trends, Consolidation', icon: '📈', color: 'blue' },
                { num: '03', name: 'Stakeholders', desc: 'Multi-Perspective Analysis', icon: '👥', color: 'cyan' },
                { num: '04', name: 'Economics', desc: 'Value Drivers, ROI, Pricing', icon: '💰', color: 'emerald' },
                { num: '05', name: 'Product', desc: 'PM Strategic Elements', icon: '🎯', color: 'amber' },
              ].map((dim) => (
                <div key={dim.num} className="text-center p-4 bg-gray-800/50 rounded-xl border border-gray-700/50 hover:border-gray-600 transition-colors">
                  <div className="text-xs text-gray-600 font-mono mb-1">{dim.num}</div>
                  <div className="text-2xl mb-2">{dim.icon}</div>
                  <div className="text-sm font-medium text-white mb-1">{dim.name}</div>
                  <div className="text-xs text-gray-500">{dim.desc}</div>
                </div>
              ))}
            </div>
            
            <div className="text-center">
              <a href="/methodology" className="inline-flex items-center gap-2 text-sm text-purple-400 hover:text-purple-300 transition-colors">
                Learn more about our methodology
                <span>→</span>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="relative z-10 py-16">
        <div className="max-w-5xl mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <h2 className="text-2xl font-bold mb-4">Why This Exists</h2>
              <p className="text-gray-400 mb-4 leading-relaxed">
                The cybersecurity market is complex, fast-moving, and often obscured by vendor marketing 
                and analyst jargon. WonWithData cuts through the noise with rigorous, systematic analysis 
                that treats each market segment with the depth it deserves.
              </p>
              <p className="text-gray-500 text-sm mb-6">
                Whether you're a PM building a roadmap, an investor evaluating opportunities, or a 
                security leader navigating vendor claims — this research is built for you.
              </p>
              <a href="#about" className="text-sm text-blue-400 hover:text-blue-300 transition-colors">
                More about the author →
              </a>
            </div>
            
            <div className="bg-gray-900/60 backdrop-blur-sm rounded-xl border border-gray-800 p-6">
              <div className="flex items-center gap-4 mb-4">
                <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-blue-500 rounded-full flex items-center justify-center text-xl font-bold">
                  AS
                </div>
                <div>
                  <div className="font-semibold text-white">Andy Simko</div>
                  <div className="text-sm text-gray-500">Cybersecurity Product Leader</div>
                </div>
              </div>
              <div className="flex flex-wrap gap-2 mb-4">
                {['CISSP', 'GPEN', 'CISA', 'GSNA', 'HCSFP', 'PMC-III'].map((cert) => (
                  <span key={cert} className="px-2 py-1 bg-gray-800 rounded text-xs text-gray-400">{cert}</span>
                ))}
              </div>
              <p className="text-gray-500 text-sm">
                15+ years in cybersecurity product management, building and analyzing 
                security solutions across the enterprise landscape.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="relative z-10 border-t border-gray-800/50 py-8 mt-8">
        <div className="max-w-5xl mx-auto px-6">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <Logo size="small" />
            <p className="text-gray-600 text-sm text-center">
              Cybersecurity market intelligence through systematic research
            </p>
            <p className="text-gray-600 text-xs">
              © 2025 WonWithData
            </p>
          </div>
          {/* Disclaimer */}
          <div className="mt-6 pt-6 border-t border-gray-800/30 text-center">
            <p className="text-gray-600 text-xs leading-relaxed max-w-3xl mx-auto">
              Personal research and opinions based on publicly available information. Author is employed by Barracuda Networks; 
              views expressed are personal and do not represent my employer. Not affiliated with other vendors discussed. 
              Not investment, legal, or professional advice. Information may be outdated or inaccurate.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default LandingPage;
