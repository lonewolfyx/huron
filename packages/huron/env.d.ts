/// <reference types="vite/client" />

interface ImportMetaEnv {
    readonly DEV: boolean
    readonly BASE_URL: string
}

interface ImportMeta {
    readonly env: ImportMetaEnv
}

declare module '*.vue' {
    import type { DefineComponent } from 'vue'
    const component: DefineComponent
    export default component
}
