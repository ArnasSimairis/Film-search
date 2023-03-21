import { useState } from "react";

import OneProduct from "./oneMovie";
import SearchForMovies from "./searchMovie";

const Main = () => {

    const [filmFromApi, setfilmFromApi] = useState([])

    const setResults = (products) => {
        setfilmFromApi(products)
    }

    console.log(filmFromApi)
    
    return(
        <div>
            <SearchForMovies setResults={setResults}/>
            <OneProduct filmFromApi={filmFromApi.Search}/>
        </div>
    )
}

export default Main