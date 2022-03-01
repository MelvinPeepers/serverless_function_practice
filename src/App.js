import React from 'react';
import function_pic from './img/function_pic.png';
import exports_pic from './img/exports_pic.png';
import handler_pic from './img/handler_pic.png';
import async_function_pic from './img/async_function_pic.png';
import object_pic from './img/object_pic.png';

import './App.css';

document.addEventListener('DOMContentLoaded', () => {
  const fetchBtn = document.getElementById('fetch-btn')
  const responseText = document.getElementById('response-output')

  fetchBtn.addEventListener('click', async () => {
    const response = await fetch('/.netlify/functions/hello').then(
      response => response.json()
    )

    responseText.innerText = JSON.stringify(response)
  })
})


function App() {
  return (
    <div className="App">
      <header className="App-header">
        <a
          className="App-link"
          href="https://www.netlify.com/products/functions/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <h1>Serverless Functions</h1>
        </a>
        <div className="lists">
        <h2>Why are serverless functions great?</h2>
          <ul className="list">
            <li>Lowers the barrier of entry</li>
            <li>Cheaper then owning your own servers</li>
            <li>Enable quick deployments</li>
            <li>Allows developers to work on problems</li>
          </ul>
        </div>
        
        <div className="lists">
          <h2>What are some limitations of serverless functions?</h2>
          <ul className="list">
            <li>Not built for long running processes</li>
            <li> Primarily Stateless</li>
            <li>Can have performance or latency implications that can impact specfific types of problems</li>
          </ul>
        </div>

        <div className="lists">
          <h2>Basic anatomy of a serverless function</h2>
          <img src={function_pic} alt="anatomy of a serverless function" />
          <button id='fetch-btn'>Fetch</button>
          <p id="response-output">Response Placeholder</p>
        </div>

        <div className="lists">
        <img src={exports_pic} alt="exports of a serverless function" />
          <p>Serverless function MUST contain an export of a function called handler.
This is the syntax for defining an export.</p>
        </div>

        <div className="lists">
          <img src={handler_pic} alt="variable name" />
          <p>Name of variable; handler</p>
        </div>

        <div className="lists">
          <img src={async_function_pic} alt="async function" />
          <p>Assign the handler an asynchronous function because serverless functions are expected to run asynchronously.</p>
        </div>

        <div className="lists">
          <img src={object_pic} alt="handler returns an object" />
          <p>Finally, the handler function is expected to return an object.</p>
        </div>

        <div className="lists end-list">
          <ul className="list">
            <li>Serverless function MUST contain an export of a function called handler.</li>
            <li>Assign an asynchronous function  (async function) </li>
            <li>handler is expected to return an object</li>
            <li>The object is expected to have at least two properties.
              <ul>
                <li>The first is a status code (such as 200, 404, 500, etc..)</li>
                <li>Also might have a body </li>
              </ul>
            </li>
          </ul>
        </div>

      </header>
    </div>
  );
}

export default App;
