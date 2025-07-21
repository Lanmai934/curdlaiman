<template>
    <div>
        <search-form v-model="query" :fields="searchFields" @search="onSearch" @reset="onReset" />

        <el-button type="primary" @click="openDialog('add')">新增</el-button>
        <el-button type="danger" :disabled="!multipleSelection.length" @click="onBatchDelete">批量删除</el-button>

        <data-table :data="tableData" :columns="tableColumns" :total="total" :loading="loading"
            :current-page="page.pageNum" :page-size="page.pageSize" @view="onView" @edit="onEdit" @delete="onDelete"
            @selection-change="onSelectionChange" @current-change="onPageChange" @size-change="onSizeChange" />

        <edit-dialog :visible.sync="dialogVisible" :fields="formFields" :form-data.sync="formData" :rules="formRules"
            :mode="dialogMode" @submit="onSubmit" />
    </div>
</template>

<script>
import SearchForm from '@/components/SearchForm.vue';
import DataTable from '@/components/DataTable.vue';
import EditDialog from '@/components/EditDialog.vue';
import crudMixin from '@/mixins/crudMixin';
import {
    searchFields,
    tableColumns,
    formFields,
} from '@/configs/user.config';

import {
    fetchUserList,
    addUser,
    updateUser,
    deleteUser,
    batchDeleteUser,
} from '@/api/user';

export default {
    name: 'UserPage',
    components: { SearchForm, DataTable, EditDialog },
    mixins: [crudMixin],
    data() {
        return {
            query: {},
            searchFields,
            tableColumns,
            formFields,
            formData: {},
            dialogVisible: false,
            dialogMode: 'add',
            formRules: this.getRules(formFields),
            multipleSelection: [],
        };
    },
    methods: {
        getRules(fields) {
            const rules = {};
            fields.forEach(field => {
                if (field.rules) rules[field.prop] = field.rules;
            });
            return rules;
        },
        async onSearch(query) {
            this.page.pageNum = 1;
            this.query = query;
            await this.getList(fetchUserList, this.query);
        },
        async onReset() {
            this.query = {};
            this.page.pageNum = 1;
            await this.getList(fetchUserList, this.query);
        },
        openDialog(mode, row = {}) {
            this.dialogMode = mode;
            this.dialogVisible = true;
            this.formData = mode === 'edit' ? { ...row } : {};
        },
        onView(row) {
            this.openDialog('view', row);
        },
        onEdit(row) {
            this.openDialog('edit', row);
        },
        async onDelete(row) {
            if (!row) return;
            this.$confirm('确定删除该条记录？', '提示', {
                type: 'warning',
            }).then(async () => {
                await deleteUser(row);
                this.getList(fetchUserList, this.query);
            });
        },
        async onBatchDelete() {
            if (!this.multipleSelection.length) {
                this.$message.warning('请选择要删除的项');
                return;
            }
            this.$confirm(`确定删除选中的${this.multipleSelection.length}条记录？`, '提示', {
                type: 'warning',
            }).then(async () => {
                await batchDeleteUser(this.multipleSelection);
                this.getList(fetchUserList, this.query);
            });
        },
        onSelectionChange(val) {
            this.multipleSelection = val;
        },
        onPageChange(page) {
            this.page.pageNum = page;
            this.getList(fetchUserList, this.query);
        },
        onSizeChange(size) {
            this.page.pageSize = size;
            this.page.pageNum = 1;
            this.getList(fetchUserList, this.query);
        },
        async onSubmit(formData) {
            if (this.dialogMode === 'add') {
                await addUser(formData);
            } else if (this.dialogMode === 'edit') {
                await updateUser(formData);
            }
            this.dialogVisible = false;
            this.getList(fetchUserList, this.query);
        },
    },
    mounted() {
        this.getList(fetchUserList, this.query);
    },
};
</script>
