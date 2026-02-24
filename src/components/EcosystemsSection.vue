<script setup lang="ts">
import { ref, computed } from 'vue'
import {
    Box,
    Layers,
    Cpu,
    Zap,
    Globe,
    Code2,
    Terminal,
    Sparkles,
    ChevronRight,
    ExternalLink,
    Github,
    ArrowRight
} from 'lucide-vue-next'

// 60 Projects showcase data
const projects60 = [
    { name: 'Country Explorer', category: 'Web', tech: 'React', description: 'Country data exploration dashboard', featured: true },
    { name: 'Recipe Finder', category: 'Web', tech: 'Vue', description: 'Recipe discovery application', featured: true },
    { name: 'Meme Generator', category: 'Web', tech: 'React', description: 'Custom meme creation tool', featured: true },
    { name: 'Mini Games', category: 'Game', tech: 'React', description: 'Collection of mini-games', featured: true },
    { name: 'Weather Dashboard', category: 'Web', tech: 'Vue', description: 'Real-time weather tracking', featured: false },
    { name: 'Task Manager', category: 'Tool', tech: 'React', description: 'Productivity task management', featured: false },
    { name: 'Chat Application', category: 'App', tech: 'Vue', description: 'Real-time messaging app', featured: false },
    { name: 'Portfolio Builder', category: 'Tool', tech: 'React', description: 'Dynamic portfolio generator', featured: false },
    { name: 'E-commerce Cart', category: 'Web', tech: 'Vue', description: 'Shopping cart implementation', featured: false },
    { name: 'Music Player', category: 'App', tech: 'React', description: 'Audio streaming interface', featured: false },
    { name: 'Movie Database', category: 'Web', tech: 'Vue', description: 'Film information explorer', featured: false },
    { name: 'Calculator App', category: 'Tool', tech: 'React', description: 'Advanced calculator with history', featured: false }
]

// AI-VIBE Projects showcase (10 projects)
const vibeProjects = [
    {
        name: 'VIBE CLI',
        tagline: 'Multi-agent AI coding tool',
        description: 'Single-command TUI with multi-LLM router, execution modes, and security-first approvals.',
        icon: Terminal,
        status: 'In Development',
        color: 'indigo'
    },
    {
        name: 'VIBE VS Code',
        tagline: 'Multi-agent IDE assistant',
        description: 'CLI parity with state-machine orchestration and real-time streaming chat interface.',
        icon: Code2,
        status: 'Planned',
        color: 'purple'
    },
    {
        name: 'VIBE Web',
        tagline: 'Documentation hub',
        description: 'Documentation and onboarding hub for the entire VIBE ecosystem.',
        icon: Globe,
        status: 'Live',
        color: 'green'
    },
    {
        name: 'VIBE Chat',
        tagline: 'AI website builder',
        description: 'AI web app & website builder powered by generative agents.',
        icon: Sparkles,
        status: 'Planned',
        color: 'blue'
    },
    {
        name: 'VIBE Router',
        tagline: 'Multi-LLM routing engine',
        description: 'Intelligent LLM provider selection with fallback and cost optimization.',
        icon: Zap,
        status: 'In Development',
        color: 'amber'
    },
    {
        name: 'VIBE Agents',
        tagline: 'Agent orchestration framework',
        description: 'Hierarchical multi-agent system with specialized worker agents.',
        icon: Cpu,
        status: 'In Development',
        color: 'rose'
    },
    {
        name: 'VIBE Memory',
        tagline: 'Context management system',
        description: 'Long-term memory and context persistence for AI conversations.',
        icon: Layers,
        status: 'Planned',
        color: 'cyan'
    },
    {
        name: 'VIBE Studio',
        tagline: 'Visual agent builder',
        description: 'Drag-and-drop interface for creating custom AI agent workflows.',
        icon: Box,
        status: 'Planned',
        color: 'violet'
    },
    {
        name: 'VIBE Deploy',
        tagline: 'One-click deployment',
        description: 'Automated deployment pipeline for AI-powered applications.',
        icon: ExternalLink,
        status: 'Planned',
        color: 'emerald'
    },
    {
        name: 'VIBE Sync',
        tagline: 'Cross-platform sync',
        description: 'Synchronize projects and settings across all VIBE products.',
        icon: Github,
        status: 'Planned',
        color: 'slate'
    }
]

// AI-SDK showcase (10 SDKs)
const sdkShowcase = [
    {
        name: 'OpenAI SDK',
        provider: 'OpenAI',
        description: 'GPT-4, GPT-3.5, DALL-E, Whisper integration with streaming support.',
        features: ['Chat Completions', 'Image Generation', 'Audio Transcription'],
        color: 'green'
    },
    {
        name: 'Claude SDK',
        provider: 'Anthropic',
        description: 'Claude 3 Opus, Sonnet, Haiku with extended context window support.',
        features: ['100K Context', 'Tool Use', 'Vision Capabilities'],
        color: 'orange'
    },
    {
        name: 'Gemini SDK',
        provider: 'Google',
        description: 'Gemini Pro and Ultra with multimodal capabilities.',
        features: ['Multimodal Input', 'Code Execution', 'Function Calling'],
        color: 'blue'
    },
    {
        name: 'OpenRouter SDK',
        provider: 'OpenRouter',
        description: 'Unified API for 100+ models with automatic fallback.',
        features: ['Model Routing', 'Cost Optimization', 'Unified API'],
        color: 'purple'
    },
    {
        name: 'Ollama SDK',
        provider: 'Ollama',
        description: 'Local LLM execution with Llama, Mistral, and CodeLlama.',
        features: ['Local Execution', 'Custom Models', 'Privacy First'],
        color: 'amber'
    },
    {
        name: 'Vercel AI SDK',
        provider: 'Vercel',
        description: 'Streaming UI components and React/Vue/Svelte integrations.',
        features: ['Streaming UI', 'SWR Integration', 'Edge Ready'],
        color: 'slate'
    },
    {
        name: 'LangChain',
        provider: 'LangChain',
        description: 'Framework for developing applications powered by language models.',
        features: ['Chains', 'Agents', 'Memory', 'Document Loaders'],
        color: 'emerald'
    },
    {
        name: 'LlamaIndex',
        provider: 'LlamaIndex',
        description: 'Data framework for LLM applications with RAG capabilities.',
        features: ['RAG Pipeline', 'Index Structures', 'Query Engines'],
        color: 'rose'
    },
    {
        name: 'Hugging Face',
        provider: 'HuggingFace',
        description: 'Access to 500K+ models, datasets, and inference endpoints.',
        features: ['Model Hub', 'Inference API', 'Transformers'],
        color: 'yellow'
    },
    {
        name: 'Cohere SDK',
        provider: 'Cohere',
        description: 'Enterprise-grade embeddings, classification, and generation.',
        features: ['Embeddings', 'Classify', 'Generate', 'Rerank'],
        color: 'cyan'
    }
]

const activeTab = ref('projects60')
const searchQuery = ref('')

const tabs = [
    { id: 'projects60', label: '60 Projects', icon: Box, count: 60 },
    { id: 'vibe', label: 'AI-VIBE', icon: Sparkles, count: 10 },
    { id: 'sdk', label: 'AI-SDKs', icon: Code2, count: 10 }
]

const filteredProjects = computed(() => {
    if (!searchQuery.value) return projects60.slice(0, 8)
    return projects60.filter(p =>
        p.name.toLowerCase().includes(searchQuery.value.toLowerCase()) ||
        p.tech.toLowerCase().includes(searchQuery.value.toLowerCase())
    )
})

const getStatusColor = (status: string) => {
    switch (status) {
        case 'Live': return 'bg-green-500/10 text-green-400 border-green-500/20'
        case 'In Development': return 'bg-amber-500/10 text-amber-400 border-amber-500/20'
        case 'Planned': return 'bg-slate-500/10 text-slate-400 border-slate-500/20'
        default: return 'bg-slate-500/10 text-slate-400 border-slate-500/20'
    }
}

const getColorClasses = (color: string) => {
    const colors: Record<string, { bg: string, text: string, border: string }> = {
        indigo: { bg: 'bg-indigo-500/10', text: 'text-indigo-400', border: 'border-indigo-500/20' },
        purple: { bg: 'bg-purple-500/10', text: 'text-purple-400', border: 'border-purple-500/20' },
        green: { bg: 'bg-green-500/10', text: 'text-green-400', border: 'border-green-500/20' },
        blue: { bg: 'bg-blue-500/10', text: 'text-blue-400', border: 'border-blue-500/20' },
        amber: { bg: 'bg-amber-500/10', text: 'text-amber-400', border: 'border-amber-500/20' },
        rose: { bg: 'bg-rose-500/10', text: 'text-rose-400', border: 'border-rose-500/20' },
        cyan: { bg: 'bg-cyan-500/10', text: 'text-cyan-400', border: 'border-cyan-500/20' },
        violet: { bg: 'bg-violet-500/10', text: 'text-violet-400', border: 'border-violet-500/20' },
        emerald: { bg: 'bg-emerald-500/10', text: 'text-emerald-400', border: 'border-emerald-500/20' },
        slate: { bg: 'bg-slate-500/10', text: 'text-slate-400', border: 'border-slate-500/20' },
        orange: { bg: 'bg-orange-500/10', text: 'text-orange-400', border: 'border-orange-500/20' },
        yellow: { bg: 'bg-yellow-500/10', text: 'text-yellow-400', border: 'border-yellow-500/20' }
    }
    return colors[color] || colors.slate
}
</script>

<template>
    <section id="ecosystems" class="mb-12">
        <h2 class="text-xl font-bold text-white mb-2 flex items-center gap-3">
            <Box class="w-5 h-5 text-indigo-500" />
            Ecosystems
        </h2>
        <p class="text-slate-400 mb-6">Comprehensive showcase of projects, AI products, and SDK integrations</p>

        <!-- Tab Navigation -->
        <div class="flex flex-wrap gap-2 mb-6">
            <button
                v-for="tab in tabs"
                :key="tab.id"
                @click="activeTab = tab.id"
                class="flex items-center gap-2 px-4 py-2.5 rounded-lg text-sm font-medium transition-all duration-300"
                :class="activeTab === tab.id
                    ? 'bg-indigo-600 text-white shadow-lg shadow-indigo-600/20'
                    : 'bg-[#1e293b] border border-slate-700 text-slate-400 hover:text-white hover:border-slate-600'"
            >
                <component :is="tab.icon" class="w-4 h-4" />
                <span>{{ tab.label }}</span>
                <span
                    class="px-2 py-0.5 rounded-full text-xs"
                    :class="activeTab === tab.id ? 'bg-white/20' : 'bg-slate-700 text-slate-500'"
                >
                    {{ tab.count }}
                </span>
            </button>
        </div>

        <!-- 60 Projects Tab -->
        <div v-if="activeTab === 'projects60'" class="space-y-6">
            <div class="flex items-center justify-between">
                <h3 class="text-lg font-semibold text-white">Featured Projects</h3>
                <a
                    href="https://www.mkazi.live"
                    target="_blank"
                    rel="noopener noreferrer"
                    class="inline-flex items-center gap-2 text-indigo-400 hover:text-indigo-300 transition-colors text-sm"
                >
                    Visit 60 Projects <ExternalLink class="w-4 h-4" />
                </a>
            </div>

            <div class="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
                <div
                    v-for="project in filteredProjects"
                    :key="project.name"
                    class="group bg-[#1e293b] border border-slate-700 rounded-xl p-5 hover:border-indigo-500/50 transition-all duration-300 hover:shadow-lg hover:shadow-indigo-500/10"
                >
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

                    <div class="mt-4 pt-4 border-t border-slate-700/50 flex items-center justify-between">
                        <span class="text-xs text-slate-500">GitHub</span>
                        <ArrowRight class="w-4 h-4 text-slate-600 group-hover:text-indigo-400 transition-colors" />
                    </div>
                </div>
            </div>

            <!-- Stats Row -->
            <div class="grid grid-cols-4 gap-4 mt-8">
                <div class="bg-[#1e293b] border border-slate-700 rounded-xl p-4 text-center">
                    <div class="text-2xl font-bold text-white">60+</div>
                    <div class="text-xs text-slate-500 mt-1">Total Projects</div>
                </div>
                <div class="bg-[#1e293b] border border-slate-700 rounded-xl p-4 text-center">
                    <div class="text-2xl font-bold text-indigo-400">25+</div>
                    <div class="text-xs text-slate-500 mt-1">React Projects</div>
                </div>
                <div class="bg-[#1e293b] border border-slate-700 rounded-xl p-4 text-center">
                    <div class="text-2xl font-bold text-green-400">20+</div>
                    <div class="text-xs text-slate-500 mt-1">Vue Projects</div>
                </div>
                <div class="bg-[#1e293b] border border-slate-700 rounded-xl p-4 text-center">
                    <div class="text-2xl font-bold text-purple-400">15+</div>
                    <div class="text-xs text-slate-500 mt-1">Games & Tools</div>
                </div>
            </div>
        </div>

        <!-- AI-VIBE Tab -->
        <div v-if="activeTab === 'vibe'" class="space-y-6">
            <div class="flex items-center justify-between">
                <h3 class="text-lg font-semibold text-white">AI-VIBE Ecosystem</h3>
                <a
                    href="https://mk-knight23.github.io/AI-VIBE-ECOSYSTEM"
                    target="_blank"
                    rel="noopener noreferrer"
                    class="inline-flex items-center gap-2 text-indigo-400 hover:text-indigo-300 transition-colors text-sm"
                >
                    Visit AI-VIBE <ExternalLink class="w-4 h-4" />
                </a>
            </div>
            <div class="bg-gradient-to-r from-indigo-600/10 to-purple-600/10 border border-indigo-500/20 rounded-xl p-6">
                <div class="flex items-start gap-4">
                    <div class="p-3 bg-indigo-600 rounded-lg">
                        <Sparkles class="w-6 h-6 text-white" />
                    </div>
                    <div>
                        <h3 class="text-lg font-semibold text-white mb-2">VIBE Ecosystem</h3>
                        <p class="text-slate-400 max-w-2xl">
                            A multi-product AI developer platform focused on AI-powered coding workflows,
                            multi-agent orchestration, and production-grade developer tooling.
                        </p>
                    </div>
                </div>
            </div>

            <div class="grid md:grid-cols-2 gap-4">
                <div
                    v-for="project in vibeProjects"
                    :key="project.name"
                    class="group bg-[#1e293b] border border-slate-700 rounded-xl p-5 hover:border-indigo-500/50 transition-all duration-300"
                >
                    <div class="flex items-start gap-4">
                        <div
                            class="p-3 rounded-lg transition-colors"
                            :class="getColorClasses(project.color).bg"
                        >
                            <component
                                :is="project.icon"
                                class="w-5 h-5"
                                :class="getColorClasses(project.color).text"
                            />
                        </div>
                        <div class="flex-1 min-w-0">
                            <div class="flex items-center gap-2 mb-1">
                                <h4 class="font-semibold text-white">{{ project.name }}</h4>
                                <span
                                    class="text-xs px-2 py-0.5 rounded-full border"
                                    :class="getStatusColor(project.status)"
                                >
                                    {{ project.status }}
                                </span>
                            </div>
                            <p
                                class="text-sm mb-2"
                                :class="getColorClasses(project.color).text"
                            >
                                {{ project.tagline }}
                            </p>
                            <p class="text-slate-500 text-sm">{{ project.description }}</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <!-- AI-SDK Tab -->
        <div v-if="activeTab === 'sdk'" class="space-y-6">
            <div class="flex items-center justify-between">
                <h3 class="text-lg font-semibold text-white">AI-SDK Integration</h3>
                <a
                    href="https://mk-knight23.github.io/AI-SDK-ECOSYSTEM"
                    target="_blank"
                    rel="noopener noreferrer"
                    class="inline-flex items-center gap-2 text-emerald-400 hover:text-emerald-300 transition-colors text-sm"
                >
                    Visit AI-SDK <ExternalLink class="w-4 h-4" />
                </a>
            </div>
            <div class="bg-gradient-to-r from-emerald-600/10 to-cyan-600/10 border border-emerald-500/20 rounded-xl p-6">
                <div class="flex items-start gap-4">
                    <div class="p-3 bg-emerald-600 rounded-lg">
                        <Code2 class="w-6 h-6 text-white" />
                    </div>
                    <div>
                        <h3 class="text-lg font-semibold text-white mb-2">AI SDK Integration</h3>
                        <p class="text-slate-400 max-w-2xl">
                            Comprehensive integration experience with leading AI SDKs and frameworks,
                            enabling multi-provider LLM routing and intelligent fallback systems.
                        </p>
                    </div>
                </div>
            </div>

            <div class="grid md:grid-cols-2 gap-4">
                <div
                    v-for="sdk in sdkShowcase"
                    :key="sdk.name"
                    class="group bg-[#1e293b] border border-slate-700 rounded-xl p-5 hover:border-emerald-500/50 transition-all duration-300"
                >
                    <div class="flex items-start justify-between mb-3">
                        <div>
                            <h4 class="font-semibold text-white group-hover:text-emerald-400 transition-colors">
                                {{ sdk.name }}
                            </h4>
                            <p class="text-xs text-slate-500">{{ sdk.provider }}</p>
                        </div>
                        <div
                            class="w-2 h-2 rounded-full"
                            :class="getColorClasses(sdk.color).bg.replace('/10', '')"
                        />
                    </div>
                    <p class="text-sm text-slate-400 mb-4">{{ sdk.description }}</p>
                    <div class="flex flex-wrap gap-2">
                        <span
                            v-for="feature in sdk.features"
                            :key="feature"
                            class="px-2 py-1 bg-slate-700/50 text-slate-300 rounded text-xs"
                        >
                            {{ feature }}
                        </span>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>
