<template>
  <div class="container">
    <h2>Neues Rezept erstellen mit KI</h2>

    <form @submit.prevent="submitForm" class="form">
      <label htmlFor="zutaten">Zutaten:</label>
      <textarea v-model="zutaten" id="zutaten" required></textarea>

      <button type="submit">Rezept erstellen</button>
    </form>

    <div v-if="recipe" class="recipe-card">
      <h3>Rezept:</h3>
      <div v-html="recipe"></div>
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
        const baseUrl = process.env.VUE_APP_BACKEND_BASE_URL
        console.log(process.env.VUE_APP_BACKEND_BASE_URL)
        const endpoint = baseUrl + '/api/openai/chat'
        const response = await fetch(endpoint, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify({ zutaten })
        });
        if (!response.ok) throw new Error('Response not ok');
        const jsonResponse = await response.json();

        this.recipe = jsonResponse.content
            .split('\n\n')
            .map(para => `<p>${para.replace(/\n/g, '<br/>')}</p>`)
            .join('');

      } catch (error) {
        console.error('Error:', error.message);
        alert("Ein Fehler ist aufgetreten. Wenden Sie sich an den Entwickler.");
      }
    }
  }

}
</script>

<style scoped>
.container {
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 2em;
  background-color: #f9f9f9;
}

.form {
  display: flex;
  flex-direction: column;
  width: 500px;
  margin: 1em auto;
  background-color: #ffffff;
  padding: 1em;
  border-radius: 8px;
  box-shadow: 0 2px 8px rgba(0,0,0,0.1);
}

textarea {
  margin-bottom: 10px;
  padding: 10px;
  border-radius: 4px;
  border: 1px solid #ccc;
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

.recipe-card {
  width: 500px;
  background-color: #ffffff;
  margin-top: 1em;
  padding: 1em;
  border-radius: 8px;
  box-shadow: 0 2px 8px rgba(0,0,0,0.1);
}
</style>