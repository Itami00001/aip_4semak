<template>
  <v-container>
    <v-row justify="center">
      <v-col cols="12">
        <h1 class="text-h4 mb-6">Добро пожаловать в Автопарк!</h1>
      </v-col>
    </v-row>
    <v-row>
      <v-col cols="12" md="8">
        <v-carousel>
          <v-carousel-item
            v-for="(car, index) in featuredCars"
            :key="index"
            :src="car.image"
            cover
          >
            <div class="d-flex fill-height justify-center align-center text-white">
              <div class="text-center">
                <h2>{{ car.title }}</h2>
                <h3 class="mb-2">{{ car.price }}</h3>
                <p>{{ car.year }} • {{ car.mileage }}</p>
                <v-btn color="success" :to="'/car/' + car.id">Подробнее</v-btn>
              </div>
            </div>
          </v-carousel-item>
        </v-carousel>
      </v-col>
    </v-row>
    <v-row>
      <v-col cols="12">
        <h2 class="text-h5 mb-4">Популярные автомобили</h2>
        <v-row>
          <v-col
            v-for="car in popularCars"
            :key="car.id"
            cols="12"
            sm="6"
            md="4"
          >
            <v-card>
              <v-img
                :src="car.image"
                height="200"
                cover
              ></v-img>
              <v-card-title>{{ car.title }}</v-card-title>
              <v-card-subtitle>{{ car.price }}</v-card-subtitle>
              <v-card-text>{{ car.description }}</v-card-text>
              <v-card-actions>
                <v-btn color="success" :to="'/car/' + car.id">Подробнее</v-btn>
              </v-card-actions>
            </v-card>
          </v-col>
        </v-row>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  name: 'HomeView',
  computed: {
    ...mapGetters({
      allCars: 'cars/allCars'
    }),
    featuredCars() {
      return this.allCars.slice(0, 3)
    },
    popularCars() {
      return this.allCars.slice(3, 7)
    }
  },
  created() {
    this.$store.dispatch('cars/fetchCars')
  }
}
</script>

<style scoped>
.v-carousel-item {
  height: 400px;
}
</style>
