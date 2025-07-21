export const searchFields = [
    {
        label: '用户名',
        prop: 'username',
        type: 'input',
        defaultValue: '',
    },
    {
        label: '状态',
        prop: 'status',
        type: 'select',
        options: [
            { label: '启用', value: 1 },
            { label: '禁用', value: 0 },
        ],
        defaultValue: '',
    },
];

export const tableColumns = [
    { label: '用户名', prop: 'username', width: '150' },
    { label: '手机号', prop: 'phone', width: '150' },
    { label: '状态', prop: 'status', width: '100' },
];

export const formFields = [
    {
        label: '用户名',
        prop: 'username',
        type: 'input',
        rules: [{ required: true, message: '请输入用户名', trigger: 'blur' }],
    },
    {
        label: '手机号',
        prop: 'phone',
        type: 'input',
        rules: [
            { required: true, message: '请输入手机号', trigger: 'blur' },
            {
                pattern: /^1[3-9]\d{9}$/,
                message: '请输入正确手机号',
                trigger: 'blur',
            },
        ],
    },
    {
        label: '状态',
        prop: 'status',
        type: 'switch',
        defaultValue: 1,
    },
];
