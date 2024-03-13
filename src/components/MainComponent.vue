<script>

import axios from 'axios';

export default { 
  data(){
    return {
      posts: [],
      currentPage: 1,
      lastPage: 1
    };
  },
  created(){
    axios
        .get('http://127.0.0.1:8000/api/posts')
        .then(response => {
          console.log(response);
          this.posts = response.data.results.data;
          this.currentPage = response.data.results.current_page;
          this.lastPage = response.data.results.last_page;
        })
  },
  methods: {
    previousPage() {
      if (this.currentPage > 1) {
        axios
        .get('http://127.0.0.1:8000/api/posts', {
          params:{
            page: this.lastPage - 1
          }
        })
        .then(response => {
          console.log(response);
          this.posts = response.data.results.data;
          this.currentPage = response.data.results.current_page;
          this.lastPage = response.data.results.last_page;
        })
      }
    },
    nextPage() {
      if (this.currentPage < this.lastPage) {
        axios
        .get('http://127.0.0.1:8000/api/posts', {
          params:{
            page: this.currentPage + 1 
          }
        })
        .then(response => {
          console.log(response);
          this.posts = response.data.results.data;
          this.currentPage = response.data.results.current_page;
          this.lastPage = response.data.results.last_page;
        })
      }
    },
  }
};
</script>

<template>
  
    <h1>
      All my posts:
    </h1>

    <div class="container">
      <div class="cards-container">
        <div class="post-card" v-for="post in posts" :key="post.id">
          <h3 class="post-title">
            {{ post.title }}
          </h3>

          <div>
            <h4>
              Type:
            </h4>
            <span>
              {{ post.type.title }}
            </span>
          </div>

          <div>
            <h4>
              Technology:
            </h4>
            <ul v-for="technology in post.technologies" :key="technology.id">
              <li>
                {{ technology.title }}
              </li> 
            </ul>
          </div>

        </div>
      </div>

      <div class="navigation-container">
        <button @click="previousPage()">
          Previous Page
        </button>
        <button @click="nextPage()">
          Next Page
        </button>
      </div>
    </div>

</template>

<style scoped>

</style>
