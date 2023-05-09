import axios from "axios";
import { createStore } from "vuex";

const store = createStore({
  state() {
    return {
      name: "kim",
      age: 20,
      likes: [30, 40, 50],
      likesClick: [false, false, false],
      more: {},
    };
  },
  mutations: {
    setMore(state, data) {
      state.more = data;
    },
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
  actions: {
    getData(context) {
      axios.get("https://codingapple1.github.io/vue/more0.json").then((a) => {
        console.log(a.data);
        context.commit("setMore", a.data);
      });
    },
  },
});

export default store;
