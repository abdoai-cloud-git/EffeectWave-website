import React from 'react';
import PageLayout from '../components/PageLayout';
import { useDocumentMeta } from '../hooks/useDocumentMeta';

interface PrivacyPageProps {
    theme: 'agency' | 'production';
    lang: 'ar' | 'en';
}

const PrivacyPage: React.FC<PrivacyPageProps> = ({ theme, lang }) => {
    useDocumentMeta({
        title: lang === 'ar' ? 'سياسة الخصوصية' : 'Privacy Policy',
        description: lang === 'ar'
            ? 'سياسة الخصوصية لوكالة موجة تأثير'
            : 'Privacy Policy for Effect Wave Agency',
        canonicalUrl: 'https://www.effectwaveco.com/privacy',
        ogLocale: lang === 'ar' ? 'ar_LY' : 'en_US',
    });

    const content = {
        ar: {
            title: 'سياسة الخصوصية',
            lastUpdated: 'آخر تحديث: فبراير 2026',
            sections: [
                {
                    heading: 'المعلومات التي نجمعها',
                    text: 'نجمع المعلومات التي تقدمها لنا مباشرة عند التواصل معنا عبر نموذج الاتصال أو البريد الإلكتروني، بما في ذلك اسمك وعنوان بريدك الإلكتروني ومحتوى رسالتك.',
                },
                {
                    heading: 'كيف نستخدم معلوماتك',
                    text: 'نستخدم المعلومات التي نجمعها للرد على استفساراتك وتقديم خدماتنا وتحسين تجربة المستخدم على موقعنا.',
                },
                {
                    heading: 'حماية المعلومات',
                    text: 'نتخذ إجراءات أمنية معقولة لحماية معلوماتك الشخصية من الوصول غير المصرح به أو التعديل أو الكشف.',
                },
                {
                    heading: 'تواصل معنا',
                    text: 'إذا كان لديك أي أسئلة حول سياسة الخصوصية هذه، يرجى التواصل معنا عبر info@effectwaveco.com.',
                },
            ],
        },
        en: {
            title: 'Privacy Policy',
            lastUpdated: 'Last Updated: February 2026',
            sections: [
                {
                    heading: 'Information We Collect',
                    text: 'We collect information you provide directly when you contact us through the contact form or email, including your name, email address, and message content.',
                },
                {
                    heading: 'How We Use Your Information',
                    text: 'We use the information we collect to respond to your inquiries, provide our services, and improve user experience on our website.',
                },
                {
                    heading: 'Information Protection',
                    text: 'We take reasonable security measures to protect your personal information from unauthorized access, modification, or disclosure.',
                },
                {
                    heading: 'Contact Us',
                    text: 'If you have any questions about this Privacy Policy, please contact us at info@effectwaveco.com.',
                },
            ],
        },
    };

    const c = content[lang];

    return (
        <PageLayout theme={theme} title={c.title} subtitle="PRIVACY POLICY">
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

export default PrivacyPage;
