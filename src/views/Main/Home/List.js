import React, { PropTypes } from 'react'
import { Table, Button } from 'react-bootstrap'

// User data fetched via api
const content = (userId) =>
    [
        {
            id: '1',
            name: 'Warcraft',
            price: 50
        },
        {
            id: '2',
            name: 'Minecraft',
            price: 20
        },
        {
            id: '3',
            name: 'TwoWorlds',
            price: 5
        }
    ]
    .map(item => 
        <tr>
            <td>{item.id}</td>
            <td>{item.name}</td>
            <td>{item.price}</td>
            <td>
                <Button>Details</Button>
            </td>
        </tr>)

const List = ({ userId }) =>
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
            { content(userId) }
        </tbody>
    </Table>

List.propTypes = {
    userId: PropTypes.string.isRequired 
}

export default List;