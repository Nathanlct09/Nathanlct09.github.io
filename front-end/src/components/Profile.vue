<template>
    <div class="body">
        <router-link to="/Home"> 
        <img src="/image-2.png" alt="Logo" class="Logo9" />  
    </router-link>  
    <div class="profile-container" v-for="userProfile in db">
        <header>
            <h2 id="Title5">Profile</h2>
        </header>  
      <form @submit.prevent="submitProfile" class="profile-form">
        <div class="form-group">
          <label for="name">Name:</label>
          <input type="text" id="name" v-model="userProfile.name">
          <p>{{ userProfile.name }}</p>
        </div>
        <div class="form-group">
          <label for="email">Email:</label>
          <input type="email" id="email" v-model="userProfile.email">
          <p>{{ userProfile.email }}</p>
        </div>
        <div class="form-group">
          <label for="password">Password:</label>
          <input type="password" id="password" v-model="userProfile.password">
          <p>{{ userProfile.password }}</p>
        </div>
        <div class="form-group">
          <label for="phone">Phone Number:</label>
          <input type="tel" id="phone" v-model="userProfile.phone">
          <p>{{ userProfile.phone }}</p>
        </div>
        <div class="form-group">
          <label for="dob">Date of Birth:</label>
          <input type="date" id="dob" v-model="userProfile.dob">
          <p>{{ userProfile.dob }}</p>
        </div>
        <div class="form-container">
          <select id="location" v-model="selectedLocation">
        <option value="">Select a country</option>
        <option v-for="country in countries" :key="country.code" :value="country.name">
          <p>{{ country.name }}</p>
        </option>
      </select>
    </div>
    <button @click="saveProfile" class="save-button">Save</button>

      </form>
    </div>
    </div>
  </template>
  
  <script>
  import axios from 'axios';
  export default {
    data() {
      return {
        selectedLocation: '',
      countries: [
        { code: 'US', name: 'United States' },
        { code: 'CA', name: 'Canada' },
        { code: 'FR', name: 'France' },
      ],
        db: {
          name: '',
          email: '',
          phone: '',
          dob: '',
        }
      };
    },
    async mounted(){
      const userId = localStorage.getItem('id');
      const result = await axios.get(`http://localhost:3001/user/${userId}`)
      console.log("res", result)
      this.db = result.data;
    
    },
    methods: {
      submitProfile() {
        console.log("Profile submitted:", this.userProfile);
       
      },
      async saveProfile(){
        const userId = localStorage.getItem('id');
        var na = document.getElementById("name").value
        var em = document.getElementById("email").value
        var ph = document.getElementById("phone").value
        var d = document.getElementById("dob").value
        var lo = document.getElementById("location").value
        var pa = document.getElementById("password").value
        const result = await axios.put(`http://localhost:3001/user/${userId}`, {
          name: na,
          email: em,
          password: pa,
          phone: ph,
          bday: d,
          country: lo
        });
        console.log("res", result )
        //this.$emit("delete-list");


      this.$router.push('/home'); 
    }
      }
    };
  </script>
  
  <style>

html, body {
  width: 100vw;
  height: 100vh;
  margin: 0;
  padding: 0;
  overflow: hidden; 
}

.form-container {
  margin-bottom: 20px;
}

.form-container select {
  width: 100%;
  padding: 8px;
  border: 1px solid #ffffff;
  background-color: black; 
  color: white;
  border-radius: 4px;
}

  .body{
    background-color: black;
    margin: 0;
  padding: 0;
  box-sizing: border-box;
  color: white;
  }

  .profile-container {
    max-width: 500px;
    margin: 50px auto;
    border-radius: 10px;
    background-color: black;
    position: relative;
    box-sizing: border-box;
  }

  .Logo9{
    margin-right: 600%; 
    width: 8%; 
    height: auto;
  }

  .Title5 {
    position: absolute; 
  top: 0;
  right: 0;
  margin-right: 20px; 
  margin-top: 20px;
  color:white;
  }
  
  .form-group {
    margin-bottom: 20px;
    background-color: black;
  }
  
  .form-group label {
    display: block;
    margin-bottom: 5px;
    color: white;
    margin-right: 70%;
  }
  
  .form-group input {
    width: 100%;
    padding: 10px;
    border-radius: 5px;
    border: 1px solid #ccc;
    color: black;
    background-color: black;
  }
  
  button {
    width: 30%;
    padding: 10px 20px;
    border: none;
    border-radius: 5px;
    background-color: white;
    color: black;
    font-size: 16px;
    cursor: pointer;
    margin-left: 75%;
  }
  
  button:hover {
    background-color: white;
  }
  </style>
  
  