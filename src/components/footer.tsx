'use client';

import Link from "next/link";
import { useState, useEffect } from "react";
import Image from "next/image";

export default function Footer() {

    const [width, setWidth] = useState(0);
    const [height, setHeight] = useState(0);
    const [hasMounted, setHasMounted] = useState(false);

    useEffect(() => {
        setHasMounted(true);
        setWidth(window.innerWidth);
        setHeight(window.innerHeight);

        const handleResize = () => {
            setWidth(window.innerWidth);
            setHeight(window.innerHeight);
        }

        window.addEventListener('resize', handleResize);

        return () => {
            window.removeEventListener('resize', handleResize);
        }
    }, []);

    if (!hasMounted) return null;

    return (
        <div className="w-full flex flex-col justify-center items-center px-6 py-2 bg-orange/20 mt-[50px]">
            {width > 640 ? 
                (
                    <div className="w-full flex justify-between items-center h-[100px]">
                        <div className="w-1/3 flex justify-center items-center">
                            <div className="h-full w-[40%] flex flex-col justify-center items-left">
                                <Link href="/about"><span className="font-poppins text-black font-normal mb-6 text-sm">About</span></Link>
                                <Link href="/providers"><span className="font-poppins text-black font-normal mb-6 text-sm">Providers</span></Link>
                                <Link href="/resources"><span className="font-poppins text-black font-normal text-sm">Free Resources</span></Link>
                            </div>
                            <div className="h-full w-[40%] flex flex-col justify-center items-start">
                                <Link href="/contact"><span className="font-poppins text-black font-normal mb-6 text-sm">Contact</span></Link>
                                <a href="https://www.rochinitiative.org/donate"><span className="font-poppins text-black font-normal mb-6 text-sm">Donate</span></a>
                                <a href="https://www.rochinitiative.org"><span className="font-poppins text-black font-normal text-sm">RCI Website</span></a>
                            </div>
                        </div>
                        <div className="w-1/3 h-full flex flex-col justify-center items-center">
                            <div className="flex mt-2 h-full justify-center items-center">
                                <span className="text-2xl font-poppins text-orange font-bold mr-2">Organize,&nbsp;</span>
                                <span className="text-2xl font-poppins text-darkblue font-bold mr-2">Educate,&nbsp;</span>
                                <span className="text-2xl font-poppins text-blue font-bold">Advocate.</span>
                            </div>
                            <div className="h-[25px] w-full flex justify-center items-center">
                                <span className="ml-2 text-xs">© Copyright Rochester Community Initiative 2023. All rights reserved.</span>
                            </div>
                            
                        </div>
                        <div className="w-1/3 flex flex-col justify-center items-end">
                            <Image width={100} height={100} className="w-1/2" src="/assets/footer-logo.png" alt="RCI Logo" />
                        </div>
                    </div> 
                ) : (
                    <div className="w-full flex justify-center items-center h-[100px]">
                        <div className="h-full flex flex-col justify-center items-center">
                            <div className="flex h-full justify-center items-center">
                                <span className="text-lg font-poppins text-orange font-bold mr-2">Organize,&nbsp;</span>
                                <span className="text-lg font-poppins text-darkblue font-bold mr-2">Educate,&nbsp;</span>
                                <span className="text-lg font-poppins text-blue font-bold">Advocate.</span>
                            </div>
                            <div className="h-[25px] w-full flex justify-center items-center">
                                <span className="text-[8px]">© Copyright Rochester Community Initiative 2023. All rights reserved.</span>
                            </div>
                            
                        </div>
                    </div>                    
                )
            }
        </div>
    );
}