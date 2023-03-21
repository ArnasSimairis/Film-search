import React from "react"
import styles from "./showMovie.module.css"

const ShowMovie = ({ Movie, setshow, setshowInfo, showInfo }) => {
    console.log(Movie);


    const goBack = () => {
        setshow(true)
        setshowInfo(false)
    }
    return (
        <div>
            <div className={styles.movieInfo}>
                <div className={styles.movieInfoIn}>
                    <div>
                        <img src={Movie.Poster} alt="img" className={styles.image}/>
                    </div>
                        <div>
                            <h2>{Movie.Title}</h2>
                            <h4>Plot: {Movie.Plot}</h4>
                            <h4>Genre: {Movie.Genre}</h4>
                            <h4>Actors: {Movie.Actors}</h4>
                            <div className={styles.buttonDiv}>
                                <button className={styles.buttonLook} onClick={() => goBack()}>Back</button>
                            </div>
                        </div>                    
                </div>


            </div>
        </div>
    )
}

export default ShowMovie