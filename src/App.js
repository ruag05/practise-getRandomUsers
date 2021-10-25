import {useEffect, useState} from 'react';
import axios from 'axios';

const fetchUserData = () => {
    return axios.get('https://randomuser.me/api')
    .then(res => {
      //console.log(res);
      return res;
    })
}

const getFullName = (userInfo) => {
  const {name : {first, last}} = userInfo;
  return `${first} ${last}`;
}

function App() { 
  const [randomUserDataJSON, setRandomUserDataJSON] = useState();
  const [randomUserData, setRandomUserData] = useState([]);

  useEffect( () => {
      fetchUserData().then(res => {
        console.log(res.data.results);
        setRandomUserData(res.data.results);
        setRandomUserDataJSON(JSON.stringify(res, null, 3));  
      })      
    }, []
  )

  return (
    <div>
      <h2>
        Code SandBox
      </h2>
      <p>
        {
          randomUserData.map((userInfo, idx) => ( 
            <>    
              <p>{getFullName(userInfo)}</p>
              <img src = {userInfo.picture.thumbnail}/>
            </>
          ))   
        }     
      </p>       
      <pre>
        {
          randomUserDataJSON
        }
      </pre>      
    </div>
  );
}

export default App;
