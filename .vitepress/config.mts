import { defineConfig } from 'vitepress'
import tailwindcss from '@tailwindcss/vite'
import { resolve } from 'path'

// https://vitepress.dev/reference/site-config
export default defineConfig({
    title: 'Huron Theme',
    description: 'A VitePress Site',
    head: [
        [
            'meta',
            { name: 'theme-color', media: '(prefers-color-scheme: light)', content: 'white' }],
        [
            'meta',
            { name: 'theme-color', media: '(prefers-color-scheme: dark)', content: 'black' }]
    ],
    themeConfig: {
        // https://vitepress.dev/reference/default-theme-config
        nav: [
            { text: 'Home', link: '/' },
            { text: 'Examples', link: '/markdown-examples' }
        ],

        sidebar: [
            {
                text: 'Examples',
                items: [
                    { text: 'Markdown Examples', link: '/markdown-examples' },
                    { text: 'Runtime API Examples', link: '/api-examples' }
                ]
            }
        ],

        socialLinks: [
            { icon: 'github', link: 'https://github.com/vuejs/vitepress' }]
    },
    srcDir: resolve(__dirname, '../src'),
    rewrites: {
        'content/(.*)': '(.*)'
    },
    vite: {
        plugins: [
            tailwindcss()
        ],
        server: {
            host: '0.0.0.0',
            open: true
        }
    }
})
