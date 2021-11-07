import {useState} from 'react';
import data from './Data';
import './App.css';

function App() {

  const [count, setCount] = useState(0);
  const [text, setText] = useState([]);

  const handleSubmit = e => {
    e.preventDefault();
    let amount = parseInt(count);
    if (amount > 8) {
      amount = 8;
    }
    if (amount <= 0) {
      amount = 1;
    }
    setText(data.slice(0, amount));
  }

  return (
    <div className="App">
      <div className='Container'>
        <h3 className='Title'>
          TIRED OF BORING LOREM IPSUM?
        </h3>
        <form action='#' onSubmit={handleSubmit}>
          <label for='amount'>Paragraphs:</label>
          <input type='number' id='amount' value={count}
          onChange={e => setCount(e.target.value)}/>
          <input type='submit' value='Generate' />
        </form>
        <div className='Textes'>{
          text.map(txt => {
            return <p>{txt}</p>
          })
        }</div>
      </div>
    </div>
  );
}

export default App;
