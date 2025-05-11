import React from 'react'
import { Link } from 'react-router-dom'

export default function Footer() {
  return (
    <footer className="bg-dark text-center text-white">

  <div className="container p-4 pb-0">
     
    <section className="mb-4">
       
      <Link className="btn btn-outline-light btn-floating m-1" href="#!" role="button"
        ><i className="fab fa-facebook-f"></i
      ></Link>

      
      <Link className="btn btn-outline-light btn-floating m-1" href="#!" role="button"
        ><i className="fab fa-twitter"></i
      ></Link>

     
      <Link className="btn btn-outline-light btn-floating m-1" href="#!" role="button"
        ><i className="fab fa-google"></i
      ></Link>

      
      <Link className="btn btn-outline-light btn-floating m-1" href="#!" role="button"
        ><i className="fab fa-instagram"></i
      ></Link>

    
      <Link className="btn btn-outline-light btn-floating m-1" href="#!" role="button"
        ><i className="fab fa-linkedin-in"></i
      ></Link>

      
      <Link className="btn btn-outline-light btn-floating m-1" href="#!" role="button"
        ><i className="fab fa-github"></i
      ></Link>
    </section>
   
  </div>
 

 
  <div className="text-center p-3" style={{"backgroundColor":"black"}}>
    © 2020 Copyright:
    <Link className="text-white" href="https://mdbootstrap.com/">MDBootstrap.com</Link>
  </div>
 
</footer>
  )
}
