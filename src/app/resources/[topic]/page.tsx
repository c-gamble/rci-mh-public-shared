'use client';

import { resourcePages } from '../../../../public/data/resourcePages';
import ResourcePage from '../../../components/resourcePage';
import { useState, useEffect } from 'react';

export default function TopicPage({ params }: {params: {topic: string}}) {
    
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
        <ResourcePage resourceDetails={resourcePages[params.topic]} width={width} height={height} />
    )
}