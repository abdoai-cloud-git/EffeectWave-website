import { useEffect } from 'react';

interface DocumentMetaOptions {
    title: string;
    description?: string;
}

/**
 * Sets document.title and meta description per page for SEO.
 */
export function useDocumentMeta({ title, description }: DocumentMetaOptions) {
    useEffect(() => {
        const baseTitle = 'Effect Wave | موجة تأثير';
        document.title = title ? `${title} — ${baseTitle}` : baseTitle;

        if (description) {
            let meta = document.querySelector('meta[name="description"]');
            if (meta) {
                meta.setAttribute('content', description);
            }
        }

        return () => {
            document.title = baseTitle;
        };
    }, [title, description]);
}
