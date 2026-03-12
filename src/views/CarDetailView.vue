<template>
  <v-container>
    <v-row justify="center">
      <v-col cols="12" md="8">
        <v-card>
          <v-img
            :src="car.image"
            height="400"
            cover
          ></v-img>
          <v-card-title class="text-h4">{{ car.title }}</v-card-title>
          <v-card-subtitle class="text-h5 success--text">{{ car.price }}</v-card-subtitle>
          <v-card-text>
            <v-row>
              <v-col cols="12" sm="6">
                <v-list-item>
                  <v-list-item-title>Год выпуска</v-list-item-title>
                  <v-list-item-subtitle>{{ car.year }}</v-list-item-subtitle>
                </v-list-item>
              </v-col>
              <v-col cols="12" sm="6">
                <v-list-item>
                  <v-list-item-title>Пробег</v-list-item-title>
                  <v-list-item-subtitle>{{ car.mileage }}</v-list-item-subtitle>
                </v-list-item>
              </v-col>
            </v-row>
            <v-divider class="my-4"></v-divider>
            <h3 class="text-h6 mb-2">Описание</h3>
            <p>{{ car.description }}</p>
            <v-divider class="my-4"></v-divider>
            <h3 class="text-h6 mb-2">Контакты</h3>
            <v-list-item>
              <v-list-item-title>Телефон</v-list-item-title>
              <v-list-item-subtitle>{{ car.phone }}</v-list-item-subtitle>
            </v-list-item>
          </v-card-text>
          <v-card-actions>
            <v-spacer></v-spacer>
            <v-btn color="success" size="large">Купить</v-btn>
          </v-card-actions>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  computed: {
    ...mapGetters({
      getCarById: 'cars/getCarById'
    }),
    car() {
      const carId = parseInt(this.$route.params.id)
      return this.getCarById(carId) || {
        title: 'Автомобиль не найден',
        image: 'https://via.placeholder.com/800x400?text=Not+Found',
        price: '0 ₽',
        year: 0,
        mileage: '0 км',
        description: 'Извините, данный автомобиль не найден',
        phone: 'N/A'
      }
    }
  },
  created() {
    // Данные загружаются через Vuex getter
  }
}
</script>
