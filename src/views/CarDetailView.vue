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
          <v-card-subtitle class="text-h5 primary--text">{{ car.price }}</v-card-subtitle>
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
            <v-btn color="primary" size="large">Купить</v-btn>
          </v-card-actions>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  data() {
    return {
      car: {
        id: 1,
        title: 'Toyota Camry 2022',
        image: 'https://via.placeholder.com/800x400?text=Toyota+Camry',
        price: '2,500,000 ₽',
        year: 2022,
        mileage: '15,000 км',
        description: 'Отличное состояние, один владелец. Автомобиль полностью обслужен у официального дилера. Не бит, не крашен. Полная комплектация: кожаный салон, климат-контроль, мультимедиа система, подогрев сидений, парктроник, камера заднего вида.',
        phone: '+7 (999) 123-45-67'
      }
    }
  },
  created() {
    // Здесь будет логика загрузки данных автомобиля по ID из роута
    const carId = this.$route.params.id
    console.log('Loading car with ID:', carId)
  }
}
</script>
