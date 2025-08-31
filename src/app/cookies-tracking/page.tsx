"use client"

import React from "react";
import Link from "next/link";

export default function CookiesTrackingPage() {
  return (
    <div className="w-full h-screen relative overflow-hidden">
      {/* Background video */}
      <video
        className="w-full h-screen object-cover pointer-events-none absolute inset-0"
        autoPlay
        muted
        loop
      >
        <source src="/videos/Loop_LoginLoop.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      {/* Content overlay */}
      <div className="relative z-10 w-full h-screen overflow-y-auto">
        <div className="min-h-screen bg-opacity-70 flex flex-col">
          
          {/* Content */}
          <div className="flex-1 p-6 text-white">
            <div className="max-w-4xl mx-auto space-y-6 rounded bg-gradient-to-b from-[#262626] to-[#262626]/50 p-5">
              <div className="text-left mb-8">
                <h1 className="text-3xl font-bold text-[#FF0000] mb-2">Cookies & Tracking Policy</h1>
                <p className="text-gray-400">Last Updated: 18.08.2025</p>
              </div>

              <section>
                <p className="text-gray-300 leading-relaxed mb-6">
                  The Bucharest Underground website and application ("the Application") use cookies and similar technologies to ensure optimal functionality, security, and to improve the user experience.
                </p>
              </section>

              <section>
                <h2 className="text-xl font-semibold mb-4 text-[#FF0000]">1. What Are Cookies?</h2>
                <p className="text-gray-300 leading-relaxed">
                  Cookies are small text files stored on your device when you visit or interact with our Application. They can be "first-party" (set directly by us) or "third-party" (set by service providers such as analytics tools).
                </p>
              </section>

              <section>
                <h2 className="text-xl font-semibold mb-4 text-[#FF0000]">2. Types of Cookies We Use</h2>
                
                <div className="space-y-4">
                  <div>
                    <h3 className="text-lg font-semibold mb-2 text-[#FF0000]">Strictly Necessary Cookies</h3>
                    <ul className="list-disc list-inside text-gray-300 space-y-1">
                      <li>These cookies are essential for the core operation of the Application.</li>
                      <li>They enable authentication, account login, security features, and basic functionality.</li>
                      <li>Without them, the Application may not function properly.</li>
                    </ul>
                  </div>

                  <div>
                    <h3 className="text-lg font-semibold mb-2 text-[#FF0000]">Analytics & Performance Cookies</h3>
                    <ul className="list-disc list-inside text-gray-300 space-y-1">
                      <li>These cookies help us understand how users interact with the Application (e.g., page visits, traffic sources, usage statistics).</li>
                      <li>We may use third-party tools such as Google Analytics for this purpose.</li>
                      <li>Data collected is aggregated and anonymized whenever possible.</li>
                    </ul>
                  </div>

                  <div>
                    <h3 className="text-lg font-semibold mb-2 text-[#FF0000]">Preference & Functionality Cookies</h3>
                    <p className="text-gray-300 leading-relaxed">
                      These store user settings and choices, such as language preferences or saved options, to personalize your experience.
                    </p>
                  </div>

                  <div>
                    <h3 className="text-lg font-semibold mb-2 text-[#FF0000]">Marketing & Third-Party Cookies (if used)</h3>
                    <ul className="list-disc list-inside text-gray-300 space-y-1">
                      <li>If we implement marketing or retargeting, these cookies may track your behavior across websites to show relevant ads.</li>
                      <li>Currently, we do not use advertising cookies. If this changes, the Policy will be updated accordingly.</li>
                    </ul>
                  </div>
                </div>
              </section>

              <section>
                <h2 className="text-xl font-semibold mb-4 text-[#FF0000]">3. Legal Basis for Processing</h2>
                <ul className="list-disc list-inside text-gray-300 space-y-1">
                  <li>For strictly necessary cookies, the legal basis is our legitimate interest in providing a functional and secure service.</li>
                  <li>For all other cookies (analytics, preferences, marketing), we will only use them with your explicit consent (per GDPR and ePrivacy Directive).</li>
                </ul>
              </section>

              <section>
                <h2 className="text-xl font-semibold mb-4 text-[#FF0000]">4. User Control & Consent</h2>
                <ul className="list-disc list-inside text-gray-300 space-y-1">
                  <li>On your first visit, you will be asked to provide consent for the use of non-essential cookies through a cookie banner.</li>
                  <li>You may accept or refuse these cookies at any time.</li>
                  <li>You can also manage or delete cookies directly from your browser or device settings.</li>
                </ul>
                <p className="text-red-500 leading-relaxed mt-2">
                  ⚠️ <strong>Please note:</strong> disabling certain cookies may reduce the functionality, speed, or personalization of the Application.
                </p>
              </section>

              <section>
                <h2 className="text-xl font-semibold mb-4 text-[#FF0000]">5. Data Retention</h2>
                <ul className="list-disc list-inside text-gray-300 space-y-1">
                  <li>Session cookies expire once you close your browser.</li>
                  <li>Persistent cookies remain on your device for a defined period or until deleted by you.</li>
                  <li>Retention times vary depending on the type of cookie and purpose (e.g., analytics cookies may last up to 24 months).</li>
                </ul>
              </section>

              <section>
                <h2 className="text-xl font-semibold mb-4 text-[#FF0000]">6. Third-Party Services</h2>
                <p className="text-gray-300 leading-relaxed">
                  Some cookies may be placed by trusted third-party providers. For example:
                </p>
                <ul className="list-disc list-inside mt-2 text-gray-300 space-y-1">
                  <li><strong>Google Analytics</strong> – used for traffic and usage analysis.</li>
                </ul>
                <p className="text-gray-300 leading-relaxed mt-2">
                  Such providers may process data outside the EU/EEA, but we ensure appropriate safeguards (e.g., Standard Contractual Clauses).
                </p>
              </section>

              <section>
                <h2 className="text-xl font-semibold mb-4 text-[#FF0000]">7. Updates to This Policy</h2>
                <p className="text-gray-300 leading-relaxed">
                  We may update this Cookies Policy to reflect changes in law, technology, or our practices. Updates will be posted on this page with a revised "Last Updated" date.
                </p>
              </section>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
