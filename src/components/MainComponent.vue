<script>

import axios from 'axios';
import ProjectCardComponent from './ProjectCardComponent.vue';

export default { 
  data(){
    return {
      posts: [],
      currentPage: 1,
      lastPage: 1
    };
  },
  components: {
    ProjectCardComponent
  }
};
</script>

<template>

  <ProjectCardComponent/> 

</template>

<style scoped>

</style>
