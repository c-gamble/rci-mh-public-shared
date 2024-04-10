'use client';

import HotlineCard from '../components/hotlineCard';
import { useState, useEffect } from 'react';
import { hotlines } from '../../public/data/hotlines';
import Image from 'next/image';

export default function Home() {

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
        <div className="w-full flex flex-col justify-center items-center">
            <div className="mb-16 flex justify-center items-center w-full">
                <div className="w-4/5 flex flex-col justify-center items-left mt-6 ml-6">
                    <span className={`font-poppins text-blue font-bold mb-6 ${width < 640 ? 'text-2xl' : 'text-4xl'}`}>Mental Health Database</span>
                    <span className={`font-poppins text-black ${width < 640 ? 'text-md' : 'text-xl'}`}>The past few years have been rough. Adolescents are facing an unprecedented mental crisis, and this global problem is affecting our local community. In coordination with Rochester area mental health treatment providers, we’ve compiled a database for adolescents to find treatment with a specialist that works.</span>
                </div>
                <div className="w-1/5 h-2"></div>
            </div>
            <div className={`flex justify-between items-center mb-10 ${width < 640 ? 'w-[80%]' : 'w-[60%]'}`}>
                <div className="w-1/2 flex flex-col justify-center items-center h-full">
                    <span className={`${width < 640 ? 'text-3xl mb-2' : 'text-6xl mb-4'} font-bold text-orange`}>Mental</span>
                    <span className={`${width < 640 ? 'text-3xl mb-2' : 'text-6xl mb-4'} font-bold text-darkblue`}>Health</span>
                    <span className={`${width < 640 ? 'text-3xl' : 'text-6xl'} font-bold text-blue `}>Matters.</span>
                </div>
                <div className="w-1/2">
                    <Image width={300} height={300} src="/assets/home-image.png" alt="Mental Health" />
                </div>
            </div>
            <div className="flex flex-col w-full items-center justify-center">
                <div className="mb-8">
                    <span className="text-5xl text-darkblue font-extrabold">HOTLINES</span>
                </div>
                <div className={`flex flex-col items-center justify-center ${width < 640 ? 'w-[75%]' : 'w-[50%]'}`}>
                    {hotlines.map((hotline, i) => (
                        <div key={i} className="w-full">
                            <HotlineCard header={hotline.text} description={hotline.description} link={hotline.link} />
                            {i != hotlines.length - 1 && <div className="h-4"></div>}
                        </div>
                    ))}
                </div>
                
            </div>
        </div>
    )
}