<template>
  <div>
    <h1 class="header">Home Page</h1>
    <div class="content">
      <router-link v-if="!isLoggedIn" :to="{ name: 'Login' }">Go to Login Page</router-link>
      <router-link v-else :to="{ name: 'Profile' }">Go to your Profile, {{ user }}</router-link>
    </div>
  </div>
</template>

<script lang="ts" src="./Home.ts" />

<style lang="scss" scoped>
.header {
  display: block;
  width: 100%;
  text-align: center;
}

.content {
  display: block;
  width: 100%;
  text-align: center;
}
</style>
