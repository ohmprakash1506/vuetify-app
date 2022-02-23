<template>
  <v-app>
    <NavBar />
    <v-content class="mx-6">
      <router-view></router-view>
    </v-content>
  </v-app>
</template>

<script>
import NavBar from "@/components/NavBar.vue";

export default {
  name: "App",
  components: { NavBar },
  data: () => ({
    //
  }),
};
</script>
