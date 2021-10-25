import {useState} from 'react';

function App() {
  const [counter, setCounter] = useState(0);

  function increaseCounter(){
        setCounter(counter + 1)
  }

  return (
    <div>
      <h2>
        Code SandBox
      </h2>
      <div>{counter}</div>
      <button onClick= {increaseCounter}>Increase Counter</button>
    </div>
  );
}

export default App;
