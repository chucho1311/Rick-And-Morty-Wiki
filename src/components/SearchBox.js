import { useState} from "react"

const Search = ({handlerSearch}) => {

    const [inputValue, setInputValue] = useState('')

    return (
        <div>
            <input type='text' onChange={(e) => setInputValue(e.target.value)} className='search'/>
            <button className="buttonSearch" onClick={() => handlerSearch(inputValue)}>Search</button>
        </div>
        )
}
export default Search
