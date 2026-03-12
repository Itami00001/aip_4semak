<template>
  <v-container>
    <v-row justify="center">
      <v-col cols="12" sm="10" md="8">
        <v-card class="elevation-12">
          <v-toolbar dark color="primary">
            <v-toolbar-title>Создание объявления</v-toolbar-title>
          </v-toolbar>
          <v-card-text>
            <v-form ref="form" v-model="valid" lazy-validation>
              <v-row>
                <v-col cols="12" sm="6">
                  <v-text-field
                    label="Марка автомобиля"
                    v-model="car.brand"
                    outlined
                    :rules="[v => !!v || 'Марка обязательна']"
                  ></v-text-field>
                </v-col>
                <v-col cols="12" sm="6">
                  <v-text-field
                    label="Модель"
                    v-model="car.model"
                    outlined
                    :rules="[v => !!v || 'Модель обязательна']"
                  ></v-text-field>
                </v-col>
              </v-row>
              <v-row>
                <v-col cols="12" sm="6">
                  <v-text-field
                    label="Год выпуска"
                    v-model="car.year"
                    type="number"
                    outlined
                    :rules="[v => !!v || 'Год обязателен']"
                  ></v-text-field>
                </v-col>
                <v-col cols="12" sm="6">
                  <v-text-field
                    label="Пробег"
                    v-model="car.mileage"
                    outlined
                    :rules="[v => !!v || 'Пробег обязателен']"
                  ></v-text-field>
                </v-col>
              </v-row>
              <v-row>
                <v-col cols="12" sm="6">
                  <v-text-field
                    label="Цена"
                    v-model="car.price"
                    outlined
                    prefix="₽"
                    :rules="[v => !!v || 'Цена обязательна']"
                  ></v-text-field>
                </v-col>
                <v-col cols="12" sm="6">
                  <v-text-field
                    label="Телефон"
                    v-model="car.phone"
                    outlined
                    :rules="[v => !!v || 'Телефон обязателен']"
                  ></v-text-field>
                </v-col>
              </v-row>
              <v-row>
                <v-col cols="12">
                  <v-textarea
                    label="Описание"
                    v-model="car.description"
                    outlined
                    rows="4"
                    :rules="[v => !!v || 'Описание обязательно']"
                  ></v-textarea>
                </v-col>
              </v-row>
            </v-form>
          </v-card-text>
          <v-card-actions>
            <v-spacer></v-spacer>
            <v-btn color="success" :disabled="!valid" @click="createAd">Создать объявление</v-btn>
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
      valid: false,
      car: {
        brand: '',
        model: '',
        year: '',
        mileage: '',
        price: '',
        phone: '',
        description: ''
      }
    }
  },
  methods: {
    createAd() {
      if (this.$refs.form.validate()) {
        const carData = {
          brand: this.car.brand,
          model: this.car.model,
          title: `${this.car.brand} ${this.car.model} ${this.car.year}`,
          image: `https://i.pinimg.com/1200x/2a/9e/7c/2a9e7c28a7f282a17317ca1669b672aa.jpg`,
          price: this.car.price,
          year: parseInt(this.car.year),
          mileage: this.car.mileage,
          description: this.car.description,
          phone: this.car.phone
        }

        this.$store.dispatch('cars/createCar', carData)
          .then(() => {
            console.log('Объявление создано успешно')
            this.$router.push('/list')
          })
          .catch(error => {
            console.error('Ошибка создания объявления:', error)
          })
      }
    }
  }
}
</script>
