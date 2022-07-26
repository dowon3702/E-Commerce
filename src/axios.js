import axios from 'axios';

const instance = axios.create({
    baseURL:'https://us-central1-challenge-9e275.cloudfunctions.net/api'
});

export default instance;