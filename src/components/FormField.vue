<template>
    <el-form-item :label="field.label" :prop="field.prop" :rules="field.rules">
        <component :is="getComponent(field.type)" v-model="model[field.prop]" v-bind="field.attrs"
            :options="field.options" clearable style="width: 100%;" :disabled="isView" />
    </el-form-item>
</template>

<script>
export default {
    name: 'FormField',
    props: {
        field: Object,
        model: Object,
        isView: Boolean,
    },
    methods: {
        getComponent(type) {
            const map = {
                input: 'el-input',
                select: 'el-select',
                date: 'el-date-picker',
                switch: 'el-switch',
                cascader: 'el-cascader',
                textarea: 'el-input',
            };
            return map[type] || 'el-input';
        },
    },
};
</script>
