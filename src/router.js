import { createRouter, createWebHistory } from 'vue-router'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: () => import('@/pages/Home.vue'),
  },
]

// Dynamically determine base path from the folder name
// This allows users to name their frontend folder anything (e.g., 'frontend', 'shop', 'ui')
const getBasePath = () => {
  const path = window.location.pathname
  const segments = path.split('/').filter(Boolean)
  // Return the first segment as base path (e.g., /frontend, /shop, /ui)
  return segments.length > 0 ? `/${segments[0]}` : '/'
}

let router = createRouter({
  history: createWebHistory(getBasePath()),
  routes,
})

export default router
