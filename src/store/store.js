import Vue from 'vue'
import Vuex from 'vuex'
import userStore from './user';
Vue.use(Vuex)
const state = {
    flag: false,
}
const getters = {
    flag: state => state.flag,
}
const actions = {
    show1({ commit, state }, data) {
        commit('ssss', data);
    },


}
const mutations = {
    ssss(state, data) {
        state.flag = data;
    },

}

export const store = new Vuex.Store({
    state,
    getters,
    actions,
    mutations,
    modules: {
        userStore,
    }
})