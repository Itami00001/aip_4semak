<template>
  <v-container>
    <v-row>
      <v-col cols="12">
        <h1 class="text-h4 mb-6">Мои заказы</h1>
      </v-col>
    </v-row>
    <v-row>
      <v-col cols="12">
        <v-card>
          <v-card-text>
            <v-list>
              <v-list-item
                v-for="order in orders"
                :key="order.id"
              >
                <template v-slot:prepend>
                  <v-checkbox
                    v-model="order.selected"
                  ></v-checkbox>
                </template>
                <v-list-item-title>{{ order.carTitle }}</v-list-item-title>
                <v-list-item-subtitle>{{ order.name }} - {{ order.phone }}</v-list-item-subtitle>
                <template v-slot:append>
                  <v-chip
                    :color="getStatusColor(order.status)"
                    text-color="white"
                  >
                    {{ getStatusText(order.status) }}
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
      orders: [
        {
          id: 1,
          carTitle: 'Toyota Camry 2022',
          name: 'Иван Иванов',
          phone: '+7 (999) 123-45-67',
          status: 'pending',
          selected: false
        },
        {
          id: 2,
          carTitle: 'Honda Civic 2021',
          name: 'Петр Петров',
          phone: '+7 (888) 987-65-43',
          status: 'confirmed',
          selected: false
        },
        {
          id: 3,
          carTitle: 'Nissan Altima 2020',
          name: 'Сергей Сергеев',
          phone: '+7 (777) 555-22-11',
          status: 'completed',
          selected: false
        }
      ]
    }
  },
  methods: {
    getStatusText(status) {
      const statusMap = {
        pending: 'В обработке',
        confirmed: 'Подтвержден',
        completed: 'Завершен',
        cancelled: 'Отменен'
      }
      return statusMap[status] || status
    },
    getStatusColor(status) {
      const colorMap = {
        pending: 'orange',
        confirmed: 'blue',
        completed: 'green',
        cancelled: 'red'
      }
      return colorMap[status] || 'grey'
    }
  }
}
</script>
