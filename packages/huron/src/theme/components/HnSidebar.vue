<template>
    <Sidebar
        class="sticky top-[calc(calc(.25rem*14)+1px)] z-30 hidden h-[calc(100svh-calc(.25rem*24))] bg-transparent lg:flex"
    >
        <SidebarContent class="no-scrollbar px-2 pb-12">
            <SidebarGroup>
                <SidebarGroupLabel>Projects</SidebarGroupLabel>
                <SidebarGroupContent>
                    <SidebarMenu>
                        <SidebarMenuItem v-for="(item, index) in items" :key="index">
                            <SidebarMenuButton as-child>
                                <a :href="item.url">
                                    <span>{{ item.title }}</span>
                                </a>
                            </SidebarMenuButton>

                            <SidebarMenuSub>
                                <SidebarMenuSubItem v-for="(subItem, subIndex) in item.items" :key="subIndex">
                                    <SidebarMenuSubButton as-child>
                                        <a :href="subItem.url">
                                            <component :is="Frame" />
                                            <span>{{ subItem.title }}</span>
                                        </a>
                                    </SidebarMenuSubButton>
                                </SidebarMenuSubItem>
                            </SidebarMenuSub>
                        </SidebarMenuItem>
                    </SidebarMenu>
                </SidebarGroupContent>
            </SidebarGroup>

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
    SidebarMenuItem,
    SidebarMenuSub,
    SidebarMenuSubButton,
    SidebarMenuSubItem
} from './sidebar'
import { Frame, LifeBuoy, Map, PieChart, Send } from 'lucide-vue-next'

defineOptions({
    name: 'HnSidebar'
})

const items = [
    {
        title: 'Getting Started',
        url: '#',
        items: [
            {
                title: 'Installation',
                url: '#'
            },
            {
                title: 'Project Structure',
                url: '#'
            }
        ]
    },
    {
        title: 'Building Your Application',
        url: '#',
        items: [
            {
                title: 'Routing',
                url: '#'
            },
            {
                title: 'Data Fetching',
                url: '#',
                isActive: true
            },
            {
                title: 'Rendering',
                url: '#'
            },
            {
                title: 'Caching',
                url: '#'
            },
            {
                title: 'Styling',
                url: '#'
            },
            {
                title: 'Optimizing',
                url: '#'
            },
            {
                title: 'Configuring',
                url: '#'
            },
            {
                title: 'Testing',
                url: '#'
            },
            {
                title: 'Authentication',
                url: '#'
            },
            {
                title: 'Deploying',
                url: '#'
            },
            {
                title: 'Upgrading',
                url: '#'
            },
            {
                title: 'Examples',
                url: '#'
            }
        ]
    },
    {
        title: 'API Reference',
        url: '#',
        items: [
            {
                title: 'Components',
                url: '#'
            },
            {
                title: 'File Conventions',
                url: '#'
            },
            {
                title: 'Functions',
                url: '#'
            },
            {
                title: 'next.config.js Options',
                url: '#'
            },
            {
                title: 'CLI',
                url: '#'
            },
            {
                title: 'Edge Runtime',
                url: '#'
            }
        ]
    },
    {
        title: 'Architecture',
        url: '#',
        items: [
            {
                title: 'Accessibility',
                url: '#'
            },
            {
                title: 'Fast Refresh',
                url: '#'
            },
            {
                title: 'Next.js Compiler',
                url: '#'
            },
            {
                title: 'Supported Browsers',
                url: '#'
            },
            {
                title: 'Turbopack',
                url: '#'
            }
        ]
    }
]

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
