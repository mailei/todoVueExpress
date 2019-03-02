<template>
  <div class="container">
    <h1>TODO</h1>
    <hr>
    <p class="error" v-if="error">{{error}}</p>
    <div class="todo-container">
      <div
        class="todo"
        v-for="(todo, key, index) in todos"
        v-bind:key="index"
      >
        {{`${todo.createdAt.getFullYear()}/${todo.createdAt.getMonth()}/${todo.createdAt.getData()}`}}
        <p class="text">{{todo.text}}</p>
      </div>
    </div>
  </div>
</template>

<script>
import request from '../modules/todoRequest';

export default {
  name: 'todoComponent',
  data() {
    return {
      todos: [],
      error: '',
      text: '',
    };
  },
  async created() {
    try {
      this.todos = await request.getTodo();
    } catch (error) {
      this.error = error.message;
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
</style>
