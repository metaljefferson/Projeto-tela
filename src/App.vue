<template>
  <div id="app">
    <div>
      <b-navbar class="color-top">
        <template #brand>
          <div class="logo"></div>
        </template>
        <template #start>
          <div class="search">
            <b-field>
              <b-input placeholder="Buscar Funcionalidade"
                type="search"
                icon-pack="fas"
                icon="search">
            </b-input>
            </b-field>
          </div>
        </template>

        <template #end>
          <div class="profile">
            <div class="logo-profile"></div>
            <div class="texts-profile">
              <h3>Super Admin</h3>
              <span>Super Admin</span>
            </div>
          </div>
        </template>
        
      </b-navbar>
    </div>
<section class="container"> 
  <b-menu class="menu-lateral">
    <b-menu-list class="menu-lateral2" >
      <b-menu-item class="menu-inicio"  icon="house-user"  label="Inicio"></b-menu-item>
      <b-menu-item class="menu-escolas"  icon="users" label="Escolas"></b-menu-item>
      <b-menu-item class="menu-usuarios" icon="user" label="Usuarios"></b-menu-item>
      <b-menu-item class="menu-diploma" icon="graduation-cap" label="Diplomas"></b-menu-item>
    </b-menu-list>
  </b-menu>
  <aside class="conteudo">
    <h2 class="template-diploma">Templates de diplomas cadastrados</h2>
    <b-menu-item class="menu-filtro" icon="filter" label="Filtros"></b-menu-item>
    <span>Ordernar Por</span>
     <b-button type="is-dark">Cadastrar</b-button>
      <b-button type="is-dark">Data</b-button>
      <b-button type="is-primary">Nome</b-button>
      <b-button type="is-primary">Atualização</b-button>
      <b-button size="is-small" type="is-dark">diplomas</b-button>

      <h2>Titulo do diplomas a ser usado como template</h2>
      <span>Escola que usa  esse diploma</span>
      <span>Curso que usa  esse diploma</span>
      <span>N° de usuarios associados</span>

      <span class="bolinha_status _primeira_bolinha "></span>
      <span class="bolinha_status _segunda_bolinha "></span>

  </aside>
  </section>
</div>
</template>

<script>
export default {
  name: "app",
};
</script>

<style>
.color-top {
  background-color: #7957d5;
}

.logo {
  display: flex;
  background-color: #fff;
  width: 150px;
  margin-top: 15px;
  margin-bottom: 15px;
  height: 50px;
  border-radius: 74px / 23px;
  margin-left: 20px;
}

.search {
  display: flex;
  margin-left: 30px;
  margin-top: 20px;
  width: 400px;
}

.search input {
  width: 400px;
}

.profile {
  display: flex;
  margin-right: 120px;
}

.logo-profile {
  display: flex;
  background-color: #ccc;
  width: 50px;
  margin-top: 15px;
  margin-bottom: 15px;
  height: 50px;
  border-radius: 5px;
  margin-right: 20px;
}

.texts-profile {
  margin-top: 12px;
}

.texts-profile h3 {
  color: #000;
  font-weight: bolder;
}

.texts-profile span {
  color: #fff;
  text-transform: uppercase;
  font-size: 12px;
}
.container{
  display: flex;
}
.bolinha_status{
  display: inline-block;
  width: 50px;
  height: 50px;
  border-radius: 25px;
}
._primeira_bolinha{
  background-color: red;
  
}
._segunda_bolinha{
  background-color: yellow;
}

.menu-lateral{
   width: 25%;
    height: 100vh;
    background-color: whitesmoke;
    padding-top: 44px;
    padding-left: 33px;
    border: 2px 2px #ccc;
}
.menu-inicio{
  padding-top: 10px;
  color: greenyellow;
}
.menu-escolas{
  padding-top: 10px;
}
.menu-usuarios{
  padding-top: 10px;
}
.menu-diploma{
  padding-top: 10px;
}
.template-diploma{
  font-weight: bolder;
    padding-left: 25px;
    font-size: x-large;
    margin-top: 15px;

}
.menu-filtro{
  padding-left: 20px;
  padding-top: 45px;
}
</style>
