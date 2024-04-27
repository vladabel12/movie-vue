<template>
    <div class="header">
      <div class="header__links">
        <router-link to="/">Movies</router-link>
        <router-link to="/">Series</router-link>
        <router-link to="/">Documentaries</router-link>
      </div>
      <div class="ml-auto">
        <button class="header__search">
          <i class="icon-search"></i>
        </button>
        <button class="icon__bell">
          <i class="icon-bell"></i> 
        </button>
        <button class="icon__user">
          <i class="icon-users"></i> 
        </button>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    
  }
  </script>
  
  <style scoped lang="scss">
  @import "/src/styles/icons/icons.scss";
  
  .header {
    display: flex;
    justify-content: space-between;
    //align-items: center;
    max-height: 32rem;
    margin: 47px 42px 65px 32px;
  
    &__links {
      display: flex;
      gap: 32px;
      max-height: 18rem;
    }
  }
  
  .router-link {
    text-decoration: none;
  }
  
  .ml-auto {
    display: flex;
    justify-content: space-between;
    gap: 24px;
    max-height: 32rem;
  }
  
  button {
    background: none;
    border: none;
    cursor: pointer;
  }
  </style>
  