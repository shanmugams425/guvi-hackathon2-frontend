import React from "react";
import { Link } from "react-router-dom";


function Topbar() {
  return (
    <>
      <div>
       
        <nav class="navbar navbar-expand-lg navbar-light bg-light">
          <div class="container px-4 px-lg-5">
            <a class="fs-3 navbar-brand" href="#!">
              Epuipment Rental
            </a>
            <div class="collapse navbar-collapse" id="navbarSupportedContent">
              <ul class="navbar-nav me-auto mb-2 mb-lg-0 ms-lg-4">
              <li class="nav-item">
                  <Link class="nav-link" to={"/home"}>
                    <i class="fas fa-fw fa-table"></i>
                    <span>Home</span>
                  </Link>
                </li>
                <li class="nav-item">
                  <Link class="nav-link" to={"/product"}>
                    <i class="fas fa-fw fa-table"></i>
                    <span>Products</span>
                  </Link>
                </li>
                <li class="nav-item">
                  <Link class="nav-link" to={"/contact-us"}>
                    <i class="fas fa-fw fa-table"></i>
                    <span>Contact us</span>
                  </Link>
                </li>
              </ul>
            
            </div>
          </div>
        </nav>
      </div>
      
    </>
  );
}

export default Topbar;


 