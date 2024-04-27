<template>
    <div class="favourites-container">
      <HeaderMain />
      <div class="favorites">
        <div class="favorites__title">Favourites</div>
        <div class="favorites-list">
          <FilmVue v-for="film in films" :key="film.id" :film="film" />
        </div>
      </div>
    </div>
  </template>
  
  <script>
  import HeaderMain from '/src/shared/ui/header/HeaderMain.vue'
  import FilmVue from "/src/shared/ui/film/FilmVue.vue";
  import { films } from "/src/database/films.js";
  
  export default {
    components: {
      HeaderMain,
      FilmVue
    },
    data() {
      return {
        films: films
      };
    }
  };
  </script>
  
  <style scoped>
  .favorites-list {
	display: grid;
	grid-template-columns: 1fr 1fr 1fr;
	margin-left: 32rem;
}
.favourites-container{
	height: 100%;
}
.favorites{
	&__title{
		font-weight: 600;
		font-size: 20rem;
		color: var(--white);
		margin-left: 32rem;
		margin-bottom: 24rem;
	}
}

  </style>
  