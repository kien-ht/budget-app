<template>
    <v-container class="text-center">
        <div class="text-h2 blue--text font-weight-bold ">{{ total | vnd(total) }}</div>
        <v-container class="d-flex justify-space-around">
            <v-container class="text-h4 green white--text">{{ totalIncomes | vnd(totalIncomes) }}</v-container>
            <v-container class="text-h4 white--text deep-orange">{{ totalExpenses | vnd(totalExpenses)}}</v-container>
        </v-container>
    </v-container>
</template>

<script>
import { mapGetters } from 'vuex';

export default {
    computed: {
        ...mapGetters([
            'totalIncome',
            'totalExpense',
        ]),
        totalIncomes() {
            return this.totalIncome;
        },
        totalExpenses() {
            return this.totalExpense;
        },
        total() {
            return this.totalIncomes - this.totalExpenses
        }
    },
}
</script>