const generateUniqueId = () => {
  const { customAlphabet } = require('nanoid/non-secure');
  const nanoid = customAlphabet(
    '0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ',
    10
  );

  return nanoid();
};

module.exports = {
  generateUniqueId,
};
