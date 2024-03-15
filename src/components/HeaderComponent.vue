<script>

export default { 
  data(){
    return {
      links: [
        {
          routerName: 'home', //name nel router.js
          label: 'Home Page' //path nel router.js
        },
        {
          routerName: 'posts.index',
          label: 'Posts' 
        },
        {
          routerName: 'contacts',
          label: 'Contacts' 
        },
      ]

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
      <li v-for="(link, index) in links" :key="ndex">
        <router-link :to="{ name: link.routerName }" class="classe_css">
          {{ link.label }}
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
