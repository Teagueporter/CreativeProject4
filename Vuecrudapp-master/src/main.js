import Vue from 'vue'
import App from './App.vue'

import 'semantic-ui-css/semantic.css';
import router from './router'

// import { library } from '@fortawesome/fontawesome-svg-core'

// /* import specific icons */
// import { faGitHub } from '@fortawesome/free-solid-svg-icons'

// /* import font awesome icon component */
// import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

// /* add icons to the library */
// library.add(faGitHub)

// /* add font awesome icon component */
// Vue.component('font-awesome-icon', FontAwesomeIcon)

Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
