import React from 'react';
import { Form, Label, Input, Row, Col, FormGroup } from 'reactstrap';

const R044_ReactstrapForm = () => {
  return (
    <div>
      <Form>
        <Label for="exampleGender">gender</Label>
        <Input type="select" bsSize="sm" id="exampleGender">
          <option>no select</option>
          <option>woman</option>
          <option>man</option>
        </Input>
        <Row>
          <Col md={6}>
            <FormGroup>
              <Label for="address">address</Label>
              <Input type="text" id="address"/>
            </FormGroup>
          </Col>
          <Col md={4}>
            <FormGroup>
              <Label for="mobile">mobile</Label>
              <Input type="text" id="mobile"/>
            </FormGroup>
          </Col>
          <Col md={2}>
            <FormGroup>
              <Label for="age">age</Label>
              <Input type="text" id="age"/>
            </FormGroup>
          </Col>
        </Row>
      </Form>
    </div>
  );
};

export default R044_ReactstrapForm;