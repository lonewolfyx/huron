<template>
    <div class="hidden xl:block no-scrollbar h-full overflow-auto pb-16">
        <div class="space-y-2">
            <p class="font-medium">On This Page</p>
            <HnContentSidebarTree :tree="headers" :level="1" />
            <!--            <CarbonAds v-if="showCarbonAds" />-->
        </div>
    </div>
</template>

<script lang="ts" setup>
import { shallowRef } from 'vue'
import { onContentUpdated } from 'vitepress'
import type { TableOfContents, TableOfContentsItem } from '../../types/docs'
import HnContentSidebarTree from './HnContentSidebarTree.vue'

defineOptions({
    name: 'HnContentSidebar'
})

const headers = shallowRef<TableOfContents>({ items: [] })

onContentUpdated(() => {
    headers.value = getHeadingsWithHierarchy('.vp-doc')
})

/**
 * @source https://github.com/unovue/shadcn-vue/blob/dev/apps/www/.vitepress/theme/components/TableOfContent.vue#L16
 * @param divId
 */
const getHeadingsWithHierarchy = (divId: string) => {
    const div = document.querySelector(divId)
    if (!div) return { items: [] }

    const headings: HTMLHeadingElement[] = Array.from(div.querySelectorAll('h2, h3'))
    const hierarchy: TableOfContents = { items: [] }
    let currentLevel: TableOfContentsItem | undefined

    headings.forEach((heading: HTMLHeadingElement) => {
        const level = Number.parseInt(heading.tagName.charAt(1))
        if (!heading.id) {
            const newId = heading.textContent
                ?.replaceAll(/[^a-z0-9 ]/gi, '')
                .replaceAll(' ', '-')
                .toLowerCase()
            heading.id = `${newId}`
        }

        const item: TableOfContentsItem = {
            title: heading.textContent || '',
            url: `#${heading.id}`,
            items: [],
            heading
        }

        if (level === 2) {
            hierarchy.items.push(item)
            currentLevel = item
        } else if (level === 3 && currentLevel?.items) {
            currentLevel.items.push(item)
        } else {
            hierarchy.items.push(item)
        }
    })

    return hierarchy
}
</script>

<style scoped></style>
