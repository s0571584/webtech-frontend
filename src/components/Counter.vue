<template>
  <div>
    <button @click="increment">Erhöhen</button>
    <p>{{ count }}</p>
  </div>
</template>

<script>
export default {
  data() {
    return {
      count: 0,
    };
  },
  methods: {
    increment() {
      this.count++;
    },
  },
};
</script>
