<template>
  <div class="home">
    <h1>Mache dir nie wieder Sorgen um das Abendessen.</h1>
    <p>Gebe deine Zutaten ein und lasse dir von der künstlichen Intelligenz ein Rezept erstellen.</p>
  </div>
</template>

<script>
export default {
  name: 'HomePage',
}
</script>

<style scoped>
.home {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 70vh;
  background-image: url("../assets/foodpic.jpg ");
  background-size: cover;
  background-position: center;
  padding: 20px;
  text-align: center;
}

h1 {
  margin: 60px 0 0;
  font-family: Arial, sans-serif;
  font-size: 48px;
  color: beige;
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.5);
}

p {
  font-family: Arial, sans-serif;
  font-size: 22px;
  color: beige;
  line-height: 1.5;
  text-shadow: 1px 1px 2px rgba(0, 0, 0, 0.5);
}
</style>
