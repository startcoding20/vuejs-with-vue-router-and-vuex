export const ACTION_APP_INCREMENT = 'ActionAppIncrement'

const INCREMENT_VALUE = 'IncrementValue'

const state = {
    count:0
}
const getters = {
    getCounter(state){
        return state.count
    }
}
const actions = {
    [ACTION_APP_INCREMENT] (context) {
        context.commit(INCREMENT_VALUE);
    }
}
const mutations = {
    [INCREMENT_VALUE] (state) {
        state.count = state.count + 1;
    }
}
export default {
    state,
    getters,
    actions,
    mutations
}