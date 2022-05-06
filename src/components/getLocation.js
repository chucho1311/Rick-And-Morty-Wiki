import axios from "axios"

const getLocation = async (locationId) => {

    const URL = `https://rickandmortyapi.com/api/location/?name=${locationId}`
    const req = await axios.get(URL)
    return req
}

export default getLocation