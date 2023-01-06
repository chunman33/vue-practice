<template>
  <div>
    <h1>Index</h1>
    <div>
      <p>
        Search:
        <input type="text" placeholder="Search" v-model="Search" />
      </p>
    </div>
    <input type="radio" name="task" v-model="selectedTodos" value="all" />
    <label for="all">all</label>
    <input type="radio" name="task" v-model="selectedTodos" value="done" />
    <label for="done">done</label>
    <input type="radio" name="task" v-model="selectedTodos" value="yet" />
    <label for="yet">yet</label>
    <p>Count:</p>
    <ul>
      <hr />
      <div class="todos">
        <div v-for="todo in todosForView" :key="todo.id">
          <input
            type="checkbox"
            v-model="todo.completed"
            v-on:click="toggle(todo)"
          />
          {{ todo.title }}
          <hr />
        </div>
      </div>
    </ul>
  </div>
</template>

<script>
export default {
  data() {
    return {
      Search: "",
      selectedTodos: "all",
    };
  },
  methods: {
    toggle(todo) {
      const update = {
        userID: todo.userID,
        title: todo.title,
        completed: !todo.completed,
      };
      // 更新したいtodoのidを渡す
      // const todoID = {
      //   id: todo.id,
      // };
      this.$store.dispatch("done", { todoID: todo.id, update: update });
    },
  },
  computed: {
    allTodos() {
      return this.$store.getters.allTodos;
    },
    todosForView() {
      let todos = this.allTodos.filter((todo) =>
        todo.title.includes(this.Search)
      );
      if (this.selectedTodos === "all") {
        return todos;
      } else if (this.selectedTodos === "done") {
        return todos.filter(function (value) {
          return value.completed === true;
        });
      } else {
        return todos.filter(function (value) {
          return value.completed === false;
        });
      }
    },
  },
};
</script>