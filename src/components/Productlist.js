import React, { useEffect } from "react";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";

function Productlist() {


  

  return (
    <div>
      <div class="col mt-5">
        <div class="card h-100">
          <img
            class="card-img-top"
            src="https://picsum.photos/200/150"
            alt="..."
          />
          <div class="card-body">
            <div class="">
              <h5 class="fw-bolder">camera lens</h5>
              <div className="row">
                <p className="col-9">7 hours &#8377;1,500</p>{" "}
                <i className="col">
                  <ShoppingCartIcon></ShoppingCartIcon>
                </i>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Productlist;
