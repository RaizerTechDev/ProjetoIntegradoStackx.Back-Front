<template>
  <div id="burger-table" v-if="burgers">
    <!-- Enviar uma mensagem: "msg"-->
    <Message :msg="msg" v-show="msg" />
    <div>
      <div id="burger-table-heading">
        <div class="order-id">#:</div>
        <div>Cliente:</div>
        <div>Pão:</div>
        <div>Carne:</div>
        <div>Opcionais:</div>
        <div>Ações:</div>
      </div>
    </div>
    <div id="burger-table-rows">
      <div class="burger-table-row" v-for="burger in burgers" :key="burger.id">
        <div class="order-number">{{ burger.id }}</div>
        <div>{{ burger.nome }}</div>
        <div>{{ burger.pao }}</div>
        <div>{{ burger.carne }}</div>
        <div>
          <ul v-for="(opcional, index) in burger.opcionais" :key="index">
            <li>{{ opcional }}</li>
          </ul>
        </div>
        <div>
          <select
            name="status"
            class="status"
            @change="updateBurger($event, burger.id)"
          >
            <option
              :value="s.tipo"
              v-for="s in status"
              :key="s.id"
              :selected="burger.status == s.tipo"
            >
              {{ s.tipo }}
            </option>
          </select>
          <button class="delete-btn" @click="deleteBurger(burger.id)">
            Cancelar
          </button>
        </div>
      </div>
    </div>
  </div>
  <div v-else>
    <h2>Não há pedidos no momento!</h2>
  </div>
</template>
<script>
import Message from "./Message.vue";

export default {
  name: "Dashboard",
  data() {
    return {
      //Dados após a realização do pedido
      burgers: null,
      burger_id: null,
      status: [],
      msg: null,
    };
  },
  components: {
    Message,
  },

  // APIS Requisições back-end
  methods: {
    // listar Pedidos dos burgers
    async getPedidos() {
      const req = await fetch("https://projetointegrado-backend-server-production.up.railway.app/burgers");

      const data = await req.json();

      this.burgers = data;

      // Resgata os status de pedidos
      this.getStatus();
    },

    // Vai listar Pedidos dos burgers por ID
    async getBurger(id) {
      const req = await fetch(`https://projetointegrado-backend-server-production.up.railway.app/burgers/${id}`, {
        method: "GET",
      });

      const res = await req.json();

      this.getPedidos();
    },

    // listar Status
    async getStatus() {
      const req = await fetch("https://projetointegrado-backend-server-production.up.railway.app/status");

      const data = await req.json();

      this.status = data;
    },

    // deletar os burgers do pedido
    async deleteBurger(id) {
      const req = await fetch(`https://projetointegrado-backend-server-production.up.railway.app/burgers/${id}`, {
        method: "DELETE",
      });

      const res = await req.json();

      // Condicionando o aparecimento da mensagem a inserção do hambúrguer quando for removido.
      this.msg = `Pedido removido com sucesso!`;

      // limpar mensagem
      setTimeout(() => (this.msg = ""), 3000);

      this.getPedidos();
    },

    //atualizar os pedidos do burgers
    async updateBurger(event, id) {
      const option = event.target.value; // Para saber o status de quem gerenciar os pedidos

      const dataJson = JSON.stringify({ status: option }); //Para atualizar no banco do json-server

      const req = await fetch(`https://projetointegrado-back-server.herokuapp.com/burgers/${id}`, {
        method: "PATCH",
        headers: { "Content-Type": "application/json" },
        body: dataJson,
      });

      const res = await req.json();
      
      // Condicionando o aparecimento da mensagem a inserção do hambúrguer quando for atualizado.
      this.msg = `O pedido Nº ${res.id} foi atualizado para ${res.status}  !`;

      // limpar mensagem
      setTimeout(() => (this.msg = ""), 3000);

      console.log(res);
    },
  },
  mounted() {
    this.getPedidos();
  },
};
</script>

<!-- Vai ser usado "style scoped": Quando uma <style> possui o scoped atributo, 
  seu CSS será aplicado apenas aos elementos do componente atual.
=> link: https://vue-loader.vuejs.org/guide/scoped-css.html.
 -->
<style scoped>
#burger-table {
  max-width: 1200px;
  margin: 0 auto;
}

#burger-table-heading,
#burger-table-rows,
.burger-table-row {
  display: flex;
  flex-wrap: wrap;
}

#burger-table-heading {
  font-weight: bold;
  padding: 12px;
  border-bottom: 3px solid #333;
}

.burger-table-row {
  width: 100%;
  padding: 12px;
  border-bottom: 1px solid #ccc;
}

#burger-table-heading div,
.burger-table-row div {
  width: 19%;
}

#burger-table-heading .order-id,
.burger-table-row .order-number {
  width: 5%;
}

select {
  padding: 12px 6px;
  margin-right: 12px;
}

.delete-btn {
  background-color: #222;
  color: #fcba03;
  font-weight: bold;
  border: 2px solid #222;
  padding: 10px;
  font-size: 16px;
  margin: 0 auto;
  cursor: pointer;
  transition: 0.5s;
}

.delete-btn:hover {
  background-color: transparent;
  color: #222;
}
</style>
