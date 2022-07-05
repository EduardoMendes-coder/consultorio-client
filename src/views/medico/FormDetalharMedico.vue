<template>
  <div class="container">
    <h1 class="titulo" >Detalhar Médico</h1>
    <div class="field">
      <div class="control">
        <i>Nome: {{medico.nome}}</i>
      </div>
    </div>

    <div class="field">
      <div class="control">
        <i>Telefone: {{medico.telefone}}</i>
      </div>
    </div>

    <div class="field">
      <div class="control">
        <i>Celular: {{medico.celular}}</i>
      </div>
    </div>

    <div class="field">
      <div class="control">
        <i>Nacionalidade: {{medico.nacionalidade}}</i>
      </div>
    </div>

    <div class="field">
      <div class="control">
        <i>CPF: {{medico.cpf}}</i>
      </div>
    </div>

    <div class="field">
      <div class="control">
        <i>RG: {{medico.rg}}</i>
      </div>
    </div>

    <div class="field">
      <div class="control">
        <i>E-mail: {{medico.email}}</i>
      </div>
    </div>

    <div class="field">
      <div class="control">
        <i>Login: {{medico.login}}</i>
      </div>
    </div>

    <div class="field">
      <div class="control">
        <i>Sexo: {{medico.sexo}}</i>
      </div>
    </div>

    <div class="field">
      <div class="control">
        <i>CRM: {{medico.crm}}</i>
      </div>
    </div>

    <div class="field">
      <div class="control">
        <i>Consultório: {{medico.consultorio}}</i>
      </div>
    </div>

    <div class="field">
      <div class="control">
        <i>Porcentagem de Participação: {{medico.porcentagemParticipacao}}</i>
      </div>
    </div>

    <div class="field">
      <div class="control">
        <i>Valor da Consulta: {{medico.valorConsulta}}</i>
      </div>
    </div>

    <div class="field">
      <div class="control">
        <i>Especialidade: {{medico.especialidade}}</i>
      </div>
    </div>

    <div class="botoes-form">
      <router-link class="link-voltar" to="/medico">
        <button class="button btn-voltar">Voltar</button>
      </router-link>
      <button @click="onClickPaginaEditar(medico.id)" class="button btn-editar">Editar</button>
      <button class="button btn-desativar" @click="desativarMedico(medico)">Desativar</button>
    </div>
  </div>
</template>

  <script lang="ts">
  import { Vue } from 'vue-class-component'
  import { Prop } from 'vue-property-decorator'
  import { MedicoClient } from '@/client/medico.client'
  import { Medico } from '@/model/medico.model'
  import {Paciente} from "@/model/paciente.model";
  export default class MedicoFormDetalhar extends Vue {
    private medicoClient!: MedicoClient
    private medico : Medico = new Medico()
    @Prop({type: Number, required: false})
    private readonly id!: number
    @Prop({type: String, default: false})
    private readonly model!: string
    public mounted(): void {
      this.medicoClient = new MedicoClient()
      this.getMedico()
    }
    private getMedico(): void {
      this.medicoClient.findById(this.id)
          .then(
              sucess => {
                this.medico.id = sucess.id
                this.medico.nome = sucess.nome
                this.medico.telefone = sucess.telefone
                this.medico.celular = sucess.celular
                this.medico.nacionalidade = sucess.nacionalidade
                this.medico.cpf = sucess.cpf
                this.medico.rg = sucess.rg
                this.medico.email = sucess.email
                this.medico.login = sucess.login
                this.medico.senha = sucess.senha
                this.medico.sexo = sucess.sexo
                this.medico.crm = sucess.crm
                this.medico.consultorio = sucess.consultorio
                this.medico.especialidade = sucess.especialidade
                this.medico.valorConsulta = sucess.valorConsulta
                this.medico.porcentagemParticipacao = sucess.porcentagemParticipacao
                this.medico.ativo = sucess.ativo
                this.medico.cadastro = sucess.cadastro
                this.medico.atualizado = sucess.atualizado
              },
              error => console.log(error)
          )
    }

    private desativarMedico(medico: Medico){
      this.medicoClient.desativar(medico)
    }

    private onClickPaginaEditar(idMedico: number){
      this.$router.push({ name: 'editarMedico', params: { id: idMedico, model: 'editar' } })
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