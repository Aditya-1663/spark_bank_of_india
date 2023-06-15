// import React from 'react'
import React, { useEffect,useContext,useState,useRef } from 'react'
const Transfer = () => {
  const [cardential,setcardential]=useState({name:"",email:"",Mo_number:"",amount:"",address:"",account:""})
  const finddata= async()=>{
   
   
  
   const response = await fetch(`http://localhost:5000/addcustomer/finddata/${localStorage.getItem('localdata')}`, {
     method: "PUT",
     headers: {
       "Content-Type": "application/json",
       
     }
   });
   const json=await response.json();
   setcardential(json.data)
   
  }
  useEffect(()=>{
    
    const jsondata=finddata();
 
  },[]) 
 



  

  return (
    <div  style={{height:"78vh"}}>
        <div className='container myflex1 mb-5 mt-5' style={{  height:"auto"}}>
        Transfer Money</div>
        <div className='container p-3 pb-5' style={{ border:"2px white solid", height:"80%"}}>

        <div className='container  d-flex justify-content-center '  style={{  height:"auto"}}>
       <form  style={{  width:"60%"}}>
        <h3>Detail of Appitcant:-</h3>
        <div className='row  d-flex justify-content-center  '>
         <div class="col-lg col-md-6 mb-4" style={{margin:"3px 30px"}}>
        <label for="exampleInputEmail1"  style={{}}class="form-label">Name
        </label>
        <label for="exampleInputEmail1"  style={{marginLeft:"40px"}}class="form-label">
           {cardential.name}
        </label>
        
     </div>
        <div class="col-lg col-md-6 mb-4" style={{margin:"3px 30px"}}>
      <label for="exampleInputEmail1" class="form-label">Email Id</label>
    
      <label for="exampleInputEmail1"  style={{marginLeft:"40px"}}class="form-label">
            {cardential.email}
        </label>
   
  </div></div>
  <div className='row  d-flex justify-content-center  '>

        <div class="col-lg col-md-6 mb-4" style={{margin:"3px 30px"}}>
      <label for="exampleInputEmail1" class="form-label">Account Number</label>
      <label for="exampleInputEmail1"  style={{marginLeft:"40px"}}class="form-label">
            {cardential.account}
        </label>
   
  </div>
        <div class="col-lg col-md-6 mb-4" style={{margin:"3px 30px"}}>
      <label for="exampleInputEmail1" class="form-label">Amount</label>
      <label for="exampleInputEmail1"  style={{marginLeft:"40px"}}class="form-label">
            {cardential.amount}
        </label>
   
  </div>
  </div>
  <h3>Detail of Beneficiary:-</h3>
  <div className='row  d-flex justify-content-center  '>
         <div class="col-lg col-md-6 mb-4" style={{margin:"3px 30px"}}>
        <label for="exampleInputEmail1" class="form-label">Name</label>
        <input type="text" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"/>
     </div>
        <div class="col-lg col-md mb-4">
      <label for="exampleInputEmail1" class="form-label">Name</label>
    <input type="text" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"/>
   
  </div>
  </div>
  <h3>Enter the amount to transfer:-</h3>
  <div className='row  d-flex justify-content-center  '>
         <div class="col-lg col-md-6 mb-4" style={{margin:"3px 30px"}}>
        
        <input type="number" class="form-control" id="exampleInputEmail1" style={{width:"60%"}} aria-describedby="emailHelp"/>
     </div>
        
  </div>
  <div className=' d-flex justify-content-center mb-5'>

  <button type="submit" class="btn " style={{border:"2px white solid"}}>Transfer</button>
  </div>
</form>


      </div>



        
        
        
        
        </div>
      
    </div>
  )
}

export default Transfer
