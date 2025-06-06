import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import dtsPlugin from 'vite-plugin-dts'
// @ts-ignore
import tailwindcss from '@tailwindcss/vite'

export default defineConfig({
    plugins: [
        vue(),
        dtsPlugin(),
        tailwindcss()
    ],
    build: {
        lib: {
            entry: 'src/index.ts',
            name: 'huron',
            fileName: (format) => `huron.${format}.js`
        },
        rollupOptions: {
            external: [
                'vitepress',
                'vue'
            ],
            output: {
                globals: {
                    vue: 'Vue',
                    vitepress: 'VitePress'
                }
            }
        },
        outDir: 'dist'
    }
})
