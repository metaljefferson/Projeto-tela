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

  <b-menu>
    <b-menu-list class="menu-lateral">
      <b-menu-item class="menu-inicio" icon="information-outline" label="Inicio"></b-menu-item>
      <b-menu-item class="menu-escolas" icon="information-outline" label="Escolas"></b-menu-item>
      <b-menu-item class="menu-usuarios" icon="information-outline" label="Usuarios"></b-menu-item>
      <b-menu-item class="menu-diploma" icon="information-outline" label="Diplomas"></b-menu-item>
    </b-menu-list>
  </b-menu>
  
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
.menu-list {
  padding: 35px;
  margin-top: 35px;
}
.menu-item{
  padding: 15px;
}
</style>
