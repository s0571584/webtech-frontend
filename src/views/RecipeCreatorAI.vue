<template>
  <div>
    <h2>Neues Rezept erstellen mit KI</h2>

    <form @submit.prevent="submitForm">
      <label htmlFor="zutaten">Zutaten:</label>
      <textarea v-model="zutaten" id="zutaten" required></textarea>

      <button type="submit">Rezept erstellen</button>
    </form>

    <div v-if="recipe">
      <h3>Rezept:</h3>
      <p>{{ recipe }}</p>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      zutaten: '',
      recipe: null
    }
  },
  methods: {
    async submitForm() {
      if (!this.zutaten.trim()) {
        alert("Please enter some ingredients.");
        return;
      }
      const zutaten = this.zutaten;
      try {
        const response = await fetch('http://localhost:8082/api/openai/chat', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify({ zutaten })
        });
        if (!response.ok) throw new Error('Response not ok');
        const jsonResponse = await response.json();
        this.recipe = jsonResponse.content;
      } catch (error) {
        console.error('Error:', error.message);
        alert("Ein Fehler ist aufgetreten. Wenden Sie sich an den Entwickler.");
      }
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

textarea {
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
