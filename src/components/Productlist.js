import Button from "react-bootstrap/Button";
import { Link } from "react-router-dom";

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
                <p className="col-12">&#8377;1,500</p>{" "}
                <i className="col-12  m-2">
                  <Link to={"/Rent"}>
                    <Button variant="outline-secondary">Rent for a day</Button>{" "}
                  </Link>
                </i>
                <i className="col-12  m-2">
                  <Link to={"/Rent"}>
                    <Button variant="outline-secondary">
                      Rent for a Month
                    </Button>
                  </Link>
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
