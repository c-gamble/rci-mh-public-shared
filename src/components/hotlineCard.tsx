'use client';
import { useState } from 'react';
import { FaChevronDown as Chevron } from "react-icons/fa";
import { AnimatePresence, motion } from "framer-motion";

const variants = {
    visible: {
      opacity: 100, // Start with 0 opacity
      height: 'auto',
      transition: {
        opacity: {
          delay: 0.2, // Delay the opacity transition on open
        },
      },
    },
    hidden: {
      opacity: 0,
      height: 0,
      transition: {
        height: {
          delay: 0.1, // Delay the opacity transition on open
        },
      },
    },
    
  };

export default function HotlineCard({ header, description, link }: { header: string, description: string, link: string }) {

    const [showDescription, setShowDescription] = useState(false);

    return (
        <div className={`transition-all border-2 ${showDescription ? "border-orange" : "border-black"} rounded-md bg-blue flex flex-col items-center justify-center w-full p-2`}>
            <div className="w-full flex justify-center items-center">
                <div className="w-3/4">
                    <span className="text-2xl font-poppins font-bold text-white">{header}</span>
                </div>
                <div className="w-1/4 justify-end items-center flex">
                    <button onClick={() => setShowDescription(!showDescription)}><Chevron className={`transition-all ${showDescription ? "rotate-0 text-orange" : "rotate-90"}`} /></button>
                </div>   
            </div>
            <div className="w-full">
                <AnimatePresence>
                    {showDescription && 
                        <motion.div key="desc" variants={variants} animate="visible" initial="hidden" exit="hidden" className="rounded-md font-poppins leading-relaxed">
                            {description}&nbsp;<a target="_blank" className="underline text-black" href={link}>Learn more</a>
                        </motion.div>
                    }
                </AnimatePresence>
            </div>
            
        </div>
    )
}