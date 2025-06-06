import { defineConfig } from 'vitepress'
import path from 'node:path'

// https://vitepress.dev/reference/site-config
export default defineConfig({
    title: 'My Awesome Project',
    description: 'A VitePress Site',
    // 定义源目录
    srcDir: path.resolve(__dirname, '../src'),
    // 自定义目录重写
    rewrites: {
        'content/(.*)': '(.*)'
    }
})
