import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({
    state: {
        user: null,
        token: localStorage.getItem('token') || null
    },
    mutations: {
        setUser(state, user) {
            state.user = user;
        },
        SET_TOKEN(state, token) {
            state.token = token
            localStorage.setItem('token', token)
        },
        REMOVE_TOKEN(state) {
            state.token = null
            localStorage.removeItem('token')
        }
    },
    actions: {
        login({ commit }, token) {
            commit('SET_TOKEN', token)
        },
        logout({ commit }) {
            commit('REMOVE_TOKEN')
        }
    }
});

