<template>
    <router-view v-if="loggedIn" />
    <router-link v-else :to="/login" replace />
  </template>
  
  <script>
  export default {
    name: 'PrivateRoutes',
    props: {
      loggedIn: {
        type: Boolean,
        required: true
      }
    }
  }
  </script>
  