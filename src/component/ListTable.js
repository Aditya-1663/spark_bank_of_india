import React from 'react'
import  { useEffect,useContext,useState,useRef } from 'react'
import '../style/CustomerList.css'
import '../style/Home.css'
import Datacontext from '../context/Datacontex'
import {
    BrowserRouter as Router,
    
    Route,  Routes, Link
    
  } from "react-router-dom";


const ListTable = () => {
    const context=useContext(Datacontext)
    const {data,getdata}= context
    useEffect(()=>{
      

       getdata()

     
   },[]) 
    var a=1;
  const clickview=()=>{
   

  }
    
  return (
    <div >
       <div className='container myflex1' style={{height:"auto"}}>
       View All customer</div>


<div className='container'>
<table class="table table-hover mytable">
  <thead>
    <tr>
      <th scope="col">#</th>
      <th scope="col">Name</th>
      <th scope="col">Email ID</th>
      <th scope="col">Account No.</th>
      <th scope="col">Amount</th>
      <th scope="col">Profile</th>
      <th scope="col">To Transfer</th>

    </tr>
  </thead>
  <tbody>

  

{data &&data.map((data)=>{ return(
    <tr key={a}>
    <th scope="row">{a++}</th>
    <td>{data.name}</td>
    <td>{data.email}</td>
    <td>{data.account}</td>
    <td>{data.amount}</td>
    <td><Link  to="/ViewAllAccount/profile" onClick={()=>{localStorage.setItem('localdata',(data._id))}} >
  <button type="submit" class="btn innerbtn "  onClick={clickview} style={{border:"1px white solid"}}>View</button> 
  </Link>    </td>  
    <td> <Link  to="/ViewAllAccount/tranferprofile" onClick={()=>{localStorage.setItem('localdata',(data._id))}} >
  <button type="submit" class="btn innerbtn" style={{border:"1px white solid"}}>Transfer</button> </Link>   
        </td>
    
  </tr> )})}
   
    
    
  </tbody>
</table>
        
</div>



    </div>
  )
}

export default ListTable
