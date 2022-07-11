import React from "react";
import { Card, } from 'react-bootstrap'

function Home() {
  return (
    <div>
      <Card className=" text-white text-center ">
  <Card.Img height="850px" src="https://bragpacker.com/wp-content/uploads/2016/04/Productcatalogue_photography.jpg" alt="Card image" />
  <Card.ImgOverlay>
    
   
    <Card.Text className="m-5 h7">LensRental is a Premium Camera Rental Company located in the cities of Chennai and Coimbatore. The Company gives All kinds of Camera, lenses and Equipments that serves the photographers and filmmakers alike. LensTiger provides Quality Equipment at affordable rates with easy Accessibility and 24/7 Availability.</Card.Text>
    <Card.Text className="h1 text-danger">
 We rent 
 <ul className="text-white h4 m-5">
  <li className="m-3">Cameras</li>
  <li className="m-3">Lens</li>
  <li className="m-3">Motion Devices</li>
  <li className="m-3">Lights</li>
  <li className="m-3">Video and Audio</li>
 </ul>

    </Card.Text>
  </Card.ImgOverlay>
</Card>
      {/* <div className="container">
        <h3 className="text-center m-5">
          Equipment Rental and Leasing Services Information
        </h3>
        <div id="lm-description">
          <div className="container">
            <p>
              Equipment rental and equipment leasing services handle a wide
              variety of equipment, machinery, and instruments, which their
              clients can use for a fee, for a determined amount of time. Some
              of the most commonly available rental pieces include testing
              devices and heavy equipment. Equipment rental and leasing services
              provide an industry with a specific device at a low cost. There
              are many types of equipment rental and equipment leasing services.
              Examples include tool equipment rental services, heavy equipment
              rental service, construction equipment rental services, industrial
              equipment rental services, medical equipment rental services, farm
              equipment rental services, and computer equipment rental services.
              Tool equipment rental services include the renting of lawn and
              garden tools such as rear tine roto-tillers, sod cutter, and
              professional power tools such as drills, generators, and circular
              saws. Heavy equipment rental service includes the renting of
              bulldozers, loaders, welding equipments, and trenchers.
              Construction equipment rental services include the renting of
              construction machinery such as bulldozers and loaders.
            </p>
          </div>
          <h2 className="text-center m-5">Overall Categories</h2>

          <ul>
          LensTiger is a Premium Camera Rental Company located in the cities of Chennai and Coimbatore. The Company gives All kinds of Camera, lenses and Equipments that serves the photographers and filmmakers alike. LensTiger provides Quality Equipment at affordable rates with easy Accessibility and 24/7 Availability.
We rent
Cameras
Lens
Motion Devices
Lights
Video and Audio
            <li>Camera</li>
            <li>Bikes</li>
            <li>Laptop</li>
            <li>Construction Vechicle</li>
          </ul>
        </div>
      </div>{" "} */}
    </div>
  );
}

export default Home;
