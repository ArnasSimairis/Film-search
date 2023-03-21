import { useState } from "react"

import styles from "./oneMovie.module.css"
import FilmByID from "../services/productID"
import ShowMovie from "./showMovie"


const OneProduct = (props) => {
    const items = props.filmFromApi

    const [searchID, setsearchID] = useState('')
    const [Movie, setMovie] = useState([])
    const [show, setshow] = useState(true)
    const [showInfo, setshowInfo] = useState(false)




    const getMovieID = (searchID) => {
        setsearchID(searchID)
        // console.log(searchID);
        setshow(current => !current)
        FilmByID(searchID).then( res => {
            setMovie(res)
            // console.log(res);
            // console.log(Movie);
            setshowInfo(current => !current)
        })
    }

  

    return (
        <div className={styles.list}>
            {
                show && items?.map((item, index) => {
                    return (
                        <div key={index} className={styles.movie_card}>
                            <img src={item.Poster} alt="Img" className={styles.image}></img>
                            <div>
                                <h2>{item.Title}</h2>
                                <button onClick={() => getMovieID(item.imdbID)}>Read More!</button>
                            </div>
                        </div>
                    )
                })
            }
            {showInfo ? <ShowMovie Movie={Movie} setshow={setshow} setshowInfo={setshowInfo} showInfo={showInfo}/> :null}
        </div>
    );
}

export default OneProduct;