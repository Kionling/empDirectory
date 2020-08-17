import React from "react"
import ListBody from "./listBody"

function List(props){
    return(
        <div>
            <tbody>
                <th scope="row">
                    <td>
                        {props.name}
                    </td>
                    <td>
                        {props.department}
                    </td>
                    <td>
                        {props.phone}
                    </td>

                </th>
            </tbody>
        </div>
    )
}

export default List