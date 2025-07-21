// src/api/user.js
export function fetchUserList(params) {
  return new Promise(resolve => {
    setTimeout(() => {
      resolve({
        data: [
          { id: 1, username: '张三', phone: '13800138000', status: 1 },
          { id: 2, username: '李四', phone: '13900139000', status: 0 },
        ],
        total: 2
      });
    }, 500);
  });
}

export function addUser(data) {
  return new Promise(resolve => {
    setTimeout(() => {
      resolve({ success: true });
    }, 500);
  });
}

export function updateUser(data) {
  return new Promise(resolve => {
    setTimeout(() => {
      resolve({ success: true });
    }, 500);
  });
}

export function deleteUser(row) {
  return new Promise(resolve => {
    setTimeout(() => {
      resolve({ success: true });
    }, 500);
  });
}

export function batchDeleteUser(rows) {
  return new Promise(resolve => {
    setTimeout(() => {
      resolve({ success: true });
    }, 500);
  });
}
