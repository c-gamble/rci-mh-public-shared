'use client';

import { useState, useEffect } from 'react';

export default function About() {

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
        <div className="w-full flex flex-col justify-center items-center mt-10 mb-10">
            <div className={`bg-blue ${width < 640 ? 'w-[90%]' : 'w-3/5'} rounded-md py-4 px-6 mb-8`}>
                <span className="font-poppins italic underline font-bold text-xl text-black">About RCI</span>
                <p className="font-poppins text-black">Rochester Community Initiative, or RCI for short, is a youth-led non-profit organization that is dedicated to improving the community through avenues of social justice, providing a platform for youth empowerment and their education, and serving underprivileged demographics.</p>
            </div>
            <div className={`bg-blue ${width < 640 ? 'w-[90%]' : 'w-3/5'} rounded-md py-4 px-6 mb-8`}>
                <span className="font-poppins italic underline font-bold text-xl text-black">Project Background</span>
                <p className="font-poppins text-black">In February of 2021, RCI created a mental health survey to gather data about the mental health of the child, adolescent, and adult populations in the Olmsted County area. The data revealed that there were accessibility issues regarding mental health treatment. The focus of this database is to improve Rochester Public School Counselors’ accessibility to mental health professionals in the area. RPS will act as a pilot for the website. In the future, we hope that this project can be expanded for the use of all people in the Olmsted area.</p>
            </div>
            <div className={`bg-blue ${width < 640 ? 'w-[90%]' : 'w-3/5'} rounded-md py-4 px-6`}>
                <span className="font-poppins italic underline font-bold text-xl text-black">Mission</span>
                <p className="font-poppins text-black">The purpose of this project is to provide easier access to mental health resources. The database will first be used by counselors at public high schools in Rochester. Eventually, the database may be extended to be accessible to anyone in the Rochester area seeking mental health help.</p>
            </div>
        </div>
    );
}