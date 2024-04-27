<template>
    <router-link :to="`/${film.id}`" class="film">
      <div class="film__image" :style="{backgroundImage: `url(${film.image})`}">
        <div class="film__icon-container">
          <div class="film__icon icon-heart-1" @click="handleUnFavorite" v-if="film.isFavorited"></div>
        </div>
        <div class="film__bottom">
          <div class="film__title">{{ film.title }}</div>
          <div class="film__info">
            <div class="film__year">{{ film.year }} |</div>
            <div class="film__genre">{{ film.genre }}</div>
          </div>
        </div>
      </div>
    </router-link>
  </template>
  
  <script>
  export default {
    props: {
      film: {
        type: Object,
        required: true
      }
    },
    methods: {
      handleUnFavorite() {
        console.log('handleUnFavorite');
      }
    }
  };
  </script>
  
  <style scoped>
  .film{
    max-width: 348rem;
    &__image{
        border: 1px solid var(--gray);
        border-radius: 20rem;
    }
    &__icon{
        font-size: 14rem;
        border-radius: 8rem;
        padding: 8rem;
        backdrop-filter: blur(11.851852416992188px);
        background: linear-gradient(147deg, #fff 0%, #fff 100%);
        max-width: 32rem;
        margin: 20rem 20rem 121rem 0;
    }
    &__icon-container{
        display: flex;
        justify-content: end;
    }
    &__bottom{
        border-radius: 0 0 20rem 20rem;
        backdrop-filter: blur(20px);
        background: linear-gradient(148deg, #fff 0%, #fff 100%);
        opacity: 0.95;
        padding: 16rem 20rem 24rem 20rem;
    }
    &__title{
        font-weight: 600;
        font-size: 16rem;
        line-height: 150%;
        color: #000;
        margin-bottom: 6rem;
    }
    &__info{
        font-weight: 400;
        font-size: 14rem;
        line-height: 114%;
        color: #000;
        display: flex;
        gap: 6rem;
    }
}
  </style>
  