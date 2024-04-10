'use client';

import { useState, useEffect } from 'react';

export default function StopTheStigma() {
    
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

    const redirect = (url: string) => {
        window.open(url, '_blank', 'noopener noreferrer');
    }

    return (
        width > 640 ? (
            <div className="w-full flex flex-col justify-center items-center mt-10 mb-10">
                <div className="w-3/4 bg-blue font-poppins text-white text-2xl flex justify-center items-center p-2 rounded-md font-bold mb-4">
                    <a href="/resources">Stop the Stigma</a>
                </div>
                <div className="w-3/4 rounded-md bg-darkblue flex flex-col items-center justify-center p-6 mb-4">
                    <iframe src="https://www.youtube.com/embed/pcBbZxXh8Cc" width={750} height={500}/>
                </div>
                <div className="flex justify-center items-center w-3/4 mb-4">
                    <button className="mr-4 py-2 h-24 px-8 w-[25%] rounded-md text-white font-poppins font-bold transition-all hover:scale-[1.05] duration-300 text-lg bg-blue" onClick={() => redirect('https://www.tn.gov/behavioral-health/stigma.html')}>
                        Reducing Stigma
                    </button>
                    <button className="py-2 h-24 px-8 w-[25%] rounded-md text-white font-poppins font-bold transition-all hover:scale-[1.05] duration-300 text-lg bg-blue" onClick={() => redirect('https://www.mayoclinic.org/diseases-conditions/mental-illness/in-depth/mental-health/art-20046477')}>
                        Overcoming Stigma
                    </button>
                    <button className="ml-4 py-2 h-24 px-8 w-[25%] rounded-md text-white font-poppins font-bold transition-all hover:scale-[1.05] duration-300 text-lg bg-blue" onClick={() => redirect('https://www.psychiatry.org/patients-families/stigma-and-discrimination')}>
                        Effecs of Stigma
                    </button>
                </div>
                <div className="w-3/4 flex justify-center items-center text-white font-bold font-poppins text-xl bg-orange p-2 rounded-md">
                    1-800-950-NAMI OR text “HELPLINE” to 62640 
                </div>
            </div>
        ) : (
            <div className="w-full flex flex-col justify-center items-center mt-8 mb-10">
                <div className="w-3/4 bg-blue font-poppins text-white text-2xl flex justify-center items-center p-2 rounded-md font-bold mb-4">
                    <a href="/resources">Stop the Stigma</a>
                </div>
                <div className="w-3/4 rounded-md bg-darkblue flex flex-col items-center justify-center p-6 mb-4">
                    <iframe src="https://www.youtube.com/embed/pcBbZxXh8Cc" width={250} height={200}/>
                </div>
                <div className="flex justify-center items-center w-3/4 mb-4">
                    <button className="mr-4 py-2 h-24 px-2 w-[25%] rounded-md text-white font-poppins font-bold transition-all hover:scale-[1.05] duration-300 text-xs bg-blue" onClick={() => redirect('https://www.tn.gov/behavioral-health/stigma.html')}>
                        Reduce Stigma
                    </button>
                    <button className="py-2 h-24 px-2 w-[25%] rounded-md text-white font-poppins font-bold transition-all hover:scale-[1.05] duration-300 text-xs bg-blue" onClick={() => redirect('https://www.mayoclinic.org/diseases-conditions/mental-illness/in-depth/mental-health/art-20046477')}>
                        Overcome Stigma
                    </button>
                    <button className="ml-4 py-2 h-24 px-2 w-[25%] rounded-md text-white font-poppins font-bold transition-all hover:scale-[1.05] duration-300 text-xs bg-blue" onClick={() => redirect('https://www.psychiatry.org/patients-families/stigma-and-discrimination')}>
                        Effecs of Stigma
                    </button>
                </div>
                <div className="w-3/4 flex justify-center items-center text-white font-bold font-poppins text-center text-xl bg-orange p-2 rounded-md">
                    1-800-950-NAMI OR text “HELPLINE” to 62640 
                </div>
            </div>
        )
    )
}