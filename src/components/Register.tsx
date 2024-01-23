import { SyntheticEvent, useState } from 'react'

import LoginPage from './LoginPage';
export default function Register() {
  
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [redirect, setRedirect] = useState(false)
  const submit = async (e: SyntheticEvent)=>{
    e.preventDefault();

    const response = await fetch("http://127.0.0.1:8000/api/register", {
        method: 'POST',
        
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            name, email, password
        })
    });
    setRedirect(true)
    const content = await response.json();
    console.log(content)
  }
  if (redirect){
   <LoginPage/>
  }

  
  return (
    <form onSubmit={submit}>
 
    <h1 className="h3 mb-3 fw-normal">Please Register</h1>


      <input type="text" className="form-control" placeholder="Your Full Name" required onChange={e=>setName(e.target.value)}/>

      <input type="email" className="form-control" placeholder="Email address" required onChange={e=>setEmail(e.target.value)}/>
      
      <input type="password" className="form-control" placeholder="Password" onChange={e=>setPassword(e.target.value)}/>
     
     <button className="btn btn-primary w-100 py-2" type="submit">
      Sign in
    </button>
  </form>
  )
}
