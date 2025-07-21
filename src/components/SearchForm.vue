<template>
    <el-form :inline="true" :model="query" class="search-form" ref="form">
        <search-item v-for="field in fields" :key="field.prop" :field="field" :model="query" />
        <el-form-item>
            <el-button type="primary" @click="$emit('search', query)">搜索</el-button>
            <el-button @click="handleReset">重置</el-button>
        </el-form-item>
    </el-form>
</template>

<script>
import SearchItem from './SearchItem.vue';

export default {
    name: 'SearchForm',
    components: { SearchItem },
    props: {
        fields: Array,
        value: Object, // 支持 v-model 绑定
    },
    data() {
        return {
            query: this.value || {},
        };
    },
    watch: {
        value(newVal) {
            this.query = { ...newVal };
        },
        query: {
            handler(val) {
                this.$emit('input', val);
            },
            deep: true,
        },
    },
    methods: {
        handleReset() {
            this.fields.forEach(field => {
                this.query[field.prop] = field.defaultValue || '';
            });
            this.$emit('input', this.query);
            this.$emit('reset', this.query);
        },
    },
};
</script>

<style scoped>
.search-form {
    margin-bottom: 15px;
}
</style>
