<script>

import HeaderComponent from './components/HeaderComponent.vue';
import MainComponent from './components/MainComponent.vue';
import FooterComponent from './components/FooterComponent.vue';

export default { 
  data(){
    return {
      
    };
  },
  components: {
    HeaderComponent,
    MainComponent,
    FooterComponent
  },
  methods: {

  }
};
</script>


<template>
  <h1>
    {{ message }}
  </h1>

  <HeaderComponent />

  <MainComponent />

  <FooterComponent />

</template>

<style scoped>

</style>
