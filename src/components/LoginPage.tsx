import axios from "axios";
import React, { SyntheticEvent, useState } from "react";

axios.defaults.xsrfCookieName = 'csrftoken';
axios.defaults.xsrfHeaderName = 'X-SCRFToken';
axios.defaults.withCredentials = true;
export default function LoginPage() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  
  const submit = async (e:SyntheticEvent)=>{
    e.preventDefault();
    try {
      await axios.post("http://127.0.0.1:8000/api/login", {
        email,
        password
      }, {
        headers: {
          'Content-Type': 'application/json'
        },
        withCredentials: true,
      });

      // Handle success if needed
    } catch (error) {
      // Handle error if needed
      console.error("Error during login:", error);
    }

  }
  return (
    
      <form onSubmit={submit}>
 
        <h1 className="h3 mb-3 fw-normal">Please sign in</h1>


        <input type="email" className="form-control" placeholder="Email address" required onChange={e=>setEmail(e.target.value)}/>
      
      <input type="password" className="form-control" placeholder="Password" onChange={e=>setPassword(e.target.value)}/>
         
         <button className="btn btn-primary w-100 py-2" type="submit">
          Sign in
        </button>
      </form>
  );
}
