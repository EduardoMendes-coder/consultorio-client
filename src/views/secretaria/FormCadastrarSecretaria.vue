<template>
  <div class="container">
    <h1 class="titulo" >Cadastrar Secretária</h1>

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
          <input v-model="secretaria.ativo" checked type="checkbox">
          Ativar Secretária
        </label>
      </div>
    </div>

    <div class="field">
      <label class="label">Nome</label>
      <div class="control">
        <input class="input" type="text" v-model="secretaria.nome" placeholder="nome">
      </div>
    </div>

    <div class="divisoes contato">
      <div class="column is-4 is-size-4">
        <label class="label">Telefone</label>
        <div class="control">
          <input class="input" type="number" v-model="secretaria.telefone" placeholder="telefone">
        </div>
      </div>

      <div class="column is-4 is-size-4">
        <label class="label">Celular</label>
        <div class="control">
          <input class="input" type="number" v-model="secretaria.celular" placeholder="celular">
        </div>
      </div>

      <div class="column is-4 is-size-4">
        <label class="label">Nacionalidade</label>
        <div class="control">
          <input class="input" type="text" v-model="secretaria.nacionalidade" placeholder="nacionalidade">
        </div>
      </div>
    </div>

    <div class="divisoes container-docs">
      <div class="column is-6 is-size-6">
        <label class="label">CPF</label>
        <div class="control">
          <input class="input" type="number" v-model="secretaria.cpf" placeholder="cpf">
        </div>
      </div>

      <div class="column is-6 is-size-6">
        <label class="label">RG</label>
        <div class="control">
          <input class="input" type="number" v-model="secretaria.rg" placeholder="rg">
        </div>
      </div>
    </div>

      <label class="label">Email</label>
      <div class="control">
        <input class="input" type="email" v-model="secretaria.email" placeholder="e-mail">
      </div>

    <div class="divisoes container-acesso">
      <div class="column is-6 is-size-6">
        <label class="label">Login</label>
        <div class="control">
          <input class="input" type="text" v-model="secretaria.login" placeholder="login">
        </div>
      </div>

      <div class="column is-6 is-size-6">
        <label class="label">Senha</label>
        <div class="control">
          <input class="input" type="password" v-model="secretaria.senha" placeholder="senha">
        </div>
      </div>
    </div>

    <div class="divisoes info-func">
      <div class="column is-3 is-size-3">
        <div class="enum-sexo">
          <label class="label">Sexo</label>
          <div class="control">
            <div class="select">
              <select v-model="secretaria.sexo">
                <option>masculino</option>
                <option>feminino</option>
                <option>outro</option>
              </select>
            </div>
          </div>
        </div>
      </div>

      <div class="column is-3 is-size-3">
        <div class="field">
          <label class="label">Salário</label>
          <div class="control">
            <input class="input" type="number" v-model="secretaria.salario" placeholder="salário">
          </div>
        </div>
      </div>

      <div class="column is-6 is-size-6">
        <div class="field">
          <label class="label">Data de Contratação</label>
          <div class="control">
            <input class="input" type="datetime-local" v-model="secretaria.dataContratacao" placeholder="data de contratação">
          </div>
        </div>
      </div>
    </div>

    <div class="column is-3 is-size-3">
      <div class="field">
        <label class="label">PIS</label>
        <div class="control">
          <input class="input" type="text" v-model="secretaria.pis" placeholder="pis">
        </div>
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
import { Notification } from '@/model/notification'
import {SecretariaClient} from "@/client/secretaria.client";
import {Secretaria} from "@/model/secretaria.model";

export default class SecretariaForm extends Vue {
  private secretariaClient!: SecretariaClient
  private secretaria : Secretaria = new Secretaria()
  private notification : Notification = new Notification()

  public mounted(): void {
    this.secretariaClient = new SecretariaClient()
  }

  private onClickCadastrar(): void {
    this.secretariaClient.cadastrar(this.secretaria)
        .then(
            success => {
              this.notification = this.notification.new(true, 'notification is-success', 'Secretário(a) Cadastrado com sucesso!!!')
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
    this.secretaria = new Secretaria()
  }
}
</script>

<style lang="scss">
@import "~bulma/bulma.sass";
.container{
  margin-left: 30px;
  width: 80%;
}
.divisoes{
  display: flex;
  flex-direction: row;
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