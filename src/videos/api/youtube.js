import axios from 'axios';

const KEY = 'AIzaSyCEeBftWBnYDi0oKw-5u4Sbc08c23RPiDQ';

export default axios.create({
    baseURL: 'https://www.googleapis.com/youtube/v3',

    params:{
        part:'snippet',
        maxResults: 6,
        type:'video',
        key: KEY
    } 
});