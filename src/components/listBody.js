import React from "react"


function ListBody(props){
    return(
        <tbody>
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