<template>
  <div id="main-banner">
    <h1>Make Your Burger</h1>
  </div>
</template>

<script>
export default {
  name: "Banner",
};
</script>

<!-- Vai ser usado "style scoped": Quando uma <style> possui o scoped atributo, 
  seu CSS será aplicado apenas aos elementos do componente atual.
=> link: https://vue-loader.vuejs.org/guide/scoped-css.html.
 -->
<style scoped>
#main-banner {
  background-image: url("../../public/img/burger.jpg");
  background-position: 0 -250px;
  background-size: cover;
  height: 500px;
  display: flex;
  align-items: center;
  justify-content: flex-start;
}

#main-banner h1 {
  text-transform: capitalize;
  text-shadow: 5px 5px 5px #fff;
  filter: brightness(1.3);
  color: rgba(190, 72, 8, 0.933);
  text-align: center;
  font-size: 60px;
  background-color: #222;
  padding: 20px 40px;
}
</style>
