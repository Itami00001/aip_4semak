<template>
  <v-container>
    <v-row>
      <v-col cols="12">
        <h1 class="text-h4 mb-6">Мои объявления</h1>
      </v-col>
    </v-row>
    <v-row>
      <v-col cols="12">
        <v-card>
          <v-card-text>
            <v-list>
              <v-list-item
                v-for="car in myCars"
                :key="car.id"
              >
                <template v-slot:prepend>
                  <v-avatar>
                    <v-img :src="car.image"></v-img>
                  </v-avatar>
                </template>
                <v-list-item-title>{{ car.title }}</v-list-item-title>
                <v-list-item-subtitle>{{ car.price }} • {{ car.year }}</v-list-item-subtitle>
                <v-list-item-subtitle>{{ car.mileage }}</v-list-item-subtitle>
                <template v-slot:append>
                  <v-chip :color="getStatusColor(car.status)">
                    {{ getStatusText(car.status) }}
                  </v-chip>
                </template>
              </v-list-item>
            </v-list>
          </v-card-text>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  data() {
    return {
      myCars: [
        {
          id: 1,
          title: 'Toyota Camry 2022',
          image: 'https://via.placeholder.com/100x100?text=Toyota+Camry',
          price: '2,500,000 ₽',
          year: 2022,
          mileage: '15,000 км',
          status: 'active'
        },
        {
          id: 2,
          title: 'Honda Civic 2021',
          image: 'https://via.placeholder.com/100x100?text=Honda+Civic',
          price: '1,800,000 ₽',
          year: 2021,
          mileage: '25,000 км',
          status: 'pending'
        },
        {
          id: 3,
          title: 'Nissan Altima 2020',
          image: 'https://via.placeholder.com/100x100?text=Nissan+Altima',
          price: '1,600,000 ₽',
          year: 2020,
          mileage: '35,000 км',
          status: 'sold'
        }
      ]
    }
  },
  methods: {
    getStatusText(status) {
      const statusMap = {
        active: 'Активно',
        pending: 'На модерации',
        sold: 'Продано'
      }
      return statusMap[status] || status
    },
    getStatusColor(status) {
      const colorMap = {
        active: 'green',
        pending: 'orange',
        sold: 'red'
      }
      return colorMap[status] || 'grey'
    }
  }
}
</script>
