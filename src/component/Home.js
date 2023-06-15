import React from "react";
import "../style/Home.css";
import { Link, useLocation } from 'react-router-dom';

const Home = () => {
  const path = useLocation();

  const customerclick=()=>{
    // alert("aditya")
  }
  return (
    <div className="mb-5">
      <div className="container-fluid p-3 position-relative upper-box"  >
        <div class="row container-fluid p-3">
          <div class="col container-fluid p-3">
            <div class="jumbotron mx-3 my-5">
              <h1 class="display-1 mt-3 mb-3 myfont">Spark Bank of India</h1>
              <p class="lead">This is a simple hero unit, a simple jumbotron-style component for calling extra attention to featured content or information.</p>
              <hr class="my-4" />
              <p>It uses utility classes for typography and spacing to space content out within the larger container.</p>
              {/* <p class="lead">
    <a class="btn btn-primary btn-lg" href="#" role="button">Learn more</a>
  </p> */}
            </div>


          </div>
          <div class="col container-fluid p-3 img-box"></div>

        </div>
      </div>


      <div className="container mycontainer display-1 mt-3 mb-3 myfont"><h1 className="display-3 mt-3 mb-3 myfont">Our services</h1></div>
      <div className="container ">


        {/* <div class="card" style={{width: "18rem"}}>
  <img src="..." class="card-img-top" alt="..."/>
  <div class="card-body">
    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
  </div>
  <img src="..." class="card-img-top" alt="..."/>
  <div class="card-body">
    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
  </div>
</div> */}


        <div class="row" >

          <div class="col-sm-4 pt-3">
            <div class="card pt-4">
              <img src="https://cdn-icons-png.flaticon.com/128/476/476863.png" class="card-img-top" alt="..." />

              <div class="card-body">
                <h5 class="card-title text-center text-center">Customers</h5>
                <p class="card-text text-center  text-center">List of all customer</p>
                <div  class=" text-center"> <Link  to="/ViewAllAccount">
                  <button  type="button" class="btn ">List of customer</button></Link>
                </div>
              </div>
            </div>
          </div>




          <div class="col-sm-4 pt-3">
            <div class="card pt-4">
              <img src="https://cdn-icons-png.flaticon.com/128/3513/3513504.png" class="card-img-top" alt="..." />

              <div class="card-body">
                <h5 class="card-title text-center">Transfer Fund</h5>
                <p class="card-text text-center">Tranfer Money</p>
                <Link  to="/TranferFund"><div class=" text-center"><button type="button" class="btn ">Tranfer Fund</button>
                </div></Link>
              </div>
            </div>
          </div>





          <div class="col-sm-4 pt-3">
            <div class="card pt-4">
              <img src="https://cdn-icons-png.flaticon.com/128/9770/9770860.png" class="card-img-top" alt="..." />
              <div class="card-body">
                <h5 class="card-title text-center">Transaction</h5>
                <p class="card-text text-center">View Transaction History</p>
                <div class=" text-center"> <Link  to="/TransferHistory"><button type="button" class="btn ">Transactions</button>
                </Link></div>
              </div>
            </div>
          </div>
        </div>
      </div>










    </div>
  );
};

export default Home;
