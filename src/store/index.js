import Vue from 'vue'
import Vuex from 'vuex'
import { isLoggedIn, clearCookies } from '@/domain/constants'

Vue.use(Vuex)

export default new Vuex.Store({
    state: {
        isSignedIn: isLoggedIn()
    },
    actions: {
        logOut({ commit }) {
            commit('setIsSignedIn', false)
            clearCookies()
        }
    },
    mutations: {
        setIsSignedIn(state, val) {
            state.isSignedIn = val
        }
    },
    getters: {
        getIsSignedIn(state) {
            return state.isSignedIn
        }
    },
    modules: {
    }
})
