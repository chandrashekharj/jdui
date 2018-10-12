import React from 'react';
import { Button, Form, Col, FormGroup, Label, Input } from 'reactstrap';

const AddRole = () => (
  <div className="add-roll">
    <div className="add-roll-title">
      <h4>Add Role</h4>
    </div>
    <Form className="form file-drop">        
      <Col>
        <FormGroup>
          <Label>Role Name: </Label>
          <Input
            type="email"
            name="email"
            id="exampleEmail"
            placeholder="Enter role name"
          />
        </FormGroup>
      </Col>
      <Col>
        <FormGroup>
          <Label for="examplePassword">Role Descriptions: </Label>
          <Input
            type="password"
            name="password"
            id="examplePassword"
            placeholder="Enter role descriptions"
          />
        </FormGroup>
      </Col>
      <Button>Create Role</Button>
    </Form>
  </div>
);

export default AddRole;