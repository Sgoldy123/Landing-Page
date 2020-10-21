import React, { useState } from 'react'
import { useHistory } from 'react-router-dom'

const Form = () => {
     
    const [data,setdata]=useState({
        name:"",
        email:"",
        amount:"",
        loantype:"",
        phone:""
    })
    const history=useHistory()
    const write=(e)=>{
        const nam=e.target.name;
        const val=e.target.value;

        setdata((prev)=>{
            return{
                ...prev,
                [nam]:val
            }
        })
        //console.log(data);
    }
    const click=(e)=>{
        e.preventDefault();
            fetch('http://localhost:5000/form', {
            method: 'POST', // or 'PUT'
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(data),
            })
            .then(response => response.json())
            .then(data => {
                console.log(data);
                if(data.message){
                alert("Hi "+data.message.name+", your form is registered, we will mail you about further step for loan.")
                setdata({
                    name:"",
                    email:"",
                    amount:"",
                    loantype:"",
                    phone:""
                })
                
                history.push('/');}
                else{
                    alert(data.error)
                }
              
                
             
            })
            .catch((error) => {
            console.error('Error:', error);
            alert(error)
            });
    }


    return (
        <>
               
               
               <div className="form">
                 <div className="card" style={{background:"none",border:"1px solid black"}} >
                    <div className="card-body">
                       <form className="inputDiv">
                            <input onChange={write}  type="text" name="name" value={data.name} placeholder="Name"/>
                            <input onChange={write}   type="text" name="email" value={data.email}  placeholder="Email"/>
                            <input onChange={write}   type="text" name="loantype"value={data.loantype}  placeholder="Loan Type"/>
                            <input onChange={write}    type="text" name="amount" value={data.amount}  placeholder="Loan Amount"/>
                            <input onChange={write}   type="text" name="phone" value={data.phone}  placeholder="Phone"/>  
                            <button onClick={click} className="btn btn-outline-secondary">Submit</button> 
                       </form>

                    </div>
                </div>
              </div>
             
        </>
    )
}

export default Form
