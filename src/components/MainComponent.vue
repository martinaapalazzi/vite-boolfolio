<script>

import axios from 'axios';
import ProjectCardComponent from './pages/ProjectCardComponent.vue';
import { RouterView } from 'vue-router';

export default { 
  data(){
    return {
      posts: [],
      currentPage: 1,
      lastPage: 1
    };
  },
};
</script>

<template>

  <RouterView></RouterView>

</template>

<style scoped>

</style>./pages/ProjectCardComponent.vue
