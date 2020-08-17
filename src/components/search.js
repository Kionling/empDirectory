import React from "react"

function SearchBar(){
    return(
    <form>
        <input type="text" placeholder="Search for Employee..." className="form-control" filter={filter}></input>
    </form>
    )
}