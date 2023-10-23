<script setup lang="ts">
const route = useRoute();
</script>
<template>
  <section>
    <p class="test">This section will display without appAlert</p>
    <AppAlert class="second-test">This page will be displayed at the /about route.</AppAlert>
  </section>
</template>