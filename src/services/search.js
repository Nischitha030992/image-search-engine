
import axios from 'axios';

export const searchImages = (searchText, page) => {
  return new Promise((resolve, reject) => {
    axios({
      method: 'GET',
      url: `https://api.unsplash.com/search/photos`,
      params: {
        client_id: 'bd7xd7-3T-ofdUf_PobUkQ3aUfm-3uIVcdUra5jwmFw',
        query: searchText,
        page,
        per_page: 10,
      }
    })
    .then((res) => {
      resolve(res?.data);
    }, error => {
      reject(error);
    })
  })
  
}