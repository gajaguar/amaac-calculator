import Index from '@/views/generators/Index.vue'
import Amaac from '@/views/generators/amaac/Index.vue'

export default [
  {
    path: '/generators',
    name: 'generators',
    component: Index
  },
  {
    path: '/generators/amaac',
    name: 'generators.amaac',
    component: Amaac
  }
]
