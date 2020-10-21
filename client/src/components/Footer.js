import React from 'react'

const Footer = () => {
    return (
        <>
           <div className="footer">
                  
                  <div className="container-fluid">
                      <div className="row">
                          <div className=" col-md-10 col-12 mx-auto">
                                    <div className="footerwrite">
                                          <h4 className="hhh" style={{fontWeight:""}}>Loan Approval Process </h4>
                                          <p className="ppp" >It's Easy Simple & Fast</p>
                                    </div>
                          </div>
                      </div>
                      <div className="row">
                          <div className=" col-md-4 col-12 mx-auto">
                                    <div className="Card">
                                        <div class="card-body footercard">
                                        <h1>Fill the form</h1>
                                            <p>Fill the application form, Submit the correct details, and requirements for the loan.</p>
                                       </div>
                                    </div>
                          </div>
                          <div className=" col-md-4 col-12 mx-auto">
                                  <div className="Card">
                                        <div class="card-body footercard">
                                        <h1>Verification</h1>
                                         <p>Our executive will get back to you for verification process.</p>

                                       </div>
                                    </div>
                          </div>
                          <div className=" col-md-4 col-12 mx-auto">
                                     <div className="Card">
                                        <div class="card-body footercard">
                                        <h1>Get Loan</h1>
                                         <p>Once Verification is done, Your loan will be approved.</p>

                                       </div>
                                    </div>
                                   
                          </div>
                      </div>
                  </div>

           </div>
        </>
    )
}

export default Footer
