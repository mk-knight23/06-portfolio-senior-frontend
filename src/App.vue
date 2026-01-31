<script setup lang="ts">
import { ref, computed } from 'vue'
import {
    Terminal,
    Code2,
    Globe,
    MessageSquare,
    Mail,
    Github,
    Linkedin,
    Phone,
    ChevronRight,
    CheckCircle2,
    Check,
    Cpu,
    Layers,
    Zap,
    Shield,
    ExternalLink,
    Activity,
    Box,
    Database,
    Server
} from 'lucide-vue-next'

// VIBE Ecosystem Products
const vibeProducts = [
    {
        name: 'AI-VIBE-WebBuilder',
        tagline: 'Generative site architect',
        description: 'Building framework-agnostic component systems for production-ready, agent-driven assembly.',
        icon: Globe,
        status: 'Planned'
    },
    {
        name: 'AI-VIBE-ChatWeb',
        tagline: 'Conversational interface',
        description: 'Real-time streaming and shared state-machines for human-agent collaboration.',
        icon: MessageSquare,
        status: 'Live'
    },
    {
        name: 'AI-VIBE-VSCode',
        tagline: 'IDE-grade agent toolsets',
        description: 'High-performance IDE integration with IDE-to-cloud synchronization services.',
        icon: Code2,
        status: 'Planned'
    },
    {
        name: 'AI-VIBE-CLI',
        tagline: 'Multi-agent AI interface',
        description: 'Single-command TUI, multi-LLM router, and security-first command execution.',
        icon: Terminal,
        status: 'In Development'
    },
    {
        name: 'AI-VIBE-Automation',
        tagline: 'Workflow orchestration',
        description: 'Background agent synchronization and cross-product state management.',
        icon: Zap,
        status: 'In Development'
    }
]

const selectedProjects = [
    { name: 'Country Explorer', category: 'Web', tech: 'React', description: 'Country data exploration dashboard' },
    { name: 'Recipe Finder', category: 'Web', tech: 'Vue', description: 'Recipe discovery application' },
    { name: 'Meme Generator', category: 'Web', tech: 'React', description: 'Custom meme creation tool' },
    { name: 'Mini Games', category: 'Game', tech: 'React', description: 'Collection of mini-games' }
]

const skillsByCategory = {
    'AI & Agents': ['RAG', 'H-RAG', 'Multi-Agent Systems', 'Tooling', 'LLM Routing'],
    'Developer Platforms': ['CLI Tools', 'VS Code Extensions', 'Automation', 'DX'],
    'Engineering & Stack': ['Python', 'Node.js', 'React', 'TypeScript', 'APIs', 'Cloud'],
    'LLM Ecosystem': ['OpenAI', 'Claude', 'Gemini', 'OpenRouter', 'Ollama']
}

const activeSection = ref('overview')
const searchQuery = ref('')

const filteredProjects = computed(() => {
    return selectedProjects.filter(p =>
        p.name.toLowerCase().includes(searchQuery.value.toLowerCase()) ||
        p.tech.toLowerCase().includes(searchQuery.value.toLowerCase())
    )
})

const navItems = [
    { id: 'overview', label: 'Overview', icon: Activity },
    { id: 'vibe', label: 'VIBE Ecosystem', icon: Box },
    { id: 'work', label: 'Projects', icon: Code2 },
    { id: 'skills', label: 'Skills', icon: Database },
    { id: 'decisions', label: 'Design Decisions', icon: Check },
    { id: 'resume', label: 'Resume', icon: CheckCircle2 },
    { id: 'contact', label: 'Contact', icon: Server }
]

function setActiveSection(id: string) {
    activeSection.value = id
    const element = document.getElementById(id)
    if (element) {
        element.scrollIntoView({ behavior: 'smooth' })
    }
}
</script>

<template>
    <div class="min-h-screen bg-[#0f172a] text-slate-300 flex">
        <!-- Sidebar -->
        <aside class="w-64 bg-[#1e293b] border-r border-slate-700 flex flex-col">
            <!-- Logo -->
            <div class="p-6 border-b border-slate-700">
                <div class="flex items-center gap-3">
                    <div class="w-10 h-10 bg-indigo-600 rounded-lg flex items-center justify-center">
                        <Terminal class="w-5 h-5 text-white" />
                    </div>
                    <div>
                        <h1 class="font-bold text-white">MK</h1>
                        <p class="text-xs text-slate-500">Portfolio v3</p>
                    </div>
                </div>
            </div>

            <!-- Navigation -->
            <nav class="flex-1 p-4">
                <div class="space-y-1">
                    <button
                        v-for="item in navItems"
                        :key="item.id"
                        @click="setActiveSection(item.id)"
                        class="w-full flex items-center gap-3 px-4 py-3 rounded-lg text-sm transition-all"
                        :class="activeSection === item.id
                            ? 'bg-indigo-600/20 text-indigo-400'
                            : 'hover:bg-slate-700/50 text-slate-400 hover:text-white'"
                    >
                        <component :is="item.icon" class="w-5 h-5" />
                        <span>{{ item.label }}</span>
                    </button>
                </div>
            </nav>

            <!-- User Card -->
            <div class="p-4 border-t border-slate-700">
                <div class="p-4 bg-slate-800/50 rounded-lg border border-slate-700">
                    <div class="flex items-center gap-3 mb-3">
                        <div class="w-10 h-10 bg-indigo-600 rounded-full flex items-center justify-center text-white font-semibold">
                            KM
                        </div>
                        <div>
                            <p class="text-sm font-medium text-white">Kazi Musharraf</p>
                            <p class="text-xs text-slate-500">Senior Frontend Developer</p>
                        </div>
                    </div>
                    <div class="flex gap-2">
                        <a href="https://github.com/mk-knight23" target="_blank" rel="noopener noreferrer"
                           class="p-2 bg-slate-700 hover:bg-slate-600 rounded-lg transition-colors flex-1 flex justify-center">
                            <Github class="w-4 h-4" />
                        </a>
                        <a href="https://www.linkedin.com/in/kazi-musharraf-0674871a4" target="_blank" rel="noopener noreferrer"
                           class="p-2 bg-slate-700 hover:bg-slate-600 rounded-lg transition-colors flex-1 flex justify-center">
                            <Linkedin class="w-4 h-4" />
                        </a>
                        <a href="mailto:mk.knight970@gmail.com"
                           class="p-2 bg-slate-700 hover:bg-slate-600 rounded-lg transition-colors flex-1 flex justify-center">
                            <Mail class="w-4 h-4" />
                        </a>
                    </div>
                </div>
            </div>
        </aside>

        <!-- Main Content -->
        <main class="flex-1 overflow-auto">
            <div class="p-8 max-w-6xl mx-auto">
                <!-- Header -->
                <header class="mb-8">
                    <h1 class="text-3xl font-bold text-white mb-2">Portfolio Dashboard</h1>
                    <p class="text-slate-400">Senior Frontend Developer</p>
                </header>

                <!-- Stats Grid -->
                <div class="grid grid-cols-4 gap-4 mb-8">
                    <div class="bg-[#1e293b] border border-slate-700 rounded-xl p-5">
                        <div class="flex items-center justify-between mb-2">
                            <span class="text-slate-500 text-sm">Total Projects</span>
                            <Activity class="w-5 h-5 text-indigo-500" />
                        </div>
                        <div class="text-3xl font-bold text-white">60+</div>
                        <div class="text-xs text-green-500 mt-1">+12 this month</div>
                    </div>
                    <div class="bg-[#1e293b] border border-slate-700 rounded-xl p-5">
                        <div class="flex items-center justify-between mb-2">
                            <span class="text-slate-500 text-sm">Products</span>
                            <Box class="w-5 h-5 text-green-500" />
                        </div>
                        <div class="text-3xl font-bold text-white">05</div>
                        <div class="text-xs text-slate-500 mt-1">AI-VIBE-ECOSYSTEM v2.0</div>
                    </div>
                    <div class="bg-[#1e293b] border border-slate-700 rounded-xl p-5">
                        <div class="flex items-center justify-between mb-2">
                            <span class="text-slate-500 text-sm">Focus</span>
                            <Cpu class="w-5 h-5 text-purple-500" />
                        </div>
                        <div class="text-3xl font-bold text-purple-400">AI</div>
                        <div class="text-xs text-slate-500 mt-1">Agentic Systems</div>
                    </div>
                    <div class="bg-[#1e293b] border border-slate-700 rounded-xl p-5">
                        <div class="flex items-center justify-between mb-2">
                            <span class="text-slate-500 text-sm">Location</span>
                            <Server class="w-5 h-5 text-slate-500" />
                        </div>
                        <div class="text-3xl font-bold text-white">India</div>
                        <div class="text-xs text-green-500 mt-1">Remote/Hybrid</div>
                    </div>
                </div>

                <!-- Overview Section -->
                <section id="overview" class="mb-12">
                    <h2 class="text-xl font-bold text-white mb-6 flex items-center gap-3">
                        <Activity class="w-5 h-5 text-indigo-500" />
                        Overview
                    </h2>
                    <div class="bg-[#1e293b] border border-slate-700 rounded-xl p-6">
                        <div class="grid md:grid-cols-2 gap-8">
                            <div>
                                <h3 class="text-lg font-semibold text-white mb-4">About</h3>
                                <p class="text-slate-400 leading-relaxed mb-4">
                                    AI Engineer and Indie Product Builder specializing in <strong class="text-white">Agentic AI</strong>,
                                    <strong class="text-white"> Developer Tools</strong>,
                                    <strong class="text-white"> Multi-LLM Routing</strong>, and
                                    <strong class="text-white"> SaaS Automation</strong>.
                                </p>
                                <p class="text-slate-400 leading-relaxed">
                                    Building the <span class="text-indigo-400">AI-VIBE-ECOSYSTEM v2.0</span> — a multi-product AI developer
                                    platform focused on agent-driven assembly, multi-agent orchestration, and
                                    production-grade developer tooling for the future of work.
                                </p>
                            </div>
                            <div>
                                <h3 class="text-lg font-semibold text-white mb-4">Quick Stats</h3>
                                <div class="space-y-3">
                                    <div class="flex justify-between py-2 border-b border-slate-700">
                                        <span class="text-slate-500">Experience</span>
                                        <span class="text-white">Full-stack</span>
                                    </div>
                                    <div class="flex justify-between py-2 border-b border-slate-700">
                                        <span class="text-slate-500">Stack</span>
                                        <span class="text-white">Python, React, TS</span>
                                    </div>
                                    <div class="flex justify-between py-2 border-b border-slate-700">
                                        <span class="text-slate-500">Status</span>
                                        <span class="text-green-400">Available</span>
                                    </div>
                                    <div class="flex justify-between py-2">
                                        <span class="text-slate-500">Commitment</span>
                                        <span class="text-white">Remote/Hybrid</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                <!-- VIBE Ecosystem Section -->
                <section id="vibe" class="mb-12">
                    <h2 class="text-xl font-bold text-white mb-6 flex items-center gap-3">
                        <Box class="w-5 h-5 text-indigo-500" />
                        AI-VIBE-ECOSYSTEM v2.0
                    </h2>
                    <p class="text-slate-400 mb-6">Flagship project — A multi-product AI developer platform</p>

                    <div class="grid md:grid-cols-2 gap-4 mb-6">
                        <div v-for="product in vibeProducts" :key="product.name"
                             class="bg-[#1e293b] border border-slate-700 rounded-xl p-5 hover:border-indigo-500/50 transition-all">
                            <div class="flex items-start gap-4">
                                <div class="p-3 bg-indigo-600/20 rounded-lg">
                                    <component :is="product.icon" class="w-5 h-5 text-indigo-400" />
                                </div>
                                <div class="flex-1">
                                    <div class="flex items-center gap-2 mb-1">
                                        <h4 class="font-semibold text-white">{{ product.name }}</h4>
                                        <span class="text-xs px-2 py-0.5 rounded-full"
                                              :class="product.status === 'Live' ? 'bg-green-500/10 text-green-400' : 'bg-slate-700 text-slate-400'">
                                            {{ product.status }}
                                        </span>
                                    </div>
                                    <p class="text-indigo-400 text-sm mb-2">{{ product.tagline }}</p>
                                    <p class="text-slate-500 text-sm">{{ product.description }}</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    <!-- Technical Highlights -->
                    <div class="bg-[#1e293b] border border-slate-700 rounded-xl p-6">
                        <h3 class="font-semibold text-white mb-4 flex items-center gap-2">
                            <CheckCircle2 class="w-5 h-5 text-green-500" />
                            Technical Highlights
                        </h3>
                        <div class="grid sm:grid-cols-2 md:grid-cols-3 gap-3">
                            <div v-for="(item, i) in [
                                'Hierarchical RAG (H-RAG) + Decision Agents + Orchestrator',
                                'Multi-provider LLM routing with fallback and evaluation',
                                '55-feature roadmap with 4-tier system prompt strategy',
                                'Competitive analysis across 60 AI coding tools',
                                'Monorepo strategy with ecosystem boundaries',
                                'Security-first architecture'
                            ]" :key="i" class="flex items-start gap-2 text-sm text-slate-400">
                                <ChevronRight class="w-4 h-4 text-indigo-500 shrink-0 mt-0.5" />
                                <span>{{ item }}</span>
                            </div>
                        </div>
                    </div>
                </section>

                <!-- Projects Section -->
                <section id="work" class="mb-12">
                    <h2 class="text-xl font-bold text-white mb-6 flex items-center gap-3">
                        <Code2 class="w-5 h-5 text-indigo-500" />
                        Selected Projects
                    </h2>
                    <p class="text-slate-400 mb-6">A showcase of recent work across web, games, and tools.</p>

                    <!-- Search -->
                    <div class="relative mb-6">
                        <input
                            v-model="searchQuery"
                            type="text"
                            placeholder="Search projects..."
                            class="w-full px-4 py-3 bg-[#1e293b] border border-slate-700 rounded-lg text-slate-300 placeholder-slate-500 focus:outline-none focus:border-indigo-500"
                        />
                    </div>

                    <div class="grid md:grid-cols-2 gap-4">
                        <div v-for="project in filteredProjects" :key="project.name"
                             class="bg-[#1e293b] border border-slate-700 rounded-xl p-5 hover:border-indigo-500/50 transition-all cursor-pointer group">
                            <div class="flex items-center gap-2 mb-3">
                                <span class="px-2 py-1 bg-indigo-600/20 text-indigo-400 rounded text-xs font-medium">
                                    {{ project.category }}
                                </span>
                                <span class="px-2 py-1 bg-slate-700 text-slate-400 rounded text-xs">
                                    {{ project.tech }}
                                </span>
                            </div>
                            <h4 class="font-semibold text-white mb-1 group-hover:text-indigo-400 transition-colors">
                                {{ project.name }}
                            </h4>
                            <p class="text-sm text-slate-500">{{ project.description }}</p>
                        </div>
                    </div>

                    <a href="https://github.com/mk-knight23?tab=repositories" target="_blank" rel="noopener noreferrer"
                       class="inline-flex items-center gap-2 mt-6 text-indigo-400 hover:text-indigo-300 transition-colors">
                        View all 60 projects <ExternalLink class="w-4 h-4" />
                    </a>
                </section>

                <!-- Skills Section -->
                <section id="skills" class="mb-12">
                    <h2 class="text-xl font-bold text-white mb-6 flex items-center gap-3">
                        <Database class="w-5 h-5 text-indigo-500" />
                        Skills & Expertise
                    </h2>
                    <p class="text-slate-400 mb-6">Core competencies across AI, development, and product.</p>

                    <div class="grid sm:grid-cols-2 gap-4">
                        <div v-for="(skills, category) in skillsByCategory" :key="category"
                             class="bg-[#1e293b] border border-slate-700 rounded-xl p-5">
                            <div class="flex items-center gap-2 mb-4">
                                <span v-if="category.includes('AI')" class="p-2 bg-indigo-600/20 rounded-lg">
                                    <Cpu class="w-4 h-4 text-indigo-400" />
                                </span>
                                <span v-else-if="category.includes('Developer')" class="p-2 bg-indigo-600/20 rounded-lg">
                                    <Layers class="w-4 h-4 text-indigo-400" />
                                </span>
                                <span v-else-if="category.includes('LLM')" class="p-2 bg-indigo-600/20 rounded-lg">
                                    <Zap class="w-4 h-4 text-indigo-400" />
                                </span>
                                <span v-else class="p-2 bg-indigo-600/20 rounded-lg">
                                    <Shield class="w-4 h-4 text-indigo-400" />
                                </span>
                                <h4 class="font-semibold text-white">{{ category }}</h4>
                            </div>
                            <div class="flex flex-wrap gap-2">
                                <span v-for="skill in skills" :key="skill"
                                      class="px-3 py-1 bg-slate-700/50 text-slate-300 rounded-full text-sm">
                                    {{ skill }}
                                </span>
                            </div>
                        </div>
                    </div>
                </section>

                <!-- Resume Section -->
                <section id="resume" class="mb-12">
                    <h2 class="text-xl font-bold text-white mb-6 flex items-center gap-3">
                        <Check class="w-5 h-5 text-indigo-500" />
                        Resume
                    </h2>
                    <p class="text-slate-400 mb-8">Senior Frontend Developer — Vue & Framework-Agnostic</p>

                    <div class="grid lg:grid-cols-3 gap-6">
                        <!-- Main Content -->
                        <div class="lg:col-span-2 space-y-6">
                            <!-- Experience -->
                            <div class="bg-slate-800/50 border border-slate-700 rounded-xl p-6">
                                <h3 class="text-lg font-semibold text-white mb-4">Experience</h3>
                                <div class="space-y-4">
                                    <div class="pl-4 border-l-2 border-indigo-500">
                                        <div class="flex items-start justify-between mb-2">
                                            <h4 class="text-base font-semibold text-white">Project Engineer (TURBO)</h4>
                                            <span class="text-xs text-slate-500">Jul 2022 – Present</span>
                                        </div>
                                        <p class="text-indigo-400 text-sm mb-1">Wipro</p>
                                        <p class="text-slate-400 text-sm">
                                            Building enterprise frontend applications with Vue 3, React, and TypeScript.
                                            Specialized in component architecture, state management, and design systems.
                                            Delivered 80+ projects with focus on accessibility and performance.
                                        </p>
                                    </div>
                                </div>
                            </div>

                            <!-- Education -->
                            <div class="bg-slate-800/50 border border-slate-700 rounded-xl p-6">
                                <h3 class="text-lg font-semibold text-white mb-4">Education</h3>
                                <div class="pl-4 border-l-2 border-slate-600">
                                    <div class="flex items-start justify-between mb-2">
                                        <h4 class="text-base font-semibold text-white">B.Tech Computer Science & Engineering</h4>
                                        <span class="text-xs text-slate-500">2022</span>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <!-- Sidebar -->
                        <div class="space-y-6">
                            <!-- Tech Stack -->
                            <div class="bg-slate-800/50 border border-slate-700 rounded-xl p-6">
                                <h3 class="text-lg font-semibold text-white mb-4">Tech Stack</h3>
                                <div class="space-y-3">
                                    <div>
                                        <p class="text-xs text-slate-500 uppercase tracking-wider mb-2">Frontend</p>
                                        <div class="flex flex-wrap gap-2">
                                            <span v-for="tech in ['Vue 3', 'React', 'TypeScript', 'Tailwind', 'Vite']" :key="tech"
                                                  class="px-2 py-1 bg-indigo-500/10 text-indigo-300 rounded text-xs">
                                                {{ tech }}
                                            </span>
                                        </div>
                                    </div>
                                    <div>
                                        <p class="text-xs text-slate-500 uppercase tracking-wider mb-2">Core</p>
                                        <div class="flex flex-wrap gap-2">
                                            <span v-for="tech in ['Node.js', 'APIs', 'Git', 'CI/CD', 'Testing']" :key="tech"
                                                  class="px-2 py-1 bg-slate-700 text-slate-300 rounded text-xs">
                                                {{ tech }}
                                            </span>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <!-- Connect -->
                            <div class="bg-slate-800/50 border border-slate-700 rounded-xl p-6">
                                <h3 class="text-lg font-semibold text-white mb-4">Connect</h3>
                                <div class="space-y-3">
                                    <a href="https://github.com/mk-knight23" target="_blank" rel="noopener"
                                       class="flex items-center gap-2 text-slate-400 hover:text-indigo-400 transition-colors">
                                        <Github class="w-4 h-4" />
                                        <span class="text-sm">github.com/mk-knight23</span>
                                    </a>
                                    <a href="https://www.linkedin.com/in/kazi-musharraf-0674871a4" target="_blank" rel="noopener"
                                       class="flex items-center gap-2 text-slate-400 hover:text-indigo-400 transition-colors">
                                        <Linkedin class="w-4 h-4" />
                                        <span class="text-sm">linkedin.com/in/kazi-musharraf</span>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                <!-- What I'll Build Section -->
                <section class="mb-12">
                    <h2 class="text-xl font-bold text-white mb-6 flex items-center gap-3">
                        <Activity class="w-5 h-5 text-indigo-500" />
                        What I'll Work On
                    </h2>
                    <p class="text-slate-400 mb-8">First 3–6 months as your Senior Frontend Developer</p>

                    <div class="grid md:grid-cols-2 gap-4">
                        <div class="bg-slate-800/50 border border-slate-700 rounded-xl p-5">
                            <h3 class="text-base font-semibold text-white mb-2">Component Architecture</h3>
                            <p class="text-slate-400 text-sm">
                                Audit and restructure your component library for reusability and maintainability.
                                Establish prop patterns, composition strategies, and documentation standards.
                            </p>
                        </div>

                        <div class="bg-slate-800/50 border border-slate-700 rounded-xl p-5">
                            <h3 class="text-base font-semibold text-white mb-2">Performance & DX</h3>
                            <p class="text-slate-400 text-sm">
                                Optimize bundle sizes, implement code splitting, and improve Core Web Vitals.
                                Set up developer tooling that improves team velocity and code quality.
                            </p>
                        </div>

                        <div class="bg-slate-800/50 border border-slate-700 rounded-xl p-5">
                            <h3 class="text-base font-semibold text-white mb-2">Framework Migration</h3>
                            <p class="text-slate-400 text-sm">
                                Lead Vue to React migrations or build framework-agnostic solutions.
                                Ensure smooth transitions with minimal disruption to existing features.
                            </p>
                        </div>

                        <div class="bg-slate-800/50 border border-slate-700 rounded-xl p-5">
                            <h3 class="text-base font-semibold text-white mb-2">Testing & Quality</h3>
                            <p class="text-slate-400 text-sm">
                                Establish comprehensive testing strategy with unit, integration, and E2E tests.
                                Set up CI/CD pipelines that catch issues before they reach production.
                            </p>
                        </div>
                    </div>
                </section>

                <!-- vNext: Design Decisions Section (Senior Engineering Practice) -->
                <section id="decisions" class="mb-12">
                    <h2 class="text-xl font-bold text-white mb-6 flex items-center gap-3">
                        <Check class="w-5 h-5 text-indigo-500" />
                        Design Decisions
                    </h2>
                    <p class="text-slate-400 mb-6 max-w-2xl">
                        Senior engineers document tradeoffs. Here are key technical decisions and their rationales.
                    </p>

                    <div class="grid md:grid-cols-2 gap-4">
                        <div class="bg-slate-800/50 rounded-lg p-5 border border-slate-700">
                            <div class="flex items-center gap-2 mb-3">
                                <span class="text-xs font-bold text-indigo-400 bg-indigo-500/10 px-2 py-1 rounded">FRAMEWORK</span>
                                <h3 class="font-semibold text-white">Vue 3 Composition API</h3>
                            </div>
                            <p class="text-slate-400 text-sm mb-3">Chose Composition API over Options API for better TypeScript inference and composability.</p>
                            <div class="text-xs text-slate-500">
                                <span class="font-bold text-slate-400">Tradeoff:</span> Steeper learning curve, but better for large-scale apps and code reuse.
                            </div>
                        </div>

                        <div class="bg-slate-800/50 rounded-lg p-5 border border-slate-700">
                            <div class="flex items-center gap-2 mb-3">
                                <span class="text-xs font-bold text-indigo-400 bg-indigo-500/10 px-2 py-1 rounded">STATE</span>
                                <h3 class="font-semibold text-white">Pinia over Vuex</h3>
                            </div>
                            <p class="text-slate-400 text-sm mb-3">Pinia provides better TypeScript support, simpler API, and devtools integration.</p>
                            <div class="text-xs text-slate-500">
                                <span class="font-bold text-slate-400">Tradeoff:</span> Newer ecosystem, fewer community patterns vs Vuex maturity.
                            </div>
                        </div>

                        <div class="bg-slate-800/50 rounded-lg p-5 border border-slate-700">
                            <div class="flex items-center gap-2 mb-3">
                                <span class="text-xs font-bold text-indigo-400 bg-indigo-500/10 px-2 py-1 rounded">MONOREPO</span>
                                <h3 class="font-semibold text-white">VIBE Monorepo Strategy</h3>
                            </div>
                            <p class="text-slate-400 text-sm mb-3">Planning monorepo for VIBE to share types, utilities, and LLM integrations across products.</p>
                            <div class="text-xs text-slate-500">
                                <span class="font-bold text-slate-400">Tradeoff:</span> Increased build complexity vs unified versioning and code sharing.
                            </div>
                        </div>

                        <div class="bg-slate-800/50 rounded-lg p-5 border border-slate-700">
                            <div class="flex items-center gap-2 mb-3">
                                <span class="text-xs font-bold text-indigo-400 bg-indigo-500/10 px-2 py-1 rounded">AI ARCH</span>
                                <h3 class="font-semibold text-white">H-RAG Architecture</h3>
                            </div>
                            <p class="text-slate-400 text-sm mb-3">Hierarchical RAG for better context retrieval and multi-document reasoning.</p>
                            <div class="text-xs text-slate-500">
                                <span class="font-bold text-slate-400">Tradeoff:</span> More complex vs simpler vector-only retrieval. Worth it for accuracy.
                            </div>
                        </div>
                    </div>
                </section>

                <!-- Contact Section -->
                <section id="contact" class="mb-12">
                    <h2 class="text-xl font-bold text-white mb-6 flex items-center gap-3">
                        <Server class="w-5 h-5 text-indigo-500" />
                        Get In Touch
                    </h2>
                    <p class="text-slate-400 mb-6 max-w-2xl">
                        Actively building the VIBE Ecosystem and open to opportunities in AI Engineering,
                        Applied AI, Agent Systems, Developer Tools, SaaS Platforms, and Cloud AI roles.
                    </p>

                    <div class="flex flex-wrap gap-4 mb-6">
                        <span class="px-4 py-2 bg-[#1e293b] border border-slate-700 rounded-lg text-sm">
                            <span class="text-slate-500">Location:</span>
                            <span class="text-white ml-2">Hyderabad, India</span>
                        </span>
                        <span class="px-4 py-2 bg-[#1e293b] border border-slate-700 rounded-lg text-sm">
                            <span class="text-slate-500">Available:</span>
                            <span class="text-green-400 ml-2">Remote & Hybrid</span>
                        </span>
                    </div>

                    <div class="flex flex-wrap gap-4">
                        <a href="mailto:mk.knight970@gmail.com"
                           class="inline-flex items-center gap-2 px-6 py-3 bg-indigo-600 hover:bg-indigo-500 text-white rounded-lg font-medium transition-colors">
                            <Mail class="w-5 h-5" /> Email
                        </a>
                        <a href="tel:+919765490536"
                           class="inline-flex items-center gap-2 px-6 py-3 bg-[#1e293b] border border-slate-700 hover:bg-slate-700 text-white rounded-lg font-medium transition-colors">
                            <Phone class="w-5 h-5" /> Call
                        </a>
                        <a href="https://github.com/mk-knight23" target="_blank" rel="noopener noreferrer"
                           class="inline-flex items-center gap-2 px-6 py-3 bg-[#1e293b] border border-slate-700 hover:bg-slate-700 text-white rounded-lg font-medium transition-colors">
                            <Github class="w-5 h-5" /> GitHub
                        </a>
                        <a href="https://www.linkedin.com/in/kazi-musharraf-0674871a4" target="_blank" rel="noopener noreferrer"
                           class="inline-flex items-center gap-2 px-6 py-3 bg-[#1e293b] border border-slate-700 hover:bg-slate-700 text-white rounded-lg font-medium transition-colors">
                            <Linkedin class="w-5 h-5" /> LinkedIn
                        </a>
                    </div>
                </section>

                <!-- Footer -->
                <footer class="py-6 border-t border-slate-700">
                    <div class="flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-slate-500">
                        <p>&copy; 2025 Kazi Musharraf. All rights reserved.</p>
                        <p>Senior Frontend Developer — Hyderabad, India</p>
                    </div>
                </footer>
            </div>
        </main>
    </div>
</template>

<style>
.gradient-text {
    background-clip: text;
    -webkit-background-clip: text;
    color: transparent;
    background-image: linear-gradient(to right, #fff, #94a3b8, #fff);
}
</style>
