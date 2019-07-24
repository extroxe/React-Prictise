import * as React from "react"
import {createBrowserHistory} from "history"
import {Link} from "react-router-dom"

const history = createBrowserHistory()

export default class Container extends React.Component {
    constructor(props: any) {
        super(props)
    }

    goToPage = () => {
        history.push('/root')
    };

    render() {
        return (
            <div>
                Container
                csdcsc
                <h2>
                    xscds
                </h2>
                <Link to="/root">container</Link>
                {/*<button onClick={this.goToPage}>Sign</button>*/}
            </div>
        )
    }
}