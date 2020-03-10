import axios from 'axios';

const KEY = 'AIzaSyCoL_rSzKujc2J6PZD2aTipK3ZMcXQQ-LA';


export default axios.create({
   baseURL: 'https://www.googleapis.com/youtube/v3',
   params: {
      part: 'snippet',
      type: 'video',
      maxResult: 5,
      key: KEY
   }
});

 