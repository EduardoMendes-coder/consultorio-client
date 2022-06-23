<template>
  <div class="container">
    <h1 class="titulo" >Lista de Médicos</h1>
    <div class="control">
      <input class="input" type="busca-medico" placeholder="Buscar Médico">
      <button class="button btn-cadastrar">Cadastrar</button>
    </div>
    <div class="table-medicos">
      <table class="table">
        <thead>
        <tr>
          <th>Id</th>
          <th>Nome</th>
          <th>CRM</th>
          <th>Especialidade</th>
          <th>% Participação</th>
          <th>Valor Consulta</th>
          <th>Email</th>
          <th>Celular</th>
        </tr>
        </thead>
        <tbody>
        <tr>
          <th>1</th>
          <td>Marcelo Alber</td>
          <td>38124587</td>
          <td>Pediatra</td>
          <td>15</td>
          <td>220,00</td>
          <td>marcelo-alber2@gmail.com</td>
          <td>(45)99856-2423</td>
        </tr>
        <tr>
          <th>2</th>
          <td>Yuuta Okkutsu</td>
          <td>45547854</td>
          <td>Cardiologista</td>
          <td>20</td>
          <td>250,00</td>
          <td>yuutaokkutsu@gmail.com</td>
          <td>(45)99987-4523</td>
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
.table-medicos{
  margin-top: 60px;
}
.table{
  width: 91.4%;
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