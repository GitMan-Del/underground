"use client"

import React, { useState } from "react";
import { useRouter } from "next/navigation";
import Image from "next/image";

export default function QuizPage() {
  const Logo = "/Complete Logo 4.png";
  const router = useRouter();
  
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [isLoading, setIsLoading] = useState(false);
  const [errors, setErrors] = useState<string[]>([]);

  // Check if user has registration data
  React.useEffect(() => {
    const tempRegistrationData = sessionStorage.getItem('tempRegistrationData');
    if (!tempRegistrationData) {
      // Redirect to register if no registration data
      router.push('/register');
    }
  }, [router]);
  
  const [quizData, setQuizData] = useState({
    motivation: "",
    choice: "",
    respect: "",
    lifeDescription: "",
    communityOffer: "",
    age: "",
    platform: "",
    gamerType: "",
    referral: ""
  });

  const questions = [
    {
      id: "motivation",
      question: "Ce te-a adus aici?",
      type: "text",
      placeholder: "Spune-ne motivația ta...",
      required: true
    },
    {
      id: "choice",
      question: "Dacă ai de ales între putere, bani și libertate ce alegi și de ce?",
      type: "choice",
      options: ["Putere", "Bani", "Libertate"],
      required: true
    },
    {
      id: "respect",
      question: "Cum câștigi respect?",
      type: "text",
      placeholder: "Spune-ne cum câștigi respectul...",
      required: true
    },
    {
      id: "lifeDescription",
      question: "Dacă ar trebui să-ți descrii viața în 3 cuvinte, cum ar suna?",
      type: "text",
      placeholder: "3 cuvinte care te descriu...",
      required: true
    },
    {
      id: "communityOffer",
      question: "Ce ai oferi comunității ca să-ți câștigi locul aici?",
      type: "text",
      placeholder: "Ce skilluri sau mindset ai...",
      required: true
    },
    {
      id: "age",
      question: "Câți ani ai?",
      type: "number",
      placeholder: "Vârsta ta...",
      required: true
    },
    {
      id: "platform",
      question: "De pe ce platformă accesezi website-ul?",
      type: "text",
      placeholder: "PC, Mobile, Tablet...",
      required: true
    },
    {
      id: "gamerType",
      question: "Ce tip de Gamer ești?",
      type: "text",
      placeholder: "Casual, Competitive, Hardcore...",
      required: true
    },
    {
      id: "referral",
      question: "Referral?",
      type: "text",
      placeholder: "Cine te-a invitat? (opțional)",
      required: false
    }
  ];

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setQuizData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleChoiceSelect = (choice: string) => {
    setQuizData(prev => ({
      ...prev,
      choice: choice
    }));
  };

  const validateCurrentQuestion = () => {
    const currentQ = questions[currentQuestion];
    if (currentQ.required && !quizData[currentQ.id as keyof typeof quizData]) {
      setErrors([`Această întrebare este obligatorie`]);
      return false;
    }
    setErrors([]);
    return true;
  };

  const handleNext = () => {
    if (!validateCurrentQuestion()) return;
    
    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
    } else {
      handleSubmit();
    }
  };

  const handlePrevious = () => {
    if (currentQuestion > 0) {
      setCurrentQuestion(currentQuestion - 1);
      setErrors([]);
    }
  };

  const handleSubmit = async () => {
    setIsLoading(true);
    setErrors([]);

    try {
      // Get registration data from sessionStorage
      const tempRegistrationData = sessionStorage.getItem('tempRegistrationData');
      
      if (!tempRegistrationData) {
        setErrors(["Datele de înregistrare lipsesc. Te rugăm să începi din nou procesul de înregistrare."]);
        setIsLoading(false);
        return;
      }

      const registrationData = JSON.parse(tempRegistrationData);

      const response = await fetch("/api/quiz", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          ...quizData,
          ...registrationData // Include registration data
        }),
      });

      const data = await response.json();

      if (!response.ok) {
        setErrors([data.error || "Eroare la salvarea răspunsurilor"]);
        return;
      }

      // Clear temporary registration data
      sessionStorage.removeItem('tempRegistrationData');

      // Quiz completed successfully, redirect to my-pc page
      router.push("/");
    } catch (error) {
      setErrors(["A apărut o eroare. Încearcă din nou."]);
    } finally {
      setIsLoading(false);
    }
  };

  const currentQ = questions[currentQuestion];
  const progress = ((currentQuestion + 1) / questions.length) * 100;

  return (
    <div className="w-full h-screen relative overflow-hidden flex items-start justify-center">
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

      {/* Overlay form, left-aligned */}
      <div className="flex flex-col items-start justify-start z-10 gap-8 p-12 w-[600px] max-w-full">
        {/* Logo */}
        <div className="mb-2">
          <Image src={Logo} alt="Bucharest Underground Logo" width={400} height={120} priority />
        </div>

        {/* Progress bar */}
        <div className="w-full bg-[#232323] bg-opacity-80 rounded-full h-2">
          <div 
            className="bg-gradient-to-r from-[#FF0000] to-[#FF4444] h-2 rounded-full transition-all duration-300"
            style={{ width: `${progress}%` }}
          ></div>
        </div>

        {/* Question counter */}
        <div className="text-white text-sm">
          Întrebarea {currentQuestion + 1} din {questions.length}
        </div>

        {/* Quiz Form */}
        <div className="flex flex-col gap-6 w-full">
          {/* Error messages */}
          {errors.length > 0 && (
            <div className="w-full bg-red-500 bg-opacity-80 text-white text-sm px-4 py-2 rounded-md">
              {errors.map((error, index) => (
                <div key={index}>{error}</div>
              ))}
            </div>
          )}

          {/* Question */}
          <div className="text-white">
            <h2 className="text-xl font-semibold mb-4">{currentQ.question}</h2>
            
            {/* Answer input based on type */}
            {currentQ.type === "text" && (
              <textarea
                name={currentQ.id}
                value={quizData[currentQ.id as keyof typeof quizData] as string}
                onChange={handleInputChange}
                placeholder={currentQ.placeholder}
                className="w-full bg-[#232323] bg-opacity-80 text-[#bdbdbd] font-semibold placeholder:font-semibold placeholder:text-[#bdbdbd] rounded-md px-4 py-2 outline-none border-none text-base shadow-md min-h-[100px] resize-none"
                style={{ fontFamily: "inherit" }}
                disabled={isLoading}
              />
            )}

            {currentQ.type === "number" && (
              <input
                type="number"
                name={currentQ.id}
                value={quizData[currentQ.id as keyof typeof quizData] as string}
                onChange={handleInputChange}
                placeholder={currentQ.placeholder}
                className="w-full bg-[#232323] bg-opacity-80 text-[#bdbdbd] font-semibold placeholder:font-semibold placeholder:text-[#bdbdbd] rounded-md px-4 py-2 outline-none border-none text-base shadow-md"
                style={{ fontFamily: "inherit" }}
                disabled={isLoading}
              />
            )}

            {currentQ.type === "choice" && (
              <div className="space-y-3">
                {currentQ.options?.map((option) => (
                  <button
                    key={option}
                    type="button"
                    onClick={() => handleChoiceSelect(option)}
                    className={`w-full text-left p-3 rounded-md transition-all duration-200 ${
                      quizData.choice === option
                        ? "bg-[#FF0000] bg-opacity-80 text-white"
                        : "bg-[#232323] bg-opacity-80 text-[#bdbdbd] hover:bg-[#2a2a2a] hover:bg-opacity-80"
                    } font-semibold`}
                    disabled={isLoading}
                  >
                    {option}
                  </button>
                ))}
              </div>
            )}
          </div>

          {/* Navigation buttons */}
          <div className="flex gap-4 mt-4">
            {currentQuestion > 0 && (
              <button
                type="button"
                onClick={handlePrevious}
                disabled={isLoading}
                className="flex-1 rounded-md py-2 text-base font-semibold shadow-md transition hover:brightness-110 disabled:opacity-50 disabled:cursor-not-allowed"
                style={{
                  fontFamily: "inherit",
                  background: "radial-gradient(circle at 50% 50%, #404040 100%, #505050 100%)",
                  color: "#fff",
                  letterSpacing: "0.05em",
                }}
              >
                ÎNAPOI
              </button>
            )}
            
            <button
              type="button"
              onClick={handleNext}
              disabled={isLoading}
              className="flex-1 rounded-md py-2 text-base font-semibold shadow-md transition hover:brightness-110 disabled:opacity-50 disabled:cursor-not-allowed"
              style={{
                fontFamily: "inherit",
                background: "radial-gradient(circle at 50% 50%, #282828 100%, #313131 100%)",
                color: "#fff",
                letterSpacing: "0.05em",
              }}
            >
              {isLoading ? "SE PROCESEAZĂ..." : currentQuestion === questions.length - 1 ? "FINALIZEAZĂ" : "URMĂTORUL"}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
