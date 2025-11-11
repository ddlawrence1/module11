import { createRouter, createWebHashHistory } from 'vue-router'
import Homepage from '../views/Home.vue'
import AboutPage from '../views/About.vue'
import RandomQuotes from '../views/RandomQuotes.vue'
import Contact from '../views/Contact.vue'
import NotFound from '../views/NotFound.vue'

const routes = [
  { path: '/', name: 'Home', component: Homepage },
  { path: '/about', name: 'About', component: AboutPage },
  { path: '/quotes', name: 'RandomQuotes', component: RandomQuotes },
  { path: '/contact', name: 'Contact', component: Contact },
  { path: '/:pathMatch(.*)*', name: 'NotFound', component: NotFound }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
