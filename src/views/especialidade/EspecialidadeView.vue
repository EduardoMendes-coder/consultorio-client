<template>
  <div class="container">
    <h1 class="titulo" >Lista de Especialidades</h1>
    <div class="control">
      <input class="input" type="nome-especialidade" placeholder="Buscar Especialidade">
      <button class="button btn-cadastrar">Cadastrar</button>
    </div>
  </div>
</template>

<script>
export default {
  name: "especialidade"
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