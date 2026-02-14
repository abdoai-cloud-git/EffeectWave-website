import React from 'react';
import { Link } from 'react-router-dom';
import { useDocumentMeta } from '../hooks/useDocumentMeta';

const NotFoundPage: React.FC = () => {
    useDocumentMeta({ title: '404 — Page Not Found' });

    return (
        <div className="min-h-screen flex flex-col items-center justify-center px-6 text-center">
            <h1 className="text-8xl md:text-9xl font-english font-bold text-white/10 mb-4">404</h1>
            <h2 className="text-2xl md:text-4xl font-heading font-bold text-white mb-4">
                الصفحة غير موجودة
            </h2>
            <p className="text-silver/60 text-lg mb-10 max-w-md">
                الصفحة التي تبحث عنها غير متوفرة. قد تكون قد نُقلت أو حُذفت.
            </p>
            <Link
                to="/"
                className="inline-block px-8 py-3 rounded-full bg-accent text-black font-bold text-sm tracking-widest hover:scale-105 hover:shadow-[0_0_30px_rgba(255,255,255,0.2)] transition-all duration-300 min-h-[44px] flex items-center justify-center"
            >
                العودة للرئيسية
            </Link>
        </div>
    );
};

export default NotFoundPage;
