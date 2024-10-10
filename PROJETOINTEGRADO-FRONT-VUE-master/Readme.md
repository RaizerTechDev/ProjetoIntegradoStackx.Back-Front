# ProjetoIntegrado-Stackx-Front-Back

<br>


---
### <div align="center">
  # <img src="https://media.giphy.com/media/9TFBxN300KpCUI6sBD/giphy.gif" align="center" height="80" width="80"> 

### [Clique aqui para acessar o Projeto ```Make Your Burger```](https://raizertechdev-burger.netlify.app//)
  
  <br>
  
---
# Suas aplicação:

 <img style="width: 100px" alt="Vue.js" src="https://media.giphy.com/media/VgGthkhUvGgOit7Y9i/giphy.gif">

---
# <img src="https://media.giphy.com/media/eBqEQyWGdgSNgRVLCV/giphy.gif" align="center" height="95" width="95"> Ferramenta Do Desafio⁉

<img style="width: 80px" alt="VSCode" src="https://media.giphy.com/media/IdyAQJVN2kVPNUrojM/giphy.gif">

---
## <img src="https://media.giphy.com/media/JO9WCVmDMbC0eLSlyV/giphy.gif" align="center" height="70" width="70"> &nbsp;Linguagem Tecnológica do Desafio:

<img style="width: 80px" alt="JS" src="https://media.giphy.com/media/ln7z2eWriiQAllfVcn/giphy.gif">

---
# Passo a Passo do Projeto:

## Passo 01

## Instalando para o projeto em vue.js no terminal power shell <img src="https://media.giphy.com/media/HPzNBFdTh8sxhqNdpX/giphy.gif" align="center" height="30" width="25">

### 1º Para instalar o pacote vs.js, use o seguinte comando:
```bash
  yarn global add @vue/cli
```

### 2º Após a instalação, você terá acesso ao vue binário em sua linha de comando. Você pode verificar se ele está instalado corretamente simplesmente executando👇
```bash
 vue –-version
```

### 3º Criando o Projeto Vue
```bash
   vue create nome do projeto ( ex. projetovew-web3.0)
```

### <img src="https://media.giphy.com/media/XwcRflO9HD0Sk6RaRM/giphy.gif" align="center" height="25" width="25"> Quando perguntar digita:
```bash
   Default ([Vue 3] babel, eslint)
```

### <img src="https://media.giphy.com/media/XwcRflO9HD0Sk6RaRM/giphy.gif" align="center" height="25" width="25"> Quando perguntar digita:
```bash
   Use Yarn
```

## No terminal ao finalizar vai imprimir <img src="https://media.giphy.com/media/HPzNBFdTh8sxhqNdpX/giphy.gif" align="center" height="30" width="25">

### <img src="https://media.giphy.com/media/XwcRflO9HD0Sk6RaRM/giphy.gif" align="center" height="25" width="25"> cd Nome do Projeto

### <img src="https://media.giphy.com/media/XwcRflO9HD0Sk6RaRM/giphy.gif" align="center" height="25" width="25"> yarn serve

### Aguarda a instalação dos pacotes no projeto,

### <img src="https://media.giphy.com/media/XwcRflO9HD0Sk6RaRM/giphy.gif" align="center" height="25" width="25"> E altera copiando e colando para a pasta do projeto que foi criado antes de abrir no VSCode com o comando.

- `cd nomepastaprojeto`

### 4º Agora sim vai Abrir o Projeto no Terminal para a ferramenta VSCode, digitando 👊

```bash
  code .
```

## Dentro do editor de código VSCode no ```terminal power shell```:

### Atualizando o Pacote:

```bash
   npm update -g @vue/cli.
```

### Configuração do Projeto:

```bash
   yarn
```

---
## Passo 02: Back-End no Vue.js

### 1º Vai instalar o json-server, use o seguinte comando:

```bash
   npm install json-server
```

### 2º Vai criar a pasta no VSCode a pasta `db` e o arquivo como `db.json`, assim criando os scripts.

#### <img src="https://media.giphy.com/media/XwcRflO9HD0Sk6RaRM/giphy.gif" align="center" height="25" width="25"> Após a instalação do comando e a criação do db vai em package.json em `scripts` e abaixo do `build` vai acrescentar o Backend da seguinte forma:

```scripts: {
  "backend": "json-server --watch db/db.json",
},
```

### 3º Execução do back-end no servidor:

```bash
npm run Backend
```

#### <img src="https://media.giphy.com/media/XwcRflO9HD0Sk6RaRM/giphy.gif" align="center" height="25" width="25"> Vai compilar na porta => http://localhost:3000/

---
### 4º Executar o projeto em front-end no servidor:

```bash
yarn serve
```

#### <img src="https://media.giphy.com/media/XwcRflO9HD0Sk6RaRM/giphy.gif" align="center" height="25" width="25"> Vai compilar na porta: http://localhost:8080/

---
### Criando o módulo de rotas

### <img src="https://media.giphy.com/media/XwcRflO9HD0Sk6RaRM/giphy.gif" align="center" height="25" width="25"> Se integra ao núcleo do Vue.js para facilitar a criação de aplicativos de página única com o Vue. Foi importado no `main.js`.

- [ router-vue-routers](https://br.vuejs.org/v2/guide/routing.html)

---
### <img src="https://media.giphy.com/media/KCpObMwXFL4FszmTt4/giphy.gif" align="center" height="40" width="40"> Idéia sobre definição “Babel”

### É um Transpilador JavaScript de código aberto, o Babel foi lançado sobre a licença MIT e possui como uma das principais características converter código JavaScript atual em uma versão que o navegador possa executar.

---
### <img src="https://media.giphy.com/media/XwcRflO9HD0Sk6RaRM/giphy.gif" align="center" height="25" width="25"> Definição <style scoped>

### Vai ser usado "style scoped": Quando uma <style> possui o scoped atributo, seu CSS será aplicado apenas aos elementos do componente atual.

- [ style scooped](https://vue-loader.vuejs.org/guide/scoped-css.html)

<br>

   - ## <img src="https://media.giphy.com/media/ImmvDZ2c9xPR8gDvHV/giphy.gif" align="center" height="25" width="25"> Autor

<p>
    <img align=left margin=10 width=80 src="https://avatars.githubusercontent.com/u/87991807?v=4"/>
    <p>&nbsp&nbsp&nbspRafaRz76Dev<br>
    &nbsp&nbsp&nbsp<a href="https://api.whatsapp.com/send/?phone=47999327137">Whatsapp</a>&nbsp;|&nbsp;<a href="https://www.linkedin.com/in/rafael-raizer//">LinkedIn</a>&nbsp;|&nbsp;<a href="https://github.com/RafaRz76Dev">GitHub</a>|&nbsp;<a href="https://public.tableau.com/app/profile/rafael.raizer">Tableau</a>|&nbsp;<a href="https://portifolio-rafarz76dev.netlify.app/">Portfólio</a>&nbsp;</p>
</p>


