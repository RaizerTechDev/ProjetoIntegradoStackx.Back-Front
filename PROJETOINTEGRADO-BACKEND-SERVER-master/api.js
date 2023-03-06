//APIS e Rotas

// APIS do backend

//listar os dados ingredientes
axios
  .get("http://localhost:3000/ingredientes")
  .then((resposta) => console.log(resposta.data));

//Criar o pedido do burger
axios
  .post("http://localhost:3000/burger", {
    nome: "Mirian Goulart Varela",
    carne: "Veggie burger",
    pão: "Integral",
    opcionais: "Pepino",
  })
  .then((resposta) => console.log(resposta.data));

// Vai listar Pedidos dos burgers
axios
  .get("http://localhost:3000/burgers")
  .then((resposta) => console.log(resposta.data));

// Vai listar Pedidos dos burgers por ID
axios
  .get("http://localhost:3000/burgers/1")
  .then((resposta) => console.log(resposta.data));

// listar Status
axios
  .get("http://localhost:3000/status")
  .then((resposta) => console.log(resposta.data));

//atualizar os pedidos do burgers
axios
  .patch("http://localhost:3000/burgers/2", {
    status: "Em produção",
    id: 2,
  })
  .then((resposta) => console.log(resposta.data));

// deletar os burgers do pedido
axios
  .delete("http://localhost:3000/burgers/3")
  .then((resposta) => console.log(resposta.data));
