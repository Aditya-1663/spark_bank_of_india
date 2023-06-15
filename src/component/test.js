const [transfermoney,settransfer]=useState({name1:"",email1:"",name2:"",email2:"",transfer_amount:""})
const handlesubmit=async(e)=>{
    settransfer({name1:transfermoney.name1,email1:transfermoney.email1,name2:transfermoney.name2,email2:transfermoney.email2,transfer_amount:transfermoney.transfer_amount})
      e.preventDefault();
      try {
       const check= transfer(transfermoney.email1,transfermoney.email2,transfermoney.name1,transfermoney.name2,transfermoney.transfer_amount)
       
       
      } catch (error) {
         alert("transtions failed")
      }
       
        }
  const onchange=(e)=>{
          settransfer({...transfermoney,[e.target.name] : e.target.value})
        }