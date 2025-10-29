import axios from "axios"; // faz a conexão de comunicação com a API e a WEB ou MOBILE 

const api = axios.create({
    baseURL: "http://localhost:5000",
    timeout:10000
})
export default api;