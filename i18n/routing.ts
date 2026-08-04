import { defineRouting } from "next-intl/routing";

export const routing = defineRouting({
    locales: ['en', 'fr'],
    defaultLocale: 'en',
    localePrefix: 'never',
    domains: [
        { 
            domain: 'www.hadit.ca', 
            defaultLocale: 'en', 
            locales: ['en'],
            localePrefix: 'never',
        },
        { 
            domain: 'www.ras-le-bol.ca', 
            defaultLocale: 'fr', 
            locales: ['fr'],
            localePrefix: 'never'
        },
    ],
    pathnames: {
         '/': {
            en: '/',
            fr: '/',
        },
        '/about': {
            en: '/about',
            fr: '/nous',
        },
        '/resources': {
            en: '/resources',
            fr: '/ressources',
        },
    },
})