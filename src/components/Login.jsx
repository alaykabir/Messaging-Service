import React, {useRef} from 'react'
import '../Login.css'

export default function Login({ onIdSubmit }){

  const idRef = useRef();
  
  function handleSubmit(e){
    e.preventDefault();

    onIdSubmit(idRef.current.value);
  }
  
  return(
    <div class="login-box">
      <p>Login</p>
      <form onSubmit={ handleSubmit }>
        <div class="user-box">
          <input required="" name="" type="text" ref={idRef} />
          <label>Email</label>
        </div>
        <div class="user-box">
          <input name="" type="password" />
          <label>Password</label>
        </div>
        <button type="submit">
          
          {/* <span></span>
          <span></span>
          <span></span>
          <span></span> */}
          
          Submit
        </button>
      </form>
      <p>Don't have an account? <a href="" class="a2">Sign up!</a></p>
    </div>

  )
}