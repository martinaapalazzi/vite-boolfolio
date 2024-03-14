<script>

export default { 
  data(){
    return {
      message: 'Footer'
    };
  },
  components: {
    // AppHeader,
    // AppMain,
    // AppFooter
  },
  methods: {

  }
};
</script>

<template>
  
  <footer>
    <h1>
      {{ message }}
    </h1>
  </footer>

</template>

<style scoped>

footer {
  margin-top: 30px;
  background-color: rgb(255, 153, 221);
}


</style>
