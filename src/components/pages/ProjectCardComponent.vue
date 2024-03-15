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

          <div v-if="post.technologies != null">
            Technology:
            <ul v-for="technology in post.technologies" :key="technology.id">
              <li>
                {{ technology.title }}
              </li> 
            </ul>
          </div>

          <div v-if="post.cover_img != null">
            <h4>
              Image:
            </h4>
            <img :src="'http://127.0.0.1:8000/storage/' + post.cover_img " :alt="post.title">
          </div>

          <div>
            <button>
              <router-link :to="{ name: 'posts.show', params: { slug: post.slug } }" class="btn btn-primary">
                Show this post!
              </router-link>
            </button>
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

.container {
  max-width: 1200px;
  margin: 0 auto;
  width: 100%;
}

.cards-container {
  display: flex;
  align-items: center;
  justify-content: space-around;
  gap: 30px;
  height: 300px;
}

.post-card {
  width: calc((100% / 4) - 30px);
  margin-top: 20px ;
  border: 2px solid rosybrown;
  padding: 30px;
  text-align: center;
}

.post-card button {
  margin-top: 10px;
  background-color: none;
  border: none;
  padding: 10px 15px;
  cursor: pointer;
  border-radius: 20px;
}

.post-card button a {
  text-decoration: none;
}

.navigation-container {
  margin-top: 50px;
  display: flex;
  justify-content: space-around;
}

.navigation-container button {
  background-color: pink;
  border: none;
  padding: 10px 15px;
  cursor: pointer;
  border-radius: 20px;
}

</style>
