<template>
  <div class="todoLink">
      <todoComponent />
  </div>
</template>

<script>
// @ is an alias to /src
import todoComponent from '@/components/todoComponent.vue';

export default {
  name: 'todo',
  components: {
    todoComponent,
  },
};
</script>
