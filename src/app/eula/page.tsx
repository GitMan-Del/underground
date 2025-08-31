"use client"

import React from "react";
import Link from "next/link";

export default function EULAPage() {
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
        <div className="min-h-screen bg-black bg-opacity-70 flex flex-col">
          {/* Header */}
          <div className="flex justify-between items-center p-6 border-b border-gray-700">
            <h1 className="text-2xl font-bold text-white">Acord de Licență pentru Utilizatorul Final (EULA)</h1>
            <Link href="/">
              <button className="px-4 py-2 bg-[#232323] bg-opacity-80 text-white rounded-md hover:bg-opacity-90 transition-all">
                Înapoi
              </button>
            </Link>
          </div>

          {/* Content */}
          <div className="flex-1 p-6 text-white">
            <div className="max-w-4xl mx-auto space-y-6">
              <section>
                <h2 className="text-xl font-semibold mb-4 text-[#2ec4ff]">1. Acordul de Licență</h2>
                <p className="text-gray-300 leading-relaxed">
                  Prin instalarea, descărcarea sau utilizarea software-ului nostru, acceptați să respectați acest Acord 
                  de Licență pentru Utilizatorul Final (EULA). Această licență vă acordă dreptul de a utiliza software-ul 
                  în conformitate cu termenii specificați aici.
                </p>
              </section>

              <section>
                <h2 className="text-xl font-semibold mb-4 text-[#2ec4ff]">2. Drepturi de Licență</h2>
                <p className="text-gray-300 leading-relaxed">
                  Vă acordăm o licență personală, non-exclusivă, non-transferabilă și revocabilă pentru a utiliza 
                  software-ul pe un singur dispozitiv în scopuri personale și necomerciale.
                </p>
                <p className="text-gray-300 leading-relaxed mt-2">
                  <strong>Nu aveți dreptul să:</strong>
                </p>
                <ul className="list-disc list-inside mt-2 text-gray-300 space-y-1">
                  <li>Copiați, modificați sau distribuiți software-ul</li>
                  <li>Dezassemblați, decompilați sau încercați să extrageți codul sursă</li>
                  <li>Utilizați software-ul în scopuri comerciale fără autorizare</li>
                  <li>Transferați licența către terți</li>
                </ul>
              </section>

              <section>
                <h2 className="text-xl font-semibold mb-4 text-[#2ec4ff]">3. Proprietate Intelectuală</h2>
                <p className="text-gray-300 leading-relaxed">
                  Software-ul și toate drepturile de proprietate intelectuală asociate rămân proprietatea noastră 
                  sau a licențiatorilor noștri. Această licență nu vă transferă drepturi de proprietate asupra software-ului.
                </p>
              </section>

              <section>
                <h2 className="text-xl font-semibold mb-4 text-[#2ec4ff]">4. Actualizări și Modificări</h2>
                <p className="text-gray-300 leading-relaxed">
                  Ne rezervăm dreptul de a actualiza sau modifica software-ul în orice moment. Actualizările pot fi 
                  instalate automat sau vă pot fi notificate pentru instalare manuală. Utilizarea continuă după actualizări 
                  constituie acceptarea noilor termeni.
                </p>
              </section>

              <section>
                <h2 className="text-xl font-semibold mb-4 text-[#2ec4ff]">5. Limitarea Garanțiilor</h2>
                <p className="text-gray-300 leading-relaxed">
                  Software-ul este furnizat "așa cum este" fără garanții de orice fel, explicite sau implicite. 
                  Nu garantăm că software-ul va fi lipsit de erori sau va funcționa neîntrerupt.
                </p>
              </section>

              <section>
                <h2 className="text-xl font-semibold mb-4 text-[#2ec4ff]">6. Limitarea Răspunderii</h2>
                <p className="text-gray-300 leading-relaxed">
                  În măsura maximă permisă de lege, nu ne facem responsabili pentru daunele directe, indirecte, 
                  incidentale, speciale sau consecvente care pot rezulta din utilizarea software-ului.
                </p>
              </section>

              <section>
                <h2 className="text-xl font-semibold mb-4 text-[#2ec4ff]">7. Terminarea Licenței</h2>
                <p className="text-gray-300 leading-relaxed">
                  Această licență se termină automat dacă încălcați oricare dintre termenii acestui acord. 
                  La terminare, trebuie să încetați utilizarea software-ului și să ștergeți toate copiile.
                </p>
              </section>

              <section>
                <h2 className="text-xl font-semibold mb-4 text-[#2ec4ff]">8. Legea Aplicabilă</h2>
                <p className="text-gray-300 leading-relaxed">
                  Acest acord este guvernat de legile României. Orice dispută va fi rezolvată în tribunalele 
                  competente din România.
                </p>
              </section>

              <section>
                <h2 className="text-xl font-semibold mb-4 text-[#2ec4ff]">9. Contact</h2>
                <p className="text-gray-300 leading-relaxed">
                  Pentru întrebări despre acest acord de licență, vă rugăm să ne contactați prin intermediul 
                  informațiilor de contact furnizate pe site.
                </p>
              </section>

              <div className="mt-8 pt-6 border-t border-gray-700">
                <p className="text-sm text-gray-400">
                  Ultima actualizare: {new Date().toLocaleDateString('ro-RO')}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
