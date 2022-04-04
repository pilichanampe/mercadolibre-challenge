const url = require('url');
const { response } = require('express');
const { request } = require('express');
const axios = require('axios');
const axiosInstance = axios.create({
  baseURL: process.env.API_MELI_BASE_URL,
  /* other custom settings */
});

// Env variables
const API_MELI_BASE_URL = process.env.API_MELI_BASE_URL;
const API_MELI_SITE_ID = process.env.API_MELI_SITE_ID;


const getSearchResults = async (req = request, res = response) => {
  const query = url.parse(req.url, true).search;
  const requestUrl = `${API_MELI_BASE_URL}/sites/${API_MELI_SITE_ID}/search${query}`;
  try {
    const apiResponse = await axiosInstance.get(requestUrl);
    // MOCK DE CÓMO TIENE QUE SER EL JSON. FALTA ITERAR: ITEMS (dentro, posiblemente el price), CATEGORIES
    res.status(200).json({
      author: {
        name: 'Pilar',
        lastname: 'Chanampe',
      },
      categories: [],
      items: [
        {
          id: '',
          title: '',
          price: {
            currency: '',
            amount: 'Number',
            decimals: 'Number',
          },
          picture: '',
          condition: '',
          free_shipping: 'Boolean'
        }
      ]
    });
  } catch(error) {
    res.status(500).json({error});
  }
};

module.exports = {
  getSearchResults,
}