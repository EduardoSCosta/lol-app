
import axios from 'axios';

const api = axios.create({
  baseURL: 'https://ddragon.leagueoflegends.com/',
});

export default api;