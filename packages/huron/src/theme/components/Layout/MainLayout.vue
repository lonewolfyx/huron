<template>
    <div v-if="frontmatter.home">
        <h1>{{ site.title }}</h1>
        <p>{{ site.description }}</p>
        <ul>
            <li><a href="/markdown-examples.html">Markdown Examples</a></li>
            <li><a href="/api-examples.html">API Examples</a></li>
        </ul>
    </div>
    <div class="flex">
        <span class="text-xs">hello world{{ site }}{{ frontmatter }}</span>
        <Content />
    </div>
</template>

<script lang="ts" setup>
import { Content, useData } from 'vitepress'

defineOptions({
    name: 'MainLayout'
})
const { site, frontmatter } = useData()
</script>

<style scoped></style>
