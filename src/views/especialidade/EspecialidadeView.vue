<template>
  <div class="container">
    <h1 class="titulo" >Lista de Especialidades</h1>
    <div class="control">
      <input class="input" type="nome-especialidade" placeholder="Buscar Especialidade">
      <button class="button btn-cadastrar">Cadastrar</button>
    </div>
    <div class="table-especialidade">
      <table class="table">
        <thead>
        <tr>
          <th><abbr title="Position">Pos</abbr></th>
          <th>Team</th>
          <th><abbr title="Played">Pld</abbr></th>
          <th><abbr title="Won">W</abbr></th>
          <th><abbr title="Drawn">D</abbr></th>
          <th><abbr title="Lost">L</abbr></th>
          <th><abbr title="Goals for">GF</abbr></th>
          <th><abbr title="Goals against">GA</abbr></th>
          <th><abbr title="Goal difference">GD</abbr></th>
          <th><abbr title="Points">Pts</abbr></th>
          <th>Qualification or relegation</th>
        </tr>
        </thead>
        <tfoot>
        <tr>
          <th><abbr title="Position">Pos</abbr></th>
          <th>Team</th>
          <th><abbr title="Played">Pld</abbr></th>
          <th><abbr title="Won">W</abbr></th>
          <th><abbr title="Drawn">D</abbr></th>
          <th><abbr title="Lost">L</abbr></th>
          <th><abbr title="Goals for">GF</abbr></th>
          <th><abbr title="Goals against">GA</abbr></th>
          <th><abbr title="Goal difference">GD</abbr></th>
          <th><abbr title="Points">Pts</abbr></th>
          <th>Qualification or relegation</th>
        </tr>
        </tfoot>
        <tbody>
        <tr>
          <th>1</th>
          <td><a href="https://en.wikipedia.org/wiki/Leicester_City_F.C." title="Leicester City F.C.">Leicester City</a> <strong>(C)</strong>
          </td>
          <td>38</td>
          <td>23</td>
          <td>12</td>
          <td>3</td>
          <td>68</td>
          <td>36</td>
          <td>+32</td>
          <td>81</td>
          <td>Qualification for the <a href="https://en.wikipedia.org/wiki/2016%E2%80%9317_UEFA_Champions_League#Group_stage" title="2016–17 UEFA Champions League">Champions League group stage</a></td>
        </tr>
        <tr>
          <th>2</th>
          <td><a href="https://en.wikipedia.org/wiki/Arsenal_F.C." title="Arsenal F.C.">Arsenal</a></td>
          <td>38</td>
          <td>20</td>
          <td>11</td>
          <td>7</td>
          <td>65</td>
          <td>36</td>
          <td>+29</td>
          <td>71</td>
          <td>Qualification for the <a href="https://en.wikipedia.org/wiki/2016%E2%80%9317_UEFA_Champions_League#Group_stage" title="2016–17 UEFA Champions League">Champions League group stage</a></td>
        </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<script>
export default {
  name: "especialidade"
}
</script>

<style lang="scss">
@import "~bulma/bulma.sass";
.titulo{
  font-size: 30px;
  margin-top: 0px;
  margin-outside: 10px;
}
.input{
  width: 60%;
}
.table-especialidade{
  margin-top: 60px;
}
.btn-cadastrar{
  width: 30%;
  margin-left: 20px;
  background-color: green;
  color: white;
}
.control{
  display: flex;
  margin-top: 20px;
  width: 100%;
  flex-direction: row;
}
</style>