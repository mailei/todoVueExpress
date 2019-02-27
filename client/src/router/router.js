import Vue from 'vue';
import VueRouter from 'vue-router';

import todoComponent from '@/component/todoComponent.vue';

Vue.use(VueRouter);

var router = new VueRouter({
  routes: [
    {
      path: '/',
      component: todoComponent
    }
    // },
    // {
    //   path: '/users',
    //   component: usersComponet
    // }
  ]
});

export default router;
