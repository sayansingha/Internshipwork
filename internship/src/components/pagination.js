import React from 'react'
import { Pagination,Button } from 'react-bootstrap'

function pagination() {
    return (
        <div>
            <Pagination>
  
            <Pagination.Prev />
            <Pagination.Item active>{1}</Pagination.Item>
            <Pagination.Item>{2}</Pagination.Item>
            <Pagination.Item>{3}</Pagination.Item>
            <Pagination.Item>{4}</Pagination.Item>
            <Pagination.Item>{5}</Pagination.Item>
            <Pagination.Next />
            
            </Pagination>

            

            <Button variant="secondary" className="float-right">Prev Page</Button>
            <Button variant="secondary" className="float-right">Next Page</Button>

            
        </div>
    )
}
export default pagination;