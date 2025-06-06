// https://vitepress.dev/guide/custom-theme
import type { Theme } from 'vitepress'
import './style.css'

import HuronTheme from '@huron/core'
import '@huron/core/style.css'

export default {
    ...HuronTheme,
    enhanceApp({ app, router, siteData }) {
        // ...
    }
} satisfies Theme
