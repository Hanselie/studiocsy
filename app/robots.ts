import { MetadataRoute } from 'next';

// Robots.txt for search engine crawl directives
export default function robots(): MetadataRoute.Robots {
    return {
        rules: [
            {
                userAgent: '*',
                allow: '/',
                disallow: ['/api/', '/_next/'],
            },
        ],
        sitemap: 'https://studiocsy.com/sitemap.xml',
    };
}
