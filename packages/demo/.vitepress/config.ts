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
    },
    // 主题配置
    themeConfig: {
        siteTitle: '站点标题',
        logo: { src: '/vitepress-logo-mini.svg', width: 24, height: 24 },
        // 社交帐户链接
        socialLinks: [
            { icon: 'github', link: 'https://github.com/vuejs/vitepress' }],
        // 页脚
        footer: {
            message: 'Released under the MIT License.',
            copyright: 'Copyright © 2019-present Evan You'
        },
        // 编辑链接
        editLink: {
            pattern: 'https://github.com/vuejs/vitepress/edit/main/docs/:path',
            text: 'Edit this page on GitHub'
        },
        // 允许自定义上次更新的文本和日期格式
        lastUpdated: {
            text: 'Updated at',
            formatOptions: {
                dateStyle: 'full',
                timeStyle: 'medium'
            }
        },
        // 搜索
        search: {
            provider: 'local'
        }
    }
})
