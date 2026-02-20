<template>
  <v-app>
    <v-navigation-drawer app v-model="drawer"></v-navigation-drawer> 
    <v-app-bar app dark color="primary">
      <v-app-bar-nav-icon @click="drawer = !drawer"></v-app-bar-nav-icon>
      <v-spacer></v-spacer>
      <v-toolbar-items class="hidden-sm-and-down">
        <v-btn
          v-for="link in menuLinks"
          :key="link.title"
          :to="link.url"
          @click="link.click && link.click()"
        >
          <v-icon start :icon="link.icon"></v-icon>
          {{ link.title }}
        </v-btn>
      </v-toolbar-items>
    </v-app-bar>
    <v-main>
      <router-view></router-view>
    </v-main>
  </v-app>
</template>

<script>
export default {
  data() {
    return {
      drawer: false
    }
  },
  computed: {
    isAuthenticated() {
      return this.$store.getters['user/isAuthenticated']
    },
    menuLinks() {
      if (this.isAuthenticated) {
        return [
          {title:"Главная", icon:"mdi-home", url:"/"},
          {title:"Автомобили", icon:"mdi-car", url:"/cars"},
          {title:"Добавить объявление", icon:"mdi-plus-circle", url:"/new"},
          {title:"Мои объявления", icon:"mdi-view-list", url:"/list"},
          {title:"Заказы", icon:"mdi-bookmark-multiple", url:"/orders"},
          {title:"Выход", icon:"mdi-logout", url:"#", click: this.logout}
        ]
      } else {
        return [
          {title:"Главная", icon:"mdi-home", url:"/"},
          {title:"Автомобили", icon:"mdi-car", url:"/cars"},
          {title:"Вход", icon:"mdi-login", url:"/login"},
          {title:"Регистрация", icon:"mdi-account-plus", url:"/registration"}
        ]
      }
    }
  },
  methods: {
    logout() {
      this.$store.dispatch('user/logout')
      this.$router.push('/login')
    }
  }
}
</script>
