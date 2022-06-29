<template>
  <div class="container">
    <h1 class="titulo" >Cadastrar Paciente</h1>

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
          <input v-model="paciente.ativo" checked type="checkbox">
          Ativar Paciente
        </label>
      </div>
    </div>

    <div class="field">
      <label class="label">Nome</label>
      <div class="control">
        <input class="input" type="text" v-model="paciente.nome" placeholder="nome">
      </div>
    </div>

    <div class="field">
      <label class="label">Telefone</label>
      <div class="control">
        <input class="input" type="number" v-model="paciente.telefone" placeholder="telefone">
      </div>
    </div>

    <div class="field">
      <label class="label">Celular</label>
      <div class="control">
        <input class="input" type="number" v-model="paciente.celular" placeholder="celular">
      </div>
    </div>

    <div class="field">
      <label class="label">Nacionalidade</label>
      <div class="control">
        <input class="input" type="text" v-model="paciente.nacionalidade" placeholder="nacionalidade">
      </div>
    </div>

    <div class="field">
      <label class="label">CPF</label>
      <div class="control">
        <input class="input" type="number" v-model="paciente.cpf" placeholder="cpf">
      </div>
    </div>

    <div class="field">
      <label class="label">RG</label>
      <div class="control">
        <input class="input" type="number" v-model="paciente.rg" placeholder="rg">
      </div>
    </div>

    <div class="field">
      <label class="label">Email</label>
      <div class="control">
        <input class="input" type="email" v-model="paciente.email" placeholder="e-mail">
      </div>
    </div>

    <div class="field">
      <label class="label">Login</label>
      <div class="control">
        <input class="input" type="text" v-model="paciente.login" placeholder="login">
      </div>
    </div>

    <div class="field">
      <label class="label">Senha</label>
      <div class="control">
        <input class="input" type="password" v-model="paciente.senha" placeholder="senha">
      </div>
    </div>

    <div class="enums">
      <div class="enum-sexo">
        <label class="label">Sexo</label>
        <div class="control">
          <div class="select">
            <select v-model="paciente.sexo">
              <option>masculino</option>
              <option>feminino</option>
              <option>outro</option>
            </select>
          </div>
        </div>
      </div>
      <div class="enum-tipo-atendimento">
        <label class="label">Tipo Atendimento</label>
        <div class="control">
          <div class="select">
            <select v-model="paciente.tipoAtendimento">
              <option>convenio</option>
              <option>particular</option>
            </select>
          </div>
        </div>
      </div>
    </div>

    <div class="field">
      <label class="label">N° Cartão Convênio</label>
      <div class="control">
        <input class="input" type="number" v-model="paciente.numeroCartaoConvenio" placeholder="n° cartão convênio">
      </div>
    </div>

    <div class="field">
      <label class="label">Data Vencimento</label>
      <div class="control">
        <input class="input" type="datetime-local" v-model="paciente.dataVencimento" placeholder="data vencimento">
      </div>
    </div>

    <div class="field">
      <label class="label">Convênio</label>
      <div class="control">
        <input class="input" type="text" v-model="paciente.convenio" placeholder="convênio">
      </div>
    </div>

    <div class="botoes-form">
      <router-link class="link-cad" to="/paciente">
        <button class="button btn-voltar">Voltar</button>
      </router-link>
      <button class="button btn-salvar" @click="onClickCadastrar()">Salvar</button>
    </div>
  </div>
</template>

<script lang="ts">
import { Vue } from 'vue-class-component';
import { Paciente } from '@/model/paciente.model'
import { Notification } from '@/model/notification'
import { PacienteClient } from '@/client/paciente.client'

export default class PacienteForm extends Vue {
  private pacienteClient!: PacienteClient
  private paciente : Paciente = new Paciente()
  private notification : Notification = new Notification()

  public mounted(): void {
    this.pacienteClient = new PacienteClient()
  }

  private onClickCadastrar(): void {
    this.pacienteClient.cadastrar(this.paciente)
        .then(
            success => {
              this.notification = this.notification.new(true, 'notification is-success', 'Paciente Cadastrado com sucesso!!!')
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
    this.paciente = new Paciente()
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