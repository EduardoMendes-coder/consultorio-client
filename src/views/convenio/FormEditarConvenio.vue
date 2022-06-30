<template>
  <div class="columns">
    <div class="column is-12 is-size-3">
      Editar Convênio
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
        <input v-model="convenio.ativo" checked type="checkbox">
        Ativar Convênio
      </label>
    </div>
  </div>

  <div class="columns">
    <div class="column is-12 is-size-3">
      <label class="label">Nome</label>
      <div class="control">
        <input class="input is-primary" type="text" v-model="convenio.nome" placeholder="Nome da Especialidade">
      </div>
    </div>
  </div>

  <div class="field">
    <label class="label">Valor</label>
    <div class="control">
      <input class="input is-primary" type="number" v-model="convenio.valor" placeholder="Valor do Convênio">
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
import { Convenio } from '@/model/convenio.model'
import { Notification } from '@/model/notification'
import { ConvenioClient } from '@/client/convenio.client'
import {Prop} from "vue-property-decorator";

export default class ConvenioFormEditar extends Vue {
  private convenioClient!: ConvenioClient
  private convenio : Convenio = new Convenio()
  private notification : Notification = new Notification()

  @Prop({type: Number, required: false})
  private readonly id!: number
  @Prop({type: String, default: false})
  private readonly model!: string

  public mounted(): void {
    this.convenioClient = new ConvenioClient()
    this.getConvenio()
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

  private onClickEditar(): void {
    this.convenioClient.editar(this.convenio)
        .then(
            success => {
              this.notification = this.notification.new(true, 'notification is-success', 'Convênio Editado com sucesso!!!')
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
    this.convenio = new Convenio()
  }
}
</script>

<style lang="scss">
.btn-voltar{
  width: 100%;
}
</style>

