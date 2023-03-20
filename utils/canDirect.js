const { isUserExist } = require("../Controller/userController");

async function canDirect(req, res) {
  const userId = req.cookies.userId;
  if (userId !== undefined && (await isUserExist(userId))) {
    return true;
  } else {
    return false;
  }
}

module.exports = canDirect;
