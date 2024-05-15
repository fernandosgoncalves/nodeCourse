import axios from "axios";

// Base URL https://api.themoviedb.org/3 

// URL DA API https://api.themoviedb.org/3/movie/now_playing?api_key=05a0744bc4d02dc0be76ba4187f237f0&language=pt-br

const api = axios.create({
    baseURL: 'https://api.themoviedb.org/3'
})

export default api;