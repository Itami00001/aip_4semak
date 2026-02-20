<template>
  <v-dialog v-model="dialog" max-width="600px">
    <v-card>
      <v-card-title class="text-h5">
        Редактирование объявления
        <v-spacer></v-spacer>
        <v-btn icon @click="dialog = false">
          <v-icon>mdi-close</v-icon>
        </v-btn>
      </v-card-title>
      <v-card-text>
        <v-form ref="form" v-model="valid" lazy-validation>
          <v-text-field
            label="Марка автомобиля"
            v-model="car.brand"
            outlined
            :rules="[v => !!v || 'Марка обязательна']"
          ></v-text-field>
          <v-text-field
            label="Модель"
            v-model="car.model"
            outlined
            :rules="[v => !!v || 'Модель обязательна']"
          ></v-text-field>
          <v-text-field
            label="Год выпуска"
            v-model="car.year"
            type="number"
            outlined
            :rules="[v => !!v || 'Год обязателен']"
          ></v-text-field>
          <v-text-field
            label="Пробег"
            v-model="car.mileage"
            outlined
            :rules="[v => !!v || 'Пробег обязателен']"
          ></v-text-field>
          <v-text-field
            label="Цена"
            v-model="car.price"
            outlined
            prefix="₽"
            :rules="[v => !!v || 'Цена обязательна']"
          ></v-text-field>
          <v-text-field
            label="Телефон"
            v-model="car.phone"
            outlined
            :rules="[v => !!v || 'Телефон обязателен']"
          ></v-text-field>
          <v-textarea
            label="Описание"
            v-model="car.description"
            outlined
            rows="4"
            :rules="[v => !!v || 'Описание обязательно']"
          ></v-textarea>
        </v-form>
      </v-card-text>
      <v-card-actions>
        <v-spacer></v-spacer>
        <v-btn color="primary" :disabled="!valid" @click="save">Сохранить</v-btn>
        <v-btn @click="dialog = false">Отмена</v-btn>
      </v-card-actions>
    </v-card>
  </v-dialog>
</template>

<script>
export default {
  props: {
    dialog: Boolean,
    carData: Object
  },
  data() {
    return {
      valid: false,
      car: { ...this.carData }
    }
  },
  methods: {
    save() {
      if (this.$refs.form.validate()) {
        this.$emit('save', this.car)
        this.dialog = false
      }
    }
  }
}
</script>
