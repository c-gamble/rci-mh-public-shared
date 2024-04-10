'use client';

import { useState, useEffect } from 'react';

export default function CopingMechanisms() {

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
                    <a href="/resources">Coping Mechanisms</a>
                </div>
                <div className="w-3/4 rounded-md bg-darkblue flex flex-col items-center justify-center p-6 mb-4">
                    <div className="w-full h-[20%] flex items-center justify-center mb-4">
                        <span className="font-poppins text-xl font-bold text-white">When dealing with times of poor mental health, try...</span>
                    </div>
                    <div className="h-[60%] w-full flex justify-center items-center mb-4">
                        <div className="w-[10%]" />
                        <ul className="w-[80%] list-disc list-inside text-white font-poppins text-md">
                            <li className="mb-2">
                                Exercise and physical activity
                                <ul className="list-[circle] ml-6 list-inside">
                                    <li>Walk, dance, bike, run, YouTube exercise video, join a sports team</li>
                                </ul>
                            </li>
                            <li className="mb-2">
                                Mindfulness and meditation
                                <ul className="list-[circle] ml-6 list-inside">
                                    <li>Yoga, stretching, deep breathing</li>
                                </ul>
                            </li>                        
                            <li className="mb-2">
                                Creative outlets
                                <ul className="list-[circle] ml-6 list-inside">
                                    <li>Drawing, cooking, puzzles, crocheting, coloring, painting, embroidery, playing an instrument</li>
                                </ul>
                            </li>                        
                            <li className="mb-2">
                                Social support
                                <ul className="list-[circle] ml-6 list-inside">
                                    <li>Spending quality time with loved ones</li>
                                </ul>
                            </li>                        
                            <li className="mb-2">
                                Journaling and self reflection
                                <ul className="list-[circle] ml-6 list-inside">
                                    <li>Try these <a className="underline" href="https://mindfulhealthsolutions.com/20-journaling-prompts-for-mental-health/" target="_blank">journaling prompts</a></li>
                                </ul>
                            </li> 
                            <li className="mb-2">
                                Time management and organization
                                <ul className="list-[circle] ml-6 list-inside">
                                    <li>Organizing thoughts and plans with lists and using prioritization strategies</li>
                                </ul>
                            </li>                                              
                        </ul>
                        <div className="w-[10%]" />
                    </div>
                    <div className="w-full flex flex-col justify-center items-start text-white font-poppins text-[8px] -mb-4 -ml-4">
                        <p>*Not to be used as a replacement for professional help.</p>
                        <p>Source: &quot;12 Healthy Coping Mechanisms: Unlocking Inner Strength,&quot; Mental Health Center.</p>
                    </div>
                </div>
                <div className="flex justify-center items-center w-3/4 mb-4">
                    <button className="mr-4 py-2 h-24 px-8 w-[25%] rounded-md text-white font-poppins font-bold transition-all hover:scale-[1.05] duration-300 text-lg bg-blue" onClick={() => redirect('https://centerstone.org/our-resources/health-wellness/substance-use-disorder-healthy-vs-unhealthy-coping-mechanisms/')}>
                        Healthy vs. Unhealthy Coping Mechanisms
                    </button>
                    <button className="py-2 h-24 px-8 w-[25%] rounded-md text-white font-poppins font-bold transition-all hover:scale-[1.05] duration-300 text-lg bg-blue" onClick={() => redirect('http://www.bcmhsus.ca/about/news-stories/stories/10-tips-to-boost-your-mental-health')}>
                        Mental Health Boosts
                    </button>
                    <button className="ml-4 py-2 h-24 px-8 w-[25%] rounded-md text-white font-poppins font-bold transition-all hover:scale-[1.05] duration-300 text-lg bg-blue" onClick={() => redirect('https://www.youtube.com/watch?v=LiUnFJ8P4gM')}>
                        Breathing Exercises
                    </button>
                </div>
                <div className="w-3/4 flex justify-center items-center text-white font-bold font-poppins text-xl bg-orange p-2 rounded-md">
                    1-800-950-NAMI OR text &quot;HELPLINE&quot; to 62640 
                </div>
            </div>
        ) : (
            <div className="w-full flex flex-col justify-center items-center mt-8 mb-10">
                <div className="w-3/4 bg-blue font-poppins text-white text-2xl flex justify-center items-center p-2 rounded-md font-bold mb-4">
                    <a href="/resources">Coping Mechanisms</a>
                </div>
                <div className="w-3/4 rounded-md bg-darkblue flex flex-col items-center justify-center p-6 mb-4">
                    <div className="w-full h-[20%] flex items-center justify-center mb-4">
                        <span className="font-poppins text-sm font-bold text-white">When dealing with times of poor mental health, try...</span>
                    </div>
                    <div className="h-[60%] w-full flex justify-center items-center mb-4">
                        <ul className="list-disc list-inside text-white font-poppins text-xs">
                            <li className="mb-2">
                                Exercise and physical activity
                                <ul className="list-[circle] ml-4 list-inside">
                                    <li>Walk, dance, bike, run, YouTube exercise video, join a sports team</li>
                                </ul>
                            </li>
                            <li className="mb-2">
                                Mindfulness and meditation
                                <ul className="list-[circle] ml-4 list-inside">
                                    <li>Yoga, stretching, deep breathing</li>
                                </ul>
                            </li>                        
                            <li className="mb-2">
                                Creative outlets
                                <ul className="list-[circle] ml-4 list-inside">
                                    <li>Drawing, cooking, puzzles, crocheting, coloring, painting, embroidery, playing an instrument</li>
                                </ul>
                            </li>                        
                            <li className="mb-2">
                                Social support
                                <ul className="list-[circle] ml-4 list-inside">
                                    <li>Spending quality time with loved ones</li>
                                </ul>
                            </li>                        
                            <li className="mb-2">
                                Journaling and self reflection
                                <ul className="list-[circle] ml-4 list-inside">
                                    <li>Try these <a className="underline" href="https://mindfulhealthsolutions.com/20-journaling-prompts-for-mental-health/" target="_blank">journaling prompts</a></li>
                                </ul>
                            </li> 
                            <li className="mb-2">
                                Time management and organization
                                <ul className="list-[circle] ml-4 list-inside">
                                    <li>Organizing thoughts and plans with lists and using prioritization strategies</li>
                                </ul>
                            </li>                                              
                        </ul>
                    </div>
                    <div className="w-full flex flex-col justify-center items-start text-white font-poppins text-[8px] -mb-4 -ml-4">
                        <p>*Not to be used as a replacement for professional help.</p>
                        <p>Source: &quot;12 Healthy Coping Mechanisms: Unlocking Inner Strength,&quot; Mental Health Center.</p>
                    </div>
                </div>
                <div className="flex justify-center items-center w-3/4 mb-4 text-xs">
                    <button className="mr-4 py-2 h-24 px-2 w-[25%] rounded-md text-white font-poppins font-bold transition-all hover:scale-[1.05] duration-300 bg-blue" onClick={() => redirect('https://centerstone.org/our-resources/health-wellness/substance-use-disorder-healthy-vs-unhealthy-coping-mechanisms/')}>
                        Healthy vs. Unhealthy Coping
                    </button>
                    <button className="py-2 h-24 px-2 w-[25%] rounded-md text-white font-poppins font-bold transition-all hover:scale-[1.05] duration-300 bg-blue" onClick={() => redirect('http://www.bcmhsus.ca/about/news-stories/stories/10-tips-to-boost-your-mental-health')}>
                        Mental Health Boosts
                    </button>
                    <button className="ml-4 py-2 h-24 px-2 w-[25%] rounded-md text-white font-poppins font-bold transition-all hover:scale-[1.05] duration-300 bg-blue" onClick={() => redirect('https://www.youtube.com/watch?v=LiUnFJ8P4gM')}>
                        Breathing Exercises
                    </button>
                </div>
                <div className="w-3/4 flex justify-center  text-center items-center text-white font-bold font-poppins text-xl bg-orange p-2 rounded-md">
                    1-800-950-NAMI OR text &quot;HELPLINE&quot; to 62640 
                </div>
            </div>            
        )
    )
}