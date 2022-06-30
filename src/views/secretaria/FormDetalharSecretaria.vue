<template>
  <div class="container">
    <h1 class="titulo" >Detalhar Secretária</h1>
    <div class="field">
      <div class="control">
        <i>Nome: {{secretaria.nome}}</i>
      </div>
    </div>

    <div class="field">
      <div class="control">
        <i>Telefone: {{secretaria.telefone}}</i>
      </div>
    </div>

    <div class="field">
      <div class="control">
        <i>Celular: {{secretaria.celular}}</i>
      </div>
    </div>

    <div class="field">
      <div class="control">
        <i>Nacionalidade: {{secretaria.nacionalidade}}</i>
      </div>
    </div>

    <div class="field">
      <div class="control">
        <i>CPF: {{secretaria.cpf}}</i>
      </div>
    </div>

    <div class="field">
      <div class="control">
        <i>RG: {{secretaria.rg}}</i>
      </div>
    </div>

    <div class="field">
      <div class="control">
        <i>Email: {{secretaria.email}}</i>
      </div>
    </div>

    <div class="field">
      <div class="control">
        <i>Login: {{secretaria.login}}</i>
      </div>
    </div>

    <div class="field">
      <div class="control">
        <i>Sexo: {{secretaria.sexo}}</i>
      </div>
    </div>

    <div class="field">
      <div class="control">
        <i>Salário: {{secretaria.salario}}</i>
      </div>
    </div>

    <div class="field">
      <div class="control">
        <i>Data Contratação: {{secretaria.dataContratacao}}</i>
      </div>
    </div>

    <div class="field">
      <div class="control">
        <i>PIS: {{secretaria.pis}}</i>
      </div>
    </div>


    <div class="botoes-form">
      <router-link class="link-voltar" to="/secretaria">
        <button class="button btn-voltar">Voltar</button>
      </router-link>
      <button class="button btn-editar" @click="onClickPaginaEditar(secretaria.id)">Editar</button>
      <button class="button btn-desativar">Desativar</button>
    </div>
  </div>
</template>

<script lang="ts">
import { Vue } from 'vue-class-component'
import { Prop } from 'vue-property-decorator'
import { SecretariaClient } from '@/client/secretaria.client'
import { Secretaria } from '@/model/secretaria.model'

export default class SecretariaFormDetalhar extends Vue {
  private secretariaClient!: SecretariaClient
  private secretaria : Secretaria = new Secretaria()
  @Prop({type: Number, required: false})
  private readonly id!: number
  @Prop({type: String, default: false})
  private readonly model!: string
  public mounted(): void {
    this.secretariaClient = new SecretariaClient()
    this.getSecretaria()
  }
  private getSecretaria(): void {
    this.secretariaClient.findById(this.id)
        .then(
            sucess => {
              this.secretaria.id = sucess.id
              this.secretaria.nome = sucess.nome
              this.secretaria.telefone = sucess.telefone
              this.secretaria.celular = sucess.celular
              this.secretaria.nacionalidade = sucess.nacionalidade
              this.secretaria.cpf = sucess.cpf
              this.secretaria.rg = sucess.rg
              this.secretaria.email = sucess.email
              this.secretaria.login = sucess.login
              this.secretaria.senha = sucess.senha
              this.secretaria.sexo = sucess.sexo
              this.secretaria.pis = sucess.pis
              this.secretaria.salario = sucess.salario
              this.secretaria.dataContratacao = sucess.dataContratacao
              this.secretaria.ativo = sucess.ativo
              this.secretaria.cadastro = sucess.cadastro
              this.secretaria.atualizado = sucess.atualizado
            },
            error => console.log(error)
        )
  }
  private onClickPaginaEditar(idSecretaria: number){
    this.$router.push({ name: 'editarSecretaria', params: { id: idSecretaria, model: 'editar' } })
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