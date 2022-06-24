<template>
  <div class="container">
    <h1 class="titulo" >Lista de Pacientes</h1>
    <div class="control">
      <input class="input" type="busca-paciente" placeholder="Buscar Paciente">

      <router-link class="link-cad" to="/paciente/cadastrar">
        <button class="button btn-cadastrar">Cadastrar</button>
      </router-link>

    </div>
    <div class="table-pacientes">
      <table class="table">
        <thead>
        <tr>
          <th>Id</th>
          <th>Nome</th>
          <th>Tipo Atendimento</th>
          <th>N° Cartão Convênio</th>
          <th>Data Vencimento</th>
          <th>Convênio</th>
          <th>Celular</th>
          <th>Opções</th>
        </tr>
        </thead>
        <tbody>
        <tr>
          <th>1</th>
          <td>Jorge Heith</td>
          <td>convênio</td>
          <td>45545454</td>
          <td>21/03/2025</td>
          <td>Unimed</td>
          <td>(45)99856-8742</td>
          <td>
            <button class="button is-info">Detalhar</button>
          </td>
        </tr>
        <tr>
          <th>2</th>
          <td>Alberto Plack</td>
          <td>particular</td>
          <td>Não possui</td>
          <td>Não possui</td>
          <td>Não possui</td>
          <td>(45)99856-4354</td>
          <td>
            <button class="button is-info">Detalhar</button>
          </td>
        </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<script>
export default {
  name: "paciente"
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
.table-pacientes{
  margin-top: 60px;
}
.table{
  width: 91.4%;
  border-style: solid;
  border-color: darkgrey;
  border-width: 1px;

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