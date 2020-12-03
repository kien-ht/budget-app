<template>
  <v-container class="d-flex px-6">
    <v-btn @click="addToList(addIncome)">
      <v-icon color="green"> mdi-plus </v-icon>
    </v-btn>
    <v-col cols="auto" class="py-0">
      <v-text-field         
        type="number"
        step="any"
        min="0" 
        suffix="đ"
        label="Type your expense/income" 
        class="ml-3 py-0"
        v-model="moneyExIn" 
        clearable></v-text-field>
    </v-col>
    <v-col class="py-0">
      <v-text-field 
        label="Describe your expense/income" 
        class="mx-3 py-0" 
        v-model="contentExIn" 
        clearable
      ></v-text-field>
    </v-col>
    <v-btn @click="addToList(addExpense)">
      <v-icon color="red"> mdi-minus </v-icon>
    </v-btn>
  </v-container>
</template>

<script>
import { mapActions } from 'vuex';

export default {
  data() {
    return {
      contentExIn: '',
      moneyExIn: '',
    }
  },
  methods: {
    ...mapActions([
      'addIncome',
      'addExpense'
    ]),
    addToList(action) {
      let input = {
          id: Date.now(),
          content: this.contentExIn,
          money: this.moneyExIn,
        }
      if(this.contentExIn && this.moneyExIn) {
        action(input)
        this.contentExIn = ''
        this.moneyExIn = '';
      }
    },
  }
}
</script>