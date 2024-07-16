import React, { useState } from 'react';

function App() {
  // let [username, setUsername] = useState('');
  // let [password, setPassword] = useState('');

  const [data, setData] = useState({
    username: 'username',
    password: 'password',
  });

  // const usernameChange = (event) => {
  //   setUsername((username = event.target.value));
  // };

  // const passwordChange = (event) => {
  //   setPassword((password = event.target.value));
  // };

  const usernameChange = (event) => {
    setData({ ...data, username: event.target.value });
  };

  const passwordChange = (event) => {
    setData({ ...data, password: event.target.value });
  };
  return (
    <>
      {/* <div>
        <h1>header</h1>
        <input onChange={usernameChange} type='text' placeholder='username' />
        <input
          onChange={passwordChange}
          type='password'
          placeholder='password'
        />
        <p>username: {username}</p>
        <p>password: {password}</p>
      </div> */}

      <div>
        <h1>header</h1>
        <input onChange={usernameChange} type='text' placeholder='username' />
        <input
          onChange={passwordChange}
          type='password'
          placeholder='password'
        />
        <p>username: {data.username}</p>
        <p>password: {data.password}</p>
      </div>
    </>
  );
}

export default App;
