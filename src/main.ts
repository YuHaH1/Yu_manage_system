import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import registerPlugins from './plugins/index'
import registerComponents from './components/index'
import 'element-plus/dist/index.css'


const app = createApp(App)
registerPlugins(app)
registerComponents(app)

app.mount('#app')
