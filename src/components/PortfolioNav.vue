<script setup lang="ts">import { ref } from 'vue'
import {
    LayoutGrid,
    Box,
    Sparkles,
    Cpu,
    Globe,
    Code2,
    Terminal,
    Zap,
    ChevronRight,
    ExternalLink,
    X
} from 'lucide-vue-next'

// All 8 portfolios with their details
const portfolios = [
    {
        id: 'devtools',
        name: 'DevTools Portfolio',
        description: 'CLI tools, VS Code extensions, and developer utilities',
        icon: Terminal,
        color: 'indigo',
        url: 'https://portfolio-devtools.web.app',
        featured: ['VIBE CLI', 'VS Code Ext', 'Git Tools']
    },
    {
        id: 'fullstack',
        name: 'Full-Stack Portfolio',
        description: 'End-to-end applications with modern architecture',
        icon: Box,
        color: 'blue',
        url: 'https://mk-knight-fullstack.web.app',
        featured: ['SaaS Apps', 'APIs', 'Databases']
    },
    {
        id: 'frontend',
        name: 'Frontend Portfolio',
        description: 'React, Vue, and modern UI/UX showcases',
        icon: LayoutGrid,
        color: 'cyan',
        url: 'https://mk-knight-frontend.web.app',
        featured: ['React', 'Vue', 'Animations']
    },
    {
        id: 'backend',
        name: 'Backend Portfolio',
        description: 'APIs, microservices, and server architecture',
        icon: Cpu,
        color: 'emerald',
        url: 'https://mk-knight-backend.web.app',
        featured: ['Node.js', 'Python', 'GraphQL']
    },
    {
        id: 'frontend-ai',
        name: 'Frontend + AI Portfolio',
        description: 'AI-powered interfaces and intelligent UIs',
        icon: Sparkles,
        color: 'violet',
        url: 'https://mk-knight-frontend-ai.web.app',
        featured: ['AI Chat', 'RAG UI', 'Agents']
    },
    {
        id: 'senior-frontend',
        name: 'Senior Frontend Portfolio',
        description: 'Vue ecosystem with enterprise architecture',
        icon: Code2,
        color: 'green',
        url: 'https://mk-knight-senior-frontend.web.app',
        featured: ['Vue 3', 'TypeScript', 'Vite'],
        current: true
    },
    {
        id: 'indie-saas',
        name: 'Indie SaaS Portfolio',
        description: 'SaaS products and automation tools',
        icon: Zap,
        color: 'amber',
        url: 'https://portfolio-indie-saas.web.app',
        featured: ['SaaS', 'Auth', 'Payments']
    },
    {
        id: 'ai-automation',
        name: 'AI Automation Portfolio',
        description: 'Agentic AI systems and automation workflows',
        icon: Globe,
        color: 'rose',
        url: 'https://portfolio-ai-automation.web.app',
        featured: ['Agents', 'Workflows', 'RAG']
    }
]

const isExpanded = ref(false)

const getColorClasses = (color: string) => {
    const colors: Record<string, { bg: string, text: string, border: string, glow: string }> = {
        indigo: {
            bg: 'bg-indigo-500/10',
            text: 'text-indigo-400',
            border: 'border-indigo-500/30',
            glow: 'shadow-indigo-500/20'
        },
        blue: {
            bg: 'bg-blue-500/10',
            text: 'text-blue-400',
            border: 'border-blue-500/30',
            glow: 'shadow-blue-500/20'
        },
        cyan: {
            bg: 'bg-cyan-500/10',
            text: 'text-cyan-400',
            border: 'border-cyan-500/30',
            glow: 'shadow-cyan-500/20'
        },
        emerald: {
            bg: 'bg-emerald-500/10',
            text: 'text-emerald-400',
            border: 'border-emerald-500/30',
            glow: 'shadow-emerald-500/20'
        },
        violet: {
            bg: 'bg-violet-500/10',
            text: 'text-violet-400',
            border: 'border-violet-500/30',
            glow: 'shadow-violet-500/20'
        },
        green: {
            bg: 'bg-green-500/10',
            text: 'text-green-400',
            border: 'border-green-500/30',
            glow: 'shadow-green-500/20'
        },
        amber: {
            bg: 'bg-amber-500/10',
            text: 'text-amber-400',
            border: 'border-amber-500/30',
            glow: 'shadow-amber-500/20'
        },
        rose: {
            bg: 'bg-rose-500/10',
            text: 'text-rose-400',
            border: 'border-rose-500/30',
            glow: 'shadow-rose-500/20'
        }
    }
    return colors[color] || colors.indigo
}

const navigateToPortfolio = (url: string) => {
    window.open(url, '_blank', 'noopener,noreferrer')
    isExpanded.value = false
}
</script>

<template>
    <div class="relative">
        <!-- Toggle Button -->
        <button
            @click="isExpanded = !isExpanded"
            class="flex items-center gap-2 px-4 py-2.5 bg-[#1e293b] border border-slate-700 hover:border-indigo-500/50 rounded-lg text-slate-300 hover:text-white transition-all duration-300"
            :class="{ 'border-indigo-500/50 shadow-lg shadow-indigo-500/10': isExpanded }"
        >
            <LayoutGrid class="w-4 h-4" />
            <span class="text-sm font-medium">All Portfolios</span>
            <span class="px-2 py-0.5 bg-slate-700 text-slate-400 rounded-full text-xs">8</span>
            <ChevronRight
                class="w-4 h-4 transition-transform duration-300"
                :class="{ 'rotate-90': isExpanded }"
            />
        </button>

        <!-- Expanded Panel -->
        <transition
            enter-active-class="transition-all duration-300 ease-out"
            enter-from-class="opacity-0 -translate-y-2"
            enter-to-class="opacity-100 translate-y-0"
            leave-active-class="transition-all duration-200 ease-in"
            leave-from-class="opacity-100 translate-y-0"
            leave-to-class="opacity-0 -translate-y-2"
        >
            <div
                v-if="isExpanded"
                class="absolute top-full left-0 mt-2 w-[480px] bg-[#1e293b] border border-slate-700 rounded-xl shadow-2xl shadow-black/50 overflow-hidden z-50"
            >
                <!-- Header -->
                <div class="flex items-center justify-between px-4 py-3 border-b border-slate-700 bg-slate-800/50">
                    <div class="flex items-center gap-2">
                        <Globe class="w-4 h-4 text-indigo-400" />
                        <span class="text-sm font-medium text-white">Portfolio Network</span>
                    </div>
                    <button
                        @click="isExpanded = false"
                        class="p-1 hover:bg-slate-700 rounded-lg transition-colors"
                    >
                        <X class="w-4 h-4 text-slate-400" />
                    </button>
                </div>

                <!-- Portfolio Grid -->
                <div class="p-4 grid grid-cols-2 gap-3 max-h-[400px] overflow-y-auto custom-scrollbar">
                    <div
                        v-for="portfolio in portfolios"
                        :key="portfolio.id"
                        class="group relative p-4 rounded-lg border transition-all duration-300 cursor-pointer"
                        :class="[
                            portfolio.current
                                ? 'bg-indigo-600/10 border-indigo-500/50'
                                : 'bg-[#0f172a] border-slate-700 hover:border-slate-600'
                        ]"
                        @click="!portfolio.current && navigateToPortfolio(portfolio.url)"
                    >
                        <!-- Current Indicator -->
                        <div
                            v-if="portfolio.current"
                            class="absolute top-2 right-2 px-2 py-0.5 bg-indigo-600 text-white text-[10px] font-medium rounded-full"
                        >
                            Current
                        </div>

                        <div class="flex items-start gap-3">
                            <div
                                class="p-2 rounded-lg shrink-0"
                                :class="getColorClasses(portfolio.color).bg"
                            >
                                <component
                                    :is="portfolio.icon"
                                    class="w-4 h-4"
                                    :class="getColorClasses(portfolio.color).text"
                                />
                            </div>
                            <div class="min-w-0 flex-1">
                                <h4 class="text-sm font-medium text-white mb-0.5 truncate">
                                    {{ portfolio.name }}
                                </h4>
                                <p class="text-xs text-slate-500 line-clamp-2 mb-2">
                                    {{ portfolio.description }}
                                </p>
                                <div class="flex flex-wrap gap-1">
                                    <span
                                        v-for="feature in portfolio.featured"
                                        :key="feature"
                                        class="px-1.5 py-0.5 bg-slate-800 text-slate-400 rounded text-[10px]"
                                    >
                                        {{ feature }}
                                    </span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <!-- Footer -->
                <div class="px-4 py-3 border-t border-slate-700 bg-slate-800/50">
                    <a
                        href="https://github.com/mk-knight23"
                        target="_blank"
                        rel="noopener noreferrer"
                        class="flex items-center justify-center gap-2 text-sm text-slate-400 hover:text-white transition-colors"
                    >
                        <ExternalLink class="w-4 h-4" />
                        <span>View all on GitHub</span>
                    </a>
                </div>
            </div>
        </transition>

        <!-- Backdrop -->
        <transition
            enter-active-class="transition-opacity duration-300"
            enter-from-class="opacity-0"
            enter-to-class="opacity-100"
            leave-active-class="transition-opacity duration-200"
            leave-from-class="opacity-100"
            leave-to-class="opacity-0"
        >
            <div
                v-if="isExpanded"
                class="fixed inset-0 bg-black/20 backdrop-blur-sm z-40"
                @click="isExpanded = false"
            />
        </transition>
    </div>
</template>
