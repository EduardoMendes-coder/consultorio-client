<template>
  <div class="container">
    <h1 class="titulo" >Lista de Especialidades</h1>
    <div class="control">
      <input class="input" type="nome-especialidade" placeholder="Buscar Especialidade">

      <router-link class="link-cad" to="/especialidade/cadastrar">
        <button class="button btn-cadastrar">Cadastrar</button>
      </router-link>

    </div>
    <div class="table-especialidade">
      <table class="table">
        <thead>
        <tr>
          <th style="background-color: mediumpurple;">Id</th>
          <th style="background-color: mediumpurple;">Nome</th>
          <th style="background-color: mediumpurple;">Opções</th>
        </tr>
        </thead>
        <tbody>
          <tr v-for="item in especialidadeList" :key="item.id">
            <th>{{ item.id }}</th>

            <th>
              <span v-if="item.ativo" class="tag is-success"> Ativo </span>
              <span v-if="!item.ativo" class="tag is-danger"> Inativo </span>
            </th>

            <th>{{ item.nome }}</th>
            <th> <button class="button is-small is-warning"> Detalhar </button> </th>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<script  lang="ts">
  import { Vue } from 'vue-class-component';

  import { PageRequest } from '@/model/page/page-request'
  import { PageResponse } from '@/model/page/page-response'

  import { Especialidade } from '@/model/especialidade.model'
  import { EspecialidadeClient } from '@/client/especialidade.client'

  export default class EspecialidadeList extends Vue {
    private pageRequest: PageRequest = new PageRequest()
    private pageResponse: PageResponse<Especialidade> = new PageResponse()
    private especialidadeList: Especialidade[] = []
    private especialidadeClient!: EspecialidadeClient
    public mounted(): void {
      this.especialidadeClient = new EspecialidadeClient()
      this.listarEspecialidade()
    }
    private listarEspecialidade(): void {
      this.especialidadeClient.findByFiltrosPaginado(this.pageRequest)
          .then(
              success => {
                this.pageResponse = success
                this.especialidadeList = this.pageResponse.content
              },
              error => console.log(error)
          )
    }
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
.table-especialidade{
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