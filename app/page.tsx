// app/page.js
"use client";

import React, { useState } from 'react';
import dynamic from 'next/dynamic';
import { motion } from 'framer-motion';
import { Shield, Lock, ShieldAlert, Cpu, Terminal, Menu, Mail } from 'lucide-react';

const CyberScene = dynamic(() => import('./CyberCanvas'), {
  ssr: false,
  loading: () => (
    <div className="w-full h-full flex items-center justify-center text-cyan-500 font-mono text-xs tracking-widest animate-pulse">
      LOADING SYSTEM ENGINE...
    </div>
  ),
});

interface CustomLogoProps {
  isShieldActive: boolean;
}

function CustomLogo({ isShieldActive }: CustomLogoProps) {
  return (
    <div className="flex items-center gap-2 font-bold text-xl tracking-wider cursor-pointer group">
      <svg
        width="28"
        height="28"
        viewBox="0 0 32 32"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="transition-transform duration-500 group-hover:rotate-12"
      >
        <path
          d="M16 2L30 10V22L16 30L2 22V10L16 2Z"
          stroke={isShieldActive ? "#c084fc" : "#22d3ee"}
          strokeWidth="1.5"
          strokeLinejoin="round"
          className="transition-colors duration-1000"
        />
        <circle
          cx="16"
          cy="16"
          r="4"
          fill={isShieldActive ? "#a855f7" : "#06b6d4"}
          className="transition-colors duration-1000 animate-pulse"
        />
        <path
          d="M16 6V10M16 22V26M8 12L11 14M21 18L24 20"
          stroke="#38bdf8"
          strokeWidth="1.5"
          strokeLinecap="round"
        />
      </svg>

      <span className="text-transparent bg-clip-text bg-gradient-to-r from-slate-100 via-slate-200 to-slate-400 font-extrabold tracking-widest">
        JMKC<span className="text-cyan-400 font-light"></span>
      </span>
    </div>
  );
}

export default function CyberSecurityPage() {
  const [isShieldActive, setIsShieldActive] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const handleContactClick = () => {
    if (typeof window !== 'undefined') {
      window.location.href = 'mailto:security@aegis.ai';
    }
  };

  return (
    <main className="relative min-h-screen w-full bg-slate-950 text-slate-100 overflow-x-hidden font-sans select-none pt-24">
      
      {/* Background Matrix Layer */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#0f172a_1px,transparent_1px),linear-gradient(to_bottom,#0f172a_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_50%,#000_70%,transparent_100%)] z-0 pointer-events-none" />

      {/* FLOATING GLASS NAVIGATION BAR */}
      <header 
        className={`fixed top-4 left-1/2 -translate-x-1/2 z-50 w-[calc(100%-2rem)] max-w-7xl rounded-2xl border bg-slate-950/40 backdrop-blur-xl transition-colors duration-1000 shadow-[0_10px_30px_rgba(0,0,0,0.5)] ${
          isShieldActive ? 'border-purple-500/20 shadow-purple-500/5' : 'border-slate-900 shadow-cyan-500/5'
        }`}
      >
        <div className="flex items-center justify-between px-6 py-4">
          
          <CustomLogo isShieldActive={isShieldActive} />

          {/* Nav Links */}
          <nav className="hidden md:flex items-center gap-8 text-sm font-medium text-slate-400">
            
            <motion.span whileHover={{ y: -2, color: '#22d3ee' }} transition={{ duration: 0.2 }} className="cursor-pointer transition-colors">About Us</motion.span>
            <motion.span whileHover={{ y: -2, color: '#22d3ee' }} transition={{ duration: 0.2 }} className="cursor-pointer transition-colors">Careers</motion.span>
            <motion.span whileHover={{ y: -2, color: '#22d3ee' }} transition={{ duration: 0.2 }} className="cursor-pointer transition-colors">Contact Us</motion.span>
          </nav>

          <div className="hidden md:block">
            <button className="px-5 py-2.5 text-xs font-semibold tracking-widest uppercase border border-cyan-500/30 text-cyan-400 rounded-xl hover:bg-cyan-500/10 transition-all duration-300">
              Initialize Terminal
            </button>
          </div>

          <button 
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)} 
            className="block md:hidden text-slate-400 hover:text-cyan-400 transition-colors focus:outline-none"
          >
            <Menu className="w-6 h-6" />
          </button>
        </div>

        {/* Mobile Viewport Drawer */}
        {mobileMenuOpen && (
          <motion.div 
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            className="md:hidden border-t border-slate-900 bg-slate-950/95 px-6 py-4 flex flex-col gap-4 text-sm font-medium text-slate-400 rounded-b-2xl shadow-xl"
          >
           
            <span className="hover:text-cyan-400 cursor-pointer transition-colors py-1 border-t border-slate-900/60 pt-2">About Us</span>
            <span className="hover:text-cyan-400 cursor-pointer transition-colors py-1">Careers</span>
            <span className="hover:text-cyan-400 cursor-pointer transition-colors py-1">Contact Us</span>
            <button className="w-full mt-2 px-4 py-2.5 text-xs font-semibold tracking-widest uppercase border border-cyan-500/30 text-cyan-400 rounded-xl hover:bg-cyan-500/10 text-center transition-all">
              Initialize Terminal
            </button>
          </motion.div>
        )}
      </header>

      {/* 3D PERSPECTIVE ROW VIEWPORT */}
      <div className="relative z-10 max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 min-h-[calc(100vh-120px)] items-center px-6 md:px-12 gap-12 py-12 [perspective:1200px]">
        
        {/* Left Interactive Matrix Side */}
        <div className="flex flex-col justify-center space-y-6 bg-slate-950/40 p-6 md:p-8 border border-slate-900/60 rounded-2xl backdrop-blur-sm shadow-[0_20px_50px_rgba(0,0,0,0.5)] transform lg:[rotateY:10deg] [preserve-3d]">
          
          <motion.div 
            initial={{ opacity: 0, y: 60 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ type: "spring", damping: 20, stiffness: 60, delay: 0.1 }}
            className="inline-flex items-center gap-2 px-3 py-1 text-xs font-medium text-cyan-400 bg-cyan-950/50 border border-cyan-800/50 rounded-full w-fit"
          >
            <span className="w-2 h-2 rounded-full bg-cyan-400 animate-ping" />
            SYSTEM STATUS: OPERATIONAL
          </motion.div>

          <motion.h1 
            initial={{ opacity: 0, y: 60 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ type: "spring", damping: 20, stiffness: 60, delay: 0.2 }}
            className="text-4xl md:text-6xl font-extrabold tracking-tight leading-tight"
          >
            Next-Gen Autonomous <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600">
              Cyber Defense
            </span>
          </motion.h1>

          <motion.p 
            initial={{ opacity: 0, y: 60 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ type: "spring", damping: 20, stiffness: 60, delay: 0.3 }}
            className="text-slate-400 text-lg max-w-lg"
          >
            Intercept, analyze, and neutralize deep-network threats before they breach your perimeter. Powered by quantum-resistant encryption.
          </motion.p>

          {/* Call to Actions */}
          <motion.div 
            initial={{ opacity: 0, y: 60 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ type: "spring", damping: 20, stiffness: 60, delay: 0.4 }}
            className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 pt-2"
          >
            <button 
              onClick={() => setIsShieldActive(!isShieldActive)}
              className={`px-6 py-3.5 rounded-xl font-medium tracking-wide transition-all duration-500 flex items-center justify-center gap-3 shadow-xl flex-1 sm:flex-none ${
                isShieldActive 
                  ? 'bg-purple-600 hover:bg-purple-700 text-white shadow-purple-500/20' 
                  : 'bg-cyan-500 hover:bg-cyan-600 text-slate-950 shadow-cyan-500/20'
              }`}
            >
              {isShieldActive ? <Lock className="w-5 h-5" /> : <ShieldAlert className="w-5 h-5" />}
              <span>{isShieldActive ? "Deactivate Neural Shield" : "Deploy Neural Shield"}</span>
            </button>

            <button 
              onClick={handleContactClick}
              className="px-6 py-3.5 rounded-xl font-medium tracking-wide border border-slate-800 text-slate-300 hover:text-cyan-400 hover:border-cyan-500/30 hover:bg-cyan-500/5 transition-all duration-300 flex items-center justify-center gap-2 flex-1 sm:flex-none"
            >
              <Mail className="w-4 h-4" />
              <span>Contact Us</span>
            </button>
          </motion.div>

          {/* Infometrics */}
          <motion.div 
            initial={{ opacity: 0, y: 60 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ type: "spring", damping: 20, stiffness: 60, delay: 0.5 }}
            className="grid grid-cols-3 gap-4 pt-8 border-t border-slate-900/80"
          >
            <div className="p-3 bg-slate-900/40 border border-slate-800/60 rounded">
              <div className="flex items-center gap-1.5 text-slate-500 mb-1">
                <Terminal className="w-3.5 h-3.5 text-cyan-500" />
                <span className="text-[10px] font-mono uppercase tracking-wider">Threat Index</span>
              </div>
              <p className="text-xl font-bold font-mono text-emerald-400">0.02%</p>
            </div>
            <div className="p-3 bg-slate-900/40 border border-slate-800/60 rounded">
              <div className="flex items-center gap-1.5 text-slate-500 mb-1">
                <Cpu className="w-3.5 h-3.5 text-blue-500" />
                <span className="text-[10px] font-mono uppercase tracking-wider">Node Rate</span>
              </div>
              <p className="text-xl font-bold font-mono text-cyan-400">1.4ms</p>
            </div>
            <div className="p-3 bg-slate-900/40 border border-slate-800/60 rounded">
              <div className="flex items-center gap-1.5 text-slate-500 mb-1">
                <Shield className="w-3.5 h-3.5 text-purple-500" />
                <span className="text-[10px] font-mono uppercase tracking-wider">Encryption</span>
              </div>
              <p className="text-xl font-bold font-mono text-purple-400">AES-256</p>
            </div>
          </motion.div>
        </div>

        {/* Right 3D Scene Side */}
        <motion.div 
          initial={{ opacity: 0, y: 120 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ type: "spring", damping: 22, stiffness: 50, delay: 0.4 }}
          className="relative w-full h-[450px] md:h-[600px] cursor-grab active:cursor-grabbing group transform lg:[rotateY:-10deg] [preserve-3d]"
        >
          <div className={`absolute inset-0 rounded-full filter blur-[120px] opacity-25 transition-all duration-1000 pointer-events-none ${isShieldActive ? 'bg-purple-500' : 'bg-cyan-500'}`} />

          <CyberScene isShieldActive={isShieldActive} />

          <div className="absolute bottom-2 left-1/2 -translate-x-1/2 px-3 py-1 bg-slate-900/80 backdrop-blur-sm border border-slate-800 rounded text-[10px] font-mono tracking-widest text-slate-400 pointer-events-none uppercase transition-opacity opacity-50 group-hover:opacity-100">
            Drag Grid to View 3D Orbit
          </div>
        </motion.div>

      </div>
    </main>
  );
}