import axios from "axios";

const apibooks = axios.create({
  
    baseURL:"http://10.107.144.5:3000"

},console.log('conexion sucess'));

export default apibooks;