<template>
  <nav>
    <v-app-bar class="light-blue accent-3">
      <v-app-bar-nav-icon @click="drawer = !drawer"></v-app-bar-nav-icon>
      <v-app-bar-title class="text-uppercase">
        <span>Sales</span>
        data
      </v-app-bar-title>
      <v-spacer></v-spacer>
      <v-btn text>
        <span>Sign out</span>
        <v-icon right>mdi-logout</v-icon>
      </v-btn>
    </v-app-bar>
    <v-main>
      <v-navigation-drawer
        v-model="drawer"
        app
        absolute
        temporary
        class="light-blue accent-3"
      >
        <v-list>
          <v-list-item-group v-model="selectedItem" color="white">
            <v-list-item
              v-for="link in links"
              :key="link.text"
              router
              :to="link.route"
            >
              <v-list-item-icon>
                <v-icon v-text="link.icon"></v-icon>
              </v-list-item-icon>
              <v-list-item-content>
                <v-list-item-title v-text="link.text"></v-list-item-title>
              </v-list-item-content>
            </v-list-item>
          </v-list-item-group>
        </v-list>
      </v-navigation-drawer>
    </v-main>
  </nav>
</template>

<script>
export default {
  data() {
    return {
      drawer: false,
      selectedItem: 1,
      links: [
        { text: "Task", icon: "task", route: "/task" },
        { text: "Follow ups", icon: "contact_phone", route: "/follow_ups" },
        { text: "Sales converted", icon: "receipt", route: "/sales_converted" },
        { text: "Booking", icon: "confirmation_number", route: "/booking" },
      ],
    };
  },
};
</script>

<style>
@import url("https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,100;0,200;0,300;0,500;0,600;0,800;0,900;1,100;1,400;1,700&display=swap");
span {
  font-family: "Poppins", sans-serif;
  font-weight: bold;
}
</style>
