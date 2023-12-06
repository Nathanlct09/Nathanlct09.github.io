<template>
    <div class="container">
      <div class="logo-container">
        <img src="/image-2.png" alt="Logo" class="logo20"> 
      </div>
      <h1>Welcome</h1>
      <div class="buttons10">
        <router-link to="/Login">
        <button @click="login" class="btn login7">Login</button>
        </router-link>
        <router-link to="/Registration">
        <button @click="register" class="btn register7">Registration</button>
        </router-link>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    name: 'WelcomePage',
    methods: {
      login() {
        
      },
      register() {
       
      }
    }
  }
  </script>
  
  <style scoped>
  .container {
    display: flex;
    align-items: center;
    justify-content: center;
    height: 100vh;
    width: 100%;
    background-color: #000; 
    color: white; 
    margin-bottom: 500%;
  }
  
  .logo-container {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

  }
  
  .logo20 {
    width: 150px;  
    margin-bottom: 20px;
    margin-top: 30px;
  }
  
  h1 {
    margin-bottom: 20px;
    margin-top: 80px;

  }
  
  .buttons10 {
    display: flex;
    flex-direction: column;
    width: 100%;
   align-items: center;
   height: 100%;
   padding:10px 20px;
   font-size:16px;
   box-sizing:border-box;
   white-space: nowrap;
  }
  
  .btn {
    background-color: transparent;
    border: 2px solid white;
    color: white;
    margin: 10px 0;
    cursor: pointer;
    font-size: 16px;
    transition: background-color 0.3s, color 0.3s;
    width: 90%; 
    max-width: 300px; 
  }
  
  .btn:hover {
    background-color: white;
    color: black;
  }
  
  .login7 {
   width: 140%;
   margin-right: 100%;
   
  }
  
  .register7 {
  width: 110%;
  margin-right: 150%;
  }
  </style>
  