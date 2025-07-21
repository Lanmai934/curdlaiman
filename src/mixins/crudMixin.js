// mixins/crudMixin.js
import { cloneDeep } from 'lodash';

export default {
    data() {
        return {
            loading: false,
            tableData: [],
            total: 0,
            page: {
                pageNum: 1,
                pageSize: 10,
            },
            dialogVisible: false,
            dialogMode: 'add',
            formData: {},
            multipleSelection: [],
        };
    },
    methods: {
        async getList(fetchFn, query = {}) {
            this.loading = true;
            try {
                const params = {
                    ...query,
                    pageNum: this.page.pageNum,
                    pageSize: this.page.pageSize,
                };
                const res = await fetchFn(params);
                this.tableData = res.data || [];
                this.total = res.total || 0;
            } catch (error) {
                console.error('获取列表失败', error);
            } finally {
                this.loading = false;
            }
        },
        resetForm(queryRef, fetchFn) {
            Object.keys(queryRef).forEach(key => {
                queryRef[key] = '';
            });
            this.page.pageNum = 1;
            this.getList(fetchFn, queryRef);
        },
        openDialog(mode, row = {}) {
            this.dialogMode = mode;
            this.dialogVisible = true;
            this.formData = mode === 'edit' ? cloneDeep(row) : {};
        },
        handleSelectionChange(val) {
            this.multipleSelection = val;
        },
        async handleDelete(deleteFn, row) {
            try {
                await deleteFn(row);
                this.$message.success('删除成功');
                this.getList();
            } catch (error) {
                this.$message.error('删除失败');
            }
        },
        async handleBatchDelete(deleteBatchFn) {
            if (!this.multipleSelection.length) {
                this.$message.warning('请先选择要删除的项');
                return;
            }
            try {
                await deleteBatchFn(this.multipleSelection);
                this.$message.success('批量删除成功');
                this.getList();
            } catch (error) {
                this.$message.error('批量删除失败');
            }
        },
    },
};
