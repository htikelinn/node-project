import React, { useState } from 'react';
import { loginApicall, setLoggedInUserName, setLoggedInUserNameRole, setToken } from '../service/AuthService';
import type { LoginDto } from '../dto/LoginDto';
import { useNavigate } from 'react-router-dom';

export default function Login() {
  const [userNameOrEmail, setUsernameEmail] = useState<string>("");
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);

  const navigator = useNavigate();
  
  const userNameEmailHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
    setUsernameEmail(event.target.value);
  }

  const passwordHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
    setPassword(event.target.value);
  }
  const loginHandler = (e: React.FormEvent) => {
    e.preventDefault();
    setError('');
    setLoading(true);
     const login:LoginDto = {
      userNameEmail: userNameOrEmail,
      password: password
     }
     loginApicall(login)
     .then(res =>{
       const token = 'Basic'+btoa(userNameOrEmail+":"+password);
       console.log(token);
       setToken(token); 
       setLoggedInUserName(login.userNameEmail) 
       setLoggedInUserNameRole(res.data);
       setUsernameEmail("");
       setPassword("");
       navigator("/");
       window.location.reload();
     })
     .catch(err => {
       setError('Invalid credentials');
       if (err instanceof Error) {
         setError(err.message);
       }
     } )
    setLoading(false);
  };

  // const handleSubmit = async (e: React.FormEvent) => {
  //   e.preventDefault();
  //   setError('');
  //   setLoading(true);
  //   const loginDto: LoginDto = {
  //     userNameEmail: userNameOrEmail,
  //     password: password
  //   };
  //   try {
  //     const res = await loginApicall(loginDto);
  //     // Example: store token and user info (customize as needed)
  //     const token = 'Basic ' + btoa(userNameOrEmail + ':' + password);
  //     console.log(token);
  //     setToken(token);
  //     setLoggedInUserName(loginDto.userNameEmail);
  //     setLoggedInUserNameRole(res.data);
  //     setUsernameEmail("");
  //     setPassword("");
  //     console.log('Login successful');
  //     navigator('/');
  //     window.location.reload();
  //     // TODO: redirect to home or dashboard if needed
  //   } catch (err: unknown) {
  //     setError('Invalid credentials');
  //       if (err instanceof Error) {
  //         console.error('Login error:', err.message);
  //       } else {
  //         console.error('Login error:', err);
  //       }
  //   }
  //   setLoading(false);
  // };

  return (
    <div style={{ maxWidth: 400, margin: '0 auto', background: '#fff', borderRadius: '1rem', boxShadow: '0 2px 16px rgba(0,0,0,0.08)', padding: '2rem' }}>
      <h2 style={{ textAlign: 'center', marginBottom: '1.5rem', color: '#6366f1' }}>Login</h2>
      <form onSubmit={loginHandler}>
        <div style={{ marginBottom: '1rem' }}>
          <label style={{ display: 'block', marginBottom: '.5rem', fontWeight: 500, color: '#222' }}>Username or Email</label>
          <input
            type="text"
            value={userNameOrEmail}
            onChange={userNameEmailHandler}
            style={{ width: '100%', padding: '.75rem', borderRadius: '.5rem', border: '1px solid #e5e7eb', color: '#222', background: '#f8fafc' }}
            required
          />
        </div>
        <div style={{ marginBottom: '1rem' }}>
          <label style={{ display: 'block', marginBottom: '.5rem', fontWeight: 500, color: '#222' }}>Password</label>
          <input
            type="password"
            value={password}
            onChange={passwordHandler}
            style={{ width: '100%', padding: '.75rem', borderRadius: '.5rem', border: '1px solid #e5e7eb', color: '#222', background: '#f8fafc' }}
            required
          />
        </div>
        {error && <div style={{ color: 'red', marginBottom: '1rem', textAlign: 'center' }}>{error}</div>}
        <button
          type="submit"
          style={{ width: '100%', padding: '.75rem', borderRadius: '.5rem', background: 'linear-gradient(90deg, #6366f1 0%, #60a5fa 100%)', color: '#fff', fontWeight: 600, border: 'none', cursor: 'pointer' }}
          disabled={loading}
        >
          {loading ? 'Logging in...' : 'Login'}
        </button>
      </form>
    </div>
  );
}
