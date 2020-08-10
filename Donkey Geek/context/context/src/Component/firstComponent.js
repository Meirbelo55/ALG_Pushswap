import React, {Component} from "react";
import Second from "./secondComponent";
class First extends Component {
    render() {
        return(
            <div>
                <h1>{this.props.info.name}</h1>
                Im the first Component

                </div>
        )
    }
}
export default First;