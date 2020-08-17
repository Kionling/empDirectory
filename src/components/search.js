import React from "react"
import Workplace from "../pages/GlobalState"

function SearchBar(){
    return(
    <form>
        <input type="text" placeholder="Search for Employee..." className="form-control" onChange={this.search}></input>
    </form>
    )
}

export default SearchBar