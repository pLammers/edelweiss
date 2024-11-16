import { mount } from 'svelte'
import './app.css'
// @ts-ignore
import App from './Homepage.svelte'

const app = mount(App, {
  target: document.getElementById('app'),
})

export default app
