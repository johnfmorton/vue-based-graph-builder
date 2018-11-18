import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({
    state: {
        bars: 3
    },
    getters: {
        status: (state) => {
            return `There are ${state.bars} bars in total.`
        }
    },
    mutations: {
        addBar(state) {
            state.bars++
        },
        minusBar(state) {
            state.bars--
        }
    },
    actions: {}
})