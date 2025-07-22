<template>
    <el-table :data="data" border style="width: 100%" @selection-change="handleSelectionChange" v-loading="loading">
        <el-table-column type="selection" width="55" />
        <el-table-column v-for="col in columns" :key="col.prop" :prop="col.prop" :label="col.label"
            :width="col.width" />
        <el-table-column label="操作" width="180" v-if="actions.length">
            <template slot-scope="scope">
                <el-button v-for="btn in actions" :key="btn.type" size="mini"
                    :type="btn.type === 'delete' ? 'danger' : 'primary'" @click="$emit(btn.type, scope.row)">
                    {{ btn.label }}
                </el-button>
            </template>
        </el-table-column>
    </el-table>
    <!-- <el-pagination background layout="total, sizes, prev, pager, next, jumper" :total="total"
        :page-sizes="[10, 20, 50, 100]" :page-size.sync="pageSize" :current-page.sync="currentPage"
        @size-change="handleSizeChange" @current-change="handleCurrentChange" /> -->
</template>

<script>
export default {
    name: 'DataTable',
    props: {
        data: Array,
        columns: Array,
        actions: {
            type: Array,
            default: () => [
                { label: '查看', type: 'view' },
                { label: '编辑', type: 'edit' },
                { label: '删除', type: 'delete' },
            ],
        },
        total: Number,
        loading: Boolean,
        pageSize: {
            type: Number,
            default: 10,
        },
        currentPage: {
            type: Number,
            default: 1,
        },
    },
    methods: {
        handleSelectionChange(val) {
            this.$emit('selection-change', val);
        },
        handleSizeChange(size) {
            this.$emit('size-change', size);
        },
        handleCurrentChange(page) {
            this.$emit('current-change', page);
        },
    },
};
</script>
