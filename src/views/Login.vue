<template>
  <div>
    <h1 class="header">Login Page</h1>
    <v-card height="450" width="450" class="login-card">
      <v-form>
        <v-card-title class="justify-center"> Login Form </v-card-title>
        <v-card-text>
          <v-text-field ref="username" label="Username" type="text" v-model="username"></v-text-field>
        </v-card-text>
        <v-card-text>
          <v-text-field
            ref="password"
            label="Password"
            :type="revealPassword ? 'text' : 'password'"
            v-model="password"
            :append-icon="revealPassword ? 'mdi-eye-off' : 'mdi-eye'"
            @click:append="revealPassword = !revealPassword"
            @keydown.enter="login"
          >
          </v-text-field>
        </v-card-text>
        <v-card-text>
          <v-checkbox label="Keep me logged in" v-model="isKeepLoggedInChecked" />
        </v-card-text>
        <v-card-actions class="justify-center">
          <v-btn color="primary" @click="login">Login</v-btn>
        </v-card-actions>
        <v-card-text class="text-center red--text" v-if="loginFailed">
          {{ errorMsg }}
        </v-card-text>
      </v-form>
    </v-card>
  </div>
</template>

<script lang="ts" src="./Login.ts" />

<style lang="scss" scoped>
.header {
  display: block;
  width: 100%;
  text-align: center;
}

.login-card {
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
}
</style>
