"use client";

import Image from "next/image";
import React, { useEffect , useRef  } from "react";
import { useRouter } from "next/navigation";
import { useSession } from "next-auth/react";

export default function Home() {

  const videoRef = useRef(null);
  useEffect(() => {
    const shouldPlay = sessionStorage.getItem('playVideo') === 'true';

    if (shouldPlay && videoRef.current) {
      (videoRef.current as HTMLVideoElement).play();
      sessionStorage.removeItem('playVideo'); // prevenim redarea multiplă
    }
  }, []);


  const router = useRouter();
  const { data: session, status } = useSession();

  const button = "icons/button.svg";
  const [showOverlayVideo, setShowOverlayVideo] = React.useState(false);
  const [isButtonVisible, setIsButtonVisible] = React.useState(true);
  const [isPinging, setIsPinging] = React.useState(false);
  const overlayVideoRef = React.useRef<HTMLVideoElement | null>(null);

  // Check authentication status
  useEffect(() => {
    if (status === "loading") return; // Still loading
    
    if (status === "unauthenticated") {
      // User is not authenticated, redirect to login
      router.push("/login");
      return;
    }
    
    // User is authenticated, show the page
    if (status === "authenticated") {
      console.log("User authenticated:", session?.user?.name);
    }
  }, [status, session, router]);

  const handleOverlayVideoEnded = React.useCallback(() => {
    router.push("/my-pc"); // redirect
  }, [router]);

  const handleButtonClick = () => {
    setIsPinging(true);
 
    setTimeout(() => {
      setIsButtonVisible(false);
      setShowOverlayVideo(true);
    }, 2000); // 2s
  };

  // Show loading while checking authentication
  if (status === "loading") {
    return (
      <div className="w-full h-screen bg-[#070707] flex items-center justify-center">
        <div className="text-white text-xl">Se încarcă...</div>
      </div>
    );
  }

  // Don't render anything if user is not authenticated (will redirect)
  if (status === "unauthenticated") {
    return null;
  }

  return (
    <div className="w-full h-screen relative overflow-hidden">
      <video
        className="w-full h-screen object-cover pointer-events-none"
        autoPlay
        muted
        loop
      >
        <source src="videos/Loop_LandingLoop.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      {isButtonVisible && (
        <button
          type="button"
          className="p-0 bg-transparent border-none fixed right-24 top-[calc(25%+2rem)] z-[100]"
          onClick={handleButtonClick}
          tabIndex={0}
        >
          <span className={isPinging ? "animate-ping2 inline-block" : "inline-block"}>
            <Image
              width={38}
              height={39}
              src={button}
              alt="button"
              draggable={false}
              priority
            />
          </span>
        </button>
      )}
      {showOverlayVideo && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-80 animate-fadein">
          <video
            ref={overlayVideoRef}
            className="w-full h-full object-cover"
            autoPlay
            muted 
            onEnded={handleOverlayVideoEnded}
          >
            <source src="videos/Succesfull_LandingToPC.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </div>
      )}

      <div>
      <video
        ref={videoRef}
        className="w-full h-full object-cover z-50"
        autoPlay
        muted 
      >
        <source src="/videos/Action_PcToLanding.mp4" type="video/mp4" />
        Browserul tău nu suportă video HTML5.
      </video>
    </div>

    </div>

  );
}
