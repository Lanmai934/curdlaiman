<!-- src/views/Login.vue -->
<template>
    <div class="login-container">
        <el-form ref="loginForm" :model="loginForm" :rules="loginRules" label-width="80px" class="login-form">
            <h2>登录</h2>
            <el-form-item label="用户名" prop="username">
                <el-input v-model="loginForm.username" />
            </el-form-item>
            <el-form-item label="密码" prop="password">
                <el-input v-model="loginForm.password" type="password" @keyup.enter.native="submitLogin" />
            </el-form-item>
            <el-form-item>
                <el-button type="primary" @click="submitLogin" style="width: 100%">登录</el-button>
            </el-form-item>
        </el-form>
    </div>
</template>

<script>
export default {
    name: 'Login',
    data() {
        return {
            loginForm: {
                username: '',
                password: ''
            },
            loginRules: {
                username: [{ required: true, message: '请输入用户名', trigger: 'blur' }],
                password: [{ required: true, message: '请输入密码', trigger: 'blur' }]
            }
        }
    },
    methods: {
        submitLogin() {
            this.$refs.loginForm.validate(valid => {
                if (valid) {
                    // 模拟登录请求
                    // 实际项目中应调用接口，如：
                    // this.$axios.post('/api/login', this.loginForm).then(res => {
                    //   localStorage.setItem('token', res.data.token)
                    //   this.$router.push('/')
                    // })

                    // 模拟成功
                    localStorage.setItem('token', 'your_token_here')
                    this.$message.success('登录成功')
                    this.$router.push('/')
                }
            })
        }
    }
}
</script>

<style scoped>
.login-container {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh;
}

.login-form {
    width: 400px;
    padding: 20px;
    background: #fff;
    border-radius: 5px;
    box-shadow: 0 2px 12px 0 rgba(0, 0, 0, 0.1);
}
</style>