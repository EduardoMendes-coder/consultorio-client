<template>
  <aside class="menu">
    <p class="menu-label">
      Administrativo
    </p>
    <ul class="menu-list">
      <li><router-link to="/convenio">Convênio</router-link></li>
      <li><router-link to="/especialidade">Especialidade</router-link></li>
    </ul>
    <p class="menu-label">
      Pessoal
    </p>
    <ul class="menu-list">
      <li><router-link to="/medico">Médico</router-link></li>
      <li><router-link to="/paciente">Paciente</router-link></li>
      <li><router-link to="/secretaria">Secretaria</router-link></li>
    </ul>
    <p class="menu-label">
      Agendamentos
    </p>
    <ul class="menu-list">
      <li><router-link to="/agenda">Agenda</router-link></li>
      <li><router-link to="/historico">Histórico</router-link></li>
    </ul>
  </aside>
</template>

<style>
.menu{
  display: flex;
  flex-direction: column;
  position: absolute;
  background-color: whitesmoke;
  width: 250px;
  height: 100%;
  align-items: flex-start;
  border-width: 1px;
  border-style: solid;
  border-color: grey;
  border-top-width: 0;
}
.menu-label{
  font-size: 15px !important;
  margin: 10px;
  color: dimgrey !important;
}
.menu-list{
  font-size: 15px;
  color: grey !important;
}
</style>
