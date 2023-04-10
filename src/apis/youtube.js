import axios from "axios";    
const KEY = 'AIzaSyBDzTghbYrLtRe8RoVWm7id41W30hDQPPk';
export default axios.create({
  baseURL:"https://www.googleapis.com/youtube/v3",
  params:{
    part:'snippet',
    maxResults:5,
    key:KEY
  }
})