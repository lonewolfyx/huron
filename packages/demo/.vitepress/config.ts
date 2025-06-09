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
        },
        outline: {
            label: '页面导航'
        },
        // 导航
        nav: [
            {
                text: 'Api Examples',
                link: '/api-examples',
                activeMatch: '/zh/guide/'
            },
            {
                text: 'Markdown Example',
                link: '/markdown-examples',
                activeMatch: '/zh/reference/'
            },
            {
                text: 'pkg.version',
                items: [
                    {
                        text: '更新日志',
                        link: '/markdown-examples'
                    },
                    {
                        text: '参与贡献',
                        link: '/api-examples'
                    }
                ]
            }
        ],
        // 左侧类别
        sidebar: {
            'api-examples': [
                {
                    text: '简介',
                    collapsed: false,
                    items: [
                        { text: '什么是 VitePress？', link: 'what-is-vitepress' },
                        { text: '快速开始', link: 'getting-started' },
                        { text: '路由', link: 'routing' },
                        { text: '部署', link: 'deploy' }
                    ]
                },
                {
                    text: '写作',
                    collapsed: false,
                    items: [
                        { text: 'Markdown 扩展', link: 'markdown' },
                        { text: '资源处理', link: 'asset-handling' },
                        { text: 'frontmatter', link: 'frontmatter' },
                        { text: '在 Markdown 使用 Vue', link: 'using-vue' },
                        { text: '国际化', link: 'i18n' }
                    ]
                }
            ]
        }
    }
})
