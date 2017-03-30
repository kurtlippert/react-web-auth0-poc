import React, { PropTypes } from 'react'
import { ListGroup, ListGroupItem } from 'react-bootstrap'

const Details = ({ potatoes }) =>
    <div>
        { potatoes.map(potato => 
            <div key={ potato.id }>
                <h2>{ potato.name }</h2>
                <ListGroup>
                    <ListGroupItem>{ potato.description }</ListGroupItem>
                    <ListGroupItem>Was created: { potato.created_at }</ListGroupItem>
                    <ListGroupItem>Was last modified: { potato.modified_at }</ListGroupItem>
                </ListGroup>
            </div>
        )}
    </div>

export default Details;