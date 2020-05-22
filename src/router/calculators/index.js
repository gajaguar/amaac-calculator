import Index from '@/views/calculators/Index.vue'
import Amaac from '@/views/calculators/amaac/Index.vue'

export default [
  {
    path: '/calculators',
    name: 'calculators',
    component: Index
  },
  {
    path: '/calculators/amaac',
    name: 'calculators.amaac',
    component: Amaac
  }
]
