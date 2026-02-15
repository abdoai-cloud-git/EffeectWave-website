import React from 'react';
import PageLayout from '../components/PageLayout';
import { useDocumentMeta } from '../hooks/useDocumentMeta';

interface TermsPageProps {
    theme: 'agency' | 'production';
    lang: 'ar' | 'en';
}

const TermsPage: React.FC<TermsPageProps> = ({ theme, lang }) => {
    useDocumentMeta({
        title: lang === 'ar' ? 'شروط الاستخدام' : 'Terms of Service',
        description: lang === 'ar'
            ? 'شروط وأحكام استخدام موقع موجة تأثير'
            : 'Terms and conditions for using Effect Wave website',
        canonicalUrl: 'https://www.effectwaveco.com/terms',
        ogLocale: lang === 'ar' ? 'ar_LY' : 'en_US',
    });

    const content = {
        ar: {
            title: 'شروط الاستخدام',
            lastUpdated: 'آخر تحديث: فبراير 2026',
            sections: [
                {
                    heading: 'قبول الشروط',
                    text: 'باستخدامك لهذا الموقع، فإنك توافق على الالتزام بهذه الشروط والأحكام. إذا كنت لا توافق على أي جزء من هذه الشروط، يرجى عدم استخدام الموقع.',
                },
                {
                    heading: 'الملكية الفكرية',
                    text: 'جميع المحتويات المنشورة على هذا الموقع، بما في ذلك النصوص والصور والتصاميم والشعارات، هي ملك لوكالة موجة تأثير ومحمية بموجب قوانين حقوق النشر.',
                },
                {
                    heading: 'استخدام الموقع',
                    text: 'يجب استخدام هذا الموقع لأغراض مشروعة فقط. يُحظر استخدام الموقع بأي طريقة قد تؤدي إلى إلحاق الضرر بالموقع أو تعطيله.',
                },
                {
                    heading: 'تواصل معنا',
                    text: 'لأي استفسارات حول هذه الشروط، يرجى التواصل معنا عبر info@effectwaveco.com.',
                },
            ],
        },
        en: {
            title: 'Terms of Service',
            lastUpdated: 'Last Updated: February 2026',
            sections: [
                {
                    heading: 'Acceptance of Terms',
                    text: 'By using this website, you agree to be bound by these terms and conditions. If you do not agree to any part of these terms, please do not use the website.',
                },
                {
                    heading: 'Intellectual Property',
                    text: 'All content published on this website, including text, images, designs, and logos, is the property of Effect Wave Agency and is protected under copyright laws.',
                },
                {
                    heading: 'Use of Website',
                    text: 'This website must be used for lawful purposes only. You are prohibited from using the website in any way that may cause damage or impairment to the website.',
                },
                {
                    heading: 'Contact Us',
                    text: 'For any inquiries about these terms, please contact us at info@effectwaveco.com.',
                },
            ],
        },
    };

    const c = content[lang];

    return (
        <PageLayout theme={theme} title={c.title} subtitle="TERMS OF SERVICE">
            <section className="px-4 sm:px-6 max-w-4xl mx-auto">
                <p className="text-silver/40 text-sm mb-12 font-english">{c.lastUpdated}</p>
                <div className="space-y-10">
                    {c.sections.map((s, i) => (
                        <div key={i}>
                            <h2 className="text-2xl font-heading font-bold text-white mb-4">{s.heading}</h2>
                            <p className="text-silver/70 text-lg leading-relaxed">{s.text}</p>
                        </div>
                    ))}
                </div>
            </section>
        </PageLayout>
    );
};

export default TermsPage;
