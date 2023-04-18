import axios from 'axios';

const options = {
  method: 'GET',
  url: 'https://any-anime.p.rapidapi.com/anime/img',
  headers: {
    'X-RapidAPI-Key': '6169b7b296msh3d01729811f42c6p1880c3jsn82a7568398ba',
    'X-RapidAPI-Host': 'any-anime.p.rapidapi.com'
  }
};

export default function getAnimeImage() {
  return axios.request(options)
    .then(function (response) {
      return response.data;
    })
    .catch(function (error) {
      console.error(error);
      return error;
    });
}
