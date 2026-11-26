<script setup lang="ts">
import render_area from './components/render_area.vue';
import test_view from './test_area/test_view.vue';
</script>

<template>
  <h2>Locked in</h2>
  <section class="render">
<render_area/>
</section>
<test_view/>
</template>

<style scoped>
.render {
  background-color: lightgrey;
  width: 95%;

  display: flex;
  margin: 0 auto;
  border-radius: 10px;
}
</style>
