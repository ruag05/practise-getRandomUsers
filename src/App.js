import {useEffect, useState} from 'react';
import axios from 'axios';

const fetchUserData = (pageNumber) => {
    return axios.get(`https://randomuser.me/api?page=${pageNumber}`)
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
  const [randomUserData, setRandomUserData] = useState([]);
  const [nextPageNumber, setNextPageNumber] = useState(1);

  const fetchNextUser = () => {
    fetchUserData(nextPageNumber).then((res) => {
      //console.log(res.data);
      const newUserData = [
        ...randomUserData,
        ...res.data.results,
      ]
      setRandomUserData(newUserData);        
      setNextPageNumber(res.data.info.page + 1);
    }) 
  }

  useEffect( () => {
    fetchNextUser()
    }, [])

  return (
    <div>
      <h2>Code SandBox</h2>
      <button onClick={fetchNextUser}>Fetch Next User</button>
      <p>
        {
          randomUserData.map((userInfo, idx) => ( 
            <div>    
              <img src = {userInfo.picture.thumbnail} height='80px'/>
              <p>{getFullName(userInfo)}</p>              
            </div>
          ))   
        }     
      </p>                  
    </div>
  );
}

export default App;
