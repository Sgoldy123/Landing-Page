import React from 'react'
import { Link } from 'react-router-dom'
import { Route} from 'react-router-dom' 
import Contact from './Contact'
import Form from './Form'


const Header = () => {

    return (
        <>
           <div className="header">

              <div className="container-fluid">
                  <div className="row">
                      <div className="col-md-6 col-12 mx-auto">
                          <div className="headerform">
                            <p>Get Instant Loan With Lowest Market Rate</p>
                            <p style={{fontSize:"20px",color:"#C0C0C0"}}>Make your Dreams Come true</p>
                          </div>
                      </div>
                      <div className="col-md-6 col-12 mx-auto">
                      <div className="btncss">
                                <div style={{marginTop:"0px",marginLeft:"0"}}>
                                    <Link to='/form' ><button  type="button" style={{color:"black",fontWeight:"bold"}} className="btn btn-outline-secondary">Apply</button></Link>
                                </div>
                                <div style={{marginTop:"0px",marginLeft:"40px"}}>
                                    <Link to='/contact' ><button type="button" style={{color:"black",fontWeight:"bold"}} className="btn btn-outline-secondary">ContactUs</button></Link>
                                </div>
                                   

                      </div>
                      </div>

                     {/* <div className="row"> */}
                        <div className="col-md-6 col-12">
                                <div className="formrouter">
                                    <div>
                                         <Route exact path='/form' component={Form}/>
                                    </div>
                                </div>
                        </div>
                        {/* <Form/> */}
                        <div className="col-md-6 col-12">
                                <div className="">
                                    <div >
                                         <Route exact path='/contact' component={Contact}/>
                                    </div>
                                </div>
                        </div>
                    {/* </div> */}
                      
                      
                  </div>
              </div>      
                  
           </div>

        </>
    )
}

export default Header
