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
                <v-btn color="primary" :to="'/car/' + car.id">Подробнее</v-btn>
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
                <v-btn color="primary" :to="'/car/' + car.id">Подробнее</v-btn>
              </v-card-actions>
            </v-card>
          </v-col>
        </v-row>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  name: 'HomeView',
  data() {
    return {
      featuredCars: [
        {
          id: 1,
          title: 'Toyota Camry 2022',
          image: 'https://via.placeholder.com/600x400?text=Toyota+Camry',
          price: '2,500,000 ₽',
          year: 2022,
          mileage: '15,000 км'
        },
        {
          id: 2,
          title: 'Honda Civic 2021',
          image: 'https://via.placeholder.com/600x400?text=Honda+Civic',
          price: '1,800,000 ₽',
          year: 2021,
          mileage: '25,000 км'
        }
      ],
      popularCars: [
        {
          id: 3,
          title: 'Nissan Altima 2020',
          image: 'https://via.placeholder.com/300x200?text=Nissan+Altima',
          price: '1,600,000 ₽',
          description: 'Отличное состояние, один владелец'
        },
        {
          id: 4,
          title: 'Mazda CX-5 2021',
          image: 'https://via.placeholder.com/300x200?text=Mazda+CX-5',
          price: '2,200,000 ₽',
          description: 'Полный привод, кожаный салон'
        }
      ]
    }
  }
}
</script>

<style scoped>
.v-carousel-item {
  height: 400px;
}
</style>
