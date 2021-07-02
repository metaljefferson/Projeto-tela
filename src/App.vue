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
      <b-input put placeholder="Buscar Funcionalidade"
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
<section class="main">
  <b-menu class="menu-lateral">
    <b-menu-list>
      <b-menu-item icon="house-user"  label="Inicio"></b-menu-item>
      <b-menu-item icon="users" label="Escolas"></b-menu-item>
      <b-menu-item icon="user" label="Usuarios"></b-menu-item>
      <b-menu-item icon="graduation-cap" label="Diplomas"></b-menu-item>
    </b-menu-list>
  </b-menu>
  <aside class="conteudo">
    <header>
      <h1 class="template-diploma">Templates de diplomas cadastrados</h1>
      <b-button class="button-cadastrar" type="is-dark">Cadastrar</b-button>
    </header>
    <div class="right-menu">
      <div class="filtro-menu">
        <b-button class="button-filter" size="is-medium" icon-left="filter">Filtros</b-button>
        <b-button class="ordernar-por" size="is-medium">Ordenar por</b-button>
      </div>
      <div class="button-right">
        <b-button class="button-radius-left" type="is-dark">Data</b-button>
        <b-button type="is-primary">Nome</b-button>
        <b-button class="button-radius-right" type="is-primary">Atualização</b-button>
      </div>
    </div>

    <div class="diplomas-left">
       <b-button class="diploma-button" size="is-small" type="is-dark">diplomas</b-button>
       <span class="linha-tracejada"></span>
    </div>
    <div class="titulo-template">
        <h2>Titulo do diplomas a ser usado como template</h2>
        <h3>Escola que usa  esse diploma</h3>
        <h3>Curso que usa  esse diploma</h3>
        <h3>N° de usuarios associados</h3>
      <div>
        <span class="bolinha_status _primeira_bolinha "></span>
        <span class="bolinha_status _segunda_bolinha "></span>
      </div>
    </div>
  </aside>
  <b-pagination class="pagination-number"
  
    :total="total"
    v-model="current"
    :range-before="rangeBefore"
    :range-after="rangeAfter"
    :order="order"
    :size="size"
    :simple="isSimple"
    :rounded="isRounded"
    :per-page="perPage"
    :icon-prev="prevIcon"
    :icon-next="nextIcon"
    aria-next-label="Next page"
    aria-previous-label="Previous page"
    aria-page-label="Page"
    aria-current-label="Current page">
  </b-pagination>
  </section>
  
</div>
</template>

<script>
export default {
  name: "app",
  data() {
    return {
      total: 200,
      current: 10,
      perPage: 10,
      rangeBefore: 3,
      rangeAfter: 1,
      order: '',
      size: '',
      isSimple: false,
      isRounded: false,
      prevIcon: 'chevron-left',
      nextIcon: 'chevron-right'
            }
          }
  
};
</script>

<style>
.color-top {
  background-color: #7957d5;
  box-shadow: 195px 2px 20px;
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
.main{
  display: flex;
  width: 100%;
  height: 100vh;
}
.bolinha_status{
  display: inline-block;
  width: 50px;
  height: 50px;
  border-radius: 25px;
  margin-right: 15px
}
._primeira_bolinha{
  background-color: red;
  
}
._segunda_bolinha{
  background-color: yellow;
}

.menu-lateral{
  width: 230px;
  height: 100vh;
  background-color: whitesmoke;
  padding-top: 44px;
  border: solid 1px #ccc;
}
.menu-lateral ul{
  margin-left: 10px;

}
.menu-lateral ul li{
  margin-bottom: 10px;

  
}
.menu-lateral ul li:hover{
  font-weight: bold;
  
  
}
.template-diploma{
  font-weight: bolder;
  font-size: x-large;

}
.conteudo{
  width: 100%;
  display: flex;
  flex-direction: column;
  padding: 0 30px;
}
.menu-filtro{
  padding-left: 20px;
  padding-top: 45px;
}
header{
  display: flex;
  width: 100%;
  justify-content: space-between;
  align-items: center;
  height: 80px;
}
.right-menu{
  display: flex;
  width: 100%;
  justify-content: space-between;
  align-items: center;
  margin-top: 40px;
  padding-bottom: 30px;
  margin-bottom: 30px;
}
.filtro-menu{
  display: flex;
  
}
.button-filter{
  color: #808080;
  border: 0;
}
.ordernar-por{
  color: #808080;
  border-top: 0;
  border-right: 0;
  border-bottom: 0;
}
.button-cadastrar{
  border-radius: 8px;
}
.button-radius-left{
  border-top-left-radius: 10px;
  border-bottom-left-radius: 10px;
  padding: 0 50px;
}
.button-radius-right{
  border-top-right-radius: 10px;
  border-bottom-right-radius: 10px;
}
.diploma-button{
  justify-content: initial;
  width: 80px;
  text-transform: uppercase;
  border-radius: 60px!important;
  padding-left: 10px;
  margin-left: 15px;
}
.diplomas-left{
  width: 100%;
  margin-bottom: 2rem;
  position: relative;
  overflow: hidden;
}
.titulo-template{
  display: flex;
  width: 100%;
  justify-content: space-between;
  background-color: whitesmoke;
  padding: 25px;
  align-items: center;
  border-radius: 10px;
   box-shadow: 0 3px 5px #ccc;

}
.linha-tracejada{
  border-top: dashed 2px #ccc;
  width: 100%;
  position: absolute;
  top: 50%;
  transform: translateY(50%);
  left: 0;
  z-index: -1;
}
.titulo-template h3{
  color: #bf40bf;
}
.titulo-template h2{
  font-weight: bold;
  font-size: 18px;
  
}
.pagination{
  width: 35rem;
  position: absolute;
  right: 35px;
  bottom: 0;
  color: white;
    
}

.pagination-list {
  order: 2;
  padding-left: 15px;
}
.menu-lateral a{
  color: #a9a9a9;
}
.pagination-link{
  color: white;
  background-color: black;
}

</style>
