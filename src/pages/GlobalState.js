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
         switch (action.type) {
            case "renderEmployees":
                return [...employees]
            case "search":
                return employees.filter((employee) =>{
                    return (
                        employee.name.includes(action.input),
                        employee.department.includes(action.input),
                        employee.phone.includes(action.input)

                    )
                })

         }

        },
        
      );

    search = (event) => {
        const userInput = event.target.value
    }





}

export default Workplace