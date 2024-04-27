import { defineComponent } from 'vue';
import { useRoute, RouterView } from 'vue-router';

export default defineComponent({
  setup() {
    const route = useRoute();

    return {
      loggedIn: route.meta.loggedIn, // Access loggedIn status from route meta
    };
  },
  template: `
    <router-view v-if="loggedIn"></router-view>
    <router-view v-else></router-view>
  `,
});
