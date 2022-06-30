<template>
  <div class="columns">
    <div class="column is-12 is-size-3">
      Lista de Pacientes
    </div>
  </div>

  <hr />

  <div class="columns">
    <div class="column is-9">
      <input class="input" type="filtro" placeholder="Nome do Paciente">
    </div>
    <div class="column is-2">
      <router-link class="link-cad" to="/paciente/cadastrar">
        <button class="button btn-cadastrar" style="background-color: green; color: white">Cadastrar</button>
      </router-link>
    </div>
  </div>

  <hr />

  <table class="table table is-fullwidth">
    <thead class="green">
    <tr style="background-color: mediumpurple">
      <th style="color: #fff;">ID</th>
      <th style="color: #fff;">Ativo</th>
      <th style="color: #fff;">Nome</th>
      <th style="color: #fff;">Convênio</th>
      <th style="color: #fff;">N° Cartão Convênio</th>
      <th style="color: #fff;">Data Vencimento</th>
      <th style="color: #fff;">Celular</th>
      <th style="color: #fff;">Opções</th>
    </tr>
    </thead>
    <tbody>
    <tr v-for="item in pacienteList" :key="item.id">
      <th>{{ item.id }}</th>

      <th>
        <span v-if="item.ativo" class="tag is-success"> Ativo </span>
        <span v-if="!item.ativo" class="tag is-danger"> Inativo </span>
      </th>

      <th>{{ item.nome }}</th>
      <th>{{ item.convenio }}</th>
      <th>{{ item.numeroCartaoConvenio }}</th>
      <th>{{ item.dataVencimento }}</th>
      <th>{{ item.celular }}</th>
      <th>
        <button @click="onClickPaginaDetalhar(item.id)" style="background-color: dodgerblue; color: white" class="button btn-detalhar">Detalhar</button>
      </th>
    </tr>
    </tbody>
  </table>
</template>

<script lang="ts">
import { Vue } from 'vue-class-component';

import { PageRequest } from '@/model/page/page-request'
import { PageResponse } from '@/model/page/page-response'

import { Paciente } from '@/model/paciente.model'
import { PacienteClient } from '@/client/paciente.client'

export default class PacienteList extends Vue {
  private pageRequest: PageRequest = new PageRequest()
  private pageResponse: PageResponse<Paciente> = new PageResponse()
  private pacienteList: Paciente[] = []
  private pacienteClient!: PacienteClient
  public mounted(): void {
    this.pacienteClient = new PacienteClient()
    this.listarPaciente()
  }
  private listarPaciente(): void {
    this.pacienteClient.findByFiltrosPaginado(this.pageRequest)
        .then(
            success => {
              this.pageResponse = success
              this.pacienteList = this.pageResponse.content
            },
            error => console.log(error)
        )
  }
  private onClickPaginaDetalhar(idPaciente: number){
    this.$router.push({ name: 'detalharPaciente', params: { id: idPaciente, model: 'detalhar' } })
  }
}
</script>
