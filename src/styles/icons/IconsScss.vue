<template>
    <i :class="'icon-' + name"></i>
  </template>
  
  <script>
  export default {
    props: {
      name: {
        type: String,
        required: true
      }
    }
  }
  </script>
  
  <style scoped lang="scss">
  @import "/src/styles/icons/icons.scss";
  </style>
  