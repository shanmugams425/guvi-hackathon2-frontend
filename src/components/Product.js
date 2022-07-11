import React from "react";
import Productlist from "./Productlist";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
function Product() {
  return (
    <>
      <div className="container">
        <div class="input-group mt-2">
          <input
            type="search"
            class="form-control rounded"
            placeholder="Search"
            aria-label="Search"
            aria-describedby="search-addon"
          />
          <button type="button" class="btn btn-outline-primary">
            search
          </button>
          <form class="d-flex">
            <button class="btn btn-outline-dark" type="submit">
              <ShoppingCartIcon></ShoppingCartIcon>
              Cart
              <span class="badge bg-dark text-white ms-1 rounded-pill">0</span>
            </button>
          </form>
        </div>

        <div class="container row gx-4 gx-lg-5 row-cols-2 row-cols-md-3 row-cols-xl-4 justify-content-center">
          <Productlist></Productlist>
        </div>
      </div>
    </>
  );
}

export default Product;
