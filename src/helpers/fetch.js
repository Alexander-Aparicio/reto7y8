import axios from "axios"
import {API_KEY} from "../credentials/apiKey"

const GetFilms = async(movie)=>{

    try {

        const res = await axios.get(`https://api.themoviedb.org/3/search/movie?api_key=${API_KEY}&query=${movie}&language=es`).then((res)=> res.data.results )
        console.log(res)
        return res
        
    } catch (error) {
        console.error(error)
    }


}

export default GetFilms