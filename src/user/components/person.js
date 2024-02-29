import React, { Component} from "react";
import Man from "./man";

class Person extends Component {
    // constructor (props) {
    //     super (props)
    // }
    render () {
        return (
            <>
                <div>Name : Meet</div>
                <div>Age : 21</div>
                <Man/>
            </>
        )
    }
}

export default Person;