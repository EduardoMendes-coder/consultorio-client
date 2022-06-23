<template>
  <div class="container">
    <h1 class="titulo" >Lista de Secretárias</h1>
    <div class="control">
      <input class="input" type="busca-secretaria" placeholder="Buscar Secretária">
      <button class="button btn-cadastrar">Cadastrar</button>
    </div>
    <div class="table-secretarias">
      <table class="table">
        <thead>
        <tr>
          <th>Id</th>
          <th>Nome</th>
          <th>Salário</th>
          <th>Data Contratação</th>
          <th>PIS</th>
          <th>Celular</th>
          <th>Opções</th>
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
        </tr>
        <tr>
          <th>2</th>
          <td>Raze bombinho</td>
          <td>2800,00</td>
          <td>12/04/2019</td>
          <td>89124823</td>
          <td>(45)99851-2345</td>
        </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<script>
export default {
  name: "medico"
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
  border-style: solid;
  border-color: darkgrey;
  border-width: 1px;
}
.btn-cadastrar{
  width: 30%;
  margin-left: 20px;
  background-color: green;
  color: white;
}
.control{
  display: flex;
  margin-top: 20px;
  width: 100%;
  flex-direction: row;
}
</style>