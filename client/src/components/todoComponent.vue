<template>
<div class="container">
    <h1> TODO </h1>
    <hr>
    <p class="error" v-if="error">{{error}}</p>
    <div class="todo-container">
      <div class="todo"
        v-for="(todo,index) in todos"
        v-bind:item="todo"
        v-bind:index="index"
        v-bind:key="todo.id"
      >
          {{`${todo.createdAt.getFullYear()}/${todo.createdAt.getMonth()}/${todo.createdAt.getData()}`}}
          <p class="text"> {{todo.text}} </p>
      </div>
</div>
</template>

<script>
import request from '../modules/todoRequest';

export default {
  name: 'todoComponet',
  data(){
    return {
      todo:[],
      error:'',
      text:''
    }
  },
  async created(){
    try{
      this.todo=await request.getTodo();
    }catch(error){
      this.error=error.message;
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
