import './App.css';
import React from 'react';
/* global chrome */
function App() {
  const [text, setSelectedText] = React.useState('')
  const [copyStatus, setCopyStatus] = React.useState('Copy')
  chrome.tabs.executeScript({
    code: "window.getSelection().toString();"
  }, function (selection) {
    console.log("selected");
    setSelectedText(selection[0])
  })
  return (
    <div className="App">
      <h5>Selected Text</h5>
      <div>
        {text}
      </div>
      <div style={{ marginTop: "5px" }}>
        <button onClick={() => { navigator.clipboard.writeText(text); setCopyStatus('Copied') }}>{copyStatus}</button>
      </div>
    </div>
  );
}

export default App;
