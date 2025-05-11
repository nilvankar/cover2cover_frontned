import React from 'react'
import '../../public/css/register.css'
export default function Signup() {
  return (
    	<div className="vh-100 w-100 d-flex align-items-center" id="mainBgn">
  <div className="formContainer">
    <div className="text-center mb-4 pb-3">
      <img src="/static_files/images/logos/rockMoon.png" alt="Company Logo" height="48" />
    </div>
    <form>
      <div>
        <span className="inputLogo"><i className="fas fa-lock"></i></span><input type="text" className="form-control rounded-pill" name="emailid" placeholder="example@email.co" />
      </div>
      <div className="my-2">
        <span className="inputLogo"><i className="fas fa-key"></i></span>
        <input type="password" className="form-control rounded-pill" name="password" placeholder="password" />
      </div>
      <button className="btn btn-accent rounded-pill w-100" type="submit">Login</button>
    </form>
  </div>
</div>
  )
}
