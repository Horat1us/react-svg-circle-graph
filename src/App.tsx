import React from "react";
import { Presentation } from "./Presentation";

function App() {
    return (
        <main role="main" className="flex-shrink-0">
            <div className="container">
                <h1 className="mt-5 display-4">React SVG Circle Chart</h1>
                <p className="lead">Change values to interact with chart.</p>
                <Presentation />
                <p>
                    Available on <a
                    href="https://github.com/Horat1us/react-svg-circle-graph"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    GitHub
                </a> | <a
                    href="https://github.com/Horat1us/"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    Horat1us
                </a>
                </p>
            </div>
        </main>
    );
}

export default App;
