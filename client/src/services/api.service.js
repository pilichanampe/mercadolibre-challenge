import axios from 'axios';

const API_SERVICE = {
  init: () => {
    axios.defaults.baseURL = 'https://api.mercadolibre.com';
  }
}

export default API_SERVICE;