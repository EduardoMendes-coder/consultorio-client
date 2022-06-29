<template>
  <div class="container">
    <h1 class="titulo" >Lista de Secretárias</h1>
    <div class="control">
      <input class="input" type="busca-secretaria" placeholder="Buscar Secretária">

      <router-link class="link-cad" to="/secretaria/cadastrar">
        <button class="button btn-cadastrar">Cadastrar</button>
      </router-link>

    </div>
    <div class="table-secretarias">
      <table class="table">
        <thead>
        <tr>
          <th style="background-color: mediumpurple;">Id</th>
          <th style="background-color: mediumpurple;">Nome</th>
          <th style="background-color: mediumpurple;">Salário</th>
          <th style="background-color: mediumpurple;">Data Contratação</th>
          <th style="background-color: mediumpurple;">PIS</th>
          <th style="background-color: mediumpurple;">Celular</th>
          <th style="background-color: mediumpurple;">Opções</th>
        </tr>
        </thead>
        <tbody>
        <tr>
          <th>1</th>
          <td>Lia okkutsa</td>
          <td>2800,00</td>
          <td>12/04/2019</td>
          <td>89124823</td>
          <td>(45)99851-2345</td>
          <td>
            <router-link to="/secretaria/detalhar">
              <button class="button is-info">Detalhar</button>
            </router-link>
          </td>
        </tr>
        <tr>
          <th>2</th>
          <td>Raze bombinho</td>
          <td>2800,00</td>
          <td>12/04/2019</td>
          <td>89124823</td>
          <td>(45)99851-2345</td>
          <td>
            <router-link to="/secretaria/detalhar">
              <button class="button is-info">Detalhar</button>
            </router-link>
          </td>
        </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<script>
export default {
  name: "secretaria"
}
</script>

<style lang="scss">
@import "~bulma/bulma.sass";
.titulo{
  font-size: 30px;
  margin-top: 0px;
  margin-outside: 10px;
}
.input{
  width: 60%;
}
.table-secretarias{
  margin-top: 60px;
}
.table{
  width: 91.4%;
}
.link-cad{
  width: 30%;
}
.btn-cadastrar{
  width: 100%;
  height: 100%;
  margin-left: 20px;
  background-color: green;
  color: white;
  border-radius: 5px;
  border-width: 0px;
  font-size: 17px;
}
.control{
  display: flex;
  margin-top: 20px;
  width: 100%;
  flex-direction: row;
}
</style>