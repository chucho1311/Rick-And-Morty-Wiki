

const LocationInfo = ({name,type,dimention}) =>{
    return(
        <div>
            <h2 >{name}</h2>
            <div className="locationInfo">
                <h3>Type: {type}</h3>
                <h3>Dimension: {dimention}</h3>
            </div>

        </div>
    );
}

export default LocationInfo