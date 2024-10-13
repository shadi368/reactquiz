// App.js
import React from 'react';
import Quiz from './Quiz'; // Assuming Quiz is in the same directory

function App() {
    return (
        <div>
            <h1>Welcome to the Quiz App</h1>
            <Quiz />  {/* Make sure you're calling the Quiz component here */}
        </div>
    );
}

export default App;
