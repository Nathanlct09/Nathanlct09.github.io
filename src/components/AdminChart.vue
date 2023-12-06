<template>
  <div class="admin-panel">
    <header class="admin-header">
      <h1>Dashboard</h1>
      <router-link to="/Home">
      <img src="/image-2.png" alt="Logo" class="logo" /> 
    </router-link>
    </header>
    <div>
      <canvas ref="chart"></canvas>
  </div>
    <div class="chart-container">
    <contry-chart></contry-chart>
     </div>
     <div v-for="KPI in userCount">
      Commet & Revew community: {{ KPI }}
     </div>
     <div v-for="KPI in commentCount">
      Nomber of comments: {{ KPI }}
    </div>
  </div>
</template>

<script>
import axios from 'axios'
import ContryChart from './ContryChart.vue';
import { Chart, registerables } from 'chart.js';;
export default {
  props: {
    chartData: {
      type: Object,
      required: true
    },
    options: {
      type: Object,
      default: () => {}
    },
  name: 'App',
  components: {
    ContryChart,
    
  }
},
  data() {
    return {
      chartData: {
        labels: [],
        datasets: [
          {
            label: 'Nombre d\'utilisateurs',
            backgroundColor: '#f87979',
            data: []
          }
        ]
      },
      chartOptions: {
        responsive: true,
        maintainAspectRatio: false
      },
      userCount: 0,
      commentCount: 0,
      users: [

        { id: 1, username: 'user1' },
        { id: 2, username: 'user2' },
       
      ],
    }
  },
   mounted() {
    const ctx = this.$refs.chart.getContext('2d');
    new Chart(ctx, {
      type: 'bar',
      data: this.chartData,
      options: this.options
    });
  },
  beforeDestroy() {
    clearInterval(this.polling);
  },
  methods: {
    async fetchData() {
      await Promise.all([this.fetchUserCount(), this.fetchCommentCount()]);
    },
    async fetchUserCount() {
      try {
        const response = await axios.get('http://localhost:3001/KPI/user');
        this.userCount = response.data.count;
      } catch (error) {
        console.error("Erreur lors de la récupération du nombre d'utilisateurs : ", error);
      }
    },
    async fetchCommentCount() {
      try {
        const response = await axios.get('http://localhost:3001/KPI/comment');
        this.commentCount = response.data.count;
      } catch (error) {
        console.error("Erreur lors de la récupération du nombre de commentaires : ", error);
      }
    }
  }
}
</script>

<style scoped>
.chart-container {
  margin: 20px;
  padding: 20px;
  background-color: white;
  border-radius: 10px;
}
.admin-panel {
  margin: 0 auto;
  max-width: 800px;
}

.admin-header {
  background-color: #333;
  color: white;
  padding: 20px;
  text-align: center;
}

.admin-comments, .admin-links, .user-list {
  margin-top: 20px;
}

button {
  margin-top: 10px;
}

table {
  width: 100%;
  border-collapse: collapse;
}

th, td {
  border: 1px solid #ddd;
  padding: 8px;
}

th {
  background-color: #f2f2f2;
}

/* Plus de styles... */
</style>
