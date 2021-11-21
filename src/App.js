import function_pic from './img/function_pic.png';
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
            <ul className="list">
            <li>Not built for long running processes</li>
            <li> Primarily Stateless</li>
            <li>Can have performance or latency implications that can impact specfific types of problems</li>
            </ul>
          <h2>Basic anatomy of a serverless function</h2>
          <img src={function_pic} alt="anatomy of a serverless function" />
          <button id='fetch-btn'>Fetch</button>
          <p id="response-output">Response Placeholder</p>
      </header>
    </div>
  );
}

export default App;
