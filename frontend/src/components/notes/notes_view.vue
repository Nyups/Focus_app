<script setup lang="ts"></script>

<template>
  <section class="notes">
    <h1 class="heading">NOTES</h1>
    <div class="fake-book">
      <div class="left-page">
        <p>BAH</p>
      </div>

      <div class="right-page">
        <p>BUH</p>
      </div>
    </div>
  </section>
</template>

<style scoped>
.notes {
  width: 100%;
  background-color: white;
  box-shadow: 0 6px 6px rgba(0, 0, 0, 1);
  border-radius: 10px;
}

.heading {
  text-align: center;
}

.left {
  margin: 20px;
}

.right {
  margin: 20px
}
</style>
