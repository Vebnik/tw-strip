import { createApp } from 'vue'
import App from './App.vue'

// Vuetify
import 'vuetify/styles'
import Notifications from '@kyvg/vue3-notification'
import { createVuetify } from 'vuetify'
import * as components from 'vuetify/components'
import * as directives from 'vuetify/directives'

const vuetify = createVuetify({
    components,
    directives,
})

createApp(App)
    .use(vuetify)
    .use(Notifications)
    .mount('#app')
