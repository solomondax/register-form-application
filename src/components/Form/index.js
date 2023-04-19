import './index.css'
import React, { useState } from 'react'


function Form() {
    
const [data, setData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: ""
    
})
    

const handler = (e) => {
    setData({ ...data, [e.target.name]: e.target.value })
     
    }
    const onSumitHandeler = (e) => {
        e.preventDefault()
        console.log(data)
        setData({ firstName: "",
    lastName: "",
    email: "",
    password: "",
     })
    }
        
        
        
    const {firstName,lastName,email,password} = data
        return (
            <div className="main-container">
                <form onSubmit={onSumitHandeler}>
                <div className="sub-container">
                    <h1 className="heading">Register Form</h1>
    
                <div className="input-containers">
                    <label>Name</label><br/>
                            <input type="FirstName" name="firstName" placeholder="FirstName" value={firstName} onChange={handler} />
                            {firstName.length===0?<p style={{color:"red",marginTop:"-3px",fontSize:"13px"}}>Required*</p>:null}
                        </div>
                        
                <div className="input-containers">
                    <label>LastName</label><br/>
                            <input type="LastName" name="lastName" placeholder="LastName" value={lastName} onChange={handler} />
                            {lastName.length===0?<p style={{color:"red",marginTop:"-3px",fontSize:"13px"}}>Required*</p>:null}
                        </div>
                         
                <div className="input-containers">
                    <label>Email</label><br/>
                            <input type="email" name="email" placeholder="Email" value={email} onChange={handler} />
                            {email.length===0?<p style={{color:"red",marginTop:"-3px" ,fontSize:"13px"}}>Email Required*</p>:null}
                </div>
                <div className="input-containers">
                    <label>Password</label><br/>
                            <input type="password" name="password" placeholder="password" value={password} onChange={handler} />
                            {password.length<4?<p style={{color:"red",marginTop:"-3px",fontSize:"13px"}}>Password must be 6 char</p>:null}
                        </div>
                        
                
                    <button>Submit</button>
                    </div>    
                    
              </form>  
            </div>
    )
    }
    export default Form
    
    
                
                            
                            
        
        
        
        

        

        
