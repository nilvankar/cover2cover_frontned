import React from 'react'

export default function Login() {
  return (
    <section className="vh-100" 
    // style="background-color: #9A616D;"
    style={{'backgroundColor':"#9A616D"}}
    >
  <div className="container py-5 h-100">
    <div className="row d-flex justify-content-center align-items-center h-100">
      <div className="col col-xl-10">
        <div className="card" 
        // style="border-radius: 1rem;"
        style={{'borderRadius':"1rem"}}
        >
          <div className="row g-0">
            <div className="col-md-6 col-lg-5 d-none d-md-block">
              <img src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-login-form/img1.webp"
                alt="login form" className="img-fluid" 
                // style="border-radius: 1rem 0 0 1rem;"
                style={{borderRadius:"1rem 0 0 1rem"}}
                 />
            </div>
            <div className="col-md-6 col-lg-7 d-flex align-items-center">
              <div className="card-body p-4 p-lg-5 text-black">

                <form>

                  <div className="d-flex align-items-center mb-3 pb-1">
                    <i className="fas fa-cubes fa-2x me-3"
                    //  style="color: #ff6219;"
                    style={{color:"#ff6219"}}
                    ></i>
                    <span className="h1 fw-bold mb-0">Logo</span>
                  </div>

                  <h5 className="fw-normal mb-3 pb-3"
                  //  style="letter-spacing: 1px;"
                  style={{"letterSpacing":"1px"}}
                  >Sign into your account</h5>

                  <div data-mdb-input-init className="form-outline mb-4">
                    <input type="email" id="form2Example17" className="form-control form-control-lg" />
                    <label className="form-label" htmlFor="form2Example17">Email address</label>
                  </div>

                  <div data-mdb-input-init className="form-outline mb-4">
                    <input type="password" id="form2Example27" className="form-control form-control-lg" />
                    <label className="form-label" htmlFor="form2Example27">Password</label>
                  </div>

                  <div className="pt-1 mb-4">
                    <button data-mdb-button-init data-mdb-ripple-init className="btn btn-dark btn-lg btn-block" type="button">Login</button>
                  </div>

                  <a className="small text-muted" href="#!">Forgot password?</a>
                  <p className="mb-5 pb-lg-2" 
                  // style="color: #393f81;"
                  style={{"color":" #393f81"}}
                  >Don't have an account? <a href="#!"
                      // style="color: #393f81;"
                      style={{color:"#393f81"}}
                      >Register here</a></p>
                  <a href="#!" className="small text-muted">Terms of use.</a>
                  <a href="#!" className="small text-muted">Privacy policy</a>
                </form>

              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>
  )
}
