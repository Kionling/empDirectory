import React, { useState } from "react";

import SearchBar from "../components/search"

import employees from "../employees.json"


function Workplace(){
    const [sort, setSort] = useState({  
        name: true, 
        department: true,
        phone: true

    })

    // const [state, dispatch] = useReducer(//we define what are valid actions within out dispatch. What changes we CAN make only within Dispatch and only with valid action
    //     (state, action) => {
    //       if (action === "praiseHarry") {
    //         return { ...state, HarryPraises: state.HarryPraises + 1 };
    //       } else if (action === "praiseHermione") {
    //         return { ...state, HermionePraises: state.HermionePraises + 1 };
    //       } else {
    //         return state;
    //       }
    //     },
    //     { HarryPraises: 0, HermionePraises: 0 }
    //   );





}

export default Workplace