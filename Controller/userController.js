const { getUserInfo, getLogin } = require("../Module/userModule");

async function isUserExist(userId) {
  const data = await getUserInfo(userId);
  if (data.length === 0) return false;
  else return true;
}

async function userLogin(name, password) {
  const data = await getLogin(name, password);
  if (data.length > 0) {
    const user = data[0];
    return user;
  } else null;
}

module.exports = {
  isUserExist,
  userLogin,
};
