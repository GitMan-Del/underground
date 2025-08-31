"use client"

import Image from "next/image";
import React, { useState, useEffect, Suspense } from "react";
import { signIn, getSession } from "next-auth/react";
import { useRouter, useSearchParams } from "next/navigation";
import Link from "next/link";

function LoginForm() {
  const Logo = "/Complete Logo 4.png";
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [showSuccessVideo, setShowSuccessVideo] = useState(false);
  const router = useRouter();
  const searchParams = useSearchParams();

  useEffect(() => {
    const message = searchParams.get('message');
    if (message) {
      setSuccess(message);
    }
  }, [searchParams]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");
    setSuccess("");
    setIsLoading(true);

    try {
      const result = await signIn("credentials", {
        email,
        password,
        redirect: false,
      });

      if (result?.error) {
        setError("Email sau parolă incorectă");
      } else {
        // Check if user is authenticated
        const session = await getSession();
        if (session) {
          // Show success video first
          setShowSuccessVideo(true);
        }
      }
    } catch {
      setError("A apărut o eroare. Încearcă din nou.");
    } finally {
      setIsLoading(false);
    }
  };

  const handleVideoEnded = () => {
    // Redirect to home page after video ends
    router.push("/");
  };

  // Show success video overlay
  if (showSuccessVideo) {
    return (
      <div className="w-full h-screen relative overflow-hidden">
        {/* Background video continues playing */}
        <video
          className="w-full h-screen object-cover pointer-events-none absolute inset-0"
          autoPlay
          muted
          loop
        >
          <source src="/Loop_LoginLoop.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        
        {/* Success video overlay */}
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-80">
          <video
            className="w-full h-full object-cover"
            autoPlay
            muted
            onEnded={handleVideoEnded}
          >
            <source src="/Action_LoginToLanding.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </div>
      </div>
    );
  }

  return (
    <div className="w-full h-screen relative overflow-hidden flex items-center justify-center">
      {/* Videoclipul de fundal */}
      <video
        className="w-full h-screen object-cover pointer-events-none absolute inset-0"
        autoPlay
        muted
        loop
      >
        <source src="videos/Loop_LoginLoop.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      {/* Overlay form */}
      <div className="inset-0 flex flex-col items-center justify-center z-10 gap-12">
        <Image src={Logo} alt="a" width={400} height={200} />
        <form
          onSubmit={handleSubmit}
          className="flex flex-col gap-4 w-full max-w-xs px-2 items-center justify-center"
          autoComplete="off"
        >
          {/* Success message */}
          {success && (
            <div className="w-full bg-green-500 bg-opacity-80 text-white text-sm px-3 py-2 rounded-md text-center">
              {success}
            </div>
          )}

          {/* Error message */}
          {error && (
            <div className="w-full bg-red-500 bg-opacity-80 text-white text-sm px-3 py-2 rounded-md text-center">
              {error}
            </div>
          )}

          {/* Email/Username */}
          <div className="w-full flex justify-center">
            <input
              type="email"
              id="email"
              name="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="email/username"
              className="w-full bg-[#232323] bg-opacity-80 text-[#bdbdbd] font-semibold placeholder:font-semibold placeholder:text-[#bdbdbd] rounded-md px-3 py-1.5 outline-none border-none text-sm shadow-md"
              style={{ fontFamily: "inherit" }}
              autoComplete="username"
              required
              disabled={isLoading}
            />
          </div>

          {/* Password */}
          <div className="w-full flex justify-center">
            <input
              type="password"
              id="password"
              name="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="**********"
              className="w-full bg-[#232323] bg-opacity-80 text-[#bdbdbd] font-semibold placeholder:font-semibold placeholder:text-[#bdbdbd] rounded-md px-3 py-1.5 outline-none border-none text-sm shadow-md"
              style={{ fontFamily: "inherit" }}
              autoComplete="current-password"
              required
              disabled={isLoading}
            />
          </div>

          {/* Forgot password */}
          <div className="flex items-center justify-center gap-2 -mt-2 mb-1 w-full">
            <span className="text-xs text-white">Ai uitat parola ?</span>
            <a
              href="#"
              className="text-xs text-[#2ec4ff] font-semibold hover:underline"
              tabIndex={0}
            >
              Reseteaza parola
            </a>
          </div>

          {/* Sign In Button */}
          <button
            type="submit"
            disabled={isLoading}
            className="w-full rounded-md py-1.5 text-base font-semibold shadow-md transition hover:brightness-110 disabled:opacity-50 disabled:cursor-not-allowed hover:cursor-pointer"
            style={{
              fontFamily: "inherit",
              background: "radial-gradient(circle at 50% 50%, #151515 100%, #313131 100%)",
              color: "#fff",
            }}
          >
            {isLoading ? "SE CONECTEAZĂ..." : "SIGN IN"}
          </button>
        </form>

        {/* Require Access Button at the bottom of the screen */}
        <div className="fixed bottom-6 left-1/2 -translate-x-1/2 flex justify-center z-50">
        <Link href="/register">
          <button
            type="button"
            className="w-fit max-w-md px-5 rounded-md py-1.5 text-base font-semibold shadow-md transition hover:brightness-110 hover:cursor-pointer"
            style={{
              fontFamily: "inherit",
              background: "radial-gradient(circle at 50% 50%, #151515 100%, #313131 100%)",
              color: "#ff2e2e",
            }}
          >
            REQUIRE ACCESS
            </button>
            </Link>
        </div>
      </div>
    </div>
  );
}

export default function LoginPage() {
  return (
    <Suspense fallback={
      <div className="w-full h-screen bg-[#070707] flex items-center justify-center">
        <div className="text-white text-xl">Se încarcă...</div>
      </div>
    }>
      <LoginForm />
    </Suspense>
  );
}