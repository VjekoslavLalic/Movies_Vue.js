<template>
  <div id="app">
    <!-- Navbar -->
    <nav class="navbar navbar-inverse">
      <router-link class="routerlink" to="/piva">O nama</router-link>
      <router-link class="routerlink" to="/piva">Piva</router-link>
      <img
        to="/about"
        class="logo"
        alt="PivovaraMedvedgrad logo"
        src="@/assets/medvedgradLogo.jpg"
      />
      <router-link class="routerlink" to="/pivnice">Pivnice</router-link>
      <router-link class="routerlink" to="/pivnice">Jelovnici</router-link>
    </nav>
    <!--  -->
    <router-view />
  </div>
</template>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
.navbar {
  background-color: black;
}
.logo {
  width: 250px;
  border-bottom-right-radius: 3rem;
  border-bottom-left-radius: 3rem;
}
.routerlink:link {
  padding: 50px;
  font-size: 28px;
  text-decoration: none;
}
.routerlink:visited {
  color: white;
}
.routerlink:hover {
  background-color: grey;
}
</style>
