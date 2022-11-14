import axios from "axios";

const api = axios.create({

  baseURL: "https://testeappfaculmc.herokuapp.com/api",

  validateStatus: ()=> true

});

export {api}