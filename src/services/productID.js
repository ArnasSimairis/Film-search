const FilmByID = async (searchID) => {
    const response = await fetch(`http://www.omdbapi.com/?apikey=86665b7a&i=${searchID}`)
    const movie = await response.json()
    console.log(movie)
    return movie

}
export default FilmByID