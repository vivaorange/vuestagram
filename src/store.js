import { createStore } from "vuex";

const store = createStore({
  state() {
    return {
      name: "kim",
      age: 20,
      likes: [30, 40, 50],
      likesClick: [false, false, false],
    };
  },
  mutations: {
    changeName(state) {
      state.name = "박";
    },
    changeAge(state, data) {
      state.age += data;
    },
    likesTrue(state, data) {
      if (state.likesClick[data] === false) {
        state.likes[data]++;
        state.likesClick[data] = true;
      } else {
        state.likes[data]--;
        state.likesClick[data] = false;
      }
    },
  },
});

export default store;
