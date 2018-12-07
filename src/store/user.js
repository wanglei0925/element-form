import * as types from './storeTypes';
const state = {
    signFlg: false
};

const getters = {
    signFlg: state => state.signFlg
};

const actions = {
    // login({ dispatch, commit, state, rootState }, params) {

    //     commit(REQUESTING, true)
    //     commit(types.LOGIN + _REQUEST)
    //     loginApi.login(params).then((response) => {

    //         commit(REQUESTING, false)
    //         if (response.status) {
    //             commit(types.LOGIN + _SUCCESS)
    //             dispatch('user')
    //         } else {
    //             VueCookie.set("login_in", 0);
    //             commit(types.LOGIN + _FAILURE)
    //         }
    //         commit(RETURN_RESULT, response)
    //     }, (error) => {
    //         commit(REQUESTING, false)
    //         commit(types.LOGIN + _FAILURE)
    //     })
    // },
};

const mutations = {
    // [types.LOGIN + _REQUEST]: (state) => {},
}

export default {
    state,
    getters,
    actions,
    mutations
}