import React, { Component } from "react";
import Form from "react-bootstrap/Form";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";
class Navbar extends Component {
  render() {
    var divStyle = {
      margin: 20,
      paddingTop: 10,
    };

    return (
      <div style={divStyle}>
        <Form>
          <Form.Row>
            <Form.Group as={Col} controlId="formGridName">
              <Form.Label>Name</Form.Label>
              <Form.Control type="name" placeholder="Name" />
            </Form.Group>

            <Form.Group as={Col} controlId="formGridPhone">
              <Form.Label>Phone Number</Form.Label>
              <Form.Control type="phone" placeholder="Enter Phone Number" />
            </Form.Group>
          </Form.Row>

          <Form.Group controlId="formGridEmail">
            <Form.Label>Email</Form.Label>
            <Form.Control type="email" placeholder="Enter email" />
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

          <Button variant="primary" type="submit">
            Submit
          </Button>
        </Form>
      </div>
    );
  }
}

export default Navbar;
