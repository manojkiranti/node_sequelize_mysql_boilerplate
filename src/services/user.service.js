const getUsers = async () => {
  return "get Users";
};

const createUser = async () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("user created successfully");
    }, 3000);
  });
};

module.exports = {
  getUsers,
  createUser,
};
