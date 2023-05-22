const encryption = require('./encryption');
const hash = require('./hash');

module.exports = {
  ...encryption,
  ...hash,
};
