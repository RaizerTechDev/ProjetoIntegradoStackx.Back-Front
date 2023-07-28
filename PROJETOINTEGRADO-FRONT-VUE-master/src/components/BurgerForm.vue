<!-- Importar o Message.vue -->
<template>
      <!-- Enviar uma mensagem: "msg"-->
  <Message :msg="msg" v-show="msg" />
  <div>
    <form id="burger-form" method="POST" @submit="createBurger">
      <div class="input-container">
        <label for="nome">Nome do cliente:</label>
        <input type="text" id="nome" name="nome" v-model="nome" placeholder="Digite o seu nome">
      </div>
      <div class="input-container">
        <label for="pao">Escolha o pão:</label>
        <select name="pao" id="pao" v-model="pao">
          <option value="">Selecione o seu pão</option>
          <option v-for="pao in paes" :key="pao.id" :value="pao.tipo">{{ pao.tipo }}</option>
        </select>
      </div>
      <div class="input-container">
        <label for="carne">Escolha a carne do seu Burger:</label>
        <select name="carne" id="carne" v-model="carne">
          <option value="">Selecione o tipo de carne</option>
          <option v-for="carne in carnes" :key="carne.id" :value="carne.tipo">{{ carne.tipo }}</option>
        </select>
      </div>
      <div id="opcionais-container" class="input-container">
        <label id="opcionais-title" for="opcionais">Selecione os opcionais:</label>
        <div class="checkbox-container" v-for="opcional in opcionaisdata" :key="opcional.id">
          <input type="checkbox" name="opcionais" v-model="opcionais" :value="opcional.tipo">
          <span>{{ opcional.tipo }}</span>
        </div>
      </div>
      <div class="input-container">
        <input class="submit-btn" type="submit" value="Criar meu Burger!">
      </div>
    </form>
  </div>
</template>

<script>
import Message from './Message'

  // Exportar os dados
export default {
  name: "BurgerForm",
  data() {
    return {
       //Dados do servidor
      paes: null,
      carnes: null,
      opcionaisdata: null,

        //Dados enviados do formulários
      nome: null,
      pao: null,
      carne: null,
      opcionais: [],
      status: "Solicitado",
      msg: null
    }
  },
    // APIS Requisições back-end
  methods: {
       //listar os dados ingredientes
    async getIngredientes() {
      const req = await fetch("https://projetointegrado-backend-server.onrender.com/ingredientes")
      const data = await req.json()

      this.paes = data.paes
      this.carnes = data.carnes
      this.opcionaisdata = data.opcionais
    },

      //Criar o pedido do burger do formulário
    async createBurger(e) {

      e.preventDefault()

      const data = {
        nome: this.nome,
        carne: this.carne,
        pao: this.pao,
        opcionais: Array.from(this.opcionais), // Criar array em opcionais
        status: "Solicitado"
      }

      const dataJson = JSON.stringify(data)   // Enviar como texto ao servidor

      const req = await fetch("https://projetointegrado-backend-server.onrender.com/burgers", {
        method: "POST",
        headers: { "Content-Type" : "application/json" },
        body: dataJson
      });

      const res = await req.json()

      console.log(res)

      // Condicionando o aparecimento da mensagem a inserção do hambúrguer quando realizar o pedido.
      this.msg = "Pedido realizado com sucesso!"

      // limpar mensagem
      setTimeout(() => this.msg = "", 3000)

    // limpar campos após a execução do pedido no formulário
      this.nome = ""
      this.carne = ""
      this.pao = ""
      this.opcionais = []
      
    }
  },
  mounted () {
    this.getIngredientes()
  },
  components: {
    Message
  }
}
</script>

<!-- Vai ser usado "style scoped": Quando uma <style> possui o scoped atributo, 
  seu CSS será aplicado apenas aos elementos do componente atual.
=> link: https://vue-loader.vuejs.org/guide/scoped-css.html.
 -->
<style scoped>
  #burger-form {
    max-width: 400px;
    margin: 0 auto;
  }

  .input-container {
    display: flex;
    flex-direction: column;
    margin-bottom: 20px;
  }

  label {
    font-weight: bold;
    margin-bottom: 15px;
    color: #222;;
    padding: 5px 10px;
    border-left: 4px solid #fcba03; /* Criando bordas para dar um destaque na lateral do "burgerform"*/
  }

  input, select {
    padding: 5px 10px;
    width: 300px;
  }

  #opcionais-container {
    flex-direction: row;
    flex-wrap: wrap;
  }

  #opcionais-title {
    width: 100%;
  }

  .checkbox-container {
    display: flex;
    align-items: flex-start;
    width: 50%;
    margin-bottom: 20px;
  }

  .checkbox-container span,
  .checkbox-container input {
    width: auto;
  }

  .checkbox-container span {
    margin-left: 6px;
    font-weight: bold;
  }

  .submit-btn {
    background-color: #222;
    color:#fcba03;
    font-weight: bold;
    border: 2px solid #222;
    padding: 10px;
    font-size: 16px;
    margin: 0 auto;
    cursor: pointer;
    transition: .5s;
  }

  .submit-btn:hover {
    background-color: transparent;
    color: #222;
  }
</style>
