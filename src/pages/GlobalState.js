import React, {useEffect } from "react";

import SearchBar from "../components/search";
import List from "../components/List"

import employees from "../employees.json";
import { render } from "@testing-library/react";
//Extending a Component allows us to pass props to a user defined class when a constructor is not present like it is in the App class. We can also define functions like setState in Component which will then be inherited into any class that extends the Component.
class App extends React.Component {
//Here I'm creating a state that allows the user 
   state = {
    employees: employees,
    reset: employees
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
        employees: this.state.reset,
      });
    } else {
      this.setState({
        employees: this.state.employees.filter(employee => {
            console.log(userInput)
          if (employee.name.includes(userInput)) {
            return true;
          } else {
            return false
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
          <SearchBar /> 
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
