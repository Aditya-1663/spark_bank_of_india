// import { useState } from "react"
import React ,{useState} from 'react'
import {useNavigate} from 'react-router-dom';

const Addcustomer = () => {
    const navigate = useNavigate();
    const [cardential,setcardential]=useState({name:"",email:"",Mo_number:"",number:""})
    const handlesubmit=async(e)=>{
        e.preventDefault();
        const response = await fetch(`http://localhost:5000/addcustomer/createuser`, {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
              
            },
            body: JSON.stringify({name:cardential.name,email:cardential.email,Mo_number:cardential.Mo_number,number:cardential.number,amount:cardential.amount})
          });
          const json=await response.json();
          console.log(json)

          if(json.success){
            // save the token and redirect
            localStorage.setItem('localdata',(json.user._id))
            alert( json.user._id+" account has be created successfully")
           navigate("/ViewAllAccount/profile")
          }
          else{
            alert(json.success+",/n account not be created")
          } 
          }
    const onchange=(e)=>{
            setcardential({...cardential,[e.target.name] : e.target.value})
          }




  return (
    <div style={{height:"78vh"}}>
    <div className='container myflex1' style={{  height:"auto"}}>
     Add customer</div>
     <div className='container  d-flex justify-content-center '  style={{  height:"auto"}}>
     <form  style={{  width:"60%"}} onSubmit={handlesubmit}>
      <h3>Detail of Appitcant:-</h3>
      <div className='row  d-flex justify-content-center  '>
       <div class="col-lg col-md-6 mb-4">
      <label for="exampleInputEmail1" class="form-label">Name</label>
      <input  onChange={onchange} type="text" class="form-control" value={cardential.name} name='name' id="exampleInputEmail1" aria-describedby="emailHelp"/>
   </div>
      <div class="col-lg col-md-6 mb-4">
    <label for="exampleInputEmail1" class="form-label">Email</label>
  <input  onChange={onchange} type="email" class="form-control" value={cardential.email} name='email' id="exampleInputEmail1" aria-describedby="emailHelp"/>
 
</div>
</div>
{/* <h3>Detail of Beneficiary:-</h3> */}
<div className='row  d-flex justify-content-center  '>
       <div class="col-lg col-md-6 mb-4">
      <label for="exampleInputEmail1" class="form-label">Moblie Number</label>
      <input  onChange={onchange} type="number" class="form-control" value={cardential.Mo_number} name='Mo_number' id="exampleInputEmail1" aria-describedby="emailHelp"/>
   </div>
      <div class="col-lg col-md mb-4">
    <label for="exampleInputEmail1" class="form-label">Address</label>
  <input  onChange={onchange} type="text" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"/>
 
</div>
</div>
<h3>Inital amount</h3>
<div className='row  d-flex justify-content-center  '>
       <div class="col-lg col-md-6 mb-4">
      
      <input  onChange={onchange} type="number" class="form-control" value={cardential.amount} name='amount' id="exampleInputEmail1" style={{width:"60%"}} aria-describedby="emailHelp"/>
   </div>
      
</div>
<div className=' d-flex justify-content-center'>

<button type="submit" class="btn "  style={{border:"2px white solid"}}>Submit</button>
</div>
</form>


    </div>

  </div>
  )
}

export default Addcustomer
