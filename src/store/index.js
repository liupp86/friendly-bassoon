import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
    state: {
        token: "",
        id: ""
    },
    mutations: {
        set_token(state, val) {
            state.token = val
        },
        set_id(state, val) {
            state.id = val
        }
    },
    actions: {},
    modules: {}
})

