import React, {useEffect } from "react";

import SearchBar from "../components/search";
import List from "../components/List"

import employees from "../employees.json";
import { render } from "@testing-library/react";
//Extending a Component allows us to pass props to a user defined class when a constructor is not present like it is in the App class. We can also define functions like setState in Component which will then be inherited into any class that extends the Component.
class App extends React.Component {
//Here I'm creating a state that allows for user changes

   state = {
    employees: employees,
    reset: employees
}
//failed attempt to use a useReducer
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
//this is a search function that when called upon updates the user input search values and updates the employee database

  search = (event) => {
    //here we're assigning the target value
    //and setting it towards the variable userInput
    const userInput = event.target.value;
    //here we create conditionals. 
    //If there is an empty string value (or no values) in the userInput target value
    //We are goign to set the sate to the ENTIRE employee json object
    if (userInput === "") {

      // using set state we are saying UPDATE this state of employees
      this.setState({
        //This is the target key we are setting to ANOTHER key value that does not change
        employees: this.state.reset,
      });
      //this is saying IF NOT the previous condition
    } else {
      //we are goign to set the state of....
      this.setState({
        //target the employees state value
        //we are filtering through tthe entire employees json object 
        employees: this.state.employees.filter(employee => {
            console.log(userInput)
            //Creating conditionals
            //if the name is equal to the user input, then return true
          if (employee.name.includes(userInput)) {
            return true;
            //if not, return false
          } else {
            return false
          }
        }),
      });
    }
  };

  //this fucntion creates the intial json structure and reads through the json object
  //
  intialSetup = (event) => {
    //setting the employees json object to the variable of employee
    const employee = this.state.employees;
    //we are UPDATING a state
    this.setState({

      //target the empployees state
      //we are sorting through two employees and setting the values consequentially
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
//failed use of useEffect
//   useEffect = () => {
//       {employees: employees}
//   }
  
//We are using the reder function because this is an entire extension the the App class component
//App.js will not be able to use a return value because app.js would not be able to parse the information
  render(){

  //we are returning html values
  return(
      <div>
          {/* <SearchBar search={this.search} /> 
           */}

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
//exporting app
export default App;
