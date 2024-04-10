'use client';

import { useState, useEffect } from 'react';

export default function Therapy() {
    
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
                    <a href="/resources">Therapy</a>
                </div>
                <div className="w-3/4 rounded-md bg-darkblue flex flex-col items-center justify-center p-6 mb-4">
                    <div className="w-full h-[20%] flex items-center justify-center mb-4">
                        <span className="font-poppins text-xl font-bold text-white">When to Consider Therapy</span>
                    </div>
                    <div className="h-[60%] w-full flex justify-center items-center mb-4">
                        <div className="w-[10%]" />
                        <ul className="w-[80%] list-disc list-inside text-white font-poppins text-md">
                            <li className="mb-2">
                                You want to start therapy
                                <ul className="list-[circle] ml-6 list-inside">
                                    <li>Therapy can be a helpful tool for anyone, so if you want to see a therapist that is reason enough</li>
                                </ul>
                            </li>
                            <li className="mb-2">
                                Your coping mechanisms are no longer working
                            </li>
                            <li className="mb-2">
                                You have deceloped unhealthy coping mechanisms
                                <ul className="list-[circle] ml-6 list-inside">
                                    <li>ex: substance use, self harm, impulse spending, avoidance</li>
                                </ul>
                            </li>                        
                            <li className="mb-2">
                                You have experienced trauma
                            </li>                        
                            <li className="mb-2">
                                Your sleeping and/or eating habits have changed
                            </li>                        
                            <li className="mb-2">
                                You suspect you may have a mental illness or are experiencing symptoms that indicate so
                            </li> 
                            <li className="mb-2">
                                You are not your usual self
                            </li> 
                            <li className="mb-2">
                                You are experiencing heightened symptoms
                            </li> 
                            <li className="mb-2">
                                You are experiencing a lack of emotions or numbness
                            </li> 
                            <li className="mb-2">
                                You are experiencing suicidal thoughts or ideation
                            </li> 
                            <li className="mb-2">
                                You are lacking a strong support system
                            </li>                                          
                        </ul>
                        <div className="w-[10%]" />
                    </div>
                    <div className="w-full flex flex-col justify-center items-start text-white font-poppins text-[8px] -mb-4 -ml-4">
                        <p>Source: &quot;10 Signs You Might Need a Therapist,&quot; Mental Health Center.</p>
                    </div>
                </div>
                <div className="flex justify-center items-center w-3/4 mb-4">
                    <button className="mr-4 py-2 h-24 px-8 w-[25%] rounded-md text-white font-poppins font-bold transition-all hover:scale-[1.05] duration-300 text-lg bg-blue" onClick={() => redirect('https://www.dbhutah.org/reasons-to-see-a-therapist/')}>
                        Why Therapy?
                    </button>
                    <button className="py-2 h-24 px-8 w-[25%] rounded-md text-white font-poppins font-bold transition-all hover:scale-[1.05] duration-300 text-lg bg-blue" onClick={() => redirect('https://www.healthline.com/health/types-of-therapy#humanistic')}>
                        Different Types of Therapy
                    </button>
                    <button className="ml-4 py-2 h-24 px-8 w-[25%] rounded-md text-white font-poppins font-bold transition-all hover:scale-[1.05] duration-300 text-lg bg-blue" onClick={() => redirect('https://mhanational.org/science-behind-therapy#:~:text=Therapy%20helps%20you%20learn%20how,struggling%20with%20their%20mental%20health')}>
                        How Therapy Helps
                    </button>
                </div>
                <div className="w-3/4 flex justify-center items-center text-white font-bold font-poppins text-xl bg-orange p-2 rounded-md">
                    1-800-950-NAMI OR text &quot;HELPLINE&quot; to 62640 
                </div>
            </div>
        ) : (
        <div className="w-full flex flex-col justify-center items-center mt-8 mb-10">
            <div className="w-3/4 bg-blue font-poppins text-white text-2xl flex justify-center items-center p-2 rounded-md font-bold mb-4">
                <a href="/resources">Therapy</a>
            </div>
            <div className="w-3/4 rounded-md bg-darkblue flex flex-col items-center justify-center p-6 mb-4">
                <div className="w-full h-[20%] flex items-center justify-center mb-4">
                    <span className="font-poppins text-sm font-bold text-white">When to Consider Therapy</span>
                </div>
                <div className="h-[60%] w-full flex justify-center items-center mb-4">
                    <ul className="list-disc list-inside text-white font-poppins text-xs">
                        <li className="mb-2">
                            You want to start therapy
                            <ul className="list-[circle] ml-4 list-inside">
                                <li>Therapy can be a helpful tool for anyone, so if you want to see a therapist that is reason enough</li>
                            </ul>
                        </li>
                        <li className="mb-2">
                            Your coping mechanisms are no longer working
                        </li>
                        <li className="mb-2">
                            You have deceloped unhealthy coping mechanisms
                            <ul className="list-[circle] ml-4 list-inside">
                                <li>ex: substance use, self harm, impulse spending, avoidance</li>
                            </ul>
                        </li>                        
                        <li className="mb-2">
                            You have experienced trauma
                        </li>                        
                        <li className="mb-2">
                            Your sleeping and/or eating habits have changed
                        </li>                        
                        <li className="mb-2">
                            You suspect you may have a mental illness or are experiencing symptoms that indicate so
                        </li> 
                        <li className="mb-2">
                            You are not your usual self
                        </li> 
                        <li className="mb-2">
                            You are experiencing heightened symptoms
                        </li> 
                        <li className="mb-2">
                            You are experiencing a lack of emotions or numbness
                        </li> 
                        <li className="mb-2">
                            You are experiencing suicidal thoughts or ideation
                        </li> 
                        <li className="mb-2">
                            You are lacking a strong support system
                        </li>                                          
                    </ul>
                </div>
                <div className="w-full flex flex-col justify-center items-start text-white font-poppins text-[8px] -mb-4 -ml-4">
                    <p>Source: &quot;10 Signs You Might Need a Therapist,&quot; Mental Health Center.</p>
                </div>
            </div>
            <div className="flex justify-center items-center w-3/4 mb-4">
                <button className="mr-4 py-2 h-24 px-2 w-[25%] rounded-md text-white font-poppins font-bold transition-all hover:scale-[1.05] duration-300 text-xs bg-blue" onClick={() => redirect('https://www.dbhutah.org/reasons-to-see-a-therapist/')}>
                    Why Therapy?
                </button>
                <button className="py-2 h-24 px-2 w-[25%] rounded-md text-white font-poppins font-bold transition-all hover:scale-[1.05] duration-300 text-xs bg-blue" onClick={() => redirect('https://www.healthline.com/health/types-of-therapy#humanistic')}>
                    Different Types of Therapy
                </button>
                <button className="ml-4 py-2 h-24 px-2 w-[25%] rounded-md text-white font-poppins font-bold transition-all hover:scale-[1.05] duration-300 text-xs bg-blue" onClick={() => redirect('https://mhanational.org/science-behind-therapy#:~:text=Therapy%20helps%20you%20learn%20how,struggling%20with%20their%20mental%20health')}>
                    How Therapy Helps
                </button>
            </div>
            <div className="w-3/4 flex text-center justify-center items-center text-white font-bold font-poppins text-xl bg-orange p-2 rounded-md">
                1-800-950-NAMI OR text &quot;HELPLINE&quot; to 62640 
            </div>
        </div>            
        )
    )
}