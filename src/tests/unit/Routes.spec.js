import { createRouter, createWebHistory } from 'vue-router'
import { shallowMount } from '@vue/test-utils';
import App from '@/App.vue';
import HomePage from "@/views/HomePage";
import RecipeCreator from "@/views/RecipeCreator";
import RecipeCreatorAI from "@/views/RecipeCreatorAI";

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
];

const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes,
});

describe('App.vue', () => {
    it('renders all navigation buttons', async () => {
        const wrapper = shallowMount(App, {
            global: {
                plugins: [router],
                stubs: {
                    RouterLink: {
                        template: '<button><slot /></button>',
                    },
                },
            },
        });

        router.push('/');
        await router.isReady();

        const buttons = wrapper.findAll('.button');
        expect(buttons.length).toBe(3);
        expect(buttons.at(0).text()).toBe('Home');
        expect(buttons.at(1).text()).toBe('Manuell Rezept erstellen');
        expect(buttons.at(2).text()).toBe('Rezept mit meinen Zutaten erstellen');
    });
});
