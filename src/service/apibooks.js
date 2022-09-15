import axios from "axios";

const apibooks = axios.create({
  
    baseURL:"http://10.107.144.8:3000"

});

export default apibooks;