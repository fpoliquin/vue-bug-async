import Vue from 'vue'

export default Vue.component('async', {
    template: '<p>{{msg}}</p>',
    data() {
        return {
            msg: 'Hello'
        }
    }
})