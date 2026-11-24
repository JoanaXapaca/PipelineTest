<script setup lang="ts">
import { ref, computed } from 'vue'

// Counter state
const count = ref(0)

// Message that changes based on the counter value
const message = computed(() => {
  if (count.value === 0) return 'Start counting'
  if (count.value < 5) return 'Keep going'
  return 'Good job'
})

// Increment the counter by 1
function increment() {
  count.value++
}

// Reset the counter back to 0
function reset() {
  count.value = 0
}
</script>

<template>
  <h1>You did it!</h1>
  <p>
    Visit <a href="https://vuejs.org/" target="_blank" rel="noopener">vuejs.org</a> to read the
    documentation
  </p>
  <div>
    <p data-testid="count">Count: {{ count }}</p>
    <p data-testid="message">{{ message }}</p>
    <button data-testid="increment" @click="increment">Increment</button>
    <button data-testid="reset" @click="reset">Reset</button>
  </div>
</template>

<style scoped></style>