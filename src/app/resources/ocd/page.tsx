'use client';

import { resourcePages } from '../../../../public/data/resourcePages';
import { useState, useEffect } from 'react';

export default function ResourcePage({ }) {

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

    const resourceDetails = resourcePages['ocd'];

    const redirect = (url: string) => {
        window.open(url, '_blank', 'noopener noreferrer');
    }

    return (
        width > 640 ? (
            <div className="w-full flex flex-col justify-center items-center mt-10 mb-10">
                <div className="w-3/4 bg-blue font-poppins text-white text-2xl flex justify-center items-center p-2 rounded-md font-bold mb-4">
                    <a href="/resources">{resourceDetails.title} Resources</a>
                </div>
                <div className="w-3/4 rounded-md bg-darkblue flex flex-col items-center justify-center p-6 mb-4">
                    <div className="w-full h-[20%] flex items-center justify-center mb-4">
                        <span className="font-poppins text-xl font-bold text-white">Recognize the Indicators of {!resourceDetails.title.includes('Suicide') ? resourceDetails.title : 'Suicide'}</span>
                    </div>
                    <div className="h-[60%] w-full flex justify-center items-center mb-4">
                        <div className="w-[10%]" />
                        <ul className="w-[80%] list-disc list-inside text-white font-poppins text-md">
                            {
                                resourceDetails.bullets.map((bullet: any, index: any) => {
                                    return (
                                        <li key={index} className="mb-2">
                                            {bullet}
                                        </li>
                                    )
                                })
                            }                                     
                        </ul>
                        <div className="w-[10%]" />
                    </div>
                    <div className="w-full flex flex-col justify-center items-start text-white font-poppins text-[8px] -mb-4 -ml-4">
                        <p>*Not intended for diagnostic purposes.</p>
                        <p>Source: {resourceDetails.source}</p>
                    </div>
                </div>
                <div className="flex justify-center items-center w-3/4 mb-4">
                    <button className="mr-4 py-2 h-24 px-8 w-[25%] rounded-md text-white font-poppins font-bold transition-all hover:scale-[1.05] duration-300 text-lg bg-blue" onClick={() => redirect(resourceDetails.link1)}>
                        Government Resources
                    </button>
                    <button className="py-2 h-24 px-8 w-[25%] rounded-md text-white font-poppins font-bold transition-all hover:scale-[1.05] duration-300 text-lg bg-blue" onClick={() => redirect(resourceDetails.link2)}>
                        MN Resources
                    </button>
                    <button className="ml-4 py-2 h-24 px-8 w-[25%] rounded-md text-white font-poppins font-bold transition-all hover:scale-[1.05] duration-300 text-lg bg-blue" onClick={() => redirect(resourceDetails.link3)}>
                        Local Resources
                    </button>
                </div>
                <div className="w-3/4 rounded-md bg-blue flex flex-col items-center justify-center p-6 mb-4">
                    <div className="w-full h-[20%] flex items-center justify-center mb-4">
                        <span className="font-poppins text-xl font-bold text-white">Videos</span>
                    </div>
                    <div className="h-[60%] w-full flex justify-evenly items-center mb-4">
                        <div className="w-[10%]" />
                        <iframe className="mr-4" src="https://www.youtube.com/embed/ivyLkTcvanQ" />
                        <iframe src="https://www.youtube.com/embed/BJshegpcFv8" />
                        <iframe className="ml-4" src="https://www.youtube.com/embed/1MJVG8kWBbc" />
                        <div className="w-[10%]" />
                    </div>
                </div>
                <div className="w-3/4 flex justify-center items-center text-white font-bold font-poppins text-xl bg-orange p-2 rounded-md">
                    {resourceDetails.hotline}
                </div>
            </div>        
        ) : (
            <div className="w-full flex flex-col justify-center items-center mt-8 mb-10">
                <div className="w-3/4 bg-blue font-poppins text-white text-2xl flex justify-center items-center p-2 rounded-md font-bold mb-4">
                    <a href="/resources">{resourceDetails.title} Resources</a>
                </div>
                <div className="w-3/4 rounded-md bg-darkblue flex flex-col items-center justify-center p-6 mb-4">
                    <div className="w-full h-[20%] flex items-center justify-center mb-4">
                        <span className="font-poppins text-sm text-center font-bold text-white">Recognize the Indicators of {!resourceDetails.title.includes('Suicide') ? resourceDetails.title : 'Suicide'}</span>
                    </div>
                    <div className="h-[60%] w-full flex justify-center items-center mb-4">
                        <ul className="list-disc list-inside text-white font-poppins text-xs">
                            {
                                resourceDetails.bullets.map((bullet: any, index: any) => {
                                    return (
                                        <li key={index} className="mb-2">
                                            {bullet}
                                        </li>
                                    )
                                })
                            }                                     
                        </ul>
                    </div>
                    <div className="w-full flex flex-col justify-center items-start text-white font-poppins text-[8px] -mb-4 -ml-4">
                        <p>*Not intended for diagnostic purposes.</p>
                        <p>Source: {resourceDetails.source}</p>
                    </div>
                </div>
                <div className="flex justify-center items-center w-3/4 mb-4">
                    <button className="mr-4 py-2 h-24 px-2 w-[25%] rounded-md text-white font-poppins font-bold transition-all hover:scale-[1.05] duration-300 text-xs bg-blue" onClick={() => redirect(resourceDetails.link1)}>
                        Federal Resources
                    </button>
                    <button className="py-2 h-24 px-2 w-[25%] rounded-md text-white font-poppins font-bold transition-all hover:scale-[1.05] duration-300 text-xs bg-blue" onClick={() => redirect(resourceDetails.link2)}>
                        MN Resources
                    </button>
                    <button className="ml-4 py-2 h-24 px-2 w-[25%] rounded-md text-white font-poppins font-bold transition-all hover:scale-[1.05] duration-300 text-xs bg-blue" onClick={() => redirect(resourceDetails.link3)}>
                        Local Resources
                    </button>
                </div>
                <div className="w-3/4 rounded-md bg-blue flex flex-col items-center justify-center p-6 mb-4">
                    <div className="w-full h-[20%] flex items-center justify-center mb-4">
                        <span className="font-poppins text-xl font-bold text-white">Videos</span>
                    </div>
                    <div className="h-[60%] w-full flex flex-col justify-evenly items-center mb-4">
                        <iframe className="mb-4 w-[80%]" src="https://www.youtube.com/embed/ivyLkTcvanQ" />
                        <iframe className="mb-4 w-[80%]" src="https://www.youtube.com/embed/BJshegpcFv8" />
                        <iframe className="w-[80%]" src="https://www.youtube.com/embed/1MJVG8kWBbc" />
                    </div>
                </div>
                <div className="w-3/4 flex text-center justify-center items-center text-white font-bold font-poppins text-xl bg-orange p-2 rounded-md">
                    {resourceDetails.hotline}
                </div>
            </div>
        )
    )
}