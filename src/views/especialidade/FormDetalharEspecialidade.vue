<template>
  <div class="container">
    <h1 class="titulo" >Detalhar Especialidade</h1>
    <div class="field">
      <label class="label">Nome</label>
      <div class="control">
        <input class="input" type="text" placeholder="nome" >
      </div>
    </div>

    <div class="botoes-form">
      <router-link class="link-voltar" to="/especialidade">
        <button class="button btn-voltar">Voltar</button>
      </router-link>
      <button class="button btn-editar">Editar</button>
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
    console.log(this.id)
    console.log(this.model)
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
            }
        )
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
.enums{
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  margin-block-end: 20px;
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