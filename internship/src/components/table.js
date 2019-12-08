import React from 'react'
import { Table,ButtonToolbar,Button,Dropdown } from 'react-bootstrap'
import ShortGraph from './shortgraph'
import Graph from './graph'
class TabularData extends React.Component {
    constructor() {
      super();
      this.state = {container1: false};
    }
    componentDidMount(){
      
      this.setState({container1: true})
      
    }
    render() {
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
                    <td>1</td>
                    <td>John Doe</td>
                    <td>Bangalore</td>
                    <td>71%</td>
                    <td>
                      {/* <Graph /> */}
                      <div id="container-1"></div>
                      
                      {this.state.container1 && <ShortGraph container={`container-1`}/>}
                    </td>
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
                    <td>2</td>
                    <td>John Doe</td>
                    <td>Bangalore</td>
                    <td>71%</td>
                    <td>
                     <div id="container-2"></div>
                    <ShortGraph container={`container-2`}/> 
                    </td>
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
                  <td>3</td>
                  <td>John Doe</td>
                  <td>Bangalore</td>
                  <td>71%</td>
                  <td>
                  <div id="container-3"></div>
                  <ShortGraph container={`container-3`}/>
                  </td>
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
                  <td>4</td>
                  <td>John Doe</td>
                  <td>Bangalore</td>
                  <td>71%</td>
                  <td>
                  <div id="container-4"></div>
                  <ShortGraph container={`container-4`}/>
                  </td>
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
  }

export default TabularData;