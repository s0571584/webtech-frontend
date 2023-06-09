import { shallowMount } from '@vue/test-utils';
import HomePage from '../../views/HomePage.vue';

describe('HomePage.vue', () => {
    it('renders headline and text', () => {
        const wrapper = shallowMount(HomePage);
        expect(wrapper.find('h1').text()).toBe('Mache dir nie wieder Sorgen um das Abendessen.');
        expect(wrapper.find('p').text()).toBe('Gebe deine Zutaten ein und lasse dir von der künstlichen Intelligenz ein Rezept erstellen.');
    });
});