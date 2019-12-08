import React from 'react'
import { Table,ButtonToolbar,Button,Dropdown } from 'react-bootstrap'
function table() {
    return (
        <div>
            <Table striped bordered hover>
  <thead>
    <tr>
      <th>Camera id</th>
      <th>Officer Name</th>
      <th>Address</th>
      <th>Attendance</th>
      <th>Status</th>
      <th>Action</th>
    </tr>
  </thead>
  <tbody>
    
    <tr>
      <td>LPR-1478645LO</td>
      <td>John Doe</td>
      <td>Bangalore</td>
      <td>71%</td>
      <td>@mdo</td>
      <td>
        <ButtonToolbar>
          <Button variant="primary">View More</Button>
          <Button variant="danger">Watch Live</Button>
        
        <Dropdown>
          <Dropdown.Toggle variant="secondary" id="dropdown-basic">
          More
          </Dropdown.Toggle>
        
          <Dropdown.Menu>
            <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
            <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
            <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
          </Dropdown.Menu>
        </Dropdown>
        </ButtonToolbar>
      </td>
    </tr>
    <tr>
      <td>LPR-1478645LO</td>
      <td>John Doe</td>
      <td>Bangalore</td>
      <td>71%</td>
      <td>@mdo</td>
      <td>
        <ButtonToolbar>
          <Button variant="primary">View More</Button>
          <Button variant="danger">Watch Live</Button>
        
        <Dropdown>
          <Dropdown.Toggle variant="secondary" id="dropdown-basic">
          More
          </Dropdown.Toggle>
        
          <Dropdown.Menu>
            <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
            <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
            <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
          </Dropdown.Menu>
        </Dropdown>
        </ButtonToolbar>
      </td>
    </tr>
    <tr>
      <td>LPR-1478645LO</td>
      <td>John Doe</td>
      <td>Bangalore</td>
      <td>71%</td>
      <td>@mdo</td>
      <td>
        <ButtonToolbar>
          <Button variant="primary">View More</Button>
          <Button variant="danger">Watch Live</Button>
        
        <Dropdown>
          <Dropdown.Toggle variant="secondary" id="dropdown-basic">
          More
          </Dropdown.Toggle>
        
          <Dropdown.Menu>
            <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
            <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
            <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
          </Dropdown.Menu>
        </Dropdown>
        </ButtonToolbar>
      </td>
    </tr>
    <tr>
      <td>LPR-1478645LO</td>
      <td>John Doe</td>
      <td>Bangalore</td>
      <td>71%</td>
      <td>@mdo</td>
      <td>
        <ButtonToolbar>
          <Button variant="primary">View More</Button>
          <Button variant="danger">Watch Live</Button>
        
        <Dropdown>
          <Dropdown.Toggle variant="secondary" id="dropdown-basic">
          More
          </Dropdown.Toggle>
        
          <Dropdown.Menu>
            <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
            <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
            <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
          </Dropdown.Menu>
        </Dropdown>
        </ButtonToolbar>
      </td>
    </tr>
  </tbody>
</Table>
        </div>
    )
}

export default table;