<template>
    <div class="home">
        <el-card class="box-card">
            <div slot="header" class="clearfix">
                <span>欢迎使用 curdlaiman 后台管理系统</span>
            </div>
            <div class="content">
                <p>这是一个基于 Vue2 + Element UI 的通用后台管理系统模板。</p>
                <p>你可以在此基础上扩展功能模块，如用户管理、权限控制、数据展示等。</p>
                <el-button type="primary" @click="$router.push('/login')">去登录</el-button>
            </div>
        </el-card>
    </div>
</template>

<script>
export default {
    name: 'Home',
    data() {
        return {};
    }
};
</script>

<style scoped>
.home {
    padding: 20px;
}

.box-card {
    width: 100%;
    max-width: 600px;
    margin: 0 auto;
}

.clearfix:before,
.clearfix:after {
    display: table;
    content: '';
}

.clearfix:after {
    clear: both;
}

.content {
    line-height: 1.6;
    font-size: 16px;
}
</style>