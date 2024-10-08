import React, { useState } from 'react';
import axios from 'axios';

const LoginComponent = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = async () => {
    try {
      const formData = new FormData();
      formData.append('username', username);
      formData.append('password', password);

      const response = await axios.post('http://localhost:8080/login', formData, {
          headers: {
              'Content-Type': 'application/x-www-form-urlencoded', 
          },
          withCredentials: true
      });

      console.log(response.data);
      const { userName } = response.data;

      localStorage.setItem('userName', userName);
      console.log("User ID stored:", userName);
  } catch (error) {
      console.error("Login error:", error);
      if (error.response) {
          console.error("Error data:", error.response.data);
          console.error("Error status:", error.response.status);
      }
  }
  };

  // useEffect(() => {
  //   const clearLocalStorageOnUnload = () => {
  //     localStorage.removeItem('userName');
  //   };
  
  //   window.addEventListener('beforeunload', clearLocalStorageOnUnload);
  
  //   return () => {
  //     window.removeEventListener('beforeunload', clearLocalStorageOnUnload);
  //   };
  // }, []);
  

  return (
    <div>
      <input 
        type="text" 
        value={username} 
        onChange={(e) => setUsername(e.target.value)} 
        placeholder="Username" 
      />
      <input 
        type="password" 
        value={password} 
        onChange={(e) => setPassword(e.target.value)} 
        placeholder="Password" 
      />
      <button onClick={handleLogin}>Login</button>
    </div>
  );
};

export default LoginComponent;
