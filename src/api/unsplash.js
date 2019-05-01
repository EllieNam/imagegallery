import axios from 'axios';

export default axios.create({
    baseURL: 'https://api.unsplash.com',
    headers: {
        Authorization: 'Client-ID 5b9de7e43e0ddb921e7f5df498c0b82bc782130211c1d6b7cc820e4403c0df7d'
    }
});