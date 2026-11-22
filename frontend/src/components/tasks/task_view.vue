<script setup lang="ts"></script>

<template>
  <section class="render">

  <h1 class="heading">Task</h1>
  <div class="task-container">
    <div class="undone">

      <div class="task-card">
        <h2 class="task-title">Finish the app</h2>
        <p class="task-text">styling and more component blabla <br>
        thats all</p>
      </div>

    </div>
  </div>

  <hr class="divider">

  <h1 class="heading">Completed</h1>
  <div class="completed-tasks-container">
    <div class="completed"></div>
  </div>

  </section>
</template>

<style scoped>
.render {
  background-color: white;
  box-shadow: 0 6px 6px rgba(0, 0, 0, 1);
  border-radius: 10px;
}

.heading {
  text-align: center;
}

.separation {
  text-decoration: underline;
  width: 100%;
}

.divider {
  width: 80%;
}
</style>
