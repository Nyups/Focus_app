<script setup lang="ts"></script>

<template>


  <section class="notes">
  <h1 class="heading">NOTES</h1>
    <div class="fake-book">
      <div class="left-page">
        <textarea name="left" id="l-page" placeholder="I'm empty bro..."></textarea>
      </div>

      <div class="right-page">
        <textarea name="right" id="r-page" placeholder="Please bro..."></textarea>
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
  padding: 20px;
}

.heading {
  text-align: center;
}

.fake-book {
  display: flex;
  min-height: 500px;
  margin: 20px;
  background: #fffdf5;
  border-radius: 5px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
}
/* box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);    Lighter shadow */

.left-page,
.right-page {
  flex: 1;
  padding: 20px;
  min-width: 0;
}

.left-page {
  border-right: 1px solid #ddd;
}

textarea {
  width: 100%;
  height: 100%;
  min-height: 460px;
  resize: none;
  border: none;
  outline: none;
  background: transparent;
  font-family: inherit;
  font-size: 16px;
  line-height: 1.8;
  color: #333;
}

textarea::placeholder {
  color: #aaa;
}
</style>
