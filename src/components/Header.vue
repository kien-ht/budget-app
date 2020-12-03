<template>
  <v-container class="d-flex flex-column align-center">
    <img src="../assets/logo.png" />
    <div class="display-1">{{ title }}</div>
  </v-container>
</template>

<script>
export default {
  data() {
    return {
      title: "KienHT Budget App Practice",
    };
  },
};
</script>

<style scoped>
img {
  width: 70px
}
</style>