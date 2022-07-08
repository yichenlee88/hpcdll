import { createApp } from 'vue'
import App from './App.vue'
import BootstrapVue3 from 'bootstrap-vue-3'
// import { route } from './route'
// Import bootstrap
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue-3/dist/bootstrap-vue-3.css'

// BootstrapIcon and FontAwesomeIcon
import BootstrapIcon from '@dvuckovic/vue3-bootstrap-icons';
import { library } from '@fortawesome/fontawesome-svg-core'
import { faPhone } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
library.add(faPhone)

import router from './router'

//  .use(router)
createApp(App).use(router)
 .component('font-awesome-icon', FontAwesomeIcon)
 .component('BootstrapIcon', BootstrapIcon)
 .component('BootstrapVue3', BootstrapVue3)
 .mount('#app')


// const app = createApp(App);
// app.component('BootstrapIcon', BootstrapIcon);
// app.component('BootstrapVue3', BootstrapVue3);
// app.mount('#app');
