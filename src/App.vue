<template>
  <div id="app">
    <router-link to="/" class="button">Home</router-link>
    <router-link to="/recipecreator" class="button">Recipe Creator</router-link>
    <router-view />
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style>
.button {
  display: inline-block;
  margin: 10px;
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 4px;
  text-decoration: none;
  color: black;
  background-color: #f8f8f8;
  transition: background-color 0.3s ease;
}

.button:hover {
  background-color: #e8e8e8;
}
</style>
