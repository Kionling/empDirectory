import React, { useState } from "react";

import SearchBar from "../components/search";

import employees from "../employees.json";

function Workplace() {
  const [sort, setSort] = useState({
    name: true,
    department: true,
    phone: true,
    employees: employees,
  });

  const [state, dispatch] = useReducer((state, action) => {
    switch (action.type) {
      case "renderEmployees":
        return [...employees];
      case "search":
        return employees.filter((employee) => {
          return (
            employee.name.includes(action.input),
            employee.department.includes(action.input),
            employee.phone.includes(action.input)
          );
        });
    }
  });

  search = (event) => {
    const userInput = event.target.value;
    if (userInput === "") {
      this.setState({
        employees: [...employees],
      });
    } else {
      this.setState({
        employees: this.state.employees.filter((employee) => {
          if (employees.name.includes(userInput)) {
            return true;
          } else {
            return false;
          }
        }),
      });
    }
  };

  intialSetup = (event) => {
    const employee = [...employees];
    this.setState({
      employees: employee.sort((a, b) => {
        if (a.name < b.name) {
          return 1;
        }
        if (a.name > b.name) {
          return -1;
        }
      }),
    });
  };
}

export default Workplace;
