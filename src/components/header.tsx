'use client';

import '../app/global.css';
import Link from 'next/link';
import { useState, useEffect } from 'react';
import { usePathname } from 'next/navigation';
import Image from 'next/image';

export default function Header() {
    const pathname = usePathname();

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
        <div className={`flex bg-orange w-full justify-center ${width < 640 ? 'justify-evenly p-2 h-16' : 'h-36'}`}>
            <div className={`w-[10%] align-center flex justify-center items-center ${width < 640 ? '' : ''}`}>
                <Image src="/assets/r-logo.png" alt="logo" width={200} height={200} className={`${width < 640 ? 'h-[40px] w-auto' : 'h-2/3 w-auto'}`} />
            </div>
            {width > 640 && (
                <div className="w-[30%] h-full flex justify-start items-center">
                    <span className="text-white text-4xl font-poppins font-bold">Mental Health</span>
                </div>
            )}
            {width > 640 && <div className="w-[35%]"></div>}
            <div className={`w-[45%] flex justify-evenly items-center h-full font-poppins text-lg ${width < 640 ? 'text-sm w-[90%]' : ''}`}>
                <Link className={`font-poppins transition-all ${pathname == "/" ? "text-white font-bold" : "text-black"}`} href="/">Home</Link>
                <Link className={`font-poppins transition-all ${pathname == "/about" ? "text-white font-bold" : "text-black"}`} href="/about">About</Link>
                <Link className={`font-poppins transition-all ${pathname == "/providers" ? "text-white font-bold" : "text-black"}`} href="/providers">Providers</Link>
                <Link className={`font-poppins transition-all ${pathname.includes("/resources") ? "text-white font-bold" : "text-black"}`} href="/resources">{width > 640 && "Free "}Resources</Link>
                <Link className={`font-poppins transition-all ${pathname == "/contact" ? "text-white font-bold" : "text-black"}`} href="/contact">Contact</Link>
            </div>
        </div>
        
    );
}
