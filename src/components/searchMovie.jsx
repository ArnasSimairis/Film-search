import { useState } from "react";

import styles from "./searchMovie.module.css"
import Film from "../services/productService";

const SearchForMovies = ({ setResults }) => {

    const [searchWord, setsearchWord] = useState('')

    const handleChange = (searchWord) => {
        setsearchWord(searchWord);
    }

    const getProduct = (searchWord) => {
        Film(searchWord).then(res => {
            setResults(res)
        })
    }

    return (
        <div className={styles.search}>
            <div>
                <input type="text"
                    value={searchWord}
                    onChange={(e) => handleChange(e.target.value)}
                />
                <button onClick={() => {
                    getProduct(searchWord)
                }}>SEARCH</button>
            </div>
        </div>
    )
}

export default SearchForMovies