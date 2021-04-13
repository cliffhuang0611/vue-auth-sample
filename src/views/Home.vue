<template>
  <div>
    <h1 class="header">Home Page</h1>
    <router-link :to="{ name: 'Login' }">Go to Login Page</router-link>
  </div>
</template>

<script lang="ts" src="./Home.ts" />

<style lang="scss" scoped>
.header {
  display: block;
  width: 100%;
  text-align: center;
}
</style>
