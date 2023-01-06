<template>
  <div>
    <h1>New</h1>
    <input type="text" v-model="title" />
    <button v-on:click="addTodo">+</button>
  </div>
</template>

<script>
export default {
  data: function () {
    return {
      title: "",
    };
  },
  methods: {
    addTodo: function () {
      const newtask = {
        userId: 100,
        title: this.title,
        completed: false,
      };
      this.$store.dispatch("addTodo", newtask);
    },
  },
};
</script>