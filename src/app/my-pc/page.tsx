"use client"

import Image from "next/image";
import { useAuth } from "../../lib/hooks/useAuth";
import { useEffect } from "react";

export default function Mypc() {
    const { isAuthenticated, isLoading, user, logout, redirectToLogin } = useAuth();

    useEffect(() => {
        if (!isLoading && !isAuthenticated) {
            redirectToLogin();
        }
    }, [isAuthenticated, isLoading, redirectToLogin]);

    if (isLoading) {
        return (
            <div className="w-full h-screen bg-[#070707] flex items-center justify-center">
                <div className="text-white text-xl">Se încarcă...</div>
            </div>
        );
    }

    if (!isAuthenticated) {
        return null; // Will redirect to login
    }

    return(
        <div className="w-full h-screen bg-[#070707] flex items-start">
            {/* User info and logout */}
            <div className="absolute top-4 right-4 flex items-center gap-4">
                <div className="text-white text-sm">
                    <span className="text-[#2ec4ff]">Bună, </span>
                    {user?.name || user?.email}
                </div>
                <button
                    onClick={logout}
                    className="bg-red-600 hover:bg-red-700 text-white px-3 py-1 rounded text-sm transition-colors"
                >
                    Logout
                </button>
            </div>

            <div className="flex flex-col gap-5 items-center">
                <div className="flex flex-col justify-center items-center gap-1">
                    <Image src="/Explorer.svg" alt="l" width={40} height={40}  />
                    <p className="text-xs text-white">E-SEARCH</p>
                </div>
                <div className="flex flex-col justify-center items-center gap-1">
                    <Image src="/Buf.svg" alt="l" width={45} height={45}  />
                    <p className="text-xs text-white">Buf</p>
                </div>
                <div className="flex flex-col justify-center items-center gap-1">
                    <Image src="/my-computer 1.svg" alt="my-computer" width={45} height={45}  />
                    <p className="text-xs text-white">My Computer</p>
                </div>
                <div className="flex flex-col justify-center items-center gap-1">
                    <Image src="/Florin salam.svg" alt="Florin salam" width={45} height={45}  />
                    <p className="text-xs text-white">Florin Sa...</p>
                </div>
                <div className="flex flex-col justify-center items-center gap-1">
                    <Image src="/Femei.svg" alt="Femei" width={45} height={45}  />
                    <p className="text-xs text-white">Femei</p>
                </div>
                <div className="flex flex-col justify-center items-center gap-1">
                    <Image src="/Underg...svg" alt="Underg" width={45} height={45}  />
                    <p className="text-xs text-white">Underg...</p>
                </div>
            </div>
            
            <div className="w-[80%] h-[80%] bg-amber-700 absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
            </div>
        </div>
    );
}