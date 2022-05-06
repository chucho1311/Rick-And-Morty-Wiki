import { useEffect, useState } from "react"
import ResidentContainer from "./ResidentContainer"

const ResidentInfo = ({residents}) => {

    const [name, setName] = useState('')
    const [image, setImage] = useState('')
    const [status, setStatus] = useState('')
    const [origin, setOrigin] = useState('')
    const [episode, setEpisode] = useState()

    useEffect(() => {
        ResidentContainer(residents)
        .then((response) => {
            setName(response.data.name)
            setImage(response.data.image)
            setStatus(response.data.status)
            setOrigin(response.data.origin.name)
            setEpisode(response.data.episode.length)
        })
    },[residents])

    return(
        <div className="card">
            <img src={image} alt='' className="imgResident"/>
            <h3>Name: {name}</h3>
            <h3>Status: {status}</h3>
            <h3>Origin: {origin}</h3>
            <h3>Episodes where appear: {episode}</h3>

        </div>
    )
}
export default ResidentInfo