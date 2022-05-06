import axios from "axios";

const getURL = async () => {
    const URL = `https://rickandmortyapi.com/api/location`
    const req = await axios.get(URL)
    return req
    
}
export default getURL