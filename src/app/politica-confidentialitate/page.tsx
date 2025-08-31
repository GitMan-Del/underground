"use client"

import React from "react";
import Link from "next/link";

export default function PoliticaConfidentialitatePage() {
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
                <h1 className="text-3xl font-bold text-[#FF0000] mb-2">Privacy Policy & GDPR Compliance</h1>
                <p className="text-gray-400">Last Updated: 18.08.2025</p>
              </div>

              <section>
                <p className="text-gray-300 leading-relaxed mb-6">
                  Bucharest Underground respects the privacy of its users and complies with the General Data Protection Regulation (EU) 2016/679 ("GDPR"). This Privacy Policy explains how we collect, use, store, and protect your personal data.
                </p>
              </section>

              <section>
                <h2 className="text-xl font-semibold mb-4 text-[#FF0000]">1. Data We Collect</h2>
                <p className="text-gray-300 leading-relaxed">
                  We may collect the following categories of personal data:
                </p>
                <ul className="list-disc list-inside mt-2 text-gray-300 space-y-1">
                  <li><strong>Identification Data:</strong> email address, username.</li>
                  <li><strong>Technical Data:</strong> IP address, device type, operating system, browser type.</li>
                  <li><strong>Usage Data:</strong> logs, preferences, in-app interactions, session data.</li>
                </ul>
              </section>

              <section>
                <h2 className="text-xl font-semibold mb-4 text-[#FF0000]">2. Purpose of Processing</h2>
                <p className="text-gray-300 leading-relaxed">
                  Your data is processed strictly for the following purposes:
                </p>
                <ul className="list-disc list-inside mt-2 text-gray-300 space-y-1">
                  <li>Creating and managing your user account.</li>
                  <li>Ensuring the security and integrity of the Application, including fraud and abuse prevention.</li>
                  <li>Improving user experience, personalization, and optimizing performance.</li>
                  <li>Internal analytics and statistical reporting.</li>
                </ul>
                <p className="text-gray-300 leading-relaxed mt-2">
                  We will not use your data for purposes that are incompatible with the ones stated above.
                </p>
              </section>

              <section>
                <h2 className="text-xl font-semibold mb-4 text-[#FF0000]">3. Data Sharing & Disclosure</h2>
                <p className="text-gray-300 leading-relaxed">
                  We do not sell, rent, or trade your personal data to third parties.
                </p>
                <p className="text-gray-300 leading-relaxed mt-2">
                  Data may be disclosed only:
                </p>
                <ul className="list-disc list-inside mt-2 text-gray-300 space-y-1">
                  <li>To competent legal authorities, where required by applicable law or court order.</li>
                  <li>To trusted service providers (e.g., hosting, analytics), strictly limited to what is necessary and subject to confidentiality obligations.</li>
                </ul>
              </section>

              <section>
                <h2 className="text-xl font-semibold mb-4 text-[#FF0000]">4. User Rights under GDPR</h2>
                <p className="text-gray-300 leading-relaxed">
                  As a data subject, you have the following rights:
                </p>
                <ul className="list-disc list-inside mt-2 text-gray-300 space-y-1">
                  <li><strong>Access:</strong> You may request a copy of the personal data we hold about you.</li>
                  <li><strong>Rectification:</strong> You may request correction of inaccurate or incomplete data.</li>
                  <li><strong>Erasure ("Right to be Forgotten"):</strong> You may request deletion of your personal data.</li>
                  <li><strong>Restriction of Processing:</strong> You may request to limit the way your data is used.</li>
                  <li><strong>Data Portability:</strong> You may request export of your data in a structured, commonly used, machine-readable format.</li>
                  <li><strong>Objection:</strong> You may object to processing in certain cases, including direct marketing.</li>
                </ul>
                <p className="text-gray-300 leading-relaxed mt-2">
                  To exercise your rights, please contact us at: <strong>bucharestunderground@outlook.com</strong> We will respond within the timeframe required by law (usually 30 days).
                </p>
              </section>

              <section>
                <h2 className="text-xl font-semibold mb-4 text-[#FF0000]">5. Data Storage & Retention</h2>
                <p className="text-gray-300 leading-relaxed">
                  Data is stored in secure environments, protected against unauthorized access, alteration, or disclosure.
                </p>
                <p className="text-gray-300 leading-relaxed mt-2">
                  We retain personal data only as long as necessary to fulfill the purposes stated in this Policy, or as required by law.
                </p>
                <p className="text-gray-300 leading-relaxed mt-2">
                  Once retention periods expire, data will be securely deleted or anonymized.
                </p>
              </section>

              <section>
                <h2 className="text-xl font-semibold mb-4 text-[#FF0000]">6. International Data Transfers</h2>
                <p className="text-gray-300 leading-relaxed">
                  If your data is transferred outside the European Economic Area (EEA), we will ensure that adequate safeguards are in place, such as Standard Contractual Clauses (SCCs) approved by the European Commission.
                </p>
              </section>

              <section>
                <h2 className="text-xl font-semibold mb-4 text-[#FF0000]">7. Changes to This Policy</h2>
                <p className="text-gray-300 leading-relaxed">
                  We reserve the right to update this Privacy Policy from time to time. Any changes will be published on this page, with the updated date indicated at the top. Continued use of the Application constitutes acceptance of the revised Policy.
                </p>
              </section>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
