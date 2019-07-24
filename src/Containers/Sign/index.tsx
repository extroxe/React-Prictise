import * as React from "react"
import {Link} from "react-router-dom";


export default class Sign extends React.Component{
    render(){
        return(
            <div>
                test
                <Link to={"/"}>container</Link>
                {/*<button onClick={() => history.push("/")}>container</button>*/}
            </div>
        )
    }
}