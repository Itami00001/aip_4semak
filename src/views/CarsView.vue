<template>
  <v-container>
    <v-row>
      <v-col cols="12">
        <h1 class="text-h4 mb-6">Все автомобили</h1>
      </v-col>
    </v-row>
    <v-row>
      <v-col cols="12">
        <v-row>
          <v-col
            v-for="car in allCars"
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
  computed: {
    ...mapGetters({
      allCars: 'cars/allCars'
    })
  },
  created() {
    this.$store.dispatch('cars/fetchCars')
  }
}
</script>
