<template>
  <header data-testid="header">
    <nav>
      <ul class="menu">
        <li data-testid="menu-home">
          <router-link to="/">Home</router-link>
        </li>
        <li data-testid="menu-registration">
          <router-link to="/registration">Registration</router-link>
        </li>
        <li data-testid="menu-login">
          <router-link to="/login">Login</router-link>
        </li>
        <li data-testid="menu-about">
          <router-link to="/about">About Us</router-link>
        </li>
        <li data-testid="menu-contact">
          <router-link to="/contact">Contact</router-link>
        </li>
      </ul>
    </nav>
  </header>
</template>

<script setup>
</script>

<style scoped>
header {
  background-color: #333;
  color: white;
  padding: 1rem 0;
  text-align: center;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  z-index: 100;
}

.menu {
  list-style: none;
  display: flex;
  justify-content: center;
  padding: 0;
}

.menu li {
  margin: 0 15px;
}

.menu li a {
  text-decoration: none;
  color: white;
  font-weight: bold;
  transition: color 0.3s ease;
}

.menu li a:hover {
  color: #f0db4f;
}
</style>
