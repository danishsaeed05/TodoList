import React from 'react'

export default function About() {
    return (
        <React.Fragment>
            <h1>About</h1>
            <p>This is the Todo List Application v1.0.0. It is
            my very first application in React.</p>
            <br></br>
            <p>This application makes http request through axios (3rd party HTTP request)
                to "https://jsonplaceholder.typicode.com/todos/" and retrieves random todo list from there </p>
            <br></br>
            <p>Hope you enjoyed my App! Peace :)</p>

        </React.Fragment>
    )
}
