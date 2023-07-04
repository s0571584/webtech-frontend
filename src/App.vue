<template>
  <div id="app">
    <nav>
      <router-link to="/" class="button">Home</router-link>
      <router-link to="/recipecreator" class="button">Manuell Rezept erstellen</router-link>
      <router-link to="/recipecreatorAI" class="button">Rezept mit meinen Zutaten erstellen</router-link>
    </nav>
    <router-view />
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style>
nav {
  display: flex;
  justify-content: center;
  background-color: #f8f8f8;
  padding: 20px 0;
}

.button {
  display: inline-block;
  margin: 0 10px;
  padding: 10px 20px;
  font-size: 16px;
  border: none;
  border-radius: 30px;
  text-decoration: none;
  color: white;
  background-color: #42b983;
  transition: background-color 0.3s ease, transform 0.3s ease;
  box-shadow: 0 2px 5px 0 rgba(0,0,0,0.16), 0 2px 10px 0 rgba(0,0,0,0.12);
}

.button:hover {
  background-color: #2c3e50;
  transform: scale(1.05);
}
</style>
