<template>
    <Sidebar
        class="sticky top-[calc(calc(.25rem*14)+1px)] z-30 hidden h-[calc(100svh-calc(.25rem*24))] bg-transparent lg:flex"
    >
        <SidebarContent class="no-scrollbar px-2 pb-12">
            <SidebarGroup>
                <SidebarGroupLabel>Projects</SidebarGroupLabel>
                <SidebarGroupContent>
                    <SidebarMenu>
                        <SidebarMenuItem v-for="project in projects" :key="project.name">
                            <SidebarMenuButton as-child>
                                <a :href="project.url">
                                    <component :is="project.icon" />
                                    <span>{{ project.name }}</span>
                                </a>
                            </SidebarMenuButton>
                        </SidebarMenuItem>
                    </SidebarMenu>
                </SidebarGroupContent>
            </SidebarGroup>
        </SidebarContent>
    </Sidebar>
</template>

<script lang="ts" setup>
import {
    Sidebar,
    SidebarContent,
    SidebarGroup,
    SidebarGroupContent,
    SidebarGroupLabel,
    SidebarMenu,
    SidebarMenuButton,
    SidebarMenuItem
} from './sidebar'
import { Frame, LifeBuoy, Map, PieChart, Send } from 'lucide-vue-next'

defineOptions({
    name: 'HnSidebar'
})

const projects = [
    {
        name: 'Design Engineering',
        url: '#',
        icon: Frame
    },
    {
        name: 'Sales & Marketing',
        url: '#',
        icon: PieChart
    },
    {
        name: 'Travel',
        url: '#',
        icon: Map
    },
    {
        name: 'Support',
        url: '#',
        icon: LifeBuoy
    },
    {
        name: 'Feedback',
        url: '#',
        icon: Send
    },
    {
        name: 'Sales & Marketing',
        url: '#',
        icon: PieChart
    },
    {
        name: 'Travel',
        url: '#',
        icon: Map
    },
    {
        name: 'Support',
        url: '#',
        icon: LifeBuoy
    },
    {
        name: 'Feedback',
        url: '#',
        icon: Send
    },
    {
        name: 'Sales & Marketing',
        url: '#',
        icon: PieChart
    },
    {
        name: 'Travel',
        url: '#',
        icon: Map
    },
    {
        name: 'Support',
        url: '#',
        icon: LifeBuoy
    },
    {
        name: 'Feedback',
        url: '#',
        icon: Send
    },
    {
        name: 'Sales & Marketing',
        url: '#',
        icon: PieChart
    },
    {
        name: 'Travel',
        url: '#',
        icon: Map
    },
    {
        name: 'Support',
        url: '#',
        icon: LifeBuoy
    },
    {
        name: 'Feedback',
        url: '#',
        icon: Send
    },
    {
        name: 'Sales & Marketing',
        url: '#',
        icon: PieChart
    },
    {
        name: 'Travel',
        url: '#',
        icon: Map
    },
    {
        name: 'Support',
        url: '#',
        icon: LifeBuoy
    },
    {
        name: 'Feedback',
        url: '#',
        icon: Send
    },
    {
        name: 'Sales & Marketing',
        url: '#',
        icon: PieChart
    },
    {
        name: 'Travel',
        url: '#',
        icon: Map
    },
    {
        name: 'Support',
        url: '#',
        icon: LifeBuoy
    },
    {
        name: 'Feedback',
        url: '#',
        icon: Send
    },
    {
        name: 'Sales & Marketing',
        url: '#',
        icon: PieChart
    },
    {
        name: 'Travel',
        url: '#',
        icon: Map
    },
    {
        name: 'Support',
        url: '#',
        icon: LifeBuoy
    },
    {
        name: 'Feedback',
        url: '#',
        icon: Send
    },
    {
        name: 'Sales & Marketing',
        url: '#',
        icon: PieChart
    },
    {
        name: 'Travel',
        url: '#',
        icon: Map
    },
    {
        name: 'Support',
        url: '#',
        icon: LifeBuoy
    },
    {
        name: 'Feedback',
        url: '#',
        icon: Send
    }
]
</script>

<style scoped></style>
