"use client";

import React, { useState } from "react";
import Link from "next/link";
import {
  MapPin,
  Activity,
  ArrowRight,
  Menu,
  X,
  Camera,
  Layers,
  CheckCircle2,
  AlertTriangle,
  AlertOctagon,
  Lightbulb,
  Building2,
  User,
  Shield,
  Sparkles,
} from "lucide-react";

export default function LandingPage() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [roleModalOpen, setRoleModalOpen] = useState(false);

  const openModal = () => setRoleModalOpen(true);
  const closeModal = () => setRoleModalOpen(false);

  return (
    <div className="min-h-screen bg-white text-[#172033] flex flex-col font-sans w-full overflow-x-hidden selection:bg-blue-100 selection:text-blue-900">
      {/* ====================================================================
          1. Navigation Bar
          ==================================================================== */}
      <header className="sticky top-0 z-40 bg-white/95 backdrop-blur-md border-b border-[#E2E8F0] w-full">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 sm:h-20 flex items-center justify-between">
          {/* Logo Left */}
          <Link href="/" className="flex items-center gap-2.5 sm:gap-3 group shrink-0">
            <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-lg bg-gradient-to-br from-[#163A63] to-[#2563EB] flex items-center justify-center text-white shadow-xs shrink-0">
              <div className="relative flex items-center justify-center">
                <MapPin className="w-5 h-5 text-white stroke-[2.2]" />
                <Activity className="w-2.5 h-2.5 text-blue-200 absolute -bottom-0.5" />
              </div>
            </div>
            <div className="flex flex-col">
              <span className="text-lg sm:text-xl font-bold tracking-tight text-[#163A63] leading-tight">
                NagarSetu
              </span>
              <span className="text-[10px] sm:text-[11px] font-medium text-[#4B5565] tracking-tight">
                Smarter City Faster Solution
              </span>
            </div>
          </Link>

          {/* Nav Links Center */}
          <nav className="hidden md:flex items-center gap-6 lg:gap-8 text-sm lg:text-[15px] font-medium text-[#172033]" aria-label="Main Navigation">
            <Link href="#home" className="hover:text-[#2563EB] transition-colors py-1">
              Home
            </Link>
            <Link href="#about" className="hover:text-[#2563EB] transition-colors py-1">
              About
            </Link>
            <Link href="#features" className="hover:text-[#2563EB] transition-colors py-1">
              Features
            </Link>
            <Link href="#contact" className="hover:text-[#2563EB] transition-colors py-1">
              Contact
            </Link>
          </nav>

          {/* Primary CTA & Mobile Hamburger */}
          <div className="flex items-center gap-2.5 sm:gap-3">
            <button
              onClick={openModal}
              type="button"
              className="inline-flex items-center gap-1.5 sm:gap-2 bg-[#2563EB] hover:bg-[#1D4ED8] text-white font-semibold text-xs sm:text-sm px-3.5 sm:px-4 py-2 sm:py-2.5 rounded-lg shadow-xs transition-colors focus:ring-2 focus:ring-blue-500 focus:outline-none"
            >
              <span>Get Started</span>
              <ArrowRight className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
            </button>

            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden p-2 rounded-lg border border-[#E2E8F0] text-[#163A63] hover:bg-[#F5F7FA] focus:outline-none focus:ring-2 focus:ring-blue-500"
              aria-label="Toggle navigation menu"
              aria-expanded={mobileMenuOpen}
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>

        {/* Mobile Dropdown */}
        {mobileMenuOpen && (
          <div className="md:hidden bg-white border-b border-[#E2E8F0] px-4 py-4 space-y-3 animate-in fade-in slide-in-from-top-2 duration-150">
            <Link
              href="#home"
              onClick={() => setMobileMenuOpen(false)}
              className="block text-sm font-medium text-[#172033] py-2 border-b border-gray-100"
            >
              Home
            </Link>
            <Link
              href="#about"
              onClick={() => setMobileMenuOpen(false)}
              className="block text-sm font-medium text-[#172033] py-2 border-b border-gray-100"
            >
              About
            </Link>
            <Link
              href="#features"
              onClick={() => setMobileMenuOpen(false)}
              className="block text-sm font-medium text-[#172033] py-2 border-b border-gray-100"
            >
              Features
            </Link>
            <Link
              href="#contact"
              onClick={() => setMobileMenuOpen(false)}
              className="block text-sm font-medium text-[#172033] py-2"
            >
              Contact
            </Link>
          </div>
        )}
      </header>

      <main id="home" className="flex-1 w-full">
        {/* ====================================================================
            2. Main Hero Section with Animative Background Graphics
            ==================================================================== */}
        <section className="relative bg-white py-8 sm:py-12 md:py-16 lg:py-20 border-b border-[#F5F7FA] overflow-hidden">
          {/* 0. High-Quality Smart City & NagarSetu Bridge Blueprint Graphic (Low Opacity Backdrop) */}
          <div className="absolute inset-0 pointer-events-none select-none overflow-hidden -z-20">
            <img
              src="/images/nagarsetu-hero-city-backdrop.jpg"
              alt=""
              className="w-full h-full object-cover object-center opacity-[0.12] sm:opacity-[0.16] mix-blend-multiply filter contrast-125"
              aria-hidden="true"
            />
            {/* Smooth Edge Fade Gradients to seamlessly blend into #FFFFFF */}
            <div className="absolute inset-0 bg-gradient-to-t from-white via-transparent to-white/70" />
            <div className="absolute inset-0 bg-gradient-to-r from-white/90 via-transparent to-white/60" />
          </div>

          {/* 1. Subtle Geolocation Dot Matrix Grid Pattern */}
          <div className="absolute inset-0 civic-grid-pattern opacity-60 pointer-events-none" />

          {/* 2. Soft Ambient Civic Blue Glow Orbs (Pulsing) */}
          <div className="absolute top-10 left-1/4 w-96 h-96 bg-blue-100/50 rounded-full blur-3xl pointer-events-none animate-civic-pulse -z-10" />
          <div className="absolute bottom-5 right-10 w-[450px] h-[450px] bg-slate-100/70 rounded-full blur-3xl pointer-events-none animate-civic-float -z-10" />

          {/* 3. Animative Smart-City Vector Circuitry & Radar Overlay */}
          <div className="absolute inset-0 pointer-events-none overflow-hidden select-none opacity-40 sm:opacity-55">
            <svg
              className="w-full h-full"
              viewBox="0 0 1440 680"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              preserveAspectRatio="xMidYMid slice"
            >
              {/* Animated Connected Data Flow Highway */}
              <path
                d="M -100 120 C 300 120, 500 240, 850 190 S 1200 320, 1550 260"
                stroke="#2563EB"
                strokeWidth="1.5"
                strokeDasharray="6 8"
                className="animate-civic-dash"
                strokeOpacity="0.4"
              />
              <path
                d="M -50 480 C 250 420, 580 540, 950 440 S 1350 510, 1600 480"
                stroke="#163A63"
                strokeWidth="1.5"
                strokeDasharray="8 10"
                className="animate-civic-dash"
                strokeOpacity="0.3"
              />

              {/* Animative Radar Sweep Rings (Smart City Geolocation Hub) */}
              <g transform="translate(1180, 240)">
                <circle cx="0" cy="0" r="140" stroke="#2563EB" strokeWidth="1" strokeOpacity="0.25" strokeDasharray="3 4" />
                <circle cx="0" cy="0" r="90" stroke="#2563EB" strokeWidth="1.2" strokeOpacity="0.35" />
                <circle cx="0" cy="0" r="40" stroke="#163A63" strokeWidth="1.5" strokeOpacity="0.45" />
                <circle cx="0" cy="0" r="4" fill="#2563EB" />
                {/* Rotating scanner beam */}
                <line
                  x1="0"
                  y1="0"
                  x2="0"
                  y2="-140"
                  stroke="#2563EB"
                  strokeWidth="2"
                  strokeOpacity="0.6"
                  className="animate-civic-radar"
                />
              </g>

              {/* Geolocation Sensor Beacon Signals */}
              <g transform="translate(180, 210)" className="animate-civic-float">
                <circle cx="0" cy="0" r="28" stroke="#2563EB" strokeWidth="1" strokeOpacity="0.3" strokeDasharray="2 3" />
                <circle cx="0" cy="0" r="14" stroke="#2563EB" strokeWidth="1.2" strokeOpacity="0.5" />
                <circle cx="0" cy="0" r="3.5" fill="#2563EB" />
              </g>

              <g transform="translate(560, 90)" className="animate-civic-pulse">
                <circle cx="0" cy="0" r="20" stroke="#163A63" strokeWidth="1" strokeOpacity="0.35" />
                <circle cx="0" cy="0" r="3" fill="#163A63" />
              </g>
            </svg>
          </div>

          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 z-10">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 xl:gap-14 items-center">
              
              {/* Left Column (Main Content) */}
              <div className="lg:col-span-6 flex flex-col items-start w-full">
                {/* Badge */}
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-[11px] sm:text-xs font-semibold bg-[#EFF6FF] text-[#2563EB] border border-[#BFDBFE] mb-4 sm:mb-5 uppercase tracking-wide">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#2563EB] shrink-0" />
                  <span>AI-Powered Smart City Platform</span>
                </div>

                {/* Main Heading */}
                <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-[#163A63] leading-[1.18] sm:leading-[1.15] mb-4 sm:mb-5">
                  Smarter Cities Start with{" "}
                  <span className="text-[#2563EB]">Every Citizen’s Voice.</span>
                </h1>

                {/* Supporting Paragraph */}
                <p className="text-sm sm:text-base md:text-lg text-[#4B5565] leading-relaxed mb-6 sm:mb-8 max-w-xl">
                  NagarSetu transforms civic complaints into intelligent action. Report infrastructure problems, identify urgent incidents, and help municipal teams build safer, smarter cities.
                </p>

                {/* Single Prominent CTA */}
                <div className="flex flex-col items-start gap-2.5 w-full sm:w-auto">
                  <button
                    onClick={openModal}
                    type="button"
                    className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 bg-[#2563EB] hover:bg-[#1D4ED8] text-white font-bold text-base px-6 sm:px-8 py-3.5 rounded-lg shadow-sm hover:shadow transition-all focus:ring-3 focus:ring-blue-400 focus:outline-none"
                  >
                    <span>Get Started</span>
                    <ArrowRight className="w-5 h-5" />
                  </button>
                  <span className="text-xs text-[#6B7280] font-medium tracking-normal text-left">
                    Report issues. Track progress. Improve your city.
                  </span>
                </div>
              </div>

              {/* Right Column (CivicPulse Dashboard Preview) */}
              <div className="lg:col-span-6 w-full mt-4 lg:mt-0">
                <div className="bg-white rounded-xl border border-[#E2E8F0] shadow-md overflow-hidden flex flex-col w-full max-w-2xl mx-auto lg:max-w-none">
                  
                  {/* Card Header */}
                  <div className="bg-[#163A63] px-3.5 sm:px-4 py-3 flex items-center justify-between text-white border-b border-blue-950">
                    <div className="flex items-center gap-2 min-w-0">
                      <Building2 className="w-4 h-4 text-blue-300 shrink-0" />
                      <span className="text-xs font-semibold tracking-wide truncate">
                        Ward 04 Command Center
                      </span>
                    </div>
                    <div className="flex items-center gap-2 shrink-0">
                      <span className="inline-flex items-center gap-1.5 px-2 py-0.5 rounded-full text-[10px] font-semibold bg-emerald-500/20 text-emerald-300 border border-emerald-500/40">
                        <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
                        LIVE
                      </span>
                      <span className="text-[10px] sm:text-[11px] text-slate-300 hidden xs:inline">Updated 2m ago</span>
                    </div>
                  </div>

                  <div className="p-3.5 sm:p-5 flex flex-col gap-3.5 sm:gap-4">
                    {/* Three Compact Stat Cards */}
                    <div className="grid grid-cols-3 gap-2 sm:gap-2.5">
                      <div className="bg-[#F5F7FA] border border-[#E2E8F0] rounded-lg p-2 sm:p-2.5 flex flex-col justify-between">
                        <span className="text-[9px] sm:text-[10px] font-semibold text-[#4B5565] uppercase tracking-wider leading-tight">
                          Open Complaints
                        </span>
                        <span className="text-lg sm:text-2xl font-bold text-[#163A63] mt-1">
                          128
                        </span>
                      </div>
                      <div className="bg-[#F5F7FA] border border-[#E2E8F0] rounded-lg p-2 sm:p-2.5 flex flex-col justify-between">
                        <span className="text-[9px] sm:text-[10px] font-semibold text-rose-700 uppercase tracking-wider leading-tight">
                          Critical Incidents
                        </span>
                        <span className="text-lg sm:text-2xl font-bold text-rose-600 mt-1">
                          08
                        </span>
                      </div>
                      <div className="bg-[#F5F7FA] border border-[#E2E8F0] rounded-lg p-2 sm:p-2.5 flex flex-col justify-between">
                        <span className="text-[9px] sm:text-[10px] font-semibold text-emerald-700 uppercase tracking-wider leading-tight">
                          Resolved Today
                        </span>
                        <span className="text-lg sm:text-2xl font-bold text-emerald-600 mt-1">
                          64
                        </span>
                      </div>
                    </div>

                    {/* Small City Incident Map Preview */}
                    <div className="relative h-32 sm:h-36 bg-[#EBF1F6] rounded-lg border border-[#E2E8F0] overflow-hidden">
                      <svg className="w-full h-full" viewBox="0 0 400 144" preserveAspectRatio="none">
                        <rect width="400" height="144" fill="#E8F0F7" />
                        <path d="M 0,105 Q 120,115 200,80 T 400,90" fill="none" stroke="#BFDBFE" strokeWidth="12" />
                        <path d="M 50,0 L 50,144 M 160,0 L 160,144 M 270,0 L 270,144 M 350,0 L 350,144" stroke="#CBD5E1" strokeWidth="2" />
                        <path d="M 0,40 L 400,40 M 0,90 L 400,90 M 0,125 L 400,125" stroke="#CBD5E1" strokeWidth="2" />
                      </svg>

                      {/* Map Pins */}
                      <div
                        className="absolute top-1/4 left-1/3 w-5 h-5 rounded-full bg-rose-600 text-white text-[10px] font-bold flex items-center justify-center border-2 border-white shadow-sm"
                        title="Critical: Water Main Burst"
                      >
                        !
                      </div>
                      <div
                        className="absolute top-2/3 left-2/3 w-5 h-5 rounded-full bg-amber-500 text-white text-[10px] font-bold flex items-center justify-center border-2 border-white shadow-sm"
                        title="High: Road Damage"
                      >
                        !
                      </div>
                      <div
                        className="absolute top-1/3 left-3/4 w-5 h-5 rounded-full bg-blue-600 text-white text-[10px] font-bold flex items-center justify-center border-2 border-white shadow-sm"
                        title="Medium: Streetlight Failure"
                      >
                        •
                      </div>
                      <div
                        className="absolute top-3/4 left-1/5 w-5 h-5 rounded-full bg-emerald-600 text-white text-[10px] font-bold flex items-center justify-center border-2 border-white shadow-sm"
                        title="Resolved Incident"
                      >
                        ✓
                      </div>

                      <div className="absolute bottom-2 right-2 bg-white/95 px-2 py-0.5 rounded text-[9px] sm:text-[10px] font-semibold text-[#4B5565] border border-gray-200">
                        Sector 4-B GIS Heatmap
                      </div>
                    </div>

                    {/* Priority Incident List */}
                    <div className="space-y-1.5">
                      <span className="text-[10px] sm:text-[11px] font-bold text-[#4B5565] uppercase tracking-wider block">
                        Priority Incident List
                      </span>

                      <div className="flex items-center justify-between p-2 rounded-lg bg-[#F5F7FA] border border-[#E2E8F0] text-xs gap-2">
                        <div className="flex items-center gap-2 min-w-0">
                          <AlertOctagon className="w-3.5 h-3.5 text-rose-600 shrink-0" />
                          <span className="font-semibold text-[#172033] truncate">
                            Water Leakage — Sector 4
                          </span>
                        </div>
                        <span className="px-2 py-0.5 rounded-full text-[10px] font-bold bg-rose-100 text-rose-800 border border-rose-200 shrink-0">
                          Critical
                        </span>
                      </div>

                      <div className="flex items-center justify-between p-2 rounded-lg bg-[#F5F7FA] border border-[#E2E8F0] text-xs gap-2">
                        <div className="flex items-center gap-2 min-w-0">
                          <AlertTriangle className="w-3.5 h-3.5 text-amber-600 shrink-0" />
                          <span className="font-semibold text-[#172033] truncate">
                            Road Damage — MG Avenue
                          </span>
                        </div>
                        <span className="px-2 py-0.5 rounded-full text-[10px] font-bold bg-amber-100 text-amber-800 border border-amber-200 shrink-0">
                          High
                        </span>
                      </div>

                      <div className="flex items-center justify-between p-2 rounded-lg bg-[#F5F7FA] border border-[#E2E8F0] text-xs gap-2">
                        <div className="flex items-center gap-2 min-w-0">
                          <Lightbulb className="w-3.5 h-3.5 text-blue-600 shrink-0" />
                          <span className="font-semibold text-[#172033] truncate">
                            Streetlight Failure — North Line
                          </span>
                        </div>
                        <span className="px-2 py-0.5 rounded-full text-[10px] font-bold bg-blue-100 text-blue-800 border border-blue-200 shrink-0">
                          Medium
                        </span>
                      </div>
                    </div>

                    {/* AI Insight Panel */}
                    <div className="bg-[#F8FAFC] border border-[#CBD5E1] border-l-4 border-l-[#2563EB] rounded-lg p-2.5 flex items-start gap-2.5">
                      <div className="w-5 h-5 rounded bg-blue-100 text-[#2563EB] flex items-center justify-center shrink-0 mt-0.5">
                        <Sparkles className="w-3 h-3" />
                      </div>
                      <div className="text-xs">
                        <span className="font-bold text-[#2563EB] uppercase tracking-wide text-[10px] block mb-0.5">
                          AI Triage Insight
                        </span>
                        <p className="text-[#172033] leading-snug text-[11px] sm:text-xs">
                          Multiple reports detected near the same location. Recommended action: inspect and assign the relevant department.
                        </p>
                      </div>
                    </div>

                    <p className="text-center text-[10px] text-[#6B7280]">
                      Illustrative demo statistics, not live municipal data.
                    </p>
                  </div>
                </div>
              </div>

            </div>
          </div>
        </section>

        {/* ====================================================================
            3. Quick Introduction
            ==================================================================== */}
        <section className="bg-[#F5F7FA] py-12 sm:py-16 md:py-20 border-b border-[#E2E8F0]" id="about">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            
            <div className="text-center max-w-2xl mx-auto mb-10 sm:mb-12">
              <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-[#163A63] mb-3">
                One Platform. Smarter Civic Action.
              </h2>
              <p className="text-sm sm:text-base text-[#4B5565] leading-relaxed">
                NagarSetu connects citizens, municipal departments, and intelligent incident management in one unified platform.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-5 sm:gap-6" id="features">
              
              {/* Card 1 */}
              <div className="bg-white border border-[#E2E8F0] rounded-xl p-5 sm:p-6 shadow-xs hover:border-[#BFDBFE] hover:shadow-sm transition-all flex flex-col items-start">
                <div className="w-11 h-11 sm:w-12 sm:h-12 rounded-lg bg-[#EFF6FF] border border-[#BFDBFE] text-[#2563EB] flex items-center justify-center mb-4 sm:mb-5 shrink-0">
                  <Camera className="w-5 h-5 sm:w-6 sm:h-6 stroke-[1.8]" />
                </div>
                <h3 className="text-base sm:text-lg font-bold text-[#163A63] mb-2">
                  Report Civic Issues
                </h3>
                <p className="text-xs sm:text-sm text-[#4B5565] leading-relaxed">
                  Submit complaints with a description, location, and optional photograph.
                </p>
              </div>

              {/* Card 2 */}
              <div className="bg-white border border-[#E2E8F0] rounded-xl p-5 sm:p-6 shadow-xs hover:border-[#BFDBFE] hover:shadow-sm transition-all flex flex-col items-start">
                <div className="w-11 h-11 sm:w-12 sm:h-12 rounded-lg bg-[#EFF6FF] border border-[#BFDBFE] text-[#2563EB] flex items-center justify-center mb-4 sm:mb-5 shrink-0">
                  <Layers className="w-5 h-5 sm:w-6 sm:h-6 stroke-[1.8]" />
                </div>
                <h3 className="text-base sm:text-lg font-bold text-[#163A63] mb-2">
                  AI-Powered Prioritization
                </h3>
                <p className="text-xs sm:text-sm text-[#4B5565] leading-relaxed">
                  Identify duplicate reports and prioritize urgent infrastructure problems.
                </p>
              </div>

              {/* Card 3 */}
              <div className="bg-white border border-[#E2E8F0] rounded-xl p-5 sm:p-6 shadow-xs hover:border-[#BFDBFE] hover:shadow-sm transition-all flex flex-col items-start">
                <div className="w-11 h-11 sm:w-12 sm:h-12 rounded-lg bg-[#EFF6FF] border border-[#BFDBFE] text-[#2563EB] flex items-center justify-center mb-4 sm:mb-5 shrink-0">
                  <CheckCircle2 className="w-5 h-5 sm:w-6 sm:h-6 stroke-[1.8]" />
                </div>
                <h3 className="text-base sm:text-lg font-bold text-[#163A63] mb-2">
                  Faster Resolution
                </h3>
                <p className="text-xs sm:text-sm text-[#4B5565] leading-relaxed">
                  Help municipal teams assign, track, and resolve incidents efficiently.
                </p>
              </div>

            </div>

            {/* Problem Statement & Smart City Infrastructure Graphic Showcase */}
            <div className="mt-12 bg-white rounded-2xl border border-[#E2E8F0] shadow-sm overflow-hidden">
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-0 items-center">
                
                {/* Visual Image Banner */}
                <div className="lg:col-span-7 bg-[#F8FAFC] border-b lg:border-b-0 lg:border-r border-[#E2E8F0] relative overflow-hidden flex items-center justify-center p-2 sm:p-4">
                  <img
                    src="/images/civic-infrastructure.jpg"
                    alt="NagarSetu Civic Infrastructure Problem Statement and Unified Dashboard Solution"
                    className="w-full h-auto object-cover rounded-xl shadow-xs"
                    loading="lazy"
                  />
                  <div className="absolute top-4 left-4 bg-[#163A63]/90 text-white text-[10px] sm:text-xs font-semibold px-2.5 py-1 rounded-full backdrop-blur-xs">
                    Civic Infrastructure Ecosystem
                  </div>
                </div>

                {/* Problem & Solution Explanation */}
                <div className="lg:col-span-5 p-6 sm:p-8 flex flex-col justify-center">
                  <div className="inline-flex items-center gap-2 px-2.5 py-1 rounded-full text-[11px] font-bold bg-[#EFF6FF] text-[#2563EB] border border-[#BFDBFE] uppercase tracking-wider mb-4 w-fit">
                    The Problem & Solution
                  </div>

                  <h3 className="text-xl sm:text-2xl font-bold text-[#163A63] tracking-tight mb-3">
                    Bridging Citizens with Urban Local Bodies
                  </h3>

                  <p className="text-xs sm:text-sm text-[#4B5565] leading-relaxed mb-5">
                    Municipal teams typically struggle with fragmented complaints across road hazards, water main bursts, and waste bottlenecks. NagarSetu turns raw reports into actionable triage clusters with automated GIS routing.
                  </p>

                  <div className="space-y-3 border-t border-[#E2E8F0] pt-4 text-xs text-[#172033]">
                    <div className="flex items-start gap-2.5">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#2563EB] mt-1.5 shrink-0" />
                      <span><strong>Potholes & Roads:</strong> Automatic hazard grouping to prevent duplicate contractor dispatches.</span>
                    </div>
                    <div className="flex items-start gap-2.5">
                      <span className="w-1.5 h-1.5 rounded-full bg-rose-600 mt-1.5 shrink-0" />
                      <span><strong>Water Pipeline Leaks:</strong> High-priority alerts to prevent water contamination and wastage.</span>
                    </div>
                    <div className="flex items-start gap-2.5">
                      <span className="w-1.5 h-1.5 rounded-full bg-emerald-600 mt-1.5 shrink-0" />
                      <span><strong>Waste Management:</strong> Real-time sanitation tracking with verified resolution proof.</span>
                    </div>
                  </div>
                </div>

              </div>
            </div>
          </div>
        </section>

        {/* ====================================================================
            4. How It Works
            ==================================================================== */}
        <section className="bg-white py-12 sm:py-16 md:py-20 border-b border-[#E2E8F0]" id="how-it-works">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            
            <div className="text-center max-w-xl mx-auto mb-10 sm:mb-14">
              <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-[#163A63] mb-2">
                How It Works
              </h2>
              <p className="text-xs sm:text-sm text-[#4B5565]">
                A clear four-step pipeline from complaint submission to verified repair.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 relative">
              
              {/* Step 1 */}
              <div className="bg-white border border-[#E2E8F0] rounded-xl p-5 sm:p-6 flex flex-col items-center text-center shadow-xs">
                <div className="w-10 h-10 sm:w-11 sm:h-11 rounded-full border-2 border-[#2563EB] bg-[#EFF6FF] text-[#2563EB] font-bold text-sm sm:text-base flex items-center justify-center mb-3 sm:mb-4 shadow-xs">
                  1
                </div>
                <h3 className="text-sm sm:text-base font-bold text-[#163A63] mb-1.5">
                  Report
                </h3>
                <p className="text-xs text-[#4B5565] leading-relaxed">
                  Submit a civic complaint.
                </p>
              </div>

              {/* Step 2 */}
              <div className="bg-white border border-[#E2E8F0] rounded-xl p-5 sm:p-6 flex flex-col items-center text-center shadow-xs">
                <div className="w-10 h-10 sm:w-11 sm:h-11 rounded-full border-2 border-[#2563EB] bg-[#EFF6FF] text-[#2563EB] font-bold text-sm sm:text-base flex items-center justify-center mb-3 sm:mb-4 shadow-xs">
                  2
                </div>
                <h3 className="text-sm sm:text-base font-bold text-[#163A63] mb-1.5">
                  Analyze
                </h3>
                <p className="text-xs text-[#4B5565] leading-relaxed">
                  AI classifies and groups related reports.
                </p>
              </div>

              {/* Step 3 */}
              <div className="bg-white border border-[#E2E8F0] rounded-xl p-5 sm:p-6 flex flex-col items-center text-center shadow-xs">
                <div className="w-10 h-10 sm:w-11 sm:h-11 rounded-full border-2 border-[#2563EB] bg-[#EFF6FF] text-[#2563EB] font-bold text-sm sm:text-base flex items-center justify-center mb-3 sm:mb-4 shadow-xs">
                  3
                </div>
                <h3 className="text-sm sm:text-base font-bold text-[#163A63] mb-1.5">
                  Prioritize
                </h3>
                <p className="text-xs text-[#4B5565] leading-relaxed">
                  Incidents receive an explainable urgency score.
                </p>
              </div>

              {/* Step 4 */}
              <div className="bg-white border border-[#E2E8F0] rounded-xl p-5 sm:p-6 flex flex-col items-center text-center shadow-xs">
                <div className="w-10 h-10 sm:w-11 sm:h-11 rounded-full border-2 border-[#2563EB] bg-[#EFF6FF] text-[#2563EB] font-bold text-sm sm:text-base flex items-center justify-center mb-3 sm:mb-4 shadow-xs">
                  4
                </div>
                <h3 className="text-sm sm:text-base font-bold text-[#163A63] mb-1.5">
                  Resolve
                </h3>
                <p className="text-xs text-[#4B5565] leading-relaxed">
                  Municipal teams receive assignments and track repairs.
                </p>
              </div>

            </div>
          </div>
        </section>

        {/* ====================================================================
            5. Get Started CTA Section
            ==================================================================== */}
        <section className="bg-[#EFF6FF] py-12 sm:py-16 md:py-20 border-b border-[#DBEAFE] text-center">
          <div className="max-w-2xl mx-auto px-4 sm:px-6 flex flex-col items-center">
            <h2 className="text-2xl sm:text-3xl font-extrabold text-[#163A63] tracking-tight mb-3">
              Ready to Make Your City Better?
            </h2>
            <p className="text-sm sm:text-base text-[#4B5565] mb-6 sm:mb-8 leading-relaxed max-w-lg">
              Start with a report and help turn civic problems into meaningful action.
            </p>

            <button
              onClick={openModal}
              type="button"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 bg-[#2563EB] hover:bg-[#1D4ED8] text-white font-bold text-base sm:text-lg px-7 sm:px-9 py-3.5 rounded-lg shadow-sm hover:shadow transition-all focus:ring-3 focus:ring-blue-400 focus:outline-none"
            >
              <span>Get Started</span>
              <ArrowRight className="w-5 h-5" />
            </button>
          </div>
        </section>
      </main>

      {/* ====================================================================
          6. Footer
          ==================================================================== */}
      <footer className="bg-white py-8 sm:py-10 border-t border-[#E2E8F0]" id="contact">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6 pb-6 sm:pb-8 border-b border-gray-100">
            {/* Logo */}
            <div className="flex items-center gap-2.5 sm:gap-3">
              <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-[#163A63] to-[#2563EB] flex items-center justify-center text-white shrink-0">
                <MapPin className="w-4 h-4 stroke-[2.2]" />
              </div>
              <div className="flex flex-col">
                <span className="text-base font-bold tracking-tight text-[#163A63]">
                  NagarSetu
                </span>
                <span className="text-[10px] text-[#4B5565]">
                  Smarter City Faster Solution
                </span>
              </div>
            </div>

            {/* Links */}
            <div className="flex flex-wrap items-center justify-center gap-5 sm:gap-6 text-xs sm:text-sm text-[#4B5565] font-medium">
              <Link href="#home" className="hover:text-[#2563EB] py-1">Home</Link>
              <Link href="#about" className="hover:text-[#2563EB] py-1">About</Link>
              <Link href="#features" className="hover:text-[#2563EB] py-1">Features</Link>
              <Link href="#contact" className="hover:text-[#2563EB] py-1">Contact</Link>
            </div>
          </div>

          <div className="pt-6 flex flex-col sm:flex-row items-center justify-between gap-3 text-center sm:text-left text-xs text-[#6B7280]">
            <p>
              NagarSetu is a demonstration platform. Displayed incidents and statistics may be simulated.
            </p>
            <p className="shrink-0">© 2026 NagarSetu.</p>
          </div>
        </div>
      </footer>

      {/* ====================================================================
          7. Role Selection Modal (Citizen vs Municipal Officer)
          ==================================================================== */}
      {roleModalOpen && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-slate-900/50 backdrop-blur-xs p-3 sm:p-4 overflow-y-auto"
          role="dialog"
          aria-modal="true"
          aria-labelledby="roleModalTitle"
          onClick={closeModal}
        >
          <div
            className="bg-white rounded-xl border border-[#E2E8F0] shadow-xl max-w-lg w-full overflow-hidden animate-in fade-in zoom-in-95 duration-150 my-auto"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Modal Header */}
            <div className="p-4 sm:p-5 border-b border-[#E2E8F0] bg-[#F5F7FA] flex items-center justify-between gap-3">
              <div>
                <h3 id="roleModalTitle" className="text-base sm:text-lg font-bold text-[#163A63]">
                  Choose Your Role to Continue
                </h3>
                <p className="text-[11px] sm:text-xs text-[#4B5565] mt-0.5">
                  Select your portal to access the appropriate NagarSetu workspace.
                </p>
              </div>
              <button
                onClick={closeModal}
                className="p-1.5 rounded-lg text-gray-400 hover:text-gray-700 hover:bg-gray-200 shrink-0"
                aria-label="Close dialog"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Modal Options */}
            <div className="p-4 sm:p-6 space-y-3 sm:space-y-4">
              
              {/* Option 1: Citizen */}
              <Link
                href="/get-started?role=citizen"
                className="group p-3.5 sm:p-4 rounded-xl border-2 border-[#E2E8F0] hover:border-[#2563EB] bg-white hover:bg-blue-50/40 transition-all flex items-start gap-3 sm:gap-4 block"
              >
                <div className="w-10 h-10 sm:w-11 sm:h-11 rounded-lg bg-[#EFF6FF] border border-[#BFDBFE] text-[#2563EB] flex items-center justify-center shrink-0">
                  <User className="w-5 h-5 sm:w-6 sm:h-6 stroke-[1.8]" />
                </div>
                <div className="flex-1 min-w-0">
                  <div className="flex items-center justify-between">
                    <span className="font-bold text-sm sm:text-base text-[#163A63] group-hover:text-[#2563EB] transition-colors">
                      Citizen
                    </span>
                    <ArrowRight className="w-4 h-4 text-[#2563EB] opacity-0 group-hover:opacity-100 transition-opacity shrink-0" />
                  </div>
                  <ul className="mt-1.5 text-[11px] sm:text-xs text-[#4B5565] space-y-1">
                    <li className="flex items-center gap-1.5 truncate">
                      <span className="w-1 h-1 rounded-full bg-[#2563EB] shrink-0" />
                      Report a new civic issue.
                    </li>
                    <li className="flex items-center gap-1.5 truncate">
                      <span className="w-1 h-1 rounded-full bg-[#2563EB] shrink-0" />
                      Track an existing complaint.
                    </li>
                  </ul>
                </div>
              </Link>

              {/* Option 2: Municipal Officer */}
              <Link
                href="/get-started?role=officer"
                className="group p-3.5 sm:p-4 rounded-xl border-2 border-[#E2E8F0] hover:border-[#2563EB] bg-white hover:bg-blue-50/40 transition-all flex items-start gap-3 sm:gap-4 block"
              >
                <div className="w-10 h-10 sm:w-11 sm:h-11 rounded-lg bg-[#EFF6FF] border border-[#BFDBFE] text-[#2563EB] flex items-center justify-center shrink-0">
                  <Shield className="w-5 h-5 sm:w-6 sm:h-6 stroke-[1.8]" />
                </div>
                <div className="flex-1 min-w-0">
                  <div className="flex items-center justify-between">
                    <span className="font-bold text-sm sm:text-base text-[#163A63] group-hover:text-[#2563EB] transition-colors">
                      Municipal Officer
                    </span>
                    <ArrowRight className="w-4 h-4 text-[#2563EB] opacity-0 group-hover:opacity-100 transition-opacity shrink-0" />
                  </div>
                  <ul className="mt-1.5 text-[11px] sm:text-xs text-[#4B5565] space-y-1">
                    <li className="flex items-center gap-1.5 truncate">
                      <span className="w-1 h-1 rounded-full bg-[#2563EB] shrink-0" />
                      Access the command center.
                    </li>
                    <li className="flex items-center gap-1.5 truncate">
                      <span className="w-1 h-1 rounded-full bg-[#2563EB] shrink-0" />
                      Review and manage incidents.
                    </li>
                  </ul>
                </div>
              </Link>

            </div>

            {/* Modal Footer */}
            <div className="px-4 sm:px-6 py-3 bg-[#F5F7FA] border-t border-[#E2E8F0] flex items-center justify-between text-[10px] sm:text-[11px] text-[#6B7280]">
              <span className="truncate">Target: <code>/get-started?role=...</code></span>
              <span className="shrink-0 ml-2">Encrypted SSL</span>
            </div>

          </div>
        </div>
      )}
    </div>
  );
}
