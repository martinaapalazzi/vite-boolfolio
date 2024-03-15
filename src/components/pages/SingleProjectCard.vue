<script>

import axios from 'axios';

export default { 
  data(){
    return {
      post: null
    };
  },
  created(){
    this.getPost();
  },
  methods: {
    getPost() {
      axios
        .get('http://127.0.0.1:8000/api/posts/' + this.$route.params.slug)
        .then(response => {
          console.log(response);

          if (response.data.success) {
            this.post = response.data.results;
          }
          else {
            // redirect alla pagina 404
            this.$router.push({ name: 'not-found' })
          }
          
        })
    },
  }
};
</script>

<template>
  
    <h1>
      All my posts:
    </h1>

    <div class="container">
      <div class="card-container">
        <div class="post-card" v-if="post != null">
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

        </div>

        <div class="navigation-container">
          <button>
            <router-link :to="{ name: 'posts.index' }" class="classe_css">
              Go back to Posts Page!
            </router-link>
          </button>
        </div>

      </div>
    </div>

</template>

<style scoped>

.container {
  margin: 0 auto;
  width: 100%;
  display: flex;
  justify-content: center;
}

.card-container {
  height: 300px;
}

.post-card{
  margin-top: 20px ;
  border: 2px solid rosybrown;
  padding: 30px;
  margin-bottom: 30px;
}

.navigation-container {
  display: flex;
  justify-content: center;
}

.navigation-container button {
  background-color: pink;
  border: none;
  padding: 10px 15px;
  border-radius: 20px;
}

.navigation-container button a {
  text-decoration: none;
  color: black;
}

</style>
