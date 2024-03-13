<script>

import axios from 'axios';

export default { 
  data(){
    return {
      posts: []
    };
  },
  created(){
    axios
        .get('http://127.0.0.1:8000/api/posts')
        .then(response => {
          console.log(response);
          this.posts = response.data.results.data;

        })
  },
  methods: {

  }
};
</script>

<template>
  
    <h1>
      All my posts:
    </h1>

    <div class="container">
      <div v-for="post in posts" :key="post.id">
        <h3>
          {{ post.title }}
        </h3>
      </div>
    </div>

</template>

<style scoped>

</style>
