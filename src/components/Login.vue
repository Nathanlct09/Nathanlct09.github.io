<template>
  <div class="login-container">
    <router-link to="/Home" class="logo-link">
    <img src="/image-2.png" alt="Logo" class="Logo98" /> 
    </router-link>
    <form @submit.prevent="login">
      <div class="Login">
      <header>
            <h2 class="Title">Login</h2>
        </header>
      <div class="input-group">
        <input v-model="Email" type="email" placeholder="Email" required />
      </div>
      <div class="input-group">
        <input v-model="Password" type="password" placeholder="Password" required />
      </div>
      </div>
      <div class="button-group">
        <router-link to="/Registration">
          <a href="/register" class="register-link">Registration</a>
        </router-link>
        <button @click="login" type="submit" class="login-btn">Save</button>
      </div>
    </form>
  </div>
</template>

<script>
import axios from 'axios';
export default {
  methods: {
    data() {
      return {
        Email: "",
        email: "",
        Password: "",
        password: ""
      };
    },
    async login() {
      // var ti = document.getElementById('title').value
      const response = await axios.post('http://localhost:3001/user/login', {
      email: this.Email,
      password: this.Password,
      });
      console.log('log ok', response.data[0]);
      if (response.data.lenght === 0) {
        this.$router.push('/login');
      } else {
        localStorage.setItem("id", response.data[0].id)
      }
    },
  },
};
</script>

<style scoped>
input[type='email'],
input[type='password']
input[type='text']
{
  border: 1px solid #ffffff; 
}
.Title{
  position: absolute;
  right: 0;
  top: 2%;
  left: 98%; 
  color:white;
}
.login-container {
  position:relative;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  flex-direction: column;
  background-color: black;
}

.logo-link {
  position: absolute;
  top: 0;
  left: 0;
}
.Logo98 {
  margin-right: 100%; 
    width: 10%; 
}

h1 {
  color: #ffffff; 
  margin-bottom: 2rem;
}

input {
  padding: 10px;
  margin-bottom: 1rem;
  background-color: black;
  border-radius: 10px;
  border-radius: 5px;
  color: white; 
  width: 300px; 
  position: relative;
}

.login-btn {
  padding: 10px 20px;
  border: none;
  border-radius: 5px;
  background-color: white; 
  color: black; 
  cursor: pointer;
  width: 45%;
}

.register-link {
  color: #9f9f9f;
  text-decoration: none;
}

.button-group {
  display: flex;
  justify-content: space-between;
  width: 60%;
}

.register-link:hover {
  text-decoration: underline;
}
</style>
