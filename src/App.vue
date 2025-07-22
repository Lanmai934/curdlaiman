<template>
  <div id="app">
    <router-view />
    <div v-if="isLoggedIn">
      <button @click="logout">登出</button>
    </div>  
  </div>
</template>

<script>
export default {
    name: 'App',
    data() {
        return {
            isLoggedIn: !!localStorage.getItem('token') // 从 localStorage 获取登录状态
        }
    },
    methods: {
        logout() {
            localStorage.removeItem('token');
            this.isLoggedIn = false;
            this.$router.push('/login');
        }
    }
}
</script>
