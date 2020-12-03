import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

Vue.config.devtools = true;

const state = {
  expenseItems:
    JSON.parse(localStorage.getItem("expense-todo-list-practice")) || [],
  incomeItems:
    JSON.parse(localStorage.getItem("income-todo-list-practice")) || [],
};

const getters = {
  totalExpense(state) {
    let sum = 0;
    state.expenseItems.forEach((element) => {
      sum += parseFloat(element.money);
    });
    return sum;
  },
  expenseItems(state) {
    return state.expenseItems;
  },
  totalIncome(state) {
    let sum = 0;
    state.incomeItems.forEach((element) => {
      sum += parseFloat(element.money);
    });
    return sum;
  },
  incomeItems(state) {
    return state.incomeItems;
  },
};

const mutations = {
  ADD_EXPENSE(state, payload) {
    state.expenseItems.push(payload);
  },
  ADD_INCOME(state, payload) {
    state.incomeItems.push(payload);
  },
  DELETE_ITEM(state, payload) {
    state[payload.list].splice(payload.index, 1);
  },
  EDIT_ITEM(state, payload) {
    state[payload.list][payload.index].content = payload.newContent;
    state[payload.list][payload.index].money = payload.newMoney;
  },
};

const actions = {
  addExpense({ commit }, payload) {
    commit("ADD_EXPENSE", payload);
  },
  addIncome({ commit }, payload) {
    commit("ADD_INCOME", payload);
  },
  deleteItem({ commit }, payload) {
    commit("DELETE_ITEM", payload);
  },
  editItem({ commit }, payload) {
    commit("EDIT_ITEM", payload);
  },
};

const plugins = [
  (store) => {
    store.subscribe((mutation, { expenseItems, incomeItems }) => {
      localStorage.setItem(
        "expense-todo-list-practice",
        JSON.stringify(expenseItems)
      );
      localStorage.setItem(
        "income-todo-list-practice",
        JSON.stringify(incomeItems)
      );
    });
  },
];

export default new Vuex.Store({
  state,
  getters,
  mutations,
  actions,
  plugins,
});
