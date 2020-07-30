import React, { Component } from "react";
import Form from "react-bootstrap/Form";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";
class Navbar extends Component {
    constructor(props) {
        super(props);
        this.state = {
          name: "",
          phone: "",
          email: "",
          address: "",
          city: "",
          state: "CA",
          zip: "",
          details: "",
          availability: "",
     
        };
        this.handleNameChange = this.handleNameChange.bind(this);
        this.handleClick = this.handleClick.bind(this);
        this.handlePhoneChange = this.handlePhoneChange.bind(this);
        this.handleEmailChange = this.handleEmailChange.bind(this);
        this.handleAddressChange = this.handleAddressChange.bind(this);
        this.handleCityChange = this.handleCityChange.bind(this);
        this.handleStateChange = this.handleStateChange.bind(this);
        this.handleZipChange = this.handleZipChange.bind(this);
        this.handleDetailsChange = this.handleDetailsChange.bind(this);
        this.handleAvailabilityChange = this.handleAvailabilityChange.bind(this);
      }
     
    handleNameChange(e){
        this.setState({name: e.target.value});
        console.log("name handle clicked", this.state.name);
    }

    handlePhoneChange(e){
      this.setState({phone: e.target.value});
      console.log("phone handle clicked", this.state.phone);
    }

    handleEmailChange(e){
      this.setState({email: e.target.value});
      console.log("email handle clicked", this.state.email);
    }

    handleAddressChange(e){
      this.setState({address: e.target.value});
      console.log("address handle clicked", this.state.Address);
    }

    handleCityChange(e){
      this.setState({city: e.target.value});
      console.log("city handle clicked", this.state.city);
    }

    handleStateChange(e){
      this.setState({state: e.target.value});
      console.log("state handle clicked", this.state.state);
    }

    handleZipChange(e){
      this.setState({zip: e.target.value});
      console.log("zip handle clicked", this.state.zip);
    }

    handleDetailsChange(e){
      this.setState({details: e.target.value});
      console.log("details handle clicked", this.state.details);
    }

    handleAvailabilityChange(e){
      this.setState({availability: e.target.value});
      console.log("availability handle clicked", this.state.availability);
    }

    handleClick() {
      console.log("handleClick", this.state.name);
      var requestOptions = {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({name: this.state.name, phone: this.state.phone, email: this.state.email, address: this.state.address, city: this.state.city, state: this.state.state, zip: this.state.zip, details: this.state.details, availability: this.state.availability })
    };

    fetch('/api/add/user', requestOptions)
        .then(response => response.json())
        .then(data => this.setState({ postId: data.id }));

    }
    render() {
    var divStyle = {
      margin: 20,
      paddingTop: 10,
    };

    
    
    

    return (
      <div style={divStyle}>
        <Button variant="primary" onClick={this.handleClick}>
          test 
        </Button >
        <Form>
          <Form.Row>
            <Form.Group as={Col} controlId="formGridName">
              <Form.Label>Name</Form.Label>
              <Form.Control type="name" placeholder="Name"  value={this.state.name} onChange={this.handleNameChange}/>
            </Form.Group>

            <Form.Group as={Col} controlId="formGridPhone">
              <Form.Label>Phone Number</Form.Label>
              <Form.Control type="phone" placeholder="Enter Phone Number" value={this.state.phone} onChange={this.handlePhoneChange}/>
            </Form.Group>
          </Form.Row>

          <Form.Group controlId="formGridEmail">
            <Form.Label>Email</Form.Label>
            <Form.Control type="email" placeholder="Enter Email" value={this.state.email} onChange={this.handleEmailChange}/>
          </Form.Group>

          <Form.Group controlId="formGridAddress1">
            <Form.Label>Address</Form.Label>
            <Form.Control placeholder="1234 Main St"  value={this.state.address} onChange={this.handleAddressChange}/>
          </Form.Group>

          <Form.Row>
            <Form.Group as={Col} controlId="formGridCity">
              <Form.Label>City</Form.Label>
              <Form.Control  value={this.state.city} onChange={this.handleCityChange}/>
            </Form.Group>

            <Form.Group as={Col} controlId="formGridState">
              <Form.Label>State</Form.Label>
              <Form.Control as="select" defaultValue="Choose...">
                <option>Choose...</option>
                <option>CA</option>
              </Form.Control>
            </Form.Group>

            <Form.Group as={Col} controlId="formGridZip">
              <Form.Label>Zip</Form.Label>
              <Form.Control  value={this.state.zip} onChange={this.handleZipChange}/>
            </Form.Group>
          </Form.Row>

          <Form.Group controlId="formGridInfo">
            <Form.Label>Details</Form.Label>
            <Form.Control as="textarea" rows="4" type="info" placeholder="Enter Type of Fruit and Number of Trees etc."  value={this.state.details} onChange={this.handledetailsChange} />
          </Form.Group>

          <Form.Group controlId="formGridAvailability">
            <Form.Label>Availability</Form.Label>
            <Form.Control type="availability" placeholder="Enter Availability"  value={this.state.availability} onChange={this.handleAvailabilityChange}/>
          </Form.Group>
        

          <Button variant="primary" type="submit">
            Submit
          </Button>
        </Form>
      </div>
    );
  }
}

export default Navbar;
