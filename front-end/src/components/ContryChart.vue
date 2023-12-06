<template>
  <div>
    <bar-chart :chart-data="chartData"></bar-chart>
  </div>
</template>

<script>
import axios from 'axios';

export default {
  components: {
    
  },
  data() {
    return {
      chartData: null
    };
  },
  async created() {
    try {
      const response = await axios.get('URL_DE_VOTRE_API'); // Remplacez par l'URL de votre API
      this.chartData = this.formatData(response.data);
    } catch (error) {
      console.error("Erreur lors de la récupération des données : ", error);
    }
  },
  methods: {
    formatData(data) {
      // Transformez les données de l'API en format compatible avec Chart.js
      // Exemple: { labels: ['USA', 'France', 'Japon'], datasets: [{ data: [100, 50, 30] }] }
      return {}; 
    }
  }
};
</script>

<style>
</style>
