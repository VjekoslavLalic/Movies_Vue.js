<template>
  <div id="app">
    <!-- Navbar -->
    <nav class="navbar navbar-inverse">
      <router-link class="routerlink" to="/">Pivovara</router-link>
      <router-link class="routerlink" to="/svapiva">Piva</router-link>
      <img
          class="logo"
          alt="PivovaraMedvedgrad logo"
          src="@/assets/medvedgradLogo.jpg"
      />
      <router-link class="routerlink" to="/pivnice">Pivnice</router-link>
      <router-link class="routerlink" to="/jelovnici">Jelovnici</router-link>
    </nav>
    <!--  -->
    <router-view />
  </div>
</template>
<script>
  import store from "@/store.js";
  export default {
    name: "App",
    data() {
      return {
        store,
      };
    },
  }
  </script>
<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  background-color: #3a3636;
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
.routerlink {
  text-decoration: none;
}
.routerlink:link {
  padding: 30px;
  font-size: 28px;
  text-decoration: none;
}
.routerlink:visited {
  color: white;
  text-decoration: none;
}
.routerlink:hover {
  background-color: rgba(0, 0, 0, 0.001);
  text-decoration: none;
}
</style>
