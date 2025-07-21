<template>
    <el-form-item :label="field.label" :prop="field.prop">
        <component :is="getComponent(field.type)" v-model="model[field.prop]" v-bind="field.attrs"
            :options="field.options" clearable style="width: 100%;" />
    </el-form-item>
</template>

<script>
export default {
    name: 'SearchItem',
    props: {
        field: Object,
        model: Object,
    },
    methods: {
        getComponent(type) {
            const map = {
                input: 'el-input',
                select: 'el-select',
                date: 'el-date-picker',
                daterange: 'el-date-picker',
                cascader: 'el-cascader',
                switch: 'el-switch',
            };
            return map[type] || 'el-input';
        },
    },
};
</script>
