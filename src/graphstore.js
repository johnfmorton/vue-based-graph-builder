import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({


    state: {
        bars: 0,
        barSettingsContainer: []
    },
    getters: {
        status: (state) => {
            return `There are ${state.bars} bars in total.`
        }
    },
    mutations: {
        addBar(state) {
            state.bars++;
            state.barSettingsContainer.push(new Object({begining: 0, ending: 100, delay: 1}))
        },
        minusBar(state) {
            state.bars--
            state.barSettingsContainer.pop()
        }
    },
    actions: {}
})