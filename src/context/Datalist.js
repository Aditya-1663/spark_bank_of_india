import React from 'react'
import { useState } from "react";
import { Context } from "react";
import Datacontext from "./Datacontex";
const host = "http://localhost:5000";


const Datalist = (props) => {
      const indata=[{
        "name":"aditya",
        "email":"aditya@gmail.com",
        "amount":"123456",
        "account":"123456789",

        
      }
      ,
    {
        "name":"aditya kumar",
        "email":"aditya@gmail.com",
        "amount":"123456",
        "account":"123456789"

        
      }
      ,
    {
        "name":"aditya kumar",
        "email":"aditya@gmail.com",
        "amount":"123456",
        "account":"123456789"

        
      }
      ,
    {
        "name":"aditya kumar",
        "email":"aditya@gmail.com",
        "amount":"123456",
        "account":"123456789"

        
      }
      ,
    {
        "name":"aditya kumar",
        "email":"aditya@gmail.com",
        "amount":"123456",
        "account":"123456789"

        
      }
      ,
    {
        "name":"aditya kumar",
        "email":"aditya@gmail.com",
        "amount":"123456",
        "account":"123456789"

        
      }
      ,
    {
        "name":"aditya kumar",
        "email":"aditya@gmail.com",
        "amount":"123456",
        "account":"123456789"

        
      }
      ,
    {
        "name":"aditya kumar",
        "email":"aditya@gmail.com",
        "amount":"123456",
        "account":"123456789"

        
      }
      ,
    {
        "name":"aditya kumar",
        "email":"aditya@gmail.com",
        "amount":"123456",
        "account":"123456789"

        
      }
      ,
    {
        "name":"aditya kumar",
        "email":"aditya@gmail.com",
        "amount":"123456",
        "account":"123456789"

        
      }
    ]


    // const [data,setdata]=useState(indata)
//  console.log(data)
 const getcustomerdata = [];

  const [data,setdata] = useState(getcustomerdata);

  //get notes

  const getdata = async () => {
    // console.log("hgfj")
    const response = await fetch(`${host}/addcustomer/allcustomers`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
       // "auth-token":[ localStorage.getItem('token')] 
        // "auth-token":localStorage.getItem('token'),
      },
    });
   
    const jsonData = await response.json();
    
    setdata(jsonData);
   
  };

const transfer =async(email1,email2,name1,name2,transfer_amount)=>{
  const response = await fetch(`${host}/tranfermoney/transfer`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
     // "auth-token":[ localStorage.getItem('token')] 
      // "auth-token":localStorage.getItem('token'),
    },
    body: JSON.stringify({email1,email2,name1,name2,transfer_amount }),
  });
 const json= await response.json()
  alert(json.error)

}
  return (
    <Datacontext.Provider value={{data,setdata,getdata,transfer}}> {props.children}</Datacontext.Provider>
)}

export default Datalist
