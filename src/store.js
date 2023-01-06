import axios from "axios";
import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

const state = {
  todos: []
};

const mutations = {
  // 第一引数のstateは7行目を指定,第二引数でactionsの第二引数を受け取る
  setTodos: (state, todos) => (state.todos = todos),
  // function setTodos(state, todos) {
  //   state.todos = todos;
  // }
  newTodo: (state, todos) => state.todos.unshift(todos),
  done: (state, newTodo) => {
    let index = state.todos.findIndex((todo) => todo.id === newTodo.id);
    state.todos[index] = newTodo;
  }
};

const actions = {
  async fetchTodos({ commit }) {
    const response = await axios.get(
      "https://jsonplaceholder.typicode.com/todos"
    );
    commit("setTodos", response.data);
    mutations.setTodos(response.data);
  },
  async addTodo({ commit }, newtask) {
    const response = await axios.post(
      "https://jsonplaceholder.typicode.com/todos",
      newtask
    );
    commit("newTodo", response.data);
  },
  async done({ commit }, { todoID, update }) {
    const response = await axios.patch(
      `https://jsonplaceholder.typicode.com/todos/${todoID}`,
      update
    );
    console.log(response.data);
    commit("done", response.data);
  }
};
const getters = {
  allTodos: (state) => state.todos
  // function allTodos(state) {
  //   return state.todos;
  // }
};

export default new Vuex.Store({
  state,
  mutations,
  actions,
  getters
});
