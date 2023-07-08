import { mount } from '@vue/test-utils';
import Counter from '@/components/Counter.vue';

describe('Counter.vue', () => {
    it('renders button and initial count', () => {
        const wrapper = mount(Counter);

        expect(wrapper.find('button').exists()).toBe(true);
        expect(wrapper.find('p').text()).toBe('0');
    });

    it('increments the count when button is clicked', async () => {
        const wrapper = mount(Counter);

        await wrapper.find('button').trigger('click');

        expect(wrapper.find('p').text()).toBe('1');
    });

    it('increments the count by 2 when button is clicked twice', async () => {
        const wrapper = mount(Counter);

        await wrapper.find('button').trigger('click');
        await wrapper.find('button').trigger('click');

        expect(wrapper.find('p').text()).toBe('2');
    });
});
