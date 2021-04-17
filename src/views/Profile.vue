<template>
  <div>
    <h1 class="header">Profile Page</h1>
    <div class="content">
      Hello, {{ user }}
      <br />
      <v-btn color="primary" @click="logout">Logout</v-btn>
      <br />
      <router-link :to="{ name: 'Home' }">Go to Home Page</router-link>
    </div>
  </div>
</template>

<script lang="ts" src="./Profile.ts" />

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
