import axios from "axios"

const ResidentContainer = async (resident) => {
    const URL = `${resident}`
    const req = await axios.get(URL)
    return req
} 
export default ResidentContainer