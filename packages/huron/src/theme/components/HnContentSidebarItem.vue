<template>
    <a
        :href="item.url"
        :class="
            cn(
                'inline-block no-underline transition-colors hover:text-foreground',
                isVisible ? 'font-medium text-foreground' : 'text-muted-foreground'
            )
        "
    >
        {{ item.title }}
    </a>
</template>

<script setup lang="ts">
import type { TableOfContentsItem } from '../../types/docs'
import { computed } from 'vue'
import { useElementVisibility } from '@vueuse/core'
import { cn } from '../../lib/utils.ts'

defineOptions({
    name: 'HnContentSidebarItem'
})

const props = defineProps<{
    item: TableOfContentsItem
}>()

const target = computed(() => props.item.heading)
const isVisible = useElementVisibility(target)
</script>

<style scoped></style>
