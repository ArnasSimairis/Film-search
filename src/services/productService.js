const Film = async (searchWord) => {
    const response = await fetch(`http://www.omdbapi.com/?i=tt3896198&apikey=86665b7a&s=${searchWord}`)
    const movies = await response.json()
    return movies
}
export default Film