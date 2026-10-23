"use client";

import React, { Suspense } from "react";
import Link from "next/link";
import { useSearchParams } from "next/navigation";
import { ArrowLeft, User, Shield, AlertCircle } from "lucide-react";

function GetStartedContent() {
  const searchParams = useSearchParams();
  const role = searchParams.get("role");

  return (
    <div className="max-w-xl w-full bg-white rounded-xl border border-[#E2E8F0] shadow-md p-8">
      <div className="flex items-center justify-between pb-6 border-b border-[#E2E8F0] mb-6">
        <Link
          href="/"
          className="inline-flex items-center gap-2 text-sm font-semibold text-[#2563EB] hover:text-[#1D4ED8]"
        >
          <ArrowLeft className="w-4 h-4" />
          <span>Back to Landing Page</span>
        </Link>
        <div className="flex items-center gap-2">
          <img
            src="/images/nagarsetu-logo.png"
            alt="NagarSetu Logo"
            className="w-6 h-6 object-contain"
            width={24}
            height={24}
          />
          <span className="text-xs font-semibold px-2.5 py-1 rounded-full bg-blue-50 text-blue-700 border border-blue-200">
            NagarSetu MVP
          </span>
        </div>
      </div>

      {role === "citizen" ? (
        <div className="space-y-6">
          <div className="flex items-center gap-3">
            <div className="w-12 h-12 rounded-lg bg-[#EFF6FF] border border-[#BFDBFE] text-[#2563EB] flex items-center justify-center">
              <User className="w-6 h-6" />
            </div>
            <div>
              <h1 className="text-2xl font-bold text-[#163A63]">Citizen Portal</h1>
              <p className="text-sm text-[#4B5565]">Report issues and track redressal progress.</p>
            </div>
          </div>

          <div className="space-y-3 pt-2">
            <button
              type="button"
              className="w-full text-left p-4 rounded-xl border-2 border-[#2563EB] bg-[#EFF6FF] text-[#163A63] font-semibold text-sm hover:bg-blue-100/60 transition-colors"
            >
              <div className="font-bold text-base text-[#2563EB] mb-0.5">1. Report a New Civic Issue →</div>
              <p className="text-xs text-[#4B5565] font-normal">
                Upload photos, auto-detect GPS coordinates, and submit complaints.
              </p>
            </button>

            <button
              type="button"
              className="w-full text-left p-4 rounded-xl border border-[#E2E8F0] bg-white text-[#163A63] font-semibold text-sm hover:bg-gray-50 transition-colors"
            >
              <div className="font-bold text-base text-[#163A63] mb-0.5">2. Track an Existing Complaint →</div>
              <p className="text-xs text-[#4B5565] font-normal">
                Enter your ticket reference ID or mobile number to view live status.
              </p>
            </button>
          </div>
        </div>
      ) : role === "officer" ? (
        <div className="space-y-6">
          <div className="flex items-center gap-3">
            <div className="w-12 h-12 rounded-lg bg-[#EFF6FF] border border-[#BFDBFE] text-[#2563EB] flex items-center justify-center">
              <Shield className="w-6 h-6" />
            </div>
            <div>
              <h1 className="text-2xl font-bold text-[#163A63]">Municipal Command Center</h1>
              <p className="text-sm text-[#4B5565]">Official triage and field workforce management.</p>
            </div>
          </div>

          <div className="space-y-3 pt-2">
            <button
              type="button"
              className="w-full text-left p-4 rounded-xl border-2 border-[#2563EB] bg-[#EFF6FF] text-[#163A63] font-semibold text-sm hover:bg-blue-100/60 transition-colors"
            >
              <div className="font-bold text-base text-[#2563EB] mb-0.5">1. Access Command Center →</div>
              <p className="text-xs text-[#4B5565] font-normal">
                Review incoming complaints, view GIS heatmap, and allocate ward inspectors.
              </p>
            </button>

            <button
              type="button"
              className="w-full text-left p-4 rounded-xl border border-[#E2E8F0] bg-white text-[#163A63] font-semibold text-sm hover:bg-gray-50 transition-colors"
            >
              <div className="font-bold text-base text-[#163A63] mb-0.5">2. Field Inspection & Redressal →</div>
              <p className="text-xs text-[#4B5565] font-normal">
                Update repair status and upload resolution proof photos.
              </p>
            </button>
          </div>
        </div>
      ) : (
        <div className="space-y-6">
          <div className="flex items-center gap-3">
            <div className="w-12 h-12 rounded-lg bg-amber-50 text-amber-600 flex items-center justify-center">
              <AlertCircle className="w-6 h-6" />
            </div>
            <div>
              <h1 className="text-2xl font-bold text-[#163A63]">Select Workspace</h1>
              <p className="text-sm text-[#4B5565]">Please choose your portal to continue.</p>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
            <Link
              href="/get-started?role=citizen"
              className="p-4 rounded-xl border-2 border-[#E2E8F0] hover:border-[#2563EB] bg-white text-center hover:bg-blue-50/40 transition-all"
            >
              <User className="w-8 h-8 text-[#2563EB] mx-auto mb-2" />
              <div className="font-bold text-[#163A63]">Citizen Portal</div>
              <p className="text-xs text-[#4B5565] mt-1">Report & Track</p>
            </Link>

            <Link
              href="/get-started?role=officer"
              className="p-4 rounded-xl border-2 border-[#E2E8F0] hover:border-[#2563EB] bg-white text-center hover:bg-blue-50/40 transition-all"
            >
              <Shield className="w-8 h-8 text-[#2563EB] mx-auto mb-2" />
              <div className="font-bold text-[#163A63]">Municipal Officer</div>
              <p className="text-xs text-[#4B5565] mt-1">Command Center</p>
            </Link>
          </div>
        </div>
      )}
    </div>
  );
}

export default function GetStartedPage() {
  return (
    <div className="min-h-screen bg-[#F5F7FA] flex items-center justify-center p-4">
      <Suspense fallback={<div className="text-sm text-gray-500">Loading NagarSetu...</div>}>
        <GetStartedContent />
      </Suspense>
    </div>
  );
}
