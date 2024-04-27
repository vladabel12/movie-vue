<script setup>
import { RouterLink, RouterView } from 'vue-router'
import HeaderMain from '/src/shared/ui/header/HeaderMain.vue'
import SidebarMain from '/src/shared/ui/sidebar/SidebarMain.vue'
</script>

<script>
export default {
  props: {
    loggedIn: {
      type: Boolean,
      required: true
    }
  },
  components: {
    SidebarMain,
    HeaderMain
  }
}
</script>

<template>
  <div id="app" class="grid-container">
    <!-- Include SidebarMain component here -->
    <SidebarMain :loggedIn="loggedIn" />

    <!-- Include HeaderMain component here -->
    <HeaderMain :loggedIn="loggedIn"/>
      <div class="page">
        <router-view />
      </div>
  </div>
</template>

<style>
@import url('https://fonts.googleapis.com/css2?family=Poppins:wght@400;600&display=swap');
.grid-container {
  display: grid;
  grid-template-columns: auto 1fr; /* Sidebar takes the whole left side, Header takes the rest */
  
  height: 100vh; /* Make the grid container full height of the viewport */
}
html {
  font-size: 1px;
}
body {
  font-family: 'Poppins', sans-serif;
  background: var(--dark);
  color: var(--white);
  height: 100%;
  font-size: 16rem;
}
html,
body {
  height: 100%;
}

.container {
  display: grid;
  grid-template-columns: auto 1fr;
  height: 100%;
}
#root {
  height: 100%;
}
body::before {
  content: '';
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: var(--dark);
  z-index: -1;
}

* {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}
a {
  color: #fff;
  text-decoration: none;
}
img {
  max-width: 100%;
  height: auto;
  object-fit: cover;
  display: inline-block;
}
</style>
