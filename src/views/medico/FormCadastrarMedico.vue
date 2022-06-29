<template>
  <div class="container">
    <h1 class="titulo" >Cadastrar Médico</h1>

    <div class="columns" v-if="notification.ativo">
      <div class="column is-12">
        <div :class="notification.classe">
          <button @click="onClickFecharNotificacao()" class="delete" ></button>
          {{ notification.mensagem }}
        </div>
      </div>
    </div>

    <div class="columns">
      <div class="column is-12 is-size-3">
        <label class="label">
          <input v-model="medico.ativo" checked type="checkbox">
          Ativar Médico
        </label>
      </div>
    </div>

    <div class="field">
      <label class="label">Nome</label>
      <div class="control">
        <input class="input" type="text" v-model="medico.nome" placeholder="nome">
      </div>
    </div>

    <div class="field">
      <label class="label">Telefone</label>
      <div class="control">
        <input class="input" type="number" v-model="medico.telefone" placeholder="telefone">
      </div>
    </div>

    <div class="field">
      <label class="label">Celular</label>
      <div class="control">
        <input class="input" type="number" v-model="medico.celular" placeholder="celular">
      </div>
    </div>

    <div class="field">
      <label class="label">Nacionalidade</label>
      <div class="control">
        <input class="input" type="text" v-model="medico.nacionalidade" placeholder="nacionalidade">
      </div>
    </div>

    <div class="field">
      <label class="label">CPF</label>
      <div class="control">
        <input class="input" type="number" v-model="medico.cpf" placeholder="cpf">
      </div>
    </div>

    <div class="field">
      <label class="label">RG</label>
      <div class="control">
        <input class="input" type="number" v-model="medico.rg" placeholder="rg">
      </div>
    </div>

    <div class="field">
      <label class="label">Email</label>
      <div class="control">
        <input class="input" type="email" v-model="medico.email" placeholder="e-mail">
      </div>
    </div>

    <div class="field">
      <label class="label">Login</label>
      <div class="control">
        <input class="input" type="text" v-model="medico.login" placeholder="login">
      </div>
    </div>

    <div class="field">
      <label class="label">Senha</label>
      <div class="control">
        <input class="input" type="password" v-model="medico.senha" placeholder="senha">
      </div>
    </div>

    <div class="enums">
      <div class="enum-sexo">
        <label class="label">Sexo</label>
        <div class="control">
          <div class="select">
            <select v-model="medico.sexo">
              <option>masculino</option>
              <option>feminino</option>
              <option>outro</option>
            </select>
          </div>
        </div>
      </div>
    </div>

    <div class="field">
      <label class="label">CRM</label>
      <div class="control">
        <input class="input" type="number" v-model="medico.crm" placeholder="crm">
      </div>
    </div>

    <div class="field">
      <label class="label">Consultório</label>
      <div class="control">
        <input class="input" type="text" v-model="medico.consultorio" placeholder="consultorio">
      </div>
    </div>

    <div class="field">
      <label class="label">Porcentagem de Participação</label>
      <div class="control">
        <input class="input" type="number" v-model="medico.porcentagemParticipacao" placeholder="% de participação">
      </div>
    </div>

    <div class="field">
      <label class="label">Valor Consulta</label>
      <div class="control">
        <input class="input" type="number" v-model="medico.valorConsulta" placeholder="valor consulta">
      </div>
    </div>

    <div class="field">
      <label class="label">ID da Especialidade</label>
      <div class="control">
        <input class="input" type="number" v-model="medico.especialidade" placeholder="especialidade">
      </div>
    </div>

    <div class="botoes-form">
      <router-link class="link-cad" to="/medico">
        <button class="button btn-voltar">Voltar</button>
      </router-link>
      <button class="button btn-salvar" @click="onClickCadastrar()">Salvar</button>
    </div>
  </div>
</template>

<script lang="ts">
import { Vue } from 'vue-class-component';
import { Medico } from '@/model/medico.model'
import { Notification } from '@/model/notification'
import { MedicoClient } from '@/client/medico.client'

export default class MedicoForm extends Vue {
  private medicoClient!: MedicoClient
  private medico : Medico = new Medico()
  private notification : Notification = new Notification()

  public mounted(): void {
    this.medicoClient = new MedicoClient()
  }

  private onClickCadastrar(): void {
    this.medicoClient.cadastrar(this.medico)
        .then(
            success => {
              this.notification = this.notification.new(true, 'notification is-success', 'Médico Cadastrado com sucesso!!!')
              this.onClickLimpar()
            }, error => {
              this.notification = this.notification.new(true, 'notification is-danger', 'Error: ' + error)
              this.onClickLimpar()
            })
  }
  private onClickFecharNotificacao(): void {
    this.notification = new Notification()
  }
  private onClickLimpar(): void {
    this.medico = new Medico()
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
.btn-salvar{
  background-color: green;
  color: white;
  width: 40%;
}
.link-cad{
  width: 40%;
}
.btn-voltar{
  background-color: red;
  color: white;
  width: 100%;
}

</style>