// utils/validators.js
export const required = (msg = '必填项') => ({
    required: true,
    message: msg,
    trigger: 'blur'
});

export const phoneRule = {
    pattern: /^1[3-9]\d{9}$/,
    message: '请输入正确的手机号',
    trigger: 'blur'
};

export const dateRangeRule = (startProp, endProp) => ({
    validator(rule, value, callback) {
        if (new Date(value) > new Date(this.form[endProp])) {
            callback(new Error('开始时间不能大于结束时间'));
        } else {
            callback();
        }
    },
    trigger: 'change'
});
