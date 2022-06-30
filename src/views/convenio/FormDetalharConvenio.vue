<template>
  <div class="container">
    <h1 class="titulo" >Detalhar Convênio</h1>

    <div class="dados-detalhar-conv">
      <i>Id: {{convenio.id}}</i>
      <i>Nome: {{convenio.nome}}</i>
      <i class="status">
        Status: &nbsp;
        <i v-if="convenio.ativo" style="color: limegreen"> Ativo</i>
        <i v-if="!convenio.ativo" style="color: red;"> Inativo</i>
      </i>
      <i>Valor do Convênio: {{convenio.valor}}</i>
    </div>

    <div class="botoes-form">
      <router-link class="link-voltar" to="/convenio">
        <button class="button btn-voltar">Voltar</button>
      </router-link>
      <button class="button btn-editar" @click="onClickPaginaEditar(convenio.id)">Editar</button>
      <button class="button btn-desativar">Desativar</button>
    </div>
  </div>
</template>

<script lang="ts">
import { Vue } from 'vue-class-component'
import { Prop } from 'vue-property-decorator'
import { ConvenioClient } from '@/client/convenio.client'
import { Convenio } from '@/model/convenio.model'

export default class ConvenioFormDetalhar extends Vue {
  private convenioClient!: ConvenioClient
  private convenio : Convenio = new Convenio()

  @Prop({type: Number, required: false})
  private readonly id!: number
  @Prop({type: String, default: false})
  private readonly model!: string

  public mounted(): void {
    this.convenioClient = new ConvenioClient()
    this.getConvenio()
    console.log(this.id)
    console.log(this.model)
  }

  private getConvenio(): void {
    this.convenioClient.findById(this.id)
        .then(
            sucess => {
              this.convenio.id = sucess.id
              this.convenio.nome = sucess.nome
              this.convenio.valor = sucess.valor
              this.convenio.ativo = sucess.ativo
              this.convenio.cadastro = sucess.cadastro
              this.convenio.atualizado = sucess.atualizado
            },
            error => console.log(error)
        )
  }

  private onClickPaginaEditar(idConvenio: number){
    this.$router.push({ name: 'editarConvenio', params: { id: idConvenio, model: 'editar' } })
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
.dados-detalhar-conv{
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