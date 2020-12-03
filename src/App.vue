<template>
  <v-app>
    <v-container>
      <Header/>
      <RowTotalIncomeExpense/>
      <FormInput/>


      <v-container class="d-flex justify-space-around">
        <v-col cols="6">
          <div class="text-h5 text-center">Income</div>
          <EachItem 
          v-for="(item,index) in incomeItems" 
          :key="item.id"
          :index="index" 
          color="green"
          list="incomeItems"
          :money="item.money"
          :text="item.content"></EachItem>
        </v-col>
        <v-col cols="6">
          <div class="text-h5 text-center">Expense</div>
          <EachItem 
          v-for="(item,index) in expenseItems" 
          :key="item.id" 
          :index="index" 
          color="red"
          list="expenseItems"
          :money="item.money"
          :text="item.content"></EachItem>
        </v-col>
      </v-container>
    </v-container>
  </v-app>
</template>

<script>
import { mapGetters } from 'vuex';
import Header from './components/Header';
import FormInput from './components/FormInput';
import RowTotalIncomeExpense from './components/RowTotalIncomeExpense';
import EachItem from './components/EachItem';

export default {
  components: {
    Header,
    FormInput,
    RowTotalIncomeExpense,
    EachItem,
  },

  computed: {
    ...mapGetters([
      'incomeItems',
      'expenseItems',
    ]),
  },
  methods: {

  }

};
</script>

<style scoped>
v-app {
  background-color: #bdbdbd;
}
</style>
