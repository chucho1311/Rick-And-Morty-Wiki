import {useEffect, useState} from "react";
import getLocation from "./getLocation";
import LocationInfo from "./LocationInfo";
import ResidentInfo from "./ResidentInfo";
import SearchBox from "./SearchBox";

const LocationContainer = () => {

  const [locationName, setLocationName]=useState('')
  const [searchValue, setSearchValue] = useState('')
  const [locationType, setLocationType] = useState('')
  const [locationDimension, setLocationDimension] = useState('')
  const [locationResidents, setLocationResidents] = useState([])

  
    useEffect(() => {
      getLocation(searchValue)
      .then((response) => {
        setLocationName(response.data.results[0].name)
        setLocationType(response.data.results[0].type)
        setLocationDimension(response.data.results[0].dimension)
        setLocationResidents(response.data.results[0].residents)
      })
    },[searchValue])

    const residentList = locationResidents.map((resident) =>{ return(<ResidentInfo residents={resident} key={resident}/>)});

    
    return (
      <div>
        
        <SearchBox handlerSearch={setSearchValue} className='search'/>
        <LocationInfo name={locationName} type={locationType} dimention={locationDimension} />
        <div className="order">
          {residentList} 
        </div>
      </div>
  );
}

export default LocationContainer