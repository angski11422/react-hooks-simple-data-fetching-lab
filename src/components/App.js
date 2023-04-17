// create your App component here
import React, { useEffect, useState } from "react";

function App() {
    const [message, setMessage] = useState("")

    useEffect(() => {
        fetch("https://dog.ceo/api/breeds/image/random")
        .then(resp => resp.json())
        .then(dogs => setMessage(dogs.message));
    }, []);

    if (!message) {
        return <p>Loading...</p>
    }

    return (
        <div>
            <img src={message} alt="A Random Dog"/>
        </div>
    )
}

export default App;