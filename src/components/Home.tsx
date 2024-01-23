import axios from 'axios';
import  { useEffect, useState } from 'react'

axios.defaults.xsrfCookieName = 'csrftoken';
axios.defaults.xsrfHeaderName = 'X-CSRFToken';
axios.defaults.withCredentials = true;
export default function Home() {

  const [name, setName] = useState('')

  useEffect(()=>{
    (
      async ()=>{
       const response = await fetch("http://127.0.0.1:8000/api/user", {
          
          headers: {
            'Content-Type': 'application/json',
          },
          credentials: 'include',
        });
        const content = await response.json();
        setName(content.name)
        console.log(content)
      }
    )();
  })
  

  




  return (
    <div>Home {name}</div>
  )
}
