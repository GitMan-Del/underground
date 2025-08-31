"use client"

import React from "react";
import Link from "next/link";

export default function TermeniSiConditiiPage() {
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
          <div className="flex-1 p-6 text-white ">
            <div className="max-w-4xl mx-auto space-y-6 rounded bg-gradient-to-b from-[#262626] to-[#262626]/50 p-5">
              <div className="text-left mb-8">
                <h1 className="text-3xl font-bold text-[#FF0000] mb-2">Terms & Conditions + End-User License Agreement (EULA)</h1>
                <p className="text-gray-400">Last Updated: 18.08.2025</p>
              </div>

              <section>
                <p className="text-gray-300 leading-relaxed mb-6">
                  This End-User License Agreement ("EULA") is a legal agreement between you ("User") and the development team of Bucharest Underground ("Developer"), governing your use of the software application and related services ("Application").
                </p>
                <p className="text-gray-300 leading-relaxed mb-6">
                  By installing, accessing, or using the Application, you confirm that you have read, understood, and agreed to the terms of this EULA. If you do not agree, do not use the Application.
                </p>
              </section>

              <section>
                <h2 className="text-xl font-semibold mb-4 text-[#FF0000]">1. License Grant</h2>
                <p className="text-gray-300 leading-relaxed">
                  You are granted a personal, limited, non-exclusive, revocable, and non-transferable license to use the Application strictly for personal and non-commercial purposes.
                </p>
                <p className="text-gray-300 leading-relaxed mt-2">
                  All rights not expressly granted in this EULA are reserved by the Developer.
                </p>
              </section>

              <section>
                <h2 className="text-xl font-semibold mb-4 text-[#FF0000]">2. Restrictions on Use</h2>
                <p className="text-gray-300 leading-relaxed">
                  You agree that you will NOT:
                </p>
                <ul className="list-disc list-inside mt-2 text-gray-300 space-y-1">
                  <li>copy, distribute, sublicense, rent, sell, or otherwise transfer the Application;</li>
                  <li>modify, translate, decompile, reverse-engineer, or attempt to extract the source code;</li>
                  <li>create derivative works or competing services based on the Application;</li>
                  <li>use the Application for unlawful, fraudulent, or harmful purposes;</li>
                  <li>interfere with or disrupt the functionality, security, or servers of the Application;</li>
                  <li>attempt unauthorized access to data, accounts, or systems.</li>
                </ul>
              </section>

              <section>
                <h2 className="text-xl font-semibold mb-4 text-[#FF0000]">3. Intellectual Property Rights</h2>
                <p className="text-gray-300 leading-relaxed">
                  All copyrights, trademarks, logos, design elements, source code, graphics, audio, and content within the Application are the exclusive property of the Developer.
                </p>
                <p className="text-gray-300 leading-relaxed mt-2">
                  The User acquires no ownership rights in the Application or its content.
                </p>
              </section>

              <section>
                <h2 className="text-xl font-semibold mb-4 text-[#FF0000]">4. Updates and Modifications</h2>
                <p className="text-gray-300 leading-relaxed">
                  The Developer may provide updates, patches, or modifications to the Application.
                </p>
                <p className="text-gray-300 leading-relaxed mt-2">
                  Continued use of the Application after updates constitutes acceptance of the new terms.
                </p>
                <p className="text-gray-300 leading-relaxed mt-2">
                  The Developer reserves the right to suspend, modify, or discontinue the Application at any time, with or without notice.
                </p>
              </section>

              <section>
                <h2 className="text-xl font-semibold mb-4 text-[#FF0000]">5. Technical Support</h2>
                <p className="text-gray-300 leading-relaxed">
                  The Application is provided "as is".
                </p>
                <p className="text-gray-300 leading-relaxed mt-2">
                  The Developer has no legal obligation to provide ongoing technical support.
                </p>
                <p className="text-gray-300 leading-relaxed mt-2">
                  Any assistance, if offered, is voluntary and may be withdrawn at any time.
                </p>
              </section>

              <section>
                <h2 className="text-xl font-semibold mb-4 text-[#FF0000]">6. Limitation of Liability</h2>
                <p className="text-gray-300 leading-relaxed">
                  The Application is provided without warranties of any kind, express or implied, including but not limited to: uninterrupted functionality, compatibility, error-free performance, or fitness for a particular purpose.
                </p>
                <p className="text-gray-300 leading-relaxed mt-2">
                  Under no circumstances shall the Developer be held liable for:
                </p>
                <ul className="list-disc list-inside mt-2 text-gray-300 space-y-1">
                  <li>loss of data, profits, or opportunities;</li>
                  <li>indirect, incidental, or special damages;</li>
                  <li>issues arising from use or inability to use the Application.</li>
                </ul>
              </section>

              <section>
                <h2 className="text-xl font-semibold mb-4 text-[#FF0000]">7. Termination</h2>
                <p className="text-gray-300 leading-relaxed">
                  This license remains valid until terminated.
                </p>
                <p className="text-gray-300 leading-relaxed mt-2">
                  The User may terminate it by uninstalling and ceasing all use of the Application.
                </p>
                <p className="text-gray-300 leading-relaxed mt-2">
                  The Developer may immediately terminate this license if the User violates these terms.
                </p>
              </section>

              <section>
                <h2 className="text-xl font-semibold mb-4 text-[#FF0000]">8. Privacy and Data</h2>
                <p className="text-gray-300 leading-relaxed">
                  Use of the Application may involve the collection and processing of personal data in accordance with the Privacy Policy & GDPR Compliance Policy.
                </p>
                <p className="text-gray-300 leading-relaxed mt-2">
                  By using the Application, the User consents to such processing practices.
                </p>
              </section>

              <section>
                <h2 className="text-xl font-semibold mb-4 text-[#FF0000]">9. User-Generated Content</h2>
                <p className="text-gray-300 leading-relaxed">
                  If the Application allows users to create, share, or post content (e.g., text, images, messages), the User remains solely responsible for such content.
                </p>
                <p className="text-gray-300 leading-relaxed mt-2">
                  The Developer is not liable for user-generated content and does not endorse it.
                </p>
                <p className="text-gray-300 leading-relaxed mt-2">
                  The Developer reserves the right to remove any content that:
                </p>
                <ul className="list-disc list-inside mt-2 text-gray-300 space-y-1">
                  <li>is unlawful, abusive, or offensive;</li>
                  <li>infringes the rights of others;</li>
                  <li>promotes hate, discrimination, or illegal activities.</li>
                </ul>
              </section>

              <section>
                <h2 className="text-xl font-semibold mb-4 text-[#FF0000]">10. Dispute Resolution & Arbitration</h2>
                <p className="text-gray-300 leading-relaxed">
                  Any disputes between the User and the Developer shall first be attempted to be resolved through direct communication, via email at contact@bucharestunderground.ro.
                </p>
                <p className="text-gray-300 leading-relaxed mt-2">
                  If unresolved, both parties agree to submit the dispute to mediation or arbitration before initiating formal legal proceedings.
                </p>
                <p className="text-gray-300 leading-relaxed mt-2">
                  Only if mediation fails may disputes be brought before the competent courts in Romania.
                </p>
              </section>

              <section>
                <h2 className="text-xl font-semibold mb-4 text-[#FF0000]">11. Governing Law</h2>
                <p className="text-gray-300 leading-relaxed">
                  This EULA shall be governed by and construed in accordance with the laws of Romania and the European Union.
                </p>
                <p className="text-gray-300 leading-relaxed mt-2">
                  Exclusive jurisdiction for any disputes lies with the courts of Romania.
                </p>
              </section>

              <section>
                <h2 className="text-xl font-semibold mb-4 text-[#FF0000]">12. Final Provisions</h2>
                <p className="text-gray-300 leading-relaxed">
                  If any provision of this EULA is found invalid or unenforceable, the remaining provisions remain in full force and effect.
                </p>
                <p className="text-gray-300 leading-relaxed mt-2">
                  Failure by the Developer to enforce any provision does not constitute a waiver of rights.
                </p>
                <p className="text-gray-300 leading-relaxed mt-2">
                  This EULA constitutes the entire agreement between the User and the Developer concerning the Application.
                </p>
              </section>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
