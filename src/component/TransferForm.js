import React ,{useState,useContext} from 'react'
import '../style/CustomerList.css'
import '../style/Home.css'
import Datacontext from '../context/Datacontex'


const TransferForm = () => {
  const context=useContext(Datacontext)
  const {transfer}= context

  const [cardential,setcardential]=useState({name1:"",email1:"",name2:"",email2:"",transfer_amount:""})
  const handlesubmit=async(e)=>{
      setcardential({name1:cardential.name1,email1:cardential.email1,name2:cardential.name2,email2:cardential.email2,transfer_amount:cardential.transfer_amount})
        e.preventDefault();
        try {
         const check= transfer(cardential.email1,cardential.email2,cardential.name1,cardential.name2,cardential.transfer_amount)
         
         
        } catch (error) {
           alert("transtions failed")
        }
         
          }
    const onchange=(e)=>{
            setcardential({...cardential,[e.target.name] : e.target.value})
          }



  return (
    <div style={{height:"78vh"}}>
    <div className='container myflex1' style={{  height:"auto"}}>
     Transfer Money</div>
     <div className='container  d-flex justify-content-center '  style={{  height:"auto"}}>
     <form onSubmit={ handlesubmit} style={{  width:"60%"}}>
      <h3>Detail of Appitcant:-</h3>
      <div className='row  d-flex justify-content-center  '>
       <div class="col-lg col-md-6 mb-4">
      <label for="exampleInputEmail1" class="form-label">Name</label>
      <input  onChange={onchange} type="text"  value={cardential.name1} name='name1' class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"/>
   </div>
      <div class="col-lg col-md-6 mb-4">
    <label for="exampleInputEmail1" class="form-label">Email ID</label>
  <input  onChange={onchange} type="email" class="form-control"  value={cardential.email1} name='email1' id="exampleInputEmail1" aria-describedby="emailHelp"/>
 
</div>
</div>
<h3>Detail of Beneficiary:-</h3>
<div className='row  d-flex justify-content-center  '>
       <div class="col-lg col-md-6 mb-4">
      <label for="exampleInputEmail1" class="form-label">Name</label>
      <input  onChange={onchange} type="text" class="form-control" id="exampleInputEmail1"  value={cardential.name2} name='name2' aria-describedby="emailHelp"/>
   </div>
      <div class="col-lg col-md mb-4">
    <label for="exampleInputEmail1" class="form-label">Email Id</label>
  <input  onChange={onchange} type="email" class="form-control"  value={cardential.email2} name='email2' id="exampleInputEmail1" aria-describedby="emailHelp"/>
 
</div>
</div>
<h3>Enter the amount to transfer:-</h3>
<div className='row  d-flex justify-content-center  '>
       <div class="col-lg col-md-6 mb-4">
      
      <input  onChange={onchange} type="number" class="form-control"  value={cardential.transfer_amount} name='transfer_amount' id="exampleInputEmail1" style={{width:"60%"}} aria-describedby="emailHelp"/>
   </div>
      
</div>
<div className=' d-flex justify-content-center'>

<button type="submit" class="btn " style={{border:"2px white solid"}}>Transfer</button>
</div>
</form>


    </div>

  </div>
  )
}

export default TransferForm
