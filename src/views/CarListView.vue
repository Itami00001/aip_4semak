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
                v-for="car in myAds"
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
import { mapGetters } from 'vuex'

export default {
  computed: {
    ...mapGetters({
      myAds: 'cars/myAds'
    })
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
