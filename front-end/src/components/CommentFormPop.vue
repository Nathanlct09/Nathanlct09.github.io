<template>
    <div class="comment-form-container">
      <div class="form-header9">
        <router-link to ='/Home'>
        <img class="logo78" src="/image-2.png" alt="Test Image">
        </router-link>
        <input type="text" v-model="title" placeholder="Title" 
        />
      </div> 
      <form @submit.prevent="submitComment">
        <div class="form-group8">
          <label for="comment">Write your comment</label>
          <textarea id="comment" v-model="newComment.text" placehorder="Write your comment"></textarea>
        </div>
        <div class="form-group7">
          <input type="url" id="siteLink" v-model="newComment.siteLink" placeholder="Site Link:" />
        </div>
        <div class="from-group-container">
      <select id="category" v-model="selectedCategory">
        <option value="">Select a category</option>
        <option v-for="category in categories" :key="category.code" :value="category.name">
          {{ category.name }}
        </option>
      </select>
    </div>
        <button type="submit">Add Comment</button>
      </form>
    </div>
  </template>
  
  <script>
  import axios from 'axios';
  export default {
    data() {
      return {
        selectedCategory:'',
        categories:[
        // Example countries - you could also fetch this from an API
        { code: 'NE', name: 'News' },
        { code: 'EN', name: 'Entertainment' },
        { code: 'SP', name: 'Sport' },
        { code: 'TECH', name: 'Technology' },
        { code: 'H&W', name: 'Health & Wellness' },
        { code: 'TR', name: 'Travel' },
        { code: 'F&B', name: 'Fashion & Beauty' },
        { code: 'A&C', name: 'Art & Culture' },
        { code: 'N', name: 'Nature' },
       
      ],
          comment: '',
    siteLink: '',
    category: '',
    title:'',
    newComment:'',
    };
      },
    mounted() {
  // Simulez une requête API ou obtenez les données de votre choix
  this.fetchCategories();
},
methods: {
  async fetchCategories() {
      try {
        const response = await axios.get('url-de-votre-api/categories');
        this.categories = response.data; // suppose que la réponse est un tableau
      } catch (error) {
        console.error('Il y a eu une erreur lors de la récupération des catégories:', error);
      }
    },
      submitComment() {
        // Logique de soumission du commentaire
        console.log(this.newComment);
        // Redirection ou mise à jour de l'interface après la soumission
      },
      async setAll() {
          const result = await axios.get("http://localhost:3001/comment")
          console.log("res", result.data )
          this.filterComments = result.data
        },

        async setNews() {
          const result = await axios.get("http://localhost:3001/comment/News")
          console.log("res", result.data )
          this.filterComments = result.data
        },

        async setEntrainment() {
          const result = await axios.get("http://localhost:3001/comment/Entrainment")
          console.log("res", result.data )
          this.filterComments = result.data
        },

        async setSport() {
          const result = await axios.get("http://localhost:3001/comment/Sport")
          console.log("res", result.data )
          this.filterComments = result.data
        },

        async setTechnology() {
          const result = await axios.get("http://localhost:3001/comment/Technology")
          console.log("res", result.data )
          this.filterComments = result.data
        },

        async setHealthWeleness() {
          const result = await axios.get("http://localhost:3001/comment/Health&Weleness")
          console.log("res", result.data )
          this.filterComments = result.data
        },

        async setTravel() {
          const result = await axios.get("http://localhost:3001/comment/Travel")
          console.log("res", result.data )
          this.filterComments = result.data
        },

        async setFashionBeauty() {
          const result = await axios.get("http://localhost:3001/comment/Fashion&Beauty")
          console.log("res", result.data )
          this.filterComments = result.data
        },

        async setArtCulture() {
          const result = await axios.get("http://localhost:3001/comment/Art&Culture")
          console.log("res", result.data )
          this.filterComments = result.data
        },

        async setNature() {
          const result = await axios.get("http://localhost:3001/comment/Nature")
          console.log("res", result.data )
          this.filterComments = result.data
        },
        submitForm() {
      // Ici, vous traiteriez le formulaire, y compris le titre
      console.log(this.title, this.comment, this.siteLink, this.category);
      // ... logique de soumission du formulaire ...
    }  
    }
  }
  </script>
  
  <style>
  /* Ajoutez vos styles CSS ici pour correspondre à votre conception */
  .comment-form-container {
    max-width: 600px;
    margin: auto;
    padding: 20px;
    border-radius: 4px;
    margin-top: 15%;
    background-color: #333;
  }
  .form-header9{
    background-color: #333;
    color: black;
    padding: 10px;
    margin-bottom: 20px;
  }
  .form-group8{
    margin-bottom: 10px;
    color: #ddd;
    margin-right: 70%;
    width: 100%;
    border: 1px solid #ddd;
    background-color: black;
  }
  .form-group7 {
    margin-bottom: 10px;
    color: #ddd;
    margin-right: 70%;
    width: 100%;
  }
  ::placeholder {
  color: white;
  opacity: 1;
}
  label {
    display: block;
    margin-bottom: 5px;
  }
  .from-group-containe{
    border: 1px solid #ddd;
  }
  input, textarea, select {
    width: 100%;
    padding: 10px;
    margin-bottom: 10px;
    border: 1px solid #ddd;
    border-radius: 4px;
    background: black;
  }
  button {
    background-color: white;
    color: white;
    padding: 10px 15px;
    border: none;
    border-radius: 4px;
    cursor: pointer;
  }
  button:hover {
    background-color: grey;
  }
  .logo78{
    margin-right: 100%;
    width: 10%;
  }
textarea{
  background-color: black;
}
  </style>
  