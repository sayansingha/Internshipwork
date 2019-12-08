import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

import Navbar from './components/nav'
import Table from './components/table'
import Pagination from './components/pagination'
import Graph from './components/graph'
function App() {
  return (
    <div>
      <div>
        <Navbar />
      </div>
      <div>
        <h3>Camera Analysis</h3>
        <Graph />
      </div>
      <div>
        <h3>User List</h3>
        <Table />
      </div>
      <div>
        <Pagination />
      </div>
    </div>
  );
}

export default App;
