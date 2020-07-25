import React, { Component } from "react";
import Carousel from 'react-bootstrap/Carousel';
import bootstrapCarousel from './BootstrapCarousel';
import img1 from './img1.jpg';

class home extends Component {
  render() {
    return (
      <div class="p-3 ">
        
        <h1 class="text-center">Home</h1>
       

        {/* <div class="container-fluid">
          <div className="row title" style={{ marginBottom: "20px" }}>
            <div class="col-sm-12 btn btn-warning">
              How To Use Bootstrap Carousel In ReactJS
            </div>
          </div>
        </div> */}

        <div className="container-fluid">
          <Carousel>
            <Carousel.Item style={{ height: "500px", backgroundImage: `url(${img1}` }}>
             <h1>Lemon</h1>
              {/* <img 
                style={{ height: "500px" }}
                className="d-block w-100"
                src={require('./img1.jpg')}
              /> */}
              

              <Carousel.Caption>
                <h3> Hi</h3>
              </Carousel.Caption>
            </Carousel.Item>

            <Carousel.Item style={{ height: "500px", backgroundColor: 'lightgray'}}>
              {/* <img
                style={{ height: "500px" }}
                className="d-block w-100"
                src={require('./img2.jpg')}
              /> */}
             

              <Carousel.Caption>
                <h3>Second Demo</h3>
              </Carousel.Caption>
            </Carousel.Item>

          </Carousel>
        </div>
        
      </div>
    );
  }
}

export default home;
