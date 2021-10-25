import {useEffect, useState} from 'react';
import axios from 'axios';

const fetchUserData = () => {
    return axios.get('https://randomuser.me/api')
    .then(res => {
      //console.log(res);
      return res;
    })
}

function App() {
  const [counter, setCounter] = useState(0);
  const [userInfos, setUserInfos] = useState('');
  const [randomUserDataJSON, setRandomUserDataJSON] = useState();

  useEffect( () => {
      fetchUserData().then(res => {
        setRandomUserDataJSON(JSON.stringify(res, null, 3));  
      })      
    }, []
  )

  return (
    <div>
      <h2>
        Code SandBox
      </h2>
      <pre>
      {
        randomUserDataJSON
      }
      </pre>

    </div>
  );
}

export default App;
