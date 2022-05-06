
import './App.css';
import LocationContainer from "./components/LocationContainer";
// import {useEffect, useState} from "react";

function App() {

 

  return (
    <div className="App">
      <header className="App-header">
      <img className="image" src='https://larepublica.pe/resizer/91FvLyr6sNkx6Q9NycJLy4nN0oE=/1250x735/top/smart/cloudfront-us-east-1.images.arcpublishing.com/gruporepublica/PCNCJ6R3FFGITHPO5YQRH3RQW4.jpg' alt=''/>
        <LocationContainer/>
      </header>
    </div>
  );
}

export default App;
