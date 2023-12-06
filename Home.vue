<template>
  <div class="responsive-div">
    <div id="app">
      <header class="app-header">
        <img class="logo12" src="/image-2.png" alt="Test Image">
         <button @click="toggleSidebar" class="sidebar-toggle">☰</button>
        <div class="header-controls">
          <input
      type="text"
      v-model="searchUrl"
      @input="updateUrl"
      placeholder="Enter a URL..."
    />
          <router-link to="/profile">
          <link href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.1/css/all.min.css" rel="stylesheet">
          <i class="fa fa-user user-icon" aria-hidden="true"></i>
          </router-link>
        </div>
      </header>
      <aside class="sidebar" :class="{ 'is-active': sidebarActive }">
        <nav class="menu">
          <div class="filter-option">
          <ul>
            <li><button @click="setAll('all')">Tous</button></li>
            <li> <button @click="setNews('News')">News</button> </li>
            <li><button @click="setEntrainment('Entertainment')">Entertainment</button></li>
            <li><button @click="setSport('Sport')">Sport</button></li>
            <li><button @click="setTechnology('Technology')">Technology</button></li>
            <li><button @click="setHealthWeleness('Health & Welness')">Health & Wellness</button></li>
            <li><button @click="setTravel('Travel')">Travel</button></li>
            <li><button @click="setFashionBeauty('Fashion & Beauty')">Fashion & Beauty</button></li>
            <li><button @click="setArtCulture('Art & Culture')">Art & Culture</button></li>
            <li><button @click="setNature('Nature')">Nature</button></li>
          </ul>
          </div>
        </nav>
      </aside><div v-for="comment in comments" :key="comment.id">
    <div @click="openPopup(comment)">
    </div>
  </div>
  <comment-popup v-if="isPopupVisible" :comment="currentComment" @closePopup="isPopupVisible=false"></comment-popup>
      <router-link to="/CommentFormPop">
        <button class="Button19" @click="Add">Add</button>
      </router-link>
      <CommentSection :filter="filter" />
      <section class="comments">
        <div v-for="comment in filterComments" :key="comment.id" @click="selectComment(comment)">
          <!--<div v-if="filter === 'all' || comment.category === filter">-->
            <p @click="selectComment(comment)" >{{ comment.title }} </p>
            <p>{{ comment.description }} {{ comment.category }} {{ comment.url }} </p>            
         <!-- </div>-->
        </div>
      </section>
      <CommentPopup
    v-if="show"
    :comment="selectedComment"
    @close="show = false"
  />
    </div>
    </div>
  </template>
  
  <script>
  import Login from './components/Login.vue';
  import CommentPopup from './components/CommentPopup.vue';
  import CommentFormPop from './components/CommentFormPop.vue';
  import axios from 'axios';
  export default {
    components:{
      Login,
      CommentPopup,
      CommentFormPop
    },
    name: "ResponsiveDiv",
    data() {
      return {
        searchUrl: "",
        sidebarActive: false,
        newComment: '', 
        filterComments: [], 
      selectedComment: null, 
      show: false, 
      isPopupVisible: false,
      currentComment: null,
         comments: [
       //{ id: 1, category: 'News', text: 'Commentaire sur les news example', url:'http://example.com' },
       // { id: 1, category: 'News', text: 'Commentaire sur les news notion', url:'http://notion.com' },
       //{ id: 2, category: 'Entertainment', text: 'Commentaire sur entertainment...' },
      // { id: 1, category: 'Sport', text: 'Commentaire sur le sport...' },
      // { id: 2, category: 'Technology', text: 'Commentaire sur la technology...' },
       //  { id: 1, category: 'Health & Wellness', text: 'Commentaire sur Health & wellness...' },
       // { id: 2, category: 'Travel', text: 'Commentaire sur le travel...' },
       // { id: 2, category: 'Fashion & Beauty', text: 'Commentaire sur fashion & beauty...' },
       // { id: 1, category: 'Art & Culture', text: 'Commentaire sur la Art & culture...' },
       //  { id: 2, category: 'Nature', text: 'Commentaire sur la nature ...' },
        
       ],
      comment: [
        { id: 1, description: 'http://example.com' },
        { id: 2, description: 'http://news.com' },
      ],
      filterComments: [],
      activeFilter: '',
      filter: 'all',
      selectedComment: null,
      popupVisible: false
    };
  },
  async mounted(){
    const result = await axios.get("http://localhost:3001/comment")
      console.log("res", result.data )
      this.filterComments = result.data
  },
  created() {
    this.searchUrl = this.$route.query.url || '';
  },
  methods: {
    openPopup(comment) {
      this.currentComment = comment; // L'objet commentaire contient toutes les infos.
      this.isPopupVisible = true;
    },
    postComment() {
      axios.post('http://localhost:3001/comment', { comment: this.newComment })
        .then(response => {
        })
        .catch(error => {
        });
      this.newComment = '';
    },
    goToAddComment() {
      this.router.push({ name: 'AddComment' });
    },
    selectComment(comment) {
      console.log("Hello je suis ici");
      this.selectedComment = comment;
      this.show = true;
      console.log("finis");
      console.log(this.show)
    },
        test(com) {
          console.log(com)
          if (com == undefined)
            return false
          console.log(com.includes(this.searchUrl))
          return com.includes(this.searchUrl)
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
      //  setFilter(category) {
         // this.filter = category;
           //this.filterComments(category)
      // },
        // filterComments(category) {
          //this.activeFilter = category;
          // this.filteredComments = this.comments.filter(comment => comment.category === category);
        // },
      toggleSidebar() {
        this.sidebarActive = !this.sidebarActive;
      },
      goToLogin() {
        this.$router.push('/login');
      },
      updateUrl() {
        console.log(this.searchUrl)
    },
  },
  computed: {
    filteredComments() {
      return this.comments.filter(comment => comment.description.includes(this.searchUrl));
    },
  },
  watch: {
    '$route.query.url'(newUrl) {
      this.searchUrl = newUrl || '';
    },
  },
    // created() {
    // this.filteredComments = this.comments;
    // },
  computed: {
    filteredComments() {
      if (this.filter === 'all') {
        return this.comments;
      } else {
        return this.comments.filter(comment => comment.category === this.filter);
      }
    }
  }
}
  </script>
  
  <style>
  @media (max-width: 600px) {
  .responsive-div {
  }
}
@media (min-width: 601px) and (max-width: 1024px) {
  .responsive-div {

  }
}

@media (min-width: 1025px) {
  .responsive-div {
  
  }
}
  html, body, #app {
    margin: 0;
    padding: 0;
    width: 100%;
    height: 100%;
  }
  
  body {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    color: #333;
  }
  .filter-option:hover {
  background-color: #333; 
  }
  .sidebar-toggle {
    background: none;
    border: none;
    color: white;
    font-size: 1.5em;
    cursor: pointer;
    margin-left: auto;
  }
  
  .sidebar {
    position: fixed;
    left: 0;
    top: 0;
    bottom: 0;
    background: grey;
    color: white;
    transform: translateX(-100%);
    transition: transform 0.3s ease;
    width: 25%;
    z-index: 10;
  }
  
  .sidebar.is-active {
    transform: translateX(0);
    background-color: #555;
  }
  .sidebar:hover{
    background-color: #333;
  }
  .menu {
    list-style: none;
    padding: 0;
    width: 100%;
  }
  
  .menu li a {
    color:blue;
    text-decoration: none;
    display: block;
    padding: 10px;
  }
  
.menu button{
  margin-left: 0%;
  width: 25%;
}

  .menu li a:hover {
    background: blue; 
  }
  .app-header {
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 100%;
    color: black;
  }
  .logo12 {
    margin-left: 1%; 
    width: 8%; 
    height: auto;
  }
  
  .header-controls {
    display: flex;
    align-items: center;
    bottom: 100%;
  }
  
  .search-bar1 {
    padding: 0.5em;
    margin-left: 40%; 
    flex-grow: 1;
    margin-top: 10%;
  }
  
  .user-icon {
    color: lightblue;
    margin-left: 450%; 
    font-size: 1.5em; 
    cursor: pointer;
  }

.comments-details {
  display: flex;
  justify-content: space-between; /* Pour séparer l'auteur et la date */
  font-size: 0.8em; /* Plus petit que le texte du commentaire */
  color: #666; /* Couleur grise pour les détails */
}

.comments-author {
  font-weight: bold; /* Nom de l'auteur en gras */
}

.Button19{
  
}
  
  .comments {
    background-color: #ccc; /* Correspond à la couleur de la zone de saisie */
  border-radius: 5px;
  padding: 10px;
  margin-bottom: 10px; /* Espace entre les commentaires */
  position: relative; /* Pour le positionnement des détails du commentaire */
}  
  .comment input[type="radio"] {
    margin-right: 1%;
    margin-left: 1%;
  }
  
  .comment label {
    display: inline-block;
    width: 90%;
  }
  #comment-box {
  background-color: #ccc; 
  padding: 10px;
  border-radius: 5px; 
  position: relative; 
  width: 80%; 
  box-sizing: border-box;
  margin-left: 20%;
  z-index: 1;
}

#comment-text {
  width: 100%; 
  height: 100px;
  padding: 10px;
  margin-bottom: 10px; 
  border: 1px solid #999;
  border-radius: 4px; 
  box-sizing: border-box; 
}

#add-comment {
  position: absolute; 
  right: 30px; 
  bottom: 10px; 
  padding: 8px 5px; 
  border: none;
  background-color: #666; 
  color: white;
  border-radius: 4px; 
  cursor: pointer;
  width: 90px;
}

#add-comment:hover {
  background-color: #555; 
}
  </style>