<template>
  <div>
    <page-header></page-header>
    <h1>Home Page</h1>
  </div>
</template>

<script>
import PageHeader from "@/components/PageHeader.vue";
export default {
  components: {
    PageHeader,
  },
};
</script>

<style scoped>
h1 {
  text-align: center;
  background-color: seagreen;
}
</style>