<template>
  <v-app>
    <v-main>
      <v-container>
        <v-row>
          <v-col cols="1">
            <router-link to="/">TodoList</router-link>
          </v-col>
          <v-col cols="2">
            <router-link to="/DataTable">DataTable</router-link>
          </v-col>
        </v-row>
        <router-view></router-view>
      </v-container>
    </v-main>
  </v-app>
</template>

<script>
  export default {
    name: 'App',
    data() {
      return {}
    }
  };
</script>