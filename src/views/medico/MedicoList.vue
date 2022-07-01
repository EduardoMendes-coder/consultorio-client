<template>
  <div class="columns">
    <div class="column is-12 is-size-3">
      Lista de Médicos
    </div>
  </div>

  <hr />

  <div class="columns">
    <div class="column is-9">
      <input class="input" type="filtro" placeholder="Nome do Médico">
    </div>
    <div class="column is-2">
      <router-link class="link-cad" to="/medico/cadastrar">
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
      <th style="color: #fff;">CRM</th>
      <th style="color: #fff;">Celular</th>
      <th style="color: #fff;">Valor da Consulta</th>
      <th style="color: #fff;">Especialidade</th>
      <th style="color: #fff;">Opções</th>
    </tr>
    </thead>
    <tbody>
    <tr v-for="item in medicoList" :key="item.id">
      <th>{{ item.id }}</th>

      <th>
        <span v-if="item.ativo" class="tag is-success"> Ativo </span>
        <span v-if="!item.ativo" class="tag is-danger"> Inativo </span>
      </th>

      <th>{{ item.nome }}</th>
      <th>{{ item.crm }}</th>
      <th>{{ item.celular }}</th>
      <th>{{ item.valorConsulta }}</th>
      <th>{{ item.especialidade }}</th>
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

import { Medico } from '@/model/medico.model'
import { MedicoClient } from '@/client/medico.client'

export default class MedicoList extends Vue {
  private pageRequest: PageRequest = new PageRequest()
  private pageResponse: PageResponse<Medico> = new PageResponse()
  private medicoList: Medico[] = []
  private medicoClient!: MedicoClient
  public mounted(): void {
    this.medicoClient = new MedicoClient()
    this.listarMedico()
  }
  private listarMedico(): void {
    this.medicoClient.findByFiltrosPaginado(this.pageRequest)
        .then(
            success => {
              this.pageResponse = success
              this.medicoList = this.pageResponse.content
            },
            error => console.log(error)
        )
  }
  private onClickPaginaDetalhar(idMedico: number){
    this.$router.push({ name: 'detalharMedico', params: { id: idMedico, model: 'detalhar' } })
  }
}
</script>