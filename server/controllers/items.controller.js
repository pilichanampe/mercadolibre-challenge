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

// author object
const author = {
  name: 'Pilar',
  lastname: 'Chanampe',
}

const getDecimals = (price) => {
  return Number((price % 1).toFixed(2));
}

const getCategories = (filters) => {
  let categoriesList = [];
  if (filters.length) {
    const categoriesObj = filters?.filter(filter => filter.id === 'category');
    categoriesList = categoriesObj[0].values[0]['path_from_root'].map(category => category.name);
  }
  return categoriesList;
}

const getItems = (results) => {
  const items = results?.map(item => {
    return {
      id: item.id,
      title: item.title,
      price: {
        currrency: item.currency_id,
        amount: item.price,
        decimals: getDecimals(item.price),
      },
      picture: item.thumbnail,
      condition: item.condition,
      free_shipping: item.shipping.free_shipping,
      city: item.address.state_name,
    }
  });
  return items;
}

const getSearchResults = async (req = request, res = response) => {
  const query = url.parse(req.url, true).search;
  const requestUrl = `${API_MELI_BASE_URL}/sites/${API_MELI_SITE_ID}/search${query}`;
  try {
    const apiResponse = await axiosInstance.get(requestUrl);
    const results = apiResponse.data.results;
    const filters = apiResponse.data.filters;

    const finalResponse = {
      author,
      categories: getCategories(filters),
      items: getItems(results),      
    }
    res.status(200).json(finalResponse)
  } catch(error) {
    res.status(500).json({error});
  }
};

const getItem = async (req = request, res = response) => {
  // console.log(url.parse(req.url, true));
  console.log(`${API_MELI_BASE_URL}/items/${req.params.id}`);
  const itemUrl = `${API_MELI_BASE_URL}/items/${req.params.id}`;
  const descriptionUrl = `${API_MELI_BASE_URL}/items/${req.params.id}/description`;
  try {
    const itemResponse = await axiosInstance.get(itemUrl);
    const descriptionResponse = await axiosInstance.get(descriptionUrl);

    const item = itemResponse.data;
    const description = descriptionResponse.data;
    
    const finalResponse = {
        author,
        id: item.id,
        title: item.title,
        price: {
          currrency: item.currency_id,
          amount: item.price,
          decimals: getDecimals(item.price),
        },
        picture: item.pictures.secure_url,
        condition: item.condition,
        free_shipping: item.shipping.free_shipping,
        sold_quantity: item.sold_quantity,
        description: description.plain_text,
    };
    res.status(200).json(finalResponse)
  } catch(error) {
    res.status(error.status).json({error});
  }
};

module.exports = {
  getSearchResults,
  getItem,
}