"use client"

import Image from "next/image";
import { useAuth } from "../../lib/hooks/useAuth";
import Link from "next/link";
import { useEffect } from 'react';
import { useRouter } from 'next/navigation';

export default function Mypc() {  
    const { isAuthenticated, isLoading, user, logout, redirectToLogin , redirectToHome } = useAuth();

    useEffect(() => {
        if (!isLoading && !isAuthenticated) {
            redirectToLogin();
        }
    }, [isAuthenticated, isLoading, redirectToLogin]);

    if (isLoading) {
        return (
            <div className="w-full h-screen bg-[#070707] flex items-center justify-center">
                <div className="text-white text-lg">Se încarcă...</div>
            </div>
        );
    }

    if (!isAuthenticated) {
        return null;
    }

    return(
        <div className="w-full h-screen bg-[#070707] flex items-start text-[10px]">
            <div className="absolute top-4 right-4 flex items-center gap-4">
                <button
                    onClick={logout}
                    className="bg-red-600 hover:bg-red-700 text-white px-3 py-1 rounded text-xs transition-colors"
                >
                    Logout
                </button>
            </div>
            {/* DONT DO CHNAGES all good here */}
            <div className="flex flex-col gap-5 p-2 items-center">
                <div className="flex flex-col justify-center items-center gap-1">
                    <Image src="icons/Explorer.svg" alt="l" width={40} height={40}  />
                    <p className="text-[10px] text-white">E-SEARCH</p>
                </div>
                <div className="flex flex-col justify-center items-center gap-1">
                    <Image src="icons/Buf.svg" alt="l" width={45} height={45}  />
                    <p className="text-[10px] text-white">Buf</p>
                </div>
                <div className="flex flex-col justify-center items-center gap-1">
                    <Image src="icons/my-computer 1.svg" alt="my-computer" width={45} height={45}  />
                    <p className="text-[10px] text-white">My Computer</p>
                </div>
                <div className="flex flex-col justify-center items-center gap-1">
                    <Image src="icons/Florin salam.svg" alt="Florin salam" width={45} height={45}  />
                    <p className="text-[10px] text-white">Florin Sa...</p>
                </div>
                <div className="flex flex-col justify-center items-center gap-1">
                    <Image src="icons/Femei.svg" alt="Femei" width={45} height={45}  />
                    <p className="text-[10px] text-white">Femei</p>
                </div>
                <div className="flex flex-col justify-center items-center gap-1">
                    <Image src="icons/Underg...svg" alt="Underg" width={45} height={45}  />
                    <p className="text-[10px] text-white">Underg...</p>
                </div>
            </div>
            

             {/* Need changes */}
            <div className="w-[70%] h-fit bg-[#1C1C1C] flex flex-col rounded-xl absolute top-1/2 right-1/2 translate-x-1/2  -translate-y-1/2 justify-start">
                <button
                onClick={redirectToHome}
                className= "hover:cursor-pointer w-5 h-5 bg-red-600 p-1 hover:bg-red-400 transition absolute tpo-0 right-0"
                >
                X
                </button>

                <div className="w-full bg-gradient-to-t from-black from-65% to-[#4D4D4D] rounded-t-xl">
                    <div className="flex flex-col items-start w-full h-full justify-end">
                        <div className="px-4 py-2 bg-white flex flex-row w-fit rounded-t-xl items-center justify-center gap-2 mt-2">
                            <Image src="/Favicon test 2.png" width={20} height={20} alt="relode" />
                            <h1 className="text-[10px] uppercase">UNDERGROUND WORLD</h1>
                        </div>
                        <div className="p-2 w-full bg-white flex flex-row gap-2">
                            <Image src="icons/primary.svg" width={20} height={20} alt="arrow" />
                            <Image src="icons/primary-1.svg" width={20} height={20} alt="arrow" />
                            <Image src="icons/Relode.svg" width={20} height={20} alt="relode" />
                            <div className="p-1 w-full border border-[#B7B7B7] rounded flex flex-row justify-between">
                                <div className="flex flex-row gap-2 items-center">
                                    <Image src="icons/lock 1.svg" width={15} height={15} alt="relode" />
                                    <p className="text-sm"><span className="text-[#05C518]">https:</span>//www.underground-world.com/home</p>
                                </div>
                                <Image src="icons/star 1.svg" width={20} height={20} alt="relode" className="flex items-end justify-center" />
                            </div>
                            <Image src="icons/puzzle-1_svgrepo.com.svg" width={30} height={30} alt="relode" />
                            <Image src="icons/menu-burger 1.svg" width={20} height={20} alt="relode" />
                        </div>
                    </div>
                </div>

                <div className="w-full max-h-[30vh] h-fit p-0 relative flex-1">
                    <Image
                        src="/a.png"
                        alt="banner"
                        width={1920}
                        height={400}
                        className="w-full h-auto max-h-[30vh] object-cover"
                        priority
                    />
                </div>

                <div className="w-full h-10 bg-gradient-to-t from-black from-55% to-[#4D4D4D]/10 flex justify-center items-center text-white p-2">
                    <ul className="flex flex-row gap-5 text-[10px] w-[60%] items-start">
                        <li className="hover:cursor-pointer"><Link href="/home" />HOME</li>
                        <li className="hover:cursor-pointer"><Link href="/home" />FORUM</li>
                        <li className="hover:cursor-pointer"><Link href="/home" />RULES</li>
                        <li className="hover:cursor-pointer"><Link href="/home" />GAMES</li>
                        <li className="hover:cursor-pointer"><Link href="/home" />SOCIAL</li>
                        <li className="hover:cursor-pointer"><Link href="/home" />CLOTHING STORE</li>
                    </ul>
                </div>

                <div className="flex flex-row justify-center items-center gap-">
                    <div className="max-w-[20%] h-fit flex justify-center items-center gap-2 p-10 flex-col">
                        <Image src="/images 2.png" alt="a" width={200} height={400} className="" />
                        <button className="bg-gradient-to-b from-[#DE0000] via-[#780000] to-[#DE0000] text-white uppercase px-6 py-2 rounded-md text-[10px] font-bold hover:cursor-pointer">DOWNLOAD NOW</button>
                    </div>

                    <div className="w-[60%] h-full bg-[#111111] mx-auto relative text-white px-2 ">
                        <Image src="/T_Garage_D2edit 1.png" width={150} height={150} alt="relode" className="w-fit h-fit absolute bottom-0 right-0" />
                        <div className="bg-[#0D0D0D]/90 p-2 rounded text-[10px] mb-2">
                            <h1 className="text-white text-xs">Bine ai venit in <span className="text-[#FF0000]"> UNDERGROUND WORLD </span>,  {user?.name}</h1>
                            <p className="text-gray-300">Dacă ai ajuns aici, înseamnă că ți-ai găsit drumul prin haos.Bucharest Underground nu e doar un site. E o comunitate, un refugiu, un loc unde străzile capitalei respiră prin pixeli. Aici nu există "like-uri", nu există algoritmi. Doar oameni reali, povești, idei și amintiri.</p>
                        </div> 
                        <div className="bg-[#0D0D0D]/90 p-4 rounded text-[10px] max-w-xl">
                            <h1 className="text-white text-xs">Ce găsești in<span className="text-[#FF0000]"> UNDERGROUND WORLD</span>?</h1>
                            <li className="text-[#FF0000]">Forum de discuții <span className="text-gray-300">→ ca pe vremuri, unde fiecare postare are valoare.</span></li>
                            <li className="text-[#FF0000]">Arhivă digitală <span className="text-gray-300">→ poze, articole, flyere, sunete și fragmente din undergroundul bucureștean.</span></li>
                            <li className="text-[#FF0000]">Board anonim <span className="text-gray-300">→ dacă vrei să scrii fără identitate, ca pe 4chan, dar cu suflet local.</span></li>
                            <li className="text-[#FF0000]">Proiecte comunitare <span className="text-gray-300">→ muzică, artă, coding, graffiti, literatură, tot ce poate naște din stradă.</span></li>
                            <li className="text-[#FF0000]">Evenimente <span className="text-gray-300">→ meet-ups, jam sessions, lansări de zine, expoziții clandestine.</span></li>
                        </div>
                        <div className="bg-[#0D0D0D]/90 p-2 rounded text-[10px] max-w-lg mb-2">
                            <h1 className="text-white text-xs">De ce existăm?</h1>
                            <p className="text-gray-300"><span className="text-[#FF0000]">UNDERGROUND WORLD </span> e născut din dorința de a nu lăsa cultura să fie uitat între betoane și mall-uri.Sub blocuri, între ziduri pline de stickere și sub poduri scrise cu markerul, există un București viu. Ăsta e spațiul nostru de arhivare și de renaștere.</p>
                        </div>
                    </div>

                    <div className=" max-w-[20%] h-fit flex justify-center items-center gap-2 p-5 flex-col ">
                        <Image src="/Adult-Advertisement-network-1024x577 2.png" alt="a" width={200} height={300} />
                        <Image src="/images 2 (1).png" alt="a" width={200} height={300} />
                    </div>
                </div>
            </div>
        </div>
    );
}
