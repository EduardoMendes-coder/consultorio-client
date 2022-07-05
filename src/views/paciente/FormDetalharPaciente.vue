<template>
  <div class="container">
    <h1 class="titulo" >Detalhar Paciente</h1>
    <div class="field">
      <div class="control">
        <i>Nome : {{paciente.nome}}</i>
      </div>
    </div>

    <div class="field">
      <div class="control">
        <i>Telefone: {{paciente.telefone}}</i>
      </div>
    </div>

    <div class="field">
      <div class="control">
        <i>Celular: {{paciente.celular}}</i>
      </div>
    </div>

    <div class="field">
      <div class="control">
        <i>Nacionalidade: {{paciente.nacionalidade}}</i>
      </div>
    </div>

    <div class="field">
      <div class="control">
        <i>CPF: {{paciente.cpf}}</i>
      </div>
    </div>

    <div class="field">
      <div class="control">
        <i>RG: {{paciente.rg}}</i>
      </div>
    </div>

    <div class="field">
      <div class="control">
        <i>E-mail: {{paciente.email}}</i>
      </div>
    </div>

    <div class="field">
      <div class="control">
        <i>Login: {{paciente.login}}</i>
      </div>
    </div>

    <div class="field">
      <div class="control">
        <i>Sexo: {{paciente.sexo}}</i>
      </div>
    </div>

    <div class="field">
      <div class="control">
        <i>Tipo de Atendimento: {{paciente.tipoAtendimento}}</i>
      </div>
    </div>

    <div class="field">
      <div class="control">
        <i>N° Cartão Convênio: {{paciente.numeroCartaoConvenio}}</i>
      </div>
    </div>

    <div class="field">
      <div class="control">
        <i>Data de Vencimento: {{paciente.dataVencimento}}</i>
      </div>
    </div>

    <div class="field">
      <div class="control">
        <i>Convênio: {{paciente.convenio}}</i>
      </div>
    </div>

    <div class="botoes-form">
      <router-link class="link-voltar" to="/paciente">
        <button class="button btn-voltar">Voltar</button>
      </router-link>
      <button class="button btn-editar" @click="onClickPaginaEditar(paciente.id)">Editar</button>
      <button class="button btn-desativar" @click="desativarPaciente(paciente)">Desativar</button>
    </div>
  </div>
</template>

  <script lang="ts">
  import { Vue } from 'vue-class-component'
  import { Prop } from 'vue-property-decorator'
  import { PacienteClient } from '@/client/paciente.client'
  import { Paciente } from '@/model/paciente.model'
  import {Especialidade} from "@/model/especialidade.model";
  export default class PacienteFormDetalhar extends Vue {
    private pacienteClient!: PacienteClient
    private paciente : Paciente = new Paciente()
    @Prop({type: Number, required: false})
    private readonly id!: number
    @Prop({type: String, default: false})
    private readonly model!: string
    public mounted(): void {
      this.pacienteClient = new PacienteClient()
      this.getPaciente()
    }
    private getPaciente(): void {
      this.pacienteClient.findById(this.id)
          .then(
              sucess => {
                this.paciente.id = sucess.id
                this.paciente.nome = sucess.nome
                this.paciente.telefone = sucess.telefone
                this.paciente.celular = sucess.celular
                this.paciente.nacionalidade = sucess.nacionalidade
                this.paciente.cpf = sucess.cpf
                this.paciente.rg = sucess.rg
                this.paciente.email = sucess.email
                this.paciente.login = sucess.login
                this.paciente.senha = sucess.senha
                this.paciente.sexo = sucess.sexo
                this.paciente.tipoAtendimento = sucess.tipoAtendimento
                this.paciente.numeroCartaoConvenio = sucess.numeroCartaoConvenio
                this.paciente.dataVencimento = sucess.dataVencimento
                this.paciente.convenio = sucess.convenio
                this.paciente.ativo = sucess.ativo
                this.paciente.cadastro = sucess.cadastro
                this.paciente.atualizado = sucess.atualizado
              },
              error => console.log(error)
          )
    }

    private desativarPaciente(paciente: Paciente){
      this.pacienteClient.desativar(paciente)
    }

    private onClickPaginaEditar(idPaciente: number){
      this.$router.push({ name: 'editarPaciente', params: { id: idPaciente, model: 'editar' } })
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
.enum-tipo-atendimento{
  margin-left: 40px;
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