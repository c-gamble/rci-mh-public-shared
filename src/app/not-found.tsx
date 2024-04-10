'use client';

import { useRouter } from 'next/navigation';

export default function NotFound() {
    const router = useRouter();

    const handleClick = () => {
        router.back();
    }

    return (
        <div className="w-full h-[calc(100vh-144px)] flex flex-col justify-center items-center">
            <span className="font-poppins text-black w-[50%] text-center text-xl">We&apos;re sorry, but the page you&apos;re trying to find doesn&apos;t exist! If this is a mistake, please let us know.</span>
            <button onClick={handleClick} className="font-poppins text-black text-center text-lg mt-20 border-black border-2 rounded-md px-4 py-2 hover:border-blue transition-all">Go Back</button>
        </div>
    );
}