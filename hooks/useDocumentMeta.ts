import { useEffect } from 'react';

interface DocumentMetaOptions {
    title: string;
    description?: string;
    canonicalUrl?: string;
    ogImage?: string;
    ogLocale?: string;
    ogType?: string;
}

const BASE_TITLE = 'Effect Wave | موجة تأثير';
const DEFAULT_OG_IMAGE = 'https://www.effectwaveco.com/EF%20logo.png';

/**
 * Helper: create or update a <meta> tag by a selector.
 * Returns a cleanup function that restores the original value.
 */
function setMeta(
    selector: string,
    attribute: string,
    value: string,
): () => void {
    let meta = document.querySelector<HTMLMetaElement>(selector);
    const originalValue = meta?.getAttribute(attribute) ?? null;
    const existed = !!meta;

    if (!meta) {
        meta = document.createElement('meta');
        // Determine if it's a property-based or name-based tag
        if (selector.includes('property=')) {
            const prop = selector.match(/property="([^"]+)"/)?.[1];
            if (prop) meta.setAttribute('property', prop);
        } else if (selector.includes('name=')) {
            const name = selector.match(/name="([^"]+)"/)?.[1];
            if (name) meta.setAttribute('name', name);
        }
        document.head.appendChild(meta);
    }

    meta.setAttribute(attribute, value);

    return () => {
        if (existed && originalValue !== null) {
            meta!.setAttribute(attribute, originalValue);
        } else if (!existed && meta?.parentNode) {
            meta.parentNode.removeChild(meta);
        }
    };
}

/**
 * Helper: create or update the <link rel="canonical"> tag.
 */
function setCanonical(url: string): () => void {
    let link = document.querySelector<HTMLLinkElement>('link[rel="canonical"]');
    const originalHref = link?.getAttribute('href') ?? null;
    const existed = !!link;

    if (!link) {
        link = document.createElement('link');
        link.setAttribute('rel', 'canonical');
        document.head.appendChild(link);
    }

    link.setAttribute('href', url);

    return () => {
        if (existed && originalHref !== null) {
            link!.setAttribute('href', originalHref);
        } else if (!existed && link?.parentNode) {
            link.parentNode.removeChild(link);
        }
    };
}

/**
 * Sets document.title, meta description, canonical URL, Open Graph tags,
 * and Twitter Card meta per page for SEO.
 */
export function useDocumentMeta({
    title,
    description,
    canonicalUrl,
    ogImage,
    ogLocale,
    ogType = 'website',
}: DocumentMetaOptions) {
    useEffect(() => {
        const cleanups: (() => void)[] = [];

        // Title
        const prevTitle = document.title;
        document.title = title ? `${title} — ${BASE_TITLE}` : BASE_TITLE;
        cleanups.push(() => { document.title = prevTitle; });

        // Meta description
        if (description) {
            cleanups.push(
                setMeta('meta[name="description"]', 'content', description),
            );
        }

        // Canonical URL
        if (canonicalUrl) {
            cleanups.push(setCanonical(canonicalUrl));
        }

        // Open Graph tags
        const fullTitle = title ? `${title} — ${BASE_TITLE}` : BASE_TITLE;

        cleanups.push(
            setMeta('meta[property="og:title"]', 'content', fullTitle),
        );

        if (description) {
            cleanups.push(
                setMeta('meta[property="og:description"]', 'content', description),
            );
        }

        if (canonicalUrl) {
            cleanups.push(
                setMeta('meta[property="og:url"]', 'content', canonicalUrl),
            );
        }

        cleanups.push(
            setMeta('meta[property="og:type"]', 'content', ogType),
        );

        cleanups.push(
            setMeta('meta[property="og:image"]', 'content', ogImage || DEFAULT_OG_IMAGE),
        );

        if (ogLocale) {
            cleanups.push(
                setMeta('meta[property="og:locale"]', 'content', ogLocale),
            );
        }

        // Twitter Card tags
        cleanups.push(
            setMeta('meta[name="twitter:card"]', 'content', 'summary_large_image'),
        );
        cleanups.push(
            setMeta('meta[name="twitter:title"]', 'content', fullTitle),
        );
        if (description) {
            cleanups.push(
                setMeta('meta[name="twitter:description"]', 'content', description),
            );
        }
        cleanups.push(
            setMeta('meta[name="twitter:image"]', 'content', ogImage || DEFAULT_OG_IMAGE),
        );

        return () => {
            cleanups.forEach((fn) => fn());
        };
    }, [title, description, canonicalUrl, ogImage, ogLocale, ogType]);
}
