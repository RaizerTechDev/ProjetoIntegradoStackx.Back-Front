<template>
  <div class="message-container">
      <!--Vai imprimir a mensagem no sistema no arquivo BurgerForm.vue -->
    <p>{{ msg }}</p>
  
  </div>
</template>

<script>
export default {
  name: "Message",
  props: {
    msg: String,
  },
};
</script>

<!-- Vai ser usado "style scoped": Quando uma <style> possui o scoped atributo, 
  seu CSS será aplicado apenas aos elementos do componente atual.
=> link: https://vue-loader.vuejs.org/guide/scoped-css.html.
 -->
<style scoped>
.message-container {
  color: #004085;
  background-color: #cce5ff;
  border: 2px solid #b8daff;
  border-radius: 5px;
  padding: 10px;
  max-width: 400px;
  margin: 30px auto;
}
</style>
