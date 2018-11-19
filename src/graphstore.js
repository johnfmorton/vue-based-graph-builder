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
            let barVerb = (state.bars === 1) ? "is" : "are";
            if (state.bars === 0) {
                barVerb = 'no'
            }
            let barNoun = (state.bars === 1) ? "bar" : "bars";
            return `There ${barVerb} ${state.bars > 0 ? state.bars : ''} ${barNoun} in your graph.`
        }
    },
    mutations: {
        addBar(state) {
            state.bars++;
            state.barSettingsContainer.push(new Object({startValue: 0, endValue: 100, delay: 1}))
        },
        minusBar(state) {
            state.bars--
            state.barSettingsContainer.pop()
        },
        incrementBegining(state, {bar}) {
            console.log('incrementBegining', state.barSettingsContainer[bar])
            state.barSettingsContainer[bar].startValue++;
        },
        decrementBegining(state, {bar}) {
            console.log('bar', bar)
            console.log('decrementBegining', state.barSettingsContainer[bar])
            state.barSettingsContainer[bar].startValue--;
        },
        incrementEnding(state, {bar}) {
            console.log('incrementEnding', state.barSettingsContainer[bar])
            state.barSettingsContainer[bar].endValue++;
        },
        decrementEnding(state, {bar}) {
            console.log('bar', bar)
            console.log('decrementEnding', state.barSettingsContainer[bar])
            state.barSettingsContainer[bar].endValue--;
        }
    },
    actions: {}
})