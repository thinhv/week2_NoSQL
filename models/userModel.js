'use strict';
const users = [
  {
    id: '1',
    name: 'John Doe',
    email: 'john@metropolia.fi',
    password: '1234',
  },
  {
    id: '2',
    name: 'Jane Doez',
    email: 'jane@metropolia.fi',
    password: 'qwer',
  },
];

// const getUserLogin = async (params) => {
//   try {
//     console.log(params);
//     const [rows] = await promisePool.execute('SELECT * FROM wop_user WHERE email = ?;', params);
//     return rows;
//   } catch (e) {
//     console.log('error', e.message);
//   }
// }

const getUserById = async (id) => {
  try {
    return users.filter((user) => {
      return id === user.id
    })
  } catch (e) {
    console.log('error', e.message);
  }
}

const getUserByEmail = async (email) => {
  try {
    return users.filter((user) => {
      return email === user.email
    })
  } catch (e) {
    console.log('error', e.message);
  }
}

module.exports = {
  users, 
  getUserById,
  getUserByEmail
};
