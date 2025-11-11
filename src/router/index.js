import { createRouter, createWebHashHistory } from 'vue-router'
import Home from '../views/Home.vue'
import AboutPage from '../views/About.vue'   // <-- import your renamed component
import RandomQuotes from '../views/RandomQuotes.vue'
import Contact from '../views/Contact.vue'
import NotFound from '../views/NotFound.vue'

const routes = [
  { path: '/', name: 'Home', component: Home },
  { path: '/about', name: 'About', component: AboutPage },   // <-- use the imported component
  { path: '/quotes', name: 'RandomQuotes', component: RandomQuotes },
  { path: '/contact', name: 'Contact', component: Contact },
  { path: '/:pathMatch(.*)*', name: 'NotFound', component: NotFound } // 404 route
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
