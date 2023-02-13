// Import Core Libraries
import axios from 'axios';

// Import Config
import Config from '../../app.json';

export default axios.create({
  baseURL: Config.expo.extra.apiUrl,
  headers: {
    Accept: 'application/json',
    'Access-Control-Allow-Origin': '*',
    'Content-Type': 'application/json',
  },
});
