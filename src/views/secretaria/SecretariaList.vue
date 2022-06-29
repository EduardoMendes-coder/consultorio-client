<template>
  <div class="columns">
    <div class="column is-12 is-size-3">
      Lista de Secretárias
    </div>
  </div>

  <hr />

  <div class="columns">
    <div class="column is-9">
      <input class="input" type="filtro" placeholder="Nome da Secretária">
    </div>
    <div class="column is-2">
      <router-link class="link-cad" to="/secretaria/cadastrar">
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
      <th style="color: #fff;">PIS</th>
      <th style="color: #fff;">Salário</th>
      <th style="color: #fff;">Data de Contratação</th>
      <th style="color: #fff;">Celular</th>
      <th style="color: #fff;">Opções</th>
    </tr>
    </thead>
    <tbody>
    <tr v-for="item in secretariaList" :key="item.id">
      <th>{{ item.id }}</th>

      <th>
        <span v-if="item.ativo" class="tag is-success"> Ativo </span>
        <span v-if="!item.ativo" class="tag is-danger"> Inativo </span>
      </th>

      <th>{{ item.nome }}</th>
      <th>{{ item.pis }}</th>
      <th>{{ item.salario }}</th>
      <th>{{ item.dataContratacao }}</th>
      <th>{{ item.celular }}</th>
      <th>
        <router-link class="link-cad" to="/secretaria/detalhar">
          <button style="background-color: dodgerblue; color: white" class="button btn-detalhar">Detalhar</button>
        </router-link>
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
import {Secretaria} from "@/model/secretaria.model";
import {SecretariaClient} from "@/client/secretaria.client";

export default class SecretariaList extends Vue {
  private pageRequest: PageRequest = new PageRequest()
  private pageResponse: PageResponse<Secretaria> = new PageResponse()
  private secretariaList: Secretaria[] = []
  private secretariaClient!: SecretariaClient
  public mounted(): void {
    this.secretariaClient = new SecretariaClient()
    this.listarSecretaria()
  }
  private listarSecretaria(): void {
    this.secretariaClient.findByFiltrosPaginado(this.pageRequest)
        .then(
            success => {
              this.pageResponse = success
              this.secretariaList = this.pageResponse.content
            },
            error => console.log(error)
        )
  }
}
</script>