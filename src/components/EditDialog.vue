<template>
    <el-dialog :title="title" :visible.sync="visible" width="500px">
        <el-form ref="formRef" :model="formData" :rules="rules" label-width="100px" :disabled="isView">
            <form-field v-for="field in fields" :key="field.prop" :field="field" :model="formData" :is-view="isView" />
        </el-form>
        <span slot="footer" class="dialog-footer">
            <el-button @click="$emit('update:visible', false)">取消</el-button>
            <el-button v-if="!isView" type="primary" @click="handleSubmit">确定</el-button>
        </span>
    </el-dialog>
</template>

<script>
import FormField from './FormField.vue';

export default {
    name: 'EditDialog',
    components: { FormField },
    props: {
        visible: {
            type: Boolean,
            required: true,
        },
        formData: Object,
        fields: Array,
        rules: Object,
        mode: String, // 'add' | 'edit' | 'view'
    },
    computed: {
        isView() {
            return this.mode === 'view';
        },
        title() {
            if (this.mode === 'add') return '新增';
            if (this.mode === 'edit') return '编辑';
            if (this.mode === 'view') return '查看';
            return '';
        },
    },
    methods: {
        handleSubmit() {
            this.$refs.formRef.validate(valid => {
                if (!valid) return;
                this.$emit('submit', this.formData);
            });
        },
    },
};
</script>
