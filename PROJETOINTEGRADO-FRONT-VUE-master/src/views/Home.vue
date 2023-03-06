<template>
  <div>
    <Banner />
    <div class="main-container">
      <h1>Monte o seu burger:</h1>
      <BurgerForm />
    </div>
  </div>
</template>

<script>
import Banner from "../components/Banner";
import BurgerForm from "../components/BurgerForm";
import api from "../components/services/api"

export default {
  name: "Home",
  components: {
    Banner,
    BurgerForm,
     api,
  },
};
</script>
