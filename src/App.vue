<template>
    <el-container style="height: 100vh;">
        <el-header>curdlaiman后台管理系统</el-header>
        <el-button v-if="!isLoggedIn" @click="$router.push('/login')">登录</el-button>
        <el-button v-else @click="logout">退出</el-button>
        <el-container>
            <el-aside width="200px">
                <!-- 侧边栏菜单 -->
            </el-aside>
            <el-main>
                <router-view></router-view>
            </el-main>
        </el-container>
    </el-container>
</template>

<script>
export default {
    name: 'App'
};
</script>
