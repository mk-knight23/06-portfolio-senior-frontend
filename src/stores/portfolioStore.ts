import { defineStore } from 'pinia'

export const usePortfolioStore = defineStore('portfolio', {
  state: () => ({
    activeCategory: 'All',
    selectedProject: null as any,
  }),
  actions: {
    setCategory(category: string) {
      this.activeCategory = category
    },
    selectProject(project: any) {
      this.selectedProject = project
    }
  }
})
