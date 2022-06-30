<template>
  <div class="container">
    <h1 class="titulo" >Detalhar Especialidade</h1>

    <div class="dados-detalhar">
        <i>Nome: {{especialidade.nome}}</i>
      <i class="status">
        Status: &nbsp;
        <i v-if="especialidade.ativo" style="color: limegreen"> Ativo</i>
        <i v-if="!especialidade.ativo" style="color: red;"> Inativo</i>
      </i>
    </div>

    <div class="botoes-form">
      <router-link class="link-voltar" to="/especialidade">
        <button class="button btn-voltar">Voltar</button>
      </router-link>
      <button class="button btn-editar" @click="onClickPaginaEditar(especialidade.id)">Editar</button>
      <button class="button btn-desativar">Desativar</button>
    </div>
  </div>
</template>

<script lang="ts">
import { Vue } from 'vue-class-component'
import { Prop } from 'vue-property-decorator'
import { EspecialidadeClient } from '@/client/especialidade.client'
import { Especialidade } from '@/model/especialidade.model'

export default class EspecialidadeFormDetalhar extends Vue {
  private especialidadeClient!: EspecialidadeClient
  private especialidade : Especialidade = new Especialidade()

  @Prop({type: Number, required: false})
  private readonly id!: number
  @Prop({type: String, default: false})
  private readonly model!: string

  public mounted(): void {
    this.especialidadeClient = new EspecialidadeClient()
    this.getEspecialidade()
  }

  private getEspecialidade(): void {
    this.especialidadeClient.findById(this.id)
        .then(
            sucess => {
              this.especialidade.id = sucess.id
              this.especialidade.nome = sucess.nome
              this.especialidade.ativo = sucess.ativo
              this.especialidade.cadastro = sucess.cadastro
              this.especialidade.atualizado = sucess.atualizado
            },
            error => console.log(error)
        )
  }

  private onClickPaginaEditar(idEspecialidade: number){
    this.$router.push({ name: 'editarEspecialidade', params: { id: idEspecialidade, model: 'editar' } })
  }
}
</script>

<style lang="scss">
@import "~bulma/bulma.sass";
.container{
  margin-left: 30px;
  width: 80%;
}
.titulo{
  display: flex;
  justify-content: center;
  font-size: 30px;
}
.dados-detalhar{
  display: flex;
  flex-direction: column;
  font-size: 20px;
}
.status{
  display: flex;
  flex-direction: row;
}
.botoes-form{
  display: flex;
  justify-content: space-between;
  flex-direction: row;
  width: 100%;
  margin-top: 20px;
  margin-block-end: 20px;
}
.btn-editar{
  background-color: blue;
  color: white;
  width: 30%;
}
.link-voltar{
  width: 30%;
}
.btn-voltar{
  background-color: dimgrey;
  color: white;
  width: 100%;
}
.btn-desativar{
  background-color: red;
  color: white;
  width: 30%;
}
</style>