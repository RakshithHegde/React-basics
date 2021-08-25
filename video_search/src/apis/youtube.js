import axios from 'axios';

const KEY = 'AIzaSyAxxICCDs_9Bwbu7eQZ2vmKYiqvFfR2tTg';


export default axios.create({
    baseURL: 'https://www.googleapis.com/youtube/v3', 
    params: {
        part: 'snippet',
        type: 'video',
        maxResults: 5,
        key: KEY
    }
});
