<script lang="ts" setup>


defineProps<{
  sessionCount: number;
}>();


</script>

<template>
  <h2>Session Counter</h2>
  <p>Sessions completed: {{ sessionCount }}</p>
</template>
