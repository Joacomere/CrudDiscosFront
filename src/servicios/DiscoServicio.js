import axios from "axios";

const BASE_URL_REST_API ="http://localhost:8080/api/discos";

export const listaDiscos = () => axios.get(BASE_URL_REST_API);
export const guardaDiscoServicio = (disco) => axios.post(BASE_URL_REST_API, disco)
export const traeDisco =(discoId) => axios.get(BASE_URL_REST_API + '/' + discoId)
export const actualizaDisco =(disco, discoId) => axios.put(BASE_URL_REST_API + '/' + discoId, disco)
export const borraDisco =(discoId) => axios.delete(BASE_URL_REST_API + '/' + discoId)