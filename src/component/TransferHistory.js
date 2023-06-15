import React from 'react'
import  { useEffect,useContext,useState,useRef } from 'react'
import '../style/CustomerList.css'
import '../style/Home.css'
import Datacontext from '../context/Datacontex'


const TransferHistory = () => {
    const context=useContext(Datacontext)
    const {data}= context
    var a=1;
  return (
    <div style={{height:"78vh"}}>
         <div className='container myflex1 mb-5 mt-5' style={{  height:"auto"}}>
        Transfer Money</div>


        <div className='container'>
<table class="table table-hover mytable" >
  <thead>
    <tr>
      <th scope="col">S.No.</th>
      <th scope="col">Date</th>
      <th scope="col">From</th>
      <th scope="col">To</th>
      <th scope="col">Debits</th>
      <th scope="col">Credits</th>
      
    </tr>
  </thead>
  <tbody>

  

{data &&data.map((data)=>{ return(
    <tr>
    <th scope="row">{a++}</th>
    <td>{data.name}</td>
    <td>{data.email}</td>
    <td>{data.account}</td>
    <td className='debits'>{data.amount}</td>
    <td className='credits'>
  dgdf
        </td>
  
    
  </tr> )})}
   
    
    
  </tbody>
</table>
        
</div>

      
    </div>
  )
}

export default TransferHistory
