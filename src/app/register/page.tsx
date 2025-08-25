"use client"

import Image from "next/image";
import React, { useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";

export default function RegisterPage() {
  const Logo = "/Complete Logo 4.png";
  const [formData, setFormData] = useState({
    email: "",
    username: "",
    password: "",
    repeatPassword: "",
  });
  const [errors, setErrors] = useState<string[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const router = useRouter();

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const validateForm = () => {
    const newErrors: string[] = [];

    if (!formData.email) newErrors.push("Email-ul este obligatoriu");
    if (!formData.username) newErrors.push("Username-ul este obligatoriu");
    if (!formData.password) newErrors.push("Parola este obligatorie");
    if (formData.password.length < 6) newErrors.push("Parola trebuie să aibă cel puțin 6 caractere");
    if (formData.password !== formData.repeatPassword) newErrors.push("Parolele nu se potrivesc");

    setErrors(newErrors);
    return newErrors.length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!validateForm()) return;

    setIsLoading(true);
    setErrors([]);

    try {
      const response = await fetch("/api/auth/register", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email: formData.email,
          username: formData.username,
          password: formData.password,
        }),
      });

      const data = await response.json();

      if (!response.ok) {
        setErrors([data.error || "Eroare la înregistrare"]);
        return;
      }

      // Registration successful, redirect to login
      router.push("/login?message=Cont creat cu succes! Te poți conecta acum.");
    } catch {
      setErrors(["A apărut o eroare. Încearcă din nou."]);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="w-full h-screen relative overflow-hidden flex items-start justify-center">
      {/* Background video */}
      <video
        className="w-full h-screen object-cover pointer-events-none absolute inset-0"
        autoPlay
        muted
        loop
      >
        <source src="/Loop_LoginLoop.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      {/* Overlay form, left-aligned */}
      <div className="flex flex-col items-start justify-start z-10 gap-8 p-12 w-[480px] max-w-full">
        {/* Logo */}
        <div className="mb-2">
          <Image src={Logo} alt="Bucharest Underground Logo" width={400} height={120} priority />
        </div>

        {/* Registration Form */}
        <form
          onSubmit={handleSubmit}
          className="flex flex-col gap-4 w-full"
          autoComplete="off"
        >
          {/* Error messages */}
          {errors.length > 0 && (
            <div className="w-full bg-red-500 bg-opacity-80 text-white text-sm px-4 py-2 rounded-md">
              {errors.map((error, index) => (
                <div key={index}>{error}</div>
              ))}
            </div>
          )}

          {/* Email */}
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleInputChange}
            placeholder="Adresă de email:"
            className="w-full bg-[#232323] bg-opacity-80 text-[#bdbdbd] font-semibold placeholder:font-semibold placeholder:text-[#bdbdbd] rounded-md px-4 py-2 outline-none border-none text-base shadow-md"
            style={{ fontFamily: "inherit" }}
            autoComplete="email"
            required
            disabled={isLoading}
          />

          {/* Username */}
          <input
            type="text"
            id="username"
            name="username"
            value={formData.username}
            onChange={handleInputChange}
            placeholder="Nume de utilizator:"
            className="w-full bg-[#232323] bg-opacity-80 text-[#bdbdbd] font-semibold placeholder:font-semibold placeholder:text-[#bdbdbd] rounded-md px-4 py-2 outline-none border-none text-base shadow-md"
            style={{ fontFamily: "inherit" }}
            autoComplete="username"
            required
            disabled={isLoading}
          />

          {/* Password */}
          <input
            type="password"
            id="password"
            name="password"
            value={formData.password}
            onChange={handleInputChange}
            placeholder="Parolă:"
            className="w-full bg-[#232323] bg-opacity-80 text-[#bdbdbd] font-semibold placeholder:font-semibold placeholder:text-[#bdbdbd] rounded-md px-4 py-2 outline-none border-none text-base shadow-md"
            style={{ fontFamily: "inherit" }}
            autoComplete="new-password"
            required
            disabled={isLoading}
          />

          {/* Repeat Password */}
          <input
            type="password"
            id="repeat-password"
            name="repeatPassword"
            value={formData.repeatPassword}
            onChange={handleInputChange}
            placeholder="Repetă parola:"
            className="w-full bg-[#232323] bg-opacity-80 text-[#bdbdbd] font-semibold placeholder:font-semibold placeholder:text-[#bdbdbd] rounded-md px-4 py-2 outline-none border-none text-base shadow-md"
            style={{ fontFamily: "inherit" }}
            autoComplete="new-password"
            required
            disabled={isLoading}
          />

          {/* Agreements */}
          <div className="flex flex-col gap-2 mt-2">
            <label className="flex items-center gap-2 text-xs text-[#bdbdbd]">
              <input type="checkbox" required className="accent-[#2ec4ff] w-4 h-4" />
              <span>
                Sunt de acord cu <a href="#" className="text-[#2ec4ff] underline hover:text-[#00bfff]">Termenii și Condițiile EULA</a> (End-User License Agreement)
              </span>
            </label>
            <label className="flex items-center gap-2 text-xs text-[#bdbdbd]">
              <input type="checkbox" required className="accent-[#2ec4ff] w-4 h-4" />
              <span>
                Sunt de acord cu <a href="#" className="text-[#2ec4ff] underline hover:text-[#00bfff]">Politica de Confidențialitate</a> GDPR
              </span>
            </label>
            <label className="flex items-center gap-2 text-xs text-[#bdbdbd]">
              <input type="checkbox" required className="accent-[#2ec4ff] w-4 h-4" />
              <span>
                Sunt de acord cu <a href="#" className="text-[#2ec4ff] underline hover:text-[#00bfff]">Cookies & Tracking Policy</a>
              </span>
            </label>
          </div>

          {/* Register Button */}
          <button
            type="submit"
            disabled={isLoading}
            className="w-full rounded-md py-2 text-base font-semibold shadow-md transition hover:brightness-110 disabled:opacity-50 disabled:cursor-not-allowed mt-2"
            style={{
              fontFamily: "inherit",
              background: "radial-gradient(circle at 50% 50%, #282828 100%, #313131 100%)",
              color: "#fff",
              letterSpacing: "0.05em",
            }}
          >
            {isLoading ? "SE CREEAZĂ CONTUL..." : "NEXT"}
          </button>

          {/* Login link */}
          <div className="text-center mt-2">
            <span className="text-xs text-white">Ai deja cont? </span>
            <Link
              href="/login"
              className="text-xs text-[#2ec4ff] font-semibold hover:underline"
            >
              Conectează-te
            </Link>
          </div>
        </form>
      </div>
    </div>
  );
}