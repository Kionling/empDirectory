import React, { useState } from "react";

import SearchBar from "../components/search"

import employees from "../employees.json"


function Workplace(){
    const [sort, setSort] = useState({  
        name: true, 
        department: true,
        phone: true

    })

    const [state, dispatch] = useReducer(
        (state, action) => {
         switch (action.type)
        },
        []
      );





}

export default Workplace