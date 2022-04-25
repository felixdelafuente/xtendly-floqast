import React from "react";

function Form() {
  return (
    <div className="form-container">
      <div className="form-details">
        <div>
          <h3>SCHEDULE A DEMO</h3>
          <p>Learn More About FloQast.</p>
        </div>
        
      </div>
      <form className="demo-form" action="">
        <div className="form-text">
          <p>Learn How FloQast Can&nbsp;</p>
          <p>Improve Your Month-End</p>
        </div>
        <div className="field-container">
          <input type="text" placeholder="First Name*" name="firstName" id="firstName" required />
          <input type="email" placeholder="Email*" name="email" id="email" required />
          <button type="submit" class="btn btn-primary">SCHEDULE NOW</button>
        </div>
      </form>
    </div>
  );
}

export default Form;
