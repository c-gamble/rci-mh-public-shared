'use client';

import { useState, useEffect } from 'react';
import { FaChevronDown as ChevronIcon } from "react-icons/fa";
import { AnimatePresence, motion } from 'framer-motion';
import ProviderCard from '@/components/providerCard';
import type { Provider } from '../../utils/providerType';
  
const openVariants = {
    visible: {
        opacity: 100, // Start with 0 opacity
        x: 0,
        height: 'auto',
        transition: {
            delay: 0.2,
            opacity: {
                delay: 0.4,
                duration: 0.2,
            }
        }
    },
    hidden: {
        opacity: 0,
        x: -100,
        height: 0,
        transition: {
            height: {
                delay: 0.2
            },
            duration: 0.2
        }
    },

    };

const closedVariants = {
    visible: {
        opacity: 100,
        transition: {
            duration: 0,
            delay: 0.4
        }
    },
    hidden: {
        opacity: 0,
        transition: {
            duration: 0.3
        }
    }
}

const gridVariants = {
    visible: {
        opacity: 100,
        height: 'auto',
        transition: {
            staggerChildren: 0.2,
            opacity: {
                delay: 0.2
            }
        }
    },
    hidden: {
        opacity: 0,
        height: 0,
        transition: {
            delay: 0.2,
            height: {
                delay: 0.4
            }
        }
    }
}

export default function Providers() {

    const [searchIsOpen, setSearchIsOpen] = useState(false);
    const [providers, setProviders] = useState<Provider[]>([]); 
    const [specialties, setSpecialties] = useState<string[]>([]);
    const [otherOptions, setOtherOptions] = useState<string[]>([]);
    const [zipcode, setZipcode] = useState('');
    const [isLoading, setIsLoading] = useState(true);

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

    const handleSetSearchIsOpen = () => {
        setSearchIsOpen(!searchIsOpen);
    }

    const handleSetZipcode = (e: any) => {
        setZipcode(e.target.value);
    }

    const handleSetSpecialties = (specialty: string) => {
        if(specialties.includes(specialty)) {
            setSpecialties(specialties.filter(s => s !== specialty));
        } else {
            setSpecialties([...specialties, specialty]);
        }
    }

    const handleSetOtherOptions = (option: string) => {
        if(otherOptions.includes(option)) {
            setOtherOptions(otherOptions.filter(o => o !== option));
        } else {
            setOtherOptions([...otherOptions, option]);
        }
    }

    useEffect(() => {

        const fetchProviders = async () => {
            const res = await fetch('/api/providers');
            const data = await res.json();
            const fetchedProviders: Provider[] = data.providers;
            const filteredProviders: Provider[] = fetchedProviders.filter(provider => provider.hidden == false);
            setProviders(filteredProviders);
            setIsLoading(false);
        }

        fetchProviders();

    }, [])

    useEffect(() => {
        setProviders(prevProviders => {
            const updatedProviders: Provider[] = [];
            for (let provider of prevProviders) {
                let valid = true;
                for (let specialty of specialties) {
                    if (!provider.tags.includes(specialty)) valid = false;
                }
                for (let option of otherOptions) {
                    if (!provider.tags.includes(option)) valid = false;
                }
                if (zipcode != '' && provider.zipcode != zipcode) valid = false;
                if (valid) provider.selected = true;
                else provider.selected = false;
                updatedProviders.push(provider);
            }
            return updatedProviders;
        });        

    }, [specialties, otherOptions])

    const handleEnter = (e: any) => {
        e.preventDefault();

        setProviders(prevProviders => {
            const updatedProviders: Provider[] = [];
            for (let provider of prevProviders) {
                let valid = true;
                for (let specialty of specialties) {
                    if (!provider.tags.includes(specialty)) valid = false;
                }
                for (let option of otherOptions) {
                    if (!provider.tags.includes(option)) valid = false;
                }
                if (zipcode != '' && provider.zipcode != zipcode) valid = false;
                if (valid) provider.selected = true;
                else provider.selected = false;
                updatedProviders.push(provider);
            }
            return updatedProviders;
        });

    }

    const handleClear = (e: any) => {
        e.preventDefault();

        setSpecialties([]);
        setOtherOptions([]);
        setZipcode('');
        setProviders(prevProviders => {
            const updatedProviders: Provider[] = [];
            for (let provider of prevProviders) {
                provider.selected = true;
                updatedProviders.push(provider);
            }
            return updatedProviders;
        });

    }

    if (!hasMounted) return null;

    return (
        <div className="w-full flex justify-center items-start font-poppins min-h-[75vh]">
            <div className="bg-blue w-[15%] min-w-[150px] p-2" style={{borderRadius: "0 0 10px 0 "}}>
                <AnimatePresence>
                {
                    searchIsOpen ? (                                                                  
                            <motion.div key="open" initial="hidden" animate="visible" exit="hidden" variants={openVariants} className="flex flex-col justify-center items-center">
                                <div className="w-full justify-start flex items-center mb-4 mt-2">
                                    <button onClick={handleSetSearchIsOpen}><ChevronIcon className="rotate-90 text-white" size={24} /></button>
                                </div>
                                <span className={`text-white font-bold ${width < 640 ? 'text-md' : 'text-xl'} mb-2`}>SPECIALTIES</span>
                                {
                                    width > 640 ? (
                                        <div className="flex justify-center items-start w-full mb-8">
                                            <div className="w-1/2 flex flex-col justify-center items-center">
                                                <button onClick={() => handleSetSpecialties('adhd')} className={`${specialties.includes('adhd') ? 'border-orange' : 'border-darkblue'} transition-all duration-150 text-darkblue font-bold mb-4 rounded-md border-2 bg-white outline-none px-2 min-w-[75px] w-[90%] text-sm flex justify-center items-center`}>ADHD</button>
                                                <button onClick={() => handleSetSpecialties('addiction')} className={`${specialties.includes('addiction') ? 'border-orange' : 'border-darkblue'} transition-all duration-150 text-darkblue font-bold mb-4 rounded-md border-2 bg-white outline-none px-2 min-w-[75px] w-[90%] text-sm flex justify-center items-center`}>Addiction</button>
                                                <button onClick={() => handleSetSpecialties('anxiety')} className={`${specialties.includes('anxiety') ? 'border-orange' : 'border-darkblue'} transition-all duration-150 text-darkblue font-bold mb-4 rounded-md border-2 bg-white outline-none px-2 min-w-[75px] w-[90%] text-sm flex justify-center items-center`}>Anxiety</button>
                                                <button onClick={() => handleSetSpecialties('bipolar')} className={`${specialties.includes('bipolar') ? 'border-orange' : 'border-darkblue'} transition-all duration-150 text-darkblue font-bold mb-4 rounded-md border-2 bg-white outline-none px-2 min-w-[75px] w-[90%] text-sm flex justify-center items-center`}>Bipolar</button>
                                                <button onClick={() => handleSetSpecialties('children')} className={`${specialties.includes('children') ? 'border-orange' : 'border-darkblue'} transition-all duration-150 text-darkblue font-bold mb-4 rounded-md border-2 bg-white outline-none px-2 min-w-[75px] w-[90%] text-sm flex justify-center items-center`}>Children</button>
                                                <button onClick={() => handleSetSpecialties('crisis')} className={`${specialties.includes('crisis') ? 'border-orange' : 'border-darkblue'} transition-all duration-150 text-darkblue font-bold mb-4 rounded-md border-2 bg-white outline-none px-2 min-w-[75px] w-[90%] text-sm flex justify-center items-center`}>Crisis</button> 
                                            </div>
                                            <div className="w-1/2 flex flex-col justify-center items-center">
                                                <button onClick={() => handleSetSpecialties('depression')} className={`${specialties.includes('depression') ? 'border-orange' : 'border-darkblue'} transition-all duration-150 text-darkblue font-bold mb-4 rounded-md border-2 bg-white outline-none px-2 min-w-[75px] w-[90%] text-sm flex justify-center items-center`}>Depression</button>                                                
                                                <button onClick={() => handleSetSpecialties('ed')} className={`${specialties.includes('ed') ? 'border-orange' : 'border-darkblue'} transition-all duration-150 text-darkblue font-bold mb-4 rounded-md border-2 bg-white outline-none px-2 min-w-[75px] w-[90%] text-sm flex justify-center items-center`}>ED</button>
                                                <button onClick={() => handleSetSpecialties('family')} className={`${specialties.includes('family') ? 'border-orange' : 'border-darkblue'} transition-all duration-150 text-darkblue font-bold mb-4 rounded-md border-2 bg-white outline-none px-2 min-w-[75px] w-[90%] text-sm flex justify-center items-center`}>Family</button>
                                                <button onClick={() => handleSetSpecialties('ocd')} className={`${specialties.includes('ocd') ? 'border-orange' : 'border-darkblue'} transition-all duration-150 text-darkblue font-bold mb-4 rounded-md border-2 bg-white outline-none px-2 min-w-[75px] w-[90%] text-sm flex justify-center items-center`}>OCD</button>
                                                <button onClick={() => handleSetSpecialties('ptsd')} className={`${specialties.includes('ptsd') ? 'border-orange' : 'border-darkblue'} transition-all duration-150 text-darkblue font-bold mb-4 rounded-md border-2 bg-white outline-none px-2 min-w-[75px] w-[90%] text-sm flex justify-center items-center`}>PTSD</button>
                                            </div>                        
                                        </div>
                                    ) : (
                                        <div className="flex flex-col justify-center items-start w-full mb-8">
                                            <button onClick={() => handleSetSpecialties('adhd')} className={`${specialties.includes('autism') ? 'border-orange' : 'border-darkblue'} transition-all duration-150 text-darkblue font-bold mb-4 rounded-md border-2 bg-white outline-none px-2 min-w-[75px] w-[90%] text-sm flex justify-center items-center`}>ADHD</button>
                                            <button onClick={() => handleSetSpecialties('addiction')} className={`${specialties.includes('addiction') ? 'border-orange' : 'border-darkblue'} transition-all duration-150 text-darkblue font-bold mb-4 rounded-md border-2 bg-white outline-none px-2 min-w-[75px] w-[90%] text-sm flex justify-center items-center`}>Addiction</button>
                                            <button onClick={() => handleSetSpecialties('anxiety')} className={`${specialties.includes('anxiety') ? 'border-orange' : 'border-darkblue'} transition-all duration-150 text-darkblue font-bold mb-4 rounded-md border-2 bg-white outline-none px-2 min-w-[75px] w-[90%] text-sm flex justify-center items-center`}>Anxiety</button>
                                            <button onClick={() => handleSetSpecialties('bipolar')} className={`${specialties.includes('bipolar') ? 'border-orange' : 'border-darkblue'} transition-all duration-150 text-darkblue font-bold mb-4 rounded-md border-2 bg-white outline-none px-2 min-w-[75px] w-[90%] text-sm flex justify-center items-center`}>Bipolar</button>
                                            <button onClick={() => handleSetSpecialties('children')} className={`${specialties.includes('children') ? 'border-orange' : 'border-darkblue'} transition-all duration-150 text-darkblue font-bold mb-4 rounded-md border-2 bg-white outline-none px-2 min-w-[75px] w-[90%] text-sm flex justify-center items-center`}>Children</button>
                                            <button onClick={() => handleSetSpecialties('crisis')} className={`${specialties.includes('crisis') ? 'border-orange' : 'border-darkblue'} transition-all duration-150 text-darkblue font-bold mb-4 rounded-md border-2 bg-white outline-none px-2 min-w-[75px] w-[90%] text-sm flex justify-center items-center`}>Crisis</button>                            
                                            <button onClick={() => handleSetSpecialties('depression')} className={`${specialties.includes('depression') ? 'border-orange' : 'border-darkblue'} transition-all duration-150 text-darkblue font-bold mb-4 rounded-md border-2 bg-white outline-none px-2 min-w-[75px] w-[90%] text-sm flex justify-center items-center`}>Depression</button>
                                            <button onClick={() => handleSetSpecialties('ed')} className={`${specialties.includes('ed') ? 'border-orange' : 'border-darkblue'} transition-all duration-150 text-darkblue font-bold mb-4 rounded-md border-2 bg-white outline-none px-2 min-w-[75px] w-[90%] text-sm flex justify-center items-center`}>ED</button>
                                            <button onClick={() => handleSetSpecialties('family')} className={`${specialties.includes('family') ? 'border-orange' : 'border-darkblue'} transition-all duration-150 text-darkblue font-bold mb-4 rounded-md border-2 bg-white outline-none px-2 min-w-[75px] w-[90%] text-sm flex justify-center items-center`}>Family</button>
                                            <button onClick={() => handleSetSpecialties('ocd')} className={`${specialties.includes('ocd') ? 'border-orange' : 'border-darkblue'} transition-all duration-150 text-darkblue font-bold mb-4 rounded-md border-2 bg-white outline-none px-2 min-w-[75px] w-[90%] text-sm flex justify-center items-center`}>OCD</button>
                                            <button onClick={() => handleSetSpecialties('ptsd')} className={`${specialties.includes('ptsd') ? 'border-orange' : 'border-darkblue'} transition-all duration-150 text-darkblue font-bold mb-4 rounded-md border-2 bg-white outline-none px-2 min-w-[75px] w-[90%] text-sm flex justify-center items-center`}>PTSD</button>
                                        </div>
                                    )
                                }
                                <span className={`text-white font-bold ${width < 640 ? 'text-md' : 'text-xl'} mb-2`}>SERVICES</span>
                                {
                                    width > 640 ? (
                                        <div className="flex justify-center items-start w-full mb-8">
                                            <div className="w-1/2 flex flex-col justify-center items-center">
                                                <button onClick={() => handleSetOtherOptions('inpatient')} className={`${otherOptions.includes('inpatient') ? 'border-orange' : 'border-darkblue'} transition-all duration-150 text-darkblue font-bold mb-4 rounded-md border-2 bg-white outline-none px-2 min-w-[75px] w-[90%] text-sm flex justify-center items-center`}>Inpatient</button>
                                                <button onClick={() => handleSetOtherOptions('in-person')} className={`${otherOptions.includes('in-person') ? 'border-orange' : 'border-darkblue'} transition-all duration-150 text-darkblue font-bold mb-4 rounded-md border-2 bg-white outline-none px-2 min-w-[75px] w-[90%] text-sm flex justify-center items-center`}>In Person</button>
                                                <button onClick={() => handleSetOtherOptions('outpatient')} className={`${otherOptions.includes('outpatient') ? 'border-orange' : 'border-darkblue'} transition-all duration-150 text-darkblue font-bold mb-4 rounded-md border-2 bg-white outline-none px-2 min-w-[75px] w-[90%] text-sm flex justify-center items-center`}>Outpatient</button>
                                            </div>
                                            <div className="w-1/2 flex flex-col justify-center items-center">
                                                <button onClick={() => handleSetOtherOptions('phone')} className={`${otherOptions.includes('phone') ? 'border-orange' : 'border-darkblue'} transition-all duration-150 text-darkblue font-bold mb-4 rounded-md border-2 bg-white outline-none px-2 min-w-[75px] w-[90%] text-sm flex justify-center items-center`}>Phone</button>
                                                <button onClick={() => handleSetOtherOptions('virtual')} className={`${otherOptions.includes('virtual') ? 'border-orange' : 'border-darkblue'} transition-all duration-150 text-darkblue font-bold mb-4 rounded-md border-2 bg-white outline-none px-2 min-w-[75px] w-[90%] text-sm flex justify-center items-center`}>Virtual</button>   
                                            </div>                        
                                        </div> 
                                    ) : (
                                        <div className="flex flex-col justify-center items-start w-full mb-8">
                                            <button onClick={() => handleSetOtherOptions('inpatient')} className={`${otherOptions.includes('inpatient') ? 'border-orange' : 'border-darkblue'} transition-all duration-150 text-darkblue font-bold mb-4 rounded-md border-2 bg-white outline-none px-2 min-w-[75px] w-[90%] text-sm flex justify-center items-center`}>Inpatient</button>
                                            <button onClick={() => handleSetOtherOptions('in-person')} className={`${otherOptions.includes('in-person') ? 'border-orange' : 'border-darkblue'} transition-all duration-150 text-darkblue font-bold mb-4 rounded-md border-2 bg-white outline-none px-2 min-w-[75px] w-[90%] text-sm flex justify-center items-center`}>In Person</button> 
                                            <button onClick={() => handleSetOtherOptions('outpatient')} className={`${otherOptions.includes('outpatient') ? 'border-orange' : 'border-darkblue'} transition-all duration-150 text-darkblue font-bold mb-4 rounded-md border-2 bg-white outline-none px-2 min-w-[75px] w-[90%] text-sm flex justify-center items-center`}>Outpatient</button>
                                            <button onClick={() => handleSetOtherOptions('phone')} className={`${otherOptions.includes('phone') ? 'border-orange' : 'border-darkblue'} transition-all duration-150 text-darkblue font-bold mb-4 rounded-md border-2 bg-white outline-none px-2 min-w-[75px] w-[90%] text-sm flex justify-center items-center`}>Phone</button>
                                            <button onClick={() => handleSetOtherOptions('virtual')} className={`${otherOptions.includes('virtual') ? 'border-orange' : 'border-darkblue'} transition-all duration-150 text-darkblue font-bold mb-4 rounded-md border-2 bg-white outline-none px-2 min-w-[75px] w-[90%] text-sm flex justify-center items-center`}>Virtual</button>                        
                                        </div> 
                                    )
                                } 
                                <span className={`text-white font-bold ${width < 640 ? 'text-md' : 'text-xl'} mb-2`}>ZIPCODE</span>
                                <div className="flex justify-center items-center w-full mb-4">
                                    <input 
                                        className={`text-black rounded-md border-2 border-darkblue transition-all duration-150 focus:border-orange outline-none p-2 min-w-[75px] w-[90%] ${width < 640 ? 'text-[12px]' : 'text-sm'}`}
                                        type="text"
                                        placeholder={width < 640 ? "Type here" : "Enter your zipcode"}
                                        value={zipcode}
                                        onChange={handleSetZipcode}
                                    /> 
                                </div> 
                                <div className="flex flex-col justify-center items-center w-full">
                                    <button onClick={handleEnter} className="text-white rounded-md border-2 border-darkblue px-2 font-bold transition_all duration-150 hover:bg-orange hover:border-orange bg-darkblue outline-none mb-4">Enter</button> 
                                    <button onClick={handleClear} className="text-white rounded-md border-2 border-darkblue px-2 font-bold transition_all duration-150 hover:bg-orange hover:border-orange bg-darkblue outline-none">Clear</button>
                                </div>
                                <div className="h-[50px]" />
                            </motion.div>

                            
                    ) : (
                        <motion.div key="closed" variants={closedVariants} initial="visible" animate="visible" exit="hidden">
                            <div className="w-full justify-center flex items-center mb-2 mt-2"> 
                                <div className="w-[20%]">
                                    <button onClick={handleSetSearchIsOpen}><ChevronIcon className="text-white" size={24} /></button>
                                </div>  
                                <div className="w-[80%] flex justify-start items-center text-white font-bold">
                                    <span className={`w-[80%] flex justify-center items-center text-white font-bold ${width < 640 ? 'text-md' : 'text-xl'}`}>SEARCH</span>    
                                </div>                                                                                             
                            </div>
                        </motion.div>
                    )
                }
                </AnimatePresence>                
                </div>
            {/*PROVIDERS DISPLAY*/}
            <div className="w-[85%]">
                <AnimatePresence>
                {
                    providers.some(provider => provider.selected == true) ? (
                        <motion.div variants={gridVariants} initial="hidden" animate="visible" exit="hidden" className={`grid place-items-center gap-4 ${width < 640 ? 'grid-cols-1 mr-2 ml-2 mt-6' : 'mt-8 grid-cols-2 mr-6 ml-6'}`}>
                            {
                                providers.map((provider, i) => {
                                    if (provider.selected == true)
                                        return (
                                            <ProviderCard key={i} renderIndex={i} provider={provider} />
                                        );
                                })
                            }
                        </motion.div>
                    ) : (
                        !isLoading ? (
                            <div className="w-full flex justify-center items-center mt-8">
                                <span className="w-full text-center text-black font-bold text-xl">No results found.</span>
                            </div>
                        ) : (
                            <div className="w-full flex justify-center items-center mt-8">
                                <span className="w-full text-center text-black font-bold text-xl">Loading results...</span>
                            </div>
                        )
                    )
                }
                </AnimatePresence>
            </div>  
        </div>
    );
}
