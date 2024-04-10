'use client';

import ResourceCard from '@/components/resourceCard';
import { leftCol, rightCol } from '../../../public/data/resourceTopics';
import { useState, useEffect } from 'react';

const combinedCols = leftCol.concat(rightCol);

export default function Resources() {
    
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
        width > 640 ? ( 
            <div className="w-full flex flex-col justify-center items-center mt-10 mb-10">
                <div className="w-full flex justify-center items-center">
                    <span className="text-black font-poppins font-bold text-xl">Please take advantage of these free mental health resources.</span>
                </div>
                <div className="w-full flex justify-center items-start mt-10">
                    <div className="w-[15%]" />
                    <div className="w-[30%] flex flex-col justify-start items-center">
                        {
                            leftCol.map((resource, index) => {
                                return (
                                    <div key={index} className="w-full">
                                        <ResourceCard topic={resource.topic} subpath={resource.subpath} />
                                        {index !== leftCol.length - 1 && <div className="h-4" />}
                                    </div>                
                                )
                            })
                        }
                    </div>
                    <div className="w-[10%]" />
                    <div className="w-[30%]">
                        {
                            rightCol.map((resource, index) => {
                                return (
                                    <div key={index} className="w-full">
                                        <ResourceCard topic={resource.topic} subpath={resource.subpath} />
                                        {index !== rightCol.length - 1 && <div className="h-4" />}
                                    </div>                
                                )
                            })
                        }
                    </div>
                    <div className="w-[15%]" />
                </div>
            </div>
        ) : (
            <div className="w-full flex flex-col justify-center items-center mt-8 mb-10">
                <div className="w-full flex justify-center items-center">
                    <span className="text-black font-poppins font-bold text-lg text-center">Please take advantage of these free mental health resources.</span>
                </div>
                <div className="w-full flex justify-center items-start mt-10">
                    <div className="w-[80%] flex flex-col justify-start items-center">
                        {
                            combinedCols.map((resource, index) => {
                                return (
                                    <div key={index} className="w-full">
                                        <ResourceCard topic={resource.topic} subpath={resource.subpath} />
                                        {index !== combinedCols.length - 1 && <div className="h-4" />}
                                    </div>                
                                )
                            })
                        }
                    </div>
                </div>
            </div>           
        )
    )
}