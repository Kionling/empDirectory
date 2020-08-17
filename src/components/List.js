import React from "react"
import ListBody from "./listBody"

const styles = {
    td: {
        margin: "7px"
    }
}
function List(props){
    return(
        <div className="container  " align="center">
            <tbody className="">
                <th scope="row" className="row" style={styles.td}>
                    <td className="col-6">
                        {props.name}
                    </td>
                    <td className="col-4">
                        {props.department}
                    </td>
                    <td className="col-6" >
                        {props.phone}
                    </td>

                </th>
            </tbody>
        </div>
    )
}

export default List