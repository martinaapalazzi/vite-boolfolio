<script>

export default { 
  data(){
    return {

    };
  },
  components: {

  },
  methods: {

  }
};
</script>

<template>

  <nav class="nav-bar">
    <h1>
      Logo
    </h1>

    <ul>
      <li>
        <router-link :to="{ name: 'home' }" class="classe_css">
          Home page
        </router-link>
      </li>
      <li>
        <router-link :to="{ name: 'posts.index' }" class="classe_css">
          Posts
        </router-link>
      </li>
    </ul>
  </nav>

</template>

<style scoped>

.nav-bar {
  display: flex;
  justify-content: space-around;
  align-items: center;
  background-color: aqua;

}

nav ul {
  list-style: none;
  display: flex;
  gap: 20px;
}

a {
  text-decoration: none;
  color: black;
}

</style>
