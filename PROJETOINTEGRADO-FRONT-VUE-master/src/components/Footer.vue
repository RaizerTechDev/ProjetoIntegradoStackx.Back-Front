<!--  import footer na app -->

<template>
  <div id="footer">
    <p>
      Copyright 2023
      <a href="https://portifolio-rafa-rz76.vercel.app/">RafaRz76Dev</a> All
      Rights Reserved
    </p>
  </div>
</template>

<script>
export default {
  name: "Footer",
};
</script>

<!-- Vai ser usado "style scoped": Quando uma <style> possui o scoped atributo, 
  seu CSS será aplicado apenas aos elementos do componente atual.
=> link: https://vue-loader.vuejs.org/guide/scoped-css.html.
 -->
<style scoped>
#footer {
  height: 200px;
  background-color: #222;
  border-top: 4px solid #111;
  color: #fcba03;
  display: flex;
  align-items: center;
  justify-content: center;
  bottom: 0;
  width: 100%;
}
a {
  color: #2e8b57;
}
</style>
