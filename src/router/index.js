import { createRouter, createWebHistory } from 'vue-router'
import BuildView from '@/views/BuildView.vue'
import HomeView from '@/views/HomeView.vue'
import ShowcaseView from '@/views/ShowcaseView.vue'
import ConnectionsView from '@/views/ConnectionsView.vue'
import PublishedView from '@/views/PublishedView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView,
    },
    {
      path: '/showcase',
      name: 'showcase',
      component: ShowcaseView,
    },
    {
      path: '/build',
      name: 'build',
      component: BuildView,
    },
    {
      path: '/connections',
      name: 'connections',
      component: ConnectionsView,
    },
    {
      path: '/published',
      name: 'published',
      component: PublishedView,
    },
  ],
})

export default router


