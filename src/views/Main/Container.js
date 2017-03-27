import React, { PropTypes as T } from 'react'
import { Jumbotron } from 'react-bootstrap'
import styles from './styles.module.css'
import List from './Home/List'
import Details from './Home/Details'

export class Container extends React.Component {
  static contextTypes = {
    router: T.object
  }

//  constructor() {
//    this.handleDetails = this.handleDetails.bind(this)
//  }
//
//  handleDetails(e) {
//    e.preventDefault()
//    this.setState({
//      showDetails: false
//    })
//  }

  render() {
    let children = null;
    if (this.props.children) {
      children = React.cloneElement(this.props.children, {
        auth: this.props.route.auth //sends auth instance to children
      })
    }

    return (
      <div>
        <Jumbotron>
          <h2 className={styles.mainTitle}>
            <img src="https://cdn.auth0.com/styleguide/1.0.0/img/badge.svg" />
          </h2>
          { children }
        </Jumbotron>
          <div className="container">
            { this.props.location.pathname === "/home" &&
              <List userId={this.props.route.auth.getProfile().user_id.split('|')[1]} />
            }
            { this.props.location.pathname.replace(/^\//, '').startsWith("home/details/") &&
              <Details productId={this.props.location.pathname.split('/')[2]} />
            }
          </div>
      </div>
    )
  }
}

export default Container;
