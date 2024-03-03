import React from "react";

export default function Profile (props) {

    return (
        <div>
            <h2>name: {props.name}</h2>
            <h2>age: {props.age}</h2>
            <h2>Email: {props.email}</h2>
        </div>
    )
}
