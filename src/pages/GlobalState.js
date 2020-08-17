import React, {useEffect } from "react";

import SearchBar from "../components/search";
import List from "../components/List"

import employees from "../employees.json";
import { render } from "@testing-library/react";

class App extends React.Component {
   state = {
    employees: employees,
}

//   const [state, dispatch] = useReducer((state, action) => {
//     switch (action.type) {
//       case "renderEmployees":
//         return [...employees];
//       case "search":
//         return employees.filter((employee) => {
//           return (
//             employee.name.includes(action.input),
//             employee.department.includes(action.input),
//             employee.phone.includes(action.input)
//           );
//         });
//     }
//   });

  search = (event) => {
    const userInput = event.target.value;
    if (userInput === "") {
      this.setState({
        employees: this.state.employees,
      });
    } else {
      this.setState({
        employees: this.state.employees.filter(employee => {
            console.log(userInput)
          if (employee.name.includes(userInput)) {
            return true;
          } else {
            return false;
          }
        }),
      });
    }
  };

  intialSetup = (event) => {
    const employee = this.state.employees;
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

//   useEffect = () => {
//       {employees: employees}
//   }
  
  render(){

  
  return(
      <div>
          <input onChange={this.search}></input>
          {this.state.employees.map(emp => (
              <List 
              key={emp.id}
              intialSetup={this.intialSetup}
              name={emp.name}
              phone={emp.phone}
              department={emp.department}
              />
          ))}
      </div>
  )
          }
}

export default App;
