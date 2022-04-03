const { response } = require('express');

const getSearchResults = (req, res = response) => {
  res.json({
    msg: 'get API products'
  })
};

module.exports = {
  getSearchResults,
}