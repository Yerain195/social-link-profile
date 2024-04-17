import React, { useEffect, useState } from 'react';
import Card from './components/Card';
import './App.css';

function App() {
  const [users, setUsers] = useState([]);
  useEffect(() => {
    fetch('https://661044580640280f219cb547.mockapi.io/api/v2/users')
      .then(res => {
        return res.json();
      }).then(data => {
        setUsers(data)
        console.log(data)
      });
  }, []);
  return (
    <>
      <div>
        {
          users.map((user) => (<Card key={user.id} user={user} />))
        }
      </div>
    </>

  )
}

export default App