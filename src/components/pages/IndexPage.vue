<script>

export default { 
  data(){
    return {
      message: 'This is your home page!'
    };
  },
};
</script>

<template>
  <main>
    <h1>
      {{ message }}
    </h1>
  </main>
</template>

<style scoped>

main {
  margin-top: 30px;
}


</style>
