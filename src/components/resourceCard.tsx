'use client';
import { useState } from 'react';
import { FaChevronDown as Chevron } from "react-icons/fa";
import { useRouter } from 'next/navigation'

export default function ResourceCard({ topic, subpath }: { topic: string, subpath: string }) {

    const router = useRouter();

    return (
        <div className={`transition-all border-2 border-black rounded-md bg-blue flex flex-col items-center justify-center w-full p-2`}>
            <button onClick={() => router.push(`/resources/${subpath}`)} className="w-full flex justify-center items-center">
                <div className="w-3/4 text-left">
                    <span className="text-2xl font-poppins text-white">{topic}</span>
                </div>
                <div className="w-1/4 justify-end items-center flex">
                    <Chevron className={`transition-all text-orange -rotate-90`} />
                </div>   
            </button> 
        </div>
    )
}