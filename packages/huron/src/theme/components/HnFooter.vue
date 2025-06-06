<template>
    <footer class="group-has-[.section-soft]/body:bg-surface/40 3xl:fixed:bg-transparent dark:bg-transparent">
        <div class="container-wrapper px-4 xl:px-6">
            <div class="flex h-[calc(.25rem*24)] items-center justify-between">
                <div class="text-muted-foreground w-full text-center text-xs leading-loose sm:text-sm">
                    The source code is available on<!-- -->
                    <a
                        class="font-medium underline underline-offset-4"
                        :href="githubUrl"
                        rel="noreferrer"
                        target="_blank"
                        >GitHub</a
                    >.
                </div>
            </div>
        </div>
    </footer>
</template>

<script lang="ts" setup>
defineOptions({
    name: 'HnFooter'
})

// const { site } = useData()
const githubUrl = import.meta.env.VITE_SOURCE_REPO_URL
console.log(import.meta.env)
</script>

<style scoped></style>
