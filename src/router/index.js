import { createRouter, createWebHistory } from 'vue-router'
import HomePage from '../views/HomePage.vue'
import RecipeCreator from '../views/RecipeCreator.vue'
import RecipeCreatorAI from '../views/RecipeCreatorAI.vue'

const routes = [
    {
        path: '/',
        name: 'HomePage',
        component: HomePage
    },
    {
        path: '/recipecreator',
        name: 'RecipeCreator',
        component: RecipeCreator
    },

    {
        path: '/recipeCreatorAI',
        name: 'RecipeCreatorAI',
        component: RecipeCreatorAI
    }
]

const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes
})

export default router
