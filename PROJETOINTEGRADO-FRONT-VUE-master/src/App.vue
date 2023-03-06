<!-- Cria rotas para views e  a importação navbar e footer -->

<template>
  <div>
    <Navbar :logo="logo_src" :alt="app_name" />
    <div>
      <router-view></router-view>
    </div>
    <Footer />
  </div>
</template>

<!-- importar Navbar -->
<script>
import Navbar from "./components/Navbar.vue";
import Footer from "./components/Footer";

export default {
  data: function() {
    return {
      logo_src: "https://media.giphy.com/media/XeXKyDCQtWm00yQQMd/giphy.gif",
      app_name: "burger",
    };
  },
  components: {
    Navbar,
    Footer,
  },
};
</script>

<style>
* {
  font-family: Helvetica;
  padding: 0;
  margin: 0;
  box-sizing: border-box;
}

.main-container {
  margin: 50px;
  min-height: 250px;
}

h1 {
  text-align: center;
  font-size: 42px;
  margin-bottom: 30px;
  color: #222;
}
</style>
