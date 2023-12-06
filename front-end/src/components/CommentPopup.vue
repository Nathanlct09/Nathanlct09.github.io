<template>
    <div class="popup">
    <input type="text" v-model="comment.title" placeholder="Title">
    <textarea v-model="comment.content" placeholder="Your comment..."></textarea>
    <input type="text" v-model="comment.url" placeholder="Site link">
    <input type="text" v-model="comment.category" placeholder="Category">
    <button @click="closePopup">Close</button>
    <!-- Ajoutez un bouton de soumission et une logique si nécessaire -->
  </div>
  </template>
  
  <script>
  export default {
    props: ['comment'],
    data() {
      return {
        isBlack: true,
        siteUrl: '',
        category: '',
        userComment: '',
      };
    },
    methods: {
      closePopup() {
        this.$emit('close');
      },
      submitComment() {
        console.log(this.siteUrl, this.category);
        this.closePopup();
      }
    }
  };
  </script>
  
  <style scoped>
  .input-group {
  margin-bottom: 15px;
}

.input-group label {
  display: block;
  margin-bottom: 5px;
}

.input-group textarea,
.input-group input[type="text"] {
  width: 100%;
  padding: 10px;
  margin-bottom: 10px;
  border-radius: 4px;
}
  .popup {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: black;
    display: flex;
    justify-content: center;
    align-items: center;
    color:black;
  }
  .Luna{
background-color: black;
  }
  .popup-inner {
    background: grey;
    padding: 20px;
    color: black;
  }
  ::placeholder {
  color: white;
  opacity: 1;
}
.black {
    color:black;
}
.comment-section {
    color:rgb(255, 255, 255);
}
.logo58{
  width: 8%;
  margin-right: 0%;
}
  </style>
  