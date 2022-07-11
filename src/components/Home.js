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
    </div>
  );
}

export default Home;
