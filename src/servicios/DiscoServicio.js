import axios from "axios";

const BASE_URL_REST_API ="http://localhost:8080/api/discos";

export const listaDiscos = () => axios.get(BASE_URL_REST_API);
