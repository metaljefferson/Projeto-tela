import Vue from 'vue'
import App from './App.vue'

import Buefy from 'buefy'
import 'buefy/dist/buefy.css'
// import { library } from '@fortawesome/fontawesome-svg-core'
// import { faUserSecret } from '@fortawesome/free-solid-svg-icons'
// import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

Vue.config.productionTip = false

Vue.use(Buefy, {
    defaultIconPack: 'fas',
    defaultContainerElement: '#content',
})

// library.add(faUserSecret)
// Vue.component('font-awesome-icon', FontAwesomeIcon)

new Vue({
    el: '#app',
    render: h => h(App),
    // components: { App },
    // template: '<App/>'

}).$mount('#app')


// <
// div class = "banner" >
//     <
//     img
// src = "https://vuejs.org/images/logo.png"
// width = "100"
// alt = "vue"
// class = "logo" /
//     >
//     <
//     h1 > Welcome to Vue.js < /h1> <
//     /div> <
//     div class = "bottom" >
//     To get started, edit < code > . / src / components / App.vue < /code> and save to reload.<br/ >
//     <
//     span class = "fade" >
//     Checkout < code > . / README.md < /code> for more usages. <
//     /span> <
//     /div>