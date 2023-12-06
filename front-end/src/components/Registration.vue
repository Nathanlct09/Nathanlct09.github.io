<template>
    <div class="container">
        <router-link to="/Home">
        <img src="/image-2.png" alt="Logo" class="logo" /> 
        </router-link>
      <div class="form-wrapper">
        <header>
            <h2 class="title">Registration</h2>
        </header>
        <form @submit.prevent="submitForm">
          <div class="input-group">
            <input v-model="name1" type="text" placeholder="Name" id="name1" required>
          </div>
          <div class="input-group">
            <input v-model="email1" type="email" placeholder="Email" id="email1" required>
          </div>
          <div class="input-group">
            <input v-model="password1" type="password" placeholder="Password" id="password1" required>
          </div>
          <div class="input-group">
            <input v-model="phone1" type="tel" placeholder="Phone number" id="phone1" required>
          </div>
          <div class="input-group">
            <input v-model="dob" type="date" id="dob" placeholder="Date of birth" name="dob" required>
           </div>
           <div class="input-container">
      <select id="location" v-model="selectedLocation">
        <option value="">Select a country</option>
        <option v-for="country in countries" :key="country.code" :value="country.name">
          {{ country.name }}
        </option>
      </select>
    </div>
                <router-link to="/AdminChart">    
              <button @click="save" class="save-button">Save</button>
              </router-link>
        </form>
      </div>
    </div>
  </template>
  
  <script>
  import axios from 'axios';
  export default {
    components: {
  },
    data() {
    return {
      selectedLocation: '',
      countries: [
        // Example countries - you could also fetch this from an API
        { code: 'US', name: 'United States' },
        { code: 'CA', name: 'Canada' },
        { code: 'FR', name: 'France' },
        // ...other countries
      ],
        name1: "",
        name: "",
        email1: "",
        email: "",
        password1: "",
        password: "",
        phone1: "",
        phone: "",
        dob: "",
        bday: ""
    };
  },
    methods: {
      async submitForm() {
      
        console.log('Form submitted!');
      },
      async save() {
            //var ti = document.getElementById('title').value
            const response = await axios.post('http://localhost:3001/user', {
      // name: this.name1,
      name: "chio",
      email: this.email1,
      password: this.password1,
      phone: this.phone1,
      bday: this.dob,      
      country: this.selectedLocation,
      });
      console.log('log ok', response.data);
      // Implement your save logic here
      console.log('The save button was clicked!');
      // You might want to emit an event or call a method to perform a save operation
      // this.$emit('save');
      // Or you could call a method to save data
      // this.saveData();


    }
    }
  };
</script>
  
<style>
 @import url('https://fonts.googleapis.com/css?family=Roboto:400,700&display=swap'); 
 input[type='text'],
input[type='password'],
input[type='email'],
input[type='tel'],
input[type='date'] {
  border: 1px solid #ffffff; 
  
}

html, body {
  height: 100%;
  margin: 0;
  background-color: black;
}
.logo {
  position: absolute;
  top: 0;
  left: 0;
  margin: 10px; 
  height: 50px; 
  width: auto; 
}
.input-container {
  margin-bottom: 20px;
}
.input-container select {
  width: 100%;
  padding: 8px;
  border: 1px solid #ffffff;
  background-color: black; 
  color: white;
  border-radius: 4px;
}
.title{
    position: absolute;
  right: 0;
  top: 0;
  left: 100%; 
  color:white;
  }
  .save-button {
  padding: 10px 20px;
  margin: 20px;
  margin-left: 70%;
  background-color: white;
  color: black;
  border-radius: 5px;
  cursor: pointer;
  transition: background-color 0.3s ease;
}
  .container {
  position:relative;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  flex-direction: column;
  background-color: black;
  }
  
  .form-wrapper {
    padding: 2rem;
    border-radius: 10px;
    width: 100%;
    max-width: 400px;
    font-family: 'Roboto';
    color:white;
  }

  .input-group {
    margin-bottom: 1rem;
    color: white;
  }
  
  input {
    width: 100%;
    padding: 1rem;
    border-radius: 10px;
    border: none;
    margin-bottom: 0.5rem;
    background-color: lightblue;
    color:white;
    font-family: 'Roboto'
  }
  

  .header{
    position: absolute;
  top: 0;
  right: 0;
  padding: 1rem;
  }
  .label{
    color: #ffffff;
  }
  .save-button:hover {
  background-color: #ffffff22; 
}
  </style>
  