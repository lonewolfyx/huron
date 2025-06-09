<template>
    <NavigationMenu :viewport="false">
        <NavigationMenuList>
            <NavigationMenuItem v-for="item in theme.nav" :key="item.text">
                <NavigationMenuLink v-if="!item.items" :class="navigationMenuTriggerStyle()" as-child>
                    <a
                        class="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground"
                        :href="item.link"
                        :title="item.text"
                        target="undefined"
                    >
                        <div class="text-sm font-medium leading-none">{{ item.text }}</div>
                    </a>
                </NavigationMenuLink>

                <template v-else>
                    <NavigationMenuTrigger>{{ item.text }}</NavigationMenuTrigger>
                    <NavigationMenuContent>
                        <ul class="grid w-[200px]">
                            <li v-for="child in item.items" :key="child.text">
                                <NavigationMenuLink as-child>
                                    <a
                                        class="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground"
                                        :href="child.link"
                                        :title="child.text"
                                        target="undefined"
                                    >
                                        <div class="text-sm font-medium leading-none">{{ child.text }}</div>
                                    </a>
                                </NavigationMenuLink>
                            </li>
                        </ul>
                    </NavigationMenuContent>
                </template>
            </NavigationMenuItem>
        </NavigationMenuList>
    </NavigationMenu>
</template>

<script lang="ts" setup>
import {
    NavigationMenu,
    NavigationMenuContent,
    NavigationMenuItem,
    NavigationMenuLink,
    NavigationMenuList,
    NavigationMenuTrigger,
    navigationMenuTriggerStyle
} from './navigation-menu'
import { useData } from 'vitepress'

defineOptions({
    name: 'HnNav'
})

const { theme } = useData()
</script>

<style scoped></style>
