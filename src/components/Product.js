import React from "react";
import Productlist from "./Productlist";
import Topbar from "./Topbar";

function Product() {
  return (
    <>
      <Topbar></Topbar>
      <div className="container">
        <div class="container row gx-4 gx-lg-5 row-cols-2 row-cols-md-3 row-cols-xl-4 justify-content-center">
          <Productlist></Productlist>
        </div>
      </div>
    </>
  );
}

export default Product;
