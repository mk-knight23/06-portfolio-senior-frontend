<script setup lang="ts">
import { computed } from 'vue'
import { usePortfolioStore } from './stores/portfolioStore'
import { 
  Github, 
  Linkedin, 
  Twitter, 
  Layers,
  Zap,
  Globe,
  Plus,
  ArrowUpRight,
  ChevronDown
} from 'lucide-vue-next'
import { Motion } from '@motionone/vue'

const store = usePortfolioStore()

const projects = [
  { id: 1, title: 'Vaultify', category: 'Web Engineering', desc: 'Secure decentralized asset management platform with real-time biometric verification.', stats: '99% Uptime', icon: Zap },
  { id: 2, title: 'Orbital UI', category: 'Product Design', desc: 'Next-generation design system for aerospace interfaces, focusing on high-stress legibility.', stats: '4.8k Stars', icon: Layers },
  { id: 3, title: 'Nexus Protocol', category: 'Systems Architecture', desc: 'High-throughput communication layer for edge computing in autonomous logistics.', stats: '1.2ms Latency', icon: Globe }
]

const filteredProjects = computed(() => {
  if (store.activeCategory === 'All') return projects
  return projects.filter(p => p.category === store.activeCategory)
})

const categories = ['All', 'Web Engineering', 'Product Design', 'Systems Architecture']
</script>

<template>
  <div class="min-h-screen bg-portfolio-bg">
    
    <!-- Custom Cursor Glow -->
    <div class="fixed inset-0 pointer-events-none z-0">
       <div class="absolute -top-[20%] -left-[10%] w-[60%] h-[60%] bg-blue-600/10 blur-[150px] rounded-full"></div>
       <div class="absolute -bottom-[20%] -right-[10%] w-[50%] h-[50%] bg-indigo-600/10 blur-[150px] rounded-full"></div>
    </div>

    <!-- Navigation -->
    <nav class="fixed w-full z-50 px-10 py-8 flex justify-between items-center mix-blend-difference">
      <div class="flex items-center space-x-2">
        <span class="font-display font-black text-2xl tracking-tighter uppercase italic">M. Kazi</span>
      </div>
      <div class="hidden md:flex items-center space-x-12">
        <a href="#" class="text-[10px] font-black uppercase tracking-[0.3em] hover:text-portfolio-accent transition-colors">Strategy</a>
        <a href="#" class="text-[10px] font-black uppercase tracking-[0.3em] hover:text-portfolio-accent transition-colors">Case Studies</a>
        <a href="#" class="text-[10px] font-black uppercase tracking-[0.3em] hover:text-portfolio-accent transition-colors">Contact</a>
      </div>
      <button class="p-3 bg-white/10 backdrop-blur-xl border border-white/10 rounded-full hover:bg-white/20 transition-all">
        <Plus :size="18" />
      </button>
    </nav>

    <main class="relative z-10 max-w-[1440px] mx-auto px-10">
      
      <!-- Hero -->
      <section class="min-h-screen flex flex-col justify-center pt-20 pb-40 space-y-16">
        <div class="space-y-6">
          <Motion 
            :initial="{ opacity: 0, y: 20 }"
            :animate="{ opacity: 1, y: 0 }"
            :transition="{ duration: 0.8 }"
            class="inline-flex items-center space-x-2 text-[10px] font-black uppercase tracking-[0.4em] text-slate-500"
          >
            <span>Based in London / Available Worldwide</span>
          </Motion>

          <Motion 
            :initial="{ opacity: 0, x: -50 }"
            :animate="{ opacity: 1, x: 0 }"
            :transition="{ duration: 1, delay: 0.2 }"
            tag="h1"
            class="text-[clamp(4rem,15vw,12rem)] font-display font-black leading-[0.8] tracking-tighter uppercase gradient-text"
          >
            Creative <br />
            <span class="italic font-light">Architect</span>
          </Motion>
        </div>

        <div class="grid grid-cols-1 lg:grid-cols-12 gap-10 items-end">
           <Motion 
             :initial="{ opacity: 0 }"
             :animate="{ opacity: 1 }"
             :transition="{ duration: 1, delay: 0.8 }"
             class="lg:col-span-4"
           >
              <p class="text-xl text-slate-400 leading-relaxed font-medium">
                Designing technical excellence. Crafting high-fidelity digital systems for the next decade of innovation.
              </p>
           </Motion>
           <div class="lg:col-span-8 flex justify-end">
              <div class="flex items-center space-x-12">
                 <div class="space-y-1">
                    <p class="text-[10px] font-black uppercase tracking-widest text-slate-500">Expertise</p>
                    <p class="text-lg font-bold italic">Full-Stack UX</p>
                 </div>
                 <div class="space-y-1 border-l border-white/10 pl-12">
                    <p class="text-[10px] font-black uppercase tracking-widest text-slate-500">Currently</p>
                    <p class="text-lg font-bold italic">Staff Engineer</p>
                 </div>
              </div>
           </div>
        </div>

        <div class="absolute bottom-10 left-10 animate-bounce hidden md:block">
           <ChevronDown class="text-slate-700" :size="32" />
        </div>
      </section>

      <!-- Work Section -->
      <section class="space-y-20 pb-40">
        <div class="flex flex-col md:flex-row md:items-end justify-between gap-10">
          <div class="space-y-4">
            <h2 class="text-5xl md:text-7xl font-display font-black tracking-tighter uppercase italic">Selected <span class="not-italic">Works</span></h2>
            <p class="text-slate-500 font-medium">In-depth explorations into system design and engineering.</p>
          </div>
          
          <div class="flex flex-wrap gap-2 p-1 bg-white/5 rounded-2xl border border-white/5">
            <button 
              v-for="cat in categories" 
              :key="cat"
              @click="store.setCategory(cat)"
              class="px-6 py-2 rounded-xl text-[10px] font-black uppercase tracking-widest transition-all"
              :class="store.activeCategory === cat ? 'bg-white text-black' : 'text-slate-500 hover:text-white'"
            >
              {{ cat }}
            </button>
          </div>
        </div>

        <div class="grid grid-cols-1 lg:grid-cols-3 gap-10">
          <Motion 
            v-for="(project, idx) in filteredProjects" 
            :key="project.id"
            :initial="{ opacity: 0, scale: 0.95 }"
            :animate="{ opacity: 1, scale: 1 }"
            :transition="{ duration: 0.5, delay: idx * 0.1 }"
            class="brutalist-card group"
          >
            <div class="h-80 relative bg-slate-900 overflow-hidden">
               <div class="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
               <div class="absolute inset-0 flex items-center justify-center text-slate-800 group-hover:text-portfolio-accent transition-colors duration-500">
                  <component :is="project.icon" :size="120" stroke-width="0.5" />
               </div>
               <div class="absolute top-8 left-8 flex items-center space-x-2 bg-black/50 backdrop-blur-md px-3 py-1 rounded-lg border border-white/10">
                  <span class="text-[10px] font-black uppercase tracking-widest text-white">{{ project.stats }}</span>
               </div>
            </div>
            <div class="p-10 space-y-6">
               <div class="space-y-2">
                  <div class="text-[10px] font-black uppercase tracking-[0.2em] text-portfolio-accent italic">{{ project.category }}</div>
                  <h3 class="text-3xl font-display font-black uppercase tracking-tight group-hover:translate-x-2 transition-transform duration-500">{{ project.title }}</h3>
               </div>
               <p class="text-slate-400 text-sm leading-relaxed">{{ project.desc }}</p>
               <button class="pt-6 flex items-center text-xs font-black uppercase tracking-widest group-hover:text-portfolio-accent transition-colors border-t border-white/5 w-full">
                  Read Case Study <ArrowUpRight class="ml-auto" :size="16" />
               </button>
            </div>
          </Motion>
        </div>
      </section>

      <!-- Strategy Banner -->
      <section class="py-40 border-y border-white/5">
        <div class="max-w-3xl mx-auto text-center space-y-12">
          <h3 class="text-3xl md:text-5xl font-display font-black leading-tight uppercase italic tracking-tighter">
            "We don't build features. <br />
            We engineer <span class="not-italic text-portfolio-accent">Value.</span>"
          </h3>
          <p class="text-slate-500 font-medium">My philosophy centers on the rigorous application of engineering principles to the fluid requirements of modern product design.</p>
          <div class="flex justify-center">
             <button class="px-10 py-4 bg-white text-black rounded-full font-black uppercase tracking-widest text-xs hover:bg-portfolio-accent hover:text-white transition-all">
                Let's Talk Shop
             </button>
          </div>
        </div>
      </section>

    </main>

    <footer class="py-20 px-10">
       <div class="max-w-[1440px] mx-auto grid grid-cols-1 md:grid-cols-12 gap-20 items-start">
          <div class="md:col-span-4 space-y-8">
             <div class="font-display font-black text-3xl uppercase tracking-tighter italic">M. Kazi</div>
             <p class="text-slate-500 text-sm leading-relaxed max-w-xs font-medium italic">Available for technical leadership, systems consulting, and premium UI/UX implementations.</p>
             <div class="flex items-center space-x-6 text-slate-500">
                <Github class="hover:text-white transition-colors cursor-pointer" :size="20" />
                <Linkedin class="hover:text-white transition-colors cursor-pointer" :size="20" />
                <Twitter class="hover:text-white transition-colors cursor-pointer" :size="20" />
             </div>
          </div>

          <div class="md:col-span-8 grid grid-cols-2 md:grid-cols-3 gap-10 uppercase tracking-widest text-[10px] font-black">
             <div class="space-y-6">
                <p class="text-slate-400">Navigation</p>
                <div class="flex flex-col gap-4">
                   <a href="#" class="hover:text-portfolio-accent">Portfolio</a>
                   <a href="#" class="hover:text-portfolio-accent">Dossier</a>
                   <a href="#" class="hover:text-portfolio-accent">Archives</a>
                </div>
             </div>
             <div class="space-y-6">
                <p class="text-slate-400">Socials</p>
                <div class="flex flex-col gap-4">
                   <a href="#" class="hover:text-portfolio-accent">GitHub</a>
                   <a href="#" class="hover:text-portfolio-accent">Polywork</a>
                   <a href="#" class="hover:text-portfolio-accent">LinkedIn</a>
                </div>
             </div>
             <div class="space-y-6">
                <p class="text-slate-400">Office</p>
                <p class="text-slate-600 font-medium italic">London, UK <br/> GMT+0</p>
             </div>
          </div>
       </div>
       <div class="max-w-[1440px] mx-auto pt-20 mt-20 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-6">
          <p class="text-[10px] font-black uppercase tracking-[0.4em] text-slate-700 italic">Architecture by Staff Engineering</p>
          <p class="text-[10px] font-black uppercase tracking-[0.4em] text-slate-700">© 2026 M. Kazi</p>
       </div>
    </footer>

  </div>
</template>

<style>
.gradient-text {
  @apply bg-clip-text text-transparent bg-gradient-to-r from-white via-slate-500 to-white;
}
</style>
