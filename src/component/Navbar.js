import React from 'react'
import '../style/Navbar.css'
import { Link,useLocation } from 'react-router-dom';

const Navbar = () => {
  const path=useLocation();
  return (
    <div>
      
      <nav class="navbar navbar-area navbar-area-2 navbar-expand-lg bg-body-tertiary mb-3 " style={{height:"12vh"}}data-bs-theme="dark">
  <div class="container-fluid"style={{height:"80%"}}>
    <Link class="navbar-brand" to="/">Spark Bank Of India</Link>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse justify-content-end" id="navbarSupportedContent">
      <ul class="navbar-nav nav justify-content-end mx-5">
        <li class="nav-item mx-5 ">
          <Link class={`nav-link ${path.pathname==='/'?'active':''}`} aria-current="page" to="/">Home</Link>
        </li>
        <li class="nav-item mx-5 ">
          <Link class={`nav-link ${path.pathname==='/addcustomer'?'active':''}`} aria-current="page" to="/addcustomer">Add Customer</Link>
        </li>
        <li class="nav-item mx-5">
          <Link class={`nav-link ${path.pathname==='/ViewAllAccount'?'active':''}`} to="/ViewAllAccount">View all accounts</Link>
        </li>
        <li class="nav-item mx-5">
          <Link class={`nav-link ${path.pathname==='/TranferFund'?'active':''}`} to="/TranferFund">Transfer Fund</Link>
        </li>
        <li class="nav-item mx-5">
          <Link class={`nav-link ${path.pathname==='/TransferHistory'?'active':''}`} to="/TransferHistory">Transaction</Link>
        </li>
      
    
      </ul>
    
    </div>
  </div>
</nav>
    </div>
  )
}

export default Navbar
