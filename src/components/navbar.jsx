import React, { Component } from "react";

class Navbar extends Component {
  render() {
    return (
    
      <div>
        <nav class="site-header sticky-top py-1">
          <div class="container d-flex flex-column flex-md-row justify-content-between">
            <a class="py-2 d-none d-md-inline-block" href="#section2">
              Home
            </a>
            <a class="py-2 d-none d-md-inline-block" href="#"  target="_blank">
                About 
            </a>
            
            <a class="py-2 d-none d-md-inline-block" href="#">
              Sign up
            </a>
            
          </div>
        </nav>
       
        
       
      </div>

   
   );
  }
}

export default Navbar;
