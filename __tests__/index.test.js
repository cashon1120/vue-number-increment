import App from '../src/App.vue';
import { mount } from '@vue/test-utils';

const delay = (time) => new Promise((resolve) => {
  setTimeout(() => {
    resolve()
  }, time);
})

test('SFC: number increment animation', async () => {
  const wrapper = mount(App)
  const reductionDOM = wrapper.find('[data-testid="reduction"]')
  const numberDOM = wrapper.find('[data-testid="number"]')
  const incrementDOM = wrapper.find('[data-testid="increment"]')
  expect(reductionDOM.exists()).toBe(true)
  expect(incrementDOM.exists()).toBe(true)
  expect(numberDOM.html()).toContain('0')
  reductionDOM.trigger('click')
  await delay(2000)
  expect(numberDOM.html()).toContain('-128')
  incrementDOM.trigger('click')
  await delay(2000)
  expect(numberDOM.html()).toContain('0')
});
