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

      }
     
     handleNameChange(e){
        this.setState({name: e.target.value});
        console.log("name handle clicked", this.state.name);
    }

    render() {
    var divStyle = {
      margin: 20,
      paddingTop: 10,
    };

    
    
    function handleClick() {
      console.log("handleClick")
      var requestOptions = {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ title: 'React POST Request Example' })
    };
    fetch('/api/add/user', requestOptions)
        .then(response => response.json())
        .then(data => this.setState({ postId: data.id }));

    }

    return (
      <div style={divStyle}>
        <Button variant="primary" onClick={handleClick}>
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
              <Form.Control type="phone" placeholder="Enter Phone Number" />
            </Form.Group>
          </Form.Row>

          <Form.Group controlId="formGridEmail">
            <Form.Label>Email</Form.Label>
            <Form.Control type="email" placeholder="Enter Email" />
          </Form.Group>

          <Form.Group controlId="formGridAddress1">
            <Form.Label>Address</Form.Label>
            <Form.Control placeholder="1234 Main St" />
          </Form.Group>

          <Form.Row>
            <Form.Group as={Col} controlId="formGridCity">
              <Form.Label>City</Form.Label>
              <Form.Control />
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
              <Form.Control />
            </Form.Group>
          </Form.Row>

          <Form.Group controlId="formGridInfo">
            <Form.Label>Details</Form.Label>
            <Form.Control as="textarea" rows="4" type="info" placeholder="Enter Type of Fruit and Number of Trees etc." />
          </Form.Group>

          <Form.Group controlId="formGridAvailability">
            <Form.Label>Availability</Form.Label>
            <Form.Control type="availability" placeholder="Enter Availability" />
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
