import { defineConfig } from 'vitepress'
import path from 'node:path'

// https://vitepress.dev/reference/site-config
export default defineConfig({
    title: 'My Awesome Project',
    description: 'A VitePress Site',
    srcDir: path.resolve(__dirname, '../src'),
    rewrites: {
        'content/(.*)': '(.*)'
    }
})
