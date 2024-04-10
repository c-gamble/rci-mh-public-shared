'use client';

import { FaPhone as PhoneIcon } from "react-icons/fa";
import { MdOutlineEmail as EmailIcon } from "react-icons/md";
import { useState, useEffect } from 'react';
import type { Provider } from '../utils/providerType';
import Image from 'next/image';

const evenVariants = {
    visible: { 
        opacity: 1,
        width: '80%',
        transition: {
            opacity: {
                delay: 0.2,
            }
        }
    },
    hidden: { 
        opacity: 0,
        width: 0,
        transition: {
            width: {
                delay: 0.2,
            },
        }
    },
};

const oddVariants = {
    visible: { 
        opacity: 1,
        height: 'auto',
        transition: {
            opacity: {
                delay: 0.2,
            }
        }
    },
    hidden: { 
        opacity: 0,
        height: 0,
        transition: {
            height: {
                delay: 0.2,
            },
            duration: 0.2
        }
    },
};

export default function ProviderCard({ provider, renderIndex }: { provider: Provider, renderIndex: any }) {

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
            <div className="w-[80%] h-[250px] flex flex-col items-center justify-center border-2 border-darkblue bg-darkblue text-white rounded-md p-4">
                <a href={provider.website} target="_blank" className="h-[20%] w-full text-center font-bold text-xl mb-4 hover:text-orange transition-all duration-150">
                    {provider.name}
                </a>
                <div className="flex justify-center items-center w-full mb-4">
                    <div className="w-[50%]">
                        <Image height={200} width={200} src={provider.imageURL} alt={`${provider.name} Logo`} className="w-full max-h-[150px] max-w-[200px] border-0" />
                    </div>
                    <div className="w-[50%] text-[10px]">
                        <p>{provider.bio.substring(0, 250)}...</p>
                    </div>
                </div>
                <div className="flex justify-center items-center w-full text-[12px]">
                    <div className="w-[50%] flex justify-start items-center">
                        <EmailIcon size={20} className="mr-2" />
                        <p>{provider.email}</p>
                    </div>
                    <div className="w-[50%] flex justify-start items-center">
                        <PhoneIcon size={20} className="mr-2" />
                        <p>{provider.phone}</p>
                    </div>
                </div>
            </div>
        ) : (
            <div className="w-[90%] h-[200px] flex flex-col items-center justify-center border-2 border-darkblue bg-darkblue text-white rounded-md p-4">
                <a href={provider.website} target="_blank" className="h-[20%] w-full text-center font-bold text-sm mb-4 hover:text-orange transition-all duration-150">
                    {provider.name}
                </a>
                <div className="flex justify-center items-center w-full mb-4">
                    <div className="text-[10px]">
                        <p>{provider.bio.substring(0, 150)}...</p>
                    </div>
                </div>
                <div className="flex flex-col justify-center items-center w-full text-[12px]">
                    <div className="flex justify-start items-center mb-2">
                        <EmailIcon size={16} className="mr-2" />
                        <p>{provider.email}</p>
                    </div>
                    <div className="flex justify-start items-center">
                        <PhoneIcon size={16} className="mr-2" />
                        <p>{provider.phone}</p>
                    </div>
                </div>
            </div>            
        )
    );
}