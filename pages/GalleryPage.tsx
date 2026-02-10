import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import Gallery from '../components/Gallery';

interface GalleryPageProps {
    lang: 'en' | 'ar';
}

const GalleryPage: React.FC<GalleryPageProps> = ({ lang }) => {
    const { pathname } = useLocation();

    useEffect(() => {
        window.scrollTo(0, 0);
    }, [pathname]);

    return (
        <div className="pt-20 min-h-screen bg-obsidian">
            <Gallery lang={lang} />
        </div>
    );
};

export default GalleryPage;
