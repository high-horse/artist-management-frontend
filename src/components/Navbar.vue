<template>
  <div>
    {{ store.test }}asd
    <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
      <div class="container-fluid">
        <router-link to="/" class="navbar-brand" :class="{ active: $route == '/' }">Home</router-link>

        <div class="collapse navbar-collapse" id="navbarSupportedContent">
          <ul class="navbar-nav me-auto mb-2 mb-lg-0">
            <li class="nav-item">
              <router-link to="/register" class="nav-link" :class="{ active: $route == '/register' }" aria-current="page"
                href="#">Register</router-link>
            </li>
            <li class="nav-item">
              <router-link to="/login" class="nav-link" :class="{ active: $route == '/login' }">Login</router-link>
            </li>
            <li class="nav-item">
              <router-link to="/logout" class="nav-link" tabindex="-1">Logout</router-link>
            </li>
          </ul>
          <form class="d-flex">
            <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search">
            <button class="btn btn-outline-success" type="submit">Search</button>
          </form>
        </div>
      </div>
    </nav>

    <!-- <h1>{{ loginstatus }}</h1> -->
  </div>
</template>
    
<script>
import { useLoginStore } from '../store/store.js';

export default {
  name: 'Navbar-component',
  data() {

    return {
      store: useLoginStore(),
      //loginstatus: useLoginStore().getLoginStatus(),
      loginstatus: false
    }
  },
  components: {
    // Navbar-component
  }
}
</script>
    
<style>
.router-link-active {
  font-size: large !important;
  font-weight: bold !important;
  color: white !important;
}
</style>