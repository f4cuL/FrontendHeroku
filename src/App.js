import React,{useState} from 'react';
import './App.css';

function App() {
    const [result, setResult] = useState("...");
    const buscar = () => {
        fetch(process.env.REACT_APP_BACK_ENDPOINT || "http://localhost:8080/hola").then(request => request.text()).then(data => setResult(data));
    };
    return (
        <div className="App">
            <h1>una app: {process.env.REACT_APP_ALGO} </h1>
            <button onClick={buscar}>Buscar al server</button>
            <h1> Result: </h1>
            <h2>{result}</h2>
        </div>
    );
}

export default App;
