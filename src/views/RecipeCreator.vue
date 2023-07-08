<template>
  <div>
    <h2>Neues Rezept speichern</h2>

    <form @submit.prevent="submitForm">
      <label htmlFor="name">Rezeptname:</label>
      <input v-model="newRecipe.name" id="name" required>

      <label htmlFor="zubereitung">Zubereitung:</label>
      <textarea v-model="newRecipe.zubereitung" id="zubereitung" required></textarea>

      <label htmlFor="zutaten">Zutaten:</label>
      <textarea v-model="newRecipe.zutaten" id="zutaten" required></textarea>

      <button type="submit">Rezept speichern</button>
    </form>
  </div>
</template>

<script>
export default {
  data() {
    return {
      newRecipe: {
        name: '',
        zubereitung: '',
        zutaten: ''
      }
    }
  },
  methods: {
    submitForm() {

      const baseUrl = process.env.VUE_APP_BACKEND_BASE_URL
      const endpoint = baseUrl + '/rezepte'
      const url = endpoint;

      const zutaten = this.newRecipe.zutaten.split(',');

      const recipeData = {
        name: this.newRecipe.name,
        beschreibung: this.newRecipe.zubereitung,
        zutaten: zutaten
      };

      fetch(url, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(recipeData)
      })
          .then(response => response.json())
          .then(data => console.log(data))
          .catch((error) => {
            console.error('Error:', error);
          });
    }
  }
}
</script>

<style scoped>
form {
  display: flex;
  flex-direction: column;
  width: 300px;
  margin: 0 auto;
}

input, textarea {
  margin-bottom: 10px;
  padding: 10px;
}

button {
  background-color: #42b983;
  color: white;
  border: none;
  border-radius: 5px;
  padding: 10px;
  cursor: pointer;
}

button:hover {
  background-color: #2c3e50;
}
</style>