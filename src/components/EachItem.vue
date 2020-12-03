<template>
  <v-container class="d-flex justify-space-between pl-0" :class="colorText">

    <v-col cols="4" class="d-flex py-0 px-2">
      <div v-show="!editting" class="text-h7">{{ moneyInput | vnd(moneyInput) }}</div>

      <v-text-field
        type="number"
        step="any"
        min="0"
        suffix="đ"
        v-show="editting"
        class="text-h7 mx-3 pt-0"
        v-model.number="moneyInput" 
        @blur="handleBlur"
      ></v-text-field>
    </v-col>

    <v-col cols="6" class="d-flex py-0 px-2">

      <div v-show="!editting" class="text-h7">{{ textInput }}</div>

      <v-text-field
        v-show="editting"
        class="text-h7 mx-3 pt-0"
        v-model="textInput"  
        @blur="handleBlur"
      ></v-text-field>
    </v-col>

    <div>
      <v-icon 
        dark 
        left 
        @click="delItem" 
        class="red--text"
      > mdi-delete </v-icon>
      <v-icon
        dark
        left
        @click="editOneItem"
        v-show="!editting"
        class="orange--text"
      >
        mdi-file-document-edit-outline
      </v-icon>
      <v-icon 
        dark left 
        @click="editOneItem" 
        v-show="editting" 
        class="green--text"
      >
        mdi-check
      </v-icon>
    </div>
  </v-container>
</template>

<script>
import { mapActions } from 'vuex';

export default {
  data() {
    return {
      textInput: this.text,
      moneyInput: this.money,
      editting: false,
      colorText: `${this.color}--text`,
    };
  },
  props: ["index", "text", "money", "list", "color"],

  methods: {
    ...mapActions([
      'deleteItem',
      'editItem',
    ]),
    delItem() {
      this.deleteItem({
        list: this.list,
        index: this.index
      })
    },
    editOneItem() {
      this.editting = !this.editting;
    },    
    handleBlur() {
      if (!this.textInput || !this.moneyInput) {
        this.delItem();
      } else {
        this.editting = !this.editting;
        this.editItem({
          list: this.list,
          newContent: this.textInput,
          newMoney: this.moneyInput,
          index: this.index,
        })
      }
    }
  },
};
</script>

<style scoped>
</style>