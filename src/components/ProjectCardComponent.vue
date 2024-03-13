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
    this.getPosts(this.currentPage);
  },
  methods: {
    getPosts(page) {
      axios
        .get('http://127.0.0.1:8000/api/posts', {
          params:{
            page: page
          }
        })
        .then(response => {
          console.log(response);
          this.posts = response.data.results.data;
          this.currentPage = response.data.results.current_page;
          this.lastPage = response.data.results.last_page;
        })
    },
    previousPage() {
      if (this.currentPage > 1) {
        this.getPosts(this.currentPage - 1)
      }
    },
    nextPage() {
      if (this.currentPage < this.lastPage) {
        this.getPosts(this.currentPage + 1)
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

          <div v-if="post.cover_img != null">
            <img :src="'http://127.0.0.1:8000/storage/' + post.cover_img " :alt="post.title">
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
