import React, { PropTypes } from 'react'
import { Link } from 'react-router'
import { Table, Button } from 'react-bootstrap'

const List = ({ potatoes }) =>
    <Table condensed>
        <thead>
            <tr>
                <th>Product ID</th>
                <th>Product Name</th>
                <th>Product Price</th>
                <th></th>
            </tr>
        </thead>
        <tbody>
            { potatoes.map(potato =>
                <tr key={potato.id}>
                    <td>{potato.id}</td>
                    <td>{potato.name}</td>
                    <td>{potato.price}</td>
                    <td>
                        <Button>
                            <Link to={`home/details/${potato.id}`}>Details</Link>
                        </Button>
                    </td>
                </tr>
            )}
        </tbody>
    </Table>

List.propTypes = {
    potatoes: PropTypes.array.isRequired 
}

export default List;