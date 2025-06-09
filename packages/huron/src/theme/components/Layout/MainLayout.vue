<template>
    <div class="bg-background relative z-10 flex min-h-svh flex-col">
        <header
            class="bg-background/95 sticky top-0 z-50 w-full backdrop-blur supports-[backdrop-filter]:bg-background/60"
        >
            <div class="container-wrapper 3xl:fixed:px-0 px-6">
                <div
                    class="3xl:fixed:container flex h-[calc(.25rem*14)] items-center gap-2 **:data-[slot=separator]:!h-4"
                >
                    <NavigationMenuTitle />
                    <HnNav />
                </div>
            </div>
        </header>

        <main class="flex flex-1 flex-col">
            <div class="container-wrapper flex flex-1 flex-col px-2">
                <SidebarProvider
                    class="3xl:fixed:container 3xl:fixed:px-3 min-h-min flex-1 items-start px-0 [--sidebar-width:220px] [--top-spacing:0] lg:grid lg:grid-cols-[var(--sidebar-width)_minmax(0,1fr)] lg:[--sidebar-width:240px] lg:[--top-spacing:calc(var(--spacing)*4)]"
                >
                    <HnSidebar />

                    <div class="h-full w-full">
                        <div class="flex items-stretch text-[1.05rem] sm:text-[15px] xl:w-full">
                            <div class="flex min-w-0 flex-1 flex-col">
                                <div
                                    class="vp-doc mx-auto flex w-full max-w-2xl min-w-0 flex-1 flex-col gap-8 px-4 py-6 text-neutral-800 md:px-0 lg:py-8 dark:text-neutral-300"
                                >
                                    <Content />
                                </div>
                            </div>
                            <div class="sticky h-[calc(100vh-10rem)] w-72 text-sm">
                                <HnContentSidebar />
                            </div>
                        </div>
                    </div>
                </SidebarProvider>
            </div>
        </main>

        <HnFooter />
    </div>
</template>

<script lang="ts" setup>
import { NavigationMenuTitle } from '../navigation-menu'
import { onMounted } from 'vue'
import { Content, useData } from 'vitepress'
import HnFooter from '../HnFooter.vue'
import HnSidebar from '../HnSidebar.vue'
import { SidebarProvider } from '../sidebar'
import HnContentSidebar from '../HnContentSidebar.vue'
import HnNav from '../HnNav.vue'

defineOptions({
    name: 'MainLayout'
})

const data = useData()

onMounted(() => {
    console.log(data)
})
</script>

<style scoped></style>
