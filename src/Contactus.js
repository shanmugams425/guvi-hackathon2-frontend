import React from 'react'

function Contactus() {
  return (
    <div className='container mt-4'><div class="col-lg-5 mb-4">

    <div class="card">

      <div class="card-body">
        <div class="form-header blue accent-1">
          <h3>
            <i class="fa fa-envelope"></i> Write to us:</h3>
        </div>

        <p>We'll write rarely, but only the best content.</p>
        <br/>

        <div class="md-form">
          <i class="fa fa-user prefix grey-text"></i>
          <input type="text" id="form-name" class="form-control"/>
          <label for="form-name">Your name</label>
        </div>

        <div class="md-form">
          <i class="fa fa-envelope prefix grey-text"></i>
          <input type="text" id="form-email" class="form-control"/>
          <label for="form-email">Your email</label>
        </div>

        <div class="md-form">
          <i class="fa fa-tag prefix grey-text"></i>
          <input type="text" id="form-Subject" class="form-control"/>
          <label for="form-Subject">Subject</label>
        </div>

        <div class="md-form">
          <i class="fas fa-pencil-alt prefix grey-text"></i>
          <textarea type="text" id="form-text" class="form-control md-textarea" rows="3"></textarea>
          <label for="form-text">Icon Prefix</label>
        </div>

        <div class="text-center">
          <button class="btn btn-primary ">Submit</button>
        </div>

      </div>

    </div>

  </div>
  
  </div>
  )
}

export default Contactus