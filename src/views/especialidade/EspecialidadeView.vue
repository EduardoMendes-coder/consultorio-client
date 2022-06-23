<template>
  <div class="container">
    <h1 class="titulo" >Lista de Especialidades</h1>
    <div class="control">
      <input class="input" type="nome-especialidade" placeholder="Buscar Especialidade">
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
.control{
  margin-top: 20px;
  width: 60%;
}
</style>