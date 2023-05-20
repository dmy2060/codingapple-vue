import { createStore } from 'vuex'

const store = createStore({
    state() {
        return {
            name: 'kim',
            age: 30,
            likes : 30,
        }
    },
    mutations:{
        이름변경(state) {
            state.name = 'park'
        },
        plusNumber(state, data){
            // state.age++;
            state.age += data
        },
        plusLikes(state, data){
            // state.age++;
            state.likes += data
        }
    }
})

export default store;