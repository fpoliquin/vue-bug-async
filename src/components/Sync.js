import Vue from 'vue'

export default Vue.component('sync', {
    template: '<p>{{msg}}</p>',
    data() {
        return {
            msg: 'Hello from sync'
        }
    }
})