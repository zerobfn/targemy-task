import Vue from 'vue'
import Vuex from 'vuex'
import { isLoggedIn, clearCookies } from '@/domain/constants'

Vue.use(Vuex)

export default new Vuex.Store({
    state: {
        isSignedIn: isLoggedIn(),
        postId: 3,
        isSignInModelVisible: false
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
        },
        setPostId(state, id) {
            if (/^-?\d+$/.test(id)) {
                state.postId = id
            }
        },
        setSignInModelVisible(state, val) {
            if (val && state.isSignedIn === false) {
                state.isSignInModelVisible = true
            } else {
                state.isSignInModelVisible = false
            }
        }
    },
    getters: {
        getIsSignedIn(state) {
            return state.isSignedIn
        },
        getPostId(state) {
            return state.postId
        },
        getIsSignInModelVisible(state) {
            return state.isSignInModelVisible
        }
    },
    modules: {
    }
})
