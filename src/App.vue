<script setup lang="ts">
import { ref, computed } from 'vue'

const count = ref(0)

const message = computed(() => {
  if (count.value === 0) return 'Comeca a contar'
  if (count.value < 5) return 'Continua'
  return 'Bom trabalho'
})

function increment() {
  count.value++
}

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