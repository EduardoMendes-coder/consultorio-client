<template>
  <div class="columns">
    <div class="column is-12 is-size-3">
      Editar Especialidade
    </div>
  </div>

  <hr />

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
        <input v-model="especialidade.ativo" checked type="checkbox">
        Ativar Especialidade
      </label>
    </div>
  </div>

  <div class="columns">
    <div class="column is-12 is-size-3">
      <label class="label">Nome</label>
      <div class="control">
        <input class="input is-primary" type="text" v-model="especialidade.nome" placeholder="Nome da Especialidade">
      </div>
    </div>
  </div>

  <hr />

  <div class="columns">
    <div class="column is-8"></div>
    <div class="column is-2">
      <router-link class="link-cad" to="/especialidade">
        <button class="button is-danger btn-voltar">Voltar</button>
      </router-link>
    </div>
    <div class="column is-2">
      <button class="button is-fullwidth is-success" @click="onClickEditar()">Salvar</button>
    </div>
  </div>
</template>

<script lang="ts">
import { Vue } from 'vue-class-component';
import { Especialidade } from '@/model/especialidade.model'
import { Notification } from '@/model/notification'
import { EspecialidadeClient } from '@/client/especialidade.client'
import {Prop} from "vue-property-decorator";

export default class EspecialidadeFormEditar extends Vue {
  private especialidadeClient!: EspecialidadeClient
  private especialidade : Especialidade = new Especialidade()
  private notification : Notification = new Notification()

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

  private onClickEditar(): void {
    this.especialidadeClient.editar(this.especialidade)
        .then(
            success => {
              this.notification = this.notification.new(true, 'notification is-success', 'Especialidade Editada com sucesso!!!')
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
    this.especialidade = new Especialidade()
  }
}
</script>

<style lang="scss">
.btn-voltar{
  width: 100%;
}
</style>

