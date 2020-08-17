import React from "react"

const Styles ={
    body: {

    }
}

function ListBody(props){
    return(
        <tbody className="container justify-content-center">
            <tr>
                <th scope="row">
    <td>{props.name}</td>
    <td>{props.department}</td>
    <td>{props.phone}</td>
                </th>

            </tr>
        </tbody>
    )
}

export default ListBody