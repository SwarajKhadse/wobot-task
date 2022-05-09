import React from 'react'
import './Login.css'
function login() {
  return (
<>

<div className='main-cont '>
<div className='container border mt-3 bod rounded' >
  <div className="container ">
<form className=' container form-sub' >
  <div className='logo-second mt-3 d-flex '>
  </div>
<h2 className='text-center mt-3 '>It’s a delight to have you onboard</h2>
    <p className='text-center'>Help us know you better. (This is how we optimize Wobot as per your business needs)
</p>

  <div class="mb-3">
    <label for="exampleInputName" class="form-label">Company name</label>
    <input type="text" class="form-control" id="exampleInputName" aria-describedby="emailHelp" placeholder='e.g. Example inc'/>
   
  </div>
  
  
  {/* <!-- Example single danger button --> */}
  <label for="dropdown" class="form-label">Industry</label>
  <div class="input-group mb-3" id="dropdown">
  
  <select class="form-select" id="inputGroupSelect03" aria-label="Example select with button addon">
    <option selected>Choose</option>
    <option value="1">One</option>
    <option value="2">Two</option>
    <option value="3">Three</option>
  </select>
</div>
<div class="mb-3">
    <label for="exampleInputPassword1" class="form-label">Company Size</label>
    
  </div>
  <button type="button" className="btn btn-light  butt">1-20</button>  
  <button type="button" className="btn btn-light  butt">21-50</button>  
  <button type="button" className="btn btn-light  butt">51-200</button>  
  <button type="button" className="btn btn-light  butt">201-500</button>  
  <button type="button" className="btn btn-light  butt">500+</button>  
  <button type="submit" className="btn btn-primary w-100 mb-3  butt">Get Started</button>
</form>

</div></div>
<p className='text-center mt-2'>Terms of use | Privacy policy</p>
</div>
</>  )
}

export default login;