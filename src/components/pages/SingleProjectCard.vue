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
    getPosts() {
      axios
        .get('http://127.0.0.1:8000/api/posts' + this.$route.params.slug)
        .then(response => {
          console.log(response);
          this.post = response.data.results.data;
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
      <div class="cards-container">
        <div class="post-card">
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

.post-card{
  width: calc((100% / 4) - 30px);
  margin-top: 20px ;
  border: 2px solid rosybrown;
  padding: 30px;
}
</style>
