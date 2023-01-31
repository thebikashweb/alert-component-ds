import React from 'react';
import './App.css';
import Alert from './Components/Alert/Alert';

function App() {
  return (
    <div className="App">
      <h2>Alert component</h2>
      <Alert
      title="Info Alert"
      description="This is an info alert example."
      severity="info"
      
    />
      <Alert
      title="Info Alert"
      description="This is an info alert example."
      severity="error"
    />
      <Alert
      title="Info Alert"
      description="This is an info alert example."
      severity="success"
    />
      <Alert
      title="Info Alert"
      description="This is an info alert example."
      severity="warning"
    />
    </div>
  );
}

export default App;
