import { useEffect, useState } from "react";
import api from "../../services/api";

// URL DA API https://api.themoviedb.org/3/movie/now_playing?api_key=05a0744bc4d02dc0be76ba4187f237f0&language=pt-br

function Home(){
    const [filmes, setFilmes] = useState([]);

    useEffect(()=>{
        async function loadFilmes(){
            const response = await api.get("movie/now_playing", {
                params:{
                    api_key: "05a0744bc4d02dc0be76ba4187f237f0",
                    language: "pt-BR",
                    page: 1, 
                }
            })

            console.log(response.data.results);
        }

        loadFilmes();
    }, [])
    return(
        <div>
            <h1>Bem Vindo A Home</h1>
        </div>
    )
}

export default Home;